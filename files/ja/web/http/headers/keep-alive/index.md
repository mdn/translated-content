---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
---

{{HTTPSidebar}}

**`Keep-Alive`** 一般ヘッダーは、送信者が接続の仕組みや、タイムアウト値と最大リクエスト数の設定に使用される可能性があることをヒントとすることができます。

> [!NOTE]
> このヘッダーが意味を持つためには、 {{HTTPHeader("Connection")}} ヘッダーを "keep-alive" に設定する必要があります。

> **警告:** {{HTTPHeader("Connection")}} や {{HTTPHeader("Keep-Alive")}} などの接続固有のヘッダーフィールドは [HTTP/2 では禁止されています](https://tools.ietf.org/html/rfc7540#section-8.1.2.2)。 Chrome と Firefox は HTTP/2 レスポンスでこれらを無視しますが、 Safari は HTTP/2 仕様の要件に準拠しており、これらを含むレスポンスは読み込まれません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("General header", "一般ヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Keep-Alive: parameters
```

## ディレクティブ

- `parameters`

  - : カンマで区切られたパラメータのリスト。各パラメータは識別子と等号 (`'='`) で区切られた値で構成されます。以下の識別子が利用可能です。

    - `timeout`: 待機状態の接続を開いたままにしておく必要のある最小時間 (秒単位) を示します。keep-alive TCP メッセージがトランスポートレベルで設定されていない場合、TCP タイムアウトよりも長いタイムアウトが無視されることに注意してください。
    - `max`: 接続を閉じる前にこの接続で送信できるリクエストの最大数を示します。`0` 以外の場合、次のレスポンスで別のリクエストが送信されるため、パイプラインでない接続ではこの値は無視されます。HTTP パイプラインは、パイプラインを制限するために使用できます。

## 例

`Keep-Alive` ヘッダーを含むレスポンスです。

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(本文)
```

## 仕様書

| 仕様書                                                                                             | 題名                                                               |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [HTTP Keep-Alive Header](https://tools.ietf.org/html/draft-thomson-hybi-http-timeout-03#section-2) | Keep-Alive Header (IETF Internet Draft)                            |
| [RFC 7230, appendix A.1.2: Keep-Alive](https://tools.ietf.org/html/rfc7230#appendix-A.1.2)         | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Connection")}}
- [HTTP/1.x のコネクション管理](/ja/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
