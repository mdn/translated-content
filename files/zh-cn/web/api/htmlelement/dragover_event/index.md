---
title: HTMLElement：dragover 事件
slug: Web/API/HTMLElement/dragover_event
---

{{APIRef}}

`dragover` 事件在可拖动的元素或者被选择的文本被拖进一个有效的放置目标时（每几百毫秒）触发。

该事件在放置目标上触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("dragover", (event) => {});

ondragover = (event) => {};
```

## 事件类型

一个 {{domxref("DragEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

_除了以下的属性，来自父接口 {{domxref("Event")}} 的属性也是可用的。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在拖放交互期间转移的数据。

## 示例

### 一个小巧的拖放示例

在该示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它进入另一个容器，然后释放它。

在这里，我们有三个事件处理程序：

- 在 `dragstart` 事件处理程序中，我们得到了用户拖动元素的引用。
- 在目标容器的 `dragover` 事件处理程序中，我们调用 `event.preventDefault()`，这使它能够接收 `drop` 事件。
- 在放置区域的 `drop` 事件处理程序中，我们将可拖动的元素从原始区域移动到可放置区域。

关于更完整的拖放示例，请参见 [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event) 事件。

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
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
```

#### JavaScript

```js
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // prevent default to allow drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged element to the selected drop target
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### 结果

{{EmbedLiveSample('一个小巧的拖放示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他拖放事件：

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 其他目标中的该事件：

  - {{domxref("Window")}}：{{domxref("Window/dragover_event", "dragover")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/dragover_event", "dragover")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/dragover_event", "dragover")}} 事件
