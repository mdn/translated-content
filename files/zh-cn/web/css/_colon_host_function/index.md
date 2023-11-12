---
title: ":host()"
slug: Web/CSS/:host_function
---

{{seecompattable}}{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)函数 **`:host()`** 选择包含使用这段 CSS 的 [Shadow DOM](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的影子宿主（这样就可以从 Shadow DOM 中选择包括它的自定义元素）——但前提是该函数的参数与选择的阴影宿主相匹配。

最简单的用法是仅将类名放在某些自定义元素实例上，然后将相关的类选择器作为函数参数包含在内。不能将它与后代选择器表达式一起使用，以仅选择特定祖先内部的自定义元素的实例。这是 {{cssxref(":host-context()")}} 的作用。

> **备注：** 在 shadow DOM 之外使用时，这没有任何效果。

```css
/* 选择阴影根元素，仅当它与选择器参数匹配 */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## 语法

```
:host( <compound-selector> )
```

## 示例

以下片段取自我们的[宿主选择器示例](https://github.com/mdn/web-components-examples/tree/master/host-selectors)（[也可以观看在线演示](https://mdn.github.io/web-components-examples/host-selectors/)）。

在这个例子中，有一个简单的自定义元素 `<context-span>` 可以用它包裹文本：

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

在元素的构造函数中，创建`style`和`span`元素，填充`span`自定义元素的内容，并`style`使用一些 CSS 规则填充元素：

```js
let style = document.createElement("style");
let span = document.createElement("span");
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

`:host(.footer) { color : red; }` 规则为文档中所有在其上设置了 `footer` 类的`<context-span>` 元素实例（此实例中的影子宿主）设置样式——使用它来为 {{htmlelement("footer")}} 中的元素提供实例一种特殊的颜色。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web components](/zh-CN/docs/Web/API/Web_components)
- {{cssxref(":host-context", ":host-context()")}}
- {{cssxref(":host")}}
