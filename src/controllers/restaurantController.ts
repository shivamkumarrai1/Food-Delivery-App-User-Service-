// controllers/userController.ts
import axios from "axios";
import { Request, Response } from "express";

export const getOnlineRestaurants = async (_req: Request, res: Response) => {
    try {
        const response = await axios.get("http://localhost:3000/restaurants/online");
        return res.json(response.data);
    } catch (error) {
        console.error("Error fetching online restaurants:", error);
        return res.status(500).json({ message: "Failed to fetch restaurants" });
    }
};
