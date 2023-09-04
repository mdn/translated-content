---
title: Request.integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`integrity`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、このリクエストの[サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)の値を保持します。

## 値

リクエストの[サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)の値（`sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=` など）。

完全性が指定されていない場合、 `''` を返します。

## 例

次のスニペットでは {{domxref("Request.Request()")}} コンストラクターを使用して新しいリクエストを作成し（スクリプトと同じディレクトリーにある画像ファイルに対して）、そのリクエストの `integrity` 値を変数に保存します。

```js
const myRequest = new Request("flowers.jpg");
const myIntegrity = myRequest.integrity;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
