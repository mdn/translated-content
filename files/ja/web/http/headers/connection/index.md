---
title: Connection
slug: Web/HTTP/Headers/Connection
tags:
  - HTTP
  - HTTP ヘッダー
  - リクエストヘッダー
  - レスポンスヘッダー
  - リファレンス
  - ウェブ
browser-compat: http.headers.Connection
translation_of: Web/HTTP/Headers/Connection
---
{{HTTPSidebar}}

**`Connection`** 一般ヘッダーは、現在のトランザクションが完了したあとも、ネットワーク接続を開いたままにするかどうかを制御します。もし送信された値が `keep-alive` であった場合は、接続が維持されて閉じられなくなり、同一のサーバーに送るべき後続のリクエストで再利用されます。

> **Warning:** {{HTTPHeader("Connection")}} や {{HTTPHeader("Keep-Alive")}} などの接続固有のヘッダーフィールドは、[HTTP/2 では禁止されています](https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2.2)。Chrome と Firefox は HTTP/2 レスポンスでそれらを無視しますが、Safari は HTTP/2 仕様の要件に準拠しているため、それらを含むレスポンスを読み込みません。

標準のホップバイホップヘッダー ({{HTTPHeader("Keep-Alive")}}、{{HTTPHeader("Transfer-Encoding")}}、{{HTTPHeader("TE")}}、{{HTTPHeader("Connection")}}、{{HTTPHeader("Trailer")}}、{{HTTPHeader("Upgrade")}}、{{HTTPHeader("Proxy-Authorization")}}、{{HTTPHeader("Proxy-Authenticate")}}) を除き、メッセージで使用しているホップバイホップヘッダーは `Connection` ヘッダーに列挙する必要があります。したがって、これを解釈する最初のプロキシーはそれを消費する必要があり、その先に転送してはいけません。標準のホップバイホップヘッダーも列挙する必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}、{{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 構文

```
Connection: keep-alive
Connection: close
```

## ディレクティブ

- `close`
  - : クライアントあるいはサーバーが接続を閉じる意思があることを示します。これは HTTP/1.0 リクエストの既定の動作です。
- カンマ区切りの HTTP ヘッダーのリスト \[通常は `keep-alive` のみ]
  - : クライアントが接続を開いておく意思があることを示します。接続の維持は HTTP/1.1 の既定の動作です。ヘッダー名のリストは、介在する最初の非透過プロキシーやキャッシュが削除するヘッダーの名前です。これらのヘッダーは最終的な宛先ノードではなく、送信者と最初のエンティティ間の接続の定義に使用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
