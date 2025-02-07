---
title: prefer_related_applications
slug: Web/Manifest/Reference/prefer_related_applications
original_slug: Web/Manifest/prefer_related_applications
---

{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Boolean</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`prefer_related_applications` メンバーは論理値で、 [`related_applications`](/ja/docs/Web/Manifest/related_applications) で挙がっているアプリケーションがこのウェブアプリケーションよりも推奨されることを示します。 `prefer_related_applications` メンバーが `true` に設定されていた場合、ユーザーエージェントはこのウェブアプリの代わりに関連アプリケーションのうちの一つをインストールするよう勧めるかもしれません。

省略された場合は、 `prefer_related_applications` の既定値は `false` になります。

## 例

```json
"prefer_related_applications": true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
