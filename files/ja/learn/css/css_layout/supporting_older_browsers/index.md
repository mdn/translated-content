---
title: 古いブラウザーのサポート
slug: Learn/CSS/CSS_layout/Supporting_Older_Browsers
tags:
  - Beginner
  - CSS
  - Guide
  - Layout
  - Learn
  - feature queries
  - flexbox
  - float
  - grid
  - legacy
translation_of: Learn/CSS/CSS_layout/Supporting_Older_Browsers
---
<div>{{LearnSidebar}}</div>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}</p>

<p class="summary"><span class="seoSummary">このモジュールでは、フレックスボックスとグリッドをデザインの主なレイアウト方法として使用することをお勧めしています。 しかしながら、サイトへの訪問者には、古いブラウザーや、使用している方法をサポートしていないブラウザーを使用している人がいます。 これはウェブ上で常に当てはまります — 新しい機能が開発されると、ブラウザーによって異なるものが優先されます。 この記事では、古い技術のユーザーを締め出すことなく最新のウェブテクニックを使用する方法について説明します。</span></p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML 入門</a>を学ぶ）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/Introduction_to_CSS">CSS 入門</a>と<a href="/ja/docs/Learn/CSS/Styling_boxes">ボックスの装飾</a>を学ぶ）。</td>
  </tr>
  <tr>
   <th scope="row">学習目標:</th>
   <td>使用したい機能をサポートしていない可能性がある、古いブラウザーでレイアウトのサポートを提供する方法を理解すること。</td>
  </tr>
 </tbody>
</table>

<h2 id="What_is_the_browser_landscape_for_your_site" name="What_is_the_browser_landscape_for_your_site">あなたのサイトのブラウザー利用状況はどうですか？</h2>

<p>すべてのウェブサイトは、対象視聴者という点で異なります。 取るべきアプローチを決める前に、古いブラウザーでサイトにやってくる訪問者の数を調べてください。 あなたが追加したり置き換えたりしている既存のウェブサイトを持っているなら、人々が使用している技術を伝えることができる分析機能（analytics）を利用できるので、これは簡単です。 分析機能を持っていないか、真新しいサイトであるならば、場所によってフィルターをかけた統計（statistics）を提供することができる <a href="http://gs.statcounter.com/">Statcounter</a> のようなサイトがあります。</p>

<p>また、デバイスの種類やサイトの利用方法についても検討する必要があります。 例えば、モバイルデバイスの平均数よりも多いと予想される場合があります。 アクセシビリティと支援技術を使用している人々は常に考慮されるべきですが、いくつかのサイトではさらに重要になるかもしれません。 私の経験では、開発者は多くの場合、古いバージョンの Internet Explorer でのユーザーの 1% の体験を非常に心配していますが、はるかに多い数のアクセシビリティが必要な人々は考慮していません。</p>

<h2 id="What_is_the_support_for_the_features_you_want_to_use" name="What_is_the_support_for_the_features_you_want_to_use">使用したい機能に対するサポートはどうですか？</h2>

<p>サイトにやってくるブラウザーを知ったら、それがどのような技術をサポートしているかや、その技術を利用できない訪問者にどれだけ簡単に代替手段を提供できるかについて、使用したい技術を評価できます。 MDN では、CSS プロパティを詳述した各ページにブラウザーの互換性情報を提供することで、これを簡単にできるようにしています。 例えば、{{cssxref("grid-template-columns")}} のページを見てください。 このページの下部には、主要なブラウザーと、このプロパティのサポートを開始したバージョンの一覧をまとめた表があります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/16047/browser-table.png" style="height: 1178px; width: 2102px;"></p>

<p>機能がどの程度サポートされているかを調べるもう1つの一般的な方法は、<a href="https://caniuse.com/">Can I Use</a> ウェブサイトです。 このサイトには、ウェブプラットフォームの機能の大部分と、それらのブラウザーのサポート状況に関する情報が記載されています。 あなたは場所によって使用統計を見ることができます — あなたが主に世界の特定の地域のためにユーザーを持っているサイトで働いているなら有用です。 Google Analytics アカウントをリンクして、あなたのユーザーデータに基づいて分析することもできます。</p>

<p>ユーザーが持っている技術、そしてあなたが使いたいと思うかもしれないことへのサポートを理解することは、すべての決断を下し、すべてのユーザーをサポートするための最善の方法を知るための良い場所にあなたを置きます。</p>

<h2 id="Support_doesnt_mean_looks_the_same" name="Support_doesnt_mean_looks_the_same">サポートは「同じに見える」という意味ではありません</h2>

