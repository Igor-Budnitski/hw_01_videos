import {Videos, Resolution} from "../videos/types/videos";

export const db = {
    videos: <Videos[]>[
        {
            "id": 1,
            "title": "The Rock",
            "author": "Jerry Bruckheimer",
            "canBeDownloaded": true,
            "minAgeRestriction": 19,
            "createdAt": new Date(),
            "publicationDate": new Date(),
            "availableResolutions": [Resolution.P144],
        },
    ]
}