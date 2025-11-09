---
title: padding-block-start
slug: Web/CSS/Reference/Properties/padding-block-start
original_slug: Web/CSS/padding-block-start
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`padding-block-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のブロック方向の論理的な先頭側のパディングを定義し、それが要素の書字方向やテキストの方向に応じて物理的なパディングに対応づけられます。

{{InteractiveExample("CSS デモ: padding-block-start")}}

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## 構文

```css
/* <length> 値 */
padding-block-start: 10px; /* 絶対的な長さ */
padding-block-start: 1em; /* テキストの大きさに対する相対値 */

/* <percentage> 値 */
padding-block-start: 5%; /* ブロックコンテナーの幅に対する割合のパディング */

/* グローバル値 */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で指定します。負の値は指定できません。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の[インラインサイズ](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 解説

`padding-block-start` プロパティは、 {{cssxref("padding-top")}} などの物理的なパディングプロパティと同じ値を取ります。ただし、 {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top`, {{cssxref("padding-bottom")}} のいずれかと同等になります。これは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に設定された値によって決まります。

関連プロパティとして、要素の他のパディング値を定義する {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストにおけるブロック方向の先頭のパディングの設定

#### HTML

```html
<div>
  <p class="exampleText">テキストの例</p>
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
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストにおけるブロック方向の先頭のパディングの設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応づけ先の物理的なプロパティ: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
