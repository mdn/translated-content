---
title: 更新书本表单
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
---

本文最后一部分演示如何定义一个页面，以更新书本（`Book`）对象。当更新一本书的时候，表单处理更像是创建一本书，除了你必须将表单填进 `GET` 路由，并附加上来自数据库的值。

## 控制器—get 路由

打开 **/controllers/bookController.js**. 找到 exported `book_update_get()` 控制方法，并用底下的代码替换。

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

这个控制器从 URL 参数 (`req.params.id`) 中，取得要更新的书本 `Book` 的 id。它使用 `async.parallel()`方法，取得指定的书本 `Book` 纪录 (填入它的种类和作者字段) ，并列出所有作者 `Author` 和种类 `Genre`对象。当所有操作都完成，它用勾选的方式，标记当前选择的种类，并呈现 **book_form.pug** 视图，传送变数 `title`、`book`、所有 `authors`、所有 `genres`。

## 控制器—post 路由

找到 exported `book_update_post()` 控制器方法，并替换为底下的代码。

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

这很像是创建一本书的时候，所使用的 post 路由。首先，我们验证来自表单的书本数据，并进行无害化处理，并使用它创建一个新的书本 `Book` 对象 (将它的 `_id` 值，设置给将要更新的对象的 id)。当我们验证资料，然后重新呈现表单的时候，如果存在错误，再附加显示使用者输入的资料、错误信息、以及种类和作者列表。当我们调用`Book.findByIdAndUpdate()` 去更新 `Book` ，如果没有错误，就重新导向到它的细节页面。

## 视图

打开 **/views/book_form.pug**，并更新作者表单控制器的区段，以加入底下条件控制代码。

```plain
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

> **备注：** 此处代码的更动，是为了让书本表单 book_form，能被创建和更新书本的对象共同使用 (如果不这么做，当创建表单时，在 `GET` 路由会发生一个错误)。

## 加入一个更新按钮

打开 **book_detail.pug** 视图，并确认在页面下方，有删除和更新书本的连结，如下所示。

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

你现在应该能够更新来自书本细节页面的书了。

## 它看起來像是？

运行本应用，打开浏览器，访问网址 <http://localhost:3000/>，点击所有书本 All books 连结，然后点击一本书。最后点击更新书本 Update Book 连结。

表单看起来应该就像是创建书本页面，只是标题变为 'Update book'，并且事先填入纪录值。

![](locallibary_express_book_update_noerrors.png)

> **备注：** 其他更新对象的页面，也可以用同样的方式处理。我们把这些更新页面的实作留下，做为自我挑战。

## 下一步

- 回到 [Express 教程 6: 使用表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms)
