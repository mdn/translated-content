---
title: 実用的な位置指定の例
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
tags:
  - Article
  - Beginner
  - CSS
  - CodingScripting
  - Guide
  - Layout
  - Learn
  - absolute
  - fixed
  - relative
translation_of: Learn/CSS/CSS_layout/Practical_positioning_examples
---
<div>{{LearnSidebar}}</div>



<p class="summary"><span class="seoSummary">この記事では、位置指定でどのようなことができるかを説明するために、実際に使用されるいくつかの例を作成する方法を示します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基礎（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>位置指定の実用性を理解すること。</td>
  </tr>
 </tbody>
</table>

<h2 id="A_tabbed_info-box" name="A_tabbed_info-box">タブ付き情報ボックス</h2>

<p>最初の例は、古典的なタブ付きの情報ボックスです — これは、たくさんの情報を小さな領域にまとめたいときによく使われる機能です。 これには、戦略/戦争ゲームのような情報量の多いアプリ、画面が狭くスペースが限られているモバイル版のウェブサイト、および UI 全体を埋め尽くさずに多くの情報を利用できるようにしたいコンパクトな情報ボックスが含まれます。 これらを単純化した例は、完成すると次のようになります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13368/tabbed-info-box.png" style="display: block; height: 400px; margin: 0px auto; width: 450px;"></p>

<div class="note">
<p><strong>注</strong>: 完成した例は、<a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html">info-box.html</a> でライブで確認できます（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">ソースコード</a>）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。</p>
</div>

<p>「別々のタブを別々のウェブページとして作成し、タブをクリックして別々のページに移動させて同様の効果を生み出すだけでよいのではないでしょうか？」と考えるかもしれません。 このコードならもっと簡単なものになりますが、実際には個々の「ページ」ビューは実際には新しくロードされたウェブページになるため、ビュー間で情報を保存し、この機能をより大きな UI デザインに統合するのは難しくなります。 さらに、いわゆる「シングルページアプリ」は、特にモバイルウェブ UI の場合、非常に人気が高まっています。 なぜなら、すべてのコンテンツを表示するために必要な HTTP リクエストの数が減り、パフォーマンスが向上するからです。</p>

<div class="note">
<p><strong>注</strong>: ウェブ開発者の中には、一度に1ページの情報だけをロードし、<a href="/ja/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> などの JavaScript 機能を使用して表示される情報を動的に変更することで、さらに問題を解決するものもあります。 しかし、学習の現時点では、物事をできるだけシンプルに保ちたいと思います。 後で JavaScript がいくつかありますが、ほんの少しだけです。</p>
</div>

<p>まず始めに、出発点の HTML ファイル <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box-start.html">info-box-start.html</a> のローカルコピーを作成してください。 これをローカルコンピュータの適当な場所に保存して、テキストエディタで開きます。 <code>body</code> に含まれる HTML を見てみましょう。</p>

<pre class="brush: html">&lt;section class="info-box"&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#" class="active"&gt;Tab 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Tab 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Tab 3&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;div class="panels"&gt;
    &lt;article class="active-panel"&gt;
      &lt;h2&gt;The first tab&lt;/h2&gt;

      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt metus. Donec ultrices, urna maximus consequat aliquet, dui neque eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor urna. Nulla facilisi.&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
      &lt;h2&gt;The second tab&lt;/h2&gt;

      &lt;p&gt;This tab hasn't got any Lorem Ipsum in it. But the content isn't very exciting all the same.&lt;/p&gt;
    &lt;/article&gt;
    &lt;article&gt;
      &lt;h2&gt;The third tab&lt;/h2&gt;

      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an ordered list: how exciting!&lt;/p&gt;

      &lt;ol&gt;
        &lt;li&gt;dui neque eleifend lorem, a auctor libero turpis at sem.&lt;/li&gt;
        &lt;li&gt;Aliquam ut porttitor urna.&lt;/li&gt;
        &lt;li&gt;Nulla facilisi&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/article&gt;
  &lt;/div&gt;
&lt;/section&gt;</pre>

