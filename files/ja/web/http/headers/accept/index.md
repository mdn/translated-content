---
title: Accept
slug: Web/HTTP/Headers/Accept
---

{{HTTPSidebar}}

HTTP の **`Accept`** リクエストヘッダーは、クライアントが理解できるコンテンツタイプを [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)で伝えます。 [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)を使用して、サーバーは提案のうちの一つを選択し、それを使用してクライアントに {{HTTPHeader("Content-Type")}} レスポンスヘッダーで選択を伝えます。ブラウザーはリクエストを行う場面に応じて適切な値をこのヘッダーに設定します。 CSS スタイルシートを取得するときは、画像、動画、スクリプトを取得するときとは異なる値をリクエストで設定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい、ただし、値に <em>CORS-unsafe リクエストヘッダーバイト</em>、
        0x00-0x1F (0x09 (HT) を除く)、<code>"():&#x3C;>?@[\]{}</code>、0x7F
        (DEL) を含むことができないという追加の制限があります。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// {{glossary("quality values", "重み値")}}の構文によって重みづけされた複数の種別
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## ディレクティブ

- `<MIME_type>/<MIME_subtype>`
  - : 単一の詳細な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)、例えば `text/html` です。
- `<MIME_type>/*`
  - : MIME タイプですが、サブタイプがありません。 `image/*` は `image/png`, `image/svg`, `image/gif` 及びその他の画像タイプに一致します。
- `*/*`
  - : すべての MIME タイプ
- `;q=` (Q 値の重み)
  - : *重み*と呼ばれる、相対的な[品質値](/ja/docs/Glossary/Quality_values)を使用して表現される優先順位の順序で配置された値です。

## 例

```
Accept: text/html

Accept: image/*

// 全般的な既定値
Accept: */*

// ナビゲーション時のリクエストの既定値
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept", "5.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## ブラウザーの互換性

{{Compat("http.headers.Accept")}}

## 関連情報

- HTTP [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{HTTPHeader("Content-Type")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
