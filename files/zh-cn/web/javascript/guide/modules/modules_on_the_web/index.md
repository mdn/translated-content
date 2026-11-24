---
title: 在 web 上使用模块
slug: Web/JavaScript/Guide/Modules/Modules_on_the_web
l10n:
  sourceCommit: e976b4bf6b9e0c68b4321904560df47804d8cc48
---

本页讨论 JavaScript 模块如何与 web 平台集成。这里讨论的特性由 HTML 规范和其他 web 规范定义，而不是由核心语言定义，并且通常只与网页相关。如果你正在为其他环境编写模块，可能更应该阅读 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)和[跨平台的模块](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)指南。

## 服务器配置

把网页迁移到模块时，你会遇到的第一个差异是无法再使用 `file://` 协议查看 HTML。请通过[本地 HTTP 服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)提供包含 HTML 和模块的目录，然后使用服务器的 URL（例如 `http://localhost:8000/`）打开页面。

原因在于模块请求使用 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS)，而 `file://` URL 永远不是同源的。当从另一个源导入时，该服务器必须通过其 CORS 响应标头（例如 {{HTTPHeader("Access-Control-Allow-Origin")}}）允许你的页面所在的源。默认情况下，跨源模块请求不携带 cookie 等凭据。在 `<script>` 元素上设置 [`crossorigin="use-credentials"`](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin) 属性会发送凭据，前提是该服务器的 CORS 标头允许这样做（这适用于通过该脚本获取的整个图）。

服务器必须以 JavaScript [MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)（例如 `Content-Type: text/javascript`）发送 JavaScript 模块。请对 `.js` 和 `.mjs` 文件都做此检查。如果导入因 MIME 类型错误而失败，请在浏览器的网络工具中检查响应：服务器返回的可能是文件不存在或 HTML 回退页面，而不是模块。

## 将模块应用到 HTML

要在 [`<script>`](/zh-CN/docs/Web/HTML/Reference/Elements/script) 元素中声明脚本是模块，需要包含 `type="module"`。例如，要导入 `main.js` 脚本，我们这样写：

```html
<script type="module" src="main.js"></script>
```

只有入口点需要 `<script type="module">` 元素：它导入的任何模块都会自动作为模块加载，因此你不需要仅仅为了把某个东西声明为模块而添加 `<script>` 元素。

你也可以把 JavaScript 代码放在 `<script>` 元素的主体中，从而把模块脚本直接嵌入 HTML 文件：

```html
<script type="module">
  /* JavaScript 模块代码写在这里 */
</script>
```

通常应把所有模块都定义在单独的文件中。内联在 HTML 中声明的模块只能导入其他模块，但它们导出的任何内容都无法被其他模块访问（因为它们没有 URL）。

`import` 和 `export` 语句只能在模块中使用，不能用于普通脚本。如果你的 `<script>` 元素没有 `type="module"` 属性却尝试导入其他模块，就会抛出错误。例如：

```html example-bad
<script>
  import mod from "./mod.js"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

通过 [`integrity`](/zh-CN/docs/Web/HTML/Reference/Attributes/integrity) 属性实现的[子资源完整性](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity)对模块脚本同样有效，但该属性只覆盖入口模块。其依赖项的完整性元数据可以通过导入映射的 `integrity` 键提供。

> [!NOTE]
> 可以通过在 [`<link>`](/zh-CN/docs/Web/HTML/Reference/Elements/link) 元素中指定 [`rel="modulepreload"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/modulepreload) 来预加载模块及其依赖项。当这些模块被使用时，这可以显著减少加载时间。

如果你已经熟悉传统的 `<script>` 元素，还需要注意以下更多行为差异：

