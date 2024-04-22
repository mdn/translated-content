---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---

{{JSRef}} {{non-standard_header}}

**`lineNumber`** 属性的值为抛出错误的代码在其源文件中所在的行号。

## 示例

### 使用 `lineNumber`

```js
var e = new Error("Could not parse input");
throw e;
console.log(e.lineNumber); // 2
```

### 监听 `error` 事件的示例

```js
window.addEventListener("error", function (e) {
  console.log(e.lineNumber); // 5
});
var e = new Error("Could not parse input");
throw e;
```

这不是一个标准化的属性，缺乏广泛的支持。参见下面的浏览器兼容性表格。

## 规范

非标准化属性。不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
