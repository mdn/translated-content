---
title: CSS レイアウト入門
slug: Learn_web_development/Core/CSS_layout/Introduction
original_slug: Learn/CSS/CSS_layout/Introduction
l10n:
  sourceCommit: 93c9f9954bd14ae8877973e5fe3c1d8378e56f92
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

この記事では、以前のモジュールで既に触れた CSS レイアウト機能のいくつか（さまざまな {{cssxref("display")}} の値など）を要約し、このモジュール全体で取り上げるいくつかの概念を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基礎（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >で学習）、および CSS の動作の考え方（
        <a href="/ja/docs/Learn/CSS/First_steps">CSS 入門</a>で学習）
      </td>
    </tr>
    <tr>
      <th scope="row">学習目標:</th>
      <td>
        CSS のページレイアウトのテクニックの概要を説明します。それぞれのテクニックは、以降のチュートリアルでより詳しく学ぶことができます。
      </td>
    </tr>
  </tbody>
</table>

CSS のページレイアウト技術によって、ウェブページに含まれる要素の位置を制御できます。通常のレイアウトフローによる初期配置、隣接する要素、それらの親コンテナー、またはメインビューポート、ウィンドウの位置、といったものが位置を制御する基準になりえます。 このモジュールでは次に挙げるページレイアウト技術の詳細について説明します。

- 通常フロー
- {{cssxref("display")}} プロパティ
- フレックスボックス
- グリッド
- 浮動要素
- 位置指定
- 表レイアウト
- 段組みレイアウト

どの技術にも、それぞれ用途、長所、短所があり、単独で使用するようには設計されていません。 ひとつひとつの技術がどのように設計されているかを理解することは、それぞれのタスクに最適なレイアウト方法を判断するための基礎になるでしょう。

## 通常フロー

通常フロー (Normal flow) は、ページレイアウトの制御を何もしない場合に、ブラウザーが既定で HTML ページをレイアウトする方法です。 次の簡単な HTML の例を見てみましょう。

```html
<p>I love my cat.</p>

<ul>
  <li>Buy cat food</li>
  <li>Exercise</li>
  <li>Cheer up friend</li>
</ul>

<p>The end!</p>
```

既定では、ブラウザーはこのコードを次のように表示します。

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

ここでは、HTML がソースコードに現れる順序どおりに表示されていることに注意してください。最初の段落の後に番号なしリストが続き、その後に 2 番目の段落が続きます。

上下に並んで表示される要素は**ブロック**要素と呼ばれています。それに対して、**インライン**要素は段落内の個々の単語と同じように横に並んで表示されています。

> [!NOTE]
> ブロック要素のコンテンツがレイアウトされる方向は、ブロック方向 (Block Direction) と呼ばれます。 ブロック方向は、英語などの横書きモード (Horizontal Writing Mode) の言語では垂直に走ります。 日本語のような縦書きモード (Vertical Writing Mode) では、どの言語でも水平に走ります。 対応するインライン方向 (Inline Direction) は、インラインコンテンツ（文など）が走る方向です。

CSS で何かをレイアウトするとその要素を通常フローから遠ざけることになりますが、ページ上の多くの要素は通常フローにしたがって適宜レイアウトされます。これが、構造化された HTML 文書から始めることが非常に重要である理由です。 なぜなら、多くの要素のレイアウトに一から悪戦苦闘するかわりに、あらかじめ多くのものがレイアウトされている現状で作業できるからです。

CSS で要素をどのように配置するかを変更できる方法は次のとおりです。

