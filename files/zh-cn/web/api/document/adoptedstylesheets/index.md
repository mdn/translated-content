---
title: Document：adoptedStyleSheets 属性
slug: Web/API/Document/adoptedStyleSheets
l10n:
  sourceCommit: 4b218cdd81b9751f5088ba5211f16f31818e7746
---

{{APIRef("CSSOM")}}

{{domxref("Document")}} 接口的 **`adoptedStyleSheets`** 属性用于设置文档使用的构造样式表数组。

> [!NOTE]
> 构建样式表是指使用 [`CSSStyleSheet()` 构造函数](/zh-CN/docs/Web/API/CSSStyleSheet/CSSStyleSheet)以编程方式创建的样式表（与用户代理在从脚本导入样式表时、使用 {{HTMLElement('style')}} 和 {{CSSXref('@import')}} 进行导入，或通过 {{HTMLElement('link')}}）链接时创建的样式表相对比。

相同的构造样式表也可以通过使用 [`ShadowRoot.adoptedStyleSheets`](/zh-CN/docs/Web/API/ShadowRoot/adoptedStyleSheets) 属性与一个或多个 {{domxref("ShadowRoot")}} 实例共享。更改已采用的样式表会影响采用该样式表的所有对象。

该属性中的样式表将与文档的其他样式表一起根据 [CSS 层叠算法](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)进行求值。在规则解析考虑样式表的顺序时，`adoptedStyleSheets` 被假定排列在 [`Document.styleSheets`](/zh-CN/docs/Web/API/Document/styleSheets) 中那些样式表之后。

只有在当前 {{domxref("Document")}} 上下文中使用 [`CSSStyleSheet()` 构造函数](/zh-CN/docs/Web/API/CSSStyleSheet/CSSStyleSheet)创建的样式表才可以被采用。

## 值

该值是 {{domxref("CSSStyleSheet")}} 实例数组，这些实例必须是在同一 {{domxref("Document")}} 上下文中使用 {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} 构造函数创建的。

如果需要修改数组，可以使用像 `push()` 这样的原地修改方法。{{domxref("CSSStyleSheet")}} 实例本身也可以被修改，且这些修改将应用在采用该样式表的任何地方。

在早期版本规范中，该数组是不可修改的，因此添加新样式表的唯一方法是为 `adoptedStyleSheets` 分配一个新的数组。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 数组中的某个 {{domxref("CSSStyleSheet")}} 实例不是使用 [`CSSStyleSheet()` 构造函数](/zh-CN/docs/Web/API/CSSStyleSheet/CSSStyleSheet)创建的，或者是与当前文档不同的文档（例如 iframe 中的文档）中构建的。

## 示例

### 采用样式表

以下代码展示了样式表的构建过程，然后调用 {{domxref("CSSStyleSheet.replaceSync()")}} 将一条规则添加到样式表中。然后样式表会被添加到数组中，并分配给 `adoptedStyleSheets` 属性。

```js
// 创建一个空的“构造的”样式表
const sheet = new CSSStyleSheet();
// 应用一条规则到样式表
sheet.replaceSync("a { color: red; }");

// 将样式表应用到文档中
document.adoptedStyleSheets = [sheet];
```

我们可以使用 {{domxref("CSSStyleSheet.insertRule()")}} 将新规则添加到样式表中。

```js
sheet.insertRule("* { background-color: blue; }");
// 现在文档将显示蓝色背景。
```

### 追加新的样式表

要在 `adoptedStyleSheets` 属性中添加全新的样式表，我们必须创建新的组合数组并为其赋值。下面将使用展开语法进行展示：

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// 合并现有样式表和新的样式表
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## 与影子 DOM 共享样式表

我们可以用类似的方法将样式表共享到影子根中。

```js
// 在文档中创建元素，然后创建影子根：
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

// 在影子 DOM 中采用同一个样式表
shadow.adoptedStyleSheets = [sheet];
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [可构建样式表](https://web.developers.google.cn/articles/constructable-stylesheets)（web.developers.google.cn）
- [使用影子 DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` 构造函数](/zh-CN/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSStyleSheet.deleteRule()")}}
