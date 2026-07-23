---
title: Import attributes
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 27a436c26d8c0ff74bc38bea990465be3cf80021
---

> [!NOTE]
> 该提案的早期版本使用 `assert` 关键字而非 `with`。断言功能现在已非标准。详情请查看[浏览器兼容性表格](#browser_compatibility)。

**导入属性**功能指示运行时如何加载模块，包括模块解析、获取、解析和评估的行为。它支持 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 声明、[`export...from`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) 声明和动态 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)。

属性可以附加到任何类型的 `import`/`export from` 语句，包括默认导入、命名空间导入等。它们跟在模块说明符字符串之后，以 `with` 关键字开头。与 `import()` 一起使用时，属性在 `options` 参数中作为 `with` 属性指定。

## 语法

```js-nolint
import { names } from "module-name" with {};
import { names } from "module-name" with { key: "data" };
import { names } from "module-name" with { key: "data", key2: "data2" };
import { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };

export { names } from "module-name" with {};
export { names } from "module-name" with { key: "data" };
export { names } from "module-name" with { key: "data", key2: "data2" };
export { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };
```

### 参数

- `keyN`
  - : 属性键。可以是标识符或字符串字面量。所有键必须唯一，且必须被运行时识别。
- `"dataN"`
  - : 属性值。必须是字符串字面量。

### 异常

- {{jsxref("SyntaxError")}}
  - : 在*静态导入*中指定了不支持的 `key`。

- {{jsxref("TypeError")}}
  - : 在*动态导入*中指定了不支持的 `key`。

请注意，在某些情况下，为支持的键指定不支持的值也可能导致异常，具体取决于该键。

## 描述

导入属性告诉运行时如何加载特定模块。

主要用例是加载非 JS 模块，例如 JSON 模块和 CSS 模块。考虑以下语句：

```js
import data from "https://example.com/data.json";
```

在 Web 上，每个导入语句都会触发一个 HTTP 请求。然后，响应被准备成 JavaScript 值，并由运行时提供给程序。例如，响应可能如下所示：

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

模块仅根据其提供的[媒体类型（MIME 类型）](/zh-CN/docs/Web/HTTP/Guides/MIME_types)进行识别和解析——URL 中的文件扩展名不能用于识别文件类型。在这种情况下，MIME 类型是 `application/json`，它告诉浏览器该文件是 JSON，必须作为 JSON 解析。如果由于某种原因（例如，服务器被劫持或伪造），服务器响应中的媒体类型被设置为 `text/javascript`（对于 JavaScript 源代码），那么该文件将被解析并作为代码执行。如果"JSON"文件实际上包含恶意代码，`import` 声明将无意中执行外部代码，构成严重的安全威胁。

导入属性通过允许作者明确指定如何验证模块来解决这个问题。
特别是，`type` 属性允许你验证文件是否以特定媒体类型提供，如果使用不同的媒体类型，则导入失败。

例如，上面的代码可以写成指定预期类型为 `"json"`，如果它以 `text/javascript`（或 `application/json` 以外的任何媒体类型）提供，则导入将失败：

```js
import data from "https://example.com/data.json" with { type: "json" };
```

`type` 属性允许你指定模块以 JSON、CSS 或纯文本（以及隐式地作为 JavaScript）提供。

