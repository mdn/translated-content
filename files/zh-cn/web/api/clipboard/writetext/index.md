---
title: Clipboard.writeText()
slug: Web/API/Clipboard/writeText
---

{{APIRef("Clipboard API")}}

{{domxref("Clipboard")}} 接口的 **`writeText()`** 方法可以写入特定字符串到操作系统的剪切板。

> **备注：** 规范要求在写入剪贴板之前使用 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 获取“剪贴板写入”权限。但是，不同浏览器的具体要求不同，因为这是一个新的 API。有关详细信息，请查看[浏览器兼容性](#浏览器兼容性)和[剪贴板可用性](/zh-CN/docs/Web/API/Clipboard#剪贴板可用性)。

## 语法

```
var promise = navigator.clipboard.writeText(newClipText)
```

### 参数

- `newClipText`
  - : The {{domxref("DOMString")}} to be written to the clipboard.

### 返回值

一个{{jsxref("Promise")}} ，一旦剪贴板的内容被更新，它就会被解析。如果调用者没有写入剪贴板的权限，则拒绝写入剪切板（reject）

## 例子

此示例将剪贴板的内容设置为字符串“\<empty clipboard>”。

```js
navigator.clipboard.writeText("<empty clipboard>").then(
  function () {
    /* clipboard successfully set */
  },
  function () {
    /* clipboard write failed */
  },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
