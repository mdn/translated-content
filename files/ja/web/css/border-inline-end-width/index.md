---
title: border-inline-end-width
slug: Web/CSS/border-inline-end-width
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-inline
  - border-inline-end
  - border-inline-end-width
  - border-inline-width
  - recipe:css-property
browser-compat: css.properties.border-inline-end-width
translation_of: Web/CSS/border-inline-end-width
---
{{CSSRef}}

**`border-inline-end-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の終端側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-end-width.html")}}

## 構文

```css
/* <'border-width'> 値 */
border-inline-end-width: 2px;
border-inline-end-width: thick;

/* グローバル値 */
border-inline-end-width: inherit;
border-inline-end-width: initial;
border-inline-end-width: revert;
border-inline-end-width: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-width")}}、{{cssxref("border-block-end-width")}}、{{cssxref("border-inline-start-width")}} が要素の他の境界の幅を定義します。

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{ cssxref("border-width") }} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Applying_a_border_with_vertical_text">テキストが垂直方向の場合の境界の適用</h3>

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

##### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-end-width: 5px;
}
```

#### 結果

{{EmbedLiveSample("Applying_a_border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} のうちの 1 つに対応づけられます
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
