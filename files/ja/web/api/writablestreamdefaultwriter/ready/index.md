---
title: "WritableStreamDefaultWriter: ready プロパティ"
short-title: ready
slug: Web/API/WritableStreamDefaultWriter/ready
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Streams")}}

**`ready`** は {{domxref("WritableStreamDefaultWriter")}} インターフェイスの読み取り専用プロパティで、ストリームの内部キューの目的のサイズが非正から正に移行したときに解決する {{jsxref("Promise")}} を返し、背圧が適用されなくなったことを通知します。

## 値

{{jsxref("Promise")}} です。

## 例

次の例は、`ready` プロパティの 2 つの使用法を示しています。 最初は `ready` を使用して、`WritableStream` が書き込みを完了し、バイナリチャンクを送信する前にデータを受信できるようにします。 2 番目も、`WritableStream` の書き込みが完了しているかどうかをチェックしますが、今度はライターを閉じる前に書き込みを終了する必要があるためです。

```js
function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    // ストリームとそのライターがデータを
    // 受信できることを確認します。
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.error(`Chunk error: ${err}`);
      });
    // ライターを閉じる前にすべてのチャンクが
    // 確実に書き込まれるように、ready を再度呼び出します。
    defaultWriter.ready
      .then(() => defaultWriter.close())
      .then(() => {
        console.log("All chunks written");
      })
      .catch((err) => {
        console.error(`Stream error: ${err}`);
      });
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
