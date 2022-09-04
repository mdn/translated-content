---
title: dragover
slug: Web/API/HTMLElement/dragover_event
original_slug: Web/API/Document/dragover_event
---
{{APIRef}}

当元素或者选择的文本被拖拽到一个有效的放置目标上时，触发 `dragover` 事件（每几百毫秒触发一次）。

这个事件在可被放置元素的节点上触发。

## 基本信息

<table class="properties">
  <tbody>
    <tr>
      <td>是否冒泡</td>
      <td>是</td>
    </tr>
    <tr>
      <td>是否可以取消</td>
      <td>是</td>
    </tr>
    <tr>
      <td>目标对象</td>
      <td>{{domxref("Document")}}, {{domxref("Element")}}</td>
    </tr>
    <tr>
      <td>接口</td>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <td>默认行为</td>
      <td>重置当前的拖拽动作为"none"</td>
    </tr>
  </tbody>
</table>

## 属性

| Property                                 | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | The element that was underneath the element being dragged.                                                                                                                                                                                                                                                                                                                                                              |
| `type` {{readonlyInline}}          | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                               |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | Whether the event is cancellable or not?                                                                                                                                                                                                                                                                                                                                                                                |
| `view` {{readonlyInline}}          | [`WindowProxy`](/zh-CN/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | 0.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `dataTransfer`                           | DataTransfer                                     | The data that underlies a drag-and-drop operation, known as the [drag data store](/zh-CN/docs/Web/API/DataTransfer). Protected mode.                                                                                                                                                                                                                                                                                    |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | The node that had the event listener attached.                                                                                                                                                                                                                                                                                                                                                                          |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                             | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `screenY` {{readonlyInline}}       | long                                             | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `clientX` {{readonlyInline}}       | long                                             | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `clientY` {{readonlyInline}}       | long                                             | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `button` {{readonlyInline}}        | unsigned short                                   | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                        |
| `buttons` {{readonlyInline}}       | unsigned short                                   | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/zh-CN/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                            | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                          |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |
| `shiftKey` {{readonlyInline}}      | boolean                                          | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                           |
| `altKey` {{readonlyInline}}        | boolean                                          | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                             |
| `metaKey` {{readonlyInline}}       | boolean                                          | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                            |

## 示例：dropzone

{{page('/zh-CN/docs/Web/Events/dragstart', '示例：dropzone')}}

## 规范

{{Specifications}}

## 浏览器支持

{{Compat("api.Document.dragover_event")}}

## 相关

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
