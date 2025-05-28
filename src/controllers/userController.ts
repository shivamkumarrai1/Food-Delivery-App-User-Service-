import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";
export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        return res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


