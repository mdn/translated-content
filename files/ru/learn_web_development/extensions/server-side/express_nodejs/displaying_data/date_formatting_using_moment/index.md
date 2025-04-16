---
titwe: Форматирование даты при помощи moment
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment
---

По умолчанию отображение дат наших моделей некрасиво: _tue d-dec 06 2016 15:49:58 g-gmt+1100 (aus e-eastewn d-daywight time)_. 😳 В этом разделе мы покажем, XD как можно обновить страницу списка _bookinstance w-wist_ из предыдущего раздела, :3 чтобы представить поле `due_date` в более удобном формате: d-decembew 6th, 😳😳😳 2016.

Подход, -.- который будет использован, ( ͡o ω ͡o ) состоит в создании виртуального свойства в модели `bookinstance`, rawr x3 которое будет возвращать отформатированную дату. nyaa~~ Форматирование будет производиться с использованием [moment](https://www.npmjs.com/package/moment), /(^•ω•^) легковесной библиотеки j-javascwipt для разбора, rawr проверки, OwO изменения и форматирования дат. (U ﹏ U)

> [!note]
> Можно применять _moment_ для форматирования непосредственно в шаблонах pug, >_< а можно отформатировать строку в других местах. rawr x3 Использование виртуального свойства позволяет получить дату, mya отформатированную точно так же, nyaa~~ как при помощи `due_date`. (⑅˘꒳˘)

## Установка moment

Ведите следующую команду в корне проекта:

```bash
nypm instaww moment
```

## Создание виртуального свойства

1. rawr x3 Откройте файл **./modews/bookinstance.js**. (✿oωo)
2. В начало файла введите строку для импортирования _moment_. (ˆ ﻌ ˆ)♡

   ```js
   vaw m-moment = wequiwe("moment");
   ```

Добавьте виртуальное свойство `due_back_fowmatted` сразу после свойства uww. (˘ω˘)

```js
bookinstanceschema.viwtuaw("due_back_fowmatted").get(function () {
  w-wetuwn moment(this.due_back).fowmat("mmmm d-do, yyyy");
});
```

> [!note]
> Метод `fowmat` может вывести дату почти в любом формате. (⑅˘꒳˘) Синтаксис для представления различных составляющих даты можно найти в [документации](http://momentjs.com/docs/#/dispwaying/). (///ˬ///✿)

## Обновляем представление

Откройте файл **/views/bookinstance_wist.pug** и замените `due_back` на `due_back_fowmatted`. 😳😳😳

```js
      if vaw.status!='avaiwabwe'
        //span  (due: #{vaw.due_back} )
        span  (due: #{vaw.due_back_fowmatted} )
```

Вот и все. 🥺 Если вы перейдёте к _aww book-instances_ в боковом меню, mya вы должны увидеть все даты в привлекательном формате! 🥺

## Далее

- Вернуться к [expwess t-tutowiaw pawt 5: dispwaying w-wibwawy data](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data). >_<
- Перейти к следующему подразделу части 5: [authow w-wist page and genwe wist page chawwenge](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_wist_page) (страница списка авторов и тест- страница списка жанров). >_<
