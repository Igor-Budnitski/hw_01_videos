import {VideoInputDto} from "../dto/video.input.dto";
import {Resolution} from "../types/videos";
import {ValidationError} from "../../core/types/validation-error";

//const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Строка считается некорректной, если это не строка или её длина (после trim)
// выходит за границы [min, max]. Вынесено отдельно, чтобы не дублировать проверку.
const isInvalidString = (value: unknown, min: number, max: number): boolean =>
    typeof value !== 'string' ||
    value.trim().length < min ||
    value.trim().length > max;

const isValid = (age: number | null): boolean => age === null || (age >= 1 && age <= 18);

// Ручная валидация тела запроса (на этом этапе — без сторонних библиотек).
// Возвращает список ошибок; пустой список означает, что данные корректны.
export const validateVideoInputDto = (data: VideoInputDto,
): ValidationError[] => {
    const errors: ValidationError[] = [];

    if (isInvalidString(data.title, 0, 40)) {
        errors.push({field: 'title', message: 'Title has incorrect length or type'})
    }

    if (isInvalidString(data.author, 0, 20)) {
        errors.push({field: 'author', message: 'Author has incorrect length or type'})
    }

    if (isValid(data.minAgeRestriction)){
        errors.push({field: 'minAgeRestriction', message: 'Incorrect age'})
    }

    if (data.availableResolutions.length < 1){
        errors.push({field: "availableResolutions", message: 'Empty array'})
    }

/*    if (data.canBeDownloaded === null){
        errors.push({field: 'canBeDownloaded', message: 'Null value in canBeDownloaded'})
    }*/

    return errors;
}