---
title: CSS グリッドレイアウト
short-title: グリッドレイアウト
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS グリッドレイアウト**モジュールは、ページを大きな領域に分割することや、 HTML のプリミティブから構成されたコントロールの部品間の、寸法、位置、レイヤーに関する関係を定義することに優れています。

表と同様に、グリッドレイアウトによって要素を列と行に整列させることができます。しかし、 CSS グリッドを使用すると、表で実現するよりもより複雑なレイアウトが可能で、あるいは簡単に実現できます。例えば、グリッドのコンテナー内にある子要素は、 CSS の位置指定された要素と同様に自分自身の位置を決めることができるので、実際に重ね合わせてレイヤーになるように配置することができます。

## グリッドレイアウトの実演

次の例では、最小値 100 ピクセル、最大値 auto で作成された列を含む、3 つの行を表示します。要素は線ベースの配置に従ってグリッド上に配置されます。

```html hidden
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

```css hidden
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

{{EmbedLiveSample("Grid_layout_in_action", "100%", "460")}}

この例では、グリッドの作成に {{cssxref("display")}}、{{cssxref("grid-template-columns")}}、{{cssxref("grid-template-rows")}}、{{cssxref("gap")}} を使用し、グリッド内のアイテムの位置指定に {{cssxref("grid-column")}} と {{cssxref("grid-row")}} を使用しています。使用されている HTML と CSS を表示・編集するには、例の右上にある 'Play' をクリックしてください。

## リファレンス

### プロパティ

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} 一括指定
- {{CSSxRef("grid")}} 一括指定
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} 一括指定
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} 一括指定
- {{CSSxRef("grid-area")}} 一括指定

### 関数

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### データ型

- {{CSSxRef("&lt;flex&gt;")}} （`fr` 単位）

### 用語と定義

- {{glossary("Grid", "グリッド")}}
- {{glossary("Grid areas", "グリッド領域")}}
- {{glossary("Grid axis", "グリッド軸")}}
- {{glossary("Grid cell", "グリッドセル")}}
- {{glossary("Grid column", "グリッド列")}}
- {{glossary("Grid container", "グリッドコンテナー")}}
- {{glossary("Grid lines", "グリッド線")}}
- {{glossary("Grid row", "グリッド行")}}
- {{glossary("Grid tracks", "グリッドトラック")}}
- {{glossary("Gutters", "溝")}}

## ガイド

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : CSS グリッドレイアウトモジュールで提供される各種機能の概要。

- [グリッドレイアウトと他のレイアウト方法との関係](/ja/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : グリッドレイアウトが、フレックスボックス、絶対位置指定要素、`display: contents` を含む他の CSS 機能とどのように連携するか。

- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : グリッド線と、それらの線に対するアイテムの位置指定方法。これには `grid-area` プロパティ、負の線番号、複数セルにまたがる配置、グリッドの溝の作成が含まれます。

- [グリッドテンプレート領域](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : 名前付きテンプレート領域を使用してグリッドアイテムを配置します。

- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : 名前とトラックサイズを組み合わせます。名前付きグリッドラインとテンプレート領域を定義してグリッドアイテムを配置します。

- [グリッドレイアウトでの自動配置](/ja/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : グリッドは、配置プロパティが宣言されていないアイテムをどのように配置するか。

- [グリッドレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : グリッドレイアウトの 2 つの軸に沿って、グリッドアイテムを揃え、整列させ、中央に配置します。

- [グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : CSS グリッドレイアウト、ボックス配置、書字方向の相互作用、および CSS の論理的・物理的プロパティと値について考察します。

- [グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : CSS グリッドレイアウトがアクセシビリティに与える利点と弊害について考察します。

- [グリッドを使用したよくあるレイアウトの実現](/ja/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : CSS グリッドレイアウトを用いたデザイン時に活用できる様々なテクニックを示す複数のレイアウト例。{{cssxref("grid-template-areas")}} の使用、12 列フレキシブルグリッドシステム、自動配置を用いた商品リスト表示などを含みます。

- [サブグリッド](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : サブグリッドの用途とデザインパターン、何を解決するのか。

- [メイソンリーレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : メイソンリーレイアウトとは何か、そしてそれがどのように使用されるかを詳細に説明します。

- [グリッドレイアウトでのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : グリッドレイアウトにおけるボックス配置の動作です。

## 関連機能

[CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}

[CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}
- {{cssxref("ratio")}} データ型
- {{cssxref("min-content")}} 値
- {{cssxref("max-content")}} 値
- {{cssxref("fit-content")}} 値
- {{cssxref("fit-content_function", "fit-content()")}} 関数

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール
- [Grid by example](https://gridbyexample.com/)
- [CSS grid reference](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: grid inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS grid playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS grid garden](https://cssgridgarden.com/) - CSS グリッドを学ぶためのゲーム
