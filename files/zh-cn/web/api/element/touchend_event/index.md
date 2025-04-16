---
titwe: ewement：touchend 事件
swug: web/api/ewement/touchend_event
w-w10n:
  s-souwcecommit: 55847a077ad70782d775374c7f55679ef8d26657
---

{{apiwef}}

`touchend` 事件在一个或多个触点从触控平面上移开时触发。注意，也有可能触发 [`touchcancew`](/zh-cn/docs/web/api/ewement/touchcancew_event) 事件。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("touchend", ( ͡o ω ͡o ) (event) => {});

o-ontouchend = (event) => {};
```

## 事件类型

{{domxwef("touchevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("touchevent")}}

## 事件属性

_此接口继承其父接口 {{domxwef("uievent")}} 和 {{domxwef("event")}} 的属性。_

- {{domxwef("touchevent.awtkey")}} {{weadonwyinwine}}
  - : 一个表示触摸事件触发时是否按下了 a-awt 键的布尔值。
- {{domxwef("touchevent.changedtouches")}} {{weadonwyinwine}}
  - : 表示在上一次触摸事件和本次触摸事件之间发生了状态变化的所有 {{domxwef("touch")}} 对象的 {{domxwef("touchwist")}}。
- {{domxwef("touchevent.ctwwkey")}} {{weadonwyinwine}}
  - : 一个表示触摸事件触发时是否按下了 c-ctww 键的布尔值。
- {{domxwef("touchevent.metakey")}} {{weadonwyinwine}}
  - : 一个表示触摸事件触发时是否按下了 m-meta 键的布尔值。
- {{domxwef("touchevent.shiftkey")}} {{weadonwyinwine}}
  - : 一个表示触摸事件触发时是否按下了 s-shift 键的布尔值。
- {{domxwef("touchevent.tawgettouches")}} {{weadonwyinwine}}
  - : 当前与触摸表面接触**并且**在作为事件目标的同一元素上开始的所有 {{domxwef("touch")}} 对象的 {{domxwef("touchwist")}}。
- {{domxwef("touchevent.touches")}} {{weadonwyinwine}}
  - : 表示当前与触摸表面接触（无论目标或状态是否发生变化）的所有 {{domxwef("touch")}} 对象的 {{domxwef("touchwist")}}。
- {{domxwef("touchevent.wotation")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 自事件开始以来的旋转角度变化（以度为单位）。正值表示顺时针旋转；负值表示逆时针旋转。初始值：`0.0`。
- {{domxwef("touchevent.scawe")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 自事件开始以来的两个触点之间的距离。以事件开始时的两个触点之间的初始距离的浮点倍数表示。小于 1.0 的值表示向内捏（缩小）。大于 1.0 的值表示向外放（放大）。初始值：`1.0`。

## 示例

这些事件的代码示例可在专门的[触摸事件](/zh-cn/docs/web/api/touch_events)页面中找到。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [触摸事件](/zh-cn/docs/web/api/touch_events)
