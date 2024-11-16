---
title: 使用触摸事件
slug: Web/API/Touch_events/Using_Touch_Events
---

{{DefaultAPISidebar("Touch Events")}}

今天，大多数 Web 内容是为键盘和鼠标输入而设计的。然而，具有触摸屏（特别是便携式设备）的设备是主流的，Web 应用程序可以使用 {{domxref("Touch_events","Touch Events")}} 直接处理基于触摸的输入，或者应用程序可以使用可解释的鼠标事件以处理应用程序的输入。使用鼠标事件的缺点是它们不支持并发用户输入，而触摸事件支持多个同时输入（可能在触摸面上的不同位置），从而增强用户体验。

触摸事件界面支持应用程序特定的单触摸和多点触控交互，例如双指手势。当手指（或触控笔）首先触摸接触面时，多点触摸交互开始。其他手指随后可以触摸该表面并且可选地移动穿过该触摸表面。当手指从表面移除时，相互作用结束。在此交互期间，应用程序在开始，移动和结束阶段接收触摸事件。应用程序可以将其自己的语义应用于触摸输入。

## Interfaces

触摸事件有三个接口 ({{domxref("Touch")}}, {{domxref("TouchEvent")}} 和 {{domxref("TouchList")}}) 和以下事件类型：

- [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) - 当触摸点放置在触摸面上时触发。
- [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) - 当触摸点沿触摸表面移动时触发。
- [`touchend`](/zh-CN/docs/Web/API/Element/touchend_event) - 当触摸点从触摸表面移除时触发。
- [`touchcancel`](/zh-CN/docs/Web/API/Element/touchcancel_event) - 当触摸点以实现特定的方式中断（例如，创建的触摸点太多）时触发。

{{domxref("Touch")}} 接口表示触敏设备上的单个接触点。接触点通常被称为触摸点或仅仅是触摸点。触摸通常由触摸屏，笔或触控板上的手指或触控笔产生。触摸点的属性包括唯一标识符，触摸点的目标元素以及触摸点相对于视口，页面和屏幕的位置的 X 和 Y 坐标。

{{domxref("TouchList")}} 接口表示触摸表面上的触点的列表。因此，如果用户用一根手指触摸触控表面，则该列表将包含一个触点，并且如果用户用三个手指触摸该表面，则列表长度将为三个。

{{domxref("TouchEvent")}} 接口表示当触控屏上触点的状态发生改变时会发送的事件。当与触控屏开始接触时状态开始改变，移动触摸点且手指在触控屏上，释放触点然后退出触摸事件。这个接口的属性包括几个修饰键的状态（例如 <kbd>shift</kbd>键）和下面的触摸列表：

- {{domxref("TouchEvent.touches","touches")}} - 屏幕上当前所有触摸点的列表。
- {{domxref("TouchEvent.targetTouches","targetTouches")}} - 目标 DOM 元素上的触摸点列表。
- {{domxref("TouchEvent.changedTouches","changedTouches")}} - 依赖于关联的触摸事件类型的触摸点列表：

  - 对于 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 事件，它是当前事件变为活动的触摸点的列表。
  - 对于 [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) 事件，它是自上次事件以来更改的触摸点列表。
  - 对于 [`touchend`](/zh-CN/docs/Web/API/Element/touchend_event) 事件，它是从表面移除的触摸点的列表（即，与手指不再接触表面的触摸点集合）。

这些接口一起定义了相对较低级别的功能，但它们支持多种基于触摸的交互，包括熟悉的多点触控手势，如多指手指滑动，旋转，捏和缩放。

## From interfaces to gestures

在定义手势的语义时，应用程序可能会考虑不同的因素。例如，当触摸结束时，触摸点从其起始位置行进到其位置的距离。另一个潜在因素是时间;例如，触摸开始和触摸结束之间经过的时间，或者用于创建双击手势的两个同时敲击之间的时间间隔。滑动的方向性（例如从左到右，从左到右等）是另一个要考虑的因素。

应用程序使用的触摸列表取决于应用程序手势的语义。例如，如果应用程序在一个元素上支持单一触摸（点击），则它将使用 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 中的 {{domxref("TouchEvent.targetTouches","targetTouches")}} 列表事件处理程序以特定应用程序处理触摸点。如果应用程序支持任意两个触摸点的双指滑动，它将使用 [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) 事件处理程序中的 {{domxref("TouchEvent.changedTouches","changedTouches")}} 列表确定两个触摸点是否已移动，然后以应用程序特定的方式实现该手势的语义。

