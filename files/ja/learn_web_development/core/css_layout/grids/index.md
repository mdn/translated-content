---
title: CSS グリッドレイアウト
slug: Learn_web_development/Core/CSS_layout/Grids
l10n:
  sourceCommit: f343e7e4a82a4be0378377e3d2a6b0fa48273312
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}

CSS グリッドレイアウト (grid Layout) は、ウェブ用の 2 次元レイアウトシステムです。 コンテンツを行と列に整理することができ、複雑なレイアウトの作成を簡素化する多くの機能を提供します。この記事では、グリッドレイアウトを始めるに当たって知っておくべきことをすべて説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>、
        <a href="/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals">基本的なテキストとフォントのスタイル設定</a>、
        <a href="/ja/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS レイアウトの基本概念</a>の基礎知識。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>CSS グリッドの目的を理解すること。一連のブロック要素やインライン要素を、 2 次元で柔軟にレイアウトします。</li>
          <li>グリッドの用語を理解すること。行、列、間隔、溝。</li>
          <li>既定で <code>display: grid</code> が何をもたらすかを理解すること。</li>
          <li>グリッド行、列、間隔の定義。</li>
          <li>グリッドでの要素の配置。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## グリッドレイアウトとは

グリッドとは、水平方向と垂直方向の線を集めたもので、デザイン要素を並べて表示することができます。 ページ間を移動するときに要素が跳び回ったり幅が変わったりしないようなデザインを作成するのに役立ちます。 これにより、ウェブサイトの一貫性が向上します。

グリッドには通常、**列** (column)、**行** (row)、そしてそれぞれの行と列の間の間隔です。間隔はよく溝またはガター (**gutter**) と呼ばれます。

![行、列、溝とラベル付けされた部分を持つ CSS グリッド。行はグリッドの水平方向の区分で、段組みはグリッドの垂直方向の区分です。 2 つの行の間の空間は「行の溝」と呼ばれ、 2 つの列の間の空間は「列の溝」と呼ばれます。](grid.png)

## CSS でグリッドを作成

デザインに必要なグリッドを決定したら、CSS グリッドレイアウトを使用して CSS でそのグリッドを作成し、その上にアイテムを配置できます。 最初にグリッドレイアウトの基本機能を見てから、プロジェクト用のシンプルなグリッドシステムを作成する方法を探ります。
次の動画では、 CSS グリッドを使用する方法を視覚的にわかりやすく説明しています。

{{EmbedYouTube("KOvGeFUHAC0")}}

### グリッドを定義

グリッドレイアウトを試してみましょう。 ここで、いくつかの子要素を持つコンテナーの例を示します。デフォルトでは、これらの要素は通常フローで表示され、その結果、それらは縦に並んで表示されます。

```html live-sample___simple-grid_0
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___simple-grid_0
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

{{EmbedLiveSample('simple-grid_0', '100%', "310") }}

フレックスボックスを定義する方法と同様に、 {{cssxref("display")}} プロパティの値に `grid` を設定することでグリッドレイアウトを定義します。フレックスボックスの場合と同様に、`display: grid` プロパティはコンテナーの直接の子をすべてグリッドアイテムに変換します。以下を CSS に追加してください。

```html hidden live-sample___simple-grid_1
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___simple-grid_1
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___simple-grid_1
.container {
  display: grid;
}
```

{{EmbedLiveSample('simple-grid_1', '100%', "310") }}

フレックスボックスとは異なり、アイテムはすぐには違う表示にはなりません。`display: grid` を宣言すると 1 列のグリッドになるので、アイテムは通常フローと同様に下方向に表示されていきます。

よりグリッドらしく見せるには、グリッドにいくつかの列を追加する必要があります。 ここに 200 ピクセルの列を 3 つ追加しましょう。 これらの列トラックを作成するために、任意の長さの単位やパーセントを使用できます。

```html hidden live-sample___simple-grid_2
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___simple-grid_2
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___simple-grid_2
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

アイテムが再配置され、グリッドのそれぞれのセルに 1 つずつあることを確認できるはずです。

{{EmbedLiveSample('simple-grid_2', '100%', "130") }}

<!-- ## グリッド概念の対話的な復習

次の Scrimba<sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_コンテンツ#partner_links_and_embeds)</sup>からの埋め込みコンテンツは、CSS グリッドの基本に関する対話型レッスンを提供します。同時に、コードの動作を確認するために操作できるライブグリッドの例も含まれています。

