---
title: JavaScript 模块
slug: Web/JavaScript/Guide/Modules
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

这篇指南会给你入门 JavaScript 模块的全部信息。

## 模块化的背景

JavaScript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 JavaScript 脚本的复杂程序，还有一些被用在其他环境（例如 [Node.js](/zh-CN/docs/Glossary/Node.js)）。

因此，近年来，有必要开始考虑提供一种**将 JavaScript 程序拆分为可按需导入的单独模块**的机制。Node.js 已经提供这个能力很长时间了，还有很多的 JavaScript 库和框架已经开始了模块的使用（例如，[CommonJS](https://en.wikipedia.org/wiki/CommonJS) 和基于 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) 的其他模块系统 如 [RequireJS](https://requirejs.org/)，以及最新的 [Webpack](https://webpack.github.io/) 和 [Babel](https://babeljs.io/)）。

好消息是，最新的浏览器开始原生支持模块功能了，这是本文要重点讲述的。这会是一个好事情 —- 浏览器能够最优化加载模块，使它比使用库更有效率：使用库通常需要做额外的客户端处理。

## 浏览器兼容性

{{Compat}}

## 介绍一个例子

为了演示模块的使用，我们创建了[一系列简单的示例](https://github.com/mdn/js-examples/tree/main/module-examples) ，你可以在 GitHub 上找到。这个例子演示了一个简单的模块的集合用来在 web 页面上创建了一个 {{htmlelement("canvas")}} 标签，在 canvas 上绘制 (并记录有关的信息) 不同形状。

这的确有点简单，但是保持足够简单能够清晰地演示模块。

> **备注：** 如果你想去下载这个例子在本地运行，你需要通过本地 web 服务器去运行。

## 基本的示例文件的结构

在我们的第一个例子（参见 [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)）文件结构如下：

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> **备注：** 在这个指南的全部示例项目的文件结构是基本相同的；需要熟悉上面的内容

modules 目录下的两个模块的描述如下：

- `canvas.js` — 包含与设置画布相关的功能：

  - `create()` — 在指定 ID 的包装器 {{htmlelement("div")}} 内创建指定 `width` 和 `height` 的画布，该 ID 本身附加在指定的父元素内。返回包含画布的 2D 上下文和包装器 ID 的对象。
  - `createReportList()` — 创建一个附加在指定包装器元素内的无序列表，该列表可用于将报告数据输出到。返回列表的 ID。

- `square.js` — 包含：

  - `name` — 包含字符串 'square' 的常量。
  - `draw()` — 在指定画布上绘制一个正方形，具有指定的大小，位置和颜色。返回包含正方形大小，位置和颜色的对象。
  - `reportArea()` — 在给定长度的情况下，将正方形区域写入特定报告列表。
  - `reportPerimeter()` — 在给定长度的情况下，将正方形的周长写入特定的报告列表。

> **备注：** 在原生 JavaScript 模块中，扩展名 `.mjs` 非常重要，因为使用 MIME-type 为 `javascript/esm` 来导入文件（其他的 JavaScript 兼容 MIME-type 像 `application/javascript` 也可以），它避免了严格的 MIME 类型检查错误，像 "The server responded with a non-JavaScript MIME type"。除此之外，`.mjs` 的扩展名很明了（比如这个就是一个模块，而不是一个传统 JavaScript 文件），还能够和其他工具互相适用。看这个 [Google's note for further details](https://v8.dev/features/modules#mjs)。

## `.mjs` 与 `.js`

纵观此文，我们使用 `.js` 扩展名的模块文件，但在其他一些文章中，你可能会看到 `.mjs` 扩展名的使用。[V8 推荐了这样的做法](https://v8.dev/features/modules#mjs)，比如有下列理由：

- 比较清晰，这可以指出哪些文件是模块，哪些是常规的 JavaScript。
- 这能保证你的模块可以被运行时环境和构建工具识别，比如 [Node.js](https://nodejs.org/api/esm.html#esm_enabling) 和 [Babel](https://babeljs.io/docs/en/options#sourcetype)。

但是我们决定继续使用 `.js` 扩展名，未来可能会更改。为了使模块可以在浏览器中正常地工作，你需要确保你的服务器能够正常地处理 `Content-Type` 头，其应该包含 JavaScript 的 MIME 类型 `text/javascript`。如果没有这么做，你可能会得到 一个严格 MIME 类型检查错误：“The server responded with a non-JavaScript MIME type（服务器返回了非 JavaScript MIME 类型）”，并且浏览器会拒绝执行相应的 JavaScript 代码。多数服务器可以正确地处理 `.js` 文件的类型，但是 `.mjs` 还不行。已经可以正常响应 `.mjs` 的服务器有 [GitHub 页面](https://pages.github.com/) 和 Node.js 的 [`http-server`](https://github.com/http-party/http-server#readme)。

如果你已经在使用相应的环境了，那么一切正常。或者如果你还没有，但你知道你在做什么（比如你可以配置服务器以为 `.mjs` 设置正确的 `Content-Type`）。但如果你不能控制提供服务，或者用于公开文件发布的服务器，这可能会导致混乱。

为了学习和保证代码的可移植的目的，我们建议使用 `.js`。

如果你认为使用 `.mjs` 仅用于模块带来的清晰性非常重要，但不想引入上面描述的相应问题，你可以仅在开发过程中使用 `.mjs`，而在构建过程中将其转换为 `.js`。

另注意：

- 一些工具不支持 `.mjs`，比如 [TypeScript](https://www.typescriptlang.org/)。
- `<script type="module">` 属性用于指示引入的模块，你会在下面看到。

## 导出模块的功能

为了获得模块的功能要做的第一件事是把它们导出来。使用 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 语句来完成。

最简单的方法是把它（指上面的 export 语句）放到你想要导出的项前面，比如：

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```

你能够导出函数，`var`，`let`，`const`, 和等会会看到的类。export 要放在最外层；比如你不能够在函数内使用 `export`。

一个更方便的方法导出所有你想要导出的模块的方法是在模块文件的末尾使用一个 export 语句，语句是用花括号括起来的用逗号分割的列表。比如：

```js
export { name, draw, reportArea, reportPerimeter };
```

## 导入功能到你的脚本

你想在模块外面使用一些功能，那你就需要导入他们才能使用。最简单的就像下面这样的：

```plain
import { name, draw, reportArea, reportPerimeter } from '/js-examples/modules/basic-modules/modules/square.js';
```

使用 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 语句，然后你被花括号包围的用逗号分隔的你想导入的功能列表，然后是关键字 from，然后是模块文件的路径。模块文件的路径是相对于站点根目录的相对路径，对于我们的 `basic-modules` 应该是 `/js-examples/modules/basic-modules`。

当然，我们写的路径有一点不同——我们使用点语法意味“当前路径”，跟随着包含我们想要找的文件的路径。这比每次都要写下整个相对路径要好得多，因为它更短，使得 URL 可移植——如果在站点层中你把它移动到不同的路径下面仍然能够工作（修订版 1889482）。

那么看看例子吧：

```plain
/js/examples/modules/basic-modules/modules/square.js
```

变成了

```plain
./modules/square.js
```

你可以在 [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js) 中看到这些。

> **备注：** 在一些模块系统中你可以忽略文件扩展名（比如 `'/model/squre'`）。这在原生 JavaScript 模块系统中不工作。~~此外，记住你需要包含最前面的正斜杠。~~ （修订版 1889482）

因为你导入了这些功能到你的脚本文件，你可以像定义在相同的文件中的一样去使用它。下面展示的是在 `main.js` 中的 import 语句下面的内容。

```js
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

## 应用模块到你的 HTML

现在我们只需要将 main.js 模块应用到我们的 HTML 页面。这与我们将常规脚本应用于页面的方式非常相似，但有一些显着的差异。

首先，你需要把 `type="module"` 放到 {{htmlelement("script")}} 标签中，来声明这个脚本是一个模块：

```plain
<script type="module" src="main.js"></script>
```

你导入模块功能的脚本基本是作为顶级模块。如果省略它，Firefox 就会给出错误“SyntaxError: import declarations may only appear at top level of a module。

你只能在模块内部使用 `import` 和`export` 语句；不是普通脚本文件。

> **备注：** 你还可以将模块导入内部脚本，只要包含 `type="module"`，例如 `<script type="module"> //include script here </script>`。

## 其他模块与标准脚本的不同

- 你需要注意本地测试——如果你通过本地加载 HTML 文件（比如一个 `file://` 路径的文件），你将会遇到 CORS 错误，因为 JavaScript 模块安全性需要。你需要通过一个服务器来测试。
- 另请注意，你可能会从模块内部定义的脚本部分获得与标准脚本中不同的行为。这是因为模块自动使用严格模式。
- 加载一个模块脚本时不需要使用 `defer` 属性 (see [`<script>` attributes](/zh-CN/docs/Web/HTML/Element/script#Attributes)) 模块会自动延迟加载。
- 最后一个但不是不重要，你需要明白模块功能导入到单独的脚本文件的范围——他们无法在全局获得。因此，你只能在导入这些功能的脚本文件中使用他们，你也无法通过 JavaScript console 中获取到他们，比如，在 DevTools 中你仍然能够获取到语法错误，但是你可能无法像你想的那样使用一些 debug 技术。

## 默认导出 versus 命名导出

到目前为止我们导出的功能都是由 **named exports** 组成 —- 每个项目（无论是函数，常量等）在导出时都由其名称引用，并且该名称也用于在导入时引用它。

还有一种导出类型叫做 **default export** —- 这样可以很容易地使模块提供默认功能，并且还可以帮助 JavaScript 模块与现有的 CommonJS 和 AMD 模块系统进行互操作（正如 [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) by Jason Orendorff 的模块中所解释的那样；搜索“默认导出”）。

看个例子来解释它如何工作。在我们的基本模块 `square.js` 中，您可以找到一个名为 `randomSquare()` 的函数，它创建一个具有随机颜色，大小和位置的正方形。我们想作为默认导出，所以在文件的底部我们这样写：

```js
export default randomSquare;
```

注意，不要大括号。

我们可以把 `export default` 放到函数前面，定义它为一个匿名函数，像这样：

```js
export default function(ctx) {
  ...
}
```

在我们的 `main.js` 文件中，我们使用以下行导入默认函数：

```js
import randomSquare from "./modules/square.js";
```

同样，没有大括号，因为每个模块只允许有一个默认导出，我们知道 `randomSquare` 就是需要的那个。上面的那一行相当于下面的缩写：

```js
import { default as randomSquare } from "./modules/square.js";
```

> **备注：** 重命名导出项的 as 语法在下面的 [重命名导出与导入](#重命名导出与导入) 部分中进行了说明。

## 避免命名冲突

到目前为止，我们的 canvas 图形绘制模块看起来工作的很好。但是如果我们添加一个绘制其他形状的比如圆形或者矩形的模块会发生什么？这些形状可能会有相关的函数比如 `draw()`、`reportArea()`，等等；如果我们用相同的名字导入不同的函数到顶级模块文件中，我们会收到冲突和错误。

幸运的是，有很多方法来避免。我们将会在下一个节看到。

## 重命名导出与导入

在你的 `import` 和 `export` 语句的大括号中，可以使用 `as` 关键字跟一个新的名字，来改变你在顶级模块中将要使用的功能的标识名字。因此，例如，以下两者都会做同样的工作，尽管方式略有不同：

```js
// inside module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// inside main.js
import { newFunctionName, anotherNewFunctionName } from "/modules/module.js";
```

```js
// inside module.js
export { function1, function2 };

// inside main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "/modules/module.js";
```

让我们看一个真实的例子。在我们的 [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) 目录中，你将看到与上一个示例中相同的模块系统，除了我们添加了 `circle.js` 和 `triangle.js` 模块以绘制和报告圆和三角形。

在每个模块中，我们都有 `export` 相同名称的功能，因此每个模块底部都有相同的导出语句：

```js
export { name, draw, reportArea, reportPerimeter };
```

将它们导入 `main.js` 时，如果我们尝试使用

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

浏览器会抛出一个错误，例如“SyntaxError: redeclaration of import name”（Firefox）。

相反，我们需要重命名导入，使它们是唯一的：

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

请注意，您可以在模块文件中解决问题，例如

```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// in main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "/js-examples/modules/renaming/modules/square.js";
```

它也会起作用。你使用什么样的风格取决于你，但是单独保留模块代码并在导入中进行更改可能更有意义。当您从没有任何控制权的第三方模块导入时，这尤其有意义。

## 创建模块对象

上面的方法工作的挺好，但是有一点点混乱、亢长。一个更好的解决方是，导入每一个模块功能到一个模块功能对象上。可以使用以下语法形式：

```js
import * as Module from "/modules/module.js";
```

这将获取 `module.js` 中所有可用的导出，并使它们可以作为对象模块的成员使用，从而有效地为其提供自己的命名空间。例如：

```js
Module.function1();
Module.function2();
```

再次，让我们看一个真实的例子。如果你转到我们的 [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) 目录，将再次看到相同的示例，但利用上述的新语法进行重写。在模块中，导出都是以下简单形式：

```js
export { name, draw, reportArea, reportPerimeter };
```

另一方面，导入看起来像这样：

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "/./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

在每种情况下，您现在可以访问指定对象名称下面的模块导入。

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

因此，您现在可以像以前一样编写代码（只要您在需要时包含对象名称），并且导入更加整洁。

## 模块与类（class）

正如我们之前提到的那样，您还可以导出和导入类；这是避免代码冲突的另一种选择，如果您已经以面向对象的方式编写了模块代码，那么它尤其有用。

你可以在我们的 [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) 目录中看到使用 ES 类重写的形状绘制模块的示例。例如，[`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) 文件现在包含单个类中的所有功能：

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
```

然后我们导出：

```js
export { Square };
```

在 [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) 中，我们像这样导入它：

```js
import { Square } from "./modules/square.js";
```

然后使用该类绘制我们的方块：

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## 合并模块

有时你会想要将模块聚合在一起。您可能有多个级别的依赖项，您希望简化事物，将多个子模块组合到一个父模块中。这可以使用父模块中以下表单的导出语法：

```js
export * from "x.js";
export { name } from "x.js";
```

> **备注：** 这实际上是导入后跟导出的简写，即“我导入模块 `x.js`，然后重新导出部分或全部导出”。

有关示例，请参阅我们的 [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)。在这个例子中（基于我们之前的类示例），我们有一个名为 `shapes.js` 的额外模块，它将 `circle.js`，`square.js` 和 `riangle.mjs` 中的所有功能聚合在一起。我们还将子模块移动到名为 shapes 的 modules 目录中的子目录中。所以模块结构现在是这样的：

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

在每个子模块中，输出具有相同的形式，例如，

```js
export { Square };
```

接下来是聚合部分。在 [`shapes.js`](https://github.com/mdn/js-examples/blob/master/module-examples/module-aggregation/modules/shapes.js) 里面，我们包括以下几行：

```js
export { Square } from "/js-examples/modules/module-aggregation/modules/shapes/square.js";
export { Triangle } from "/js-examples/modules/module-aggregation/modules/shapes/triangle.js";
export { Circle } from "/js-examples/modules/module-aggregation/modules/shapes/circle.js";
```

它们从各个子模块中获取导出，并有效地从 `shapes.js` 模块中获取它们。

> **备注：** 即使 `shapes.js` 文件位于 modules 目录中，我们仍然需要相对于模块根目录编写这些 URL，因此需要 `/modules/`。这是使用 JavaScript 模块时混淆的常见原因。

> **备注：** `shapes.js` 中引用的导出基本上通过文件重定向，并且实际上并不存在，因此您将无法在同一文件中编写任何有用的相关代码。

所以现在在 `main.js` 文件中，我们可以通过替换来访问所有三个模块类

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

使用以下单行：

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## 动态加载模块

浏览器中可用的 JavaScript 模块功能的最新部分是动态模块加载。这允许您仅在需要时动态加载模块，而不必预先加载所有模块。这有一些明显的性能优势；让我们继续阅读，看看它是如何工作的。

这个新功能允许您将 `import()` 作为函数调用，将其作为参数传递给模块的路径。它返回一个 [promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，它用一个模块对象来实现（参见[创建模块对象](#创建模块对象)），让你可以访问该对象的导出，例如

```js
import("/modules/mymodule.js").then((module) => {
  // Do something with the module.
});
```

我们来看一个例子。在 [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) 目录中，我们有另一个基于类示例的示例。但是这次我们在示例加载时没有在画布上绘制任何东西。相反，我们包括三个按钮——“圆形”、“方形”和“三角形”——按下时，动态加载所需的模块，然后使用它来绘制相关的形状。

在这个例子中，我们只对 [index.html](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) 和 [main.js](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.js) 文件进行了更改——模块导出保持与以前相同。

在`main.js`中，我们使用[`document.querySelector()`](/zh-CN/docs/Web/API/Document/querySelector)调用获取了对每个按钮的引用，例如：

```js
let squareBtn = document.querySelector(".square");
```

然后，我们为每个按钮附加一个事件监听器，以便在按下时，相关模块被动态加载并用于绘制形状：

```js
squareBtn.addEventListener("click", () => {
  import("/js-examples/modules/dynamic-module-imports/modules/square.js").then(
    (Module) => {
      let square1 = new Module.Square(
        myCanvas.ctx,
        myCanvas.listId,
        50,
        50,
        100,
        "blue",
      );
      square1.draw();
      square1.reportArea();
      square1.reportPerimeter();
    },
  );
});
```

请注意，由于 promise 履行会返回一个模块对象，因此该类成为对象的子特征，因此我们现在需要使用 `Module` 访问构造函数。在它之前，例如 `Module.Square( ... )`。

## 故障排除

如果为了你的模块有问题，这里有一些提示有可能帮助到你。如果你发现更多的内容欢迎添加进来！

- 在前面已经提到了，在这里再重申一次： `.mjs` 后缀的文件需要以 MIME-type 为 `javascript/esm` 来加载 (或者其他的 JavaScript 兼容的 MIME-type，比如 `application/javascript`), 否则，你会一个严格的 MIME 类型检查错误，像是这样的 "The server responded with a non-JavaScript MIME type".
- 如果你尝试用本地文件加载 HTML 文件 (i.e. with a `file://` URL)，由于 JavaScript 模块的安全性要求，你会遇到 CORS 错误。你需要通过服务器来做你的测试。GitHub pages is ideal as it also serves `.mjs` files with the correct MIME type.
- 因为 `.mjs` 是一个相当新的文件后缀，一些操作系统可能无法识别，或者尝试把它替换成别的。比如，我们发现 macOS 悄悄地在我们的 `.mjs` 后缀的文件后面添加上 `.js` 然后自动隐藏这个后缀。所以我们的文件实际上都是 `x.mjs.js`。当我们关闭自动隐藏文件后缀名，让它去接受认可 `.mjs`。问题解决。

## 参见

- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules#mjs), by Addy Osmani and Mathias Bynens
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Hacks blog post by Lin Clark
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- Axel Rauschmayer's book [Exploring JS: Modules](http://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
