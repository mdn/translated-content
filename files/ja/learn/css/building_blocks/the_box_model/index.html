---
title: ボックスモデル
slug: Learn/CSS/Building_blocks/The_box_model
tags:
  - Beginner
  - CSS
  - Learn
  - border
  - box model
  - display
  - margin
  - padding
translation_of: Learn/CSS/Building_blocks/The_box_model
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}</div>

<p>CSS にはボックスの概念があり、これを理解することは CSS でレイアウトを作成したりアイテム同士を揃えたりするためのコツとなります。このレッスンでは CSS ボックスモデルを詳しく解説し、その仕組みと関連する用語を理解することでより複雑なレイアウトができるようにします。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>基本的なコンピューターリテラシー、<a href="/ja/Learn/Getting_started_with_the_web/Installing_basic_software">基本的なソフトウェアがインストールされている</a>こと、<a href="/ja/Learn/Getting_started_with_the_web/Dealing_with_files">ファイルの扱い</a>、HTML の基本 (<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>) および CSS に関するアイデア (<a href="/ja/docs/Learn/CSS/First_steps">CSS の第一歩</a>) に関する基本的な知識を得ている。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>CSS のボックスモデルとその構成要素、代替モデルへの切り替えについて学ぶ。</td>
  </tr>
 </tbody>
</table>

<h2 id="Block_and_inline_boxes" name="Block_and_inline_boxes">ブロックボックスとインラインボックス</h2>

<p>CSS には、<strong>ブロックボックス</strong>と<strong>インラインボックス</strong>の 2 種類のボックスがあります。これらの特性は、ページフローの観点から、およびページ上の他のボックスとの関係でボックスがどのように動作するかを示します。</p>

<p>ボックスがブロックとして定義されている場合、次のように動作します:</p>

<ul>
 <li>ボックスはインライン方向に伸びて、コンテナで使用可能なスペースを埋めます。 ほとんどの場合、これは、ボックスが container と同じ幅になり、使用可能なスペースの 100% を占めることを意味します。</li>
 <li>ボックスは新しい行に分割されます。</li>
 <li>{{cssxref("width")}} と {{cssxref("height")}} のプロパティが尊重されます。</li>
 <li>padding、margin および border により、他の要素がボックスから遠ざけられます。</li>
</ul>

<p>表示タイプをインラインに変更することを決定しない限り、デフォルトでは見出し (例: <code>&lt;h1&gt;</code>) や <code>&lt;p&gt;</code> などの要素はすべて外部表示タイプとして <code>block</code> を使用します。</p>

<p>ボックスの外側の表示タイプが <code>inline</code> の場合:</p>

<ul>
 <li>ボックスは改行されません。</li>
 <li>{{cssxref("width")}} と {{cssxref("height")}} のプロパティは適用されません。</li>
 <li>padding、margin および border が適用されますが、他のインラインボックスがボックスから移動することはありません。</li>
</ul>

<p>リンクに使用される <code>&lt;a&gt;</code> 要素や、<code>&lt;span&gt;</code>、<code>&lt;em&gt;</code> および <code>&lt;strong&gt;</code> はすべて、デフォルトではインラインで表示される要素の例です。</p>

<p>要素に適用されるボックスのタイプは、<code>block</code> や <code>inline</code> などの {{cssxref("display")}} プロパティ値によって定義され、<code>display</code> の<strong>外側</strong>の値に関連します。</p>

<h2 id="Aside_Inner_and_outer_display_types" name="Aside_Inner_and_outer_display_types">余談: 内側と外側の表示タイプ</h2>

<p>この時点で、<strong>内側</strong>と<strong>外側</strong>の表示タイプについても説明するべきでしょう。上記のように、CSS のボックスには<em>外側</em>の表示タイプがあり、ボックスがブロックかインラインかを詳細に示します。</p>

<p>ただし、ボックスには内部表示タイプもあり、これにより、そのボックス内の要素のレイアウト方法が決まります。デフォルトでは、ボックス内の要素は<strong><a href="/ja/docs/Learn/CSS/CSS_layout/Normal_Flow">通常のフロー</a></strong>でレイアウトされます。つまり、他のブロック要素やインライン要素と同じように動作します（上記で説明したように）。</p>

