---
title: Home page
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
---
<p>Первой создаваемой страницей будет домашняя  страница веб-сайта, доступная из корня сайта (<code>'/'</code>) или из каталога (<code>catalog/</code>). На странице будет виден статический текст, описывающий сайт, и динамически вычисляемые "количества" записей разных типов имеющихся в БД.</p>

<p>Маршрут для домашней страницы уже создан. Для завершения страницы обновить функции контроллера, чтобы он извлекал количество записей из БД, и создавал представление (шаблон), который можно использовать для презентации страницы.</p>

<h2 id="Маршрут">Маршрут</h2>

<p>Маршруты индексной страницы созданы ранее в предыдущем разделе (<a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes">previous tutorial).</a> Напомним, все функции маршрутов определены в файле <strong>/routes/catalog.js</strong>:</p>

<pre class="brush: js ">// GET catalog home page.
router.get('/', book_controller.index);  //This actually maps to /catalog/ because we import the route with a /catalog prefix</pre>

<p>Параметр колбэк-функции определён в <strong>/controllers/bookController.js</strong>:</p>

<pre class="brush: js">exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
}</pre>

<p>Именно эту функцию контроллера мы расширим, чтобы получать информацию из моделей и затем отображать её, используя шаблоны (представления).</p>

<h2 id="Контроллер">Контроллер</h2>

<p>Функция контроллера индекса должна получать информацию о том, сколько книг (<code>Book)</code>, экземпляров книг (<code>BookInstance)</code>, сколько из них доступно, сколько авторов (<code>Author)</code>, жанров (<code>Genre)</code> имеется в БД, должна поместить эту информацию в шаблон, чтобы создать  HTML-страницу, после чего вернуть её в  HTTP-ответе.</p>

<div class="note">
<p><strong>Примечание:</strong> Количество экземпляров в каждой модели вычисляется при помощи метода <code><a class="external external-icon" href="http://mongoosejs.com/docs/api.html#model_Model.countDocuments" rel="noopener">countDocuments()</a></code> . Он вызывается для модели с возможным набором условий, необходимых для проверки соответствия первому аргументу и колбэк-функции второго аргумента (обсуждалось ранее в "Использование базы данных с Mongoose" <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose">Using a Database (with Mongoose)</a>), причём можно вернуть также запрос <code>Query,</code> а затем выполнить его позже при помощи callback. Эта  колбэк-функция будет выполняться, когда БД вернёт количество записей.  Значение ошибки (or <code>null</code>) будет первым параметром, а количество записей (или null, если была ошибка) -  вторым параметром.</p>

<pre class="brush: js ">SomeModel.countDocuments({ a_model_field: 'match_value' }, function (err, count) {
 // ... do something if there is an err
 // ... do something with the count if there was no error
 });</pre>
</div>

<p>Откройте файл <strong>/controllers/bookController.js</strong>. Почти в самом начале вы должны увидеть экспортируемую функцию <code>index()</code> .</p>

<pre class="brush: python ">var Book = require('../models/book')

exports.index = function(req, res, next) {
 res.send('NOT IMPLEMENTED: Site Home Page');
}</pre>

<p>Замените весь код, показанный выше, на следующий фрагмент кода. Первое, что он делает - импортирует (<code>require()</code>)  все модели (выделено жирным).  Это требуется, поскольку они нужны для подсчёта числа записей. Затем импортируется модуль <em>async</em> .</p>

<pre class="brush: js "><strong>var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');</strong>

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            Book.count<s>Documents</s>({}, callback); // Pass an empty object as match condition to find all documents of this collection
// count<s>Documents</s> не работает, работает только просто count
        },
        book_instance_count: function(callback) {
            BookInstance.count<s>Documents</s>({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.count<s>Documents</s>({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.count<s>Documents</s>({}, callback);
        },
        genre_count: function(callback) {
            Genre.count<s>Documents</s>({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};</pre>

<p>Метод <code>async.parallel()</code> передаёт объект с функциями для получения количества элементов каждой модели. Все эти функции стартуют одновременно. Когда все они завершатся,  будет вызвана финальная колбэк-функция, в итоговом параметре которой содержится нужный нам результат (или ошибка).</p>

<p>При успешном завершении колбэк-функции она вызывает <code><a class="external external-icon" href="http://expressjs.com/en/4x/api.html#res.render" rel="noopener">res.render()</a></code>, у которой в качестве параметров - представление (шаблон)  '<strong>index</strong>' и объект, содержащий данные, которые следует поместить в шаблон (среди них - количества элементов в моделях). Данные представлены как пары ключ-значение, и могут быть получены в шаблоне по ключу.</p>

<div class="note">
<p><strong>Примечание:</strong>  В данном случае колбэк-функция, которую вызывает <code>async.parallel()</code> , несколько необычная - страница отображается всегда, независимо от того, была ошибка или нет (обычно используют отдельный путь выполнения для обработки выводимых ошибок).</p>
</div>

<h2 id="Представление">Представление</h2>

<p>Откройте файл  <strong>/views/index.pug</strong> и замените его содержимое текстом, приведённым ниже</p>

<pre class="brush: js ">extends layout

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
      li #[strong Genres:] !{data.genre_count}</pre>

<p>Представление несложное. Мы расширили базовый шаблон  <strong>layout.pug</strong>, переопределив блок (<code>block)</code> с именем '<strong>content</strong>'. Первый заголовок <code>h1</code> будет экранированным текстом - значением переменной <code>title</code> ,variable that  которая передаётся в функцию <code>render()</code> —заметьте, что применение '<code>h1=</code>'  говорит, что следующий текст рассматривается как выражение JavaScript. Затем расположен параграф, знакомящий с  LocalLibrary.</p>

<p>Под заголовком <em>Dynamic content</em>  мы проверяем, определена ли переданная из функции <code>render()</code> переменная error. Если да, отмечаем ошибку. Если нет, выводим ( как список) количества копий каждой модели, которые хранятся в переменной <code>data</code>.</p>

<div class="note">
<p><strong>Примечание:</strong>  Мы не экранируем количества элементов (т.е. используется синтаксис <code>!{}</code> ) потому что эти значения вычисляются. Если бы информация предоставлялась конечным пользователем, следовало бы экранировать переменную перед выводом.</p>
</div>

<h2 id="Как_это_выглядит">Как это выглядит?</h2>

<p>Сейчас у нас есть все для того, чтобы показать страницу index. Запустите приложение и откройте браузер с адресом <a class="external external-icon" href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>. Если все задано правильно, ваш сайт должен иметь примерно такой вид, как на приведённом снимке экрана.</p>

<p><img alt="Home page - Express Local Library site" src="https://mdn.mozillademos.org/files/14458/LocalLibary_Express_Home.png" style="display: block; height: 440px; margin: 0px auto; width: 1000px;"></p>

<div class="note">
<p><strong>Примечание:</strong>  Элементы бокового меню использовать ещё нельзя, так как адреса, представления и шаблоны для этих страниц ещё не определены. Если вы попытаетесь их использовать, будет выведено сообщение об ошибке, например,  вида "NOT IMPLEMENTED: Book list" (НЕ РЕАЛИЗОВАНО: список книг), в зависимости от выбранного элемента меню.  Эти строковые литералы (которые будут замещены действительными данными) были заданы в различных файлах контроллеров в каталоге "controllers".</p>
</div>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</li>
 <li>Proceed to the next subarticle of part 5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page">Book list page</a>.</li>
</ul>
