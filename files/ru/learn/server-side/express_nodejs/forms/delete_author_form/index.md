---
title: Delete Author form
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
---

В этой статье показано, как определить страницу для удаления объектов `Author`.

Как описано в разделе [form design](/ru/docs/Learn/Server-side/Express_Nodejs/forms#form_design), наша стратегия будет заключаться в том, чтобы разрешить удаление только объектов, на которые не ссылаются другие объекты(в этом случае это означает, что мы не позволим `Author` быть удалённым, если на него ссылается `Book`). С точки зрения реализации это означает, что форма должна подтвердить, что нет никаких связанных книг, прежде чем автор будет удалён. Если есть связанные книги, то они должны отображаться и быть удалены до того, как будет удалён объект `Author`.

## Controller—get route

Откройте **/controllers/authorController.js**. Найдите экспортируемый метод контроллера `author_delete_get()` и замените его на следующий код.

```js
// Отображать форму для удаления автора GET
exports.author_delete_get = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.author == null) {
        // No results.
        res.redirect("/catalog/authors");
      }
      // Удачно, значит рендерим.
      res.render("author_delete", {
        title: "Delete Author",
        author: results.author,
        author_books: results.authors_books,
      });
    },
  );
};
```

Контроллер получает id экземпляра `Author` для удаления из параметра URL (`req.params.id`). Он использует метод `async.parallel()` , чтобы получить запись автора и параллельно вс связанные книги. Когда оба параметра авершины, он рендерит страницу **`author_delete`**.pug, передаёт значения для `title`, `author`, и `author_books`.

> **Примечание:** Если `findById()` не возвращает результатов, то автор отсутствует в базе данных. В этом случае удалять нечего, поэтому сразу выводим список всех авторов.
>
> ```js
> }, function(err, results) {
>     if (err) { return next(err); }
>     if (results.author==null) { // No results.
>         res.redirect('/catalog/authors')
>     }
> ```

## Controller—post route

Найдите экспортируемый метод контроллера `author_delete_post()` и замените его на следующий код.

```js
// Обработчик удаления автора POST.
exports.author_delete_post = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.body.authorid).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.body.authorid }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      // Success
      if (results.authors_books.length > 0) {
        // Автор книги. Визуализация выполняется так же, как и для GET route.
        res.render("author_delete", {
          title: "Delete Author",
          author: results.author,
          author_books: results.authors_books,
        });
        return;
      } else {
        //У автора нет никаких книг. Удалить объект и перенаправить в список авторов.
        Author.findByIdAndRemove(req.body.authorid, function deleteAuthor(err) {
          if (err) {
            return next(err);
          }
          // Успех-перейти к списку авторов
          res.redirect("/catalog/authors");
        });
      }
    },
  );
};
```

Сначала мы проверяем, что был предоставлен id (он отправляется через параметры тела формы, а не через версию в URL). Затем мы получаем автора и связанные с ним книги так же, как и для маршрута `GET`. Если книг нет, то удаляем объект автора и перенаправляем в список всех авторов. Если есть ещё книги, то мы просто перерисовываем форму, передавая автора и список книг, которые нужно удалить.

> **Примечание:** Мы можем проверить, возвращает ли вызов `findbyid ()` какой-либо результат, и если нет, немедленно отобразить список всех авторов.Для краткости мы оставили код как есть выше (он всё равно вернёт список авторов, если id не будет найден, но это произойдёт после `findByIdAndRemove()`).

## View

Создайте **/views/author_delete.pug** и скопируйте текст ниже.

```pug
extends layout

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

      button.btn.btn-primary(type='submit') Delete
```

Представление расширяет шаблон макета, переопределяя блок с именем `content`. Вверху отображаются сведения об авторе. Затем он включает условный оператор, основанный на количестве **`author_books`** (пункты `if` и `else` ).

- Если есть книги, связанные с автором, то на странице перечислены книги и говорится, что они должны быть удалены, прежде чем этот `Author` может быть удалён.
- Если книг нет, на странице отображается запрос на подтверждение. Если нажать кнопку **Delete**, то id автора будет отправлен на сервер в `POST`-запросе, и запись этого автора будет удалена.

## Добавление элемента управления delete

Затем мы добавим элемент управления `Delete` в представление сведений об авторе (страница сведений-хорошее место для удаления записи).

> **Примечание:** В полном объёме контроль будет доступен только авторизованным пользователям. Однако на данный момент у нас нет системы авторизации!

Откройте **author_detail.pug** и добавьте следующие строки внизу.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Теперь элемент управления должен отображаться в виде ссылки, как показано ниже на странице сведений об авторе.

![](locallibary_express_author_detail_delete.png)

## Как это выглядит?

Запустите приложение и откройте в вашем браузере <http://localhost:3000/>. Затем раздел _All authors_ , а затем укажите конкретного пользователя. Наконец, выберите ссылку _Delete author_.

Если у автора нет книг, вам будет представлена такая страница. После нажатия клавиши delete сервер удалит автора и перенаправит в список авторов

![](locallibary_express_author_delete_nobooks.png)

Если у автора есть книги, то вам будет представлен следующий вид. Затем вы можете удалить книги из их подробных страниц (как только этот код будет реализован!).

![](locallibary_express_author_delete_withbooks.png)

> **Примечание:** Другие страницы для удаления объектов могут быть реализованы примерно таким же образом. Мы оставили это как задачи.

## Next steps

- Return to [Express Tutorial Part 6: Working with forms](/ru/docs/Learn/Server-side/Express_Nodejs/forms).
- Proceed to the final subarticle of part 6: [Update Book form](/ru/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form).
