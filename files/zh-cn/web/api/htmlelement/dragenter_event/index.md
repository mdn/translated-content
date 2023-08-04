---
title: HTMLElement：dragenter 事件
slug: Web/API/HTMLElement/dragenter_event
---

{{APIRef}}

`dragenter` 事件在可拖动的元素或者被选择的文本进入一个有效的放置目标时触发。

目标对象是*用户直接选择的范围*（由用户直接指示作为放置目标的元素），或者 {{HTMLElement("body")}} 元素。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("dragenter", (event) => {});

ondragenter = (event) => {};
```

## 事件类型

一个 {{domxref("DragEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("DragEvent")}}

## 事件属性

_除了以下的属性，来自父接口 {{domxref("Event")}} 的属性也是可用的。_

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : 在拖放交互期间转移的数据。

## 示例

### dragenter 事件触发时放置区域的样式

在该示例中，我们在容器中有一个可拖动的元素。尝试抓住元素，拖动它进入另一个容器，然后释放它。

当拖动的元素在另一个容器上时，我们监听的 `dragenter` 事件将给它一个紫色的背景，以表明可拖动的元素可以放置到该容器中。

注意，在这个部分示例中，我们还没有实现放置：关于拖放的完整示例，请参见 [`drag`](/zh-CN/docs/Web/API/HTMLElement/drag_event) 事件这页。

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

{{EmbedLiveSample('dragenter 事件触发时放置区域的样式')}}

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
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

- 其他目标中的该事件：

  - {{domxref("Window")}}：{{domxref("Window/dragenter_event", "dragenter")}} 事件
  - {{domxref("Document")}}：{{domxref("Document/dragenter_event", "dragenter")}} 事件
  - {{domxref("SVGElement")}}：{{domxref("SVGElement/dragenter_event", "dragenter")}} 事件
