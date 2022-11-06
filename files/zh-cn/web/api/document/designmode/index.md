---
title: Document.designMode
slug: Web/API/Document/designMode
---

{{ ApiRef()}}

**`document.designMode`** 控制整个文档是否可编辑。有效值为 `"on"` 和 `"off"` 。根据规范，该属性默认为 `"off"` 。Firefox 遵循此标准。早期版本的 Chrome 和 IE 默认为 `"inherit"` 。从 Chrome 43 开始，默认值为 `"off"` ，并且不再支持 `"inherit"`。在 IE6 到 IE10 中，该值为大写。

## 语法

```plain
var mode = document.designMode;
document.designMode = "on" || "off";
```

## 示例

使一个 {{HTMLElement("iframe")}} 的文档可编辑：

```js
iframeNode.contentDocument.designMode = "on";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Mozilla 软件中的富文本编辑](/zh-CN/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
