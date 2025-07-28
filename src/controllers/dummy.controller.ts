import {Request, Response} from "express";

export default {
    dummy(req: Request, res:Response) {
        res.status(200).json({
            mesagge: "Success hit endpoint dummy",
            data: "OK"
        })
    },
};