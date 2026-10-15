---
title: Sec-CH-Width ヘッダー
short-title: Sec-CH-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Width
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{SecureContext_header}}{{SeeCompatTable}}

HTTP の **`Sec-CH-Width`** {{Glossary("request header", "リクエストヘッダー")}}は[端末クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)で、 これは、リソースの希望する幅を物理ピクセル単位で示すものであり、画像の内在サイズに相当します。指定されたピクセル値は、その上の最も小さな整数に丸められます（すなわち、切り上げとなります）。

このヒントは、画像のリクエストに対してのみ送信されます。

このヒントにより、クライアントは画面とレイアウトの両方に最適なリソースをリクエストすることができます。具体的には、画面の密度補正後の幅と、レイアウト内での画像の外部サイズの両方を考慮に入れます。

リクエストの時点で希望するリソースの幅が不明である場合、またはリソースが表示幅を持たない場合は、`Sec-CH-Width` ヘッダーフィールドを省略できます。
メッセージ内に `Sec-CH-Width` ヘッダーが複数回現れる場合、最後に現れたものが使用されます。

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
Width: <number>
```

## ディレクティブ

- `<number>`
  - : リソースの幅を物理ピクセル単位で表した値で、最も近い整数に切り上げたものです。

## 例

サーバーは、まず `Sec-CH-Width` を含むレスポンスヘッダー {{HTTPHeader("Accept-CH")}} を送信することで、`Sec-CH-Width` ヘッダーを受信するよう事前に設定する必要があります。

```http
Accept-CH: Sec-CH-Width
```

その後、画像のリクエストが行われるたびに、クライアントは `Sec-CH-Width` ヘッダーを返信する場合があります。

```http
Width: 1920
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 端末およびレスポンシブ画像クライアントヒント
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary) および {{HTTPHeader("Vary")}} ヘッダー
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