当只有一个活动的触摸点时，浏览器通常会分派仿真的鼠标和点击事件。涉及两个或多个活动触摸点的多点触控交互通常只会产生触摸事件。为了防止模拟的鼠标事件被发送，请在触摸事件处理程序中使用 {{domxref("Event.preventDefault()","preventDefault()")}} 方法。有关鼠标和触摸事件之间的交互的详细信息，请参阅 {{domxref("Touch_events.Supporting_both_TouchEvent_and_MouseEvent", "Supporting both TouchEvent and MouseEvent")}}。

## Basic steps

本节包含使用上述接口的基本用法。有关更详细的示例，请参阅 {{domxref("Touch_events","Touch Events Overview")}} 。

对每一个触摸事件类型注册一个事件处理器。

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

在事件处理程序中处理事件，实现应用程序的手势语义。

```js
// touchstart handler
function process_touchstart(ev) {
  // Use the event's data to call out to the appropriate gesture handlers
  switch (ev.touches.length) {
    case 1:
      handle_one_touch(ev);
      break;
    case 2:
      handle_two_touches(ev);
      break;
    case 3:
      handle_three_touches(ev);
      break;
    default:
      gesture_not_supported(ev);
      break;
  }
}
```

访问触摸点的属性。

```js
// Create touchstart handler
someElement.addEventListener(
  "touchstart",
  function (ev) {
    // Iterate through the touch points that were activiated
    // for this element and process each event 'target'
    for (var i = 0; i < ev.targetTouches.length; i++) {
      process_target(ev.targetTouches[i].target);
    }
  },
  false,
);
```

阻止游览器产生模拟鼠标事件。

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Best practices

以下是使用触摸事件时要考虑的最佳做法：

- 最大限度地减少在触摸处理程序中完成的工作量。
- 将触摸事件处理程序添加到特定目标元素（而不是整个文档或文档树中较高的节点）。
- 在 [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event) 中添加 [`touchend`](/zh-CN/docs/Web/API/Element/touchend_event)， [`touchcancel`](/zh-CN/docs/Web/API/Element/touchcancel_event) 和 [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event) 事件处理程序。
- 目标元素应足够大以适应手指触摸。如果目标区域太小，触摸它可能会导致相邻元素发射其他事件。

## Implementation and deployment status

[touch events browser compatibility data](/zh-CN/docs/Web/API/Touch_events/Web/API/Touch_events#Browser_compatibility) 表明移动浏览器中的触摸事件支持相对较好，尽管其他实现正在进行中，桌面浏览器支持滞后。

关于触摸点的 [touch area](/zh-CN/docs/Web/API/Touch_events/Web/API/Touch#Touch_area) 的一些新功能 - 用户和触摸表面之间的接触面积正在被标准化。新功能包括最接近触摸点与触摸面的接触区域的椭圆的 X 和 Y 半径。接触点的旋转角度 - 应用于所描述的椭圆以与接触面积对准的旋转角度的数量也被标准化，以及触摸点上对屏幕的力量。

## What about Pointer Events?

The introduction of new input mechanisms results in increased application complexity to handle various input events, such as key events, mouse events, pen/stylus events, and touch events. To help address this problem, the [Pointer Events standard](http://www.w3.org/TR/pointerevents/) _defines events and related interfaces for handling hardware agnostic pointer input from devices including a mouse, pen, touchscreen, etc._. That is, the abstract _pointer_ creates a unified input model that can represent a contact point for a finger, pen/stylus or mouse.

The pointer event model can simplify an application's input processing since a pointer represents input from any input device. Additionally, the pointer event types are very similar to mouse event types (for example, `pointerdown` `pointerup`) thus code to handle pointer events closely matches mouse handling code.

The implementation status of pointer events in browsers is [relatively low](http://caniuse.com/#search=pointer) with IE11 and Edge having complete implementations. Firefox's implementation has been withdrawn because of [Firefox bug 1166347](https://bugzil.la/1166347).

## Examples and demos

The following documents describe how to use touch events and include example code:

- {{domxref("Touch_events","Touch Events Overview")}}
- [Implement Custom Gestures](https://developers.google.com/web/fundamentals/design-and-ui/input/touch/touch-events)
- [Introduction to Touch events in JavaScript](http://www.javascriptkit.com/javatutors/touchevents.shtml)
- [Add touch screen support to your website (The easy way)](http://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)

Touch event demonstrations:

- [Paint Program (by Rick Byers)](https://rbyers.github.io/paint.html)
- [Touch/pointer tests and demos (by Patrick H. Lauke)](http://patrickhlauke.github.io/touch/)

## Community

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail list](http://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC channel](irc://irc.w3.org:6667/)

## Related topics and resources

- [Pointer Events Standard](http://www.w3.org/TR/pointerevents/)
