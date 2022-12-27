---
title: Response.body
slug: Web/API/Response/body
original_slug: Web/API/Body/body
---

{{APIRef("Fetch")}}

**`body`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本文コンテンツの {{domxref("ReadableStream")}} です。

## 構文

```js
response.body;
```

### 値

{{domxref("ReadableStream")}} です。

## 例

[単純なストリームポンプ](https://mdn.github.io/dom-examples/streams/simple-pump/)の例では、画像を読み取り、`response.body` を使用してレスポンスのストリームを公開し、{{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}} を使用してリーダーを作成し、そのストリームのチャンクを 2 番目のカスタム読み取り可能なストリームのキューに入れます — 画像の同一コピーを効果的に作成します。

```js
const image = document.getElementById('target');

// 元の画像をフェッチ
fetch('./tortoise.png')
// その body を ReadableStream として取得
.then(response => response.body)
.then(body => {
  const reader = body.getReader();

  return new ReadableStream({
    start(controller) {
      return pump();

      function pump() {
        return reader.read().then(({ done, value }) => {
          // データを消費する必要がなくなったら、ストリームを閉じます
          if (done) {
            controller.close();
            return;
          }

          // 次のデータチャンクを対象のストリームのキューに入れます
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream => new Response(stream))
.then(response => response.blob())
.then(blob => URL.createObjectURL(blob))
.then(url => console.log(image.src = url))
.catch(err => console.error(err));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fetch API](/ja/docs/Web/API/Fetch_API)
- [Streams API](/ja/docs/Web/API/Streams_API)
- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
