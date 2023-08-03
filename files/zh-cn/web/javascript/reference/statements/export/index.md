---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

在创建 JavaScript 模块时，**`export`** 语句用于从模块中导出实时绑定的函数、对象或原始值，以便其他程序可以通过 {{jsxref("Statements/import", "import")}} 语句使用它们。被导出的绑定值依然可以在本地进行修改。在使用 import 进行导入时，这些绑定值只能被导入模块所读取，但在 export 导出模块中对这些绑定值进行修改，所修改的值也会实时地更新。

无论您是否声明，导出的模块都处于{{jsxref("Strict_mode","严格模式")}}。export 语句不能用在嵌入式脚本中。

## 语法

存在两种 exports 导出方式：

1. 命名导出（每个模块包含任意数量）
2. 默认导出（每个模块包含一个）

```js
// 导出单个特性
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

// 导出列表
export { name1, name2, …, nameN };

// 重命名导出
export { variable1 as name1, variable2 as name2, …, nameN };

// 解构导出并重命名
export const { name1, name2: bar } = o;

// 默认导出
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// 导出模块合集
export * from …; // does not set the default export
export * as name1 from …; // Draft ECMAScript® 2O21
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

- `nameN`
  - : 要导出的标识符（以便其他脚本通过 {{jsxref("Statements/import", "import")}} 语句进行导入）.

## 描述

有两种不同的导出方式，命名导出和默认导出。你能够在每一个模块中定义多个命名导出，但是只允许有一个默认导出。每种方式对应于上述的一种语法：

命名导出：

```js
// 导出事先定义的特性
export { myFunction, myVariable };

// 导出单个特性（可以导出 var，let，
//const,function,class）
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };
```

默认导出：

```js
// 导出事先定义的特性作为默认值
export { myFunction as default };

// 导出单个特性作为默认值
export default function () { ... }
export default class { .. }

// 每个导出都覆盖前一个导出
```

在导出多个值时，命名导出非常有用。在导入期间，必须使用相应对象的相同名称。

但是，可以使用任何名称导入默认导出，例如：

```js
// 文件 test.js
let k;
export default k = 12;
```

```js
// 另一个文件
import m from "./test"; // 由于 k 是默认导出，所以可以自由使用 import m 替代 import k
console.log(m); // 输出为 12
```

你也可以重命名命名导出以避免命名冲突：

```js
export { myFunction as function1, myVariable as variable };
```

### 重导出 / 聚合

为了使模块导入变得可用，在一个父模块中“导入/导出”这些不同模块也是可行的。也就是说，你可以创建单个模块，集中多个模块的多个导出。

这个可以使用“export from”语法实现：

```js
export { default as function1, function2 } from "bar.js";
```

与之形成对比的是联合使用导入和导出：

```js
import { default as function1, function2 } from "bar.js";
export { function1, function2 };
```

但这里的 `function1` 和 `function2` 在当前模块中变得不可用。

> **备注：** 尽管与 import 等效，但以下语法在语法上无效：

```js
import DefaultExport from "bar.js"; // 有效的
```

```js
export DefaultExport from "bar.js"; // 无效的
```

这里正确的做法是重命名这个导出：

```js
export { default as DefaultExport } from "bar.js";
```

## 示例

### 使用命名导出

在模块 `my-module.js` 中，可能包含以下代码：

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("From graph draw function");
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

graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

着重注意以下几点：

- 在你的 HTML 中需要包含 type="module" 的 {{htmlelement("script")}} 元素这样的脚本，以便它被识别为模块并正确处理
- 不能通过 `file://` URL 运行 JS 模块 — 这将导致 [CORS](/zh-CN/docs/Web/HTTP/CORS) 错误。你需要通过 HTTP 服务器运行。

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
let myFunction = ...; // assign something useful to myFunction
let myVariable = ...; // assign something useful to myVariable
export {myFunction, myVariable};
```

```js
// childModule2.js 中
let myClass = ...; // assign something useful to myClass
export myClass;
```

```js
// parentModule.js 中
// 仅仅聚合 childModule1 和 childModule2 中的导出
// 以重新导出他们
export { myFunction, myVariable } from "childModule1.js";
export { myClass } from "childModule2.js";
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
- [JavaScript modules](/zh-CN/docs/Web/JavaScript/Guide/Modules) guide
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Hacks blog post by Lin Clark
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
