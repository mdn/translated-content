---
title: Request.method
slug: Web/API/Request/method
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

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
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
