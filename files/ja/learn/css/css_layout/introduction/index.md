---
title: CSS レイアウト入門
slug: Learn/CSS/CSS_layout/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

この記事では、以前のモジュールで既に触れた CSS レイアウト機能のいくつか（さまざまな {{cssxref("display")}} の値など）を要約し、このモジュール全体で取り上げるいくつかの概念を紹介します。

| 前提知識: | HTML の基礎（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | CSS ページレイアウトのテクニックの概要を説明します。 各テクニックは、以降のチュートリアルで詳細に学ぶことができます。                                               |

CSS のページレイアウト技術によって、ウェブページに含まれる要素の位置を制御できます。通常のレイアウトフローによる初期配置、隣接する要素、それらの親コンテナ、またはメインビューポート、ウィンドウの位置、といったものが位置を制御する基準になりえます。 このモジュールでは次に挙げるページレイアウト技術の詳細について説明します。

- 通常フロー
- {{cssxref("display")}} プロパティ
- フレックスボックス
- グリッド
- フロート
- 位置指定
- 表レイアウト
- 段組みレイアウト

どの技術にも、それぞれ用途、長所、短所があり、単独で使用するようには設計されていません。 ひとつひとつの技術がどのように設計されているかを理解することは、それぞれのタスクに最適なレイアウト方法を判断するための基礎になるでしょう。

## 通常フロー

通常フロー（Normal flow）は、ページレイアウトの制御を何もしない場合に、ブラウザーがデフォルトで HTML ページをレイアウトする方法です。 次の簡単な HTML の例を見てみましょう。

```html
<p>I love my cat.</p>

<ul>
  <li>Buy cat food</li>
  <li>Exercise</li>
  <li>Cheer up friend</li>
</ul>

<p>The end!</p>
```

デフォルトでは、ブラウザーはこのコードを次のように表示します。

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

ここでは、HTML がソースコードに現れる順序どおりに表示されていることに注意してください — 最初の段落の後に番号なしリストが続き、その後に 2 番目の段落が続きます。

上下に並んで表示される要素は*ブロック*要素と呼ばれています。段落内の個々の単語と同じように横に並んで表示される*インライン*要素とは対照的です。

> **メモ:** ブロック要素のコンテンツがレイアウトされる方向は、ブロック方向（Block Direction）と呼ばれます。 ブロック方向は、英語などの横書きモード（Horizontal Writing Mode）の言語では垂直に走ります。 日本語のような縦書きモード（Vertical Writing Mode）では、どの言語でも水平に走ります。 対応するインライン方向（Inline Direction）は、インラインコンテンツ（文など）が走る方向です。

CSS で何かをレイアウトするとその要素を通常フローから遠ざけることになりますが、ページ上の多くの要素は通常フローにしたがって適宜レイアウトされます。これが、構造化された HTML 文書から始めることが非常に重要である理由です。 なぜなら、多くの要素のレイアウトに一から悪戦苦闘するかわりに、あらかじめ多くのものがレイアウトされている現状で作業できるからです。

CSS で要素をどのように配置するかを変更できる方法は次のとおりです。

- **{{cssxref("display")}} プロパティ** — `block`、`inline`、`inline-block` などの標準値は、要素が通常フローでどのようにふるまうかを変更することができます（詳細については、[CSS ボックスの種類](/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)を参照してください）。それから、[CSS グリッド](/ja/docs/Learn/CSS/CSS_layout/Grids)や[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)のように、`display` の値によってオンにされるレイアウト方法全体があります。
- **フロート** — `left` のような {{cssxref("float")}} の値を適用すると、雑誌のレイアウトで画像の周囲をテキストが取り囲むことがあるように、要素の片側に沿ってブロックレベル要素が折り返されることがあります。
- **{{cssxref("position")}} プロパティ** — 他のボックス内のボックスの配置を正確に制御できます。 通常フローでは `static` 位置指定がデフォルトですが、他の値を使用して要素を異なる方法でレイアウトすることもできます。 例えば、ブラウザーのビューポートの左上に固定するなどです。
- **表レイアウト** — HTML 表の一部をスタイルするために設計された機能は、`display: table` とそれに関連するプロパティを使用して、表以外の要素にも使用できます。
- **段組みレイアウト** — [段組みレイアウト](/ja/docs/Web/CSS/CSS_Columns)のプロパティを使用すると、新聞のようにブロックのコンテンツを段組みにレイアウトできます。

