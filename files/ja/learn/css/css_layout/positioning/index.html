---
title: 位置指定
slug: Learn/CSS/CSS_layout/Positioning
tags:
  - Article
  - Beginner
  - CSS
  - CodingScripting
  - Guide
  - Layout
  - Positioning
  - absolute
  - fixed
  - relative
translation_of: Learn/CSS/CSS_layout/Positioning
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}</div>

<p class="summary"><span class="seoSummary">位置指定を使用すると、通常のドキュメントレイアウトフローから要素を取り出して異なるふるまいをさせることができます。 例えば、互いの上に重なったり、常にブラウザーのビューポート内の同じ場所に留まったりします。 この記事では、さまざまな {{cssxref("position")}} の値とその使い方について説明します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>CSS 位置指定がどのように機能するのかを学ぶこと。</td>
  </tr>
 </tbody>
</table>

<p>可能であれば、あなたのローカルコンピュータでの演習をお願いします — GitHub リポジトリから <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html">0_basic-flow.html</a></code> のコピーを入手し（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/0_basic-flow.html">ソースコードはここ</a>）、それを出発点として使用します。</p>

<h2 id="Introducing_positioning" name="Introducing_positioning">位置指定の紹介</h2>

<p>位置指定（Positioning、ポジショニング）の本来の趣旨は、興味深い効果を生み出すために、上記の基本的なドキュメントフローのふるまいを上書きできるようにすることです。 レイアウト内のいくつかのボックスの位置をデフォルトのレイアウトフローの位置からわずかに変更して、ちょっと風変わりでアンティーク調の感じにしたらどうでしょうか？ 位置指定はあなたのツールです。 あるいは、ページの他の部分の上に浮かぶ UI 要素を作成したり、ページをいくらスクロールしても常にブラウザーウィンドウ内の同じ場所に配置したいですか？ 位置指定はそのようなレイアウト作業を可能にします。</p>

<p>HTML 要素に適用できるさまざまな種類の位置指定があります。 特定の種類の位置指定を要素でアクティブにするには、{{cssxref("position")}} プロパティを使用します。</p>

<h3 id="Static_positioning" name="Static_positioning">静的位置指定</h3>

<p>静的位置指定（Static positioning）は、すべての要素が取得するデフォルトです。 これは、「要素をドキュメントレイアウトフロー内の通常の位置に配置する — ここで見るべき特別なことは何もありません」を意味します。</p>

<p>これを実演し、例をこれからのセクションのために準備するために、最初に HTML の2番目の {{htmlelement("p")}} に <code>positioned</code> の <code>class</code> を次のように追加します。</p>

<pre class="brush: html notranslate">&lt;p class="positioned"&gt; ... &lt;/p&gt;</pre>

<p>それでは、CSS の最後に次の規則を追加してください。</p>

<pre class="brush: css notranslate">.positioned {
  position: static;
  background: yellow;
}</pre>

<p>保存してリフレッシュしても、2段落目の背景色が更新されていることを除けば、まったく違いはありません。 これは問題ありません。 前にも述べたように、静的位置指定はデフォルトのふるまいです！</p>

<div class="note">
<p><strong>注</strong>: この時点でのライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html">1_static-positioning.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/1_static-positioning.html">ソースコードを見る</a>）。</p>
</div>

<h3 id="Relative_positioning" name="Relative_positioning">相対位置指定</h3>

<p>相対位置指定（Relative positioning）は、最初に見ていく <code>position</code> の種類です。 これは静的位置指定と非常によく似ていますが、位置指定要素（positioned element）が通常のレイアウトフローで配置されたら、ページ上の他の要素と重なることも含んで最終的な位置を変更できるという点が異なります。 先に進んで、次のようにコード内の <code>position</code> の宣言を更新してください。</p>

<pre class="brush: css notranslate">position: relative;</pre>

<p>この段階で保存してリフレッシュしても、結果にまったく変化はありません。 それでは、どうやって要素の位置を変更するのでしょうか？ {{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}} の各プロパティを使用する必要があります。 これについては次のセクションで説明します。</p>

<h3 id="Introducing_top_bottom_left_and_right" name="Introducing_top_bottom_left_and_right">top、bottom、left、right の紹介</h3>

