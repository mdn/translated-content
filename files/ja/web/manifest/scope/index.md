---
title: scope
slug: Web/Manifest/scope
tags:
  - マニフェスト
  - ウェブ
  - scope
browser-compat: html.manifest.scope
translation_of: Web/Manifest/scope
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

_`scope`_ メンバーは文字列型で、このウェブアプリケーションのアプリケーションコンテキストのナビゲーションスコープを定義します。これは、マニフェストが適用されている時に見ることができるウェブページを制限するものです。ユーザーがスコープ外へ移動した場合は、ブラウザータブやウィンドウの中の通常のウェブページに戻ります。

`scope` が相対 URL である場合、ベース URL はマニフェストの URL になります。

## 例

スコープが相対 URL の場合は、マニフェストの URL がベース URL として使用されます。

```json
"scope": "/app/"
```

以下のスコープは、ナビゲーションを現在のサイトに制限します。

```json
"scope": "https://example.com/"
```

最後に、以下の例はナビゲーションを現在のサイトのサブディレクトリーに制限します。

```json
"scope": "https://example.com/subdirectory/"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