## display プロパティ

CSS でページレイアウトを実現するための主な方法は、`display` プロパティのすべての値です。 このプロパティにより、デフォルトの表示方法を変更することができます。 通常フローに属するすべての要素には `display` の値が設定されており、この値によって要素のデフォルトのふるまいが決まります。 例えば、英語の文書内で{{htmlelement("p", "段落")}}が上から下へ表示されるのは、`display: block` でスタイルが設定されているためです。 段落内のテキストの周囲にリンクを作成しても、そのリンクは残りのテキストとインラインのままで、改行しません。 これは、{{htmlelement("a")}} 要素がデフォルトで `display: inline` であるためです。

このような display のデフォルトのふるまいは変更できます。 例えば、{{htmlelement("li")}} 要素はデフォルトで `display: block` です。 つまり、英語の文書ではリスト項目は上下に表示されます。 `display` の値を `inline` に変更した場合、単語が文中で行うように、それらは互いに隣接して表示されます。 任意の要素に対して `display` の値を変更できるということは、どのように見えるかについて心配することなく、意味論的(semantic)な視点で HTML 要素を選択できるということです。 見た目はあなたが変えることができるものです。

ひとつの項目を `block` から `inline` に、またはその逆に切り替えてデフォルトの表示方法を変更することに加えて、より大きい単位で作用するいくつかのレイアウト手法を `display` の値を通じて使い始めることができます。 ただし、これらを使用するときは、通常、追加のプロパティを指定する必要があります。 要素のレイアウトを検討する目的において最も重要な値は `display: flex` と `display: grid` の 2 つです。

## フレックスボックス

フレックスボックス（Flexbox）は [Flexible Box Layout](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout) Module の略称で、行または列のいずれかとして、物を 1 次元にレイアウトすることを容易にするように設計されています。 フレックスボックスを使うには、`display: flex` をレイアウトしたい要素の親要素に適用します。 その直接の子はすべてフレックス項目になります。これは簡単な例で見ることができます。

以下の HTML マークアップは、3 つの {{htmlelement("div")}} 要素が入っている `wrapper` クラスを持つ包含要素を示しています。 デフォルトでは、これらは英語の文書では上下にブロック要素として表示されます。

ただし、`display: flex` を親に追加すると、3 つの項目は列に配置されます。 これは、それらが*フレックス項目*になり、フレックスボックスがそれらに与えるいくつかの初期値を使用するためです。 {{cssxref("flex-direction")}} の初期値は `row` なので、行として表示されます。 {{cssxref("align-items")}} プロパティの初期値は `stretch` であるため、それらはすべて最も高い項目の高さまで伸びているように見えます。 これは、項目がフレックスコンテナの高さまで伸びることを意味します。 この場合、項目は最も高い項目によって定義されます。 項目はすべてコンテナの先頭に配置され、行の末尾に余分なスペースが残ります。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Flex_1', '300', '200') }}

フレックスコンテナに適用できる上記のプロパティに加えて、フレックス項目に適用できるプロパティがあります。 これらのプロパティは、とりわけ、項目のたわみ方を変えることができ、利用可能なスペースに収まるように項目を拡大および縮小することを可能にします。

この単純な例として、すべての子項目に `1` の値の {{cssxref("flex")}} プロパティを追加できます。 これにより、末尾にスペースを残すのではなく、すべての項目が拡大してコンテナがいっぱいになります。 より多くのスペースがあるならば、項目はより広くなり、スペースが少ないと狭くなります。 さらに、マークアップに別の要素を追加すると、項目はすべてスペースを空けるために小さくなります — サイズに関係なく、同じ大きさのスペースを占めるようにサイズが調整されます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Flex_2', '300', '200') }}

> **メモ:** これはフレックスボックスで可能なことの非常に短い紹介です。 詳細については、[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)の記事を参照してください。

## グリッドレイアウト

フレックスボックスは 1 次元レイアウト用に設計されていますが、グリッドレイアウト（Grid Layout）は 2 次元用に設計されています — 行と列に物を並べます。

