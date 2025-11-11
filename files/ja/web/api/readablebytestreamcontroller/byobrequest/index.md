---
title: "ReadableByteStreamController: byobRequest プロパティ"
short-title: byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`byobRequest`** は {{domxref("ReadableByteStreamController")}} インターフェイスの読み取り専用プロパティで、現在の BYOB リクエストを返します。保留中のリクエストがない場合は `null` を返します。

基盤となるバイトソースはこのプロパティを調べ、存在する場合はそれを使用してストリームにデータを書き込む必要があります（{{domxref("ReadableByteStreamController.enqueue()")}}を使用するのではなく）。
こうすることで、コンシューマーへのデータの効率的なゼロバイト移譲が実現します。

### 値

{{domxref("ReadableStreamBYOBRequest")}} オブジェクトのインスタンス、または `null`。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#読み取り可能なソケットプッシュバイトストリームの作成)の例では、 `byobRequest` を使用して（データが存在する場合は）データを移譲するか、 {{domxref("ReadableByteStreamController.enqueue()")}} を使用してストリーム内部のキューにデータをコピーする方法を示しています。

関連するコードを下記に示します。
`byobRequest` が存在すれば、 {{domxref("ReadableStreamBYOBRequest.view","controller.byobRequest.view")}} にデータが読み込まれ、 {{domxref("ReadableStreamBYOBRequest.respond()")}} が呼び出されて、移譲可能なデータ量を指示します。

```js
if (controller.byobRequest) {
  const v = controller.byobRequest.view;
  bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
  if (bytesRead === 0) {
    controller.close();
  }
  controller.byobRequest.respond(bytesRead);
} else {
  // Write to data using enqueue().
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
