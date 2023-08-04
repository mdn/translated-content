---
title: 书本详细信息页面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
---

书本细节页面需要呈现一本指定书本 (`Book`) 的信息，使用它的 `_id` 字段值 (自动产生) 做为识别，接着是图书馆中书本实例 (`BookInstance`) 的信息。无论我们在哪里呈现一个作者、种类、或书本实例，都应该连结到它的细节页面。

## 控制器

打开 **/controllers/bookController.js**. ，找到 exported `book_detail()` 控制器方法，用底下的代码置换。

```js
// Display detail page for a specific book.
exports.book_detail = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
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
      // Successful, so render.
      res.render("book_detail", {
        title: "Title",
        book: results.book,
        book_instances: results.book_instance,
      });
    },
  );
};
```

> **备注：** 我们不需要用 require 导入 async 和 BookInstance，当我们实作主页面控制器的时候，我们就已经引入这些模组。

此处的控制器方法使用 `async.parallel()`，用平行的方式找到 `Book` 以及它的相应复本 (`BookInstances`) 。这样的处理方式，就跟上面的 种类细节页面 所说明的完全相同。

## 视图

创建 **/views/book_detail.pug** 并加入底下文字。

```js
extends layout

block content
  h1 #{title}: #{book.title}

  p #[strong Author:]
    a(href=book.author.url) #{book.author.name}
  p #[strong Summary:] #{book.summary}
  p #[strong ISBN:] #{book.isbn}
  p #[strong Genre:]&nbsp;
    each val, index in book.genre
      a(href=val.url) #{val.name}
      if index < book.genre.length - 1
        |,

  div(style='margin-left:20px;margin-top:20px')
    h4 Copies

    each val in book_instances
      hr
      if val.status=='Available'
        p.text-success #{val.status}
      else if val.status=='Maintenance'
        p.text-danger #{val.status}
      else
        p.text-warning #{val.status}
      p #[strong Imprint:] #{val.imprint}
      if val.status!='Available'
        p #[strong Due back:] #{val.due_back}
      p #[strong Id:]&nbsp;
        a(href=val.url) #{val._id}

    else
      p There are no copies of this book in the library.
```

在这个模板里，几乎每个东西都在先前的章节演示过了。

> **备注：** 与该书相关的種類列表，在模板中的实作，如以下代碼。除了最后一本书之外，在与本书相关的每个种類之后，都会添加一个逗号。
>
> ```plain
>   p #[strong Genre:]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,
> ```

## 它看起來像是？

运行本应用，并打开浏览器访问 <http://localhost:3000/>。选择 All books 连结，然后选择其中一本书。如果每个东西都设定正确了，你的页面看起来应该像是底下的截图。

![Book Detail Page - Express Local Library site](locallibary_express_book_detail.png)

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 的下一个部分：[作者细节页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
