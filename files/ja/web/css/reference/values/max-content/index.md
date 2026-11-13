---
title: max-content
slug: Web/CSS/Reference/Values/max-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

`max-content` はサイズ指定キーワードで、コンテンツの[内在的な最大サイズ](/ja/docs/Glossary/Intrinsic_Size#maximum_intrinsic_size)を表します。
キーワードは、ソフトラップなしでコンテンツを表示させるために必要な最大サイズまで要素を拡大します。
テキストコンテンツの場合、これはオーバーフローが発生しても、コンテンツがまったく折り返されないことを意味します。

{{cssxref("interpolate-size")}} プロパティと {{cssxref("calc-size()")}} 関数を使用して、`max-content` を始点・終点としたアニメーションを有効にすることができます。

## 構文

```css
/* 長さとして使用 */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* グリッドトラックで使用 */
grid-template-columns: 200px 1fr max-content;
```

## 例

### max-content をボックスの大きさに使用

#### HTML

```html
<div id="container">
  <div class="item">Item</div>
  <div class="item">
    Item with more text in it which will overflow the fixed width box.
  </div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 結果

{{EmbedLiveSample("Using_max-content_for_box_sizing", "100%", 200)}}

### max-content をグリッド列の大きさに使用

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
  grid-template-columns: max-content max-content 1fr;
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

{{EmbedLiveSample("Sizing_grid_columns_with_max-content", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS ボックスサイズ](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
