---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
---

{{APIRef("DOM")}}

**`HTMLInputElement.labels`** 为只读属性，它返回一个{{domxref("NodeList")}} 实例，绑定当前的{{HTMLElement("input")}} 节点的{{HTMLElement("label")}} 元素。

## 语法

```plain
var labelElements = input.labels;
```

### Return value

{{domxref("NodeList")}} 包含 `<label>` 元素和 `<input>` 元素。

## 示例

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test" />
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("test");
  for (var i = 0; i < input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("示例", "100%", 30)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
