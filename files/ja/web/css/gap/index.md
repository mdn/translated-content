---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`gap`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、行や列の間のすき間（{{glossary("gutters", "溝")}}）を設定します。このプロパティは[段組み](/ja/docs/Web/CSS/CSS_multicol_layout)、[フレックス](/ja/docs/Web/CSS/CSS_flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/CSS_grid_layout)コンテナーに適用します。

{{EmbedInteractiveExample("pages/css/gap.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}

## 構文

```css
/* 単一の <length> 値 */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* 単一の <percentage> 値 */
gap: 16%;
gap: 100%;

/* 2 つの <length> 値 */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* 1 つまたは 2 つの <percentage> 値 */
gap: 16% 100%;
gap: 21px 82%;

/* calc() 値 */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* グローバル値 */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### 値

このプロパティは `<'row-gap'>` の値と、任意で `<'column-gap'>` の値を続けて指定します。 `<'column-gap'>` が省略された場合、 `<'row-gap'>` と同じ値が設定されます。 `<'row-gap'>` および `<'column-gap'>` はそれぞれ、 `<length>` または `<percentage>` で指定します。

- {{CSSxRef("&lt;length&gt;")}}
  - : 段組み、{{glossary("flex item","フレックスアイテム")}}、フレックス行、{{glossary("grid lines","グリッド行")}}を区切る溝の幅を指定します。
- {{CSSxRef("&lt;percentage&gt;")}}
  - : 列、フレックスアイテム、フレックス行、グリッド行を区切る溝の幅を、要素の寸法に対して相対的に指定します。

## 解説

このプロパティは、 [CSS 段組みレイアウト](/ja/docs/Web/CSS/CSS_multicol_layout)の段間、 [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)のフレックスアイテム間とフレックス行間、 [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)の行と列の間のすき間を定義します。

生成されたすき間は、空のアイテムやトラックのように、指定したサイズの幅や高さを持った空の空間を生成します。要素間の目に見える空間は指定された `gap` の値とは異なるかもしれません。マージン、パディング、分配配置によって、 `gap` が決定する値よりも要素間の間隔を広がるかもしれないからです。

グリッドレイアウトでは、最初の値は行間の溝を定義し、 2 つ目は列間の溝を定義します。グリッドレイアウトとフレックスレイアウトの両方において、 1 つの値のみが指定されている場合、その値は両方の寸法に使用されます。

フレックスコンテナーでは、最初の値がフレックスアイテム間のすき間なのか、フレックス行間のすき間なのかは、方向によって異なります。フレックスアイテムは、 {{cssxref("flex-direction")}} プロパティの値によって行と列のどちらかにレイアウトされます。行（`row` （既定値）または `row-reverse`）の場合、最初の値はフレックス行間のすき間を定義し、 2 つ目の値は各行内の項目間のすき間を定義します。段組み（`column` または `column-reverse`）の場合、最初の値はフレックス行内のフレックス項目間のすき間を定義し、 2 つ目の値は各フレックス行間のすき間を定義します。

段組みコンテナーでは、最初の値で段間のすき間を定義します。 {{cssxref("column-rule-style")}} プロパティまたは {{cssxref("column-rule")}} 一括指定を用いることで、そうでなければ「空の空間」に区切り線を追加することができます。

パーセント値のすき間は、常にコンテナー要素の[コンテンツボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)のサイズに対して計算されます。コンテナーサイズを定義している場合、この挙動はレイアウトモードによらず、明確に定義され一貫しています。これら 3 つのレイアウトモード（段組み、フレックス、グリッド）は、周期的パーセント値の扱いが異なるので、 `gap` もそうなります。グリッドレイアウトでは、周期的パーセント値は、{{glossary("intrinsic size","内在サイズ")}}の寄与を決定するためにゼロに対して解決しますが、コンテンツをレイアウトするときには要素のコンテンツボックスに対して解決します。下記 2 つの例では、[明示的コンテナーサイズ](#パーセント値の_gap_値と明示的なコンテナーサイズ)と[暗黙的コンテナーサイズ](#パーセント値の_gap_値と暗黙的なコンテナーサイズ)によるパーセント値によるすき間をを例の節で示します。

仕様書の初期バージョンでは、このプロパティは `grid--gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーは `grid--gap` を `gap` の別名として受け入れます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

#### HTML

```html live-sample___flex_layout
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css live-sample___flex_layout
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### 結果

{{EmbedLiveSample("Flex_layout", "auto", 250)}}

### グリッドレイアウト

#### HTML

```html live-sample___grid_layout
<div id="grid">
  <div></div>
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

```css live-sample___grid_layout
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample("Grid_layout", "auto", 250)}}

### 段組みレイアウト

#### HTML

```html live-sample___multi-column_layout
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css live-sample___multi-column_layout
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### 結果

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

### パーセント値の gap 値と明示的なコンテナーサイズ

コンテナーに固定されたサイズが設定されている場合、すき間のパーセント値の計算はコンテナーのサイズに基づいて行われます。したがって、すき間の動作はすべてのレイアウトで一貫しています。次の例では、2 種類のコンテナーがあり、1 つはグリッドレイアウト、もう 1 つはフレックスレイアウトです。コンテナーには 20x20px の赤色の子が 5 つあります。どちらのコンテナも明示的に `height: 200px` を用いて高さを 200px に設定し、 `gap: 12.5% 0` を用いてすき間を設定します。

```html live-sample___explicit_container_size
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden live-sample___explicit_container_size
body > div {
  background-color: #ccc;
  width: 200px;
  flex-flow: column;
}
```

```css live-sample___explicit_container_size
#grid {
  display: inline-grid;
  height: 200px;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  height: 200px;
  gap: 12.5% 0;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Explicit container size", "auto", "200px")}}

さて、[ウェブ開発者ツールのインスペクタータブ](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)を使用してグリッドとフレックス要素を検査しましょう。実際のすき間を見るには、インスペクターの `<div id="grid">` と `<div id="flex">` タグにマウスを当ててください。すき間がどちらも同じ 25px であることがわかります。

### パーセント値の gap 値と暗黙的なコンテナーサイズ

サイズがコンテナーに明示的に設定されていない場合、パーセント値でのすき間はグリッドレイアウトとフレックスレイアウトで異なります。次の例では、コンテナーに高さが明示的に設定されていません。

```html hidden live-sample___implicit_container_size
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden live-sample___implicit_container_size
body > div {
  background-color: #ccc;
  width: 200px;
}

#grid {
  display: inline-grid;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  gap: 12.5% 0;
  flex-flow: column;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Implicit container size", "auto", "200px")}}

グリッドレイアウトの場合、パーセント値はグリッドの実際の高さに寄与しません。コンテナーの高さは `0px` のすき間を使用して計算されるため、実際の高さは 100px （20px × 5）となります。次に、コンテンツボックスの高さを使用してパーセント値のすき間を計算するため、実際のすき間は `12.5px` （100px x 12.5%）になります。すき間はレンダリングの直前に適用されます。このように、グリッドの高さは 100px のままですが、レンダリング直前にパーセント値を追加したため、オーバーフローします。

フレックスレイアウトの場合、パーセント値のすき間は常にゼロの値になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#溝)
- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/CSS_grid_layout)モジュール
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/CSS_multicol_layout)モジュール
