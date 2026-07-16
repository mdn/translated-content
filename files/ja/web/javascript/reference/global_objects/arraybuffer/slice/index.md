---
title: ArrayBuffer.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`slice()`** は {{jsxref("ArrayBuffer")}} インスタンスのメソッドで、新しい `ArrayBuffer` を返し、その内容はこの `ArrayBuffer` の `start` から `end` の手前までをコピーします。`start` または `end` のいずれかが負の場合、配列の先頭からではなく、末尾からのインデックスを指します。

{{InteractiveExample("JavaScript デモ: ArrayBuffer.slice()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
// Int32Array [0, 0, 0, 0] を作成

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));
// Int32Array [42, 0] を作成

console.log(sliced[0]);
// 予想される結果: 42
```

## 構文

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 引数

- `start` {{optional_inline}}
  - : 抽出を始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `-buffer.length <= start < 0` の場合、 `start + buffer.length` が使用されます。
    - `start < -buffer.length` または `start` が省略された場合は `0` が使用されます。
    - `start >= buffer.length` の場合、空の配列が返されます。
- `end` {{optional_inline}}
  - : 抽出し終える位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `slice()` は `end` を含まず、その直前までを抽出します。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `-buffer.length <= end < 0` の場合、 `end + buffer.length` が使用されます。
    - `end < -buffer.length` の場合は `0` が使用されます。
    - `end >= buffer.length` または `end` が省略された場合は `buffer.length` が使用され、最後まですべての要素が抽出されます。
    - `end` が `start` が示す位置よりも前またはその位置を示す場合、空の配列が返されます。

### 返値

抽出した要素が入った新しい {{jsxref("ArrayBuffer")}} です。元がリサイズ可能であっても[リサイズ可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable)ではありません。

## 例

### ArrayBuffer のコピー

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
