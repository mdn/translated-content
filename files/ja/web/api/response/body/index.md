---
title: Response.body
slug: Web/API/Response/body
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`body`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本体コンテンツの {{domxref("ReadableStream")}} です。

## 値

{{domxref("ReadableStream")}}、または [`body`](/ja/docs/Web/API/Response/Response#body) プロパティが null で構築された `Response` オブジェクト、あるいは[本体](/ja/docs/Web/HTTP/Messages#body_2)を持たない実際の [HTTP レスポンス](/ja/docs/Web/HTTP/Messages#http_responses)に対しては [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

> **メモ:** 現在のブラウザーは、本体なしのレスポンス（例えば、 [`HEAD`](/ja/docs/Web/HTTP/Methods/HEAD) リクエストに対するレスポンスや、 [`204 No Content`](/ja/docs/Web/HTTP/Status/204) レスポンス）には `body` プロパティを `null` に設定するという仕様に実際には適合していません。

## 例

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [ストリーム API](/ja/docs/Web/API/Streams_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
