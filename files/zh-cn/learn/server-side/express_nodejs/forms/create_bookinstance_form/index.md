---
title: 创建书本实例表单
slug: Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form
---

本章节演示如何定义一个页面/表单，以创建`BookInstance` 物件。这很像我们用来创建书本 `Book` 物件的表单。

## 导入验证和清理方法

打开 **/controllers/bookinstanceController.js**，并在档案最上方加入以下几行：

```js
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");
```

## 控制器—get 路由

在档案最上方，用 require 导入书本模型 (因为每个`BookInstance` 都有关连的 `Book`)。

```js
var Book = require("../models/book");
```

找到导出的 `bookinstance_create_get()` 控制器方法，并替换为底下代码。

```js
// Display BookInstance create form on GET.
exports.bookinstance_create_get = function (req, res, next) {
  Book.find({}, "title").exec(function (err, books) {
    if (err) {
      return next(err);
    }
    // Successful, so render.
    res.render("bookinstance_form", {
      title: "Create BookInstance",
      book_list: books,
    });
  });
};
```

控制器取得所有书本的列表 (`book_list`) 并将它传送到视图 **`bookinstance_form.pug`** (里面附加上 `title`)。

## 控制器—post 路由

找到导出的 `bookinstance_create_post()` 控制器方法，并替换为底下代码。

```js
// Handle BookInstance create on POST.
exports.bookinstance_create_post = [
  // Validate fields.
  body("book", "Book must be specified").isLength({ min: 1 }).trim(),
  body("imprint", "Imprint must be specified").isLength({ min: 1 }).trim(),
  body("due_back", "Invalid date").optional({ checkFalsy: true }).isISO8601(),

  // Sanitize fields.
  sanitizeBody("book").trim().escape(),
  sanitizeBody("imprint").trim().escape(),
  sanitizeBody("status").trim().escape(),
  sanitizeBody("due_back").toDate(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a BookInstance object with escaped and trimmed data.
    var bookinstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values and error messages.
      Book.find({}, "title").exec(function (err, books) {
        if (err) {
          return next(err);
        }
        // Successful, so render.
        res.render("bookinstance_form", {
          title: "Create BookInstance",
          book_list: books,
          selected_book: bookinstance.book._id,
          errors: errors.array(),
          bookinstance: bookinstance,
        });
      });
      return;
    } else {
      // Data from form is valid.
      bookinstance.save(function (err) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new record.
        res.redirect(bookinstance.url);
      });
    }
  },
];
```

此代码的结构和行为，与创建其他对象的结构和行为相同。首先，我们验证数据，并為数据做無害化處理。如果数据无效，我们会重新显示表單，以及用户最初输入的数据，還有错误消息列表。如果数据有效，我们保存新的`BookInstance`记录，并将用户重定向到详细信息页面。

## 视图

创建 **/views/bookinstance_form.pug** ，并复制贴上以下代码。

```plain
extends layout

block content
  h1=title

  form(method='POST' action='')
    div.form-group
      label(for='book') Book:
      select#book.form-control(type='select' placeholder='Select book' name='book' required='true')
        for book in book_list
          if bookinstance
            option(value=book._id selected=(bookinstance.book.toString()==book._id.toString() ? 'selected' : false)) #{book.title}
          else
            option(value=book._id) #{book.title}

    div.form-group
      label(for='imprint') Imprint:
      input#imprint.form-control(type='text' placeholder='Publisher and date information' name='imprint' required='true' value=(undefined===bookinstance ? '' : bookinstance.imprint))
    div.form-group
      label(for='due_back') Date when book available:
      input#due_back.form-control(type='date' name='due_back' value=(undefined===bookinstance ? '' : bookinstance.due_back))

    div.form-group
      label(for='status') Status:
      select#status.form-control(type='select' placeholder='Select status' name='status' required='true')
        option(value='Maintenance') Maintenance
        option(value='Available') Available
        option(value='Loaned') Loaned
        option(value='Reserved') Reserved

    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

这个视图的结构和行为，几乎等同于 **book_form.pug** 模板，因此我们就不再重覆说明一次了。

> **备注：** 以上的模板将状态值 (Maintenance, Available, 等等) 写死在代码里，而且不能 "记忆" 使用者的输入值。如果你愿意的话，考虑重新实作此列表，当表单被重新呈现时，从控制器传入选项数据，并设定选中的值。

## 它看起來像是？

运行本应用，打开浏览器访问网址 <http://localhost:3000/>。然后点击创建新书本实例 Create new book instance (copy) 连结。如果每个东西都设定正确了，你的网站看起应该像底下的截图。在你提交一个有效的 `BookInstance` 之后，它应该会被储存，并且你将被带到详细信息页面。

![](locallibary_express_bookinstance_create_empty.png)

## 下一步

- 回到 [Express 教程 6: 使用表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms)
- 继续教程 6 的下一个部分：[删除作者表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form)
