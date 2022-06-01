---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
tags:
  - JavaScript
  - メソッド
  - Prototype
  - 共有メモリー
  - SharedArrayBuffer
  - 型付き配列
browser-compat: javascript.builtins.SharedArrayBuffer.slice
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
---
{{JSRef}}

**`SharedArrayBuffer.prototype.slice()`** メソッドは、新しい {{jsxref("SharedArrayBuffer")}} を生成し、その内容にこの `SharedArrayBuffer` のバイトを先頭位置 (含む) から末尾位置 (含まない) までをコピーして返します。先頭または末尾が負の値であった場合は、配列の先頭からではなく、末尾からの位置になります。このメソッドは {{jsxref("Array.prototype.slice()")}} と同じアルゴリズムです。

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

## 構文

```js
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

    例えば、 `slice(1,4)` は2番目から4番目までの要素を取り出します (添字が 1, 2, 3 の要素)。

    負のインデックスを使用して、配列の末尾からのオフセットを示すことが可能です。 `slice(2,-1)` は3番目から、並びの最後から2番目までの要素を取り出します。

    `end` が省略されると、 `slice` は並びの最後 (`sab.byteLength`) までの範囲を取り出します。

### 返値

取り出した要素をが入った新しい {{jsxref("SharedArrayBuffer")}} です。

## 例

### slice() の使用

```js
var sab = new SharedArrayBuffer(1024);
sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Array.prototype.slice()")}}
