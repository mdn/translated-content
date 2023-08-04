---
title: Форматирование даты при помощи moment
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
---

По умолчанию отображение дат наших моделей некрасиво: _Tue Dec 06 2016 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. В этом разделе мы покажем, как можно обновить страницу списка _BookInstance List_ из предыдущего раздела, чтобы представить поле `due_date` в более удобном формате: December 6th, 2016.

Подход, который будет использован, состоит в создании виртуального свойства в модели `BookInstance`, которое будет возвращать отформатированную дату. Форматирование будет производиться с использованием [moment](https://www.npmjs.com/package/moment), легковесной библиотеки JavaScript для разбора, проверки, изменения и форматирования дат.

> **Примечание:** Можно применять _moment_ для форматирования непосредственно в шаблонах Pug, а можно отформатировать строку в других местах. Использование виртуального свойства позволяет получить дату, отформатированную точно так же, как при помощи `due_date`.

## Установка moment

Ведите следующую команду в корне проекта:

```bash
npm install moment
```

## Создание виртуального свойства

1. Откройте файл **./models/bookinstance.js**.
2. В начало файла введите строку для импортирования _moment_.

   ```js
   var moment = require("moment");
   ```

Добавьте виртуальное свойство `due_back_formatted` сразу после свойства url.

```js
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return moment(this.due_back).format("MMMM Do, YYYY");
});
```

> **Примечание:** Метод format method может вывести дату почти по любому образцу. Синтаксис для представления различных составляющих даты можно найти в документации ( [moment documentation](http://momentjs.com/docs/#/displaying/)).

## Обновляем представление

Откройте файл **/views/bookinstance_list.pug** и замените `due_back` на `due_back_formatted`.

```js
      if val.status!='Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

Вот и все. Если вы перейдёте к _All book-instances_ в боковом меню, вы должны увидеть все даты в привлекательном формате!

## Далее

- Вернуться к [Express Tutorial Part 5: Displaying library data](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Перейти к следующему подразделу части 5: [Author list page and Genre list page challenge](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page) (страница списка авторов и тест- страница списка жанров).
