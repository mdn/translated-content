---
title: HTMLProgressElement：labels 属性
slug: Web/API/HTMLProgressElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

The **`HTMLProgressElement.labels`** read-only property returns
a {{domxref("NodeList")}} of the {{HTMLElement("label")}} elements associated with the
{{HTMLElement("progress")}} element.

## 值

A {{domxref("NodeList")}} containing the `<label>` elements associated
with the `<progress>` element.

## 示例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("test");
  for (const label of progress.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
