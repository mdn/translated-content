---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Non-standard_Header}}

{{jsxref("Error")}} 实例的 **`columnNumber`** 数据属性包含引发此错误的文件行中的列号。

## 值

正整数。

{{js_property_attributes(1, 0, 1)}}

## 示例

### 使用 columnNumber

```js
try {
  throw new Error("无法解析输入");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
