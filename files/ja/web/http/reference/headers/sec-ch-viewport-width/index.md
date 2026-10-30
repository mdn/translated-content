---
title: Sec-CH-Viewport-Width ヘッダー
short-title: Sec-CH-Viewport-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Width
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_header}}{{SeeCompatTable}}

HTTP は **`Sec-CH-Viewport-Width`** {{Glossary("request header", "リクエストヘッダー")}}は[端末クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)で、クライアントのレイアウトビューポートの幅を {{Glossary("CSS pixel", "CSS ピクセル")}}単位で提供します。
値は、その上の最も小さな整数に丸められます（すなわち、切り上げとなります）。

このヒントは、他の画面特定ヒントと組み合わせて使用することで、特定の画面サイズに最適化された画像を配信したり、特定の画面の幅では不要なリソースを省略したりすることができます。
メッセージ内に `Sec-CH-Viewport-Width` ヘッダーが複数回現れる場合、最後に現れたものが使用されます。

サーバーがクライアントから `Sec-CH-Viewport-Width` ヘッダーを受信するには、{{HTTPHeader("Accept-CH")}} レスポンスヘッダーを送信して、この機能への参加を明示する必要があります。
この機能に参加するサーバーは、通常、{{HTTPHeader("Vary")}} ヘッダーにもその旨を指定します。これにより、キャッシュに対して、サーバーがリクエストのヘッダー値に基づいて異なるレスポンスを送信することがあることが通知されます。

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
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-CH-Viewport-Width: <number>
```

## ディレクティブ

- `<number>`
  - : {{Glossary("CSS pixel","CSS ピクセル")}}単位のユーザーのビューポートの幅を、最も近い整数に切り上げたものです。

## 例

### Sec-CH-Viewport-Width の使用

サーバーが `Sec-CH-Viewport-Width` ヘッダーを受信するには、事前に、{{HTTPHeader("Accept-CH")}} レスポンスヘッダーに `Sec-CH-Viewport-Width` レスポンスヘッダーを入れて送信し、オプトインしなければなりません。

```http
Accept-CH: Sec-CH-Viewport-Width
```

その後のリクエストにおいて、クライアントは `Sec-CH-Viewport-Width` ヘッダーを送信する可能性があります。

```http
Sec-CH-Viewport-Width: 320
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- 端末およびレスポンシブ画像クライアントヒント
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
