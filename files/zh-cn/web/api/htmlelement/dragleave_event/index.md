---
title: HTMLElement：dragleave 事件
slug: Web/API/HTMLElement/dragleave_event
---

{{APIRef}}

`dragleave` 事件在拖动的元素或选中的文本离开一个有效的放置目标时被触发。

此事件不可取消。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("dragleave", (event) => {});

ondragleave = (event) => {};
```

## 事件类型

一个 {{domxref("DragEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

_除了下面列出的属性外，还可以使用父接口 {{domxref("Event")}} 的属性。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在进行拖放操作时，传输的数据。

## 示例

### 在 dragleave 时重置拖放区域的样式

在此示例中，我们在容器内有一个可拖动元素。尝试抓住这个元素，将其拖到另一个容器中，然后释放它。

在可拖动元素被拖到另一个容器上方时，我们将容器的背景设置为紫色，以表示这个可拖动元素可以被放置到该容器中。我们会监听 `dragleave` 事件，以在可拖动元素离开容器时重置容器的背景。

请注意，我们没有在这个示例中实现元素的放置：完整的拖放示例，请参见 [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event) 事件。

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
```

#### JavaScript

```js
const target = document.getElementById("droptarget");
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
```

#### 结果

{{EmbedLiveSample('在 dragleave 时重置拖放区域的样式')}}

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
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 其他目标上的此事件：

  - {{domxref("Window")}}：{{domxref("Window/dragleave_event", "dragleave")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/dragleave_event", "dragleave")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/dragleave_event", "dragleave")}} 事件
