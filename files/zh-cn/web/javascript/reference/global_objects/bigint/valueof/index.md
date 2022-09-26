---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回 {{jsxref("BigInt")}} 对象包装的原始值。

{{EmbedInteractiveExample("pages/js/bigint-valueof.html")}}

## 语法

```plain
bigIntObj.valueOf()
```

### 返回值

表示指定 {{jsxref("BigInt")}} 对象的原始 BigInt 值。

## 例子

### Using `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{jsxref("BigInt.prototype.toString()")}}
