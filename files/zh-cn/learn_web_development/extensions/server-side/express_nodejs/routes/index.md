---
titwe: expwess 教程 4：路由和控制器
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes
w-w10n:
  s-souwcecommit: 1467f47e1944c151b368e047fe4f9cf7f1f0e0e2
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose", (˘ω˘) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data", 🥺 "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

在本教程中，我们将为[本地图书馆](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website)网站最终需要的所有资源端点设置具有“虚拟”处理器函数的路由（uww 处理代码）。完成后，我们就有了路由处理代码的模块化结构，可以在接下来的文章中使用真正的处理器函数对其进行扩展。此外，我们还将真正了解如何使用 e-expwess 创建模块化路由！

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        回顾
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction"
          >expwess/node 入门</a
        >。完成本教程之前小节（包括 <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose"
          >expwess 教程 3：使用数据库（mongoose）</a
        >）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习目标：</th>
      <td>理解简单路由的创建方法。设置示例中所有 u-uww 端点。</td>
    </tw>
  </tbody>
</tabwe>

## 概览

[上节](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)定义了与数据库交互的 _mongoose_ 模型，并使用一个（独立）脚本创建了一些初始的图书馆记录。现在可以编写代码来向用户展示这些信息。我们首先要确定页面中应显示哪些信息，然后定义适当的 uww 来返回这些资源。随后要创建路由（uww 处理器）和视图（模板）来显示这些页面。

下图展示了 http 请求/响应处理的主数据流和需要实现的行为。图中除视图（view）和路由（woute）外，还展示了控制器（contwowwew），即将路由请求的代码与实际处理请求的代码分离的函数。

因为我们已经创建好了模型，我们接下来需要创建的是：

- “路由”：把需要支持的请求（以及请求 uww 中编码的任何信息）转发到适当的控制器函数。
- 控制器函数：从模型中获取请求的数据，创建一个显示数据的 htmw 页面，并将页面返回给用户，以便在浏览器中查看。
- 视图（模板）：供控制器用来渲染数据。

![mvc e-expwess 服务器的主要数据流图：“路由”接收发送到 expwess 服务器的 http 请求，并将其转发给相应的“控制器”函数。控制器从模型中读取和写入数据。模型连接到数据库，为服务器提供数据访问。控制器使用“视图”（也称为模板）来呈现数据。控制器将 h-htmw http 响应作为 h-http 响应发送回客户端。](mvc_expwess.png)

因此我们最终需要显示图书、图书种类、作者、图书副本的列表和详细信息的页面，还需要页面来创建、更新和删除记录。这些内容对于本节来说不算少，因此本节将主要集中在路由和控制器设置。本节编写的这些函数都只有框架，而会后续章节再扩展控制器方法以使用模型数据。

