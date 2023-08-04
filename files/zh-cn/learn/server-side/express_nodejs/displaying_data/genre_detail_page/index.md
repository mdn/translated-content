---
title: 种类细节页面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
---

种类细节页面，需要利用`_id` 字段值 (自动生成) ，以呈现特定种类实例的信息。此页面应该呈现种类名称，各个种类的所有书本列表 (每本书都连结到书本的细节页面)。

## 控制器

打开 **/controllers/genreController.js** ，并在档案最上方引用 async 和 Book 模组。

```js
var Book = require("../models/book");
var async = require("async");
```

找到导出的 `genre_detail()` 控制器方法，并将其替换为以下代码。

```js
// Display detail page for a specific Genre.
exports.genre_detail = function (req, res, next) {
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books: function (callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // No results.
        var err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    },
  );
};
```

该方法使用`async.parallel()`，并行查询类型名称及其相关联的书本，并在（如果）两个请求成功完成时，回调呈现页面。

所需种类记录的 ID，在 URL 的末尾编码，并根据路由定义（**/genre/:id**）自动提取。通过请求参数（`req.params.id`）在控制器内访问 ID。它在 `Genre.findById()` 中用于获取当前种类。它还用于获取符合当前种类的所有`Book`对象，就是在种类字段中具有种类 ID 的那些 `Book.find({ 'genre': req.params.id })`。

> **备注：** 如果数据库中不存在该类型（即它可能已被删除），则`findById()`将成功返回，但没有结果。在这种情况下，我们想要显示一个“未找到”页面，因此我们创建一个`Error`对象，并将其传递给链中的下一个中间件函数`next`。
>
> ```js
> if (results.genre == null) {
>   // No results.
>   var err = new Error("Genre not found");
>   err.status = 404;
>   return next(err);
> }
> ```
>
> 然后，此消息将传播给我们的错误处理代码（这是在我们[生成应用程序框架](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#error_handling)时设置的 - 有关更多信息，请参阅[处理错误](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction#Handling_errors)）。

渲染的视图是 **genre_detail**，它传递了该类型的标题`title`，种类`genre`和书本列表的变量（`genre_books`）。

## 视图

创建 **/views/genre_detail.pug** ，并填写底下文字：

```js
extends layout

block content

  h1 Genre: #{genre.name}

  div(style='margin-left:20px;margin-top:20px')

    h4 Books

    dl
    each book in genre_books
      dt
        a(href=book.url) #{book.title}
      dd #{book.summary}

    else
      p This genre has no books
```

这个视图跟我们其他的模板非常相似。主要的差别在于，我们不使用 `title` 传送第一个标题 (虽然它还是用在底层的 **layout.pug** 模板，设定页面的标题)。

## 它看起來像是？

运行本应用，并打开浏览器访问 <http://localhost:3000/>。选择 All genres 连结，然后选择其中一个种类 (例如，"Fantasy")。如果每样东西都设定正确了，你的页面看起来应该像底下的截图。

![Genre Detail Page - Express Local Library site](locallibary_express_genre_detail.png)

> **备注：** 您可能会收到与此类似的错误：
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> 这是来自 **req.params.id** 的 mongoose 错误。要解决这个问题，首先需要在 **genreController.js** 页面上要求 mongoose，如下所示：
>
> ```js
> var mongoose = require("mongoose");
> ```
>
> 然后使用 **mongoose.Types.ObjectId()**将 id 转换为可以使用的。例如：
>
> ```js
> exports.genre_detail = function(req, res, next) {
>     var id = mongoose.Types.ObjectId(req.params.id);
>     ...
> ```

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下一个部分：[书本细节页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
