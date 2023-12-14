---
title: "ReadableByteStreamController: enqueue() メソッド"
short-title: enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`enqueue()`** は {{domxref("ReadableByteStreamController")}} で、指定されたチャンクを、関連する読み取り可能なバイトストリームのキューに入れます（チャンクはストリーム内部のキューにコピーされます）。

これは、 {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} が `null` である場合にのみ、キューへのデータ移譲に使用しましょう。

## 構文

```js-nolint
enqueue(chunk)
```

### 引数

- `chunk`
  - : キューに入れるチャンク。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableByteStreamController` ではないか、何らかの理由でストリームを読み取れないか、チャンクがオブジェクトではないか、チャンクの内部配列バッファーが存在しないか、切り離されています。
    ストリームが既に閉じられていたときにも発生します。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#読み取り可能なソケットプッシュバイトストリームの作成) の例では、未処理の {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} がない場合に `enqueue()` を使用してデータをストリームにコピーする方法を示します。
もし `byobRequest` があれば、それを使用しましょう。

下記のコードでは、「仮定の」 `socket.readInto()` メソッドを使用してデータを `ArrayBuffer` に読み込ませ、その後キューに入れています（ただし、実際にデータがコピーされた場合のみ）。

```js
const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
if (bytesRead === 0) {
  controller.close();
} else {
  controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
