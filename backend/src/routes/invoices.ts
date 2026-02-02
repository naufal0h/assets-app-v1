import express from "express";
import { prisma } from "../prisma";
import { auth } from "../middleware/auth";
import multer from "multer";
import path from "path";

const router = express.Router();
router.use(auth);

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// list invoices
router.get("/", async (req, res) => {
  const invoices = await prisma.invoice.findMany({
    include: {
      asset: true,
      payment: true
    }
  });

  res.json(invoices);
});

// create invoice
router.post("/", async (req, res) => {
  const { assetId, amount, dueDate } = req.body;

  if (!assetId || !amount || !dueDate) {
    return res.status(400).json({ error: "missing fields" });
  }

  const invoice = await prisma.invoice.create({
    data: {
      assetId,
      amount,
      dueDate: new Date(dueDate)
    }
  });

  res.json(invoice);
});

// upload payment proof
router.post("/:id/pay", upload.single("proof"), async (req, res) => {
  const invoiceId = Number(req.params.id);
  if (!req.file) return res.status(400).json({ error: "file required" });

  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { payment: true }
  });

  if (!invoice) return res.status(404).json({ error: "invoice not found" });
  if (invoice.payment) return res.status(400).json({ error: "already paid" });

  const payment = await prisma.payment.create({
    data: {
      invoiceId,
      proofPath: req.file.path
    }
  });

  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { status: "verifying" }
  });

  res.json(payment);
});

// admin verify payment
router.post("/payment/:id/approve", async (req, res) => {
  const paymentId = Number(req.params.id);

  await prisma.payment.update({
    where: { id: paymentId },
    data: { status: "approved" }
  });

  res.json({ ok: true });
});

export default router;
