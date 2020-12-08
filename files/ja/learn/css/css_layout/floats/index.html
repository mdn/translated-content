---
title: フロート
slug: Learn/CSS/CSS_layout/Floats
tags:
  - Article
  - Beginner
  - CSS
  - Clearing
  - CodingScripting
  - Floats
  - Guide
  - Layout
  - columns
  - multi-column
translation_of: Learn/CSS/CSS_layout/Floats
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}</div>

<p class="summary"><span class="seoSummary">{{cssxref("float")}} プロパティは、もともとはテキストブロック内の浮動画像のためのものでしたが、ウェブページ上に複数列レイアウトを作成するために最も一般的に使われるツールの1つになりました。 この記事で説明しているように、フレックスボックスとグリッドの出現により、今は当初の目的に戻っています。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>ウェブページ上に浮動の特長を作成する方法と、<code>clear</code> プロパティおよびその他のフロートのクリア方法の使い方を習得します。</td>
  </tr>
 </tbody>
</table>

<h2 id="The_background_of_floats" name="The_background_of_floats">フロートの背景</h2>

<p>画像の左や右を包み込むテキストにより、テキストの列内に浮かぶ画像を含む単純なレイアウトをウェブ開発者が実装できるようにするために {{cssxref("float")}} プロパティが導入されました。 あなたが新聞のレイアウトで得るかもしれない種類のものです。</p>

<p>しかしウェブ開発者はすぐに画像だけでなく何でも浮かべることができることに気づいたので、フロートの使用は広がりました。 例えば、<a href="https://css-tricks.com/snippets/css/drop-caps/">drop-caps</a> のような楽しいレイアウト効果です。</p>

<p>フロートは一般に、互いに並ぶように浮動する複数列の情報を含むウェブサイト全体のレイアウトを作成するために使用されてきました（デフォルトのふるまいでは、列はソースに表れる順序と同じ順序で上下に配置されます）。 より新しくより良いレイアウトテクニックが利用可能なので、このようにフロートを使うことは<a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のテクニック</a>とみなされるべきです。</p>

<p>この記事では、フロートの正しい使い方に集中します。</p>

<h2 id="A_simple_float_example" name="A_simple_float_example">簡単なフロートの例</h2>

<p>フロートの使い方を探りましょう。 要素の周りにテキストのブロックを浮かべることを含む本当に簡単な例から始めましょう。 コンピュータ上に新しい <code>index.html</code> ファイルを作成し、<a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">簡単な HTML テンプレート</a>を使ってそれを埋め、適切な場所に以下のコードを挿入することで、フォローすることができます。 セクションの一番下では、最終的なコードがどのようになるべきかの実例を見ることができます。</p>

<p>まず、簡単な HTML から始めましょう。 HTML の <code>body</code> に次のコードを追加し、それまでの内部にあるものはすべて削除します。</p>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;

&lt;div class="box"&gt;Float&lt;/div&gt;

&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. &lt;/p&gt;

&lt;p&gt;Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;</pre>

<p>次の CSS を HTML に適用します（{{htmlelement("style")}} 要素を使用するか、{{htmlelement("link")}} を使用して別の <code>.css</code> ファイルを作成するか、選択します）。</p>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}</pre>

<p>保存してリフレッシュすると予想していたものとよく似たものが表示されます — <code>box</code> が通常フローでテキストの上側に表示されます。 テキストをそれの周囲に浮かべるには、次のように <code>.box</code> 規則に {{cssxref("float")}} と {{cssxref("margin-right")}} プロパティを追加します。</p>

<pre class="brush: css notranslate">.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}</pre>

<p>保存してリフレッシュすると、次のようになります。</p>

<div id="Float_1">
<div class="hidden">
<h6 id="Float_Example_1">Float Example 1</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;

&lt;div class="box"&gt;Float&lt;/div&gt;

&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;

&lt;p&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
</pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_1', '100%', 500) }}</p>

<p>フロートがどのように機能するかを考えてみましょう。 <code>float</code> が設定されている要素（この場合は {{htmlelement("div")}} 要素）は、文書の通常のレイアウトフローから除かれ、その親コン​​テナ（この場合は {{htmlelement("body")}}）の左側に固定されます。 通常のレイアウトフローで浮動要素の下側に来るコンテンツは、それを包み込み、浮動要素の最上部まで、その右側のスペースを埋めます。 そこで、それは止まるでしょう。</p>

