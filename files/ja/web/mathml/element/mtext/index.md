---
title: <mtext>
slug: Web/MathML/Element/mtext
l10n:
  sourceCommit: 0fb5d5d5579d459f58ab52d0e6e94fc4634a9fe0
---

{{MathMLRef}}

**`<mtext>`** は [MathML](/ja/docs/Web/MathML) の要素で、コメントや注釈などの表記の意味を*もたない*任意のテキストをレンダリングするために使用されます。

表記の意味*で*テキストを表示するには、 {{ MathMLElement("mi") }} や {{ MathMLElement("mo") }} を代わりに使用してください。

## 属性

この属性は[グローバル MathML 属性](/ja/docs/Web/MathML/Global_attributes)を受け入れます。

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

## 仕様書

{{Specifications}}

## ブラウザー互換性

{{Compat}}
