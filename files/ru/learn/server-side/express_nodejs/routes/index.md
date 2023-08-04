---
title: "Учебник Express часть 4: Маршруты и контроллеры"
slug: Learn/Server-side/Express_Nodejs/routes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

В этом уроке мы настроим маршруты (код обработки URL) с "фиктивными" функциями-обработчиками для всех конечных точек ресурса, которые нам понадобятся на веб-сайте [LocalLibrary](/ru/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website). По завершении мы получим модульную структуру для нашего кода обработки маршрута, который будет расширен реальными функциями-обработчиками в следующих статьях. У нас также будет хорошее понимание того, как создавать модульные маршруты с помощью Express!

| Предварительные знания: | Прочесть [введение в Express/Node](/ru/docs/Learn/Server-side/Express_Nodejs/Introduction). Завершить предыдущие уроки (включая [Express Tutorial Part 3: Using a Database (with Mongoose)](/ru/docs/Learn/Server-side/Express_Nodejs/mongoose)). |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                   | Понять, как создать простые маршруты. Настроить конечные точки URL.                                                                                                                                                                               |

## Обзор

В [последней статье](/ru/docs/Learn/Server-side/Express_Nodejs/mongoose) мы определили модели _Mongoose_ для взаимодействия с базой данных, и использовали (автономный) скрипт, который создал некоторые исходные записи библиотеки. Теперь можно написать код, чтобы представить эту информацию пользователям. Первое, что нужно сделать, это решить, какие возможности для отображения информации мы хотим иметь на наших страницах, а затем определить соответствующие URL-адреса для получения этих ресурсов. Затем нужно будет создать маршруты (обработчики URL-адресов) и представления (шаблоны) для отображения этих страниц.

Приведённая ниже диаграмма напоминает об основном потоке данных и об элементах, которые необходимо реализовать при обработке HTTP-запроса/ответа. Кроме представлений и маршрутов на диаграмме показаны "контроллеры" - функции, которые отделяют код для маршрутизации запросов от кода, который фактически обрабатывает запросы.

Поскольку модели уже созданы, основные элементы, которые следует создать, таковы:

- "Маршруты" для перенаправления поддерживаемых запросов (и любой закодированной информации в URL-запросах) соответствующим функциям контроллера.
- Контроллеры -функции для получения запрашиваемых данных из моделей, создание HTML страницы, отображающей данные, и возращение их пользователю для просмотра в браузере.
- Представления (шаблоны), используемые контроллерами для отрисовки данных.

![](mvc_express.png)

В итоге, у нас должны быть страницы для вывода списков и детальной информации по книгам, жанрам, авторам и экземплярам книг, а также страницы для создания, обновления и удаления записей. Это много для одной статьи. Поэтому большая часть этой статьи будет сосредоточена на настройке наших маршрутов и контроллеров для возврата "фиктивного" контента. Мы расширим методы контроллеров для работы с данными модели в следующих статьях .

