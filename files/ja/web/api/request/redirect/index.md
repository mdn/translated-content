---
title: "Request: redirect プロパティ"
short-title: redirect
slug: Web/API/Request/redirect
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

**`redirect`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リダイレクトを処理する方法のモードを保持します。

## 値

`RequestRedirect` 列挙値で、以下の文字列のいずれかになります。

- `follow`
- `error`
- `manual`

リクエストの作成時に指定されなかった場合は、既定値の `follow` になります。

## 例

次のスニペットでは、 {{domxref("Request.Request()")}} コンストラクターを使用して（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを作成し、そのリクエストの `redirect` の値を変数に保存します。

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.redirect;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
