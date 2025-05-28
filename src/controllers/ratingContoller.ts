import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const submitRating = async (req: Request, res: Response) => {
    const { userId, orderId, deliveryAgentId, rating, comment } = req.body;

    try {
        const newRating = await prisma.rating.create({
            data: {
                userId,
                orderId,
                deliveryAgentId,
                rating,
                comment,
            },
        });
        return res.status(201).json(newRating);
    } catch (error) {
        console.error("Error submitting rating:", error);
        return res.status(500).json({ message: "Failed to submit rating" });
    }
};
