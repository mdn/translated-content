---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: d055553630e3043ad50742e1817650993216ddd8
---

**`export`** 声明用于从 JavaScript 模块中导出值。导出的值可通过 {{jsxref("Statements/import", "import")}} 声明或[动态导入](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)来将其导入其他程序。导入绑定的值会在导出该绑定的模块中发生变化——当模块更新其导出绑定的值时，更新将在其导入值中可见。

要在源文件中使用 `export` 声明，运行时必须将该文件解释为[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)。在 HTML 中，可通过在 {{HTMLElement("script")}} 标记中添加 `type="module"` 或由其他模块导入来实现。模块会自动以[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)解释。

## 语法

```js-nolint
// 导出声明
export let name1, name2/*, … */; // also var
export const name1 = 1, name2 = 2/*, … */; // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;

// 导出列表
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };

// 默认导出
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// 导出模块合集
export * from "module-name";
export * as name1 from "module-name";
export { name1, /* …, */ nameN } from "module-name";
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
export { default, /* …, */ } from "module-name";
export { default as name1 } from "module-name";
```

- `nameN`
  - : 要导出的标识符（以便其他脚本通过 {{jsxref("Statements/import", "import")}} 语句进行导入）。如果使用带有 `as` 的别名，实际导出的名称可以指定为字符串字面量，但它可能不是有效的标识符。

## 描述

有两种不同的导出方式，具名导出和默认导出。你能够在每一个模块中定义多个具名导出，但是只允许有一个默认导出。每种方式对应于上述的一种语法：

具名导出：

```js
// 导出其它地方声明的特性
export { myFunction2, myVariable2 };

// 导出单个特性（可导出 var、let、const、function、class）
export let myVariable = Math.sqrt(2);
export function myFunction() {
  // …
}
```

在 `export` 关键字之后，你可以使用 `let`、`const` 和 `var` 声明，以及函数或类声明。你还可以使用 `export { name1, name2 }` 语法导出在其他地方声明的名称列表。请注意，`export {}` 不会导出一个空对象——它是一个不导出任何东西（一个空的名称列表）的无操作声明。

导出声明不受[暂时性死区](/zh-CN/docs/Web/JavaScript/Reference/Statements/let#暂时性死区)规则的限制。你可以在声明名称 `X` 之前声明当前模块导出 `X`。

```js
export { x };
const x = 1;
// 这样做是可行的，因为 `export` 只是一个声明，并没有使用 `x` 的值。
```

默认导出：

```js
// 导出事先定义的特性作为默认值
export { myFunction as default };
// 这等同于：
export default myFunction;

// 导出单个特性作为默认值
export default function () { /* … */ }
export default class { /* … */ }
```

> [!NOTE]
> 导出声明的名称必须相互独立。导出名称重复或使用多个 `default` 导出将导致 {{jsxref("SyntaxError")}} 并阻止模块被执行。

`export default` 语法允许任何表达式。

```js
export default 1 + 1;
```

作为一种特殊情况，函数和类是作为*声明*而不是表达式导出的，而且这些声明可以是匿名的。这意味着函数将被提升。

```js
// 有效是因为 `foo` 是函数声明，而不是函数表达式
foo();

export default function foo() {
  console.log("Hi");
}

// 从技术上讲，它仍然是一个声明，但允许匿名
export default function () {
  console.log("Hi");
}
```

具名导出在需要导出多个值时非常有用。导入此模块时，具名导出必须使用完全相同的名称（可选择用 `as` 重命名），但默认导出可以使用任何名称导入。例如：

```js
// test.js 文件
const k = 12;
export default k;
```

```js
// 其他文件
import m from "./test"; // 请注意，我们可以自由地使用 import m 而不是 import k，因为 k 是默认导出
console.log(m); // 12
```

你还可以对具名导出进行重命名，以避免命名冲突：

```js
export { myFunction as function1, myVariable as variable };
```

你可以使用字符串字面量将名称重命名为非有效标识符。例如：

```js
export { myFunction as "my-function" };
```

### 重导出/聚合

模块还可以“中继”从其他模块导出的值，而无需编写两条单独的导入及导出语句。这在创建一个集中了来自不同模块的各种导出值的单一模块（通常称为“桶模块”）时通常非常有用。

这个可以使用“export from”语法实现：

```js
export { default as function1, function2 } from "bar.js";
```

这类似于 import 和 export 的组合，只是 `function1` 和 `function2` 不会在当前模块中可用：

```js
import { default as function1, function2 } from "bar.js";
export { function1, function2 };
```

大多数“import from”语法都有对应的“export from”语法。

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

虽然没有 `import * from "mod"`，但也有 `export * from "mod"`。这会将 `mod` 中的所有**具名**导出重新导出为当前模块的具名导出，但 `mod` 的默认导出不会被重新导出。如果有两个通配符导出语句隐式地重新导出了相同的名称，则这两个语句都不会被重新导出。

```js
// -- mod1.js --
export const a = 1;

// -- mod2.js --
export const a = 3;

// -- barrel.js --
export * from "./mod1.js";
export * from "./mod2.js";

// -- main.js --
import * as ns from "./barrel.js";
console.log(ns.a); // undefined
```

如果试图直接导入重复的名称，则会抛出错。

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

下面的语法无效，尽管其导入等效：

```js-nolint example-bad
export DefaultExport from "bar.js"; // 无效
```

正确的做法是重新命名这个导出：

```js
export { default as DefaultExport } from "bar.js";
```

“export from”语法允许省略 `as` 标记，这使得默认导出仍作为默认导出重新导出。

```js
export { default, function2 } from "bar.js";
```

## 示例

### 使用具名导出

在模块 `my-module.js` 中，可能包含以下代码：

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw() {
    console.log("来自 graph draw function");
  },
};

