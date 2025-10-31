---
title: border-block-style
slug: Web/CSS/Reference/Properties/border-block-style
original_slug: Web/CSS/border-block-style
---

**`border-block-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応づけられます。これは {{cssxref("border-top-style")}} と {{cssxref("border-bottom-style")}}、または {{cssxref("border-left-style")}} と {{cssxref("border-right-style")}} のどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS デモ: border-block-style")}}

```css interactive-example-choice
border-block-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-style: groove;
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

他の方向の境界については、 {{cssxref("border-inline-style")}} によって、 {{cssxref("border-inline-start-style")}} と {{cssxref("border-inline-end-style")}} の両方を設定することができます。

## 構文

```css
/* <'border-style'> 値 */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* グローバル値 */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: unset;
```

### 値

- `<'border-style'>`
  - : 境界のスタイルです。 {{cssxref("border-style")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Dashed_border_with_vertical_text">縦書きでの破線の境界</h3>

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
  border-block-style: dashed;
}
```

#### 結果

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
