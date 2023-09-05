---
title: Request.referrer
slug: Web/API/Request/referrer
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`referrer`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、ユーザーエージェントによってリクエストのリファラーが設定されます（`about:client` や `no-referrer`、URL、など）。

> **メモ:** `referrerPolicy` の値が `no-referrer` だった場合、空文字が返されます。

## 値

このリクエストのリファラーを表す文字列です。

## 例

次のスニペットでは、 {{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのための）新しいリクエストを生成してから、リクエストのリファラーを変数に保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrer; // returns "about:client" by default
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
