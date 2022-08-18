---
title: CSS レイアウト入門
slug: Learn/CSS/CSS_layout/Introduction
tags:
  - Article
  - Beginner
  - CSS
  - Floats
  - Grids
  - Introduction
  - Layout
  - Learn
  - Positioning
  - Tables
  - flexbox
  - flow
translation_of: Learn/CSS/CSS_layout/Introduction
---
<div>{{LearnSidebar}}</div>

<div>{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}</div>

<p class="summary"><span class="seoSummary">この記事では、以前のモジュールで既に触れた CSS レイアウト機能のいくつか（さまざまな {{cssxref("display")}} の値など）を要約し、このモジュール全体で取り上げるいくつかの概念を紹介します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基礎（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>CSS ページレイアウトのテクニックの概要を説明します。 各テクニックは、以降のチュートリアルで詳細に学ぶことができます。</td>
  </tr>
 </tbody>
</table>

<p>CSS のページレイアウト技術によって、ウェブページに含まれる要素の位置を制御できます。通常のレイアウトフローによる初期配置、隣接する要素、それらの親コンテナ、またはメインビューポート、ウィンドウの位置、といったものが位置を制御する基準になりえます。 このモジュールでは次に挙げるページレイアウト技術の詳細について説明します。</p>

<ul>
 <li>通常フロー</li>
 <li>{{cssxref("display")}} プロパティ</li>
 <li>フレックスボックス</li>
 <li>グリッド</li>
 <li>フロート</li>
 <li>位置指定</li>
 <li>表レイアウト</li>
 <li>段組みレイアウト</li>
</ul>

<p>どの技術にも、それぞれ用途、長所、短所があり、単独で使用するようには設計されていません。 ひとつひとつの技術がどのように設計されているかを理解することは、それぞれのタスクに最適なレイアウト方法を判断するための基礎になるでしょう。</p>

<h2 id="Normal_flow" name="Normal_flow">通常フロー</h2>

<p>通常フロー（Normal flow）は、ページレイアウトの制御を何もしない場合に、ブラウザーがデフォルトで HTML ページをレイアウトする方法です。 次の簡単な HTML の例を見てみましょう。</p>

<pre class="brush: html">&lt;p&gt;I love my cat.&lt;/p&gt;

&lt;ul&gt;
  &lt;li&gt;Buy cat food&lt;/li&gt;
  &lt;li&gt;Exercise&lt;/li&gt;
  &lt;li&gt;Cheer up friend&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;The end!&lt;/p&gt;</pre>

<p>デフォルトでは、ブラウザーはこのコードを次のように表示します。</p>

<p>{{ EmbedLiveSample('Normal_flow', '100%', 200) }}</p>

<p>ここでは、HTML がソースコードに現れる順序どおりに表示されていることに注意してください — 最初の段落の後に番号なしリストが続き、その後に2番目の段落が続きます。</p>

<p>上下に並んで表示される要素は<em>ブロック</em>要素と呼ばれています。段落内の個々の単語と同じように横に並んで表示される<em>インライン</em>要素とは対照的です。</p>

<div class="note">
<p><strong>注</strong>: ブロック要素のコンテンツがレイアウトされる方向は、ブロック方向（Block Direction）と呼ばれます。 ブロック方向は、英語などの横書きモード（Horizontal Writing Mode）の言語では垂直に走ります。 日本語のような縦書きモード（Vertical Writing Mode）では、どの言語でも水平に走ります。 対応するインライン方向（Inline Direction）は、インラインコンテンツ（文など）が走る方向です。</p>
</div>

<p>CSSで何かをレイアウトするとその要素を通常フローから遠ざけることになりますが、ページ上の多くの要素は通常フローにしたがって適宜レイアウトされます。これが、構造化された HTML 文書から始めることが非常に重要である理由です。 なぜなら、多くの要素のレイアウトに一から悪戦苦闘するかわりに、あらかじめ多くのものがレイアウトされている現状で作業できるからです。</p>

<p>CSS で要素をどのように配置するかを変更できる方法は次のとおりです。</p>

