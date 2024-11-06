---
title: TouchEvent.touches
slug: Web/API/TouchEvent/touches
---

{{ APIRef("Touch Events") }}

## 概要

一个 {{ domxref("TouchList") }}，其会列出所有当前在与触摸表面接触的 {{ domxref("Touch") }} 对象，不管触摸点是否已经改变或其目标元素是在处于 `touchstart` 阶段。

此属性是 {{readonlyInline}}。

## 语法

```plain
var touches = touchEvent.touches;
```

### 返回值

- `touches`
  - : 一个 {{ domxref("TouchList") }}，其会列出所有当前在与触摸表面接触的 {{ domxref("Touch") }} 对象，不管触摸点是否已经改变或其目标元素是在处于 `touchstart` 阶段。

## 示例

此示例说明 {{domxref("TouchEvent")}} 对象的 {{domxref("TouchEvent.touches")}} 属性。该{{domxref("TouchEvent.touches")}} 属性是一个 {{domxref("TouchList")}} 对象，并包含 {{domxref("Touch")}} 当前接触表面的每个接触点的对象列表。

在下面的代码片段中，[`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 事件处理程序会检查 {{domxref("TouchEvent.touches")}} 列表的长度，以确定激活的触摸点的数量，然后根据触摸点的数量调用不同的处理程序。

```js
someElement.addEventListener(
  "touchstart",
  function (e) {
    // Invoke the appropriate handler depending on the
    // number of touch points.
    switch (e.touches.length) {
      case 1:
        handle_one_touch(e);
        break;
      case 2:
        handle_two_touches(e);
        break;
      case 3:
        handle_three_touches(e);
        break;
      default:
        console.log("Not supported");
        break;
    }
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
