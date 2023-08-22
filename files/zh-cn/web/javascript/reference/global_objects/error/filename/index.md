---
title: Error.prototype.fileName
slug: Web/JavaScript/Reference/Global_Objects/Error/fileName
---

{{JSRef}} {{non-standard_header}}

**`fileName`** 属性包含引发此错误的文件的路径。

## 描述

此非标准属性包含引发此错误的文件的路径。如果从调试器上下文调用，例如 Firefox Developer Tools，将会返回“debugger eval code”.

## 示例

### 使用 `fileName`

```js
var e = new Error("Could not parse input");
throw e;
// e.fileName could look like "file:///C:/example.html"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
