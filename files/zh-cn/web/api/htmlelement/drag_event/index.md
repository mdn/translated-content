---
title: HTMLElement：drag 事件
slug: Web/API/HTMLElement/drag_event
---

{{APIRef}}

`drag` 事件在用户拖动元素或选择的文本时，每隔几百毫秒就会被触发一次。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("drag", (event) => {});

ondrag = (event) => {};
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
  <div id="draggable" draggable="true">这个 div 可以拖动</div>
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
  opacity: 0.5;
}
```

#### JavaScript

```js
let dragged;

/* 在可拖动的目标上触发的事件 */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("dragging");
});

source.addEventListener("dragstart", (event) => {
  // 保存被拖动元素的引用
  dragged = event.target;
  // 设置为半透明
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // 拖动结束，重置透明度
  event.target.classList.remove("dragging");
});

/* 在放置目标上触发的事件 */
const target = document.getElementById("droptarget");
target.addEventListener(
  "dragover",
  (event) => {
    // 阻止默认行为以允许放置
    event.preventDefault();
  },
  false,
);

target.addEventListener("dragenter", (event) => {
  // 在可拖动元素进入潜在的放置目标时高亮显示该目标
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // 在可拖动元素离开潜在放置目标元素时重置该目标的背景
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // 阻止默认行为（会作为某些元素的链接打开）
  event.preventDefault();
  // 将被拖动元素移动到选定的目标元素中
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

- 其他拖放事件：

  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 其他目标上的此事件：

  - {{domxref("Window")}}：{{domxref("Window/drag_event", "drag")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/drag_event", "drag")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/drag_event", "drag")}} 事件
