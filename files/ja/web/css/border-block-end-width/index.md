---
title: border-block-end-width
slug: Web/CSS/border-block-end-width
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-block
  - border-block-end
  - border-block-end-width
  - border-block-width
  - recipe:css-property
browser-compat: css.properties.border-block-end-width
translation_of: Web/CSS/border-block-end-width
---
{{CSSRef}}

**`border-block-end-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの終端側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-block-end-width.html")}}

## 構文

```css
/* <'border-width'> 値 */
border-block-end-width: 5px;
border-block-end-width: thick;

/* グローバル値 */
border-block-end-width: inherit;
border-block-end-width: initial;
border-block-end-width: revert;
border-block-end-width: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-width")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-end-width")}} が要素の他の境界の幅を定義します。

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_width_with_vertical_text">縦書きテキストの境界線の幅</h3>

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
  border: 1px solid blue;
  border-block-end-width: 5px;
}
```

#### 結果

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} のうちの 1 つに対応づけられます
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