其他属性也可能受支持，并且[可以影响加载过程不同部分的行为](#intended_semantics_for_import_attributes)。
如果使用未知属性，将抛出语法错误。

### 标准属性

可用属性取决于语言和运行时环境。
ECMAScript 标准[定义了值为 `"json"` 和 `"text"` 的 `type` 属性](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule)。

HTML 规范也[定义了值为 `"json"`、`"text"` 和 `"css"` 的 `type` 属性](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed)——这些是在浏览器环境中受支持的属性。

#### JSON 模块（`{ type: "json" }`）

`json` 类型表示导入的文件必须包含 JSON。
你可以使用以下代码将 JSON 从文件加载到 `data` 对象中：

```js
import data from "https://example.com/data.json" with { type: "json" };
```

如果文件以 `"application/json"` 以外的任何媒体类型提供，导入将失败。

`type` 属性会改变模块的获取方式（浏览器发送请求时带有 `{{HTTPHeader("Accept")}}: application/json` 请求头），但*不会*改变模块的解析或评估方式。运行时已经知道根据响应的 MIME 类型将模块解析为 JSON。它仅使用该属性进行*事后*检查，以确保 `data.json` 模块确实是 JSON 模块。例如，如果响应头更改为 `Content-Type: text/javascript`，程序将以上述类似的错误失败。

规范明确要求支持 `type: "json"`——如果模块被断言为 `type: "json"` 且运行时未使此导入失败，则必须将其解析为 JSON。

然而，除此之外没有其他行为要求：对于没有 `type: "json"` 属性的导入，如果此环境中安全问题不是问题，运行时仍可能将其解析为 JSON。

另一方面，浏览器隐式假设如果未指定 `type`，则模块是 JavaScript，如果模块不是 JavaScript（例如 JSON），则失败。这确保了模块类型始终经过严格验证，并防止任何安全风险。
Node 和 Deno 等非浏览器运行时与浏览器语义保持一致，并对 JSON 模块强制要求 `type`。

换句话说，如果你省略 `type` 并尝试以 `"application/json"` 导入文件，通常会收到如下错误：

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS 模块（`{ type: "css" }`）

HTML 规范定义了 `css` 类型，它将样式表作为 {{domxref("CSSStyleSheet")}} 对象导入到脚本中。

下面的代码展示了如何导入样式并将其添加到你的文档中。
如果 `example_styles.css` 以 `"text/css"` 以外的任何媒体类型提供，导入将抛出异常。

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

请注意，将 CSS 模块导入到工作者中通常不受支持，因为 CSSOM 规范仅在 window 上下文中暴露 `CSSStyleSheet`。

#### 文本模块（`{ type: "text" }`）

`text` 类型允许将模块的源代码作为字符串值导入。
你可以使用以下代码将文本从文件加载到 `text` 字符串中：

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

文件将使用 `{{HTTPHeader("Accept")}}: text/plain` 请求头进行请求，但响应的 `{{HTTPHeader("Content-Type")}}` 请求头的值被忽略，所有文件都作为 UTF-8 解析。它可以包含任何文本数据，甚至是 JavaScript 代码（被视为纯文本）。

### 导入属性的预期语义

属性可以在模块加载过程的每个阶段改变运行时的行为：

- 解析：属性是模块说明符（`from` 子句中的字符串）的一部分。因此，给定相同的字符串路径，不同的属性可能导致加载完全不同的模块。例如，[TypeScript 支持 `resolution-mode` 属性](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types)。

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- 获取：例如，CSS 模块的获取将 [`destination`](/zh-CN/docs/Web/API/Request/destination) 设置为 `"style"`，JSON 模块的获取将 `destination` 设置为 `"json"`，文本模块的获取将 `destination` 设置为 `"text"`。这意味着即使目标 URL 相同，服务器仍可能返回不同的内容。
- 解析和评估：运行时可以使用属性来确定如何解析和评估模块。

## 示例

### 使用 type 属性导入 JSON 模块

在 `data.json` 中：

```json
{
  "name": "Shilpa"
}
```

在 `index.html` 中：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <script type="module">
      import data from "./data.json" with { type: "json" };

      const p = document.createElement("p");
      p.textContent = `name: ${data.name}`;
      document.body.appendChild(p);
    </script>
  </head>
  <body></body>
</html>
```

启动本地 HTTP 服务器（请参阅[故障排除](/zh-CN/docs/Web/JavaScript/Guide/Modules#troubleshooting)）并访问 `index.html` 页面。你应该会在页面上看到 `Shilpa`。

> [!NOTE]
> JSON 模块只有一个默认导出。你不能对它们进行命名导入（如 `import { name } from "data.json"`）。

### 在动态导入中使用导入属性

导入属性也可以作为 `import()` 语法的第二个参数接受。

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

请注意，与静态导入一样，动态导入在环境的生命周期内（例如，页面或工作者）会被缓存。如果你期望此数据会发生变化（例如最新新闻或用户的积分），请改用 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)
- [导入属性提案](https://github.com/tc39/proposal-import-attributes)
- [JSON 模块提案](https://github.com/tc39/proposal-json-modules)
- [导入文本提案](https://github.com/tc39/proposal-import-text)
