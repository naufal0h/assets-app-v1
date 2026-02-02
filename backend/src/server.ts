import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth";
import assetRoutes from "./routes/assets";
import invoiceRoutes from "./routes/invoices";

const app = express();
import path from "path";
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
const PORT = 4000;

app.use(cors()); // ⭐ THIS FIXES THE ERROR
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/invoices", invoiceRoutes);

app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

app.listen(PORT, () => {
  console.log("Server started on http://localhost:" + PORT);
});
