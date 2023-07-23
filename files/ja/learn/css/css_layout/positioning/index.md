---
title: 位置指定
slug: Learn/CSS/CSS_layout/Positioning
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

位置指定を使用すると、通常のドキュメントレイアウトフローから要素を取り出して異なるふるまいをさせることができます。 例えば、互いの上に重なったり、常にブラウザーのビューポート内の同じ場所に留まったりします。 この記事では、さまざまな {{cssxref("position")}} の値とその使い方について説明します。

| 前提知識: | HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | CSS 位置指定がどのように機能するのかを学ぶこと。                                                                                                                    |

可能であれば、あなたのローカルコンピュータでの演習をお願いします — GitHub リポジトリから [`0_basic-flow.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) のコピーを入手し（[ソースコードはここ](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/0_basic-flow.html)）、それを出発点として使用します。

## 位置指定の紹介

位置指定（Positioning、ポジショニング）の本来の趣旨は、興味深い効果を生み出すために、上記の基本的なドキュメントフローのふるまいを上書きできるようにすることです。 レイアウト内のいくつかのボックスの位置をデフォルトのレイアウトフローの位置からわずかに変更して、ちょっと風変わりでアンティーク調の感じにしたらどうでしょうか？ 位置指定はあなたのツールです。 あるいは、ページの他の部分の上に浮かぶ UI 要素を作成したり、ページをいくらスクロールしても常にブラウザーウィンドウ内の同じ場所に配置したいですか？ 位置指定はそのようなレイアウト作業を可能にします。

HTML 要素に適用できるさまざまな種類の位置指定があります。 特定の種類の位置指定を要素でアクティブにするには、{{cssxref("position")}} プロパティを使用します。

### 静的位置指定

静的位置指定（Static positioning）は、すべての要素が取得するデフォルトです。 これは、「要素をドキュメントレイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」を意味します。

これを実演し、例をこれからのセクションのために準備するために、最初に HTML の 2 番目の {{htmlelement("p")}} に `positioned` の `class` を次のように追加します。

```html
<p class="positioned">...</p>
```

それでは、CSS の最後に次の規則を追加してください。

```css
.positioned {
  position: static;
  background: yellow;
}
```

保存してリフレッシュしても、2 段落目の背景色が更新されていることを除けば、まったく違いはありません。 これは問題ありません。 前にも述べたように、静的位置指定はデフォルトのふるまいです！

> **メモ:** この時点でのライブの例は [`1_static-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/1_static-positioning.html)）。

### 相対位置指定

相対位置指定（Relative positioning）は、最初に見ていく `position` の種類です。 これは静的位置指定と非常によく似ていますが、位置指定要素（positioned element）が通常のレイアウトフローで配置されたら、ページ上の他の要素と重なることも含んで最終的な位置を変更できるという点が異なります。 先に進んで、次のようにコード内の `position` の宣言を更新してください。

```css
position: relative;
```

この段階で保存してリフレッシュしても、結果にまったく変化はありません。 それでは、どうやって要素の位置を変更するのでしょうか？ {{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}} の各プロパティを使用する必要があります。 これについては次のセクションで説明します。

### top、bottom、left、right の紹介

{{cssxref("top")}}（上）、{{cssxref("bottom")}}（下）、{{cssxref("left")}}（左）、{{cssxref("right")}}（右）は {{cssxref("position")}} と一緒に使用され、位置指定要素の移動先を正確に指定します。 これを試すには、CSS の `.positioned` 規則に次の宣言を追加してください。

```css
top: 30px;
left: 30px;
```

> **メモ:** これらのプロパティの値は、論理的に想定される任意の[単位](/ja/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)（ピクセル、mm、rem、% など）をとることができます。

保存してリフレッシュすると、次のような結果になります。

```html hidden
<h1>Relative positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Introducing_top_bottom_left_and_right', '100%', 500) }}

クールだよね？ Ok、おそらくこれはあなたが期待していたものではなかったでしょう — 上と左を指定したのに、なぜ下と右に移動したのでしょうか？ 最初は非論理的に聞こえるかもしれませんが、これは相対的位置指定が機能する方法です — 位置指定したボックスの指定した側を反対方向に押す見えない力を考える必要があります。 例えば、`top: 30px;` と指定した場合、力がボックスの上側を押して、箱の上側が 30px 下向きに移動します。

> **メモ:** この時点でのライブの例は [`2_relative-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/2_relative-positioning.html)）。

### 絶対位置指定

絶対位置指定（Absolute positioning）はとても異なる結果をもたらします。 次のようにコード内の `position` 宣言を変更してみましょう。

```css
position: absolute;
```

保存してリフレッシュすると、次のようになります。

