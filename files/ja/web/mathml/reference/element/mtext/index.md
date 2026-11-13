---
title: <mtext>
slug: Web/MathML/Reference/Element/mtext
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

**`<mtext>`** は [MathML](/ja/docs/Web/MathML) の要素で、コメントや注釈などの表記の意味を*もたない*任意のテキストをレンダリングするために使用されます。

表記の意味*で*テキストを表示するには、 {{ MathMLElement("mi") }} や {{ MathMLElement("mo") }} を代わりに使用してください。

## 属性

この属性は[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)を受け入れます。

## 例

```html
<math display="block">
  <mtext>ピタゴラスの定理</mtext>
</math>

<math display="block">
  <mtext>/* ここにコメント */</mtext>
</math>
```

{{ EmbedLiveSample('mtext_example', 700, 200, "", "") }}

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