<mdn-scrim-inline url="https://scrimba.com/learn-css-grid-c02k/~01" scrimtitle="Your first grid"></scrim-inline>
-->

### fr 単位を使用した柔軟なグリッド

長さとパーセントを使用してグリッドを作成するだけでなく、 [`fr`](/ja/docs/Web/CSS/Reference/Values/flex_value) 単位を使用して柔軟にグリッドの行と列のサイズを変更できます。 この単位は、グリッドコンテナー内の使用可能な空間の割合を表します。

```html hidden live-sample___grid-fr-unit_0
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-fr-unit_0
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

ここでトラックリストを次の定義に変更し、3 つの `1fr` トラックを作成します。

```css live-sample___grid-fr-unit_0
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_0', '100%', "130") }}

これで柔軟なトラックになりました。
`fr` 単位は空間を比例配分します。このようにトラックに異なる正の値を指定することができます。
トラックリストを次の定義に変更し、1 つの `2fr` トラックと 2 つの `1fr` トラックを作成するようにします。

```html hidden live-sample___grid-fr-unit_1
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-fr-unit_1
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-fr-unit_1
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

{{EmbedLiveSample('grid-fr-unit_1', '100%', "130") }}

最初のトラックは、利用できる空間の `2fr` を確保し、他の 2 つのトラックは `1fr` を確保するので、最初のトラックはより大きくなります。 `fr` 単位と固定された長さの単位を混合することができます。この場合、修正されたトラックに必要な空間が最初に使用され、残りの空間が他のトラックに分配されます。

> [!NOTE]
> `fr` 単位は、*すべて*の空間ではなく、*使用可能*な空間を分配します。そのため、トラックの中に何か大きなものがある場合、共有できる自由空間は少なくなります。

### トラックの間隔

トラックの間隔を作成するには、次のプロパティを使用してください。

- {{cssxref("column-gap")}} は列の間隔
- {{cssxref("row-gap")}} は行の間隔
- {{cssxref("gap")}} は両方の一括指定

```html hidden live-sample___grid-gap
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-gap
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

ここで `gap` プロパティを追加して、`20px` の値でトラック間にすき間を作成します。

```css live-sample___grid-gap
.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-gap', '100%', "180") }}

これらの間隔は任意の長さの単位またはパーセント値で指定できますが、`fr` 単位は使用できません。

### トラックリストの繰り返し

CSS の `repeat()` 関数を使用して、トラックリストの全部または一部を繰り返すことができます。
トラックリストを次のように変更します。

```html hidden live-sample___grid-repeat
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-repeat
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-repeat
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

{{EmbedLiveSample('grid-repeat', '100%', "180") }}

以前と同様に、3 つの `1fr` トラックが取得されます。`repeat()` 関数に渡す最初の値は、リストを繰り返す回数を指定します。2 つ目として渡す値はトラックリストであり、繰り返したい 1 つ以上のトラックの組み合わせを指定できます。

### 暗黙的グリッドと明示的グリッド

ここまで、列のトラックだけを指定してきましたが、行はコンテンツを保持するために自動的に作成されます。この概念は、明示的グリッドと暗黙的グリッドの違いを強調しています。
ここでは、 2 つの型のグリッドの違いについてもう少し詳しく説明します。

- **明示的グリッド**は、 `grid-template-columns` または `grid-template-rows` を使用して作成します。
- **暗黙的グリッド**は、定義した明示的なグリッドを拡張するもので、そのグリッドの外側、例えば新しい行にグリッド線を描画することでコンテンツを配置します。

既定では、暗黙的グリッドに作成されたトラックは `auto` でサイズ調整されます。 これは一般に、コンテンツを十分に含むことができる大きさがあることを意味します。 暗黙的グリッドのトラックにサイズを指定したい場合は、 {{cssxref("grid-auto-rows")}} プロパティと {{cssxref("grid-auto-columns")}} プロパティを使用できます。 CSS に `grid-auto-rows` を `100px` の値で追加すると、作成された行の高さは 100 ピクセルになります。

```html hidden live-sample___grid-auto
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-auto
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-auto
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 20px;
}
```

{{EmbedLiveSample('grid-auto', '100%', "350") }}

### minmax() 関数

