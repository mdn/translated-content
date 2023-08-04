---
title: InputEvent.inputType
slug: Web/API/InputEvent/inputType
---

{{APIRef("DOM Events")}}

{{domxref("InputEvent")}} 接口中的只读属性 **`inputType`** 返回对可编辑内容所做更改的类型。可能的更改包括插入、删除和格式化文本。

## 语法

```js
var aString = inputEvent.inputType;
```

### 返回值

一个 {{domxref("DOMString")}} 对象，包含所做输入的类型。有许多可能的值，例如 `insertText`、`deleteContentBackward`、`insertFromPaste` 和 `formatBold`。有关可用输入类型的完整列表，请参阅 [Input Events Level 1 规范的属性部分](https://rawgit.com/w3c/input-events/v1/index.html#interface-InputEvent-Attributes)。

## 示例

此示例记录一个可编辑的 {{htmlElement("div")}} 所触发的 [input events](/zh-CN/docs/Web/API/HTMLElement/input_event) 的 `inputType`。

### HTML

```html
<p id="log">Input type:</p>
<div
  contenteditable="true"
  style="margin: 20px;padding: 20px;border:2px dashed red;">
  <p>
    Some sample text. Try inserting line breaks, or deleting text in different
    ways, or pasting different content in.
  </p>
  <hr />
  <ul>
    <li>A sample</li>
    <li>bulleted</li>
    <li>list.</li>
  </ul>
  <p>Another paragraph.</p>
</div>
```

### JavaScript

```js
const log = document.getElementById("log");
const editable = document.querySelector("div[contenteditable]");
editable.addEventListener("input", logInputType);

function logInputType(event) {
  log.textContent = `Input type: ${event.inputType}`;
}
```

### Result

尝试编辑 `<div>` 中的文本，并看看发生了什么事。

{{EmbedLiveSample("示例", '100%', 500)}}

> **备注：** 有关更详细的示例，请参见 [Masayuki Nakano 的 InputEvent 测试套件](https://d-toybox.com/studio/lib/input_event_viewer.html)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
