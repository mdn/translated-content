---
title: short_name
slug: Web/Manifest/short_name
tags:
  - マニフェスト
  - ウェブ
  - short_name
browser-compat: html.manifest.short_name
translation_of: Web/Manifest/short_name
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

_`short_name`_ メンバーは文字列で、 [`name`](/ja/docs/Web/Manifest/name) を表示するのに十分なスペースがない場合 (例えば、携帯電話のホーム画面にあるアイコンのラベルなど) に、ユーザーに表示するウェブアプリケーションの名前を表します。 `short_name` は書字方向に対応しており、 [`dir`](/ja/docs/Web/Manifest/dir) および [`lang`](/ja/docs/Web/Manifest/lang) の各マニフェストメンバーの値に基づいて左書きで表示されたり右書きで表示されたりします。

## 例

単純な `short_name` を左書き言語で:

```json
"name": "Awesome application",
"short_name": "Awesome app"
```

アラビア語で右書きの `short_name`:

```json
"dir": "rtl",
"lang": "ar",
"name": "تطبيق رائع",
"short_name": "رائع"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
