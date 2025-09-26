---
title: 书籍详细信息页面
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
---

*书籍详细信息页面*需要呈现指定书籍（`Book`，使用自动生成的 `_id` 字段值进行标识）的信息，以及图书馆中每一个关联的副本（`BookInstance`）的信息。无论我们在哪里呈现一个作者、种类，或书籍实例，都应该链接到关联的详细信息页面。

## 控制器

打开 **/controllers/bookController.js**，找到导出的 `book_detail()` 控制器方法，并将其替换为以下代码。

```js
// 显示特定书籍的详细信息页面。
exports.book_detail = asyncHandler(async (req, res, next) => {
  // 获取书籍的详细信息，以及特定书籍的实例
  const [book, bookInstances] = await Promise.all([
    Book.findById(req.params.id).populate("author").populate("genre").exec(),
    BookInstance.find({ book: req.params.id }).exec(),
  ]);

  if (book === null) {
    // 没有结果。
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("book_detail", {
    title: book.title,
    book: book,
    book_instances: bookInstances,
  });
});
```

> [!NOTE]
> 我们不需要用 require 导入任何额外的模块，因为我们在实现主页控制器时已经导入了依赖项。

此方法与[类别详细信息页面](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)描述的方法完全相同。路由控制器函数使用 `Promise.all()` 并行查询指定的书籍（`Book`）以及它的相关副本（`BookInstance`）。如果没有找到匹配的书籍，就会返回一个带有“404: Not Found”错误的 Error 对象。如果找到了书籍，那么就会使用“book_detail”模板呈现检索到的数据库信息。由于“title”键用于给网页命名（如“layout.pug”中定义的标题），所以这次我们在渲染网页时传递了 `results.book.title`。

## 视图

创建 **/views/book_detail.pug** 并添加以下文本。

```pug
extends layout

block content
  h1 Title: #{book.title}

  p #[strong Author:]
    a(href=book.author.url) #{book.author.name}
  p #[strong Summary:] #{book.summary}
  p #[strong ISBN:] #{book.isbn}
  p #[strong Genre:]
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
      p #[strong Id:]
        a(href=val.url) #{val._id}

    else
      p There are no copies of this book in the library.
```

在这个模板中，几乎所有内容都在先前的章节演示过了。

> [!NOTE]
> 与本书相关的类别列表在模板中的实现如下。除了最后一个之外，这会在与本书相关的每个类别后面添加一个逗号。
>
> ```pug
>   p #[strong Genre:]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,
> ```

## 它看起来像是？

运行本应用，并打开浏览器访问 `http://localhost:3000/`。选择 _All books_ 链接，然后选择其中某一书籍。如果所有内容都设置正确了，你的页面应类似于以下屏幕截图。

![书籍详细信息页面——Express 本地图书馆网站](locallibary_express_book_detail.png)

## 下一步

- 回到 [Express 教程 5：呈现图书馆数据](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 的下一个部分：[作者详细信息页面](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
