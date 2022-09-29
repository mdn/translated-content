---
title: Список авторов. Тест - список жанров
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
---
<p>Страница списка авторов должна показывать список всех авторов, хранимых в БД, причём каждое имя автора должно быть связано со страницей подробностей для этого автора. Дата рождения автора и дата смерти должны выводиться в одной строке после имени автора.</p>

<h2 class="highlight-spanned" id="Контроллер">Контроллер</h2>

<p>Функция контроллера списка авторов должна получить список всех элементов в  <code>Author</code> , и передать этот список в шаблон для отображения.</p>

<p>Откройте файл <strong>/controllers/authorController.js</strong>. Найдите экспортируемый метод <code>author_list()</code> в начале файла и замените его следующим ниже кодом:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">// Display list of all Authors.
exports.author_list = function(req, res, next) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });

};</code></pre>

<p>Метод использует такие функции модели как <code>find()</code>, <code>sort()</code> и <code>exec()</code> для того, чтобы вернуть все объекты  <code>Author</code> отсортированными по  <code>family_name</code> в алфавитном порядке. В вызове <code>exec()</code> колбэк-функция имеет первый параметр- объект ошибок  (или <code>null</code>) и второй параметр - список всех авторов, если ошибок не было. При ошибках вызывается следующая функция промежуточного слоя  с полученным значением объекта ошибок, а если ошибок не было, отображается шаблон <strong>author_list</strong>(.pug), передавая странице <code>title</code> и список авторов (<code>author_list</code>).</p>

<h2 class="highlight-spanned" id="Представление">Представление</h2>

<p>Создайте файл <strong>/views/author_list.pug</strong> и поместите в него следующий текст:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">extends layout

block content
  h1= title

  ul
    each author in author_list
      li
        a(href=author.url) #{author.name}
        |  (#{author.date_of_birth} - #{author.date_of_death})

    else
      li There are no authors.</code></pre>

<p>Представление создано по тому же образцу, что и другие шаблоны.</p>

<h2 class="highlight-spanned" id="Как_это_выглядит">Как это выглядит?</h2>

<p>Запустите приложение и откройте браузер с адресом <a class="external external-icon" href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>. Выберите ссылку <em>All authors</em>. Если все было сделано правильно, страница должна выглядеть примерно так, как на следующем скриншоте.</p>

<p><img alt="Author List Page - Express Local Library site" src="https://mdn.mozillademos.org/files/14468/LocalLibary_Express_Author_List.png" style="display: block; height: 453px; margin: 0px auto; width: 1200px;"></p>

<div class="note">
<p><strong>Примечание:</strong> Представление дат продолжительности жизни автора выглядит безобразно! Это можно исправить, если использовать <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data#date_formatting">тот же подход</a> , который применялся для списка <code>BookInstance</code>  (добавить в модель <code>Author</code> виртуальное свойство  продолжительности жизни).  Но в этот раз, однако, некоторые даты могут отсутствовать, и ссылки на несуществующие свойства игнорируются, если не задан строгий режим.  Метод <code>moment()</code> возвращает текущее время, и нежелательно, чтобы отсутствующие  даты форматировались как "сегодня". Один из способов состоит в том, чтобы форматирующая функция возвращала пустую строку, если дата не существует. Например:</p>

<p><code>return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '';</code></p>
</div>

<h2 id="Тест_-_страница_списка_жанров!Edit">Тест - страница списка жанров!</h2>

<p>В этой части требуется создать собственную страницу списка жанров. Страница должна показывать жанры, имеющиеся в БД, а для каждого жанра должна быть создана ссылка на страницу с детальной информацией. Скриншот ожидаемого результата приводится ниже.</p>

<p><img alt="Genre List - Express Local Library site" src="https://mdn.mozillademos.org/files/14460/LocalLibary_Express_Genre_List.png" style="border-style: solid; border-width: 1px; display: block; height: 346px; margin: 0px auto; width: 600px;"></p>

<p>Функция контроллера списка жанров должна получить список всех экземпляров <code>Genre</code>, и передать его в шаблон для отображения.</p>

<ol>
 <li>Следует отредактировать <code>genre_list()</code> в файле  <strong>/controllers/genreController.js</strong>. </li>
 <li>Реализация почти такая же, как и для контроллера <code>author_list()</code> .
  <ul>
   <li>Sort the results by name, in ascending order.</li>
  </ul>
 </li>
 <li>Отображающий шаблон должен быть назван <strong>genre_list.pug</strong>.</li>
 <li>Шаблону для отображения должны быть переданы переменные <code>title</code> (строка 'Genre List') и <code>genre_list</code> (the list of список жанров, который вернёт колбэк-функция <code>Genre.find()</code>.</li>
 <li>Представление должно соответствовать скриншоту, приведённому ранее (оно должно иметь структуру и формат, похожие на таковые в представлении списка авторов, за исключением, конечно, продолжительности жизни, так как для жанров даты не заданы).</li>
</ol>

<h2 id="Далее">Далее</h2>

<p>Вернуться к части 5 -  <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</p>

<p>Перейти к следующему подразделу в части 5: подробная информация о жанрах (<a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page">Genre detail page</a>).</p>
