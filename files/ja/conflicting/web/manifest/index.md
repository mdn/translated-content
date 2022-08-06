---
title: dir
slug: conflicting/Web/Manifest
tags:
  - マニフェスト
  - ウェブ
  - dir
translation_of: Web/Manifest/dir
original_slug: Web/Manifest/dir
browser-compat: html.manifest.dir
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td>`String`</td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

マニフェストの書字方向に対応しているメンバーを表示するための基本的な方向です。 [`lang`](/ja/docs/Web/Manifest/lang) メンバーと共に、右書きの言語を正しく表示するのに役立ちます。

`dir` メンバーには、次の値のうちの一つを設定することができます。

- `auto` — ユーザーエージェントが判断した書字方向
- `ltr` — 左書き (left to right)
- `rtl` — 右書き (right to left)

*書字方向に対応しているメンバー*は以下の通りです。

- [`name`](/ja/docs/Web/Manifest/name)
- [`short_name`](/ja/docs/Web/Manifest/short_name)
- [`description`](/ja/docs/Web/Manifest/description)

> **Note:** この値が省略されたり `auto` に設定されていたりした場合は、ブラウザーは [Unicode 双方向アルゴリズム](/ja/docs/Web/Guide/Unicode_Bidirectional_Text_Algorithm)を使用してテキストの書字方向に最適な推測を行います。

## 例

```json
"dir": "rtl",
"lang": "ar",
"short_name": "!أنا من التطبيق"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
