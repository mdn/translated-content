---
title: CSS `gap` プロパティ
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

**`gap`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、行や列の間の隙間（{{glossary("gutters", "溝")}}）を[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)コンテナーに適用します。

{{InteractiveExample("CSS デモ: gap")}}

```css interactive-example-choice
gap: 0;
```

```css interactive-example-choice
gap: 10%;
```

```css interactive-example-choice
gap: 1em;
```

```css interactive-example-choice
gap: 10px 20px;
```

```css interactive-example-choice
gap: calc(20px + 10%);
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
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}

## 構文

```css
/* キーワード値 */
gap: normal;

/* 単一の値 */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;
gap: 16%;
gap: 100%;
gap: calc(10% + 20px);

/* 2 つの値 */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;
gap: 16% 100%;
gap: 21px 82%;
gap: calc(20px + 10%) calc(10% - 5px);

/* グローバル値 */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### 値

- `normal`
  - : 段組みコンテナーでは `1em`、それ以外のすべてのコンテキストでは `0` となります。
- {{CSSxRef("&lt;length&gt;")}}
  - : 隙間の大きさで、非負の {{CSSxRef("&lt;length&gt;")}} 値です。
- {{CSSxRef("&lt;percentage&gt;")}}
  - : その次元におけるコンテナー要素の[コンテンツボックス](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)のサイズに対する隙間の大きさを、非負の {{CSSxRef("&lt;percentage&gt;")}} 値として表したものです。

## 解説

`gap` プロパティは、列間・行間の隙間を定義するもので、その効果は、コンテナーがグリッドコンテナー、フレックスボックスコンテナー、段組みレイアウトコンテナーのどれであるかによって異なります。

これは一括指定プロパティで、`<'row-gap'>` の値として指定され、必要に応じてその後に `<'column-gap'>` の値が続きます。両方のサブプロパティのデフォルト値は `normal` ですが、値が 1 つしか宣言されていない場合は、その値が両方に適用されます。`<'row-gap'>` と `<'column-gap'>` は、それぞれ `<length>`、`<percentage>`、またはキーワード `normal` として指定します。

パーセント値による隙間の値は、常にコンテナー要素の[コンテンツボックス](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)のサイズを基準に計算されます。コンテナーのサイズが確定している場合、この動作は明確に定義されており、レイアウトモードを問わず一貫しています。

生成された隙間は、空のアイテムやトラックのように、指定したサイズの幅や高さを持った空の空間を生成します。要素間の目に見える空間は指定された `gap` の値とは異なるかもしれません。マージン、パディング、分配配置によって、 `gap` が決定する値よりも要素間の間隔を広がるかもしれないからです。

隙間には、装飾として目に見える区切り線を引くことができます。列や行、あるいはその両方の間に装飾用の線がある場合、それらは隙間の中央に表示されますが、隙間のサイズには影響しません。これらの装飾線は、{{cssxref("rule")}} 一括指定を使用することで、本来「空白」である部分に追加することができます。

### グリッドレイアウトの場合

[CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)では、`gap` プロパティによって行と列の間の空間が定義されます。最初の値は行間の溝を定義し、2 つ目は列間の溝を定義します。1 つの値のみが指定されている場合、その値は両方の寸法に使用されます。