<p>それで、ここに {{htmlelement("ul")}} と {{htmlelement("div")}} を含む <code>info-box</code> のクラス（<code>class</code>）を持つ {{htmlelement("section")}} 要素があります。 番号なしリストには3つのリスト項目があり、その中にリンクがあります。 これは、コンテンツパネルを表示するためにクリックする実際のタブになります。 <code>&lt;div&gt;</code> には、各タブに対応するコンテンツパネルを構成する3つの {{htmlelement("article")}} 要素が含まれています。 各パネルにはいくつかのサンプルのコンテンツが含まれています。</p>

<p>ここでの考え方は、標準の水平ナビゲーションメニューのようにタブをスタイルし、絶対位置指定を使用して互いの上に重なるようにパネルをスタイルするということです。 また、タブが押されたときに対応するパネルを表示し、タブ自体をスタイルするためにページに含める JavaScript も少し用意します。 現段階では JavaScript 自体を理解する必要はありませんが、基本的な <a href="/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript</a> をできるだけ早く学習することを検討するべきです — UI 機能が複雑になるほど、欲しい機能を実装するために JavaScript が必要になるでしょう。</p>

<h3 id="General_setup" name="General_setup">一般的な設定</h3>

<p>まず、{{htmlelement("style")}} の開始タグと終了タグの間に次を追加します。</p>

<pre class="brush: css">html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}</pre>

<p>これは、ページに サンセリフ（<code>sans-serif</code>）フォントを設定し、<code>border-box</code> の {{cssxref("box-sizing")}} モデルを使い、{{htmlelement("body")}} からデフォルトのマージンを取り除くための一般的な設定です。</p>

<p>次に、前の CSS のすぐ下に次を追加します。</p>

<pre class="brush: css">.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}</pre>

<p>これはコンテンツに特定の幅と高さを設定し、古い <code>margin: 0 auto</code> トリックを使用して画面の中央に配置します。 以前のコースでは、可能であればコンテンツのコンテナに固定の高さを設定しないことをお勧めしました。 タブのコンテンツは固定されているので、この状況では問題ありません。 また、異なる高さで異なるタブを表示するのも少々不快です。</p>

<h3 id="Styling_our_tabs" name="Styling_our_tabs">タブのスタイリング</h3>

<p>今度はタブをタブのようにスタイルします — 基本的にこれらは水平ナビゲーションメニューですが、コースで以前見たようにクリックされたときに異なるウェブページをロードする代わりに異なるパネルを同じページに表示します。 まず、CSS の一番下に次の規則を追加して、番号なしリストからデフォルトの {{cssxref("padding-left")}} と {{cssxref("margin-top")}} を削除します。</p>

<pre class="brush: css">.info-box ul {
  padding-left: 0;
  margin-top: 0;
}</pre>

<div class="note">
<p><strong>注</strong>: この例では、チェーンの先頭に <code>.info-box</code> を持つ子孫セレクタを使用しています。 これは、他のコンテンツがすでに含まれているページに、ページの他の部分に適用されているスタイルを妨げることなく、この機能を挿入できるようにするためです。</p>
</div>

<p>次に、水平方向のタブのスタイルを設定します。 リスト項目は、一列に並ぶようにすべて左にフロートさせ、行頭記号（bullet）を取り除くために {{cssxref("list-style-type")}} を <code>none</code> に設定し、{{cssxref("width")}} を <code>150px</code> に設定しているので、それらは情報ボックス全体にうまく収まります。 {{htmlelement("a")}} 要素は {{cssxref("display")}}<code>: inline-block</code> に設定されているので、一列に並んでいてもスタイル可能で、他のさまざまなプロパティを使用して、タブボタンに適したスタイルになっています。</p>

<p>次の CSS を追加してください。</p>

<pre class="brush: css">.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}</pre>

