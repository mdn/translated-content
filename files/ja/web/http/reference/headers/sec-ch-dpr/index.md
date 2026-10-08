---
title: Sec-CH-DPR ヘッダー
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_Header}}{{SeeCompatTable}}

HTTP の **`Sec-CH-DPR`** {{Glossary("request header", "リクエストヘッダー")}}は、クライアント端末のピクセル比 (DPR) に関する[端末クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#端末クライアントヒント)を提供します。
この比率は、それぞれの {{Glossary("CSS pixel", "CSS ピクセル")}}に対応する物理デバイスピクセル数です。

このヒントは、画面のピクセル密度に最も適した画像ソースを選択する際に有益です。
これは、ユーザーエージェントが優先する画像を選択することができるようにするための、`<img>` の [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性における `x` 記述子の役割と似ています。

メッセージ内に `Sec-CH-DPR` ヘッダーが複数回出現する場合、最後に現れたものが使用されます。

`Sec-CH-DPR` クライアントヒントを採用するサーバーは、通常、{{HTTPHeader("Vary")}} ヘッダーにもこれを指定し、リクエストのヘッダー値に基づいて異なるレスポンスを送信することがあります。

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
Sec-CH-DPR: <number>
```

## ディレクティブ

- `<number>`
  - : クライアント端末のピクセル比率です。

## 例

サーバーは、あらかじめ `Sec-CH-DPR` ヘッダーを受信することを明示的に許可しておかなければなりません。そのためには、{{HTTPHeader("Accept-CH")}} レスポンスヘッダーに `Sec-CH-DPR` ディレクティブ含めて送信する必要があります。

```http
Accept-CH: Sec-CH-DPR
```

その後、クライアントは、それ以降のリクエストにおいて、サーバーに `Sec-CH-DPR` ヘッダーを送信する場合があります。

```http
Sec-CH-DPR: 2.0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 端末およびレスポンシブ画像クライアントヒント
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}}
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
