---
title: "Request: textStream() メソッド"
short-title: textStream()
slug: Web/API/Request/textStream
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

**`textStream()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本文のコンテンツを UTF-8 形式のチャンク単位で読み取るために使用できる {{domxref("ReadableStream")}} を返します。

この仕組みにより、{{domxref("Request.body")}} のバイトストリームを {{domxref("TextDecoderStream")}} を通じて渡すよりも、リクエスト本体をストリーミングするためのより簡単な仕組みが指定されます。

> [!NOTE]
> 本体が null の `Request` （{{httpmethod("GET")}} リクエストなど）に対して呼び出された場合、`textStream()`は有効な空のストリームを返します。

## 構文

```js-nolint
textStream()
```

### 引数

なし。

### 返値

{{domxref("ReadableStream")}} です。

### 例外

- {{jsxref("TypeError")}}
  - : リクエストの本文が[変更中またはロック済み](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)であった場合に発生します。

## 例

### リクエスト本文のコンテンツをテキストストリームとして読み込む

この例では、リクエスト本文をテキストストリームとして読み込む方法を示しています。

サンプル `Request` を作成しました。`textStream()` を使用してその本体の `ReadableStream` を取得した後、{{domxref("ReadableStream.getReader()")}} を使用して作成したリーダーを介してテキストを読み込みます。

```js
const pElem = document.querySelector("p");

const req = new Request("https://example.com", {
  method: "POST",
  body: '{"hello": "world"}',
});

async function streamRequestText(request) {
  const textStream = request.textStream();
  // instead of
  // const textStream = request.body.pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamRequestText(req);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStream")}}
- {{domxref("ReadableStream.getReader()")}}
- {{domxref("Response.body")}}
- {{domxref("Response.textStream()")}}
