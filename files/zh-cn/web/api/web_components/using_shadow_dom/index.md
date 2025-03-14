---
title: 使用影子 DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 4cc4cc8b3a6ff7889ac62b52e035bb4c174b31b4
---

{{DefaultAPISidebar("Web Components")}}

自定义元素的一个重要方面是封装，因为自定义元素从定义上来说是一种可重用功能：它可以被放置在任何网页中，并且期望它能够正常工作。因此，很重要的一点是，运行在页面中的代码不应该能够通过修改自定义元素的内部实现而意外地破坏它。影子 DOM（Shadow DOM）允许你将一个 DOM 树附加到一个元素上，并且使该树的内部对于在页面中运行的 JavaScript 和 CSS 是隐藏的。

本文介绍了使用影子 DOM 的基础知识。

## 高层次概览

本文假设你已经熟悉 [DOM（文档对象模型）](/zh-CN/docs/Web/API/Document_Object_Model/Introduction)的概念——一种连接节点的树状结构，代表标记文档（通常是在 web 文档中的 HTML 文档）中出现的不同元素和文本字符串。作为示例，请考虑以下 HTML 片段：

```html
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>DOM 示例</title>
  </head>
  <body>
    <section>
      <img src="dinosaur.png" alt="一个红色的霸王龙。" />
      <p>
        这里我们将添加一个到
        <a href="https://www.mozilla.org/">Mozilla 主页</a>的链接
      </p>
    </section>
  </body>
</html>
```

这个片段生成了以下的 DOM 结构（不包括仅包含空格的文本节点）：

```plain
- HTML
    - HEAD
        - META charset="utf-8"
        - TITLE
            - #text: DOM 示例
    - BODY
        - SECTION
            - IMG src="dinosaur.png" alt="一个红色的霸王龙。"
            - P
                - #text: 这里我们将添加一个到
                - A href="https://www.mozilla.org/"
                - #text: Mozilla 主页
                - #text: 的链接
```

_影子_ DOM 允许将隐藏的 DOM 树附加到常规 DOM 树中的元素上——这个影子 DOM 始于一个影子根，在其之下你可以用与普通 DOM 相同的方式附加任何元素。

![显示文档、影子根和影子宿主交互的图示的 SVG 版本。](shadowdom.svg)

有一些影子 DOM 术语需要注意：

- **影子宿主（Shadow host）**: 影子 DOM 附加到的常规 DOM 节点。
- **影子树（Shadow tree）**: 影子 DOM 内部的 DOM 树。
- **影子边界（Shadow boundary）**: 影子 DOM 终止，常规 DOM 开始的地方。
- **影子根（Shadow root）**: 影子树的根节点。

你可以用与非影子节点完全相同的方式来影响影子 DOM 中的节点——例如添加子节点和设置属性、使用 element.style.foo 对单个节点进行样式设置，或将整个影子树内的样式添加到一个 {{htmlelement("style")}} 元素中。不同之处在于影子 DOM 内的所有代码都不会影响它的外部，从而便于实现封装。

在影子 DOM 向 web 开发者提供之前，浏览器已经使用它来封装元素的内部结构。以 {{htmlelement("video")}} 元素举例，它暴露了默认浏览器控件。在 DOM 中你只能看到 `<video>` 元素，但其影子 DOM 中包含了一系列按钮和其它控件。影子 DOM 规范使你能够操纵自定义元素的影子 DOM。

## 创建一个影子 DOM

下面的页面包含两个元素，一个 [`id`](/zh-CN/docs/Web/HTML/Global_attributes/id) 属性为 `"host"` 的 {{htmlelement("div")}} 元素，以及一个包含了一些文本的 {{htmlelement("span")}} 元素：

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

我们将使用 `"host"` 元素作为影子宿主。我们调用宿主上的 {{domxref("Element.attachShadow()", "attachShadow()")}} 来创建影子 DOM，然后可以像我们将节点添加到主 DOM 一样将节点添加到影子 DOM 中。在这个示例中，我们添加了单个 `<span>` 元素：

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

结果看起来像这样：

{{EmbedLiveSample("创建一个影子 DOM")}}

## JavaScript 封装

目前这可能看起来并不怎么样。但让我们看看如果页面中运行的代码试图访问影子 DOM 中的元素会发生什么。

这个页面就像上一个一样，只是我们添加了两个 {{htmlelement("button")}} 元素。

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">将 span 元素转换为大写</button>
<button id="reload" type="button">重新加载</button>
```

点击“将 span 元素转换为大写”按钮将找到页面中所有 `<span>` 元素并将它们的文本改变为大写。
点击“重新加载”按钮只会重新加载页面，这样你就可以再次尝试。

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(document.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

如果你点击“将 span 元素转换为大写”，你将看到 {{domxref("Document.querySelectorAll()")}} 并没有找到在我们影子 DOM 中元素：它们对页面中的 JavaScript 来说基本上是隐藏的：

{{EmbedLiveSample("JavaScript 封装")}}

## Element.shadowRoot 和“mode”选项

在上面的例子中，我们将一个参数 `{ mode: "open" }` 传入 `attachShadow()`。当 `mode` 设置为 `"open"` 时，页面中的 JavaScript 可以通过影子宿主的 {{domxref("Element.shadowRoot", "shadowRoot")}} 属性访问影子 DOM 的内部。

在这个例子中，就像之前一样，HTML 包含影子宿主、主 DOM 树中的一个 `<span>` 元素以及两个按钮：

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">将 span 元素转换为大写</button>
<button id="reload" type="button">重新加载</button>
```

这次，“大写”按钮使用 `shadowRoot` 来找到 DOM 中的 `<span>` 元素：

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

这次，页面中运行的 JavaScript 可以访问影子 DOM 内部：

