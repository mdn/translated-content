---
title: "Request: referrerPolicy プロパティ"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

**`referrerPolicy`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、{{HTTPHeader("Referer")}} ヘッダーで送信されるどのリファラー情報がリクエストに記載されるべきかを管理する、リファラーポリシーを返します。

## 値

このリクエストの `referrerPolicy` を表す文字列です。詳細な情報や使用可能な値については、 HTTP の {{HTTPHeader("Referrer-Policy")}} ヘッダーのページを参照してください。

## 例

次のスニペットでは、 {{domxref("Request.Request()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのための）新しいリクエストを生成してから、変数にリクエストのリファラーポリシーを保存しています。

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrerPolicy; // returns "" by default
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
