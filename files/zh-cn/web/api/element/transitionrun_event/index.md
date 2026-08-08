---
title: Element：transitionrun 事件
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

**`transitionrun`** 事件会在[CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)首次创建时触发，也即在任何 {{cssxref("transition-delay")}} 开始之前。

此事件不可取消。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("transitionrun", (event) => { })

ontransitionrun = (event) => { }
```

## 事件类型

{{domxref("TransitionEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("TransitionEvent")}}

## 事件属性

_也从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - ：包含与该过渡关联的 CSS 属性名称的字符串。
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - ：一个 `float`，表示此事件触发时过渡已运行的时间（以秒为单位）。该值不受 {{cssxref("transition-delay")}} 属性影响。
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - ：以 `::` 开头的字符串，包含过渡运行所在的[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)名称。若过渡不是在伪元素而是在元素上运行，则为空字符串：`''`。

## 示例

以下代码为 `transitionrun` 事件添加监听器：

```js
el.addEventListener("transitionrun", () => {
  console.log("过渡正在运行，但不一定已经开始实际过渡");
});
```

同样的效果，但使用 `ontransitionrun` 属性而非 `addEventListener()`：

```js
el.ontransitionrun = () => {
  console.log("过渡已开始运行，并将在过渡延迟结束后开始实际过渡");
};
```

### 运行实例

在下面的示例中，我们有一个简单的 {{htmlelement("div")}} 元素，并为其设置了包含延迟的过渡样式：

```html
<div class="transition">将鼠标悬停在我上方</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: transparent;
}
```

对此，我们再添加一些 JavaScript，以标明 {{domxref("Element/transitionstart_event", "transitionstart")}} 和 `transitionrun` 事件在何处触发。

```js
const el = document.querySelector(".transition");
const message = document.querySelector(".message");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun 已触发";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart 已触发";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend 已触发";
});
```

{{ EmbedLiveSample('运行实例', '100%', '150px') }}

二者的区别在于：

- `transitionrun` 在过渡创建时触发（即在任意延迟开始时）。
- `transitionstart` 在实际动画开始时触发（即在任意延迟结束时）。

即使过渡在延迟到期前被取消，仍会触发 `transitionrun`。若没有过渡延迟，或 `transition-delay` 为负值，则会同时触发 `transitionrun` 和 `transitionstart`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TransitionEvent")}} 接口
- CSS 属性：{{cssxref("transition")}}、{{cssxref("transition-delay")}}、{{cssxref("transition-duration")}}、{{cssxref("transition-property")}}、{{cssxref("transition-timing-function")}}
- 相关事件：{{domxref("Element/transitionend_event", "transitionend")}}、{{domxref("Element/transitionstart_event", "transitionstart")}}、{{domxref("Element/transitioncancel_event", "transitioncancel")}}