В первом разделе ниже приведён краткие основы того, как использовать промежуточное средство (middleware) Express [Router](http://expressjs.com/en/4x/api.html#router). Эти знания будут использованы в следующих разделах при настройке маршрутов для LocalLibrary.

## Маршруты - основы

Маршруты - это часть кода Express, связывающая HTTP действия (`GET`, `POST`, `PUT`, `DELETE`, etc.), URL пути (шаблона), и функцию, которая обрабатывает этот шаблон.

Есть несколько способов создания маршрутов. В этом уроке мы используем промежуточные запросы `express.Router,` так как они позволяют группировать обработчики маршрутов для определённой части сайта и получать к ним доступ через общий префикс маршрута. Все маршруты, связанные с библиотекой, будут сохранены в модуле "catalog", и если мы добавим маршруты для обработки учётных записей пользователей или других функций, мы сможем сгруппировать их отдельно.

> **Примечание:** Маршруты приложения Express уже кратко рассматривались в [Express Introduction > Creating route handlers](/ru/docs/Learn/Server-side/Express_Nodejs/Introduction#Creating_route_handlers) (Введение -> Создание обработчиков маршрутов). Применение _Router_ обеспечивает лучшую поддержку модульности (как обсуждается в первой подсекции ниже), а в остальном очень похоже на определение маршрутов непосредственно в объекте приложения _Express_.

В оставшейся части этого раздела представлен обзор того, как Router может быть использован для определения маршрутов.

### Определение и использование отдельных модулей маршрутов

Код ниже является реальным примером того, как можно создать модуль маршрута, а затем использовать его в приложении _Express_.

Первым делом в модуле **wiki.js** создадим маршруты для wiki . Код сначала импортирует объект приложения Express, использует его для получения объекта `Router` и затем, применяя метод `get(),` добавляет к объекту пару маршрутов. В завершение модуль экспортирует объект `Router` .

```js
// wiki.js - Wiki route module.

var express = require("express");
var router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> **Примечание:** В примере колбэк-функции обработчиков маршрутов определены непосредственно в функциях роутеров. А в LocalLibrary мы определим эти колбэк-функции в отдельном модуле контроллера.

Чтобы использовать модуль роутера в главном приложении, прежде всего следует выполнить `require()` модуля маршрута (**wiki.js**). Потом вызовем `use()` для приложения Express с аргументом, в котором указан URL-путь 'wiki', что добавит Router к пути обработки промежуточного слоя.

```js
var wiki = require("./wiki.js");
// ...
app.use("/wiki", wiki);
```

После этого два маршрута, определённые в нашем модуле маршрутов wiki, станут доступны из `/wiki/` и `/wiki/about/`.

### Функции Route

В модуле выше определена пара типовых функций маршрута. Маршрут "about" (ещё раз показан ниже) определён при помощи метода `Router.get()`, который отвечает только на HTTP GET-запросы. Первый аргумент метода - URL-путь, а второй - колбэк-функция, которая будет вызвана, если получен HTTP GET-запрос с указанным путём.

```js
router.get("/about", function (req, res) {
  res.send("About this wiki");
});
```

Эта колбэк-функция имеет три аргумента takes three arguments (обычно именуемых как указано: `req`, `res`, `next`), которые соответствуют объекту HTTP запроса, ответу HTTP, и _следующей_
функции в цепочке промежуточных элементов.

> **Примечание:** Функции в Router - это промежуточный слой ([middleware](/ru/docs/Learn/Server-side/Express_Nodejs/Introduction#Using_middleware)) are [Express](/ru/docs/Learn/Server-side/Express_Nodejs/Introduction#Using_middleware), что означает, что они должны или завершить (ответить на) запрос reqили вызвать следующую (`next)` функцию в цепочке. В нашем случае запрос завершается вызовом `send()`, поэтому аргумент `next` не нужен (и поэтому не указан).
>
> Выше у функции роутера только один колбэк-аргумент, но можно указать столько таких аргументов, сколько хотите, или указать массив колбэк-функций. каждая из функций - это элемент в цепочке промежуточного слоя, и они будут вызываться в порядке их добавления в цепочку (если предыдущая функция не завершит запрос).

Здесь, когда приходит GET-запрос с путём ('`/about'`) колбэк-функция при ответе вызывает [`send()`](https://expressjs.com/en/4x/api.html#res.send) , возвращая строку "About this wiki". Существует [ряд других методов ответа](https://expressjs.com/en/guide/routing.html#response-methods) , завершающих цикл запрос-ответ. Например, можно вызвать [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) , чтобы послать ответ JSON, или `res.sendFile(),` чтобы послать файл. Метод ответа, который будет использован чаще всего при построении нашей библиотеки - это [render()](https://expressjs.com/en/4x/api.html#res.render), создающий, на основе шаблонов и данных, и возвращающий HTML-файлы —мы поговорим об этом подробнее в следующей статье!

### HTTP глаголы (действия)

Рассмотренный пример использует метод `Router.get()` для ответа на HTTP GET- запросы с указанным путём.

Кроме того, `Router` обеспечивает также методы маршрутизации для других HTTP глаголов, которые обычно используются точно таким же способом: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, и `connect()`.

Например, код ниже делает то же, что и предыдущий, с путём `/about,` но отвечает на HTTP POST-запросы.

```js
router.post("/about", function (req, res) {
  res.send("About this wiki");
});
```

### Маршруты путей

Маршруты путей определяют конечные точки, в которых могут быть сделаны запросы. В уже рассмотренных примерах это были просто строки, которые использовались точно так, как были записаны: '/', '/about', '/book', '/any-random.path'.

Маршруты путей могут быть также образцами строк. Образцы строк используют подмножество синтаксиса регулярных выражений для определения _образцов_ конечных точек, для которых должно проверяться соответствие. Подмножество приведено ниже (отметим, что перенос (`-`) и точка (`.`) в путях на основе строк понимаются буквально):

- ? : Конечная точка должна иметь 0 или 1 предыдущий символ. Так, путь маршрута `'/ab?cd'` соответствует конечным точкам `acd` или `abcd` (т.е. b может присутствовать или нет).
- \+ : Конечная точка должна иметь 1 или более предыдущих символов. Так, путь маршрута `'/ab+cd'` будет соответствовать конечным точкам `abcd`, `abbcd`, `abbbcd`, и так далее.
- \* : Конечная точка может содержать произвольную строку там, где находится символ '\*'. Так, путь маршрута `'ab\*cd'` будет соответствовать конечным точкам `abcd`, `abXcd`, `abSOMErandomTEXTcd`, и так далее.
- () : Группировка символов для выполнения другой операции. Так, `'/ab(cd)?e'` выполнит ?-проверку (0 или 1 появление) для группы (cd) — соответствия таковы: `abe` и `abcde`.

Пути маршрутов могут быть также [регулярными выражениями](/ru/docs/Web/JavaScript/Guide/Regular_Expressions) JavaScript. Например, путь маршрутов (ниже) будет соответствовать `catfish и` `dogfish`, но не `catflap`, `catfishhead`, и так далее. Отметим, регулярное выражение как путь использует синтаксис регулярных выражений (это не строка в кавычках, как в предыдущих случаях).

```js
app.get(/.*fish$/, function (req, res) {
  ...
})
```

> **Примечание:** Большинство наших маршрутов для библиотеки будут просто строками, а не образцами строк или регулярными выражениями. Кроме того, будут использоваться параметры маршрутов, что обсуждается в следующем разделе.

### Параметры маршрутов

Параметры маршрутов - это _именованные сегменты URL_ , которые используются для выбора значений из указанной позиции URL. Именованные сегменты начинаются двоеточием, после которого следует имя (например, `/:your_parameter_name/`. Выбранные значения сохраняются в объекте `req.params,` причём имя параметра используется как ключ (т.е. `req.params.your_parameter_name`).

Предположим, например, что URL содержит информацию о пользователях и книгах: `http://localhost:3000/users/34/books/8989`. Можно извлечь эту информацию (см. ниже) в параметры `userId` и `bookId` пути:

```
app.get('/users/:userId/books/:bookId', function (req, res) {
  // доступ к userId через: req.params.userId
  // доступ к bookId через: req.params.bookId
  res.send(req.params);
})
```

Имена параметров пути должны состоять из "символов слова" (A-Z, a-z, 0-9, и \_).

> **Примечание:** URL _/book/create_ будет соответствовать маршрутам вида `/book/:bookId` (и '`create`' станет значением "bookId"). Будет использован первый маршрут, соответствующий введённому URL, поэтому, если необходимо обрабатывать URL вида `/book/create` отдельно, обработчик этого маршрута должен быть расположен до маршрута `/book/:bookId` .

Для начала этих сведений достаточно - если потребуется, можно найти дополнительную информацию в документации Express: [Basic routing](http://expressjs.com/en/starter/basic-routing.html) (основы маршрутизации) и [Routing guide](http://expressjs.com/en/guide/routing.html) (руководство по маршрутизации). В следующем разделе показано, как задать маршруты и контроллеры для нашей библиотеки LocalLibrary.

## Маршруты, необходимые для библиотеки LocalLibrary

Те URL, которые в итоге будут нужны для наших страниц, показаны ниже. Слово _object_ должно быть заменено на имя каждой из наших моделей (book, bookinstance, genre, author), слово _objects_ - множественное число для _object,_ а _id_ - уникальное значение для поля(`_id`), которое Mongoose создаёт по умолчанию для каждого экземпляра модели.

- `catalog/` — Домашняя страница home/index.
- `catalog/<objects>/` — Список всех книг, экземпляров книг, жанров и авторов (т.е. /`catalog/books/`, /`catalog/genres/`, и т.д.)
- `catalog/<object>/<id>` — Страница с подробностями для отдельной книги, экземпляра книги, жанра или автора с заданным полем идентификатора `_id` (т.е. `/catalog/book/584493c1f4887f06c0e67d37)`.
- `catalog/<object>/create` — Форма для создания новой книги, экземпляра книги, жанра или автора (т.е. `/catalog/book/create)`.
- `catalog/<object>/<id>/update` — Форма для обновления отдельной книги, экземпляра книги, жанра или автора с заданным идентификатором `_id` (т.е. `/catalog/book/584493c1f4887f06c0e67d37/update)`.
- `catalog/<object>/<id>/delete` — Форма для удаления отдельной книги, экземпляра книги, жанра или автора по заданному идентификатору `_id` (т.е. `/catalog/book/584493c1f4887f06c0e67d37/delete)`.

Первая домашняя страница и страницы со списками не кодируют никакой дополнительной информации. Хотя результаты, возвращаемые запросами, будут зависеть от типа модели и от содержимого БД, запросы для получения этой информации всегда будут одинаковы (подобно тому, как код для создания объектов всегда будет одним и тем же).

В противоположность этому, другие URL используются для работы с определёнными экземплярами документов и моделей — индивидуальность элементов кодируется в URL (как `<id>` выше). Параметры путей используются для извлечения информации и передачи её в обработчик пути (в следующей статье мы применим этот приём для того, чтобы динамически определять, какую информацию следует получить из БД). Кодирование информации в URL-адресе позволяет обойтись одним маршрутом для каждого ресурса определенного типа (например, можно обойтись одним маршрутом для обработки отображения любой отдельной записи о книге).

> **Примечание:** Express позволяет строить URL любым способом, который вам нравится — можно кодировать информацию в теле URL как показано выше или использовать URL `GET` -запрос с параметрами (например, `/book/?id=6`). Какой бы подход вы не применяли, URL должны быть ясными, логичными и читаемыми (ознакомьтесь с советами [W3C](https://www.w3.org/Provider/Style/URI)).

Далее мы создадим колбэк-функции обработчиков маршрутов и код маршрутов для всех указанных выше URL.

## Создаём колбэк-функции обработчиков маршрутов

Перед определением маршрутов сначала создадим фиктивные (каркасные) колбэк-функции, которые они будут вызывать. Эти функции будут храниться в отдельных модулях -"контроллерах" для моделей Book, BookInstance, Genre, и Author (можно использовать любую структуру моделей и файлов, но кажется, что выбранная обеспечивает приемлемую модульность нашего проекта).

Начнём с создания каталога для контроллеров в корне проекта (**/controllers**), а затем создадим отдельные файлы (модули) контроллеров для работы с моделями:

```
/express-locallibrary-tutorial  //корень проекта
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

### Контроллер автора

Скопируем следующий код в файл **/controllers/authorController.js**:

```js
var Author = require("../models/author");

// Показать список всех авторов.
exports.author_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Author list");
};

// Показать подробную страницу для данного автора.
exports.author_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
};

// Показать форму создания автора по запросу GET.
exports.author_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Создать автора по запросу POST.
exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Показать форму удаления автора по запросу GET.
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Удалить автора по запросу POST.
exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Показать форму обновления автора по запросу GET.
exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Обновить автора по запросу POST.
exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Author update POST");
};
```

В модуле сначала подключается (requires) модель, которая далее будет использована для получения данных и их обновления. Далее экспортируются функции для каждого URL, который мы хотим обрабатывать (операции create-создать, update-обновить и delete-удалить используют формы, следовательно, должны быть дополнительные методы для обработки post-запросов от форм - эти методы обсуждаются далее, в статье "forms article" ("формы")).

Все функции имеют стандартную форму функций среднего слоя _Express_ , с аргументами для запроса, ответа и следующей `(next)` функции, которая должна быть вызвана, если метод не завершил цикл запроса (во всех приведённых в коде случаях - завершает!). Методы просто возвращают строку, информирующую о том, что соответствующая страница ещё не создана. Если функция контроллера должна получить параметры маршрута, эти параметры будут выведены в строке сообщения (смотри выше `req.params.id` ).

#### BookInstance controller

Скопируйте следующий код в файл **/controllers/bookinstanceController.js** (он построен по образцу модуля контроллера для автора `Author` ):

```js
var BookInstance = require("../models/bookinstance");

// Display list of all BookInstances.
exports.bookinstance_list = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance detail: " + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
```

#### Контроллер жанра

Скопируйте следующий код в файл **/controllers/genreController.js** (он построен по образцу модулей контроллеров для автора `Author` и экземпляра книги `BookInstance`):

```js
var Genre = require("../models/genre");

// Display list of all Genre.
exports.genre_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre list");
};

// Display detail page for a specific Genre.
exports.genre_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre detail: " + req.params.id);
};

// Display Genre create form on GET.
exports.genre_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
exports.genre_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
```

#### Контроллер книги

Скопируйте следующий код в файл **/controllers/bookController.js**. Он построен по образцу других модулей контроллеров, но ещё содержит функцию `index()` для вывода странички с приветствием:

```js
var Book = require("../models/book");

exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Book list");
};

// Display detail page for a specific book.
exports.book_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Book detail: " + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update POST");
};
```

## Создание модуля для маршрута catalog

Далее мы создадим маршруты для всех URL, необходимых веб-сайту [LocalLibrary](#local_libary_routes), которые будут вызывать функции контроллеров, определённые в предыдущем разделе.

Каркас приложения уже содержит каталог **./routes**, в котором есть маршруты для _index_ и _users_. Внутри этого каталога создадим ещё один файл маршрутов — **catalog.js** ( см. ниже).

```
/express-locallibrary-tutorial //the project root
  /routes
    index.js
    users.js
    catalog.js
```

Скопируйте приведённый ниже код в файл **/routes/**catalog.js :

```js
var express = require("express");
var router = express.Router();

// Требующиеся модули контроллеров.
var book_controller = require("../controllers/bookController");
var author_controller = require("../controllers/authorController");
var genre_controller = require("../controllers/genreController");
var book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES МАРШРУТЫ КНИГ///

// GET catalog home page.
router.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
// GET запрос для создания книги. Должен появиться до маршрута, показывающего книгу(использует id)
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request to delete Book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request to update Book.
router.get("/book/:id/update", book_controller.book_update_get);

// POST request to update Book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items.
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
// GET-запрос для создания автора. Должен появиться до маршрута для id (для вывода автора)
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
// GET-запрос для создания жанра. Должен появиться до маршрута, выводящего жанр (( с использованием id)
router.get("/genre/create", genre_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
// GET-запрос для создания экземпляра книги. Должен появиться до маршрута, выводящего BookInstance с использованием id
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get,
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post,
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get,
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post,
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get,
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post,
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
```

Модуль загружает Express и использует его для создания объекта `Router` . В маршрутизаторе задаются маршруты и производится их экспорт.

Маршруты определяют в объекте маршрутизатора или `.get()` или `.post()` методы. Все пути заданы как строки (образцы строк и регулярные выражения не использовались). Маршруты, которые взаимодействуют с конкретным ресурсом (скажем, с книгой), для получения из URL идентификатора объекта используют параметры путей.

Все функции-обработчики импортируются из созданных в предыдущем разделе модулей контроллеров.

### Обновление модуля маршрута index

Все новые маршруты заданы, а маршрут на начальную страницу остался без изменения. Давайте перенаправим его на новую страницу "index", которая создана в каталоге '/catalog'.

Откройте **/routes/index.js** и замените существующий маршрут приведённую ниже.

```js
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});
```

> **Примечание:** Это первое использование метода ответа [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) . Он делает перенаправление на указанную страницу, и по умолчанию устанавливает код возврата HTTP в "302 Found" (найдено). Если требуется, можно изменить код возврата. Путь можно задавать как абсолютный или как относительный.

### Обновление app.js

Завершающий шаг - добавление маршрутов в цепочку промежуточного слоя. Это будет сделано в `app.js`.

Откройте файл **app.js** и поместите require для маршрута каталог ниже других маршрутов (добавьте третью строку. показанную ниже, после имеющихся двух строк):

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
```

