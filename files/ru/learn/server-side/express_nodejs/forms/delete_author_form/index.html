---
title: Delete Author form
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
translation_of: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
---
<p>В этой статье показано, как определить страницу для удаления объектов <code>Author</code>.</p>

<p>Как описано в разделе  <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms#form_design">form design</a>,  наша стратегия будет заключаться в том, чтобы разрешить удаление только объектов, на которые не ссылаются другие объекты(в этом случае это означает, что мы не позволим <code>Author</code> быть удалённым, если на него ссылается  <code>Book</code>). С точки зрения реализации это означает, что форма должна подтвердить, что нет никаких связанных книг, прежде чем автор будет удалён. Если есть связанные книги, то они должны отображаться и быть удалены до того, как будет удалён объект <code>Author</code>.</p>

<h2 class="highlight-spanned" id="Controller—get_route">Controller—get route</h2>

<p>Откройте <strong>/controllers/authorController.js</strong>. Найдите экспортируемый метод контроллера  <code>author_delete_get()</code> и замените его на следующий код.</p>

<pre><code class="language-js">// Отображать форму для удаления автора GET
exports.author_delete_get = function(req, res, next) {

    async.parallel({
        author: function(callback) {
            Author.findById(req.params.id).exec(callback)
        },
        authors_books: function(callback) {
          Book.find({ 'author': req.params.id }).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.author==null) { // No results.
            res.redirect('/catalog/authors');
        }
        // </code>Удачно, значит рендерим.<code class="language-js">
        res.render('author_delete', { title: 'Delete Author', author: results.author, author_books: results.authors_books } );
    });

};</code></pre>

<p>Контроллер получает id экземпляра <code>Author</code> для удаления из параметра URL  (<code>req.params.id</code>). Он использует метод  <code>async.parallel()</code> , чтобы получить запись автора и параллельно вс связанные книги. Когда оба параметра авершины, он рендерит страницу  <code><strong>author_delete</strong></code><strong>.pug</strong>, передаёт значения для <code>title</code>, <code>author</code>, и <code>author_books</code>.</p>

<div class="note">
<p><strong>Примечание:</strong> Если <code>findById()</code><strong> </strong>не возвращает результатов, то автор отсутствует в базе данных. В этом случае удалять нечего, поэтому сразу выводим список всех авторов.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">}, function(err, results) {
    if (err) { return next(err); }
    if (results.author==null) { // No results.
        res.redirect('/catalog/authors')
    }</code></pre>
</div>

<h2 class="highlight-spanned" id="Controller—post_route">Controller—post route</h2>

<p>Найдите экспортируемый метод контроллера <code>author_delete_post()</code> и замените его на следующий код.</p>

