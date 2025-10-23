---
title: 创建类型表单
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

本章节演示如何定义页面来创建 `Genre` 对象（这是一个很好的起点，因为 `Genre` 只有一个字段，即它的名称 `name`，并且没有依赖项）。与任何其他页面一样，我们需要设置路由、控制器和视图。

## 导入验证与清理方法

要控制器中使用 _express-validator_，我们必须从 `'express-validator'` 模块中 _require_ 我们想使用的函数。

打开 **/controllers/genreController.js**，在文件顶部、路由处理器之前添加下方代码：

```js
const { body, validationResult } = require("express-validator");
```

> [!NOTE]
> 此语法允许我们使用 `body` 和 `validationResult` 作为关联的中间件函数，正如你将在下面的 post 路由部分中看到的那样。它相当于：
>
> ```js
> const validator = require("express-validator");
> const body = validator.body;
> const validationResult = validator.validationResult;
> ```

## 控制器——get 路由

找到导出的 `genre_create_get()` 控制器方法，并将其替换为以下代码。这将渲染 **genre_form.pug** 视图，传递一个标题变量。

```js
// 呈现 GET 方法获取的 Genre 表单
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};
```

请注意，这里我们将使用一个“普通”express 路由处理器替换我们在 [Express 教程 4：路由和控制器](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)中添加的占位异步处理器。我们不需要为该路由添加 `asyncHandler()` 包装器，因为它不包含任何可能引发异常的代码。

## 控制器——post 路由

找到导出的 `genre_create_post()` 控制器方法，并将其替换为以下代码。

```js
// 处理 POST 方法创建的 Genre
exports.genre_create_post = [
  // 验证及清理名称字段
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  // 处理验证及清理过后的请求
  asyncHandler(async (req, res, next) => {
    // 从请求中提取验证时产生的错误信息
    const errors = validationResult(req);

    // 使用经去除空白字符和转义处理的数据创建一个类型对象
    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // 出现错误。使用清理后的值/错误信息重新渲染表单
      res.render("genre_form", {
        title: "Create Genre",
        genre: genre,
        errors: errors.array(),
      });
      return;
    } else {
      // 表格中的数据有效
      // 检查是否存在同名的 Genre
      const genreExists = await Genre.findOne({ name: req.body.name })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if (genreExists) {
        // 存在同名的 Genre，则重定向到详情页面
        res.redirect(genreExists.url);
      } else {
        await genre.save();
        // 保存新创建的 Genre，然后重定向到类型的详情页面
        res.redirect(genre.url);
      }
    }
  }),
];
```

首先需要注意的是，控制器不是单个中间件函数（带有参数 `(req, res, next)`），而是指定了中间件函数*数组*。该数组传递给路由器函数并依次执行各个方法。

> [!NOTE]
> 这种方法是必要的，因为验证器是中间件函数。

数组中的第一个方法定义了一个 body 验证器（`body()`），用于验证和清理字段。这个方法使用 `trim()` 删除所有的首部/尾部空白，检查 _name_ 字段是否为空，然后使用 `escape()` 删除任何危险的 HTML 字符。

```js
[
  // 检验 name 字段不为空
  body("name", "Genre name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  // …
];
```

指定验证器后，我们创建一个中间件函数来提取任何验证错误。我们使用 `isEmpty()` 来检查验证结果是否有错误。如果有，我们就再次渲染表单，传入经过清理的类型对象和错误消息数组（`errors.array()`）。

```js
// 处理验证和清理之后的请求
asyncHandler(async (req, res, next) => {
  // 从请求中提取验证错误
  const errors = validationResult(req);

  // 使用经去除空白字符和转义处理的数据创建一个类型对象
  const genre = new Genre({ name: req.body.name });

  if (!errors.isEmpty()) {
    // 出现错误。使用清理后的值/错误信息重新渲染表单
    res.render("genre_form", {
      title: "Create Genre",
      genre: genre,
      errors: errors.array(),
    });
    return;
  } else {
    // 表单中的数据有效
    // …
  }
});
```

