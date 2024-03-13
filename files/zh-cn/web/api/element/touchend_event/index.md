---
title: touchend
slug: Web/API/Element/touchend_event
---

当触点离开触控平面时触发`touchend`事件。

## 常规信息

- 规范
  - : [Touch Events](http://www.w3.org/TR/touch-events/#the-touchend-event)
- 接口
  - : TouchEvent
- 是否冒泡
  - : Yes
- 能否取消默认行为
  - : Yes
- 目标
  - : Document, Element
- 默认行为
  - : 无

## 属性

| Property                            | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}         | EventTarget  | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                                                                                                                                                                       |
| `type` {{readonlyInline}}           | DOMString    | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `bubbles` {{readonlyInline}}        | Boolean      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `cancelable` {{readonlyInline}}     | Boolean      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `view` {{readonlyInline}}           | WindowProxy  | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                                                                |
| `detail` {{readonlyInline}}         | long (float) | 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `touches` {{readonlyInline}}        | TouchList    | A list of [`Touch`](/zh-CN/DOM/Touch)es for every point of contact currently touching the surface.                                                                                                                                                                                                                                                                                                                                                           |
| `targetTouches` {{readonlyInline}}  | TouchList    | A list of [`Touch`](/zh-CN/DOM/Touch)es for every point of contact that is touching the surface and started on the element that is the target of the current event.                                                                                                                                                                                                                                                                                          |
| `changedTouches` {{readonlyInline}} | TouchList    | A list of [`Touch`](/zh-CN/docs/DOM/Touch)es for every point of contact which contributed to the event. For the touchstart event this must be a list of the touch points that just became active with the current event. For the touchmove event this must be a list of the touch points that have moved since the last event. For the touchend and touchcancel events this must be a list of the touch points that have just been removed from the surface. |
| `ctrlKey` {{readonlyInline}}        | boolean      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                              |
| `shiftKey` {{readonlyInline}}       | boolean      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                |
| `altKey` {{readonlyInline}}         | boolean      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                  |
| `metaKey` {{readonlyInline}}        | boolean      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                                                                 |

## 例子

这些事件的代码示例在这个页面[Touch events](/zh-CN/docs/DOM/Touch_events)中均有体现。

## 规范

{{Specifications}}

## Related Events

- [`touchstart`](/zh-CN/docs/Web/API/Element/touchstart_event)
- [`touchend`](/zh-CN/docs/Web/API/Element/touchend_event)
- [`touchmove`](/zh-CN/docs/Web/API/Element/touchmove_event)
- [`touchcancel`](/zh-CN/docs/Web/API/Element/touchcancel_event)
