---
title: Element：ariaBrailleLabel 属性
short-title: ariaBrailleLabel
slug: Web/API/Element/ariaBrailleLabel
l10n:
  sourceCommit: 913db38a206684e0e39db4b0443c62798be94e76
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaBrailleLabel`** 属性反映了 [`aria-braillelabel`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) 属性的值，该属性定义了元素的 ARIA 盲文标签。

此元素标签可能会被能够以盲文呈现内容的辅助技术使用，但仅当特定于盲文的标签能够改善用户体验时才应设置。[`aria-braillelabel`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) 包含有关何时应设置该属性的更多信息。

## 值

- `<string>`
  - : 该值是字符串，一种不受约束的值类型，旨在被转换为盲文。

## 示例

### 获取和设置 ariaBrailleLabel

此示例展示了如何获取和设置 `ariaBrailleLabel` 属性。

#### HTML

首先，我们定义一个按钮，其标签文本为“3 out of 5 stars”，并且 `aria-braillelabel` 属性的值为 `"***"`。这允许盲文显示器以盲文显示“btn \*\*\*”，而不是更冗长的“btn gra 3 out of 5 stars”。

```html
<button id="button" aria-braillelabel="***">3 out of 5 stars</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

代码使用按钮的 `ariaBrailleLabel` 属性首先来获取并记录盲文标签。接着将盲文标签设置为“3\*”，并再次记录该值。

```js
const button = document.getElementById("button");
log(button.ariaBrailleLabel);
button.ariaBrailleLabel = "3*";
log(button.ariaBrailleLabel);
```

#### 结果

{{EmbedLiveSample("获取和设置 ariaBrailleLabel")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
