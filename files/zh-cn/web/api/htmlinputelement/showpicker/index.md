---
title: HTMLInputElement.showPicker()
slug: Web/API/HTMLInputElement/showPicker
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement.showPicker()`** 方法为 `input` 元素展示浏览器的默认选择器（picker）。

这与选择元素时通常展示的选择器相同，但是它可以由按钮或者用户交互触发。

通常地，浏览器为这些类型的 input 实现此方法：`"date"`、`"month"`、`"week"`、`"time"`、`"datetime-local"`、`"color"` 或 `"file"`。它也可以预填充来自 {{htmlelement("datalist")}} 元素或者 [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete) 属性的项目。

更一般地说，这种方法完美地展示了平台上任何具有选择器的 input 元素的选择器。

## 语法

```js-nolint
showPicker()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果元素不可变，则抛出，这意味着用户不能修改它和/或无法自动预填充它。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果不是由触摸手势或者鼠标点击等显示触发（选择器需要{{Glossary("Transient activation","瞬态激活")}}），则抛出。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果在跨域 iframe 中调用，则抛出，除了文件和颜色选择器（由于历史原因豁免）。

## 安全性

[瞬态用户激活](/zh-CN/docs/Web/Security/User_activation)是需要的。用户必须与页面或者 UI 元素交互，才能使这个功能按顺序工作。

## 示例

### 功能检测

以下代码展示了如何检查 `showPicker()` 是否被支持：

```js
if ("showPicker" in HTMLInputElement.prototype) {
  // showPicker() is supported.
}
```

### 正常的 input 选择器

这个示例展示了如何将这个功能用于 `color` 和 `file` 的 input 选择器。

> **备注：** `date`、`datetime-local`、`month`、`time`、`week` 的选择器以同样的方式启动。它们并不能在这里展示，因为在线示例运行在一个跨域 frame 中，并且会导致 [`SecurityError`](#安全性)。

#### HTML

```html
<p>
  <input type="color" />
  <button id="color">Show the color picker</button>
</p>

<p>
  <input type="file" />
  <button id="file">Show the file picker</button>
</p>
```

#### JavaScript

代码只要获取所选按钮的上一个元素并在上面调用 `showPicker()` 即可。

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.srcElement.previousElementSibling;
    try {
      input.showPicker();
    } catch (error) {
      window.alert(error);
    }
  });
});
```

#### 结果

单击每个 input 类型旁边的按钮以显示其选择器。

{{EmbedLiveSample("正常的 input 选择器", "100%", "140px")}}

### showPicker() 用于 datalist input

`showPicker()` 可以启动定义在 [`<datalist>`](/zh-CN/docs/Web/HTML/Element/datalist) 列表中选项的选择器。

首先，我们在 HTML 中定一个了 `<datalist>`，它由许多互联网浏览器、使用类型为 `text` 的 input 和 一个按钮组成。

```html
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>

<input type="text" list="browsers" />
<button>Select browser</button>
```

以下代码增加了一个事件监听器，当按钮被点击时，调用 `showPicker()`。

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Fall back to another picker mechanism
  }
});
```

### showPicker() 用于 autocomplete

`showPicker()` 可以为一个 [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete) input 开启选择器。

这里，我们定义了一个 input，其采用了 autocomplete 为“name”的选项。

```html
<input autocomplete="name" /> <button>Show autocomplete options</button>
```

以下代码展示了当按钮被点击时，input 展示的选择器。

```js
const button = document.querySelector("button");
const browserInput = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    browserInput.showPicker();
  } catch (error) {
    // Fall back to another picker mechanism
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ HTMLElement("input") }}
- {{ domxref("HTMLInputElement") }}
- {{htmlelement("datalist")}}
- [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete)
