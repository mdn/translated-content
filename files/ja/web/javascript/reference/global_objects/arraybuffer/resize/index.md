---
title: ArrayBuffer.prototype.resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{JSRef}}{{SeeCompatTable}}

**`resize()`** は {{jsxref("ArrayBuffer")}} インスタンスのメソッドで、この `ArrayBuffer` を指定されたサイズ（バイト単位）にサイズ変更します。

{{EmbedInteractiveExample("pages/js/arraybuffer-resize.html")}}

## 構文

```js-nolint
resize(newLength)
```

### 引数

- `newLength`
  - : `ArrayBuffer` のサイズを変更する新しい長さ（バイト単位）です。

### 返値

{{jsxref("undefined")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : `ArrayBuffer` が切り離されているか、サイズ変更できない場合に発生します。
- {{jsxref("RangeError")}}
  - : `newLength`が `ArrayBuffer` の {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} より大きい場合に発生します。

## 解説

`resize()` メソッドは `ArrayBuffer` を `newLength` 引数で指定された大きさへサイズ変更します。 ただし、`ArrayBuffer` が[サイズ変更可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable)で、新しいサイズが `ArrayBuffer` の {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 以下であることが条件です。新しいバイトは 0 に初期化されます。

また、`resize()` を使用すると、`ArrayBuffer` を成長させるだけでなく、縮小させることができることに注意してください。`newLength` が `ArrayBuffer` の現在の {{jsxref("ArrayBuffer/byteLength", "byteLength")}} より小さくなることが許容されています。

## 例

### resize() の使用

この例では、最大16バイトの長さにサイズ変更可能な8バイトのバッファーを作成し、`resizable` プロパティを調べて、`resizable` が true を返した場合にサイズを変更します。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.resizable")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
