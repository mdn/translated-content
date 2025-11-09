---
title: grid-template-rows
slug: Web/CSS/Reference/Properties/grid-template-rows
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`grid-template-rows`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("grid_row", "グリッド行")}}の線名とトラックのサイズ変更機能を定義します。

{{InteractiveExample("CSS デモ: grid-template-rows")}}

```css interactive-example-choice
grid-template-rows: auto;
```

```css interactive-example-choice
grid-template-rows: 40px 4em 40px;
```

```css interactive-example-choice
grid-template-rows: 1fr 2fr 1fr;
```

```css interactive-example-choice
grid-template-rows: 3ch auto minmax(10px, 60px);
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
  grid-gap: 10px;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## 構文

```css
/* キーワード値 */
grid-template-rows: none;

/* <track-list> 値 */
grid-template-rows: 100px 1fr;
grid-template-rows: [line-name] 100px;
grid-template-rows: [line-name1] 100px [line-name2 line-name3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> 値 */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-rows:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* グローバル値 */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;
```

このプロパティは以下のように指定することができます。

- キーワード値 `none`
- `<track-list>` 値
- `<auto-track-list>` 値のいずれか

### 値

- `none`
  - : 明示的なグリッドがないことを示すキーワードです。どの列も暗黙的に生成され、それらのサイズは {{cssxref("grid-auto-rows")}} プロパティによって決定されます。
- `[line-name]`
  - : [`<custom-ident>`](/ja/docs/Web/CSS/Reference/Values/custom-ident) で、その位置にある線の名称を指定します。識別子には、予約語の `span` と `auto` 以外の有効な文字列を指定してください。行は、`[line-name-a line-name-b]`のように、角括弧内のスペースで区切られた複数の名前を持つことができます。
- {{cssxref("&lt;length&gt;")}}
  - : 非負の長さです。
- {{cssxref("&lt;percentage&gt;")}}
  - : 非負の {{cssxref("percentage", "&lt;percentage&gt;")}} で、グリッドコンテナーのブロック方向のサイズに対する相対値です。グリッドコンテナーのサイズがそのトラックのサイズに依存する場合、ブラウザーはグリッドコンテナーの内在サイズを計算する目的で、パーセント値を `auto` として扱います。その後、指定されたパーセント値は、グリッドとそのアイテムを配置するための結果として得られるグリッドコンテナーのサイズに対して解決されます。ブラウザーは、トラックの内在サイズがグリッドコンテナーのサイズに寄与する割合を調整し、パーセント値を反映させるために必要な最小限の量だけトラックの最終サイズを増加させることがあります。
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : `fr` の単位の付いた非負の長さで、このトラックのフレックス係数を指定します。 `<flex>` のサイズのトラックは、残りの空間をフレックス係数の割合に比例して共有します。 `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, <flex>)`)。
- {{cssxref("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。
- {{cssxref("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。
- {{cssxref("minmax", "minmax(min, max)")}}
  - : _min_ 以上、 _max_ 以下のサイズの範囲を定義する関数表記法です。 _max_ が _min_ より小さい場合、 _max_ は無視され、関数は _min_ として扱われます。最大値として、 `<flex>` 値はトラックのフレックス係数を設定します。最小値としては無効です。
- `auto`
  - : 最大値として使われた場合、そのトラック内の最大のアイテムの {{cssxref("max-content")}} サイズを表します。

    最小値として使われた場合は、グリッドトラックを占めるグリッドアイテムの最大の最小サイズ ({{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの) を表します。ふつうは {{cssxref("min-content")}} ですが、必ずそうとは限りません。

    {{cssxref("minmax", "minmax()")}} の外で使われた場合、 `auto` は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、`minmax(min-content,max-content)` と同じように動作します。

    > [!NOTE]
    > トラックのサイズが `auto` の場合 (そして `auto` の場合だけ)、 {{cssxref("align-content")}} および{{cssxref("justify-content")}} プロパティによって引き伸ばされることがあります。

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : `min(max-content, max(auto, argument))` の式を表し、 `auto` と同様に（すなわち `minmax(auto, max-content)` と）計算されますが、トラックのサイズが `auto` の最小値よりも大きい場合は _argument_ でクランプされるところが異なります。
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の行をよりコンパクトな形式で記述できるようにします。
- [`masonry`](/ja/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : masonry の値は、この軸がメイソンリーアルゴリズムに従ってレイアウトされるべきであることを示します。
- [`subgrid`](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : グリッドが、その親グリッドのその軸方向の部分に合わせられることを示します。グリッドの行や列のサイズは明示的に指定されず、親グリッドの定義から取得されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行のサイズの指定

#### HTML

```html live-sample___specifying_grid_row_sizes
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css live-sample___specifying_grid_row_sizes
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### 結果

{{EmbedLiveSample("Specifying_grid_row_sizes", "40px", "100px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [グリッドレイアウトの基本概念: グリッドトラック](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#グリッドトラック)
- 動画: [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
- [サブグリッド](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid)