<p>ただし、<code>flex</code> などの <code>display</code> の値を使用して、内部の表示タイプを変更できます。要素に <code>display: flex;</code> を設定する場合、外側の表示タイプは <code>block</code> ですが、内側の表示タイプは <code>flex</code> に変更されます。このボックスの直接の子要素はすべてフレックスアイテムになり、<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a> 仕様で規定されているルールに従ってレイアウトされます。これについては後で学習します。</p>

<div class="blockIndicator note">
<p>注：ディスプレイの値、およびブロックおよびインラインレイアウトでのボックスの動作の詳細については、<a href="/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">ブロックおよびインラインレイアウト</a>に関する MDN ガイドを参照してください。 　</p>
</div>

<p>CSS レイアウトについてさらに詳しく学習すると、<code>flex</code> や、例えば <code><a href="/ja/docs/Learn/CSS/CSS_layout/Grids">grid</a></code> のようなボックスに設定できる他のさまざまな内部の値と出会うでしょう。</p>

<p>ただし、ブロックおよびインラインレイアウトは、ウェブ上のデフォルトの動作です。前述のように、<em>通常のフロー</em>と呼ばれることもあります。他の指示がない場合、ボックスはブロックまたはインラインボックスとしてレイアウトされるためです。</p>

<h2 id="Examples_of_different_display_types" name="Examples_of_different_display_types">さまざまな表示タイプの例</h2>

<p>次に進み、いくつかの例を見てみましょう。以下に、3 つの異なる HTML 要素があります。これらはすべて、外部表示タイプの <code>block</code> を持っています。1 つ目は段落で、CSS で border が追加されています。ブラウザーはこれを block box としてレンダリングするため、段落は新しい行で始まり、利用可能な全幅に拡張されます。</p>

<p>2 番目はリストで、これは <code>display：flex</code> を使用してレイアウトされます。これにより、コンテナ内のアイテムのフレックスレイアウトが確立されますが、リスト自体は block boxであり、段落と同様に、container の幅いっぱいに拡張され、新しい行に分割されます。</p>

<p>この下にブロックレベルの段落があり、その中に 2 つの <code>&lt;span&gt;</code> 要素があります。通常、これらの要素は <code>inline</code> ですが、要素の 1 つにブロックのクラスがあり、<code>display: block</code> に設定しました。</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1000)}}</p>

<p>この次の例では、<code>inline</code> 要素の動作を確認できます。最初の段落の <code>&lt;span&gt;</code> はデフォルトではインラインのため、強制的に改行しません。</p>

<p>また、<code>display: inline-flex</code> に設定された <code>&lt;ul&gt;</code> 要素があり、一部の flex アイテムの周りにインラインボックスを作成します。</p>

<p>最後に、<code>display: inline</code> に設定された 2 つの段落があります。inline flex container と段落はすべて、ブロックレベルの要素として表示されている場合のように新しい行に分割されるのではなく、1 行で一緒に実行されます。</p>

<p><strong>この例では、<code>display: inline</code> を <code>display: block</code> に、または<code>display: inline-flex</code> を <code>display: flex</code> に変更して、これらの表示モードの間を切り替えられます。</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1000)}}</p>

<p>これらのレッスンの後半では、フレックスレイアウトなどの問題と出会います。現時点で覚えておくべき重要な点は、<code>display</code> プロパティの値を変更すると、ボックスの外側の表示タイプがブロックかインラインかを変更できるため、レイアウト内の他の要素と一緒に表示する方法が変わることです。</p>

<p>レッスンの残りの部分では、外側のディスプレイタイプに集中します。</p>

<h2 id="What_is_the_CSS_box_model" name="What_is_the_CSS_box_model">CSS のボックスモデルとは？</h2>

<p>完全な CSS ボックスモデルはブロックボックスに適用され、インラインボックスはボックスモデルで定義された動作の一部のみを使用します。 モデルは、ボックスのさまざまな部分 (マージン、ボーダー、パディング、コンテンツ) がどのように連携してページに表示できるボックスを作成するかを定義します。 さらに複雑さを追加するために、標準および代替ボックスモデルがあります。</p>

<h3 id="Parts_of_a_box" name="Parts_of_a_box">ボックスの構成</h3>

<p>CSSでブロックボックスを構成するには、次のものがあります。</p>

