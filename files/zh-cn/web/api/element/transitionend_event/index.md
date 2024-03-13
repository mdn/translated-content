---
title: GlobalEventHandlers.ontransitionend
slug: Web/API/Element/transitionend_event
---

{{APIRef("CSS3 Transitions")}}

{{domxref("GlobalEventHandlers")}} 混入对象的 **`ontransitionend`** 属性是一个处理 [`transitionend`](/zh-CN/docs/Web/API/Element/transitionend_event) 事件的 [事件处理函数](/zh-CN/docs/Web/Events/Event_handlers)。

`transitionend` 事件的事件处理函数，在某个 [CSS transition](/zh-CN/docs/Web/CSS/CSS_transitions) 完成时触发。

> **备注：** 如果在 transition 完成前，该 transition 已从目标节点上移除，那么 [`transitionend`](/zh-CN/docs/Web/API/Element/transitionend_event) 将不会被触发。一种可能的情况是修改了目标节点的 {{cssxref("transition-property")}} 属性，另一种可能的情况是 {{cssxref("display")}} 属性被设为 `"none"`。

## 语法

```js
var transitionEndHandler = target.ontransitionend;

target.ontransitionend = {{jsxref("Global_Objects/Function", "Function")}}
```

### 值

一个 {{jsxref("Global_Objects/Function")}} 会在 [`transitionend`](/zh-CN/docs/Web/API/Element/transitionend_event) 事件发生时被触发，表示目标节点的 CSS transition 已经完成。目标节点可能是一个 HTML 元素 ({{domxref("HTMLElement")}})，document ({{domxref("Document")}})，或者 window ({{domxref("Window")}})。该函数接受一个参数：一个描述该事件的 {{domxref("TransitionEvent")}} 对象；其 {{domxref("TransitionEvent.elapsedTime")}} 属性值与 {{cssxref("transition-duration")}} 的值一致。

> **备注：** `elapsedTime` 并不包括 transition 效果开始前的时间，也就是说，{{cssxref("transition-delay")}} 属性并不会影响 `elapsedTime` 的值，其在延迟结束、动画开始之时，值为零。

## 示例

本例中，我们使用了 [`transitionrun`](/zh-CN/docs/Web/API/Element/transitionrun_event) 和 [`transitionend`](/zh-CN/docs/Web/API/Element/transitionend_event) 事件来监测 transition 的开始和结束，从而在 transition 的过程中更新文本。这也可以被用来触发动画或者其他效果来实现连锁反应。

### HTML

这里简单地创建了一个 {{HTMLElement("div")}}，我们将使用 CSS 来改变其大小和颜色。

```html
<div class="box"></div>
```

### CSS

以下为 CSS 样式，并添加了 transition 属性。当鼠标悬浮时，盒子大小和颜色会发生变化，而且还会转动。

```css
.box {
  margin-left: 70px;
  margin-top: 30px;
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  color: #ffffff;
  padding: 20px;
  font:
    bold 1.6em "Helvetica",
    "Arial",
    sans-serif;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    transform 2s,
    color 2s;
}

.box:hover {
  background-color: #ffcccc;
  color: #000000;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

### JavaScript

接下来，我们需要事件处理函数以在 transition 发生和结束时修改文本内容。

```js
let box = document.querySelector(".box");
box.ontransitionrun = function (event) {
  box.textContent = "Zooming...";
};
box.ontransitionend = function (event) {
  box.textContent = "Done!";
};
```

### 效果

最后的效果如下：

{{EmbedLiveSample('示例', 600, 280)}}

注意观察当鼠标悬浮在元素上以及移出时发生的变化。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TransitionEvent")}} 接口
- CSS 属性：{{cssxref("transition")}}、{{cssxref("transition-delay")}}、{{cssxref("transition-duration")}}、{{cssxref("transition-property")}}、{{cssxref("transition-timing-function")}}
- 相关事件：{{domxref("Element/transitionrun_event", "transitionrun")}}、{{domxref("Element/transitionstart_event", "transitionstart")}}、{{domxref("Element/transitioncancel_event", "transitioncancel")}}
- 以 {{domxref("Document")}} 为目标的该事件：{{domxref("Document/transitionend_event", "transitionend")}}
- 以 {{domxref("Window")}} 为目标的该事件：{{domxref("Window/transitionend_event", "transitionend")}}
