---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`grid-template-columns`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("grid column", "グリッド列")}}の線名とトラックのサイズ変更機能を定義します。

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## 構文

```css
/* キーワード値 */
grid-template-columns: none;

/* <track-list> 値 */
grid-template-columns: 100px 1fr;
grid-template-columns: [line-name] 100px;
grid-template-columns: [line-name1] 100px [line-name2 line-name3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> 値 */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-columns:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* グローバル値 */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### 値

- `none`
  - : 明示的なグリッドがないことを示します。どの列も暗黙的に生成され、それらのサイズは {{cssxref("grid-auto-columns")}} プロパティによって決定されます。
- `[line-name]`
  - : [`<custom-ident>`](/ja/docs/Web/CSS/custom-ident) で、その位置にある線の名称を指定します。識別子には、予約語の `span` と `auto` 以外の有効な文字列を指定してください。行は、`[line-name-a line-name-b]`のように、角括弧内のスペースで区切られた複数の名前を持つことができます。
- {{cssxref("&lt;length&gt;")}}
  - : 負の値ではない長さです。
- {{cssxref("&lt;percentage&gt;")}}
  - : グリッドコンテナーのインライン方向の寸法に対する相対値で、負ではない {{cssxref("percentage", "&lt;percentage&gt;")}} です。グリッドコンテナーの寸法がトラックの寸法に依存する場合は、パーセント値を `auto` として扱う必要があります。
    トラックの内在的なサイズの寄与によって、グリッドコンテナーの寸法に合わせられ、パーセント値を尊重した結果、最小の大きさによってトラックの最終的な寸法を増加させる可能性があります。
- {{cssxref("&lt;flex&gt;")}}

  - : `fr` の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 `<flex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。

    `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, <flex>)`)。

- {{cssxref("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、[最大コンテンツ貢献度](https://www.w3.org/TR/css-sizing-3/#max-content)を表すキーワードです。例えば、グリッドトラックの最初の要素が _"Repetitio est mater studiorum"_ という文を保持しており、 2 つ目の要素が _"Dum spiro, spero"_ という文を保持している場合、最大コンテンツ貢献度は、グリッド要素内のすべての文の中で最大の文 _"Repetitio est mater studiorum"_ のサイズによって定義されます。
- {{cssxref("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、[最小コンテンツ貢献度](https://www.w3.org/TR/css-sizing-3/#min-content)を表すキーワードです。例えば、グリッドトラックの最初の要素が _"Repetitio est mater studiorum"_ という文を保持しており、 2 つ目の要素が _"Dum spiro, spero"_ という文を保持している場合、最小コンテンツ貢献度は、グリッド要素内のすべての文の中で最大の単語 _"studiorum"_ のサイズによって定義されます。
- {{cssxref("minmax", "minmax(min, max)")}}
  - : _min_ 以上、 _max_ 以下の寸法の範囲を定義する関数表記法です。 _max_ が _min_ より小さい場合、 _max_ は無視され、関数は _min_ として扱われます。最大値として、 `<flex>` 値はトラックのフレックス係数を設定します。最小値としては無効です。
- `auto`

  - : 最大値であれば max-content と同一のキーワードです。

    最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小寸法 ({{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの) を表します。ふつうは {{cssxref("min-content")}} ですが、必ずしもそうとは限りません。

    {{cssxref("minmax", "minmax()")}} 表記以外で使われた場合、 `auto` は上記の最小値と最大値の間の範囲を表します。これはほとんどの場合、 `minmax(min-content,max-content)` と同じように動作します。

    > [!NOTE]
    > トラックの寸法が `auto` の場合（そして `auto` だけの場合）、 {{cssxref("align-content")}} および {{cssxref("justify-content")}} プロパティによって引き伸ばされることがあります。既定では、 `auto` のサイズのトラックがグリッドコンテナーの残りの空間を占めます。

- `{{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : `max(minimum, min(limit, max-content))` という式を表し、ここで _minimum_ は `auto` の最小値 （常に {{cssxref("min-content")}} の最小値に等しいわけではありませんが、そうなることが多い） を表し、 _limit_ は fit-content() に引数として渡されるトラックの大きさを計算する関数です。これは基本的に `minmax(auto, max-content)` と `minmax(auto, limit)` の小さい方として計算されます。
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : トラックリストの繰り返しフラグメントを表し、繰り返しパターンを示す多数の列をよりコンパクトな形式で記述できるようにします。
- [`masonry`](/ja/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : masonry の値は、この軸が組積アルゴリズムに従ってレイアウトされるべきであることを示します。
- [`subgrid`](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : `subgrid` の値は、グリッドがその軸に親グリッドのスパン部分を採用することを示します。グリッドの行や列のサイズは、明示的に指定されるのではなく、親グリッドの定義から取得されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド列の寸法の指定

#### HTML

```html live-sample___specifying_grid_column_sizes
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css live-sample___specifying_grid_column_sizes
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### 結果

{{EmbedLiveSample("Specifying_grid_column_sizes", "100%", "20px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [グリッドレイアウトの基本概念: グリッドトラック](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#グリッドトラック)
- 動画チュートリアル: _[Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)_
- [サブグリッド](/ja/docs/Web/CSS/CSS_grid_layout/Subgrid)
