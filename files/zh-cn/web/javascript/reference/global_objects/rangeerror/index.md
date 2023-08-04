---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
---

{{JSRef}}

**`RangeError`** 对象表示一个特定值不在所允许的范围或者集合中的错误。

## 描述

试图将一个值作为参数传递给一个允许的范围不包含该值的函数会引发 `RangeError`。

在以下的情况中，可能会遇到这个问题：

- 将不允许的字符串值传递给 {{jsxref("String.prototype.normalize()")}}，或
- 尝试使用 {{jsxref("Array")}} 构造函数创建一个具有不合法的长度的字符串，或
- 传递错误值到数值计算方法（{{jsxref("Number.toExponential()")}}、{{jsxref("Number.toFixed()")}} 或 {{jsxref("Number.toPrecision()")}}）。

`RangeError` 是一个{{Glossary("serializable object", "可序列化对象")}}，所以可以使用 {{domxref("structuredClone()")}} 对它进行克隆，也可以使用 {{domxref("Worker/postMessage()", "postMessage()")}} 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间拷贝它。

## 构造函数

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : 创建一个新的 `RangeError` 对象。

## 实例属性

- {{jsxref("Error.prototype.message")}}
  - : 错误消息。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.name")}}
  - : 错误名称。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.cause")}}
  - : 表示导致当前错误被抛出的原因。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
  - : 引发此错误的文件的路径。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
  - : 引发此错误的代码所在的文件的行号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
  - : 引发此错误的代码在文件中所在行的列号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : 堆栈跟踪。继承自 {{jsxref("Error")}}。

## 示例

### 使用 RangeError（对于数值）

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // 处理错误
  }
}
```

### 使用 RangeError（对于其他的值）

```js
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // 处理错误
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
