---
title: Content-DPR ヘッダー
short-title: Content-DPR
slug: Web/HTTP/Reference/Headers/Content-DPR
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

HTTP の **`Content-DPR`** {{Glossary("Response header", "レスポンスヘッダー")}}は、画面の {{HTTPHeader("DPR")}} クライアントヒントを使用して画像リソースが選択されたリクエストにおいて、画像の端末対ピクセル比 (DPR) を確認するために使用されます。

> [!NOTE]
> `Content-DPR` ヘッダーは、[draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) のクライアントヒント仕様から除去されました。
> [レスポンシブ画像クライアントヒント](https://wicg.github.io/responsive-image-client-hints/)仕様では、EXIF メタデータに内在する解像度やサイズを指定することで、このヘッダーを置き換えることが提案されています。

`DPR` クライアントヒントを使用して画像を選択する場合、サーバーはレスポンスに `Content-DPR` を指定しなければなりません。
`Content-DPR` の値がリクエスト内の {{HTTPHeader("DPR")}} の値と異なる場合（つまり、画像の DPR が画面の DPR と一致しない場合）、クライアントは画像の内在サイズを判定し、画像を変倍する際に `Content-DPR` を使用しなければなりません。

メッセージ内に `Content-DPR` ヘッダーが複数の回現れた場合、最後に現れたものが使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}},
        <a href="/ja/docs/Web/HTTP/Guides/Client_hints">クライアントヒント</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止ヘッダー名")}}</th>
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
Content-DPR: <number>
```

## ディレクティブ

- `<number>`
  - : 以下の式に基づいて計算される画像デバイスのピクセル比です。
    Content-DPR = 選択された画像リソースのサイズ / (幅 / _DPR_)

## 例

[`DPR`](/ja/docs/Web/HTTP/Reference/Headers/DPR#examples) ヘッダーの例を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 端末およびレスポンシブ画像のクライアントヒント
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}}
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) - developer.chrome.com (2020)
