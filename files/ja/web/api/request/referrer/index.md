---
title: "Request: referrer プロパティ"
short-title: referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`referrer`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、ユーザーエージェントによってリクエストのリファラーが設定されます（`client` や `no-referrer`、URL、など）。

> **メモ:** `referrer` の値が `no-referrer` だった場合、空文字が返されます。

## 値

このリクエストのリファラーを表す文字列です。

## 例

次のスニペットでは、 {{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのための）新しいリクエストを生成してから、リクエストのリファラーを変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrer; // 既定では "about:client" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
