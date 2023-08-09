---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
---

{{SeeCompatTable}}{{HTTPSidebar}}

**`Early-Data`** ヘッダーは中間者により設定され、リクエストが [TLS 早期データ](/ja/docs/Web/Security/Transport_Layer_Security#TLS_1.3)で伝えられたこと、そして中間者が {{HTTPStatus("425", "425 (Too Early)")}} ステータスコードを理解していることを示します。

**`Early-Data`** ヘッダーはリクエストの発信者 (つまり、ブラウザー) によって設定されることはありません。

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
  </tbody>
</table>

## 構文

```
Early-Data: 1
```

## 例

```
GET /resource HTTP/1.0
Host: example.com
Early-Data: 1
```

## 仕様書

| 仕様書                                                | 題名                     |
| ----------------------------------------------------- | ------------------------ |
| {{RFC("8470", "The Early-Data Header Field", "5.1")}} | Using Early Data in HTTP |

## ブラウザーの互換性

{{Compat("http.headers.Early-Data")}}