- **{{cssxref("display")}} プロパティ** — `block`、`inline`、`inline-block` などの標準値は、要素が通常フローでどのようにふるまうかを変更することができます（詳細については、[CSS ボックスの種類](/ja/docs/Learn/CSS/Building_blocks/The_box_model#ブロックボックスとインラインボックス)を参照してください）。それから、[CSS グリッド](/ja/docs/Learn/CSS/CSS_layout/Grids)や[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)のように、特定の `display` の値によって有効になる全体的なレイアウト方法があります。
- **浮動要素** — {{cssxref("float")}} に `left` などの値を適用すると、雑誌のレイアウトで画像の周囲をテキストが取り囲むことがあるように、要素の片側に沿ってブロックレベル要素が折り返されることがあります。
- **{{cssxref("position")}} プロパティ** — 他のボックス内のボックスの配置を正確に制御できます。 通常フローでは `static` 位置指定が既定ですが、他の値を使用して要素を異なる方法でレイアウトすることもできます。 例えば、ブラウザーのビューポートの左上に固定するなどです。
- **表レイアウト** — HTML 表の一部をスタイルするために設計された機能は、 `display: table` とそれに関連するプロパティを使用して、表以外の要素にも使用できます。
- **段組みレイアウト** — [段組みレイアウト](/ja/docs/Web/CSS/CSS_multicol_layout)のプロパティを使用すると、新聞のようにブロックのコンテンツを段組みにレイアウトできます。

## display プロパティ

CSS でページレイアウトを実現するための主な方法は、すべて `display` プロパティの値で指定します。 このプロパティにより、既定の表示方法を変更することができます。 通常フローに属するすべての要素には `display` の値が設定されており、この値によって要素の既定のふるまいが決まります。 例えば、英語の文書内で{{htmlelement("p", "段落")}}が上から下へ表示されるのは、`display: block` でスタイルが設定されているためです。段落内のテキストを囲んでリンクを作成した場合、そのリンクはテキストの他の部分と同じ行に表示され、改行されることはありません。これは {{htmlelement("a")}} 要素が、既定値では `display: inline` だからです。

表示の既定のふるまいは変更できます。例えば、 {{htmlelement("li")}} 要素は既定で `display: block` です。 つまり、英語の文書ではリストアイテムは下へ下へと表示されます。 `display` の値を `inline` に変更した場合、文中で単語が並部のと同様に、互いに隣接して表示されます。 任意の要素に対して `display` の値を変更できるということは、どのように見えるかについて心配することなく、意味論的 (semantic) な視点で HTML 要素を選択できるということです。 見た目はあなたが変えることができるものです。

あるアイテムを `block` から `inline` に、またはその逆に切り替えて既定の表示方法を変更することに加えて、より大きい単位で作用するいくつかのレイアウト手法を `display` の値を通じて使い始めることができます。 ただし、これらを使用するときは、通常、追加のプロパティを指定する必要があります。 要素のレイアウトを検討する目的において最も重要な値は `display: flex` と `display: grid` の 2 つです。

## フレックスボックス

フレックスボックス (Flexbox) は[フレキシブルボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュールの略称で、物を 1 次元に、行と列のいずれかの方向にレイアウトしやすくするように設計されています。 フレックスボックスを使うには、`display: flex` をレイアウトしたい要素の親要素に適用します。 その直接の子はすべてフレックスアイテムになります。これは簡単な例で見ることができます。

### display: flex を設定

以下の HTML マークアップは、3 つの {{htmlelement("div")}} 要素が入っている `wrapper` クラスを持つ包含要素を示しています。 既定では、これらは英語の文書では上下にブロック要素として表示されます。

ただし、`display: flex` を親に追加すると、3 つのアイテムは列に配置されます。 これは、それらが*フレックスアイテム*になり、フレックスボックスがそれらに与えるいくつかの初期値を使用するためです。 {{cssxref("flex-direction")}} の初期値は `row` なので、行として表示されます。 {{cssxref("align-items")}} プロパティの初期値は `stretch` であるため、それらはすべて最も高いアイテムの高さまで伸びているように見えます。 これは、アイテムがフレックスコンテナーの高さまで伸びることを意味します。 この場合、アイテムは最も高いアイテムによって定義されます。 アイテムはすべてコンテナーの先頭に配置され、行の末尾に余分なスペースが残ります。

```css hidden
* {
  box-sizing: border-box;
}
.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
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

{{ EmbedLiveSample('Setting_display_flex', '300', '200') }}

### flex プロパティの設定

フレックスコンテナーに適用できる上記のプロパティに加えて、フレックスアイテムに適用できるプロパティがあります。 これらのプロパティは、とりわけ、アイテムのたわみ方を変えることができ、利用可能なスペースに収まるようにアイテムを拡大および縮小することができます。

この単純な例として、すべての子アイテムに `1` の値の {{cssxref("flex")}} プロパティを追加できます。 これにより、末尾にスペースを残すのではなく、すべてのアイテムが拡大してコンテナーがいっぱいになります。 より多くのスペースがあるならば、アイテムはより広くなり、スペースが少ないと狭くなります。 さらに、マークアップに別の要素を追加すると、アイテムはすべてスペースを空けるために小さくなります — サイズに関係なく、同じ大きさのスペースを占めるようにサイズが調整されます。

```css hidden
* {
  box-sizing: border-box;
}
.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
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

{{ EmbedLiveSample('Setting_the_flex_property', '300', '200') }}

> [!NOTE]
> これはフレックスボックスで可能なことの非常に短い紹介です。 詳細については、[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)の記事を参照してください。

## グリッドレイアウト

フレックスボックスは 1 次元レイアウト用に設計されていますが、グリッドレイアウト (Grid Layout) は 2 次元用に設計されています。行と列に物事を並べます。

### display: grid の設定

繰り返しになりますが、`display: grid` という特定の `display` の値でグリッドレイアウト (Grid Layout) をオンにすることができます。 以下の例では、コンテナーといくつかの子要素とともに、`flex` の例と同様のマークアップを使用しています。 `display: grid` の使用に加えて、{{cssxref("grid-template-rows")}} プロパティと {{cssxref("grid-template-columns")}} プロパティをそれぞれ使用して、親の行と列のトラックをいくつか定義します。 それぞれ `1fr` の 3 列と `100px` の 2 行を定義しました。 子要素にルールを置く必要はなく、自動的にグリッドが作成したセルに配置されます。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
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

{{ EmbedLiveSample('Setting_display_grid', '300', '330') }}

### グリッドへのアイテムの配置

グリッドを作成したら、上記の自動配置のふるまいに頼らずに、明示的にアイテムを配置できます。 以下の 2 番目の例では、同じグリッドを定義しましたが、今回は 3 つの子アイテムを使用しています。 {{cssxref("grid-column")}} プロパティと {{cssxref("grid-row")}} プロパティを使用して各アイテムの開始ラインと終了ラインを設定しました。 これにより、アイテムが複数のトラックにまたがるようになります。

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
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

{{ EmbedLiveSample('Placing_items_on_the_grid', '300', '330') }}

> [!NOTE]
> これら 2 つの例は、グリッドレイアウトの機能のほんの一部です。詳細については、[グリッドレイアウト](/ja/docs/Learn/CSS/CSS_layout/Grids)の記事を参照してください。

このガイドの残りの部分では、他のレイアウト方法について説明します。 これは、ページの主なレイアウト構造にとってはそれほど重要ではありませんが、それでも特定のタスクを達成するのに役立ちます。 各レイアウトタスクの性質を理解することで、デザインの特定の構成要素を見たときに、それに最も適したレイアウトの種類が明らかになることがすぐにわかります。

## 浮動要素

要素を浮動すると、その要素とそれに通常フローで続くブロックレベル要素のふるまいが変わります。 要素が左または右に移動されて通常フローから除かれ、周囲のコンテンツが浮動アイテムの周囲に浮かびます。

{{cssxref("float")}} プロパティには次の 4 つの可能な値があります。

- `left` — 要素を左に浮かべる。
- `right` — 要素を右に浮かべる。
- `none` — まったく浮動しないことを指定する。 これが既定値です。
- `inherit` — `float` プロパティの値がこの要素の親要素から継承されるべきであることを指定します。

以下の例では、`<div>` を左に浮かべ、テキストを要素から遠ざけるために右に {{cssxref("margin")}} を与えます。 これはそのボックスの周りに巻かれたテキストの効果を与え、そしてあなたが最新のウェブデザインで使用される浮動要素（Floats）について知る必要があるものの大部分です。

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
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
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

{{ EmbedLiveSample('Floats', '100%', 600) }}

> [!NOTE]
> 浮動要素については、[float と clear](/ja/docs/Learn/CSS/CSS_layout/Floats) のプロパティに関するレッスンで詳しく説明しています。 フレックスボックスやグリッドレイアウトなどの技術が登場する前は、浮動要素は段組みレイアウトの作成方法として使用されていました。 あなたはまだウェブ上でこれらの方法に出くわすかもしれません。これらについては、[過去のレイアウト手法](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)に関するレッスンで説明します。

## 位置指定のテクニック

位置指定 (Positioning) を使用すると、通常フローのときに要素を配置されていた場所から別の場所に移動できます。 位置指定はメインページのレイアウトを作成するための方法ではなく、ページ上の特定のアイテムの位置を管理および微調整することを目的としています。

ただし、 {{cssxref("position")}} プロパティに依存する特定のレイアウトパターンには便利なテクニックがあります。 位置指定を理解することは、通常フローを理解し、アイテムを通常フローから移動させることとは何かを理解するのに役立ちます。

知っておくべき、次の 5 種類の位置指定があります。

- **静的位置指定** (Static positioning) は、すべての要素が取得する既定です。 これは、「要素をドキュメントレイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」という意味です。
- **相対位置指定** (Relative positioning) を使用すると、ページ上の要素の位置を変更して、通常フロー内の位置に相対的に移動できます — ページ上の他の要素と重なるようにすることも含まれます。
- **絶対位置指定** (Absolute positioning) では、要素は別のレイヤーに配置されているように、ページの通常のレイアウトフローから完全に外れます。 そこから、それをページの `<html>` 要素（あるいはそれに最も近くに位置する祖先要素）の端に相対的な位置に固定することができます。 これは、さまざまなコンテンツパネルを重ねて表示したり、必要に応じて表示/非表示にしたりするタブ付きボックスや、既定では画面外にありコントロールボタンを使用して画面上をスライドさせることができる情報パネルを作成するのに便利です。
- **固定位置指定** (Fixed positioning) は絶対位置指定と非常によく似ていますが、他の要素ではなく、ブラウザーのビューポートを基準にして要素を固定する点が異なります。 これは、他のコンテンツがスクロールしても常に画面上の同じ場所にとどまる永続的なナビゲーションメニューなどの効果を作成するのに役立ちます。
- **粘着位置指定** (Sticky positioning) は、要素が定義されたビューポートからのオフセットにぶつかるまで、要素は `position: static` のようにふるまい、その位置からは `position: fixed` のようにふるまう、より新しい位置指定方法です。

### 簡単な位置指定の例

これらのページレイアウトテクニックに慣れることを提供するために、いくつかの簡単な例を示します。例はすべて同じ HTML 構造（見出しと 3 つの段落が続く）で、次のようになります。

```html
<h1>Positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">I am a basic block level element.</p>
<p>I am a basic block level element.</p>
```

この HTML は既定で次の CSS を使ってスタイルされます。

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
}
```

レンダリングされた出力は次のとおりです。

{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}

### 相対位置指定

相対位置指定 (Relative positioning) を使用すると、既定で設定されている通常フローの位置からアイテムをずらすことができます。 これは、アイコンをテキストラベルに合わせるためにアイコンを少し下に移動するなどのタスクを実行できることを意味します。 これを行うには、相対位置指定を追加するために次のルールを追加します。

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

ここで、中央の段落の {{cssxref("position")}} に `relative` の値を与えます。これはそれ自身では何もしませんので、 {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティも追加します。これらは影響を受けた要素を右下に動かすのに役立ちます。期待とは反対のように思えるかもしれませんが、要素の左側と上側を押されていると考える必要があり、その結果として右下に移動します。

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
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
}
```

{{ EmbedLiveSample('Relative_positioning', '100%', 300) }}

### 絶対位置指定

絶対位置指定 (Absolute positioning) は、通常フローから要素を完全に外し、包含ブロックの端からのオフセットを使用して配置するために使用されます。

元の位置指定されていない例に戻ると、絶対位置指定を実装するために以下の CSS ルールを追加することができます。

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

ここでは、中央の段落の {{cssxref("position")}} に `absolute` の値と、前と同じ {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティを指定します。このコードを追加すると、次のようになります。

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
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
}
```

{{ EmbedLiveSample('Absolute_positioning', '100%', 300) }}

これはとても違います。位置指定要素は、ページレイアウトの残りの部分から完全に分離され、その上に配置されています。 他の 2 つの段落は、配置された兄弟が存在しないかのように一緒にいます。 {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティは、絶対位置指定要素に対しては、相対位置指定要素とは異なる効果があります。 この場合、オフセットはページの上側と左側から計算されています。 このコンテナーになる親要素を変更することは可能で、[位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)のレッスンでそれを見ます。

### 固定位置指定

固定位置指定 (Fixed positioning) は、絶対位置指定と同じ方法で、文書フローから要素を外します。 ただし、コンテナーからのオフセットが適用されるのではなく、ビューポートからのオフセットが適用されます。 アイテムがビューポートに対して固定されたままであるので、ページがその下でスクロールするときに固定されたままであるメニューのような効果を作成することができます。

この例では、HTML を 3 段落のテキストにして、ページをスクロールさせます。 また、`position: fixed` を指定したボックスもあります。

```html
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci.
</p>

<p>
  Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
  auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
  vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex
  malesuada et.
</p>

<p>
  In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet
  turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas
  augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
  ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
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

{{ EmbedLiveSample('Fixed_positioning', '100%', 200) }}

### 粘着位置指定

粘着位置指定 (Sticky positioning) は、私たちが自由に使える最後の位置指定方法です。 既定の静的位置指定に固定位置指定を組み合わせたものです。 アイテムに `position: sticky` があるとき、それは定義したビューポートからのオフセットにぶつかるまで通常フローでスクロールします。 その時点で、`position：fixed` が適用されているかのように「動かなくなります」。

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
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
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

{{ EmbedLiveSample('Sticky_positioning', '100%', 200) }}

> [!NOTE]
> 位置指定の詳細については、[位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)の記事をご覧ください。

## 表レイアウト

HTML の表は、表形式のデータを表示するのには適していますが、何年も前、基本的な CSS さえブラウザーの間で確実に対応されていなかった頃、ウェブ開発者は、ヘッダー、フッター、段組みなどをさまざまな表の行や列に配置し、ウェブページ全体のレイアウトにも表を使っていました。表のレイアウトは柔軟性に欠け、マークアップがとても重く、デバッグが難しく、意味づけも間違っています（例えば、スクリーンリーダーのユーザーは表のレイアウトをナビゲートするのに問題があります）。

表のマークアップを使用したときに表がウェブページ上で表示される方法は、表レイアウトを定義する CSS プロパティのセットによるものです。 これらのプロパティは、表ではない要素をレイアウトするために使用することができ、その使用法は「CSS 表の使用」として説明されることがあります。

以下の例はそのような使い方の 1 つを示しています。注意しなければならないのは、レイアウトに CSS の表を使用するのは、この点では古い手法と考えるべきであり、フレックスボックスや グリッドに対応していない古いブラウザーに対応するためにのみ使用するべきだということです。

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

CSS に関しては、 {{cssxref("display")}} プロパティを使用している以外は、ほとんど普通のものです。 {{htmlelement("form")}}、{{htmlelement("div")}}、{{htmlelement("label")}}、{{htmlelement("input")}} はそれぞれ表、表の行、表のセルのように表示するように指示されています。基本的には HTML の表のマークアップのように動作し、既定ではラベルと入力がきれいに行えるようになります。あとは、サイズやマージンなどを追加して、すべてがきれいに見えるようにすれば完了です。

キャプション段落には `display: table-caption;` が指定され、表の {{htmlelement("caption")}} のように動作することが分かります。また、 `caption-side: bottom;` が指定され、マークアップがソースの `<input>` 要素の前にあっても、スタイル設定のためにキャプションを表の下に置くように指示しています。これにより、ちょっとした柔軟性が生まれます。

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

{{ EmbedLiveSample('Table_layout', '100%', '200') }}

この例は [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) でもライブで見ることができます（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html)も見る）。

