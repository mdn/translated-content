---
title: :host-context()
slug: Web/CSS/:host-context
---

{{CSSRef}}

**`:host-context()`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)函数选择内部使用了该 CSS 的[影子 DOM（shadow DOM）](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)的影子宿主（shadow host），因此你可以从其影子 DOM 内部选择自定义元素——但前提是作为函数参数的选择器与影子宿主的祖先在 DOM 层次结构中的位置匹配。

换句话说，这允许自定义元素或其影子 DOM 内的任何内容根据其在外部 DOM 中的位置或应用于祖先元素的类/属性应用不同的样式。

这样子做的一个典型用法是与后代选择器表达式（例如 h1）一起使用，仅选择在 `<h1>` 内的自定义元素的实例。另一个典型用法是允许内部元素对任何祖先元素上的类或属性做出反应，例如，在将 `.dark-theme` 类应用于 `<body>` 时应用不同的文本颜色。

> [!NOTE]
> 这在影子 DOM 之外使用时无效。

```css
/* 选择影子根宿主，仅当它是给定的选择器参数的后代 */
:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}

/* 当 .dark-theme 类应用于文档 body 时，将段落文本颜色从黑色更改为白色 */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
```

## 语法

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## 示例

下边的代码片段来自 [host-selectors 示例](https://github.com/mdn/web-components-examples/tree/master/host-selectors)（[也可以在线查看](https://mdn.github.io/web-components-examples/host-selectors/)）。

在本例中，我们有一个简单的自定义元素（`<context-span>`），你可以把文字包裹在该自定义标签中：

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

在自定义元素的构造器函数中，我们创建 `style` 和 `span` 元素。让 `span` 里呈现的是自定义元素的文字内容，并且给 `style` 元素一些 CSS 规则。

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

`:host-context(h1) { font-style: italic; }` 和 `:host-context(h1):after { content: " - no links in headers!" }` 规则应用 `<h1>` 内部的 `<context-span>` 元素实例（在此实例中为影子宿主）。我们使用它来明确指出：在我们的设计中，自定义元素不应出现在 `<h1>` 内部。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 组件](/zh-CN/docs/Web/API/Web_components)
- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
