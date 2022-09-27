---
title: document.characterSet
slug: Web/API/Document/characterSet
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** 只读属性返回当前文档的字符编码。该字符编码是用于渲染此文档的字符集，可能与该页面指定的编码不同。（用户可以重写编码方式。）

> **备注：** `document.charset` 和 `document.inputEncoding` 属性是 `document.characterSet` 的遗留别名。不要再使用它们。

## 语法

```
var string = document.characterSet
```

## 示例

```
<button onclick="alert(document.characterSet);">查看字符集</button>
//返回当前文档的字符集，比如"ISO-8859-1" 或者 "UTF-8"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