<p>最後に、このセクションでは、リンク状態にいくつかのスタイルを設定します。 最初に、フォーカス時やホバー時にタブの状態が異なるように {{cssxref(":focus")}} と {{cssxref(":hover")}} の状態を設定し、ユーザーに視覚的なフィードバックを提供します。 次に、タブの1つに <code>active</code> のクラスが存在する場合、それに同じスタイルを設定する規則を設定します。 これをタブがクリックされたときに JavaScript を使用して設定します。 次の CSS を他のスタイルの下に配置します。</p>

<pre class="brush: css">.info-box li a:focus, .info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}</pre>

<h3 id="Styling_the_panels" name="Styling_the_panels">パネルのスタイリング</h3>

<p>次の仕事はパネルをスタイルすることです。 さあ行きましょう！</p>

<p>まず最初に、<code>.panels</code> の {{htmlelement("div")}} コンテナをスタイルするために次の規則を追加します。 ここでは、パネルが情報ボックスの内側にぴったり収まるように固定の {{cssxref("height")}} を設定し、{{htmlelement("html")}} ではなくそれに対して相対的に位置指定子要素を配置できるように {{cssxref("position")}}<code>: relative</code> で {{htmlelement("div")}} を位置指定コンテキストとして設定します。 最後にレイアウトに影響を与えないように、最後に上記 CSS で設定したフロートを {{cssxref("clear")}} します。</p>

<pre class="brush: css">.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}</pre>

<p>このセクションの最後に、パネルを構成する個々の {{htmlelement("article")}} 要素をスタイルします。 最初に追加する規則は、パネルを絶対位置指定して、それらがすべて {{htmlelement("div")}} コンテナの {{cssxref("top")}} と {{cssxref("left")}} にぴったり合うように配置することです — これは、パネルを互いの上に重ねて配置するという、このレイアウト機能全体にとって絶対に重要な部分です。 この規則はまた、パネルにコンテナと同じ設定の高さを与え、コンテンツにいくつかの {{cssxref("padding")}}、テキストの {{cssxref("color")}}、および {{cssxref("background-color")}} を与えます。</p>

<p>ここで追加する2番目の規則は、<code>active-panel</code> のクラスが設定されているパネルに 1 の <code>{{cssxref("z-index")}}</code> が適用されるようにすることです。 これにより、他のパネルの上に重ねて置かれます（位置指定要素はデフォルトで 0 の <code>z-index</code> を持ち、これは他のパネルを下に置きます）。 繰り返しますが、適切なタイミングで JavaScript を使用してこのクラスを追加します。</p>

<pre class="brush: css">.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}</pre>

<h3 id="Adding_our_JavaScript" name="Adding_our_JavaScript">JavaScript を追加する</h3>

<p>この機能を動作させるための最後のステップは、JavaScript を追加することです。 {{htmlelement("script")}} の開始タグと終了タグの間に記述されているとおりに、次のコードブロックを挿入します（これらは HTML コンテンツの下方にあります）。</p>

<pre>var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for(i = 0; i &lt; tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i &lt; tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i &lt; panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}</pre>

<p>このコードは次のことを行います。</p>

<ul>
 <li>最初に、すべてのタブとすべてのパネルへの参照を <code>tabs</code> と <code>panels</code> と呼ばれる2つの変数に保存するので、後で簡単に使うことができます。</li>
 <li>次に、<code>for</code> ループを使用してすべてのタブを巡回し、それぞれに対して <code>setTabHandler()</code> という関数を実行します。 これにより、各タブをクリックしたときに発生するべき機能が設定されます。 実行されると、関数はそれが実行されている特定のタブへの参照と、<code>tabs</code> 配列内のタブの位置を識別するインデックス番号 <code>i</code> が渡されます。</li>
 <li><code>setTabHandler()</code> 関数では、タブに <code>onclick</code> イベントハンドラを設定していて、タブをクリックすると次のことが起こります。
  <ul>
   <li><code>for</code> ループで、すべてのタブを巡回し、それらに存在するクラスをすべて削除します。</li>
   <li>クリックされたタブに <code>active</code> のクラスが設定されます。 このクラスには、パネルのスタイル設定と同じ {{cssxref("color")}} と {{cssxref("background-color")}} をタブに設定する CSS の規則が関連付けられていることを以前にも説明しました。</li>
   <li><code>for</code> ループは、すべてのパネルを巡回し、それらに存在するクラスをすべて削除します。</li>
   <li>クリックされたタブに対応するパネルに <code>active-panel</code> のクラスが設定されます。 このクラスには、{{cssxref("z-index")}} を 1 に設定して他のパネルの上に表示させる CSS の規則が関連付けられていることを以前にも説明しました。</li>
  </ul>
 </li>
