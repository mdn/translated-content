---
title: border-block-width
slug: Web/CSS/border-block-width
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-block-width
translation_of: Web/CSS/border-block-width
---
{{CSSRef}}

**`border-block-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}} と {{cssxref("border-bottom-width")}}、または {{cssxref("border-left-width")}} と {{cssxref("border-right-width")}} のどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-block-width.html")}}

他の方向の境界の幅は {{cssxref("border-inline-width")}} で設定でき、これは {{cssxref("border-inline-start-width")}} および {{cssxref("border-inline-end-width")}} を設定します。

## 構文

```css
/* <'border-width'> 値 */
border-block-width: 5px;
border-block-width: thick;

/* グローバル値 */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: unset;
```

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_width_with_vertical_text">縦書きテキストの境界の幅</h3>

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
  border-block-width: 5px;
}
```

#### 結果

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
