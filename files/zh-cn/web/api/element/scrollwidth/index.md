---
title: Element：scrollWidth 属性
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: b4778812842c207fa8bcb4b367644c61720d1f35
---

{{APIRef("DOM")}}

**`Element.scrollWidth`** 只读属性是元素内容宽度的一种度量，包括由于溢出而在屏幕上不可见的内容。

`scrollWidth` 值等于元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。宽度的测量方式与 {{domxref("Element.clientWidth", "clientWidth")}} 相同：它包含元素的内边距，但不包括边框、外边距或垂直滚动条（如果存在）。它还可以包括伪元素的宽度，例如 {{cssxref("::before")}} 或 {{cssxref("::after")}}。如果元素的内容可以在不需要水平滚动条的情况下容纳，则其 `scrollWidth` 等于 {{domxref("Element.clientWidth", "clientWidth")}}。

> [!NOTE]
> 该属性会将值取整成整数。如果你需要小数值，请使用 {{domxref("Element.getBoundingClientRect()")}}。

## 值

一个整数。

## 示例

### 检测内容溢出

在此示例中，我们使用 `scrollWidth` 属性来检查元素的内容是否溢出其边界。我们有两个 `div` 元素，第一个的宽度为 `100px`，而第二个的宽度不固定。它们的内容完全相同，我们会显示一条消息，说明内容是否溢出了各自的容器。

#### HTML

```html
<div id="div1">这是一条很长很长的内容</div>
<button id="button1">溢出检查</button>
<pre id="log1"></pre>
<div id="div2">这是一条很长很长的内容</div>
<button id="button2">溢出检查</button>
<pre id="log2"></pre>
```

#### CSS

```css
div {
  padding: 0.15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  margin: 0.15em 0 0.5em 0;
}

pre {
  margin: 0.5em 0;
}

#div1 {
  width: 100px;
}

#log1 {
  margin-bottom: 2em;
}
```

#### JavaScript

```js
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const log1 = document.getElementById("log1");
const log2 = document.getElementById("log2");

// 检查 scrollWidth 是否大于 clientWidth
function isOverflowing(element) {
  return element.scrollWidth > element.clientWidth;
}

function checkOverflow(element, log) {
  if (isOverflowing(element)) {
    log.innerText = `内容溢出，scrollWidth 为 ${element.scrollWidth}px`;
  } else {
    log.innerText = `没有溢出，scrollWidth 为 ${element.scrollWidth}px`;
  }
}

button1.addEventListener("click", () => {
  checkOverflow(div1, log1);
});

button2.addEventListener("click", () => {
  checkOverflow(div2, log2);
});
```

#### 结果

单击按钮检查内容是否溢出容器。

{{EmbedLiveSample("检测内容溢出", "100%", "190")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.clientWidth")}}
- [确定元素的尺寸](/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
