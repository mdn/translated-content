---
title: CSS display の複数キーワード構文の使用
slug: Web/CSS/Guides/Display/Multi-keyword_syntax
original_slug: Web/CSS/CSS_display/multi-keyword_syntax_of_display
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

[CSS 表示方法モジュール](/ja/docs/Web/CSS/Guides/Display)は、 CSS の [`display`](/ja/docs/Web/CSS/Reference/Properties/display) プロパティの複数キーワード構文を定義しています。このガイドでは、複数キーワード構文を解説します。

> [!NOTE]
> 複数キーワード構文は、「2 値構文」または「複数値構文」とも呼ばれています。

## display プロパティの値を変更するとどうなるのか

CSS について最初に学ぶことのひとつに、ある要素はブロックレベル、ある要素はインラインレベルである、ということがあります。これらは[外部](/ja/docs/Web/CSS/Reference/Values/display-outside)表示型です。例えば `<h1>` や `<p>` は既定でブロックレベルであり、 `<span>` はインラインレベルです。 {{cssxref("display")}} プロパティを使用すると、ブロックとインラインを切り替えることができます。例えば、見出しをインラインにするには次のような CSS を使用します。

```css
h1 {
  display: inline;
}
```

`display` プロパティを使うと、 [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)や[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)も `display: grid` や `display: flex` を設定することで使用することができます。理解する上で重要なことは、要素の `display` 値を変更することで、その要素の直接の子要素の整形コンテキストを変更することができるという考え方です。 `display: flex` や `display: grid` を使用すると、要素の子はフレックスやグリッドのアイテムとなり、グリッドまたはフレックスボックス仕様のプロパティに応答します。

しかし、グリッドとフレックスボックスが示すのは、要素には**外部**と**内部**の両方の表示型があるということです。外側の表示型は、その要素がブロックレベルかインラインレベルかを表します。内側の表示型は、そのボックスの子要素がどのように動作するかを記述します。

例として、 `display: flex` を使用すると、ブロックレベルのコンテナーを作成し、フレックスの子を持つことになります。子要素はフレックス整形コンテキストに参加するように記述されます。 これは、 `<span>` — 通常はインラインレベルの要素 — に `display: flex` を適用すると分かります。 `<span>` はブロックレベル要素になります。レイアウト内の他のボックスとの関係では、ブロックレベルのものと同じように動作します。あたかも span に `display: block` を適用したかのようですが、子要素の動作も変更されます。

以下のライブサンプルでは、`<span>` に `display: flex` を適用しています。これはブロックレベルのボックスとなり、インライン方向に利用可能なすべての空間を占有します。ここで、 `justify-content: space-between;` を使用すると、 2 つのフレックスアイテムの間にこの空間を入れることができます。

```html live-sample___span-flex
<span class="flex"> いくつかのテキスト <em>強調テキスト</em> </span>
```

```css live-sample___span-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #ccc;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("span-flex")}}

インラインフレックスコンテナーを作成することができます。 `inline-flex` という単一の値を使ってフレックスコンテナーを作成すると、インラインレベルのボックスとフレックスの子が作成されます。この子はブロックレベルコンテナーのフレックスの子と同じように動作します。唯一変わったことは、親がインラインレベルボックスになったということです。したがって、他のインラインレベルのものと同様に動作し、ブロックレベルのボックスのように完全な幅（またはインライン軸のサイズ）を取りません。つまり、次のようなテキストがフレックスコンテナーと一緒に表示される可能性があります。

```html live-sample___inline-flex
<div class="flex">
  <div>One</div>
  <div>Two</div>
</div>
フレックスコンテナーに続くテキストです。
```

```css live-sample___inline-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex > div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex {
  border: 5px solid #ccc;
  display: inline-flex;
}
```

{{EmbedLiveSample("inline-flex")}}

グリッドレイアウトで作業する場合も同様です。 `display: grid` を使用すると、ブロックレベルのボックスが表示され、直接の子にはグリッド整形コンテキストが作成されます。 `display: inline-grid` を使用すると、インラインレベルのボックスが作成され、子要素にグリッド整形コンテキストが作成されます。

## 複数キーワードの構文の使用

上記の説明からわかるように、 `display` プロパティには大きな力があります。ページ上の他のボックスとの関係でブロックレベルかインラインレベルかを示すだけでなく、それが適用されているボックス内の整形コンテキストも示します。この動作をよりよく説明するために、`display` プロパティは 2 つの値、外部と内部の値を設定することができます。元の単一値の構文も有効です。

つまり、 `display: flex` を設定して、フレックスの子を持つブロックレベルのボックスを作成する代わりに、 `display: block flex` を使用することになります。フレックスの子要素を持つインラインレベルのボックスを作成するには、 `display: inline-flex` の代わりに `display: inline flex` を使用します。

```html live-sample___multi-keyword-flex
<h1>display の複数の値</h1>

