---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
tags:
  - CSS
  - CSS フレックスボックス
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
  - row-gap
browser-compat: css.properties.row-gap
translation_of: Web/CSS/row-gap
---
{{CSSRef}}

**`row-gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素のグリッド行の間のすき間 ({{glossary("gutters", "溝")}}) の寸法を定義します。

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

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
row-gap: unset;
```

### 値

- `<length-percentage>`
  - : 行を隔てる溝の幅です。 {{CSSxRef("&lt;percentage&gt;")}} 値は要素の寸法に対する相対値です。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

### Flex layout

#### HTML

```html
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

```css
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

### Grid layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
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

{{Specifications("css.properties.row-gap.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{CSSxRef("column-gap")}}, {{CSSxRef("gap")}}
- グリッドレイアウトガイド: [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)
