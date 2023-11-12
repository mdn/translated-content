---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
---

{{JSRef}} {{non-standard_header}}

**`columnNumber`**属性包含引发此错误的文件行中的列号。

## 示例

### 使用 `columnNumber`

```js
var e = new Error("Could not parse input");
throw e;
console.log(e.columnNumber); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
