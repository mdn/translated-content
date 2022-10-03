---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}

**`padStart()`** 方法用另一个字符串填充当前字符串（如果需要的话，会重复多次），以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## 语法

```js
padStart(targetLength)
padStart(targetLength, padString)
```

### 参数

- `targetLength`
  - : 当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
- `padString` {{optional_inline}}
  - : 填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "（U+0020）。

### 返回值

在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串。

## 示例

### 简单示例

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### 将数字转换为固定长度的字符串

```js
// JavaScript version of: (unsigned)
//  printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}

const num = 123;
console.log(leftFillNum(num, 5));
// 预期输出："00123"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `String.prototype.padStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js)
