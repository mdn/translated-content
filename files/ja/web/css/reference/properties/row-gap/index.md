---
title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
original_slug: Web/CSS/row-gap
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

**`row-gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のグリッド行の間のすき間（{{glossary("gutters", "溝")}}）の寸法を定義します。

仕様書の初期バージョンでは、このプロパティは `grid-row-gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーは `grid-row-gap` を `row-gap` の別名として受け入れます。

{{InteractiveExample("CSS デモ: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 構文

```css
/* <length> 値 */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> 値 */
row-gap: 10%;

/* グローバル値 */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### 値

- `<length-percentage>`
  - : 行を隔てる溝の幅です。 {{CSSxRef("&lt;percentage&gt;")}} 値は要素の寸法に対する相対値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

#### HTML

```html live-sample___flex_layout
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css live-sample___flex_layout
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### 結果

{{EmbedLiveSample('Flex_layout', "auto", "120px")}}

### グリッドレイアウト

#### HTML

```html live-sample___grid_layout
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css live-sample___grid_layout
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample('Grid_layout', 'auto', 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- グリッドレイアウトガイド: [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#溝)