<ul>
 <li><strong>{{cssxref("display")}} プロパティ</strong> — <code>block</code>、<code>inline</code>、<code>inline-block</code> などの標準値は、要素が通常フローでどのようにふるまうかを変更することができます（詳細については、<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes">CSS ボックスの種類</a>を参照してください）。それから、<a href="/ja/docs/Learn/CSS/CSS_layout/Grids">CSS グリッド</a>や<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>のように、<code>display</code> の値によってオンにされるレイアウト方法全体があります。</li>
 <li><strong>フロート</strong> — <code>left</code> のような {{cssxref("float")}} の値を適用すると、雑誌のレイアウトで画像の周囲をテキストが取り囲むことがあるように、要素の片側に沿ってブロックレベル要素が折り返されることがあります。</li>
 <li><strong>{{cssxref("position")}} プロパティ</strong> — 他のボックス内のボックスの配置を正確に制御できます。 通常フローでは <code>static</code> 位置指定がデフォルトですが、他の値を使用して要素を異なる方法でレイアウトすることもできます。 例えば、ブラウザーのビューポートの左上に固定するなどです。</li>
 <li><strong>表レイアウト</strong> — HTML 表の一部をスタイルするために設計された機能は、<code>display: table</code> とそれに関連するプロパティを使用して、表以外の要素にも使用できます。</li>
 <li><strong>段組みレイアウト</strong> — <a href="/ja/docs/Web/CSS/CSS_Columns">段組みレイアウト</a>のプロパティを使用すると、新聞のようにブロックのコンテンツを段組みにレイアウトできます。</li>
</ul>

<h2 id="The_display_property" name="The_display_property">display プロパティ</h2>

<p>CSS でページレイアウトを実現するための主な方法は、<code>display</code> プロパティのすべての値です。 このプロパティにより、デフォルトの表示方法を変更することができます。 通常フローに属するすべての要素には <code>display</code> の値が設定されており、この値によって要素のデフォルトのふるまいが決まります。 例えば、英語の文書内で{{htmlelement("p", "段落")}}が上から下へ表示されるのは、<code>display: block</code> でスタイルが設定されているためです。 段落内のテキストの周囲にリンクを作成しても、そのリンクは残りのテキストとインラインのままで、改行しません。 これは、{{htmlelement("a")}} 要素がデフォルトで <code>display: inline</code> であるためです。</p>

<p>このような display のデフォルトのふるまいは変更できます。 例えば、{{htmlelement("li")}} 要素はデフォルトで <code>display: block</code> です。 つまり、英語の文書ではリスト項目は上下に表示されます。 <code>display</code> の値を <code>inline</code> に変更した場合、単語が文中で行うように、それらは互いに隣接して表示されます。 任意の要素に対して <code>display</code> の値を変更できるということは、どのように見えるかについて心配することなく、<ruby>意味論的<rp>(</rp><rt>semantic</rt><rp>)</rp></ruby>な視点で HTML 要素を選択できるということです。 見た目はあなたが変えることができるものです。</p>

<p>ひとつの項目を <code>block</code> から <code>inline</code> に、またはその逆に切り替えてデフォルトの表示方法を変更することに加えて、より大きい単位で作用するいくつかのレイアウト手法を <code>display</code> の値を通じて使い始めることができます。 ただし、これらを使用するときは、通常、追加のプロパティを指定する必要があります。 要素のレイアウトを検討する目的において最も重要な値は <code>display: flex</code> と <code>display: grid</code> の2つです。</p>

<h2 id="Flexbox" name="Flexbox">フレックスボックス</h2>

<p>フレックスボックス（Flexbox）は <a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexible Box Layout</a> Module の略称で、行または列のいずれかとして、物を1次元にレイアウトすることを容易にするように設計されています。 フレックスボックスを使うには、<code>display: flex</code> をレイアウトしたい要素の親要素に適用します。 その直接の子はすべてフレックス項目になります。これは簡単な例で見ることができます。</p>

<p>以下の HTML マークアップは、3つの {{htmlelement("div")}} 要素が入っている <code>wrapper</code> クラスを持つ包含要素を示しています。 デフォルトでは、これらは英語の文書では上下にブロック要素として表示されます。</p>

