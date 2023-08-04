---
title: 主页
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Home_page
---

我们创建的第一个页面，是网站的主页面，可以从网站的根目录 (`'/'`) ，或者 catalog 的根目录 (`catalog/`) 访问。这将呈现一些网站的静态文字描述，以及动态计算数据库中不同记录类型的“计数”。

我们已经为主页创建了一个路由。为了完成页面，我们需要更新控制器函数，以从数据库中提取记录的“计数”，并创建一个可用于呈现页面的视图（模板）。

## 路由

在 [前面的教程](/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes)，我们创建 index 页面路由。此处要提醒的是，所有的路由函式，都定义在 **/routes/catalog.js**:

```js
// GET catalog home page.
router.get("/", book_controller.index); //This actually maps to /catalog/ because we import the route with a /catalog prefix
```

在 **/controllers/bookController.js** 中，定义回调函数参数 (`book_controller.index`) ：

```js
exports.index = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};
```

我们扩展这个控制器函数，以从我们的模型获取信息，然后使用模板（视图）渲染它。

## 控制器

索引控制器函数需要获取以下有关信息，即数据库中有多少`Book`，`BookInstance`，可用的`BookInstance`，`Author`和`Genre`记录，将这些数据渲染到模板中，以创建 HTML 页面，然后将其返回到 HTTP 响应中。

> **备注：** 我们使用[`count()`](http://mongoosejs.com/docs/api.html#model_Model.count) 方法来获取每个模型的实例数量。这在具有一组可选条件的模型上进行调用，以匹配第一个参数，而回调放在第二个参数（如[使用数据库](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose)[(Mongoose)](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose)）中讨论的那样，并且还可以返回 `Query` ，然后稍后以回调执行它。当数据库返回计数时，将返回该回调，并将错误值（或空值`null`）作为第一个参数，并将记录计数（如果存在错误，则返回 null）作为第二个参数。
>
> ```js
> SomeModel.count({ a_model_field: "match_value" }, function (err, count) {
>   // ... do something if there is an err
>   // ... do something with the count if there was no error
> });
> ```

打开 **/controllers/bookController.js**. 在文件顶部附近，您应该看到导出的 `index()` 函数。

```python
var Book = require('../models/book')

exports.index = function(req, res, next) {
 res.send('NOT IMPLEMENTED: Site Home Page');
}
```

用以下代码片段替换上面的所有代码。这要做的第一件事，是导入 (`require()`) 所有模型（以粗体突出高亮显示）。我们需要这样做，是因为我们将使用它们来获取记录的计数。然后它会导入异步模块 _async_。

```js
var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");
var BookInstance = require("../models/bookinstance");

var async = require("async");

exports.index = function (req, res) {
  async.parallel(
    {
      book_count: function (callback) {
        Book.count({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      book_instance_count: function (callback) {
        BookInstance.count({}, callback);
      },
      book_instance_available_count: function (callback) {
        BookInstance.count({ status: "Available" }, callback);
      },
      author_count: function (callback) {
        Author.count({}, callback);
      },
      genre_count: function (callback) {
        Genre.count({}, callback);
      },
    },
    function (err, results) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    },
  );
};
```

`async.parallel()` 方法传递一个对象，其中包含用于获取每个模型计数的函数。这些函数都是在同一时间开始的。当这些函数全部完成时，最终回调将与结果参数中的计数（或错误）一起被调用。

成功时，回调函数调用 [`res.render()`](https://expressjs.com/en/4x/api.html#res.render)，指定名为 '**index**' 的视图（模板），以及一个对象包含了要插入其中的数据（这包括我们模型计数的结果对象）。数据以键值对的形式提供，可以使用键在模板中访问。

> **备注：** 上面的`async.parallel()`裡的回调函数有点不寻常，因为不管是否出现错误，我们都会渲染页面（通常您可能使用单独的执行路径来处理错误的显示）。

## 视图

打开 **/views/index.pug**，并用底下文字取代它的内容。

```js
extends layout

block content
  h1= title
  p Welcome to #[em LocalLibrary], a very basic Express website developed as a tutorial example on the Mozilla Developer Network.

  h1 Dynamic content

  if error
    p Error getting dynamic content.
  else
    p The library has the following record counts:

    ul
      li #[strong Books:] !{data.book_count}
      li #[strong Copies:] !{data.book_instance_count}
      li #[strong Copies available:] !{data.book_instance_available_count}
      li #[strong Authors:] !{data.author_count}
      li #[strong Genres:] !{data.genre_count}
```

这个视图很简单。我们扩展了 **layout.pug** 基本模板，覆盖了名为 '**content**' 的模块 `block`。第一个`h1`标题，将是传递给`render()`函数的`title` 变量的转义文本 — 请注意 '`h1=`' 的使用方式，将使得接下來的文本，被视为 JavaScript 表达式。然后我们放入一个介绍本地图书馆的段落。

在动态内容标题下，我们检查从`render()`函数传入的错误变量，是否已定义。如果是这样，我们列出这个错误。如果不是，我们从`data`变量中，获取并列出每个模型的副本数量。

> **备注：** 我们没有转义计数值 (i.e. 我们使用 `!{}` 语法) ，因为计数值已经被计算过了。如果信息是由终端用户提供的，那么我们就会转义該变量，以用于显示。

## 它看起来像是？

此处，我们应该已经创建了呈现 index 页面，所需要的每样东西。运行本地图书馆应用，并打开浏览器访问 <http://localhost:3000/>。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![Home page - Express Local Library site](locallibary_express_home.png)

> **备注：** 您将无法使用侧边栏链接，因为这些网页的网址，视图和模板尚未定义。例如，如果您尝试，取决于您点击的链接，您将获取“尚未实作：图书清单”等错误。在“控制器”文件中的不同控制器中，會指定这些字符串文字（将被合适的数据替换）。

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下個部分：[书本列表页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
