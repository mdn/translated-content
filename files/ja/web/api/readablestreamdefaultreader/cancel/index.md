---
title: "ReadableStreamDefaultReader: cancel() メソッド"
short-title: cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`cancel()`** は {{domxref("ReadableStreamDefaultReader")}} インターフェイスのメソッドで、ストリームをキャンセルし、コンシューマーがストリームに興味を失ったことを通知します。 提供された reason 引数は、基になるソースに与えられ、使用する場合もしない場合もあります。

キャンセルは、ストリームを完全に終了し、読み取り待ちのチャンクがキューに入っている場合でも、それ以上データを必要としない場合に使用します。 キャンセルが呼び出された後、そのデータは失われ、ストリームは読み取り不能になります。 これらのチャンクをまだ読み取り、ストリームを完全に取り除くわけではない場合は、 {{domxref("ReadableStreamDefaultController.close()")}} を使用します。

> [!NOTE]
> リーダーがアクティブな場合、`cancel()` メソッドは、関連付けられたストリームの場合 ({{domxref("ReadableStream.cancel()")}}) と同じように振る舞います。

## 構文

```js-nolint
cancel()
cancel(reason)
```

### 引数

- `reason` {{optional_inline}}
  - : 人間が読むことができるキャンセルの理由です。この値は使われたり使われなかったりします。

### 返値

{{jsxref("Promise")}} です。 `reason` 引数で指定された値で履行されます。

### 例外

- {{jsxref("TypeError")}}
  - : ソースオブジェクトが `ReadableStreamDefaultReader` ではないか、ストリームに所有者がいません。

## 例

次の簡単な例では、`getReader()` を使用して作成した {{domxref("ReadableStreamDefaultReader")}} を使用して、以前に作成したカスタムの `ReadableStream` を読み取ります（このコードは、[単純なランダムストリームの例](https://mdn.github.io/dom-examples/streams/simple-random-stream/)に基づいています）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで UI に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を UI の別の部分に出力します。

ストリームが完了したら（`if (done)`）、`reader.cancel()` を実行してストリームをキャンセルし、それ以上使用する必要がないことを通知します。

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
      reader.cancel();
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

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)
