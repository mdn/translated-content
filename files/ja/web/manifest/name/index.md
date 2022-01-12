---
title: name
slug: Web/Manifest/name
tags:
  - マニフェスト
  - ウェブ
  - name
browser-compat: html.manifest.name
translation_of: Web/Manifest/name
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
      <td>はい</td>
    </tr>
  </tbody>
</table>

_`name`_ メンバーは文字列で、ウェブアプリケーションの名前を通常ユーザーに表示される形 (例えば、他のアプリケーションとのリストの中や、アイコンのラベルなど) で表します。 `name` は書字方向に対応しており、 [`dir`](/ja/docs/Web/Manifest/dir) および [`lang`](/ja/docs/Web/Manifest/lang) の各マニフェストメンバーの値に基づいて左書きで表示されたり右書きで表示されたりします。

## 例

単純な `name` を左書き言語で:

```json
"name": "Awesome application"
```

アラビア語で右書きの `name`:

```json
"dir": "rtl",
"lang": "ar",
"name": "!أنا من التطبيق"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