<p>ただし、<code>display: flex</code> を親に追加すると、3つの項目は列に配置されます。 これは、それらが<em>フレックス項目</em>になり、フレックスボックスがそれらに与えるいくつかの初期値を使用するためです。 {{cssxref("flex-direction")}} の初期値は <code>row</code> なので、行として表示されます。 {{cssxref("align-items")}} プロパティの初期値は <code>stretch</code> であるため、それらはすべて最も高い項目の高さまで伸びているように見えます。 これは、項目がフレックスコンテナの高さまで伸びることを意味します。 この場合、項目は最も高い項目によって定義されます。 項目はすべてコンテナの先頭に配置され、行の末尾に余分なスペースが残ります。</p>

<div id="Flex_1">
<div class="hidden">
<h6 id="Flexbox_Example_1">Flexbox Example 1</h6>

<pre class="brush: css">* {box-sizing: border-box;}

.wrapper &gt; div {
    border-radius: 5px;
    background-color: rgb(207,232,220);
    padding: 1em;
}
    </pre>
</div>

<pre class="brush: css">.wrapper {
  display: flex;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="box1"&gt;One&lt;/div&gt;
  &lt;div class="box2"&gt;Two&lt;/div&gt;
  &lt;div class="box3"&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>

<p>{{ EmbedLiveSample('Flex_1', '300', '200') }}</p>

<p>フレックスコンテナに適用できる上記のプロパティに加えて、フレックス項目に適用できるプロパティがあります。 これらのプロパティは、とりわけ、項目のたわみ方を変えることができ、利用可能なスペースに収まるように項目を拡大および縮小することを可能にします。</p>

<p>この単純な例として、すべての子項目に <code>1</code> の値の {{cssxref("flex")}} プロパティを追加できます。 これにより、末尾にスペースを残すのではなく、すべての項目が拡大してコンテナがいっぱいになります。 より多くのスペースがあるならば、項目はより広くなり、スペースが少ないと狭くなります。 さらに、マークアップに別の要素を追加すると、項目はすべてスペースを空けるために小さくなります — サイズに関係なく、同じ大きさのスペースを占めるようにサイズが調整されます。</p>

<div id="Flex_2">
<div class="hidden">
<h6 id="Flexbox_Example_2">Flexbox Example 2</h6>

<pre class="brush: css">    * {box-sizing: border-box;}

    .wrapper &gt; div {
        border-radius: 5px;
        background-color: rgb(207,232,220);
        padding: 1em;
    }
    </pre>
</div>

<pre class="brush: css">.wrapper {
    display: flex;
}

.wrapper &gt; div {
    flex: 1;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
    &lt;div class="box1"&gt;One&lt;/div&gt;
    &lt;div class="box2"&gt;Two&lt;/div&gt;
    &lt;div class="box3"&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>

<p>{{ EmbedLiveSample('Flex_2', '300', '200') }}</p>

<div class="note">
<p><strong>注</strong>: これはフレックスボックスで可能なことの非常に短い紹介です。 詳細については、<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>の記事を参照してください。</p>
</div>

<h2 id="Grid_Layout" name="Grid_Layout">グリッドレイアウト</h2>

<p>フレックスボックスは1次元レイアウト用に設計されていますが、グリッドレイアウト（Grid Layout）は2次元用に設計されています — 行と列に物を並べます。</p>

<p>繰り返しになりますが、<code>display: grid</code> という特定の <code>display</code> の値でグリッドレイアウト（Grid Layout）をオンにすることができます。 以下の例では、コンテナといくつかの子要素とともに、<code>flex</code> の例と同様のマークアップを使用しています。 <code>display: grid</code> の使用に加えて、{{cssxref("grid-template-rows")}} プロパティと {{cssxref("grid-template-columns")}} プロパティをそれぞれ使用して、親の行と列のトラックをいくつか定義します。 それぞれ <code>1fr</code> の3列と <code>100px</code> の2行を定義しました。 子要素に規則を置く必要はなく、自動的にグリッドが作成したセルに配置されます。</p>

<div id="Grid_1">
<div class="hidden">
<h6 id="Grid_example_1">Grid example 1</h6>

<pre class="brush: css">    * {box-sizing: border-box;}

    .wrapper &gt; div {
        border-radius: 5px;
        background-color: rgb(207,232,220);
        padding: 1em;
    }
    </pre>
</div>

<pre class="brush: css">.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
    &lt;div class="box1"&gt;One&lt;/div&gt;
    &lt;div class="box2"&gt;Two&lt;/div&gt;
    &lt;div class="box3"&gt;Three&lt;/div&gt;
    &lt;div class="box4"&gt;Four&lt;/div&gt;
    &lt;div class="box5"&gt;Five&lt;/div&gt;
    &lt;div class="box6"&gt;Six&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>

<p>{{ EmbedLiveSample('Grid_1', '300', '330') }}</p>

<p>グリッドを作成したら、上記の自動配置のふるまいに頼らずに、明示的に項目を配置できます。 以下の2番目の例では、同じグリッドを定義しましたが、今回は3つの子項目を使用しています。 {{cssxref("grid-column")}} プロパティと {{cssxref("grid-row")}} プロパティを使用して各項目の開始ラインと終了ラインを設定しました。 これにより、項目が複数のトラックにまたがるようになります。</p>

<div id="Grid_2">
<div class="hidden">
<h6 id="Grid_example_2">Grid example 2</h6>

<pre class="brush: css">    * {box-sizing: border-box;}

    .wrapper &gt; div {
        border-radius: 5px;
        background-color: rgb(207,232,220);
        padding: 1em;
    }
    </pre>
</div>

<pre class="brush: css">.wrapper {
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
</pre>

<pre class="brush: html">&lt;div class="wrapper"&gt;
    &lt;div class="box1"&gt;One&lt;/div&gt;
    &lt;div class="box2"&gt;Two&lt;/div&gt;
    &lt;div class="box3"&gt;Three&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>

<p>{{ EmbedLiveSample('Grid_2', '300', '330') }}</p>

<div class="note">
<p><strong>注</strong>: これら2つの例は、グリッドレイアウトの機能のほんの一部です。 詳細については、<a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッドレイアウト</a>の記事を参照してください。</p>
</div>

<p>このガイドの残りの部分では、他のレイアウト方法について説明します。 これは、ページの主なレイアウト構造にとってはそれほど重要ではありませんが、それでも特定のタスクを達成するのに役立ちます。 各レイアウトタスクの性質を理解することで、デザインの特定の構成要素を見たときに、それに最も適したレイアウトの種類が明らかになることがすぐにわかります。</p>

<h2 id="Floats" name="Floats">フロート</h2>

<p>要素を浮動すると、その要素とそれに通常フローで続くブロックレベル要素のふるまいが変わります。 要素が左または右に移動されて通常フローから除かれ、囲むコンテンツが浮動項目の周囲に浮かびます。</p>

<p>{{cssxref("float")}} プロパティには次の4つの可能な値があります。</p>

<ul>
 <li><code>left</code> — 要素を左に浮かべる。</li>
 <li><code>right</code> — 要素を右に浮かべる。</li>
 <li><code>none</code> — まったく浮動しないことを指定する。 これがデフォルト値です。</li>
 <li><code>inherit</code> — <code>float</code> プロパティの値がこの要素の親要素から継承されるべきであることを指定します。</li>
</ul>

<p>以下の例では、<code>&lt;div&gt;</code> を左に浮かべ、テキストを要素から遠ざけるために右に {{cssxref("margin")}} を与えます。 これはそのボックスの周りに巻かれたテキストの効果を与え、そしてあなたが最新のウェブデザインで使用されるフロート（Floats）について知る必要があるものの大部分です。</p>

<div id="Float_1">
<div class="hidden">
<h6 id="Floats_example">Floats example</h6>

<pre class="brush: css">body {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
}

p {
    line-height: 2;
    word-spacing: 0.1rem;
}

.box {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    border-radius: 5px;
}
</pre>
</div>

<pre class="brush: html">&lt;h1&gt;Simple float example&lt;/h1&gt;

&lt;div class="box"&gt;Float&lt;/div&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

</pre>

<pre class="brush: css">
.box {
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 30px;
}
</pre>
</div>

<p>{{ EmbedLiveSample('Float_1', '100%', 600) }}</p>

<div class="note">
<p><strong>注</strong>: フロートについては、<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">float と clear</a> のプロパティに関するレッスンで詳しく説明しています。 フレックスボックスやグリッドレイアウトなどのテクニックの前は、列レイアウトの作成方法としてフロートが使用されていました。 あなたはまだウェブ上でこれらの方法に出くわすかもしれません。 これらについては、<a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a>に関するレッスンで説明します。</p>
</div>

<h2 id="Positioning_techniques" name="Positioning_techniques">位置指定のテクニック</h2>

<p>位置指定（Positioning）を使用すると、通常フローのときに要素を配置されていた場所から別の場所に移動できます。 位置指定はメインページのレイアウトを作成するための方法ではなく、ページ上の特定の項目の位置を管理および微調整することを目的としています。</p>

<p>ただし、{{cssxref("position")}} プロパティに依存する特定のレイアウトパターンには便利なテクニックがあります。 位置指定を理解することは、通常フローを理解し、項目を通常フローから移動させることとは何かを理解するのに役立ちます。</p>

<p>あなたが知っておくべき、次の5種類の位置指定があります。</p>

<ul>
 <li><strong>静的位置指定</strong>（Static positioning）は、すべての要素が取得するデフォルトです。 これは、「要素をドキュメントレイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」という意味です。</li>
 <li><strong>相対位置指定</strong>（Relative positioning）を使用すると、ページ上の要素の位置を変更して、通常フロー内の位置に相対的に移動できます — ページ上の他の要素と重なるようにすることも含まれます。</li>
 <li><strong>絶対位置指定</strong>（Absolute positioning）では、要素は別のレイヤーに配置されているように、ページの通常のレイアウトフローから完全に外れます。 そこから、それをページの <code>&lt;html&gt;</code> 要素（あるいはそれに最も近くに位置する祖先要素）の端に相対的な位置に固定することができます。 これは、さまざまなコンテンツパネルを重ねて表示したり、必要に応じて表示/非表示にしたりするタブ付きボックスや、デフォルトでは画面外にありコントロールボタンを使用して画面上をスライドさせることができる情報パネルを作成するのに便利です。</li>
 <li><strong>固定位置指定</strong>（Fixed positioning）は絶対位置指定と非常によく似ていますが、他の要素ではなく、ブラウザーのビューポートを基準にして要素を固定する点が異なります。 これは、他のコンテンツがスクロールしても常に画面上の同じ場所にとどまる永続的なナビゲーションメニューなどの効果を作成するのに役立ちます。</li>
 <li><strong>粘着位置指定</strong>（Sticky positioning）は、要素が定義されたビューポートからのオフセットにぶつかるまで、要素は <code>position: static</code> のようにふるまい、その位置からは <code>position: fixed</code> のようにふるまう、より新しい位置指定方法です。</li>
</ul>

<h3 id="Simple_positioning_example" name="Simple_positioning_example">簡単な位置指定の例</h3>

<p>これらのページレイアウトのテクニックに慣れるために、いくつかの簡単な例を紹介します。 例はすべて同じ HTML を特徴とするでしょう。 それは以下の通りです。</p>

<pre class="brush: html">&lt;h1&gt;Positioning&lt;/h1&gt;

&lt;p&gt;I am a basic block level element.&lt;/p&gt;
&lt;p class="positioned"&gt;I am a basic block level element.&lt;/p&gt;
&lt;p&gt;I am a basic block level element.&lt;/p&gt;</pre>

<p>この HTML はデフォルトで次の CSS を使ってスタイルされます。</p>

<pre class="brush: css">body {
  width: 500px;
  margin: 0 auto;
}

p {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</pre>

<p>レンダリングされた出力は次のとおりです。</p>

<p>{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}</p>

<h3 id="Relative_positioning" name="Relative_positioning">相対位置指定</h3>

<p>相対位置指定（Relative positioning）を使用すると、デフォルトで設定されている通常フローの位置から項目をずらすことができます。 これは、アイコンをテキストラベルに合わせるためにアイコンを少し下に移動するなどのタスクを実行できることを意味します。 これを行うには、相対位置指定を追加するために次の規則を追加します。</p>

<pre class="brush: css">.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}</pre>

<p>ここで私たちは真ん中の段落に <code>relative</code> の {{cssxref("position")}} の値を与えます — これはそれ自身では何もしませんので、{{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティも追加します。 これらは影響を受けた要素を右下に動かすのに役立ちます — これはあなたが期待していたのとは反対のように思えるかもしれませんが、要素の左側と上側を押されていると考える必要があり、その結果として右下に移動します。</p>

<p>このコードを追加すると、次のようになります。</p>

<div id="Relative_1">
<div class="hidden">
<h6 id="Relative_positioning_example">Relative positioning example</h6>

<pre class="brush: html">&lt;h1&gt;Relative positioning&lt;/h1&gt;

&lt;p&gt;I am a basic block level element.&lt;/p&gt;
&lt;p class="positioned"&gt;This is my relatively positioned element.&lt;/p&gt;
&lt;p&gt;I am a basic block level element.&lt;/p&gt;</pre>

<pre class="brush: css">body {
  width: 500px;
  margin: 0 auto;
}

p {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</pre>
</div>

<pre class="brush: css">.positioned {
  position: relative;
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  top: 30px;
  left: 30px;
}</pre>
</div>

<p>{{ EmbedLiveSample('Relative_1', '100%', 300) }}</p>

<h3 id="Absolute_positioning" name="Absolute_positioning">絶対位置指定</h3>

<p>絶対位置指定（Absolute positioning）は、通常フローから要素を完全に除き、包含ブロックの端からのオフセットを使用して配置するために使用されます。</p>

<p>元の位置指定のない例に戻ると、絶対位置指定を実装するために次の CSS 規則を追加できます。</p>

<pre class="brush: css">.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}</pre>

<p>ここでは、真ん中の段落に <code>absolute</code> の {{cssxref("position")}} の値と、前と同じ {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティを与えます。 ただし、このコードを追加すると、次のようになります。</p>

<div id="Absolute_1">
<div class="hidden">
<h6 id="Absolute_positioning_example">Absolute positioning example</h6>

<pre class="brush: html">&lt;h1&gt;Absolute positioning&lt;/h1&gt;

&lt;p&gt;I am a basic block level element.&lt;/p&gt;
&lt;p class="positioned"&gt;This is my absolutely positioned element.&lt;/p&gt;
&lt;p&gt;I am a basic block level element.&lt;/p&gt;</pre>

<pre class="brush: css">body {
  width: 500px;
  margin: 0 auto;
}

p {
    background-color: rgb(207,232,220);
    border: 2px solid rgb(79,185,227);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
</pre>
</div>

<pre class="brush: css">.positioned {
    position: absolute;
    background: rgba(255,84,104,.3);
    border: 2px solid rgb(255,84,104);
    top: 30px;
    left: 30px;
}</pre>
</div>

<p>{{ EmbedLiveSample('Absolute_1', '100%', 300) }}</p>

<p>これはとても違います！ 位置指定要素は、ページレイアウトの残りの部分から完全に分離され、その上に配置されています。 他の2つの段落は、配置された兄弟が存在しないかのように一緒にいます。 {{cssxref("top")}} プロパティと {{cssxref("left")}} プロパティは、絶対位置指定要素に対しては、相対位置指定要素とは異なる効果があります。 この場合、オフセットはページの上側と左側から計算されています。 このコンテナになる親要素を変更することは可能で、<a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a>のレッスンでそれを見ます。</p>

<h3 id="Fixed_positioning" name="Fixed_positioning">固定位置指定</h3>

<p>固定位置指定（Fixed positioning）は、絶対位置指定と同じ方法で、ドキュメントフローから要素を除きます。 ただし、コンテナからのオフセットが適用されるのではなく、ビューポートからのオフセットが適用されます。 項目がビューポートに対して固定されたままであるので、ページがその下でスクロールするときに固定されたままであるメニューのような効果を作成することができます。</p>

<p>この例では、HTML を3段落のテキストにして、ページをスクロールさせます。 また、<code>position: fixed</code> を指定したボックスもあります。</p>

<pre class="brush: html">&lt;h1&gt;Fixed positioning&lt;/h1&gt;

&lt;div class="positioned"&gt;Fixed&lt;/div&gt;

&lt;p&gt;Paragraph 1.&lt;/p&gt;
&lt;p&gt;Paragraph 2.&lt;/p&gt;
&lt;p&gt;Paragraph 3.&lt;/p&gt;
</pre>

<div id="Fixed_1">
<div class="hidden">
<h6 id="Fixed_positioning_example">Fixed positioning example</h6>

<pre class="brush: html">&lt;h1&gt;Fixed positioning&lt;/h1&gt;

&lt;div class="positioned"&gt;Fixed&lt;/div&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

</pre>

<pre class="brush: css">body {
    width: 500px;
    margin: 0 auto;
}

.positioned {
    background: rgba(255,84,104,.3);
    border: 2px solid rgb(255,84,104);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}</pre>
</div>

<pre class="brush: css">.positioned {
    position: fixed;
    top: 30px;
    left: 30px;
}</pre>
</div>

<p>{{ EmbedLiveSample('Fixed_1', '100%', 200) }}</p>

<h3 id="Sticky_positioning" name="Sticky_positioning">粘着位置指定</h3>

<p>粘着位置指定（Sticky positioning）は、私たちが自由に使える最後の位置指定方法です。 デフォルトの静的位置指定に固定位置指定を組み合わせたものです。 項目に <code>position: sticky</code> があるとき、それは定義したビューポートからのオフセットにぶつかるまで通常フローでスクロールします。 その時点で、<code>position：fixed</code> が適用されているかのように「動かなくなります」。</p>

<div id="Sticky_1">
<div class="hidden">
<h6 id="Sticky_positioning_example">Sticky positioning example</h6>

<pre class="brush: html">&lt;h1&gt;Sticky positioning&lt;/h1&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;div class="positioned"&gt;Sticky&lt;/div&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;       </pre>

<pre class="brush: css">body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgba(255,84,104,.3);
  border: 2px solid rgb(255,84,104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}</pre>
</div>

<pre class="brush: css">.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}</pre>
</div>

<p>{{ EmbedLiveSample('Sticky_1', '100%', 200) }}</p>

<div class="note">
<p><strong>注</strong>: 位置指定の詳細については、<a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a>の記事をご覧ください。</p>
</div>

<h2 id="Table_layout" name="Table_layout">表レイアウト</h2>

<p>HTML 表は表形式のデータを表示するのに適していますが、何年も前に — 基本的な CSS でさえブラウザー間で確実にサポートされる前に — ウェブ開発者はウェブページ全体のレイアウトにも表を使用していました — ヘッダー、フッター、異なる列などを、いろいろな表の行と列に配置します。 これは当時はうまくいきましたが、多くの問題を抱えています — 表レイアウトは柔軟性がなく、マークアップが非常に重く、デバッグが難しく、意味論的に間違っています（例えば、スクリーンリーダーのユーザーは表レイアウトをナビゲートするのに問題があります）。</p>

<p>表のマークアップを使用したときに表がウェブページ上で表示される方法は、表レイアウトを定義する CSS プロパティのセットによるものです。 これらのプロパティは、表ではない要素をレイアウトするために使用することができ、その使用法は「CSS 表の使用」として説明されることがあります。</p>

<p>以下の例はそのような使い方の1つを示しています。 フレックスボックスやグリッドをサポートしていない非常に古いブラウザーを使用しているような状況では、レイアウトに CSS 表を使用することをこの時点では過去の方法と見なすべきです。</p>

<p>例を見てみましょう。 まず、HTML フォームを作成する簡単なマークアップです。 各入力要素にはラベルがあり、段落内にキャプションも含まれています。 各ラベル/入力ペアは、レイアウトのために {{htmlelement("div")}} で囲まれています。</p>

<pre class="brush: html">&lt;form&gt;
  &lt;p&gt;First of all, tell us your name and age.&lt;/p&gt;
  &lt;div&gt;
    &lt;label for="fname"&gt;First name:&lt;/label&gt;
    &lt;input type="text" id="fname"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="lname"&gt;Last name:&lt;/label&gt;
    &lt;input type="text" id="lname"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="age"&gt;Age:&lt;/label&gt;
    &lt;input type="text" id="age"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>今、私たちの例のための CSS。 {{cssxref("display")}} プロパティの使用方法を除いて、ほとんどの CSS はかなり普通のものです。 {{htmlelement("form")}}、{{htmlelement("div")}}、{{htmlelement("label")}} と {{htmlelement("input")}} は、それぞれ表、表の行、表のセルのように表示されるように指示しています — 基本的に、それらは HTML 表のマークアップのようにふるまい、デフォルトでラベルと入力がうまく並ぶようにします。 あとは、サイズやマージンなどを少し追加するだけで、すべてが少し見栄えよくなります。</p>

<p>あなたは、キャプションの段落に  <code>display：table-caption;</code> が与えられていることに気付くでしょう — これは表の {{htmlelement("caption")}} のようにふるまいます — そして <code>caption-side: bottom;</code> により、マークアップがソースの <code>&lt;input&gt;</code> 要素の前にある場合でも、スタイル設定の目的でキャプションが表の下部に表示されるようにします。 これにより、かなりの柔軟性が得られます。</p>

<pre class="brush: css">html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label, form input {
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
}</pre>

<p>これにより、次のような結果が得られます。</p>

<p>{{ EmbedLiveSample('Table_layout', '100%', '170') }}</p>

<p>この例は <a href="https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html">css-tables-example.html</a> でもライブで見ることができます（<a href="https://github.com/mdn/learning-area/blob/master/css/styling-boxes/box-model-recap/css-tables-example.html">ソースコード</a>も見る）。</p>

<h2 id="Multi-column_layout" name="Multi-column_layout">段組みレイアウト</h2>

<p>段組みレイアウトモジュール（Multi-column layout module）は、新聞のテキストの流れと同じように、コンテンツを列にレイアウトする方法を提供します。 ユーザーに強制的に上下にスクロールさせたくない場合は、列を上下に読むことはウェブのコンテキストではあまり役に立ちませんが、コンテンツを列に配置することは便利なテクニックです。</p>

<p>ブロックを段組みコンテナに変えるには、次のどちらかを使います。 {{cssxref("column-count")}} プロパティは、ブラウザーにいくつの列を持たせたいかを指示します。 {{cssxref("column-width")}} プロパティは、ブラウザーにその幅以上の列をコンテナに入れるように指示します。</p>

<p>以下の例では、<code>container</code> クラスを持つ <code>&lt;div&gt;</code> 要素を含む HTML ブロックから始めます。</p>

<pre class="brush: html">&lt;div class="container"&gt;
    &lt;h1&gt;Multi-column layout&lt;/h1&gt;

    &lt;p&gt;Paragraph 1.&lt;/p&gt;
    &lt;p&gt;Paragraph 2.&lt;/p&gt;

&lt;/div&gt;
</pre>

<p>このコンテナでは 200 ピクセルの <code>column-width</code> を使用しているため、ブラウザーはコンテナに収まるだけの数の 200 ピクセルの列を作成し、作成された列間で残りのスペースを共有します。</p>

<div id="Multicol_1">
<div class="hidden">
<h6 id="Multicol_example">Multicol example</h6>

<pre class="brush: html">    &lt;div class="container"&gt;
        &lt;h1&gt;Multi-column Layout&lt;/h1&gt;

        &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;


        &lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;

    &lt;/div&gt;
        </pre>

<pre class="brush: css">body { max-width: 800px; margin: 0 auto; } </pre>
</div>

<pre class="brush: css">    .container {
        column-width: 200px;
    }</pre>
</div>

<p>{{ EmbedLiveSample('Multicol_1', '100%', 200) }}</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>この記事では、知っておくべきすべてのレイアウト技術について簡単に説明しました。 個々の技術の詳細については、続けて読んでください！</p>

<p>{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内の文書</h2>

<ul>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Introduction">CSS レイアウト入門</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Normal_Flow">通常フロー</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Floats">フロート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">段組みレイアウト</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Responsive_Design">レスポンシブデザイン</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Media_queries">メディアクエリーの初心者向けガイド</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">古いブラウザーのサポート</a></li>
 <li><a href="/ja/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension">基礎的なレイアウトの理解</a></li>
</ul>
