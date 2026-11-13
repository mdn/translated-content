---
title: Save-Data ヘッダー
short-title: Save-Data
slug: Web/HTTP/Reference/Headers/Save-Data
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}

HTTP の **`Save-Data`** {{Glossary("request header", "リクエストヘッダー")}}は、クライアントのデータ使用量の縮小に関する環境設定を示す[ネットワーククライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#network_client_hints)です。
この理由としては、転送コストが高いことや、接続速度が遅いことなどが考えられます。

`Save-Data` は[低エントロピーヒント](/ja/docs/Web/HTTP/Guides/Client_hints#低エントロピーヒント)であるため、サーバーが {{HTTPHeader("Accept-CH")}} レスポンスヘッダーを使用してリクエストしていなくても、クライアント側から送信されることがあります。
さらに、{{HTTPHeader("Downlink")}} や {{HTTPHeader("RTT")}} など、ネットワークの性能を示すそれ以外にもクライアントヒントの値があり、それらにかかわらず、クライアントに送信されるデータ量を縮小するためにこれを使用しましょう。

値が `On` の場合、ユーザーがクライアント側でデータ使用量縮小モードを明示的に有効にしたことを示します。
この情報がオリジンに伝達されると、オリジンは、サイズの小さい画像や動画リソース、異なるマークアップやスタイル設定、ポーリングや自動更新の無効化といった具合に、ダウンロードするデータ量を縮小するための代替コンテンツを配信することができます。

> [!NOTE]
> HTTP/2 サーバープッシュ ({{RFC("7540", "Server Push", "8.2")}}) を無効にすると、データのダウンロードを縮小できることがあります。
> なお、この機能は、ほとんどの主要なブラウザエンジンにおいて、デフォルトで対応されなくなりました。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("request header", "リクエストヘッダー")}},
        <a href="/ja/docs/Web/HTTP/Guides/Client_hints">クライアントヒント</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Save-Data: <sd-token>
```

## ディレクティブ

- `<sd-token>`
  - : クライアントがデータ使用量縮小モードを有効にするかどうかを示す値です。
    `on` は「はい」を表し、`off`（デフォルト値）は「いいえ」を表します。

## 例

### `Save-Data: on` の使用

次のメッセージは、クライアントがデータ縮小モードを有効にしていることを示す `Save-Data` ヘッダーを付けてリソースをリクエストしています。

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

サーバーは `200` レスポンスを返し、{{HTTPHeader("Vary")}} ヘッダーは、レスポンスの生成に `Save-Data` が使用された可能性があることを示しています。キャッシュは、レスポンスを区別するためにこのヘッダーを認識しておく必要があります。

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### `Save-Data` の省略

この場合、クライアントは `Save-Data` ヘッダーを指定せずに、同じリソースをリクエストします。

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

サーバーのレスポンスには、コンテンツの完全版が含まれています。
{{HTTPHeader("Vary")}} ヘッダーにより、`Save-Data` ヘッダーの値に基づいて、レスポンスが別個にキャッシュされるようになります。
これにより、`Save-Data` ヘッダーができなくなった場合（例えば、モバイル通信から Wi-Fi に切り替えた後など）、キャッシュから低品質な画像がユーザーに配信されることを確実に防ぐことができます。

```http
HTTP/1.1 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS `@media` 特性 {{cssxref("@media/prefers-reduced-data")}} {{experimental_inline}}
- {{HTTPHeader("Vary")}} ヘッダー: `Save-Data` の値に応じて配信されるコンテンツが異なることを示します（[HTTP キャッシング：Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) を参照）
- {{domxref("NetworkInformation.saveData")}}
- [Help Your Users `Save-Data`](https://css-tricks.com/help-users-save-data/) - css-tricks.com
- [Delivering Fast and Light Applications with Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data) - web.dev
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
