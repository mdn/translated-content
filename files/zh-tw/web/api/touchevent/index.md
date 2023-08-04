---
title: TouchEvent
slug: Web/API/TouchEvent
---

{{ APIRef("Touch Events") }}

**`TouchEvent`** 介面表示了一個由觸控平面因觸碰而改變狀態所發出的事件。平面可以是觸控螢幕或是觸控板，`TouchEvent` 能描述一或多個觸碰點，並且支援偵測其移動、增加或減少觸碰點等等功能。

觸碰點是由 {{ domxref("Touch") }} 物件表示；每一個觸碰點描述了其位置、大小與形狀、壓力值以及目標元素。觸碰點列表由 {{ domxref("TouchList") }} 所表示。

## 建構式

- {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}}
  - : Creates a `TouchEvent` object.

## 屬性

_此介面也繼承了其父介面 {{domxref("UIEvent")}} 與 {{domxref("Event")}} 的屬性_

- {{ domxref("TouchEvent.altKey") }} {{readonlyInline}}
  - : A Boolean value indicating whether or not the alt key was down when the touch event was fired.
- {{ domxref("TouchEvent.changedTouches") }} {{readonlyInline}}
  - : A {{ domxref("TouchList") }} of all the {{ domxref("Touch") }} objects representing individual points of contact whose states changed between the previous touch event and this one.
- {{ domxref("TouchEvent.ctrlKey") }} {{readonlyInline}}
  - : A Boolean value indicating whether or not the control key was down when the touch event was fired.
- {{ domxref("TouchEvent.metaKey") }} {{readonlyInline}}
  - : A Boolean value indicating whether or not the meta key was down when the touch event was fired.
- {{ domxref("TouchEvent.shiftKey") }} {{readonlyInline}}
  - : A Boolean value indicating whether or not the shift key was down when the touch event was fired.
- {{ domxref("TouchEvent.targetTouches") }}{{readonlyInline}}
  - : A {{ domxref("TouchList") }} of all the {{ domxref("Touch") }} objects that are both currently in contact with the touch surface **and** were also started on the same element that is the target of the event.
- {{ domxref("TouchEvent.touches") }} {{readonlyInline}}
  - : A {{ domxref("TouchList") }} of all the {{ domxref("Touch") }} objects representing all current points of contact with the surface, regardless of target or changed status.

## 觸控事件類型

觸控事件有多個種類可以代表觸碰狀態發生了改變。可以藉由 {{ domxref("event.type", "TouchEvent.type") }} 屬性來確認是哪一個種類的觸控事件。

- [`touchstart`](/zh-TW/docs/Web/API/Element/touchstart_event)
  - : Sent when the user places a touch point on the touch surface. The event's target will be the {{ domxref("element") }} in which the touch occurred.
- [`touchend`](/zh-TW/docs/Web/API/Element/touchend_event)

  - : Sent when the user removes a touch point from the surface (that is, when they lift a finger or stylus from the surface). This is also sent if the touch point moves off the edge of the surface; for example, if the user's finger slides off the edge of the screen.

    The event's target is the same {{ domxref("element") }} that received the `touchstart` event corresponding to the touch point, even if the touch point has moved outside that element.

    The touch point (or points) that were removed from the surface can be found in the {{ domxref("TouchList") }} specified by the `changedTouches` attribute.

- [`touchmove`](/zh-TW/docs/Web/API/Element/touchmove_event)

  - : Sent when the user moves a touch point along the surface. The event's target is the same {{ domxref("element") }} that received the `touchstart` event corresponding to the touch point, even if the touch point has moved outside that element.

    This event is also sent if the values of the radius, rotation angle, or force attributes of a touch point change.

    > **備註：** The rate at which `touchmove` events is sent is browser-specific, and may also vary depending on the capability of the user's hardware. You must not rely on a specific granularity of these events.

- [`touchcancel`](/zh-TW/docs/Web/API/Element/touchcancel_event)

  - : Sent when a touch point has been disrupted in some way. There are several possible reasons why this might happen (and the exact reasons will vary from device to device, as well as browser to browser):

    - An event of some kind occurred that canceled the touch; this might happen if a modal alert pops up during the interaction.
    - The touch point has left the document window and moved into the browser's UI area, a plug-in, or other external content.
    - The user has placed more touch points on the screen than can be supported, in which case the earliest {{ domxref("Touch") }} in the {{ domxref("TouchList") }} gets canceled.

### Using with addEventListener() and preventDefault()

It's important to note that in many cases, both touch and mouse events get sent (in order to let non-touch-specific code still interact with the user). If you use touch events, you should call {{domxref("Event.preventDefault","preventDefault()")}} to keep the mouse event from being sent as well.

The exception to this is Chrome, starting with version 56 (desktop, Chrome for android, and android webview), where the default value for [`touchstart`](/zh-TW/docs/Web/API/Element/touchstart_event) and [`touchmove`](/zh-TW/docs/Web/API/Element/touchmove_event) is `true` and calls to {{domxref("Event.preventDefault","preventDefault()")}} are not needed. To override this behavior, you simply set the `passive` option to `false` as shown in the example below. This change prevents the listener from blocking page rendering while a user is scrolling. A demo is available on the [Google Developer](https://developers.google.com/web/updates/2016/06/passive-event-listeners) site.

## GlobalEventHandlers

{{SeeCompatTable}}

- {{ domxref("GlobalEventHandlers.ontouchstart") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchstart`](/zh-TW/docs/Web/API/Element/touchstart_event) event.
- {{ domxref("GlobalEventHandlers.ontouchend") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchend`](/zh-TW/docs/Web/API/Element/touchend_event) event.
- {{ domxref("GlobalEventHandlers.ontouchmove") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchmove`](/zh-TW/docs/Web/API/Element/touchmove_event) event.
- {{ domxref("GlobalEventHandlers.ontouchcancel") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchcancel`](/zh-TW/docs/Web/API/Element/touchcancel_event) event.

## 範例

See the [example on the main Touch events article](/zh-TW/DOM/Touch_events#Example).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("Touch_events","Touch Events Overview")}}
- {{domxref("GestureEvent")}}
- {{domxref("MSGestureEvent")}}
