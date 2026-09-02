---
title: "Error: lineNumber"
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

{{jsxref("Error")}} 实例的 **`lineNumber`** 数据属性包含引发此错误的文件中的行号。

## 值

正整数。

{{js_property_attributes(1, 0, 1)}}

## 示例

### 使用 lineNumber

```js
try {
  throw new Error("无法解析输入");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### 使用 error 事件的替代示例

```js
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error("无法解析输入");
throw e;
```

这不是标准特性，且缺乏广泛支持。参见下方的浏览器兼容性表。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.columnNumber")}}
- {{jsxref("Error.prototype.fileName")}}