- 在同一环境中，一个模块只会执行一次，即使它被多次导入或在多个 `<script>` 标签中被引用。
- 加载模块脚本时无需使用 `defer` 属性（参见 [`<script>` 的属性](/zh-CN/docs/Web/HTML/Reference/Elements/script#属性)）；文档中声明时未带 `async` 的模块脚本会自动延迟。
- 添加 `async` 属性会让模块图在加载完成后立即求值，不等待 HTML 解析完成，也不保证与其他脚本的顺序关系。与经典脚本不同，`async` 对内联模块脚本同样有效。

## Worker 中的模块

文档并不是模块唯一运行的地方：[worker](/zh-CN/docs/Web/API/Web_Workers_API) 也可以是模块。你需要向 {{domxref("Worker/Worker", "Worker()")}} 或 {{domxref("SharedWorker/SharedWorker", "SharedWorker()")}} 构造函数，或者向 {{domxref("ServiceWorkerContainer/register", "navigator.serviceWorker.register()")}} 传入 `type: "module"` 来选择启用模块：

```js
const worker = new Worker("./worker.js", { type: "module" });
```

worker 的文件会成为它自己的[模块图](/zh-CN/docs/Web/JavaScript/Guide/Modules/Module_graph)的入口点。

在模块 worker 内部，你只能使用 `import` 声明或 `import()` 导入其他模块。调用 {{domxref("WorkerGlobalScope/importScripts", "importScripts()")}} 会抛出 `TypeError`。注意，动态 `import()` 在 service worker 中不可用，因此模块 service worker 的所有代码都必须能通过静态导入访问到。[Worklet](/zh-CN/docs/Web/API/Worklet) 使用 `addModule()` 加载代码，它始终是模块。

## web 上的模块说明符

模块说明符是 `from` 关键字之后的字符串：

```js
import { name } from "./module.js";
```

在[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南中我们已经说过，模块说明符的格式取决于运行时。下面来看看它们在浏览器中如何工作。

首先，web 上的一切都基于 URL。每个模块都有自己的 URL，因此你可以直接通过绝对 URL 导入模块：

```js
import { name } from "https://example.com/js/modules/module.js";
```

浏览器会向该 URL 发送 HTTP 请求，如果服务器返回成功响应且 `Content-Type: text/javascript`，模块加载过程就会继续。

> [!NOTE]
> 有一种流行的说法是“ESM 要求模块说明符中包含文件扩展名”。这既对也不对。JavaScript 运行时不会为你*添加*扩展名。如果你写 `import { name } from "https://example.com/modules/module";`，浏览器仍会向该 URL 发送请求，不带 `.js` 扩展名。如果该请求成功返回 JavaScript 内容，模块仍会照常加载。唯一的问题是服务器通常会把不带扩展名的请求理解为对 HTML 文件的请求，因此你几乎总是需要额外配置才能让它为该请求提供 JavaScript 文件。

其他可用作资源位置的 URL 方案也受支持，例如 [`data:`](/zh-CN/docs/Web/URI/Reference/Schemes/data)。更多信息请阅读 [`import` 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)。

始终从绝对 URL 导入，与使用绝对 URL 作为链接目标有同样的问题：它们很长，把站点迁移到另一个域时就会失效，移动整个 JavaScript 资源路径时也会失效。模块说明符也可以是相对 URL，类似于 {{HTMLElement("a")}} 元素的 [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/a) 属性。唯一的区别是所有相对 URL 都必须以 `/`、`./` 或 `../` 之一开头——也就是说，你不能使用像 `modules/module.js` 这样的“裸”相对 URL，而必须写成 `./modules/module.js`。这一限制保留裸说明符，以便赋予它们特殊含义——由 Node.js 推广的生态惯例是，像 `"jquery"` 这样的裸名称指向一个包。在 web 上，这种特殊含义现在由[导入映射](#使用导入映射导入模块)赋予。未被导入映射重映射的裸说明符会抛出 `TypeError`。

模块说明符中的 URL 相对于当前模块的 URL 解析，而不是 HTML 文档的 URL。例如，在位于 `https://example.com/js/main.js` 的模块中，要导入 `https://example.com/js/modules/module.js`，请这样写：

```js
import { name } from "./modules/module.js";
```

## 使用导入映射导入模块

除了相对和绝对 URL 之外，[导入映射](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap)还允许开发者在导入模块时在模块说明符中指定几乎任意文本；映射会提供一个对应的值，在解析模块 URL 时替换该文本。导入映射是在 `type` 属性设为 [`importmap`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap) 的 `<script>` 元素中，使用 [JSON 对象](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap#导入映射_json_表示)定义的。

> [!NOTE]
> 导入映射只应用于文档——规范没有定义如何在 worker 或 worklet 上下文中应用导入映射。 <!-- https://github.com/WICG/import-maps/issues/2 -->

例如，下面导入映射中的 `imports` 键定义了一个“模块说明符映射”JSON 对象，其中的属性名可以用作模块说明符，对应的值会在浏览器解析模块 URL 时被替换。

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

> [!NOTE]
> 从现在起，我们会省略外层的 `<script type="importmap">` 元素，直接以 JSON 代码的形式展示导入映射。请记住，该 JSON 必须内联在 HTML 中，不能是通过 `src` 引用的外部文件。

有了这个映射，你现在可以使用 `shapes` 和 `shapes/square` 这样的裸说明符，而它们在默认情况下会被拒绝：

```js
// 裸模块名作为模块说明符
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// 把一个 URL 重映射到另一个 URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

导入映射有许多用例：

- 它们允许使用裸模块名导入模块（如同 Node.js 中那样），使导入了 npm 包的模块可以直接部署到 web 上（只要这些包也能通过某个 URL 访问）。参见[字面匹配](#字面匹配)和[前缀匹配](#前缀匹配)。
- 它们允许在必要时把用完整 URL 导入的模块换成其他 URL，而无需修改源代码。参见[通用 URL 重映射](#通用_url_重映射)。
- 它们允许根据导入模块的脚本的路径，导入特定版本的库。参见 [`scopes` 对象](#scopes_对象)。

这可以减少在浏览器和服务器中同时使用相同 JavaScript 库所需的工作量。

此外，导入映射还允许为模块依赖项设置哈希完整性（`<script>` 上的 `integrity` 属性只应用于入口模块）。这里不介绍这一内容，因为它与说明符解析无关。参见[完整性元数据映射](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap#完整性元数据映射)。

### 特性检测

你可以使用 [`HTMLScriptElement.supports()`](/zh-CN/docs/Web/API/HTMLScriptElement/supports_static) 静态方法检查是否支持导入映射（该方法本身已被广泛支持）：

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### `imports` 对象

`imports` 属性包含一个对象，其中每个属性值都是字符串。用作值的其他数据类型会变成 `null`。下面还介绍了许多其他会导致值变为 `null` 的条件。当解析器遇到值为 `null` 的条目时，该说明符的解析会立即失败。

每个键必须是以下两种之一：

- 键不以 `/` 结尾：它将与说明符按原样比较。
- 键以 `/` 结尾：它将作为说明符的前缀进行比较。在这种情况下，值也必须以 `/` 结尾，否则会变成 `null`。稍后会详细介绍前缀匹配。

值必须是一个 URL，相对于包含该导入映射的文档的[基准 URL](/zh-CN/docs/Web/HTML/Reference/Elements/base)解析。如果 URL 解析失败，值会变成 `null`。（注意，相对 URL 可以“裸”，只有模块说明符不允许裸。）

`imports` 对象的属性顺序无关紧要：内部始终按键的词典序降序排列。解析期间，属性按该顺序依次匹配。

#### 字面匹配

假设以下 `<script>` 元素包含在位于 `https://example.com/welcome` 的页面中。

```json
{
  "imports": {
    "square": "./shapes/square.js"
  }
}
```

这里我们使用相对 URL 作为值，它相对于文档的基准 URL 解析，因此等价于写成 `https://example.com/welcome/shapes/square.js`。如果这个 `<script>` 元素包含在页面 `https://example.com/welcome/` 中，则该值将等价于 `https://example.com/welcome/shapes/square.js`。

现在，当说明符解析器遇到如下说明符时：

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

它会逐个检查 `imports` 条目（这里只有一个），发现 `"square"` 键与请求的说明符相等，并使用其值。现在就会请求 `https://example.com/shapes/square.js` 处的模块。

#### 前缀匹配

如果键带有尾随斜杠 `/`（此时值也需要尾随斜杠），那么除了字面匹配之外，它还可以作为前缀匹配。

例如，考虑以下导入映射：

```json
{
  "imports": {
    "shapes/": "./shapes/"
  }
}
```

同样，相对 URL 值在解析导入映射时相对于文档 URL 解析，因此等价于写成 `https://example.com/shapes/`。

现在，当说明符解析器遇到如下说明符时：

```js
import { name as squareNameFour } from "shapes/square.js";
```

它会逐个检查 `imports` 条目（这里只有一个），发现 `"shapes/"` 键是所请求说明符的前缀，并使用其映射值。键前缀会从说明符中剥离，剩下 `square.js`。这个剩余部分以映射值（`https://example.com/shapes/`）作为基准 URL 进行解析。现在就会请求 `https://example.com/shapes/square.js` 处的模块。

说明符的剩余部分不允许“逃出”映射值。例如，如果你这样写：

```js
import { name as squareNameFour } from "shapes/../square.js";
```

那么剩余部分是 `../square.js`，相对于 `https://example.com/shapes/` 解析会得到 `https://example.com/square.js`。此时映射值不再是最终 URL 的前缀。解析器在这种情况下会抛出错误。

以 `/` 结尾的键仍然可以进行字面匹配。例如：

```js
import { name as squareNameFour } from "shapes/";
```

解析器会把它解析为 `https://example.com/shapes/` 并请求该 URL。

再次说明，`imports` 对象的条目始终按如下规则排序：如果键 A 是键 B 的前缀，则 B 排在 A 之前。因此对于以下导入映射：

```json
{
  "imports": {
    "shapes/": "./shapes/",
    "shapes/square/": "./squares/"
  }
}
```

模块说明符 `shapes/square/index.js` 仍会优先匹配更具体的 `shapes/square/`，而不是 `shapes/`。

#### 混合字面匹配和前缀匹配

在 Node 中，你既可以导入包本身（这会导入 [`main`](https://docs.npmjs.com/cli/configuring-npm/package-json/#main) 文件），也可以导入包内的文件（前提是 package.json 没有 [`exports`](https://docs.npmjs.com/cli/configuring-npm/package-json/#exports) 字段）：

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

在这种情况下，你必须为 `lodash` 和 `lodash/` 前缀分别提供条目：

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

#### 通用 URL 重映射

键不必是裸名称，也可以是绝对或相对 URL。给定以下导入映射：

```json
{
  "imports": {
    "https://www.unpkg.com/lodash/": "/node_modules/lodash-es/"
  }
}
```

现在，当说明符解析器遇到如下说明符时：

```js
import { name as squareNameFour } from "https://www.unpkg.com/lodash/fp.js";
```

它会使用相应的前缀条目，将其解析为 `https://example.com/node_modules/lodash-es/fp.js`。这在测试时特别有用，因为你可以用替代版本模拟一个模块。

URL 重映射还有助于从模块名中去掉哈希。网站使用的脚本文件通常带有哈希文件名以简化缓存。这种做法的缺点是，如果某个模块发生变化，任何使用其哈希文件名导入它的模块也需要更新或重新生成。这可能导致连锁更新，浪费网络资源。

导入映射为这个问题提供了方便的解决方案。应用程序和脚本不再依赖具体的哈希文件名，而是依赖模块名的无哈希版本。像下面这样的导入映射会提供到实际脚本文件的映射。

```json
{
  "imports": {
    "/node/srcs/application.js": "/node/srcs/application-fg7744e1b.js",
    "/node/srcs/dependency.js": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

如果 `dependency.js` 发生变化，其文件名中包含的哈希也会改变。在这种情况下，我们只需更新导入映射以反映模块名称的变化。JavaScript 源代码仍然从 `"/node/srcs/dependency.js"` 导入。

遗憾的是，导入映射不提供“后缀匹配”，因此你无法表达“无论前面的路径是什么，都把 `application.js` 替换为 `application-fg7744e1b.js`”这样的规则。你现在必须始终从 `/node/srcs/application.js` 导入，而不能用 `./application.js`、`https://example.com/node/srcs/application.js` 等。最终，你可能仍会发现用打包器编译代码并重写导入会更方便。

### `scopes` 对象

`imports` 对象是全局的：重映射应用于应用中的所有模块，无论它们位于何处。同一个 `lodash` 说明符总是解析到同一个模块。

在现实中，不同模块可能希望导入不同版本的 `lodash` 包。例如，包 A 可能依赖 `lodash` v3，而包 B 可能依赖 `lodash` v4。在 Node 中，这是通过给每个包各自的 `node_modules` 来实现的：

```plain
https://example.com
└── node_modules
    ├── lodash          <-- v4; your application and package B will use this
    ├── package-a
    │   └── node_modules
    │       └── lodash  <-- v3; package A will use this
    └── package-b
```

要在不重写源代码的情况下直接把这个 `node_modules` 部署到网站，你必须让导入映射把 `package-a` 内模块的 `lodash` 说明符解析到与 `package-b` 不同的地址。你可以用 `scopes` 对象来实现，如下所示：

```json
{
  "imports": {
    "lodash": "/node_modules/lodash/lodash.js"
  },
  "scopes": {
    "/node_modules/package-a/": {
      "lodash": "/node_modules/package-a/lodash/lodash.js"
    }
  }
}
```

在 `scopes` 对象中，每个键是一个作用域，每个值是一个模块说明符映射，与 `imports` 类似。与 `imports` 的键一样：

- 作用域可以不以 `/` 结尾，此时它与导入者的 URL 进行字面匹配；也可以以 `/` 结尾，此时它还可以作为导入者 URL 的前缀进行匹配。
- 作用域键按词典序降序排列（在 URL 解析之后），因此更具体的前缀优先于不太具体的前缀进行匹配。

唯一的区别是，作用域必须是有效的 URL，并相对于文档基准 URL 解析。

作用域会按顺序尝试：如果某个作用域没有为所请求的说明符提供对应的导入映射，解析器会转到下一个匹配的作用域（如果有）。如果没有作用域键匹配导入者，或者所有匹配的作用域都没有提供导入映射，则使用全局 `imports` 映射。但是，如果在此过程中的任何位置命中了某个条目但其值为 `null`（例如值不是有效的 URL），解析会立即失败，不会回退。

例如在上面的示例中，作用域键是 `/node_modules/package-a/`，它被解析为 `https://example/node_modules/package-a/`。如果位于 `https://example.com/node_modules/package-a/index.js` 的模块包含：

```js
import _ from "lodash";
```

解析器会按优先级查看 `scopes`，发现导入者的 URL 是该作用域键的前缀，于是使用其说明符映射，其中定义 `lodash` 应映射到 `https://example.com/node_modules/package-a/lodash/lodash.js`，即 v3 版本。

另一方面，如果位于 `https://example.com/node_modules/package-b/index.js` 的模块包含同一行，解析器会检查 `scopes` 却没有找到匹配的键，于是回退到全局 `imports` 映射，导入 `https://example.com/node_modules/lodash/lodash.js`，即 v4 版本。

注意，作用域键只用于匹配导入者的 URL；它不提供用于解析或校验任何其他 URL 的基准 URL。最终映射的 URL 不必匹配作用域路径，相对映射 URL 仍然相对于包含导入映射的脚本的基准 URL 解析。

## 加载非 JavaScript 资源

《[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)》指南已经介绍了[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)语法，它允许你导入非 JavaScript 资源。核心语言规定的资源类型是 `type: "json"` 和 `type: "text"`。

```js
import colors from "./colors.json" with { type: "json" };
```

在 web 上还额外有 `type: "css"`，它把 CSS 文件作为 {{domxref("CSSStyleSheet")}} 对象导入。

```js
import styles from "./styles.css" with { type: "css" };

document.adoptedStyleSheets = [styles];
```

虽然核心语言规范总体上对 `type` 属性着墨不多（除了规定 `type: "json"` 必须产生 JSON 模块、`type: "text"` 必须产生文本模块），但出于安全原因，HTML 规范要求浏览器实现严格的模块类型检查。如果你指定了 `type: "json"` 或 `type: "css"`，结果必须以相应的 `Content-Type`（例如 `application/json` 或 `text/css`）提供。如果不指定任何类型，结果也必须以 JavaScript 或 WebAssembly（`text/javascript` 或 `application/wasm`）提供。

在上面 `type: "css"` 的示例中，如果该文件实际上是 JavaScript（以 `text/javascript` 的 `Content-Type` 提供），导入就会失败。这可以确保你不会在无意之处执行代码。更多信息请阅读[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)参考。

其他环境（包括 Node.js 和 Deno）通常模仿 web 语义，因此它们也要求严格的类型匹配。

在 web 上，`type` 属性还会改变请求的[目的地](/zh-CN/docs/Web/HTTP/Reference/Headers/Sec-Fetch-Dest)，因此即使说明符字符串相同，最终得到的模块内容也可能不同。

```js
import code from "./module";
// 这会发送 Sec-Fetch-Dest: script 的请求
// 服务器可能返回 JavaScript：`export default 1;`

import data from "./module" with { type: "json" };
// 这会发送 Sec-Fetch-Dest: json 的请求
// 服务器可能返回 JSON：`{ "value": 1 }`

import styles from "./module" with { type: "css" };
// 这会发送 Sec-Fetch-Dest: style 的请求
// 服务器可能返回 CSS：`.value { color: green; }`

import text from "./module" with { type: "text" };
// 这会发送 Sec-Fetch-Dest: text 的请求
// 服务器可能返回文本：`Hello world!`
```

## 模块缓存

[模块缓存](/zh-CN/docs/Web/JavaScript/Guide/Modules/Module_graph#module_caching)让导入可以复用模块及其状态。在 web 上，HTML 规范定义了哪些请求共享同一个模块。

在浏览器中，[模块映射](https://html.spec.whatwg.org/multipage/webappapis.html#module-map)以解析后的请求 URL 和模块类型作为键。因此不同的说明符字符串可以标识同一个模块。例如，尽管下面两个请求使用不同的字符串说明符，它们指向同一个模块（假设没有改变解析结果的导入映射）：

```js
// -- https://example.com/main.js --
import * as config1 from "./config.js";
import * as config2 from "https://example.com/config.js";

console.log(config1 === config2); // true
```

通过[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)选择的模块类型也是键的一部分，因此以 `{ type: "json" }` 请求某个 URL 不会复用该 URL 不带 `type`（隐式为 JavaScript）的条目。不同文档和 worker 有各自的模块映射，因此在页面中导入模块和在它的 worker 中导入模块不会共享该模块的变量。

模块缓存与 [HTTP 缓存](/zh-CN/docs/Web/HTTP/Guides/Caching)是分开的。HTTP 缓存可以复用响应字节；模块缓存复用模块的身份和状态。即使模块的源代码来自 HTTP 缓存，新文档仍可以重新求值该模块。反过来，`Cache-Control: no-store` 也不会让已经求值过的模块在每次导入时再次执行。

浏览器会把查询字符串或片段不同的 URL 视为不同的模块身份，即使它们获取到的源代码完全相同：

```js
import * as config1 from "./config.js?version=1";
import * as config2 from "./config.js?version=2";

console.log(config1 === config2); // false
```

这会从同一份源代码创建两个模块实例。后续的依赖仍然共享——如果两个实例都导入 `"./logger.js"`，该说明符仍会从两者解析到相同的 URL，因此它们共享 `logger.js`。

对于[加载错误](/zh-CN/docs/Web/JavaScript/Guide/Modules/Module_graph#errors_from_loading)，[HTML 规范](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script)要求把失败的获取（包括 HTTP 错误响应）从模块映射中移除，以便之后的导入可以重试。HTTP 缓存仍可能提供缓存的错误响应。然而，解析错误会保留在模块映射中，因此重试同一模块不会获取修正后的源代码。

## `import.meta` 对象

《[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)》指南还介绍了 [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta) 对象，并提到它的*所有*属性都由宿主定义。

当资源位于相对于你的模块的位置时，请把 [`import.meta.url`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta) 与 {{domxref("URL/URL", "URL()")}} 构造函数一起使用：

```js
// -- modules/set-user.js --
const apiURL = new URL("../api/set-user", import.meta.url);

export async function setUser(name) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  if (!response.ok) {
    throw new Error(`Unable to set user: ${response.status}`);
  }
}
```

在窗口中，直接传给 `fetch()` 的相对 URL（例如 `fetch("../api/set-user")`）是相对于文档的基准 URL 解析的，而不是相对于包含该调用的 JavaScript 模块。显式构造 URL 可以让资源位置不依赖于导入该模块的页面。

要使用宿主的模块解析规则解析模块说明符，请使用 [`import.meta.resolve()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)。例如，在定义了 `"shapes"` 的导入映射的浏览器中，`import.meta.resolve("shapes")` 会返回其解析后的 URL。与 `import()` 不同，这会在不加载或求值模块的情况下解析说明符。

## 参见

- [HTML `<script>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/script)
- [`<script type="importmap">`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)
