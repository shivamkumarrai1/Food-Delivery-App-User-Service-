import express from "express";
import userRoutes from "./routes/userRoutes";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Enable if services are running on different ports
app.use(express.json()); // Parse JSON request bodies

// Health Check
app.get("/healthy", (_req, res) => {
    res.send("User Service is healthy");
});

// User-related routes
app.use("/users", userRoutes);

// Global error handler (optional but helpful)
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ message: "Something went wrong" });
});

export default app;

