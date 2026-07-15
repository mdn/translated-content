---
title: displaystyle
slug: Web/MathML/Reference/Global_attributes/displaystyle
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`displaystyle`** は[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)で、MathML 要素の [math-style](/ja/docs/Web/CSS/Reference/Properties/math-style) を設定する論理型の属性です。

## 例

この例では、[munder](/ja/docs/Web/MathML/Reference/Element/munder) 要素を使用して、基号 "∑" に添字 "A" を添付しています。デフォルトでは、和記号は親要素から継承された [font-size](/ja/docs/Web/CSS/Reference/Properties/font-size) で表示され、A は変倍された下付き文字として表示されます。明示的に `displaystyle="true"` 属性をつけておくと、和記号はより大きく描画され、"A" は真下付き文字になります。

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<math>
  <munder>
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
  <munder displaystyle="true">
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
</math>
```

{{ EmbedLiveSample("Example", "", 150) }}

## 構文

```html-nolint
<math displaystyle="true">
<math displaystyle="false">
```

### 値

- `true`
  - : 表示スタイルを `normal` に設定します。
- `false`
  - : 表示スタイルを `compact` に設定します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)
- [scriptlevel](/ja/docs/Web/MathML/Reference/Global_attributes/scriptlevel) グローバル属性
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
