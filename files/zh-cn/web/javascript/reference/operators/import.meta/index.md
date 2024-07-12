---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{JSSidebar("Operators")}}

**`import.meta`** 元属性将特定上下文的元数据暴露给 JavaScript 模块。它包含了这个模块的信息，例如这个模块的 URL。

## 语法

```js-nolint
import.meta
```

### 值

`import.meta` 是一个宿主环境创建的可扩展的 [`null` 原型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)对象，其所有属性均可写、可配置、可枚举。规范没有在对象上明确定义任何属性，但是宿主环境通常会定义以下属性：

- `url`
  - : 到此模块的完整 URL，包括查询参数和片段标识符（在 `?` 和 `#` 之后）。在浏览器中，它是可获取此脚本的 URL（对外部脚本）或者是包含此脚本的文档的 URL（对内联脚本）。在 Node.js 中，它是文件路径（包括 `file://` 协议部分）。
- [`resolve`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : 将一个模块的标识符解析为相对于当前模块的 URL。

## 描述

`import.meta` 语法由关键字 `import`、一个点符号和 `meta` 标识符组成。因为 `import` 是[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字)而不是标识符，其并不是[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)而是特殊的表达式语法。

`import.meta` 元属性在 JavaScript 模块中可用；在模块之外（包括在模块中[直接调用 `eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#直接和间接_eval)）使用 `import.meta` 是语法错误。

## 示例

### 传递查询参数

在 `import` 声明中使用查询参数允许为特定模块传递参数，可作为应用程序内从 [`window.location`](/zh-CN/docs/Web/API/Window/location)（或在 Node.js 中从 `process.env`）读取参数的补充方式。例如下面的 HTML：

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

`index.mjs` 模块可以通过 `import.meta` 获取 `someURLInfo` 参数：

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

在脚本中引入别的脚本同样生效：

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Node.js 中 ES 模块的实现支持在解析模块的标识符中含有查询参数和片段标识符，如上述示例所示。然而，从命令行指定模块标识符时无法使用查询参数和片段标识符（例如 `node index.mjs?someURLInfo=5`），因为命令行的入口点使用了类似于 CommonJS 的解析模式，将整个路径视为文件而非 URL。要将参数传递给入口点模块，需要改用命令行参数，并从 `precess.argv` 读取（如 `node index.mjs --someURLInfo=5`）。

### 相对当前文件解析文件路径

在 Node.js 的 CommonJS 模块中，有专门的 `__dirname` 变量，值为包含当前文件的文件夹的绝对路径，可以用来解析相对路径。但是，ES 模块除了 `import.meta` 之外没有上下文变量。因此，要解析相对路径的文件，可以使用 `import.meta.url`。注意这个属性使用的是 URL 而非文件系统的路径。

之前（CommonJS）：

```js
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "someFile.txt");
fs.readFile(filePath, "utf8").then(console.log);
```

之后（ES 模块）：

```js
import fs from "node:fs/promises";

const fileURL = new URL("./someFile.txt", import.meta.url);
fs.readFile(fileURL, "utf8").then(console.log);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export)
