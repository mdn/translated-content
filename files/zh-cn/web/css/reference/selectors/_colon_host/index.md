---
title: :host
slug: Web/CSS/Reference/Selectors/:host
---

**`:host`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)选择内部使用了该 CSS 的[影子 DOM（shadow DOM）](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM) 的影子宿主（shadow host）——换句话说，这允许你从其影子 DOM 内部选择自定义元素。

> [!NOTE]
> 这不适用于在影子 DOM 之外使用。

```css
/* 选择影子根宿主 */
:host {
  font-weight: bold;
}
```

## 语法

```css
:host {
  /* ... */
}
```

## 示例

### 给影子宿主添加样式

下面的片段摘自我们的 [host-selectors 示例](https://github.com/mdn/web-components-examples/tree/main/host-selectors)（[也可以在线查看](https://mdn.github.io/web-components-examples/host-selectors/)）。

在此示例中，我们有一个简单的自定义元素（`<context-span>`）你可以将其包装在文本周围：

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

在元素的构造函数中，我们创建了 `style` 和 `span` 元素，用自定义元素的内容填充 `span`，并用一些 CSS 规则填充 `style` 元素。

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

`:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` 规则为文档中 `<context-span>` 元素（在文档中为影子宿主）的所有实例设置样式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 组件](/zh-CN/docs/Web/API/Web_components)
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
