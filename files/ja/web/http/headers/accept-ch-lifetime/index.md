---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`Accept-CH-Lifetime`** ヘッダーは、クライアントが後続のリクエストにどの[クライアントヒント](/ja/docs/Glossary/Client_hints)のヘッダーを含める必要があるかを指定する {{HTTPHeader("Accept-CH")}} ヘッダーの値の永続性を指定するためにサーバーによって設定されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header","レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name","禁止ヘッダー名")}}
      </th>
      <td>?</td>
    </tr>
  </tbody>
</table>

> **メモ:** クライアントヒントには、安全なオリジン（TLS 経由）でのみアクセスできます。 Accept-CH ヘッダーと Accept-CH-Lifetime ヘッダーは、クライアントヒントが確実に送信されるように、すべての安全なリクエストに対して永続化する必要があります。

## 構文

```
Accept-CH-Lifetime: <age>
```

## 例

```
Accept-CH: Viewport-Width, DPR
Accept-CH-Lifetime: 86400
```

## ブラウザーの互換性

{{Compat("http.headers.Accept-CH-Lifetime")}}

## 関連情報

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Vary")}}
