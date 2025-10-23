---
title: 书本列表页面
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page
---

接下来我们将实现书本列表页面。这个页面需要呈现数据库中所有书本的列表，包含每本书的作者、标题，标题将成为一个超链接，链接到书本详细内容页面。

## 控制器

书本列表控制器函数需要获取数据库中所有 `Book` 对象的列表，对它们进行排序，然后将它们传给模板进行渲染。

打开 **/controllers/bookController.js**，找到导出的 `book_list()` 控制器方法，并替换为下面的代码。

```js
// 呈现数据库中所有书本的列表
exports.book_list = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("book_list", { title: "Book List", book_list: allBooks });
});
```

该路由处理器调用 `Book` 模型的 `find()` 方法，仅选择返回标题 `title` 和作者 `author`，因为我们不需要其他字段（它也会返回 `_id` 和虚拟字段），然后使用 `sort()` 方法对 `title` 进行字母排序。我们还调用了 `Book` 上的 `populate()`，指定作者 `author` 字段——即用完整的作者信息替换所存储书本的作者的 id。最后链式调用 `exec()` 来执行查询操作并返回一个 **Promise**。

路由处理器使用 `await` 来等待 **Promise**，代码会暂停执行直到它被兑现。如果 **Promise** 被兑现，查询结果就会被存储到 `allBooks` 变量中，并继续执行后续代码。

路由处理器在最后调用了 `render()`，指定了 **book_list (.pug)** 模板，并传入了 `title` 和 `book_list`。

## 视图

创建 **/views/book_list.pug** 并复制下方的文本。

```pug
extends layout

block content
  h1= title
  if book_list.length
    ul
      each book in book_list
        li
          a(href=book.url) #{book.title}
          |  (#{book.author.name})

  else
    p There are no books.
```

这个视图扩展了 **layout.pug** 基本模板，并覆盖了名为“**content**”的区块（`block`）。它显示了我们从控制器传入的标题 `title`（通过 `render()` 方法），然后使用 `each`-`in` 语法遍历 `book_list` 变量，为每本图书创建一个列表项，以显示书名，并作为书的详细信息页面的链接，后面跟着作者姓名。如果 `book_list` 中没有书，则执行 `else` 子句，并显示文本“There are no books.“。

> [!NOTE]
> 我们使用 `book.url` 为每本书提供详细记录的链接（我们已经实现了此路由，但尚未实现此页面）。这是 `Book` 模型的一个虚拟属性，它使用模型实例的 `_id` 字段，生成唯一的 URL 路径。

值得注意的是，每本书被定义为两行，第二行使用管道。这种方法是必要的，因为如果作者姓名位于上一行，那么它将成为超链接的一部分。

## 它看起來像是？

运行本应用（参见[测试路由](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#测试路由)以了解相关命令，并打开你的浏览器，访问 `http://localhost:3000/`。然后选择 _All books_ 链接。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![书本列表页面 - Express 教程：本地图书馆网站](new_book_list.png)

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下个部分：[书本实例列表页面](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
