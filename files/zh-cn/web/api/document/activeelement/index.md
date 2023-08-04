---
title: DocumentOrShadowRoot.activeElement
slug: Web/API/Document/activeElement
---

{{APIRef("Shadow DOM")}}

{{domxref("Document")}} 和 {{domxref("ShadowRoot")}} 接口的 **`activeElement`** 只读属性，用来返回当前在 DOM 或者 shadow DOM 树中处于聚焦状态的{{domxref("Element")}}。

通常情况下，如果 {{domxref("HTMLInputElement")}} 或者 {{domxref("HTMLTextAreaElement")}}元素中有文字被选中时， `activeElement`属性就会返回该元素。这时，你可以调用该元素的{{domxref("Document.selectionStart", "selectionStart")}} 和 {{domxref("Document.selectionEnd", "selectionEnd")}} 属性获取更多选中文字的信息。其他情况下，焦点元素也可能是{{HTMLElement("select")}}元素 (menu) 或者一个别的 {{HTMLElement("input")}} 元素，比如 `"button"`、`"checkbox"` 或者 `"radio"`。

通常用户可以使用 tab 键来切换页面中的焦点元素获得焦点，使用空格键使元素 active (比如按下一个按钮或者 切换一个 radio). 具体哪些元素可以获得焦点与系统和浏览器的设置有关。比如，在 macOS 系统上，不是 text input 元素默认情况下是不能获得焦点的。

> **备注：** Focus (可收到 input 事件的元素) 和 selection (目前页面被高亮的部分) 不是一回事。你可以通过 {{domxref("window.getSelection()")}}获取当前用户选择的文本。

## Syntax

```plain
element = DocumentOrShadowRoot.activeElement
```

### Value

当前获得焦点的 {{domxref('Element')}} ，如果没有焦点元素，会返回 {{HTMLElement("body")}} 或者 `null` 。

## Example

### HTML

```html
<p>Select some text from one of the text areas below:</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.</textarea
  >
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
This is Text Area Two. Fusce ullamcorper, nisl ac porttitor adipiscing, urna orci egestas libero, ut accumsan orci lacus laoreet diam. Morbi sed euismod diam.</textarea
  >
</form>

<p>Active element ID: <b id="output-element"></b></p>
<p>Selected text: <b id="output-text"></b></p>
```

### JavaScript

```js
function onMouseUp(e) {
  const activeTextarea = document.activeElement;
  const selection = activeTextarea.value.substring(
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd,
  );

  const outputElement = document.getElementById("output-element");
  const outputText = document.getElementById("output-text");
  outputElement.innerHTML = activeTextarea.id;
  outputText.innerHTML = selection;
}

const textarea1 = document.getElementById("ta-example-one");
const textarea2 = document.getElementById("ta-example-two");
textarea1.addEventListener("mouseup", onMouseUp, false);
textarea2.addEventListener("mouseup", onMouseUp, false);
```

### Result

{{ EmbedLiveSample('Example', '400', '400') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
