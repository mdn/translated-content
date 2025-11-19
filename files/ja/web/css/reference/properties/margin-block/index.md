---
title: margin-block
slug: Web/CSS/Reference/Properties/margin-block
original_slug: Web/CSS/margin-block
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

The **`margin-block`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、論理的なブロックの先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。

{{InteractiveExample("CSS デモ: margin-block")}}

```css interactive-example-choice
margin-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 1rem auto;
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

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("margin-block-start")}}
- {{cssxref("margin-block-end")}}

## 構文

```css
/* <length> 値 */
margin-block: 10px 20px; /* 絶対的な長さ */
margin-block: 1em 2em; /* テキストの大きさに対する相対値 */
margin-block: 5% 2%; /* 直近のブロックコンテナーの大きさに対する相対値 */
margin-block: 10px; /* 先頭と末尾の両方を設定 */
margin-block: anchor-size(inline);
margin-block: calc(anchor-size(width) / 4) 1em;

/* キーワード値 */
margin-block: auto;

/* グローバル値 */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

このプロパティは、 {{CSSxRef("margin-top")}} と {{CSSxRef("margin-bottom")}}、または {{CSSxRef("margin-right")}} と {{CSSxRef("margin-left")}} プロパティに、 {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}} で定義された値にしたがって対応します。

`margin-block` プロパティは、 1 つまたは 2 つの値を使用して指定します。

- **1 つ**の値が指定された場合は、**先頭と末尾の両方**に同じマージンを適用します。
- **2 つ**の値が指定された場合は、 1 つ目のマージンが**先頭**に、 2 つ目のマージンが**末尾**に指定されます。

### 値

`margin-block` プロパティは、 {{CSSxRef("margin", "", "#値")}} プロパティと同じ値を取ります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭と末尾のマージンを設定

#### CSS

```css live-sample___setting_block_start_and_end_margins
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-block: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html live-sample___setting_block_start_and_end_margins
<div>
  <p>テキストの例</p>
</div>
<div class="verticalExample">
  <p>テキストの例</p>
</div>
```

#### 結果

{{EmbedLiveSample("Setting_block_start_and_end_margins", 140, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応する物理的プロパティ: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
