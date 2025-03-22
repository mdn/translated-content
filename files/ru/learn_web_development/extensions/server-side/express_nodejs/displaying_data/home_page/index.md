---
title: Home page
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

Первой создаваемой страницей будет главная страница сайта, доступная из корня сайта (`/`) или из каталога (`catalog/`). На странице будет виден статический текст с описанием и динамически вычисляемые "количества" записей разных типов, имеющиеся в базе данных.

Мы уже создали маршрут для главной страницы. теперь необходимо обновить функции контроллера, чтобы он получал количество записей из базы данных и создавал представление (шаблон), который можно использовать для отображения страницы.

> [!NOTE]
> Мы будем использовать Mongoose для получения информации из базы данных.
> Поэтому перед продолжением чтения может быть полезным ознакомится с [Учебником по Mongoose](/ru/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose#учебник_по_mongoose).

## Маршрут

Мы создали маршруты главной страницы в [предыдущем разделе](/ru/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes). Напомним, все функции маршрутов определены в файле **/routes/catalog.js**:

```js
// Получение главной страницы каталога.
router.get("/", book_controller.index); // Фактически происходит сопоставление с /catalog/, потому что мы импортируем маршрут с префиксом /catalog
```

Главная функция контроллера книг передаваемая в качестве параметра (`book_controller.index`) имеет реализацию-«заглушку» в **/controllers/bookController.js**:

```js
exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Именно эту функцию контроллера мы расширим, чтобы получать информацию из моделей и затем отображать её, используя шаблон.

## Контроллер

Главная функция контроллера должна получать информацию о количестве книг (`Book`), экземпляров книг (`BookInstance`), их доступности, сколько авторов (`Author`) и жанров (`Genre`) имеется в базе. Потом эти данные должны попадать в шаблон для возможности отображения в виде HTML-страницы, которая будет отправлена в HTTP-ответе.

Откройте файл **/controllers/bookController.js**. Почти в самом начале вы должны увидеть экспортируемую функцию `index()` .

```js
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
});
```

Замените весь код, показанный выше, на следующий фрагмент кода. Первое, что он делает — импортирует (`require()`) все модели. Это требуется для подсчёта количество записей.
Также происходит импорт библиотеки `express-async-handler`, которая предоставляет возможность обработки исключений, возникающих в обработчиках маршрутов.

```js
const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  // Получаем информацию о количестве книг, экземпляров книг, авторов и жанров (параллельно)
  const [
    numBooks,
    numBookInstances,
    numAvailableBookInstances,
    numAuthors,
    numGenres,
  ] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: "Available" }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});
```

Мы используем метод [`countDocuments()`](<https://mongoosejs.com/docs/api/model.html#Model.countDocuments()>) для получения количества экземпляров каждой модели.
Этот метод вызывается у модели (можно также передавать дополнительные условия) и возвращает объект `Query`.
Запрос может быть выполнен с помощью метода [`exec()`](https://mongoosejs.com/docs/api/query.html#Query.prototype.exec), который возвращает `Promise`, который будет содержать результат или будет отклонён в случае ошибки.

Поскольку запросы количества записей независимы друг от друга мы используем [`Promise.all()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) для их параллельного запуска.
Этот метод возвращает новое обещание, выполнение которого мы [`ожидаем`](/ru/docs/Web/JavaScript/Reference/Operators/await) (выполнение приостанавливается внутри _этой функции_ на ключевом слове `await`).
Когда все запросы будут выполнены, то возвращаемое методом `all()` обещание будет заполнено результатом и продолжится выполнение функции.

После этого мы вызываем [`res.render()`](https://expressjs.com/en/4x/api.html#res.render), указывая шаблон с именем '**index**' и объектом, который содержит результаты выполнения запросов к базе данных. Этот объект представляет собой набор пар «ключ-значение» для того, чтобы в шаблоне можно было обращаться к значениям по этим ключам.

Обратите внимание, что код очень простой, потому что мы рассчитываем, что запросы к базе данных будут выполнены успешно.
Если какая-либо операция будет неуспешна, то возникающее исключение будет перехвачено `asyncHandler()` и передано в следующий слой в цепочке обработчиков.

## Представление

Откройте файл **/views/index.pug** и замените его содержимое на следующий код.

```pug
extends layout

block content
  h1= title
  p Welcome to #[em LocalLibrary], a very basic Express website developed as a tutorial example on the Mozilla Developer Network.

  h1 Dynamic content

  p The library has the following record counts:

  ul
    li #[strong Books:] !{book_count}
    li #[strong Copies:] !{book_instance_count}
    li #[strong Copies available:] !{book_instance_available_count}
    li #[strong Authors:] !{author_count}
    li #[strong Genres:] !{genre_count}
```

Представление довольно понятное. Мы расширили базовый шаблон **layout.pug**, переписали `block` с именем '**content**'. Первый заголовок `h1` будет содержать экранированное содержимое переменной `title`, которая передаётся в функцию `render()`. Далее следует краткое описание нашего сайта.

Под заголовком _Dynamic content_ мы выводим данные о количестве записей в каждой модели.
Обратите внимание, что значения в шаблоне — это ключи из объекта, который мы передали в функцию `render()`.

> [!NOTE]
> Мы не экранируем значения счётчиков (то есть мы используем синтаксис `!{}`) потому что эти значения рассчитываются системой. Если же информация поступает от пользователей, то мы должны экранировать переменные.

## Как это будет выглядеть?

Теперь мы сделали всё, что необходимо для отображения главной страницы. Запустим приложение и откроем в браузере `http://localhost:3000/`. Если всё сделано правильно, то сайт будет выглядеть примерно так, как показано на скриншоте.

![Главная страница - Сайт LocalLibrary](locallibary_express_home.png)

> [!NOTE]
> Вы пока не сможете использовать ссылки в боковой панели, потому что это ещё не реализовано. Если вы попробуете, то получите ошибки вида «NOT IMPLEMENTED: Book list».

## Следующие шаги

- Вернуться к [Учебник Express часть 5: Отображение данных библиотеки](/ru/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Продолжить обучение (дополнительная статья к части 5): [Страница списка книг](/ru/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
