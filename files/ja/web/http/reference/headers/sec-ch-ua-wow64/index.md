---
title: Sec-CH-UA-WoW64 ヘッダー
short-title: Sec-CH-UA-WoW64
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-WoW64
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SecureContext_Header}}{{SeeCompatTable}}

HTTP の **`Sec-CH-UA-WoW64`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、64 ビットの Windows 機で 32 ビットのユーザーエージェントアプリケーションが実行されているかどうかを示します。

[WoW64](https://ja.wikipedia.org/wiki/WOW64) は、どの [NPAPI](https://en.wikipedia.org/wiki/NPAPI)<sup>(英語)</sup> プラグインインストーラーをダウンロード用に提供するべきかを判断するために、広く使用されていました。
このクライアントヒントヘッダーは、下位互換性を考慮して、特定のブラウザーのユーザーエージェント文字列と UA クライアントヒントとの間に一対一の対応関係を確立するために使用されています。

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
Sec-CH-UA-WoW64: <boolean>
```

### ディレクティブ

- `<boolean>`
  - : `?1` は、ユーザーエージェントのバイナリーが 64 ビット版の Windows 上で 32 ビットモードで実行されていることを示し (true)、`?0` はそうでないことを意味します (false)。

## 例

### Sec-CH-UA-WoW64 の使用

サーバーは、クライアントからのリクエストに対するレスポンスに {{HTTPHeader("Accept-CH")}} を記載することで、`Sec-CH-UA-Platform-Version` ヘッダーを要求します。この際、希望するヘッダー名をトークンとして使用します。

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-WoW64
```

クライアントは、このヒントを提供することを選択し、以降のリクエストに `Sec-CH-UA-WoW64` ヘッダーを追加する可能性があります。
`Sec-CH-UA-WoW64: ?1` を追加することは、ユーザーエージェントのバイナリーが 64 ビット版 Windows 上で 32 ビットモードで実行されていることを意味します。

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA-WoW64: ?1
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Form-Factors: "Desktop"
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
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) on developer.chrome.com
