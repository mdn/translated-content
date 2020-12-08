---
title: フレックスボックスの後方互換性
slug: Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox
tags:
  - '@supports'
  - CSS
  - CSS Tables
  - Flexible Boxes
  - Floats
  - Guide
  - fallbacks
  - feature queries
  - flexbox
  - inline-block
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox
---
<div>{{CSSRef}}</div>

<p class="summary">フレックスボックスは最新のブラウザーではとてもよく対応されていますが、いくつかの問題に遭遇する可能性があります。このガイドでは、フレックスボックスがブラウザーでどの程度対応されているかを見て、いくつかの潜在的な問題、リソース、回避策やフォールバックを作成するための方法を見ていきます。</p>

<h2 id="The_history_of_flexbox" name="The_history_of_flexbox">フレックスボックスの歴史</h2>

<p>すべての CSS の仕様と同じく、フレックスボックスの仕様も、現在の勧告候補になるまでに多くの変更がありました。一般的に勧告候補となった仕様には以後大幅な変更は行われませんが、フレックスボックスに関しては過去の例を見る限り例外で、何度も修正が入っています。</p>

<p>過去、フレックスボックスはいくつかのブラウザーで実験的に実装されました。その際にはベンダー接頭辞が使われました。このような接頭辞は、他の実装と衝突することなく、仕様の実装をブラウザーエンジニアやウェブ開発者がテストして調査するためのものであり、本番で使うためのものではありませんでした。しかし、結局は本番で使用され、実験的な仕様が変更されるたびに本番のサイトを修正しなければなりませんでした。</p>

<p><a href="https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/">2009 年の仕様</a>は、今とはだいぶ異なります。フレックスコンテナーの生成するには <code>display: box</code> を使い、数々の <code>box-*</code> プロパティがあり、今日のフレックスボックスと同じような機能を持っていました。</p>

<p><a href="https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/">仕様変更</a>によって構文が <code>display: flexbox</code> へと変わりました。これもベンダー接頭辞つきでした。</p>

<p>最終的には、フレックスコンテナーの作成には <code>display: flex</code> を指定するという仕様に変わりました。仕様が固まってからは、最新の仕様に対するブラウザーの対応は良好です。</p>

<p>古い仕様にもとづいて書かれた古い記事もまだ存在しますが、フレックスコンテナーの指定方法の違いで簡単に見分けられます。 <code>display: box</code> や <code>display: flexbox</code> ならば、それは古い情報です。</p>

<h2 id="Status_in_browsers" name="Status_in_browsers">ブラウザーの状況</h2>

<p>フレックスボックスへのブラウザーの対応は良好です。現時点での大多数のブラウザーでは、ベンダー接頭辞は不要です。 Safari が 2015 年に Safari 9 で対応したことで、有名なブラウザーはすべて接頭辞不要となりました。ただし、下記の 2 つのブラウザーでは、ブラウザー間の互換性にまだ注意が必要です。</p>

<ul>
 <li>Internet Explorer 10。<code>display: flexbox</code> の仕様で実装されていて、<code>-ms-</code> の接頭辞が必要です。</li>
 <li>UC Browser。2009 年の <code>display: box</code> の仕様のままで、<code>-webkit-</code> の接頭辞が必要です。</li>
</ul>

<p>また、Internet Explorer 11 は最新の <code>display: flex</code> の仕様に対応していますが、その実装に多くのバグがあることにも注意してください。</p>

<h2 id="Common_issues" name="Common_issues">よくある問題</h2>

<p>フレックスボックスの問題の大部分は、開発中だった頃の仕様の変更や、実験段階の仕様を本番で使おうとすることに関連しています。IE10 や IE11 のような古いブラウザーへの後方互換性を確保したいなら、<a href="https://github.com/philipwalton/flexbugs">Flexbugs</a> のサイトが役に立ちます。そこで挙げられているバグの多くが古いバージョンのブラウザーのものであり、現行のバージョンでは解決していることが分かると思います。バグにはそれぞれ回避策が示されているので、長い試行錯誤から救ってくれることでしょう。</p>

<p>非常に古いブラウザーにも対応したいのなら、CSS での通常の指定に加えて、ベンダー接頭辞つきの指定を使ってください。フレックスボックスへの対応が広がっている現在、接頭辞が必要な場面はどんどん少なくなっていますが。</p>

<pre class="brush: css notranslate">.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}</pre>

<p><a href="https://autoprefixer.github.io/">Autoprefixer Online</a> は、どの世代のブラウザーまで対応したいかに応じて必要な接頭辞を示してくれるので便利です。また、<a href="https://caniuse.com/#feat=flexbox">Can I Use</a> では、ブラウザーで接頭辞が削除された時期を調べることができます。</p>

<h2 id="Useful_fallback_techniques" name="Useful_fallback_techniques">有用なフォールバック方法</h2>

<p>フレックスボックスの適用が {{cssxref("display")}} プロパティの値で決まるのであれば、フレックスボックスに全く対応していない古いブラウザーに対応する際には、あるレイアウト方法を別のもので上書きすることでフォールバックとすることができます。仕様は、フレックスアイテムとなるはずの要素に対して別のレイアウト方法を適用した場合に何が起こるかということも定義しています。</p>

<h3 id="Floated_items" name="Floated_items">浮動アイテム</h3>

