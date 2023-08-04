---
title: 创建种类表单
slug: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
---

本章节演示如何定义我们的页面，创建`Genre` 物件（这是一个很好的起点，因为类型只有一个字段，它的名称`name`，没有依赖项）。像任何其他页面一样，我们需要设置路由，控制器和视图。

## 引入验证与无害化方法

在我们的控制器中使用 _express-validator_ 验证器，我們必須导入我们想要从 **'express-validator/check**' 和 **'express-validator/filter**' 模块中使用的函数。

打开**/controllers/genreController.js**，并在文件顶部添加以下行：

```js
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");
```

## 控制器—get 路由

找到导出的`genre_create_get()` 控制器方法，并将其替换为以下代码。这只是渲染**genre_form.pug**视图，传递一个 title 变量。

```js
// Display Genre create form on GET.
exports.genre_create_get = function (req, res, next) {
  res.render("genre_form", { title: "Create Genre" });
};
```

## 控制器—post 路由

找到导出的`genre_create_post()`控制器方法，并将其替换为以下代码。

```js
// Handle Genre create on POST.
exports.genre_create_post = [
  // Validate that the name field is not empty.
  body("name", "Genre name required").isLength({ min: 1 }).trim(),

  // Sanitize (trim and escape) the name field.
  sanitizeBody("name").trim().escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      Genre.findOne({ name: req.body.name }).exec(function (err, found_genre) {
        if (err) {
          return next(err);
        }

        if (found_genre) {
          // Genre exists, redirect to its detail page.
          res.redirect(found_genre.url);
        } else {
          genre.save(function (err) {
            if (err) {
              return next(err);
            }
            // Genre saved. Redirect to genre detail page.
            res.redirect(genre.url);
          });
        }
      });
    }
  },
];
```

首先要注意的是，控制器不是单个中间件函数（带参数（`req, res, next`）），而是指定一组中间件函数。数组传递给路由器函数，并按顺序调用每个方法。

> **备注：** 这种方法是必需的，因为消毒/验证器是中间件功能。

数组中的第一个方法定义了一个验证器（`body`），来检查 name 字段是否为空（在执行验证之前调用`trim()`，以删除任何尾随/前导空格）。

数组中的第二个方法（`sanitizeBody()`），创建一个清理程序来调用`trim()`修剪名称字段和调用`escape()`转义任何危险的 HTML 字符。

```js
// Validate that the name field is not empty.
body('name', 'Genre name required').isLength({ min: 1 }).trim(),

// Sanitize (trim and escape) the name field.
sanitizeBody('name').trim().escape(),
```

> **备注：** 验证期间运行的清洁器不会修改请求。这就是为什么我们必须在上面的两个步骤中调用`trim()`！

在指定验证器和清理器之后，我们创建了一个中间件函数，来提取任何验证错误。我们使用`isEmpty()` 来检查验证结果中，是否有任何错误。如果有，那么我们再次渲染表单，传入我们的已清理种类对象和错误消息的数组（`errors.array()`）。

```js
// Process request after validation and sanitization.
(req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var genre = new Genre(
      { name: req.body.name }
    );

    if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
    return;
    }
    else {
        // Data from form is valid.
        ... <save the result> ...
    }
}
```

如果种类名称数据有效，那么我们检查，是否已存在具有相同名称的种类`Genre`（因为我们不想创建重复项）。

如果是，我们会重定向到现有种类的详细信息页面。如果没有，我们保存新种类，并重定向到其详细信息页面。

```js
// Check if Genre with same name already exists.
Genre.findOne({ name: req.body.name }).exec(function (err, found_genre) {
  if (err) {
    return next(err);
  }
  if (found_genre) {
    // Genre exists, redirect to its detail page.
    res.redirect(found_genre.url);
  } else {
    genre.save(function (err) {
      if (err) {
        return next(err);
      }
      // Genre saved. Redirect to genre detail page.
      res.redirect(genre.url);
    });
  }
});
```

在我们所有的 `POST`控制器中，都使用了相同的模式：我们运行验证器，然后运行消毒器，然后检查错误，并使用错误信息重新呈现表单，或保存数据。

## 视图

当我们创建一个新的种类`Genre`时，在`GET`和`POST`控制器/路由中，都会呈现相同的视图（稍后在我们更新种类`Genre`时也会使用它）。

在`GET`情况下，表单为空，我们只传递一个 title 变量。在`POST`情况下，用户先前输入了无效数据 - 在种类变量`genre`中，我们传回了输入数据的已清理版本，并且在`errors`变量中，我们传回了一组错误消息。

```js
res.render("genre_form", { title: "Create Genre" });
res.render("genre_form", {
  title: "Create Genre",
  genre: genre,
  errors: errors.array(),
});
```

创建 **/views/genre_form.pug**，并复制下面的文本。

```plain
extends layout

block content
  h1 #{title}

  form(method='POST' action='')
    div.form-group
      label(for='name') Genre:
      input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' value=(undefined===genre ? '' : genre.name))
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

从我们之前的教程中，可以很好地理解这个模板的大部分内容。首先，我们扩展 **layout.pug**基本模板，并覆盖名为“**content**”的块`block`。然后我们有一个标题，我们从控制器传入的标题`title`（通过`render()` 方法）。

接下来，我们有 HTML 表单的 Pug 代码，它使用`POST`方法将数据发送到服务器，并且因为操作`action`是空字符串，所以将数据发送到与页面相同的 URL。

表单定义了一个名为“name”的“text”类型的必填字段。字段的默认值，取决于是否定义了种类变量`genre`。如果从`GET`路由调用，它将为空，因为这是一个新表单。如果从`POST`路由调用，它将包含用户最初输入的（无效）值。

页面的最后一部分是错误代码。如果已定义错误变量，则只会打印错误列表（换句话说，当模板在`GET`路由上呈现时，此部分不会出现）。

> **备注：** 这只是呈现错误的一种方法。您还可以从错误变量中，获取受影响字段的名称，并使用这些，来控制错误消息的呈现位置，以及是否应用自定义 CSS 等。

## 它看起來像是？

运行应用程序，打开浏览器到<http://localhost:3000/>，然后选择 Create new genre 链接。如果一切设置正确，您的网站应该类似于以下屏幕截图。输入值后，应保存该值，您将进入种类详细信息页面。

![Genre Create Page - Express Local Library site](locallibary_express_genre_create_empty.png)

我们针对服务器端，验证的唯一错误是种类字段不能为空。下面的屏幕截图，显示了如果您没有提供种类（以红色突出显示），错误列表会是什么样子。

![](locallibary_express_genre_create_error.png)

> **备注：** 我们的验证使用`trim()`，来确保不接受空格作为种类名称。我们还可以在表单中 的字段定义中，添加值`required='true'`，来验证客户端字段不为空：
>
> ```js
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' value=(undefined===genre ? '' : genre.name), required='true' )
> ```

## 下一步

- 回到 [Express 教程 6: 使用表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms)
- 继续教程 6 下一个部分：[创建作者表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form)
