---
title: "Express 教程 6: 使用表单"
slug: Learn/Server-side/Express_Nodejs/forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}

在此教程中我们会教你如何使用 Express 并且结合 Pug 来实现 HTML 表单，并且如何从数据库中创建，更新和删除文档。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件：</th>
      <td>
        <p>
          完成前面所有的教程，包括
          <a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data"
            >Express 教程第 5 章：展示图书馆数据</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        <p>了解如何编写表单获取用户信息，并且将这些数据更新到数据库中。</p>
      </td>
    </tr>
  </tbody>
</table>

## 概览

[HTML 表单](/zh-CN/docs/Web/Guide/HTML/Forms)在网页中是一个或多个字段/小工具的集合，它被用来收集用户的信息，并将信息上传到服务器。表单作为一种用来收集用户的机制，非常的灵活，因为有各种合适的输入框，来接受各种类型的数据——文本框，复选框，单选按钮，时间选择器等。表单和服务器交互数据也相对安全，因为它使用 POST 请求发送数据，保护不受跨站点请求伪造攻击（cross-site request forgery）的威胁。

但是表单同样也很复杂！开发者需要为表单编写 HTML，在服务器上验证，并且正确去除有害的数据（浏览器上也可能需要），对于任何不合法的字段，需要传给用户相应的错误信息，当数据成功提交后，处理数据，并设法通知用户提交成功。

此教程将展示上述的操作，如何在 _Express_ 中实现。在此过程中，我们将扩展 LocalLibrary 网站，以允许用户创建，编辑和删除图书馆中的项目。

> **备注：** 我们还没有考虑如何将特定路由，限制为经过身份验证或授权的用户，因此在这个时间点，任何用户都可以对数据库进行更改。

### HTML 表单

首先简要概述[HTML 表单](/zh-CN/docs/Web/Guide/HTML/Forms)。考虑一个简单的 HTML 表单，其中包含一个文本字段，用于输入某些“团队”的名称，及其相关标签：

![Simple name field example in HTML form](form_example_name_field.png)

表单在 HTML 中，定义为`<form>...</form>`标记内的元素集合，包含至少一个`type="submit"`的`input`输入元素。

请注意，我非常建议您这里使用 input 的 submit 而不是 button！这会使你感到愉悦。

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

虽然这里，我们只包含一个（文本）字段，用于输入团队名称，但表单可能包含任意数量的其他输入元素，及其相关标签。字段的 `type` 属性，定义将显示哪种窗口小部件。该字段的名称 `name` 和 `id` ，用于标识 JavaScript/CSS/HTML 中的字段，而 `value`定义字段首次显示时的初始值。匹配团队标签使用 `label` 标签，指定（请参阅上面的“输入名称” "Enter name"），其中 `for` 字段，包含 `input` 相关输入的 `id` 值。

另外，有必要说一下，HTML 中 form 表单默认就是以 post 提交的。它比 get 方式存储量更大、传输更安全。

提交输入（`submit`）将显示为按钮（默认情况下） - 用户可以按此按钮，将其他输入元素包含的数据，上传到服务器（在本例中，只有`team_name`）。表单属性，定义用于发送数据的 HTTP `method`方法，和服务器上数据的目标（`action`）：

- `action`: 提交表单时，要发送数据以进行处理的资源/ URL。如果未设置（或设置为空字符串），则表单将提交回当前页面 URL。
- `method`: 用于发送数据的 HTTP 方法：`POST` 或 `GET`。

  - 如果数据将导致服务器数据库的更改，则始终应该使用`POST`方法，因为这更加可以抵抗跨站点伪造请求攻击。
  - `GET`方法只应用于不更改用户数据的表单（例如，搜索表单）。当您希望能够为 URL 添加书签或共享时，建议使用此选项。

### 表单处理流程

表单处理使用的技术，与我们学习过、用来显示有关模型的信息的所有技术，是相同的：路由将我们的请求发送到控制器函数，该函数执行所需的任何数据库操作，包括从模型中读取数据，然后生成并返回 HTML 页面。使事情变得更复杂的是，服务器还需要能够处理用户提供的数据，并在出现任何问题时，重新显示带有错误信息的表单。

下面显示了处理表单请求的流程图，从包含表单的页面请求开始（以绿色显示）：

![](web_server_form_handling.png)

如上图所示，构成处理代码所需要做的主要是：

1. 在用户第一次请求时显示默认表单。

   - 表单可能包含空白字段（例如，如果您正在创建新记录），或者可能预先填充了初始值（例如，如果您要更改记录，或者具有有用的默认初始值）。

