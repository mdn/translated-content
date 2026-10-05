---
title: Sec-CH-UA-Full-Version ヘッダー
short-title: Sec-CH-UA-Full-Version
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_Header}}

> [!NOTE]
> これは {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} に置き換えられつつあります。

HTTP の **`Sec-CH-UA-Full-Version`** {{Glossary("request header", "リクエストヘッダー")}} は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、このユーザーエージェントの完全なバージョン文字列を提供します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
        <a href="/ja/docs/Web/HTTP/Guides/Client_hints">クライアントヒント</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい (<code>Sec-</code> 接頭辞)</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-CH-UA-Full-Version: <version>
```

### ディレクティブ

- `<version>`
  - : 完全なバージョン番号が含まれている文字列。"96.0.4664.93" などです。

## 例

### Sec-CH-UA-Full-Version の使用

サーバーは、クライアントからのリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を含めることで、`Sec-CH-UA-Full-Version` ヘッダーを要求します。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

クライアントは、このヒントを提供することを選択することができます。その後、リクエストに `Sec-CH-UA-Full-Version` ヘッダーを追加することができます。
例えば、クライアントは次のようにヘッダーを追加することができます。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version: "96.0.4664.110"
Sec-CH-UA-Platform: "Windows"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