<ul>
 <li><strong>Content box</strong>: コンテンツが表示される領域。{{cssxref ("width")}} や {{cssxref("height")}} などのプロパティを使用してサイズを変更できます。</li>
 <li><strong>Padding box</strong>: パディングはコンテンツの周囲に空白として配置されます。 そのサイズは {{cssxref ("padding")}} および関連するプロパティを使用して制御できます。</li>
 <li><strong>Border box</strong>: 境界ボックスは、コンテンツとパディングをラップします。そのサイズとスタイルは、{{cssxref ("border")}} および関連するプロパティを使用して制御できます。</li>
 <li><strong>Margin box</strong>: マージンは最も外側のレイヤーで、このボックスと他の要素の間の空白としてコンテンツ、パディング、および境界線をラップします。そのサイズは、{{cssxref ("margin")}} および関連するプロパティを使用して制御できます。</li>
</ul>

<p>以下の図は、これらのレイヤーを示しています:<img alt="Diagram of the box model" src="https://mdn.mozillademos.org/files/16558/box-model.png" style="height: 300px; width: 544px;"></p>

<h3 id="The_standard_CSS_box_model" name="The_standard_CSS_box_model">CSS ボックスモデルの標準</h3>

<p>標準のボックスモデルでは、ボックスに <code>width</code> と <code>height</code> を指定すると、<em>コンテンツボックス</em>の幅と高さが定義されます。 次に、すべての padding と border がその幅と高さに追加され、ボックスが占める合計サイズが取得されます。 これを下の画像に示します。</p>

<p>ボックスに <code>width</code>、<code>height</code>、<code>margin</code>、<code>border</code> および <code>padding</code> を定義する次の CSS があると仮定した場合:</p>

<pre class="brush: css notranslate">.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
</pre>

<p>標準のボックスモデルを使用してボックスが占めるスペースは、実際には 410px (350 + 25 + 25 + 5 + 5) で、高さは 210px (150 + 25 + 25 + 5 + 5) であり、padding と border は コンテンツボックスに使用される幅に追加されます。<img alt="Showing the size of the box when the standard box model is being used." src="https://mdn.mozillademos.org/files/16559/standard-box-model.png" style="height: 300px; width: 500px;"></p>

<div class="blockIndicator note">
<p><strong>注:</strong> マージンは、ボックスの実際のサイズにはカウントされません。確かに、ボックスがページ上で占める合計スペースに影響しますが、ボックスの外側のスペースにのみ影響します。ボックスの領域は境界線で停止します—マージンまでは達しません。</p>
</div>

<h3 id="The_alternative_CSS_box_model" name="The_alternative_CSS_box_model">CSS ボックスモデルの代替</h3>

<p>ボックスの実際のサイズを取得するために border と padding を追加する必要があるのはかなり不便だと思うかもしれませんが、正しい感覚でしょう！このため、CSS には、標準ボックスモデルのしばらく後に導入された代替ボックスモデルがありました。このモデルを使用すると、幅はページ上の表示ボックスの幅になるため、コンテンツ領域の幅は、その幅からパディングとボーダーの幅を引いたものになります。上記と同じ CSS を使用すると、以下の結果が得られます (幅 = 350px、高さ = 150px)。</p>

<p><img alt="Showing the size of the box when the alternate box model is being used." src="https://mdn.mozillademos.org/files/16557/alternate-box-model.png" style="height: 240px; width: 440px;"></p>

<p>デフォルトでは、ブラウザーは、標準のボックスモデルを使用します。もし要素に対して代替モデルをオンにしたい場合は、<code>box-sizing: border-box</code> を設定することでそうできます。これにより、設定した任意のサイズで定義された領域として境界ボックスを取るようにブラウザーに指示しています。</p>

<pre class="brush: css notranslate"><code>.box {
  box-sizing: border-box;
} </code></pre>

<p>すべての要素で代替ボックスモデルを使用することを望み、かつこれが開発者の間で一般的な選択である場合、以下のスニペットで見られるように、<code>&lt;html&gt;</code> 要素で <code>box-sizing</code> プロパティを設定して、他のすべての要素でその値を継承するように設定してください。この背景にある考え方を理解したい場合は、<a href="https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/">ボックスサイズ設定に関する CSS トリック</a>の記事を参照してください。</p>