export { cube, foo, graph };
```

然后，在你的 HTML 页面的顶级模块中：

```js
import { cube, foo, graph } from "my-module.js";

graph.options = {
  color: "blue",
  thickness: "3px",
};

graph.draw(); // 日志："来自 graph draw function"
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

着重注意以下几点：

- 在你的 HTML 中需要包含 type="module" 的 {{htmlelement("script")}} 元素这样的脚本，以便它被识别为模块并正确处理
- 不能通过 `file://` URL 运行 JS 模块 — 这将导致 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 错误。你需要通过 HTTP 服务器运行。

### 使用默认导出

如果我们要导出一个值或得到模块中的返回值，就可以使用默认导出：

```js
// module "my-module.js"

export default function cube(x) {
  return x * x * x;
}
```

然后，在另一个脚本中，可以直接导入默认导出：

```js
import cube from "./my-module.js";
console.log(cube(3)); // 27
```

### 模块重定向

举个例子，假如我们有如下层次结构：

- `childModule1.js`: 导出 `myFunction` 和 `myVariable`
- `childModule2.js`: 导出 `myClass`
- `parentModule.js`: 作为聚合器（不做其他事情）
- 顶层模块：调用 `parentModule.js` 的导出项

你的代码看起来应该像这样：

```js
// childModule1.js 中
function myFunction() {
  console.log("Hello!");
}
const myVariable = 1;
export { myFunction, myVariable };
```

```js
// childModule2.js 中
class MyClass {
  constructor(x) {
    this.x = x;
  }
}

export { MyClass };
```

```js
// parentModule.js 中
// 仅仅聚合 childModule1 和 childModule2 中的导出
// 以重新导出他们
export { myFunction, myVariable } from "childModule1.js";
export { MyClass } from "childModule2.js";
```

```js
// 顶层模块中
// 我们可以从单个模块调用所有导出，因为 parentModule 事先
// 已经将他们“收集”/“打包”到一起
import { myFunction, myVariable, myClass } from "parentModule.js";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/import", "import")}}
- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules) guide
- [ES6 深入：模块](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) 在 hacks.mozilla.org（2015）
- [ES 模块：用漫画深入探讨](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) 在 hacks.mozilla.org（2018）
- [探索 JS，第 16 章：模块](https://exploringjs.com/es6/ch_modules.html) 由 Axel Rauschmayer 博士所著