パーセント値の場合は、コンテナー要素の[コンテンツボックス](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)のサイズを基準に計算されます。パーセントのサイズが循環している場合は、{{glossary("intrinsic size", "内在サイズ")}}の割り当てを決定する際にはゼロを基準として扱われますが、コンテンツのレイアウトを行う際にはグリッドコンテナーのコンテンツボックスを基準として扱われます。下記の 2 つの例は、例のセクションにおける[明示的なコンテナーサイズ](#パーセント値の_gap_値と明示的なコンテナーサイズ)および[暗黙的なコンテナーサイズ](#パーセント値の_gap_値と暗黙的なコンテナーサイズ)を用いたパーセント値を示しています。

`gap` に正の値を指定した場合は、グリッド線に太さが生じたかのような効果になります。つまり、2 本のグリッド線の間にあるグリッドトラックは、それらを表す溝と溝の間の空間となります。グリッドアイテムが複数の行または列にまたがる場合、トラックのサイズ決定のためには、ガターは、またがる方向のサイズに追加される、指定されたサイズの追加の空の固定サイズトラックとして扱われます。例えば、 `gap: 10px` が 100 × 100px のボックスからなる 3 × 3 のグリッドで設定されている場合、グリッドアイテムが 2 つの縦列にまたがっているときは、その幅は `210px` になります。3 つすべてにまたがっている場合は、幅は `320px` になります。

{{cssxref("justify-content")}} および {{cssxref("align-content")}} プロパティによってトラック間に空間が追加されるため、グリッドの行と列の間隔が `gap` プロパティの値よりも大きくなる場合があります。

溝は、暗黙のグリッドのトラック間にのみ現れます。グリッドがトラック間で断片化されている場合、それらのトラックの間には溝の余白は追加されません。最初のトラックの前や最後のトラックの後には溝はなく、トラックが折りたたまれている場合も、溝は現れません。

CSS グリッド仕様の初期バージョンでは、このプロパティは `grid-gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーでは `grid-gap` を `gap` の別名として受け入れています。

### フレックスボックスの場合

フレックスコンテナーでは、`gap` プロパティは、フレックスアイテム間およびフレックス行間の空間を定義します。最初の値がフレックスアイテム間の隙間なのか、フレックス行間の隙間なのかは、方向によって異なります。フレックスアイテムは、 {{cssxref("flex-direction")}} プロパティの値によって行と列のどちらかにレイアウトされます。行方向（`row` （デフォルト値）または `row-reverse`）の場合、1 つ目の値はフレックス行間の隙間を定義し、 2 つ目の値は各行内のアイテム間の隙間を定義します。値が 1 つしか指定されていない場合、その値が両方の次元に対して使用されます。

列方向（`column` または `column-reverse`）の場合、1 つ目値はフレックス行内のフレックス項目間の隙間を定義し、 2 つ目の値は各フレックス行間の隙間を定義します。こちらも、値が 1 つしか指定されていない場合は、その値が両方の次元に対して使用されます。

### 段組みレイアウトの場合

[CSS 段組みのレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)において、このプロパティは、段間および段の行間の溝を定義します。1 つ目の値は隣接する段ボックス間の隙間を定義し、2 つ目の値は、{{cssxref("column-height")}} プロパティによって複数の行が設定されている場合、段ボックスの行間の溝のサイズを定義します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

#### HTML

```html
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

```css
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

{{EmbedLiveSample("フレックスレイアウト", "auto", 250)}}

### グリッドレイアウト

#### HTML

```html
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

```css
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

{{EmbedLiveSample("グリッドレイアウト", "auto", 250)}}

### 段組みレイアウト

#### HTML

```html-nolint
<p class="content-box">
  これは CSS の <code>gap</code> プロパティで作成した、40px の列間隔を持つ段組みのテキストです。これって楽しくてわくわくしませんか？私はそう思います！
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### 結果

{{EmbedLiveSample("段組みレイアウト", "auto", "120px")}}

### パーセント値の gap 値と明示的なコンテナーサイズ

コンテナーに固定されたサイズが設定されている場合、隙間のパーセント値の計算はコンテナーのサイズに基づいて行われます。したがって、隙間の動作はすべてのレイアウトで一貫しています。次の例では、2 種類のコンテナーがあり、1 つはグリッドレイアウト、もう 1 つはフレックスレイアウトです。コンテナーには 20x20px の赤色の子が 5 つあります。どちらのコンテナーも明示的に `height: 200px` を用いて高さを 200px に設定し、 `gap: 12.5% 0` を用いて隙間を設定します。

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
  background-color: #cccccc;
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

さて、[ウェブ開発者ツールのインスペクタータブ](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)を使用してグリッドとフレックス要素を検査しましょう。実際の隙間を見るには、インスペクターの `<div id="grid">` と `<div id="flex">` タグにマウスを当ててください。隙間がどちらも同じ 25px であることがわかります。

### パーセント値の gap 値と暗黙的なコンテナーサイズ

サイズがコンテナーに明示的に設定されていない場合、パーセント値での隙間はグリッドレイアウトとフレックスレイアウトで異なります。次の例では、コンテナーに高さが明示的に設定されていません。

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
  background-color: #cccccc;
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

グリッドレイアウトの場合、パーセント値はグリッドの実際の高さに寄与しません。コンテナーの高さは `0px` の隙間を使用して計算されるため、実際の高さは 100px （20px × 5）となります。次に、コンテンツボックスの高さを使用してパーセント値の隙間を計算するため、実際の隙間は `12.5px` （100px x 12.5%）になります。隙間はレンダリングの直前に適用されます。このように、グリッドの高さは 100px のままですが、レンダリング直前にパーセント値を追加したため、オーバーフローします。

フレックスレイアウトの場合、パーセント値の隙間は常にゼロの値になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#溝)
- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュール
