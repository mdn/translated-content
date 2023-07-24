---
title: ブロック整形コンテキスト
slug: Web/Guide/CSS/Block_formatting_context
---

{{ CSSRef }}

**ブロック整形コンテキスト** (block formatting context, BFC) は、ウェブページにおける CSS の視覚的なレンダリングの一部です。ブロックボックスのレイアウトが行われ、浮動が他の要素と相互作用する領域です。

ブロック整形コンテキストは、以下のうちの少なくとも一つから生成されます。

- 文書のルート要素 (`<html>`)
- 浮動要素 ({{ cssxref("float") }} が `none` 以外である要素)
- 絶対位置指定の要素 ({{ cssxref("position") }} が `absolute` または `fixed` である要素)
- インラインブロック ({{ cssxref("display") }}`: inline-block` である要素)
- 表のセル ({{ cssxref("display") }}`: table-cell` を持つ要素。これは HTML の表のセルの既定値です)
- 表のキャプション ({{ cssxref("display") }}`: table-caption` を持つ要素。HTMLの、表のキャプションの既定値です)
- {{ cssxref("display") }}`: table`, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (つまりそれぞれ HTML の表、表の行、表の本体、表のヘッダー、表のフッターの既定値), `inline-table` のついた要素によって暗黙的に生成された無名の表のセル。
- {{ cssxref("overflow") }} の値が `visible` 以外であるブロック要素
- {{ cssxref("display") }}`: flow-root`
- {{ cssxref("contain") }}`: layout`, `content`, `paint` の付いた要素
- フレックスアイテム ({{ cssxref("display") }}`: flex` または `inline-flex` である要素の直接の子要素)、[フレックス](/ja/docs/Glossary/Flex_Container)でも[グリッド](/ja/docs/Glossary/Grid_Container)でも[表](/ja/docs/Web/CSS/CSS_Table)でもない場合
- グリッドアイテム ({{ cssxref("display") }}`: grid` または `inline-grid` である要素の直接の子要素)、[フレックス](/ja/docs/Glossary/Flex_Container)でも[グリッド](/ja/docs/Glossary/Grid_Container)でも[表](/ja/docs/Web/CSS/CSS_Table)でもない場合
- 段組みコンテナー ({{ cssxref("column-count") }} または {{ cssxref("column-width") }} が `auto` ではない要素、 `column-count: 1` の要素も含む)
- {{ cssxref("column-span") }}`: all` は、 `column-span: all` の要素が段組みコンテナーに含まれていなくても、常に新たな整形コンテキストを生成します ([仕様変更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51), [Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362))。

整形コンテキストはレイアウトに影響を与えますが、通常はレイアウトを変更するのではなく、位置決めと浮動要素の解消のために新しいブロック整形コンテキストを作成します。これは、新しいブロック整形コンテキストを確立する要素が次のようになるからです。

- 内部の浮動要素を収めます。
- 外部の浮動要素を追いやります。
- [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)を抑止します。

> **メモ:** フレックス／グリッドコンテナー ({{ cssxref("display") }}: flex/grid/inline-flex/inline-grid) は新しいフレックス／グリッド整形コンテキストを確立します。これは、レイアウト以外はブロック整形コンテキストに類似しています。フレックス／グリッドコンテナーの中に利用できる浮動子要素はありませんが、外部の浮動要素を除外したり、マージンの折りたたみを抑制したりすることはできます。

## 例

### 内部の浮動要素を収める

浮動小数点コンテンツと横に並んだコンテンツの高さを同じにします。

新しいBFC を作成する効果を見るために、これらのいくつかを見てみましょう。

以下の例では、`border`が適用された `<div>` の中に浮動要素があります。その `<div>` のコンテンツは浮動要素の横に並んだ状態になっています。浮動要素のコンテンツは横に並んだコンテンツよりも高さがあるため、`<div>` の境界線が浮動要素を貫通してしまいます。[フロー内とフローの外のガイド](/ja/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)で説明しているように、浮動要素がフローから外れたので、 `<div>` の `background` と `border` には浮動要素はなく、コンテンツだけが保持されています。

**`overflow: auto` の使用**

`overflow: auto` を設定したり、初期値である `overflow: visible` 以外の値を設定すると、浮動要素を含む新しい BFC を作成することができます。これで、`<div>` がレイアウトの中のミニレイアウトになります。子要素はすべてこの中に含まれます。

新しい BFC を作成するために `overflow` を使用することの問題点は、`overflow` プロパティが、はみ出したコンテンツをどのように処理したいかをブラウザーに指示するためのものであることです。このプロパティを純粋に BFC を作成するために使用すると、不要なスクロールバーやクリップドシャドウが返されることがあるようです。さらに、将来的に開発者が読解できない可能性もあります。なぜそのために `overflow` を使用したのかがわからないかもしれないからです。もし `overflow` を使用するのであれば、コードにコメントをつけて説明するとよいでしょう。

**`display: flow-root` の使用**

より新しい値の `display` を使用すると、他の問題となりうる副作用なしに、新しいBFCを作成することができます。コンテナブロックに `display: flow-root` を使用すると、新しい BFC が作成されます。

`display: flow-root;` を `<div>` に指定すると、コンテナーの中にあるすべてのものが、そのコンテナーのブロック整形コンテキストに参加し、浮動要素が要素の下部からはみ出ることはありません。

`flow-root` という値は、`root` 要素（ブラウザーでは `<html>` 要素）のように、その中にフローレイアウトのための新しいコンテキストを作成することを理解すれば、理にかなったものです。

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
  background-color: rgb(224, 206, 247);
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
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  padding: 10px;
}
```

#### 結果

{{EmbedLiveSample("Contain_internal_floats", 200, 480)}}

### 外部の浮動要素を除外する

以下の例では、 `display:flow-root` と浮動要素を使用して 2 列のレイアウトを実装しています。これは、新しい BFC を確立する通常のフロー内の要素が、その要素自身と同じブロック整形コンテキストにあるどの浮動要素のマージンボックスにも重ならないためです。

#### HTML

```html
<section>
  <div class="float">外部の浮動要素の大きさを変えてみてください</div>
  <div class="box"><p>通常</p></div>
</section>
<section>
  <div class="float">外部の浮動要素の大きさを変えてみてください</div>
  <div class="box" style="display:flow-root">
    <p><code>display:flow-root</code></p>
    <p></p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224, 206, 247);
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
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid black;
  padding: 10px;
}
```

#### 結果

{{EmbedLiveSample("Exclude_external_floats", 200, 330)}}

inline-block で width:\<percentage> を使用するよりも、この場合は右側の div の幅を指定する必要がありません。

なお、最近の CSS では、フレックスボックスの方が効率的に複数列のレイアウトを搭載することができます。

### マージンの相殺

新しい BFC を作成すると、隣接する 2 つの div 間の[マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)を避けることができます。

#### HTML

```html
<div class="blue"></div>
<div class="red-outer">
  <div class="red-inner">red inner</div>
</div>
```

#### CSS

```css
.blue,
.red-inner {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red-outer {
  overflow: hidden;
  background: red;
}
```

#### 結果

{{EmbedLiveSample("Margin_collapsing", 120, 170)}}

## 仕様書

{{Specifications}}

## 関連情報

- {{ cssxref("float") }}, {{ cssxref("clear") }}
- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
