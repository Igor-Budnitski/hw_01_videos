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
        {
            "id": 2,
            "title": "Lord of the Rings",
            "author": "Peter Jackson",
            "canBeDownloaded": false,
            "minAgeRestriction": 3,
            "createdAt": new Date(),
            "publicationDate": new Date(),
            "availableResolutions": [Resolution.P240, Resolution.P1080, Resolution.P2160],
        },
        {
            "id": 3,
            "title": "Titanic",
            "author": "James Cameron",
            "canBeDownloaded": true,
            "minAgeRestriction": 14,
            "createdAt": new Date(),
            "publicationDate": new Date(),
            "availableResolutions": [Resolution.P144, Resolution.P1080],
        },
    ]
}