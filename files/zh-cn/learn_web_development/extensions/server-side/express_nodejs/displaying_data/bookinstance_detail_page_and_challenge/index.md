---
title: 书本实例详情页面与自我挑战
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
original_slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
---

{{LearnSidebar}}

## 书本实例详情页面

`BookInstance` 详情页面需要展示每一个 `BookInstance` 的信息，使用其（自动生成的）`_id` 字段值进行标识。它包含了 `Book` 名称（作为*书本细节页面*的链接）以及记录中的其他信息。

### 控制器

打开 **/controllers/bookinstanceController.js**，找到导出的 `bookinstance_detail()` 控制器方法，并用以下代码替换。

```js
// 展示特定 BookInstance 的详情页。
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id)
    .populate("book")
    .exec();

  if (bookInstance === null) {
    // 没有结果。
    const err = new Error("Book copy not found");
    err.status = 404;
    return next(err);
  }

  res.render("bookinstance_detail", {
    title: "Book:",
    bookinstance: bookInstance,
  });
});
```

该实现与其他模型详细信息页面所使用的非常相似。路由控制器函数使用从 URL（使用路由）中提取的特定的书籍实例的 ID 来调用 `BookInstance.findById()`，并通过请求参数 `req.params.id` 在控制器中访问。然后调用 `populate()` 来获取与 `Book` 相关的详细信息。如果没有找到匹配的 `BookInstance`，则将错误传递给 Express 的中间件。否则就将返回的数据传递给 **bookinstance_detail.pug** 视图呈现。

### 视图

创建 **/views/bookinstance_detail.pug** 并复制以下内容。

```pug
extends layout

block content

  h1 ID: #{bookinstance._id}

  p #[strong Title: ]
    a(href=bookinstance.book.url) #{bookinstance.book.title}
  p #[strong Imprint:] #{bookinstance.imprint}

  p #[strong Status: ]
    if bookinstance.status=='Available'
      span.text-success #{bookinstance.status}
    else if bookinstance.status=='Maintenance'
      span.text-danger #{bookinstance.status}
    else
      span.text-warning #{bookinstance.status}

  if bookinstance.status!='Available'
    p #[strong Due back:] #{bookinstance.due_back}
```

该模版中的所有内容均已在前面的部分中进行了演示。

### 它看起來像是？

运行本应用，并打开浏览器访问 `http://localhost:3000/`。选择 _All book-instances_ 链接，然后选择其中一本书。如果一切设定正确，你的网站应类似于下方的屏幕截图。

![书本实例详情页——Express 本地图书馆网站](locallibary_express_bookinstance_detail.png)

## 自我挑战

目前，我们网站上显示的大多数日期都使用默认的 JavaScript 格式（例如 _Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_）。本文的挑战是改善作者 `Author` 的寿命信息（死亡/出生日期）和*书本实例详细信息*页面的日期显示外观，以使用以下格式：Oct 6th, 2016。

> [!NOTE]
> 你可以使用与*书本实例列表*相同的方法（将生命周期的虚拟属性添加到 `Author` 模型并使用 [luxon](https://www.npmjs.com/package/luxon) 来设置日期字符串的格式）。

要完成这一挑战，你必须：

1. 在*书本实例详情*页面中将变量 `due_back` 替换为 `due_back_formatted`。
2. 更新作者 `Author` 模型以添加寿命虚拟属性。寿命应类似于：_date_of_birth - date_of_death_，这两个值的格式与 `BookInstance.due_back_formatted` 的日期格式相同。
3. 在当前显示使用 `date_of_birth` 和 `date_of_death` 的所有视图中使用 `Author.lifespan`。

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
