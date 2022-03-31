---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
tags:
  - CSS
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
browser-compat: css.properties.grid-auto-rows
translation_of: Web/CSS/grid-auto-rows
---
{{CSSRef}}

**`grid-auto-rows`** は CSS のプロパティで、暗黙的に生成されたグリッドの列{{glossary("grid tracks", "トラック")}}またはトラックのパターンの大きさを指定します。

{{EmbedInteractiveExample("pages/css/grid-auto-rows.html")}}

グリッドアイテムが {{cssxref("grid-template-rows")}} で明示的に大きさが指定されていない行に配置された場合、暗黙的に {{glossary("grid", "grid")}} トラックが作成され、そのアイテムを保持します。これには、範囲外の行に明示的に配置する場合と、自動配置アルゴリズムによって追加の行が作成される場合があります。

## 構文

```css
/* キーワード値 */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length> 値 */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage> 値 */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex> 値 */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax() 値 */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* multiple track-size 値 */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* グローバル値 */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: revert;
grid-auto-rows: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負の値ではない長さです。
- {{cssxref("&lt;percentage&gt;")}}
  - : グリッドコンテナーのブロック方向の寸法に対する相対値で、負ではない {{cssxref("percentage", "&lt;percentage&gt;")}} です。グリッドコンテナーのブロック方向の寸法が不定の場合は、パーセント値は `auto` のように扱われます。
- {{cssxref("&lt;flex&gt;")}}

  - : `fr` の単位の付いた負の数ではない値で、トラックのフレックス係数を指定します。 `<flex>` の寸法のトラックは、残りの空間をフレックス係数の割合に比例して分け合います。

    `minmax()` 表記の外に現れた場合は、最小値が自動として扱われます (つまり `minmax(auto, <flex>)`)。

- {{cssxref("max-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最大値を表すキーワードです。
- {{cssxref("min-content")}}
  - : グリッドトラックを占有しているグリッドアイテムの中で、コンテンツ貢献度の最小値を表すキーワードです。
- {{cssxref("minmax()", "minmax(min, max)")}}
  - : _min_ 以上、_max_ 以下の寸法の範囲を定義する関数記法です。 _max_ が _min_ より小さい場合は、 _max_ は無視され、 _min_ として扱われます。`<flex>` の値は、最大値として、トラックのフレックス係数を設定します。最小値としては、ゼロ（または、グリッドコンテナーの寸法が最小コンテンツの制約を受けている場合は、最小コンテンツ）として扱われます。
- {{cssxref("fit-content()", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : `min(max-content, max(auto, argument))` という式を表します。この式は、トラックの寸法が `auto` の最小値よりも大きい場合に _argument_ で固定されることを除いて、`auto` と同様 (すなわち `minmax(auto, max-content)`) に計算されます。
- `auto`

  - : 最大値であれば最小コンテンツと同一のキーワードです。最小値の場合は、グリッドトラックを占めるグリッドアイテムの最大の最小サイズ（{{cssxref("min-width")}}/{{cssxref("min-height")}}で指定されたサイズ）を表します。

    > **Note:** トラックの寸法が `auto` の場合は（かつ `auto` の場合のみ）、{{cssxref("align-content")}}と{{cssxref("justify-content")}}のプロパティによって引き伸ばすことができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド行の寸法を設定

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  gap: 10px;
  grid-auto-rows: 100px;
}

#grid > div {
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample("Setting_grid_row_size", "210px", "210px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- グリッドレイアウトガイド: [CSS グリッドレイアウトでの自動配置 - 暗黙のグリッド内での行の大きさ](/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#暗黙のグリッド内での行の大きさ)
- 動画チュートリアル: _[Introducing Grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)_
