---
title: Document：dragend 事件
slug: Web/API/HTMLElement/dragend_event
---

{{APIRef}}

`dragend` 事件在拖放操作结束时触发（通过释放鼠标按钮或单击 escape 键）。

该事件无法取消。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("dragend", (event) => {});

ondragend = (event) => {};
```

## 事件类型

{{domxref("DragEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

除了以下列出的额外属性，还可以使用从父接口 {{domxref("Event")}} 继承的属性。

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在执行拖放操作时传输的数据。

## 示例

### 在拖放结束时重置不透明度

在本示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它，然后释放它。

我们在拖动元素时，使元素变得半透明，并监听 `dragend` 事件以在释放元素时重置其不透明度。

参见 [`drag`](/zh-CN/docs/Web/API/Document/drag_event) 事件，以获取完整的拖放示例。

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">这个 div 是可拖动的</div>
</div>
<div class="dropzone"></div>
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

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
document.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});
```

#### 结果

{{EmbedLiveSample('在拖放结束时重置不透明度')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他拖放事件：

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- 其他目标上的 `dragend` 事件：

  - {{domxref("Window")}}：{{domxref("Window/dragend_event", "dragend")}} 事件
  - {{domxref("HTMLElement")}}：{{domxref("HTMLElement/dragend_event", "dragend")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/dragend_event", "dragend")}} 事件
