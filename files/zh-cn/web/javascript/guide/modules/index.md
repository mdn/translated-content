---
title: JavaScript 模块
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

这篇指南会给你入门 JavaScript 模块的全部信息。

## 模块化的背景

JavaScript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 JavaScript 脚本的复杂程序，还有一些被用在其他环境（例如 [Node.js](/zh-CN/docs/Glossary/Node.js)）。

复杂的项目需要一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 JavaScript 库和框架已经开始了模块的使用（例如，[CommonJS](https://zh.wikipedia.org/wiki/CommonJS) 和基于 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) 的其他模块系统，如 [RequireJS](https://requirejs.org/)、[webpack](https://webpack.js.org/) 和 [Babel](https://babeljs.io/)）。

所有现代浏览器都原生支持模块特性，无需转译。这是一件好事——浏览器可以优化模块的加载，使其比使用库进行所有额外的客户端处理和额外的网络开销更高效。不过，这并不意味着像 webpack 这样的打包工具就过时了——打包工具仍然在将代码分割成合理大小的块方面做得很好，并且能够进行其他优化，如极简化、无用代码消除和摇树优化。

## 介绍一个例子

为了演示模块的使用，我们创建了[一系列简单的示例](https://github.com/mdn/js-examples/tree/main/module-examples)，你可以在 GitHub 上找到。这个例子演示了一个简单的模块集合，用来在 web 页面上创建了一个 {{htmlelement("canvas")}} 标签，在 canvas 上绘制（并记录有关的信息）不同形状。

这的确有点简单，但是保持足够简单能够清晰地演示模块。

> [!NOTE]
> 如果你想去下载这个例子在本地运行，你需要通过本地 web 服务器去运行。

## 基本的示例文件的结构

在我们的第一个例子（参见 [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)）文件结构如下：

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> 在这个指南中所有示例都具有基本相同的结构；需要慢慢熟悉上面的内容。

modules 目录下的两个模块的描述如下：

- `canvas.js`——包含与设置画布相关的功能：

  - `create()`——在指定 ID 的包装器 {{htmlelement("div")}} 内创建指定 `width` 和 `height` 的画布，该 ID 本身附加在指定的父元素内。返回包含画布的 2D 上下文和包装器 ID 的对象。
  - `createReportList()`——创建一个无序列表，并将其添加到指定的包装元素内，该列表可用于输出报告数据。返回列表的 ID。

- `square.js`——包含：

  - `name`——包含字符串“square”的常量。
  - `draw()`——在指定画布上绘制一个正方形，具有指定的大小，位置和颜色。返回包含正方形大小，位置和颜色的对象。
  - `reportArea()`——在给定长度的情况下，将正方形区域写入特定报告列表。
  - `reportPerimeter()`——在给定长度的情况下，将正方形的周长写入特定的报告列表。

### `.mjs` 与 `.js`

纵观此文，我们使用 `.js` 扩展名的模块文件，但在其他一些文章中，你可能会看到 `.mjs` 扩展名的使用。[V8 推荐了这样的做法](https://v8.dev/features/modules#mjs)，比如有下列理由：

- 比较清晰，这可以指出哪些文件是模块，哪些是常规的 JavaScript。
- 这能保证你的模块可以被运行时环境和构建工具识别，比如 [Node.js](https://nodejs.org/api/esm.html#esm_enabling) 和 [Babel](https://babeljs.io/docs/options#sourcetype)。

但是我们决定继续使用 `.js` 扩展名，未来可能会更改。为了使模块可以在浏览器中正常地工作，你需要确保你的服务器能够正常地处理 `Content-Type` 标头，其应该包含 JavaScript 的 MIME 类型 `text/javascript`。如果没有这么做，你可能会得到一个严格 MIME 类型检查错误：“The server responded with a non-JavaScript MIME type（服务器返回了非 JavaScript MIME 类型）”，并且浏览器会拒绝执行相应的 JavaScript 代码。多数服务器可以正确地处理 `.js` 文件的类型，但是 `.mjs` 还不行。已经可以正常响应 `.mjs` 的服务器有 [GitHub Pages](https://pages.github.com/) 和 Node.js 的 [`http-server`](https://github.com/http-party/http-server#readme)。

如果你已经在使用相应的环境了，那么一切正常。或者如果你还没有，但你知道你在做什么（比如你可以配置服务器以为 `.mjs` 设置正确的 `Content-Type`）。但如果你不能控制提供服务，或者用于公开文件发布的服务器，这可能会导致混乱。

为了学习和保证代码的可移植的目的，我们建议使用 `.js`。

如果你认为使用 `.mjs` 仅用于模块带来的清晰性非常重要，但不想引入上面描述的相应问题，你可以仅在开发过程中使用 `.mjs`，而在构建过程中将其转换为 `.js`。

还值得注意的是：

- 一些工具可能不支持 `.mjs`。
- `<script type="module">` 属性用于指示引入的模块，你会在下面看到。

## 导出模块的功能

为了获得模块的功能，要做的第一件事就是把它们导出来。这可以使用 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 语句来完成。

最简单的方法是把 export 放到你想要导出的项前面，比如：

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

你能够导出函数 `var`、`let`、`const` 和等会看到的类。export 要放在最外层；比如你不能够在函数内使用 `export`。

更方便的导出模块的方法是，在模块文件末尾使用一个 export 语句，以花括号括起来并用逗号分隔的形式列出所有需导出的功能。比如：

```js
export { name, draw, reportArea, reportPerimeter };
```

## 导入功能到你的脚本

从模块中导出一些功能后，你需要将它们导入到脚本中才能使用。最简单的方法如下所示：

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

你可以使用 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 语句，然后用花括号括起来的用逗号分割的功能列表，然后是关键字 `from`，然后是*模块标识符*（module specifier）。

模块标识符提供一个 JavaScript 环境可以解析为模块文件路径的字符串。在浏览器中，它可以是一个相对于站点根目录的路径，对于我们的 `basic-modules` 示例来说是 `/js-examples/module-examples/basic-modules`。但是，这里我们使用点（`.`）语法来表示“当前位置”，然后紧跟着我们想要找的文件的相对路径。这比每次都要写下整个绝对路径要好得多，因为相对路径更短，并且使 URL 可移植——如果你将其移动站点目录中的其他位置，该示例仍然有效。

例如：

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

变成了

```bash
./modules/square.js
```

你可以在 [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) 中看到这些。

> [!NOTE]
> 在某些模块系统中，模块的路径不是相对或绝对路径，并且没有文件扩展名，比如 `modules/square`。如果你定义了[导入映射](#使用导入映射导入模块)，则可以在浏览器环境中使用这种语法。

因为你导入了这些功能到你的脚本文件，你可以像定义在相同的文件中一样去使用它。下面展示的是在 `main.js` 中的 import 语句下面的内容：

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> 导入的值是被导出的功能的只读视图。类似于 `const` 变量，你不能重新分配导入的变量，但你仍然可以修改对象值的属性。只有模块导出它才能重新分配值。查看 [`import` 参考](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#导入的值只能由导出者修改)了解更多信息。

## 使用导入映射导入模块

上面我们看到浏览器如何使用模块标识符（可以为绝对 URL，或使用文档的基础 URL 解析的相对 URL）导入模块：

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[导入映射](/zh-CN/docs/Web/HTML/Element/script/type/importmap)允许开发者在导入模块时指定几乎任何文本，映射提供了一个相应的值，当模块 URL 被解析时将替换文本。

例如，下面导入映射中的 `imports` 键定义了一个“模块标识符映射”JSON 对象，其中属性名称可以用作模块标识符，当浏览器解析模块 URL 时，相应的值将被替换。这些值必须是绝对或相对 URL。使用文档包含导入映射的[基础 URL](/zh-CN/docs/Web/HTML/Element/base) 将相对 URL 解析为绝对 URL。

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

导入映射是在一个 `<script>` 元素中定义的 [JSON 对象](/zh-CN/docs/Web/HTML/Element/script/type/importmap#导入映射_json_表示)，`type` 属性设置为 [`importmap`](/zh-CN/docs/Web/HTML/Element/script/type/importmap)。文档中只能有一个导入映射，因为它用于解析静态和动态导入的模块，所以必须在导入模块的任何 `<script>` 元素之前声明。请注意，导入映射仅适用于文档——规范不涵盖如何在 worker 或 worklet 上下文中应用导入映射。

通过这个映射，你现在可以使用上面的属性名称作为模块标识符。如果模块标识符尾部没有斜杠，那么整个模块标识符将被匹配和替换。例如，下面我们匹配裸模块名称，并将一个 URL 重定向到另一个路径。

```js
// 裸模块名称作为模块标识符
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// 重新映射一个 URL 到另一个 URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

如果模块标识符尾部有一个斜杠，那么值也必须有一个，键将被匹配为“路径前缀”。这允许重新映射整个 URL 的类别。

```js
// 重新映射一个 URL 作为前缀 ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

在导入映射中，可能有多个键可以匹配一个模块标识符。例如，模块标识符 `shapes/circle/` 可以匹配模块标识符键 `shapes/` 和 `shapes/circle/`。在这种情况下，浏览器将选择最具体（最长）的匹配模块标识符键。

导入映射允许使用裸模块名称（如在 Node.js 中）导入模块，还可以模拟从包中导入模块，无论是否带有文件扩展名。虽然上面没有显示，但它们还允许根据导入模块的脚本路径导入特定版本的库。通常，它们使开发人员能够编写更符合人体工程学的导入代码，并更容易管理站点使用的模块的不同版本和依赖关系。这可以减少在浏览器和服务器中使用相同 JavaScript 库所需的工作量。

以下章节详细介绍了上述的各种功能。

### 特性检测

你可以使用 [`HTMLScriptElement.supports()`](/zh-CN/docs/Web/API/HTMLScriptElement/supports_static) 静态方法（它本身也得到了广泛支持）来检查是否支持导入映射：

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("浏览器支持导入映射。");
}
```

### 以裸名称导入模块

在一些 JavaScript 环境中，例如 Node.js，你可以使用裸名称作为模块标识符。这是因为环境可以将模块名称解析到文件系统中的标准位置。例如，你可以使用以下语法来导入“square”模块。

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

要在浏览器中使用裸名称，你需要一个导入映射，它提供了浏览器解析模块标识符到 URL 所需的信息（如果 JavaScript 尝试导入无法解析到模块位置的模块标识符，将抛出 `TypeError`）。

下面你可以看到一个定义了 `square` 模块标识符键的映射，在这种情况下，它映射到一个相对地址值。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

有了这个映射，我们现在可以在导入模块时使用裸名称：

```js
import { name as squareName, draw } from "square";
```

### 重映射模块路径

模块标识符映射条目，其中标识符键和其关联值都带有尾部斜杠（`/`），可以用作路径前缀。这允许将一整组导入 URL 从一个位置重映射到另一个位置。它还可以用于模拟“包和模块”，例如你在 Node 生态系统中可能看到的那样。

> [!NOTE]
> 尾部 `/` 表示模块标识符键可以作为模块标识符的一部分进行替换。如果没有这个，浏览器将只匹配（并替换）整个模块标识符键。

#### 模块包

以下 JSON 导入映射定义将 `lodash` 作为裸名称，并将模块标识符前缀 `lodash/` 映射到路径 `/node_modules/lodash-es/`（解析为文档基础 URL）：

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

有了这个映射，你可以使用裸名称导入整个“包”，并使用路径映射导入其中的模块：

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

可以在上面导入 `fp` 而不使用 `.js` 文件扩展名，但你需要为该文件创建一个裸模块标识符键，例如 `lodash/fp`，而不是使用路径。如果你只想导入一个模块，这可能是合理的，但如果你希望导入许多模块，这种方法的扩展性较差。

#### 通用 URL 重映射

模块标识符键不一定是路径——它也可以是绝对 URL（或类似 URL 的相对路径，如 `./`、`../`、`/`）。如果你想将具有绝对路径的模块重映射到你自己的本地资源，这可能会很有用。

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### 用于版本管理的域限模块

像 Node 这样的生态系统使用 npm 等包管理器来管理模块及其依赖项。包管理器确保每个模块与其他模块及其依赖项分开。因此，虽然一个复杂的应用程序可能在模块图的不同部分多次包含相同的模块，但用户不需要考虑这种复杂性。

> [!NOTE]
> 你也可以使用相对路径实现版本管理，但这并不理想，因为这会强制你的项目采用特定的结构，并且阻止你使用裸模块名称。

导入映射同样允许你在应用程序中拥有多个版本的依赖项，并使用相同的模块标识符引用它们。你可以通过 `scopes` 键实现这一点，它允许你根据执行导入的脚本路径提供模块标识符映射。下面的示例演示了这一点。

```json
{
  "imports": {
    "cool-module": "/node_modules/cool-module/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "cool-module": "/node_modules/some/other/location/cool-module/index.js"
    }
  }
}
```

有了这个映射，如果一个 URL 包含 `/node_modules/dependency/` 的脚本导入 `cool-module`，将使用 `/node_modules/some/other/location/cool-module/index.js` 中的版本。如果域限映射中没有匹配的作用域，或者匹配的作用域中没有匹配的标识符，则使用 `imports` 中的映射作为回退。例如，如果 `cool-module` 是在不匹配作用域路径的脚本中导入的，则会使用 `imports` 中的模块标识符，映射到 `/node_modules/cool-module/index.js` 中的版本。

请注意，用于选择作用域的路径不会影响地址的解析。映射路径中的值不必与作用域路径匹配，且相对路径仍然解析为包含导入映射的脚本的基础 URL。

与模块标识符映射一样，你可以有多个作用域键，并且这些键可能包含重叠的路径。如果多个作用域匹配引用 URL，则首先检查最具体的作用域路径（最长的作用域键）以查找匹配的标识符。如果没有匹配的标识符，浏览器将回退到下一个最具体的匹配作用域路径，依此类推。如果在任何匹配的作用域中都没有匹配的标识符，浏览器会检查 `imports` 键中的模块标识符映射以查找匹配项。

### 通过映射去除哈希文件名以改进缓存

网站使用的脚本文件通常具有哈希文件名以简化缓存。这种方法的缺点是，如果模块发生变化，任何使用其哈希文件名导入它的模块也需要更新/重新生成。这可能导致更新的级联，浪费网络资源。

导入映射提供了一个方便的解决方案。应用程序和脚本依赖于未哈希版本的模块名称（地址），而不是依赖于特定的哈希文件名。如下所示的导入映射提供了到实际脚本文件的映射。

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

如果 `dependency_script` 发生变化，那么其文件名中的哈希也会发生变化。在这种情况下，我们只需要更新导入映射以反映模块名称的变化。我们不需要更新任何依赖它的 JavaScript 代码的源代码，因为导入语句中的标识符不会改变。

## 加载非 JavaScript 资源

统一模块架构带来的一个令人兴奋的功能是能够将非 JavaScript 资源作为模块加载。例如，你可以将 JSON 作为 JavaScript 对象导入，或将 CSS 作为 {{domxref("CSSStyleSheet")}} 对象导入。

你必须明确声明你正在导入哪种资源。默认情况下，浏览器假定资源是 JavaScript，如果解析的资源是其他类型，将抛出错误。要导入 JSON、CSS 或其他类型的资源，请使用[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)语法：

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

浏览器还会对模块类型进行验证，如果 `./data.json` 不是 JSON 文件，将会失败。这确保了你在仅打算导入数据时不会意外执行代码。一旦成功导入，你现在可以像使用普通 JavaScript 对象或 `CSSStyleSheet` 对象一样使用导入的值。

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## 将模块应用到你的 HTML

现在我们只需要将 `main.js` 模块应用到我们的 HTML 页面。这与将常规脚本应用到页面非常相似，但有一些显著的区别。

首先，你需要在 [`<script>`](/zh-CN/docs/Web/HTML/Element/script) 元素中包含 `type="module"`，以声明此脚本为模块。要导入 `main.js` 脚本，我们使用以下代码：

```html
<script type="module" src="main.js"></script>
```

你也可以将模块的脚本直接嵌入到 HTML 文件中，将 JavaScript 代码放在 `<script>` 元素的主体内：

```html
<script type="module">
  /* JavaScript 模块代码 */
</script>
```

你只能在模块内使用 `import` 和 `export` 语句，不能在常规脚本中使用。如果你的 `<script>` 元素没有 `type="module"` 属性并尝试导入其他模块，将会抛出错误。例如：

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

通常，你应该在单独的文件中定义所有模块。内联声明在 HTML 中的模块只能导入其他模块，但它们导出的任何内容将无法被其他模块访问（因为它们没有 URL）。

> [!NOTE]
> 可以通过在 [`<link>`](/zh-CN/docs/Web/HTML/Element/link) 元素中指定 [`rel="modulepreload"`](/zh-CN/docs/Web/HTML/Attributes/rel/modulepreload) 来预加载模块及其依赖项。这可以显著减少使用模块时的加载时间。

## 模块与经典脚本的其他不同

- 你需要注意本地测试——如果你通过本地加载 HTML 文件（比如一个 `file://` 路径的文件），你将会遇到 CORS 错误，因为 JavaScript 模块安全性需要。你需要通过一个服务器来测试。
- 另请注意，你可能会从模块内部定义的脚本部分获得与标准脚本中不同的行为。这是因为模块自动使用{{jsxref("Strict_mode", "严格模式", "", 1)}}。
- 加载一个模块脚本时不需要使用 `defer` 属性（参见 [`<script>` 属性](/zh-CN/docs/Web/HTML/Element/script#属性)）模块会自动延迟加载。
- 最后一点但同样重要的是，你需要理解模块功能的导入范围——它们仅限于被导入的脚本文件，无法在全局范围内访问。因此，这些功能只能在导入它们的脚本文件中使用，无法通过 JavaScript 控制台直接访问。例如，在开发者工具中你仍然可以看到语法错误，但可能无法像预期那样使用调试方法。

模块定义的变量是模块范围内的，除非明确附加到全局对象。另一方面，全局定义的变量在模块内是可用的。例如，给定以下代码：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="" />
  </head>
  <body>
    <div id="main"></div>
    <script>
      // var 声明创建一个全局变量。
      var text = "Hello";
    </script>
    <script type="module" src="./render.js"></script>
  </body>
</html>
```

```js
/* render.js */
document.getElementById("main").innerText = text;
```

页面仍然会渲染 `Hello`，因为全局变量 `text` 和 `document` 在模块中是可用的。（还要注意这个例子中，模块不一定需要 import/export 语句——唯一需要的是入口点有 `type="module"`。）

## 默认导出与具名导出

到目前为止，我们导出的功能都是由**具名导出**组成——每个项目（无论是函数，常量等）在导出时都由其名称引用，并且该名称也用于在导入时引用它。

还有一种导出类型叫做**默认导出**——这样可以很容易地使模块提供默认功能，并且还可以帮助 JavaScript 模块与现有的 CommonJS 和 AMD 模块系统进行互操作（正如由 Jason Orendorff 编写的[深入 ES6：模块](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)所解释的那样；搜索“Default exports”）。

来看一个例子了解其工作方式。在基本模块 `square.js` 中，你可以找到一个名为 `randomSquare()` 的函数，用于创建一个随机颜色、大小和位置的正方形。我们希望将其作为默认导出，因此在文件底部这样编写：

```js
export default randomSquare;
```

注意，不要大括号。

我们可以把 `export default` 放到函数前面，定义它为一个匿名函数，像这样：

```js
export default function (ctx) {
  // ...
}
```

在我们的 `main.js` 文件中，我们通过以下代码导入默认函数：

```js
import randomSquare from "./modules/square.js";
```

同样，没有大括号，因为每个模块只允许有一个默认导出，我们知道 `randomSquare` 就是需要的那个。上面的那一行相当于下面的缩写：

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> 重命名导出项的 as 语法在下面的[重命名导入与导出](#重命名导入与导出)部分中进行了说明。

## 避免命名冲突

到目前为止，我们的 canvas 图形绘制模块看起来工作的很好。但如果我们尝试添加一个处理绘制其他形状（例如圆形或三角形）的模块会怎样呢？这些形状可能也会有类似 `draw()`、`reportArea()` 等相关的函数；如果我们尝试将同名的不同函数导入到同一个顶层模块文件中，就会出现冲突和错误。

幸运的是，有很多方法来避免。我们将会在下一个节看到。

## 重命名导入与导出

在 `import` 和 `export` 语句的大括号中，可以使用 `as` 关键字为功能指定新名称，从而更改在顶级模块中使用的标识名称。

例如，以下方法虽然方式略有不同，但可以完成相同的工作：

```js
// module.js 中
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// main.js 中
import { newFunctionName, anotherNewFunctionName } from "/modules/module.js";
```

```js
// module.js 中
export { function1, function2 };

// main.js 中
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

让我们看一个真实的例子。在我们的 [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) 目录中，你将看到与上一个示例中相同的模块系统，除了我们添加了 `circle.js` 和 `triangle.js` 模块以绘制和报告圆和三角形。

在每个模块中，我们都有 `export` 相同名称的功能，因此每个模块底部都有相同的导出语句：

```js
export { name, draw, reportArea, reportPerimeter };
```

将它们导入 `main.js` 时，如果我们尝试使用

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

浏览器会抛出一个错误，例如“SyntaxError: redeclaration of import name”（Firefox）。

相反，我们需要重命名导入，使它们是唯一的：

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

请注意，你可以在模块文件中解决问题，例如

```js
// square.js 中
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// main.js 中
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

它也会起作用。你使用什么样的风格取决于你，但是单独保留模块代码并在导入中进行更改可能更有意义。当你从没有任何控制权的第三方模块导入时，这尤其有意义。

## 创建模块对象

上述方法虽然有效，但有些冗长和混乱。一个更好的解决方案是，将每一个模块功能导入到一个模块功能对象中。可以使用以下语法形式：

```js
import * as Module from "/modules/module.js";
```

这将获取 `module.js` 中所有可用的导出，并使它们可以作为对象模块的成员使用，从而有效地为其提供自己的命名空间。例如：

```js
Module.function1();
Module.function2();
```

再次，让我们看一个真实的例子。如果你转到我们的 [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) 目录，将再次看到相同的示例，但利用上述的新语法进行重写。在模块中，导出都是以下简单形式：

```js
export { name, draw, reportArea, reportPerimeter };
```

另一方面，导入看起来像这样：

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

在每种情况下，你现在可以访问指定对象名称下面的模块导入。

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

因此，你现在可以像以前一样编写代码（只要你在需要时包含对象名称），并且导入更加整洁。

## 模块与类

正如我们之前提到的那样，你还可以导出和导入类（class）；这是避免代码冲突的另一种选择，如果你已经以面向对象的方式编写了模块代码，那么它尤其有用。

你可以在我们的 [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) 目录中看到使用 ES 类重写的形状绘制模块的示例。例如，[`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) 文件现在包含单个类中的所有功能：

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
```

然后我们导出：

```js
export { Square };
```

在 [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) 中，我们像这样导入它：

```js
import { Square } from "./modules/square.js";
```

然后使用该类绘制我们的方块：

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## 合并模块

有时你会想要将模块聚合在一起。你可能有多个级别的依赖项，你希望简化事物，将多个子模块组合到一个父模块中。这可以在父模块中用以下形式的导出语法：

```js
export * from "x.js";
export { name } from "x.js";
```

有关示例，请参阅我们的 [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)。在这个例子中（基于我们之前的类示例），我们有一个名为 `shapes.js` 的额外模块，它将 `circle.js`、`square.js` 和 `riangle.mjs` 中的所有功能聚合在一起。我们还将子模块移动到 `modules` 目录的名为 `shapes` 的子目录中。所以模块结构现在是这样的：

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

在每个子模块中，输出具有相同的形式，例如，

```js
export { Square };
```

接下来是聚合部分。在 [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) 里面，我们包括以下几行：

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

它们从各个子模块中获取导出，并有效地从 `shapes.js` 模块中获取它们。

> **备注：** `shapes.js` 中引用的导出基本上通过文件重定向，并且实际上并不存在，因此你将无法在同一文件中编写任何有用的相关代码。

所以现在在 `main.js` 文件中，我们可以通过替换来访问所有三个模块类

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

使用以下单行：

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## 动态加载模块

最近加入的 JavaScript 模块功能是动态模块加载。这允许你仅在需要时动态加载模块，而不必预先加载所有模块。这有一些明显的性能优势；让我们继续阅读，看看它是如何工作的。

这个新功能允许你将 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 作为函数调用，将模块的路径作为参数传入。它返回一个 {{jsxref("Promise")}}，会兑现为一个可以让你访问其导出的模块对象（参见[创建模块对象](#创建模块对象)）。例如

```js
import("/modules/mymodule.js").then((module) => {
  // 使用模块做一些事情。
});
```

> [!NOTE]
> 仅允许在浏览器主线程、共享/专用 worker 中使用动态导入。如果在 service worker 或 worklet 中调用 `import()`，则会抛出异常。

我们来看一个例子。在 [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) 目录中，我们有另一个基于类示例的示例。但是这次我们在示例加载时没有在画布上绘制任何东西。相反，我们包括三个按钮——“圆形”、“方形”和“三角形”——按下时，动态加载所需的模块，然后使用它来绘制相关的形状。

在这个例子中，我们只对 [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) 和 [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) 文件进行了更改——模块导出保持与以前相同。

在 `main.js` 中，我们使用 [`document.querySelector()`](/zh-CN/docs/Web/API/Document/querySelector) 调用获取了对每个按钮的引用，例如：

```js
const squareBtn = document.querySelector(".square");
```

然后，我们为每个按钮附加一个事件监听器，以便在按下时，相关模块被动态加载并用于绘制形状：

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

请注意，由于 promise 兑现会返回一个模块对象，因此该类成为对象的子特征，因此我们现在需要在构造函数之前追加 `Module.` 来访问构造函数，例如 `Module.Square( /* … */ )`。

另一个动态导入的优点是它们始终可用，即使在脚本环境中也是如此。因此，如果你在 HTML 中有一个现有的 `<script>` 标签没有 `type="module"`，你仍然可以通过动态导入重用作为模块分发的代码。

```html
<script>
  import("./modules/square.js").then((module) => {
    // 使用模块做一些事情。
  });
  // 其他操作全局范围的代码，还没有准备好重构为模块。
  var btn = document.querySelector(".square");
</script>
```

## 顶层 await

顶层 await 是模块中可用的一个特性。这意味着可以使用 `await` 关键字。它允许模块像大[异步函数](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Introducing)一样运行，这意味着代码可以在父模块中使用之前进行评估，但不会阻止兄弟模块的加载。

让我们看一个例子。你可以在 [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) 目录中找到本节中描述的所有文件和代码，这些文件和代码是从前面的示例扩展而来的。

首先，我们将在一个单独的 [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) 文件中声明我们的调色板：

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

然后我们将创建一个名为 [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) 的模块，该模块使用 fetch 请求加载 [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) 文件并将数据作为对象返回。

```js
// fetch 请求
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

注意这里的最后一行导出。

我们在指定要导出的常量 `colors` 之前使用了 `await` 关键字。这意味着包含此模块的任何其他模块将在使用之前等待 `colors` 下载和解析完成。

让我们在我们的 [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) 文件中包含这个模块：

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

我们将在调用形状函数时使用 `colors` 而不是之前使用的字符串：

```js
const square1 = new Module.Square(
  myCanvas.ctx,
  myCanvas.listId,
  50,
  50,
  100,
  colors.blue,
);

const circle1 = new Module.Circle(
  myCanvas.ctx,
  myCanvas.listId,
  75,
  200,
  100,
  colors.green,
);

const triangle1 = new Module.Triangle(
  myCanvas.ctx,
  myCanvas.listId,
  100,
  75,
  190,
  colors.yellow,
);
```

这很有用，因为 [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) 中的代码在 [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) 运行之前不会执行。然而，它不会阻止其他模块的加载。例如，我们的 [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) 模块将在 `colors` 被获取时继续加载。

## 导入声明是提升的

导入声明是[提升的](/zh-CN/docs/Glossary/Hoisting)。在这种情况下，这意味着导入的值在模块代码中声明之前就可用，并且导入模块的副作用在模块代码的其余部分开始运行之前就已经产生。

例如，在 `main.js` 中，在代码中间导入 `Canvas` 仍然有效：

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

尽管如此，最好还是将所有导入放在代码的顶部，这样更容易分析依赖关系。

## 循环导入

模块可以导入其他模块，而这些模块可以导入其他模块，依此类推。这形成了一个称为“依赖图”的[有向图](https://zh.wikipedia.org/wiki/有向图)。在理想情况下，这个图是[无环的](https://zh.wikipedia.org/wiki/有向无环图)。在这种情况下，可以使用深度优先遍历来执行图。

然而，循环通常是不可避免的。如果模块 `a` 导入模块 `b`，但 `b` 直接或间接依赖于 `a`，则会出现循环导入。例如：

```js
// -- a.js --
import { b } from "./b.js";

// -- b.js --
import { a } from "./a.js";

// 循环：
// a.js ───> b.js
//  ^         │
//  └─────────┘
```

循环导入并不总是会失败。只有在实际使用导入变量的值时才会检索该值（因此允许[实时绑定](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#导入的值只能由导出者修改)），并且只有在变量在那时仍未初始化时才会抛出 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init)。

```js
// -- a.js --
import { b } from "./b.js";

setTimeout(() => {
  console.log(b); // 1
}, 10);

export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);

export const b = 1;
```

在这个例子中，`a` 和 `b` 都是异步使用的。因此，在模块执行时，`b` 和 `a` 都没有被实际读取，所以其余代码正常执行，并且两个 `export` 声明生成 `a` 和 `b` 的值。然后，在超时之后，`a` 和 `b` 都可用，因此两个 `console.log` 语句也正常执行。

如果你将代码更改为同步使用 `a`，模块执行将失败：

```js
// -- a.js (入口模块) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

这是因为当 JavaScript 执行 `a.js` 时，它需要首先执行 `b.js`，即 `a.js` 的依赖项。然而，`b.js` 使用 `a`，而 `a` 尚不可用。

另一方面，如果你将代码更改为同步使用 `b` 但异步使用 `a`，模块执行将成功：

```js
// -- a.js (入口模块) --
import { b } from "./b.js";

console.log(b); // 1
export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

这是因为 `b.js` 的执行正常完成，因此在执行 `a.js` 时 `b` 的值是可用的。

在项目中通常应避免循环导入，因为它们会使代码更容易出错。一些常见的消除循环的方法是：

- 将两个模块合并为一个。
- 将共享代码移动到第三个模块。
- 将一些代码从一个模块移动到另一个模块。

然而，如果库相互依赖，循环导入也可能发生，这更难解决。

## 编写“同构”模块

模块的引入鼓励 JavaScript 生态系统以模块化的方式分发和重用代码。然而，这并不一定意味着一段 JavaScript 代码可以在每个环境中运行。假设你发现了一个生成用户密码 SHA 哈希的模块。你可以在浏览器前端使用它吗？你可以在你的 Node.js 服务器上使用它吗？答案是：视情况而定。

模块仍然可以访问全局变量，如前所示。如果模块引用了 `window` 等全局变量，它可以在浏览器中运行，但在你的 Node.js 服务器中会抛出错误，因为那里没有 `window`。同样，如果代码需要访问 `process` 才能正常运行，它只能在 Node.js 中使用。

为了最大限度地提高模块的可重用性，通常建议使代码“同构”——即在每个运行时中表现相同。这通常通过三种方式实现：

- 将你的模块分为“核心”和“绑定”。对于“核心”，专注于纯 JavaScript 逻辑，如计算哈希，不涉及任何 DOM、网络、文件系统访问，并暴露实用函数。对于“绑定”部分，你可以从全局上下文中读取和写入。例如，“浏览器绑定”可以选择从输入框中读取值，而“Node 绑定”可以从 `process.env` 中读取，但从任一位置读取的值将传递到相同的核心函数并以相同的方式处理。核心可以在每个环境中导入并以相同的方式使用，而只有绑定，通常是轻量级的，需要特定于平台。
- 在使用之前检测特定的全局变量是否存在。例如，如果你测试 `typeof window === "undefined"`，你知道你可能在 Node.js 环境中，不应该读取 DOM。

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // 我们在 Node.js 中运行；从 `process.env` 中读取
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // 我们在浏览器中运行；从输入框中读取
    password = document.getElementById("password").value;
  }
  ```

  如果两个分支实际上最终具有相同的行为（“同构”），这是更可取的。如果无法提供相同的功能，或者这样做涉及加载大量代码而大部分仍未使用，最好使用不同的“绑定”。

- 使用 polyfill 提供缺失特性的回退。例如，如果你想使用 [`fetch`](/zh-CN/docs/Web/API/Fetch_API) 函数，它仅在 Node.js v18 及更高版本中支持，你可以使用类似的 API，如 [`node-fetch`](https://www.npmjs.com/package/node-fetch) 提供的 API。你可以通过动态导入有条件地进行：

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // 我们在 Node.js 中运行；使用 node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  [`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 变量是一个在每个环境中都可用的全局对象，如果你想在模块中读取或创建全局变量，它非常有用。

这些实践并不是模块独有的。尽管如此，随着代码可重用性和模块化的趋势，你被鼓励使你的代码跨平台，以便尽可能多的人可以享受它。像 Node.js 这样的运行时也在积极实现 web API，以提高与 web 的互操作性。

## 故障排除

如果为了你的模块有问题，这里有一些提示有可能帮助到你。如果你发现更多的内容欢迎添加进来！

- 我们之前提到过这一点，但还是重申一下：`.mjs` 后缀的文件需要以 `text/javascript` MIME 类型来加载（或者其他的 JavaScript 兼容的 MIME 类型，但建议使用 `text/javascript` 加载），否则，你会得到严格的 MIME 类型检查错误，例如“The server responded with a non-JavaScript MIME type”。
- 如果你尝试用本地文件加载 HTML 文件（即，具有 `file://` 的 URL），由于 JavaScript 模块的安全性要求，你会遇到 CORS 错误。你需要通过服务器来做你的测试。GitHub pages 非常理想，因为它在提供 `.mjs` 文件时具有正确的 MIME 类型。
- 因为 `.mjs` 是非标准的文件扩展名，因此一些操作系统可能无法识别，或者尝试把它替换成其他文件。比如，我们发现 macOS 悄悄地在我们的 `.mjs` 后缀的文件后面添加上 `.js` 然后自动隐藏这个后缀。所以我们的文件实际上都是 `x.mjs.js`。当我们关闭自动隐藏文件扩展名，让它去接受 `.mjs` 就好了。

## 参见

- v8.dev 上的 [JavaScript 模块](https://v8.dev/features/modules)（2018）
- hacks.mozilla.org 上的 [ES 模块：漫画版深度解析](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)（2018）
- hacks.mozilla.org 上的[深入 ES6：模块](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)（2015）
- [探索 JS，第 16 章：模块](https://exploringjs.com/es6/ch_modules.html)，来自 Axel Rauschmayer 博士

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
