---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

静态 **`import`** 声明用于导入由另一个模块导出的只读动态（live）{{Glossary("binding", "绑定")}}。导入的绑定被称为*动态绑定*，因为它们会由导出绑定的模块更新，但导入模块不能重新赋值。

要在源文件中使用 `import` 声明，该文件必须被运行时解释为[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)。在 HTML 中，这可以通过在 {{HTMLElement("script")}} 标签中添加 `type="module"` 来实现。模块会自动以[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)解释。

此外，还有一个类似函数的动态 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)，它不需要依赖 `type="module"` 的 script 标签。

## 语法

```js-nolint
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : 引用模块默认导出的名称。必须是有效的 JavaScript 标识符。
- `module-name`
  - : 要导入的模块。访问修饰符与主机相关。其通常是包含目标模块的 `.js` 文件的相对或绝对路径名。在 Node 中，通常在引用 `node_modules` 中的包时使用不添加扩展名的导入。某些特定的打包工具可能允许不添加扩展名的导入模块方式，请检查你的环境以确定导入方式。模块名只允许单引号和双引号的字符串。
- `module-name`
  - : 要导入的模块。模块的路径或名称是由运行环境决定的。这通常是指向包含模块的 `.js` 文件的相对或绝对路径。在 Node 环境中，没有扩展名的导入通常指向 `node_modules` 中的包。某些打包工具可能允许导入没有扩展名的文件；请检查你的环境。只允许使用单引号和双引号的字符串。
- `name`
  - : 模块对象的名称，将用作引用导入时的命名空间。必须是一个有效的 JavaScript 标识符。
- `exportN`
  - : 要导入的导出名称。名称可以是标识符或字符串字面量，这取决于 `module-name` 声明导出的是什么。如果它是一个字符串字面量，那么它必须被别名化为一个有效的标识符。
- `aliasN`
  - : 将引用指定的导入的名称。必须是有效的 JavaScript 标识符。

## 描述

`import` 声明只能出现在模块中，并且只能在顶级作用域中（即不能在块、函数等内部）。如果在非模块上下文中遇到 `import` 声明（例如，没有 `type="module"` 的 `<script>` 标签、`eval`、`new Function`，这些都有“脚本”或“函数体”作为解析目标），则会抛出 `SyntaxError`。要在非模块上下文中加载模块，请改用[动态导入](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)语法。

所有导入的绑定不能与任何其他声明在同一个作用域中，包括 {{jsxref("Statements/let", "let")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/class", "class")}}、{{jsxref("Statements/function", "function")}}、{{jsxref("Statements/var", "var")}}，以及 `import` 声明。

`import` 声明在设计上是语法严格的（例如，只有字符串字面量说明符，只允许在顶级作用域，所有绑定必须是标识符），这允许模块在被求值之前进行静态分析和链接。这是使模块是天然异步的关键，支持了像[顶层 await](/zh-CN/docs/Web/JavaScript/Guide/Modules#顶层_await) 这样的特性。

### 导入声明的形式

`import` 声明有四种形式：

- [具名导入](#具名导入)：`import { export1, export2 } from "module-name";`
- [默认导入](#默认导入)：`import defaultExport from "module-name";`
- [命名空间导入](#命名空间导入)：`import * as name from "module-name";`
- [副作用导入](#仅为了其副作用而导入模块)：`import "module-name";`

下面是阐明语法的示例。

#### 具名导入

给定一个名为 `myExport` 的值，该值已经通过隐式方式 `export * from "another.js"` 从模块 `my-module` 导出，或者显式地使用 {{jsxref("Statements/export", "export")}} 语句导出，这将把 `myExport` 插入到当前作用域中。

```js
import { myExport } from "/modules/my-module.js";
```

你可以从同一个模块导入多个名称。

```js
import { foo, bar } from "/modules/my-module.js";
```

你可以在导入时重命名导出。例如，这会将 `shortName` 插入当前作用域。

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

模块还可能以字符串字面量的形式导出一个成员，如果该字符串不是一个有效的标识符，那么你必须对其进行别名化，以便在当前模块中使用它。

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` 并不等同于 `import defaultExport from "mod"` 然后从 `defaultExport` 中解构出 `x` 和 `y`。具名导入和默认导入是 JavaScript 模块中不同的语法。

