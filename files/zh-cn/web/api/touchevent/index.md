---
title: TouchEvent
slug: Web/API/TouchEvent
---

{{ ApiRef() }}

`TouchEvent` 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等。

每 个 {{ domxref("Touch") }} 对象代表一个触点; 每个触点都由其位置，大小，形状，压力大小，和目标 {{ domxref("element") }} 描述。 {{ domxref("TouchList") }} 对象代表多个触点的一个列表。

## 构造函数

- {{ domxref("TouchEvent.TouchEvent", "TouchEvent()")}}
  - : 创建一个{{ domxref("TouchEvent") }}对象。

## 属性列表

_{{ domxref("TouchEvent") }}的属性继承了 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。_

- {{ domxref("event.altKey", "TouchEvent.altKey") }} {{readonlyInline}}
  - : 布尔值，指明触摸事件触发时，键盘 alt 键是否被按下。
- {{ domxref("TouchEvent.changedTouches") }} {{readonlyInline}}
  - : 一个 {{ domxref("TouchList") }} 对象，包含了代表所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的 {{ domxref("Touch") }} 对象。
- {{ domxref("event.ctrlKey", "TouchEvent.ctrlKey") }} {{readonlyInline}}
  - : 布尔值，指明触摸事件触发时，键盘 ctrl 键是否被按下。
- {{ domxref("event.metaKey", "TouchEvent.metaKey") }} {{readonlyInline}}
  - : 布尔值，指明触摸事件触发时，键盘 meta 键（[Wikipedia - meta Key](http://en.wikipedia.org/wiki/Meta_key)）是否被按下。
- {{ domxref("event.shiftKey", "TouchEvent.shiftKey") }} {{readonlyInline}}
  - : 布尔值，指明触摸事件触发时，键盘 shift 键是否被按下。
- {{ domxref("TouchEvent.targetTouches") }} {{readonlyInline}}
  - : 一个 {{ domxref("TouchList") }} 对象，是包含了如下触点的 {{ domxref("Touch") }} 对象：触摸起始于当前事件的目标 {{ domxref("element") }} 上，并且仍然没有离开触摸平面的触点。
- {{ domxref("TouchEvent.touches") }} {{readonlyInline}}
  - : 一 个 {{ domxref("TouchList") }} 对象，包含了所有当前接触触摸平面的触点的 {{ domxref("Touch") }} 对象，无论它们的起始于哪个 {{ domxref("element") }} 上，也无论它们状态是否发生了变化。

## 触摸事件的类型

为了区别触摸相关的状态改变，存在多种类型的触摸事件。可以通过检查触摸事件的 {{ domxref("event.type", "TouchEvent.type") }} 属性来确定当前事件属于哪种类型

> **备注：** 在很多情况下，触摸事件和鼠标事件会同时被触发（目的是让没有对触摸设备优化的代码仍然可以在触摸设备上正常工作）。如果你使用了触摸事件，可以调用 {{ domxref("event.preventDefault()") }} 来阻止鼠标事件被触发。

### {{domxref("Element/touchstart_event", "touchstart")}}

当用户在触摸平面上放置了一个触点时触发。事件的目标 {{ domxref("element")}} 将是触点位置上的那个目标 {{ domxref("element") }}

### {{domxref("Element/touchend_event", "touchend")}}

当一个触点被用户从触摸平面上移除（即用户的一个手指或手写笔离开触摸平面）时触发。当触点移出触摸平面的边界时也将触发。例如用户将手指划出屏幕边缘。

事件的目标 {{ domxref("element") }} 与触发 `touchstart` 事件的目标 {{ domxref("element") }} 相同，即使 `touchend` 事件触发时，触点已经移出了该 {{ domxref("element") }} 。

已经被从触摸平面上移除的触点，可以在 `changedTouches` 属性定义的 {{ domxref("TouchList") }} 中找到。

### {{domxref("Element/touchmove_event", "touchmove")}}

当用户在触摸平面上移动触点时触发。事件的目标 {{ domxref("element") }} 和触发 `touchstart` 事件的目标 {{ domxref("element") }} 相同，即使当 `touchmove` 事件触发时，触点已经移出了该 {{ domxref("element") }} 。

当触点的半径、旋转角度以及压力大小发生变化时，也将触发此事件。

> **备注：** 不同浏览器上 `touchmove` 事件的触发频率并不相同。这个触发频率还和硬件设备的性能有关。因此决不能让程序的运作依赖于某个特定的触发频率。

### {{domxref("Element/touchcancel_event", "touchcancel")}}

当触点由于某些原因被中断时触发。有几种可能的原因如下（具体的原因根据不同的设备和浏览器有所不同）：

- 由于某个事件出现而取消了触摸：例如触摸过程被弹窗打断。
- 触点离开了文档窗口，而进入了浏览器的界面元素、插件或者其他外部内容区域。
- 当用户产生的触点个数超过了设备支持的个数，从而导致 {{ domxref("TouchList") }} 中最早的 {{ domxref("Touch") }} 对象被取消。

### 与 addEventListener() 和 preventDefault() 一起使用

很值得注意的是，在很多情况下，触摸事件和鼠标事件会一起触发（以使非触摸专用的代码仍然可以与用户交互）。如果你要使用触摸事件，你可以使用 {{domxref("Event.preventDefault","preventDefault()")}} 来取消鼠标事件。

但 Chrome 是例外，从版本 56（桌面版、安卓版和安卓 webview）开始，Chrome 中 {{domxref("Element/touchstart_event", "touchstart")}} and {{domxref("Element/touchmove_event", "touchmove")}} 的默认值就是 `true`，没有必要调用 {{domxref("Event.preventDefault","preventDefault()")}}。如果要重写这个行为，简单地将 `passive` 设置成 `false` 就行。这样设置可以阻止监听器在用户滚动时停止页面渲染。[Google Developer](https://developers.google.com/web/updates/2016/06/passive-event-listeners) 有一个简单的演示。

## 全局事件处理

{{SeeCompatTable}}

- {{ domxref("GlobalEventHandlers.ontouchstart") }} {{experimental_inline}}
  - : 使用一个 {{domxref("GlobalEventHandlers","global event handler")}} 处理{{event("touchstart")}} 事件。
- {{ domxref("GlobalEventHandlers.ontouchend") }} {{experimental_inline}}
  - : 使用一个 {{domxref("GlobalEventHandlers","global event handler")}} 处理 {{event("touchend")}} 事件。
- {{ domxref("GlobalEventHandlers.ontouchmove") }} {{experimental_inline}}
  - : 使用一个 {{domxref("GlobalEventHandlers","global event handler")}} 处理 {{event("touchmove")}} 事件。
- {{ domxref("GlobalEventHandlers.ontouchcancel") }} {{experimental_inline}}
  - : 使用一个 {{domxref("GlobalEventHandlers","global event handler")}} 处理 {{event("touchcancel")}} 事件。

## 实例

请看 [example on the main Touch events article](/zh-CN/DOM/Touch_events#Example).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Touch_events","Touch Events Overview")}}
- {{domxref("GestureEvent")}}
- {{domxref("MSGestureEvent")}}
