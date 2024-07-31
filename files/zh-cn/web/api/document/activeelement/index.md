---
title: Document：activeElement 属性
slug: Web/API/Document/activeElement
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM")}}

{{domxref("Document")}} 接口的 **`activeElement`** 只读属性返回 DOM 中当前拥有焦点的 {{domxref("Element")}}。

通常情况下，`activeElement` 会返回 {{domxref("HTMLInputElement")}} 或 {{domxref("HTMLTextAreaElement")}} 对象（如果当前有文本选择）。如果是这样，你可以通过使用对象的 `selectionStart` 和 `selectionEnd` 属性来获取更多详细信息。其他时候，获得焦点的元素可能是 {{HTMLElement("select")}} 元素（菜单）或 {{HTMLElement("input")}} 元素。

一般来说，用户可以按 Tab 键在页面上的可聚焦元素中移动焦点，并使用空格键来激活其中一个元素（例如按下按钮或切换单选按钮）。哪些元素可以聚焦取决于平台和浏览器的当前配置。例如，在 macOS 系统上，不是文本输入元素通常默认为不可聚焦。

> [!NOTE]
> 焦点（正在接收用户输入事件的元素）与选择（文档中当前高亮的部分）不是一回事。你可以使用 {{domxref("window.getSelection()")}} 获取当前选择。

## 值

当前聚焦的 {{domxref('Element')}}；如果没有聚焦元素，则为 {{HTMLElement("body")}} 或 `null`。

## 示例

### HTML

```html
<p>从下面的文本区域中选择一些文本：</p>

<form>
  <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
    这里是一号文本区。这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本。
  </textarea>
  <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
    这里是二号文本区。这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本。
  </textarea>
</form>

<p>激活的元素的 ID：<em id="output-element"></em></p>
<p>选中文本：<em id="output-text"></em></p>
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

### 结果

{{ EmbedLiveSample('示例', '400', '400') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.hasFocus")}}
