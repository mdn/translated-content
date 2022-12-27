---
title: Update Book form
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
translation_of: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
---
<p>Наконец, в разделе показано, как определить страницу для обновления объектов <code>Book</code>. Обработка форм при обновлении книги аналогична обработке форм при создании книги, за исключением того, что необходимо заполнить форму в маршруте <code>GET</code> значениями из базы данных.</p>

<h2 class="highlight-spanned" id="Controller—get_route">Controller—get route</h2>

<p>Откройте <strong>/controllers/bookController.js</strong>. Найдите экспортируемый метод контроллера <code>book_update_get()</code> и замените его на следующий код.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">// Display book update form on GET.
exports.book_update_get = function(req, res, next) {

    // Get book, authors and genres for form.
    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id).populate('author').populate('genre').exec(callback);
        },
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        },
        }, function(err, results) {
            if (err) { return next(err); }
            if (results.book==null) { // No results.
                var err = new Error('Book not found');
                err.status = 404;
                return next(err);
            }
            // Success.
            // Mark our selected genres as checked.
            for (var all_g_iter = 0; all_g_iter &lt; results.genres.length; all_g_iter++) {
                for (var book_g_iter = 0; book_g_iter &lt; results.book.genre.length; book_g_iter++) {
                    if (results.genres[all_g_iter]._id.toString()==results.book.genre[book_g_iter]._id.toString()) {
                        results.genres[all_g_iter].checked='true';
                    }
                }
            }
            res.render('book_form', { title: 'Update Book', authors:results.authors, genres:results.genres, book: results.book });
        });

};</code></pre>

<p>Контроллер получит id <code>Book</code> книги для обновления из параметра URL (<code>req.params.id</code>). Он использует метод <code>async.parallel()</code>чтобы получить указанную запись <code>Book</code> (заполнение полей жанра и автора) и список всех объектов <code>Author</code> и <code>Genre</code>. Когда все операции завершены, он помечает выбранные жанры как отмеченные, а затем отображает их в <strong>book_form.pug</strong>, передаёт переменные <code>itle</code>, book, всех <code>authors</code>, и все<code>genres</code>.</p>

<h2 class="highlight-spanned" id="Controller—post_route">Controller—post route</h2>

<p>Найдите экспортируемый метод контроллера <code>book_update_post()</code> и замените его следующим кодом.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">// Handle book update on POST.
exports.book_update_post = [

    // Convert the genre to an array
    (req, res, next) =&gt; {
        if(!(req.body.genre instanceof Array)){
            if(typeof req.body.genre==='undefined')
            req.body.genre=[];
            else
            req.body.genre=new Array(req.body.genre);
        }
        next();
    },

    // Validate fields.
    body('title', 'Title must not be empty.').isLength({ min: 1 }).trim(),
    body('author', 'Author must not be empty.').isLength({ min: 1 }).trim(),
    body('summary', 'Summary must not be empty.').isLength({ min: 1 }).trim(),
    body('isbn', 'ISBN must not be empty').isLength({ min: 1 }).trim(),

    // Sanitize fields.
    sanitizeBody('title').trim().escape(),
    sanitizeBody('author').trim().escape(),
    sanitizeBody('summary').trim().escape(),
    sanitizeBody('isbn').trim().escape(),
    sanitizeBody('genre.*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) =&gt; {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a Book object with escaped/trimmed data and old id.
        var book = new Book(
          { title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            isbn: req.body.isbn,
            genre: (typeof req.body.genre==='undefined') ? [] : req.body.genre,
            _id:req.params.id //This is required, or a new ID will be assigned!
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.

            // Get all authors and genres for form.
            async.parallel({
                authors: function(callback) {
                    Author.find(callback);
                },
                genres: function(callback) {
                    Genre.find(callback);
                },
            }, function(err, results) {
                if (err) { return next(err); }

                // Mark our selected genres as checked.
                for (let i = 0; i &lt; results.genres.length; i++) {
                    if (book.genre.indexOf(results.genres[i]._id) &gt; -1) {
                        results.genres[i].checked='true';
                    }
                }
                res.render('book_form', { title: 'Update Book',authors:results.authors, genres:results.genres, book: book, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Book.findByIdAndUpdate(req.params.id, book, {}, function (err,thebook) {
                if (err) { return next(err); }
                   // Successful - redirect to book detail page.
                   res.redirect(thebook.url);
                });
        }
    }
];</code></pre>

<p>Это очень похоже на маршрут записи, используемый при создании Book. Сперва мы проверяем и очищаем данные книги  и используем их для создание нового объекта <code>Book</code>(устанавливая его значение <code>_id</code> в идентификатор объекта для обновления). Если есть ошибки, когда мы проверяем данные, то мы повторно представляем форму, дополнительно отображая данные, введённые пользователем, ошибки, а также списки жанров и авторов. Если ошибок нет, то мы вызываем <code>Book.findByIdAndUpdate()</code> для обновления документа <code>Book</code>, а затем перенаправить на страницу сведений.</p>

<h2 class="highlight-spanned" id="View">View</h2>

<p>Откройте <strong>/views/book_form.pug</strong> и обновите раздел, в котором элемент управления "форма автора" имеет условный код, показанный ниже.</p>

<pre class="line-numbers  language-html"><code class="language-html">    div.form-group
      label(for='author') Author:
      select#author.form-control(type='select' placeholder='Select author' name='author' required='true' )
        for author in authors
          if book
            //- Handle GET form, where book.author is an object, and POST form, where it is a string.
            option(
              value=author._id
              selected=(
                author._id.toString()==book.author._id
                || author._id.toString()==book.author
              ) ? 'selected' : false
            ) #{author.name}
          else
            option(value=author._id) #{author.name}</code></pre>

<div class="note">
<p><strong>Note</strong>: Это изменение кода необходимо для того, чтобы форму book_form можно было использовать как для создания, так и для обновления объектов book (без этого при создании формы на маршруте <code>GET</code> возникает ошибка).</p>
</div>

<h2 class="highlight-spanned" id="Добавить_кнопку_обновления">Добавить кнопку обновления</h2>

<p>Откройте <strong>book_detail.pug</strong> и убедитесь, что есть ссылки для удаления и обновления книг в нижней части страницы, как показано ниже.</p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book</code></pre>

<p>Теперь вы можете обновлять книги со страницы сведений о книге.</p>

<h2 class="highlight-spanned" id="Как_это_выглядит">Как это выглядит?</h2>

<p>Запустите приложение, откройте ваш браузер на  <a class="external external-icon" href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>, выберите ссылку  <em>All books</em>, затем выберите конкретную книгу. Наконец, выберите ссылку <em>Update Book</em>.</p>

<p>Форма должна выглядеть так же, как страница <em>Create book</em>, только с заголовком  'Update book' и предварительно заполнены значениями записей.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14498/LocalLibary_Express_Book_Update_NoErrors.png" style="border-style: solid; border-width: 1px; display: block; height: 443px; margin: 0px auto; width: 1000px;"></p>

<div class="note">
<p><strong>Note:</strong> Другие страницы для обновления объектов могут быть реализованы примерно таким же образом. Мы оставили это как задание.</p>
</div>

<p> </p>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Part 6: Working with forms</a>.</li>
</ul>

<p> </p>
