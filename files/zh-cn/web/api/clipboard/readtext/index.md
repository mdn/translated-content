---
title: Clipboard.readText()
slug: Web/API/Clipboard/readText
---

{{APIRef("Clipboard API")}}

**{{domxref("Clipboard")}}** 接口的 **`readText()`** 方法解析系统剪贴板的文本内容返回一个{{jsxref("Promise")}} 。

## 语法

```plain
var promise = navigator.clipboard.readText()
```

### 参数

None.

### 返回值

A {{jsxref("Promise")}} that resolves with a {{domxref("DOMString")}} containing the textual contents of the clipboard. Returns an empty string if the clipboard is empty, does not contain text, or does not include a textual representation among the {{domxref("DataTransfer")}} objects representing the clipboard's contents.

要从剪贴板中读取非文本内容，请改用{{domxref("Clipboard.read", "read()")}}方法。您可以使用 {{domxref("Clipboard.writeText", "writeText()")}}将文本写入剪贴板

## 例子

此示例检索剪贴板的文本内容，并将返回的文本插入元素的内容中。

```js
navigator.clipboard
  .readText()
  .then((clipText) => (document.getElementById("outbox").innerText = clipText));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