```html hidden
<h1>Absolute positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Absolute_positioning', '100%', 420) }}

まず最初に、ドキュメントフロー内にあるべき位置指定要素のギャップが存在しないことに注意してください。 1 番目と 3 番目の要素はそれが存在しないので一緒になっています！ ある意味、これは事実です。 絶対位置指定要素は、通常のドキュメントレイアウトフローには存在しません。 その代わりに、それは他のすべてのものとは別のそれ自身の層の上にあります。 これは非常に便利です。 つまり、ページ上の他の要素のレイアウトを妨げない独立した UI 機能を作成できるということです。 例えば、ポップアップ情報ボックスやコントロールメニュー、ロールオーバーパネル、ページ上の任意の場所にドラッグアンドドロップできる UI 機能、等々です。

次に、要素の位置が変更されたことに注意してください。 これは、{{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}} の絶対位置指定でのふるまいが異なるためです。 通常のドキュメントレイアウトフロー内での相対的な位置に基づいて要素を配置するのではなく, 要素がそれぞれの包含要素の側からあるべき距離を指定します。 したがって、この場合は、絶対位置指定要素は「包含要素」の上側から 30 ピクセル、左側から 30 ピクセルとなるようにします。 (この場合、「包含要素」とは、**最初の包含ブロック**（initial containing block）のことです。詳細については、以下のセクションを参照してください。)

> **メモ:** 必要に応じて、要素のサイズを変更するために {{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}} を使用できます。 位置指定要素に `top: 0; bottom: 0; left: 0; right: 0; margin: 0;` を設定して、何が起こるか見てください！ 後で元に戻します。

> **メモ:** はい、マージンはまだ位置指定要素に影響します。 しかしながら、マージンの相殺はそうではありません。

> **メモ:** この時点でのライブの例は [`3_absolute-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/3_absolute-positioning.html)）。

### 位置指定コンテキスト

絶対位置指定要素の「包含要素」はどの要素でしょうか？ これは、位置指定要素の先祖の `position` プロパティに大きく依存します（[包含ブロックの識別](/ja/docs/Web/CSS/Containing_block#Identifying_the_containing_block)を参照）。

明示的に定義された `position` プロパティを持つ祖先要素がない場合、デフォルトではすべての祖先要素は静的位置を持ちます。 この結果、絶対位置指定要素は**最初の包含ブロック**（initial containing block）に含まれます。 最初の包含ブロックはビューポートの大きさを持ち、{{htmlelement("html")}} 要素を含むブロックでもあります。 簡単に言うと、絶対位置指定要素は {{htmlelement("html")}} 要素の外側に表示され、最初のビューポートを基準にして配置されます。

位置指定要素は HTML ソースの {{htmlelement("body")}} 内にネストされていますが、最終的なレイアウトでは、ページの端の左上から 30 ピクセル離れています。 **位置指定コンテキスト**（positioning context） — 絶対位置指定要素がどの要素を基準にして配置されているか — を変更することができます。 これは、要素の先祖の 1 つに位置指定を設定することによって行われます — それを内部にネストしている要素の 1 つにです（内部にネストしていない要素を基準にしての配置はできません）。 これを実証するために、次の宣言を `body` 規則に追加してください。

```css
position: relative;
```

これにより、次の結果が得られます。

```html hidden
<h1>Positioning context</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Positioning_contexts', '100%', 420) }}

位置指定要素は、{{htmlelement("body")}} 要素を基準にして配置されます。

> **メモ:** この時点でのライブの例は [`4_positioning-context.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/4_positioning-context.html)）。

### z-index の紹介

この絶対位置指定はすべて楽しいですが、まだ検討していないことがもう 1 つあります。 要素が重なり合ったときに、どの要素が他のどの要素の上に表われるかを決定するのは何でしょうか？ これまで見てきた例では、位置指定コンテキスト内には位置指定要素が 1 つしかなく、位置指定要素は位置指定されていない要素よりも優先されるため、一番上に表われます。 複数あるときはどうでしょうか？

最初の段落も絶対位置指定にするために、CSS に次を追加してみてください。

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

この時点で、最初の段落がライム色に着色され、ドキュメントフローの外に移動し、元の位置よりも少し上に配置されていることがわかります。 また、2 つが重なったところでは、元の `.positioned` 段落の下にも重なっています。 これは、`.positioned` 段落がソース順の 2 番目の段落であり、ソース順の後ろに配置された要素がソース順の前に配置された要素よりも優先されるためです。

重ね順を変更できますか？ はい、できます。 {{cssxref("z-index")}} プロパティを使うことで可能です。 「z-index」は z 軸への参照です。 背景画像やドロップシャドウのオフセットなどを位置指定するために、水平（x 軸）座標と垂直（y 軸）座標を使用してウェブページについて説明したコースの前のポイントから思い出すことができます。 (0,0) はページ（または要素）の左上にあり、x 軸と y 軸はページの右下を横切っています（左から右の言語ならば）。

ウェブページには、z 軸もあります。 画面の表面から自分の顔に向かって走る想像上の線（または、画面の前に持ってきたい他の何か）です。 {{cssxref("z-index")}} の値は、位置指定要素がその軸のどこにあるかに影響します。 正の値はそれらを積み重ねの上に移動し、負の値はそれらを積み重ねの下に移動します。 デフォルトでは、位置指定要素はすべて `auto` の `z-index` を持ち、これは事実上 0 です。

