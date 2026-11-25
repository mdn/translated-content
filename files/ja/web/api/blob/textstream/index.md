---
title: "Blob: textStream() メソッド"
slug: Web/API/Blob/textStream
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

{{domxref("Blob")}} インターフェイスの **`textStream()`** メソッドは、この `Blob` の内容を UTF-8 のチャンクとして読み込める {{domxref("ReadableStream")}} を返します。

これは、{{domxref("Blob.stream()")}} のバイトストリームを {{domxref("TextDecoderStream")}} にパイプするよりも簡単な、内容をストリーミングするための仕組みを提供します。

> [!NOTE]
> エンコーディングを決める引数がある {{domxref("FileReader.readAsText()")}} と違って、`textStream()` メソッドは常に UTF-8 エンコーディングを使用します。

## 構文

```js-nolint
textStream()
```

### 引数

なし

### 返値

{{domxref("ReadableStream")}} です。

## 例

### blob の内容をテキストストリームとして読む

この例は、blob の内容をテキストストリームとして読む方法を示します。

サンプルの `Blob` を作成し、`textStream()` を用いてその内容の `ReadableStream` を取得し、そして {{domxref("ReadableStream.getReader()")}} で作成したリーダーでテキストを読みます。

```js
const pElem = document.querySelector("p");

const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

async function streamBlobText(blob) {
  const textStream = blob.textStream();
  // instead of
  // const textStream = blob.stream().pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamBlobText(myBlob);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream")}}
- {{domxref("ReadableStream.getReader()")}}
- {{domxref("Blob.stream()")}}
