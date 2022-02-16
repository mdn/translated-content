---
title: border-inline-end-color
slug: Web/CSS/border-inline-end-color
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-inline
  - border-inline-color
  - border-inline-end
  - border-inline-end-color
  - recipe:css-property
browser-compat: css.properties.border-inline-end-color
translation_of: Web/CSS/border-inline-end-color
---
{{CSSRef}}

**`border-inline-end-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの終端側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-end-color.html")}}

## 構文

```css
border-inline-end-color: rebeccapurple;
border-inline-end-color: #663399;

/* グローバル値 */
border-inline-end-color: inherit;
border-inline-end-color: initial;
border-inline-end-color: revert;
border-inline-end-color: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-color")}}、{{cssxref("border-block-end-color")}}、{{cssxref("border-inline-start-color")}} が要素の他の境界色を定義します。

{{cssinfo}}

### 値

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-end-color: red;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}} のうちの 1 つに対応づけられます
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
