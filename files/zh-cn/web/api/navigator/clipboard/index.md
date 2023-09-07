---
title: Navigator.clipboard
slug: Web/API/Navigator/clipboard
---

剪贴板 [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API) 为 **{{domxref("Navigator")}}** 接口添加了只读属性 **`clipboard`**，该属性返回一个可以读写剪切板内容的 {{domxref("Clipboard")}} 对象。在 Web 应用中，剪切板 API 可用于实现剪切、复制、粘贴的功能。

只有在用户事先授予网站或应用对剪切板的访问许可之后，才能使用异步剪切板读写方法。许可操作必须通过取得权限 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 的 `"clipboard-read"` 和/或 `"clipboard-write"` 项获得。

## 语法

```js
theClipboard = navigator.clipboard;
```

### 值

用于访问系统剪切板的 {{domxref("Clipboard")}} 对象。

## 示例

以下代码使用 `navigator.clipboard` 来访问系统剪切板，以读取系统剪切板的内容。

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

这个代码片段将 HTML 中拥有类名 `"cliptext"` 的第一个元素的内容替换为剪切板中的内容。这段代码可用于在浏览器拓展中定时自动更新或者由事件触发，实时显示当前剪切板上的内容。

如果剪切板为空，或者不包含文本，则 `"cliptext"` 元素的内容将被清空。这是因为在剪切板为空或者不包含文本时，{{domxref("Clipboard.readText", "readText()")}} 会返回一个空字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

{{APIRef("Clipboard API")}}
