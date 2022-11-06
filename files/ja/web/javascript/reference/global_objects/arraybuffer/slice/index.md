---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---

{{JSRef}}

**`slice()`** メソッドは新しい `ArrayBuffer` を返し、その中にこの `ArrayBuffer` の `begin` から `end` の手前までをコピーします。

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## 構文

```
arraybuffer.slice(begin[, end])
```

### 引数

- `begin`
  - : スライスの起点を表すゼロ基点のバイトインデックスです。

<!---->

- `end` {{optional_inline}}
  - : スライスをその前で終了するバイトインデックスです。 end が指定されなかった場合は、新しい `ArrayBuffer` は、この `ArrayBuffer` の起点から終点まですべてのバイトを含みます。

### 返値

新しい {{jsxref("ArrayBuffer")}} オブジェクト。

## 解説

`slice()` メソッドは、 `end` 引数で指定されたバイトの手前までコピーを行います。 `begin` または `end` のどちらかが負の数の場合、開始位置とは反対に、配列の末尾からのインデックスを参照します。

`begin` および `end` 引数で指定された範囲は、現在の配列で妥当なインデックスの範囲に丸められます。新しい `ArrayBuffer` の計算された長さが負の数であった場合、ゼロに丸められます。

## 例

### ArrayBuffer のコピー

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.ArrayBuffer.slice")}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