</ul>

<p>最初の例はこれで終わりです。 2番目の例で追加しますので、コードを開いたままにしてください。</p>

<h2 id="A_fixed_position_tabbed_info-box" name="A_fixed_position_tabbed_info-box">固定位置のタブ付き情報ボックス</h2>

<p>2番目の例では、最初の例（情報ボックス）を取り上げて、それをフルウェブページのコンテキストに追加します。 それだけではありません — ブラウザーウィンドウ内で同じ位置に留まるように固定位置を指定します。 メインコンテンツがスクロールしても、情報ボックスは画面上の同じ位置に留まります。 完成した例は次のようになります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13364/fixed-info-box.png" style="border-style: solid; border-width: 1px; display: block; height: 585px; margin: 0px auto; width: 1118px;"></p>

<div class="note">
<p><strong>注</strong>: 完成した例は、<a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html">fixed-info-box.html</a> でライブで確認できます（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/fixed-info-box.html">ソースコード</a>）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。</p>
</div>

<p>出発点として、記事の最初のセクションで完成させた例を使用するか、Github リポジトリから <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html">info-box.html</a> のローカルコピーを作成することができます。</p>

<h3 id="HTML_additions" name="HTML_additions">HTML の追加</h3>

<p>まず第一に、ウェブサイトのメインコンテンツを表すために追加の HTML が必要です。 既存のセクションの直前で、開始 {{htmlelement("body")}} タグのすぐ下に次の {{htmlelement("section")}} を追加します。</p>

<pre class="brush: html">&lt;section class="fake-content"&gt;
  &lt;h1&gt;Fake content&lt;/h1&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
  &lt;p&gt;This is fake content. Your main web page contents would probably go here.&lt;/p&gt;
&lt;/section&gt;</pre>

<div class="note">
<p><strong>注</strong>: お好みにより、本物のコンテンツで偽のコンテンツを自由に変更してもかまいません。</p>
</div>

<h3 id="Changes_to_the_existing_CSS" name="Changes_to_the_existing_CSS">既存の CSS への変更</h3>

<p>次に、情報ボックスを配置して位置指定するために、既存の CSS に若干の変更を加える必要があります。 <code>.info-box</code> の規則を変更して、<code>margin: 0 auto;</code> を取り除き（情報ボックスを中央に配置する必要はもうありません）、{{cssxref("position")}}<code>: fixed;</code> を追加して、ブラウザーのビューポートの {{cssxref("top")}} に貼り付けます。</p>

<p>これは今、次のようになるはずです。</p>

<pre class="brush: css">.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}</pre>

<h3 id="Styling_the_main_content" name="Styling_the_main_content">メインコンテンツのスタイリング</h3>

<p>この例に残された唯一のことは、メインコンテンツに何らかのスタイルを提供することです。 CSS の残りの部分の下に次の規則を追加します。</p>

<pre class="brush: css">.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}</pre>

<p>まず、情報ボックスパネルと同じ {{cssxref("background-color")}}、{{cssxref("color")}}、および {{cssxref("padding")}} をコンテンツに与えます。 それから、それを右に動かすために大きな {{cssxref("margin-left")}} を与えて、情報ボックスが収まるスペースを作り、他に何も重ならないようにします。</p>

<p>これで2番目の例は終わりです。 3つ目も同じように面白いと思います。</p>

<h2 id="A_sliding_hidden_panel" name="A_sliding_hidden_panel">スライド式隠しパネル</h2>