<p>コンテンツを右に浮かべるとまったく同じ効果が得られますが、逆になります。 つまり、浮動要素は右に固定され、コンテンツはその左側を包み込みます。 <code>float</code> の値を <code>right</code> に変更し、最後のルールセットで {{cssxref("margin-right")}} を {{cssxref("margin-left")}} に置き換えて、結果がどうなるかを確認してください。</p>

<p>テキストを押しのけるためにフロートにマージン（margin、余白）を追加することはできますが、テキストをフロートから遠ざけるためにテキストにマージンを追加することはできません。 これは、浮動要素は通常フローから外され、後続項目のボックスが実際にはフロートの背後にあるためです。 例にいくつかの変更を加えることによってこれを実証することができます。</p>

<p>テキストの最初の段落、つまり浮動ボックスの直後の段落に <code>special</code> のクラスを追加してから、CSS に次の規則を追加します。 これらは後続段落に背景色を与えます。</p>

<pre class="brush: css notranslate">.special {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}
</pre>

<p>効果を見やすくするために、フロートの <code>margin-right</code> を <code>margin</code> に変更すると、フロートの全周にマージンができます。 以下の例のように、浮動ボックスの真下にある段落の背景を見ることができます。</p>

<div id="Float_2">
<div class="hidden">
<h6 id="Float_Example_2">Float Example 2</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;

&lt;div class="box"&gt;Float&lt;/div&gt;

&lt;p class="special"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;

&lt;p&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;    </pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}

.special {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_2', '100%', 500) }}</p>

<p>後続要素の<a href="/ja/docs/Web/CSS/Visual_formatting_model#Line_boxes">行ボックス</a>は短くなっているのでテキストはフロートの周りを囲みますが、フロートは通常フローから除かれるため、段落の周りのボックスは依然として全幅のままです。</p>

<h2 id="Clearing_floats" name="Clearing_floats">フロートのクリア</h2>

<p>フロートは通常フローから除かれ、他の要素がその横に表示されることを見てきました。 したがって、後続要素の上方向への移動を止めたい場合は、それをクリアする必要があります; これは {{cssxref("clear")}} プロパティによって達成されます。</p>

<p>前の例の HTML では、浮動項目の下の2番目の段落に <code>cleared</code> のクラスを追加します。 次に、CSS に以下を追加してください。</p>

<pre class="brush: css notranslate">.cleared {
  clear: left;
}
</pre>

<div id="Float_3">
<div class="hidden">
<h6 id="Float_Example_3">Float Example 3</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;

&lt;div class="box"&gt;Float&lt;/div&gt;

&lt;p class="special"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;

&lt;p class="cleared"&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
    </pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}

.special {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}

.cleared {
  clear: left;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_3', '100%', 600) }}</p>

<p>後続段落で、浮動要素がクリアされ、並んで現れなくなったことがわかります。 <code>clear</code> プロパティは次の値を受け入れます。</p>

<ul>
 <li><code>left</code>: 左に浮いている項目をクリアします。</li>
 <li><code>right</code>: 右に浮いている項目をクリアします。</li>
 <li><code>both</code>: 左や右に浮いている項目をどちらもクリアします。</li>
</ul>

<h2 id="Clearing_boxes_wrapped_around_a_float" name="Clearing_boxes_wrapped_around_a_float">フロートを包み込むボックスのクリア</h2>

<p>浮動要素に後続するものをクリアする方法はわかりましたが、背の高いフロートと短い段落があり、その両方の要素の周りをボックスが包む場合はどうなるか見てみましょう。 最初の段落と浮動ボックスが <code>wrapper</code> のクラスの {{htmlelement("div")}} に囲まれるように文書を変更します。</p>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="box"&gt;Float&lt;/div&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>CSS で、<code>.wrapper</code> クラスに次の規則を追加してからページをリロードします。</p>

<pre class="brush: css notranslate">.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}</pre>

<p>加えて、元の <code>.cleared</code> クラスを削除します。</p>

<pre class="brush: css notranslate" id="ct-0">.cleared {
    clear: left;
}</pre>

<p>段落に背景色を与えた例と同じように、背景色がフロートの背後にあることがわかります。</p>

<div id="Float_4">
<div class="hidden">
<h6 id="Float_Example_4">Float Example 4</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;
&lt;div class="wrapper"&gt;
  &lt;div class="box"&gt;Float&lt;/div&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;
&lt;/div&gt;

&lt;p class="cleared"&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;    </pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_4', '100%', 600) }}</p>

