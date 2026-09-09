---
title: Element：transitionstart 事件
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

**`transitionstart`** 事件会在 [CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)实际开始时触发，也即在任何 {{cssxref("transition-delay")}} 结束之后。

此事件不可取消。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("transitionstart", (event) => { })

ontransitionstart = (event) => { }
```

## 事件类型

{{domxref("TransitionEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("TransitionEvent")}}

## 示例

以下代码为 `transitionstart` 事件添加监听器：

```js
element.addEventListener("transitionstart", () => {
  console.log("过渡已开始");
});
```

同样的效果，但使用 `ontransitionstart` 属性而非 `addEventListener()`：

```js
element.ontransitionstart = () => {
  console.log("过渡已开始");
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

对此，我们再添加一些 JavaScript，以标明 `transitionstart` 和 {{domxref("Element/transitionrun_event", "transitionrun")}} 事件在何处触发。

```js
const transition = document.querySelector(".transition");
const message = document.querySelector(".message");

transition.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun 已触发";
});

transition.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart 已触发";
});

transition.addEventListener("transitionend", () => {
  message.textContent = "transitionend 已触发";
});
```

{{ EmbedLiveSample('运行实例', '100%', '170') }}

二者的区别在于：

- `transitionrun` 在过渡创建时触发（即在任意延迟开始时）。
- `transitionstart` 在实际动画开始时触发（即在任意延迟结束时）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TransitionEvent")}} 接口
- CSS 属性：{{cssxref("transition")}}、{{cssxref("transition-delay")}}、{{cssxref("transition-duration")}}、{{cssxref("transition-property")}}、{{cssxref("transition-timing-function")}}
- 相关事件：{{domxref("Element/transitionend_event", "transitionend")}}、{{domxref("Element/transitionrun_event", "transitionrun")}}、{{domxref("Element/transitioncancel_event", "transitioncancel")}}
