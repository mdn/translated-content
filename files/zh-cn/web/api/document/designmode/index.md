---
title: Document：designMode 属性
slug: Web/API/Document/designMode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef}}

**`document.designMode`** 控制整个文档是否可编辑。有效值为 `"on"` 和 `"off"`。根据规范，该属性默认为 `"off"`。Firefox 遵循这一标准。早期版本的 Chrome 和 IE 默认为 `"inherit"`。从 Chrome 43 开始，默认为 `"off"` 并不再支持 `"inherit"`。在 IE6-10 中，该值为大写。

## 值

字符串，表示 `designMode` 是否（或应该）设置为开启或关闭。有效值为 `on` 和 `off`。

## 示例

使 {{HTMLElement("iframe")}} 的文档可编辑：

```js
iframeNode.contentDocument.designMode = "on";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.contentEditable")}}