<pre class="brush: css notranslate"><code class="language-css"><span class="selector token">html</span> <span class="punctuation token">{</span>
  <span class="property token">box-sizing</span><span class="punctuation token">:</span> border-box<span class="punctuation token">;</span>
<span class="punctuation token">}</span>
<span class="selector token">*, *<span class="pseudo-element token">::before</span>, *<span class="pseudo-element token">::after</span></span> <span class="punctuation token">{</span>
  <span class="property token">box-sizing</span><span class="punctuation token">:</span> inherit<span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<div class="blockIndicator note">
<p><strong>注</strong>: 興味深い歴史 — Internet Explorer は以前は代替ボックスモデルにデフォルト設定されていましたが、切り替え可能なメカニズムはありませんでした。</p>
</div>

<h2 id="Playing_with_box_models" name="Playing_with_box_models">ボックスモデルを試してみる</h2>

<p>以下の例では、2 つのボックスを見ることができます。両方とも <code>.box</code> のクラスを持ち、同じ <code>width</code>、<code>height</code>、<code>margin</code>、<code>border</code>、および<code>padding</code> を提供します。唯一の違いは、2 番目のボックスが代替ボックスモデルを使用するように設定されていることです。</p>

<p><strong>2 番目のボックスのサイズを変更 (<code>.alternate</code> クラスに CSS を追加) して、幅と高さを最初のボックスに一致させることはできますか？</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1000)}}</p>

<div class="blockIndicator note">
<p><strong>注</strong>: <a href="https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-box-model">ここ</a>でこのタスクの解決策を見つけることができます。</p>
</div>

<h3 id="Use_browser_DevTools_to_view_the_box_model" name="Use_browser_DevTools_to_view_the_box_model">ブラウザーの開発ツールを利用して、ボックスモデルを見てみる</h3>

<p><a href="/ja/docs/Learn/Common_questions/What_are_browser_developer_tools">ブラウザー開発ツール</a>を使用すると、ボックスモデルをとても簡単に理解できます。Firefox の DevTools で要素を調べると、要素のサイズに加えて、margin、padding、border を確認できます。 この方法で要素を検査することは、あなたのボックスが本当にあなたが思っているサイズであるかどうかを知る素晴らしい方法です！</p>

<p><img alt="Inspecting the box model of an element using Firefox DevTools" src="https://mdn.mozillademos.org/files/16560/box-model-devtools.png" style="height: 683px; width: 1150px;"></p>

<h2 id="Margins_padding_and_borders" name="Margins_padding_and_borders">Margins、padding および borders</h2>

<p>上記の例では、{{cssxref ("margin") }}、{{cssxref ("padding") }} および{{cssxref ("border") }} のプロパティが動作しているのを見てきました。 この例で使用されるプロパティは <strong>shorthands</strong> であり、ボックスの 4 辺すべてを一度に設定できます。これらの shorthands には、同等の longhand プロパティもあり、ボックスのさまざまな側面を個別に制御できます。</p>

<p>これらのプロパティをさらに詳しく見てみましょう。</p>

<h3 id="Margin" name="Margin">マージン</h3>

<p>マージンは、ボックスの周りの見えないスペースです。 他の要素をボックスから遠ざけます。 マージンには正または負の値を設定できます。 ボックスの片側に負のマージンを設定すると、ページ上の他の部分と重なる場合があります。 標準または代替のボックスモデルを使用しているかどうかにかかわらず、表示ボックスのサイズが計算された後、マージンは常に追加されます。</p>

<p>{{cssxref ("margin") }} プロパティを使用して要素のすべてのマージンを一度に制御するか、同等の longhand properties を使用して各辺を個別に制御できます。</p>

<ul>
 <li>{{cssxref("margin-top")}}</li>
 <li>{{cssxref("margin-right")}}</li>
 <li>{{cssxref("margin-bottom")}}</li>
 <li>{{cssxref("margin-left")}}</li>
</ul>

<p><strong>次の例では、マージン値を変更して、この要素と含まれる要素の間のスペース (負のマージンの場合) を作成または削除するマージンのためにボックスがどのように押し出されるかを確認してください。</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 1000)}}</p>

<h4 id="Margin_collapsing" name="Margin_collapsing">マージンの相殺</h4>

<p>マージンについて理解する重要なことは、マージンの相殺の概念です。 マージンが接する 2 つの要素が あり、両方のマージンが正の場合、それらのマージンは結合して 1 つのマージンになります。これは、個々のマージンのうちの最大サイズです。一方または両方のマージンが負の場合、負の値の量が合計から差し引かれます。</p>

