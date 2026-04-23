---
title: MouseEvent：clientX 属性
slug: Web/API/MouseEvent/clientX
l10n:
  sourceCommit: f452e53438ee1fc54baa7bf4eac147c354615702
---

{{APIRef("UI Events")}}

{{domxref("MouseEvent")}} 接口的 **`clientX`** 只读属性提供了事件发生时应用程序{{glossary("viewport", "视口")}}内的水平坐标（而不是页面中的坐标）。

例如，单击视口的左边缘时，无论页面是否水平滚动，都会触发一个 `clientX` 值为 `0` 的鼠标事件。

## 值

一个以像素为单位的 `double` 类型浮点值。

## 示例

此示例在触发 {{domxref("Element/mousemove_event", "mousemove")}} 事件时显示鼠标的坐标。

### HTML

```html
<p>移动鼠标以查看其位置。</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    屏幕 X/Y：${e.screenX}，${e.screenY}
    视口 X/Y：${e.clientX}，${e.clientY}`;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
- [坐标系](/zh-CN/docs/Web/API/CSSOM_view_API/Coordinate_systems)
