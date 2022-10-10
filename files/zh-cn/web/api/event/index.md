---
title: Event
slug: Web/API/Event
---

{{APIRef("DOM")}}

**`Event`** 接口表示在 DOM 中出现的事件。

一些事件是由用户触发的，例如鼠标或键盘事件；而其他事件常由 API 生成，例如指示动画已经完成运行的事件，视频已被暂停等等。事件也可以通过脚本代码触发，例如对元素调用 [`HTMLElement.click()`](/zh-CN/docs/Web/API/HTMLElement/click) 方法，或者定义一些自定义事件，再使用 [`EventTarget.dispatchEvent()`](/zh-CN/docs/Web/API/EventTarget/dispatchEvent) 方法将自定义事件派发往指定的目标（target）。

有许多不同类型的事件，其中一些使用基于 `Event` 主接口的二次接口。`Event` 本身包含适用于所有事件的属性和方法。

很多 DOM 元素可以被设计接收 (或者监听) 这些事件，并且执行代码去响应（或者处理）它们。通过[`EventTarget.addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)方法可以将事件处理函数绑定到不同的[HTML elements](/zh-CN/docs/Web/HTML/Element)上 (比如`<button>`, `<div>`, `<span>`等等) 。这种绑定事件处理函数的方式基本替换了老版本中使用 HTML [event handler attributes](/zh-CN/docs/HTML/Global_attributes)来绑定事件处理函数的方式。除此之外，通过正确使用[`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener)方法，这些事件处理函数也能被移除。

> **备注：** 一个元素可以绑定多个事件处理函数，甚至是同一种类型的事件。尤其是这种分离的，并且相互独立的代码模块对同一个元素绑定事件处理函数，每一个模块代码都有着独立的目的。（比如，一个网页同时有着广告模块和统计模块同时监听视频播放元素）

当有很多嵌套的元素，并且每一个元素都有着自己的事件处理函数，事件处理过程会变得非常复杂。尤其当一个父元素和子元素绑定有相同类型的事件处理函数的时候。因为结构上的重叠，事件处理函数可能会依次被触发，触发的顺序取决于[事件冒泡和事件捕获](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)在每一个元素上的设置情况。

## 基于 `Event` 的接口

下面是主要基于`Event`接口的接口列表，每一个接口都设置了指向各自的 MDN API 说明的文档链接。