<div class="flex flex1">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</div>

<p>最初の例は、フレックスの子要素を持つブロック要素です。</p>

<div class="flex flex2">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three</div>
</div>
2 つ目の例は、フレックス子要素を持つインライン要素です。
```

```css live-sample___multi-keyword-flex
body {
  font: 1.2em / 1.5 sans-serif;
}
.flex {
  border: 5px solid #ccc;
  gap: 10px;
}

.flex > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.flex1 {
  display: block flex;
}

.flex2 {
  display: inline flex;
}
```

{{EmbedLiveSample("multi-keyword-flex", "", "300px")}}

`display` の既存のすべての値に対応するものがあります。最も一般的なものを以下の表に示します。最も一般的なものを下の表に示します。完全なリストを見るには、 [`display` property specification](https://drafts.csswg.org/css-display/#display-value-summary) にある表を参照してください。

| 単一の値       | 複数の値           |
| -------------- | ------------------ |
| `block`        | `block flow`       |
| `flow-root`    | `block flow-root`  |
| `inline`       | `inline flow`      |
| `inline-block` | `inline flow-root` |
| `flex`         | `block flex`       |
| `inline-flex`  | `inline flex`      |
| `grid`         | `block grid`       |
| `inline-grid`  | `inline grid`      |

## display: block flow-root と display: inline flow-root

これらの新しい値が CSS レイアウトの明確化にどのように役立つかについて、表にあるあまり馴染みがないと思われる値について見てみましょう。複数キーワードの `display: block flow-root` は、単一の値 `display: flow-root` に対応します。この値の唯一の目的は、新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context) (BFC) を生成することです。 BFC は、ボックスの中にあるものがボックスの中に留まり、ボックスの外にあるものがボックスの中に侵入できないことを保証します。

以下の例では、 2 つの `<p>` 要素があり、そのうち 1 つは `<div>` の中にあって、どのように display の値が整形コンテキストに影響するかを表しています。
デモコントロールのある最初の `<div>` 要素は表示していないので、その後に続く要素に集中します。
注目すべき要素は「親」、「子」、「兄弟」の `<div>` 要素と `<p>` 要素で、これらの要素は ID によって区別することができます。

このレイアウトで注目すべき点は、親要素と子要素の間にコンテンツがないことと、子要素に上マージンが適用されていることです。
上マージンが効果的に子要素を親要素内に押し下げると思うかもしれませんが、代わりに起こるのは[マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)と呼ばれる現象です。
この場合、子要素のマージンは親の外接ボックスよりかなり上まで広がり、親要素をページのさらに下に押し下げます。
これは、子要素のボックスモデルを[ブラウザーの開発者ツール](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ブラウザーの開発ツールを利用して、ボックスモデルを見てみる)で検査するとわかります。

`<select>` 要素の選択オプションを変更して、様々な `display` 値の効果を確認してみてください。
任意の値と `flow-root` を使用すると、親の新しい整形コンテキストを作成し、子要素のマージンを親の外縁に対して相対的に配置することができ、マージンの崩れを避けることができます。
`flow-root` と `display: block flow-root` を切り替えると、 1 つの値の `flow-root` キーワードと同じ効果を得ることができます。

```js hidden live-sample___display_block_flow-root_and_display_inline_flow-root
function changeDisplayType() {
  var parentDiv = document.getElementById("parent");
  var siblingDiv = document.getElementById("sibling");
  var displayType = document.getElementById("displayType").value;

  parentDiv.style.display = displayType;
  siblingDiv.style.display = displayType;
}
```

```css hidden live-sample___display_block_flow-root_and_display_inline_flow-root
#controls {
  padding: 1rem;
  outline: 2px dashed black;
}
body {
  margin: 10px;
  font-family: sans-serif;
}
```

```css live-sample___display_block_flow-root_and_display_inline_flow-root
div,
p {
  outline: 2px solid black;
  background-color: cornflowerblue;
  display: block;
  margin-bottom: 2rem;
}

#parent {
  background-color: oldlace;
  min-height: 2rem;
}

#child {
  margin-top: 4rem;
  outline: 2px dashed red;
}

#sibling {
  background-color: lavender;
}
```

```html hidden live-sample___display_block_flow-root_and_display_inline_flow-root
<div id="controls">
  <label for="displayType">display:</label>
  <select id="displayType" onchange="changeDisplayType()">
    <option value="block">block</option>
    <option value="flow-root">flow-root</option>
    <option value="block flow-root">block flow-root</option>
    <option value="inline">inline</option>
    <option value="inline flow-root">inline flow-root</option>
  </select>
