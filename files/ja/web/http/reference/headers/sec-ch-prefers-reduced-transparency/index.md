---
title: Sec-CH-Prefers-Reduced-Transparency ヘッダー
short-title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-Prefers-Reduced-Transparency`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザー環境設定メディア特性クライアントヒント)で、透過性の低減を推奨します。

サーバーが {{httpheader("Accept-CH")}} ヘッダーを介して、`Sec-CH-Prefers-Reduced-Transparency` を受け入れることをクライアントに通知した場合、クライアントはこのヘッダーを含めて応答することで、ユーザーが透明度の低減を希望していることを示すことができます。サーバーは、コンテンツの透明度を下げるために、CSS や画像など、適切に調整されたコンテンツをクライアントに送信することができます。

このヘッダーは、{{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} メディアクエリーをモデルにしています。

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
Sec-CH-Prefers-Reduced-Transparency: <preference>
```

### ディレクティブ

- `<preference>`
  - : ユーザーエージェントによる透明度の縮小に関する環境設定。これは多くの場合、基盤となるオペレーティングシステムの設定に基づいています。このディレクティブの値は、`no-preference` または `reduce` のどちらかになります。

## 例

### Sec-CH-Prefers-Reduced-Transparency の使用

クライアントはサーバーに対して最初のリクエストを送信します。

```http
GET / HTTP/1.1
Host: example.com
```

サーバーは応答し、{{httpheader("Accept-CH")}} を通じてクライアントに対し、`Sec-CH-Prefers-Reduced-Transparency` を受け入れることを指示します。この例では {{httpheader("Critical-CH")}} も使用されており、`Sec-CH-Prefers-Reduced-Transparency` が[重要なクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#重要なクライアントヒント)と考えていることを示しています。

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> また、`Sec-CH-Prefers-Reduced-Transparency` を {{httpheader("Vary")}} ヘッダーに指定しています。これは、URL が同じであっても、このヘッダーの値によって配信されるコンテンツが異なることをブラウザーに示すためです。これにより、ブラウザーは既存のキャッシュされたレスポンスをそのまま使用せず、このレスポンスを別個のキャッシュとして保存するようになります。`Critical-CH` ヘッダーに掲載されているそれぞれのヘッダーは、`Accept-CH` および `Vary` ヘッダーにも同時に存在している必要があります。

クライアントは（上記で `Critical-CH` が指定されているため）リクエストを自動的に再試行し、`Sec-CH-Prefers-Reduced-Transparency` を通じて、透明性を縮小することをユーザーの環境設定で推奨していることをサーバーに指示します。

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

サーバーからのレスポンスで `Accept-CH` が変更され、サーバー側で対応できなくなったことを示さない限り、クライアントは現在のセッションにおけるその後のリクエストにこのヘッダーを記載します。

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
