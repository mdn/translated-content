---
title: border-inline
slug: Web/CSS/border-inline
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.border-inline
translation_of: Web/CSS/border-inline
---
{{CSSRef}}

**`border-inline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、論理的なインライン方向のそれぞれの境界プロパティをスタイルシートの 1 ヶ所で設定する[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)です。

{{EmbedInteractiveExample("pages/css/border-inline.html")}}

`border-inline` の割り当て先の物理的な境界は、要素の書字方向によって決まります。 {{cssxref("border-top")}} と {{cssxref("border-bottom")}}、または {{cssxref("border-right")}} と {{cssxref("border-left")}} のどちらかの組み合わせに対して、 {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} に設定された値に応じて対応づけられます。

他の方向の境界については、 {{cssxref("border-block")}} によって、 {{cssxref("border-block-start")}} と {{cssxref("border-block-end")}} の両方を設定することができます。

## 構成要素のプロパティ

このプロパティは下記の CSS プロパティの一括指定です。

- [`border-inline-color`](/ja/docs/Web/CSS/border-inline-color)
- [`border-inline-style`](/ja/docs/Web/CSS/border-inline-style)
- [`border-inline-width`](/ja/docs/Web/CSS/border-inline-width)

## 構文

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* グローバル値 */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: unset;
```

### 値

`border-inline` は以下の値のうちの1つ以上を任意の順序で指定します。

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。
- `<'border-style'>`
  - : 境界線のスタイルです。 {{cssxref("border-style")}} を参照してください。
- `<'color'>`
  - : 境界の色です。 {{cssxref("color")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_with_vertical_text">テキストが垂直の場合の境界</h3>

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline: 5px dashed blue;
}
```

#### 結果

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは物理的な境界プロパティである {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} の何れかに対応づけられます。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