繰り返しになりますが、`display: grid` という特定の `display` の値でグリッドレイアウト（Grid Layout）をオンにすることができます。 以下の例では、コンテナといくつかの子要素とともに、`flex` の例と同様のマークアップを使用しています。 `display: grid` の使用に加えて、{{cssxref("grid-template-rows")}} プロパティと {{cssxref("grid-template-columns")}} プロパティをそれぞれ使用して、親の行と列のトラックをいくつか定義します。 それぞれ `1fr` の 3 列と `100px` の 2 行を定義しました。 子要素に規則を置く必要はなく、自動的にグリッドが作成したセルに配置されます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
  <div class="box6">Six</div>
</div>
```

{{ EmbedLiveSample('Grid_1', '300', '330') }}

グリッドを作成したら、上記の自動配置のふるまいに頼らずに、明示的に項目を配置できます。 以下の 2 番目の例では、同じグリッドを定義しましたが、今回は 3 つの子項目を使用しています。 {{cssxref("grid-column")}} プロパティと {{cssxref("grid-row")}} プロパティを使用して各項目の開始ラインと終了ラインを設定しました。 これにより、項目が複数のトラックにまたがるようになります。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207, 232, 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Grid_2', '300', '330') }}

> **メモ:** これら 2 つの例は、グリッドレイアウトの機能のほんの一部です。 詳細については、[グリッドレイアウト](/ja/docs/Learn/CSS/CSS_layout/Grids)の記事を参照してください。

このガイドの残りの部分では、他のレイアウト方法について説明します。 これは、ページの主なレイアウト構造にとってはそれほど重要ではありませんが、それでも特定のタスクを達成するのに役立ちます。 各レイアウトタスクの性質を理解することで、デザインの特定の構成要素を見たときに、それに最も適したレイアウトの種類が明らかになることがすぐにわかります。

## フロート

要素を浮動すると、その要素とそれに通常フローで続くブロックレベル要素のふるまいが変わります。 要素が左または右に移動されて通常フローから除かれ、囲むコンテンツが浮動項目の周囲に浮かびます。

{{cssxref("float")}} プロパティには次の 4 つの可能な値があります。

- `left` — 要素を左に浮かべる。
- `right` — 要素を右に浮かべる。
- `none` — まったく浮動しないことを指定する。 これがデフォルト値です。
- `inherit` — `float` プロパティの値がこの要素の親要素から継承されるべきであることを指定します。

以下の例では、`<div>` を左に浮かべ、テキストを要素から遠ざけるために右に {{cssxref("margin")}} を与えます。 これはそのボックスの周りに巻かれたテキストの効果を与え、そしてあなたが最新のウェブデザインで使用されるフロート（Floats）について知る必要があるものの大部分です。

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
  line-height: 2;
  word-spacing: 0.1rem;
}

.box {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  border-radius: 5px;
}
```

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

{{ EmbedLiveSample('Float_1', '100%', 600) }}

> **メモ:** フロートについては、[float と clear](/ja/docs/Learn/CSS/CSS_layout/Floats) のプロパティに関するレッスンで詳しく説明しています。 フレックスボックスやグリッドレイアウトなどのテクニックの前は、列レイアウトの作成方法としてフロートが使用されていました。 あなたはまだウェブ上でこれらの方法に出くわすかもしれません。 これらについては、[過去のレイアウト方法](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)に関するレッスンで説明します。

## 位置指定のテクニック

位置指定（Positioning）を使用すると、通常フローのときに要素を配置されていた場所から別の場所に移動できます。 位置指定はメインページのレイアウトを作成するための方法ではなく、ページ上の特定の項目の位置を管理および微調整することを目的としています。

ただし、{{cssxref("position")}} プロパティに依存する特定のレイアウトパターンには便利なテクニックがあります。 位置指定を理解することは、通常フローを理解し、項目を通常フローから移動させることとは何かを理解するのに役立ちます。

あなたが知っておくべき、次の 5 種類の位置指定があります。

