---
title: Content-Length ヘッダー
short-title: Content-Length
slug: Web/HTTP/Reference/Headers/Content-Length
l10n:
  sourceCommit: 89835e4310224a4b87d97ed2214556aa5d5ccb1e
---

HTTP の **`Content-Length`** ヘッダーは、受信者へ送られるメッセージ本体のサイズを、バイト単位で示します。

`Content-Length` は、ヘッダー送信前にメッセージサイズを事前に把握しなければならない点で制限があり、コンテンツが動的に生成される場合やストリーミングされる場合に問題となります。

- HTTP/1.0 では、これは必須です。
- HTTP/1.1 では、サイズが計算された際に一部ずつ送信されるレスポンスに対して、 {{httpheader("Transfer-Encoding", "Transfer-Encoding: chunked")}} で置き換えられる可能性があります。
- HTTP/2 では、`Content-Length` は冗長です。コンテンツの長さは DATA フレームから推測できるためです。ただし、下位互換性のために引き続き記載される場合があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
        {{Glossary("Response header", "レスポンスヘッダー")}},
        {{Glossary("Content header", "コンテンツヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Length: <length>
```

## ディレクティブ

- `<length>`
  - : オクテット列の長さです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Transfer-Encoding")}}
