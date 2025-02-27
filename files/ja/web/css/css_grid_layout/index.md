---
title: CSS グリッドレイアウト
slug: Web/CSS/CSS_grid_layout
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{CSSRef}}

**CSS グリッドレイアウト**モジュールは、ページを大きな領域に分割することや、 HTML のプリミティブから構成されたコントロールの部品間の、寸法、位置、レイヤーに関する関係を定義することに優れています。

表と同様に、グリッドレイアウトによって要素を列と行に整列させることができます。しかし、 CSS グリッドを使用すると、表で実現するよりもより複雑なレイアウトが可能で、あるいは簡単に実現できます。例えば、グリッドのコンテナー内にある子要素は、 CSS の位置指定された要素と同様に自分自身の位置を決めることができるので、実際に重ね合わせてレイヤーになるように配置することができます。

## 基本的な例

次の例では、最小値 100 ピクセル、最大値 auto で作成された列を含む、3 つの行を表示します。要素は線ベースの配置に従ってグリッド上に配置されます。

```css hidden live-sample___basic_example
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233 171 88);
  border-radius: 5px;
  background-color: rgb(233 171 88 / 50%);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html live-sample___basic_example
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css live-sample___basic_example
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{EmbedLiveSample("Basic_example", "100%", "460")}}

## リファレンス

### プロパティ

- {{CSSxRef("display")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-row")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-area")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}

### 関数

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### データ型

- {{CSSxRef("&lt;flex&gt;")}}

## ガイド

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
- [サブグリッド](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)
- [メイソンリーレイアウト](/ja/docs/Web/CSS/CSS_grid_layout/Masonry_layout)

## 仕様書

{{Specifications}}

## 関連情報

- 用語集:
  - [グリッド](/ja/docs/Glossary/Grid)
  - [グリッド線](/ja/docs/Glossary/Grid_Lines)
  - [グリッドトラック](/ja/docs/Glossary/Grid_Tracks)
  - [グリッドセル](/ja/docs/Glossary/Grid_Cell)
  - [グリッド領域](/ja/docs/Glossary/Grid_Areas)
  - [溝](/ja/docs/Glossary/Gutters)
  - [グリッド軸](/ja/docs/Glossary/Grid_Axis)
  - [グリッド行](/ja/docs/Glossary/Grid_Row)
  - [グリッド列](/ja/docs/Glossary/Grid_Column)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
- [CSS 表示](/ja/docs/Web/CSS/CSS_display)モジュール
- [Grid by example](https://gridbyexample.com/) - 使用例と動画チュートリアル集
- [CSS grid reference](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [CSS grid inspector - Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS grid playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS grid garden](https://cssgridgarden.com/) - CSS グリッドを学ぶためのゲーム