<pre><code class="language-js">// Обработчик удаления автора POST.
exports.author_delete_post = function(req, res, next) {

    async.parallel({
        author: function(callback) {
          Author.findById(req.body.authorid).exec(callback)
        },
        authors_books: function(callback) {
          Book.find({ 'author': req.body.authorid }).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        // Success
        if (results.authors_books.length &gt; 0) {
            // </code>Автор книги. Визуализация выполняется так же, как и для GET route.<code class="language-js">
            res.render('author_delete', { title: 'Delete Author', author: results.author, author_books: results.authors_books } );
            return;
        }
        else {
            </code>//У автора нет никаких книг. Удалить объект и перенаправить в список авторов.<code class="language-js">
            Author.findByIdAndRemove(req.body.authorid, function deleteAuthor(err) {
                if (err) { return next(err); }
                // </code>Успех-перейти к списку авторов<code class="language-js">
                res.redirect('/catalog/authors')
            })
        }
    });
};</code></pre>

<p>Сначала мы проверяем, что был предоставлен id (он отправляется через параметры тела формы, а не через версию в URL). Затем мы получаем автора и связанные с ним книги так же, как и для маршрута <code>GET</code>. Если книг нет, то удаляем объект автора и перенаправляем в список всех авторов. Если есть ещё книги, то мы просто перерисовываем форму, передавая автора и список книг, которые нужно удалить.</p>

<div class="note">
<p><strong>Примечание:</strong> Мы можем проверить, возвращает ли вызов <code>findbyid ()</code> какой-либо результат, и если нет, немедленно отобразить список всех авторов.Для краткости мы оставили код как есть выше (он всё равно вернёт список авторов, если id не будет найден, но это произойдёт после <code>findByIdAndRemove()</code>).</p>
</div>

<h2 class="highlight-spanned" id="View">View</h2>

<p>Создайте <strong>/views/author_delete.pug</strong> и скопируйте текст ниже.</p>

<pre class="line-numbers  language-html"><code class="language-html">extends layout

block content
  h1 #{title}: #{author.name}
  p= author.lifespan

  if author_books.length

    p #[strong Delete the following books before attempting to delete this author.]

    div(style='margin-left:20px;margin-top:20px')

      h4 Books

      dl
      each book in author_books
        dt
          a(href=book.url) #{book.title}
        dd #{book.summary}

  else
    p Do you really want to delete this Author?

    form(method='POST' action='')
      div.form-group
        input#authorid.form-control(type='hidden',name='authorid', required='true', value=author._id )

      button.btn.btn-primary(type='submit') Delete</code></pre>

<p>Представление расширяет шаблон макета, переопределяя блок с именем <code>content</code>. Вверху отображаются сведения об авторе. Затем он включает условный оператор, основанный на количестве <code><strong>author_books</strong></code> (пункты <code>if</code> и <code>else</code> ).</p>

<ul>
 <li>Если есть книги, связанные с автором, то на странице перечислены книги и говорится, что они должны быть удалены, прежде чем этот <code>Author</code> может быть удалён.</li>
 <li>Если книг нет, на странице отображается запрос на подтверждение. Если нажать кнопку <strong>Delete</strong>, то id автора будет отправлен на сервер в <code>POST</code>-запросе, и запись этого автора будет удалена.</li>
</ul>

<h2 class="highlight-spanned" id="Добавление_элемента_управления_delete">Добавление элемента управления delete</h2>

<p>Затем мы добавим элемент управления <code>Delete</code> в представление сведений об авторе (страница сведений-хорошее место для удаления записи).</p>

<div class="note">
<p><strong>Note:</strong> В полном объёме контроль будет доступен только авторизованным пользователям. Однако на данный момент у нас нет системы авторизации!</p>
</div>

<p>Откройте <strong>author_detail.pug</strong> и добавьте следующие строки внизу.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">hr
p
  a(href=author.url+'/delete') Delete author</code></pre>

<p>Теперь элемент управления должен отображаться в виде ссылки, как показано ниже на странице сведений об авторе.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14492/LocalLibary_Express_Author_Detail_Delete.png" style="border-style: solid; border-width: 1px; display: block; height: 202px; margin: 0px auto; width: 500px;"></p>

<h2 class="highlight-spanned" id="Как_это_выглядит">Как это выглядит?</h2>

<p>Запустите приложение и откройте в вашем браузере  <a class="external external-icon" href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>. Затем раздел <em>All authors </em>, а затем укажите конкретного пользователя. Наконец, выберите ссылку <em>Delete author</em>.</p>

<p>Если у автора нет книг, вам будет представлена такая страница. После нажатия клавиши delete сервер удалит автора и перенаправит в список авторов</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14494/LocalLibary_Express_Author_Delete_NoBooks.png" style="border-style: solid; border-width: 1px; display: block; height: 342px; margin: 0px auto; width: 600px;"></p>

<p>Если у автора есть книги, то вам будет представлен следующий вид. Затем вы можете удалить книги из их подробных страниц (как только этот код будет реализован!).</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14496/LocalLibary_Express_Author_Delete_WithBooks.png" style="border-style: solid; border-width: 1px; display: block; height: 327px; margin: 0px auto; width: 500px;"></p>

<div class="note">
<p><strong>Note:</strong> Другие страницы для удаления объектов могут быть реализованы примерно таким же образом. Мы оставили это как задачи.</p>
</div>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Part 6: Working with forms</a>.</li>
 <li>Proceed to the final subarticle of part 6: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form">Update Book form</a>.</li>
</ul>
