---
title: HTMLProgressElement：labels 属性
slug: Web/API/HTMLProgressElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

**`HTMLProgressElement.labels`** 只读属性返回一个与 {{HTMLElement("progress")}} 元素有关联的 {{HTMLElement("label")}} 元素的 {{domxref("NodeList")}}。

## 值

一个与 `<progress>` 元素有关联的 `<label>` 元素的 {{domxref("NodeList")}}。

## 示例

### HTML

```html
<label id="label1" for="test">标签 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">标签 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("test");
  for (const label of progress.labels) {
    console.log(label.textContent); // “标签 1”和“标签 2”
  }
});
```

{{EmbedLiveSample("示例", "100%", 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
