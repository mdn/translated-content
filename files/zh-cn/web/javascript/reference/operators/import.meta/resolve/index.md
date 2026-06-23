---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

**`import.meta.resolve()`** 是 JavaScript 模块的 [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta) 对象上的一个内置函数，它使用当前模块的 URL 作为基础路径来解析模块标识符为 URL。

## 语法

```js-nolint
import.meta.resolve(moduleName)
```

### 参数

- `moduleName`
  - : 一个字符串，指定了一个可能可导入的模块。这可以是相对路径（如 `"./lib/helper.js"`）、裸模块名（如 `"my-module"`）或绝对 URL（如 `"https://example.com/lib/helper.js"`）。

### 返回值

返回一个字符串，对应于如果将该参数传递给 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 时将会导入的路径。

## 描述

`import.meta.resolve()` 允许脚本访问针对某个名称的*模块标识符解析*算法，如下所示：

```js
// 位于 https://example.com/main.js 的脚本

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

请注意，`import.meta.resolve()` 仅执行解析，不会尝试加载或导入结果路径。因此，其返回值是相同的，_无论返回的路径是否对应一个存在的文件，也无论该文件是否包含有效的模块代码_。这使得 `import.meta.resolve()` 成为*同步*操作。

它与[动态导入](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)不同，因为尽管两者都接受模块标识符作为第一个参数，但 `import.meta.resolve()` 返回*将会被导入*的路径，而不尝试访问该路径。因此，以下两段代码实际上是等效的：

```js
// 方法 1
console.log(await import("./lib/helper.js"));

// 方法 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

然而，即使 `"./lib/helper.js"` 无法被成功导入，第二段代码也不会遇到错误，直到它尝试在第 2 行执行导入操作。

### 裸模块名

只要名称定义了模块解析，你就可以将裸模块名（也称为裸模块标识符）传递给 `import.meta.resolve()`。例如，你可以在浏览器中使用[导入映射（import map）](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)来定义：

```html
<!-- index.html -->
<script type="importmap">
  {
    "imports": {
      "my-module": "./modules/my-module/index.js"
    }
  }
</script>

<script type="module">
  const moduleEntryPath = import.meta.resolve("my-module");
  console.log(moduleEntryPath);
</script>
```

同样，由于这段代码没有尝试导入 `moduleEntryPath`——导入映射也没有——无论 `./modules/my-module/index.js` 是否实际存在，它都会打印出解析后的 URL。

### 与 new URL() 的比较

[`URL()`](/zh-CN/docs/Web/API/URL/URL) 构造函数接受第二个*基础 URL* 参数。当第一个参数是相对路径且基础 URL 是 [`import.meta.url`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta#value) 时，其效果类似于 `import.meta.resolve()`。

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

在需要支持旧版浏览器时，这也是一种有用的替代语法。然而，两者存在一些差异：

- `import.meta.resolve()` 返回一个字符串，而 `new URL()` 返回一个 `URL` 对象。可以在构造的 `URL` 上使用 [`href`](/zh-CN/docs/Web/API/URL/href) 或 [`toString()`](/zh-CN/docs/Web/API/URL/toString) 方法，但在某些 JavaScript 环境或使用打包工具进行静态分析时，可能仍无法产生完全相同的结果。
- `import.meta.resolve()` 能够感知额外的解析配置，例如使用导入映射解析裸模块名，如上所述。`new URL()` 不知道导入映射的存在，并将裸模块名视为相对路径（即 `new URL("my-module", import.meta.url)` 等同于 `new URL("./my-module", import.meta.url)`）。

某些工具会将 `new URL("./lib/helper.js", import.meta.url).href` 识别为对 `"./lib/helper.js"` 的依赖（类似于导入），并在打包、重写已移动文件的导入、"跳转到源码"等功能中加以考虑。然而，由于 `import.meta.resolve()` 歧义更少且专门用于指示模块路径解析依赖，你应该尽可能在这些用例中使用 `import.meta.resolve(moduleName)` 而不是 `new URL(moduleName, import.meta.url)`。

### 非 ECMAScript 特性

`import.meta.resolve()` 并未被指定或记录为 [ECMAScript 规范](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript)中 JavaScript 模块的一部分。相反，该规范定义了 [`import.meta` 对象](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta)，但[将其所有属性保留为"宿主定义"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties)。WHATWG HTML 标准接续了 ECMAScript 标准未完成的部分，并使用其[模块标识符解析](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier)机制[定义了 `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties)。

这意味着并非所有符合规范的 JavaScript 实现都需要实现 `import.meta.resolve()`。然而，`import.meta.resolve()` 也可能在非浏览器环境中可用：

- Deno 实现了[与浏览器行为的兼容性](https://docs.deno.com/api/node/module/~/ImportMeta.resolve)。
- Node.js 也实现了 [`import.meta.resolve()` 函数](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier)，但如果使用 `--experimental-import-meta-resolve` 标志，则会添加一个额外的 `parent` 参数。

## 示例

### 为 Worker() 构造函数解析路径

`import.meta.resolve()` 对于接受脚本文件路径作为参数的 API（例如 [`Worker()`](/zh-CN/docs/Web/API/Worker/Worker) 构造函数）尤为有用：

```js
// main.js
const workerPath = import.meta.resolve("./worker.js");
const worker = new Worker(workerPath, { type: "module" });
worker.addEventListener("message", console.log);
```

```js
// worker.js
self.postMessage("hello!");
```

这对于计算其他类型 worker 的路径也很有用，例如 [service worker](/zh-CN/docs/Web/API/ServiceWorker) 和 [shared worker](/zh-CN/docs/Web/API/SharedWorker)。但是，如果你使用相对路径来计算 service worker 的 URL，请记住，解析路径的目录默认决定了其[注册范围](/zh-CN/docs/Web/API/ServiceWorkerRegistration/scope)（尽管可以在[注册时](/zh-CN/docs/Web/API/ServiceWorkerContainer/register)指定不同的范围）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta)