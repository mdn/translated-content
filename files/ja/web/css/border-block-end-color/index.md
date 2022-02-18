---
title: border-block-end-color
slug: Web/CSS/border-block-end-color
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-block
  - border-block-color
  - border-block-end
  - border-block-end-color
  - recipe:css-property
browser-compat: css.properties.border-block-end-color
translation_of: Web/CSS/border-block-end-color
---
{{CSSRef}}

**`border-block-end-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの終端側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-block-end-color.html")}}

## 構文

```css
border-block-end-color: yellow;
border-block-end-color: #F5F6F7;

/* グローバル値 */
border-block-end-color: inherit;
border-block-end-color: initial;
border-block-end-color: revert;
border-block-end-color: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-color")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end-color")}} が要素の他の境界色を定義します。

### 値

- `<'color'>`
  - : 境界の色です。 {{cssxref("color")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_color_with_vertical_text">垂直テキストの境界線の色</h3>

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-end-color: red;
}
```

#### 結果

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}} のうちの一つに対応づけられます
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
