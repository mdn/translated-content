---
title: Update Book form
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
---

Наконец, в разделе показано, как определить страницу для обновления объектов `Book`. Обработка форм при обновлении книги аналогична обработке форм при создании книги, за исключением того, что необходимо заполнить форму в маршруте `GET` значениями из базы данных.

## Controller—get route

Откройте **/controllers/bookController.js**. Найдите экспортируемый метод контроллера `book_update_get()` и замените его на следующий код.

```js
// Display book update form on GET.
exports.book_update_get = function (req, res, next) {
  // Get book, authors and genres for form.
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      authors: function (callback) {
        Author.find(callback);
      },
      genres: function (callback) {
        Genre.find(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Success.
      // Mark our selected genres as checked.
      for (
        var all_g_iter = 0;
        all_g_iter < results.genres.length;
        all_g_iter++
      ) {
        for (
          var book_g_iter = 0;
          book_g_iter < results.book.genre.length;
          book_g_iter++
        ) {
          if (
            results.genres[all_g_iter]._id.toString() ==
            results.book.genre[book_g_iter]._id.toString()
          ) {
            results.genres[all_g_iter].checked = "true";
          }
        }
      }
      res.render("book_form", {
        title: "Update Book",
        authors: results.authors,
        genres: results.genres,
        book: results.book,
      });
    },
  );
};
```

Контроллер получит id `Book` книги для обновления из параметра URL (`req.params.id`). Он использует метод `async.parallel()` чтобы получить указанную запись `Book` (заполнение полей жанра и автора) и список всех объектов `Author` и `Genre`. Когда все операции завершены, он помечает выбранные жанры как отмеченные, а затем отображает их в **book_form.pug**, передаёт переменные `title`, book, всех `authors`, и все `genres`.

## Controller—post route

Найдите экспортируемый метод контроллера `book_update_post()` и замените его следующим кодом.

```js
// Handle book update on POST.
exports.book_update_post = [
  // Convert the genre to an array
  (req, res, next) => {
    if (!(req.body.genre instanceof Array)) {
      if (typeof req.body.genre === "undefined") req.body.genre = [];
      else req.body.genre = new Array(req.body.genre);
    }
    next();
  },

  // Validate fields.
  body("title", "Title must not be empty.").isLength({ min: 1 }).trim(),
  body("author", "Author must not be empty.").isLength({ min: 1 }).trim(),
  body("summary", "Summary must not be empty.").isLength({ min: 1 }).trim(),
  body("isbn", "ISBN must not be empty").isLength({ min: 1 }).trim(),

  // Sanitize fields.
  sanitizeBody("title").trim().escape(),
  sanitizeBody("author").trim().escape(),
  sanitizeBody("summary").trim().escape(),
  sanitizeBody("isbn").trim().escape(),
  sanitizeBody("genre.*").trim().escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped/trimmed data and old id.
    var book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: typeof req.body.genre === "undefined" ? [] : req.body.genre,
      _id: req.params.id, //This is required, or a new ID will be assigned!
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form.
      async.parallel(
        {
          authors: function (callback) {
            Author.find(callback);
          },
          genres: function (callback) {
            Genre.find(callback);
          },
        },
        function (err, results) {
          if (err) {
            return next(err);
          }

          // Mark our selected genres as checked.
          for (let i = 0; i < results.genres.length; i++) {
            if (book.genre.indexOf(results.genres[i]._id) > -1) {
              results.genres[i].checked = "true";
            }
          }
          res.render("book_form", {
            title: "Update Book",
            authors: results.authors,
            genres: results.genres,
            book: book,
            errors: errors.array(),
          });
        },
      );
      return;
    } else {
      // Data from form is valid. Update the record.
      Book.findByIdAndUpdate(req.params.id, book, {}, function (err, thebook) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to book detail page.
        res.redirect(thebook.url);
      });
    }
  },
];
```

Это очень похоже на маршрут записи, используемый при создании Book. Сперва мы проверяем и очищаем данные книги и используем их для создание нового объекта `Book` (устанавливая его значение `_id` в идентификатор объекта для обновления). Если есть ошибки, когда мы проверяем данные, то мы повторно представляем форму, дополнительно отображая данные, введённые пользователем, ошибки, а также списки жанров и авторов. Если ошибок нет, то мы вызываем `Book.findByIdAndUpdate()` для обновления документа `Book`, а затем перенаправить на страницу сведений.

## View

Откройте **/views/book_form.pug** и обновите раздел, в котором элемент управления "форма автора" имеет условный код, показанный ниже.

```pug
    div.form-group
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
            option(value=author._id) #{author.name}
```

> **Примечание:** Это изменение кода необходимо для того, чтобы форму book_form можно было использовать как для создания, так и для обновления объектов book (без этого при создании формы на маршруте `GET` возникает ошибка).

## Добавить кнопку обновления

Откройте **book_detail.pug** и убедитесь, что есть ссылки для удаления и обновления книг в нижней части страницы, как показано ниже.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

Теперь вы можете обновлять книги со страницы сведений о книге.

## Как это выглядит?

Запустите приложение, откройте ваш браузер на <http://localhost:3000/>, выберите ссылку _All books_, затем выберите конкретную книгу. Наконец, выберите ссылку _Update Book_.

Форма должна выглядеть так же, как страница _Create book_, только с заголовком 'Update book' и предварительно заполнены значениями записей.

![](locallibary_express_book_update_noerrors.png)

> **Примечание:** Другие страницы для обновления объектов могут быть реализованы примерно таким же образом. Мы оставили это как задание.

## Next steps

- Return to [Express Tutorial Part 6: Working with forms](/ru/docs/Learn/Server-side/Express_Nodejs/forms).
