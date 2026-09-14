---
title: 作者详情页面
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

作者详情页面需要呈现指定作者（`Author`）的信息，使用（自动生成的）`_id` 字段值进行标识，接着是这个作者的所有书本（`Book`）对象的列表。

## 控制器

打开 **/controllers/authorController.js**。

在文件顶部添加以下代码，以此来引入（`require()`）作者详情页所需的 `Book` 模块（其他模块，例如“express-async-handler”应该已经存在）。

```js
const Book = require("../models/book");
```

找到被导出的 `author_detail()` 控制器方法，并用以下代码替换。

```js
// 呈现指定作者的详情页。
exports.author_detail = asyncHandler(async (req, res, next) => {
  // （并行地）获取作者的详细信息及其所有作品
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // 没有结果。
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});
```

该方法与[种类详情页面](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)中描述的方法完全相同。路由控制器函数使用 `Promise.all()` 并行地查询指定的作者（`Author`）及其关联的 `Book` 实例。如果没有找到匹配的作者，则会将错误（Error）对象发送到 Express 错误处理中间件。如果找到作者，则使用“author_detail”模板呈现检索到的数据库信息。

## 视图

创建 **/views/author_detail.pug** 并复制以下文本。

```pug
extends layout

block content

  h1 Author: #{author.name}
  p #{author.date_of_birth} - #{author.date_of_death}

  div(style='margin-left:20px;margin-top:20px')

    h2(style='font-size: 1.5rem;') Books
    if author_books.length
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

运行本应用并打开浏览器访问 `http://localhost:3000/`。选择 _All Authors_ 链接，然后选择一个作者。如果每个配置都设定正确了，你的网站应该类似于下方的截图。

![作者详情页面——Express 本地图书馆网站](locallibary_express_author_detail.png)

> [!NOTE]
> 作者的出生与死亡日期的外观很丑！我们将在本文最后的自我挑战中处理它。

## 下一步

- 回到 [Express 教程 5：呈现图书馆数据](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 的下一个部分：[书本实例细节页面和自我挑战](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)