> [!NOTE]
> 表レイアウトは、このページの他のトピックとは異なり、古いアプリケーションであるため、このモジュールではこれ以上取り上げません。

## 段組みレイアウト

段組みレイアウトモジュール (Multi-column layout module) は、新聞のテキストの流れと同じように、コンテンツを列にレイアウトする方法を提供します。 ユーザーに強制的に上下にスクロールさせたくない場合は、列を上下に読むことはウェブのコンテキストではあまり役に立ちませんが、コンテンツを列に配置することは便利なテクニックです。

ブロックを段組みコンテナーに変えるには、次のどちらかを使います。 {{cssxref("column-count")}} プロパティは、ブラウザーにいくつの列を持たせたいかを指示します。 {{cssxref("column-width")}} プロパティは、ブラウザーにその幅以上の列をコンテナーに入れるように指示します。

以下の例では、`container` クラスを持つ `<div>` 要素を含む HTML ブロックから始めます。

```html
<div class="container">
  <h1>Multi-column Layout</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem.
  </p>

  <p>
    Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris
    ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus
    viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum
    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
    mus.
  </p>
</div>
```

このコンテナーでは `column-width` を 200 ピクセルで使用しており、ブラウザーは 200 ピクセルの段組みを収まるだけ作成します。段組みの間に残っている空間はすべて共有されます。

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

{{ EmbedLiveSample('Multi-column_layout', '100%', 250) }}

## まとめ

この記事では、知っておくべきすべてのレイアウト技術について簡単に説明しました。 個々の技術の詳細については、続きを読んでください。

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}
