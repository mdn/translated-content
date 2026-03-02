---
title: SharedArrayBuffer.prototype.grow()
short-title: grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

**`grow()`** は {{jsxref("SharedArrayBuffer")}} インスタンスのメソッドで、 `SharedArrayBuffer` を指定されたサイズ（バイト単位）へ伸長します。

## 構文

```js-nolint
grow(newLength)
```

### 引数

- `newLength`
  - : `SharedArrayBuffer` のサイズを変更する新しい長さ（バイト単位）です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `SharedArrayBuffer` が伸長可能でない場合に発生します。
- {{jsxref("RangeError")}}
  - : `newLength` がこの `SharedArrayBuffer` の {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} より大きいか、 {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} より小さい場合に発生します。

## 解説

`grow()` メソッドは、 `SharedArrayBuffer` が伸長可能 ([growable](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)) であり、新しいサイズが `SharedArrayBuffer` の {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} 以下で指定された新しい長さの引数で指定されたサイズに `SharedArrayBuffer` を伸長します。新しいバイトは 0 に初期化されます。

## 例

これらの例は、コンソールや任意のウェブページから直接実行することはできません。`SharedArrayBuffer` は、その[セキュリティ要件](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#セキュリティ要件)が満たされない限り定義されないからです。

### grow() の使用

この例では、最大長 16 バイトまで伸長可能な 8 バイトのバッファーを作成し、{{jsxref("SharedArrayBuffer/growable", "伸長可能")}}なプロパティをチェックします。 `growable` が `true` を返した場合、バッファーを伸長します。

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