100 ピクセルより高いコンテンツを追加する場合、100 ピクセルの高さのトラックはあまり役に立ちません。 その場合、オーバーフローが発生します。トラックの高さは*最低* 100 ピクセルで、さらに多くのコンテンツがトラックに入る場合は拡大できると良いでしょう。ウェブに関する基本的な事実として、要素の高さが実際にどれほどになるかは決して予測できません。追加コンテンツや大きなフォントサイズが、あらゆるサイズでピクセル単位の正確さを追求するデザインに問題が発生させる可能性があるのです。

{{cssxref("minmax()")}} 関数を使用すると、トラックの最小サイズと最大サイズ、例えば `minmax(100px, auto)` を設定できます。 最小サイズは 100 ピクセルですが、最大サイズは `auto` で、コンテンツに合わせて拡大されます。 次のように `minmax` の値を使用するように `grid-auto-rows` を変更してみてください。

```html hidden live-sample___grid-minmax_0
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four<br />More コンテンツ</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-minmax_0
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-minmax_0
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
  gap: 20px;
}
```

{{EmbedLiveSample('grid-minmax_0', '100%', "210") }}

追加のコンテンツを追加すると、それが収まるようにトラックが拡大されます。 拡張は行に沿って行われることに注意してください。

### 収まる限り多くの列

トラックリスト、反復記法、 {{cssxref("minmax()")}} について学んだことのいくつかを組み合わせて、便利なパターンを作成できます。 グリッドに、コンテナーに収まるだけの数の列を作成するように依頼できると便利な場合があります。 これを行うには、 `grid-template-columns` の値を {{cssxref("repeat()")}} 記法を使用して設定しますが、数値を渡す代わりにキーワード [`auto-fit`](/ja/docs/Web/CSS/Reference/Values/repeat#auto-fit) を渡します。 関数の 2 番目の引数には、`minmax()` を使用し、最小値は、必要な最小トラックサイズに等しく、最大値は `1fr` です。

```html hidden live-sample___grid-minmax_1
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four<br />More コンテンツ</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css hidden live-sample___grid-minmax_1
body {
  font-family: sans-serif;
}
.container > div {
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
}
```

```css live-sample___grid-minmax_1
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  gap: 20px;
}
```

{{EmbedLiveSample('grid-minmax_1', '100%', "210") }}

これは、グリッドがコンテナーに収まるだけの数の 200 ピクセルの列を作成し、その後すべての列の間で残っている空間を共有するためです — 最大は `1fr` で、すでにご存じのとおり、トラック間で空間を均等に配分するためのものです。

## 線に基づいた配置

ここで、グリッドの作成からグリッドへの配置に移ります。グリッドには常に線があります。これらは 1 から始まり、文書の[書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)に関連しています。例えば、英語（左書き）の場合、列線 1 はグリッドの左端であり、行線 1 はグリッドの上端となり、アラビア語（右書き）の場合、列線 1 は右端になります。

これらの線に沿ってアイテムを配置するには、アイテムを配置するグリッド領域の開始線と終了線を指定します。このために使用することができる 4 つのプロパティがあります。

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}

これらのプロパティはその値として線番号を受け入れるので、例えばある項目が 1 本目から始まり 3 本目で終わるように指定することができます。
また、開始線と終了線を同時に指定する一括指定プロパティを使用することもできます。指定する線はスラッシュ `/` で区切ります。

- {{cssxref("grid-column")}} は `grid-column-start` および `grid-column-end` の一括指定
- {{cssxref("grid-row")}} は `grid-row-start` および `grid-row-end` の一括指定

```html live-sample___grid-placement_0
<div class="container">
  <header>ヘッダー</header>
  <main>
    <h1>主題</h1>
    <p>主題コンテンツ…</p>
  </main>
  <aside>
    <h2>余談</h2>
    <p>関連コンテンツ</p>
  </aside>
  <footer>フッター</footer>
</div>
```

```css live-sample___grid-placement_0
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

配置が定義されていない場合、自動配置がそれぞれのアイテムをグリッド内の自分自身でセルに配置していることがわかります。{{htmlelement("header")}} は `1fr` （4 分の 1）を占め、{{htmlelement("main")}} は `3fr` （4 分の 3）を占めています。

{{EmbedLiveSample('grid-placement_0', '100%', "230") }}

グリッド線を使用して、サイトのすべての要素を配置しましょう。CSS の末尾に以下のルールを追加してください。

```html hidden live-sample___grid-placement_1
<div class="container">
  <header>ヘッダー</header>
  <main>
    <h1>主題</h1>
    <p>主題コンテンツ…</p>
  </main>
  <aside>
    <h2>余談</h2>
    <p>関連コンテンツ</p>
  </aside>
  <footer>フッター</footer>
