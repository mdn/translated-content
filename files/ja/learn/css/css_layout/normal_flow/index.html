---
title: 通常フロー
slug: Learn/CSS/CSS_layout/Normal_Flow
tags:
  - Beginner
  - CSS
  - Layout
  - Learn
  - float
  - grid
  - normal flow
translation_of: Learn/CSS/CSS_layout/Normal_Flow
---
<div>{{LearnSidebar}}</div>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</p>

<p class="summary"><span class="seoSummary">この記事では、通常フロー、つまりレイアウトを変更していない場合のウェブページの要素のレイアウト方法について説明します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基礎 (<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ)、および CSS の機能の考え方 (<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>を学ぶ)。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>変更を加える前に、ブラウザーがデフォルトでウェブページをどのようにレイアウトするかを説明します。</td>
  </tr>
 </tbody>
</table>

<p>レイアウトを紹介した前回のレッスンで詳しく説明したように、CSS を適用してふるまいを変更していない場合、ウェブページ上の要素は通常フローでレイアウトされます。そして、理解を深め始めるにつれ、その通常フローの中で要素の位置を調整したり、要素を完全に取り除くたりして、要素のふるまいを変更できます。通常フローで読み取り可能な、しっかりとよく構造化された文書から始めることは、どんなウェブページでも始めるための最良の方法です。それは、ユーザーが非常に制限されたブラウザーを使用している場合や、ページのコンテンツを読み上げるスクリーンリーダーなどのデバイスを使用している場合でも、コンテンツを読みやすくすることができます。さらに、通常フローは読み取り可能な文書を作成するように設計されているので、この方法で始めることで、レイアウトを変更するときに文書と戦うのではなく文書とともに作業します。</p>

<p>さまざまなレイアウト方法を深く掘り下げる前に、以前のモジュールで通常のドキュメントフローに関して検討したことのいくつかを再検討する価値があります。</p>

<h2 id="How_are_elements_laid_out_by_default" name="How_are_elements_laid_out_by_default">要素はデフォルトでどのようにレイアウトされますか？</h2>

<p>まず初めに、個々の要素ボックスは要素のコンテンツを取り、それからそれらの周りにパディング (padding、詰め物)、ボーダー (border、境界線) そしてマージン (margin、余白) を追加することによってレイアウトされます — これはまた以前に見たことがある<a href="/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">ボックスモデル</a>のことです。</p>

<p>デフォルトでは、<a href="/ja/docs/Web/HTML/Block-level_elements">ブロックレベル要素</a>のコンテンツは、その親要素の幅の 100% で、そのコンテンツと同じ高さです <a href="/ja/docs/Web/HTML/Inline_elements">インライン要素</a>は、コンテンツと同じ高さで、コンテンツと同じ幅です。インライン要素に幅や高さを設定することはできません — それらはブロックレベル要素のコンテンツの中にあるだけです。この方法でインライン要素のサイズを制御したい場合は、<code>display: block;</code> を使用してブロックレベル要素のようにふるまうように設定する必要があります (あるいは、<code>display: inline-block;</code> で、両方の特性を混在させます)。</p>

<p>それは個々の要素を説明していますが、要素がどのように相互作用するかについてはどうでしょうか？ 通常のレイアウトフロー (レイアウト入門の記事に記載) は、ブラウザーのビューポート内に要素を配置するシステムです デフォルトでは、ブロックレベル要素は、親の<a href="/ja/docs/Web/CSS/writing-mode">書字方向モード</a> (writing mode、<em>初期</em> は horizontal-tb) に基づいて<em>ブロックのフロー方向</em> にレイアウトされます — 各要素は、最後の要素の下の新しい行に表示され、それらに設定されたマージンで区切られます したがって英語やその他の横書きで、上から下へ改行する書字方向モードでは、ブロックレベル要素は垂直にレイアウトされます。</p>

<p>インライン要素は異なるふるまいをします — 新しい行に現れません。代わりに、親ブロックレベル要素の幅の内側にマージンがある限り、それらは互いに同じ行に配置され、隣接する (または折り返された) テキストコンテンツに配置されます。スペースがなければ、あふれているテキストや要素は新しい行に移動します。</p>

<p>隣接する 2 つの要素の両方にマージンが設定されていて、2 つのマージンが接触している場合、2 つのうち大きい方が残り、小さい方が消えます — これは<a href="/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">マージンの相殺</a> (margin collapsing) と呼ばれます。</p>

<p>これらすべてを説明する簡単な例を見てみましょう。</p>

<div id="Normal_Flow">
<pre class="brush: html notranslate">&lt;h1&gt;基本的なドキュメントフロー&lt;/h1&gt;

&lt;p&gt;これは基本的なブロックレベル要素です。隣接するブロックレベル要素は下の新しい行に配置されています。&lt;/p&gt;

&lt;p&gt;デフォルトでは、親要素の幅の 100% にまたがり、子コンテンツと同じ高さになります。幅と高さの合計は、コンテンツ + パディング + ボーダーの幅/高さです。&lt;/p&gt;

&lt;p&gt;マージンによって分けられています。マージンの相殺のため、両方ではなく、1 つのマージンの幅で区切られます。&lt;/p&gt;

&lt;p&gt;&lt;span&gt;これ&lt;/span&gt;および&lt;span&gt;これのような&lt;/span&gt;インライン要素は、同じ行に配置され、同じ行にスペースがある場合は隣接するテキストノードに配置されます。オーバーフローするインライン要素は&lt;span&gt;可能であれば新しいラインに折り返され (これのようにテキストを含む)&lt;/span&gt;、そうでなければ次の画像のように単に新しい行に進むでしょう。&lt;img src="https://mdn.mozillademos.org/files/13360/long.jpg"&gt;&lt;/p&gt;</pre>

<pre class="brush: css notranslate">body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255,84,104,0.3);
  border: 2px solid rgb(255,84,104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}</pre>
</div>

<p>{{ EmbedLiveSample('Normal_Flow', '100%', 500) }}</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>通常フロー、およびブラウザーがデフォルトでどのようにレイアウトするかを理解したので、次にこのデフォルトの <code>display</code> を変更してデザインに必要なレイアウトを作成する方法を理解することに進みます。</p>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}</p>

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
