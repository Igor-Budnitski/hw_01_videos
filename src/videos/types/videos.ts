export type Videos = {
    "id": number,
    "title": string,
    "author": string,
    "canBeDownloaded": boolean,
    "minAgeRestriction": number,
    "createdAt": Date,
    "publicationDate": Date,
    "availableResolutions": string[]
}