#### 默认导入

默认导出需要使用相应的默认导入语法来导入。直接导入默认导出的最简单的版本：

```js
import myDefault from "/modules/my-module.js";
```

由于默认导出没有明确指定名称，因此你可以为标识符指定任何你喜欢的名称。

也可以在使用命名空间导入或具名导入时指定默认导入。在这种情况下，必须首先声明默认导入。例如：

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default 和 myDefault 指向相同的绑定
```

或者

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

导入一个名为 `default` 的名称与默认导入效果相同。必须对其进行别名化，因为 `default` 是保留字。

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### 命名空间导入

以下代码将 `myModule` 插入当前作用域，其中包含来自 `/modules/my-module.js` 模块的所有导出。

```js
import * as myModule from "/modules/my-module.js";
```

在这里，`myModule` 表示一个*命名空间*对象，其中包含来自 `/modules/my-module.js` 模块的所有导出。例如，如果上面的模块导入了一个导出 `doAllTheAmazingThings()`，你可以像这样调用它：

```js
myModule.doAllTheAmazingThings();
```

`myModule` 是一个[密封](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)的对象，其原型为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)。它提供了一个名为 `default` 的键，用于访问默认导出。有关更多信息，请参考[模块命名空间对象](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#模块命名空间对象)。

> [!NOTE]
> JavaScript 没有像 `import * from "module-name"` 这样的通配符导入，因为它会导致名称冲突的可能性很高。

#### 仅为了其副作用而导入模块

导入整个模块只是为了产生副作用，而不导入任何内容。这会运行模块的全局代码，但实际上不会导入任何值。

```js
import "/modules/my-module.js";
```

这经常用于 [polyfill](/zh-CN/docs/Glossary/Polyfill)，它会修改全局变量。

### 提升

导入的声明会被[提升](/zh-CN/docs/Glossary/Hoisting)。在这种情况下，这意味着导入引入的标识符在整个模块范围内可用，并且它们的副作用是在模块其余代码运行之前产生的。

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings 在下一行导入

import * as myModule from "/modules/my-module.js";
```

## 示例

### 标准导入

在这个示例中，我们创建一个可重用的模块，它导出了一个函数，用于获取给定范围内的所有质数。

```js
// getPrimes.js
/**
 * 返回一个小于 `max` 的质数列表。
 */
export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}
```

```js
import { getPrimes } from "/modules/getPrimes.js";

console.log(getPrimes(10)); // [2, 3, 5, 7]
```

### 导入的值只能由导出者修改

被导入的标识符是一个*动态绑定*，因为它可能由导出它的模块重新赋值。但是，导入它的模块不能重新赋值。然而，任何拥有导出对象的模块都可修改该对象，并会影响到所有导入该值的模块。

你也可以通过[模块命名空间对象](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#模块命名空间对象)观察到新的值。

```js
// my-module.js
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);
```

```js
// main.js
import { myValue } from "/modules/my-module.js";
import * as myModule from "/modules/my-module.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2；my-module 更新了它的值
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // 导入模块只能读取该值但不能重新对它赋值。
}, 1000);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/export", "export")}}
- [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta)
- [预览 ES6 模块以及 ES2015、ES2016 和更多内容](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)，载于 blogs.windows.com (2016)
- [ES6 深入浅出：模块](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)，载于 hacks.mozilla.org (2015)
- [深入挖掘 ES 模块](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)，载于 hacks.mozilla.org (2018)
- [探索 JS，第 16 章：模块](https://exploringjs.com/es6/ch_modules.html)，由 Dr. Axel Rauschmayer 撰写
- [Export 和 Import](https://javascript.info/import-export)，载于 javascript.info
