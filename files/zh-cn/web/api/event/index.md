---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`Event`** 接口表示在 [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) 上出现的事件。

一些事件是由用户触发的，例如鼠标或键盘事件；或者由 API 生成以表示异步任务的进度。事件也可以通过编程方式触发，例如对元素调用 [`HTMLElement.click()`](/zh-CN/docs/Web/API/HTMLElement/click) 方法，或者定义一些自定义事件，再使用 [`EventTarget.dispatchEvent()`](/zh-CN/docs/Web/API/EventTarget/dispatchEvent) 方法将自定义事件派发往指定的目标（target）。

有许多不同类型的事件，其中一些使用基于 `Event` 主接口的其他接口。`Event` 本身包含适用于所有事件的属性和方法。

很多 DOM 元素可以被设计接收 (或者监听) 这些事件，并且执行代码去响应（或者处理）它们。通过 [`EventTarget.addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法可以将事件处理器绑定到不同的 [HTML 元素](/zh-CN/docs/Web/HTML/Reference/Elements)上（比如 `<button>`、`<div>`、`<span>` 等等）。这种方式基本替换了老版本中使用 HTML [事件处理器属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)的方式。此外，在正确添加后，还可以使用 [`removeEventListener()`](/zh-CN/docs/Web/API/EventTarget/removeEventListener) 方法移除这些事件处理器。

> [!NOTE]
> 一个元素可以绑定多个事件处理器，甚至是对于完全相同的事件。尤其是相互独立的代码模块出于不同的目的附加事件处理器。（比如，一个网页同时有着广告模块和统计模块同时监听视频播放。）

当有很多嵌套的元素，每个元素都有着自己的事件处理器，事件处理过程会变得非常复杂。尤其当一个父元素和子元素绑定完全相同的事件时，因为结构上的重叠，事件在技术层面发生在两个元素中，触发的顺序取决于每个处理器的[事件冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)的设置。

## 基于 Event 的接口

下面是基于 `Event` 主接口的接口列表，每一个接口都设置了指向各自的 MDN API 参考中相应文档的链接。

需要注意的是，所有的事件接口名称都是以“Event”结尾的。

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}} {{Deprecated_Inline}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("FontFaceSetLoadEvent")}}
- {{domxref("FormDataEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("HIDInputReportEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}} {{Deprecated_Inline}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}} {{Deprecated_Inline}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SubmitEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## 构造函数

- {{domxref("Event.Event", "Event()")}}
  - : 创建并返回一个 `Event` 对象。

## 实例属性

- {{domxref("Event.bubbles")}} {{ReadOnlyInline}}
  - : 一个布尔值，用来表示该事件是否会在 DOM 中冒泡。
- {{domxref("Event.cancelable")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示事件是否可以取消。
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示事件是否可以穿过 Shadow DOM 和常规 DOM 之间的边界进行冒泡。
- {{domxref("Event.currentTarget")}} {{ReadOnlyInline}}
  - : 对事件当前注册的目标的引用。这是一个当前计划将事件发送到的对象。它是有可能在*重定向*（retarget）的过程中被改变的。
- {{domxref("Event.defaultPrevented")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示 {{domxref("event.preventDefault()")}} 方法是否取消了事件的默认行为。
- {{domxref("Event.eventPhase")}} {{ReadOnlyInline}}
  - : 指示正在处理的事件流阶段。它是以下数字之一：`NONE`、`CAPTURING_PHASE`、`AT_TARGET`、`BUBBLING_PHASE`。
- {{domxref("Event.isTrusted")}} {{ReadOnlyInline}}
  - : 表示事件是由浏览器（例如用户点击）发起的，还是由脚本发起的（例如使用事件创建方法）。
- {{domxref("Event.target")}} {{ReadOnlyInline}}
  - : 对最初分发事件的对象的引用。
- {{domxref("Event.timeStamp")}} {{ReadOnlyInline}}
  - : 事件创建时的时间戳（精度为毫秒）。按照规范，这个时间戳是 Unix 纪元起经过的毫秒数，但实际上，在不同的浏览器中，对此时间戳的定义也有所不同。另外，规范正在将其修改为 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref("Event.type")}} {{ReadOnlyInline}}
  - : 事件的类型的名称。

### 遗留属性和非标准属性

- {{domxref("Event.cancelBubble")}} {{deprecated_inline}}
  - : {{domxref("Event.stopPropagation()")}} 的历史别名，应该改用。在事件处理程序返回之前将其值设置为 `true` 可以阻止事件传播。
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 事件的明确原始目标。
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 重定向目标前的事件原始目标。
- {{domxref("Event.returnValue")}} {{deprecated_inline}}
  - : 为了确保现有网站继续工作，而仍然支持的历史属性。请改用 {{domxref("Event.preventDefault()")}} 和 {{domxref("Event.defaultPrevented")}}。
- {{domxref("Event.composed", "Event.scoped")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : 一个布尔值，指示给定事件是否会穿过影子根节点冒泡到标准 DOM。请改用 {{domxref("Event.composed", "composed")}}。

## 实例方法

- {{domxref("Event.composedPath()")}}
  - : 返回事件的路径（将在该对象上调用监听器）。如果阴影根（shadow root）节点创建时 {{domxref("ShadowRoot.mode")}} 值为 closed，那么路径不会包括该根节点下影子树（shadow tree）的节点。
- {{domxref("event.preventDefault")}}
  - : 取消事件（如果该事件可取消）。
- {{domxref("event.stopImmediatePropagation")}}
  - : 对这个特定的事件而言，没有其他监听器被调用。这个事件既不会添加到相同的元素上，也不会添加到以后将要遍历的元素上（例如在捕获阶段）。
- {{domxref("event.stopPropagation")}}
  - : 停止冒泡，阻止事件在 DOM 中继续冒泡。

### 弃用方法

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : 初始化创建的事件的值。如果事件已经被分派，则此方法不执行任何操作。请改用构造函数（{{domxref("Event.Event", "Event()")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 可用的事件类型：[Event 参考](/zh-CN/docs/Web/API/Document_Object_Model/Events)
- [事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- [事件冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [创建和触发自定义事件](/zh-CN/docs/Web/API/Document_Object_Model/Events)
