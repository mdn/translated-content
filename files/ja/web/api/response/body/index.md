---
title: "Response: body プロパティ"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

**`body`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本体コンテンツの {{domxref("ReadableStream")}} です。

## 値

{{domxref("ReadableStream")}}、または `Response` オブジェクトが[構築](/ja/docs/Web/API/Response/Response)時に [`body`](/ja/docs/Web/API/Response/Response#body) プロパティが null であった場合、あるいは [HTTP レスポンス](/ja/docs/Web/HTTP/Guides/Messages#http_レスポンス)に[本体](/ja/docs/Web/HTTP/Guides/Messages#本体_2)がなかった場合には [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になります。

ストリームは[読み取り可能なバイトストリーム](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)で、 {{domxref("ReadableStreamBYOBReader")}} を用いたゼロコピー移譲に対応しています。

> [!NOTE]
> 現在のブラウザーは、本体なしのレスポンス（例えば、 [`HEAD`](/ja/docs/Web/HTTP/Reference/Methods/HEAD) リクエストに対するレスポンスや、 [`204 No Content`](/ja/docs/Web/HTTP/Reference/Status/204) レスポンス）には `body` プロパティを `null` に設定するという仕様に実際には適合していません。

## 例

### 画像の複製

[単純なストリームポンプ](https://mdn.github.io/dom-examples/streams/simple-pump/)の例では、画像を読み取り、 `response.body` を使用してレスポンスのストリームを公開し、{{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}} を使用してリーダーを作成し、そのストリームのチャンクを 2 番目のカスタム読み取り可能なストリームのキューに入れます。画像の同一コピーを効果的に作成します。

```js
const image = document.getElementById("target");

// 元の画像をフェッチ
fetch("./tortoise.png")
  // その body を ReadableStream として取得
  .then((response) => response.body)
  .then((body) => {
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
      },
    });
  })
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

### BYOB リーダーの作成

この例では、 {{domxref("ReadableStreamBYOBReader")}} を使用して本体から {{domxref("ReadableStream.getReader()", "ReadableStream.getReader({mode: 'byob'})")}} を構築します。このリーダーを使用して、レスポンスデータのゼロコピー移譲を実装することができます。

```js
async function getProducts(url) {
  const response = await fetch(url);
  const reader = response.body.getReader({ mode: "byob" });
  // このレスポンスを読む
}

getProducts(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [ストリーム API](/ja/docs/Web/API/Streams_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