<p>{{cssxref("top")}}（上）、{{cssxref("bottom")}}（下）、{{cssxref("left")}}（左）、{{cssxref("right")}}（右）は {{cssxref("position")}} と一緒に使用され、位置指定要素の移動先を正確に指定します。 これを試すには、CSS の <code>.positioned</code> 規則に次の宣言を追加してください。</p>

<pre class="brush: css notranslate">top: 30px;
left: 30px;</pre>

<div class="note">
<p><strong>注</strong>: これらのプロパティの値は、論理的に想定される任意の<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Values_and_units">単位</a>（ピクセル、mm、rem、% など）をとることができます。</p>
</div>

<p>保存してリフレッシュすると、次のような結果になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;h1&gt;Relative positioning&lt;/h1&gt;

&lt;p&gt;I am a basic block level element. My adjacent block level elements sit on new lines below me.&lt;/p&gt;

&lt;p class="positioned"&gt;By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.&lt;/p&gt;

&lt;p&gt;We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.&lt;/p&gt;

&lt;p&gt;inline elements &lt;span&gt;like this one&lt;/span&gt; and &lt;span&gt;this one&lt;/span&gt; sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements &lt;span&gt;wrap onto a new line if possible — like this one containing text&lt;/span&gt;, or just go on to a new line if not, much like this image will do: &lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css notranslate">body {
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
}</pre>
</div>

<p>{{ EmbedLiveSample('Introducing_top_bottom_left_and_right', '100%', 500) }}</p>

<p>クールだよね？ Ok、おそらくこれはあなたが期待していたものではなかったでしょう — 上と左を指定したのに、なぜ下と右に移動したのでしょうか？ 最初は非論理的に聞こえるかもしれませんが、これは相対的位置指定が機能する方法です — 位置指定したボックスの指定した側を反対方向に押す見えない力を考える必要があります。 例えば、<code>top: 30px;</code> と指定した場合、力がボックスの上側を押して、箱の上側が 30px 下向きに移動します。</p>

<div class="note">
<p><strong>注</strong>: この時点でのライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html">2_relative-positioning.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/2_relative-positioning.html">ソースコードを見る</a>）。</p>
</div>

<h3 id="Absolute_positioning" name="Absolute_positioning">絶対位置指定</h3>

<p>絶対位置指定（Absolute positioning）はとても異なる結果をもたらします。 次のようにコード内の <code>position</code> 宣言を変更してみましょう。</p>

<pre class="brush: css notranslate">position: absolute;</pre>

<p>保存してリフレッシュすると、次のようになります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;h1&gt;Absolute positioning&lt;/h1&gt;

&lt;p&gt;I am a basic block level element. My adjacent block level elements sit on new lines below me.&lt;/p&gt;

&lt;p class="positioned"&gt;By default we span 100% of the width of our parent element, and we are as tall as our child content. Our total width and height is our content + padding + border width/height.&lt;/p&gt;

&lt;p&gt;We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.&lt;/p&gt;

&lt;p&gt;inline elements &lt;span&gt;like this one&lt;/span&gt; and &lt;span&gt;this one&lt;/span&gt; sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements &lt;span&gt;wrap onto a new line if possible — like this one containing text&lt;/span&gt;, or just go on to a new line if not, much like this image will do: &lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css notranslate">body {
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
}</pre>
</div>

<p>{{ EmbedLiveSample('Absolute_positioning', '100%', 420) }}</p>

<p>まず最初に、ドキュメントフロー内にあるべき位置指定要素のギャップが存在しないことに注意してください。 1番目と3番目の要素はそれが存在しないので一緒になっています！ ある意味、これは事実です。 絶対位置指定要素は、通常のドキュメントレイアウトフローには存在しません。 その代わりに、それは他のすべてのものとは別のそれ自身の層の上にあります。 これは非常に便利です。 つまり、ページ上の他の要素のレイアウトを妨げない独立した UI 機能を作成できるということです。 例えば、ポップアップ情報ボックスやコントロールメニュー、ロールオーバーパネル、ページ上の任意の場所にドラッグアンドドロップできる UI 機能、等々です。</p>

<p>次に、要素の位置が変更されたことに注意してください。 これは、{{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}} の絶対位置指定でのふるまいが異なるためです。 通常のドキュメントレイアウトフロー内での相対的な位置に基づいて要素を配置するのではなく, 要素がそれぞれの包含要素の側からあるべき距離を指定します。 したがって、この場合は、絶対位置指定要素は「包含要素」の上側から30ピクセル、左側から30ピクセルとなるようにします。 (この場合、「包含要素」とは、<strong>最初の包含ブロック</strong>（initial containing block）のことです。詳細については、以下のセクションを参照してください。)</p>

