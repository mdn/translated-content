---
title: 作者细节页面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
---

作者细节页面需要呈现指定作者`Author`的信息，使用 `_id` 字段的值（自动产生）识别，接着是这个作者的所有书本物件`Book`的列表。

## 控制器

打开 **/controllers/authorController.js**。

在档案最上方，加入底下几行，引入 async 和 Book 模组 (作者细节页面需要它们)。

```js
var async = require("async");
var Book = require("../models/book");
```

找到 exported `author_detail()` 控制器方法，并用底下代码置换。

```js
// Display detail page for a specific Author.
exports.author_detail = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      } // Error in API usage.
      if (results.author == null) {
        // No results.
        var err = new Error("Author not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("author_detail", {
        title: "Author Detail",
        author: results.author,
        author_books: results.authors_books,
      });
    },
  );
};
```

此处的控制器方法使用 `async.parallel()`，用平行的方式，查询作者 `Author`和相应的书本实例，并附加上绘制本页面的回调，如果 2 个要求都成功完成，就运行回调。这个方式，就跟前面的种类细节页面所说明的完全相同。

## 视图

创建 **/views/author_detail.pug** ，並複制貼上底下的文字。

```js
extends layout

block content

  h1 Author: #{author.name}
  p #{author.date_of_birth} - #{author.date_of_death}

  div(style='margin-left:20px;margin-top:20px')

    h4 Books

    dl
      each book in author_books
        dt
          a(href=book.url) #{book.title}
        dd #{book.summary}

      else
        p This author has no books.
```

本模板里的所有事物，都在先前的章节演示过了。

## 它看起來像是？

运行本应用，并打开浏览器访问 <http://localhost:3000/>。选择 All Authors 连结，然后选择一个作者。如果每个东西都设定正确了，你的网站看起来应该会像底下的截图。

![Author Detail Page - Express Local Library site](locallibary_express_author_detail.png)

> **备注：** 作者的出生与死亡日期的外观很丑！我们将在本文最后的自我挑战处理它。

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 的下一个部分 : [书本实例细节页面和自我挑战](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)