Далее, добавьте маршрут каталога в стек промежуточного слоя после других маршрутов (добавить третью строку после имеющихся двух):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

> **Примечание:** Мы добавили модуль каталога в путь`'/catalog'`. Этот путь будет предшествовать всем путям, определённым в модуле каталога. Например, для доступа к списку книг URL будет таким: `/catalog/books/`.

Вот так. Теперь у нас есть пути и фиктивные функции, подготовленные для всех URL, которые мы собираемся поддерживать на веб-сайте LocalLibrary.

### Проверка маршрутов

Чтобы проверить маршруты, сначала запустим веб-сайт обычным способом

- Обычный способ

  ```bash
  // Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm start

  // macOS or Linux
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- Если предварительно установлен [nodemon](/ru/docs/Learn/Server-side/Express_Nodejs/skeleton_website), для запуска можно использовать:

  ```
  // Windows
  SET DEBUG=express-locallibrary-tutorial:* & npm run devstart

  // macOS or Linux
   DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

После запуска перейдите к совокупности URL нашей LocalLibrary, и проверьте, что не появляется страница ошибки (HTTP 404). Небольшая часть наших URL для удобства приводится ниже:

- <http://localhost:3000/>
- <http://localhost:3000/catalog>
- <http://localhost:3000/catalog/books>
- <http://localhost:3000/catalog/bookinstances/>
- <http://localhost:3000/catalog/authors/>
- <http://localhost:3000/catalog/genres/>
- [http://localhost:3000/catalog/book/5846437593935e2f8c2aa226](http://localhost:3000/catalog/book/5846437593935e2f8c2aa226/)
- <http://localhost:3000/catalog/book/create>

## Итог

Созданы все маршруты для нашего сайта. Созданы также фиктивные функции контроллеров, которые мы полностью реализуем в последующих статьях. Попутно мы изучили массу базовых сведений о маршрутах Express, и ознакомились с некоторыми подходами по структурированию маршрутов и контроллеров.

В следующей статье мы создадим настоящую страничку приветствия нашего сайта, для чего используем представления (шаблоны) и данные, хранящиеся в наших моделях.

## Смотрите также

- [Basic routing](http://expressjs.com/en/starter/basic-routing.html) Основы маршрутизации (документация Express)
- [Routing guide](http://expressjs.com/en/guide/routing.html) Руководство по маршрутизации (документация Express)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

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
