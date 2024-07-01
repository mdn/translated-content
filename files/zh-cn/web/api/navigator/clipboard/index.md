---
title: Navigator：clipboard 属性
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

{{domxref("Navigator")}} 接口的只读属性 **`clipboard`** 返回一个用于读写剪贴板内容的 {{domxref("Clipboard")}} 对象。

这是 [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API) 的入口点，可用于在 Web 应用程序中实现剪切、复制和粘贴功能。

## 值

用于访问系统剪贴板的 {{domxref("Clipboard")}} 对象。

## 示例

以下代码使用 `navigator.clipboard` 来访问系统剪贴板，以便读取剪贴板中的文本内容。

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

该代码片段将设置了 `"cliptext"` 类的元素的内容替换为剪贴板中的文本内容。这段代码可能用于浏览器扩展程序，该扩展程序显示当前剪贴板的内容，并会定期或在特定事件触发时自动更新。

如果剪贴板为空或不包含文本，则清除 `"cliptext"` 元素的内容。这是因为如果剪贴板为空或不包含文本，{{domxref("Clipboard.readText", "readText()")}} 会返回空字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
