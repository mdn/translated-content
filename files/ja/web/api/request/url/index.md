---
title: "Request: url プロパティ"
short-title: url
slug: Web/API/Request/url
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`url`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエストの URL を保持します。

## 値

リクエストの URL を示す文字列です。

## 例

次のスニペットでは、 {{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのための）新しいリクエストを生成してから、変数にリクエストの URL を保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myURL = myRequest.url; // "https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request/flowers.jpg"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
