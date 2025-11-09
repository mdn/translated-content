---
title: margin-inline
slug: Web/CSS/Reference/Properties/margin-inline
original_slug: Web/CSS/margin-inline
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

The **`margin-inline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、論理的なインライン方向の先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。

{{InteractiveExample("CSS デモ: margin-inline")}}

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline: 10px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("margin-inline-start")}}
- {{cssxref("margin-inline-end")}}

## 構文

```css
/* <length> 値 */
margin-inline: 10px 20px; /* 絶対的な長さ */
margin-inline: 1em 2em; /* テキストの大きさに対する相対値 */
margin-inline: 5% 2%; /* 直近のブロックコンテナーの大きさに対する相対値 */
margin-inline: 10px; /* 先頭と末尾の両方を設定 */
margin-inline: anchor-size(width);
margin-inline: calc(anchor-size(self-block) / 5) auto;

/* キーワード値 */
margin-inline: auto;

/* グローバル値 */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

このプロパティは、 {{CSSxRef("margin-top")}} と {{CSSxRef("margin-bottom")}}、または {{CSSxRef("margin-right")}} と {{CSSxRef("margin-left")}} プロパティに、 {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}} で定義された値にしたがって対応します。

`margin-inline` プロパティは、 1 つまたは 2 つの値を使用して指定します。

- **1 つ**の値が指定された場合は、**先頭と末尾の両方**に同じマージンを適用します。
- **2 つ**の値が指定された場合は、 1 つ目のマージンが**先頭**に、 2 つ目のマージンが**末尾**に指定されます。

### 値

`margin-inline` プロパティは、 {{CSSxRef("margin", "", "#値")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インライン方向の先頭と末尾のマージンの設定

#### CSS

```css live-sample___setting_inline_start_and_end_margins
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-inline: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html live-sample___setting_inline_start_and_end_margins
<div>
  <p>テキストの例</p>
</div>
<div class="verticalExample">
  <p>テキストの例</p>
</div>
```

#### 結果

{{EmbedLiveSample("Setting_inline_start_and_end_margins", 140, 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- 対応する物理的プロパティ: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
