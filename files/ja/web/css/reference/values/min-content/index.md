---
title: min-content
slug: Web/CSS/Reference/Values/min-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

`min-content` はサイズ指定キーワードで、要素の[内在的な最小サイズ](/ja/docs/Glossary/Intrinsic_Size#minimum_intrinsic_size)を表します。
このキーワードは、要素のコンテンツが、避けられるべきオーバーフローを発生させることなく、可能な限り最小のサイズに縮小されます。
テキストコンテンツにおいて、このキーワードは可能な限り（単語間の空間など）改行を発生させ、要素の幅は最長の単語の幅に制限されます。

{{cssxref("interpolate-size")}} プロパティと {{cssxref("calc-size()")}} 関数を使用して、`min-content` を始点・終点としたアニメーションを有効にすることができます。

## 構文

```css
/* 長さとして使用 */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* グリッドトラックで使用 */
grid-template-columns: 200px 1fr min-content;
```

## 例

### min-content をボックスの大きさに使用

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item with more text in it.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 結果

{{EmbedLiveSample("Using_min-content_for_box_sizing", "100%", 200)}}

### min-content をグリッド列の大きさに使用

#### HTML

```html
<div id="container">
  <div>Item</div>
  <div>Item with more text in it.</div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample("Sizing_grid_columns_with_min-content", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("max-content")}}, {{cssxref("fit-content")}}
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