如果类型名称数据有效，那么我们执行不区分大小写的搜索，以查看是否存在具有相同名称的 `Genre`（因为我们不想创建仅字母大小写不同的重复或过于近似的记录，例如“Fantasy”、“fantasy”、“FaNtAsY”等等）。为了在搜索时忽略掉大小写和重音，我们链式调用了 [`collation()`](<https://mongoosejs.com/docs/api/query.html#Query.prototype.collation()>) 方法，指定“en”的区域设置和 2 的强度（更多信息请参阅 MongoDB 的[排序规则](https://www.mongodb.com/docs/manual/reference/collation/)主题）。

如果匹配名称的 `Genre` 已经存在，我们将重定向到其详情页面。如果不存在，我们则保存新种类并重定向到其详情页面。请注意，这里我们 `await` 数据库的查询结果，遵循与其他路由处理器相同的模式。

```js
// 检查是否存在同名的 Genre
const genreExists = await Genre.findOne({ name: req.body.name })
  .collation({ locale: "en", strength: 2 })
  .exec();
if (genreExists) {
  // 存在同名的 Genre，则重定向到详情页面
  res.redirect(genreExists.url);
} else {
  await genre.save();
  // 保存新创建的 Genre，然后重定向到详情页面
  res.redirect(genre.url);
}
```

我们所有的 post 控制器中都使用了相同的模式：运行验证器（带有清理功能），然后检查错误并重新渲染带有错误信息的表单或保存数据。

## 视图

当我们创建新的种类 `Genre` 时，会在 `GET` 和 `POST` 控制器/路由中渲染相同的视图（稍后当我们*更新*种类时也会使用它），在 `GET` 情况下，表单为空，我们只传递一个标题变量。在 `POST` 情况下，用户之前输入了无效数据——对于 `genre` 变量，我们回传经清理后的输入数据，对于错误变量，则回传一组错误消息。下面的代码显示了在两种情况下渲染模板的控制器代码。

```js
// 渲染 GET 路由
res.render("genre_form", { title: "Create Genre" });

// 渲染 POST 路由
res.render("genre_form", {
  title: "Create Genre",
  genre,
  errors: errors.array(),
});
```

创建 **/views/genre_form.pug**，并复制下面的文本。

```pug
extends layout

block content

  h1 #{title}

  form(method='POST')
    div.form-group
      label(for='name') Genre:
      input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

从我们之前的教程中可以很好地理解这个模板的大部分内容。首先，我们扩展 **layout.pug** 基本模板并覆盖名为“**content**”的 `block`。然后我们使用从控制器传入 `title`（通过 `render()` 方法）创建了一个标题。

接下来，pug 代码中的 HTML 表单部分则会使用 `method="POST"` 方法将数据发送到服务器，并且由于 `action` 是空字符串，因此会将数据发送到与页面相同的 URL。

该表单定义了一个名为“name”的“text”类型的必填字段。该字段的默认值取决于是否定义了种类 `genre` 变量。如果从 `GET` 路由调用，它将为空，因为这是一个新表单。如果从 `POST` 路由调用，它将包含用户最初输入的（无效）值。

该页面的最后一部分是错误代码。如果已定义错误变量，则只会打印错误列表（换句话说，当模板在 `GET` 路由上呈现时，此部分将不会出现）。

> [!NOTE]
> 这只是呈现错误的一种方法。你还可以从错误变量中获取受影响字段的名称，并使用它们来控制错误消息的呈现位置以及是否应用自定义 CSS 等。

## 它看起来像是？

运行应用程序，打开浏览器到 `http://localhost:3000/`，然后选择 _Create new genre_ 链接。如果一切设置正确，你的网站应该类似于下方的屏幕截图。输入值后，应将其保存，并且你将进入种类详情页面。

![种类创建页面——Express 本地图书馆网站](locallibary_express_genre_create_empty.png)

我们在服务器端验证的唯一错误是种类字段必须至少包含三个字符。下面的屏幕截图显示了如果你提供仅包含一个或两个字符的类型（以黄色突出显示），错误列表会是什么样子。

![本地图书馆应用的创建种类部分。左栏有一个垂直导航栏。右侧部分是创建一个新种类，标题为“创建种类”。有一个标有“种类”的输入字段。底部有一个提交按钮。“提交”按钮正下方有一条错误消息，上面写着“需要类型名称”。本文作者强调了该错误消息。表格中没有视觉指示表明类型是必需的，也没有错误消息仅在出现错误时出现。](locallibary_express_genre_create_error.png)

> [!NOTE]
> 我们的验证使用 `trim()` 来确保不接受空格作为种类名称。我们还对表单中​​字段定义添加 `required` [布尔属性](/zh-CN/docs/Glossary/Boolean/HTML)以在客户端测验证该字段不为空：
>
> ```pug
> input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' required value=(undefined===genre ? '' : genre.name) )
> ```

## 下一步

- 回到 [Express 教程 6: 使用表单](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
- 继续教程 6 下一个部分：[创建作者表单](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form)
