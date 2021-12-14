---
title: CSS グリッドレイアウト
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - グリッドレイアウト
  - グリッド
  - ガイド
  - レイアウト
  - 概要
  - リファレンス
translation_of: Web/CSS/CSS_Grid_Layout
---
{{CSSRef}}

**CSS グリッドレイアウト**は、ページを大きな領域に分割することや、 HTML のプリミティブから構成されたコントロールの部品間の、寸法、位置、レイヤーに関する関係を定義することに優れています。

表と同様に、グリッドレイアウトによって要素を列と行に整列させることができます。しかし、 CSS グリッドを使用すると、表で実現するよりもより複雑なレイアウトが可能で、あるいは簡単に実現できます。例えば、グリッドのコンテナー内にある子要素は、 CSS の位置指定された要素と同様に自分自身の位置を決めることができるので、実際に重ね合わせてレイヤーになるように配置することができます。

<h2 id="Basic_example">基本的な例</h2>

次の例では、最小値 100 ピクセル、最大値 auto で作成された列を含む、3 つの行を表示します。要素は線ベースの配置に従ってグリッド上に配置されます。

```css hidden
* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
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

```css
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

### CSS プロパティ

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
- {{CSSxRef("masonry-auto-flow")}}{{Experimental_Inline}}
- {{CSSxRef("align-tracks")}}{{Experimental_Inline}}
- {{CSSxRef("justify-tracks")}}{{Experimental_Inline}}

### CSS 関数

- {{CSSxRef("repeat()", "repeat()")}}
- {{CSSxRef("minmax()", "minmax()")}}
- {{CSSxRef("fit-content()", "fit-content()")}}

### CSS データ型

- {{CSSxRef("&lt;flex&gt;")}}

### 用語集

- [グリッド](/ja/docs/Glossary/Grid)
- [グリッド線](/ja/docs/Glossary/Grid_Lines)
- [グリッドトラック](/ja/docs/Glossary/Grid_Tracks)
- [グリッドセル](/ja/docs/Glossary/Grid_Cell)
- [グリッド領域](/ja/docs/Glossary/Grid_Areas)
- [溝](/ja/docs/Glossary/Gutters)
- [グリッド軸](/ja/docs/Glossary/Grid_Axis)
- [グリッド行](/ja/docs/Glossary/Grid_Rows)
- [グリッド列](/ja/docs/Glossary/Grid_Column)

## ガイド

- [グリッドレイアウトの基本概念](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [他のレイアウト方法との関係](/ja/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [線ベースの配置を使用したレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [グリッドテンプレート領域](/ja/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [名前付きグリッド線を使用したレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [CSS グリッドレイアウトにおける自動配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [CSS グリッドレイアウトにおけるボックス配置](/ja/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS グリッド、論理値、書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS グリッドレイアウトとアクセシビリティ](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS グリッドとプログレッシブエンハンスメント](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [CSS グリッドを利用したよくあるレイアウトの実現](/ja/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)
- [サブグリッド](/ja/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
- [メーソンリーレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout)

## 外部リソース

- [CSS Grid and IE11](http://tomrothe.de/posts/css_grid_and_ie11.html) ([polyfill](https://github.com/motine/css_grid_annotator))
- [Examples from Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - a collection of usage examples and video tutorials](http://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)
- [Grid Garden](http://cssgridgarden.com) - A game for learning CSS grid

## 仕様書

| 仕様書                        | 状態                           | Comment備考                                                                                      |
| ------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------- |
| {{SpecName("CSS Grid 3")}} | {{Spec2("CSS Grid 3")}} | [組積](/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout)の追加                          |
| {{SpecName("CSS Grid 2")}} | {{Spec2("CSS Grid 2")}} | [サブグリッド](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#subgrid)の追加 |
| {{SpecName("CSS3 Grid")}}     | {{Spec2("CSS3 Grid")}}     | 初回定義                                                                          |