<p>一部のユーザーはサイトを携帯電話で見たり、他のユーザーは大きなデスクトップ画面を見たりするため、ウェブサイトはすべてのブラウザーで同じように見えるとは限りません。 同様に、一部のユーザは古いブラウザーのバージョンを持ち、他のユーザは最新のブラウザーを持ちます。 一部のユーザーは、コンテンツがスクリーンリーダーによって読み上げられているのを聞いているかもしれないし、それを読むことができるようにページにズームインしているかもしれません。 全員をサポートするということは、防御的に設計されたバージョンのコンテンツを提供することを意味します。 その結果、最新のブラウザーでは見栄えがよくなりますが、それでも古いブラウザーのユーザにとっては基本レベルで使用できます。</p>

<p>基本レベルのサポートは、ページの通常フローが意味をなすように、コンテンツを適切に構成することによります。 非常に限られた機能の携帯電話を持っているユーザーは CSS の多くを得ないかもしれません、しかし内容は読みやすくする方法で流れます。 したがって、よく構造化された HTML 文書を常に出発点にする必要があります。 <em>スタイルシートを削除した場合、コンテンツは意味をなしますか？</em></p>

<p>1つの選択肢は、非常に古いブラウザーや限られたブラウザーを使用している人々のための代替手段として、サイトのこのプレーンなビューを残すことです。 これらのブラウザーでこのサイトにアクセスしている人の数が非常に少ない場合は、最新のブラウザーと同様の経験をそれらの人に与えようとして時間を注いでも意味がありません。 サイトをよりアクセスしやすくするために時間をかけて、はるかに多くのユーザーにサービスを提供することをお勧めします。 プレーンな HTML ページと何から何までいろいろなものとの間には妥協点があり、CSS は実際にこれらの代替手段の作成をかなり簡単にしました。</p>

<h2 id="Creating_fallbacks_in_CSS" name="Creating_fallbacks_in_CSS">CSS で代替手段を作成する</h2>

<p>CSS の仕様には、2つのレイアウト方法が同じ項目に適用されたときにブラウザーが何をするのかを説明する情報が含まれています。 これは、例えばフロート項目が CSS グリッドレイアウトを使用しているグリッド項目でもある場合に何が起こるかの定義があることを意味します。 ブラウザーが理解できない CSS を無視するという知識とこの情報を組み合わせると、すでに説明した<a href="/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods">過去のテクニック</a>を使用して単純なレイアウトを作成し、それをグリッドレイアウトを理解している最新のブラウザーではグリッドレイアウトで上書きする方法があります。</p>

<p>以下の例では、3つの <code>&lt;div&gt;</code> をフロートさせて、それらが一行に表示されるようにしました。 <a href="/ja/docs/Learn/CSS/CSS_layout/Grids">CSS グリッドレイアウト</a>をサポートしていないブラウザーでは、ボックスの行はフロートレイアウトとして表示されます。 グリッド項目になったフロート項目はフロートのふるまいを失います。 つまり、<code>wrapper</code> をグリッドコンテナに変えることによって、フロート項目はグリッド項目になります。 ブラウザーがグリッドレイアウトをサポートしていればグリッドビューを表示し、そうでなければ <code>display: grid</code> と関連のプロパティを無視してフロートレイアウトが使用されます。</p>

<div id="Example1">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
</pre>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="item"&gt;Item One&lt;/div&gt;
  &lt;div class="item"&gt;Item Two&lt;/div&gt;
  &lt;div class="item"&gt;Item Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('Example1', '100%', '200') }}</p>
</div>

<div class="note">
<p><strong>注</strong>: クリアされた項目がグリッド項目になると、{{cssxref("clear")}} プロパティも無効になります。 そのため、フッターがクリアされたレイアウトを作成し、それをグリッドレイアウトにすることができます。</p>
</div>

<h3 id="Fallback_Methods" name="Fallback_Methods">代替手段の方法</h3>

<p>このフロートの例と同様の方法で使用できるレイアウト方法はいくつかあります。 作成するレイアウトパターンに最も適したものを選択できます。</p>

