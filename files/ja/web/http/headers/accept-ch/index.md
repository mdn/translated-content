---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
tags:
  - Client hints
  - HTTP
  - HTTP Header
translation_of: Web/HTTP/Headers/Accept-CH
---
{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`Accept-CH`** ヘッダーはサーバーによって設定され、クライアントが後続のリクエストに含める{{glossary("Client Hints", "クライアントヒント")}}ヘッダーを指定します。

| ヘッダー種別                                                                     | {{Glossary("Response header","レスポンスヘッダー")}} |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name","禁止ヘッダー名")}} | ?                                                                                |

> **Note:** **注:** クライアントヒントには、安全なオリジン (TLS 経由) でのみアクセスできます。 Accept-CH ヘッダーと Accept-CH-Lifetime ヘッダーは、クライアントヒントが確実に送信されるように、すべての安全なリクエストに対して保持する必要があります。

## 構文

    Accept-CH: <list of client hints>

## 例

    Accept-CH: DPR, Viewport-Width
    Accept-CH: Width
    Accept-CH-Lifetime: 86400
    Vary: DPR, Viewport-Width, Width

> **Note:** **注:** 受け入れられたクライアントのヒントに基づいて、[レスポンスを変更](/ja/docs/Glossary/Client_hints#Varying_Client_Hints)することを忘れないでください。

## ブラウザーの互換性

{{Compat("http.headers.Accept-CH")}}

## 関連情報

- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
