---
title: Document.createCDATASection()
slug: Web/API/Document/createCDATASection
---

{{APIRef("DOM")}}

**`createCDATASection()`** 创建并返回一个新的 CDATA 片段节点。

## 语法

```plain
var CDATASectionNode = document.createCDATASection(data);
```

- _CDATASectionNode_ 是一个 [CDATA 片段](/zh-CN/docs/Web/API/CDATASection)节点。
- _data_ 包含了要被添加至 CDATA 片段的数据的字符串。

## 示例

```js
var docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");

var cdata = docu.createCDATASection("Some <CDATA> data & then some");

docu.getElementsByTagName("xml")[0].appendChild(cdata);

alert(new XMLSerializer().serializeToString(docu));
// Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>
```

## 备注

- This will only work with XML, not HTML documents (as HTML documents do not support CDATA sections); attempting it on an HTML document will throw `NOT_SUPPORTED_ERR`.
- Will throw a `NS_ERROR_DOM_INVALID_CHARACTER_ERR` exception if one tries to submit the closing CDATA sequence ("`]]>`") as part of the data, so unescaped user-provided data cannot be safely used without with this method getting this exception ({{domxref("document.createTextNode","createTextNode()")}} can often be used in its place).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
