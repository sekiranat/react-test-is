  /**
 * Конвертирует дату в интервал времени прошедшего с момента комментария
 * @param   {date} datePost дата написания комментария
 * @return  {string}
 */

export const getTimePassed = (datePost) => {
    const convertTimePassed = (new Date().getTime() - new Date(datePost).getTime());

    if (convertTimePassed / 1000 > 60) {
        return Math.ceil(convertTimePassed / 1000 / 60)  + ' минут назад';
    }

    if (convertTimePassed / 1000 > 60 && convertTimePassed / 1000 < 3600 * 24) {
        return Math.ceil(convertTimePassed / 1000 / 60) + ' часов назад';
    }

    if (convertTimePassed / 1000 >= 3600 * 24) {
        return Math.ceil(convertTimePassed / 1000 / 60 / 24) + ' дней назад';
    }

    return 'только что';
}