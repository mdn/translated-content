---
title: border-inline-start-width
slug: Web/CSS/border-inline-start-width
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - border-inline
  - border-inline-start
  - border-inline-start-width
  - border-inline-width
  - recipe:css-property
browser-compat: css.properties.border-inline-start-width
translation_of: Web/CSS/border-inline-start-width
---
{{CSSRef}}

**`border-inline-start-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の先頭側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-start-width.html")}}

## 構文

```css
/* <'border-width'> 値 */
border-inline-start-width: 5px;
border-inline-start-width: thick;

/* グローバル値 */
border-inline-start-width: inherit;
border-inline-start-width: initial;
border-inline-start-width: revert;
border-inline-start-width: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-width")}}、{{cssxref("border-block-end-width")}}、{{cssxref("border-inline-end-width")}} が要素の他の境界の幅を定義します。

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{ cssxref("border-width") }} を参照してください。

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
  border: 1px solid blue;
  border-inline-start-width: 5px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} のうちの 1 つに対応づけられます
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