<div class="note">
<p><strong>注</strong>: 必要に応じて、要素のサイズを変更するために {{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}} を使用できます。 位置指定要素に <code>top: 0; bottom: 0; left: 0; right: 0; margin: 0;</code> を設定して、何が起こるか見てください！ 後で元に戻します。</p>
</div>

<div class="note">
<p><strong>注</strong>: はい、マージンはまだ位置指定要素に影響します。 しかしながら、マージンの相殺はそうではありません。</p>
</div>

<div class="note">
<p><strong>注</strong>: この時点でのライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html">3_absolute-positioning.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/3_absolute-positioning.html">ソースコードを見る</a>）。</p>
</div>

<h3 id="Positioning_contexts" name="Positioning_contexts">位置指定コンテキスト</h3>

<p>絶対位置指定要素の「包含要素」はどの要素でしょうか？ これは、位置指定要素の先祖の <code>position</code> プロパティに大きく依存します（<a href="/ja/docs/Web/CSS/Containing_block#Identifying_the_containing_block">包含ブロックの識別</a>を参照）。</p>

<p>明示的に定義された <code>position</code> プロパティを持つ祖先要素がない場合、デフォルトではすべての祖先要素は静的位置を持ちます。 この結果、絶対位置指定要素は<strong>最初の包含ブロック</strong>（initial containing block）に含まれます。 最初の包含ブロックはビューポートの大きさを持ち、{{htmlelement("html")}} 要素を含むブロックでもあります。 簡単に言うと、絶対位置指定要素は {{htmlelement("html")}} 要素の外側に表示され、最初のビューポートを基準にして配置されます。</p>

<p>位置指定要素は HTML ソースの {{htmlelement("body")}} 内にネストされていますが、最終的なレイアウトでは、ページの端の左上から30ピクセル離れています。 <strong>位置指定コンテキスト</strong>（positioning context） — 絶対位置指定要素がどの要素を基準にして配置されているか — を変更することができます。 これは、要素の先祖の1つに位置指定を設定することによって行われます — それを内部にネストしている要素の1つにです（内部にネストしていない要素を基準にしての配置はできません）。 これを実証するために、次の宣言を <code>body</code> 規則に追加してください。</p>

<pre class="brush: css notranslate">position: relative;</pre>

<p>これにより、次の結果が得られます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;h1&gt;Positioning context&lt;/h1&gt;

&lt;p&gt;I am a basic block level element. My adjacent block level elements sit on new lines below me.&lt;/p&gt;

&lt;p class="positioned"&gt;Now I'm absolutely positioned relative to the &lt;code&gt;&amp;lt;body&amp;gt;&lt;/code&gt; element, not the &lt;code&gt;&amp;lt;html&amp;gt;&lt;/code&gt; element!&lt;/p&gt;

&lt;p&gt;We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.&lt;/p&gt;

&lt;p&gt;inline elements &lt;span&gt;like this one&lt;/span&gt; and &lt;span&gt;this one&lt;/span&gt; sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements &lt;span&gt;wrap onto a new line if possible — like this one containing text&lt;/span&gt;, or just go on to a new line if not, much like this image will do: &lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css notranslate">body {
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
}</pre>
</div>

<p>{{ EmbedLiveSample('Positioning_contexts', '100%', 420) }}</p>

<p>位置指定要素は、{{htmlelement("body")}} 要素を基準にして配置されます。</p>

<div class="note">
<p><strong>注</strong>: この時点でのライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html">4_positioning-context.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/4_positioning-context.html">ソースコードを見る</a>）。</p>
</div>

<h3 id="Introducing_z-index" name="Introducing_z-index">z-index の紹介</h3>

<p>この絶対位置指定はすべて楽しいですが、まだ検討していないことがもう1つあります。 要素が重なり合ったときに、どの要素が他のどの要素の上に表われるかを決定するのは何でしょうか？ これまで見てきた例では、位置指定コンテキスト内には位置指定要素が1つしかなく、位置指定要素は位置指定されていない要素よりも優先されるため、一番上に表われます。 複数あるときはどうでしょうか？</p>

