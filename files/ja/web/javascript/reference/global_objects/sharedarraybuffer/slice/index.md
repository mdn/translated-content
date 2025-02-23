---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`SharedArrayBuffer.prototype.slice()`** メソッドは、新しい {{jsxref("SharedArrayBuffer")}} を生成し、その内容にこの `SharedArrayBuffer` のバイトを先頭位置 (含む) から末尾位置 (含まない) までをコピーして返します。先頭または末尾が負の値であった場合は、配列の先頭からではなく、末尾からの位置になります。このメソッドは {{jsxref("Array.prototype.slice()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.slice()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer); // Create the view
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));

console.log(sliced);
// Expected output: Int32Array [42, 0]
```

## 構文

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

### 引数

- `begin` {{optional_inline}}

  - : 取り出す先頭位置を表す 0 から始まるインデックスです。

    負のインデックスを使用して、配列の末尾からのオフセットを示すことが可能です。
    `slice(-2)` は並びの最後の2つの要素を取り出します。

    `begin` が undefined であった場合は、 `slice` は `0` の位置から取り出し始めます。

- `end` {{optional_inline}}

  - : 0 から始まるインデックスで、取り出す範囲の末尾の*前*を示します。 `slice` はここまでを取り出しますが、 `end` は含めません。

    例えば、 `slice(1,4)` は2番目から4番目までの要素を取り出します（インデックスが 1, 2, 3 の要素）。

    負のインデックスを使用して、配列の末尾からのオフセットを示すことが可能です。 `slice(2,-1)` は 3 番目から、並びの最後から 2 番目までの要素を取り出します。

    `end` が省略されると、 `slice` は並びの最後 (`sab.byteLength`) までの範囲を取り出します。

### 返値

取り出した要素をが入った新しい {{jsxref("SharedArrayBuffer")}} です。

## 例

### slice() の使用

```js
const sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Array.prototype.slice()")}}
