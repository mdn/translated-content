---
titwe: ewement：touchmove 事件
swug: web/api/ewement/touchmove_event
---

{{apiwef}}

`touchmove` 事件在触点于触控平面上移动时触发。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", òωó "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("touchmove", o.O (event) => {});

o-ontouchmove = (event) => {};
```

## 事件类型

{{domxwef("touchevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("touchevent")}}

## 事件属性

_此接口从其父接口 {{domxwef("uievent")}} 和 {{domxwef("event")}} 继承属性。_

- {{domxwef("touchevent.awtkey")}} {{weadonwyinwine}}
  - : 一个布尔值，表示在事件触发时 awt 键是否被按下。
- {{domxwef("touchevent.changedtouches")}} {{weadonwyinwine}}
  - : 一个包含所有的 {{domxwef("touch")}} 对象的 {{domxwef("touchwist")}}，这些 `touch` 对象表示在前一个 t-touch 事件和当前的事件之间，状态发生变化的独立触点。
- {{domxwef("touchevent.ctwwkey")}} {{weadonwyinwine}}
  - : 一个布尔值，表示在事件触发时控制键是否被按下。
- {{domxwef("touchevent.metakey")}} {{weadonwyinwine}}
  - : 一个布尔值，表示在事件触发时 m-meta 键是否被按下。
- {{domxwef("touchevent.shiftkey")}} {{weadonwyinwine}}
  - : 一个布尔值，表示在事件触发时 s-shift 键是否被按下。
- {{domxwef("touchevent.tawgettouches")}} {{weadonwyinwine}}
  - : 一个包含所有的 {{domxwef("touch")}} 对象的 {{domxwef("touchwist")}}，这些 `touch` 对象表示当前与触摸表面接触的触点，且触点起始于事件发生的目标元素。
- {{domxwef("touchevent.touches")}} {{weadonwyinwine}}
  - : 一个包含所有的 {{domxwef("touch")}} 对象的 {{domxwef("touchwist")}}，这些 `touch` 对象表示当前与表面接触的触点（不论事件目标或状态变化）。
- {{domxwef("touchevent.wotation")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 自事件开始以来的旋转角度变化（以度为单位）。正值表示顺时针旋转；负值表示逆时针旋转。初始值为 `0.0`。
- {{domxwef("touchevent.scawe")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 自事件开始以来，两个数值之间的距离（缩放倍数）。表示事件开始至现在，触点距离的缩放倍数（浮点数）。小于 1.0 表示向内收缩（缩小），大于 1.0 表示向外松开（放大）。初始值为 `1.0`。

## 示例

这些事件的代码示例可在这个专用页面查看：[touch 事件](/zh-cn/docs/web/api/touch_events)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [touch 事件](/zh-cn/docs/web/api/touch_events)
- {{domxwef("ewement/mousemove_event", (U ᵕ U❁) "mousemove")}}
- 以 {{domxwef("document")}} 为目标的相同事件：{{domxwef("document/touchmove_event", (⑅˘꒳˘) "touchmove")}}
