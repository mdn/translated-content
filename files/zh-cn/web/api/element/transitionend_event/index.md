---
title: Element：transitionend 事件
slug: Web/API/Element/transitionend_event
---

{{APIRef}}

**`transitionend`** 事件会在 [CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)完成的时候触发。如果过渡在完成前就被移除，比如删除 {{cssxref("transition-property")}} 或者将 {{cssxref("display")}} 设置为 `none`，那么该事件就不会生成。

`transitionend` 事件在两个方向上触发：当它完成从初始状态到过渡状态的过渡时，以及当它完全恢复到默认或非过渡状态时。如果没有设置过渡延迟或持续时间，或者两者都是 0 秒或都没有声明，则没有过渡，且不会触发任何过渡事件。如果触发了 `transitioncancel` 事件，`transitionend` 事件就不会触发。

这个事件是无法取消的。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用该事件的名称或者设置事件处理器属性。

```js
addEventListener("transitionend", (event) => {});

ontransitionend = (event) => {};
```

## 事件类型

一个 {{domxref("TransitionEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("TransitionEvent")}}

## 事件属性

_同样继承来自父级 {{domxref("Event")}} 的属性_。

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : 与过渡相关的 CSS 属性名称的字符串。
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : 一个 `float` 类型的数值，表示在事件触发时过渡已经运行的时间，以秒为单位。该值不受 {{cssxref("transition-delay")}} 属性的影响。
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : 一个以 `::` 开始的字符串，包含运行动画效果的[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)名称。如果过渡效果并不是在伪元素上运行的，则该值是空字符串 `''`。

## 示例

下面的代码先获取一个定义了过渡效果的元素，然后添加了一个监听器来监听 `transitionend` 事件：

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("过渡结束");
});
```

使用 `ontransitionend` 也是一样的：

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("过渡结束");
};
```

### 实时示例

在下面的示例中，我们有一个简单的 {{HTMLElement("div")}} 元素，它通过过渡样式进行了修饰，其中包括一个延迟：

```html
<div class="transition">让鼠标在这里悬停</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgb(255 0 0 / 100%);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgb(255 0 0 / 0%);
}
```

为此，我们将添加一些 JavaScript 代码来展示 [`transitionstart`](/zh-CN/docs/Web/API/Element/transitionstart_event)、[`transitionrun`](/zh-CN/docs/Web/API/Element/transitionrun_event)、[`transitioncancel`](/zh-CN/docs/Web/API/Element/transitioncancel_event) 和 `transitionend` 事件的触发。在此示例中，如果要取消过渡，则需在过渡结束前不要将鼠标悬停在正在过渡的框上。为了触发过渡结束事件，需要在过渡结束时保持悬停在过渡上。

```js
const message = document.querySelector(".message");
const el = document.querySelector(".transition");

el.addEventListener("transitionrun", () => {
  message.textContent = "触发 transitionrun";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "触发 transitionstart";
});

el.addEventListener("transitioncancel", () => {
  message.textContent = "触发 transitioncancel";
});

el.addEventListener("transitionend", () => {
  message.textContent = "触发 transitionend";
});
```

{{ EmbedLiveSample('实时示例', '100%', '150px') }}

`transitionend` 事件会在两个方向上触发：当方框结束旋转并且不透明度达到 0 或 1 时（具体取决于方向）。

如果没有过渡延迟或持续时间，即如果两者都为 0 或未声明，则不会发生过渡，也不会触发任何过渡事件。

如果触发了 `transitioncancel` 事件，则不会触发 `transitionend` 事件。

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