- **静的位置指定**（Static positioning）は、すべての要素が取得するデフォルトです。 これは、「要素をドキュメントレイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」という意味です。
- **相対位置指定**（Relative positioning）を使用すると、ページ上の要素の位置を変更して、通常フロー内の位置に相対的に移動できます — ページ上の他の要素と重なるようにすることも含まれます。
- **絶対位置指定**（Absolute positioning）では、要素は別のレイヤーに配置されているように、ページの通常のレイアウトフローから完全に外れます。 そこから、それをページの `<html>` 要素（あるいはそれに最も近くに位置する祖先要素）の端に相対的な位置に固定することができます。 これは、さまざまなコンテンツパネルを重ねて表示したり、必要に応じて表示/非表示にしたりするタブ付きボックスや、デフォルトでは画面外にありコントロールボタンを使用して画面上をスライドさせることができる情報パネルを作成するのに便利です。
- **固定位置指定**（Fixed positioning）は絶対位置指定と非常によく似ていますが、他の要素ではなく、ブラウザーのビューポートを基準にして要素を固定する点が異なります。 これは、他のコンテンツがスクロールしても常に画面上の同じ場所にとどまる永続的なナビゲーションメニューなどの効果を作成するのに役立ちます。
- **粘着位置指定**（Sticky positioning）は、要素が定義されたビューポートからのオフセットにぶつかるまで、要素は `position: static` のようにふるまい、その位置からは `position: fixed` のようにふるまう、より新しい位置指定方法です。

### 簡単な位置指定の例

これらのページレイアウトのテクニックに慣れるために、いくつかの簡単な例を紹介します。 例はすべて同じ HTML を特徴とするでしょう。 それは以下の通りです。

```html
<h1>Positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">I am a basic block level element.</p>
<p>I am a basic block level element.</p>
```

この HTML はデフォルトで次の CSS を使ってスタイルされます。

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

レンダリングされた出力は次のとおりです。

{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}

### 相対位置指定

相対位置指定（Relative positioning）を使用すると、デフォルトで設定されている通常フローの位置から項目をずらすことができます。 これは、アイコンをテキストラベルに合わせるためにアイコンを少し下に移動するなどのタスクを実行できることを意味します。 これを行うには、相対位置指定を追加するために次の規則を追加します。

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

ここで私たちは真ん中の段落に `relative` の {{cssxref("position")}} の値を与えます — これはそれ自身では何もしませんので、{{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティも追加します。 これらは影響を受けた要素を右下に動かすのに役立ちます — これはあなたが期待していたのとは反対のように思えるかもしれませんが、要素の左側と上側を押されていると考える必要があり、その結果として右下に移動します。

このコードを追加すると、次のようになります。

```html hidden
<h1>Relative positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">This is my relatively positioned element.</p>
<p>I am a basic block level element.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: relative;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Relative_1', '100%', 300) }}

### 絶対位置指定

絶対位置指定（Absolute positioning）は、通常フローから要素を完全に除き、包含ブロックの端からのオフセットを使用して配置するために使用されます。

元の位置指定のない例に戻ると、絶対位置指定を実装するために次の CSS 規則を追加できます。

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

ここでは、真ん中の段落に `absolute` の {{cssxref("position")}} の値と、前と同じ {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティを与えます。 ただし、このコードを追加すると、次のようになります。

```html hidden
<h1>Absolute positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">This is my absolutely positioned element.</p>
<p>I am a basic block level element.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: absolute;
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Absolute_1', '100%', 300) }}

これはとても違います！ 位置指定要素は、ページレイアウトの残りの部分から完全に分離され、その上に配置されています。 他の 2 つの段落は、配置された兄弟が存在しないかのように一緒にいます。 {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティは、絶対位置指定要素に対しては、相対位置指定要素とは異なる効果があります。 この場合、オフセットはページの上側と左側から計算されています。 このコンテナになる親要素を変更することは可能で、[位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)のレッスンでそれを見ます。

### 固定位置指定

固定位置指定（Fixed positioning）は、絶対位置指定と同じ方法で、ドキュメントフローから要素を除きます。 ただし、コンテナからのオフセットが適用されるのではなく、ビューポートからのオフセットが適用されます。 項目がビューポートに対して固定されたままであるので、ページがその下でスクロールするときに固定されたままであるメニューのような効果を作成することができます。

この例では、HTML を 3 段落のテキストにして、ページをスクロールさせます。 また、`position: fixed` を指定したボックスもあります。

```html
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

<p>Paragraph 1.</p>
<p>Paragraph 2.</p>
<p>Paragraph 3.</p>
```

```html hidden
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Fixed_1', '100%', 200) }}

### 粘着位置指定

粘着位置指定（Sticky positioning）は、私たちが自由に使える最後の位置指定方法です。 デフォルトの静的位置指定に固定位置指定を組み合わせたものです。 項目に `position: sticky` があるとき、それは定義したビューポートからのオフセットにぶつかるまで通常フローでスクロールします。 その時点で、`position：fixed` が適用されているかのように「動かなくなります」。

```html hidden
<h1>Sticky positioning</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Sticky</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Sticky_1', '100%', 200) }}

> **メモ:** 位置指定の詳細については、[位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)の記事をご覧ください。

## 表レイアウト

HTML 表は表形式のデータを表示するのに適していますが、何年も前に — 基本的な CSS でさえブラウザー間で確実にサポートされる前に — ウェブ開発者はウェブページ全体のレイアウトにも表を使用していました — ヘッダー、フッター、異なる列などを、いろいろな表の行と列に配置します。 これは当時はうまくいきましたが、多くの問題を抱えています — 表レイアウトは柔軟性がなく、マークアップが非常に重く、デバッグが難しく、意味論的に間違っています（例えば、スクリーンリーダーのユーザーは表レイアウトをナビゲートするのに問題があります）。

表のマークアップを使用したときに表がウェブページ上で表示される方法は、表レイアウトを定義する CSS プロパティのセットによるものです。 これらのプロパティは、表ではない要素をレイアウトするために使用することができ、その使用法は「CSS 表の使用」として説明されることがあります。

以下の例はそのような使い方の 1 つを示しています。 フレックスボックスやグリッドをサポートしていない非常に古いブラウザーを使用しているような状況では、レイアウトに CSS 表を使用することをこの時点では過去の方法と見なすべきです。

例を見てみましょう。 まず、HTML フォームを作成する簡単なマークアップです。 各入力要素にはラベルがあり、段落内にキャプションも含まれています。 各ラベル/入力ペアは、レイアウトのために {{htmlelement("div")}} で囲まれています。

```html
<form>
  <p>First of all, tell us your name and age.</p>
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" id="age" />
  </div>
</form>
```

今、私たちの例のための CSS。 {{cssxref("display")}} プロパティの使用方法を除いて、ほとんどの CSS はかなり普通のものです。 {{htmlelement("form")}}、{{htmlelement("div")}}、{{htmlelement("label")}} と {{htmlelement("input")}} は、それぞれ表、表の行、表のセルのように表示されるように指示しています — 基本的に、それらは HTML 表のマークアップのようにふるまい、デフォルトでラベルと入力がうまく並ぶようにします。 あとは、サイズやマージンなどを少し追加するだけで、すべてが少し見栄えよくなります。

あなたは、キャプションの段落に `display：table-caption;` が与えられていることに気付くでしょう — これは表の {{htmlelement("caption")}} のようにふるまいます — そして `caption-side: bottom;` により、マークアップがソースの `<input>` 要素の前にある場合でも、スタイル設定の目的でキャプションが表の下部に表示されるようにします。 これにより、かなりの柔軟性が得られます。

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('Table_layout', '100%', '170') }}

この例は [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) でもライブで見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html)も見る）。

