---
title: Touch：screenX 属性
slug: Web/API/Touch/screenX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

返回触摸点相对于屏幕的 X 坐标，不包括任何滚动偏移。

## 值

数字。

## 示例

此示例演示了如何访问 {{domxref("Touch")}} 对象的 `Touch.screenX` 和 {{domxref("Touch.screenY")}} 属性。`Touch.screenX` 属性是触摸点相对于屏幕的水平（x）坐标，以 CSS 像素为单位。{{domxref("Touch.screenY")}} 属性是触摸点相对于屏幕的垂直坐标，以 CSS 像素为单位。

在以下简单代码片段中，我们假设用户在 id 为 `source` 的元素上发起多个触摸点接触，然后释放与表面的接触。当触发 {{domxref("Element/touchstart_event", "touchstart")}} 事件处理器时，可以访问每个触摸点的 `Touch.screenX` 和 {{domxref("Touch.screenY")}} 坐标。

```js
// 为“source”元素注册一个 touchstart 监听器。
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // 遍历每个触点并记录 screenX/Y 坐标。
    // 每个坐标的单位是 CSS 像素。
    for (let i = 0; i < e.touches.length; i++) {
      console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
      console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
    }
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
