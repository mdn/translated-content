---
title: 书本实例细节页面、与自我挑战
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
---

## 书本实例细节页面

`BookInstance`细节页面，需要呈现每一个`BookInstance`的信息，用 `_id` 字段值（自动产生）做识别。它包含了 `Book` 名称 (也是一个连结，连到 书本细节页面)，接着是纪录中的其他的信息。

### 控制器

打开 **/controllers/bookinstanceController.js**，找到 exported `bookinstance_detail()` 控制器方法，并替换以下代码。

```js
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res, next) {
  BookInstance.findById(req.params.id)
    .populate("book")
    .exec(function (err, bookinstance) {
      if (err) {
        return next(err);
      }
      if (bookinstance == null) {
        // No results.
        var err = new Error("Book copy not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("bookinstance_detail", {
        title: "Book:",
        bookinstance: bookinstance,
      });
    });
};
```

该方法使用从 URL（使用路由）中提取的特定书本实例的 ID，调用`BookInstance.findById()`，并通过请求参数（`req.params.id`），在控制器中访问。然后调用`populate()`来获取相关`Book`的详细信息。

### 视图

创建 **/views/bookinstance_detail.pug**，并复制到下面的内容中。

```js
extends layout

block content

  h1 ID: #{bookinstance._id}

  p #[strong Title:]
    a(href=bookinstance.book.url) #{bookinstance.book.title}
  p #[strong Imprint:] #{bookinstance.imprint}

  p #[strong Status:]
    if bookinstance.status=='Available'
      span.text-success #{bookinstance.status}
    else if bookinstance.status=='Maintenance'
      span.text-danger #{bookinstance.status}
    else
      span.text-warning #{bookinstance.status}

  if bookinstance.status!='Available'
    p #[strong Due back:] #{bookinstance.due_back}
```

本模组中的所有东西，都在先前的章节演示过了。

### 它看起來像是？

运行本应用，并打开浏览器访问 <http://localhost:3000/>。选择 All book-instances 连结，然后选择其中一本。如果每个东西都设定正确了，你的网站看起来应该像是底下的截图。

![BookInstance Detail Page - Express Local Library site](locallibary_express_bookinstance_detail.png)

## 自我挑战

目前，我们网站上显示的大多数日期，都使用默认的 JavaScript 格式（例如 _Tue Dec 06 2016 15:49:58 GMT+1100_（AUS 东部夏令时间）。本文的挑战，是改善作者`Author`生命周期日期显示的外观信息（死亡/出生日期）和 BookInstance 详细信息页面，使用格式：December 6th, 2016。

> **备注：** 您可以使用与我们用于 Book Instance List 的相同方法（将生命周期的虚拟属性，添加到`Author`模型，并使用[moment](https://www.npmjs.com/package/moment)来设置日期字符串的格式）。

这一挑战的要求：

1. 用 BookInstance 详细信息页面中的 `due_back_formatted` 替换 `due_back`。
2. 更新作者模块以添加寿命虚拟属性。寿命应該有两个值： *date_of_birth - date_of_death，這*两个值的格式与 `BookInstance.due_back_formatted`的日期格式相同。
3. 在当前使用`date_of_birth` 和 `date_of_death`的所有视图中，使用 `Author.lifespan` 。

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
