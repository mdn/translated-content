---
title: "Request: integrity プロパティ"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`integrity`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、このリクエストの[サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)の値を保持します。

## 値

`Request` を構築する際に `options.integrity` 引数として渡された値。

完全性が指定されていない場合、 `''` を返します。

## 例

次のスニペットでは {{domxref("Request.Request()")}} コンストラクターを使用して新しいリクエストを作成し（スクリプトと同じディレクトリーにある画像ファイルに対して）、次に、そのリクエストの完全性を読み取ります。リクエストは特定の完全性なしに作成されたため、プロパティは空文字列を返します。

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

例えば、下記の場合、リクエストは特定の完全性の値で作成されたため、プロパティはその値を返します。なお、完全性の値の検証は行われません。このプロパティは渡された値をそのまま返します。

```js
const myRequest = new Request("flowers.jpg", {
  integrity: "sha256-abc123",
});
console.log(myRequest.integrity); // "sha256-abc123"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