<p>最初の段落も絶対位置指定にするために、CSS に次を追加してみてください。</p>

<pre class="brush: css notranslate">p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}</pre>

<p>この時点で、最初の段落がライム色に着色され、ドキュメントフローの外に移動し、元の位置よりも少し上に配置されていることがわかります。 また、2つが重なったところでは、元の <code>.positioned</code> 段落の下にも重なっています。 これは、<code>.positioned</code> 段落がソース順の2番目の段落であり、ソース順の後ろに配置された要素がソース順の前に配置された要素よりも優先されるためです。</p>

<p>重ね順を変更できますか？ はい、できます。 {{cssxref("z-index")}} プロパティを使うことで可能です。 「z-index」はz軸への参照です。 背景画像やドロップシャドウのオフセットなどを位置指定するために、水平（x軸）座標と垂直（y軸）座標を使用してウェブページについて説明したコースの前のポイントから思い出すことができます。 (0,0) はページ（または要素）の左上にあり、x軸とy軸はページの右下を横切っています（左から右の言語ならば）。</p>

<p>ウェブページには、z軸もあります。 画面の表面から自分の顔に向かって走る想像上の線（または、画面の前に持ってきたい他の何か）です。 {{cssxref("z-index")}} の値は、位置指定要素がその軸のどこにあるかに影響します。 正の値はそれらを積み重ねの上に移動し、負の値はそれらを積み重ねの下に移動します。 デフォルトでは、位置指定要素はすべて <code>auto</code> の <code>z-index</code> を持ち、これは事実上 0 です。</p>

<p>積み重ね順を変更するには、<code>p:nth-of-type(1)</code> 規則に次の宣言を追加してみてください。</p>

<pre class="brush: css notranslate">z-index: 1;</pre>

<p>これで完成した例が表示され、ライム色の段落が一番上になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;h1&gt;z-index&lt;/h1&gt;

&lt;p&gt;I am a basic block level element. My adjacent block level elements sit on new lines below me.&lt;/p&gt;

&lt;p class="positioned"&gt;Now I'm absolutely positioned relative to the &lt;code&gt;&amp;lt;body&amp;gt;&lt;/code&gt; element, not the &lt;code&gt;&amp;lt;html&amp;gt;&lt;/code&gt; element!&lt;/p&gt;

&lt;p&gt;We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.&lt;/p&gt;

&lt;p&gt;inline elements &lt;span&gt;like this one&lt;/span&gt; and &lt;span&gt;this one&lt;/span&gt; sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements &lt;span&gt;wrap onto a new line if possible — like this one containing text&lt;/span&gt;, or just go on to a new line if not, much like this image will do: &lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css notranslate">body {
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
</pre>
</div>

<p>{{ EmbedLiveSample('Introducing_z-index', '100%', 400) }}</p>

<p><code>z-index</code> は、無単位のインデックス値のみを受け入れることに注意してください。 1つの要素をz軸の 23 ピクセル上に配置するように指定することはできません — そのようには機能しません。 より大きい値はより小さい値より上になり、どんな値を使うかはあなた次第です。 2 と 3 を使用するのと、300 と 40000 では同じ効果が得られます。</p>

<div class="note">
<p><strong>注</strong>: この時点でのライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html">5_z-index.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/5_z-index.html">ソースコードを見る</a>）。</p>
</div>

<h3 id="Fixed_positioning" name="Fixed_positioning">固定位置指定</h3>

<p>固定位置指定（Fixed positioning）を見てみましょう。 これは絶対位置指定とまったく同じように機能しますが、1つの重要な違いがあります。 絶対位置指定では、要素をその最も近くで位置指定された祖先 (the initial containing block if there isn't one) に対して固定しますが、<strong>固定位置指定</strong>では、ビューポートの見えている部分に対して<em>常に</em>固定します。 つまり、ページのスクロール量に関係なく常に表示される永続的なナビゲーションメニューのような、固定された便利な UI アイテムを作成できることを意味します。</p>

<p>簡単な例をまとめて、意味を説明しましょう。 まず最初に、CSS から既存の <code>p:nth-of-type(1)</code> 規則と <code>.positioned</code> 規則を削除します。</p>

<p>それでは、次のように <code>body</code> 規則を更新して <code>position: relative;</code> 宣言を削除して、固定の高さを追加します。</p>

<pre class="brush: css notranslate">body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}</pre>

