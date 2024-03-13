---
title: "Учебник Express часть 5: Отображение данных библиотеки"
slug: Learn/Server-side/Express_Nodejs/Displaying_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Теперь мы готовы добавить страницы, на которых будут отображаться книги веб-сайта [LocalLibrary](/ru/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) и другие данные. Страницы будут включать главную страницу, которая показывает сколько записей определённого типа мы имеем и отдельные страницы для детального просмотра записей. Попутно мы приобретём практический опыт в получении записей из баз данных и использовании шаблонов.

| Предварительные знания: | Завершите изучение предыдущих тем учебника (включая [Учебник Express часть 4: Маршруты и контроллеры](/ru/docs/Learn/Server-side/Express_Nodejs/routes)). |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                   | Понять, как использовать асинхронный модуль и язык шаблона Pug, и как получить данные из URL в наших функциях контроллера.                                |

## Обзор

В предыдущих статьях учебника мы определили [Mongoose модели](/ru/docs/Learn/Server-side/Express_Nodejs/mongoose), которые можно использовать для взаимодействия с базой данных и создания некоторых исходных записей библиотеки. Затем мы [создали все маршруты](/ru/docs/Learn/Server-side/Express_Nodejs/routes), необходимые для веб-сайта LocalLibrary, но с "фиктивными" функциями контроллеров (это скелетные функции, которые просто возвращают сообщение "не реализовано " при доступе к странице).

Следующим шагом является обеспечение правильных реализаций для страниц, которые отображают информацию из библиотеки (мы рассмотрим реализацию страниц с формами для создания, обновления или удаления информации в последующих статьях). Это включает в себя обновление функций контроллера для извлечения записей с помощью наших моделей и определение шаблонов для отображения этой информации пользователям.

Мы начнём с обзорных / основных тем, объясняющих, как управлять асинхронными операциями в функциях контроллера и как писать шаблоны с помощью Pug. Затем мы предоставим реализации для каждой из наших основных страниц" только для чтения " с кратким объяснением любых специальных или новых функций, которые они используют.

В конце этой статьи вы должны иметь хорошее сквозное понимание того, как маршруты, асинхронные функции, представления и модели работают на практике.

## Отображение данных библиотеки — подразделы

Следующие подразделы проходят процесс добавления различных функций, необходимых для отображения необходимых страниц веб-сайта. Вы должны прочитать и проработать каждый из них по очереди, прежде чем перейти к следующему.

1. [Асинхронное управление потоками с помощью async](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async)
2. [Пример шаблона](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
3. [Базовые шаблоны LocalLibrary](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
4. [Домашняя страница](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
5. [Страница списка книг](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
6. [Страница списка экземпляров книг](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
7. [Форматирование даты с момента использования](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
8. [Страница списка авторов и страница списка жанров](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
9. [Страница сведений о жанре](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
10. [Страница сведений о книге](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
11. [Страница информации об авторе](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
12. [Страница сведений об экземпляре книги и вызове](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Итог

Теперь мы создали все страницы "только для чтения " для нашего сайта: домашнюю страницу, которая отображает количество экземпляров каждой из наших моделей, а также список и подробные страницы для наших книг, экземпляров книг, авторов и жанров. По пути мы получили много фундаментальных знаний о контроллерах, управлении потоком при использовании асинхронных операций, создании представлений с помощью Pug, запросе базы данных с помощью наших моделей, как передавать информацию в шаблон из вашего представления, а также как создавать и расширять шаблоны. Те, кто выполнил вызов также узнали немного о дате обработки с помощью момента.

В нашей следующей статье мы будем опираться на наши знания, создавая HTML-формы и код обработки форм, чтобы начать изменять данные, хранящиеся на сайте.

## Смотрите также

- [Асинхронный модуль](http://caolan.github.io/async/docs.html) (Асинхронные документация)
- [Использование механизмов шаблонов с Express](https://expressjs.com/en/guide/using-template-engines.html) (Express документация)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug документация)
- [Moment](http://momentjs.com/docs/) (Moment документация)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

## In this module

- [Express/Node introduction](/ru/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Setting up a Node (Express) development environment](/ru/docs/Learn/Server-side/Express_Nodejs/development_environment)
- [Express Tutorial: The Local Library website](/ru/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
- [Express Tutorial Part 2: Creating a skeleton website](/ru/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
- [Express Tutorial Part 3: Using a Database (with Mongoose)](/ru/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [Express Tutorial Part 4: Routes and controllers](/ru/docs/Learn/Server-side/Express_Nodejs/routes)
- [Express Tutorial Part 5: Displaying library data](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- [Express Tutorial Part 6: Working with forms](/ru/docs/Learn/Server-side/Express_Nodejs/forms)
- [Express Tutorial Part 7: Deploying to production](/ru/docs/Learn/Server-side/Express_Nodejs/deployment)
