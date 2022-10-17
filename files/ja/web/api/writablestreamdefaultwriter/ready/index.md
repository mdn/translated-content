---
title: WritableStreamDefaultWriter.ready
slug: Web/API/WritableStreamDefaultWriter/ready
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} インターフェイスの **`ready`** 読み取り専用プロパティは、ストリームの内部キューの目的のサイズが非正から正に移行したときに解決する {{jsxref("Promise")}} を返し、バックプレッシャーが適用されなくなったことを通知します。

## 構文

```
var promise = writableStreamDefaultWriter.ready;
```

### 値

{{jsxref("Promise")}}。

## 例

次の例は、`ready` プロパティの 2 つの使用法を示しています。 最初は `ready` を使用して、`WritableStream` が書き込みを完了し、バイナリチャンクを送信する前にデータを受信できるようにします。 2 番目も、`WritableStream` の書き込みが完了しているかどうかをチェックしますが、今度はライターを閉じる前に書き込みを終了する必要があるためです。

```js
function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  var defaultWriter = writableStream.getWriter();
  var encoder = new TextEncoder();
  var encoded = encoder.encode(message, {stream: true});
  encoded.forEach(function(chunk) {
    // ストリームとそのライターがデータを
    // 受信できることを確認します。
    defaultWriter.ready
    .then(function() {
      defaultWriter.write(chunk)
      .then(function() {
        console.log("Chunk written to sink.);
      })
      .catch(function(err) {
        console.log("Chunk error: " + err);
      });
    });
    // ライターを閉じる前にすべてのチャンクが
    // 確実に書き込まれるように、ready を再度呼び出します。
    defaultWriter.ready
    .then(function() {
      defaultWriter.close()
      .then(function() {
        console.log("All chunks written");
      })
      .catch(function(err) {
        console.log("Stream error: " + err);
      });
    });
  });
}
```

## 仕様

| 仕様                                                                     | 状態                         | コメント |
| ------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('Streams','#default-writer-ready','ready')}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultWriter.ready")}}
