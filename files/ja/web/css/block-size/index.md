---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}

**`block-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、書字方向に応じた要素ブロックの水平または垂直方向の寸法を定義します。これは {{cssxref("width")}} または {{cssxref("height")}} プロパティに相当し、 {{cssxref("writing-mode")}} の値によって変わります。

書字方向が垂直方向であった場合、 `block-size` の値は要素の幅に対応し、水平方向であった場合は要素の高さに対応します。関連プロパティの {{cssxref("inline-size")}} が要素のもう一方の寸法を定義します。

{{InteractiveExample("CSS Demo: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

## 構文

```css
/* <length> 値 */
block-size: 300px;
block-size: 25em;

/* <percentage> 値 */
block-size: 75%;

/* キーワード値 */
block-size: max-content;
block-size: min-content;
block-size: fit-content(20em);
block-size: auto;

/* グローバル値 */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: unset;
```

### 値

`block-size` プロパティは、{{cssxref("width")}} や {{cssxref("height")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Block_size_with_vertical_text">縦書き時のブロック方向の寸法</h3>

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### 結果

{{EmbedLiveSample("Block_size_with_vertical_text")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応付けされる物理的プロパティ: {{cssxref("width")}} および {{cssxref("height")}}
- {{cssxref("writing-mode")}}
