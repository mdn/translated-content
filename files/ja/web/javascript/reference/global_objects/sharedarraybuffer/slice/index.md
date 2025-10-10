---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`slice()`** は {{jsxref("SharedArrayBuffer")}} インスタンスのメソッドで、この `SharedArrayBuffer` の先頭位置 (含む) から末尾位置 (含まない) までのバイトのコピーである新しい `SharedArrayBuffer` を返します。開始位置または終わりが負の場合、それは配列の末尾からのインデックスを参照します。

{{InteractiveExample("JavaScript デモ: SharedArrayBuffer.prototype.slice()")}}

```js interactive-example
// バイト数でサイズを指定して SharedArrayBuffer を作成
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer); // ビューを作成
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));

console.log(sliced);
// 期待される出力結果: Int32Array [42, 0]
```

## 構文

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 引数

- `start` {{optional_inline}}
  - : 取り出す範囲の先頭の 0 から始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。
    - 負のインデックスを指定すると、バッファーの末尾から前にカウントします。 `-buffer.length <= start < 0` の場合、 `start + buffer.length` が使用されます。
    - `start < -buffer.length` または `start` が省略された場合、 `0` が使用されます。
    - `start >= buffer.length` の場合、空のバッファーが返されます。
- `end` {{optional_inline}}
  - : 取り出す範囲の末尾の 0 から始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)。 `slice()` はここまでを取り出しますが、 `end` の位置は含めません。
    - 負のインデックスを指定すると、バッファーの末尾から前にカウントします。 `-buffer.length <= end < 0` の場合、 `end + buffer.length` が使用されます。
    - `end < -buffer.length` の場合、 `0` が使用されます。
    - `end >= buffer.length` または `end` が省略された場合、 `buffer.length` が使用され、末尾までのすべての要素が抽出されます。
    - `end` が `start` が示す位置の前またはその位置を意味する場合、空のバッファーが返されます。

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
- {{jsxref("ArrayBuffer.prototype.slice()")}}
