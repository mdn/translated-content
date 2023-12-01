---
title: Element：transitioncancel 事件
slug: Web/API/Element/transitioncancel_event
---

{{APIRef("CSS3 Transitions")}}

**`transitioncancel`** 事件在 [CSS 转换](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)被取消时触发。

当以下情况时，过渡被取消：

- 应用于目标的{{cssxref("transition-property")}}属性的值被更改
- {{cssxref("display")}}属性被设置为"none"。
- 转换在运行到完成之前就停止了，例如通过将鼠标移出悬浮过渡元素。

## Syntax

```
var transitionCancelHandler = target.ontransitioncancel;

target.ontransitioncancel = {{jsxref("Function")}}
```

### Value

A {{jsxref("Function")}} to be called when a `transitioncancel` event occurs indicating that a CSS transition has been cancelled on the _`target`_, where the target object is an HTML element ({{domxref("HTMLElement")}}), document ({{domxref("Document")}}), or window ({{domxref("Window")}}). The function receives as input a single parameter: a {{domxref("TransitionEvent")}} object describing the event which occurred; the event's {{domxref("TransitionEvent.elapsedTime")}} property's value should be the same as the value of {{cssxref("transition-duration")}}.

> **备注：** elapsedTime 不包括过渡效果开始之前的时间;这意味着{{cssxref("transition-delay")}}的值不会影响 elapsedTime 的值，elapsedTime 在延迟周期结束和动画开始之前都是 0。

## 示例

在本例中，我们使用 [`transitionrun`](/zh-CN/docs/Web/API/Element/transitionrun_event) 和 [`transitionend`](/zh-CN/docs/Web/API/Element/transitionend_event) 事件来检测转换何时开始和结束，从而导致在转换期间发生文本更新。这也可以用来触发动画或其他效果，以允许连锁反应。

除此之外，我们也使用 [`click`](/zh-CN/docs/Web/API/Element/click_event) 事件使盒子消失 (`display: none;`), 显示如何触发 `transitioncancel` 事件。

### HTML

这只是简单地创建了一个{{HTMLElement("div")}}，我们将在下面用 CSS 样式使其成为一个框，调整大小和改变颜色等。

```html
<div class="box"></div>
```

### CSS

下面的 CSS 样式框和应用一个过渡效果，使框的颜色和大小改变，并导致框旋转，而鼠标光标在它上面。

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
  -webkit-transition:
    width 2s,
    height 2s,
    background-color 2s,
    -webkit-transform 2s,
    color 2s;
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
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
```

### JavaScript

然后，我们需要建立事件处理程序，以便在转换开始和结束时更改框的文本内容。

```js
let box = document.querySelector(".box");
box.ontransitionrun = function (event) {
  box.innerHTML = "Zooming...";
};

box.ontransitionend = function (event) {
  box.innerHTML = "Done!";
};

box.onclick = function () {
  box.style.display = "none";
  timeout = window.setTimeout(appear, 2000);
  function appear() {
    box.style.display = "block";
  }
};

box.ontransitioncancel = function (event) {
  console.log(
    "transitioncancel fired after " + event.elapsedTime + " seconds.",
  );
};
```

### 结果

The resulting content looks like this:

{{EmbedLiveSample('示例', 600, 280)}}

Notice what happens when you hover your mouse cursor over the box, then move it away.

Also note the log that appears in the JavaScript console when you click the box, or move the cursor away before the transition has run to completion.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TransitionEvent")}} 接口
- CSS 属性：{{cssxref("transition")}}、{{cssxref("transition-delay")}}、{{cssxref("transition-duration")}}、{{cssxref("transition-property")}}、{{cssxref("transition-timing-function")}}
- 相关事件：{{domxref("Element/transitionrun_event", "transitionrun")}}、{{domxref("Element/transitionstart_event", "transitionstart")}}、{{domxref("Element/transitionend_event", "transitionend")}}
- 以 {{domxref("Document")}} 为目标的该事件：{{domxref("Document/transitioncancel_event", "transitioncancel")}}
- 以 {{domxref("Window")}} 为目标的该事件：{{domxref("Window/transitioncancel_event", "transitioncancel")}}
