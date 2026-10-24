---
title: import defer
slug: Web/JavaScript/Reference/Statements/import/defer
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{SeeCompatTable}}

**`import defer`** 声明的行为与常规 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 声明类似，但它会生成一个[延迟模块命名空间对象](#延迟模块命名空间对象)。模块及其依赖会预先获取并链接，但只有在访问命名空间的属性时才会同步求值。使用[顶层 `await`](#顶层_await) 的模块会立即求值。

## 语法

```js-nolint
import defer * as name from "module-name";
```

- `name`
  - : 用于引用延迟模块命名空间对象的名称。必须是有效的 JavaScript 标识符。
- `module-name`
  - : 要导入的模块。其处理方式与常规 `import` 声明中的 [`module-name`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#module-name) 相同。

[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)同样受支持，可以在模块说明符后使用 `with` 子句指定。

`defer` 不是保留字。例如，`import defer from "./module.js"` 仍然是常规默认导入，其本地绑定名称为 `defer`。

## 描述

默认情况下，`import` 声明会同时执行多项任务：解析模块说明符、获取模块源代码、解析（期间可能会发现传递依赖）、链接并求值。这样的提前求值并非总是理想的：它可能会拖慢启动速度，求值所需的环境可能尚未准备就绪，或者该模块根本不需要求值。

*导入阶段修饰符*允许模块导入过程停在特定阶段。在 `import` 后添加 `defer`，会链接源代码但暂不求值，前提是该模块可以同步求值（即不使用顶层 `await`）。通过延迟命名空间访问某个导出时，会同步对该模块以及在它之前必须求值的依赖进行求值。求值完成后，此次访问会返回该导出的值。此操作会执行模块的顶层代码，而不只是初始化所请求导出所需的代码。使用各自的 `import defer` 声明导入的传递依赖可以继续保持延迟状态。

只要确保暂停的子图可以同步求值，就几乎无需修改使用该模块的代码，即可直接将 `import defer` 用作替代：

```js
// 之前：
import * as ts from "typescript";
// 此处会对整个 TypeScript 模块图求值

function compileFile(path) {
  const program = ts.createProgram([path], {});
}
```

```js
// 之后：
import defer * as ts from "typescript";
// 不会执行任何代码；启动速度可能更快

function compileFile(path) {
  // 访问 `ts.createProgram` 时（也就是调用 `compileFile` 时），
  // 才会对 TypeScript 模块图求值。
  // 如果从未调用 `compileFile`，就永远不会对模块图求值。
  const program = ts.createProgram([path], {});
}
```

> [!WARNING]
> 延迟导入会改变副作用发生的时机。不要延迟那些副作用必须在其余代码运行前发生的模块，例如安装 polyfill 的模块。

与 [`import source`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/source) 不同，延迟模块仍会预先链接。预先链接可以让模块加载器解析依赖，从而在模块使用之前发现缺失的依赖或无效的导入。保持模块未链接则可以避免加载可能用不到的依赖，并允许你控制模块的实例化方式。

与 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 不同，延迟模块仍会预先获取、解析和链接，从而避免不必要的[异步传染性](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)（整条函数调用链都被迫变为异步）。`import defer` 还具备静态声明的大部分优点，例如更好的静态分析能力。

请注意，它仅支持“命名空间导入”语法。你不能使用 `import defer { property } from "./my-module.js"` 等写法，因为模块的执行是由对命名空间对象的属性访问触发的。

### 缓存语义

该修饰符作用于导入，而不是模块本身。如果应用的其他部分在导入同一模块时没有使用 `defer`，该模块仍会照常求值。两种导入形式共享同一模块状态，模块代码最多执行一次。更改导入阶段不会在缓存中创建一个独立模块：

```js
import defer * as ts from "typescript";
// 不会执行任何代码
import * as ts2 from "typescript";
// 此处会对整个 TypeScript 模块图求值

function compileFile(path) {
  // 由于模块图已经求值，访问 `ts.createProgram` 不会再次触发求值。
  const program = ts.createProgram([path], {});
}
```

相比之下，[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)可能会影响模块标识。例如，在支持文本模块的宿主环境中，以下两个声明请求的是不同的模块类型：

```js
import * as mod from "./module.js";
import text from "./module.js" with { type: "text" };
```

这两个导入会被视为来自不同的模块，只是它们恰好使用相同的字符串说明符（在 Web 上，它们会使用不同的 HTTP 请求头发起请求）。支持哪些属性，以及它们对加载和模块标识的影响，均由宿主环境定义。

### 延迟模块命名空间对象

延迟模块命名空间对象的行为与常规[模块命名空间对象](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#模块命名空间对象)非常相似：它的原型为 `null`，不可扩展且已密封，并以只读实时绑定的形式公开模块的导出。它的字符串键可枚举，并按字典序排序。默认导出可通过名为 `default` 的属性访问。

它与常规命名空间有以下三点不同：

- 检查导出的操作可能会触发求值并抛出求值错误，详见下文。
- 它的 [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性值为 `"Deferred Module"`，而不是 `"Module"`。即使求值完成后也是如此。
- 即使求值完成后，它也不会公开名为 `then` 的导出。读取 `namespace.then` 总是返回 `undefined`。这样可以避免 Promise 解析过程将该命名空间视为 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) 并触发求值。若要访问这样的导出，请使用常规导入，或者引入一个中间模块，以其他名称重新导出 `then`。

同一模块的延迟命名空间与常规命名空间是不同的对象，即使求值完成后也是如此。无论是静态导入还是动态导入，对同一模块进行多次延迟导入都会共享同一个延迟命名空间对象。

为了实现“访问键时触发模块求值”的行为，延迟模块命名空间本质上是一个 {{jsxref("Proxy")}}，它会拦截以下操作并触发模块求值：

- 对除 `then` 以外的任意字符串键调用 [`defineProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)：例如 `Object.defineProperty(namespace, "value", {})`。

  > [!NOTE]
  > 由于模块命名空间对象不可扩展且已密封，因此无法有效地添加或更改任何属性描述符，包括其值。不过，即使该操作失败，仍会触发求值。
  >
  > 代理不会拦截 [`set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)。像 `namespace.value = 1;` 这样的属性赋值总是会失败。

- 对除 `then` 以外的任意字符串键调用 [`deleteProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)：例如 `delete namespace.value`。

  > [!NOTE]
  > 实际上无法删除命名空间已有的任何属性。不过，即使该操作失败，仍会触发求值。

- 对除 `then` 以外的任意字符串键调用 [`get()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) 和 [`getOwnPropertyDescriptor()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)：例如 `namespace.value`、`namespace["missing"]`、`const { default: value } = namespace`、`Object.getOwnPropertyDescriptor(namespace, "value")`。

  > [!NOTE]
  > 因此，在顶层解构导出会使该模块无法保持延迟状态。

- 对除 `then` 以外的任意字符串键调用 [`has()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)：例如 `"value" in namespace`、`Object.hasOwn(namespace, "missing")`。
- 调用 [`ownKeys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)：例如 `Object.keys(namespace)`、`Object.getOwnPropertySymbols(namespace)`、`for (const key in namespace) {}`。即使只枚举符号键，也会触发求值。

仅仅引用命名空间、将其赋值给另一个变量、比较其标识或将其传递给函数，都不会触发求值。读取 `then` 或符号键属性（例如 `namespace[Symbol.toStringTag]`）也不会触发求值。调用 {{jsxref("Object.getPrototypeOf()")}} 或 {{jsxref("Object.isExtensible()")}} 同样不会触发求值。不过，{{jsxref("Object.isSealed()")}} 和 {{jsxref("Object.isFrozen()")}} 会枚举键，因此会触发求值。

### 顶层 await

读取命名空间属性是同步操作，因此无法等待异步模块求值。包含[顶层 `await`](/zh-CN/docs/Web/JavaScript/Guide/Modules#顶层_await) 的模块会立即求值，同时也会对求值所需的依赖进行求值。这也包括通过后续的延迟导入到达的模块。导入模块会等待此异步求值完成后，才运行自身的模块体。

如果直接导入的模块包含顶层 `await`，则不会延迟该模块的求值。如果只有部分依赖包含顶层 `await`，这些依赖会立即求值，但模块图中不属于其求值所必需部分的同步模块仍可保持延迟。参见[延迟具有异步依赖的模块](#延迟具有异步依赖的模块)。

### 错误

加载、解析和链接错误不会延迟。例如，即使从未访问延迟命名空间，缺失的模块、依赖中的语法错误或无法解析的命名导入也会阻止导入模块运行。立即求值的异步依赖所产生的错误也会阻止导入模块运行。

延迟求值期间抛出的错误，会由触发求值的操作同步抛出。你可以在该操作外使用 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 捕获错误。错误会被缓存：后续触发求值的操作会再次抛出同一错误，而不会重试模块代码。如果之前的另一次导入已经导致模块求值失败，也同样如此。

如果模块或其依赖尚未准备好进行同步求值，触发求值的操作会抛出 {{jsxref("TypeError")}}。这可能发生在[循环导入](/zh-CN/docs/Web/JavaScript/Guide/Modules#循环导入)中，即访问操作需要依赖一个仍在求值的模块时。`import defer` 声明并不会让所有循环依赖都能在初始化期间安全访问。就绪状态错误本身不会将请求的模块标记为求值失败：依赖准备就绪后，后续访问仍可能成功。

## 示例

### 首次使用时对模块求值

以下模块会在运行顶层代码时初始化一个查找表：

```js
// -- squares.js --
console.log("Initializing squares");
const squares = Array.from({ length: 10000 }, (_, index) => index ** 2);

export function getSquare(index) {
  return squares[index];
}
```

导入模块可以公开一个同步函数，而查找表会一直等到需要时才初始化：

```js
// -- main.js --
import defer * as squares from "./squares.js";

console.log("Ready");

export function showSquare(index) {
  console.log(squares.getSquare(index));
}

showSquare(3); // 输出 "Initializing squares"，然后输出 9
showSquare(4); // 输出 16；不会重复初始化
```

`"Ready"` 会先于 `"Initializing squares"` 输出。如果从未调用 `showSquare()`，且没有其他导入触发 `squares.js` 求值，那么查找表就永远不会初始化。

### 延迟具有异步依赖的模块

在此示例中，`report.js` 本身是同步模块，它同时依赖一个异步配置模块和一个同步格式化模块。

```js
// -- config.js --
export const locale = await Promise.resolve("en-US");
console.log("Configuration ready");
```

```js
// -- format.js --
console.log("Formatting module evaluated");

export function format(value, locale) {
  return new Intl.NumberFormat(locale).format(value);
}
```

```js
// -- report.js --
import { locale } from "./config.js";
import { format } from "./format.js";

console.log("Report module evaluated");

export function createReport(value) {
  return format(value, locale);
}
```

```js
// -- main.js --
import defer * as report from "./report.js";

console.log("Main module evaluated");
console.log(report.createReport(1000));
```

输出如下：

```plain
Configuration ready
Main module evaluated
Formatting module evaluated
Report module evaluated
1,000
```

由于 `config.js` 包含顶层 `await`，它会在 `main.js` 之前求值。求值 `config.js` 不需要运行 `format.js` 或 `report.js`，因此这两个模块会延迟到访问 `report.createReport` 时才求值。

### 捕获求值错误

```js
// -- broken.js --
export const value = 1;
throw new Error("Initialization failed");
```

```js
// -- main.js --
import defer * as broken from "./broken.js";

for (let attempt = 0; attempt < 2; attempt++) {
  try {
    console.log(broken.value);
  } catch (error) {
    console.log(error.message); // 两次都会输出 "Initialization failed"
  }
}
```

尽管 `value` 在抛出异常之前已经初始化，通过延迟命名空间访问它仍会抛出缓存的求值错误。

### 导出延迟命名空间

没有 `export defer` 语法（更多信息请参见 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export#重导出聚合)）。你可以导入延迟命名空间，然后导出其绑定，而不会触发求值：

```js
// -- features.js --
import defer * as report from "./report.js";

export { report };
```

```js
// -- main.js --
import { report } from "./features.js";

// 通过 report 访问导出会触发延迟求值。
console.log(report.createReport(1000));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/defer", "import.defer()")}}
