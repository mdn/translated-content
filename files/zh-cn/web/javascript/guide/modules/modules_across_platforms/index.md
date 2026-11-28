---
title: 跨平台的模块
slug: Web/JavaScript/Guide/Modules/Modules_across_platforms
l10n:
  sourceCommit: 1dc2c39b38fcfe047ea29d33a3d97c01b2791539
---

MDN 聚焦于浏览器中的 JavaScript，但大多数开发者也会使用 Node、Deno 或 Bun 等其他运行时。虽然很容易假设 [web 上的规则](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)适用于所有地方，但这些环境（以及打包器、类型检查器等许多工具）在解析和解释模块时各有各的规则。我们不会尝试记录非浏览器环境的每个细节，但本节提供了一个跨平台思考模块的心智模型，以及编写可移植模块代码的实用指南。

## 其他模块格式

ECMAScript 模块（ESM）在 JavaScript 诞生近 20 年后才被标准化并实现。到那时，大多数应用已经复杂到需要模块系统，因此运行时和打包器实现了各种替代方案。

本质上，每个模块系统都需要三个部分：

- 模块代码，具有自己的作用域来封装变量，例如一个包装函数。
- 某种让模块声明其导出的协议。
- 一种导入机制，用于标识另一个模块并访问其导出。

### CommonJS

