---
title: grid
slug: Web/CSS/grid
tags:
  - CSS
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.grid
translation_of: Web/CSS/grid
---
{{CSSRef}}

**`grid`** は CSS のプロパティで、[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)として明示的・暗黙的なすべてのグリッドプロパティを単一の宣言で設定します。

`grid` を使用すると、一方の軸を {{cssxref("grid-template-rows")}} または {{cssxref("grid-template-columns")}} を使用して設定し、もう一方の軸でどのように内容物を自動反復させるかを、暗黙のグリッドプロパティである {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}} で設定します。

{{EmbedInteractiveExample("pages/css/grid.html")}}

> **Note:** 指定しないサブプロパティは、通常の一括指定と同様に初期値に設定されます。また、溝に関するプロパティはこの一括指定では初期化されません。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`grid-auto-columns`](/ja/docs/Web/CSS/grid-auto-columns)
- [`grid-auto-flow`](/ja/docs/Web/CSS/grid-auto-flow)
- [`grid-auto-rows`](/ja/docs/Web/CSS/grid-auto-rows)
- [`grid-template-areas`](/ja/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/ja/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/ja/docs/Web/CSS/grid-template-rows)

## 構文

```css
/* <'grid-template'> 値 */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? 値 */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> 値 */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* グローバル値	 */
grid: inherit;
grid: initial;
grid: revert;
grid: unset;
```

### 値

- `<'grid-template'>`
  - : {{cssxref("grid-template")}} を定義し、これには {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}} が含まれます。
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`

  - : {{cssxref("grid-template-rows")}} プロパティを明示的に設定 (および {{cssxref("grid-template-columns")}} プロパティを `none` に設定) することで行トラックを設定し、 {{cssxref("grid-auto-columns")}} プロパティを設定 (および {{cssxref("grid-auto-rows")}} を `auto` に設定) することで列トラックの自動反復方法を設定します。 `dense` が設定されていれば、 {{cssxref("grid-auto-flow")}} も `column` に設定されます。

    ほかの `grid` のサブプロパティはすべて、初期値に初期化されます。

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

  - : {{cssxref("grid-template-columns")}} プロパティを明示的に設定 (および {{cssxref("grid-template-rows")}} プロパティを `none` に設定) することで列トラックを設定し、 {{cssxref("grid-auto-rows")}} プロパティを設定 (および {{cssxref("grid-auto-columns")}} を `auto` に設定) することで行トラックの児童反復方法を設定します。 `dense` が設定されていれば、 {{cssxref("grid-auto-flow")}} も `column` に設定されます。

    ほかの `grid` のサブプロパティはすべて、初期値に初期化されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドレイアウトの作成

#### HTML

```html
<div id="container">
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
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

#### 結果

{{EmbedLiveSample("Creating_a_grid_layout", "100%", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- グリッドレイアウトガイド: [CSS グリッドでの行ベースの配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- グリッドレイアウトガイド: [グリッドテンプレート領域 - グリッド定義の一括指定](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#グリッド定義の一括指定)
