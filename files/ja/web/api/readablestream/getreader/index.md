---
title: "ReadableStream: getReader() メソッド"
short-title: getReader()
slug: Web/API/ReadableStream/getReader
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`getReader()`** は {{domxref("ReadableStream")}} インターフェイスのメソッドで、リーダーを作成し、それでストリームをロックします。
ストリームがロックされている間は、このリーダーが解放されるまで他のリーダーを取得できません。

## 構文

```js-nolint
getReader()
getReader(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `mode` {{optional_inline}}

      - : 作成するリーダーの種類を指定するプロパティです。
        値は以下の通り。

        - `"byob"`: 読み取り可能なバイトストリーム（内部ストリームバッファーが空のときに、基礎となるバイトソースからリーダーへのゼロコピー転送に対応しているストリーム）を読み取ることができる {{domxref("ReadableStreamBYOBReader")}} を作成します。
        - `undefined` （または指定しない場合、既定値）。 これにより、ストリームから個々のチャンクを読み取ることができる {{domxref("ReadableStreamDefaultReader")}} が作成されます。

### 返値

`mode` 値に応じて、{{domxref("ReadableStreamDefaultReader")}} または {{domxref("ReadableStreamBYOBReader")}} オブジェクトのインスタンス。

### 例外

- {{jsxref("RangeError")}}
  - : 指定された `mode` 値が `"byob"` または `undefined` ではありません。
- {{jsxref("TypeError")}}
  - : リーダーを作成しようとしているストリームが {{domxref("ReadableStream")}} ではありません。
    これは、 BYOB リーダーが要求されたときに、ストリームコントローラーが {{domxref("ReadableByteStreamController")}} でない（ストリームが [`type="bytes"`](/ja/docs/Web/API/ReadableStream/ReadableStream) で基礎ソースとして構築されていない）場合にも発生します。

## 例

次の簡単な例では、`getReader()` を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して、以前に作成した独自の `ReadableStream` を読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。

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
      para.textContent = value;
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

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} コンストラクター
- {{domxref("ReadableStreamDefaultReader")}}
- {{domxref("ReadableStreamBYOBReader")}}
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
- [読み取り可能なバイトストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)
