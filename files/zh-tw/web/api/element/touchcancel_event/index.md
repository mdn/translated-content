---
title: touchcancel
slug: Web/API/Element/touchcancel_event
---

{{APIRef}}

`touchcancel 觸控點發生失效的事件被觸發(例如太多觸控點時)`

## 一般資訊

- 規範
  - : [Touch Events](http://www.w3.org/TR/touch-events/#the-touchcancel-event)
- 介面
  - : TouchEvent
- 起泡事件
  - : 是
- 可取消
  - : 否
- 對象
  - : Document, Element
- 預設行為
  - : 無

## 屬性

| Property                            | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}         | EventTarget  | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type` {{readonlyInline}}           | DOMString    | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `bubbles` {{readonlyInline}}        | Boolean      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `cancelable` {{readonlyInline}}     | Boolean      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `view` {{readonlyInline}}           | WindowProxy  | [`document.defaultView`](/zh-TW/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                                                                |
| `detail` {{readonlyInline}}         | long (float) | 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `touches` {{readonlyInline}}        | TouchList    | A list of [`Touch`](/zh-TW/DOM/Touch)es for every point of contact currently touching the surface.                                                                                                                                                                                                                                                                                                                                                           |
| `targetTouches` {{readonlyInline}}  | TouchList    | A list of [`Touch`](/zh-TW/DOM/Touch)es for every point of contact that is touching the surface and started on the element that is the target of the current event.                                                                                                                                                                                                                                                                                          |
| `changedTouches` {{readonlyInline}} | TouchList    | A list of [`Touch`](/zh-TW/docs/DOM/Touch)es for every point of contact which contributed to the event. For the touchstart event this must be a list of the touch points that just became active with the current event. For the touchmove event this must be a list of the touch points that have moved since the last event. For the touchend and touchcancel events this must be a list of the touch points that have just been removed from the surface. |
| `ctrlKey` {{readonlyInline}}        | boolean      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                              |
| `shiftKey` {{readonlyInline}}       | boolean      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                |
| `altKey` {{readonlyInline}}         | boolean      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                  |
| `metaKey` {{readonlyInline}}        | boolean      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                 |

## 範例

各種觸控事件的範例：[Touch events](/zh-TW/docs/DOM/Touch_events)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關事件

{{ domxref("GlobalEventHandlers.ontouchcancel","ontouchcancel")}}
