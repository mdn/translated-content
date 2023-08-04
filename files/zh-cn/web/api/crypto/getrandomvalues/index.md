---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
---

{{APIRef("Web Crypto API")}}

**`Crypto.getRandomValues()`** 方法让你可以获取符合密码学要求的安全的随机值。传入参数的数组被随机值填充（在加密意义上的随机）。

为了确保足够的性能，不使用真正的随机数生成器，但是它们正在使用具有足够熵值伪随机数生成器。它所使用的 PRNG 的实现与其他不同，但适用于加密的用途。该实现还需要使用具有足够熵的种子，如系统级熵源。

## 语法

```plain
cryptoObj.getRandomValues(typedArray);
```

### 参数

- `typedArray`
  - : 是一个基于整数的 {{jsxref("TypedArray")}}，它可以是 {{jsxref("Int8Array")}}、{{jsxref("Uint8Array")}}、{{jsxref("Int16Array")}}、 {{jsxref("Uint16Array")}}、 {{jsxref("Int32Array")}} 或者 {{jsxref("Uint32Array")}}。在数组中的所有的元素会被随机数重写。（注释：生成的随机数储存在 `typedArray` 数组上。）

### 异常事件

- `QuotaExceededError` {{domxref("DOMException")}}
  - : 如果请求的长度超过 65536 字节，则抛出该异常。

## 例子

```js
/* 假设 window.crypto.getRandomValues 可用 */

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 通过 {{ domxref("Window.crypto") }} 获取 {{domxref("Crypto")}} 对象。
- {{jsxref("Math.random")}}，一个非密码学安全的随机数来源。