積み重ね順を変更するには、`p:nth-of-type(1)` 規則に次の宣言を追加してみてください。

```css
z-index: 1;
```

これで完成した例が表示され、ライム色の段落が一番上になります。

```html hidden
<h1>z-index</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

{{ EmbedLiveSample('Introducing_z-index', '100%', 400) }}

`z-index` は、無単位のインデックス値のみを受け入れることに注意してください。 1 つの要素を z 軸の 23 ピクセル上に配置するように指定することはできません — そのようには機能しません。 より大きい値はより小さい値より上になり、どんな値を使うかはあなた次第です。 2 と 3 を使用するのと、300 と 40000 では同じ効果が得られます。

> **メモ:** この時点でのライブの例は [`5_z-index.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/5_z-index.html)）。

### 固定位置指定

固定位置指定（Fixed positioning）を見てみましょう。 これは絶対位置指定とまったく同じように機能しますが、1 つの重要な違いがあります。 絶対位置指定では、要素をその最も近くで位置指定された祖先 (the initial containing block if there isn't one) に対して固定しますが、**固定位置指定**では、ビューポートの見えている部分に対して*常に*固定します。 つまり、ページのスクロール量に関係なく常に表示される永続的なナビゲーションメニューのような、固定された便利な UI アイテムを作成できることを意味します。

簡単な例をまとめて、意味を説明しましょう。 まず最初に、CSS から既存の `p:nth-of-type(1)` 規則と `.positioned` 規則を削除します。

それでは、次のように `body` 規則を更新して `position: relative;` 宣言を削除して、固定の高さを追加します。

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

それでは、{{htmlelement("h1")}} 要素に `position: fixed;` を与え、ビューポートの中央上部に配置します。 CSS に次の規則を追加してください。

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```

`top: 0;` は、画面の上部に貼り付けるために必要です。 見出しにコンテンツ列と同じ幅を指定し、それからそれに白い背景といくらかのパディングとマージンを与えるので、コンテンツはその下に見えないでしょう。

保存してリフレッシュすると、見出しが固定されたままで、コンテンツはスクロールアップすると見出しの下に消えるように見える、ちょっとした効果があります。 しかし、これをもっと改善することができます — 現時点では、コンテンツの一部は見出しの下から動き始めます。 これは、位置指定された見出しがドキュメントフローに表われなくなり、残りのコンテンツが最上部に移動するためです。 それを少しだけ下げる必要があります。 これを行うには、最初の段落に上部マージンを設定します。 次を追加します。

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

完成した例を見てください。

```html hidden
<h1>Fixed positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">I'm not positioned any more...</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('Fixed_positioning', '100%', 400) }}

> **メモ:** この時点でのライブの例は [`6_fixed-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/6_fixed-positioning.html)）。

### position: sticky

`position: sticky` と呼ばれる利用可能な別の `position` の値があります。 これは他よりもやや新しいです。 これは基本的に相対位置と固定位置のハイブリッドであり、位置指定要素は、特定のしきい値の位置（例えば、ビューポートの上部から 10px）までスクロールされるまで相対位置指定されたように動作し、その後固定されます。 これは、ナビゲーションバーを特定の位置までページと共にスクロールさせ、その後ページの上部に固定するなどの目的で使用できます。

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

おもしろくて一般的な `position: sticky` の使い方はスクロールするインデックスページを作成することです。 そこに到達すると異なる見出しがページの上部に固定されます。 そのような例のマークアップは次のようになります。

```html
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

CSS は次のようになります。 通常フローでは、{{htmlelement("dt")}} 要素はコンテンツとともにスクロールします。 {{htmlelement("dt")}} 要素に `position: sticky` を 0 の {{cssxref("top")}} の値と共に追加すると、サポートするブラウザーでは、その位置に達すると、見出しをビューポートの一番上に固定します。 それ以降の各見出しは、その位置までスクロールアップするときに、前の見出しを置き換えます。

```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```html hidden
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

{{ EmbedLiveSample('Sticky_2', '100%', 200) }}

> **メモ:** このライブの例は [`7_sticky-positioning.html`](http://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) にあります（[ソースコードを見る](https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/7_sticky-positioning.html)）。

## スキルをテストしましょう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — [Test your skills: Positioning](/ja/docs/Learn/CSS/CSS_layout/Position_skills) を見てください。

## まとめ

私はあなたが基本的な位置指定と一緒に遊ぶことができて楽しかったと確信しています。 これは、レイアウト全体に使用する方法ではありませんが、ご覧のとおり、それが適しているタスクはたくさんあります。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

## 関連情報

- {{cssxref("position")}} プロパティのリファレンス。
- いくつかのより有用なアイデアのための[実用的な位置指定の例](/ja/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)。
