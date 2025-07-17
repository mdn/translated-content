---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

當你指定一個負數、浮點數，或超過平台支援最大值的陣列長度時，會發生 JavaScript 的「Invalid array length」例外（例如：在建立 {{jsxref("Array")}} 或 {{jsxref("ArrayBuffer")}} 時，或在設定 {{jsxref("Array/length", "length")}} 屬性時）。

允許的最大陣列長度取決於平台、瀏覽器和瀏覽器版本。對於 {{jsxref("Array")}}，最大長度為 2<sup>32</sup>-1。對於 {{jsxref("ArrayBuffer")}}，在 32 位元系統上，最大長度為 2<sup>31</sup>-1（2GiB-1）。從 Firefox 89 版開始，在 64 位元系統上，{{jsxref("ArrayBuffer")}} 的最大值為 2<sup>33</sup>（8GiB）。

> [!NOTE]
> `Array` 和 `ArrayBuffer` 是獨立的資料結構（其中一個的實作不會影響另一個）。

## 訊息

```plain
RangeError: invalid array length (V8-based & Firefox)
RangeError: Array size is not a small enough positive integer. (Safari)

RangeError: Invalid array buffer length (V8-based)
RangeError: length too large (Safari)
```

## 錯誤類型

{{jsxref("RangeError")}}

## 哪裡出錯了？

當試圖使用無效的長度來產生 {{jsxref("Array")}} 或 {{jsxref("ArrayBuffer")}} 時，可能會出現此錯誤，無效長度包含：

- 透過建構子或設定 {{jsxref("Array/length", "length")}} 屬性來指定負數長度。
- 透過建構子或設定 {{jsxref("Array/length", "length")}} 屬性來指定非整數長度。（`ArrayBuffer` 建構子會將長度強制轉換為整數，但 `Array` 建構子不會。）
- 超過平台支援的最大長度。對於陣列，最大長度為 2<sup>32</sup>-1。對於 `ArrayBuffer`，在 32 位元系統上，最大長度為 2<sup>31</sup>-1（2GiB-1），或在 64 位元系統上為 2<sup>33</sup>（8GiB）。這可能透過建構子、設定 `length` 屬性，或隱含設定 length 屬性的陣列方法（例如 {{jsxref("Array/push", "push")}} 和 {{jsxref("Array/concat", "concat")}}）發生。

如果你正在使用建構子建立 `Array`，你可能想改用字面值表示法，因為第一個引數會被解釋為 `Array` 的長度。否則，你可能會想在設定 `length` 屬性或將其作為建構子的引數之前，先限制長度的範圍。

## 範例

### 無效的案例

```js example-bad
new Array(2 ** 40);
new Array(-1);
new ArrayBuffer(2 ** 32); // 32 位元系統
new ArrayBuffer(-1);

const a = [];
a.length -= 1; // 將 length 屬性設為 -1

const b = new Array(2 ** 32 - 1);
b.length += 1; // 將 length 屬性設為 2^32
b.length = 2.5; // 將 length 屬性設為浮點數

const c = new Array(2.5); // 傳入一個浮點數

// 意外地無限增長陣列的並行修改
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
```

### 有效的案例

```js example-good
[2 ** 40]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(2 ** 31 - 1);
new ArrayBuffer(2 ** 33); // Firefox 89 之後的 64 位元系統
new ArrayBuffer(0);

const a = [];
a.length = Math.max(0, a.length - 1);

const b = new Array(2 ** 32 - 1);
b.length = Math.min(0xffffffff, b.length + 1);
// 0xffffffff 是 2^32 - 1 的十六進位表示法
// 也可以寫成 (-1 >>> 0)

b.length = 3;

const c = new Array(3);

// 因為陣列方法在迭代前會儲存長度，所以在迭代期間增長陣列是安全的
const arr = [1, 2, 3];
arr.forEach((e) => arr.push(e * 10));
```

## 參見

- {{jsxref("Array")}}
- {{jsxref("Array/length", "length")}}
- {{jsxref("ArrayBuffer")}}