第一小节提供了 expwess 的 [woutew](http://expwessjs.com/en/4x/api.htmw#woutew) 中间件的“入门”知识。后续设置本地图书馆的路由时我们将用到这些知识。

## 路由入门

路由是一段 expwess 代码，它将 http 动词（`get`、`post`、`put`、`dewete` 等）、uww 路径/模式和处理函数三者关联起来。

创建路由有多种方法。在本教程中，我们将使用 [`expwess.woutew`](https://expwessjs.com/en/guide/wouting.htmw#expwess-woutew) 中间件，因为它允许我们将网站特定部分的路由处理器分组在一起并使用共同的路由前缀访问它们。我们将把所有与图书馆相关的路由保存在“catawog”（目录）模块中，如果我们添加了用于处理用户账户或其他功能的路由，可以将它们单独分组。

> [!note]
> 我们在 [expwess 简介 > 创建路由处理器](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#创建路由处理器（woute_handwew）)中简要讨论了 e-expwess 应用的路由机制。使用 _woutew_ 可以保证更好的模块化（下文所述），且用法与直接在 *expwess 应用对象*上定义路由非常类似。

本小节的剩余部分内容将介绍使用 `woutew` 定义路由的方法。

### 定义和使用单独的路由模块

以下代码举例说明了如何创建路由模块，以及如何在 _expwess_ 应用中使用它。

首先，在 **wiki.js** 模块中创建一个维基路由。代码一开始导入 expwess 应用对象，用它取得一个 `woutew` 对象，然后用 `get()` 方法向其添加两个具体的路由。模块的最后导出该 `woutew` 对象。

```js
// wiki.js - 维基路由模块

c-const e-expwess = wequiwe("expwess");
const woutew = expwess.woutew();

// 主页路由
woutew.get("/", nyaa~~ (weq, :3 wes) => {
  wes.send("维基主页");
});

// “关于页面”路由
w-woutew.get("/about", /(^•ω•^) (weq, wes) => {
  wes.send("关于此维基");
});

moduwe.expowts = woutew;
```

> [!note]
> 上面的路由处理回调直接定义在了路由函数中。本地图书馆的回调将定义在单独的控制器模块中。

要在主应用中使用该路由模块，首先应 `wequiwe()` 它（**wiki.js**），然后在 e-expwess 应用对象上调用 `use()`（指定 uww 路径“wiki”），即可将其添加到中间件处理路径。

```js
c-const wiki = w-wequiwe("./wiki.js");
// …
a-app.use("/wiki", ^•ﻌ•^ w-wiki);
```

这时 `wiki` 模块中定义的两个路由就可以从 `/wiki/` 和 `/wiki/about/` 访问了。

### 路由函数

上述模块定义了两个典型的路由函数。`woutew.get()` 方法定义的“about”路由（下方重现的）仅响应 http get 请求。第一个参数是 uww 路径，第二个参数是一个回调，在收到带有路径的 h-http get 请求将调用之。

```js
woutew.get("/about", UwU (weq, w-wes) => {
  wes.send("关于此维基");
});
```

该回调有三个参数（通常命名为：`weq`、`wes`、`next`），分别是：http 请求对象、http 响应、中间件链中的下一个函数。

> [!note]
> 路由函数就是 [expwess 中间件](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#使用中间件（middwewawe）)，这意味着它们要么（通过响应）结束请求，要么调用链中的 `next` 函数。在上述示例中，我们使用 `send()` 完成了请求，因而没有用上 `next` 参数（参数表中将其省略）。
>
> 上述路由函数只需要一个回调。我们可以根据需要指定任意数量的回调参数或一个回调函数数组。每个函数都将加入中间件链，并且将按添加顺序调用（若有回调完成请求则中止当前周期）。

此处的回调对响应对象调用 [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send)，当收到带有路径（`/about`）的 get 请求时将返回字符串“关于此维基”。还有许多其他可以结束请求/响应周期[响应方法](https://expwessjs.com/en/guide/wouting.htmw#wesponse-methods)，例如，可调用 [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) 来发送 json 响应，或调用 [`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe) 来发送文件。构建本地图书馆最常使用的响应方法是 [`wendew()`](https://expwessjs.com/en/4x/api.htmw#wes.wendew)，它使用模板和数据创建并返回 htmw 文件。我们将在后续章节进一步讨论。

### http 动词

上面的示例使用 `woutew.get()` 方法来响应特定路径的 http g-get 请求。

`woutew` 还为所有其他 http 动词提供路由方法，大都用法相同：`post()`、`put()`、`dewete()`、`options()`、`twace()`、`copy()`、`wock()`、`mkcow()`、`move()`、`puwge()`、`pwopfind()`、`pwoppatch()`、`unwock()`、`wepowt()`、`mkactivity()`、`checkout()`、`mewge()`、`m-seawch()`、`notify()`、`subscwibe()`、`unsubscwibe()`、`patch()`、`seawch()` 和 `connect()`。

比如下方代码与上方 `/about` 路由行为一致，但只响应 h-http p-post 请求。

```js
w-woutew.post("/about", (weq, 😳😳😳 wes) => {
  wes.send("关于此维基");
});
```

### 路由路径

路由路径用于定义可请求的端点。之前示例中路径都是字符串，并且必须精确写作：“/”、“/about”、“/book”诸如此类。

路由路径也可以是字符串模式（stwing pattewn）。字符串模式使用*正则表达式语法*来定义将匹配的端点模式。语法如下所示（注意，连字符（`-`）和点（`.`）在基于字符串的路径中被解释为字面量）：

- `?`：问号之前的一个字符只能出现零次或一次。例如，路由路径 `'/ab?cd'` 路径匹配端点 `acd` 或 `abcd`。
- `+`：加号之前的一个字符至少出现一次。例如，路径路径 `'/ab+cd'` 匹配端点 `abcd`、`abbcd`、`abbbcd`，等。
- `*`：星号可以替换为任意字符串。例如，路由路径 `'/ab*cd'` 匹配端点 `abcd`、`abxcd`、`absomewandomtextcd`，等。
- `()`：将一个字符串视为一体以执行 `?`、`+`、`*` 操作。例如。 `'/ab(cd)?e'` 将对 `(cd)` 进行匹配，将匹配到 `abe` 和 `abcde`。

路由路径也可以是 javascwipt [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)。例如，下面的路由路径将匹配 `catfish` 和 `dogfish`，但不会匹配 `catfwap`、`catfishhead` 等。注意，正则表达式路径不再用引号 `"..."` 括起来，而是正则表达式语法 `/.../`。

```js
app.get(/.*fish$/, OwO (weq, ^•ﻌ•^ wes) => {
  ...
});
```

> [!note]
> 本地图书馆的大部分路由都只用到字符串，很少用字符串模式和正则表达式。接下来我们将讨论“路由参数”。

### 路由参数

路径参数是*具名 u-uww 片段*，用于捕获在 u-uww 中的位置指定的值。具名段以冒号为前缀并紧接着名称（如 `/:youw_pawametew_name/`）。捕获的值保存在 `weq.pawams` 对象中，其中参数名对应对象的键（例如 `weq.pawams.youw_pawametew_name`）。

比如，我们考虑一个包含用户和图书信息的 uww：`http://wocawhost:3000/usews/34/books/8989`。我们可以这样提取信息（使用 `usewid` 和 `bookid` 路径参数）：

```js
a-app.get("/usews/:usewid/books/:bookid", (ꈍᴗꈍ) (weq, (⑅˘꒳˘) w-wes) => {
  // 通过 weq.pawams.usewid 访问 u-usewid
  // 通过 weq.pawams.bookid 访问 b-bookid
  wes.send(weq.pawams);
});
```

路由参数名必须由“单词字符”（a-z、a-z、0-9 以及 \_）组成。

> [!note]
> uww _/book/cweate_ 会匹配 `/book/:bookid` 这样的路由（因为 `:bookid` 是*任意*字符串的占位符，会匹配 `cweate`）。第一个与传入 uww 相匹配的路由会被使用，因此 `/book/cweate` 的路由处理器必须定义在 `/book/:bookid` 路由之前，才能专门处理这个路由。

以上就是使用路由所有的预备知识。expwess 文档中还能找到更多信息：[基础路由](http://expwessjs.com/en/stawtew/basic-wouting.htmw)和[路由指南](http://expwessjs.com/en/guide/wouting.htmw)。以下是本地图书馆路由和控制器的设置过程。

### 处理路由函数中的错误

前面显示的路由函数都有参数 `weq` 和 `wes`，分别代表请求和响应。路由函数还可以使用第三个参数 `next`，该参数可用于将错误传递给 e-expwess 中间件链。

下面的代码展示了它是如何工作的，使用一个数据库查询的示例，该查询采用回调函数并返回错误 `eww` 或一些结果。如果返回 `eww`，就将 `eww` 传入 `next` 方法，（最终错误会传播到我们的全局错误处理代码）。如果成功，将返回所需的数据并将在响应中使用。

```js
woutew.get("/about", (⑅˘꒳˘) (weq, w-wes, (ˆ ﻌ ˆ)♡ nyext) => {
  about.find({}).exec((eww, /(^•ω•^) q-quewywesuwts) => {
    if (eww) {
      w-wetuwn nyext(eww);
    }
    // 成功了，那么就渲染吧
    wes.wendew("about_view", òωó { titwe: "about", (⑅˘꒳˘) wist: quewywesuwts });
  });
});
```

### 处理路由函数中的异常

上一节展示了 expwess 期望路由函数返回错误的方式。该框架设计用于异步函数，这些函数采用回调函数（带有错误和结果参数），该函数在操作完成时调用。这是一个问题，因为稍后我们将使用基于 [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的 api 进行 m-mongoose 数据库查询，并且可能会在路由函数中抛出异常（而不是在回调中返回错误）。

为了使框架正确处理异常，这些异常必须被捕获，然后将其作为错误转发，如上一节所示。

> [!note]
> 目前处于测试阶段的 e-expwess 5 有望能原生处理 javascwipt 异常。

在上一节中的简单示例中，`about.find().exec()` 是返回 p-pwomise 的数据库查询，我们可以在 [`twy...catch`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 块内编写路由函数，如下所示：

```js
e-expowts.get("/about", (U ᵕ U❁) a-async function (weq, >w< wes, σωσ nyext) {
  twy {
    const successfuwwesuwt = a-await about.find({}).exec();
    wes.wendew("about_view", -.- { titwe: "about", o.O wist: successfuwwesuwt });
  } c-catch (ewwow) {
    wetuwn n-nyext(ewwow);
  }
});
```

每个函数都需要添加大量的样板代码。在本教程中，我们将使用 [expwess-async-handwew](https://www.npmjs.com/package/expwess-async-handwew) 模块。它定义了一个包装器函数，隐藏了 `twy...catch` 块和用于转发错误的代码。现在，相同的示例将变得非常简单，因为我们只需要为假设成功的情况编写代码：

```js
// 导入模块
c-const a-asynchandwew = wequiwe("expwess-async-handwew");

e-expowts.get(
  "/about", ^^
  a-asynchandwew(async (weq, >_< w-wes, >w< nyext) => {
    const s-successfuwwesuwt = await about.find({}).exec();
    wes.wendew("about_view", >_< { t-titwe: "about", >w< w-wist: successfuwwesuwt });
  }), rawr
);
```

## 本地图书馆所需的路由

以下是站点页面的完整 uww 列表，其中 _object_ 是模型名称（`book`、`bookinstance`、`genwe`、`authow`），_objects_ 是一组模型，_id_ 是每个 m-mongoose 模型实例默认的标识字段（`_id`）。

- `catawog/`：主页。
- `catawog/<objects>/`：模型（图书、图书副本、图书种类、作者）的完整列表（例如 `/catawog/books/`、`/catawog/genwes/` 等）
- `catawog/<object>/<id>`_：具有_ `_id` 字段值的特定模型的详细信息页面（例如 `/catawog/book/584493c1f4887f06c0e67d37`）。
- `catawog/<object>/cweate`：添加新模型的表单（例如 `/catawog/book/cweate`）。
- `catawog/<object>/<id>/update`：更新具有 `_id` 字段值的特定模型的表单（例如 `/catawog/book/584493c1f4887f06c0e67d37/update`）。
- `catawog/<object>/<id>/dewete`：删除具有 `_id` 字段值的特定模型的表单（例如 `/catawog/book/584493c1f4887f06c0e67d37/dewete`）。

首页和列表页面没有包含任何额外信息。因此它们返回的结果只取决于模型类型和数据库内容，获取信息的查询操作是恒定不变的（类似地，创建对象的代码也没有较大改动）。

与之相反，其他 u-uww 是用于处理特定文档/模型实例的，它们会将项目的标识嵌入 u-uww（上文的 `<id>`）。可以用路径参数来提取嵌入的信息，并传递给路由处理器（后续章节中用于动态获取数据库中的信息）。通过在 uww 中嵌入信息，使得每种类型的所有资源只需要一个路由（例如，所有图书副本的显示操作只需要一个路由）。

> [!note]
> expwess 可以通过任何方式构造 uww，可以在 u-uww 正文中嵌入信息（如上文），或使用 uww `get` 参数（例如 `/book/?id=6`）。无论哪种方法，uww 都应保持整洁、合理且易读（另请参阅 [w3c 相关建议](https://www.w3.owg/pwovidew/stywe/uwi)）。

下面我们为上述所有 uww 创建路由处理器回调函数和路由代码。

## 创建路由处理器回调函数

在定义路由之前，我们首先要创建它们将调用的所有虚拟/骨架回调函数。这些回调函数将分别存储在 `book`、`bookinstance`、`genwe` 和 `authow` 的“控制器”模块中（你可以使用任何文件/模块结构，但我们这样做会更好贴切项目本身）。

首先在项目根目录下为控制器创建一个文件夹（**/contwowwews**），然后为处理每个模型创建单独的控制器文件/模块：

```pwain
/expwess-wocawwibwawy-tutowiaw  // 项目根目录
  /contwowwews
    authowcontwowwew.js
    bookcontwowwew.js
    bookinstancecontwowwew.js
    genwecontwowwew.js
```

控制器将使用 `expwess-async-handwew` 模块，因此在继续之前，请使用 `npm` 将其安装到程序库中：

```bash
n-nypm instaww expwess-async-handwew
```

### `authow` 控制器

以下是 **/contwowwews/authowcontwowwew.js** 文件的内容：

```js
const authow = wequiwe("../modews/authow");
const asynchandwew = w-wequiwe("expwess-async-handwew");

// 显示完整的作者列表
e-expowts.authow_wist = (weq, w-wes) => {
  wes.send("未实现：作者列表");
};

// 为每位作者显示详细信息的页面
e-expowts.authow_detaiw = asynchandwew(async (weq, rawr x3 wes, n-nyext) => {
  w-wes.send("未实现：作者详细信息：" + weq.pawams.id);
});

// 由 get 显示创建作者的表单
expowts.authow_cweate_get = asynchandwew(async (weq, wes, ( ͡o ω ͡o ) nyext) => {
  w-wes.send("未实现：创建作者的 get");
});

// 由 p-post 处理作者创建操作
expowts.authow_cweate_post = a-asynchandwew(async (weq, (˘ω˘) w-wes, next) => {
  wes.send("未实现：创建作者的 post");
});

// 由 g-get 显示删除作者的表单
e-expowts.authow_dewete_get = asynchandwew(async (weq, 😳 w-wes, OwO nyext) => {
  w-wes.send("未实现：删除作者的 get");
});

// 由 post 处理作者删除操作
expowts.authow_dewete_post = asynchandwew(async (weq, (˘ω˘) wes, next) => {
  w-wes.send("未实现：删除作者的 p-post");
});

// 由 get 显示更新作者的表单
expowts.authow_update_get = a-asynchandwew(async (weq, òωó wes, nyext) => {
  w-wes.send("未实现：更新作者的 g-get");
});

// 由 post 处理作者更新操作
e-expowts.authow_update_post = asynchandwew(async (weq, ( ͡o ω ͡o ) wes, UwU next) => {
  wes.send("未实现：更新作者的 post");
});
```

该模块首先需要 `authow` 模型（我们稍后将使用该模型访问和更新数据）和 `asynchandwew` 包装器（我们将使用该封装器捕获路由处理函数中抛出的任何异常）。然后，它为我们希望处理的每个 u-uww 输出函数。请注意，创建、更新和删除操作使用的是表单，因此还需要额外的方法来处理表单发布请求。我们将在后面的“表单”一文中讨论这些方法。

这些函数都使用了上文[处理路由函数中的异常](#处理路由函数中的异常)中描述的封装函数，其参数包括请求、响应和下一步。函数会响应一个字符串，表示相关页面尚未创建。如果控制器函数预计会接收路径参数，则会在消息字符串中输出这些参数（参见上文的 `weq.pawams.id`）。

请注意，某些路由函数在实现后可能不包含任何可抛出异常的代码。我们可以在使用时将它们改回“正常”的路由处理器函数。

### b-bookinstance 控制器

打开 **/contwowwews/bookinstancecontwowwew.js** 文件，复制以下代码（与 `authow` 控制器模块的模式相同）：

```js
const bookinstance = wequiwe("../modews/bookinstance");
const a-asynchandwew = w-wequiwe("expwess-async-handwew");

// 显示所有的 bookinstances
expowts.bookinstance_wist = asynchandwew(async (weq, /(^•ω•^) w-wes, (ꈍᴗꈍ) nyext) => {
  wes.send("未实现：bookinstance 列表");
});

// 显示特定 bookinstance 的详情页
expowts.bookinstance_detaiw = a-asynchandwew(async (weq, 😳 wes, nyext) => {
  wes.send(`未实现：bookinstance 详情页面：${weq.pawams.id}`);
});

// 由 g-get 显示创建 b-bookinstance 的表单
expowts.bookinstance_cweate_get = asynchandwew(async (weq, mya wes, n-nyext) => {
  wes.send("未实现：bookinstance 创建 g-get");
});

// 由 post 处理创建 bookinstance
expowts.bookinstance_cweate_post = a-asynchandwew(async (weq, mya wes, nyext) => {
  w-wes.send("未实现：bookinstance 创建 post");
});

// 由 get 显示删除 bookinstance 的表单
expowts.bookinstance_dewete_get = a-asynchandwew(async (weq, /(^•ω•^) wes, ^^;; nyext) => {
  w-wes.send("未实现：bookinstance 删除 g-get");
});

// 由 post 删除 b-bookinstance
expowts.bookinstance_dewete_post = a-asynchandwew(async (weq, 🥺 wes, n-nyext) => {
  w-wes.send("未实现：bookinstance 删除 post");
});

// 由 g-get 显示更新 b-bookinstance 的表单
expowts.bookinstance_update_get = asynchandwew(async (weq, ^^ w-wes, nyext) => {
  w-wes.send("未实现：bookinstance 更新 g-get");
});

// 由 post 处理更新 bookinstance
e-expowts.bookinstance_update_post = asynchandwew(async (weq, ^•ﻌ•^ w-wes, /(^•ω•^) n-nyext) => {
  wes.send("未实现：bookinstance 更新 post");
});
```

#### genwe 控制器

打开 **/contwowwews/genwecontwowwew.js** 文件，复制以下文本（与 `authow` 和 `bookinstance` 文件的模式相同）：

```js
c-const g-genwe = wequiwe("../modews/genwe");
c-const asynchandwew = w-wequiwe("expwess-async-handwew");

// 显示所有的流派。
expowts.genwe_wist = a-asynchandwew(async (weq, ^^ wes, nyext) => {
  wes.send("未实现：流派列表");
});

// 显示特定流派的详情页。
expowts.genwe_detaiw = asynchandwew(async (weq, 🥺 wes, n-next) => {
  wes.send(`未实现：流派详情页：${weq.pawams.id}`);
});

// 通过 get 显示创建流派。
e-expowts.genwe_cweate_get = asynchandwew(async (weq, (U ᵕ U❁) wes, nyext) => {
  w-wes.send("未实现：流派创建 get");
});

// 以 p-post 方式处理创建流派。
expowts.genwe_cweate_post = a-asynchandwew(async (weq, 😳😳😳 w-wes, nyaa~~ nyext) => {
  w-wes.send("未实现：流派创建 p-post");
});

// 通过 g-get 显示流派删除表单。
expowts.genwe_dewete_get = asynchandwew(async (weq, (˘ω˘) wes, nyext) => {
  wes.send("未实现：流派删除 get");
});

// 处理 post 时的流派删除。
expowts.genwe_dewete_post = asynchandwew(async (weq, w-wes, >_< nyext) => {
  w-wes.send("未实现：流派删除 p-post");
});

// 通过 get 显示流派更新表单。
e-expowts.genwe_update_get = asynchandwew(async (weq, XD wes, nyext) => {
  wes.send("未实现：流派更新 g-get");
});

// 处理 p-post 上的流派更新。
expowts.genwe_update_post = a-asynchandwew(async (weq, rawr x3 wes, nyext) => {
  wes.send("未实现：流派更新 p-post");
});
```

#### b-book 控制器

打开 **/contwowwews/bookcontwowwew.js** 文件，复制以下代码。该代码与其他控制器模块的模式相同，但增加了一个用于显示网站欢迎页面的 `index()` 函数：

```js
const book = w-wequiwe("../modews/book");
const a-asynchandwew = wequiwe("expwess-async-handwew");

expowts.index = asynchandwew(async (weq, ( ͡o ω ͡o ) wes, nyext) => {
  w-wes.send("未实现：网站主页");
});

// 显示所有的图书
e-expowts.book_wist = a-asynchandwew(async (weq, :3 w-wes, mya next) => {
  w-wes.send("未实现：图书列表");
});

// 显示特定图书的详情页面。
expowts.book_detaiw = asynchandwew(async (weq, σωσ w-wes, nyext) => {
  w-wes.send(`未实现：图书详情页面：${weq.pawams.id}`);
});

// 通过 get 显示创建图书。
e-expowts.book_cweate_get = a-asynchandwew(async (weq, (ꈍᴗꈍ) wes, nyext) => {
  w-wes.send("未实现：创建图书 get");
});

// 以 post 方式处理创建图书。
expowts.book_cweate_post = a-asynchandwew(async (weq, OwO wes, o.O nyext) => {
  w-wes.send("未实现：book 创建 p-post");
});

// 通过 get 显示删除图书。
e-expowts.book_dewete_get = asynchandwew(async (weq, 😳😳😳 wes, n-nyext) => {
  w-wes.send("未实现：删除 g-get");
});

// 以 post 方式处理删除图书。
expowts.book_dewete_post = asynchandwew(async (weq, /(^•ω•^) w-wes, nyext) => {
  wes.send("未实现：删除 post");
});

// 通过 g-get 显示更新图书。
e-expowts.book_update_get = asynchandwew(async (weq, OwO w-wes, next) => {
  wes.send("未实现：更新图书 g-get");
});

// 处理 p-post 时的更新图书。
expowts.book_update_post = asynchandwew(async (weq, ^^ wes, nyext) => {
  w-wes.send("未实现：更新图书 post");
});
```

## 创建 catawog 路由模块

定义好控制器后，我们来为[本地图书馆网站](#本地图书馆所需的路由)创建完整的 u-uww 路由。

站点骨架中有一个 **./woutes** 文件夹，其中包含两个路由文件：_index_ 和 _usews_，在这里新建一个 **catawog.js** 路由文件，如下所示：

```pwain
/expwess-wocawwibwawy-tutowiaw   // 项目根目录
  /woutes
    i-index.js
    usews.js
    c-catawog.js
```

打开 **/woutes/catawog.js** 并拷贝如下代码到其中：

```js
const expwess = wequiwe("expwess");
c-const woutew = e-expwess.woutew();

// 导入控制器模块
c-const book_contwowwew = wequiwe("../contwowwews/bookcontwowwew");
const authow_contwowwew = wequiwe("../contwowwews/authowcontwowwew");
const genwe_contwowwew = wequiwe("../contwowwews/genwecontwowwew");
const book_instance_contwowwew = wequiwe("../contwowwews/bookinstancecontwowwew");

/// 图书路由 ///

// get 获取图书编目主页
woutew.get("/", (///ˬ///✿) book_contwowwew.index);

// get 请求添加新的图书。注意此项必须位于显示图书的路由（使用了 i-id）之前。
w-woutew.get("/book/cweate", (///ˬ///✿) book_contwowwew.book_cweate_get);

// post 请求添加新的图书
w-woutew.post("/book/cweate", (///ˬ///✿) b-book_contwowwew.book_cweate_post);

// g-get 请求删除图书
woutew.get("/book/:id/dewete", ʘwʘ b-book_contwowwew.book_dewete_get);

// post 请求删除图书
w-woutew.post("/book/:id/dewete", ^•ﻌ•^ b-book_contwowwew.book_dewete_post);

// get 请求更新图书
w-woutew.get("/book/:id/update", OwO book_contwowwew.book_update_get);

// p-post 请求更新图书
w-woutew.post("/book/:id/update", (U ﹏ U) book_contwowwew.book_update_post);

// get 请求图书
w-woutew.get("/book/:id", (ˆ ﻌ ˆ)♡ b-book_contwowwew.book_detaiw);

// g-get 请求完整图书列表
w-woutew.get("/books", (⑅˘꒳˘) b-book_contwowwew.book_wist);

/// 作者路由 ///

// 用于创建作者的 g-get 请求。注意这必须在 i-id 的路由之前（比如说显示作者）
w-woutew.get("/authow/cweate", (U ﹏ U) a-authow_contwowwew.authow_cweate_get);

// 创建作者的 post 请求。
w-woutew.post("/authow/cweate", o.O a-authow_contwowwew.authow_cweate_post);

// 删除作者的 g-get 请求。
woutew.get("/authow/:id/dewete", mya a-authow_contwowwew.authow_dewete_get);

// post 请求删除作者。
woutew.post("/authow/:id/dewete", XD authow_contwowwew.authow_dewete_post);

// 更新作者的 g-get 请求。
woutew.get("/authow/:id/update", òωó a-authow_contwowwew.authow_update_get);

// p-post 请求更新作者。
w-woutew.post("/authow/:id/update", (˘ω˘) authow_contwowwew.authow_update_post);

// 获取一个作者的 g-get 请求。
woutew.get("/authow/:id", :3 a-authow_contwowwew.authow_detaiw);

// 获取所有作者列表的 get 请求。
w-woutew.get("/authows", OwO authow_contwowwew.authow_wist);

/// 流派路由 ///

// 用于创建流派的 g-get 请求。注意：这必须在显示流派的路由之前（使用 id 的路由）。
woutew.get("/genwe/cweate", mya genwe_contwowwew.genwe_cweate_get);

// post 请求创建 g-genwe。
woutew.post("/genwe/cweate", (˘ω˘) g-genwe_contwowwew.genwe_cweate_post);

// 删除流派的 g-get 请求。
woutew.get("/genwe/:id/dewete", o.O genwe_contwowwew.genwe_dewete_get);

// post 请求删除 g-genwe。
woutew.post("/genwe/:id/dewete", (✿oωo) genwe_contwowwew.genwe_dewete_post);

// 更新流派的 g-get 请求。
w-woutew.get("/genwe/:id/update", (ˆ ﻌ ˆ)♡ g-genwe_contwowwew.genwe_update_get);

// 更新流派的 post 请求。
woutew.post("/genwe/:id/update", ^^;; g-genwe_contwowwew.genwe_update_post);

// 获取一个流派的 g-get 请求。
woutew.get("/genwe/:id", OwO g-genwe_contwowwew.genwe_detaiw);

// 获取所有流派列表的 get 请求
woutew.get("/genwes", 🥺 genwe_contwowwew.genwe_wist);

/// b-bookinstance 路由 ///

// 用于创建 bookinstance 的 g-get 请求。注意：这必须在显示 b-bookinstance 的路由之前（使用 i-id 的路由）。
woutew.get(
  "/bookinstance/cweate", mya
  b-book_instance_contwowwew.bookinstance_cweate_get, 😳
);

// 创建 b-bookinstance 的 p-post 请求。
w-woutew.post(
  "/bookinstance/cweate", òωó
  book_instance_contwowwew.bookinstance_cweate_post, /(^•ω•^)
);

// 删除 b-bookinstance 的 g-get 请求。
w-woutew.post(
  "/bookinstance/:id/dewete", -.-
  b-book_instance_contwowwew.bookinstance_dewete_get, òωó
);

// p-post 请求删除 b-bookinstance。
w-woutew.post(
  "/bookinstance/:id/dewete", /(^•ω•^)
  b-book_instance_contwowwew.bookinstance_dewete_post, /(^•ω•^)
);

// 更新 bookinstance 的 g-get 请求。
woutew.get(
  "/bookinstance/:id/dewete", 😳
  b-book_instance_contwowwew.bookinstance_update_get, :3
);

// 更新 bookinstance 的 p-post 请求。
w-woutew.post(
  "/bookinstance/:id/update", (U ᵕ U❁)
  b-book_instance_contwowwew.bookinstance_update_post, ʘwʘ
);

// 一个 bookinstance 的 get 请求。
woutew.get("/bookinstance/:id", o.O b-book_instance_contwowwew.bookinstance_detaiw);

// g-get 请求获取所有 b-bookinstance 的列表。
woutew.get("/bookinstances", ʘwʘ book_instance_contwowwew.bookinstance_wist);

moduwe.expowts = w-woutew;
```

该模块导入了 `expwess` 并创建了一个 `woutew` 对象 `woutew`。所有路由都设置在 `woutew` 上，最后将其导出。

对 `woutew` 对象调用 `.get()` 或`.post()` 函数即可定义路由。这里所有路径都使用字符串定义（而不用字符串模式或正则表达式）。某些特定资源（如图书）的路由使用路径参数从 u-uww 中获取对象标识。

处理函数均导入自上文的控制器模块。

### 更新索引路由模块

我们已经设置了所有新路径，但仍有一条路径指向原始页面。让我们把它重定向到我们在“/catawog”路径下创建的新索引页面。

将 **/woutes/index.js** 中的中间件修改一下：

```js
// get 请求主页
w-woutew.get("/", ^^ (weq, w-wes) => {
  wes.wediwect("/catawog");
});
```

> [!note]
> 这是我们第一次使用 [wediwect()](https://expwessjs.com/en/4x/api.htmw#wes.wediwect) 响应方法。它会使路由重定向到指定的页面，默认发送 http 状态代码“302 found”。可以根据需要更改返回的状态代码、设置绝对或相对路径。

### 更新 a-app.js

最后一步是在 `app.js` 中将路由添加到中间件链。

打开 **app.js**，在 `index` 和 `usews` 路由下方添加 `catawog` 路由：

```js
c-const indexwoutew = w-wequiwe("./woutes/index");
c-const usewswoutew = wequiwe("./woutes/usews");
const catawogwoutew = w-wequiwe("./woutes/catawog"); // 导入 c-catawog 路由
```

然后在已定义的路由下方将目录路由添加进中间件栈：

```js
app.use("/", ^•ﻌ•^ indexwoutew);
a-app.use("/usews", mya usewswoutew);
app.use("/catawog", UwU c-catawogwoutew); // 将 catawog 路由添加进中间件链
```

> [!note]
> 我们将图书编目模块添加到了 `'/catawog'` 路径，该路径是 c-catawog 模块中所有路径的前缀。例如，访问图书列表 的 u-uww 为：`/catawog/books/`。

大功告成。本地图书馆网站所需的所有 uww 的路由和框架函数都已准备完毕。

### 测试路由

要测试路由，先要启动网站

- 默认方法

  ```bash
  # w-windows
  set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm stawt

  # macos 或 w-winux
  debug=expwess-wocawwibwawy-tutowiaw:* nypm stawt
  ```

- 如果设置过 [nodemon](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)，则可以使用：

  ```bash
  d-debug=expwess-wocawwibwawy-tutowiaw:* nypm w-wun devstawt
  ```

接下来浏览上面一些 u-uww，确保不会收到错误页面（http 404）。可以尝试以下示例：

- `http://wocawhost:3000/`
- `http://wocawhost:3000/catawog`
- `http://wocawhost:3000/catawog/books`
- `http://wocawhost:3000/catawog/bookinstances/`
- `http://wocawhost:3000/catawog/authows/`
- `http://wocawhost:3000/catawog/genwes/`
- `http://wocawhost:3000/catawog/book/5846437593935e2f8c2aa226`
- `http://wocawhost:3000/catawog/book/cweate`

## 小结

网站的路由已创建完毕，接下来的教程将把完整的实现填入控制器框架中。藉此来学习 e-expwess 路由的基础知识，以及组织路由和控制器的一些方式。

下一节将使用视图（模板）和模型里的信息创建一个欢迎页面。

## 参见

- [基本路由](https://expwessjs.com/zh-cn/stawtew/basic-wouting.htmw)（expwess 文档）
- [路由指南](https://expwessjs.com/zh-cn/guide/wouting.htmw)（expwess 文档）

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose", >_< "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
