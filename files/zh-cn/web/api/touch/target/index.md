---
title: Touch.target
slug: Web/API/Touch/target
---

{{ APIRef("Touch Events") }}

## 概述

这个属性返回触摸点最初接触的 [`Element`](/zh-CN/docs/Web/API/Element)，即使这个触摸点已经移出那个元素的交互区域，甚至移出文档。需要注意的是，如果这个元素在触摸过程中被移除，这个事件仍然会指向它，因此这个事件也不会冒泡到 `window` 或 `document` 对象。因此，如果有元素在触摸过程中可能被移除，最佳实践是将触摸事件的监听器绑定到这个元素本身，防止元素被移除后，无法再从它的上一级元素上侦测到从该元素冒泡的事件。

## 语法

```plain
var el = touchPoint.target;
```

### 返回值

- `el`
  - : {{domxref("Touch")}} 对象的目标元素。

## 示例

这个例子展示了如何访问 {{domxref("Touch")}} 对象的 {{domxref("Touch.target")}} 属性。{{domxref("Touch.target")}} 属性是最初接触平面的触摸点下的 {{domxref("Element")}} ({{domxref("EventTarget")}}) 。

在下面的代码片段中，我们假设用户在 `source` 元素上开始接触，因此初始化了一个或多个触摸点。当这个元素上的 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 事件处理程序被调用时，每个触摸点的 {{domxref("Touch.target")}} 属性可经事件的 {{domxref("TouchEvent.targetTouches")}} 列表访问。

```js
// 为'source'元素注册一个触摸监听器
var src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  function (e) {
    // 在这个元素上激活的触点间循环
    for (var i = 0; i < e.targetTouches.length; i++) {
      console.log(
        "touchpoint[" + i + "].target = " + e.targetTouches[i].target,
      );
    }
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