<p>ここで紹介する最後の例は、アイコンを押すだけで画面にスライドして現れたり消えたりするパネルです。 これは、前述のように、モバイルレイアウトのような、有用なコンテンツの代わりにメニューや情報パネルを表示して、画面の大部分を使い果たしたくない、使用可能な画面スペースが小さい状況では一般的です。</p>

<p>完成した例は次のようになります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13366/hidden-sliding-panel.png" style="border-style: solid; border-width: 1px; display: block; height: 521px; margin: 0px auto; width: 950px;"></p>

<div class="note">
<p><strong>注</strong>: 完成した例は、<a href="http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html">hidden-info-panel.html</a> でライブで確認できます（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel.html">ソースコード</a>）。 記事のこのセクションで何を構築するのかを理解するために、ぜひチェックしてください。</p>
</div>

<p>まず始めに、Github リポジトリから <a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/hidden-info-panel-start.html">hidden-info-panel-start.html</a> のローカルコピーを作成します。 これは前の例から続いていないので、新鮮な出発点ファイルが必要です。 ファイル内の HTML を見てみましょう。</p>

<pre class="brush: css">&lt;label for="toggle"&gt;❔&lt;/label&gt;
&lt;input type="checkbox" id="toggle"&gt;
&lt;aside&gt;

  ...

&lt;/aside&gt;</pre>

<p>{{htmlelement("label")}} 要素と {{htmlelement("input")}} 要素から始めましょう — <code>&lt;label&gt;</code> 要素は通常、アクセシビリティの目的でテキストラベルをフォーム要素に関連付けるために使用します（スクリーンリーダーのユーザーが、どの説明がどのフォーム要素に対応しているかを確認できるようにします）。 ここでは、<code>for</code> 属性と <code>id</code> 属性を使用して <code>&lt;input&gt;</code> チェックボックスに関連付けられています。</p>

<div class="note">
<p><strong>注</strong>: 情報アイコンとして機能するために、HTML に特別な疑問符文字を入れました。 これは、パネルを表示/非表示にするために押されるボタンを表します。</p>
</div>

<p>ここでは、これらの要素を少し異なる目的で使用します — <code>&lt;label&gt;</code> 要素のもう1つの便利な副作用は、チェックボックス自体だけでなく、チェックボックスのラベルをクリックしてチェックボックスをチェックできることです。 これはよく知られた<a href="https://css-tricks.com/the-checkbox-hack/">チェックボックスハック</a>（英語）をもたらしました。 それはボタンを切り替えることによって要素を制御する JavaScript フリーの方法を提供します。 制御する要素は、他の2つに続く {{htmlelement("aside")}} 要素です（簡潔にするために、上記のコードリストからそのコンテンツを省略しました）。</p>

<p>以下のセクションでは、これがどのように機能するのかを説明します。</p>

<h3 id="Styling_the_form_elements" name="Styling_the_form_elements">フォーム要素のスタイリング</h3>

<p>まずフォーム要素を扱いましょう — {{htmlelement("style")}} タグの間に次の CSS を追加します。</p>

<pre class="brush: css">label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}</pre>

<p>最初の規則は <code>&lt;label&gt;</code> をスタイルします。 ここでは、次のことをしています。</p>

<ul>
 <li>アイコンを見やすく大きくするには、大きい {{cssxref("font-size")}} を設定します。</li>
 <li>それに {{cssxref("position")}}<code>: absolute</code> を設定し、それを右上隅にうまく配置するために {{cssxref("top")}} と {{cssxref("right")}} を使用しました。</li>
 <li>それに 1 の {{cssxref("z-index")}} を設定します — これは、情報パネルがスタイル設定されて表示されるときに、アイコンが隠れないようにし、アイコンがその上に表示されるので、もう一度押すと情報パネルを非表示にできます。</li>
 <li>アイコンが何か面白いことをしていることをユーザーに視覚的に知らせるために、{{cssxref("cursor")}} のプロパティを使用して、マウスポインタをアイコン上に移動したときにマウスポインタをハンドポインタに変更します（リンク上にあるときに表示されるもののように）。</li>
