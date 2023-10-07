---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
---

{{HTTPSidebar}}

**`Content-Length`** エンティティヘッダーは、受信者に送信されるエンティティ本文の長さをバイト単位で示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Entity header", "エンティティヘッダー")}}
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
Content-Length: <length>
```

## ディレクティブ

- \<length>
  - : オクテット列の長さの 10 進数表記。

## 仕様書

| 仕様書                                     | 題名                                                               |
| ------------------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Content-Length", "3.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## ブラウザーの対応

{{Compat("http.headers.Content-Length")}}

## 関連情報

- {{HTTPHeader("Transfer-Encoding")}}
