---
title: <script type="importmap">
slug: Web/HTML/Reference/Elements/script/type/importmap
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

[`<script>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/script)的 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type) 属性的 **`importmap`** 值表示该元素的内容包含一个导入映射。

导入映射是一个 JSON 对象，允许开发者控制浏览器在导入 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)时如何解析模块标识符。
它提供了在 [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)或 [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)中用作模块标识符的文本，与解析该标识符时将替换该文本的对应值之间的映射。
该 JSON 对象必须符合[导入映射 JSON 表示格式](#import_map_json_representation)。

导入映射用于解析静态和动态导入中的模块标识符，因此必须在任何使用映射中声明的标识符导入模块的 `<script>` 元素之前声明和处理。
请注意，导入映射仅适用于加载到文档中的模块中的 [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)或 [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)中的模块标识符；它不适用于 `<script>` 元素的 `src` 属性中指定的路径，也不适用于加载到 worker 或 worklet 中的模块。

更多信息，请参阅 JavaScript 模块指南中的[使用导入映射导入模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)部分。

## 语法

```html
<script type="importmap">
  // 定义导入的 JSON 对象
</script>
```

不得指定 `src`、`async`、`nomodule`、`defer`、`crossorigin`、`integrity` 和 `referrerpolicy` 属性。

### 异常

- `TypeError`
  - : 导入映射定义不是 JSON 对象，`importmap` 键已定义但其值不是 JSON 对象，或者 `scopes` 键已定义但其值不是 JSON 对象。

对于导入映射 JSON 不符合[导入映射](#import_map_json_representation)模式的其他情况，浏览器会生成控制台警告。

## 描述

当导入 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)时，[`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)和 [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)都有一个指示要导入模块的"模块标识符"。
浏览器必须能够将此标识符解析为绝对 URL 才能导入模块。

例如，以下语句从模块标识符 `"https://example.com/shapes/circle.js"`（这是一个绝对 URL）和模块标识符 `"./modules/shapes/square.js"`（这是相对于文档基础 URL 的路径）导入元素。

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./modules/shapes/square.js";
```

导入映射允许开发者在模块标识符中指定（几乎）任何文本；映射提供了在解析模块标识符时将替换该文本的对应值。

### 裸模块

下面的导入映射定义了一个 `imports` 键，它包含一个具有 `circle` 和 `square` 属性的"模块标识符映射"。

```html
<script type="importmap">
  {
    "imports": {
      "circle": "https://example.com/shapes/circle.js",
      "square": "./modules/shapes/square.js"
    }
  }
</script>
```

使用此导入映射，我们可以导入与上述相同的模块，但在模块标识符中使用"裸模块"：

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

### 映射路径前缀

模块标识符映射键也可以用于重新映射模块标识符中的路径前缀。请注意，在这种情况下，属性和映射路径都必须以尾部斜杠（`/`）结尾。

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./modules/shapes/",
      "other-shapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

然后我们可以如下所示导入一个圆形模块。

```js
import { name as circleName } from "shapes/circle.js";
```

### 模块标识符映射键中的路径

模块标识符键不必是单个单词的名称（"裸名称"）。它们还可以包含路径分隔符或以路径分隔符结尾，或者可以是绝对 URL，或者可以是开头为 `/`、`./` 或 `../` 的相对 URL 路径。

```json
{
  "imports": {
    "modules/shapes/": "./modules/src/shapes/",
    "modules/square": "./modules/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./modules/src/other/shapes/square.js",
    "../modules/shapes/": "/modules/shapes/"
  }
}
```

如果模块标识符映射中有多个可能匹配的模块标识符键，则将选择最具体的键（即路径/值较长的那个）。

模块标识符 `./foo/../js/app.js` 将在匹配之前被解析为 `./js/app.js`。这意味着模块标识符键 `./js/app.js` 会匹配该模块标识符，即使它们并不完全相同。

### 作用域模块标识符映射

您可以使用 `scopes` 键来提供仅在导入模块的脚本包含特定 URL 路径时才使用的映射。如果加载脚本的 URL 与提供的路径匹配，则将使用与该作用域关联的映射。这允许根据执行导入的代码使用不同版本的模块。

例如，仅当加载模块的 URL 包含路径 "/modules/custom-shapes/" 时，下面的映射才会使用作用域映射。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js"
    },
    "scopes": {
      "/modules/custom-shapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

如果多个作用域匹配引用 URL，则使用最具体的作用域路径（名称最长的作用域键）。如果没有匹配的标识符，浏览器会回退到下一个最具体的作用域路径，依此类推，最终回退到 `imports` 键中的模块标识符映射。

### 完整性元数据映射

您可以使用 `integrity` 键来提供模块[完整性元数据](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity)的映射。这使您能够确保动态或静态导入模块的完整性。`integrity` 还使您能够为顶层或预加载模块提供回退，以防它们尚未包含 `integrity` 属性。

映射键表示模块 URL，可以是绝对 URL 或相对 URL（以 `/`、`./` 或 `../` 开头）。映射值表示完整性元数据，与 [`integrity`](/zh-CN/docs/Web/HTML/Reference/Elements/script#integrity) 属性值中使用的元数据相同。

例如，下面的映射为 `square.js` 模块（直接）及其裸标识符（间接，通过 `imports` 键）定义了完整性元数据。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./modules/shapes/square.js"
    },
    "integrity": {
      "./modules/shapes/square.js": "sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
    }
  }
</script>
```

