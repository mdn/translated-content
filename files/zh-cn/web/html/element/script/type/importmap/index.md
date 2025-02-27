---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 85ee57ef02a1cc0d104d3db2c81a4a45cb71011b
---

{{HTMLSidebar}}

[`<script>` 元素](/zh-CN/docs/Web/HTML/Element/script)的 [`type`](/zh-CN/docs/Web/HTML/Element/script/type) 属性的 **`importmap`** 值表示元素的主体包含一个导入映射。

导入映射（import map）是一个 JSON 对象，其允许开发者在导入 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)时，控制浏览器如何解析模块标识符。它提供了在 [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)或 [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)中用作模块标识符的文本，其会在解析标识符时与要替换的文本之间建立映射。JSON 对象必须符合[导入映射 JSON 表示格式](#导入映射_json_表示)。

导入映射用于解析静态和动态导入中的模块标识符，因此必须在使用映射表中声明的标识符导入模块的任何 `<script>` 元素之前声明和处理。注意，导入映射仅适用于在 [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)或 [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)中的模块标识符；它不适用于 `<script>` 元素的 `src` 属性中指定的路径，也不适用加载到 worker 或 worklet 中的模块。

有关更多信息，请参见 JavaScript 模块指南的[使用导入映射导入模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#使用导入映射导入模块)部分。

## 语法

```html
<script type="importmap">
  // 定义导入的 JSON 对象
</script>
```

不得指定 `src`、`async`、`nomodule`、`defer`、`crossorigin`、`integrity` 和 `referrerpolicy` 属性。

仅处理文档中具有内联定义的第一个导入映射；忽略任何额外的导入映射和外部导入映射。

### 异常

- `TypeError`
  - : 导入映射的定义不是 JSON 对象、`importmap` 键已定义但它的值不是 JSON 对象或 `scopes` 键已定义但它的值不是 JSON 对象。

对于导入映射 JSON 不符合[导入映射](#导入映射_json_表示)模式的其他情况，浏览器会生成控制台警告。

如果 script 元素中的 `type="importmap"` 没有被处理，则会触发 [`error` 事件](/zh-CN/docs/Web/API/HTMLElement/error_event)。这是可能发生的，例如，在处理导入模块时模块已经开始加载，或页面中定义了多个导入映射。

## 描述

当导入 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)时，[`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)和 [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)都有一个“模块标识符”，其指示要导入的模块。浏览器必须能够将此标识符解析为绝对路径，才能导入模块。

例如，以下语句从模块标识符 `"./modules/shapes/square.js"` 导入元素，其是一个相对于文档的基础 URL 路径，而模块标识符 `"https://example.com/shapes/circle.js"` 是一个绝对路径。

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

导入映射允许开发者在模块标识中指定（几乎）他们想要的任意文本；映射提供了一个相应的值，该值在解析模块标识符时替换文本。

### 裸模块

下面的导入映射定义了一个 `imports` 键，该键具有属性为 `square` 和 `circle` 的“模块标识符映射”。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

使用导入映射，我们可以导入以上相同的模块，但在我们的模块标识符要使用“裸模块（bare module）”。

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### 映射路径前缀

模块标识符映射键也可用于重新映射模块标识符中的路径前缀。请注意，在这种情况下，属性和映射路径都必须有一个尾随的正斜杠（`/`）。

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./module/shapes/",
      "othershapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

然后我们可以这样导入 circle 模块。

```js
import { name as squareName, draw } from "shapes/circle.js";
```

### 模块标识符映射键中的路径

模块标识符键不必是单个单词名称（“裸模块的名称”）。它们也可以包含路径分隔符或者以路径分隔符结尾，或者是绝对 URL，或者以 `/`、`./` 或 `../` 开始的相对 URL。

```json
{
  "imports": {
    "modules/shapes/": "./module/src/shapes/",
    "modules/square": "./module/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./module/src/other/shapes/square.js",
    "../modules/shapes/": "/modules/shapes/"
  }
}
```

如果模块标识符映射中对应几个可能匹配的模块标识符键，则将选择最具体的键（即具有较长路径/值的键）。

在匹配之前，`./foo/../js/app.js` 的模块说明符将解析为 `./js/app.js`。这意味着，即使 `./js/app.js` 的模块标识符键与模块标识符不完全相同，它们也是匹配的。

### 作用域模块标识符映射

你可以使用 `scopes` 键提供映射，仅当导入模块的脚本包含特定的 URL 路径时才使用。仅当导入模块的脚本包含一个指定的 URL 路径时，你才可以使用 `scopes` 键去提供映射。如果加载的脚本 URL 匹配提供的路径，则将使用与作用域相关联的映射。这允许根据正在导入的代码使用不同版本的模块。

例如，仅有加载的模块包含以下路径的 URL：“/modules/customshapes/”，映射才会使用作用域映射。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "scopes": {
      "/modules/customshapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

如果多个作用域与引用 URL 匹配，则使用最具体的作用域路径（具有最长名称的作用域键名称）。如果没有匹配的标识符，浏览器将会回落到下一个更具体的作用域路径，以此类推，最后会回落到 `imports` 键的模块标识符映射。

## 导入映射 JSON 表示

以下是导入映射 JSON 表示的“正式”定义。

导入映射必须是有效的 JSON 对象，最多可以定义两个可选键：`imports` 和 `scopes`。每个键值必须是对象，可以是空。

- `imports` {{optional_inline}}

  - : 该值是[模块标识符映射](#module_specifier_map)，它提供可能在 `import` 语句或 `import()` 运算符中出现的模块标识符文本，其会在解析时与替换它的文本之间建立映射。

    如果没有 `scopes` 路径 URL 匹配，或者如果匹配 `scopes` 路径中的模块标识符映射不包含与模块标识符匹配的键，这将是搜索匹配模块标识符的回退映射。

    - `<module specifier map>`

      - : “模块标识符映射”是一个有效的 JSON 对象，其中*键*是在导入模块时，模块标识符可能存在的文本，并且相应的*值*时模块标识符解析为地址时将替换词文本的 URL 或路径。

        模块标识符映射 JSON 对象有以下要求：

        - 没有键可以是空的。
        - 所有的值必须是字符串。定义有效的绝对 URL 或者以 `/`、`./` 或 `../` 开始的相对 URL。
        - 如果一个键以 `/` 结尾，那么相应的值也必须以 `/` 结尾。带有尾随的 `/` 键可以用作映射（或重新映射）模块地址的前缀。
        - 对象属性的顺序无关紧要：如果多个键可以匹配模块标识符，则使用最具体的键（换句话说，标识符“olive/branch/”将在“olive/”之前匹配）。

- `scopes` {{optional_inline}}

  - : 作用域定义了特定于路径的[模块标识符映射](#module_specifier_map)，这允许映射的选择取决于导入模块的代码路径。

    作用域对象是一个有效的 JSON 对象，其每个属性都是一个 `<scope key>`（URL 路径），并且相应的值是一个 `<module specifier map>`。

    如果导入模块脚本的 URL 匹配 `<scope key>` 路径，则首先检查与该键关联的 `<module specifier map>` 值是否匹配标识符符。如果有多个匹配的作用域键，则首先检查与最具体/嵌套的作用域路径关联的值是否匹配模块标识符。如果任何匹配的作用域模块标识符映射中没有匹配的模块标识符键，则使用 `imports` 中，备用的模块标识符映射。

    请注意，作用域不会改变地址的解析方式；相对地址总是解析为导入映射的基础 URL。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 模块 > 使用导入映射导入模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#使用导入映射导入模块)
- [HTML `<script>` 元素的 `type` 属性](/zh-CN/docs/Web/HTML/Element/script#type)
- [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)
