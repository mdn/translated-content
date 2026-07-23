---
title: <mn>
slug: Web/MathML/Reference/Element/mn
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<mn>`** は [MathML](/ja/docs/Web/MathML) の要素で、通常は区切り記号（ピリオドかカンマ）をもつ可能性がある数字列である、**数値**リテラルを表します。ただし、 "eleven" のように、実際には数値である任意のテキストを保持することも可能です。

## 属性

この要素は[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)を受け入れます。

## 例

```html
<math display="block">
  <mn>0</mn>
</math>

<math display="block">
  <mn>1.337</mn>
</math>

<math display="block">
  <mn>twelve</mn>
</math>

<math display="block">
  <mn>XVI</mn>
</math>

<math display="block">
  <mn>2e10</mn>
</math>
```

{{ EmbedLiveSample('mi_example', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
