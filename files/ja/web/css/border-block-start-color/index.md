---
title: border-block-start-color
slug: Web/CSS/border-block-start-color
---

{{CSSRef}}

**`border-block-start-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS Demo: border-block-start-color")}}

```css interactive-example-choice
border-block-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-color: rgb(170, 50, 220, 0.6);
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: hsl(60, 90%, 50%, 0.8);
writing-mode: vertical-lr;
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
border-block-start-color: blue;
border-block-start-color: #4c5d21;

/* グローバル値 */
border-block-start-color: inherit;
border-block-start-color: initial;
border-block-start-color: revert;
border-block-start-color: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end-color")}} が要素の他の境界色を定義します。

### 値

- `<'color'>`
  - : {{cssxref("border-color")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_color_with_vertical_text">縦書きテキストの境界線の色</h3>

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
  border-block-start-color: red;
}
```

#### 例

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}} のうちの一つに対応づけられます
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
