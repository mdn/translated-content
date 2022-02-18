---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
tags:
  - CSS
  - CSS グリッド
  - CSS プロパティ
  - リファレンス
browser-compat: css.properties.grid-auto-columns
translation_of: Web/CSS/grid-auto-columns
---
{{CSSRef}}

**`grid-auto-columns`** は CSS のプロパティで、暗黙的に生成されたグリッドの列{{glossary("grid tracks", "トラック")}}またはトラックのパターンの大きさを指定します。

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

グリッドアイテムが {{cssxref("grid-template-columns")}} で明示的に大きさが指定されていない列に配置された場合、暗黙的に {{glossary("grid", "grid")}} トラックが作成され、そのアイテムを保持します。これには、範囲外の列に明示的に配置する場合と、自動配置アルゴリズムによって追加の列が作成される場合があります。

## 構文

```css
/* キーワード値 */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* <length> 値 */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* <percentage> 値 */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* <flex> 値 */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* minmax() 値 */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* fit-content() 値 */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* multiple track-size 値 */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* グローバル値 */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: revert;
grid-auto-columns: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負の値ではない長さです。
- {{cssxref("&lt;percentage&gt;")}}
  - : グリッドコンテナーのインライン方向の寸法に対する相対値で、負ではない {{cssxref("percentage", "&lt;percentage&gt;")}} です。グリッドコンテナーのインライン方向の寸法が不定の場合は、パーセント値は `auto` のように扱われます。
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

    > **Note:** トラックの寸法が `auto` の場合は、{{cssxref("align-content")}}と{{cssxref("justify-content")}}のプロパティによって引き伸ばすことができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッド列の寸法を設定

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
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample("Setting_grid_column_size", "410px", "100px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- グリッドレイアウトガイド: [CSS グリッドレイアウトでの自動配置 - 暗黙のグリッド内での行の大きさ](/ja/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#暗黙のグリッド内での行の大きさ)
- 動画チュートリアル: _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_
