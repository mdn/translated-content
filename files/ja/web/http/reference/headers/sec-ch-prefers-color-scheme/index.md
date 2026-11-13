---
title: Sec-CH-Prefers-Color-Scheme ヘッダー
short-title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}{{SecureContext_Header}}

HTTP の **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request header", "リクエストヘッダー")}}は[メディア特性クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザー環境設定メディア特性クライアントヒント)で、ライトテーマとダークテーマのどちらを推奨するかというユーザーの環境設定を指定します。
ユーザーは、オペレーティングシステムの設定（例えば、ライトモードやダークモードなど）やユーザーエージェントの設定を通じて、自身の環境設定を示します。

サーバーが {{httpheader("Accept-CH")}} ヘッダーを介して、`Sec-CH-Prefers-Color-Scheme` を受け入れることをクライアントにシグナルした場合、クライアントはこのヘッダーを含めて応答し、ユーザーが特定の配色を好むことを示すことができます。これにより、サーバーは、その後レンダリングされるコンテンツをライトモードまたはダークモードで表示するために、画像や CSS などを適切に調整したコンテンツをクライアントに送信することができます。

このヘッダーは、{{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディアクエリーをモデルにしています。

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
      <td>Yes (<code>Sec-</code> 接頭辞)</td>
    </tr>
  </tbody>
</table>

## 使用上のメモ

**`Sec-CH-Prefers-Color-Scheme`** ヘッダーを使用すると、サイトはリクエスト時にユーザーの配色設定を取得することができます。これにより、パフォーマンス上の理由から、ユーザーの設定に合わせた CSS をインラインで提供することができるようになります。サーバーが CSS をインラインで記述する場合、レスポンスが具体的な配色設定に合わせて調整されていることを示すために、`Sec-CH-Prefers-Color-Scheme` を指定する {{HTTPHeader("Vary")}} レスポンスヘッダーを含めるのが望ましいでしょう。

このコンテキストにおいてパフォーマンスが重要な考慮事項でない場合は、代わりに {{cssxref("@media/prefers-color-scheme")}} メディアクエリーや {{domxref("Window.matchMedia()")}} API を使用して、ユーザーの配色設定を処理することもできます。

`Sec-CH-Prefers-Color-Scheme` は高エントロピーのヒントであるため、サイト側は適切な {{HTTPHeader("Accept-CH")}} レスポンスヘッダーを送信することで、このヒントの受信を明示的に許可する必要があります。理論上、ユーザーの好みがフィンガープリンティングに使用できる可能性があるため、ユーザーエージェントはユーザーのプライバシーを保護するために、意図的に `Sec-CH-Prefers-Color-Scheme` ヘッダーを省略する場合があります。

## 構文

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### ディレクティブ

- `<preference>`
  - : ユーザーエージェントの設定に応じて、コンテンツを「ダーク」にするか「ライト」にするかを示す文字列：`"light"` または `"dark"`。
    この値は、基盤となるオペレーティングシステムの対応する設定に由来することがあります。

## 例

### Sec-CH-Prefers-Color-Scheme の使用

クライアントはサーバーに対して最初のリクエストを送信します。

```http
GET / HTTP/1.1
Host: example.com
```

サーバーは応答し、{{httpheader("Accept-CH")}} を通じて、`Sec-CH-Prefers-Color-Scheme` をクライアントに指示します。この例では {{httpheader("Critical-CH")}} も使用されており、`Sec-CH-Prefers-Color-Scheme` が[重要クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#重要なクライアントヒント)と考えられていることを示しています。

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> また、`Sec-CH-Prefers-Color-Scheme` を {{httpheader("Vary")}} に指定し、このヘッダーの値に基づいて（URL が同じであっても）レスポンスを別個にキャッシュすべきであることを示しています。
> `Critical-CH` ヘッダーに掲載されているそれぞれのヘッダーは、`Accept-CH` および `Vary` ヘッダーにも存在している必要があります。

クライアントは（以上で `Critical-CH` が指定されているため）リクエストを自動的に再試行し、`Sec-CH-Prefers-Color-Scheme` を通じて、コンテンツの表示でダークモードを推奨するユーザーの環境設定があることをサーバーに指示します。

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

サーバーが `Accept-CH` の対応を終了したことを示すレスポンスが返される場合を除き、クライアントは現在のセッション内のその後のリクエストにこのヘッダーを記載します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュの変更レスポンス](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
- CSS {{cssxref("@media/prefers-color-scheme")}} メディアクエリー
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
