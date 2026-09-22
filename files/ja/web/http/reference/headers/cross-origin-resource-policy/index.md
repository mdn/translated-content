---
title: Cross-Origin-Resource-Policy (CORP) ヘッダー
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Cross-Origin-Resource-Policy`** {{Glossary("Response header", "レスポンスヘッダー")}}は、ブラウザーが指定されたリソースへの [`no-cors`](/ja/docs/Web/API/RequestInit#no-cors) のクロスオリジン/クロスサイトのリクエストをブロックするという要望を伝えます。

このリソースを読み込むことができるサイトやオリジンについて、リソース所有者のポリシーを指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

### ディレクティブ

- `same-site`
  - : リソースは、同じサイトからのみ読み込むことができます。

- `same-origin`
  - : リソースは、同じオリジンからのみ読み込むことができます。

- `cross-origin`
  - : リソースは、任意の他のオリジンやウェブサイトから読み込むことが可能です。

## 例

これ以外の例は、 https://resourcepolicy.fyi/ を参照してください。

### オリジン間の no-cors リクエストを不許可にする

以下の `Cross-Origin-Resource-Policy` ヘッダーにより、互換性のあるユーザーエージェントはオリジンをまたぐ no-cors リクエストを許可しなくなります。

```http
Cross-Origin-Resource-Policy: same-origin
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Cross-Origin Resource Policy (CORP) の説明](/ja/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Consider deploying Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