<dl>
 <dt>フロートと<em>クリア</em></dt>
 <dd>上記のように、フロート項目またはクリアされた項目がフレックス項目またはグリッド項目になると、<code>float</code> プロパティや <code>clear</code> プロパティはレイアウトに影響しなくなります。</dd>
 <dt>display: inline-block</dt>
 <dd>この方法を使用して列レイアウトを作成できます。 項目に <code>display: inline-block</code> が設定されていて、それからフレックス項目またはグリッド項目になる場合、<code>inline-block</code> のふるまいは無視されます。</dd>
 <dt>display: table</dt>
 <dd>CSS レイアウト入門で説明した <a href="/ja/docs/Learn/CSS/CSS_layout/Introduction#Table_layout">CSS 表の作成方法</a>は、代替手段として使用できます。 CSS 表レイアウトが設定されている項目は、それらがフレックス項目またはグリッド項目になると、このふるまいを失います。 重要なことに、表構造を修正するために作成された匿名ボックスは作成されません。</dd>
 <dt>段組みレイアウト</dt>
 <dd>特定のレイアウトでは、代替手段として<a href="/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">段組みレイアウト</a>を使用できます。 コンテナに定義された <code>column-*</code> プロパティのいずれかがあり、その後グリッドコンテナになると、段組みレイアウトのふるまいは起こりません。</dd>
 <dt>グリッドの代替手段としてのフレックスボックス</dt>
 <dd><a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>は、IE10 と IE11 でサポートされているため、グリッドよりもブラウザーのサポートが優れています。 ただし、このレッスンの後半で、古いブラウザーでのフレックスボックスのかなり曖昧でわかりにくいサポートについて説明します。 フレックスコンテナをグリッドコンテナにした場合、子に適用されている <code>flex</code> プロパティはすべて無視されます。</dd>
</dl>

<p>古いブラウザーでの多くのレイアウトの調整では、このように CSS を使用することでまともな体験を与えることができるかもしれません。 古くてよくサポートされているテクニックに基づいた、より単純なレイアウトを追加してから、新しい CSS を使用して、視聴者の 90% 以上が見るレイアウトを作成します。 ただし、代替手段のコードに新しいブラウザーでも解釈されるものを含める必要がある場合があります。 この良い例は、列をグリッド表示に近づけるためにフロート項目にパーセント幅を追加し、コンテナを埋めるように伸縮する場合です。</p>

<p>フロートレイアウトでは、パーセントはコンテナから計算されます — 33.333% はコンテナ幅の3分の1です。 ただしグリッドでは、 33.333% は項目が配置されているグリッド領域から計算されるため、グリッドレイアウトが導入されると、実際に必要なサイズのさらに3分の1になってしまいます。</p>

<div id="Example2">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
  width: 33.333%;
}
</pre>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="item"&gt;Item One&lt;/div&gt;
  &lt;div class="item"&gt;Item Two&lt;/div&gt;
  &lt;div class="item"&gt;Item Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('Example2', '100%', '200') }}</p>
</div>

<p>この問題に対処するには、グリッドがサポートされているかどうか、したがってグリッドが幅を上書きするかどうかを検出する方法が必要です。 CSS は下記の解決策を持っています。</p>

<h2 id="Feature_queries" name="Feature_queries">機能クエリ</h2>

<p>機能クエリを使用すると、ブラウザーが特定の CSS 機能をサポートしているかどうかをテストできます。 つまり、特定の機能をサポートしていないブラウザー用の CSS を作成してから、そのブラウザーがサポートしているかどうかを確認し、サポートしている場合は素敵なレイアウトを追加することができます。</p>

<p>上記の例に機能クエリを追加すると、グリッドをサポートしている場合、項目の幅を <code>auto</code> に戻すことができます。</p>

<div id="Example3">
<pre class="brush: css notranslate">* {box-sizing: border-box;}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  float: left;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
  width: 33.333%;
}

@supports (display: grid) {
  .item {
      width: auto;
  }
}
</pre>

<pre class="brush: html notranslate">&lt;div class="wrapper"&gt;
  &lt;div class="item"&gt;Item One&lt;/div&gt;
  &lt;div class="item"&gt;Item Two&lt;/div&gt;
  &lt;div class="item"&gt;Item Three&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{ EmbedLiveSample('Example3', '100%', '200') }}</p>
</div>

<p>機能クエリのサポートは最近のブラウザーでは非常に優れていますが、CSS グリッドをサポートしていないブラウザーでも機能クエリをサポートしていないことに注意してください。 これは、上で詳述されたアプローチがそれらのブラウザーで働くということを意味します。 していることは、すべての機能クエリの外側で、古い CSS を最初に書くことです。 グリッドをサポートせず、機能クエリもサポートしないブラウザーは、理解できるレイアウト情報を使用し、それ以外はすべて無視します。 機能クエリをサポートするブラウザーは CSS グリッドもサポートするため、グリッドのコードと機能クエリ内のコードを実行します。</p>

