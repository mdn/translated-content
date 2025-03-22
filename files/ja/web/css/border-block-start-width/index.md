---
title: border-block-start-width
slug: Web/CSS/border-block-start-width
---

{{CSSRef}}

**`border-block-start-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの先頭側の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS Demo: border-block-start-width")}}

```css interactive-example-choice
border-block-start-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-width: 4px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-width: 4px;
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
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 構文

```css
/* <'border-width'> 値 */
border-block-start-width: 5px;
border-block-start-width: thick;

/* グローバル値 */
border-block-start-width: inherit;
border-block-start-width: initial;
border-block-start-width: revert;
border-block-start-width: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-end-width")}} が要素の他の境界の幅を定義します。

{{cssinfo}}

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_width_with_vertical_text">縦書きテキストの境界の太さ</h3>

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
  border-block-start-width: 5px;
}
```

#### 結果

{{EmbedLiveSample("Border_width_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} のうちの1つに対応づけられます
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
