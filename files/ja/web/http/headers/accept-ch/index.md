---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

**`Accept-CH`** ヘッダーはサーバーによって設定され、クライアントが後続のリクエストに含める{{glossary("Client Hints", "クライアントヒント")}}ヘッダーを指定します。

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

> [!NOTE]
> クライアントヒントには、安全なオリジン (TLS 経由) でのみアクセスできます。 Accept-CH ヘッダーと Accept-CH-Lifetime ヘッダーは、クライアントヒントが確実に送信されるように、すべての安全なリクエストに対して保持する必要があります。

## 構文

```
Accept-CH: <list of client hints>
```

## 例

```
Accept-CH: DPR, Viewport-Width
Accept-CH: Width
Accept-CH-Lifetime: 86400
Vary: DPR, Viewport-Width, Width
```

> [!NOTE]
> 受け入れられたクライアントのヒントに基づいて、[レスポンスを変更](/ja/docs/Web/HTTP/Client_hints#varying_client_hints)することを忘れないでください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Accept-CH-Lifetime")}}
- {{HTTPHeader("Vary")}}
