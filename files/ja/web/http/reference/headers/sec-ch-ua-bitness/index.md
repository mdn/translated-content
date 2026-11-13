---
title: Sec-CH-UA-Bitness ヘッダー
short-title: Sec-CH-UA-Bitness
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Bitness
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA-Bitness`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、ユーザーエージェントの基盤となる CPU アーキテクチャの「ビット数」を指定します。
これは、整数またはメモリーアドレスのビット数であり、通常は 64 ビットまたは 32 ビットです。

これは、例えば、サーバーがユーザーがダウンロードするための実行ファイルの適切なバイナリー形式を選択して提供するために使用されることがあります。

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
Sec-CH-UA-Bitness: <bitness>
```

## ディレクティブ

- `<bitness>`
  - : 基盤となるプラットフォームのアーキテクチャのビット数を示す文字列。例: `"64"`, `"32"`。

## 例

### Sec-CH-UA-Bitness の使用

サーバーは、クライアントからのリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を含めることで、`Sec-CH-UA-Bitness` ヘッダーを要求します。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

クライアントは、このヒントを提供することを選択することができます。その後、リクエストに `Sec-CH-UA-Bitness` ヘッダーを追加することができます。
例えば、Windows ベースの 64 ビットコンピューターでは、クライアントは次のようにヘッダーを追加することができます。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Bitness: "64"
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
