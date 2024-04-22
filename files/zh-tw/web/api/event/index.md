---
title: Event
slug: Web/API/Event
---

{{APIRef("DOM")}}

**`Event`** 介面表示了一個在 DOM 物件上所發生的事件。

一個事件可以是由使用者的操作行為所產生（如：點擊滑鼠按鈕或敲打鍵盤），或是來自 API 因處理非同步任務所產生。事件也可以為程式所觸發，例如呼叫元素的 [`HTMLElement.click()`](/zh-TW/docs/Web/API/HTMLElement/click) 方法，或是自行定義事件並使用 [`EventTarget.dispatchEvent()`](/zh-TW/docs/Web/API/EventTarget/dispatchEvent) 發送至特定的目標。

事件有多種不同的類型，部分事件是使用基於 `Event` 的子介面。`Event` 本身包含了所有事件共同的屬性及方法。

許多 DOM 元素可被設定接受（accept，或稱為 listen "監聽"）這些事件，並在發生時執行處理（process、handle）事件的程式碼。事件處理器（Event-handlers）通常會使用 `EventTarget.addEventListener()` 來被連結（connected，或稱為 attached "附加"）至各個 [HTML 元素](/zh-TW/docs/Web/HTML/Element)（例如 \<button>、\<div>、\<div>、\<span> 等），且此方式一般也是用來取代舊的 HTML [事件處理器屬性（attributes）](/zh-TW/docs/HTML/Global_attributes)。此外，在需要時也可以使用 [`removeEventListener()`](/zh-TW/docs/Web/API/EventTarget/removeEventListener) 來中斷事件處理器與元素的連結。請留意一個元素可以擁有多個事件處理器（即使是處理同一種事件的不同處理器），特別是那些被切分開來彼此獨立且有不同目標的程式模組（舉例來說，廣告及統計模組可以同時監控網頁中的影片觀看資訊）。

When there are many nested elements, each with its own handler(s), event processing can become very complicated — especially where a parent element receives the very same event as its child elements because "spatially" they overlap so the event technically occurs in both, and the processing order of such events depends on the [Event bubbling and capture](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture) settings of each handler triggered.

## 基於 `Event` 的子介面

Below is a list of interfaces which are based on the main `Event` interface, with links to their respective documentation in the MDN API reference. Note that all event interfaces have names which end in "Event".

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
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## 建構式

- {{domxref("Event.Event", "Event()")}}
  - : 建立一個 `Event` 物件。

## 屬性

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : 布林值，表示事件是否會向上冒泡傳遞。
- {{domxref("Event.cancelBubble")}}
  - : 由於歷史性因素，此屬性的效果等同於 {{domxref("Event.stopPropagation()", "stopPropagation()")}} 方法。若在事件處理器回傳前設定此值為 `true`，可阻止事件繼續向上冒泡傳遞。
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : 布林值，表示事件是否能被取消。
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : 指向目前處理事件之監聽器所屬的 DOM 物件。
- {{domxref("Event.deepPath")}} {{non-standard_inline}}
  - : An {{jsxref("Array")}} of DOM {{domxref("Node")}}s through which the event has bubbled.
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : 布林值，表示事件的預設行為是否被 {{domxref("event.preventDefault()", "preventDefault()")}} 方法所取消。
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : 表示事件目前的傳遞階段。
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : 事件的明確原定目標（Mozilla 專屬）。
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : 事件重新導向前的原定目標（Mozilla 專屬）。
- {{domxref("Event.returnValue")}}
  - : 非標準屬性。用以替代 {{domxref("Event.preventDefault()", "preventDefault()")}} 方法與 {{domxref("Event.defaultPrevented", "defaultPrevented")}} 屬性（舊版 Internet Explorer 專屬）。
- {{domxref("Event.scoped")}} {{readonlyinline}} {{Deprecated_Inline}}
  - : A {{jsxref("Boolean")}} indicating whether the given event will bubble across through the shadow root into the standard DOM. This property has been renamed to {{domxref("Event.composed", "composed")}}.
- {{domxref("Event.srcElement")}} {{non-standard_inline}}
  - : 非標準屬性。為 {{domxref("Event.target", "target")}} 屬性的別名（舊版 Internet Explorer 專屬）。
- {{domxref("Event.target")}} {{readonlyinline}}
  - : 指向最初觸發事件的 DOM 物件。
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : 事件發生（事件物件建立）至今的時間。
- {{domxref("Event.type")}} {{readonlyinline}}
  - : 事件類型（不區分大小寫）。
- {{domxref("Event.isTrusted")}} {{readonlyinline}}
  - : 表示事件物件是否為瀏覽器建立（比如在用戶點擊之後），或由程式碼所建立（使用建立事件的方法，如 {{domxref("Event.initEvent()", "initEvent()")}}）。

### Obsolete properties

- {{domxref("Event.scoped")}} {{readonlyinline}} {{Deprecated_Inline}}
  - : A {{jsxref("Boolean")}} indicating whether the given event will bubble across through the shadow root into the standard DOM. This property has been renamed to {{domxref("Event.composed", "composed")}}.

## 方法

- {{domxref("Event.createEvent()")}} {{deprecated_inline}}
  - : Creates a new event, which must then be initialized by calling its `initEvent()` method.
- {{domxref("Event.composedPath()")}}
  - : Returns the event's path (objects on which listeners will be invoked). This does not include nodes in shadow trees if the shadow root was created with its {{domxref("ShadowRoot.mode")}} closed.
- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : 初始化已經建立的事件。若該事件已經被處理過，這方法就不會執行任何東西。
- {{domxref("Event.preventDefault()")}}
  - : 取消該事件（如果該事件的 {{domxref("Event.cancelable", "cancelable")}} 屬性為 `true`）。
- {{domxref("Event.stopImmediatePropagation()")}}
  - : 一旦事件物件呼叫此方法，目前元素中尚未執行的已註冊之相同事件類型監聽器將不會被呼叫，而事件也不會繼續捕捉或冒泡傳遞。
- {{domxref("Event.stopPropagation()")}}
  - : 阻止事件物件繼續捕捉或冒泡傳遞。

### 已廢棄方法

- {{domxref("Event.getPreventDefault()")}} {{non-standard_inline}}
  - : 非標準方法。回傳 `defaultPrevented` 屬性值。請直接改用 {{domxref("Event.defaultPrevented", "defaultPrevented")}} 屬性。
- {{domxref("Event.preventBubble()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : 已廢棄方法。阻止事件繼續冒泡傳遞。請改用 {{domxref("event.stopPropagation()", "stopPropagation()")}} 方法。
- {{domxref("Event.preventCapture()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : 已廢棄方法。請改用 {{domxref("event.stopPropagation()", "stopPropagation()")}} 方法。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 可用的事件類型：[Event reference](/zh-TW/docs/Web/Reference/Events)
- [各種 Event Targets 的比較](/zh-TW/docs/Web/API/Event/Comparison_of_Event_Targets) (target vs currentTarget vs relatedTarget vs originalTarget)
- [建立和觸發事件](/zh-TW/docs/Web/Guide/Events/Creating_and_triggering_events)
- 給 Firefox 插件開發者：

  - [Listening to events in Firefox extensions](/zh-TW/docs/Listening_to_events_in_Firefox_extensions)
  - [Listening to events on all tabs](/zh-TW/docs/Listening_to_events_on_all_tabs)
