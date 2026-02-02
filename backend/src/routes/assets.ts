import express from "express";
import { prisma } from "../prisma";
import { auth } from "../middleware/auth";

const router = express.Router();

router.use(auth);

// create asset
router.post("/", async (req, res) => {
  const { name, type } = req.body;
  if (!name || !type) {
    return res.status(400).json({ error: "name and type required" });
  }

  const asset = await prisma.asset.create({
    data: { name, type }
  });

  res.json(asset);
});

// list assets
router.get("/", async (req, res) => {
  const assets = await prisma.asset.findMany();
  res.json(assets);
});

export default router;
