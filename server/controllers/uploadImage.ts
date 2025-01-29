import multer from 'multer';
import { APIResponse,  Character } from "../types";
import { Request,Response,NextFunction } from "express";
import { promises as fs } from 'node:fs';
import { imageProcessor } from '../services/image';



export const uploadImage =async (req:Request, res:Response, next:NextFunction) => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded');
        }
        console.log("req.body", req.file.path)
    const character = await imageProcessor.processCharacterImage(req.file.path);
        console.log("image---------character---------",character)
        await fs.unlink(req.file.path);
        console.log("dsfdf")
        res.json({ success: true, data: character } as APIResponse<Character>);
    } catch (error) {
        next(error);
    }
}