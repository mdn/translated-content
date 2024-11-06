---
title: InputEvent：inputType 属性
slug: Web/API/InputEvent/inputType
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("UI Events")}}

{{domxref("InputEvent")}} 接口中的只读属性 **`inputType`** 返回对可编辑内容所做更改的类型。可能的更改包括插入、删除和格式化文本。

## 值

一个包含所做输入的类型的字符串。有许多可能的值，例如 `insertText`、`deleteContentBackward`、`insertFromPaste` 和 `formatBold`。有关可用输入类型的完整列表，请参阅 [Input Events Level 2 规范的属性部分](https://w3c.github.io/input-events/#interface-InputEvent-Attributes)。

## 示例

此示例记录一个可编辑的 {{htmlElement("div")}} 所触发的 [input 事件](/zh-CN/docs/Web/API/Element/input_event)的 `inputType`。

### HTML

```html
<p id="log">Input type:</p>
<div
  contenteditable="true"
  style="margin: 20px;padding: 20px;border:2px dashed red;">
  <p>一些示例文本。尝试插入换行符，或以不同方式删除文本，或粘贴不同内容。</p>
  <hr />
  <ul>
    <li>一个例子</li>
    <li>项目符号</li>
    <li>列表</li>
  </ul>
  <p>另一个段落。</p>
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

### 结果

尝试编辑 `<div>` 中的文本，并看看发生了什么事。

{{EmbedLiveSample("示例", '100%', 500)}}

> [!NOTE]
> 有关更详细的示例，请参见 [Masayuki Nakano 的 InputEvent 测试套件](https://d-toybox.com/studio/lib/input_event_viewer.html)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
