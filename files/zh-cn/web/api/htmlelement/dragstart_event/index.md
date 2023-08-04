---
title: HTMLElement：dragstart 事件
slug: Web/API/HTMLElement/dragstart_event
---

{{APIRef}}

`dragstart` 事件在用户开始拖动元素或被选择的文本时调用。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("dragstart", (event) => {});

ondragstart = (event) => {};
```

## 事件类型

一个 {{domxref("DragEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

_除了以下的属性，来自父接口 {{domxref("Event")}} 的属性也是可用的。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在拖放交互期间转移的数据。

## 示例

### 在拖动开始时设置透明度

在该示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它进入另一个容器，然后释放它。

我们监听 `dragstart` 事件，使元素在拖动时半透明。

关于更完整的拖放示例，请参见 [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event) 事件。

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">This div is draggable</div>
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
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});
```

#### 结果

{{EmbedLiveSample('在拖动开始时设置透明度')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他拖放事件：

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 其他目标中的该事件：

  - {{domxref("Window")}}：{{domxref("Window/dragover_event", "dragover")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/dragover_event", "dragover")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/dragover_event", "dragover")}} 事件
