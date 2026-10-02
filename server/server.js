import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Recall server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Recall server running on http://localhost:${PORT}`);
});
