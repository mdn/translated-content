---
title: <mi>
slug: Web/MathML/Reference/Element/mi
original_slug: Web/MathML/Element/mi
l10n:
  sourceCommit: 0fb5d5d5579d459f58ab52d0e6e94fc4634a9fe0
---

{{MathMLRef}}

**`<mi>`** は [MathML](/ja/docs/Web/MathML) の要素で、内容が関数名、変数、記号定数などの **識別子** としてレンダリングされることを示します。また、用語をマークアップするために、任意のテキストを保持することもできます。

## 属性

この要素は[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)を受け入れます。 単一の文字を含む `<mi>` 要素では、 [`mathvariant`](/ja/docs/Web/MathML/Reference/Element/mi#mathvariant) 属性の既定値が `italic` になります。

## 例

```html
<math display="block">
  <!-- Multiple characters, default mathvariant is "normal". -->
  <mi>sin</mi>
</math>

<math display="block">
  <!-- Single character, default mathvariant is "italic". -->
  <mi>y</mi>
</math>

<math display="block">
  <!-- Overriding default mathvariant. -->
  <mi mathvariant="normal">F</mi>
</math>
```

{{ EmbedLiveSample('mi_example', 700, 200, "", "") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