Node.js 推广了 [CommonJS](https://nodejs.org/api/modules.html) 系统。在 Node.js 对 CommonJS 的实现中，每个模块都被隐式包装在一个函数里。这个函数把五样东西传入模块作用域：`exports`、`module`、`require`、`__dirname` 和 `__filename`。每个模块的导出值都是 `module.exports` 中包含的单个 JavaScript 值。你可以用模块 ID 调用 `require()` 来获得这个值。

```js
// -- rectangle.cjs --
module.exports = {
  area: (a, b) => a * b,
};
```

```js
// -- square.cjs --
const rectangle = require("./rectangle.cjs");
// `rectangle` 包含 rectangle.cjs 的 `module.exports` 对象

module.exports = {
  area: (side) => rectangle.area(side, side),
};
```

ESM 把[说明符解析](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#web_上的模块说明符)完全交给宿主定义，而 CommonJS 为模块 ID 定义了[一些语义](https://wiki.commonjs.org/wiki/Modules/1.1.1#Module_Identifiers)。它规定以 `.` 或 `..` 开头的相对 ID 应相对于当前模块解析，而不以它们开头的顶层 ID 应相对于某个“模块命名空间根”解析。Node.js 接着 CommonJS 规范未完成的地方，定义了[正式的解析算法](https://nodejs.org/api/modules.html#all-together)，许多识别 CJS 的工具（包括打包器和 TypeScript）都以它作为解析的基础。其中最值得注意的是，Node.js 的解析逻辑定义了 `node_modules` 文件夹，以及如何导入指向目录的路径（它使用目录的 `package.json` 或 `index.js`）。

### AMD

CommonJS 在 Node.js 中运行良好，但它是同步的，这对浏览器不利，因为加载依赖可能涉及网络请求。[异步模块定义（AMD）](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)在浏览器中更流行，因为它的导入是异步的。在 AMD 中，每个模块调用 `define()`，传入一个依赖 ID 数组和一个工厂函数。加载器在调用工厂函数之前解析这些依赖，并按相同顺序把它们的导出值作为参数传入。工厂函数可以返回一个值作为该模块的导出。

```js
// -- rectangle.js --
define([], function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
define(["./rectangle"], function (rectangle) {
  // `rectangle` 包含 rectangle.js 的工厂函数返回的值
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

`define()` 函数由 AMD 加载器（例如 [RequireJS](https://requirejs.org/docs/api.html)）提供，而不是由运行时提供（浏览器并不原生理解 AMD）。AMD 支持相对和顶层模块 ID，与 CommonJS 类似。这些 ID 如何映射到文件取决于加载器及其配置。例如，RequireJS 通常根据配置的 `baseUrl` 解析顶层 ID，并添加 `.js` 扩展名，因此模块 ID 通常会省略扩展名。

### UMD

在 ESM 之前，人们就已经希望让模块跨平台了！[通用模块定义（UMD）](https://github.com/umdjs/umd)是一组包装模式，让同一个文件可以适配不同的模块系统。典型的 UMD 包装器先检查是否存在 AMD 加载器，再检查是否处于 CommonJS 环境，否则把模块暴露为全局变量。每个分支都使用同一个工厂函数来创建模块的导出值。

```js
// -- rectangle.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.rectangle = factory();
  }
})(globalThis, function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./rectangle"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./rectangle.js"));
  } else {
    root.square = factory(root.rectangle);
  }
})(globalThis, function (rectangle) {
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

现在，同一个文件既可以在运行 CommonJS 的 Node.js 中导入，也可以在运行 AMD 的浏览器中导入，而无需修改源代码。在全局变量分支中，你必须按正确顺序自行加载依赖，就像[传统的全局脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)一样。

UMD 不定义自己的依赖解析规则；这由 AMD/CommonJS 分支处理。人们很少手写 UMD；它通常由[打包器](#打包器)和[转译器](#转译器)生成。

## 在 Node.js 中使用模块

Node.js 同时支持 ESM 和 CommonJS 模块。当它尝试执行一个文件时，必须先判断该文件是 CJS 还是 ESM。为了向后兼容，在没有任何上下文线索时，Node.js 默认按 CJS 处理（除非文件包含 `import`/`export` 这类 ESM 特有的语法，此时会切换到 ESM）。要显式把文件标记为 ESM，请使用 `.mjs` 扩展名，或在最近的父级 `package.json` 文件中使用 `.js` 并设置 `"type": "module"`：

```json
{
  "type": "module"
}
```

要显式把文件标记为 CJS，请使用 `.cjs` 扩展名，或在最近的父级 `package.json` 文件中设置 `"type": "commonjs"`。

例如，在与 `package.json`（包含 `"type": "module"`）相同的目录中创建这两个文件：

```js
// -- square.js --
export const area = (side) => side ** 2;
```

```js
// -- main.js --
import { area } from "./square.js";

console.log(area(4)); // 16
```

用 `node main.js` 运行入口模块。Node.js 直接从文件系统加载这些文件；不需要 HTML 页面或 HTTP 服务器。

Node ESM 不暴露 CJS 的模块作用域变量：`__dirname`、`__filename`、`exports`、`module`、`require`。你可能有 `export` 声明，所以大概不需要 `exports` 和 `module`，但 `__dirname` 和 `__filename` 对获取当前模块的路径可能很有用，`require` 则在非顶层位置同步加载依赖时很有用。[`import.meta`](https://nodejs.org/api/esm.html#importmeta) 在很大程度上取代了 `__dirname` 和 `__filename`，并提供了 `import.meta.dirname` 和 `import.meta.filename` 等 Node 特有的属性。如果你想同步加载依赖，Node 还提供了 [`createRequire`](https://nodejs.org/api/module.html#modulecreaterequirefilename) 函数，用于在该模块的上下文中恢复 `require` 函数。

Node 对 ESM 和 CJS 模块说明符有不同的解析逻辑。其 ESM 实现与[浏览器](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#web_上的模块说明符)更一致，这意味着你必须保留文件扩展名，例如写成 `"./square.js"` 而不是 `"./square"`。为了与现有生态兼容，Node.js 仍会把裸名称解析为 `node_modules` 中已安装的包。它通过 `node:` 协议提供内置模块。

```js
import { readFile } from "node:fs/promises"; // 从内置模块导入
import _ from "lodash"; // 从 node_modules 中的包导入

const text = await readFile(new URL("./data.txt", import.meta.url), "utf8");
const wordCounts = _.countBy(_.words(text));
```

使用 ESM 还是 CJS 的说明符解析规则，取决于导入方式，而不是目标模块。`require`（包括在 ES 模块中由 `createRequire` 创建的那些）使用 CJS 模块说明符，而 `import`（包括 CJS 模块中的动态导入）使用 ESM 说明符。

Node 的说明符解析还提供了一些额外特性，例如通过 `package.json` 中的 `"imports"` 实现导入别名。加载规则和 API 请参阅 [Node.js 的 ES 模块文档](https://nodejs.org/api/esm.html)。

### ESM/CJS 互操作

在 Node.js 中，ES 模块可以导入 CJS 模块，此时会把 `module.exports` 的值作为默认导出加载：

```js
// -- main.mjs --
import square from "./square.cjs";

console.log(square.area(4)); // 16
```

反过来，CommonJS 代码可以使用异步的 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) 加载 ES 模块。Node.js 还支持[对同步 ES 模块图使用 `require()`](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require)：

```js
const square = require("./square.mjs");
// 假设 square.mjs 及其依赖不使用顶层 await

console.log(square.area(4));

import("./module-with-top-level-await.mjs").then((mod) => {
  mod.foo();
});
```

唯一的限制是 `require()` 无法加载使用[顶层 `await`](/zh-CN/docs/Web/JavaScript/Guide/Modules#顶层_await) 的模块图：

```js example-bad
const mod = require("./module-with-top-level-await.mjs");
// Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead.
```

许多 CJS 包的预期导出方式是单独的名称，像这样：

```js
const { area } = require("./square.cjs");
```

这*并不*总能转换为 ESM 中的具名导入：

```js
import { area } from "./square.cjs";
```

这是因为[模块必须先链接再求值](/zh-CN/docs/Web/JavaScript/Guide/Modules/Module_graph#从模块源代码到执行)，这意味着 Node 必须在运行 `square.cjs` 之前就能判断是否存在名为 `area` 的导出。因此它只能查找某些代码模式，例如 `module.exports = { area }` 或 `module.exports.area = ...`，但无法 100% 成功，尤其是当 CJS 代码是手写的并以迂回的方式修改 `module.exports` 时。大多数常见的编译器生成的 CJS 惯用写法都能被正确分析。

在最坏的情况下，你可能需要导入整个 `module.exports` 对象，然后再解构它：

```js
import square from "./square.cjs";

const { area } = square;
```

注意，CJS 没有“默认导出”的概念；当你默认导入一个 CJS 模块时，实际上加载的是整个 `module.exports` 对象，其中可能以属性形式存在概念上的“具名导出”。编译器会把 `export default` 声明转译为本质上是 `module.exports.default = ...` 的 CJS 代码，而这无法在 ES 模块中直接导入（`import { default as area }` 等同于 `import area`，会加载整个 `module.exports` 对象）。

```js
// -- square.js --
// 这个文件会被编译成 CJS
export default function area(side) {
  return side ** 2;
}
// 编译后的代码：
// module.exports.default = function area(side) ...
```

```js
// -- main.mjs --
import square from "./square.js";

// 无法避免！
const { default: area } = square;
```

因此，如果你编写的 ESM 语法会被编译为 CJS，然后再被原生 ES 模块导入，就应避免使用默认导出，或提供一个具名导出别名。

```js
// -- square.js --
// 导出与默认导出完全相同的值
export { area };
```

### 包

发布包时，它的 [`"exports"` 字段](https://nodejs.org/api/packages.html#package-entry-points)定义了使用者可以导入的入口点。[条件导出](https://nodejs.org/api/packages.html#conditional-exports)可以为不同环境或模块系统选择不同的实现。这些包设置不同于 JavaScript 的 `export` 声明，后者决定每个模块暴露的绑定。[`"main"` 字段](https://nodejs.org/api/packages.html#main)现在已不再必要，可以被 `"exports"` 取代。

很长一段时间里，Node 不允许 CJS 使用者在不使用异步 `import()` 的情况下导入 ESM 包（允许 `require()` 加载 ESM 是后来才有的）。因此，希望以原生 ESM 发布的包需要为仍在运行 CJS 的使用者单独发布一份 CJS 副本：

```json
{
  "name": "dual-package",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs",
      "default": "./dist/esm/index.js"
    }
  }
}
```

这种做法称为双包发布（dual packaging），在当前 Node.js 中，只要包的依赖图不使用顶层 `await`，就不再需要它。如果应用的不同部分分别以 CJS 和 ESM 形式加载同一个包，它们可能不会共享相同的模块状态，从而产生细微的 bug。

## 转译器

前面的小节顺带提到了转译器。它们把某些 JavaScript 语法转换为其他 JavaScript 语法。在模块格式之间转换当然是它们工作的一部分。常见的转译器，如 [Babel](https://babeljs.io/)、[SWC](https://swc.rs/) 和 [tsc](https://www.typescriptlang.org/)，都能接收以原生 ESM 语法编写的模块，并输出[前述模块格式](#其他模块格式)之一。

例如，取以下源代码：

```js
// -- src/square.js --
import * as rectangle from "./rectangle";

export function area(side) {
  return rectangle.area(side, side);
}
```

然后运行转译器生成 CJS。它可能输出以下内容：

```js
// -- dist/square.js --
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
Object.defineProperty(exports, "area", {
  enumerable: true,
  get: function () {
    return area;
  },
});
const _rectangle = /*#__PURE__*/ _interop_require_wildcard(
  require("./rectangle"),
);
// ... _interop_require_wildcard 的定义 ...
function area(side) {
  return _rectangle.area(side, side);
}
```

因此，虽然你可能因为写了 `import` 和 `export` 声明而感觉自己是在编写 ESM，但除非你配置转译器输出原生 ESM，否则你实际上可能仍在编写 CJS 代码（或某种其他模块格式）。转译器通常只处理单个文件，并原样保留模块说明符。这就是为什么像 `import * as rectangle from "./rectangle"` 这样缺少扩展名的代码仍然可用；它最终会被编译为 `require("./rectangle")`，这是有效的 CJS。

转译器的目标是：如果目标模块和导入模块都经过转译，就让你尽可能感觉像是在编写原生 ESM。具体来说，大多数转译器不会总是把 `import rectangle from "./rectangle";` 转换为加载整个 `module.exports` 对象。在上面的输出代码中，注意 `__esModule` 标记。该标记表明这个 CJS 模块是通过转译 ESM 语法产生的。大多数转译器会把默认导入编译为：如果存在该标记，则读取 `module.exports.default`（即转译后的 `export default` 声明所导出的值），否则读取 `module.exports`。

缺点是，如果只有一侧经过转译，而另一侧在 Node 的原生 ESM 中运行，你可能突然会遇到不顺畅之处（如 [ESM/CJS 互操作](#esmcjs_互操作)中所述）。例如，转译后的 `export default` 无法再在原生 ESM 中用默认导入来导入。

你需要阅读所用转译器的文档或进行实验，以了解不同种类的 `import` 和 `export` 声明如何被转译的具体规则。

## 打包器

打包器通常内置用于转换模块格式的转译器，但它们更进一步，会真正尝试理解依赖图，以便对其进行转换和优化。

从一个或多个入口模块出发，打包器沿着它们的依赖前进，并把代码合并到输出文件中。最原始的打包器只输出单个 JavaScript 文件（“包体”），但也可能输出多个文件，尤其是在使用动态 `import()` 时。即使你打算直接运行 ESM，打包器仍然非常有用，因为它们会执行重要的转换和优化。例如，[Vite](https://vite.dev/guide/) 让以 ESM 编写的应用通过[依赖预打包](https://vite.dev/guide/dep-pre-bundling.html)使用 CommonJS 和 UMD 依赖。在开发期间，Vite 用原生 ESM 提供转换后的模块；其生产构建会为部署打包应用。打包器在浏览器之外也很有用：即使你在开发 Node 库或应用，仍可以用打包器优化代码体积和/或使用非标准语法。

打包器不是 JavaScript 宿主，因为它们不*执行*代码。它们只对文件进行静态分析。尽管如此，它们处理模块时有一套可与浏览器或 Node 相比的完整规则。

### 模块解析

与保留模块说明符的转译器不同，打包器需要定位它所包含的依赖。

大多数前端包也通过包管理器放在 `node_modules` 文件夹中管理，因此打包器默认能理解 Node 风格的包导入。它们往往还同时支持 ESM 风格和 CJS 风格的解析（即目录导入和无扩展名导入），不过在某些情况下可能更倾向于其中一种，例如模块带有明确的 `.mjs`/`.cjs` 扩展名时。

打包器通常提供可配置的解析规则。例如，Vite 的 [`resolve.alias`](https://vite.dev/config/shared-options.html#resolve-alias) 选项让你配置别名：

```js
// -- vite.config.js --
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@shapes": fileURLToPath(new URL("./src/shapes", import.meta.url)),
    },
  },
});
```

然后你的源代码就可以使用这个别名：

```js
import { area } from "@shapes/square";
```

有了这个配置，Vite 可以把该导入解析为 `src/shapes/square.js`。浏览器不需要理解这个别名，因为 Vite 会在开发期间重写导入，并在打包时解析它。但是，如果没有提供等效映射的导入映射，原始源代码无法直接在浏览器中运行。

### 优化模块图

打包器会把模块图中的所有文件拼接在一起。如果你导入 `lodash`，就会把 [Lodash](https://lodash.com/) 的整个源代码（包含 100 多个工具函数）复制进包体，代价很高。打包器可以移除应用未使用的代码，这通常称为{{Glossary("tree shaking", "摇树优化")}}。ESM 的静态导入和导出有助于打包器判断哪些绑定被使用。

> [!NOTE]
> 这就是为什么如果你要发布的包是供打包器使用而非直接运行的，就应当以 ESM 语法发布，以便打包器更容易理解它。

例如：

```js
// -- big-library --
export function map() {}

export function filter() {}

export function reduce() {}
```

```js
// -- my-app.js --
import { map } from "big-library";
```

打包器可以看出 `filter` 和 `reduce` 导出从未被你的应用使用，并把它们从最终包体中移除。它甚至可以更进一步，看出虽然你导入了 `map`，但从未调用它（因此是“死代码”），从而避免打包整个 `big-library`。

> [!NOTE]
> 你可能会想，既然这个导入没被使用，为什么还要保留它。这是因为它可能是有条件使用的，而该条件在构建时是已知的。例如：
>
> ```js
> if (import.meta.env.PROD) {
>   map();
> } else {
>   someOtherCode();
> }
> ```
>
> `import.meta.env.PROD` 的值由打包器在构建期间静态设置，因此如果它为 `false`，最终包体只包含 `someOtherCode()` 分支，该 `import` 就变成未使用的了。

这并不意味着整个模块都可以丢弃：执行模块可能有副作用，例如注册事件监听器或修改全局对象。因此即使在消除死代码之后，你可能仍会保留一个副作用导入，如 `import "big-library";`，而该模块内所有未使用的声明都会被移除。一些打包器会识别 `package.json` 中的 `"sideEffects"` 字段，该字段标识其执行必须保留的文件。如果你的包在被导入时没有副作用（包括任何必须应用的 CSS 文件），可以设置 `"sideEffects": false`，让打包器省略整个 `import`。

打包不一定只产生一个文件。通过代码分割，打包器可以把动态导入的代码放入单独的文件（称为*块*，chunk），在需要时再加载。这很有用，因为它最小化了初始化时需要加载的代码量，并避免加载用户可能用不到的代码。有些打包器会自动分割代码，但通常你需要用[动态导入](https://vite.dev/guide/features.html#dynamic-import)显式触发代码分割：

```js
button.addEventListener("click", async () => {
  const { showChart } = await import("./chart.js");
  showChart();
});
```

根据构建配置的不同，`chart.js` 及其依赖可能会与初始应用代码分开输出。打包器会重写导入，以加载生成的块：

```js
button.addEventListener("click", async () => {
  // 为缓存目的附加一个唯一的哈希
  const { showChart } = await import("./chart-ABCDEF.js");
  showChart();
});
```

你必须同时部署这些额外文件和入口文件。

打包器必须能够在构建期间发现要包含的模块。原生 `import()` 在运行时可接受任意字符串，但如果你写 `import(someVariable)`，而打包器无法静态确定 `someVariable` 可能取哪些值，它可能无法打包必要的文件。各工具对[变量模块说明符](https://vite.dev/guide/features.html#dynamic-import)的支持程度不同。对于已知的一组模块，显式列出导入可以让依赖关系更清晰：

```js example-bad
// 打包器可能需要打包 shapes/ 下的所有内容
const shape = await import(`./shapes/${shapeName}.js`);
```

```js
// 打包器确切知道要打包哪些文件
const loaders = {
  square: () => import("./shapes/square.js"),
  circle: () => import("./shapes/circle.js"),
};

const shape = await loaders[shapeName]();
```

打包器还可以把依赖保持为*外部*依赖，即其代码不包含在包体中。Vite 的[库模式](https://vite.dev/guide/build.html#library-mode)在发布需要使用者自行提供依赖的库时支持这一点。如果输出中仍包含对这些依赖的 `import` 或 `require()` 调用，运行时必须能够解析它们。即使打包器在构建时能够定位该包，留在浏览器 ESM 输出中的裸说明符仍然需要导入映射。

### 非 JavaScript 资源

打包器可以使用内置功能或插件来解释非 JavaScript 资源的导入。例如，Vite 支持 [CSS 导入](https://vite.dev/guide/features.html#css)和[静态资源导入](https://vite.dev/guide/assets.html#importing-asset-as-url)：

```js
import "./styles.css";
import logoURL from "./logo.svg";
```

Vite 在开发期间把 CSS 插入页面，在生产构建时通常将其提取为单独的样式表。SVG 导入返回一个资源 URL，它可能指向输出的图片，也可能是内联的 data URL。这些含义来自构建工具（你还可以用自定义加载器创建自定义的 `模块说明符 → 模块对象` 映射逻辑）。它们不等同于原生的[非 JavaScript 模块导入](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#加载非_javascript_资源)，后者使用导入属性并遵循运行时的模块类型规则。

在依赖打包器的模块解析或资源处理时，请查阅其文档。通过打包器可用的导入，在由运行时直接加载时可能需要不同的配置。对于打算直接在浏览器中运行的代码，请参阅[在 web 上使用模块](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)。

## TypeScript 如何理解模块

[TypeScript](https://www.typescriptlang.org/docs/handbook/modules/theory.html) 分析模块以检查导入值的类型，并在编译时生成适合运行时或打包器的 JavaScript。要做到这一点，它需要同时理解你的 TypeScript 源代码以及生成的 JavaScript 将如何被加载。它的 `module` 和 `moduleResolution` 编译器选项描述了该环境的模块格式和解析规则。即使由其他工具生成 JavaScript 而 TypeScript 只做类型检查，这些设置也很重要。

在 TypeScript 中，文件要么是脚本，要么是模块（就像 [JavaScript 本身](/zh-CN/docs/Web/JavaScript/Guide/Modules)一样，但这里的“模块”不一定是“ES 模块”；它可能是 CJS 等）。主要区别在于：脚本中的变量声明在整个项目中自动可见，而模块会创建自己的作用域。默认情况下，任何带有顶层 `import` 或 `export` 的文件都是模块，因此有时添加一个无用的 `export {}` 就能把文件标记为模块，阻止其变量声明变成全局的。[`moduleDetection`](https://www.typescriptlang.org/tsconfig/moduleDetection.html) 选项可以强制把所有非声明文件都视为模块。

### 模块格式

被 TypeScript 视为“模块”的文件仍可能被编译为各种[格式](#其他模块格式)，最主要是 ESM 和 CJS。（如今 AMD 和 UMD 对开发者的相关性较低，因为你可以直接让打包器对 TypeScript 源代码“做正确的事”，而 `tsc` 明确不是打包器，不会为 web 部署优化你的代码。）

`tsc` 是转译器，因此可以把 ESM 语法编译为 CJS。TypeScript 文档现在推荐 [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax) 选项，它让模块语法更容易推理（例如，你不必担心 `import x from "mod"` 会被编译成什么）。后续文档都假定该选项已开启。

TypeScript 提供两套模块语法。一套是熟悉的 ES 语法 {{jsxref("Statements/import", "import")}} 和 {{jsxref("Statements/export", "export")}}（处理单个具名导出或默认导出），另一套是特殊的 CJS 语法（处理整个 `module.exports` 对象）。

```ts
import x = require("mod");
// 编译为：const x = require("mod");

export = x;
// 编译为：module.exports = x;
```

启用 `verbatimModuleSyntax` 后，如果 ES 的 import/export 语法会被编译为 CJS，TypeScript 就会报错。在 Node.js 的模块选项下，`import = require()` 语法在 CJS 和 ESM 中都有效（后者会生成 `createRequire` 调用），而 `export =` 只在 CJS 中有效。

你用 [`module`](https://www.typescriptlang.org/tsconfig/#module) 选项声明模块类型。虽然选项很多（可与转译器相比），但你大概会使用以下之一：

- `"nodenext"`：如果你要输出在 Node.js 兼容运行时中运行的代码。它使用 [Node.js 的检测算法](#在_node.js_中使用模块)，例如 `.mts`（`.mjs` 的 `.ts` 版本）和 `"type": "module"`，在 CJS 和 ESM 之间选择。也有 `"node16"` 这样的带版本的值，但只有在你想特意避免新行为时才使用它们。TypeScript 还[推荐](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler)在为浏览器原生运行输出代码时使用该选项，因为它推荐的 `"moduleResolution": "nodenext"` 要求此设置。
- `"preserve"`：如果你要输出在打包器或 Bun 中运行的代码。它会原样输出模块格式，并把 `import = require()` 和 `export =` 编译为 CJS。
- `"esnext"`：如果你想在不做转换的情况下强制使用 ESM 语法。它只输出 ESM，`import = require()` 和 `export =` 会报错。也有 `"es2020"` 这样的带版本的值，但只有在你想特意避免新行为时才使用它们。

`module` 选项还决定你能否访问 `import.meta`、能否使用顶层 `await`、能否导入其他 ES 模块等。在典型环境中，仅设置这个选项大概就能让其他大多数选项获得合理的默认值。

### 说明符解析

TypeScript 会重新实现生成的 JavaScript 代码所面向环境的说明符解析逻辑，因此你需要用 [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution) 声明使用哪个解析器。目前唯一推荐的值是：

- `"nodenext"`：如果你要输出在 Node.js 兼容运行时中运行的代码。它使用 [Node.js 的解析算法](#在_node.js_中使用模块)；也有 `"node16"` 这样的带版本的值，但只有在你想特意避免新行为时才使用它们。
- `"bundler"`：如果你要输出在打包器或 Bun 中运行的代码。它使用[大多数打包器都认可的解析算法](#模块解析)，本质上就是不要求显式扩展名的 Node 解析。

对于打算直接在浏览器中运行的代码，TypeScript 没有专门的浏览器解析器。其[推荐的近似方案](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler)对 `moduleResolution` 使用 `"nodenext"`，这同时要求 `module: "nodenext"`。但 `"nodenext"` 和 `"bundler"` 都是浏览器能力的超集，因此你务必小心，不要使用浏览器无法原生理解的 Node 特有功能，例如包导入或导入 CommonJS。

TypeScript 不会读取你的打包器配置或导入映射来复现你可能拥有的自定义说明符解析规则。你可以使用 [`paths`](https://www.typescriptlang.org/tsconfig/#paths) 选项；对于上面展示的 Vite 别名，请确保 TypeScript 和 Vite 都把 `@shapes/square` 解析到同一个模块。它还有其他[配置选项](https://www.typescriptlang.org/tsconfig/#Modules_6244)，目的都是确保 TypeScript 能够复现说明符在运行时的解析方式。

与转译器一样，默认情况下说明符按字面处理，不做任何重写——使用 `paths` 的路径别名不会被重写（因此只有在你的路径别名能被下游使用者原生理解时才使用该选项），而且你仍然用 `.js` 来引用 `.ts` 文件，因为那才是你在运行时实际导入的文件。

```ts
// -- src/main.ts --
import { area } from "./square.js";
// TypeScript 可以用 src/square.ts 检查这个导入
// 输出的 JavaScript 仍然导入 ./square.js
```

事实上，默认情况下，导入 `.ts` 会报错，因为编译为 JavaScript 后这些导入很可能无法工作。如果你完全不需要编译，并打算原生运行 TypeScript（通过打包器或支持 TypeScript 的运行时），可以开启 [`allowImportingTsExtensions`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions) 来消除这些错误。还有 [`rewriteRelativeImportExtensions`](https://www.typescriptlang.org/tsconfig/#rewriteRelativeImportExtensions) 选项，可选择在输出时把以 `.ts`、`.tsx`、`.mts` 或 `.cts` 结尾的相对导入重写为对应的 JavaScript 扩展名。该选项通常只在你打算同时原生运行 TypeScript 并生成可执行 JavaScript 时使用。

### 类型导入与导出

在模块中，TypeScript 允许你导入和导出类型以及 JavaScript 值。[`import type` 和 `export type`](https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax) 形式会从输出的 JavaScript 中擦除。你也可以在同时导入类型和值时用 `type` 标记单个绑定，这样只会擦除那些绑定。

```ts
import { area, type Shape } from "./shapes.js"; // 只移除 "type Shape"
import type { Square } from "./square.js"; // 整个声明被移除
```

`import { type Shape }` 会留下 `import {} from "./shapes.js"` 声明，它仍会加载并求值该模块。

### 模块声明

当你从本地文件导入内容时，TypeScript 直接读取目标模块的 TypeScript 源代码来理解其类型。这开销很大。对于已发布的库，TypeScript 建议生成扩展名为 `.d.ts` 的*声明文件*，这样就不必读取整个源文件。`.d.ts` 文件通常由 `tsc` 生成，包含类型声明而非可执行实现。

```ts
// -- src/square.ts --
export function area(side: number) {
  return side ** 2;
}
```

```ts
// -- dist/square.d.ts --
export function area(side: number): number;
```

即使你的项目是 JavaScript，也仍应考虑发布手写的 `.d.ts` 文件，以便用户获得正确的类型定义。通常，TypeScript 在导入包源代码时能够自动找到正确的 `.d.ts` 文件。更多信息请阅读 [TypeScript 声明文件](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)指南。

## “同构”模块

模块的引入鼓励 JavaScript 生态以模块化方式分发和复用代码。然而，这并不一定意味着某段 JavaScript 代码可以在每个环境中运行。假设你发现了一个为用户密码生成 SHA 哈希的模块。你能在浏览器前端使用它吗？能在 Node.js 服务器上使用它吗？答案是：视情况而定。

模块仍然可以访问全局变量，正如[模块与经典脚本的其他不同](/zh-CN/docs/Web/JavaScript/Guide/Modules#模块与经典脚本的其他不同)中所展示的。如果模块引用了 `window` 这样的全局变量，它可以在浏览器中运行，但在 Node.js 服务器上会抛出错误，因为那里没有 `window`。同样，如果代码需要访问 `process` 才能工作，那它只能在 Node.js 中使用。

为了最大限度地提高模块的可复用性，通常建议让代码“同构”——即让它在每个运行时中表现一致。这通常通过三种方式实现：

- 把模块分为“核心”和“绑定”。对于“核心”，专注于纯 JavaScript 逻辑（例如计算哈希），不涉及任何 DOM、网络或文件系统访问，并暴露工具函数。对于“绑定”部分，你可以读写全局上下文。例如，“浏览器绑定”可能选择从输入框读取值，而“Node 绑定”可能从 `process.env` 读取，但从任一位置读取的值都会传给同一个核心函数并以相同方式处理。核心可以在每个环境中导入并以相同方式使用，而通常很轻量的绑定才需要针对特定平台。
- 在使用某个全局变量之前先检测它是否存在。例如，下面的代码在从 `process.env`（Node.js 及类似环境特有）读取之前检查 `process` 是否已定义，否则在从 DOM（浏览器及类似环境特有）读取之前检查 `window` 是否已定义。

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // 我们在 Node.js 中运行；从 `process.env` 读取
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // 我们在浏览器中运行；从输入框读取
    password = document.getElementById("password").value;
  }
  ```

  如果两个分支实际上最终行为一致（“同构”），这种方式更可取。如果无法提供相同的功能，或者这样做需要加载大量代码而其中大部分不会被使用，那么改用不同的“绑定”更好。

- 使用 polyfill 为缺失的特性提供后备方案。例如，如果你想用 [`DOMParser`](/zh-CN/docs/Web/API/DOMParser) API 解析 XML，它在浏览器中可用但 Node.js 原生不提供，你可以使用类似的 API，例如 [`@xmldom/xmldom`](https://github.com/xmldom/xmldom) 提供的那个。你可以通过动态导入有条件地这样做：

  ```js
  // myModule.js
  if (typeof DOMParser === "undefined") {
    // 在没有原生 DOMParser 时使用 @xmldom/xmldom
    globalThis.DOMParser = (await import("@xmldom/xmldom")).DOMParser;
  }
  // …
  ```

  [`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 变量是一个在每个环境中都可用的全局对象，如果你想在模块内读取或创建全局变量，它会很有用。

这些做法并非模块独有。尽管如此，随着代码可复用性和模块化的趋势，我们鼓励你让代码跨平台，以便尽可能多的人受益。Node.js 等运行时也在尽可能积极地实现 web API，以改善与 web 的互操作性。

## 参见

- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)
- [在 web 上使用模块](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [理解模块图](/zh-CN/docs/Web/JavaScript/Guide/Modules/Module_graph)
- [CommonJS 模块规范](https://wiki.commonjs.org/wiki/Modules/1.1.1)
- [AMD 规范](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
- [UMD 模式](https://github.com/umdjs/umd)
- [RequireJS API](https://requirejs.org/docs/api.html)
- Node.js：[ECMAScript 模块](https://nodejs.org/api/esm.html)、[CommonJS 模块](https://nodejs.org/api/modules.html)和[包](https://nodejs.org/api/packages.html)
- [Deno 中的模块](https://docs.deno.com/runtime/fundamentals/modules/)
- [Bun 中的模块解析](https://bun.sh/docs/runtime/module-resolution)
- [Babel 中的 CommonJS 模块转换](https://babeljs.io/docs/babel-plugin-transform-modules-commonjs)
- [SWC 中的模块配置](https://swc.rs/docs/configuration/modules)
- TypeScript：[模块理论](https://www.typescriptlang.org/docs/handbook/modules/theory.html)、[模块参考](https://www.typescriptlang.org/docs/handbook/modules/reference.html)和[选择编译器选项](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
- Vite：[依赖预打包](https://vite.dev/guide/dep-pre-bundling.html)、[特性](https://vite.dev/guide/features.html)和[库模式](https://vite.dev/guide/build.html#library-mode)
