---
title: border-block-end-style
slug: Web/CSS/border-block-end-style
---

{{CSSRef}}

**`border-block-end-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロックの終端側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS Demo: border-block-end-style")}}

```css interactive-example-choice
border-block-end-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end-style: groove;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-style: dashed;
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
/* <'border-style'> 値 */
border-block-end-style: dashed;
border-block-end-style: dotted;
border-block-end-style: groove;

/* グローバル値 */
border-block-end-style: inherit;
border-block-end-style: initial;
border-block-end-style: revert;
border-block-end-style: unset;
```

関連するプロパティとしては、 {{cssxref("border-block-start-style")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-end-style")}} が要素の他の境界のスタイルを定義します。

### 値

- `<'border-style'>`
  - : 境界のスタイルです。 {{cssxref("border-style")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Dashed_border_with_vertical_text">縦書きテキストの破線の境界</h3>

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
  border: 5px solid blue;
  border-block-end-style: dashed;
}
```

#### 結果

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} のうちの 1 つに対応づけられます
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
