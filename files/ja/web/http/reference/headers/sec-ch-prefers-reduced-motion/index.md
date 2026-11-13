---
title: Sec-CH-Prefers-Reduced-Motion ヘッダー
short-title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-Prefers-Reduced-Motion`** {{Glossary("request header", "リクエストヘッダー")}}は[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント)で、アニメーションを動きを縮小して表示させることをユーザーエージェントが推奨することを示します。

サーバーが {{httpheader("Accept-CH")}} ヘッダーを介して、`Sec-CH-Prefers-Reduced-Motion` を受け入れることをクライアントに通知した場合、クライアントはこのヘッダーをつけて応答することで、ユーザーが動きの縮小を推奨することを示すことができます。サーバーは、クライアントに適切に調整されたコンテンツ（JavaScript や CSS など）を送信し、その後レンダリングされるコンテンツにアニメーションが存在する場合には、その動きを縮小することができます。これには、前庭性運動障碍を持つ人々の不快感を軽減するために、動きの速度や振幅を縮小することが含まれます。

このヘッダーは、{{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディアクエリーをモデルにしています。

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
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### ディレクティブ

- `<preference>`
  - : ユーザーエージェントの「動きを縮小したアニメーション」に関する環境設定。多くの場合、これは基盤となるオペレーティングシステムの設定から採用されます。このディレクティブの値は、`no-preference` または `reduce` のいずれかになります。

## 例

### Sec-CH-Prefers-Reduced-Motion の使用

クライアントはサーバーに対して最初のリクエストを送信します。

```http
GET / HTTP/1.1
Host: example.com
```

サーバーは応答し、{{httpheader("Accept-CH")}} を通じて、`Sec-CH-Prefers-Reduced-Motion` を受け入れることをクライアントに指示します。この例では {{httpheader("Critical-CH")}} も使用されており、`Sec-CH-Prefers-Reduced-Motion` が[重要なクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#重要なクライアントヒント)と考えられていることを示しています。

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> また、`Sec-CH-Prefers-Reduced-Motion` を {{httpheader("Vary")}} ヘッダーに指定しています。これは、URL が同じであっても、このヘッダーの値によって配信されるコンテンツが異なることをブラウザーに示すためです。これにより、ブラウザーは既存のキャッシュされたレスポンスをそのまま使用せず、このレスポンスを別個にキャッシュするようになります。`Critical-CH` ヘッダーに掲載されているそれぞれのヘッダーは、`Accept-CH` および `Vary` ヘッダーにも同時に存在している必要があります。

クライアントは（以上で `Critical-CH` が指定されているため）、リクエストを自動的に再試行し、`Sec-CH-Prefers-Reduced-Motion` を通じて、アニメーションの動きを控えめにするというユーザーの環境設定をサーバーに指示します。

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

サーバーからのレスポンスで `Accept-CH` が変更され、サーバー側でこのヘッダーが対応できなくなったことが示されない限り、クライアントは現在のセッションにおける以降のリクエストにこのヘッダーを記載します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- CSS {{cssxref("@media/prefers-reduced-motion")}} メディアクエリー
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
