import {Request, Response, Router} from "express";
import {db} from "../../db/in-memory.db";
import {Videos} from '../types/videos';
import {VideoInputDto} from "../dto/video.input.dto";


export const videosRouter = Router({});

videosRouter
    .get('',(req: Request, res: Response)=> {
        res.send(db.videos);
    })
