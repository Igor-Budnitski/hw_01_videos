import {Request, Response, Router} from "express";
import {db} from "../../db/in-memory.db";
import {Videos} from '../types/videos';
import {VideoInputDto} from "../dto/video.input.dto";
import {HttpStatus} from "../../core/types/HttpStatuses";
import {createErrorMessages} from "../../core/utils/error.utils";
import {validateVideoInputDto} from "../validation/videos-input-dto.validation";


export const videosRouter = Router({});

videosRouter
    .get('', (req: Request, res: Response) => {
        res.send(db.videos);
    })
    .get('/:id', (req: Request<{ id: string }>, res: Response) => {
        const video = db.videos.find((v) => v.id === +req.params.id);
        if (!video) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorMessages([{field: 'id', message: 'Video not found'}]),
                )
            return;
        }

        res.status(HttpStatus.Ok).send(video);

    })
    .post('', (req: Request, res: Response) => {
        const minAge = null;
        const errors = validateVideoInputDto(req.body);

        if (errors.length > 0) {
            res.status(HttpStatus.BadRequest).send(createErrorMessages(errors));
            return;
        }

        const newVideo: Videos = {
            id: db.videos.length + 1,
            title: req.body.title,
            author: req.body.author,
            canBeDownloaded: req.body.canBeDownloaded ?? false,
            minAgeRestriction: req.body.minAgeRestriction ?? null,
            createdAt: new Date(),
            publicationDate: new Date(),
            availableResolutions: req.body.availableResolutions
        }

        db.videos.push(newVideo);
        res.status(HttpStatus.Created).send(newVideo);
    })
    .delete('', (req: Request, res: Response) => {
        db.videos.splice(0, db.videos.length);
        res.status(HttpStatus.NoContent).send([{message: 'All data deleted'}])
    })