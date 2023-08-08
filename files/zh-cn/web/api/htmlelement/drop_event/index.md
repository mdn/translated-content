---
title: HTMLElement：drop 事件
slug: Web/API/HTMLElement/drop_event
---

{{APIRef}}

**`drop`** 事件在元素或文本选择被放置到有效的放置目标上时触发。为确保 `drop` 事件始终按预期触发，应当在处理 `dragover` 事件的代码部分始终包含 `preventDefault()` 调用。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("drop", (event) => {});

ondrop = (event) => {};
```

## 事件类型

一个 {{domxref("DragEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

_除了下面列出的属性外，还可以使用父接口 {{domxref("Event")}} 的属性。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在进行拖放操作时，传输的数据。

## 示例

### 一个最小的拖放示例

在此示例中，我们在容器内有一个可拖动元素。尝试抓住这个元素，将其拖到另一个容器中，然后释放它。

我们在这里使用了三个事件处理器：

- 在 `dragstart` 事件处理器中，我们获得对用户拖动的元素的引用。
- 在目标容器的 `dragover` 事件处理器中，我们调用 `event.preventDefault()`，以使得该元素能够接收 `drop` 事件。
- 在放置区域的 `drop` 事件处理器中，我们将可拖动元素从原先的容器移动到该放置区域。

完整的拖放示例，请参见 [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event) 事件。

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
```

#### JavaScript

```js
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // 保存被拖动元素的引用
  dragged = event.target;
});

const target = document.getElementById("droptarget");
target.addEventListener("dragover", (event) => {
  // 阻止默认行为以允许放置
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // 阻止默认行为（会作为某些元素的链接打开）
  event.preventDefault();
  // 将被拖动的元素移动到选定的放置目标
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### 结果

{{EmbedLiveSample('一个最小的拖放示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他拖放事件：

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}

- 其他目标上的此事件：

  - {{domxref("Window")}}：{{domxref("Window/drop_event", "drop")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/drop_event", "drop")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/drop_event", "drop")}} 事件