<p>機能クエリの仕様には、ブラウザーが機能をサポートしていないことをテストする機能も含まれています — これは、ブラウザーが機能クエリをサポートしている場合にのみ役立ちます。 将来的には、機能クエリをサポートしていないブラウザーはなくなるため、サポートの欠如を確認するアプローチが有効になります。 ただし現時点では、最善のサポートのために古い CSS を使用してから上書きするというアプローチを使用してください。</p>

<h2 id="Older_versions_of_Flexbox" name="Older_versions_of_Flexbox">古いバージョンのフレックスボックス</h2>

<p>古いバージョンのブラウザーでは、以前のフレックスボックス仕様の繰り返しを見つけることができます。 これを書いている時点で、これはほとんどフレックスボックスのために <code>-ms-</code> 接頭辞を使う Internet Explorer 10 の問題です。 これはまた、いくつかの古い記事やチュートリアルが存在することを意味します。 <a href="https://css-tricks.com/old-flexbox-and-new-flexbox/">この便利なガイド</a>（英語）は何を見ているのかを確認するのに役立ちますし、非常に古いブラウザーでフレックスのサポートが必要な場合にも役立ちます。</p>

<h2 id="The_IE10_and_11_prefixed_version_of_Grid" name="The_IE10_and_11_prefixed_version_of_Grid">IE10 と IE11 の接頭辞版のグリッド</h2>

<p>CSS グリッド仕様は、当初 Internet Explorer 10 で試作されました。 つまり、IE10 と IE11 は<em>最新</em>のグリッドをサポートしていませんが、このサイトに記載されている最新の仕様とは異なり、非常に使いやすいバージョンのグリッドレイアウトを使用しています。 IE10 および IE11 の実装は、前に <code>-ms-</code> が付いています。 つまり、これらのブラウザーに使用でき、マイクロソフト以外のブラウザーでは無視されます。 Edge はまだ古い構文を理解しているので、最新のグリッド CSS ではすべてが安全に上書きされるように注意してください。</p>

<p><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">グリッドレイアウトのプログレッシブエンハンスメント</a>のガイドはグリッドの IE バージョンを理解するのを助けることができ、このレッスンの最後にいくつかの追加の役に立つリンクを含めました。 ただし、以前のバージョンの IE に非常に多くの訪問者がいない限り、サポートされていないすべてのブラウザーで機能する代替手段の作成に集中することをお勧めします。</p>

<h2 id="Testing_older_browsers" name="Testing_older_browsers">古いブラウザーをテストする</h2>

<p>フレックスボックスとグリッドをサポートしているブラウザーの大多数では、古いブラウザーをテストするのはかなり難しいかもしれません。 1つの方法は、<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing">クロスブラウザーテスト</a>のモジュールに詳述されているように、Sauce Labs のようなオンラインテストツールを使うことです。</p>

<p>また、仮想マシンをダウンロードしてインストールし、自分のコンピュータ上の封じ込められた環境で古いバージョンのブラウザーを実行することもできます。 古いバージョンの Internet Explorer にアクセスできることは特に便利で、そのために、マイクロソフトは<a href="https://developer.microsoft.com/ja/microsoft-edge/tools/vms/">さまざまな仮想マシンを無料でダウンロード</a>（英語）できるようにしました。 これらは、Mac、Windows、Linux の各オペレーティングシステムで利用可能で、Windows コンピュータを使用していなくても、古い Windows ブラウザーや最新の Windows ブラウザーでテストするのに最適な方法です。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>今やあなたは自信を持ってグリッドやフレックスボックスのようなテクニックを使い、古いブラウザーのための代替手段を作り、そして将来現れるであろう新しいテクニックを利用する知識を持っています。</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/">CSS での機能クエリの使用</a>（英語）</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox">フレックスボックスの後方互換性</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS グリッドレイアウトとプログレッシブエンハンスメント</a></li>
 <li><a href="https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/">CSS グリッドを使用する: グリッドなしでブラウザーをサポートする</a>（英語）</li>
 <li><a href="https://24ways.org/2012/css3-grid-layout/">IE10 および IE11 バージョンのグリッドを使用するチュートリアル</a>（英語）</li>
 <li><a href="https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/">IE10 のグリッドレイアウトの実装を使おうとするべきですか？</a>（英語）</li>
 <li><a href="https://24ways.org/2017/cascading-web-design/">機能クエリによるカスケードウェブデザイン</a>（英語）</li>
 <li><a href="https://gridbyexample.com/learn/2016/12/24/learning-grid-day24/">機能クエリの使用</a>（動画、英語）</li>
</ul>

<p>{{PreviousMenuNext("Learn/CSS/CSS_layout/Legacy_Layout_methods", "Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension", "Learn/CSS/CSS_layout")}}</p>

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
