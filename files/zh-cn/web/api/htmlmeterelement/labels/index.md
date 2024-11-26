---
title: HTMLMeterElement：labels 属性
slug: Web/API/HTMLMeterElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

**`HTMLMeterElement.labels`** 只读属性返回与 {{HTMLElement("meter")}} 元素有关联的 {{HTMLElement("label")}} 元素的 {{domxref("NodeList")}}。

## 值

一个 {{domxref("NodeList")}}，包含与 `<meter>` 元素关联的 `<label>` 元素。

## 示例

### HTML

```html
<label id="label1" for="test">标签 1</label>
<meter id="test" min="0" max="100" value="70">70</meter>
<label id="label2" for="test">标签 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const meter = document.getElementById("test");
  for (const label of meter.labels) {
    console.log(label.textContent); // “标签 1”和“标签 2”
  }
});
```

{{EmbedLiveSample("示例", "100%", 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
