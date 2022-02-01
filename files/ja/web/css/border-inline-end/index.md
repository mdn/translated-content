---
title: border-inline-end
slug: Web/CSS/border-inline-end
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-inline
  - border-inline-end
  - border-inline-end-color
  - border-inline-end-style
  - border-inline-end-width
  - recipe:css-shorthand-property
browser-compat: css.properties.border-inline-end
translation_of: Web/CSS/border-inline-end
---
{{CSSRef}}

**`border-inline-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、個々の論理的なインライン方向の末尾側境界のプロパティ値を、スタイルシート内の単一の場所で設定するための[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)です。

{{EmbedInteractiveExample("pages/css/border-inline-end.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-inline-end-color`](/ja/docs/Web/CSS/border-inline-end-color)
- [`border-inline-end-style`](/ja/docs/Web/CSS/border-inline-end-style)
- [`border-inline-end-width`](/ja/docs/Web/CSS/border-inline-end-width)

## 構文

```css
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;

/* グローバル値 */
border-inline-end: inherit;
border-inline-end: initial;
border-inline-end: revert;
border-inline-end: unset;
```

`border-inline-end` が対応づけられる物理的な境界は、書字方向やテキストの向きによって決まります。これは {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

関連するプロパティとしては、 {{cssxref("border-block-start")}}、{{cssxref("border-block-end")}}、{{cssxref("border-inline-start")}} が要素の他の境界を定義します。

### 値

`border-inline-end` は以下の値のうちの1つ以上を任意の順序で指定します。

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

<h2 id="Examples">例</h2>

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-inline-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} のうちの 1 つに対応づけられます。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
