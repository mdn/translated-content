---
title: 书本列表页面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
---

接下做我们将实作书本列表页面。这个页面需要呈现数据库中所有书本的列表，包含每本书的作者、标题，标题将成为一个超连结，连到书本详细内容页面。

## 控制器

书本列表控制器函数，需要获取数据库中所有`Book`对象的列表，然后将这些对象传给模板进行呈现。

打开 **/controllers/bookController.js**. 找到导出的 `book_list()` 控制器方法，并替换為下面的代码。

```js
// Display list of all Books.
exports.book_list = function (req, res, next) {
  Book.find({}, "title author")
    .populate("author")
    .exec(function (err, list_books) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
};
```

该方法使用模型的`find()`函数返回所有`Book`对象，选择仅返回标题`title`和作者`author`，因为我们不需要其他字段（它也会返回`_id`和虚拟字段）。这里我们还调用`Book`上的`populate()` ，指定作者`author`字段 — 这将用完整的作者信息，替换存储的书本作者 id。

成功时，传递给查询的回调，将呈现 **book_list**(.pug) 模板，将标题`title`和`book_list`（包含作者的書本列表）作为变量传递。

## 视图

创建 **/views/book_list.pug** 并复制底下的文字。

```js
extends layout

block content
  h1= title

  ul
  each book in book_list
    li
      a(href=book.url) #{book.title}
      |  (#{book.author.name})

  else
    li There are no books.
```

這个视图扩展了 **layout.pug** 基本模板，并覆盖了名为 '**content**' 的區块 `block` 。它显示我们从控制器传入的标题`title`（通过`render()`方法），然后使用`each`-`in`-`else`语法，遍历`book_list`变量。为每本图书创建一个列表项，以显示书名，并作为书的详细信息页面的链接，后面跟着作者姓名。如果`book_list`中没有书，则执行`else`子句，并显示文字“没有书” 'There are no books.'。

> **备注：** 我们使用 `book.url` ，为每本书提供详细记录链接（我们已经实现了此路由，但尚未实现此页面）。这是 `Book` 模型的一个虚拟属性，它使用模型实例的 `_id` 字段，生成唯一的 URL 路径。

在这里，我們感兴趣的是，每本书被定义为两行，第二行使用管道（上面高亮显示）。这种方法是必要的，因为如果作者姓名位于上一行，那么它将成为超链接的一部分。

## 它看起來像是？

运行本应用 (参见 [测试路由](/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes#Testing_the_routes) 有相关的命令) ，并打开你的浏览器，访问 <http://localhost:3000/>。然后选择 所有书本 连结。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![Book List Page - Express Local Library site](new_book_list.png)

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下个部分：[书本实例列表页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