## 段組みレイアウト

段組みレイアウトモジュール（Multi-column layout module）は、新聞のテキストの流れと同じように、コンテンツを列にレイアウトする方法を提供します。 ユーザーに強制的に上下にスクロールさせたくない場合は、列を上下に読むことはウェブのコンテキストではあまり役に立ちませんが、コンテンツを列に配置することは便利なテクニックです。

ブロックを段組みコンテナに変えるには、次のどちらかを使います。 {{cssxref("column-count")}} プロパティは、ブラウザーにいくつの列を持たせたいかを指示します。 {{cssxref("column-width")}} プロパティは、ブラウザーにその幅以上の列をコンテナに入れるように指示します。

以下の例では、`container` クラスを持つ `<div>` 要素を含む HTML ブロックから始めます。

```html
<div class="container">
  <h1>Multi-column layout</h1>

  <p>Paragraph 1.</p>
  <p>Paragraph 2.</p>
</div>
```

このコンテナでは 200 ピクセルの `column-width` を使用しているため、ブラウザーはコンテナに収まるだけの数の 200 ピクセルの列を作成し、作成された列間で残りのスペースを共有します。

```html hidden
<div class="container">
  <h1>Multi-column Layout</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer
    ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur
    vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus.
    Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus
    sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus.
    Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis,
    eget fermentum sapien.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</div>
```

```css hidden
body {
  max-width: 800px;
  margin: 0 auto;
}
```

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('Multicol_1', '100%', 200) }}

## まとめ

この記事では、知っておくべきすべてのレイアウト技術について簡単に説明しました。 個々の技術の詳細については、続けて読んでください！

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}
