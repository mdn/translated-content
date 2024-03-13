---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
---

{{JSRef}}

**`TypeError`**（类型错误）对象通常（但并不只是）用来表示值的类型非预期类型时发生的错误。

以下情况会抛出 `TypeError`：

- 传递给运算符的操作数或传递给函数的参数与预期的类型不兼容；或
- 尝试修改无法更改的值；或
- 尝试以不适当的方法使用一个值。

`TypeError` 是一个{{Glossary("serializable object", "可序列化对象")}}，所以可以使用 {{domxref("structuredClone()")}} 对它进行克隆，也可以使用 {{domxref("Worker/postMessage()", "postMessage()")}} 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间拷贝它。

## 构造函数

- {{jsxref("Global_Objects/TypeError/TypeError", "TypeError()")}}
  - : 创建一个新的 `TypeError` 对象。

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

### 捕获类型错误

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### 创建一个类型错误

```js
try {
  throw new TypeError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
