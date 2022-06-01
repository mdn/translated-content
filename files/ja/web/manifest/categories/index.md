---
title: categories
slug: Web/Manifest/categories
tags:
  - マニフェスト
  - ウェブ
  - categories
browser-compat: html.manifest.categories
translation_of: Web/Manifest/categories
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>String</code> の配列 (<code>Array</code>)</td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

_`categories`_ メンバーは、アプリケーションが属すると思われるカテゴリーの名前を定義する文字列の配列です。標準化された値の一覧はありませんが、 W3C は[既知のカテゴリーの一覧](https://github.com/w3c/manifest/wiki/Categories)を保守しています。

> **Note:** `categories` は、ウェブアプリケーションの一覧を収集したり格納したりするヒントとしてのみ使用されます。検索エンジンやメタキーワードと同様に、カタログを無視して収集や格納を行うことができます。

> **Note:** `categories` の値は、格納したり収集したりする処理の前に小文字化されますので、 "News" と "news" は同じ値として扱われます。そもそも、開発者は小文字を使うことが推奨されています。

## 例

```json
"categories": ["books", "education", "medical"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
