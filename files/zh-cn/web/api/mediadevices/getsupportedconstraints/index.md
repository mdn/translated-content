---
title: MediaDevices.getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaDevices")}} 接口的 **`getSupportedConstraints()`** 方法返回一个基于 {{domxref("MediaTrackSupportedConstraints")}} 的对象，其成员字段都是客户端（{{Glossary("user agent")}}）所支持的约束属性（如帧率，窗口大小）。

## 语法

```
var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
```

### 参数

无

### 返回值

一个新的基于{{domxref("MediaTrackSupportedConstraints")}} 的对象用来监视客户端所支持的约束属性。因为只有客户端所支持的约束属性才能被展示在这个列表中 , 这些布尔值（Boolean）属性的每一个都为 true。

## 示例

这个示例展示了你的客户端所支持的约束属性的列表。

```html hidden
<p>The following media constraints are supported by your browser:</p>

<ul id="constraintList"></ul>
```

```css hidden
body {
  font:
    15px Arial,
    sans-serif;
}
```

```js
let constraintList = document.getElementById("constraintList");
let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

for (let constraint in supportedConstraints) {
  if (supportedConstraints.hasOwnProperty(constraint)) {
    let elem = document.createElement("li");

    elem.innerHTML = "<code>" + constraint + "</code>";
    constraintList.appendChild(elem);
  }
}
```

### 结果

{{ EmbedLiveSample('示例', 600, 350) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