<p>以下の例では、2 つの段落があります。 上の段落には、50 ピクセルの <code>margin-bottom</code> があります。2 番目の段落の <code>margin-top</code> は 30 ピクセルです。マージンは一緒に折りたたまれているため、ボックス間の実際のマージンは 50 ピクセルであり、2 つのマージンの合計ではありません。</p>

<p><strong>これをテストするには、第二段落の <code>margin-top</code> を 0 に設定します。2 つの段落間のマージンは変更されません。第一段落の <code>margin-bottom</code> に設定された 50 ピクセルを保持します。-10pxに設定すると、全体のマージンが40pxになることがわかります— 50pxから差し引かれま</strong>す。</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 1000)}}</p>

<p>マージンが相殺される場合と相殺されない場合を規定する多くのルールがあります。 詳細については、<a href="/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">マージンの相殺</a>に関する詳細ページをご覧ください。現時点で覚えておくべき主なことは、マージンの相殺が起こることです。マージンによるスペースを作成していて、期待したスペースが得られない場合、おそらくこれが起こっています。</p>

<h3 id="Borders" name="Borders">Borders</h3>

<p>border は、ボックスの margin と padding の間に描かれます。標準ボックスモデルを使用している場合、border のサイズがボックスの <code>width</code> と <code>height</code> に追加されます。代替ボックスモデルを使用している場合、border のサイズが利用可能な <code>width</code> と <code>height</code> の一部を占めるため、コンテンツボックスが小さくなります。</p>

<p>border のスタイル設定には、多数のプロパティがあります。4 つの border があり、各 border には、操作したいスタイル、width、color があります。</p>

<p>{{cssxref("border")}} プロパティを使用して、4 つすべての border の width、color およびスタイルを一度に設定できます。</p>

<p>各辺のスタイルを個別に設定するには、次を使用できます:</p>

<ul>
 <li>{{cssxref("border-top")}}</li>
 <li>{{cssxref("border-right")}}</li>
 <li>{{cssxref("border-bottom")}}</li>
 <li>{{cssxref("border-left")}}</li>
</ul>

<p>すべての辺の幅、スタイル、色を設定するには、次を使用します:</p>

<ul>
 <li>{{cssxref("border-width")}}</li>
 <li>{{cssxref("border-style")}}</li>
 <li>{{cssxref("border-color")}}</li>
</ul>

<p>片側の色、スタイル、または width を設定するには、最もきめ細かい longhand プロパティのいずれかを使用できます:</p>

<ul>
 <li>{{cssxref("border-top-width")}}</li>
 <li>{{cssxref("border-top-style")}}</li>
 <li>{{cssxref("border-top-color")}}</li>
 <li>{{cssxref("border-right-width")}}</li>
 <li>{{cssxref("border-right-style")}}</li>
 <li>{{cssxref("border-right-color")}}</li>
 <li>{{cssxref("border-bottom-width")}}</li>
 <li>{{cssxref("border-bottom-style")}}</li>
 <li>{{cssxref("border-bottom-color")}}</li>
 <li>{{cssxref("border-left-width")}}</li>
 <li>{{cssxref("border-left-style")}}</li>
 <li>{{cssxref("border-left-color")}}</li>
</ul>

<p><strong>以下の例では、さまざまなショートハンドとロングハンドを使用して border を作成しています。 さまざまなプロパティを試して、それらがどのように機能するか理解していることを確認してください。border プロパティの MDN ページには、選択可能なさまざまな border スタイルに関する情報が表示されます。</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 1000)}}</p>

<h3 id="Padding" name="Padding">パディング</h3>

<p>padding は、border とコンテンツ領域の間にあります。margin とは異なり、負の量の padding はできないため、値は 0 または正の値でなければなりません。要素に適用された背景は padding の背後に表示され、通常は border からコンテンツ遠ざけるために使用されます。</p>

<p>{{cssxref("padding")}} プロパティを使用して要素の各側の padding を個別に制御するか、同等のロングハンドプロパティを使用して各側を個別に制御できます。</p>

<ul>
 <li>{{cssxref("padding-top")}}</li>
 <li>{{cssxref("padding-right")}}</li>
 <li>{{cssxref("padding-bottom")}}</li>
 <li>{{cssxref("padding-left")}}</li>
</ul>

<p><strong>以下の例で <code>.box</code> クラスの padding の値を変更すると、ボックスに関連してテキストの開始位置が変わることがわかります。</strong></p>

