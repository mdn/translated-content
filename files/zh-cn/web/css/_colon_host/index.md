---
title: ':host'
slug: Web/CSS/:host
---

{{ CSSRef }}

**`:host`** CSS 伪类选择包含其内部使用的 CSS 的 shadow DOM 的根元素 - 换句话说，这允许你从其 shadow DOM 中选择一个自定义元素。

> **备注：** 在 shadow DOM 之外使用时，这没有任何效果。

```css
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```

## 语法

{{csssyntax}}

## 示例

以下片段取自我们的 [host-selectors](https://github.com/mdn/web-components-examples/tree/master/host-selectors) 示例（[在线演示](https://mdn.github.io/web-components-examples/host-selectors/)）。

在这个例子中，我们有一个简单的自定义元素 — `<context-span>` — 你可以包裹文本：

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

在元素的构造函数中，我们创建`style`和`span`元素，用自定义元素的内容填充`span`，并使用一些 CSS 规则填充`style` 元素：

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

`:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` 规则设置`<context-span>`元素的所有实例的样式（此实例中为影子根元素）的所有实例。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参见

- [Web components](/zh-CN/docs/Web/Web_Components)
- {{cssxref(":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
