---
title: margin-block-end
slug: Web/CSS/Reference/Properties/margin-block-end
l10n:
  sourceCommit: 12b2bba6348add286377d12f0806d43ddc72bdb7
---

**`margin-block-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の末尾側のマージンを定義し、それが要素の書字方向やテキストの方向に応じて物理的なマージンに対応づけられます。

{{InteractiveExample("CSS デモ: margin-block-end")}}

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block-end: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: auto;
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
  color: white;
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
margin-block-end: 10px; /* 絶対的な長さ */
margin-block-end: 1em; /* テキストの大きさに対する相対値 */
margin-block-end: 5%; /* 直近のブロックコンテナーの大きさに対する相対値 */
margin-block-end: anchor-size(inline);
margin-block-end: calc(anchor-size(--my-anchor block, 20px) / 4);

/* キーワード値 */
margin-block-end: auto;

/* グローバル値 */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

これは {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}} の何れかのプロパティに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

関連プロパティとして、要素の他のマージンを定義する {{cssxref("margin-block-start")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} があります。

### 値

`margin-block-end` プロパティは {{cssxref("margin-top")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の末尾のマージンを設定

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
  writing-mode: vertical-rl;
  margin-block-end: 20px;
  background-color: #c8c800;
}
```

#### 結果

{{EmbedLiveSample("ブロック方向の末尾のマージンを設定", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応づけ先の物理的なプロパティ: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
