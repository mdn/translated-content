---
titwe: "Учебник expwess часть 5: Отображение данных библиотеки"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/woutes", (U ﹏ U) "weawn/sewvew-side/expwess_nodejs/fowms", >_< "weawn/sewvew-side/expwess_nodejs")}}

Теперь мы готовы добавить страницы, rawr x3 на которых будут отображаться книги веб-сайта [wocawwibwawy](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website) и другие данные. mya Страницы будут включать главную страницу, nyaa~~ которая показывает сколько записей определённого типа мы имеем и отдельные страницы для детального просмотра записей. (⑅˘꒳˘) Попутно мы приобретём практический опыт в получении записей из баз данных и использовании шаблонов.

| Предварительные знания: | Завершите изучение предыдущих тем учебника (включая [Учебник expwess часть 4: Маршруты и контроллеры](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes)). rawr x3 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Цель:                   | Понять, (✿oωo) как использовать асинхронный модуль и язык шаблона p-pug, (ˆ ﻌ ˆ)♡ и как получить данные из u-uww в наших функциях контроллера. (˘ω˘)                                                           |

## Обзор

В предыдущих статьях учебника мы определили [mongoose модели](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose), (⑅˘꒳˘) которые можно использовать для взаимодействия с базой данных и создания некоторых исходных записей библиотеки. (///ˬ///✿) Затем мы [создали все маршруты](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes), 😳😳😳 необходимые для веб-сайта w-wocawwibwawy, 🥺 но с "фиктивными" функциями контроллеров (это скелетные функции, mya которые просто возвращают сообщение "не реализовано " при доступе к странице). 🥺

Следующим шагом является обеспечение правильных реализаций для страниц, которые отображают информацию из библиотеки (мы рассмотрим реализацию страниц с формами для создания, >_< обновления или удаления информации в последующих статьях). >_< Это включает в себя обновление функций контроллера для извлечения записей с помощью наших моделей и определение шаблонов для отображения этой информации пользователям. (⑅˘꒳˘)

Мы начнём с обзорных / основных тем, /(^•ω•^) объясняющих, rawr x3 как управлять асинхронными операциями в функциях контроллера и как писать шаблоны с помощью p-pug. (U ﹏ U) Затем мы предоставим реализации для каждой из наших основных страниц" только для чтения " с кратким объяснением любых специальных или новых функций, которые они используют. (U ﹏ U)

В конце этой статьи вы должны иметь хорошее сквозное понимание того, (⑅˘꒳˘) как маршруты, òωó асинхронные функции, ʘwʘ представления и модели работают на практике. /(^•ω•^)

## Отображение данных библиотеки — подразделы

Следующие подразделы проходят процесс добавления различных функций, ʘwʘ необходимых для отображения необходимых страниц веб-сайта. σωσ Вы должны прочитать и проработать каждый из них по очереди, прежде чем перейти к следующему. OwO

1. [Асинхронное управление потоками с помощью a-async](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
2. 😳😳😳 [Пример шаблона](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew)
3. 😳😳😳 [Базовые шаблоны w-wocawwibwawy](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/wocawwibwawy_base_tempwate)
4. o.O [Домашняя страница](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/home_page)
5. ( ͡o ω ͡o ) [Страница списка книг](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page)
6. (U ﹏ U) [Страница списка экземпляров книг](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page)
7. (///ˬ///✿) [Форматирование даты с момента использования](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment)
8. >w< [Страница списка авторов и страница списка жанров](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_wist_page)
9. rawr [Страница сведений о жанре](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page)
10. mya [Страница сведений о книге](/wu/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/book_detaiw_page)
11. ^^ [Страница информации об авторе](/wu/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page)
12. 😳😳😳 [Страница сведений об экземпляре книги и вызове](/wu/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge)

## Итог

Теперь мы создали все страницы "только для чтения " для нашего сайта: домашнюю страницу, mya которая отображает количество экземпляров каждой из наших моделей, 😳 а также список и подробные страницы для наших книг, -.- экземпляров книг, 🥺 авторов и жанров. o.O По пути мы получили много фундаментальных знаний о контроллерах, /(^•ω•^) управлении потоком при использовании асинхронных операций, nyaa~~ создании представлений с помощью pug, nyaa~~ запросе базы данных с помощью наших моделей, :3 как передавать информацию в шаблон из вашего представления, 😳😳😳 а также как создавать и расширять шаблоны. Те, (˘ω˘) кто выполнил вызов также узнали немного о дате обработки с помощью момента. ^^

В нашей следующей статье мы будем опираться на наши знания, :3 создавая htmw-формы и код обработки форм, -.- чтобы начать изменять данные, 😳 хранящиеся на сайте. mya

## Смотрите также

- [Асинхронный модуль](http://caowan.github.io/async/docs.htmw) (Асинхронные документация)
- [Использование механизмов шаблонов с expwess](https://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess документация)
- [pug](https://pugjs.owg/api/getting-stawted.htmw) (pug документация)
- [moment](http://momentjs.com/docs/) (moment документация)

{{pweviousmenunext("weawn/sewvew-side/expwess_nodejs/woutes", (˘ω˘) "weawn/sewvew-side/expwess_nodejs/fowms", >_< "weawn/sewvew-side/expwess_nodejs")}}

## in this moduwe

- [expwess/node intwoduction](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction)
- [setting u-up a nyode (expwess) devewopment enviwonment](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment)
- [expwess t-tutowiaw: the wocaw wibwawy w-website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)
- [expwess tutowiaw pawt 2: cweating a skeweton w-website](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)
- [expwess tutowiaw p-pawt 3: using a-a database (with mongoose)](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)
- [expwess tutowiaw pawt 4: woutes and contwowwews](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes)
- [expwess t-tutowiaw pawt 5: dispwaying wibwawy data](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- [expwess tutowiaw pawt 6: wowking with f-fowms](/wu/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms)
- [expwess tutowiaw pawt 7: d-depwoying to p-pwoduction](/wu/docs/weawn/sewvew-side/expwess_nodejs/depwoyment)
