---
title: HTMLElement：focus() 方法
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.focus()`** 方法用于将焦点设置到指定的元素上（如果该元素可以获得焦点）。获得焦点的元素默认会接收键盘事件及类似事件。

默认情况下，浏览器会在聚焦元素后将其滚动到可视区域，并且可能会为获得焦点的元素提供可见指示（通常是在元素周围显示"焦点环"）。可通过参数选项来禁用默认滚动行为以及强制元素显示可见指示。

## 语法

```js-nolint
focus()
focus(options)
```

### 参数

- `options` {{optional_inline}}
  - : 一个用于控制聚焦过程的可选对象。该对象可以包含以下属性：
    - `preventScroll` {{optional_inline}}
      - : 一个布尔值，指示浏览器是否应滚动文档以将新获得焦点的元素显示在视口中。`preventScroll` 为 `false`（默认值）时，浏览器会在聚焦元素后将其滚动到可视区域。如果 `preventScroll` 设置为 `true`，则不会发生滚动。
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : 一个布尔值，设为 `true` 表示强制显示焦点可见指示，设为 `false` 表示阻止显示焦点可见指示。如果未指定此属性，浏览器会在判断有助于提升用户无障碍体验时提供可见指示。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 聚焦文本框

本示例使用按钮将焦点设置到文本框上。

#### HTML

```html
<input id="myTextField" value="Text field." />
<button id="focusButton">Click to set focus on the text field</button>
```

#### JavaScript

以下代码添加了一个事件处理器，在按钮被按下时将焦点设置到文本框上。请注意，大多数浏览器会自动为获得焦点的文本框添加可见指示（"焦点环"），因此代码未将 `focusVisible` 设置为 `true`。

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### 结果

选择按钮即可将焦点设置到文本框上。

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### 聚焦按钮

本示例演示了如何将焦点设置到按钮元素上。

#### HTML

首先定义三个按钮。中间和右侧的按钮会将焦点设置到最左侧的按钮上，最右侧的按钮还会指定 `focusVisible`。

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

#### JavaScript

以下代码为中间和右侧按钮设置了点击事件处理器。

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myButton").focus();
});

document
  .getElementById("focusButtonVisibleIndication")
  .addEventListener("click", () => {
    document.getElementById("myButton").focus({ focusVisible: true });
  });
```

#### 结果

选择中间或最右侧的按钮，可以将焦点设置到最左侧的按钮上。

浏览器通常不会在以编程方式聚焦按钮元素时显示可见焦点指示，因此选择中间按钮的效果可能不太明显。但如果你的浏览器支持 `focusVisible` 选项，选择最右侧的按钮时应能看到最左侧按钮的焦点变化。

{{ EmbedLiveSample('Focus_on_a_button') }}

### 聚焦时是否滚动

本示例展示了将 [`preventScroll`](#preventscroll) 选项分别设置为 `true` 和 `false`（默认值）时的聚焦效果。

#### HTML

HTML 定义了两个按钮，用于将焦点设置到屏幕外的第三个按钮上。

```html
<button id="focus_scroll">Click to set focus on off-screen button</button>
<button id="focus_no_scroll">
  Click to set focus on offscreen button without scrolling
</button>

<div id="container">
  <button id="myButton">Button</button>
</div>
```

```css hidden
#myButton {
  margin-top: 500px; /* Push the button off-screen */
}
```

#### JavaScript

以下代码为第一个和第二个按钮设置了点击事件处理器，以将焦点设置到最后一个按钮上。请注意，第一个处理器未指定 `preventScroll` 选项，因此会启用滚动到获得焦点的元素。

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### 结果

选择第一个按钮可以聚焦并滚动到屏幕外的按钮。选择第二个按钮可以聚焦，但不会发生滚动。

{{ EmbedLiveSample('Focus with and without scrolling') }}

## 规范

{{Specifications}}

## 备注

- 如果在 mousedown 事件处理器中调用 `HTMLElement.focus()`，则必须调用 `event.preventDefault()` 以防止焦点离开 `HTMLElement`。
- 与不同 HTML 特性（如 [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex) 或{{Glossary("shadow tree", "影子 DOM")}}）相关的焦点行为，此前一直未被充分定义，已于 2019 年 10 月更新。更多信息请参阅 [WHATWG 博客](https://blog.whatwg.org/focusing-on-focus)。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.blur")}}：从元素上移除焦点。
- {{domxref("document.activeElement")}}：获取当前获得焦点的元素。
