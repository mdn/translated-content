---
title: ReadableStreamDefaultReader.read()
slug: Web/API/ReadableStreamDefaultReader/read
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} インターフェイスの **`read()`** メソッドは、ストリームの内部キュー内の次のチャンクへのアクセスを提供する promise を返します。

## 構文

```
var promise = readableStreamDefaultReader.read();
```

### パラメーター

なし。

### 戻り値

{{jsxref("Promise")}}。ストリームの状態に応じて結果を充足/拒否します。 異なる可能性は次のとおりです。

- チャンクが使用可能な場合、`{ value: theChunk, done: false }` の形式のオブジェクトで promise が満たされます。
- ストリームが閉じられると、`{ value: undefined, done: true }` という形式のオブジェクトで promise が満たされます。
- ストリームがエラーになると、関連するエラーで promise が拒否されます。

### 例外

- TypeError
  - : ソースオブジェクトが `ReadableStreamDefaultReader` ではないか、ストリームに所有者がいません。

## 例

### 例 1 - 簡単な例

この例は、基本的な API の使用方法を示していますが、例えば、行の境界で終了しないストリームチャンクなどの複雑な問題には対処しません。

この例では、`stream` は以前に作成したカスタムの `ReadableStream` です。 `getReader()` を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UTF-8 のバイトの配列として UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます
    // done  - ストリームがすべてのデータを既に提供している場合は true
    // value - 一部のデータ。 done が true の場合、常に undefined
    if (done) {
      console.log("Stream complete");
      para.textContent = result;
      return;
    }

    // フェッチしたストリームの値は Uint8Array です
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent =
      "Received " +
      charsReceived +
      " characters so far. Current chunk = " +
      chunk;
    list2.appendChild(listItem);

    result += chunk;

    // さらに読み、この関数を再度呼び出します
    return reader.read().then(processText);
  });
}
```

### 例 2 - テキストを 1 行ずつ処理する

この例は、テキストファイルをフェッチし、テキスト行のストリームとして処理する方法を示しています。 行の境界で終了せず、`Uint8Array` から文字列に変換するストリームチャンクを処理します。

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // 最後の行は改行文字で終わっていません
    yield chunk.substr(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.ReadableStreamDefaultReader.read")}}
