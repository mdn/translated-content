---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
---

{{JSRef}}

**`toString()`** 方法返回一个字符串，表示指定 {{jsxref("BigInt")}} 对象。后面的 "n" 不是字符串的一部分。

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## 语法

```plain
bigIntObj.toString([radix])
```

### 参数

- `radix`{{Optional_inline}}
  - : 可选，介于 2 到 36 之间的整数，指定用于表示数值的基数。

### 返回值

表示指定 {{jsxref("BigInt")}} 对象的字符串。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `toString()` 的基数小于 2 或大于 36, 则抛出 {{jsxref("RangeError")}}。

## 描述

{{jsxref("BigInt")}} 对象重写 {{jsxref("Object")}} 对象的 `toString()` 方法；它不继承 {{jsxref("Object.prototype.toString()")}}。对于 {{jsxref( "BigInt")}} 对象，`toString()` 方法返回指定基数中对象的字符串表示形式。

`toString()` 方法解析其第一个参数，并尝试返回指定基数 (base) 的字符串表示形式。对于大于 10 的参数，使用字母表中的字母表示大于 9 的数字。例如，对于十六进制数（以 16 为基数），使用 a 到 f。

如果未指定基数，则假定首选基数为 10。

如果 `bigIntObj` 为负，则保留符号。即使基数是 2，情况也是如此；返回的字符串是 `bigIntObj` 的正二进制表示，前面是一个 `-` 符号，而不是 `bigIntObj` 的两个补码。

## 示例

### Using `toString`

```js
17n.toString(); // '17'
66n.toString(2); // '1000010'
254n.toString(16); // 'fe'
-10n.toString(2); // -1010'
-0xffn.toString(2); // '-11111111'
```

### Negative-zero `BigInt`

没有负零 `BigInt`，因为整数中没有负零。`-0.0` 是一个 IEEE 浮点概念，只出现在 JavaScript {{jsxref("Number")}} 类型中。

```js
(-0n).toString(); // '0'
BigInt(-0).toString(); // '0'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