</div>
```

```html live-sample___display_block_flow-root_and_display_inline_flow-root
<div id="parent">
  <p id="child">#child の段落（#parent の内側）です。</p>
</div>
<p id="sibling">#sibling の段落（#parent の兄弟）です。</p>
```

{{EmbedLiveSample("display_block_flow-root_and_display_inline_flow-root", '90%', 380)}}

`flow-root` の値は、ブロックとインラインのレイアウトについて考えれば、理にかなっています。これは、[通常フロー](/ja/docs/Learn_web_development/Core/CSS_layout/Introduction#通常フロー)と呼ばれることもあるようです。 HTML ページは新しい整形コンテキストを作成し（浮動ボックスやマージンが境界からはみ出さない）、コンテンツはブロックとインラインレイアウトを使用して、通常のフローで表示されます。グリッドやフレックスのコンテナーを作成すると、新しい整形コンテキスト（それぞれグリッド整形コンテキストとフレックス整形コンテキスト）も作成されます。しかし、浮動ボックスやマージンを含めてもブロックやインラインレイアウトを使い続けたい場合は、新しいフロールートを作成し、ブロックやインラインレイアウトでやり直すことができます。その位置から下方向は、すべて新しいフロールートの中に含まれます。

したがって、`display: flow-root` の 2 値構文が `display: block flow-root` であることは、非常に理にかなっていると言えます。ブロックレベルのボックスと通常のフローに参加する子オブジェクトを持つ、ブロック整形コンテキストを作成しているのです。対応する組である `display: inline flow-root` についてはどうでしょうか？これは `display: inline-block` を記述する新しい方法です。

`display: inline-block` という値は、 CSS の初期から存在しています。この値を使用する理由は、例えばナビゲーションアイテムを作成する際に、インラインアイテムを要素から離して距離を置くことができるようにするため、または以下の例のようにインライン要素にパディング付きの背景を追加したい場合です。

```html live-sample___inline-block
<p>
  This paragraph has a span <span class="inline-block">with padding</span> it is
  an inline-block so the padding is contained and pushes the other line boxes
  away.
</p>
```

```css live-sample___inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  border: 2px dashed;
  width: 300px;
}
.inline-block {
  background-color: rgb(0 0 0 / 0.4);
  color: #fff;
  padding: 10px;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", "200px")}}

しかし、 `display: inline-block` を持つ要素は、浮動ボックスも含むことになります。それは、インラインレベルのボックスの中にあるすべてのものを含みます。したがって、 `display: inline-block` は `display: flow-root` と全く同じですが、ブロックレベルのボックスではなく、インラインレベルのボックスで行います。新しい構文は、この値で何が起こっているかを正確に表現しています。上記の例では、 Firefox で `display: inline-block` を `display: inline flow-root` に変更しても同じ結果になります。

## display の古い値について

display`の単一の値は、仕様書では古い値として記述されています。上の表で示されているように、各複数キーワード版にはレガシー版への直接的な割り当てがあるので、現在のところ複数キーワード版を使用することによる利点はありません。

`display` の値が一つだけの場合、[仕様書](https://www.w3.org/TR/css-display-3/#outer-role)では、外側の値である `block` や `inline` のみを使用した場合にどうするかが説明されています。

> 「`<display-outside>` の値が指定されたものの、 `<display-inside>` が省略された場合、その要素の内側の表示型は既定で flow になります。」

つまり、単一の値の世界での動作と全く同じです。 `display: block` や `display: inline` を指定すると、ボックスの外側の表示値が変更されますが、子オブジェクトは通常のフローで続行されます。
もし、内側の値である `flex`, `grid`, `flow-root` のみを指定した場合、[仕様書](https://www.w3.org/TR/css-display-3/#inner-model)では、外側の値として `block` を指定するように説明されています。

> 「`<display-inside>` の値が指定されたものの、 `<display-outside>` が省略された場合、その要素の外側の表示型は既定で block になります。ただし、 ruby は例外で既定で inline になります。」

最後に、いくつか旧来の[合成済みインラインレベル値](https://www.w3.org/TR/css-display-3/#legacy-display)があります。

- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`

対応しているブラウザーがこれらを単一の値として見つけた場合、以下の 2 値版と同じように扱われます。

- `inline flow-root`
- `inline table`
- `inline flex`
- `inline grid`

つまり、単一の値を使用する既存サイトと新規サイトの互換性を維持しつつ、仕様の進化を可能にすることで、現状の状況をすべてきちんとカバーしているのです。
