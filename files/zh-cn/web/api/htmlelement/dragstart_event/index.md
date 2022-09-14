---
title: dragstart
slug: Web/API/HTMLElement/dragstart_event
original_slug: Web/API/Document/dragstart_event
---
当用户开始拖动一个元素或者一个选择文本的时候 `dragstart` 事件就会触发。

## 基本信息

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Yes</td>
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
      <td>Initiate the drag-and-drop operation.</td>
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

### HTML 内容

```html
<div class="dropzone">
    <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
        This div is draggable
    </div>
</div>
<div class="dropzone"></div>
<div class="dropzone"></div>
<div class="dropzone"></div>
```

### CSS 内容

```css
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
```

### JavaScript 内容

```js
  var dragged;

  /* 可拖动的目标元素会触发事件 */
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

  /* 放下目标节点时触发事件 */
  document.addEventListener("dragover", function( event ) {
      // 阻止默认动作
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // 当可拖动的元素进入可放置的目标高亮目标节点
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
      // 移动拖动的元素到所选择的放置目标节点
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);
```

{{ EmbedLiveSample('示例：dropzone') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Document.dragstart_event")}}

## 相关事件

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