<blockquote>
<p>「float と clear はフレックスアイテムの浮動やその解除を行いません。また、フロー外へ出すこともしません」 - <a href="https://www.w3.org/TR/css-flexbox-1/#flex-containers">3. Flex Containers</a></p>
</blockquote>

<p>下記のライブサンプルでは、2 つのブロック要素を浮動させ、コンテナに <code>display: flex</code> を指定しています。これでアイテムはフレックスアイテムとなります。つまり両者は同じ高さに引き伸ばされます。float の効果は一切現れません。</p>

<p>フォールバックの挙動を試すには、ラッパーから <code>display: flex</code> を削除してください。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/float.html", '100%', 550)}}</p>

<h3 id="display_inline-block" name="display_inline-block">display: inline-block</h3>

<p><code>inline-block</code> のアイテムがフレックスアイテムになるとブロック要素になり、アイテム同士の間に空白が保持されるような <code>display: inline-block</code> の効果が現れなくなります。</p>

<p><code>display: flex</code> を削除してフォールバックの挙動を確認してください。アイテム間に空白が追加されるはずです。これはインライン要素や <code>display: inine-block</code> を指定した要素の挙動と同じです。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/inline-block.html", '100%', 550)}}</p>

<h3 id="display_table-" name="display_table-">display: table-</h3>

<p>CSS のテーブル表示のプロパティは、フォールバックとしてはおそらく最も有用でしょう。なぜなら、高さを揃えるために引き伸ばすことや、縦方向の中央揃えなどのデザインパターンが可能であり、しかもそれが Internet Explorer 8 のような古いブラウザーでも動作するからです。</p>

<p>アイテムに <code>display: table-cell</code> を指定すれば、HTML のテーブルセルの性質を帯びることになります。CSS は 2 種類の無名のボックスを作ります。ひとつは &lt;tr&gt; の、もうひとつは &lt;table&gt; の役割を果たします。このおかげで、アイテムを実際の HTML 要素で包む必要はありません。これら無名ボックスは不可視でスタイルを指定することもできません。単にツリー構造を補うためのものなのです。</p>

<p>親要素に <code>display: flex</code> を指定すると、これら無名ボックスは生成されません。アイテムはフレックスコンテナの直下の子要素のままなので、フレックスアイテムになることができます。なお、テーブル関連の機能は失われます。</p>

<blockquote>
<p>「注: display の値のいくつかは、元の要素の周りに無名ボックスを生成します。元の要素がフレックスアイテムの場合、まずはじめにブロック要素となるので、無名ボックスは生成されません。例えば、2 つの隣り合うフレックスアイテムに display: table-cell を指定すると、display: block を指定された 2 つの別々の フレックスアイテムとなります。1 つの無名のテーブル要素にまとめて包まれることはありません」 - <a href="https://www.w3.org/TR/css-flexbox-1/#flex-items">4. Flex Items</a></p>
</blockquote>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/table-cell.html", '100%', 550)}}</p>

<h3 id="The_vertical-align_property" name="The_vertical-align_property">vertical-align プロパティ</h3>

<p>下記のライブサンプルでは、<code>display: inline-block</code> の要素に対して {{cssxref("vertical-align")}} を指定しています。このプロパティは、<code>display: table-cell</code> と <code>display: inline-block</code> のどちらにも指定できます。<code>vertical-align</code> による縦方向の整列は、フレックスボックスよりも先に行われます。このプロパティはフレックスボックスには無視されるので、フォールバックとして <code>display: table-cell</code> や <code>display: inline-block</code> とともに使用できます。それによってフレックスボックスの整列系のプロパティが悪影響を受けることはありません。</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/browsers/vertical-align.html", '100%', 550)}}</p>

<h2 id="Feature_Queries_and_flexbox" name="Feature_Queries_and_flexbox">機能クエリとフレックスボックス</h2>

<p>下記のように、フレックスボックスに対応しているかどうかを<a href="/ja/docs/Web/CSS/%40supports">機能クエリ</a>で検査できます。</p>

<pre class="brush: css notranslate">@supports (display: flex) {
  // 対応しているブラウザー向けのコード
}</pre>

<p>Internet Explorer 11 は機能クエリに対応していませんが、フレックスボックスには対応していることに注意してください。IE11 のフレックスボックスの実装にはバグが多いため、フォールバックを採用することもあるでしょう。その場合は機能クエリを使って、対応しているブラウザーだけにフレックスボックスを適用することができます。ベンダー接頭辞が必要がブラウザーをサポート対象に含めたいなら、機能クエリにもベンダー接頭辞付きの条件を追加する必要があることを忘れないでください。下記の機能クエリは UC Browser を含みます。UC Browser は機能クエリと接頭辞付きの古い構文に対応しています。</p>

<pre class="brush: css notranslate">@supports (display: flex) or (display: -webkit-box) {
  // 対応しているブラウザー向けのコード
}</pre>

<p>機能クエリについて詳しく知りたい場合は、Mozilla Hacks ブログの <a href="https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/">Using Feature Queries in CSS</a> をご覧ください。</p>

<h2 id="Conclusion" name="Conclusion">終わりに</h2>

<p>このガイドで潜在的な問題やフォールバックについて学んだことで、フレックスボックスを本番で使う準備が整いました。このガイドは、問題に遭遇した場合、または古いブラウザーに対応する必要がある場合に役立ちます。</p>
