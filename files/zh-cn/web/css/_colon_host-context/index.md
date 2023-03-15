---
title: ':host-context()'
slug: Web/CSS/:host-context
---

{{CSSRef}}{{SeeCompatTable}}

**`:host-context()`** [CSS 伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)的作用是选择 shadow DOM 中 shadow host，这个伪类内可以写关于该 shadow host 的 CSS 规则。 (我们可以从 shadow DOM 中选择一个自定义元素 custom element) — 但前提是，在 DOM 层级中，括号中的选择器参数必须和 shadow host 的祖先相匹配。

典型的使用方法是后代选择器表达式。例如 `h1` — 只选择在`<h1>` 内的自定义元素的实例。

> **备注：** 该伪类的 css 样式在 shadow DOM 之外的元素上是没有效果的

```css
/* 选择了一个 shadow root host，当且仅当这个
 shadow root host 是括号中选择器参数 (h1) 的后代 */

:host-context(h1) {
  font-weight: bold;
}

:host-context(main article) {
  font-weight: bold;
}
```

## Syntax

{{CSSSyntax}}

## Examples

下边的代码片段来自 [host-selectors](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([这里查看样式效果](https://mdn.github.io/web-components-examples/host-selectors/))。

在本例中，我们有一个简单的自定义元素 — `<context-span>` — 你可以把文字包裹在该自定义标签中：

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

在自定义元素的构造器函数中，我们创建 `style` 和 `span` 元素。让 `span` 里呈现的是自定义元素的文字内容，并且给`style` 元素一些 CSS 规则。

```js
let style = document.createElement('style');
let span = document.createElement('span');
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({mode: 'open'});
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent = 'span:hover { text-decoration: underline; }' +
                    ':host-context(h1) { font-style: italic; }' +
                    ':host-context(h1):after { content: " - no links in headers!" }' +
                    ':host-context(article, aside) { color: gray; }' +
                    ':host(.footer) { color : red; }' +
                    ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';
```

`:host-context(h1) { font-style: italic; }` 和 `:host-context(h1):after { content: " - no links in headers!"` 这些 CSS 规则规定了位于`<h1>` 标签内部的 `<context-span>` 元素的实例的样式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web components](/zh-CN/docs/Web/Web_Components)
- {{cssxref(":host")}}
- {{cssxref(":host()")}}
