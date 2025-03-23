import { UserDto } from "./user.dto";

export const validateUserBody = (body: UserDto) => {
    const {name, surname, gender, offers, phoneService} = body;
    const errors: string[] = [];

    if (!name) {
        errors.push("Ім'я обов'язкове! (Input name має бути 'name')!")
    }

    if (!surname) {
        errors.push("Прізвище обов'язкове! (Input name має бути 'surname')!")
    }

    if (gender !== 'Чоловік' && gender !=='Жінка') {
        errors.push("Стать має бути Чоловік або Жінка! (Input name має бути 'gender', value має бути 'Чоловік' або 'Жінка')!")
    }

    if (!offers) {
        errors.push("Пропозиції обов'язкові! (Input name має бути 'offers')!")
    }

    if (!phoneService) {
        errors.push("Стільникова компанія обов'язкова! (Input name має бути 'phoneService')!")
    }

    return errors;
}