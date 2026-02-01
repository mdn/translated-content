---
title: Accept ヘッダー
short-title: Accept
slug: Web/HTTP/Reference/Headers/Accept
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Accept`** {{Glossary("request header", "リクエスト")}}および{{Glossary("response header", "レスポンスヘッダー")}}は、送信者が理解できるコンテンツ型（[MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)で表現）を示します。リクエストでは、サーバーは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)を使用して提案の中から 1 つを選択し、 {{HTTPHeader("Content-Type")}} レスポンスヘッダーでその選択をクライアントに通知します。
レスポンスでは、リクエストされたリソースへのメッセージにおいて、サーバーが理解できるコンテンツ型に関する情報を指定します。これにより、そのコンテンツ型をリソースへの後続のリクエストで使用することができます。

ブラウザーは、リクエストのコンテキストに基づいてこのヘッダーに要求される値を設定します。
例えば、CSS スタイルシート、画像、動画、またはスクリプトを取得する際、ブラウザーはリクエスト内で異なる値を使用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}},
      {{Glossary("response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい*
      </td>
    </tr>
  </tbody>
</table>

\* 値には [CORS-unsafe request header bytes](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) を入れることはできません。これには `"():<>?@[\]{},`、削除 `0x7F`、制御文字 `0x00` ～ `0x19` を含みますが、タブ `0x09` は除きます。

## 構文

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// 品質値構文で重みをつけた複数の型
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## ディレクティブ

- `<media-type>/<subtype>`
  - : 単一の詳細な [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)、例えば `text/html` です。
- `<media-type>/*`
  - : MIME タイプですが、サブタイプがありません。
    例えば `image/*` は `image/png`, `image/svg`, `image/gif` 及びその他の画像型に一致します。
- `*/*`
  - : すべての MIME タイプ。
- `;q=` (Q 値の重み)
  - : *重み*と呼ばれる、相対的な{{Glossary("quality values", "品質値")}}を使用して表現される優先順位の順序で配置された値です。

## 例

### デフォルトの Accept リクエストヘッダーの使用

コマンドラインツール、例えば [curl](https://curl.se/) や [wget](https://www.gnu.org/software/wget/)）で発行される HTTP リクエストでは、`Accept` ヘッダーのデフォルト値として `*/*` が使用されます。

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

ブラウザーのナビゲーションでは通常、以下の `Accept` リクエストヘッダー値が設定されます。

```http
GET /ja/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

文書を送信すると、`developer.mozilla.org` の画像リクエストにおけるデフォルトの `Accept` 値は同様に次のようになります。

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### JSON レスポンスに対する Accept リクエストヘッダーの設定

API を扱うシステムでは、`application/json` 形式のレスポンスが一般的に要求されます。
以下は、クライアントが特定の JSON レスポンスをリクエストする {{HTTPMethod("GET")}} リクエストの例です。

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
- [デフォルトの Accept 値の一覧](/ja/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)
- [CORS セーフリストリクエストヘッダーの制約](/ja/docs/Glossary/CORS-safelisted_request_header#追加要件)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{HTTPHeader("Content-Type")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