<p>前と同じように、これもまた、フロートが通常フローから外されたためです。 コンテンツが短い場合でも、ボックスの底に浮動項目とラッピングコンテンツを包む必要がある場合には、後続要素のクリアでは、このボックスのクリアの問題を解決することはできません。 これに対処する方法は3つあります。 そのうちの2つはすべてのブラウザーで機能します — それでもやや厄介です — そしてこの状況に適切に対処する3番目の新しい方法です。</p>

<h3 id="The_clearfix_hack" name="The_clearfix_hack">clearfix ハック</h3>

<p>この状況に伝統的に対処してきた方法は、「clearfix ハック」として知られているものを使うことです。 これはフロートとラッピングコンテンツを含むボックスの後に生成したコンテンツを挿入し、両方をクリアするように設定することを含みます。</p>

<p>例に次の CSS を追加します。</p>

<pre class="brush: css notranslate">.wrapper::after {
  content: "";
  clear: both;
  display: block;
}</pre>

<p>ページをリロードすると、ボックスはクリアされます。 これは、項目の下に <code>&lt;div&gt;</code> などの HTML 要素を追加して <code>clear: both</code> に設定した場合と基本的に同じです。</p>

<div id="Float_5">
<div class="hidden">
<h6 id="Float_Example_5">Float Example 5</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;
&lt;div class="wrapper"&gt;
  &lt;div class="box"&gt;Float&lt;/div&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;
&lt;/div&gt;
&lt;p class="cleared"&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;      </pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_5', '100%', 600) }}</p>

<h3 id="Using_overflow" name="Using_overflow">オーバーフローを使用する</h3>

<p>別の方法は、<code>wrapper</code> の {{cssxref("overflow")}} プロパティを <code>visible</code> 以外の値に設定することです。</p>

<p>前のセクションで追加した clearfix の CSS を削除し、代わりに <code>wrapper</code> の規則に <code>overflow: auto</code> を追加してください。 前と同じように、ボックスはクリアされます。</p>

<pre class="brush: css notranslate">.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}</pre>

<div id="Float_6">
<div class="hidden">
<h6 id="Float_Example_6">Float Example 6</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;
&lt;div class="wrapper"&gt;
  &lt;div class="box"&gt;Float&lt;/div&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;
&lt;/div&gt;
&lt;p class="cleared"&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;    </pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_6', '100%', 600) }}</p>

<p>この例は、<a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">ブロック整形コンテキスト</a>（<strong>block formatting context</strong>、BFC）と呼ばれるものを作成することによって機能します。 これはページの中にあるミニレイアウトのようなもので、その中にすべてが含まれているので、浮動要素は BFC の中に含まれ、背景は両方の項目の背後にあります。 これは通常はうまくいきますが、場合によっては、オーバーフローを使用することによる意図しない結果が原因で、不要なスクロールバーや切り取られた影が見つかることがあります。</p>

<h3 id="display_flow-root" name="display_flow-root">display: flow-root</h3>

<p>この問題を解決する現代的な方法は、<code>display</code> プロパティの <code>flow-root</code> という値を使うことです。 これはハックを使用せずに BFC を作成するためだけに存在します — それを使用しても意図しない結果が生じることはありません。 <code>.wrapper</code> 規則から <code>overflow: auto</code> を削除し、<code>display: flow-root</code> を追加してください。 これを<a href="/ja/docs/Web/CSS/display#Browser_compatibility">サポートするブラウザー</a>を持っていると仮定すると、ボックスはクリアされます。</p>

<pre class="brush: css notranslate">.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}</pre>

<div id="Float_7">
<div class="hidden">
<h6 id="Float_Example_7">Float Example 7</h6>

<pre class="brush: html notranslate">&lt;h1&gt;Simple float example&lt;/h1&gt;
&lt;div class="wrapper"&gt;
  &lt;div class="box"&gt;Float&lt;/div&gt;

  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. &lt;/p&gt;
&lt;/div&gt;
&lt;p class="cleared"&gt;Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.&lt;/p&gt;

&lt;p&gt;Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;    </pre>

<pre class="brush: css notranslate">body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
</pre>
</div>
</div>

<p>{{ EmbedLiveSample('Float_7', '100%', 600) }}</p>

<h2 id="スキルをテストしましょう!">スキルをテストしましょう!</h2>

<p>この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — <a href="/ja/docs/Learn/CSS/CSS_layout/Floats_skills">Test your skills: Floats</a> を見てください。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>あなたは今、現代のウェブ開発でフロートについて知っておくべきことがすべてわかっています。 過去のレイアウト方法の使用方法については、<a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のレイアウト方法</a>に関する記事を参照してください。 古いプロジェクトで作業している場合に便利です。</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}</p>

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
