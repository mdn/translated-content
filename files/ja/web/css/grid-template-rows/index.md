---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
tags:
  - CSS
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.grid-template-rows
translation_of: Web/CSS/grid-template-rows
---
{{CSSRef}}

**`grid-template-rows`** は CSS のプロパティで、{{glossary("grid rows", "グリッド行")}}の線名とトラックのサイズ変更機能を定義します。

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## 構文

```css
/* キーワード値 */
grid-template-rows: none;

/* <track-list> 値 */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> 値 */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-rows: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-rows: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* グローバル値 */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: unset;
```

このプロパティは以下のように指定することができます。

- キーワード値 `none`
- `<track-list>` 値
- `<auto-track-list>` 値のいずれか

### 値

- `none`
  - : 明示的なグリッドがないことを示すキーワードです。どの列も暗黙的に生成され、それらのサイズは {{cssxref("grid-auto-rows")}} プロパティによって決定されます。
- `[線名]`
  - : [`<custom-ident>`](/ja/docs/Web/CSS/custom-ident) で、その位置にある線の名称を指定します。識別子には、予約語の `span` と `auto` 以外の有効な文字列を指定してください。行は、`[line-name-a line-name-b]`のように、角括弧内のスペースで区切られた複数の名前を持つことができます。
- {{cssxref("&lt;length&gt;")}}
  - : 負の値ではない長さで、列の幅を指定します。
- {{cssxref("&lt;percentage&gt;")}}
  - : グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない {{cssxref("percentage", "&lt;percentage&gt;")}} です。グリッドコンテナーの寸法がトラックの寸法に依存する場合は、パーセント値を `auto` として扱う必要があります。
    トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : `fr` の単位の付いた負の数ではない距離で、トラックのフレックス係数を指定します。 `<flex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して共有します。    `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, <flex>)`)。
- {{cssxref("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。
- {{cssxref("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。
- {{cssxref("minmax()", "minmax(min, max)")}}
  - : _min_ 以上、 _max_ 以下の寸法の範囲を定義する関数表記法です。 _max_ が _min_ より小さい場合、 _max_ は無視され、関数は _min_ として扱われます。最大値として、 `<flex>` 値はトラックのフレックス係数を設定します。最小値としては無効です。
- `auto`

  - : 最大値であれば max-content と同一のキーワードです。

    最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 ({{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの) を表します。ふつうは {{cssxref("min-content")}} ですが、必ずそうとは限りません。

    {{cssxref("minmax()", "minmax()")}} 表記以外で使われた場合、 `auto` は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、`minmax(min-content,max-content)` と同じように動作します。

    > **Note:** トラックの寸法が `auto` の場合 (そして `auto` の場合だけ)、 {{cssxref("align-content")}} および{{cssxref("justify-content")}} プロパティによって引き伸ばされることがあります。

- `{{cssxref("fit-content()", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : `min(max-content, max(auto, _argument_))` の式を表し、 `auto` と同様に (すなわち `minmax(auto, max-content)` と) 計算されますが、トラックの寸法が `auto` の最小値よりも大きい場合は _argument_ でクランプされるところが異なります。
- {{cssxref("repeat()", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の行をよりコンパクトな形式で記述できるようにします。
- [`masonry`](/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout){{Experimental_Inline}}
  - : masonry の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。
- [subgrid](/ja/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : `subgrid` の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。

> **Warning:** `masonry`の値は、グリッド仕様のレベル 3 のもので、現在は Firefox のフラグに隠された実験的な実装があるだけです。
>
> サブグリッドの値はグリッド仕様書のレベル 2 にあり、現在のところ Firefox 71 以降でのみ実装されています。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法の指定

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
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

- 関連する CSS プロパティ: {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- [グリッドレイアウトガイド: グリッドレイアウトの基本概念 - グリッドトラック](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#グリッドトラック)
- 動画チュートリアル: [Defining a Grid](https://gridbyexample.com/video/series-define-a-grid/)
- [サブグリッド](/ja/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
