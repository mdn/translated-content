---
title: border-inline-width
slug: Web/CSS/border-inline-width
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-inline-width
translation_of: Web/CSS/border-inline-width
---
{{CSSRef}}

**`border-inline-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}} と {{cssxref("border-bottom-width")}}、または {{cssxref("border-left-width")}} と {{cssxref("border-right-width")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{EmbedInteractiveExample("pages/css/border-inline-width.html")}}

他の方向の境界の幅については {{cssxref("border-block-width")}} で設定することができ、これは {{cssxref("border-block-start-width")}} および {{cssxref("border-block-end-width")}} を設定することができます。

## 構文

```css
/* <'border-width'> 値 */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;

/* グローバル値 */
border-inline-width: inherit;
border-inline-width: initial;
border-inline-width: revert;
border-inline-width: unset;
```

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。

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
  border-inline-width: 5px 10px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-width")}}、{{cssxref("border-right-width")}}、{{cssxref("border-bottom-width")}}、{{cssxref("border-left-width")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