2. 接收用户提交的数据，通常是在 HTTP `POST`请求中。
3. 验证并清理数据。
4. 如果任何数据无效，请重新显示表单 - 这次使用用户填写的任何值，和问题字段的错误消息。
5. 如果所有数据都有效，请执行所需的操作（例如，将数据保存在数据库中，发送通知电子邮件，返回搜索结果，上传文件等）
6. 完成所有操作后，将用户重定向到另一个页面。

表格处理代码，通常使用`GET`路由，以实现表单的初始显示，以及`POST`路由到同一路径，以处理表单数据的验证和处理。这是将在本教程中使用的方法！Express 本身不提供表单处理操作的任何特定支持，但它可以使用中间件，以处理表单中的`POST`和`GET`参数，并验证/清理它们的值。

### 验证和清理

在储存表单中的数据之前，必须对其进行验证和清理：

- 验证检查输入的值，适用于每个字段（范围，格式等），并且已为所有必填字段提供了值。
- 清理删除/替换数据中的字符，可能用于将恶意内容发送到服务器。

在本教程中，我们将使用流行的 [express-validator](https://www.npmjs.com/package/express-validator) 模块，来执行表单数据的验证和清理。

#### 安装

通过在项目的根目录中，运行以下命令来安装模块。

```bash
npm install express-validator --save
```

#### 使用 express-validator

> **备注：** Github 上的[express-validator](https://github.com/ctavan/express-validator#express-validator)指南，提供了 API 的良好概述。我们建议您阅读该内容，以了解其所有功能（包括创建自定义验证程序）。下面我们只介绍一个对 LocalLibrary 有用的子集。

要在我们的控制器中使用验证器，我们必须从'**express-validator/check**'和'**express-validator/filter**'模块中，导入我们想要使用的函数，如下所示：

```js
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");
```

有许多可用的功能，允许您一次检查和清理请求参数，正文，标头，cookie 等数据，或所有数据。对于本教程，我们主要使用`body`， `sanitizeBody`，和 `validationResult`（如上面“导入”的）。

功能定义如下：

- [`body(fields[, message])`](https://github.com/ctavan/express-validator#bodyfields-message): 指定请求本文中的一组字段（`POST`参数）以及可选的错误消息，如果测试失败，则可以显示该字段。验证标准以菊花链形式连接到 `body()`方法。例如，下面的第一个检查测试，“name”字段不为空，如果不是，则设置错误消息“Empty name”。第二个测试，检查 age 字段是否为有效日期，并使用`optional()`指定 null 和空字符串不会验证失败。

  ```js
  body('name', 'Empty name').isLength({ min: 1 }),
  body('age', 'Invalid age').optional({ checkFalsy: true }).isISO8601(),
  ```

  您还可以用菊花链式连接不同的验证器，并添加前面验证器为真时显示的消息。

  ```js
  body('name').isLength({ min: 1 }).trim().withMessage('Name empty.')
      .isAlpha().withMessage('Name must be alphabet letters.'),
  ```

  > **备注：** 您还可以添加内联清理器，如`trim()`，如上所示。但是，此处应用清理器，仅适用于验证步骤。如果要对最终输出进行消毒，则需要使用单独的清理器方法，如下所示。

- [`sanitizeBody(fields)`](https://github.com/ctavan/express-validator#sanitizebodyfields): 指定一个正文要清理的字段。然后将清理操作，以菊花链形式连接到此方法。例如，下面的`escape()`清理操作，会从名称变量中，删除可能在 JavaScript 跨站点脚本攻击中使用的 HTML 字符。

  ```js
  sanitizeBody('name').trim().escape(),
  sanitizeBody('date').toDate(),
  ```

- [`validationResult(req)`](https://github.com/ctavan/express-validator#validationresultreq): 运行验证，以`validation`验证结果对象的形式，提供错误。这是在单独的回调中调用的，如下所示：

  ```js
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      // Error messages can be returned in an array using `errors.array()`.
    } else {
      // Data from form is valid.
    }
  };
  ```

  我们使用验证结果的`isEmpty()`方法，来检查是否存在错误，并使用其`array()`方法，来获取错误消息集合。有关更多信息，请参[阅验证结果 API](https://github.com/ctavan/express-validator#validation-result-api)。

验证和清理链，是应该传递给 Express 路由处理程序的中间件（我们通过控制器，间接地执行此操作）。中间件运行时，每个验证器/清理程序都按指定的顺序运行。
当我们实现下面的 LocalLibrary 表单时，我们将介绍一些真实的例子。

### 表单设计

图书馆中的许多模型都是相关/依赖的 - 例如，一本书需要一个作者，也可能有一个或多个种类。这提出了一个问题，即我们应该如何处理用户希望的情况：

- 在其相关对象尚不存在时，创建对象（例如，尚未定义作者对象的书）。
- 删除另一个对象仍在使用的对象（例如，删除仍有书本使用的种类）。

在这个项目，我们将简单声明表单只能：

- 使用已存在的对象创建对象（因此用户在尝试创建任何`Book`对象之前，必须创建任何所需的`Author`和`Genre`实例）。
- 如果对象未被其他对象引用，则删除该对象（例如，在删除所有关联的`BookInstance`对象之前，您将无法删除该书）。

让我们看看更高级的内容吧：

我们通常会在“后台”接收 form 表单提交的数据。显而易见，这里应该是 express！

首先我们可以知道（也许你会知道）应该先引入 express：

`const app=express();`

这很好。

那么既然是 post 提交，给大家推荐一款中间件：body-parser。它能让你轻松地处理 body 数据。

哦，如果你涉及文件上传，那么你可能需要“[multer](https://blog.csdn.net/qq_43624878/article/details/103607944)”中间件，你大概听说过“formidable”，但 multer 比它更强大！

> **备注：** 更“牢固”的实现，可能允许您在创建新对象时创建依赖对象，并随时删除任何对象（例如，通过删除依赖对象，或从数据库中，删除对已删除对象的引用） 。

### 路由

为了实现我们的表单处理代码，我们需要两个具有相同 URL 模式的路由。

第一个（`GET`）路由，用于显示用于创建对象的新空表单。第二个路由（`POST`），用于验证用户输入的数据，然后保存信息，并重定向到详细信息页面（如果数据有效），或重新显示有错误的表单（如果数据无效）。

我们已经在 **/routes/catalog.js**（在[之前的教程](/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes)中）为我们所有模型的创建页面，创建了路径。例如，种类路由如下所示：

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express 表单子文件

以下子文件，将带我们完成向示例应用程序添加所需表单的过程。在进入下一个文件之前，您需要依次阅读并解决每个问题。

1. [创建种类表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) — 定义我们的页面以创建`Genre`种类对象。
2. [创建作者表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) — 定义用于创建作者对象的页面。
3. [创建书本表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form) — 定义页面/表单以创建书本对象。
4. [创建书本实例表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — 定义页面/表单以创建书本实例对象。
5. [删除作者表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form) — 定义要删除作者对象的页面。
6. [更新书本表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form) — 定义页面以更新书本对象。

## 挑战自我

实现`Book`, `BookInstance`, 和 `Genre`模型的删除页面，以与我们的作者删除页面相同的方式，将它们与关联的详细信息页面，链接起来。页面应遵循相同的设计方法：

- 如果有来自其他对象的、对于对象的引用，则应显示注释，列出这些对象，并说明在删除列出的对象之前，无法删除此记录。
- 如果没有对该对象的其他引用，则视图应提示删除它。如果用户按下“删除”按钮，则应删除该记录。

一些提示：

- 删除种类`Genre`就像删除作者`Author`一样，因为两个对象都是`Book`的依赖项（因此在这两种情况下，只有在删除相关书本时，才能删除对象）。
- 删除书本`Book`也很相似，但您需要检查是否没有关联的书本实例`BookInstances`。
- 删除书本实例`BookInstance`是最简单的，因为没有依赖对象。在这种情况下，您只需找到相关记录并将其删除即可。

实现`BookInstance`, `Author`, 和 `Genre`模型的更新页面，以与我们的书本更新页面相同的方式，将它们与关联的详细信息页面，链接起来。

一些提示：

- 我们刚刚实施的图书更新页面是最难的！相同的模式可用于其他对象的更新页面。
- 作者死亡日期和出生日期字段以及书本实例 due_date 字段，是输入到表单上日期输入字段的错误格式（它需要“YYYY-MM-DD”形式的数据）。解决此问题的最简单方法，是为适当格式化的日期，定义新的虚拟属性，然后在关联的视图模板中，使用此字段。
- 如果您遇到困难，此处示例中的更新页面有一些[示例](https://github.com/mdn/express-locallibrary-tutorial)。

## 总结

Express, node, 与 NPM 上面的第三方套件，提供你需要的每样东西，可用于新增表单到你的网站上。在本文中，你学到了如何使用 Pug, how to create forms using Pug, validate and sanitize input using express-validator, and add, delete, and modify records in the database.

你现在应该了解如何新增基本表单，以及表单处理码到你的 node 网站！

## 请见

- [express-validator](https://www.npmjs.com/package/express-validator) (npm 文档).

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}