需要注意的是，所有的事件接口名称都是以“Event”结尾的。

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}}
- {{domxref("BeforeInputEvent")}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CSSFontFaceLoadEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceLightEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceProximityEvent")}}
- {{domxref("DOMTransactionEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("EditingBeforeInputEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("OverconstrainedError")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RelatedEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCIdentityErrorEvent")}}
- {{domxref("RTCIdentityEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("SensorEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SVGEvent")}}
- {{domxref("SVGZoomEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("UserProximityEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## 构造器

- {{domxref("Event.Event", "Event()")}}
  - : 创建并返回一个 `Event` 对象。

## 属性

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : 一个布尔值，用来表示该事件是否会在 DOM 中冒泡。
- {{domxref("Event.cancelBubble")}}
  - : {{domxref("Event.stopPropagation()")}} 的历史别名。在事件处理器函数返回之前，将此属性的值设置为 `true`，亦可阻止事件继续冒泡。
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : 一个布尔值，表示事件是否可以取消。
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示事件是否可以穿过 Shadow DOM 和常规 DOM 之间的隔阂进行冒泡。
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : 对事件当前注册的目标的引用。这是一个当前计划将事件发送到的对象。它是有可能在重定向的过程中被改变的。
- {{domxref("Event.deepPath")}} {{non-standard_inline}}
  - : 一个由事件流所经过的 DOM {{domxref("Node", "节点")}}组成的{{jsxref("Array", "数组")}}。
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : 一个布尔值，表示 {{domxref("event.preventDefault()")}} 方法是否取消了事件的默认行为。
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : 表示事件流正被处理到了哪个阶段。
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : 事件的明确（explicit）原始目标（Mozilla 专有属性）。
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : 重设目标前的事件原始目标（Mozilla 专有属性）。
- {{domxref("Event.returnValue")}}
  - : 旧版 Internet Explorer 引入的一个非标准历史属性，为保证依赖此属性的网页正常运作，此属性最终被收入规范。可用 {{domxref("Event.preventDefault()")}} 与 {{domxref("Event.defaultPrevented")}} 代替，但由于已进入规范，也可以使用此属性。
- {{domxref("Event.srcElement")}} {{non-standard_inline}}
  - : 旧版 Internet Explorer 对 {{domxref("Event.target")}} 的非标准别称。出于兼容原因，一些其他浏览器也支持此别称。
- {{domxref("Event.target")}} {{readonlyinline}}
  - : 对事件原始目标的引用，这里的原始目标指最初派发（dispatch）事件时指定的目标。
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : 事件创建时的时间戳（精度为毫秒）。按照规范，这个时间戳是 Unix 纪元起经过的毫秒数，但实际上，在不同的浏览器中，对此时间戳的定义也有所不同。另外，规范正在将其修改为 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref("Event.type")}} {{readonlyinline}}
  - : 事件的类型，不区分大小写。
- {{domxref("Event.isTrusted")}} {{readonlyinline}}
  - : 表示事件是由浏览器（例如用户点击）发起的，还是由脚本（使用事件创建方法，例如 {{domxref("Event.initEvent")}}）发出的。

### 废弃属性

- {{domxref("Event.scoped")}} {{readonlyinline}} {{Deprecated_Inline}}
  - : 已废弃，使用 {{domxref("Event.composed")}} 代替此属性。
    一个{{jsxref("Boolean", "布尔值")}}，表示给定的事件是否会穿过 Shadow DOM，进入到标准 DOM 中。

## 方法

- {{domxref("Event.createEvent()")}} {{deprecated_inline}}
  - : 创建一个新事件，如果使用此方法创建事件，则必须调用其自身的 `initEvent()` 方法，对其进行初始化。
- {{domxref("Event.composedPath()")}}
  - : 返回事件的路径（将在该对象上调用监听器）。如果阴影根节点 (shadow root) 创建时 {{domxref("ShadowRoot.mode")}} 值为 closed，那么路径不会包括该根节点下阴影树 (shadow tree) 的节点。
- {{domxref("event.initEvent")}}{{deprecated_inline}}
  - : 为通过 {{domxref("Event.createEvent()")}} 创建的事件初始化。该方法对已经被派发的事件无效。
- {{domxref("event.preventDefault")}}
  - : 取消事件（如果该事件可取消）。
- {{domxref("event.stopImmediatePropagation")}}
  - : 对这个特定的事件而言，没有其他监听器被调用。这个事件既不会添加到相同的元素上，也不会添加到以后将要遍历的元素上（例如在捕获阶段）。
- {{domxref("event.stopPropagation")}}
  - : 停止冒泡，阻止事件在 DOM 中继续冒泡。

### 废弃方法

- {{domxref("Event.getPreventDefault()")}} {{non-standard_inline}}
  - : 非标准方法；使用 {{domxref("Event.defaultPrevented")}} 属性代替此方法。
    返回 {{domxref("Event.defaultPrevented")}} 的值。
- {{domxref("event.preventBubble")}} {{Deprecated_Inline}}
  - : 已废弃；使用 {{domxref("event.stopPropagation")}} 代替此方法。
    阻止事件继续冒泡。
- {{domxref("event.preventCapture")}} {{Deprecated_Inline}}
  - : 已废弃；使用 {{domxref("event.stopPropagation")}} 代替此方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 可用的事件类型：[Event 参考](/zh-CN/docs/Web/Reference/Events)
- [Event 目标的比较](/zh-CN/docs/Web/API/Event/Comparison_of_Event_Targets)（目标 `target` vs 当前目标 `currentTarget` vs 相关目标 `relatedTarget` vs 初始目标 `originalTarget`）
- [创建和触发自定义事件](/zh-CN/docs/Web/Guide/DOM/Events/Creating_and_triggering_events)
- Firefox 拓展开发：

  - [监听 FireFox 扩展中的事件](/zh-CN/docs/Listening_to_events_in_Firefox_extensions)
  - [监听所有标签页中的事件](/zh-CN/docs/Listening_to_events_on_all_tabs)
