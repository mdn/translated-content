---
title: border-block-end
slug: Web/CSS/border-block-end
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-block
  - border-block-end-color
  - border-block-end-style
  - border-block-end-width
  - recipe:css-shorthand-property
browser-compat: css.properties.border-block-end
translation_of: Web/CSS/border-block-end
---
{{CSSRef}}

**`border-block-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、個々の論理的なブロック方向の末尾側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)です。

{{EmbedInteractiveExample("pages/css/border-block-end.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-block-end-color`](/ja/docs/Web/CSS/border-block-end-color)
- [`border-block-end-style`](/ja/docs/Web/CSS/border-block-end-style)
- [`border-block-end-width`](/ja/docs/Web/CSS/border-block-end-width)

## 構文

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* グローバル値 */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: unset;
```

`border-block-end` は 1 つ以上の {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}} の値の組み合わせを使用することができます。対応づけられる物理的な境界は、書字方向やテキストの向きによって決まります。これは {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

関連するプロパティとしては、 {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-end")}} が要素の他の境界を定義します。

### 値

`border-block-end` は以下の値のうちの 1 つ以上を任意の順序で指定します。

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。
- `<'border-style'>`
  - : 境界線のスタイルです。 {{cssxref("border-style")}} を参照してください。
- `<'color'>`
  - : 境界の色です。 {{cssxref("color")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_with_vertical_text">縦書きテキストの境界</h3>

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
  border-block-end: 5px dashed blue;
}
```

#### 結果

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}} のうちの一つに対応づけられます。
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