{{EmbedLiveSample("Element.shadowRoot 和“mode”选项")}}

使用 `{mode: "open"}` 参数为页面提供一种破坏影子 DOM 封装的方法。如果你不希望给页面这个能力，传递 `{mode: "closed"}` 作为替代，此时 `shadowRoot` 返回 `null`。

然而，你不应将这视为一个强大的安全机制，因为它可以被绕过，比如通过在页面中运行的浏览器扩展。这更多地是一个指示页面不应访问影子 DOM 树内部的一种提示。

## CSS 封装

在这个版本的页面中，HTML 与原始版本相同：

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

在 JavaScript 中，我们创建影子 DOM：

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

这次，我们将具有针对页面中 `<span>` 元素的一些 CSS：

```css
span {
  color: blue;
  border: 1px solid black;
}
```

页面的 CSS 不会影响影子 DOM 内的节点：

{{EmbedLiveSample("CSS 封装")}}

## 在影子 DOM 内应用样式

在这个部分，我们将看到两种不同的方法来在影子 DOM 树中应用样式：

- [_编程式_](#可构造样式表)，通过构建一个 {{domxref("CSSStyleSheet")}} 对象并将其附加到影子根。
- [_声明式_](#在_template_声明中添加_style_元素)，通过在一个 {{htmlelement("template")}} 元素的声明中添加一个 {{htmlelement("style")}} 元素。

在这两种情况下，影子 DOM 树中定义的样式局限在该树内，所以就像页面样式就像不会影响影子 DOM 中的元素一样，影子 DOM 样式也不会影响页面中其它元素的样式。

### 可构造样式表

要使用可构造样式表为影子 DOM 中的页面元素设置样式，我们可以：

1. 创建一个空的 {{domxref("CSSStyleSheet")}} 对象
2. 使用 {{domxref("CSSStyleSheet.replace()")}} 或 {{domxref("CSSStyleSheet.replaceSync()")}} 设置其内容
3. 通过将其赋给 {{domxref("ShadowRoot.adoptedStyleSheets")}} 来添加到影子根

在 `CSSStyleSheet` 中定义的规则将局限在影子 DOM 树的内部，以及我们将其分配到的任何其它 DOM 树。

这里，同样是包含宿主（host）和一个 `<span>` 的 HTML：

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

这次我们将创建影子 DOM 并将一个 `CSSStyleSheet` 对象赋给它：

```js
const sheet = new CSSStyleSheet();
sheet.replaceSync("span { color: red; border: 2px dotted black;}");

const host = document.querySelector("#host");

const shadow = host.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [sheet];

const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

影子 DOM 树中定义的样式不会应用到页面的其它部分：

{{EmbedLiveSample("可构造样式表")}}

### 在 `<template>` 声明中添加 `<style>` 元素

构建 `CSSStyleSheet` 对象的一个替代方法是将一个 {{htmlelement("style")}} 元素包含在用于定义 web 组件的 {{htmlelement("template")}} 元素中。

在这种情况下，HTML 包含 `<template>` 声明

```html
<template id="my-element">
  <style>
    span {
      color: red;
      border: 2px dotted black;
    }
  </style>
  <span>I'm in the shadow DOM</span>
</template>

<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

在 JavaScript 中，我们将创建影子 DOM 并将 `<template>` 的内容添加到其中：

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

同样地，在 `<template>` 中定义的样式局限在影子 DOM 树内，而不是在页面的其它部分：

{{EmbedLiveSample("在_template_声明中添加_style_元素")}}

### 在编程式和声明式中选择

使用哪种方式取决于你的应用程序和个人喜好。

创建一个 `CSSStyleSheet` 并通过 `adoptedStyleSheets` 将其赋给影子根允许你创建单一样式表并将其与多个 DOM 树共享。例如，一个组件库可以创建单个样式表，然后将其与该库的所有自定义元素共享。浏览器将仅解析该样式表。此外，你可以对样式表进行动态更改，并将更改传播到使用表的所有组件。

而当你希望是声明式的、需要较少的样式并且不需要在不同组件之间共享样式的时候，附加 `<style>` 元素的方法则非常适合。

## 影子 DOM 和自定义元素

如果没有影子 DOM 提供的封装，[自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)将变得无法使用。只需在某个页面上运行一些 JavaScript 或 CSS，就有可能无意间破坏自定义元素的行为或布局。作为自定义元素的开发者，你将无法知道适用于自定义元素内部的选择器是否与使用你自定义元素的页面中应用的选择器发生冲突。

自定义元素被实现为一个类，它可以继承 {{domxref("HTMLElement")}} 或像 {{domxref("HTMLParagraphElement")}} 这样的内置 HTML 元素。通常，自定义元素本身是一个影子宿主，该元素在其根节点下创建多个元素，以提供元素的内部实现。

下面的示例创建了一个 `<filled-circle>` 自定义元素，该元素仅渲染一个填充了实心颜色的圆形。

```js
class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // 创建一个影子根
    // 自定义元素自身是影子宿主
    const shadow = this.attachShadow({ mode: "open" });

    // 创建内部实现
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);

    shadow.appendChild(svg);
  }
}

customElements.define("filled-circle", FilledCircle);
```

```html
<filled-circle color="blue"></filled-circle>
```

{{EmbedLiveSample("影子 DOM 和自定义元素", 100, 160)}}

对于更多示例和描述自定义元素实现的不同方面，请参见我们的[自定义元素指南](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)。

## 参见

- [使用自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)
- [使用模板和插槽](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)
- {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{HTMLelement("template")}}
- [CSS 域](/zh-CN/docs/Web/CSS/CSS_scoping)模块
- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- [CSS 影子部件](/zh-CN/docs/Web/CSS/CSS_shadow_parts)模块
- {{CSSXref("::part")}}
