---
title: "ReadableStreamBYOBRequest: respondWithNewView() メソッド"
short-title: respondWithNewView()
slug: Web/API/ReadableStreamBYOBRequest/respondWithNewView
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Streams")}}

**`respondWithNewView()`** は {{domxref("ReadableStreamBYOBRequest")}} インターフェイスのメソッドで、 {{domxref("ReadableStreamBYOBRequest.view")}} の代わりに、関連付けられた読み取り可能なバイトストリームの消費者が書き込むべき新しいビューを指定します。

新しいビューは {{jsxref("TypedArray")}} または {{jsxref("DataView")}} でなければならず、 {{domxref("ReadableStreamBYOBRequest.view")}} と同じバッキングメモリー領域にビューを提供します。
このメソッドが呼び出された後、メソッドに渡されたビューは移譲され、変更できなくなりました。

このメソッドは、バイト基盤がレスポンスを完了する前に `byobRequest.view` を内部的に移譲する必要がある使用する用途を意図しています。
例えば、 BYOB ソースは BYOB ビューを別個のワーカースレッドに移譲し、それが満たされたらワーカがそれを移譲し返すのを待つことができます。

## 構文

```js-nolint
respondWithNewView(view)
```

### 引数

- `view`

  - : 関連付けられた読み取り可能なバイトストリームの消費者が {{domxref("ReadableStreamBYOBRequest.view")}} の代わりに書くべき {{jsxref("TypedArray")}} または {{jsxref("DataView")}} です。

    これは {{domxref("ReadableStreamBYOBRequest.view")}} と同じバッキングメモリー領域上のビューでなければならず、占めるメモリーは同じかそれ以下でなければなりません。
    具体的には、ビューのバッファーか移譲されたもので、同じ `byteOffset` を保有し、`byteLength` （書き込むバイト数）がビューのバイト数以下でなければなりません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}

  - : 元のオブジェクトが `ReadableStreamBYOBRequest` でないか、関連するコントローラがないか、関連する内部配列バッファーが存在しないか切り離されている場合に発生します。
    また、アクティブな読者がいるときに `view` の長さがゼロである場合や、閉じられたストリームで呼び出されたときにゼロでない場合にも発生する可能性があります。

- {{jsxref("RangeError")}}
  - : 新しい `view` が {{domxref("ReadableStreamBYOBRequest.view")}} のバッキングメモリー領域と一致しない場合に発生します。
    例えば、同じバッファー（または移譲されたバージョン）ではない、異なる `byteOffset` を持っている、バッキングビューで利用できるメモリーより大きい、などです。

## 例

移譲するビューは、 {{domxref("ReadableStreamBYOBRequest.view")}} と同じタイプであり、同じ基盤バッファーとバイトオフセットを保有し、同じかそれ以下のバイト長でなければなりません。

例えば、下記のようにビューとレスポンスを定義します。

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
byobRequest.respondWithNewView(
  byobRequest.view.subarray(v.byteOffset, bytesRead),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
