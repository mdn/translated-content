---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

{{jsSidebar("Statements")}}

静态的 **`import`** 语句用于导入由另一个模块导出的绑定。无论是否声明了 {{jsxref("Strict_mode","strict mode")}}，导入的模块都运行在严格模式下。在浏览器中，`import` 语句只能在声明了 `type="module"` 的 `script` 的标签中使用。

此外，还有一个类似函数的动态 `import()`，它不需要依赖 `type="module"` 的 script 标签。

在 [script](/zh-CN/docs/Web/HTML/Element/script) 标签中使用 `nomodule` 属性，可以确保向后兼容。

在您希望按照一定的条件或者按需加载模块的时候，动态 `import()` 是非常有用的。而静态型的 `import` 是初始化加载依赖项的最优选择，使用静态 `import` 更容易从代码静态分析工具和 [tree shaking](/zh-CN/docs/Glossary/Tree_shaking) 中受益。

语法

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");//这是一个处于第三阶段的提案。
```

- `defaultExport`
  - : 导入模块的默认导出接口的引用名。
- `module-name`
  - : 要导入的模块。访问修饰符与主机相关。其通常是包含目标模块的 `.js` 文件的相对或绝对路径名。在 Node 中，通常在引用 `node_modules` 中的包时使用不添加扩展名的导入。某些特定的打包工具可能允许不添加扩展名的导入模块方式，请检查你的环境以确定导入方式。模块名只允许单引号和双引号的字符串。
- `name`
  - : 导入模块对象整体的别名，在引用导入模块时，它将作为一个命名空间来使用。
- `export, exportN`
  - : 被导入模块的导出接口的名称。
- `alias, aliasN`
  - : 将引用指定的导入的名称。

## 描述

`name` 参数是“导入模块对象”的名称，它将用一种名称空间来引用导入模块的接口。export 参数指定单个的命名导出，而 `import * as name` 语法导入所有导出接口，即导入模块整体。以下示例阐明该语法。

### 导入整个模块的内容

这将`myModule`插入当前作用域，其中包含来自位于`/modules/my-module.js`文件中导出的所有接口。

```js
import * as myModule from "/modules/my-module.js";
```

在这里，访问导出接口意味着使用模块名称（在本例为“myModule”）作为命名空间。例如，如果上面导入的模块包含一个接口 `doAllTheAmazingThings()`，你可以这样调用：

```js
myModule.doAllTheAmazingThings();
```

### 导入单个接口

给定一个名为 `myExport` 的对象或值，它已经从模块 `my-module` 导出（因为整个模块被导出）或显式地导出（使用 {{jsxref("Statements/export", "export")}} 语句），将 `myExport` 插入当前作用域。

```js
import { myExport } from "/modules/my-module.js";
```

### 导入多个接口

这将 `foo` 和 `bar` 插入当前作用域。

```js
import { foo, bar } from "/modules/my-module.js";
```

### 导入带有别名的接口

你可以在导入时重命名接口。例如，将 `shortName` 插入当前作用域。

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

### 导入时重命名多个接口

使用别名导入模块的多个接口。

```js
import {
  reallyReallyLongModuleMemberName as shortName,
  anotherLongModuleName as short,
} from "/modules/my-module.js";
```

### 仅为副作用而导入一个模块

整个模块仅为副作用（中性词，无贬义含义）而导入，而不导入模块中的任何内容（接口）。这将运行模块中的全局代码，但实际上不导入任何值。

```js
import "/modules/my-module.js";
```

### 导入默认值

引入模块可能有一个 `default` {{jsxref("Statements/export", "export")}}（无论它是对象，函数，类等）可用。然后可以使用 `import` 语句来导入这样的默认接口。

最简单的用法是直接导入默认值：

```js
import myDefault from "/modules/my-module.js";
```

也可以同时将 `default` 语法与上述用法（命名空间导入或命名导入）一起使用。在这种情况下，`default` 导入必须首先声明。例如：

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule used as a namespace
```

或者

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
// specific, named imports
```

当用[动态导入](#动态导入)的方式导入默认导出时，其工作方式有所不同。你需要从返回的对象中解构并重命名 "default" 键。

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

### 动态 import

标准用法的 import 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译（无法做到按需编译，降低首页加载速度）。有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入。下面的是你可能会需要动态导入的场景：

- 当静态导入的模块很明显的降低了代码的加载速度且被使用的可能性很低，或者并不需要马上使用它。
- 当静态导入的模块很明显的占用了大量系统内存且被使用的可能性很低。
- 当被导入的模块，在加载时并不存在，需要异步获取。
- 当导入模块的说明符，需要动态构建。（静态导入只能使用静态说明符）
- 当被导入的模块有副作用（这里说的副作用，可以理解为模块中会直接运行的代码），这些副作用只有在触发了某些条件才被需要时。（原则上来说，模块不能有副作用，但是很多时候，你无法控制你所依赖的模块的内容）

请不要滥用动态导入（只有在必要情况下采用）。静态框架能更好的初始化依赖，而且更有利于静态分析工具和 [tree shaking](/zh-CN/docs/Glossary/Tree_shaking) 发挥作用。

关键字 import 可以像调用函数一样来动态的导入模块。以这种方式调用，将返回一个 `promise`。

```js
import("/modules/my-module.js").then((module) => {
  // Do something with the module.
});
```

这种使用方式也支持 `await` 关键字。

```js
let module = await import("/modules/my-module.js");
```

## 示例

### 标准导入

下面的代码将会演示如何从辅助模块导入以协助处理 AJAX JSON 请求。

#### 模块：file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}
```

#### 主程序：main.js

```js
import { getUsefulContents } from "/modules/file.js";

getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});
```

### 动态导入

此示例展示了如何基于用户操作去加载功能模块到页面上，在例子中通过点击按钮，然后会调用模块内的函数。当然这不是能实现这个功能的唯一方式，`import()` 函数也可以支持 `await`。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{JSxRef("Statements/export", "export")}}
- [`import.meta`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta)
- Limin Zhu, Brian Terlson and Microsoft Edge Team: [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- Hacks blog post by Jason Orendorff: [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- Hacks blog post by Lin Clark: [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Axel Rauschmayer's book: ["Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)
- The Modern JavaScript Tutorial(javascript.info): [Export and Import](https://javascript.info/import-export)
