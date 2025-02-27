---
title: "ReadableStreamBYOBRequest: respond() メソッド"
short-title: respond()
slug: Web/API/ReadableStreamBYOBRequest/respond
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Streams")}}

**`respond()`** は {{domxref("ReadableStreamBYOBRequest")}} インターフェイスのメソッドで、 {{domxref("ReadableStreamBYOBRequest.view")}} に指定したバイト数が書き込まれたことを、関連する[読み取り可能なバイトストリーム](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)に通知するために用いられます。

このメソッドが呼び出された後、 {{domxref("ReadableStreamBYOBRequest/view","view")}} は移譲され、変更できなくなります。

## 構文

```js-nolint
respond(bytesWritten)
```

### 引数

- `bytesWritten`
  - : {{domxref("ReadableStreamBYOBRequest.view")}} に書き込まれたバイト数です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : リクエストが関連付けられた {{domxref("ReadableByteStreamController")}} を持っていないか、ビューバッファーが切り離されていないか、移譲できません。

## 例

下記のコードは[読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)のライブ例から引用しています。

このメソッドは、コンシューマーからの待機中の読み取りリクエストを履行するために、データのゼロコピー移譲を行う一環として、基盤となるバイトソースによって呼び出されます。
基盤となるバイトソースは最初に {{domxref("ReadableStreamBYOBRequest.view")}} にデータを書き込み、次にこの `respond()` メソッドを呼び出して、バッファーにコピーされたデータの量を示し、データをリーダーに移譲させます。

下記のコードはこの用途を示すもので、データをビューにコピーするために `readInto()` メソッドを使用しています。

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

処理後、 `byobRequest.view` は切り離され、リクエストは破棄されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
