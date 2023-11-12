---
title: Home page
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
---

Первой создаваемой страницей будет домашняя страница веб-сайта, доступная из корня сайта (`'/'`) или из каталога (`catalog/`). На странице будет виден статический текст, описывающий сайт, и динамически вычисляемые "количества" записей разных типов имеющихся в БД.

Маршрут для домашней страницы уже создан. Для завершения страницы обновить функции контроллера, чтобы он извлекал количество записей из БД, и создавал представление (шаблон), который можно использовать для презентации страницы.

## Маршрут

Маршруты индексной страницы созданы ранее в предыдущем разделе ([previous tutorial).](/ru/docs/Learn/Server-side/Express_Nodejs/routes) Напомним, все функции маршрутов определены в файле **/routes/catalog.js**:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

Параметр колбэк-функции определён в **/controllers/bookController.js**:

```js
exports.index = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

Именно эту функцию контроллера мы расширим, чтобы получать информацию из моделей и затем отображать её, используя шаблоны (представления).

## Контроллер

Функция контроллера индекса должна получать информацию о том, сколько книг (`Book)`, экземпляров книг (`BookInstance)`, сколько из них доступно, сколько авторов (`Author)`, жанров (`Genre)` имеется в БД, должна поместить эту информацию в шаблон, чтобы создать HTML-страницу, после чего вернуть её в HTTP-ответе.

> **Примечание:** Количество экземпляров в каждой модели вычисляется при помощи метода [`countDocuments()`](http://mongoosejs.com/docs/api.html#model_Model.countDocuments) . Он вызывается для модели с возможным набором условий, необходимых для проверки соответствия первому аргументу и колбэк-функции второго аргумента (обсуждалось ранее в "Использование базы данных с Mongoose" [Using a Database (with Mongoose)](/ru/docs/Learn/Server-side/Express_Nodejs/mongoose)), причём можно вернуть также запрос `Query,` а затем выполнить его позже при помощи callback. Эта колбэк-функция будет выполняться, когда БД вернёт количество записей. Значение ошибки (or `null`) будет первым параметром, а количество записей (или null, если была ошибка) - вторым параметром.
>
> ```js
> SomeModel.countDocuments(
>   { a_model_field: "match_value" },
>   function (err, count) {
>     // ... do something if there is an err
>     // ... do something with the count if there was no error
>   },
> );
> ```

Откройте файл **/controllers/bookController.js**. Почти в самом начале вы должны увидеть экспортируемую функцию `index()` .

```python
var Book = require('../models/book')

exports.index = function(req, res, next) {
 res.send('NOT IMPLEMENTED: Site Home Page');
}
```

Замените весь код, показанный выше, на следующий фрагмент кода. Первое, что он делает - импортирует (`require()`) все модели (выделено жирным). Это требуется, поскольку они нужны для подсчёта числа записей. Затем импортируется модуль _async_ .

```js
var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");
var BookInstance = require("../models/bookinstance");

var async = require("async");

exports.index = function (req, res) {
  async.parallel(
    {
      book_count: function (callback) {
        Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        // countDocuments не работает, работает только просто count
      },
      book_instance_count: function (callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count: function (callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count: function (callback) {
        Author.countDocuments({}, callback);
      },
      genre_count: function (callback) {
        Genre.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    },
  );
};
```

Метод `async.parallel()` передаёт объект с функциями для получения количества элементов каждой модели. Все эти функции стартуют одновременно. Когда все они завершатся, будет вызвана финальная колбэк-функция, в итоговом параметре которой содержится нужный нам результат (или ошибка).

При успешном завершении колбэк-функции она вызывает [`res.render()`](http://expressjs.com/en/4x/api.html#res.render), у которой в качестве параметров - представление (шаблон) '**index**' и объект, содержащий данные, которые следует поместить в шаблон (среди них - количества элементов в моделях). Данные представлены как пары ключ-значение, и могут быть получены в шаблоне по ключу.

> **Примечание:** В данном случае колбэк-функция, которую вызывает `async.parallel()` , несколько необычная - страница отображается всегда, независимо от того, была ошибка или нет (обычно используют отдельный путь выполнения для обработки выводимых ошибок).

## Представление

Откройте файл **/views/index.pug** и замените его содержимое текстом, приведённым ниже

```js
extends layout

block content
  h1= title
  p Welcome to #[em LocalLibrary], a very basic Express website developed as a tutorial example on the Mozilla Developer Network.

  h1 Dynamic content

  if error
    p Error getting dynamic content.
  else
    p The library has the following record counts:

    ul
      li #[strong Books:] !{data.book_count}
      li #[strong Copies:] !{data.book_instance_count}
      li #[strong Copies available:] !{data.book_instance_available_count}
      li #[strong Authors:] !{data.author_count}
      li #[strong Genres:] !{data.genre_count}
```

Представление несложное. Мы расширили базовый шаблон **layout.pug**, переопределив блок (`block)` с именем '**content**'. Первый заголовок `h1` будет экранированным текстом - значением переменной `title` ,variable that которая передаётся в функцию `render()` —заметьте, что применение '`h1=`' говорит, что следующий текст рассматривается как выражение JavaScript. Затем расположен параграф, знакомящий с LocalLibrary.

Под заголовком _Dynamic content_ мы проверяем, определена ли переданная из функции `render()` переменная error. Если да, отмечаем ошибку. Если нет, выводим ( как список) количества копий каждой модели, которые хранятся в переменной `data`.

> **Примечание:** Мы не экранируем количества элементов (т.е. используется синтаксис `!{}` ) потому что эти значения вычисляются. Если бы информация предоставлялась конечным пользователем, следовало бы экранировать переменную перед выводом.

## Как это выглядит?

Сейчас у нас есть все для того, чтобы показать страницу index. Запустите приложение и откройте браузер с адресом <http://localhost:3000/>. Если все задано правильно, ваш сайт должен иметь примерно такой вид, как на приведённом снимке экрана.

![Home page - Express Local Library site](locallibary_express_home.png)

> **Примечание:** Элементы бокового меню использовать ещё нельзя, так как адреса, представления и шаблоны для этих страниц ещё не определены. Если вы попытаетесь их использовать, будет выведено сообщение об ошибке, например, вида "NOT IMPLEMENTED: Book list" (НЕ РЕАЛИЗОВАНО: список книг), в зависимости от выбранного элемента меню. Эти строковые литералы (которые будут замещены действительными данными) были заданы в различных файлах контроллеров в каталоге "controllers".

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Book list page](/ru/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page).
