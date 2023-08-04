---
title: TouchEvent.targetTouches
slug: Web/API/TouchEvent/targetTouches
---

{{ APIRef("Touch Events") }}

**`targetTouches`** 是一个只读的 {{ domxref("TouchList") }} 列表，包含仍与触摸面接触的所有触摸点的 {{ domxref("Touch") }} 对象。[`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event)事件触发在哪个{{ domxref("element") }}内，它就是当前目标元素。

## 语法

```js
var touches = touchEvent.targetTouches;
```

### 返回值

- `touches`
  - : 一个 {{ domxref("TouchList") }}，包含仍与触摸面接触的所有触摸点的 {{ domxref("Touch") }} 对象，[`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event)事件触发在哪个{{ domxref("element") }}内，它就是当前目标元素。

## 例子

本例阐述了 {{domxref("TouchEvent")}} 对象的 {{domxref("TouchEvent.targetTouches")}} 属性。{{domxref("TouchEvent.targetTouches")}} 属性也是一个 {{domxref("TouchList")}}，其中包含的触摸点起始于触摸事件当前的目标元素，并且此刻正在触摸屏幕。所以，targetTouches 元素是 `touches` 的真子集。

下面代码段中的函数比较了 `touches` 列表和 `targetTouches` 列表的长度，返回值表示他们是否相等。

```js
function touches_in_target(ev) {
  // Return true if all of the touches are within the target element;
  // otherwise return false.
  return ev.touches.length == ev.targetTouches.length ? true : false;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
