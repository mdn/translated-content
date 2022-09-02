---
title: drag
slug: conflicting/Web/API/HTMLElement/drag_event
original_slug: Web/API/Document/drag_event
---
{{APIRef}}

当元素或者选择的文本被拖动时触发 `drag` 事件 (每几百毫秒).

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
      <td>Continue the drag &#x26; drop operation.</td>
    </tr>
  </tbody>
</table>

## 属性

| Property                                 | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | 被拖动元素下方的元素                                                                                                                                                                                                                                                                                                                                                                                                    |
| `type` {{readonlyInline}}          | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | 事件类型                                                                                                                                                                                                                                                                                                                                                                                                                |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 事件是否冒泡                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | 该事件是否可以被取消                                                                                                                                                                                                                                                                                                                                                                                                    |
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

## 示例

```js
<div class="dropzone">
  <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
    This div is draggable
  </div>
</div>
<div class="dropzone"></div>
<div class="dropzone"></div>
<div class="dropzone"></div>

<style>
  #draggable {
    width: 200px;
    height: 20px;
    text-align: center;
    background: white;
  }

  .dropzone {
    width: 200px;
    height: 20px;
    background: blueviolet;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>

<script>
  var dragged;

  /* 拖动目标元素时触发 drag 事件 */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // 保存拖动元素的引用 (ref.)
      dragged = event.target;
      // 使其半透明
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // 重置透明度
      event.target.style.opacity = "";
  }, false);

  /* 放置目标元素时触发事件 */
  document.addEventListener("dragover", function( event ) {
      // 阻止默认动作以启用 drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // 当可拖动的元素进入可放置的目标时高亮目标节点
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // 当拖动元素离开可放置目标节点，重置其背景
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // 阻止默认动作（如打开一些元素的链接）
      event.preventDefault();
      // 将拖动的元素到所选择的放置目标节点中
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);
</script>
```

## Specifications

{{Specifications}}

## 浏览器支持

{{Compat("api.Document.drag_event")}}

## 相关

- 其它拖放事件：

  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/dragexit_event", "dragexit")}}
  - {{domxref("Document/drop_event", "drop")}}

- 其他目标上的拖放事件

  - {{domxref("Window")}}: {{domxref("Window/drag_event", "drag")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/drag_event", "drag")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drag_event", "drag")}} event