</div>
```

```css hidden live-sample___grid-placement_1
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

```css live-sample___grid-placement_1
header {
  grid-column: 1 / 3;
  grid-row: 1;
}
main {
  grid-column: 2;
  grid-row: 2;
}
aside {
  grid-column: 1;
  grid-row: 2;
}
footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```

{{htmlelement("header")}} と {{htmlelement("footer")}} は `1 / 3` に設定されるようになりました。すなわち、線 `1` で始まり、線 `3` で終わることを示します。

{{EmbedLiveSample('grid-placement_1', '100%', "230") }}

> [!NOTE]
> 値 `-1` を使用することで、列または行の末尾の線を対象とし、そこから負の数値を用いて逆側に向かってカウントできます。なお、線の番号付けは常に明示的なグリッドの端から行われ、[暗黙のグリッド](/ja/docs/Glossary/Grid)からは行われない点に注意してください。

## grid-template-areas での位置指定

アイテムをグリッドに配置する別の方法は、 {{cssxref("grid-template-areas")}} プロパティを使用して、デザインのさまざまな要素に名前を付けることです。

```html hidden live-sample___grid-placement_2
<div class="container">
  <header>ヘッダー</header>
  <main>
    <h1>主題</h1>
    <p>主題コンテンツ…</p>
  </main>
  <aside>
    <h2>余談</h2>
    <p>関連コンテンツ</p>
  </aside>
  <footer>フッター</footer>
</div>
```

```css hidden live-sample___grid-placement_2
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

```css live-sample___grid-placement_2
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header {
  grid-area: header;
}
main {
  grid-area: content;
}
aside {
  grid-area: sidebar;
}
footer {
  grid-area: footer;
}
```

ここでは、3 つの行のレイアウトを定義するために {{CSSXRef("grid-template-areas")}} プロパティを使用しています。1 行目の値は `header header`、2 つ目は `sidebar コンテンツ`、3 つ目は `footer footer` です。次に、要素が `grid-template-areas` 内のどこに配置されるかを定義するために、{{CSSXRef("grid-area")}} プロパティを使用して、要素が `grid-template-areas` 内のどこに配置されるかを定義しています。

{{EmbedLiveSample('grid-placement_2', '100%', "230") }}

`grid-template-area` のルールは次のとおりです。

- グリッドのすべてのセルを埋める必要があります。
- 2 つのセルにまたがるようにするには、名前を繰り返します。
- セルを空のままにするには、`.` （ピリオド）を使用します。
- 領域は長方形である必要があります。 例えば、L 字型の領域を持つことはできません。
- 領域を異なる場所で繰り返すことはできません。

レイアウトを弄ることができます。フッターを記事の下にだけ配置したり、サイドバーをすべて下にまたがるように変更したりすることができます。 CSS を見ていくだけで、何が起こっているのかがよくわかるので、これはレイアウトを記述するのにとてもいい方法です。

## 入れ子のグリッドとサブグリッド

グリッドを別のグリッドの中に入れ子にして、[サブグリッド](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid)を作成することが可能です。
これを行うには、グリッドアイテムに `display: grid` プロパティを設定します。

記事のコンテナーを追加し、入れ子のグリッドを使用して複数の記事のレイアウトを制御することで、前回の例を展開してみましょう。
入れ子のグリッドでは 1 列しか使用していませんが、 `grid-template-rows` プロパティを使用することで、行を 2:1:1 の比率で分割するように定義することができます。
この手法により、ページ上部の 1 つの記事を大きく表示し、他にもプレビューのように小さく表示するレイアウトを作成することができます。

```html hidden live-sample___nesting-grids
<div class="container">
  <header>ヘッダー</header>
  <main>
    <article>
      <h1>記事 1</h1>
      <p>コンテンツ…</p>
    </article>
    <article>
      <h1>記事 2</h1>
      <p>コンテンツ…</p>
    </article>
    <article>
      <h1>記事 3</h1>
      <p>コンテンツ…</p>
    </article>
  </main>
  <aside>
    <h2>余談</h2>
    <p>関連コンテンツ</p>
  </aside>
  <footer>フッター</footer>
