---
title: Sec-CH-UA-Platform-Version ヘッダー
short-title: Sec-CH-UA-Platform-Version
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Platform-Version
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA-Platform-Version`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、このユーザーエージェントが実行されているオペレーティングシステムのバージョンを提供します。

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
Sec-CH-UA-Platform-Version: <version>
```

### ディレクティブ

- `<version>`
  - : バージョン文字列には通常、オペレーティングシステムのバージョンが文字列として含まれており、メジャーバージョン、マイナーバージョン、パッチバージョンの各数値がドットで区切られて表記されます。例えば、`"11.0.0"` といった形です。
    Linux では、バージョン文字列は常に空です。

## 例

### Sec-CH-UA-Platform-Version の使用

サーバーは、クライアントからのリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を記載することで、`Sec-CH-UA-Platform-Version` ヘッダーを要求します。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

クライアントは、このヒントを提供することを選択できます。その後、その後のリクエストに `Sec-CH-UA-Platform-Version` ヘッダーを追加することができます。
例えば、Windows 10 上で動作するブラウザーからは、次のようなリクエストヘッダーが送信される場合があります。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Platform-Version: "10.0.0"
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
