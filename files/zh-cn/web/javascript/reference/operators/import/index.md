---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

**`import()`** 语法（通常被称为*动态导入*）是一种允许异步和动态地将 ECMAScript 模块加载到一个潜在的非模块环境中的类函数表达式。

跟[与之对应的声明式风格](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)不同，动态导入只有在被需要时才会求值，并提供了更强大的语法灵活性。

## 语法

```js-nolint
import(moduleName)
import(moduleName, options)
```

`import()` 调用是一个类似于函数调用的语法，但 `import` 本身是一个关键字，而不是一个函数。你不能像 `const myImport = import` 那样为其添加别名，这会抛出 {{jsxref("SyntaxError")}}。

只有在运行时也支持 `options` 时，[尾后逗号](/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)才被允许使用。请查看[浏览器兼容性](#浏览器兼容性)部分。

### 参数

- `moduleName`
  - : 要导入的模块。标识符的求值是宿主特异的（host-specified），但始终遵循与静态的 [import 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)相同的算法。
- `options`
  - : 一个包含了导入选项的对象。以下是可识别的键：
    - `with`
      - : [import 属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)。

### 返回值

返回一个 promise：

- 如果引用的模块被成功加载和求值，则兑现为一个[模块命名空间对象](#模块命名空间对象)：一个包含 `moduleName` 中所有导出的对象。
- 如果对 `moduleName` 做[字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)时抛出错误，则以抛出的错误拒绝。
- 如果 `moduleName` 引用的模块不存在，则以实现定义的错误拒绝（Node 使用通用的 `Error`，而所有浏览器使用 `TypeError`）。
- 如果引用的模块在求值时抛出错误，则以抛出的错误拒绝。

> [!NOTE]
> `import()` 从来不会同步地抛出错误。

## 描述

import 声明语法（`import something from "somewhere"`）是静态的，并且总是会在一加载时就对导入的模块求值。动态导入允许绕过 import 声明的语法刚性（syntactic rigidity），并有条件地或按需加载模块。以下是你可能需要使用动态导入的一些原因：

- 当静态导入显著减慢你的代码加载，或增加你的程序内存使用时，那么你很可能不需要正要导入的代码，或者以后才会需要它。
- 当你正要导入的模块在加载时并不存在时。
- 当导入标识符字符串需要动态构建时。（静态导入仅支持静态标识符。）
- 当你正要导入的模块有副作用，并且你仅在某些条件下才希望有这些副作用。（建议模块中不要有任何副作用，但有时模块的依赖项中是否有副作用也无法控制）
- 当你处于非模块化的环境（例如，`eval` 或脚本文件）时。

仅在必要时使用动态导入。静态导入更适合加载初始依赖项，并且可以更容易地从静态分析工具和[摇树优化](/zh-CN/docs/Glossary/Tree_shaking)中获益。

如果你的文件不是作为模块运行的（如果它在 HTML 文件中被引用，脚本标签必须有 `type="module"` 属性），你将无法使用静态导入声明。而另一方面，异步的动态导入语法却始终可用，它允许你将模块导入到非模块环境中。

`options` 参数允许不同类型的导入选项。例如 [import 属性](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/with)：

```js
import("./data.json", { with: { type: "json" } });
```

动态模块导入并不在所有执行上下文中都可使用。例如，`import()` 可以在主线程、共享/专用 worker 中使用，但如果在 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 或 [worklet](/zh-CN/docs/Web/API/Worklet) 中调用，则会抛出错误。

### 模块命名空间对象

*模块命名空间对象*是一个描述模块所有导出的对象。它是一个静态对象，在模块被求值时创建。有两种方式可以访问模块的模块命名空间对象：通过[命名空间导入](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#命名空间导入)（`import * as name from moduleName`）或通过动态导入的兑现值。

模块命名空间对象是一个[密封](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)的、具有 [`null` 原型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)的对象。也就是说，对象的所有字符串键对应于模块的导出，并且永远不会有额外的键。所有键都是以字典序[可枚举的](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)（即 [`Array.prototype.sort()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#描述) 的默认行为），默认导出以名为 `default` 的键可用。此外，模块命名空间对象具有一个值为 `"Module"` 的 [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性，在 {{jsxref("Object.prototype.toString()")}} 中被使用。

在使用 {{jsxref("Object.getOwnPropertyDescriptors()")}} 获取它们的描述符时会发现，字符串属性是不可配置的和可写入的。然而它们实际上是只读的，因为你不能给属性重新赋一个新的值。这些值可以由导出它们的模块重新赋值，但不能由导入它们的模块重新赋值——这种行为反映了静态导入所创建的“[实时绑定](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#导入的值只能由导出者修改)”。属性的可写入性反映了值是可能发生变化的，因为不可配置和不可写入的属性必须是常量。例如，你可以重新给一个导出的变量赋值，并且可以在模块命名空间对象中观察到新的值。

每个模块标识符对应一个唯一的模块命名空间对象，所以下面的代码通常是正确的：

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

除了一个奇怪的情况：由于 promise 对象永远不会兑现为 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable)，如果 `my-module.js` 模块恰好导出了一个名为 `then()` 的函数，那么该函数将在动态导入的 promise 兑现时自动被调用，因为这是 [promise 解决](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolve_函数)处理流程的一部分。

```js
// my-module.js
export function then(resolve) {
  console.log("then() 已被调用");
  resolve(1);
}
```

```js
// main.js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  // 打印“then() 已被调用”
  console.log(mod === mod2); // false
});
```

> [!WARNING]
> 不要从模块中导出名为 `then()` 的函数。这将导致模块在动态导入和静态导入时的行为不同。

## 示例

### 仅导入模块以获取其副作用

```js
(async () => {
  if (somethingIsTrue) {
    // 导入模块以获取其副作用
    await import("/modules/my-module.js");
  }
})();
```

如果你的项目使用导出 ESM 的包，你也可以仅导入它们以获取其副作用。这将仅运行包的入口点文件（以及它导入的任何文件）中的代码。

### 导入默认值

如果你正在解构导入的模块命名空间对象，那么你必须重命名 `default` 键，因为 `default` 是保留字。

```js
(async () => {
  if (somethingIsTrue) {
    const {
      default: myDefault,
      foo,
      bar,
    } = await import("/modules/my-module.js");
  }
})();
```

### 根据用户操作按需导入

这个示例展示了如何根据用户操作（在本例中为按钮点击）将功能加载到页面上，然后在该模块中调用一个函数。这不是实现此功能的唯一方式。`import()` 函数也支持 `await`。

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    import("/modules/my-module.js")
      .then((module) => {
        module.loadPageInto(main);
      })
      .catch((err) => {
        main.textContent = err.message;
      });
  });
}
```

### 根据环境导入不同的模块

在服务器端渲染等过程中，你可能需要在服务器或浏览器中加载不同的逻辑，因为它们与不同的全局对象或模块交互（例如，浏览器代码可以访问 `document` 和 `navigator` 等 Web API，而服务器代码可以访问服务器文件系统）。你可以通过条件动态导入来实现这一点。

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### 使用非字面量标识符导入模块

动态导入允许任何表达式作为模块标识符，而不仅仅是字符串字面量。

这里，我们同时加载 10 个模块（如 `/modules/module-0.js`、`/modules/module-1.js` 等），并调用每个模块导出的 `load` 函数。

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