</div>
```

```css hidden live-sample___nesting-grids
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
header {
  grid-area: header;
}
aside {
  border-right: 1px solid rebeccapurple;
  grid-area: sidebar;
}
footer {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
```

```css live-sample___nesting-grids
main {
  grid-area: content;
  display: grid;
  grid-template-rows: 4fr 3fr 3fr;
  gap: inherit;
}
article {
  padding: 10px;
  border: 2px solid rebeccapurple;
  border-radius: 5px;
}
```

{{EmbedLiveSample('nesting-grids', '100%', 560)}}

入れ子グリッドのレイアウトを簡単に作業するために、 `grid-template-rows` と `grid-template-columns` プロパティに `subgrid` を使用することができます。これにより、親グリッドで定義したトラックを活用することができます。

次の例では、[線に基づいた配置](#線に基づいた配置)を使用しており、入れ子グリッドを親グリッドの複数の列や行にまたがるようにすることができます。
`subgrid` を追加し、親グリッドの列を継承しつつ、入れ子グリッド内の行に異なるレイアウトを追加します。

```html hidden live-sample___subgrid
<div class="container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div class="subgrid">
    <div>Five</div>
    <div>Six</div>
    <div>Seven</div>
    <div>Eight</div>
  </div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css hidden live-sample___subgrid
.container {
  font-family: sans-serif;
}
.container div {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  border: 1px solid white;
  color: white;
}
```

```css live-sample___subgrid
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
}
.subgrid {
  grid-column: 1 / 4;
  grid-row: 2 / 4;
  display: grid;
  gap: inherit;
  grid-template-columns: subgrid;
  grid-template-rows: 2fr 1fr;
}
```

{{ EmbedLiveSample('subgrid', '100%', 200) }}

## グリッドフレームワーク

数多くのグリッドフレームワークが利用できる。これらは 12 列または 16 列グリッド、間隔や配置用のユーティリティクラス、ブレークポイントによるレスポンシブデザインなどの機能を提供する事前構築済みの CSS システムです。

良いニュースは、グリッドベースのレイアウトを作成するために、おそらく独自の回避策は必要ないということです。すべての現行ブラウザーが CSS グリッド標準に対応していますいる。

次の例は、そのようなコードがどのようなものになるかを簡略化したものです。`grid-template-columns: repeat(12, 1fr);` を使用して定義された 12 列のグリッドを持つコンテナーと、前の 2 つの例で使用したのと同じマークアップが機能します。これで、12 列のグリッド上にコンテンツを配置するために、線ベースの配置を使用することができます。

```html hidden live-sample___grid-frameworks
<div class="container">
  <header>ヘッダー</header>
  <main>
    <h1>主題</h1>
    <p>主題コンテンツ…</p>
  </main>
  <aside>
    <h2>余談</h2>
    <p>関連コンテンツ</p>
  </aside>
  <footer>フッター</footer>
</div>
```

```css hidden live-sample___grid-frameworks
.container {
  font-family: sans-serif;
}

header,
footer {
  border-radius: 5px;
  padding: 10px;
  background-color: rebeccapurple;
  color: whitesmoke;
  text-align: center;
}
aside {
  border-right: 1px solid rebeccapurple;
}
```

```css live-sample___grid-frameworks
.container {
  font-family: sans-serif;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}
header {
  grid-column: 1 / 13;
  grid-row: 1;
}
main {
  grid-column: 4 / 13;
  grid-row: 2;
}
aside {
  grid-column: 1 / 4;
  grid-row: 2;
}
footer {
  grid-column: 1 / 13;
  grid-row: 3;
}
```

{{EmbedLiveSample('grid-frameworks', '100%', "230") }}

もし [Firefox グリッドインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)を使用して、デザイン上のグリッド線をオーバーレイで表示すると、12 列グリッドがどのように動作するかが分かります。

![デザインの上に重ねられた 12 列のグリッド。](learn-grids-inspector.png)

## まとめ

この概要では、CSS グリッドレイアウトの主な機能について説明しました。自分のデザインで使い始めることができるはずです。

次の記事では、この情報をどれだけ理解し、記憶しているかを確認するために使用できるテストをいくつか提供します。

## 関連情報

- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout#ガイド)
  - : CSS グリッドレイアウトモジュールのメインページで、多数の追加リソースを格納しています。
- [A complete guide to CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/)（英語）
  - : 視覚的なガイド（CSS-Tricks、2023）
- [Grid Garden](https://cssgridgarden.com/)（英語）
  - : グリッドの基本を学び、より理解を深めるための教育用ゲームです。

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout")}}