<p><strong><code>.container</code> クラスの padding を変更することもできます。これにより、container とボックスの間にスペースができます。padding は任意の要素で変更でき、border と要素内にあるものとの間にスペースを作ります。</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 800)}}</p>

<h2 id="The_box_model_and_inline_boxes" name="The_box_model_and_inline_boxes">ボックスモデルとインラインボックス</h2>

<p>上記のすべては、ブロックボックスに完全に適用されます。一部のプロパティは<code>&lt;span&gt;</code> 要素によって作成されたものなどの、インラインボックスにも適用できます。</p>

<p>以下の例では、段落内に <code>&lt;span&gt;</code> があり、<code>width</code>、<code>height</code>、<code>margin</code>、<code>border</code> および <code>padding</code> が適用されています。width と height が無視されていることがわかります。マージン、パディング、ボーダーは尊重されますが、他のコンテンツとインラインボックスの関係は変わらないため、パディングとボーダーは段落内の他の単語と重なります。</p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 800)}}</p>

<h2 id="Using_display_inline-block" name="Using_display_inline-block">display: inline-block を使用する</h2>

<p><code>display</code> には特別な値があり、<code>inline</code> と <code>block</code> の中間に位置するものを提供します。これは、アイテムを新しい行に分割したくないが、<code>width</code> と <code>height</code> を尊重し、上記の上書きを避けたい場合に便利です。</p>

<p><code>display: inline-block</code> を持つ要素は、私たちがすでに知っているブロックのサブセットを実行します:</p>

<ul>
 <li><code>width</code> と <code>height</code> のプロパティが尊重されます。</li>
 <li>padding、margin、および border により、他の要素がボックスから遠ざけられます。</li>
</ul>

<p>ただし、新しい行に分割されることはなく、<code>width</code> プロパティと <code>height</code> プロパティを明示的に追加した場合にのみ、コンテンツよりも大きくなります。</p>

<p><strong>次の例では、<code>&lt;span&gt;</code> 要素に <code>display: inline-block</code> を追加しました。これを</strong> <strong><code>display: block</code> </strong> <strong>変更したり、行を完全に削除したりして、表示モデルの違いを確認してください。</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 800)}}</p>

<p>これが役立つのは、padding を追加して、リンクのヒット領域を大きくしたい場合です。<code>&lt;a&gt;</code> は <code>&lt;span&gt;</code> のようなインライン要素です。 <code>display：inline-block</code> を使用して padding を設定できるようにし、ユーザーがリンクをクリックしやすくします。</p>

<p>これはナビゲーションバーにかなり頻繁に表示されます。以下のナビゲーションは、flexbox を使用して行に表示され、<code>&lt;a&gt;</code> にカーソルを合わせたときに背景色を変更できるように、<code>&lt;a&gt;</code> 要素に padding を追加しました。paddingは、<code>&lt;ul&gt;</code> 要素の border に重なるように見えます。これは、<code>&lt;a&gt;</code>がインライン要素であるためです。</p>

<p><strong><code>display: inline-block</code> を <code>.links-list a</code> セレクターを使用してルールに追加すると、padding が他の要素によって尊重されるようにすることで、この問題がどのように修正されるかがわかります。</strong></p>

<p>{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 600)}}</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>以上が、ボックスモデルについて理解する必要があるほとんどのことです。レイアウト内の大きなボックスの大きさについて混乱している場合は、このレッスンに戻ってください。</p>

<p>次のレッスンでは<a href="/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">背景とボーダー</a>を使用してプレーンボックスをより面白くする方法を見ていきます。</p>

<p>{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール</h2>

<ol>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">カスケードと継承</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Selectors">CSS セレクター</a>
  <ul>
   <li><a href="/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors">要素・クラス・ID によるセレクター</a></li>
   <li><a href="/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">属性によるセレクター</a></li>
   <li><a href="/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">擬似クラスおよび疑似要素によるセレクター</a></li>
   <li><a href="/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators">結合子</a></li>
  </ul>
 </li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/The_box_model">ボックスモデル</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">背景と枠線</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions">テキスト方向の操作</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Overflowing_content">要素のはみ出し (オーバーフロー)</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Values_and_units">CSS の値と単位</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS">CSS によるサイズ設定</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Images_media_form_elements">画像・メディア・フォーム要素</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Styling_tables">表のスタイリング</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS">CSS のデバッグ</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Organizing">CSS の整理</a></li>
</ol>
