---
title: dragend
slug: Web/API/HTMLElement/dragend_event
original_slug: Web/API/Document/dragend_event
---
拖放事件在拖放操作结束时触发 (通过释放鼠标按钮或单击 escape 键)。

## 基本信息

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>{{domxref("Document")}}, {{domxref("Element")}}</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <td>Default Action</td>
      <td>Varies.</td>
    </tr>
  </tbody>
</table>

## 属性

| Property                                 | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | The element that was underneath the element being dragged.                                                                                                                                                                                                                                                                                                                                                              |
| `type` {{readonlyInline}}          | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | 事件类型。                                                                                                                                                                                                                                                                                                                                                                                                              |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 是否允许冒泡                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 默认行为是否可以取消                                                                                                                                                                                                                                                                                                                                                                                                    |
| `view` {{readonlyInline}}          | [`WindowProxy`](/zh-CN/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | 0.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `dataTransfer`                           | DataTransfer                                     | The data that underlies a drag-and-drop operation, known as the [drag data store](/zh-CN/docs/Web/API/DataTransfer). Protected mode.                                                                                                                                                                                                                                                                                    |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | 绑定事件监听的 DOM 结点                                                                                                                                                                                                                                                                                                                                                                                                 |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                             | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `screenY` {{readonlyInline}}       | long                                             | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `clientX` {{readonlyInline}}       | long                                             | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `clientY` {{readonlyInline}}       | long                                             | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `button` {{readonlyInline}}        | unsigned short                                   | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                        |
| `buttons` {{readonlyInline}}       | unsigned short                                   | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/zh-CN/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                            | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                          |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | 当事件触发的时候，如果**Ctrl**键是按下的，这个值就是**true**,否则就是**false**                                                                                                                                                                                                                                                                                                                                          |
| `shiftKey` {{readonlyInline}}      | boolean                                          | 当事件触发的时候，如果**Shift**键是按下的，这个值就是**true**,否则就是**false**                                                                                                                                                                                                                                                                                                                                         |
| `altKey` {{readonlyInline}}        | boolean                                          | 当事件触发的时候，如果**Alt**键是按下的，这个值就是**true**,否则就是**false**                                                                                                                                                                                                                                                                                                                                           |
| `metaKey` {{readonlyInline}}       | boolean                                          | 当事件触发的时候，如果 **Meta** 键是按下的，这个值就是 **true**，否则就是 **false**                                                                                                                                                                                                                                                                                                                                  |

## 示例：dropzone

{{page('/zh-CN/docs/Web/Events/dragstart', '示例：dropzone')}}

## 规范

{{Specifications}}

## 浏览器支持

{{Compat("api.Document.dragend_event")}}

## 相关

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
