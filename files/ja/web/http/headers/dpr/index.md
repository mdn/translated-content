---
title: DPR
slug: Web/HTTP/Headers/DPR
tags:
  - Client hints
  - HTTP
  - HTTP Header
translation_of: Web/HTTP/Headers/DPR
---
{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`DPR`** ヘッダーは、CSS ピクセル毎に対応する物理デバイスピクセルの数であるクライアントのデバイスピクセル比 (device pixel ratio、{{Glossary("DPR")}})) を表す[クライアントヒント](/ja/docs/Glossary/Client_hints)のヘッダーです。

| ヘッダー種別                                                                     | {{Glossary("Request header","リクエストヘッダー")}} |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name","禁止ヘッダー名")}} | ?                                                                                |

> **Note:** **注**: クライアントヒントには、安全なオリジン（TLS 経由）でのみアクセスできます。 サーバーは、{{HTTPHeader("Accept-CH")}} および {{HTTPHeader("Accept-CH-Lifetime")}} のレスポンスヘッダーを送信することによって、クライアントから `DPR` ヘッダーを受信することを選択する必要があります。

## 構文

    DPR: <number>

## 例

サーバーはまず、レスポンスヘッダーとして `DPR` を含む {{HTTPHeader("Accept-CH")}} と {{HTTPHeader("Accept-CH-Lifetime")}} を送信することによって、`DPR` ヘッダーを受信するように選択する必要があります。

    Accept-CH: DPR
    Accept-CH-Lifetime: 86400

次に、後続のリクエストでクライアントは、次のように `DPR` ヘッダーを送り返す場合があります。

    DPR: 1.0

## ブラウザーの互換性

{{Compat("http.headers.DPR")}}

## 関連情報

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
