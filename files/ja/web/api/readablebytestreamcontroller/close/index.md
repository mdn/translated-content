---
title: "ReadableByteStreamController: close() メソッド"
short-title: close()
slug: Web/API/ReadableByteStreamController/close
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

**`close()`** は {{domxref("ReadableByteStreamController")}} インターフェイスのメソッドで、関連するストリームを閉じます。

これは、そのデータソースが使い果たされたとき/完全に完了したときに、基盤ソースによって呼び出される可能性があります。

> [!NOTE]
> リーダーは、以前にキューに入れられたチャンクをストリームから読み取ることができますが、それらを読み取ってしまうとストリームは閉じられます。
> しかし、 `close()` が呼び出されたときに、未処理で部分的に書き込まれた {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} がある場合、ストリームはエラーになります。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableByteStreamController` ではないか、何らかの理由でストリームが読み取り可能ではありません。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams#読み取り可能なソケットプッシュバイトストリームの作成)の例で、データがなくなったときにストリームを閉じています。

関連するコードを下記に示します。
これは `readInto()` メソッドがデータがまだないときだけ 0 バイトを返すと仮定しています。

```js
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
if (bytesRead === 0) {
  controller.close();
}
```

closeを呼び出すと、ストリームは閉じられ、コンシューマーがあれば通知されます。
例えば {{domxref("ReadableStreamBYOBReader")}} を使用している場合、 {{domxref("ReadableStreamBYOBReader.read()","read()")}} リクエストは `done: true` で解決され、 {{domxref("ReadableStreamBYOBReader.closed")}} からのプロミスも解決されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
