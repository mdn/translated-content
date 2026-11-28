---
title: 理解模块图
slug: Web/JavaScript/Guide/Modules/Module_graph
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

通过 `import` 和 `export` 声明，JavaScript 模块形成一个复杂的依赖图。本指南讨论与模块加载方式相关的各种概念，以及这如何影响你组织和编写代码的方式。

## 什么是模块图？

在 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南中，我们已经展示了一个模块图的基本示例：

![展示模块如何附加到网页的示意图](/zh-CN/docs/Web/JavaScript/Guide/Modules/module-loading.svg)

图由节点和连接节点的边组成。在这个模块图中，节点就是被导入的不同 JavaScript 文件（这里的模块都是 JavaScript，但 JSON、CSS、WebAssembly 等也都是有效的）。每当你在 `模块 A` 中写 `import ... from "模块 B"`（或 `export ... from "模块 B"`），就会创建一条从 `模块 A` 指向 `模块 B` 的有向边。HTML 文件本身不属于模块图，但它定义了所有的*入口点*。

每个模块图至少需要一个入口点，运行时从这里开始发现依赖。在上面的示例中有多个入口点：每个 `<script>` 元素都开启一个。在 [Node.js](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)（或其他服务端运行时）中，入口点就是你启动 `node` 时指定的文件。在 worker 中，则是传给 {{domxref("Worker/Worker", "Worker()")}} 构造函数的文件。来自不同入口点的图不一定互不相交：如果它们导入了同一个模块（或者入口点本身已被导入），就可以合并成一个更大的图。

## 从模块源代码到执行

下面通过一个示例来说明模块如何加载和求值。我们假定它在 Node 中用 `node main.js` 运行（这里没有任何 Node 特有的东西，只是在 Node 中启动模块更方便）。

```js
// -- main.js --
import { greet } from "./formatters.js";
import config from "./config.js";

greet("Josh", config.locale);
```

```js
// -- formatters.js --
import config from "./config.js";
import { log } from "./logger.js";

export function greet(name, localeName = config.defaultLocale) {
  const locale = new Intl.Locale(localeName);
  if (locale.language === "en") {
    log(`Hello, ${name}!`);
  } else if (locale.language === "fr") {
    log(`Bonjour, ${name} !`);
  } else {
    throw new Error(`抱歉，我不会说 ${locale}。`);
  }
}
```

```js
// -- config.js --
export default {
  locale: "en-US",
  defaultLocale: "en-US",
};
```

```js
// -- logger.js --
export function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}
```

### 加载模块图

模块加载需要宿主（Node）和引擎（V8）密切协作。这一过程是递归进行的，在每一层递归中，宿主都会收到一个*模块请求*（包含模块说明符以及导入属性，如果有的话），然后：

