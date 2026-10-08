---
title: Sec-CH-UA-Arch ヘッダー
short-title: Sec-CH-UA-Arch
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Arch
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA-Arch`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、ARM や x86 など、ユーザーエージェントの基盤となる CPU アーキテクチャが含まれています。

これは、例えば、サーバーが、ユーザーがダウンロードするための実行ファイルの適切なバイナリー形式を判別して提供するために使用される場合があります。

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
Sec-CH-UA-Arch: <arch>
```

### ディレクティブ

- `<arch>`
  - : 基盤となるプラットフォームのアーキテクチャを示す文字列。`"x86"`, `"ARM"`, `"[arm64-v8a, armeabi-v7a, armeabi]"` など。

## 例

### Sec-CH-UA-Arch の使用

サーバーは、クライアントからのリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を記載することで、`Sec-CH-UA-Arch` ヘッダーを要求します。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

クライアントは、このヒントを提供することを選択することができます。その後、リクエストに `Sec-CH-UA-Arch` ヘッダーを追加することができます。
例えば、Windows X86 ベースのコンピューターでは、クライアントは次のようにヘッダーを追加する可能性があります。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

なお、以上のように、サーバーのレスポンスで指定されていなくても、[低エントロピーヘッダー](/ja/docs/Web/HTTP/Guides/Client_hints#低エントロピーヒント)がリクエストに追加されます。

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
