---
title: Vary ヘッダー
short-title: Vary
slug: Web/HTTP/Reference/Headers/Vary
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Vary`** {{Glossary("response header", "レスポンスヘッダー")}} は、そのヘッダーが含まれるレスポンスのコンテンツに影響を与えた、リクエストメッセージの要素（メソッドと URL 以外のもの）を説明するものです。
`Vary` ヘッダーを設定するすることで、`Vary` フィールドに設定されているヘッダーに基づいて、レスポンスが別個にキャッシュされるようにすることができます。
多くの場合、これは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)が使用されている際に、キャッシュキーを作成するために用いられます。

指定された URL に対するすべてのレスポンスでは、{{HTTPStatus("304")}} `Not Modified` レスポンスや「デフォルト」のレスポンスを含め、同じ `Vary` ヘッダー値を使用してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## ディレクティブ

- `*` (ワイルドカード)
  - : リクエストヘッダー以外 の要因が、このレスポンスの生成に影響を与えました。これは、このレスポンスがキャッシュ不可であることを意味します。
- `<header-name>`
  - : このレスポンスの生成に影響を与えた可能性のあるリクエストヘッダー名です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP キャッシュ: Vary](/ja/docs/Web/HTTP/Guides/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) - smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) - fastly.com
