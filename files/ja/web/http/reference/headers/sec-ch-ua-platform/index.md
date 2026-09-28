---
title: Sec-CH-UA-Platform ヘッダー
short-title: Sec-CH-UA-Platform
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Platform
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA-Platform`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、このユーザーエージェントが実行されているプラットフォームまたはオペレーティングシステムを提供します。
例えば "Windows" や "Android" です。

`Sec-CH-UA-Platform` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#低エントロピーヒント)です。
ユーザーエージェントの権限ポリシーによってブロックされていない限り、サーバーが {{HTTPHeader("Accept-CH")}} を送信して明示的に許可しなくても、デフォルトで送信されます。

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
Sec-CH-UA-Platform: <platform>
```

### ディレクティブ

- `<platform>`
  - : `"Android"`, `"Chrome OS"`, `"Chromium OS"`, `"iOS"`, `"Linux"`, `"macOS"`, `"Windows"`, `"Unknown"` のいずれかの文字列です。

## 例

### Sec-CH-UA-Platform の使用

`Sec-CH-UA-Platform` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#低エントロピーヒント)であるため、通常はすべてのリクエストで送信されます。
macOS のコンピューターで動作しているブラウザーでは、通常、次のようなヘッダーを含むリクエストを送信します。

```http
Sec-CH-UA-Platform: "macOS"
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
