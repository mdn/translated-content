---
title: Touch：pageX 属性
slug: Web/API/Touch/pageX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Touch Events") }}

**`Touch.pageX`** 只读属性返回触摸点相对于屏幕的 X 坐标，包括任何滚动偏移。

## 值

`double` 类型的浮点值，表示触摸点相对于屏幕的 X 坐标，包括任何滚动偏移。

## 示例

此示例展示了如何访问 {{domxref("Touch")}} 对象的 `Touch.pageX` 和 {{domxref("Touch.pageY")}} 属性。`Touch.pageX` 属性表示触摸点相对于屏幕的水平坐标（以 CSS 像素为单位），包括任何滚动偏移量。{{domxref("Touch.pageY")}} 属性表示触摸点相对于屏幕的垂直坐标（以 CSS 像素为单位），包括任何滚动偏移量。

在以下简单的代码片段中，我们假设用户在 `source` 元素上发起一个或多个触摸点接触，移动触摸点，然后释放与表面的接触。当触发 {{domxref("Element/touchmove_event", "touchmove")}} 事件处理器时，可以通过事件的 {{domxref("TouchEvent.changedTouches")}} 列表访问每个触控点的 `Touch.pageX` 和 {{domxref("Touch.pageY")}} 坐标。

```js
// 为“source”元素注册一个 touchmove 监听器。
const src = document.getElementById("source");

src.addEventListener(
  "touchmove",
  (e) => {
    // 遍历已移动的触摸点，并记录每个 pageX 和 pageY 的坐标。每个坐标的单位是 CSS 像素。
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
      console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
    }
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
