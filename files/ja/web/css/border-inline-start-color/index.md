---
title: border-inline-start-color
slug: Web/CSS/border-inline-start-color
---

{{CSSRef}}

**`border-inline-start-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS Demo: border-inline-start-color")}}

```css interactive-example-choice
border-inline-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-color: rgb(170, 50, 220, 0.6);
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 構文

```css
border-inline-start-color: red;
border-inline-start-color: #ee4141;

/* グローバル値 */
border-inline-start-color: inherit;
border-inline-start-color: initial;
border-inline-start-color: revert;
border-inline-start-color: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-color")}}、{{cssxref("border-block-end-color")}}、{{cssxref("border-inline-end-color")}} が要素の他の境界色を定義します。

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
  border-inline-start-color: red;
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