- 宿主加载相应模块的源代码（例如把它映射到文件系统中的某个位置并读取该文件内容）。
  - 这一步可以进一步拆分为两步：[说明符解析](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#web_上的模块说明符)和实际发送请求（在浏览器中可能是 HTTP 请求，在 Node 中则是文件系统访问）。
  - 入口点略有不同：通常没有说明符解析。例如，命令行参数 `main.js` 会被直接当作文件路径读取，`<script>` 元素的 `src` 属性会被直接当作 URL 读取；两者都不是模块说明符。获取过程也可能略有不同。
- 宿主把模块源代码交给引擎。引擎解析源代码，收集所有 `import` 和 `export from` 声明，这些声明会产生新的模块请求。（如果源代码不是 JavaScript，宿主可能会改为让其他解析器处理。）
- 所有这些模块请求都会交给宿主，宿主重新开始整个流程，可能并发处理多个请求。
- 如果宿主发现自己已经加载过或正在加载某个模块请求（在浏览器和 Node.js 中，模块会按解析后的 URL 和模块类型进行缓存），就不会再次获取，也不会要求引擎再次解析。它会直接提供已有的模块，必要时等待正在进行的加载完成。

在这个具体示例中：

- 宿主读取 `main.js` 文件，并要求引擎解析它。
- 引擎发现两个模块请求，分别针对 `./formatters.js` 和 `./config.js`。它把这些模块请求发给宿主。
- 宿主通过读取相应文件加载这两个模块。假设 `formatters.js` 先加载完成，因此宿主先把它的源文本交给引擎。
- 解析 `formatters.js` 时又发现一个针对 `./config.js` 的请求，以及一个新的依赖 `./logger.js`。引擎把这两个请求都发给宿主。
- 宿主发现 `./config.js` 已由 `main.js` 请求过（尽管它仍在加载），于是跳过它，开始加载 `logger.js`。
- `logger.js` 和 `config.js` 都加载完成；两者都没有进一步的请求。

完成这一步后，模块图就已经建立。所有模块都已加载并解析，但加载过程没有执行任何 JavaScript 模块主体。

![模块图](module-graph.svg)

### 链接模块

模块图成功加载完成后，宿主要求引擎*链接*入口模块。链接的主要目标是建立[模块环境](/zh-CN/docs/Glossary/Scope)，也就是各种{{glossary("binding", "绑定")}}，包括要导出的绑定。每个导入的名称都会解析到它实际被定义和导出的位置，途中可能经过多层 `export from` 声明。图中的所有模块都必须先完成链接才能求值，这样就能在任何代码开始求值之前，尽早发现导入了一个另一方并未导出的名称。这也让后续求值更简单，因为不必在每次使用导入名称时反复遍历模块图。

在链接阶段，引擎使用深度优先搜索（DFS）遍历模块图。这一过程是递归进行的，在每一层递归中，引擎访问一个模块（从入口点开始），然后：

- 如果该模块已经链接过，或者正在链接中（[循环导入](#循环导入)时会发生这种情况），引擎就不会再次处理它。否则，引擎会把该模块标记为正在链接。
- 引擎用同样的流程递归链接该模块的每个依赖。与加载不同，链接是完全同步且确定性的：依赖按它们对应的模块请求在源代码中出现的顺序访问。
- 所有依赖都访问完后，引擎建立该模块自己的环境。它为模块的每个顶层声明创建一个绑定。对于每个导入的名称（解析为模块命名空间对象的导入除外），它把该名称解析到真正声明它的模块中的绑定，然后创建一个*间接绑定*：导入模块中一个永久指向另一模块绑定的名称。解析为模块命名空间对象的导入（包括对 `export * as ns from` 导出的具名导入）则会创建用该对象初始化的本地绑定。如果某个导入名称无法解析，链接就会失败。
- 该模块被标记为已链接。（如果存在循环，则它们会一起被标记为已链接；这一点稍后再讨论。）

和普通声明一样（参见{{glossary("hoisting", "提升")}}），导出的绑定也分步骤创建和初始化——函数声明在链接期间初始化，`var` 声明初始化为 `undefined`，而 `export default`、`let`、`const` 和 `class` 声明在求值到达它们之前保持未初始化。

在我们的示例中：

- 引擎从 `main.js` 开始，沿它对 `formatters.js` 的依赖前进，然后到达 `config.js`。它把 `main.js` 和 `formatters.js` 标记为“链接中”。

  > [!NOTE]
  > 这就是遍历“深度优先”的方式：引擎先尽可能深入，直到遇到一个没有未处理请求的模块，然后再回溯。

- 对于 `config.js`，引擎为默认导出创建绑定，但暂不求值该对象字面量——求值发生在下一阶段。该绑定保持未初始化。
- 接着，它链接 `formatters.js` 的下一个依赖 `logger.js`。引擎创建 `log` 绑定并用函数对象初始化它。
- 引擎回到 `formatters.js`。它导入的 `config` 绑定指向 `config.js` 的默认导出，导入的 `log` 绑定指向 `logger.js` 中的 `log` 绑定。它自己的 `greet` 绑定用函数对象初始化。
- 最后，引擎回到 `main.js`。它的另一个依赖 `config.js` 已经链接过，因此不会再次链接。引擎把 `main.js` 的 `greet` 和 `config` 导入连接到各自对应的导出绑定。

![导入的标识符指向依赖模块中对应的导出。](module-linking.svg)

大多数情况下，导入的名称直接声明在被导入的模块中，就像这里的示例一样，因此绑定的连接路径与模块依赖图相同。但是，如果你使用 `export from`，或者导出的是你导入的标识符，链接器会沿着这些层级追踪，直到找到真正声明它的位置。

![实线箭头展示了从 a.js 经 b.js、c.js 到 d.js 的依赖链。虚线箭头把 a.js 和 b.js 中导入的 x 绑定直接连接到 d.js 中的 x 声明。](module-reexports.svg)

这里尽管导入链是 `a.js → b.js → c.js → d.js`，但这条链上的每个 `x` 绑定最终都解析到 `d.js` 中同一个 `const` 声明，而 `c.js` 没有任何模块作用域的绑定。绑定的连接直接指向 `d.js`，而模块依赖图仍然包含整条导入链。

`export * from` 声明会把另一个模块的所有名称（`default` 除外）作为当前模块的具名导出重新导出。解析导入的名称时，引擎先检查该名称是否有显式导出。如果没有，就沿着 `export * from` 声明，递归地在那些模块中解析该名称。

多个 `export * from` 声明可能使当前模块多次导出同一个名称（同样，`export * from` 永远不会与显式的具名导出冲突；后者始终优先）。如果这些声明最终解析到同一个绑定，就不存在歧义。如果它们解析到不同的绑定，该名称就有歧义，即使这些绑定恰好包含相同的值。例如：

```js
// -- first.js --
export const x = 1;
```

```js
// -- second.js --
export const x = 1;
```

```js
// -- combined.js --
export * from "./first.js";
export * from "./second.js";
// 这个模块中的 "x" 应该解析到 first.js 还是 second.js？
```

仅凭星号导出不会导致错误。但是，`import { x } from "./combined.js"` 或 `export { x } from "./combined.js"` 会在链接期间导致 {{jsxref("SyntaxError")}}。命名空间导入 `import * as combined from "./combined.js"` 会成功，但命名空间对象没有 `x` 属性。

在 `combined.js` 中加入 `export { x } from "./first.js"` 可以消除歧义：显式导出优先于星号导出，与声明顺序无关。

### 求值模块

现在所有模块的环境都准备好了，终于可以求值了。宿主要求引擎求值入口模块。引擎再次使用深度优先搜索遍历模块图。目前先假定没有模块使用[顶层 `await`](#顶层_await_与异步求值)。这一过程是递归进行的，在每一层递归中，引擎访问一个模块（从入口点开始），然后：

- 如果该模块已经成功求值，就不再执行它。如果之前的求值失败，引擎会重新抛出记录的错误。如果该模块正在求值，引擎不会再次访问它的依赖，从而避免在循环中无限递归。否则，它把该模块标记为正在求值。
- 引擎用同样的流程递归求值每个依赖，顺序与它们的模块请求在源代码中出现的顺序一致。
- 访问完所有依赖后，引擎执行模块主体。变量初始化器运行，初始化链接期间准备好的绑定，其他语句按源代码顺序执行。导入的名称访问链接期间建立的绑定。在循环中，某个依赖的主体可能尚未执行，因此导入的绑定可能仍未初始化；我们[稍后](#循环导入)会讨论这一点。
- 模块主体成功执行完后，该模块被标记为已求值。在循环中，同一[强连通分量](#循环导入的错误)中的模块会在它们的主体都结束后一起被标记为已求值。

在我们的示例中：

- 引擎从 `main.js` 开始，沿它对 `formatters.js` 的依赖前进，然后到达 `config.js`。它把 `main.js` 和 `formatters.js` 标记为“求值中”。
- 对于 `config.js`，引擎求值对象字面量，并用得到的对象初始化默认导出绑定。
- 接着，它求值 `formatters.js` 的下一个依赖 `logger.js`。它的 `log` 函数已在链接期间创建，而函数体要到函数被调用时才执行，因此这里没有其他需要求值的内容。
- 引擎回到 `formatters.js`。它的 `greet` 函数同样在链接期间创建，因此这里也没有需要求值的内容。
- 最后，引擎回到 `main.js`。它的另一个依赖 `config.js` 已经求值过，因此不会再次执行。引擎调用 `greet("Josh", config.locale)`，后者调用 `log` 并打印时间戳及 `Hello, Josh!`。

把 `import` 声明移到 `greet()` 调用之后、同时保持它们的相对顺序，不会改变上述顺序：无论导入声明出现在其他语句之间的什么位置，依赖都会在导入模块的主体开始之前完成求值。

如果求值抛出未捕获的错误，错误会沿着正在求值的依赖模块传播，入口模块的求值 promise 会拒绝。已经运行的代码所产生的效果不会被撤销，错误会被保留，以便后续的求值尝试不再执行失败的模块。

使用顶层 `await` 时，模块可以挂起执行，并推迟依赖它的模块，而其他分支继续执行；我们会在[异步求值](#顶层_await_与异步求值)中介绍这一点。

## 模块流水线中的错误

模块流水线的任何环节——加载、链接和求值——都可能失败。这些错误可能会让图停留在处理到一半的状态。

### 加载错误

某个模块请求的加载错误可能由以下原因之一引起（这一步由宿主执行，因此许多原因是宿主特有的）：

- 说明符解析失败（例如它不是有效的 URL）
- 请求包含无效的导入属性
- 请求返回了错误状态，或文件系统产生了错误
- 源代码解析失败

如果某个模块请求失败，这个图的加载过程会立即停止，不再处理任何未处理的模块请求。已经在进行中的请求仍可能正常完成，并在之后被使用。

例如，假设我们在上面的图中给 `config.js` 添加一个导入：

```js
// -- config.js --
import "./non-existent.js";

export default {
  locale: "en-US",
  defaultLocale: "en-US",
};
```

1. `main.js` 开始加载 `formatters.js` 和 `config.js`。
2. `config.js` 先完成。
3. 它对 `non-existent.js` 的请求失败（在 Node.js 中，解析会抛出 `ERR_MODULE_NOT_FOUND`），而此时 `formatters.js` 仍在加载。
4. 对 `formatters.js` 的请求仍可以完成，但这个图的加载过程不再遍历它的依赖，因此本次遍历永远不会请求 `logger.js`。

这假设是一次全新加载，没有预加载或其他入口点请求这些模块；如果 `formatters.js` 更早完成，`logger.js` 可能也已经在加载了。此示例中没有任何模块被链接或求值。

![non-existent.js 失败后加载停止：main.js 和 config.js 已获取并解析，formatters.js 仍在加载，logger.js 尚未被发现或请求。](module-loading-error.svg)

重试行为取决于宿主和失败类型。浏览器特有的重试行为请参阅 [web 上的模块缓存](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#模块缓存)。与模块加载不同，{{domxref("Window/fetch", "fetch()")}} 不会仅仅因为响应带有 HTTP 错误状态就拒绝。

只有当图中的*所有*模块都完成加载后才会进行链接。因错误而部分加载的图永远不会被链接。

### 链接错误

某个导入的链接错误可能由以下原因之一引起：

- 该导入指向目标模块中未导出的绑定
- 该导入指向一个循环导出且从未真正定义的绑定（例如 `a.js` 写 `export { x } from "./b.js"`，而 `b.js` 写 `export { x } from "./a.js"`）
- 该导入指向的绑定在两个 `export * from` 声明之间存在歧义

例如，从没有加载错误的原始图出发，假设我们在 `formatters.js` 中给来自 `logger.js` 的导入加上 `missing`：

```js
// -- formatters.js --
import config from "./config.js";
import { log, missing } from "./logger.js";

// 模块的其余部分不变。
```

1. 四个模块全部完成加载，并被标记为未链接。
2. 链接从 `main.js` 开始，然后访问 `formatters.js` 及其依赖。
3. `config.js` 和 `logger.js` 链接成功。
4. 在建立 `formatters.js` 的环境时，引擎为 `config` 和 `log` 创建导入，但无法解析 `missing`，因为 `logger.js` 没有导出该名称。它抛出 {{jsxref("SyntaxError")}}。
5. 仍在链接中的 `formatters.js` 和 `main.js` 回到未链接状态。`config.js` 和 `logger.js` 保持已链接。没有任何模块主体被求值。

![所有模块都已加载。config.js 和 logger.js 已链接；formatters.js 中缺失的导入失败，formatters.js 和 main.js 从链接状态回到未链接状态。](module-linking-error.svg)

注意，链接是同步且无副作用的。宿主可以在加载之后、求值之前进行链接，甚至在失败后重试（尽管同样的 JavaScript 模块图会遇到同样的链接错误）。如果发生链接错误，这次导入不会开始求值。共享的依赖可能已经通过另一个入口点完成了求值。

### 求值错误

求值错误就是执行 JavaScript 时常见的错误：使用 `throw` 语句、进行无效的函数调用、访问未初始化的变量等。当某个模块的求值抛出异常时，也可能让模块图停留在部分求值的状态。

例如，从没有加载或链接错误的原始图出发，假设我们在 `config.js` 中添加一个顶层 `throw`：

```js
// -- config.js --
export default {
  locale: "en-US",
  defaultLocale: "en-US",
};

throw new Error("配置不可用");
```

我们还在 `main.js` 现有导入之前再加一个依赖，只是为了展示某个模块成功完成求值的情况。

1. 五个模块全部完成加载和链接。
2. 求值从 `main.js` 开始，然后访问它的第一个依赖 `extra.js`，后者成功完成求值。
3. 遍历访问 `formatters.js`，然后访问它的第一个依赖 `config.js`，后者创建配置对象，然后到达 `throw` 语句。
4. 错误通过 `formatters.js` 传播到 `main.js`。两个模块的主体都没有开始执行，因此 `greet("Josh", config.locale)` 从未被调用。
5. `config.js`、`formatters.js` 和 `main.js` 被标记为已求值，并记录了错误。`extra.js` 保持成功求值状态。遍历永远不会到达 `logger.js`，它保持已链接但未求值。

![extra.js 求值成功；config.js 抛出异常，config.js、formatters.js 和 main.js 被标记为已求值但带有错误。logger.js 仍保持已链接但未求值。](module-evaluation-error.svg)

*已求值*状态意味着求值尝试已经结束，并不一定意味着模块主体成功运行过——甚至不意味着它运行过。由于模块求值有副作用，引擎保证同一模块只会被求值一次，无论它是否遇到错误（包括其依赖出错的情况）。此后复用该模块的导入，在成功时暴露同一个模块命名空间对象，在失败时重新抛出记录的错误。命名空间对象会持续暴露实时绑定。新环境（例如新页面或 worker）可以再次加载并求值该源代码。错误发生前已经运行的代码所产生的任何效果都不会被撤销。

## 循环导入

模块依赖图会在链接和求值过程中分别用深度优先搜索（DFS）遍历一次（加载可以并发地以不确定的顺序遍历各分支，而循环对它的影响并不比普通的共享依赖更大）。这种策略对无环依赖图很有效，就像上面给出的示例。即使两个模块导入同一个模块，问题也很小——总有一个明确的“终点”（`config.js` 和 `logger.js`），可以从那里往回推进。我们只需要注意不要链接或求值同一模块两次。

然而，循环往往是不可避免的。如果模块 `a` 导入模块 `b`，而 `b` 直接或间接依赖 `a`，就产生了循环导入。例如，考虑最简单的双模块循环：

```js
// -- a.js --
import { b } from "./b.js";

export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

export const b = 1;
```

![一个模块依赖循环：a.js 导入 b.js，b.js 导入 a.js。](module-cycle.svg)

假定从不抛出任何错误（包括访问未初始化导入所导致的错误，这一点我们马上会讨论），朴素的 DFS 方法实际上仍然有效。以链接步骤为例：

- 引擎访问 `a.js` 并把它标记为正在链接。但在真正建立它的模块环境之前，必须先访问它的依赖。
- 引擎访问 `b.js` 并把它标记为正在链接。但在真正建立它的模块环境之前，必须先访问它的依赖。
- 引擎再次访问 `a.js`，发现它已经被标记为链接中。没有其他下游依赖。
- 引擎链接 `b.js`，把 `a` 指向 `a.js` 中的 `export const a`。
- 引擎以类似方式链接 `a.js`，把 `b` 指向对应声明。
- 没有上游依赖在等待 `a.js` 和 `b.js` 完成链接；整个图完成链接。

只要每个导入都能追溯到一个具体的定义，而不是循环的重新导出（例如 `a.js` 写 `export { x } from "./b.js"`，`b.js` 写 `export { x } from "./a.js"`），链接就不要求定义来自已经链接的模块。

同样，对于求值，`b.js` 先求值，因为它是 `a.js` 的依赖。它也依赖 `a.js`，但 `a.js` 已被标记为求值中，因此引擎不会返回到 `a.js`。接着 `b.js` 模块求值 `const b` 的初始化。最后，`a.js` 模块求值并初始化 `a = 2`。

如这个示例所示，循环导入并不总会失败。导入变量的值只有在该变量实际被使用时才会读取（因此允许[实时绑定](/zh-CN/docs/Web/JavaScript/Reference/Statements/import#导入的值只能由导出者修改)），并且只有当该变量在那时仍未初始化，才会抛出 [`ReferenceError`](/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init)。因此，举例来说，即使你使用了 `a` 和 `b` 的值，只要确保初始化发生在使用之前，也可以避免错误：

```js
// -- a.js --
import { b } from "./b.js";

setTimeout(() => {
  console.log(b); // 1
}, 10);

export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);

export const b = 1;
```

在这个示例中，`a` 和 `b` 都是异步使用的。因此，在模块求值时并没有实际读取 `b` 或 `a`，其余代码正常执行，两个 `export` 声明分别产生 `a` 和 `b` 的值。随后在超时之后，`a` 和 `b` 都已可用，因此两个 `console.log` 语句也正常执行。

如果你把代码改成同步使用 `a`，模块求值就会失败：

```js
// -- a.js（入口模块）--
import { b } from "./b.js";

export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

这是因为 JavaScript 求值 `a.js` 时，需要先求值 `a.js` 的依赖 `b.js`。然而 `b.js` 使用了尚未可用的 `a`。

另一方面，如果你把代码改成同步使用 `b`、但异步使用 `a`，模块求值就会成功：

```js
// -- a.js（入口模块）--
import { b } from "./b.js";

console.log(b); // 1
export const a = 2;
```

```js
// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

这是因为 `b.js` 的求值正常完成，因此求值 `a.js` 时 `b` 的值已经可用。

函数声明在循环中要稳健得多，因为它们在任何模块主体运行之前就在[链接](#链接模块)期间完成了初始化。正如{{glossary("hoisting", "提升")}}允许两个函数无论声明顺序如何都能相互调用，链接时的初始化也让同样的事情可以跨模块边界发生。

```js
// -- a.js（入口模块）--
import { isEven } from "./b.js";

export function isOdd(n) {
  return n !== 0 && isEven(n - 1);
}
```

```js
// -- b.js --
import { isOdd } from "./a.js";

console.log(isEven(5)); // false

export function isEven(n) {
  return n === 0 || isOdd(n - 1);
}
```

即使没有异步等待，`a.js` 中的 `isOdd` 绑定在链接期间、`a.js` 的主体运行之前就已用其函数对象初始化。这些模块只导出函数声明，且其函数不读取任何在模块求值期间初始化的状态，因此它们可以安全地相互调用。读取未初始化的 `let`、`const` 或 `class` 绑定仍会抛出异常，即使该绑定是某个导出函数所在模块的私有绑定。

### 循环导入的错误

当出现链接或求值错误时，问题会变得更复杂。假设我们在上面双模块循环中 `export const a = 2;` 之后加上 `throw new Error("求值失败");`。朴素的遍历会在执行 `a.js` 之前就把 `b.js` 标记为成功求值，而 `a.js` 随后抛出异常：

![朴素的遍历会在 a.js 抛出异常之前把 b.js 标记为已求值。一个红色圆圈问号对 b.js 的成功状态表示质疑。](module-cycle-error.svg)

在这个示例中，如果 `a.js` 链接或求值失败，即使 `b.js` 已经完成自己的链接和求值，我们也不希望把它标记为成功——因为它的成功取决于 `a.js`（`b.js` 的一个依赖）的成功！因此，在循环中，我们必须把所有模块一起标记为成功或失败。

我们要找的精确术语是*强连通分量*（SCC）。SCC 是一个极大的模块组，其中每个模块都能到达其他每个模块。SCC 可以由一个循环组成，也可以由共享顶点的多个循环合并而成，只要该组是极大的：

![共享 b.js 和 c.js 的两个循环构成一个强连通分量：a.js → b.js → c.js → d.js → a.js，以及 e.js → b.js → c.js → f.js → e.js。](module-connected-cycles.svg)

在图论中我们知道，任何有向图都可以看作由 SCC 构成的无环图（把 SCC 视为节点，就得到“缩合图”）。因此，如果我们像处理单个节点那样处理 SCC（把所有内容一起标记为成功或失败），最终就会得到一个无环图，而我们已经确认无环图很容易处理。

最终效果是，在上面的情况中，`b.js` 完成求值时不会被标记为已求值——它会等到 `a.js` 完成。

![b.js 在其主体结束后仍保持求值中。当 a.js 抛出异常时，两个模块都会被标记为已求值并记录错误。](module-cycle-error-correct.svg)

### 避免循环导入

通常应避免在项目中使用循环导入，因为它们会让代码更容易出错。一些常见的消除循环的技巧包括：

- 把两个模块合并为一个。
- 把共享代码移到第三个模块中。
- 把部分代码从一个模块移到另一个模块。

不过，如果库之间相互依赖，也可能出现循环导入，这更难解决。

## 顶层 await 与异步求值

模块可以在顶层、任何函数之外使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await#在顶层使用_await)。这允许模块在依赖它的模块执行之前完成异步初始化。此前我们的[求值](#求值模块)是同步的；现在我们也必须让它变成异步的，这对副作用顺序和错误处理有很多影响。

例如，假设我们修改 `config.js`，让它从服务器获取配置，服务器返回与原始示例中相同的对象：

```js
// -- config.js --
const response = await fetch("https://example.com/config.json");
if (!response.ok) {
  throw new Error(`获取配置失败：${response.status}`);
}
export default await response.json();
```

其他模块不需要改动：模块系统会自动等待 `config.js` 完成，然后再执行它们的主体以及 `main.js` 等依赖它们的模块。

此前，一个模块要么已求值，要么未求值，要么位于某个 SCC 中并等待其他模块求值。现在，模块还可以处于*进行中*状态。这一状态既包括自身异步执行正在进行的模块，也包括正在等待异步依赖的模块。因此，一个不含 `await` 表达式的模块也可能处于该状态。

引擎仍按模块请求在源代码中出现的顺序深度优先遍历依赖。但是，它不再需要先执行完一个分支才能访问另一个。对于无环图，流程如下：

- 引擎像之前一样访问模块的依赖。如果某个依赖仍在进行中，引擎记录该模块必须等待它，但继续访问其他依赖。
- 所有依赖都访问完且没有依赖处于进行中后，引擎开始执行该模块主体。含顶层 `await` 的模块会执行到 `await` 处，然后挂起，直到被等待的值敲定。它会一直处于进行中状态，直到整个主体结束，包括后续的任何 `await` 表达式。
- 依赖仍在进行中的模块也处于进行中状态，并且什么都不执行地等待，连第一个 `await` 之前的代码也不执行。这同样适用于自身没有顶层 `await` 的模块。
- 当某个模块成功完成后，引擎检查哪些等待中的导入者现在可以执行。导入者要等到它所等待的所有依赖都成功完成后才开始执行。如果多个模块同时就绪，引擎使用深度优先遍历建立的求值顺序决定先启动哪一个。

> [!NOTE]
> 当多个异步模块同时执行时（例如 `logger.js` 也包含顶层 `await`），其行为与并发执行两个 async 函数相同：每个 `await` 都会让出当前作业，允许另一个模块恢复执行。参见 [`await` 对执行过程的影响](/zh-CN/docs/Web/JavaScript/Reference/Operators/await#await_对执行过程的影响)。

在我们的示例中，引擎通过 `main.js` 和 `formatters.js` 到达 `config.js`。它启动 fetch，并让 `config.js` 在第一个 `await` 处挂起。接着它访问并求值 `logger.js`，后者不依赖配置。`formatters.js` 必须等待 `config.js`，而 `main.js` 必须同时等待 `formatters.js` 和 `config.js`。响应主体解析完毕且 `config.js` 完成后，`formatters.js` 执行，随后 `main.js` 执行并调用 `greet()`。

![当 config.js 等待其 fetch 时，config.js、formatters.js 和 main.js 处于进行中（以琥珀色显示）。logger.js 已成功求值（以绿色显示）。](module-async-evaluation.svg)

### 顶层 await 的污染效应

因此，顶层 `await` 影响的不只是包含它的模块：它还会让所有间接导入它的模块的求值也变成异步的。在下面的模块图中，只有 `Config` 和 `Database` 包含顶层 `await`，但 `Auth`、`Reports`、`Documents`、`Router`、`Dashboard`、`Editor` 和 `App` 都依赖它们的异步完成。其他分支仍然可以同步求值。

![一个应用的模块图。Config 和 Database 包含顶层 await，为深青色。它们的间接导入者 Auth、Reports、Documents、Router、Dashboard、Editor 和 App 为浅青色。Help、Routes、Charts、Toolbar、Markdown、Tokens、Format、Icons、Parse 和 Codec 的依赖子图是同步的，为灰色。](module-async-propagation.svg)

当某个 API 要求求值同步完成时，这一点就很重要。在 Node.js 中，只有当 ES 模块的整个依赖图都是同步的时，[`require()` 才能加载它](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require)。含顶层 `await` 的模块会“污染”它上面的每个模块（也就是所有导入它的模块），因此无法用 `require()` 同步导入它们。在上面的图中，`require()` 可以加载 `Help`，但无法加载 `Router`，尽管 `Router` 本身不含任何 `await`。

[`import defer`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer#顶层_await) 声明（参见[控制导入阶段](#控制导入阶段)）是另一个例子：延迟求值由访问命名空间对象上的属性触发，而该访问必须能够同步完成，因此它无法完全延迟异步子图的求值。不过在这种情况下，它不会干脆放弃延迟，也不会像 `require()` 那样抛出错误，而是会立即求值那些妨碍图变为同步的部分——也就是使用顶层 await 的模块及其所有依赖。例如，如果另一个模块在上面的图中用 `import defer` 导入 `App`，那么 `Config` 和 `Database` 及其依赖 `Parse` 和 `Codec` 会在该导入者的主体运行之前求值。`App` 及其其余依赖的主体可以保持延迟。本质上，图中对这些异步模块的依赖被替换为可同步获得的结果，从而消除污染，并让延迟求值之后能够同步进行。

给现有模块添加顶层 `await` 对其导入者来说可能是破坏性变更，即使它的导出没有变化。它会推迟导入者的整个主体，包括写在 `import` 声明之前的语句，而相互独立的模块可以继续执行。这可能改变同级模块的执行顺序。

例如，下面这些模块依赖同级导入的顺序，以便在读取全局变量之前完成初始化：

```js
// -- entry.js --
import "./setup.js";
import "./display.js";
```

```js
// -- setup.js --
import { locale } from "./settings.js";

globalThis.appLocale = locale;
```

```js
// -- settings.js --
export const locale = "en-US";
```

```js
// -- display.js --
console.log(globalThis.appLocale); // "en-US"
```

现在假设 `settings.js` 引入了顶层 `await`：

```js
// -- settings.js --
export const locale = await Promise.resolve("en-US");
```

`setup.js` 现在会等待 `settings.js`，之后才执行对 `globalThis.appLocale` 的赋值。与此同时，`display.js` 执行并记录 `undefined`（假定 `appLocale` 之前没有被定义过）。`entry.js` 中导入的顺序并不会让 `display.js` 等待 `setup.js` 完成。

要保持所需的顺序，请让 `display.js` 显式依赖 `setup.js`。这是安全的，因为模块在每个应用中只会求值一次。

```js
// -- display.js --
import "./setup.js";

console.log(globalThis.appLocale); // "en-US"
```

如果 `setup.js` 和 `display.js` 是按这个顺序排列的两个独立 `<script type="module">` 元素的入口点，也会出现同样的问题。显式导入可以确保在这种情况下 `display.js` 也会等待 `setup.js`。

### 处理带顶层 await 的循环

循环要求进一步区分静态依赖图和求值实际等待的依赖。考虑[规范中的异步示例](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-example-cyclic-module-record-graphs)，其中 `a.js` 是入口点，五个模块都包含顶层 `await`：

![一个异步模块图：a.js 导入 b.js 和 c.js；b.js 导入 d.js；c.js 导入 d.js 和 e.js；d.js 导入 a.js。每个模块都包含顶层 await。](module-async-cycle.svg)

模块 `a.js`、`b.js`、`c.js` 和 `d.js` 构成一个 SCC。引擎先访问 `a.js`、`b.js` 和 `d.js`。当遇到 `d.js` 对 `a.js` 的导入时，它像之前一样跳出循环。此时 `a.js` 尚未被记录为等待异步完成，因此这条边不会让 `d.js` 等待 `a.js`。`d.js` 开始执行。接着引擎通过 `c.js` 访问另一个分支，发现 `d.js` 仍处于进行中状态，于是开始执行 `e.js`。

假设异步操作按以下顺序完成：

- `e.js` 完成。`c.js` 仍在等待 `d.js`，因此还没有其他模块开始。
- `d.js` 完成。`b.js` 和 `c.js` 现在都就绪。按照遍历的求值顺序，`b.js` 先开始，但当它在 `await` 处挂起时，`c.js` 也可以开始。
- `c.js` 完成。`a.js` 仍在等待 `b.js`。
- `b.js` 完成。`a.js` 现在可以开始执行其主体。
- `a.js` 完成。入口点的求值 promise 兑现。

与前面讨论的同步循环不同，异步 SCC 中的模块不一定会一起转为*已求值*状态。每个模块可以在不同时间完成。为保持该分量的整体结果，引擎把它的模块关联到一个*循环根*：该 SCC 中第一个被访问的模块，在我们的例子中是 `a.js`。在初始遍历之后遇到该分量的导入，会使用这个根来等待该分量完成，并检查是否有求值错误。模块主体成功结束本身，并不意味着整个分量可以被成功导入。

例如，假设 `b.js` 仍在等待时 `c.js` 失败。错误会传播到 `a.js`，`a.js` 的主体永远不会开始，入口点的求值 promise 会拒绝。`b.js` 继续执行。尽管如此，之后对 `b.js` 的动态导入会以记录在循环根 `a.js` 上的错误拒绝。`b.js` 的成功执行不会消除该分量的失败。

![c.js 失败后，a.js 和 c.js 被标记为已求值并带有错误，b.js 的求值仍在进行中，d.js 和 e.js 已成功求值。](module-async-cycle-error.svg)

### 死锁

包含顶层 await 的模块可能产生死锁：

```js
// -- a.js --
import { resolve } from "./b.js";

resolve();
```

```js
// -- b.js --
const { promise, resolve } = Promise.withResolvers();
export { resolve };
await promise;
```

如果从 `a.js` 开始求值，它会等待 `b.js` 完成后才执行主体。但 `b.js` 等待的 promise 只有通过 `a.js` 中对 `resolve()` 的调用才能兑现。两者都无法完成求值。模块算法不会自动拒绝这些 promise 来打破死锁。

上面的例子看起来可能有些刻意。更现实的情况是：你等待一个动态导入，而该导入的模块依赖当前模块。

```js
// -- a.js --
await import("./b.js");
```

```js
// -- b.js --
import "./a.js";
```

同样在这种情况下，`b.js` 等待 `a.js` 中的动态导入完成，而动态导入只有在 `b.js` 执行完成后才能完成。

## 动态导入

到目前为止介绍的所有内容都使用静态 `import`，入口点就是整个应用的入口点（`node` 命令行、HTML 文件等），因此加载和链接都发生在任何用户代码运行之前。相比之下，[动态导入](/zh-CN/docs/Web/JavaScript/Reference/Operators/import) `import()` 会在用户代码执行到该表达式时开始一次导入，所请求的模块作为入口点。这让你可以在初始图已经建立并运行之后（或者——借助顶层 `await`——在初始图正在求值的*同时*）动态*扩充*模块图。

例如，我们可以修改原来的 `main.js`，让它监听来自 Node.js [`process.stdin`](https://nodejs.org/api/process.html#processstdin) 的数据，并且只在用户输入 `Hi` 并按下回车时才导入 `formatters.js`：

```js
// -- main.js --
import config from "./config.js";

process.stdin.on("data", async (data) => {
  if (data.toString().trim() !== "Hi") return;
  const { greet } = await import("./formatters.js");
  greet("Josh", config.locale);
});
```

最初，加载 `main.js` 会发现 `config.js`。注册监听器后，`main.js` 的求值就完成了，而没有加载 `formatters.js`。当监听器收到 `Hi` 时，会从 `formatters.js` 开始另一个加载过程，并发现它对 `config.js` 和 `logger.js` 的导入。在这种情况下，`config.js` 已可用并被复用，而 `logger.js` 需要加载（假定没有其他东西请求过它）。因此新分支在 `config.js` 处接入现有图，复用同一个模块。

![双线箭头表示从 main.js 到 formatters.js 的动态导入。单线箭头表示静态依赖。新增的 formatters.js 和 logger.js 模块以青色高亮。已有的 main.js 和 config.js 为浅灰色。formatters.js 导入的 config.js 与 main.js 已使用的相同。](module-dynamic-import.svg)

对模块图的扩充可能遇到处于任何状态的已有模块，并且该状态会被保留——加载中的模块继续加载，已加载的模块不会重新获取，已链接的模块不会重新链接，已求值的模块永远不会被重新求值（包括之前的求值抛出过错误的情况）。在上面的示例中，`config.js` 已经求值，因此只有 `logger.js` 和 `formatters.js` 需要执行。被动态导入的模块本身也可能已存在于模块图中并被复用。

动态导入是异步的，因为加载可能需要获取新模块，求值也可能需要等待顶层 `await`。`import()` 返回的 promise 在所请求模块的求值成功完成后兑现。

新的遍历也可能到达调用 `import()` 的模块（例如 `main.js`）。由于动态导入不构成依赖边（它们只是入口点），这不会产生循环。但是，如果调用者用顶层 `await` 等待该导入，两者都无法完成，如[死锁示例](#死锁)所示。

## 模块缓存

*模块缓存*是指复用模块的身份和状态。来自同一导入者、具有相同说明符和导入属性的重复成功请求，必须指向同一个模块。不同的请求也可以指向同一个模块，例如两个模块导入同一依赖时。宿主决定请求如何映射到模块身份；浏览器特有的规则请参阅 [web 上的模块缓存](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#模块缓存)。

这意味着导入者共享模块的绑定，包括求值之后所做的更改。例如，下面这个 `counter.js` 模块维护一个计数：

```js
export let count = 0;

export function increment() {
  count++;
}
```

另一个模块可以通过静态和动态导入访问同一个计数器。命名空间对象也是共享的。

```js
import * as counter from "./counter.js";

counter.increment();

const sameCounter = await import("./counter.js");
console.log(sameCounter === counter); // true
console.log(sameCounter.count); // 1

sameCounter.increment();
console.log(counter.count); // 2
```

JavaScript 没有提供清除模块缓存的标准 API。如果调用者需要独立的状态，模块可以导出一个用于创建状态的函数：

```js
export function createCounter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
  };
}
```

或者，你可以在 URL 说明符中添加任意的查询字符串或片段（参见 [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import#模块命名空间对象)）。

## 控制导入阶段

普通的 `import` 声明会触发整个[加载 - 链接 - 求值过程](#从模块源代码到执行)。*导入阶段修饰符*让导入者可以在某个阶段暂停该过程。后面的阶段可以在执行期间的某个时刻、只在真正需要时才触发。

有了 [`import source`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/source)，过程会在*加载*中途停止：所请求的模块本身会被获取并解析，但不会请求它的依赖。导入的值是一个[_模块源代码对象_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AbstractModuleSource)，可以用其他机制链接和求值。下面的示例使用 JavaScript 源代码导入：

> [!NOTE]
> JavaScript 源代码导入以及把模块源代码对象传给 `import()` 仍是提案中的特性，由 [ECMAScript 模块阶段导入提案](https://github.com/tc39/proposal-esm-phase-imports)定义。

```js
// -- main.js --
import source formattersSource from "./formatters.js";
import config from "./config.js";

process.stdin.on("data", async (data) => {
  if (data.toString().trim() !== "Hi") return;
  const { greet } = await import(formattersSource);
  greet("Josh", config.locale);
});
```

`main.js` 求值后，`formatters.js` 已被解析，但它的依赖没有通过源代码导入被遍历。`logger.js` 没有被请求。`config.js` 已求值，因为 `main.js` 正常导入了它：

![main.js 和 config.js 已求值。源代码导入到达 formatters.js，它已被解析但未链接或求值。其依赖尚未遍历：logger.js 没有加载，而 config.js 已通过 main.js 可用。](module-source-phase.svg)

当监听器收到 `Hi` 时，它把模块源代码对象传给 `import()`。这会开始加载 `formatters.js` 的依赖，复用 `config.js` 并加载 `logger.js`，然后链接并求值其余模块。求值成功后，promise 以命名空间兑现。重复输入 `Hi` 会复用同一个模块实例，不会导致再次求值。

有了 [`import defer`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer)，过程会在*求值*之前停止（但异步求值如果存在，仍然是立即进行的）。导入的值是一个[_延迟模块命名空间对象_](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer#延迟模块命名空间对象)。例如：

```js
// -- main.js --
import defer * as formatters from "./formatters.js";
import config from "./config.js";

process.stdin.on("data", (data) => {
  if (data.toString().trim() !== "Hi") return;
  formatters.greet("Josh", config.locale);
});
```

假定是原始的同步模块且没有其他导入，`main.js` 可以在 `formatters.js` 和 `logger.js` 仍处于已链接但未求值状态的情况下完成求值。`config.js` 会求值，因为 `main.js` 也正常导入了它：

![main.js 和 config.js 已求值。formatters.js 和 logger.js 已链接但未求值。延迟分支在求值之前停止，而它共享的依赖 config.js 已通过 main.js 的普通导入完成求值。](module-defer-phase.svg)

当监听器收到 `Hi` 时，读取 `formatters.greet` 会触发 `logger.js` 然后 `formatters.js` 的同步求值，并复用已求值的 `config.js`。如果求值抛出异常，属性访问也会抛出异常。而加载和链接错误在 `main.js` 执行之前就已经检查过了。

延迟导入还可以嵌套，在每个 `defer` 处形成暂停边界。在下面的示例中，`a.js` 延迟 `b.js`，`b.js` 延迟 `c.js`，`c.js` 又延迟 `d.js`。其他导入都是普通导入。所有模块都是同步的。每个定时器读取一个延迟命名空间的属性，触发下一阶段的求值。每个定时器从被调度时起延迟一秒，因此各阶段大约在启动后 1、2、3 秒发生。

启动时，七个模块全部加载并链接，但只有 `a.js` 求值。它调度一个定时器，而不访问 `b` 的属性：

![启动后，a.js 已求值。b.js、c.js、d.js、e.js、f.js 和 g.js 已链接但未求值。](module-defer-nested-1.svg)

第一个定时器触发时，读取 `b.x` 会求值 `e.js`、`f.js`，然后是 `b.js`。求值 `b.js` 会调度另一个定时器。它对 `c.js` 的延迟导入不会求值 `c.js`，因此 `c.js`、`d.js` 和 `g.js` 仍保持已链接：

![第一个定时器触发后，a.js、e.js、f.js 和 b.js 已求值。c.js、d.js 和 g.js 仍为已链接。](module-defer-nested-2.svg)

第二个定时器触发时，读取 `c.x` 会求值 `g.js`，然后是 `c.js`。求值 `c.js` 会调度第三个定时器，此时还不访问 `d` 的属性：

![第二个定时器触发后，g.js 和 c.js 也已求值。只有 d.js 仍为已链接但未求值。](module-defer-nested-3.svg)

第三个定时器触发时，读取 `d.x` 会求值 `d.js`，复用已求值的 `e.js` 和 `g.js`。现在所有模块都已求值：

![第三个定时器触发后，全部七个模块都已求值。d.js 复用了 e.js 和 g.js。](module-defer-nested-4.svg)

正如[顶层 await 的污染效应](#顶层_await_的污染效应)中所解释的，包含顶层 `await` 的模块及其依赖必须在初始链接之后立即执行。只有剩余的同步执行可以保持延迟。

对于两种阶段修饰符，请注意修饰符作用于*导入*，而不是*目标模块*。这意味着另一个普通导入可能让同一模块更早求值，并且同一模块的延迟导入和立即导入不会创建单独的缓存条目。更多信息请参阅 [`import defer`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/defer#缓存语义) 和 [`import source`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import/source#缓存语义) 的缓存语义。

正如 `import` 之于 `import()`，`import source` 和 `import defer` 声明也有动态形式 [`import.source()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import/source) 和 [`import.defer()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import/defer)，它们在表达式求值时开始请求。

## 参见

- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)
- [在 web 上使用模块](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [跨平台的模块](/zh-CN/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms)
