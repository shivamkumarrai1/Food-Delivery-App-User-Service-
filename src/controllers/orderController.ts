import axios from "axios";
import { Request, Response } from "express";

export const placeOrder = async (req: Request, res: Response) => {
    try {
        const response = await axios.post("http://localhost:3000/orders", req.body);
        return res.status(201).json(response.data);
    } catch (error) {
        console.error("Error placing order:", error);
        return res.status(500).json({ message: "Failed to place order" });
    }
};
