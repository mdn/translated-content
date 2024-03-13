---
title: DataView() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
---

{{JSRef}}

**`DataView()`** コンストラクターは、 {{jsxref("DataView")}} オブジェクトを生成するために使用します。

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## 構文

```
new DataView(buffer [, byteOffset [, byteLength]])
```

### 引数

- `buffer`
  - : 既存の {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} で、新しい `DataView` オブジェクトの背景となるストレージとして使用されます。
- `byteOffset` {{optional_inline}}
  - : 新しいビューが参照するバッファーの最初のバイトまでのオフセットをバイト単位で指定します。指定されていない場合、バッファービューは最初のバイトから始まります。
- `byteLength` {{optional_inline}}
  - : バイト配列の要素数です。指定しない場合、ビューの長さはバッファーの長さと一致します。

### 返値

指定されたデータバッファーを表す `DataView` オブジェクトです。 (これはおそらくあまり役に立たない説明でした。)

返されるオブジェクトは、バイトの配列バッファーの「インタープリター」と考えることができます。 - これは読み書きの際に、バッファー内に正しく収まるように数値を変換する方法を知っています。これは、整数や浮動小数点数の変換、エンディアン、その他バイナリ形式で数値を表現する際の詳細を扱うことを意味します。

### 例外

- {{jsxref("RangeError")}}

  - : `byteOffset` や `byteLength` 引数の値がバッファーの末尾を超えて広がる結果になる場合に発生します。

    例えば、バッファーが 16 バイトの長さで、 `byteOffset` が 8 バイト、 `byteLength` が 10 バイトの場合、バッファーの全長を 2 バイト超えるビューを展開しようとするので、このエラーが発生します。

## 例

### DataView の使用

```js
var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
