---
title: Express 教程 4：路由和控制器
slug: Learn/Server-side/Express_Nodejs/routes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}

本节将为 [LocalLibrary](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 站点中所需的资源端点（Endpoint）配置路由。先用空的处理函数搭建起路由处理的模块结构（下节会将它们扩充为真实的处理函数）。并详细介绍了 Express 路由模块的创建方法。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        回顾
        <a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction"
          >Express/Node 入门</a
        >。完成本教程之前小节（<a
          href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose"
          >Express 教程 3：使用数据库 (Mongoose)</a
        >
        等）。了解服务器端编程，了解正则表达式。
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>理解简单路由的创建方法。设置示例中所有 URL 端点。</td>
    </tr>
  </tbody>
</table>

## 概览

[上节](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose) 定义了与数据库交互的 Mongoose 模型，使用一个（独立）脚本创建了一些初始记录。现在可以编写代码来向用户展示这些信息。首先要确定页面中应显示哪些信息，然后定义适当的 URL 来返回这些资源。随后应创建路由（URL 处理器）和视图（模板）来显示这些页面。

下图展示了 HTTP 请求/响应处理的主数据流和需要实现的行为。图中除视图（View）和路由（Route）外，还展示了控制器（Controller），它们是实际的请求处理函数，与路由请求代码是分开的。

模型已经创建，现在要创建的主要是：

- 路由：把需要支持的请求（以及请求 URL 中包含的任何信息）转发到适当的控制器函数。
- 控制器：从模型中获取请求的数据，创建一个 HTML 页面显示出数据，并将页面返回给用户，以便在浏览器中查看。
- 视图（模板）：供控制器用来渲染数据。

![Express HTTP 请求/响应 路径](mvc_express.png)

因此我们需要页面来显示藏书、藏书种类、作者、藏书副本的列表和详细信息，还需要页面来创建、更新和删除记录。这些内容对于本节来说不算少，因此本节将主要集中在路由和控制器设置。本节编写的这些函数都只有框架，后续章节再扩展控制器方法，以使用模型数据。

第一段提供了 Express 的 [Router](http://expressjs.com/en/4x/api.html#router) 中间件的“入门”知识。后续设置 LocalLibrary 路由时将用到这些知识。

## 路由入门

路由是一段 Express 代码，它将 HTTP 动词（`GET`、`POST`、`PUT`、`DELETE` 等）、URL 路径/模式和处理函数三者关联起来。

创建路由有几种方法。本教程将使 [`express.Router`](http://expressjs.com/en/guide/routing.html#express-router) 中间件，因为使用它可以将站点特定部分的路由处理程序打包，并使用通用路由前缀访问它们。我们会将所有与图书馆有关的路由保存在 `catalog` 模块中，在添加处理帐户或其他功能的路由时，可以分开保存。

> **备注：** [Express 简介 > 创建路由处理程序](/zh-CN/docs/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction#%E5%88%9B%E5%BB%BA%E8%B7%AF%E7%94%B1%E5%A4%84%E7%90%86%E5%99%A8%EF%BC%88Route_handler%EF%BC%89) 简要讨论了 Express 应用的路由机制。使用 `Router` 可以保证更好的模块化（下文所述），且用法与直接在 Express 应用对象定义路由非常类似。

本段以下内容介绍使用 `Router` 定义路由的方法。

### 定义和使用单独的路由模块

以下代码举例说明了如何创建路由模块，以及如何在 Express 应用中使用它。

首先，在 **wiki.js** 模块中创建一个维基路由。代码一开始导入 Express 应用对象，用它取得一个 `Router` 对象，然后用 `get()` 方法向其添加两个具体的路由。模块的最后导出该 `Router` 对象。

```js
// wiki.js - 维基路由模块

const express = require("express");
const router = express.Router();

// 主页路由
router.get("/", (req, res) => {
  res.send("维基主页");
});

// “关于页面”路由
router.get("/about", (req, res) => {
  res.send("关于此维基");
});

module.exports = router;
```

> **备注：** 上面的路由处理回调直接定义在了路由函数中。LocalLibrary 的回调将定义在单独的控制器模块中。

要在主应用中使用该路由模块，首先应 `require` 它（**wiki.js**），然后对 Express 应用对象调用 `use()`（指定路径‘/wiki’），即可将其添加到中间件处理路径。

```js
const wiki = require("./wiki.js");
// ...
app.use("/wiki", wiki);
```

这时 `wiki` 模块中定义的两个路由就可以从 `/wiki/` 和 `/wiki/about/` 访问了。

### 路由函数

上述模块定义了两个典型的路由函数。`Router.get()` 方法定义的“about”路由（下方重现的）仅响应 HTTP GET 请求。第一个参数是 URL 路径，第二个参数是一个回调，在收到带有路径的 HTTP GET 请求将调用之。

```js
router.get("/about", (req, res) => {
  res.send("关于此维基");
});
```

该回调有三个参数（通常命名为：`req`、`res`、`next`），分别是：HTTP 请求对象、HTTP 响应、中间件链中的下一个函数。

> **备注：** 路由函数就是 [Express 中间件](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction#Using_middleware)，这意味着它们必须（通过响应）结束请求，否则必须调用链中的 `next` 函数。上述示例使用`send()` 完成了请求，所以没有使用 `next` 参数（参数表中将其省略）。
>
> 上述路由函数只需要一个回调，可以根据需要指定任意数量的回调参数，或一个回调函数数组。每个函数都将加入中间件链，并且将按添加顺序调用（若有回调完成请求则中止当前周期）。

此处的回调对响应对象调用 [`send()`](https://expressjs.com/en/4x/api.html#res.send)，当收到带有路径（'`/about'`）的 GET 请求时将返回字符串“关于此维基”。还有许多其他可以结束请求/响应周期 [响应方法](https://expressjs.com/en/guide/routing.html#response-methods)，例如，可调用 [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) 来发送 JSON 响应，或调用 [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) 来发送文件。构建 LocalLibrary 最常使用的响应方法是 [`render()`](https://expressjs.com/en/4x/api.html#res.render)，它使用模板和数据创建并返回 HTML 文件。后续章节进一步讨论。

### HTTP 动词

上面的示例使用 `Router.get()` 方法来响应特定路径的 HTTP GET 请求。

`Router` 还为所有其他 HTTP 动词提供路由方法，大都用法相同：`post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, 和 `connect()`。

比如下方代码与上方 `/about` 路由行为一致，但只响应 HTTP POST 请求。

```js
router.post("/about", (req, res) => {
  res.send("关于此维基");
});
```

### 路由路径

路由路径用于定义可请求的端点。之前示例中路径都是字符串，并且必须精确写为：'/'、'/ about'、'/ book'，等等。

路由路径也可以是字符串模式（String Pattern）。可用部分正则表达式语法来定义端点的模式。以下是所涉及的正则表达式（注意，连字符（ `-`）和点（`.`）在字符串路径中解释为字面量，不能做为正则表达式）：

- `?`：问号之前的一个字符只能出现零次或一次。例如，路由路径 `'/ab?cd'` 路径匹配端点 `acd` 或 `abcd`。
- `+`：加号之前的一个字符至少出现一次。例如，路径路径 `'/ab+cd'` 匹配端点 `abcd`、`abbcd`、`abbbcd`，等。
- `*`：星号可以替换为任意字符串。例如，路由路径 `'/ab*cd'` 匹配端点 `abcd`、`abXcd`、`abSOMErandomTEXTcd`，等。
- `()`：将一个字符串视为一体以执行 `?`、`+`、`*` 操作。例如。 `'/ab(cd)?e'` 将对 `(cd)` 进行匹配，将匹配到 `abe` 和 `abcde`。

路由路径也可以是 JavaScript [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。例如，下面的路由路径将匹配 `catfish` 和 `dogfish`，但不会匹配 `catflap`、`catfishhead` 等。注意，正则表达式路径不再用引号 `"..."` 括起来，而是正则表达式语法 `/.../`。

```js
app.get(/.*fish$/, (req, res) => {
  ...
});
```

> **备注：** LocalLibrary 的大部分路由都只使用字符串，很少用字符串模式和正则表达式。接下来将讨论“路由参数”。

### 路由参数

路径参数是命名的 URL 段，用于捕获在 URL 中的位置指定的值。命名段以冒号为前缀，然后是名称（例如 `/:your_parameter_name/`。捕获的值保存在 `req.params` 对象中，键即参数名（例如 `req.params.your_parameter_name`）。

举例说，一个包含用户和藏书信息的 URL：`http://localhost:3000/users/34/books/8989`，可以这样提取信息（使用 `userId` 和 `bookId` 路径参数）：

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // 通过 req.params.userId 访问 userId
  // 通过 req.params.bookId 访问 bookId
  res.send(req.params);
});
```

路由参数名必须由“单词字符”（/`[A-Za-z0-9_]`/）组成。

> **备注：** URL `/book/create` 会匹配 `/book/:bookId` 这样的路由（将提取值为'`create`' 的 '`bookId`'）。第一个与传入 URL 相匹配的路由会被使用，因此 `/book/create` 的路由处理器必须定义在 `/book/:bookId` 路由之前，才能妥善处理。

以上就是使用路由所有的预备知识。Express 文档中还能找到更多信息：[基础路由](http://expressjs.com/en/starter/basic-routing.html) 和 [路由指南](http://expressjs.com/en/guide/routing.html)。以下是 LocalLibrary 路由和控制器的设置过程。

## LocalLibrary 所需路由

以下是站点页面的完整 URL 列表。`<object>` 是模型名称（`book`、`bookinstance`、`genre`、`author`），`<objects>` 是一组模型，`<id>` 是每个 Mongoose 模型实例默认的标识字段（`_id`）。

- `catalog/`：主页。
- `catalog/<objects>/`：模型（藏书、藏书副本、藏书种类、作者）的完整列表（例如 `/catalog/books/`、`/catalog/genres/` 等）
- `catalog/<object>/<id>`_：具有_ `_id` 字段值的特定模型的详细信息页面（例如 `/catalog/book/584493c1f4887f06c0e67d37`）。
- `catalog/<object>/create`：添加新模型的表单（例如 `/catalog/book/create`）。
- `catalog/<object>/<id>/update`：更新具有 `_id` 字段值的特定模型的表单（例如 `/catalog/book/584493c1f4887f06c0e67d37/update`）。
- `catalog/<object>/<id>/delete`：删除具有 `_id` 字段值的特定模型的表单（例如 `/catalog/book/584493c1f4887f06c0e67d37/delete`）。

首页和列表页面没有包含任何额外信息。因此它们返回的结果只取决于模型类型和数据库内容，获取信息的查询操作是恒定不变的（类似地，创建对象的代码也没有较大改动）。

与之相反，其他 URL 是用于处理特定文档/模型实例的，它们会将项目的标识嵌入 URL（上文的 `<id>`）。可以用路径参数来提取嵌入的信息，并传递给路由处理器（后续章节中用于动态获取数据库中的信息）。通过在 URL 中嵌入信息，使得每种类型的所有资源只需要一个路由（例如，所有藏书副本的显示操作只需要一个路由）。

> **备注：** Express 可以通过任何方式构造 URL，可以在 URL 正文中嵌入信息（如上文），或使用 URL `GET` 参数（例如 `/book/?id=6`）。无论哪种方法，URL 都应保持整洁、合理且易读（另请参阅 [W3C 相关建议](https://www.w3.org/Provider/Style/URI)）。

下面我们为上述所有 URL 创建路由处理器回调函数和路由代码。

## 创建路由处理器回调函数

定义路由之前应先使用单独的“控制器”模块创建回调的结构骨架。（文件/模块结构没有限制，但以下结构很适合当前项目的规模）。

首先在项目根目录新建一个存放控制器的文件夹（**/controllers**），然后为每个模型创建单独的控制器文件（模块）：

```plain
/express-locallibrary-tutorial  // 项目根目录
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

> **备注：** 上述四个文件可到 GitHub 下载 [dummyControllers.zip](https://github.com/roy-tian/mdn-examples/blob/master/server/express-locallibrary-tutorial/controllers/dummyControllers.zip)。（链接已失效，请移步英文版查看具体代码）

### `Author` 控制器

以下是 **/controllers/authorController.js** 文件的内容：

```js
const Author = require("../models/author");

// 显示完整的作者列表
exports.author_list = (req, res) => {
  res.send("未实现：作者列表");
};

// 为每位作者显示详细信息的页面
exports.author_detail = (req, res) => {
  res.send("未实现：作者详细信息：" + req.params.id);
};

// 由 GET 显示创建作者的表单
exports.author_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理作者创建操作
exports.author_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除作者的表单
exports.author_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理作者删除操作
exports.author_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新作者的表单
exports.author_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者更新操作
exports.author_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};
```

该模块首先导入了用于访问和更新数据的模型，然后为每个需要处理（添加、更新和删除表单，以及相应的 POST 请求，稍后在 [使用表单](/zh-CN/docs/learn/Server-side/Express_Nodejs/forms) 一节中讲解）的 URL 导出一个函数。

所有函数都遵循 Express 中间件函数的标准形式，三个参数依次为：请求 `req`、响应 `res`、当前方法无法完成请求循环时（这里不存在这种情况）调用的 `next` 函数。上述方法只返回一个字符串，显示相关页面尚未创建。接收路径参数的控制器函数可将参数输出到消息字符串中（代码中出现的 `req.params.id` ）。

### `BookInstance`、`Genre`、`Book` 控制器

这三个控制器与 `Author` 的模式完全相同，只是 `Book` 有一个用于显示站点欢迎页面的 `index()` 函数：

```js
// /controllers/bookController.js

const Book = require('../models/book');

exports.index = (req, res) => { res.send('未实现：站点首页'); };

...
```

## 创建藏书编目 `catalog` 路由模组

定义好控制器后，我们来为 LocalLibrary 网站创建完整的 URL 路由。

站点骨架中有一个 **./routes** 文件夹，其中包含两个路由文件：index 和 user，在这里新建一个 **catalog.js** 路由文件，如下所示：

```plain
/express-locallibrary-tutorial   // 项目根目录
  /routes
    index.js
    users.js
    catalog.js
```

> **备注：** 可到 GitHub 下载完整的 [catalog.js](https://raw.githubusercontent.com/roy-tian/mdn-examples/master/server/express-locallibrary-tutorial/routes/catalog.js)。

**/routes/catalog.js** 中有以下代码：

```js
const express = require("express");
const router = express.Router();

// 导入控制器模块
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// 藏书路由 ///

// GET 获取藏书编目主页
router.get("/", book_controller.index);

// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
router.get("/book/create", book_controller.book_create_get);

// POST 请求添加新的藏书
router.post("/book/create", book_controller.book_create_post);

// GET 请求删除藏书
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST 请求删除藏书
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET 请求更新藏书
router.get("/book/:id/update", book_controller.book_update_get);

// POST 请求更新藏书
router.post("/book/:id/update", book_controller.book_update_post);

// GET 请求藏书
router.get("/book/:id", book_controller.book_detail);

// GET 请求完整藏书列表
router.get("/books", book_controller.book_list);

/// 藏书副本、藏书种类、作者的路由与藏书路由结构基本一致，只是无需获取主页 ///

module.exports = router;
```

该模块导入了 `express` 并创建了一个 `Router` 对象 `router`。所有路由都设置在 `router` 上，最后将其导出。

对 `router` 对象调用 `.get()` 或`.post()` 函数即可定义路由。这里所有路径都使用字符串定义（而不用字符串模式或正则表达式）。某些特定资源（如藏书）的路由使用路径参数从 URL 中获取对象标识。

处理函数均导入自上文的控制器模块。

### 更新 index 路由模块

新路由已经设置完毕，还需要设置一下 `index` 模块。我们将网站的首页重定向（`redirect`）至刚创建的地址 '`/catalog`'。

将 **/routes/index.js** 中的中间件修改一下：

```js
// GET 请求主页
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

> **备注：** 这是我们第一次使用 [redirect()](https://expressjs.com/en/4x/api.html#res.redirect) 响应方法。它会使路由重定向到指定的页面，默认发送 HTTP 状态代码“302 Found”。可以根据需要更改返回的状态代码、设置绝对或相对路径。

### 更新 app.js

最后一步是在 `app.js` 中将路由添加到中间件链。

打开 **app.js**，在 `index` 和 `users` 路由下方添加 `catalog` 路由：

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // 导入 catalog 路由
```

然后在已定义的路由下方将目录路由添加进中间件栈：

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // 将 catalog 路由添加进中间件链
```

> **备注：** 我们将图书编目模块添加到了 `'/catalog'` 路径，该路径是 catalog 模块中所有路径的前缀。例如，访问藏书列表 的 URL 为：`/catalog/books/`。

大功告成。LocalLibrary 网站所需的所有 URL 的路由和框架函数都已准备完毕。

### 测试路由

要测试路由，先要启动网站

- 默认方法

  ```bash
  DEBUG=express-locallibrary-tutorial:* npm start
  ```

- 如果设置过 [nodemon](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website)，则可以使用：

  ```bash
  DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

> **备注：** 以上命令只对 bash 有效，要在 Windows 上使用 bash，最简单的方法就是安装 Git。（详情参见[教程 2 相关译注](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#使用应用生成器)）

接下来浏览上面一些 URL，确保不会收到错误页面（HTTP 404）。可以尝试以下示例：

- `http://localhost:3000/`
- `http://localhost:3000/catalog`
- `http://localhost:3000/catalog/books`
- `http://localhost:3000/catalog/bookinstances/`
- `http://localhost:3000/catalog/authors/`
- `http://localhost:3000/catalog/genres/`
- `http://localhost:3000/catalog/book/5846437593935e2f8c2aa226`
- `http://localhost:3000/catalog/book/create`

## 小结

网站的路由已创建完毕，接下来的教程将把完整的实现填入控制器框架中。藉此来学习 Express 路由的基础知识，以及组织路由和控制器的一些方式。

下一节将使用视图（模板）和模型里的信息创建一个欢迎页面。

## 参见

- [基本路由](https://expressjs.com/zh-cn/starter/basic-routing.html)（Express 文档）
- [路由指南](https://expressjs.com/zh-cn/guide/routing.html)（Express 文档）

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs")}}
