import {Request, Response, Router} from "express";
import {db} from "../../db/in-memory.db";
import {Videos} from '../types/videos';
import {VideoInputDto} from "../dto/video.input.dto";
import {HttpStatus} from "../../core/types/HttpStatuses";
import {createErrorMessages} from "../../core/utils/error.utils";


export const videosRouter = Router({});

videosRouter
    .get('',(req: Request, res: Response)=> {
        res.send(db.videos);
    })
    .get('/:id', (req: Request<{id: string}>, res: Response)=> {
        const video = db.videos.find((v) => v.id === +req.params.id);
        if (!video){
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorMessages([{ field: 'id', message: 'Video not found'}]),
                )
            return;
        }

        res.status(HttpStatus.Ok).send(video);

    })