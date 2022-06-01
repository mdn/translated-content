---
title: border-inline-color
slug: Web/CSS/border-inline-color
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-inline-color
translation_of: Web/CSS/border-inline-color
---
{{CSSRef}}

**`border-inline-start-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}} と {{cssxref("border-bottom-color")}}、または {{cssxref("border-right-color")}} と {{cssxref("border-left-color")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-color.html")}}

他の方向の境界色については、 {{cssxref("border-block-color")}} によって {{cssxref("border-block-start-color")}} と {{cssxref("border-block-end-color")}} を設定することができます。

## 構文

```css
border-inline-color: yellow;
border-inline-color: #F5F6F7;

/* グローバル値 */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: unset;
```

### 値

- `<'color'>`
  - : 境界の色です。 {{cssxref("color")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_color_with_vertical_text">テキストが垂直方向の場合の境界色</h3>

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
  border-inline-color: red;
}
```

#### 結果

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}+ bug 1297097