<p>それでは、{{htmlelement("h1")}} 要素に <code>position: fixed;</code> を与え、ビューポートの中央上部に配置します。 CSS に次の規則を追加してください。</p>

<pre class="brush: css notranslate">h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}</pre>

<p><code>top: 0;</code> は、画面の上部に貼り付けるために必要です。 見出しにコンテンツ列と同じ幅を指定し、それからそれに白い背景といくらかのパディングとマージンを与えるので、コンテンツはその下に見えないでしょう。</p>

<p>保存してリフレッシュすると、見出しが固定されたままで、コンテンツはスクロールアップすると見出しの下に消えるように見える、ちょっとした効果があります。 しかし、これをもっと改善することができます — 現時点では、コンテンツの一部は見出しの下から動き始めます。 これは、位置指定された見出しがドキュメントフローに表われなくなり、残りのコンテンツが最上部に移動するためです。 それを少しだけ下げる必要があります。 これを行うには、最初の段落に上部マージンを設定します。 次を追加します。</p>

<pre class="brush: css notranslate">p:nth-of-type(1) {
  margin-top: 60px;
}</pre>

<p>完成した例を見てください。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;h1&gt;Fixed positioning&lt;/h1&gt;

&lt;p&gt;I am a basic block level element. My adjacent block level elements sit on new lines below me.&lt;/p&gt;

&lt;p class="positioned"&gt;I'm not positioned any more...&lt;/p&gt;

&lt;p&gt;We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.&lt;/p&gt;

&lt;p&gt;inline elements &lt;span&gt;like this one&lt;/span&gt; and &lt;span&gt;this one&lt;/span&gt; sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements &lt;span&gt;wrap onto a new line if possible — like this one containing text&lt;/span&gt;, or just go on to a new line if not, much like this image will do: &lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css notranslate">body {
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
}</pre>
</div>

<p>{{ EmbedLiveSample('Fixed_positioning', '100%', 400) }}</p>

<div class="note">
<p><strong>注</strong>: この時点でのライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html">6_fixed-positioning.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/6_fixed-positioning.html">ソースコードを見る</a>）。</p>
</div>

<h3 id="position_sticky" name="position_sticky">position: sticky</h3>

<p><code>position: sticky</code> と呼ばれる利用可能な別の <code>position</code> の値があります。 これは他よりもやや新しいです。 これは基本的に相対位置と固定位置のハイブリッドであり、位置指定要素は、特定のしきい値の位置（例えば、ビューポートの上部から 10px）までスクロールされるまで相対位置指定されたように動作し、その後固定されます。 これは、ナビゲーションバーを特定の位置までページと共にスクロールさせ、その後ページの上部に固定するなどの目的で使用できます。</p>

<div id="Sticky_1">
<div class="hidden">
<h6 id="Sticky_positioning_example">Sticky positioning example</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Sticky positioning&lt;/h1&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;div class="positioned"&gt;Sticky&lt;/div&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;

&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;       </pre>

<pre class="brush: css notranslate">body {
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

<pre class="brush: css notranslate">.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}</pre>
</div>

<p>{{ EmbedLiveSample('Sticky_1', '100%', 200) }}</p>

<p>おもしろくて一般的な <code>position: sticky</code> の使い方はスクロールするインデックスページを作成することです。 そこに到達すると異なる見出しがページの上部に固定されます。 そのような例のマークアップは次のようになります。</p>

<pre class="brush: html notranslate">&lt;h1&gt;Sticky positioning&lt;/h1&gt;

&lt;dl&gt;
    &lt;dt&gt;A&lt;/dt&gt;
    &lt;dd&gt;Apple&lt;/dd&gt;
    &lt;dd&gt;Ant&lt;/dd&gt;
    &lt;dd&gt;Altimeter&lt;/dd&gt;
    &lt;dd&gt;Airplane&lt;/dd&gt;
    &lt;dt&gt;B&lt;/dt&gt;
    &lt;dd&gt;Bird&lt;/dd&gt;
    &lt;dd&gt;Buzzard&lt;/dd&gt;
    &lt;dd&gt;Bee&lt;/dd&gt;
    &lt;dd&gt;Banana&lt;/dd&gt;
    &lt;dd&gt;Beanstalk&lt;/dd&gt;
    &lt;dt&gt;C&lt;/dt&gt;
    &lt;dd&gt;Calculator&lt;/dd&gt;
    &lt;dd&gt;Cane&lt;/dd&gt;
    &lt;dd&gt;Camera&lt;/dd&gt;
    &lt;dd&gt;Camel&lt;/dd&gt;
    &lt;dt&gt;D&lt;/dt&gt;
    &lt;dd&gt;Duck&lt;/dd&gt;
    &lt;dd&gt;Dime&lt;/dd&gt;
    &lt;dd&gt;Dipstick&lt;/dd&gt;
    &lt;dd&gt;Drone&lt;/dd&gt;
    &lt;dt&gt;E&lt;/dt&gt;
    &lt;dd&gt;Egg&lt;/dd&gt;
    &lt;dd&gt;Elephant&lt;/dd&gt;
    &lt;dd&gt;Egret&lt;/dd&gt;
