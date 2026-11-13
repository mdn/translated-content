---
title: Accept-CH ヘッダー
short-title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{securecontext_header}}

HTTP の **`Accept-CH`** {{Glossary("Response header","レスポンスヘッダー")}}は、クライアントが以降のリクエストにどの[クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)ヘッダーを含めるべきかを指定するために、サーバーによって設定される場合があります。
クライアントヒントが確実に送信されるようにするため、`Accept-CH` ヘッダーはすべての保護されたリクエストにおいて維持される必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header","レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Accept-CH: <client-hints-headers>

// クライアントヒントヘッダーは、カンマ区切りのリストです
Accept-CH: <ch-header-one>, <ch-header-two>
```

## 例

### クライアントヒントレスポンスヘッダー

次のレスポンスヘッダーは、サーバーが以降のリクエストにおいて `Sec-CH-Viewport-Width` および `Sec-CH-Width` [端末クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#端末クライアントヒント)を受け入れることを示しています。
{{HTTPHeader("Vary")}} ヘッダーは、受け入れられたクライアントヒントに基づいて、[レスポンスを変化させる](/ja/docs/Web/HTTP/Guides/Client_hints#キャッシュとクライアントヒント)際にどの値が使用されたかを示します。

```http
Accept-CH: Sec-CH-Viewport-Width, Sec-CH-Width
Vary: Sec-CH-Viewport-Width, Sec-CH-Width
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Vary")}}
