---
title: "ReadableStreamDefaultReader: read() メソッド"
short-title: read()
slug: Web/API/ReadableStreamDefaultReader/read
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`read()`** は {{domxref("ReadableStreamDefaultReader")}} インターフェイスのメソッドで、ストリームの内部キュー内の次のチャンクへのアクセスを提供するプロミスを返します。

## 構文

```js-nolint
read()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} です。ストリームの状態に応じて、結果にて履行または拒否されます。
ありうる状況ものは次の通りです。

- チャンクが使用可能な場合、プロミスが `{ value: theChunk, done: false }` の形式のオブジェクトで履行されます。
- ストリームが閉じられると、プロミスが `{ value: undefined, done: true }` という形式のオブジェクトで履行されます。
- ストリームがエラーになると、プロミスが関連するエラーでプロミスが拒否されます。

### 例外

- {{jsxref("TypeError")}}
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
    // done - ストリームがすべてのデータを既に提供している場合は true
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
    listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;
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
  chunk = chunk ? utf8Decoder.decode(chunk, { stream: true }) : "";

  let re = /\r\n|\n|\r/gm;
  let startIndex = 0;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk =
        remainder + (chunk ? utf8Decoder.decode(chunk, { stream: true }) : "");
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
