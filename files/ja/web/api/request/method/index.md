---
title: "Request: method プロパティ"
short-title: method
slug: Web/API/Request/method
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`method`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、このリクエストのメソッド（`GET`、`POST` など）を保持します。

## 値

リクエストメソッドを示す文字列です。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストメソッドを変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myMethod = myRequest.method; // GET
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
