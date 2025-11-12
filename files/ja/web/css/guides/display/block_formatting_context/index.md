---
title: ブロック整形コンテキスト
slug: Web/CSS/Guides/Display/Block_formatting_context
original_slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

**ブロック整形コンテキスト** (block formatting context, BFC) は、ウェブページにおける CSS の視覚的なレンダリングの一部です。ブロックボックスのレイアウトが行われ、浮動ボックスが他の要素と相互作用する領域です。

ブロック整形コンテキストは、以下のうちの少なくとも一つから生成されます。

- 文書のルート要素 (`<html>`)
- 浮動ボックス ({{ cssxref("float") }} が `none` 以外である要素)
- 絶対位置指定の要素 ({{ cssxref("position") }} が `absolute` または `fixed` である要素)
- インラインブロック ({{cssxref("display", "display: inline-block")}} である要素)
- 表のセル ({{cssxref("display", "display: table-cell")}} を持つ要素。これは HTML の表のセルの既定値です)
- 表のキャプション ({{cssxref("display", "display: table-caption")}} を持つ要素。HTMLの、表のキャプションの既定値です)
- {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (つまりそれぞれ HTML の表、表の行、表の本体、表のヘッダー、表のフッターの既定値), `inline-table` のついた要素によって暗黙的に生成された無名の表のセル。
- {{ cssxref("overflow") }} の値が `visible` や `clip` 以外であるブロック要素。
- {{cssxref("display", "display: flow-root")}} である要素。
- {{htmlelement("button")}} 要素およびボタン型の {{htmlelement("input")}} 要素で既定値の `display: flow-root` であるもの。
- {{cssxref("contain", "contain: layout")}}, `content`, `paint` の付いた要素
- フレックスアイテム ({{cssxref("display", "display: flex")}} または `inline-flex` である要素の直接の子要素)、[フレックス](/ja/docs/Glossary/Flex_Container)でも[グリッド](/ja/docs/Glossary/Grid_Container)でも[表](/ja/docs/Web/CSS/Guides/Table)でもない場合
- グリッドアイテム ({{cssxref("display", "display: grid")}} または `inline-grid` である要素の直接の子要素)、[フレックス](/ja/docs/Glossary/Flex_Container)でも[グリッド](/ja/docs/Glossary/Grid_Container)でも[表](/ja/docs/Web/CSS/Guides/Table)でもない場合
- 段組みコンテナー ({{ cssxref("column-count") }} または {{ cssxref("column-width") }} が `auto` ではない要素、 `column-count: 1` の要素も含む)
- {{cssxref("column-span", "column-span: all")}} は、 `column-span: all` の要素が段組みコンテナーに含まれていなくても、常に新たな整形コンテキストを生成します。

新しいブロック整形コンテキストを確立する要素は、レイアウトに影響を与えるため、整形コンテキストはレイアウトに影響を与えます。

- 内部の浮動ボックスを収めます。
- 外部の浮動ボックスを追いやります。
- [マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)を抑止します。

要素の {{ cssxref("display") }} を `flex`、`grid`、`inline-flex`、`inline-grid` のいずれかに設定すると、フレックス／グリッドコンテナーとなり、新しいフレックス／グリッド整形コンテキストを確立します。これらはブロック整形コンテキストに似ていますが、フレックスコンテナーやグリッドコンテナー内では浮動ボックスを利用できないという点が異なります。ただし、これらのコンテキストでは外部浮動ボックスは除外され、マージンの相殺は抑制されます。

## 例

新しい BFC を作成する効果を見るために、これらのいくつかを見てみましょう。

### 内部の浮動ブロックを収める

以下の例では、`border`が適用された `<div>` の中に浮動ボックスがあります。その `<div>` のコンテンツは浮動ボックスの横に並んだ状態になっています。浮動ボックスのコンテンツは横に並んだコンテンツよりも高さがあるため、`<div>` の境界線が浮動ボックスを貫通してしまいます。[フロー内とフローの外のガイド](/ja/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)で説明しているように、浮動ボックスがフローから外れたので、 `<div>` の `background` と `border` には浮動ボックスはなく、コンテンツだけが保持されています。

**`overflow: auto` の使用**

`overflow: auto` を設定したり、初期値である `overflow: visible` 以外の値を設定すると、浮動ボックスを含む新しい BFC を作成することができます。これで、`<div>` がレイアウトの中のミニレイアウトになります。子要素はすべてこの中に含まれます。

新しい BFC を作成するために `overflow` を使用することの問題点は、`overflow` プロパティが、はみ出したコンテンツをどのように処理したいかをブラウザーに指示するためのものであることです。このプロパティを純粋に BFC を作成するために使用すると、不要なスクロールバーやクリップされたドシャドウが返されることがあるようです。さらに、将来的に開発者が読解できない可能性もあります。なぜそのために `overflow` を使用したのかがわからないかもしれないからです。もし `overflow` を使用するのであれば、コードにコメントをつけて説明するとよいでしょう。

**`display: flow-root` の使用**

より新しい値の `display` を使用すると、他の問題となりうる副作用なしに、新しいBFCを作成することができます。コンテナーブロックに `display: flow-root` を使用すると、新しい BFC が作成されます。

`display: flow-root;` を `<div>` に指定すると、コンテナーの中にあるすべてのものが、そのコンテナーのブロック整形コンテキストに参加し、浮動ボックスが要素の下部からはみ出ることはありません。

`flow-root` という値は、`root` 要素（ブラウザーでは `<html>` 要素）のように、その中にフローレイアウトのための新しいコンテキストを作成することを理解すれば、理にかなったものです。

これは、 {{htmlelement("button")}} 要素とボタン型の {{htmlelement("input")}} 要素の既定のレンダリングです。すなわち、ボタンは、 `display` の値が新しい BFC を自動的に作成しない値に設定されていない限り、新しい BFC を作成します。

#### HTML

```html
<section>
  <div class="box">
    <div class="float">浮動ボックスです。</div>
    <p>コンテナー内のコンテンツです。</p>
  </div>
</section>
<section>
  <div class="box" style="overflow:auto">
    <div class="float">浮動ボックスです。</div>
    <p><code>overflow:auto</code> のコンテナー内のコンテンツです。</p>
  </div>
</section>
<section>
  <div class="box" style="display:flow-root">
    <div class="float">浮動ボックスです。</div>
    <p><code>display:flow-root</code> のコンテナー内のコンテンツです。</p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Contain_internal_floats", 200, 480)}}

### 外部の浮動ボックスを除外する

以下の例では、 `display:flow-root` と浮動ボックスを使用して 2 列のレイアウトを実装しています。これは、新しい BFC を確立する通常のフロー内の要素が、その要素自身と同じブロック整形コンテキストにあるどの浮動ボックスのマージンボックスにも重ならないためです。

#### HTML

```html
<section>
  <div class="float">外部の浮動ボックスの大きさを変えてみてください</div>
  <div class="box"><p>通常</p></div>
</section>
<section>
  <div class="float">外部の浮動ボックスの大きさを変えてみてください</div>
  <div class="box" style="display:flow-root">
    <p><code>display:flow-root</code></p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  overflow: hidden; /* required by resize:both */
  resize: both;
  margin-right: 25px;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 75%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Exclude_external_floats", 200, 330)}}

### マージンの相殺を抑止する

新しい BFC を作成すると、隣接する 2 つの div 間の[マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)を避けることができます。

#### マージンの相殺の例

この例では、隣接する 2 つの {{HTMLElement("div")}} 要素があり、それぞれの垂直マージンは `10px` です。マージンが相殺されるため、両要素間の垂直方向の間隔は `10px` となり、期待される `20px` にはなりません。

```html live-sample___margin_collapsing_example
<div class="blue"></div>
<div class="red"></div>
```

```css live-sample___margin_collapsing_example
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}
```

{{EmbedLiveSample("Margin collapsing example", 120, 170)}}

#### マージンの相殺の抑止

この例では、 2 つ目の `<div>` を外側の `<div>` で囲み、外側の `<div>` に `overflow: hidden` を使用して新しい BFC を作成します。この新しい BFC は、入れ子になった `<div>` のマージンが外側の `<div>` のマージンと相殺されるのを防ぎます。

```html live-sample___preventing_margin_collapsing
<div class="blue"></div>
<div class="outer">
  <div class="red"></div>
</div>
```

```css live-sample___preventing_margin_collapsing
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.outer {
  overflow: hidden;
  background: transparent;
}
```

{{EmbedLiveSample("Preventing margin collapsing", 120, 170)}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS の構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
- [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [レイアウトモード](/ja/docs/Glossary/Layout_mode)
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)、[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)、[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)、[実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
- [値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [置換要素](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)
