---
title: margin-block-start
slug: Web/CSS/Reference/Properties/margin-block-start
original_slug: Web/CSS/margin-block-start
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`margin-block-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の先頭側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。

{{InteractiveExample("CSS デモ: margin-block-start")}}

```css interactive-example-choice
margin-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block-start: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-start: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row">One</div>
    <div class="row transition-all" id="example-element">Two</div>
    <div class="row">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: #ffffff;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## 構文

```css
/* <length> 値 */
margin-block-start: 10px; /* 絶対的な長さ */
margin-block-start: 1em; /* テキストの大きさに対する相対値 */
margin-block-start: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */
margin-block-start: anchor-size(width);
margin-block-start: calc(anchor-size(--myAnchor block, 20px) / 3);

/* キーワード値 */
margin-block-start: auto;

/* グローバル値 */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

これは {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} があります。

### 値

`margin-block-start` プロパティは {{cssxref("margin-left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭のマージンの設定

#### HTML

```html live-sample___setting_block_start_margin
<div>
  <p class="exampleText">テキストの例</p>
</div>
```

#### CSS

```css live-sample___setting_block_start_margin
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("Setting_block_start_margin", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応づけ先の物理的プロパティ: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
