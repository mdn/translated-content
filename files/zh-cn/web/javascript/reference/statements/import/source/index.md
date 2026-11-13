---
title: import source
slug: Web/JavaScript/Reference/Statements/import/source
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{SeeCompatTable}}

**`import source`** 声明与常规 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 声明类似，但它会返回一个表示模块已编译源代码的对象。模块会被获取并编译，但不会加载其依赖，也不会链接或求值。之后可以通过命令式方式对其求值，例如使用[动态导入](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)或 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)。

要使用 `import source`，目标模块必须属于支持源代码阶段导入的类型。目前只有 WebAssembly 模块支持源代码阶段导入，并会生成 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 对象。JavaScript 模块源代码对象将由 [ECMAScript 模块阶段导入提案](https://github.com/tc39/proposal-esm-phase-imports)引入。

## 语法

```js-nolint
import source x from "module-name";
```

- `x`
  - : 用于引用模块源代码对象的名称。必须是有效的 JavaScript 标识符。
- `module-name`
  - : 要导入的模块。其处理方式与常规 `import` 声明中的 [`module-name`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#module-name) 相同。

[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)同样受支持，可以在模块说明符后使用 `with` 子句指定。

`source` 不是保留字。例如，`import source from "./module.js"` 仍然是常规默认导入，其本地绑定名称为 `source`。

### 异常

- {{jsxref("SyntaxError")}}
  - : 如果目标模块不支持源代码阶段导入，则会抛出此错误。

## 描述

默认情况下，`import` 声明会同时执行多项任务：解析模块说明符、获取模块源代码、解析（期间可能会发现传递依赖）、链接并求值。这样的提前求值并非总是理想的，尤其是在模块源代码要在其他上下文（例如 worker 线程）中求值时。

*导入阶段修饰符*允许模块导入过程停在特定阶段。在 `import` 后添加 `source`，会解析并编译源代码，但不会链接或求值。源代码导入不会加载模块的传递依赖。

传统上，要单独执行导入流程中的某个环节，唯一的方法是手动实现整个流程。例如，对于 WebAssembly，你需要先使用 [`fetch()`](/zh-CN/docs/Web/API/Fetch_API) 获取模块的二进制字节，然后使用 [`WebAssembly.compile()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compile_static) 编译，或者使用 [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) 编译响应流，从而得到一个 `WebAssembly.Module` 对象。

```js
const myModuleSource = await WebAssembly.compileStreaming(
  fetch("./my-module.wasm"),
);
```

这种手动流程存在几个问题：

- 它涉及过多底层操作，这些操作可能与默认模块加载器的行为不一致，例如缓存、HTTP 请求头设置和模块说明符解析。
- 它采用命令式方式，因此难以分析模块的依赖及其求值顺序，尤其是对打包工具或其他分析工具而言。
- 在用户代码中对原始源代码求值与严格的 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 设置不兼容。

使用源代码阶段导入可以避免这些问题。

```js
import source myModuleSource from "./my-module.wasm";
```

通过此导入获得的对象是 {{jsxref("AbstractModuleSource")}} 子类的实例。每种支持源代码阶段导入的模块类型都会定义自己的子类。对于 WebAssembly，该子类是 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)。该对象会针对特定模块进行缓存，因此之后使用相同说明符进行源代码导入时，会返回完全相同的对象。

与 [`import defer`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer) 不同，源代码导入也会延迟链接。预先链接可以让模块加载器解析依赖，从而在模块使用之前发现缺失的依赖或无效的导入。保持模块未链接可以避免加载可能用不到的依赖，并允许你控制模块的实例化方式。例如，你可以使用不同的导入多次实例化通过源代码导入的 WebAssembly 模块，也可以将其发送到 worker 中实例化。

与 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 不同，通过源代码导入的模块会预先获取并编译，但不会求值。`import source` 还具备静态声明的大部分优点，例如更好的静态分析能力。

请注意，它仅支持“默认导入”语法。你不能使用 `import source { property } from "./my-module.wasm"` 等写法。

### 导入 WebAssembly 源代码

对于 WebAssembly，你需要在实例化模块时提供导入的值：

```js
import source myModuleSource from "./my-module.wasm";

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

与常规的 WebAssembly 模块导入不同，这会使用你提供的导入创建一个新实例，而不是使用模块加载器链接的缓存实例。它的 `exports` 对象不是 JavaScript 模块命名空间对象。例如，WebAssembly 全局变量通过 `instance.exports` 公开为 `WebAssembly.Global` 对象，而 ESM 集成则会向 JavaScript 导入方公开这些全局变量的值。

> [!NOTE]
> 支持 WebAssembly 的源代码阶段导入，并不意味着也支持常规的 WebAssembly 模块导入。宿主环境可能支持 `import source mod from "./mod.wasm"`，但拒绝 `import * as ns from "./mod.wasm"`。

源代码导入使用宿主环境的模块加载器，包括其编译设置。因此，它不一定等同于使用默认选项调用 `WebAssembly.compileStreaming()`。例如，[Node.js 会为 Wasm 导入启用 JavaScript 字符串内置功能](https://nodejs.org/api/esm.html#javascript-string-builtins)，并拒绝保留的导入和导出名称。如果需要自定义编译选项，请使用 WebAssembly 的直接编译 API。

### 导入 JavaScript 源代码

对于 JavaScript（假设支持提案中的 `import(moduleSource)`，该支持也属于 [ECMAScript 模块阶段导入提案](https://github.com/tc39/proposal-esm-phase-imports)）：

```js
import * as namespace from "./my-module.js";

// 等价于：

import source myModuleSource from "./my-module.js";

const namespace = await import(myModuleSource);
```

### 缓存语义

该修饰符作用于导入，而不是模块本身。如果应用的其他部分在导入同一模块时没有使用 `source`，该模块仍会照常求值。两种形式共享同一模块状态，模块代码最多执行一次。更改导入阶段不会在缓存中创建一个独立模块：

```js
import * as x from "foo";
import source xSource from "foo";

console.log((await import(xSource)) === x); // true
```

> [!NOTE]
> 使用 `import()` 时会复用此缓存实例，但手动实例化 WebAssembly 时不会。每次调用 `WebAssembly.instantiate(modSource, imports)` 或 `new WebAssembly.Instance(modSource, imports)` 都会创建一个新实例并运行其初始化过程，包括任何启动函数。相比之下，`WebAssembly.compileStreaming()` 只负责编译，不会执行模块，也不会使用 ESM 模块缓存。

相比之下，[导入属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)可能会影响模块标识。例如，在支持文本模块的宿主环境中，以下两个声明请求的是不同的模块类型：

```js
import * as mod from "./module.js";
import text from "./module.js" with { type: "text" };
```

这两个导入会被视为来自不同的模块，只是它们恰好使用相同的字符串说明符（在 Web 上，它们会使用不同的 HTTP 请求头发起请求）。支持哪些属性，以及它们对加载和模块标识的影响，均由宿主环境定义。

## 示例

### 使用不同导入实例化模块

假设 `counter.wasm` 从 `env` 导入一个名为 `initial` 的不可变 `i32` 全局变量，以此初始化内部计数器，并导出一个名为 `increment` 的函数。你可以使用不同的导入复用其已编译的源代码，并创建彼此独立的内部计数器：

```js
import source counterSource from "./counter.wasm";

const first = await WebAssembly.instantiate(counterSource, {
  env: { initial: 0 },
});
const second = await WebAssembly.instantiate(counterSource, {
  env: { initial: 100 },
});

console.log(first.exports.increment()); // 1
console.log(first.exports.increment()); // 2
console.log(second.exports.increment()); // 101
```

每个实例都有自己的内部状态，但显式导入的内存、表或其他可变对象可以在多个实例之间共享。你也可以将[已编译的源代码发送到 worker](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)，并在那里实例化。

### 导出模块源代码

没有 `export source` 语法（更多信息请参见 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export#重导出聚合)）。你可以导入模块源代码，然后导出其绑定，而无需实例化或对模块求值：

```js
// -- sources.js --
import source counterSource from "./counter.wasm";

export { counterSource };
```

```js
// -- main.js --
import { counterSource } from "./sources.js";

const instance = new WebAssembly.Instance(counterSource, {
  env: { initial: 0 },
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("AbstractModuleSource")}}
