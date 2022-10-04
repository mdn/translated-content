---
title: WritableStreamDefaultWriter.close()
slug: Web/API/WritableStreamDefaultWriter/close
---

{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} インターフェイスの **`close()`** メソッドは、関連する書き込み可能なストリームを閉じます。

基になるシンクは、閉じる振る舞いを呼び出す前に、以前に書き込まれたチャンクの処理を終了します。 この間、それ以上の書き込み試行は失敗します（ストリームにエラーは発生しません）。

## 構文

```
var promise = writableStreamDefaultWriter.close();
```

### パラメーター

なし。

### 戻り値

{{jsxref("Promise")}}。 閉じる前に残りのチャンクがすべて正常に書き込まれた場合は `undefined` で満たされ、プロセス中に問題が発生した場合はエラーで拒否されます。

### 例外

- TypeError
  - : 閉じようとしているストリームは {{domxref("WritableStream")}} ではありません。

## 例

次の例は、カスタムのシンクと API 提供のキューイング戦略を使用した `WritableStream` の作成を示しています。 次に、`sendMessage()` という関数を呼び出し、新しく作成されたストリームと文字列を渡します。 この関数内で、{{domxref("WritableStreamDefaultWriter")}} のインスタンスを返すストリームの `getWriter()` メソッドを呼び出します。 `forEach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`write()` および `close()` は、チャンクとストリームの成功または失敗に対処するための promise を返します。

```js
const list = document.querySelector('ul');

function sendMessage(message, writableStream) {
  // defaultWriter は WritableStreamDefaultWriter 型です
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => {
        return defaultWriter.write(chunk);
      })
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // ライターを閉じる前にすべてのチャンクが
  // 確実に書き込まれるように、ready を再度呼び出します。
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
}

const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream({
  // シンクの実装
  write(chunk) {
    return new Promise((resolve, reject) => {
      var buffer = new ArrayBuffer(2);
      var view = new Uint16Array(buffer);
      view[0] = chunk;
      var decoded = decoder.decode(view, { stream: true });
      var listItem = document.createElement('li');
      listItem.textContent = "Chunk decoded: " + decoded;
      list.appendChild(listItem);
      result += decoded;
      resolve();
    });
  },
  close() {
    var listItem = document.createElement('li');
    listItem.textContent = "[MESSAGE RECEIVED] " + result;
    list.appendChild(listItem);
  },
  abort(err) {
    console.log("Sink error:", err);
  }
}, queuingStrategy);

sendMessage("Hello, world.", writableStream);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-examples/streams/simple-writer/)にあります。

## 仕様

| 仕様                                                                         | 状態                         | コメント |
| ---------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Streams","#default-writer-close","close()")}} | {{Spec2('Streams')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WritableStreamDefaultWriter.close")}}