&lt;/dl&gt;
</pre>

<p>CSS は次のようになります。 通常フローでは、{{htmlelement("dt")}} 要素はコンテンツとともにスクロールします。 {{htmlelement("dt")}} 要素に <code>position: sticky</code> を 0 の {{cssxref("top")}} の値と共に追加すると、サポートするブラウザーでは、その位置に達すると、見出しをビューポートの一番上に固定します。 それ以降の各見出しは、その位置までスクロールアップするときに、前の見出しを置き換えます。</p>

<pre class="brush: css notranslate">dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
</pre>

<div id="Sticky_2">
<div class="hidden">
<pre class="brush: css notranslate">body {
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
</pre>

<pre class="brush: html notranslate">&lt;h1&gt;Sticky positioning&lt;/h1&gt;

&lt;dl&gt;
    &lt;dt&gt;A&lt;/dt&gt;
    &lt;dd&gt;Apple&lt;/dd&gt;
    &lt;dd&gt;Ant&lt;/dd&gt;
    &lt;dd&gt;Altimeter&lt;/dd&gt;
    &lt;dd&gt;Airplane&lt;/dd&gt;
    &lt;dt&gt;B&lt;/dt&gt;
    &lt;dd&gt;Bird&lt;/dd&gt;
    &lt;dd&gt;Buzzard&lt;/dd&gt;
    &lt;dd&gt;Bee&lt;/dd&gt;
    &lt;dd&gt;Banana&lt;/dd&gt;
    &lt;dd&gt;Beanstalk&lt;/dd&gt;
    &lt;dt&gt;C&lt;/dt&gt;
    &lt;dd&gt;Calculator&lt;/dd&gt;
    &lt;dd&gt;Cane&lt;/dd&gt;
    &lt;dd&gt;Camera&lt;/dd&gt;
    &lt;dd&gt;Camel&lt;/dd&gt;
    &lt;dt&gt;D&lt;/dt&gt;
    &lt;dd&gt;Duck&lt;/dd&gt;
    &lt;dd&gt;Dime&lt;/dd&gt;
    &lt;dd&gt;Dipstick&lt;/dd&gt;
    &lt;dd&gt;Drone&lt;/dd&gt;
    &lt;dt&gt;E&lt;/dt&gt;
    &lt;dd&gt;Egg&lt;/dd&gt;
    &lt;dd&gt;Elephant&lt;/dd&gt;
    &lt;dd&gt;Egret&lt;/dd&gt;
&lt;/dl&gt;
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Sticky_2', '100%', 200) }}</p>

<div class="note">
<p><strong>注</strong>: このライブの例は <code><a href="http://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html">7_sticky-positioning.html</a></code> にあります（<a href="https://github.com/mdn/learning-area/blob/master/css/css-layout/positioning/7_sticky-positioning.html">ソースコードを見る</a>）。</p>
</div>

<h2 id="スキルをテストしましょう!">スキルをテストしましょう!</h2>

<p>この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — <a href="/ja/docs/Learn/CSS/CSS_layout/Position_skills">Test your skills: Positioning</a> を見てください。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>私はあなたが基本的な位置指定と一緒に遊ぶことができて楽しかったと確信しています。 これは、レイアウト全体に使用する方法ではありませんが、ご覧のとおり、それが適しているタスクはたくさんあります。</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("position")}} プロパティのリファレンス。</li>
 <li>いくつかのより有用なアイデアのための<a href="/ja/docs/Learn/CSS/CSS_layout/Practical_positioning_examples">実用的な位置指定の例</a>。</li>
</ul>

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
