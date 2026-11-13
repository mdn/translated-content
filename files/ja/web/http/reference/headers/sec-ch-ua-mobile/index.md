---
title: Sec-CH-UA-Mobile ヘッダー
short-title: Sec-CH-UA-Mobile
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Mobile
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-UA-Mobile`** {{Glossary("request header", "リクエストヘッダー")}} は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、このブラウザーがモバイル端末上のものであるかどうかを示します。
また、デスクトップのブラウザーでも、「モバイル」向けの操作を希望することを示すために使用できます。

`Sec-CH-UA-Mobile` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#低エントロピーヒント)です。
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
Sec-CH-UA-Mobile: <boolean>
```

### ディレクティブ

- `<boolean>`
  - : `?1` は、ユーザーエージェントがモバイル向けの表示を推奨することを示します (true)。
    `?0` は、ユーザーエージェントがモバイル向けの表示を推奨しないことを示します (false)。

## 例

### Sec-CH-UA-Mobile の使用

`Sec-CH-UA-Mobile` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#低エントロピーヒント)であるため、通常はすべてのリクエストで送信されます。
デスクトップブラウザーでは、通常、次のようなヘッダーを含むリクエストを送信します。

```http
Sec-CH-UA-Mobile: ?0
```

モバイル端末のブラウザーは通常、次のようなヘッダーをつけたリクエストを送信します。

```http
Sec-CH-UA-Mobile: ?1
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
