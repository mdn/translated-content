---
title: Страница списка книг
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
---
<p>Далее мы реализуем нашу страницу списка книг. На этой странице должен отображаться список всех книг и их авторов в базе данных, причём каждое название книги является гиперссылкой на соответствующую страницу сведений о книге.</p>

<h2 class="highlight-spanned" id="Контроллер">Контроллер</h2>

<p>Функция контроллера списка книг должна получить список всех объектов <code>Book</code> в базе данных, а затем передать их для отрисовки шаблона.</p>

<p>Откройте файл <strong>/controllers/bookController.js</strong>. Найдите экспортируемый метод контроллера  <code>book_list()</code> и замените его следующим кодом.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">// Display list of all Books.
exports.book_list = function(req, res, next) {

  Book.find({}, 'title author')
    .populate('author')
    .exec(function (err, list_books) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('book_list', { title: 'Book List', book_list: list_books });
    });

};</code></pre>

<p>Метод использует функцию модели<code>find()</code> для возврата всех объектов <code>Book</code>, выбрав для возврата только заголовок и автора, поскольку нам не нужны другие поля (он также вернёт <code>_id</code> и виртуальные поля). Здесь мы также вызываем <code>populate()</code> on <code>Book</code>, указывая поле  <code>author</code> —это заменит сохранённый идентификатор автора книги полными сведениями об авторе.</p>

<p>При успешном выполнении, колбэк передаст запрос на отрисовку шаблона <strong>book_list</strong>(.pug), передаст <code>title</code> и<code>book_list</code> (список книг с автором) в качестве переменных.</p>

<h2 class="highlight-spanned" id="Представление">Представление</h2>

<p>Создайте файл <strong>/views/book_list.pug</strong> и скопируйте в него текст ниже.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">extends layout

block content
  h1= title

  ul
  each book in book_list
    li
      a(href=book.url) #{book.title}
      |  (#{book.author.name})

  else
    li There are no books.</code></pre>

<p>View расширит базовый шаблон <strong>layout.pug</strong> и переопределит <code>block</code> с именем '<strong>content</strong>'. Он отображает  <code>title</code> который мы передали из контроллера (с помощью метода <code>render()</code> ), а затем перебирает переменную <code>book_list</code>  используя синтаксис <code>each</code>-<code>in</code>-<code>else</code> . Для каждой книги создаётся элемент списка, отображающий название книги в виде ссылки на страницу сведений о книге, за которой следует имя автора. Если в  <code>book_list</code> нет книг,  то выполняется <code>else</code>, и  отображается текст "нет книг".'</p>

<div class="note">
<p><strong>Примечание: </strong>Мы используем <code>book.url</code>  для предоставления ссылки на подробную запись для каждой книги (мы реализовали этот маршрут, но не страницу). Это виртуальное свойство модели <code>Book</code> , которая использует поле  <code>_id</code> для создания уникального URL.</p>
</div>

<p>Здесь интересно, что каждая книга определена в двух строках, использование конвейера для второй строки (выделено выше) необходимо, чтобы имя автора не стало частью гиперссылки из первой строки.</p>

<h2 class="highlight-spanned" id="На_что_это_похоже">На что это похоже?</h2>

<p>Запустите приложение (смотрите <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#Testing_the_routes">тестирование маршрутов</a> для соответствующей команды) и откройте ваш браузер по адресу:  <a class="external external-icon" href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>. Затем выберите ссылку:  <em>All books</em>. Если все сделано корректно, то вы должны увидеть нечто подобное скриншоту ниже.</p>

<p><img alt="Book List Page - Express Local Library site" src="https://mdn.mozillademos.org/files/14464/LocalLibary_Express_Book_List.png" style="border-style: solid; border-width: 1px; display: block; height: 387px; margin: 0px auto; width: 918px;"></p>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</li>
 <li>Proceed to the next subarticle of part 5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page">BookInstance list page</a>.</li>
</ul>
