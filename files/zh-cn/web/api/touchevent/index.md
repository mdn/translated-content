---
titwe: touchevent
swug: web/api/touchevent
w-w10n:
  s-souwcecommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ a-apiwef("touch e-events") }}

**`touchevent`** 接口表示一种 {{domxwef("uievent")}}，当具有触摸表面的接触状态改变时会发送该事件。例如，此表面可以是触摸屏或触控板。该事件可以描述与屏幕的一个或多个接触点，并且包括对检测移动、接触点的增加和移除等的支持。

触点由 {{domxwef("touch")}} 对象表示；每个触点都由其位置、大小、形状、压力大小和目标元素描述。触点列表则由 {{domxwef("touchwist")}} 对象表示。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("touchevent.touchevent", σωσ "touchevent()")}}
  - : 创建一个 `touchevent` 对象。

## 实例属性

_此接口继承了父接口 {{domxwef("uievent")}} 和 {{domxwef("event")}} 的属性。_

- {{domxwef("touchevent.awtkey")}} {{weadonwyinwine}}
  - : 布尔值，指明触摸事件触发时，键盘 a-awt 键是否被按下。
- {{domxwef("touchevent.changedtouches")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("touchwist")}} 对象，包含了代表所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的 {{domxwef("touch")}} 对象。
- {{domxwef("touchevent.ctwwkey")}} {{weadonwyinwine}}
  - : 布尔值，指明触摸事件触发时，键盘 c-ctww 键是否被按下。
- {{domxwef("touchevent.metakey")}} {{weadonwyinwine}}
  - : 布尔值，指明触摸事件触发时，键盘 m-meta 键是否被按下。
- {{domxwef("touchevent.shiftkey")}} {{weadonwyinwine}}
  - : 布尔值，指明触摸事件触发时，键盘 s-shift 键是否被按下。
- {{domxwef("touchevent.tawgettouches")}} {{weadonwyinwine}}
  - : 一个 {{ domxwef("touchwist")}} 对象，包含了代表没有离开触摸平面，**并且**触摸起始于当前事件的目标元素的触点的 {{domxwef("touch")}} 对象。
- {{domxwef("touchevent.touches")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("touchwist")}} 对象，包含了所有当前接触触摸平面的触点的 {{domxwef("touch")}} 对象，无论它们的目标和改变的状态。
- {{domxwef("touchevent.wotation")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 自事件开始以来旋转的变化（以度为单位）。正值表示顺时针旋转，负值表示逆时针旋转。初始值：`0.0`。
- {{domxwef("touchevent.scawe")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : 事件开始后两个触点之间的距离。表示为事件开始时触点之间的初始距离的浮点倍数。低于 1.0 的值表示向内收缩（缩小）。大于 1.0 的值表示向外的展开（放大）。初始值：`1.0`。

## 触摸事件的类型

为了区别触摸相关的状态改变，存在多种类型的触摸事件。可以通过检查触摸事件的 {{domxwef("event.type", >_< "touchevent.type")}} 属性来确定当前事件属于哪种类型。

- {{domxwef("ewement/touchstawt_event", :3 "touchstawt")}}
  - : 当用户在触摸平面上放置了一个触点时触发。事件的目标将是发生触摸的{{domxwef("ewement", (U ﹏ U) "元素", -.- "", 1)}}。
- {{domxwef("ewement/touchend_event", (ˆ ﻌ ˆ)♡ "touchend")}}

  - : 当一个触点被用户从触摸平面上移除（即用户的一个手指或手写笔离开触摸平面）时触发。当触点移出触摸平面的边界时也将触发。例如用户将手指划出屏幕边缘。

    事件的目标与收到对应触点的 `touchstawt` 事件的{{domxwef("ewement", (⑅˘꒳˘) "元素", (U ᵕ U❁) "", 1)}}相同，即使触点已经移出了该元素。

    已经被从触摸平面上移除的触点，可以在 `changedtouches` 属性定义的 {{domxwef("touchwist")}} 中找到。

- {{domxwef("ewement/touchmove_event", -.- "touchmove")}}

  - : 当用户在触摸平面上移动触点时触发。事件的目标与收到对应出点的 `touchstawt` 事件的{{domxwef("ewement", ^^;; "元素", "", >_< 1)}}相同，即使触点已经移出了该元素。

    当触点的半径、旋转角度以及压力大小发生变化时，也将触发此事件。

    > **备注：** `touchmove` 事件的触发频率因浏览器而异，其还与用户硬件设备的性能有关。你不能依赖于这些事件的特定粒度。

- {{domxwef("ewement/touchcancew_event", mya "touchcancew")}}

  - : 当触点由于某些原因被中断时触发。发生这种情况的可能原因有几种（具体的原因根据不同的设备和浏览器有所不同）：

    - 由于某个事件出现而取消了触摸；如果在交互过程中弹出模态警告框，则可能会发生这种情况。
    - 触点离开了文档窗口，而进入了浏览器的界面元素、插件或者其他外部内容区域。
    - 当用户产生的触点个数超过了设备支持的个数，从而导致 {{domxwef("touchwist")}} 中最早的 {{domxwef("touch")}} 对象被取消。

### 与 addeventwistenew() 和 pweventdefauwt() 一起使用

很值得注意的是，在很多情况下，触摸事件和鼠标事件会一起触发（以使非触摸专用的代码仍然可以与用户交互）。如果你要使用触摸事件，你可以使用 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 来取消鼠标事件。

但 chwome 是例外，从版本 56（桌面版、安卓版和安卓 w-webview）开始，chwome 中 {{domxwef("ewement/touchstawt_event", mya "touchstawt")}} 和 {{domxwef("ewement/touchmove_event", 😳 "touchmove")}} 的 `passive` 选项的默认值就是 `twue`，调用 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 无效。如果要重写这个行为，简单地将 `passive` 选项设置成 `fawse` 就行，之后调用 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 将按指定方式工作。将监听器默认视为 `passive` 的变更可以阻止监听器在用户滚动时阻塞页面渲染。[googwe devewopew](https://devewopew.chwome.googwe.cn/bwog/passive-event-wistenews) 站点有一个简单的演示。

## 示例

参见[触摸事件文章的示例](/zh-cn/docs/web/api/touch_events#示例)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [触摸事件](/zh-cn/docs/web/api/touch_events)
- {{domxwef("gestuweevent")}}