### 合并多个导入映射

支持的浏览器可以在文档中的任何位置声明一个或多个导入映射，前提是它们在任何依赖它们的模块加载之前定义（某些[浏览器版本](#browser_compatibility)只允许单个导入映射声明，且必须在任何模块加载之前出现）。

在内部，浏览器维护一个单一的全局导入映射表示。当文档中包含多个导入映射时，它们的内容在注册时会被合并到全局导入映射中。

例如，考虑以下两个导入映射：

```html
<script type="importmap">
  {
    "imports": {
      "/app/": "./original-app/"
    }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs"
    },
    "scopes": {
      "/js": {
        "/app/": "./js-app/"
      }
    }
  }
</script>
```

它们等同于以下单个导入映射：

```html
<script type="importmap">
  {
    "imports": {
      "/app/": "./original-app/",
      "/app/helper": "./helper/index.mjs"
    },
    "scopes": {
      "/js": {
        "/app/": "./js-app/"
      }
    }
  }
</script>
```

每个已注册映射中已经事先解析过的模块标识符会被丢弃。这些标识符的后续解析将提供与其先前解析相同的结果。

例如，如果模块标识符 `/app/helper.js` 已经被解析，那么以下新的导入映射：

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper.js": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

将等同于：

```html
<script type="importmap">
  {
    "imports": {
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

`/app/helper.js` 规则被忽略，且未纳入映射中。

类似地，已注册映射中那些已经在全局映射中映射到 URL 的模块标识符会被丢弃；它们先前的映射优先。

例如，以下两个导入映射：

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./main/helper/index.mjs"
    }
  }
</script>
```

等同于以下单个导入映射：

```html
<script type="importmap">
  {
    "imports": {
      "/app/helper": "./helper/index.mjs",
      "lodash": "/node_modules/lodash-es/lodash.js"
    }
  }
</script>
```

第二个映射中的 `/app/helper/` 规则被丢弃。

> [!NOTE]
> 在不支持的浏览器中（查看[兼容性数据](#browser_compatibility)），可以使用[填充库](https://github.com/guybedford/es-module-shims)来避免与模块解析相关的问题。

## 导入映射 JSON 表示

以下是导入映射 JSON 表示的"正式"定义。

导入映射必须是一个有效的 JSON 对象，可以定义任意可选键 `imports`、`scopes` 和 `integrity`。每个键的值必须是一个对象，可以为空。

- `imports` {{optional_inline}}
  - : 该值是一个[模块标识符映射](#module_specifier_map)，提供了可能出现在 `import` 语句或 `import()` 运算符中的模块标识符文本与解析标识符时将替换它的文本之间的映射。

    这是在没有匹配的 `scopes` 路径 URL，或匹配的 `scopes` 路径中的模块标识符映射不包含与模块标识符匹配的键时，用于搜索匹配模块标识符的回退映射。
    - `<module specifier map>`
      - : "模块标识符映射"是一个有效的 JSON 对象，其中 **_键_** 是导入模块时可能出现在模块标识符中的文本，对应的 **_值_** 是在将模块标识符解析为地址时将替换此文本的 URL 或路径。

        模块标识符映射 JSON 对象有以下要求：
        - 所有键都不能为空。
        - 所有值必须是字符串，定义有效的绝对 URL 或以 `/`、`./` 或 `../` 开头的有效 URL 字符串。
        - 如果键以 `/` 结尾，则对应的值也必须以 `/` 结尾。
          尾部斜杠的键可用作映射（或重新映射）模块地址时的前缀。
        - 对象属性的顺序无关紧要：如果多个键可以匹配模块标识符，则使用最具体的键（换句话说，标识符 "olive/branch/" 会比 "olive/" 先匹配）。

- `integrity` {{optional_inline}}
  - : 定义一个有效的 JSON 对象，其中 **_键_** 是包含有效绝对或相对 URL（以 `/`、`./` 或 `../` 开头）的字符串，
    对应的 **_值_** 是有效的[完整性元数据](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity#using_subresource_integrity)。

    如果导入或预加载模块的脚本的 URL 与 `integrity` 对象中的某个键匹配，则相应的完整性元数据将应用于该脚本的获取选项，
    除非它们已经附加了完整性元数据。

- `scopes` {{optional_inline}}
  - : 作用域定义了特定于路径的[模块标识符映射](#module_specifier_map)，允许映射的选择取决于导入模块的代码的路径。

    scopes 对象是一个有效的 JSON 对象，其中每个属性是一个 `<scope key>`（即 URL 路径），对应的值是一个 `<module specifier map>`。

    如果导入模块的脚本的 URL 与 `<scope key>` 路径匹配，则首先检查与该键关联的 `<module specifier map>` 值以查找匹配的标识符。
    如果有多个匹配的作用域键，则首先检查与最具体/嵌套最深的作用域路径关联的值以查找匹配的模块标识符。
    如果在任何匹配的作用域模块标识符映射中没有匹配的模块标识符键，则使用 `imports` 中的回退模块标识符映射。

    请注意，作用域不会改变地址的解析方式；相对地址始终相对于导入映射基础 URL 进行解析。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 模块 > 使用导入映射导入模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [HTML `<script>` 元素的 `type` 属性](/zh-CN/docs/Web/HTML/Reference/Elements/script/type)
- [`import` 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)