</ul>

<p>2番目の規則は、実際のチェックボックスの <code>&lt;input&gt;</code> 要素に {{cssxref("position")}}<code>: absolute</code> を設定し、それを画面上部の範囲外に離すことで隠します。 実際の UI でこれを見たくありません。</p>

<h3 id="Styling_the_panel" name="Styling_the_panel">パネルのスタイリング</h3>

<p>今度は実際のスライド式パネル自体をスタイルする時が来ました。 CSS の最後に次の規則を追加してください。</p>

<pre class="brush: css">aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 100%;
  padding: 0 20px;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}</pre>

<p>ここではたくさんのことが起こっています — 少しずつ説明しましょう。</p>

<ul>
 <li>まず、情報ボックスに簡単な {{cssxref("background-color")}} と {{cssxref("color")}} を設定します。</li>
 <li>次に、パネルに固定の {{cssxref("width")}} を設定し、その {{cssxref("height")}} をブラウザーのビューポート全体の高さにします。</li>
 <li>少し間隔を空けるために水平方向の {{cssxref("padding")}} も含まれています。</li>
 <li>次に、パネルに {{cssxref("position")}}<code>: fixed;</code> を設定して、ページにスクロールするコンテンツがある場合でも、パネル上では常に同じ場所に表示されるようにします。 それをビューポートの {{cssxref("top")}} に接着し、デフォルトで {{cssxref("right")}} が画面外になるように設定します。</li>
 <li>最後に、要素に {{cssxref("transition")}} を設定します。 遷移は、単に突然「オン」、「オフ」になるのではなく、状態間の変化を滑らかに行わせることを可能にする興味深い機能です。 この場合、チェックボックスがオンになったときにパネルを画面上で滑らかにスライドさせることを目的としています。 （言い換えれば、疑問符のアイコンをクリックすると — <code>&lt;label&gt;</code> をクリックすると、関連するチェックボックスがオンになることを忘れないでください！ これは、ハックです。） あなたはもっと多くを学ぶでしょう...</li>
</ul>

<h3 id="Setting_the_checked_state" name="Setting_the_checked_state">チェック状態を設定する</h3>

<p>追加する CSS の最後の部分がもう1つあります。 CSS の下部に次のコードを追加してください。</p>

<pre class="brush: css">input[type=checkbox]:checked + aside {
  right: 0px;
}</pre>

<p>セレクタはここではかなり複雑です — 私たちは <code>&lt;input&gt;</code> 要素に隣接する <code>&lt;aside&gt;</code> 要素を選択していますが、それがチェックされているときだけです（これを達成するための {{cssxref(":checked")}} 擬似クラスの使用に注意してください）。 この場合、<code>&lt;aside&gt;</code> の {{cssxref("right")}} プロパティを <code>0px</code> に設定しています。 これにより、パネルが再び画面に表示されるようになります（遷移により滑らかに）。 ラベルをもう一度クリックすると、チェックボックスがオフになり、パネルを再び隠します。</p>

<p>切り替えボタン効果を作成するためのかなり賢い JavaScript フリーの方法は、これで終りです。 これは、IE9 以降で機能します（滑らかな遷移は、IE10 以降で機能します）。 この効果には、いくつかの懸念があります — フォーム要素はこの目的のために意図されていないので、少し乱用です。 さらに、その効果はアクセシビリティの観点からはあまり良くありません。 ラベルはデフォルトではフォーカスできず、フォーム要素を意味論的でない方法で使用するとスクリーンリーダーに問題が生じる可能性があります。 JavaScript とリンクまたはボタンのほうが適切かもしれませんが、それを試してみるのも楽しいでしょう。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>それでは、位置指定の見方を締めくくります — これまでのところ、基本的な仕組みがどのように機能するのか、またこれらを適用して興味深い UI 機能を構築する方法を理解しているはずです。 これをすぐに理解できなくても心配しないでください — 位置指定はかなり高度なトピックであり、理解を助けるために記事をいつでも再び参照することができます。 次の話題はフレックスボックスです。</p>



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
