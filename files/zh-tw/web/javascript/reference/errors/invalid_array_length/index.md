---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

## 訊息

```plain
RangeError: Array length must be a finite positive integer (Edge)
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## 錯誤類型

{{jsxref("RangeError")}}

## 哪裡錯了?

一個無效的陣列長度可能發生於以下幾種情形:

- 建立了一個長度為負或大於等於 2^32 的 {{jsxref("Array")}} 或 {{jsxref("ArrayBuffer")}}
- 將 {{jsxref("Array.length")}} 屬性設為負值或大於等於 2^32

為什麼 `Array` 和 `ArrayBuffer` 的長度有限? `Array` 和 `ArrayBuffer` 的屬性以一個 32 位元的非負整數表使，因此僅能儲存 0 到 2^32 - 1 的數值。

If you are creating an `Array`, using the constructor, you probably want to use the literal notation instead, as the first argument is interpreted as the length of the `Array`.

Otherwise, you might want to clamp the length before setting the length property, or using it as argument of the constructor.

## 示例

### 無效的案例

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32)); // 32-bit system
new ArrayBuffer(-1);

const a = [];
a.length = a.length - 1; // set the length property to -1

const b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // set the length property to 2^32
b.length = 2.5; // set the length property to a floating-point number

const c = new Array(2.5); // pass a floating-point number
```

### 有效的案例

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(Math.pow(2, 33)); // 64-bit systems after Firefox 89
new ArrayBuffer(0);

const a = [];
a.length = Math.max(0, a.length - 1);

const b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);
// 0xffffffff 是 2^32 - 1 的十六進位表示
// 也可以寫成 (-1 >>> 0)

b.length = 3;

const c = new Array(3);
```

## 參見

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
