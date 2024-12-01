---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`grid-template-rows`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("grid_row", "グリッド行")}}の線名とトラックのサイズ変更機能を定義します。

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

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
  - : [`<custom-ident>`](/ja/docs/Web/CSS/custom-ident) で、その位置にある線の名称を指定します。識別子には、予約語の `span` と `auto` 以外の有効な文字列を指定してください。行は、`[line-name-a line-name-b]`のように、角括弧内のスペースで区切られた複数の名前を持つことができます。
- {{cssxref("&lt;length&gt;")}}
  - : 負の値ではない長さで、列の幅を指定します。
- {{cssxref("&lt;percentage&gt;")}}
  - : グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない {{cssxref("percentage", "&lt;percentage&gt;")}} です。グリッドコンテナーのサイズがそのトラックのサイズに依存している場合、グリッドコンテナーの内在サイズを計算するために、パーセント値は `auto` として扱われなければなりません。トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : `fr` の単位の付いた負の数ではない距離で、トラックのフレックス係数を指定します。 `<flex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して共有します。 `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, <flex>)`)。
- {{cssxref("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。
- {{cssxref("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。
- {{cssxref("minmax", "minmax(min, max)")}}
  - : _min_ 以上、 _max_ 以下の寸法の範囲を定義する関数表記法です。 _max_ が _min_ より小さい場合、 _max_ は無視され、関数は _min_ として扱われます。最大値として、 `<flex>` 値はトラックのフレックス係数を設定します。最小値としては無効です。
- `auto`

  - : 最大値であれば max-content と同一のキーワードです。

    最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 ({{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの) を表します。ふつうは {{cssxref("min-content")}} ですが、必ずそうとは限りません。

    {{cssxref("minmax", "minmax()")}} の外で使われた場合、 `auto` は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、`minmax(min-content,max-content)` と同じように動作します。

    > [!NOTE]
    > トラックの寸法が `auto` の場合 (そして `auto` の場合だけ)、 {{cssxref("align-content")}} および{{cssxref("justify-content")}} プロパティによって引き伸ばされることがあります。

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : `min(max-content, max(auto, argument))` の式を表し、 `auto` と同様に（すなわち `minmax(auto, max-content)` と）計算されますが、トラックの寸法が `auto` の最小値よりも大きい場合は _argument_ でクランプされるところが異なります。
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の行をよりコンパクトな形式で記述できるようにします。
- [`masonry`](/ja/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : masonry の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。
- [`subgrid`](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : `subgrid` の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法の指定

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
- [グリッドレイアウトの基本概念: グリッドトラック](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#グリッドトラック)
- 動画チュートリアル: _[Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)_
- [サブグリッド](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)
