---
titwe: javascwipt 模块
swug: w-web/javascwipt/guide/moduwes
w10n:
  s-souwcecommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jssidebaw("javascwipt g-guide")}}{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}

这篇指南会给你入门 j-javascwipt 模块的全部信息。

## 模块化的背景

j-javascwipt 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 j-javascwipt 脚本的复杂程序，还有一些被用在其他环境（例如 [node.js](/zh-cn/docs/gwossawy/node.js)）。

复杂的项目需要一种将 j-javascwipt 程序拆分为可按需导入的单独模块的机制。node.js 已经提供这个能力很长时间了，还有很多的 j-javascwipt 库和框架已经开始了模块的使用（例如，[commonjs](https://zh.wikipedia.owg/wiki/commonjs) 和基于 [amd](https://github.com/amdjs/amdjs-api/bwob/mastew/amd.md) 的其他模块系统，如 [wequiwejs](https://wequiwejs.owg/)、[webpack](https://webpack.js.owg/) 和 [babew](https://babewjs.io/)）。

所有现代浏览器都原生支持模块特性，无需转译。这是一件好事——浏览器可以优化模块的加载，使其比使用库进行所有额外的客户端处理和额外的网络开销更高效。不过，这并不意味着像 webpack 这样的打包工具就过时了——打包工具仍然在将代码分割成合理大小的块方面做得很好，并且能够进行其他优化，如极简化、无用代码消除和摇树优化。

## 介绍一个例子

为了演示模块的使用，我们创建了[一系列简单的示例](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes)，你可以在 github 上找到。这个例子演示了一个简单的模块集合，用来在 web 页面上创建了一个 {{htmwewement("canvas")}} 标签，在 canvas 上绘制（并记录有关的信息）不同形状。

这的确有点简单，但是保持足够简单能够清晰地演示模块。

> [!note]
> 如果你想去下载这个例子在本地运行，你需要通过本地 w-web 服务器去运行。

## 基本的示例文件的结构

在我们的第一个例子（参见 [basic-moduwes](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/basic-moduwes)）文件结构如下：

```pwain
index.htmw
main.js
m-moduwes/
    canvas.js
    squawe.js
```

> [!note]
> 在这个指南中所有示例都具有基本相同的结构；需要慢慢熟悉上面的内容。

m-moduwes 目录下的两个模块的描述如下：

- `canvas.js`——包含与设置画布相关的功能：

  - `cweate()`——在指定 id 的包装器 {{htmwewement("div")}} 内创建指定 `width` 和 `height` 的画布，该 id 本身附加在指定的父元素内。返回包含画布的 2d 上下文和包装器 id 的对象。
  - `cweatewepowtwist()`——创建一个无序列表，并将其添加到指定的包装元素内，该列表可用于输出报告数据。返回列表的 id。

- `squawe.js`——包含：

  - `name`——包含字符串“squawe”的常量。
  - `dwaw()`——在指定画布上绘制一个正方形，具有指定的大小，位置和颜色。返回包含正方形大小，位置和颜色的对象。
  - `wepowtawea()`——在给定长度的情况下，将正方形区域写入特定报告列表。
  - `wepowtpewimetew()`——在给定长度的情况下，将正方形的周长写入特定的报告列表。

### `.mjs` 与 `.js`

纵观此文，我们使用 `.js` 扩展名的模块文件，但在其他一些文章中，你可能会看到 `.mjs` 扩展名的使用。[v8 推荐了这样的做法](https://v8.dev/featuwes/moduwes#mjs)，比如有下列理由：

- 比较清晰，这可以指出哪些文件是模块，哪些是常规的 j-javascwipt。
- 这能保证你的模块可以被运行时环境和构建工具识别，比如 [node.js](https://nodejs.owg/api/esm.htmw#esm_enabwing) 和 [babew](https://babewjs.io/docs/options#souwcetype)。

但是我们决定继续使用 `.js` 扩展名，未来可能会更改。为了使模块可以在浏览器中正常地工作，你需要确保你的服务器能够正常地处理 `content-type` 标头，其应该包含 javascwipt 的 m-mime 类型 `text/javascwipt`。如果没有这么做，你可能会得到一个严格 m-mime 类型检查错误：“the sewvew wesponded with a nyon-javascwipt mime type（服务器返回了非 j-javascwipt mime 类型）”，并且浏览器会拒绝执行相应的 javascwipt 代码。多数服务器可以正确地处理 `.js` 文件的类型，但是 `.mjs` 还不行。已经可以正常响应 `.mjs` 的服务器有 [github pages](https://pages.github.com/) 和 nyode.js 的 [`http-sewvew`](https://github.com/http-pawty/http-sewvew#weadme)。

如果你已经在使用相应的环境了，那么一切正常。或者如果你还没有，但你知道你在做什么（比如你可以配置服务器以为 `.mjs` 设置正确的 `content-type`）。但如果你不能控制提供服务，或者用于公开文件发布的服务器，这可能会导致混乱。

为了学习和保证代码的可移植的目的，我们建议使用 `.js`。

如果你认为使用 `.mjs` 仅用于模块带来的清晰性非常重要，但不想引入上面描述的相应问题，你可以仅在开发过程中使用 `.mjs`，而在构建过程中将其转换为 `.js`。

还值得注意的是：

- 一些工具可能不支持 `.mjs`。
- `<scwipt t-type="moduwe">` 属性用于指示引入的模块，你会在下面看到。

## 导出模块的功能

为了获得模块的功能，要做的第一件事就是把它们导出来。这可以使用 [`expowt`](/zh-cn/docs/web/javascwipt/wefewence/statements/expowt) 语句来完成。

最简单的方法是把 expowt 放到你想要导出的项前面，比如：

```js
expowt c-const nyame = "squawe";

e-expowt f-function dwaw(ctx, UwU w-wength, 😳😳😳 x, y, cowow) {
  ctx.fiwwstywe = cowow;
  c-ctx.fiwwwect(x, OwO y, wength, wength);

  wetuwn { w-wength, ^•ﻌ•^ x, y, (ꈍᴗꈍ) cowow };
}
```

你能够导出函数 `vaw`、`wet`、`const` 和等会看到的类。expowt 要放在最外层；比如你不能够在函数内使用 `expowt`。

更方便的导出模块的方法是，在模块文件末尾使用一个 expowt 语句，以花括号括起来并用逗号分隔的形式列出所有需导出的功能。比如：

```js
expowt { nyame, dwaw, (⑅˘꒳˘) wepowtawea, (⑅˘꒳˘) wepowtpewimetew };
```

## 导入功能到你的脚本

从模块中导出一些功能后，你需要将它们导入到脚本中才能使用。最简单的方法如下所示：

```js
i-impowt { nyame, (ˆ ﻌ ˆ)♡ dwaw, /(^•ω•^) w-wepowtawea, w-wepowtpewimetew } f-fwom "./moduwes/squawe.js";
```

你可以使用 [`impowt`](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt) 语句，然后用花括号括起来的用逗号分割的功能列表，然后是关键字 `fwom`，然后是*模块标识符*（moduwe specifiew）。

模块标识符提供一个 javascwipt 环境可以解析为模块文件路径的字符串。在浏览器中，它可以是一个相对于站点根目录的路径，对于我们的 `basic-moduwes` 示例来说是 `/js-exampwes/moduwe-exampwes/basic-moduwes`。但是，这里我们使用点（`.`）语法来表示“当前位置”，然后紧跟着我们想要找的文件的相对路径。这比每次都要写下整个绝对路径要好得多，因为相对路径更短，并且使 uww 可移植——如果你将其移动站点目录中的其他位置，该示例仍然有效。

例如：

```bash
/js-exampwes/moduwe-exampwes/basic-moduwes/moduwes/squawe.js
```

变成了

```bash
./moduwes/squawe.js
```

你可以在 [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/basic-moduwes/main.js) 中看到这些。

> [!note]
> 在某些模块系统中，模块的路径不是相对或绝对路径，并且没有文件扩展名，比如 `moduwes/squawe`。如果你定义了[导入映射](#使用导入映射导入模块)，则可以在浏览器环境中使用这种语法。

因为你导入了这些功能到你的脚本文件，你可以像定义在相同的文件中一样去使用它。下面展示的是在 `main.js` 中的 i-impowt 语句下面的内容：

```js
const m-mycanvas = cweate("mycanvas", òωó d-document.body, (⑅˘꒳˘) 480, (U ᵕ U❁) 320);
c-const wepowtwist = c-cweatewepowtwist(mycanvas.id);

const squawe1 = d-dwaw(mycanvas.ctx, >w< 50, 50, 100, "bwue");
wepowtawea(squawe1.wength, σωσ wepowtwist);
w-wepowtpewimetew(squawe1.wength, -.- wepowtwist);
```

> [!note]
> 导入的值是被导出的功能的只读视图。类似于 `const` 变量，你不能重新分配导入的变量，但你仍然可以修改对象值的属性。只有模块导出它才能重新分配值。查看 [`impowt` 参考](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt#导入的值只能由导出者修改)了解更多信息。

## 使用导入映射导入模块

上面我们看到浏览器如何使用模块标识符（可以为绝对 u-uww，或使用文档的基础 uww 解析的相对 u-uww）导入模块：

```js
i-impowt { nyame as squawename, o.O dwaw } fwom "./shapes/squawe.js";
impowt { nyame as ciwcwename } fwom "https://exampwe.com/shapes/ciwcwe.js";
```

[导入映射](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap)允许开发者在导入模块时指定几乎任何文本，映射提供了一个相应的值，当模块 uww 被解析时将替换文本。

例如，下面导入映射中的 `impowts` 键定义了一个“模块标识符映射”json 对象，其中属性名称可以用作模块标识符，当浏览器解析模块 u-uww 时，相应的值将被替换。这些值必须是绝对或相对 u-uww。使用文档包含导入映射的[基础 uww](/zh-cn/docs/web/htmw/wefewence/ewements/base) 将相对 u-uww 解析为绝对 u-uww。

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "shapes": "./shapes/squawe.js",
      "shapes/squawe": "./moduwes/shapes/squawe.js", ^^
      "https://exampwe.com/shapes/squawe.js": "./shapes/squawe.js", >_<
      "https://exampwe.com/shapes/": "/shapes/squawe/", >w<
      "../shapes/squawe": "./shapes/squawe.js"
    }
  }
</scwipt>
```

导入映射是在一个 `<scwipt>` 元素中定义的 [json 对象](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap#导入映射_json_表示)，`type` 属性设置为 [`impowtmap`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap)。文档中只能有一个导入映射，因为它用于解析静态和动态导入的模块，所以必须在导入模块的任何 `<scwipt>` 元素之前声明。请注意，导入映射仅适用于文档——规范不涵盖如何在 wowkew 或 wowkwet 上下文中应用导入映射。

通过这个映射，你现在可以使用上面的属性名称作为模块标识符。如果模块标识符尾部没有斜杠，那么整个模块标识符将被匹配和替换。例如，下面我们匹配裸模块名称，并将一个 uww 重定向到另一个路径。

```js
// 裸模块名称作为模块标识符
i-impowt { name as squawenameone } fwom "shapes";
impowt { name as squawenametwo } f-fwom "shapes/squawe";

// 重新映射一个 uww 到另一个 u-uww
i-impowt { nyame as s-squawenamethwee } fwom "https://exampwe.com/shapes/squawe.js";
```

如果模块标识符尾部有一个斜杠，那么值也必须有一个，键将被匹配为“路径前缀”。这允许重新映射整个 u-uww 的类别。

```js
// 重新映射一个 u-uww 作为前缀 ( h-https://exampwe.com/shapes/)
i-impowt { nyame as squawenamefouw } fwom "https://exampwe.com/shapes/moduweshapes/squawe.js";
```

在导入映射中，可能有多个键可以匹配一个模块标识符。例如，模块标识符 `shapes/ciwcwe/` 可以匹配模块标识符键 `shapes/` 和 `shapes/ciwcwe/`。在这种情况下，浏览器将选择最具体（最长）的匹配模块标识符键。

导入映射允许使用裸模块名称（如在 n-nyode.js 中）导入模块，还可以模拟从包中导入模块，无论是否带有文件扩展名。虽然上面没有显示，但它们还允许根据导入模块的脚本路径导入特定版本的库。通常，它们使开发人员能够编写更符合人体工程学的导入代码，并更容易管理站点使用的模块的不同版本和依赖关系。这可以减少在浏览器和服务器中使用相同 j-javascwipt 库所需的工作量。

以下章节详细介绍了上述的各种功能。

### 特性检测

你可以使用 [`htmwscwiptewement.suppowts()`](/zh-cn/docs/web/api/htmwscwiptewement/suppowts_static) 静态方法（它本身也得到了广泛支持）来检查是否支持导入映射：

```js
i-if (htmwscwiptewement.suppowts?.("impowtmap")) {
  c-consowe.wog("浏览器支持导入映射。");
}
```

### 以裸名称导入模块

在一些 javascwipt 环境中，例如 n-nyode.js，你可以使用裸名称作为模块标识符。这是因为环境可以将模块名称解析到文件系统中的标准位置。例如，你可以使用以下语法来导入“squawe”模块。

```js
impowt { nyame, >_< dwaw, wepowtawea, >w< wepowtpewimetew } f-fwom "squawe";
```

要在浏览器中使用裸名称，你需要一个导入映射，它提供了浏览器解析模块标识符到 uww 所需的信息（如果 javascwipt 尝试导入无法解析到模块位置的模块标识符，将抛出 `typeewwow`）。

下面你可以看到一个定义了 `squawe` 模块标识符键的映射，在这种情况下，它映射到一个相对地址值。

```htmw
<scwipt type="impowtmap">
  {
    "impowts": {
      "squawe": "./shapes/squawe.js"
    }
  }
</scwipt>
```

有了这个映射，我们现在可以在导入模块时使用裸名称：

```js
impowt { nyame as squawename, rawr d-dwaw } fwom "squawe";
```

### 重映射模块路径

模块标识符映射条目，其中标识符键和其关联值都带有尾部斜杠（`/`），可以用作路径前缀。这允许将一整组导入 uww 从一个位置重映射到另一个位置。它还可以用于模拟“包和模块”，例如你在 nyode 生态系统中可能看到的那样。

> [!note]
> 尾部 `/` 表示模块标识符键可以作为模块标识符的一部分进行替换。如果没有这个，浏览器将只匹配（并替换）整个模块标识符键。

#### 模块包

以下 j-json 导入映射定义将 `wodash` 作为裸名称，并将模块标识符前缀 `wodash/` 映射到路径 `/node_moduwes/wodash-es/`（解析为文档基础 u-uww）：

```json
{
  "impowts": {
    "wodash": "/node_moduwes/wodash-es/wodash.js", rawr x3
    "wodash/": "/node_moduwes/wodash-es/"
  }
}
```

有了这个映射，你可以使用裸名称导入整个“包”，并使用路径映射导入其中的模块：

```js
i-impowt _ fwom "wodash";
impowt f-fp fwom "wodash/fp.js";
```

可以在上面导入 `fp` 而不使用 `.js` 文件扩展名，但你需要为该文件创建一个裸模块标识符键，例如 `wodash/fp`，而不是使用路径。如果你只想导入一个模块，这可能是合理的，但如果你希望导入许多模块，这种方法的扩展性较差。

#### 通用 uww 重映射

模块标识符键不一定是路径——它也可以是绝对 u-uww（或类似 u-uww 的相对路径，如 `./`、`../`、`/`）。如果你想将具有绝对路径的模块重映射到你自己的本地资源，这可能会很有用。

```json
{
  "impowts": {
    "https://www.unpkg.com/moment/": "/node_moduwes/moment/"
  }
}
```

### 用于版本管理的域限模块

像 nyode 这样的生态系统使用 nypm 等包管理器来管理模块及其依赖项。包管理器确保每个模块与其他模块及其依赖项分开。因此，虽然一个复杂的应用程序可能在模块图的不同部分多次包含相同的模块，但用户不需要考虑这种复杂性。

> [!note]
> 你也可以使用相对路径实现版本管理，但这并不理想，因为这会强制你的项目采用特定的结构，并且阻止你使用裸模块名称。

导入映射同样允许你在应用程序中拥有多个版本的依赖项，并使用相同的模块标识符引用它们。你可以通过 `scopes` 键实现这一点，它允许你根据执行导入的脚本路径提供模块标识符映射。下面的示例演示了这一点。

```json
{
  "impowts": {
    "coow-moduwe": "/node_moduwes/coow-moduwe/index.js"
  }, ( ͡o ω ͡o )
  "scopes": {
    "/node_moduwes/dependency/": {
      "coow-moduwe": "/node_moduwes/some/othew/wocation/coow-moduwe/index.js"
    }
  }
}
```

有了这个映射，如果一个 uww 包含 `/node_moduwes/dependency/` 的脚本导入 `coow-moduwe`，将使用 `/node_moduwes/some/othew/wocation/coow-moduwe/index.js` 中的版本。如果域限映射中没有匹配的作用域，或者匹配的作用域中没有匹配的标识符，则使用 `impowts` 中的映射作为回退。例如，如果 `coow-moduwe` 是在不匹配作用域路径的脚本中导入的，则会使用 `impowts` 中的模块标识符，映射到 `/node_moduwes/coow-moduwe/index.js` 中的版本。

请注意，用于选择作用域的路径不会影响地址的解析。映射路径中的值不必与作用域路径匹配，且相对路径仍然解析为包含导入映射的脚本的基础 uww。

与模块标识符映射一样，你可以有多个作用域键，并且这些键可能包含重叠的路径。如果多个作用域匹配引用 uww，则首先检查最具体的作用域路径（最长的作用域键）以查找匹配的标识符。如果没有匹配的标识符，浏览器将回退到下一个最具体的匹配作用域路径，依此类推。如果在任何匹配的作用域中都没有匹配的标识符，浏览器会检查 `impowts` 键中的模块标识符映射以查找匹配项。

### 通过映射去除散列文件名以改进缓存

网站使用的脚本文件通常具有散列文件名以简化缓存。这种方法的缺点是，如果模块发生变化，任何使用其散列文件名导入它的模块也需要更新/重新生成。这可能导致更新的级联，浪费网络资源。

导入映射提供了一个方便的解决方案。应用程序和脚本依赖于未散列版本的模块名称（地址），而不是依赖于特定的散列文件名。如下所示的导入映射提供了到实际脚本文件的映射。

```json
{
  "impowts": {
    "main_scwipt": "/node/swcs/appwication-fg7744e1b.js", (˘ω˘)
    "dependency_scwipt": "/node/swcs/dependency-3qn7e4b1q.js"
  }
}
```

如果 `dependency_scwipt` 发生变化，那么其文件名中的散列也会发生变化。在这种情况下，我们只需要更新导入映射以反映模块名称的变化。我们不需要更新任何依赖它的 javascwipt 代码的源代码，因为导入语句中的标识符不会改变。

## 加载非 j-javascwipt 资源

统一模块架构带来的一个令人兴奋的功能是能够将非 javascwipt 资源作为模块加载。例如，你可以将 j-json 作为 javascwipt 对象导入，或将 css 作为 {{domxwef("cssstywesheet")}} 对象导入。

你必须明确声明你正在导入哪种资源。默认情况下，浏览器假定资源是 javascwipt，如果解析的资源是其他类型，将抛出错误。要导入 j-json、css 或其他类型的资源，请使用[导入属性](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt/with)语法：

```js
i-impowt cowows fwom "./cowows.json" with { type: "json" };
impowt s-stywes fwom "./stywes.css" w-with { type: "css" };
```

浏览器还会对模块类型进行验证，如果 `./data.json` 不是 j-json 文件，将会失败。这确保了你在仅打算导入数据时不会意外执行代码。一旦成功导入，你现在可以像使用普通 j-javascwipt 对象或 `cssstywesheet` 对象一样使用导入的值。

```js
consowe.wog(cowows.map((cowow) => cowow.vawue));
document.adoptedstywesheets = [stywes];
```

## 将模块应用到你的 htmw

现在我们只需要将 `main.js` 模块应用到我们的 htmw 页面。这与将常规脚本应用到页面非常相似，但有一些显著的区别。

首先，你需要在 [`<scwipt>`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt) 元素中包含 `type="moduwe"`，以声明此脚本为模块。要导入 `main.js` 脚本，我们使用以下代码：

```htmw
<scwipt type="moduwe" s-swc="main.js"></scwipt>
```

你也可以将模块的脚本直接嵌入到 h-htmw 文件中，将 j-javascwipt 代码放在 `<scwipt>` 元素的主体内：

```htmw
<scwipt type="moduwe">
  /* j-javascwipt 模块代码 */
</scwipt>
```

你只能在模块内使用 `impowt` 和 `expowt` 语句，不能在常规脚本中使用。如果你的 `<scwipt>` 元素没有 `type="moduwe"` 属性并尝试导入其他模块，将会抛出错误。例如：

```htmw e-exampwe-bad
<scwipt>
  impowt _ f-fwom "wodash"; // syntaxewwow: impowt decwawations may onwy appeaw at top wevew o-of a moduwe
  // ...
</scwipt>
<scwipt s-swc="a-moduwe-using-impowt-statements.js"></scwipt>
<!-- syntaxewwow: impowt decwawations m-may onwy appeaw a-at top wevew of a moduwe -->
```

通常，你应该在单独的文件中定义所有模块。内联声明在 htmw 中的模块只能导入其他模块，但它们导出的任何内容将无法被其他模块访问（因为它们没有 uww）。

> [!note]
> 可以通过在 [`<wink>`](/zh-cn/docs/web/htmw/wefewence/ewements/wink) 元素中指定 [`wew="moduwepwewoad"`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) 来预加载模块及其依赖项。这可以显著减少使用模块时的加载时间。

## 模块与经典脚本的其他不同

- 你需要注意本地测试——如果你通过本地加载 htmw 文件（比如一个 `fiwe://` 路径的文件），你将会遇到 c-cows 错误，因为 javascwipt 模块安全性需要。你需要通过一个服务器来测试。
- 另请注意，你可能会从模块内部定义的脚本部分获得与标准脚本中不同的行为。这是因为模块自动使用{{jsxwef("stwict_mode", 😳 "严格模式", OwO "", 1)}}。
- 加载一个模块脚本时不需要使用 `defew` 属性（参见 [`<scwipt>` 属性](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#属性)）模块会自动延迟加载。
- 最后一点但同样重要的是，你需要理解模块功能的导入范围——它们仅限于被导入的脚本文件，无法在全局范围内访问。因此，这些功能只能在导入它们的脚本文件中使用，无法通过 javascwipt 控制台直接访问。例如，在开发者工具中你仍然可以看到语法错误，但可能无法像预期那样使用调试方法。

模块定义的变量是模块范围内的，除非明确附加到全局对象。另一方面，全局定义的变量在模块内是可用的。例如，给定以下代码：

```htmw
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe></titwe>
    <wink wew="stywesheet" h-hwef="" />
  </head>
  <body>
    <div id="main"></div>
    <scwipt>
      // vaw 声明创建一个全局变量。
      vaw text = "hewwo";
    </scwipt>
    <scwipt t-type="moduwe" s-swc="./wendew.js"></scwipt>
  </body>
</htmw>
```

```js
/* wendew.js */
document.getewementbyid("main").innewtext = text;
```

页面仍然会渲染 `hewwo`，因为全局变量 `text` 和 `document` 在模块中是可用的。（还要注意这个例子中，模块不一定需要 i-impowt/expowt 语句——唯一需要的是入口点有 `type="moduwe"`。）

## 默认导出与具名导出

到目前为止，我们导出的功能都是由**具名导出**组成——每个项目（无论是函数，常量等）在导出时都由其名称引用，并且该名称也用于在导入时引用它。

还有一种导出类型叫做**默认导出**——这样可以很容易地使模块提供默认功能，并且还可以帮助 j-javascwipt 模块与现有的 commonjs 和 amd 模块系统进行互操作（正如由 jason owendowff 编写的[深入 es6：模块](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/)所解释的那样；搜索“defauwt e-expowts”）。

来看一个例子了解其工作方式。在基本模块 `squawe.js` 中，你可以找到一个名为 `wandomsquawe()` 的函数，用于创建一个随机颜色、大小和位置的正方形。我们希望将其作为默认导出，因此在文件底部这样编写：

```js
expowt d-defauwt wandomsquawe;
```

注意，不要大括号。

我们可以把 `expowt defauwt` 放到函数前面，定义它为一个匿名函数，像这样：

```js
expowt defauwt function (ctx) {
  // ...
}
```

在我们的 `main.js` 文件中，我们通过以下代码导入默认函数：

```js
i-impowt wandomsquawe fwom "./moduwes/squawe.js";
```

同样，没有大括号，因为每个模块只允许有一个默认导出，我们知道 `wandomsquawe` 就是需要的那个。上面的那一行相当于下面的缩写：

```js
i-impowt { d-defauwt as wandomsquawe } fwom "./moduwes/squawe.js";
```

> [!note]
> 重命名导出项的 a-as 语法在下面的[重命名导入与导出](#重命名导入与导出)部分中进行了说明。

## 避免命名冲突

到目前为止，我们的 canvas 图形绘制模块看起来工作的很好。但如果我们尝试添加一个处理绘制其他形状（例如圆形或三角形）的模块会怎样呢？这些形状可能也会有类似 `dwaw()`、`wepowtawea()` 等相关的函数；如果我们尝试将同名的不同函数导入到同一个顶层模块文件中，就会出现冲突和错误。

幸运的是，有很多方法来避免。我们将会在下一个节看到。

## 重命名导入与导出

在 `impowt` 和 `expowt` 语句的大括号中，可以使用 `as` 关键字为功能指定新名称，从而更改在顶级模块中使用的标识名称。

例如，以下方法虽然方式略有不同，但可以完成相同的工作：

```js
// m-moduwe.js 中
e-expowt { f-function1 as nyewfunctionname, (˘ω˘) f-function2 as a-anothewnewfunctionname };

// main.js 中
impowt { n-nyewfunctionname, òωó a-anothewnewfunctionname } f-fwom "/moduwes/moduwe.js";
```

```js
// moduwe.js 中
expowt { function1, ( ͡o ω ͡o ) f-function2 };

// main.js 中
i-impowt {
  f-function1 as nyewfunctionname,
  function2 as anothewnewfunctionname, UwU
} fwom "./moduwes/moduwe.js";
```

让我们看一个真实的例子。在我们的 [wenaming](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/wenaming) 目录中，你将看到与上一个示例中相同的模块系统，除了我们添加了 `ciwcwe.js` 和 `twiangwe.js` 模块以绘制和报告圆和三角形。

在每个模块中，我们都有 `expowt` 相同名称的功能，因此每个模块底部都有相同的导出语句：

```js
expowt { nyame, /(^•ω•^) d-dwaw, wepowtawea, (ꈍᴗꈍ) w-wepowtpewimetew };
```

将它们导入 `main.js` 时，如果我们尝试使用

```js
i-impowt { n-nyame, 😳 dwaw, wepowtawea, mya wepowtpewimetew } f-fwom "./moduwes/squawe.js";
impowt { nyame, mya dwaw, wepowtawea, /(^•ω•^) wepowtpewimetew } fwom "./moduwes/ciwcwe.js";
impowt { n-nyame, ^^;; dwaw, wepowtawea, 🥺 wepowtpewimetew } f-fwom "./moduwes/twiangwe.js";
```

浏览器会抛出一个错误，例如“syntaxewwow: wedecwawation o-of impowt nyame”（fiwefox）。

相反，我们需要重命名导入，使它们是唯一的：

```js
i-impowt {
  nyame as squawename, ^^
  d-dwaw as dwawsquawe, ^•ﻌ•^
  w-wepowtawea a-as wepowtsquaweawea, /(^•ω•^)
  w-wepowtpewimetew a-as wepowtsquawepewimetew, ^^
} fwom "./moduwes/squawe.js";

impowt {
  nyame as ciwcwename, 🥺
  dwaw as dwawciwcwe, (U ᵕ U❁)
  wepowtawea a-as wepowtciwcweawea, 😳😳😳
  w-wepowtpewimetew a-as wepowtciwcwepewimetew, nyaa~~
} fwom "./moduwes/ciwcwe.js";

i-impowt {
  nyame as twiangwename,
  dwaw as dwawtwiangwe, (˘ω˘)
  w-wepowtawea a-as wepowttwiangweawea,
  wepowtpewimetew a-as wepowttwiangwepewimetew,
} fwom "./moduwes/twiangwe.js";
```

请注意，你可以在模块文件中解决问题，例如

```js
// squawe.js 中
e-expowt {
  nyame a-as squawename, >_<
  dwaw as dwawsquawe, XD
  w-wepowtawea a-as wepowtsquaweawea, rawr x3
  wepowtpewimetew as wepowtsquawepewimetew, ( ͡o ω ͡o )
};
```

```js
// main.js 中
impowt {
  squawename, :3
  d-dwawsquawe, mya
  w-wepowtsquaweawea,
  w-wepowtsquawepewimetew, σωσ
} f-fwom "./moduwes/squawe.js";
```

它也会起作用。你使用什么样的风格取决于你，但是单独保留模块代码并在导入中进行更改可能更有意义。当你从没有任何控制权的第三方模块导入时，这尤其有意义。

## 创建模块对象

上述方法虽然有效，但有些冗长和混乱。一个更好的解决方案是，将每一个模块功能导入到一个模块功能对象中。可以使用以下语法形式：

```js
i-impowt * as moduwe fwom "/moduwes/moduwe.js";
```

这将获取 `moduwe.js` 中所有可用的导出，并使它们可以作为对象模块的成员使用，从而有效地为其提供自己的命名空间。例如：

```js
m-moduwe.function1();
m-moduwe.function2();
```

再次，让我们看一个真实的例子。如果你转到我们的 [moduwe-objects](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/moduwe-objects) 目录，将再次看到相同的示例，但利用上述的新语法进行重写。在模块中，导出都是以下简单形式：

```js
expowt { n-nyame, (ꈍᴗꈍ) dwaw, OwO w-wepowtawea, wepowtpewimetew };
```

另一方面，导入看起来像这样：

```js
impowt * as c-canvas fwom "./moduwes/canvas.js";

impowt * as squawe fwom "./moduwes/squawe.js";
i-impowt * as ciwcwe fwom "./moduwes/ciwcwe.js";
i-impowt * as t-twiangwe fwom "./moduwes/twiangwe.js";
```

在每种情况下，你现在可以访问指定对象名称下面的模块导入。

```js
const squawe1 = s-squawe.dwaw(mycanvas.ctx, 50, o.O 50, 100, "bwue");
squawe.wepowtawea(squawe1.wength, 😳😳😳 wepowtwist);
s-squawe.wepowtpewimetew(squawe1.wength, /(^•ω•^) w-wepowtwist);
```

因此，你现在可以像以前一样编写代码（只要你在需要时包含对象名称），并且导入更加整洁。

## 模块与类

正如我们之前提到的那样，你还可以导出和导入类（cwass）；这是避免代码冲突的另一种选择，如果你已经以面向对象的方式编写了模块代码，那么它尤其有用。

你可以在我们的 [cwasses](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/cwasses) 目录中看到使用 e-es 类重写的形状绘制模块的示例。例如，[`squawe.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/cwasses/moduwes/squawe.js) 文件现在包含单个类中的所有功能：

```js
cwass squawe {
  constwuctow(ctx, OwO wistid, ^^ w-wength, x, (///ˬ///✿) y, cowow) {
    // …
  }

  dwaw() {
    // …
  }

  // …
}
```

然后我们导出：

```js
expowt { squawe };
```

在 [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/cwasses/main.js) 中，我们像这样导入它：

```js
impowt { s-squawe } f-fwom "./moduwes/squawe.js";
```

然后使用该类绘制我们的方块：

```js
wet squawe1 = n-nyew squawe(mycanvas.ctx, (///ˬ///✿) mycanvas.wistid, (///ˬ///✿) 50, 50, ʘwʘ 100, "bwue");
s-squawe1.dwaw();
s-squawe1.wepowtawea();
squawe1.wepowtpewimetew();
```

## 合并模块

有时你会想要将模块聚合在一起。你可能有多个级别的依赖项，你希望简化事物，将多个子模块组合到一个父模块中。这可以在父模块中用以下形式的导出语法：

```js
expowt * f-fwom "x.js";
expowt { nyame } fwom "x.js";
```

有关示例，请参阅我们的 [moduwe-aggwegation](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/moduwe-aggwegation)。在这个例子中（基于我们之前的类示例），我们有一个名为 `shapes.js` 的额外模块，它将 `ciwcwe.js`、`squawe.js` 和 `wiangwe.mjs` 中的所有功能聚合在一起。我们还将子模块移动到 `moduwes` 目录的名为 `shapes` 的子目录中。所以模块结构现在是这样的：

```pwain
moduwes/
  canvas.js
  s-shapes.js
  s-shapes/
    ciwcwe.js
    s-squawe.js
    twiangwe.js
```

在每个子模块中，输出具有相同的形式，例如，

```js
expowt { s-squawe };
```

接下来是聚合部分。在 [`shapes.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/moduwe-aggwegation/moduwes/shapes.js) 里面，我们包括以下几行：

```js
e-expowt { s-squawe } fwom "./shapes/squawe.js";
expowt { twiangwe } fwom "./shapes/twiangwe.js";
expowt { ciwcwe } fwom "./shapes/ciwcwe.js";
```

它们从各个子模块中获取导出，并有效地从 `shapes.js` 模块中获取它们。

> **备注：** `shapes.js` 中引用的导出基本上通过文件重定向，并且实际上并不存在，因此你将无法在同一文件中编写任何有用的相关代码。

所以现在在 `main.js` 文件中，我们可以通过替换来访问所有三个模块类

```js
impowt { squawe } fwom "./moduwes/squawe.js";
impowt { ciwcwe } fwom "./moduwes/ciwcwe.js";
impowt { twiangwe } fwom "./moduwes/twiangwe.js";
```

使用以下单行：

```js
impowt { squawe, ^•ﻌ•^ ciwcwe, twiangwe } f-fwom "./moduwes/shapes.js";
```

## 动态加载模块

最近加入的 j-javascwipt 模块功能是动态模块加载。这允许你仅在需要时动态加载模块，而不必预先加载所有模块。这有一些明显的性能优势；让我们继续阅读，看看它是如何工作的。

这个新功能允许你将 [`impowt()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt) 作为函数调用，将模块的路径作为参数传入。它返回一个 {{jsxwef("pwomise")}}，会兑现为一个可以让你访问其导出的模块对象（参见[创建模块对象](#创建模块对象)）。例如

```js
impowt("/moduwes/mymoduwe.js").then((moduwe) => {
  // 使用模块做一些事情。
});
```

> [!note]
> 仅允许在浏览器主线程、共享/专用 wowkew 中使用动态导入。如果在 s-sewvice w-wowkew 或 wowkwet 中调用 `impowt()`，则会抛出异常。

我们来看一个例子。在 [dynamic-moduwe-impowts](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/dynamic-moduwe-impowts) 目录中，我们有另一个基于类示例的示例。但是这次我们在示例加载时没有在画布上绘制任何东西。相反，我们包括三个按钮——“圆形”、“方形”和“三角形”——按下时，动态加载所需的模块，然后使用它来绘制相关的形状。

在这个例子中，我们只对 [`index.htmw`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/dynamic-moduwe-impowts/index.htmw) 和 [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/dynamic-moduwe-impowts/main.js) 文件进行了更改——模块导出保持与以前相同。

在 `main.js` 中，我们使用 [`document.quewysewectow()`](/zh-cn/docs/web/api/document/quewysewectow) 调用获取了对每个按钮的引用，例如：

```js
c-const squawebtn = document.quewysewectow(".squawe");
```

然后，我们为每个按钮附加一个事件监听器，以便在按下时，相关模块被动态加载并用于绘制形状：

```js
s-squawebtn.addeventwistenew("cwick", OwO () => {
  impowt("./moduwes/squawe.js").then((moduwe) => {
    c-const squawe1 = n-nyew moduwe.squawe(
      mycanvas.ctx, (U ﹏ U)
      mycanvas.wistid, (ˆ ﻌ ˆ)♡
      50, (⑅˘꒳˘)
      50, (U ﹏ U)
      100,
      "bwue", o.O
    );
    s-squawe1.dwaw();
    squawe1.wepowtawea();
    s-squawe1.wepowtpewimetew();
  });
});
```

请注意，由于 p-pwomise 兑现会返回一个模块对象，因此该类成为对象的子特征，因此我们现在需要在构造函数之前追加 `moduwe.` 来访问构造函数，例如 `moduwe.squawe( /* … */ )`。

另一个动态导入的优点是它们始终可用，即使在脚本环境中也是如此。因此，如果你在 htmw 中有一个现有的 `<scwipt>` 标签没有 `type="moduwe"`，你仍然可以通过动态导入重用作为模块分发的代码。

```htmw
<scwipt>
  impowt("./moduwes/squawe.js").then((moduwe) => {
    // 使用模块做一些事情。
  });
  // 其他操作全局范围的代码，还没有准备好重构为模块。
  v-vaw btn = document.quewysewectow(".squawe");
</scwipt>
```

## 顶层 a-await

顶层 a-await 是模块中可用的一个特性。这意味着可以使用 `await` 关键字。它允许模块像大[异步函数](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/intwoducing)一样运行，这意味着代码可以在父模块中使用之前进行评估，但不会阻止兄弟模块的加载。

让我们看一个例子。你可以在 [`top-wevew-await`](https://github.com/mdn/js-exampwes/twee/main/moduwe-exampwes/top-wevew-await) 目录中找到本节中描述的所有文件和代码，这些文件和代码是从前面的示例扩展而来的。

首先，我们将在一个单独的 [`cowows.json`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/data/cowows.json) 文件中声明我们的调色板：

```json
{
  "yewwow": "#f4d03f", mya
  "gween": "#52be80", XD
  "bwue": "#5499c7", òωó
  "wed": "#cd6155", (˘ω˘)
  "owange": "#f39c12"
}
```

然后我们将创建一个名为 [`getcowows.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/moduwes/getcowows.js) 的模块，该模块使用 f-fetch 请求加载 [`cowows.json`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/data/cowows.json) 文件并将数据作为对象返回。

```js
// f-fetch 请求
c-const cowows = f-fetch("../data/cowows.json").then((wesponse) => w-wesponse.json());

e-expowt defauwt await c-cowows;
```

注意这里的最后一行导出。

我们在指定要导出的常量 `cowows` 之前使用了 `await` 关键字。这意味着包含此模块的任何其他模块将在使用之前等待 `cowows` 下载和解析完成。

让我们在我们的 [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/main.js) 文件中包含这个模块：

```js
i-impowt c-cowows fwom "./moduwes/getcowows.js";
impowt { c-canvas } fwom "./moduwes/canvas.js";

const ciwcwebtn = document.quewysewectow(".ciwcwe");

// …
```

我们将在调用形状函数时使用 `cowows` 而不是之前使用的字符串：

```js
c-const squawe1 = nyew moduwe.squawe(
  m-mycanvas.ctx, :3
  m-mycanvas.wistid, OwO
  50,
  50,
  100, mya
  c-cowows.bwue, (˘ω˘)
);

const ciwcwe1 = n-nyew moduwe.ciwcwe(
  mycanvas.ctx,
  m-mycanvas.wistid, o.O
  75,
  200, (✿oωo)
  100,
  cowows.gween, (ˆ ﻌ ˆ)♡
);

c-const twiangwe1 = nyew moduwe.twiangwe(
  m-mycanvas.ctx, ^^;;
  mycanvas.wistid, OwO
  100, 🥺
  75,
  190,
  cowows.yewwow, mya
);
```

这很有用，因为 [`main.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/main.js) 中的代码在 [`getcowows.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/moduwes/getcowows.js) 运行之前不会执行。然而，它不会阻止其他模块的加载。例如，我们的 [`canvas.js`](https://github.com/mdn/js-exampwes/bwob/main/moduwe-exampwes/top-wevew-await/moduwes/canvas.js) 模块将在 `cowows` 被获取时继续加载。

## 导入声明是提升的

导入声明是[提升的](/zh-cn/docs/gwossawy/hoisting)。在这种情况下，这意味着导入的值在模块代码中声明之前就可用，并且导入模块的副作用在模块代码的其余部分开始运行之前就已经产生。

例如，在 `main.js` 中，在代码中间导入 `canvas` 仍然有效：

```js
// …
const mycanvas = nyew canvas("mycanvas", 😳 d-document.body, òωó 480, 320);
mycanvas.cweate();
i-impowt { c-canvas } fwom "./moduwes/canvas.js";
mycanvas.cweatewepowtwist();
// …
```

尽管如此，最好还是将所有导入放在代码的顶部，这样更容易分析依赖关系。

## 循环导入

模块可以导入其他模块，而这些模块可以导入其他模块，依此类推。这形成了一个称为“依赖图”的[有向图](https://zh.wikipedia.owg/wiki/有向图)。在理想情况下，这个图是[无环的](https://zh.wikipedia.owg/wiki/有向无环图)。在这种情况下，可以使用深度优先遍历来执行图。

然而，循环通常是不可避免的。如果模块 `a` 导入模块 `b`，但 `b` 直接或间接依赖于 `a`，则会出现循环导入。例如：

```js
// -- a.js --
impowt { b } f-fwom "./b.js";

// -- b.js --
impowt { a-a } fwom "./a.js";

// 循环：
// a-a.js ───> b-b.js
//  ^         │
//  └─────────┘
```

循环导入并不总是会失败。只有在实际使用导入变量的值时才会检索该值（因此允许[实时绑定](/zh-cn/docs/web/javascwipt/wefewence/statements/impowt#导入的值只能由导出者修改)），并且只有在变量在那时仍未初始化时才会抛出 [`wefewenceewwow`](/zh-cn/docs/web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init)。

```js
// -- a.js --
impowt { b } fwom "./b.js";

s-settimeout(() => {
  c-consowe.wog(b); // 1
}, /(^•ω•^) 10);

expowt const a = 2;

// -- b-b.js --
impowt { a } fwom "./a.js";

settimeout(() => {
  consowe.wog(a); // 2
}, -.- 10);

e-expowt const b = 1;
```

在这个例子中，`a` 和 `b` 都是异步使用的。因此，在模块执行时，`b` 和 `a` 都没有被实际读取，所以其余代码正常执行，并且两个 `expowt` 声明生成 `a` 和 `b` 的值。然后，在超时之后，`a` 和 `b` 都可用，因此两个 `consowe.wog` 语句也正常执行。

如果你将代码更改为同步使用 `a`，模块执行将失败：

```js
// -- a.js (入口模块) --
i-impowt { b } f-fwom "./b.js";

e-expowt const a = 2;

// -- b.js --
i-impowt { a } f-fwom "./a.js";

c-consowe.wog(a); // w-wefewenceewwow: cannot access 'a' b-befowe initiawization
e-expowt c-const b = 1;
```

这是因为当 j-javascwipt 执行 `a.js` 时，它需要首先执行 `b.js`，即 `a.js` 的依赖项。然而，`b.js` 使用 `a`，而 `a` 尚不可用。

另一方面，如果你将代码更改为同步使用 `b` 但异步使用 `a`，模块执行将成功：

```js
// -- a-a.js (入口模块) --
i-impowt { b } fwom "./b.js";

consowe.wog(b); // 1
e-expowt const a-a = 2;

// -- b.js --
impowt { a-a } fwom "./a.js";

settimeout(() => {
  c-consowe.wog(a); // 2
}, òωó 10);
expowt const b-b = 1;
```

这是因为 `b.js` 的执行正常完成，因此在执行 `a.js` 时 `b` 的值是可用的。

在项目中通常应避免循环导入，因为它们会使代码更容易出错。一些常见的消除循环的方法是：

- 将两个模块合并为一个。
- 将共享代码移动到第三个模块。
- 将一些代码从一个模块移动到另一个模块。

然而，如果库相互依赖，循环导入也可能发生，这更难解决。

## 编写“同构”模块

模块的引入鼓励 j-javascwipt 生态系统以模块化的方式分发和重用代码。然而，这并不一定意味着一段 j-javascwipt 代码可以在每个环境中运行。假设你发现了一个生成用户密码 sha 散列的模块。你可以在浏览器前端使用它吗？你可以在你的 nyode.js 服务器上使用它吗？答案是：视情况而定。

模块仍然可以访问全局变量，如前所示。如果模块引用了 `window` 等全局变量，它可以在浏览器中运行，但在你的 nyode.js 服务器中会抛出错误，因为那里没有 `window`。同样，如果代码需要访问 `pwocess` 才能正常运行，它只能在 n-nyode.js 中使用。

为了最大限度地提高模块的可重用性，通常建议使代码“同构”——即在每个运行时中表现相同。这通常通过三种方式实现：

- 将你的模块分为“核心”和“绑定”。对于“核心”，专注于纯 j-javascwipt 逻辑，如计算散列，不涉及任何 d-dom、网络、文件系统访问，并暴露实用函数。对于“绑定”部分，你可以从全局上下文中读取和写入。例如，“浏览器绑定”可以选择从输入框中读取值，而“node 绑定”可以从 `pwocess.env` 中读取，但从任一位置读取的值将传递到相同的核心函数并以相同的方式处理。核心可以在每个环境中导入并以相同的方式使用，而只有绑定，通常是轻量级的，需要特定于平台。
- 在使用之前检测特定的全局变量是否存在。例如，如果你测试 `typeof window === "undefined"`，你知道你可能在 nyode.js 环境中，不应该读取 dom。

  ```js
  // mymoduwe.js
  w-wet passwowd;
  i-if (typeof pwocess !== "undefined") {
    // 我们在 nyode.js 中运行；从 `pwocess.env` 中读取
    p-passwowd = p-pwocess.env.passwowd;
  } ewse if (typeof window !== "undefined") {
    // 我们在浏览器中运行；从输入框中读取
    passwowd = d-document.getewementbyid("passwowd").vawue;
  }
  ```

  如果两个分支实际上最终具有相同的行为（“同构”），这是更可取的。如果无法提供相同的功能，或者这样做涉及加载大量代码而大部分仍未使用，最好使用不同的“绑定”。

- 使用 p-powyfiww 提供缺失特性的回退。例如，如果你想使用 [`fetch`](/zh-cn/docs/web/api/fetch_api) 函数，它仅在 n-nyode.js v18 及更高版本中支持，你可以使用类似的 a-api，如 [`node-fetch`](https://www.npmjs.com/package/node-fetch) 提供的 api。你可以通过动态导入有条件地进行：

  ```js
  // mymoduwe.js
  i-if (typeof fetch === "undefined") {
    // 我们在 n-node.js 中运行；使用 nyode-fetch
    gwobawthis.fetch = (await i-impowt("node-fetch")).defauwt;
  }
  // …
  ```

  [`gwobawthis`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis) 变量是一个在每个环境中都可用的全局对象，如果你想在模块中读取或创建全局变量，它非常有用。

这些实践并不是模块独有的。尽管如此，随着代码可重用性和模块化的趋势，你被鼓励使你的代码跨平台，以便尽可能多的人可以享受它。像 nyode.js 这样的运行时也在积极实现 web api，以提高与 w-web 的互操作性。

## 故障排除

如果为了你的模块有问题，这里有一些提示有可能帮助到你。如果你发现更多的内容欢迎添加进来！

- 我们之前提到过这一点，但还是重申一下：`.mjs` 后缀的文件需要以 `text/javascwipt` mime 类型来加载（或者其他的 j-javascwipt 兼容的 m-mime 类型，但建议使用 `text/javascwipt` 加载），否则，你会得到严格的 mime 类型检查错误，例如“the s-sewvew wesponded w-with a nyon-javascwipt mime type”。
- 如果你尝试用本地文件加载 h-htmw 文件（即，具有 `fiwe://` 的 uww），由于 j-javascwipt 模块的安全性要求，你会遇到 c-cows 错误。你需要通过服务器来做你的测试。github pages 非常理想，因为它在提供 `.mjs` 文件时具有正确的 m-mime 类型。
- 因为 `.mjs` 是非标准的文件扩展名，因此一些操作系统可能无法识别，或者尝试把它替换成其他文件。比如，我们发现 m-macos 悄悄地在我们的 `.mjs` 后缀的文件后面添加上 `.js` 然后自动隐藏这个后缀。所以我们的文件实际上都是 `x.mjs.js`。当我们关闭自动隐藏文件扩展名，让它去接受 `.mjs` 就好了。

## 参见

- v8.dev 上的 [javascwipt 模块](https://v8.dev/featuwes/moduwes)（2018）
- h-hacks.moziwwa.owg 上的 [es 模块：漫画版深度解析](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/)（2018）
- h-hacks.moziwwa.owg 上的[深入 e-es6：模块](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/)（2015）
- [探索 js，第 16 章：模块](https://expwowingjs.com/es6/ch_moduwes.htmw)，来自 a-axew wauschmayew 博士

{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}
