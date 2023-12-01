---
title: gap (grid-gap)
slug: Web/CSS/gap
---

{{CSSRef}}

**`gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、行や列の間のすき間 ({{glossary("gutters", "溝")}}) を定義します。これは {{CSSxRef("row-gap")}} および {{CSSxRef("column-gap")}} の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)です。

{{EmbedInteractiveExample("pages/css/gap.html")}}

## 構文

```css
/* 単一の <length> 値 */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* 単一の <percentage> 値 */
gap: 16%;
gap: 100%;

/* 2 つの <length> 値 */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* 1 つまたは 2 つの <percentage> 値 */
gap: 16% 100%;
gap: 21px 82%;

/* calc() 値 */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* グローバル値 */
gap: inherit;
gap: initial;
gap: revert;
gap: unset;
```

このプロパティは `<'row-gap'>` の値と、任意で `<'column-gap'>` の値を続けて指定します。 `<'column-gap'>` が省略された場合、 `<'row-gap'>` と同じ値が設定されます。

`<'row-gap'>` および `<'column-gap'>` はそれぞれ、 `<length>` または `<percentage>` で指定します。

### 値

- {{CSSxRef("&lt;length&gt;")}}
  - : グリッド線を隔てる溝の幅です。
- {{CSSxRef("&lt;percentage&gt;")}}
  - : 要素の寸法に対する、グリッド線を隔てる溝の幅です。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

### フレックスレイアウト

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
  gap: 20px 5px;
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

{{EmbedLiveSample("Flex_layout", "auto", "120px")}}

### グリッドレイアウト

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
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
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample("Grid_layout", "auto", "120px")}}

### 段組みレイアウト

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### 結果

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## 仕様書

{{Specifications("css.properties.gap.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}}
- グリッドレイアウトガイド: [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)
