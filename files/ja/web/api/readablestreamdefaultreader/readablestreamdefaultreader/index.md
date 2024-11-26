---
title: "ReadableStreamDefaultReader: ReadableStreamDefaultReader() コンストラクター"
short-title: ReadableStreamDefaultReader()
slug: Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`ReadableStreamDefaultReader()`** コンストラクターは、`ReadableStreamDefaultReader` オブジェクトのインスタンスを作成して返します。

> [!NOTE]
> 通常、このコンストラクターを手動で使用することはありません。 代わりに、{{domxref("ReadableStream.getReader()")}} メソッドを使用してください。

## 構文

```js-nolint
new ReadableStreamDefaultReader(stream)
```

### 引数

- `stream`
  - : 読み取り対象となる {{domxref("ReadableStream")}}。

### 返値

{{domxref("ReadableStreamDefaultReader")}} オブジェクトのインスタンス。

### 例外

- {{jsxref("TypeError")}}
  - : 指定された `stream` 引数が {{domxref("ReadableStream")}} ではないか、別のリーダーによる読み取りのために既にロックされています。

## 例

次の簡単な例では、`getReader()` を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して、以前に作成したカスタムの `ReadableStream` を読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() は、値を受け取ったときに解決する promise を返します
  reader.read().then(function processText({ done, value }) {
    // 結果オブジェクトには2つのプロパティが含まれます。
    // done - ストリームがすべてのデータを既に提供している場合は true。
    // value - 一部のデータ。 done が true の場合、常に undefined。
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストリーム API の概念](/ja/docs/Web/API/Streams_API)
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- {{domxref("ReadableStreamDefaultController")}}
