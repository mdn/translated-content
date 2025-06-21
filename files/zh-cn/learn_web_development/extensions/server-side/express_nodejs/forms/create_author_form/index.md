---
title: 创建作者表单
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

本章节将演示如何定义一个用于创建 `Author` 对象的页面。

## 导入验证和修整方法

与[类型表单](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form)一样，要使用 _express-validator_，我们必须 _require_ 我们想要使用的函数。

打开 **/controllers/authorController.js**，并将以下代码添加到文件顶部（路由函数上方）：

```js
const { body, validationResult } = require("express-validator");
```

## 控制器——get 路由

找到导出的 `author_create_get()` 控制器方法并用以下代码替换。此方法会将 `title` 变量传入 **author_form.pug** 视图并渲染。

```js
// 展示 GET 方法获取的创建作者表单
exports.author_create_get = (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
};
```

## 控制器——post 路由

找到导出的 `author_create_post()` 控制器方法，并将其替换为以下代码。

```js
// 处理 POST 方法提交的创建作者表单
exports.author_create_post = [
  // 验证并且清理字段
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),

  // 在验证和修整完字段后处理请求
  asyncHandler(async (req, res, next) => {
    // 从请求中提取验证错误
    const errors = validationResult(req);

    // 使用经转义和去除空白字符处理的数据创建作者对象
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });

    if (!errors.isEmpty()) {
      // 出现错误。使用清理后的值/错误信息重新渲染表单
      res.render("author_form", {
        title: "Create Author",
        author: author,
        errors: errors.array(),
      });
      return;
    } else {
      // 表格中的数据有效

      // 保存作者信息
      await author.save();
      // 重定向到新的作者记录
      res.redirect(author.url);
    }
  }),
];
```

> [!WARNING]
> 切勿使用 `isAlphanumeric()` 来验证 _name_（正如上面代码所写的那样），因为有许多名字会使用其他字符集。我们在这里这样做是为了演示如何使用验证器，以及如何将其与其他验证器和错误报告进行链式调用。

此代码的结构和行为几乎与创建 `Genre` 对象一致。首先，我们验证并清理数据。如果数据无效，我们将重新显示表单以及用户最初输入的数据和错误消息列表。如果数据有效，那么我们将保存新的作者记录并将用户重定向到作者详情页面。

与 `Genre` 的 post 处理器不同，我们不会在保存 `Author` 对象之前检查其是否已经存在。从某种程度上说我们应该这样做，但目前我们可能会有多个同名作者。

验证代码演示了几个新特性：

- 我们可以链式调用验证器，使用 `withMessage()` 指定在先前的验证方法失败时需要显示的错误消息。这使得在没有大量代码重复的情况下，提供特定的错误消息变得非常容易。

  ```js
  [
    // 验证并修整字段
    body("first_name")
      .trim()
      .isLength({ min: 1 })
      .escape()
      .withMessage("First name must be specified.")
      .isAlphanumeric()
      .withMessage("First name has non-alphanumeric characters."),
    // …
  ];
  ```

- 我们可以使用 `optional()` 函数来保证仅当有字段输入时才去运行后续的验证（这允许我们验证可选字段）。例如，下面我们检查可选的出生日期是否符合 ISO8601 标准（传递的 `{ values: "falsy" }` 对象意味着我们将接受空字符串或 `null` 作为空值）。

  ```js
  [
    body("date_of_birth", "Invalid date of birth")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
  ];
  ```

- 参数以字符串形式从请求中接收。我们可以使用 `toDate()`（或 `toBoolean()`）将它们转换为正确的 JavaScript 类型（如上方验证器链末尾所示）。

## 视图

创建 **/views/author_form.pug** 并复制下方文本。

```pug
extends layout

block content
  h1=title

  form(method='POST')
    div.form-group
      label(for='first_name') First Name:
      input#first_name.form-control(type='text', placeholder='First name (Christian)' name='first_name' required value=(undefined===author ? '' : author.first_name) )
      label(for='family_name') Family Name:
      input#family_name.form-control(type='text', placeholder='Family name (Surname)' name='family_name' required value=(undefined===author ? '' : author.family_name))
    div.form-group
      label(for='date_of_birth') Date of birth:
      input#date_of_birth.form-control(type='date' name='date_of_birth' value=(undefined===author ? '' : author.date_of_birth) )
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg
```

该视图的结构和行为与 **genre_form.pug** 模板完全相同，因此我们不会再次描述它。

> [!NOTE]
> 某些浏览器不支持 `type="date"` 的 input，因此你不会获得日期选择器微件或默认的 `dd/mm/yyyy` 占位符，而是获取一个空的纯文本字段。一种解决方法是显式添加属性 `placeholder='dd/mm/yyyy'`，以便在功能较差的浏览器上仍然可以获得有关所需文本格式的信息。

### 自我挑战：添加死亡日期

上面的模板缺少用于输入死亡日期 `date_of_death` 的字段。按照与出生日期表单组相同的模式创建字段！

## 它看起来像是？

运行本应用，打开浏览器访问网址 `http://localhost:3000/`，然后点击 _Create new author_ 链接。如果一切设置正确，你的网站应类似于下方截图。在你输入一个值后，它应该会被保存，并且进入作者详情页面。

![作者创建页面——Express 本地图书馆网站](locallibary_express_author_create_empty.png)

> [!NOTE]
> 如果你尝试使用各种日期输入格式，你可能会发现格式 `yyyy-mm-dd` 行为不恰当。这是因为 JavaScript 中的日期字符串包含了 0 时这个时间，而且还将该格式的日期字符串（ISO 8601 标准）视为包括 0 时的 UTC 时间，而不是本地时间。如果你的时区在 UTC 以西，则本地日期显示将会是你输入的日期的前一天。这是我们在此没有解决的几个复杂问题（例如多字姓氏和多作者书籍）之一。

## 下一步

- 回到 [Express 教程 6: 使用表单](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
- 继续教程 6 的下一个部分：[创建书本表单](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form)
