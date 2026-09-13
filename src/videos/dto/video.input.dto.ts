import {Resolution} from "../types/videos";

export type VideoInputDto = {
    id: string,
    title: string,
    author: string,
    canBeDownloaded: boolean,
    minAgeRestriction: number,
    createdAt: Date,
    publicationDate: Date,
    availableResolutions: Resolution[]

}