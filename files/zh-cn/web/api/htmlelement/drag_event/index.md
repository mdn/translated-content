---
title: HTMLElement：drag 事件
slug: Web/API/HTMLElement/drag_event
---

{{APIRef}}

`drag` 事件在用户拖动元素或选择的文本时，每隔几百毫秒就会被触发一次。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener('drag', (event) => {});

ondrag = (event) => { };
```

## 事件类型

一个 {{domxref("DragEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

_除了下面列出的属性外，还可以使用父接口 {{domxref("Event")}} 的属性。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在进行拖放操作时，传输的数据。

## 示例

### 拖放示例

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">
    这个 div 可以拖动
  </div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* Prevent the user selecting text in the example */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}

.dropzone.dragover {
  background-color: purple;
}

.dragging {
  opacity: .5;
}
```

#### JavaScript

```js
let dragged;

/* events fired on the draggable target */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
}, false);

target.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### 结果

{{EmbedLiveSample('拖放示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其它拖放事件：

  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 其它目标上的此事件：

  - {{domxref("Window")}}：{{domxref("Window/drag_event", "drag")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/drag_event", "drag")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/drag_event", "drag")}} 事件
