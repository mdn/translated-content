---
title: 読み込みが速い HTML ページを作成するための豆知識
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
tags:
  - Advanced
  - Guide
  - HTML
  - NeedsUpdate
  - Performance
  - Web
  - Web Performance
translation_of: Learn/HTML/Howto/Author_fast-loading_HTML_pages
original_slug: Web/Guide/HTML/Tips_for_authoring_fast-loading_HTML_pages
---
<p>これらの豆知識は、一般の知識や実験に基づくものです。</p>

<p>ウェブページを最適化すると、訪問者に対して応答性のよいサイトを提供するだけでなく、ウェブサーバーやインターネット接続の負荷を低減する効果もあります。これは大規模なサイトや、緊急事態で通信量が急増するニュース速報のようなサイトでは重要でしょう。</p>

<p>ページの読み込みパフォーマンスの最適化は、低速なダイヤルアップ接続やモバイルデバイスの利用者向けコンテンツのためだけではありません。ブロードバンド向けコンテンツでも重要であり、高速接続の利用者であっても劇的な改善につながるでしょう。</p>

<h2 id="Tips">豆知識</h2>

<h3 id="Reduce_page_weight">ページの量の削減</h3>

<p>ページの量は、ページ読み込みパフォーマンスにおいて断然重要な要素です。</p>

<p>最小化として知られる不要なホワイトスペースやコメントの削除、インラインのスクリプトや CSS の外部ファイルへの移動によりページの量を削減することで、ページの構造変更を最小限にしてダウンロードの性能を向上できるでしょう。</p>

<p><a href="https://www.html-tidy.org">HTML Tidy</a> のようなツールを利用すると、妥当な HTML ソースから行頭のホワイトスペースや過剰な空行を自動的に取り除くことができます。他に JavaScript ソースを、書式変更や難読化および長い識別子を短いものに置き換えることで 「圧縮」するツールもあります。</p>

<h3 id="Minimize_the_number_of_files">ファイル数の最少化</h3>

<p>ウェブページが参照するファイル数を削減することで、ページのダウンロードに必要な <a href="/ja/docs/Web/HTTP">HTTP</a> コネクションの数が減り、それによってリクエストを送信したり、レスポンスを受け取ったりする時間が短縮できます。</p>

<p>ブラウザーのキャッシュ設定によっては、ブラウザーが各ファイルの <code><a href="/ja/docs/Web/HTTP/Headers/If-Modified-Since">If-Modified-Since</a></code> ヘッダーで、ファイルが最後にダウンロードされてから変更されているかどうかを確認するリクエストを送信することがあります。ページをレンダリングする前に、ブラウザがこれらの各ファイルの変更時刻をチェックする必要があるため、参照されたファイルの最終変更時刻をチェックするのに時間がかかり過ぎると、ウェブページの初期表示が遅くなることがあります。</p>

<p>CSS で多数の背景画像を使用している場合は、画像スプライトと呼ばれる方法でで画像を 1 つに結合することで必要な HTTP による参照の数を減らすことができます。すなわち、背景として用いる画像ファイルは毎回同じものを適用し、それを適切な x/y 座標に調整します。これは寸法が限られている要素について最善の方法ですが、適用できない場合もあるでしょう。しかし、HTTP リクエストを少なくしてキャッシュする画像を単一にすることで、ページの読み込み時間を削減できます。</p>

<h3 id="Use_a_Content_Delivery_Network_CDN">コンテンツ配信ネットワーク (CDN) を使用する</h3>

<p>この記事の目的のために、CDN はサーバーと訪問者の間の物理的な距離を縮めるための手段です。サーバーの起点と訪問者の間の距離が長くなると、読み込み時間が長くなります。ウェブサイトのサーバーがアメリカにあり、インドからの訪問者がいるとします。米国からの訪問者と比較して、ページの読み込み時間はインドの訪問者の方がはるかに長くなります。</p>

<p>CDN は地理的に分散したサーバーネットワークで、ユーザーとウェブサイトの距離を縮めるために連携して機能します。CDN はキャッシュされたウェブサイトのバージョンを保存し、それらをユーザーに最も近いネットワークノードを介して訪問者に提供するので、<a href="http://www.webperformancetoday.com/2012/04/02/latency-101-what-is-latency-and-why-is-it-such-a-big-deal/">待ち時間</a>が短縮されます。</p>

<p>参考文献:</p>

<ul>
 <li><a href="https://www.incapsula.com/cdn-guide/what-is-cdn-how-it-works.html">Understanding CDNs</a></li>
</ul>

<h3 id="Reduce_domain_lookups">ドメイン検索の削減</h3>

<p>ドメインが分かれていると DNS の参照に時間がかかるため、CSS の link や JavaScript や画像の src に多数のドメインが現れるほど、ページの読み込み時間が長くなるでしょう。</p>

<p>現実的でない場合があるかもしれませんが、ページがあるドメインと異なるドメインの使用数は必要最低限にするよう注意すべきです。</p>

<h3 id="Cache_reused_content">再利用されるコンテンツのキャッシュ</h3>

<p>どんなコンテンツでも、キャッシュできるか、キャッシュされているか、キャッシュ期限が適切であるかを確認してください。</p>

<p>特に、<code>Last-Modified</code> ヘッダーに注意してください。これは、効率のよいページのキャッシュができるようにします。このヘッダーは、ファイルを読み込もうとしているユーザーエージェントに、ファイルがいつ更新されたかなどの情報を伝えます。多くのウェブサーバーは、静的なページ (<code>.html</code>、<code>.css</code> など) にはファイルシステムに格納されている最終更新日に基づいて、自動的に <code>Last-Modified</code> ヘッダーを追加します。もちろん、動的なページ (<code>.php</code>、<code>.aspx</code> など) については取得できないので、ヘッダーを送信しません。</p>

<p>そのため、特に動的に生成されるページについては、この件について調べてみると有益です。少し厄介ですが、通常キャッシュできないページのリクエストを大幅に節約できるでしょう。</p>

<p>詳細情報:</p>

<ol>
 <li><a href="https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers">HTTP Conditional Get for RSS Hackers</a></li>
 <li><a href="https://annevankesteren.nl/archives/2005/05/http-304">HTTP 304: Not Modified</a></li>
 <li><a href="https://ja.wikipedia.org/wiki/HTTP_ETag">Wikipedia の HTTP ETag の記事</a></li>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html">Caching in HTTP</a></li>
</ol>

<h3 id="Optimally_order_the_components_of_the_page">ページのコンポーネントの最適な順序</h3>

<p>最初の表示に必要な CSS または JavaScript と共に、ページコンテンツをまずダウンロードすると、ページの読み込み中にユーザーに最もすばやくページを表示させることができます。このコンテンツは通常テキストであるため、転送中のテキスト圧縮の効率が良く、ユーザーへの反応がもっと早くなります。</p>

<p>使用される前にページの読み込みが完了する必要がある動的機能は、最初は無効にしておき、ページの読み込みが完了した後でのみ有効にするようにしましょう。これにより、JavaScript がページコンテンツの後に読み込まれるようになり、ページ読み込み時に全体が表示されるまでの時間が短縮されます。</p>

<h3 id="Reduce_the_number_of_inline_scripts">インラインスクリプト数の削減</h3>

<p>インラインスクリプトがあると、インラインスクリプトのパース中にページの構造が変わる可能性があるとパーサーが想定しなければならないため、ページの読み込みにおいて重荷になることがあります。一般的にはインラインスクリプトの使用を減らし、また特に <code>document.write()</code> を用いたコンテンツの出力を減らすことで、ページ読み込みのパフォーマンスが向上するでしょう。 <code>document.write()</code> に基づく旧来のコンテンツ操作方法ではなく、最新のブラウザー向けの方法である <a href="/ja/docs/Web/Guide/AJAX">AJAX</a> を使用してください。</p>

<h3 id="Use_modern_CSS_and_valid_markup" name="Use_modern_CSS_and_valid_markup">最新の CSS と正しいマークアップの使用</h3>

<p>最新の CSS を用いるとマークアップの量を削減し、レイアウトの点で (スペーサーの) 画像使用を減らし、また多くの場合スタイル付けした文字列の画像を置き換えることが可能です。画像は CSS と文字列の組み合わせに比べ、多大なコストがかかります。</p>

<p>正しいマークアップを使用することは、ほかにも利点があります。第一に、ブラウザーが HTML を解釈する際にエラー訂正を行う必要がなくなります (ユーザーの記述法の多様性を認めるかどうかという哲学的な問題とは別です。厳密な、許容範囲のない書式を強制するというより、プログラム的に「正しく」または正規化しましょう)</p>

<p>さらに、正しいマークアップをすることによって、ウェブページを<em>プリプロセス</em>ができる他のツールが自由に利用できるようになります。例えば、<a href="http://tidy.sourceforge.net/">HTML Tidy</a> はホワイトスペースや省略可能な終了タグを除去することができます。しかし、重大なマークアップの誤りがあるページではツールを実行できません。</p>

<h3 id="Chunk_your_content">コンテンツをまとめる</h3>

<p>テーブルをレイアウトのために使うのは陳腐化した方法であり、もはや使うべきではありません。レイアウトを行うには、代わりに<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">浮動要素</a>、<a href="/ja/docs/Learn/CSS/CSS_layout/Positioning">位置指定</a>、<a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">フレックスボックス</a>、<a href="/ja/docs/Learn/CSS/CSS_layout/Grids">グリッド</a>を使用してください。</p>

<p>テーブルは現在でも妥当なマークアップと考えられていますが、表形式のデータを表示するために用いるべきです。ブラウザーがページを迅速に表示するためには、テーブルを入れ子にしないようにしてください。</p>

<p>以下のように深い入れ子のテーブルを使用する代わりに、</p>

<pre>&lt;table&gt;
  &lt;table&gt;
    &lt;table&gt;
          ...
    &lt;/table&gt;
  &lt;/table&gt;
&lt;/table&gt;</pre>

<p>以下のように入れ子にしないテーブルや div を用いてください。</p>

<pre>&lt;table&gt;...&lt;/table&gt;
&lt;table&gt;...&lt;/table&gt;
&lt;table&gt;...&lt;/table&gt;
</pre>

<p><a href="https://www.w3.org/TR/css-flexbox-1/">CSS Flexible Box Layout</a> と <a href="https://www.w3.org/TR/css-grid-1/">CSS Grid Layout</a> の仕様書も参照してください。</p>

<h3 id="Minify_and_compress_SVG_assets">SVG の資産を最小化し圧縮する</h3>

<p>多くの描画アプリケーションで作成された SVG は、不必要なメタデータを含んでいることが多く、削除することができます。サーバーで SVG 資産を gzip で圧縮するよう設定しましょう。</p>

<h3 id="Minify_and_compress_your_images">画像を縮小して圧縮する</h3>

<p>画像が大きいと、ページの読み込みに時間がかかります。画像をページに追加する前に、圧縮することを検討してください。 <a href="https://compressjpeg.com/">Compress Jpeg</a>、<a href="https://tinypng.com">Tiny PNG</a>、その他多くのツールがオンラインで利用可能です。photoshop などのオフラインツールも使用できます。</p>

<h3 id="Specify_sizes_for_images_and_tables">画像やテーブルのサイズ指定</h3>

<p>ブラウザーが直ちに画像やテーブルの高さや幅を決めることができれば、ブラウザーはコンテンツの再配置を行うことなくウェブページを表示できます。これはページの表示を高速化するだけでなく、ページの読み込みが完了するまでにレイアウトが不安定に変化することを防ぎます。よって、可能な限り画像には <code>height</code> と <code>width</code> を指定するべきです。</p>

<p>テーブルは以下のセレクターとプロパティの組み合わせを用いるべきです:</p>

<pre>  table-layout: fixed;
</pre>

<p>そして、 <code><a href="/ja/docs/Web/HTML/Element/col">&lt;col&gt;</a></code> 要素および <code><a href="/ja/docs/Web/HTML/Element/colgroup">&lt;colgroup&gt;</a></code> 要素を用いて列の幅を指定しましょう。</p>

<h3 id="Use_lazy_loading_for_images">画像の遅延読み込みを使用する</h3>

<p>既定では、画像は<strong>熱心に</strong>読み込まれます。つまり、 HTML で処理されると同時に画像が読み込まれ、表示されます。熱心に読み込まれた画像は、文書の {{domxref("Document.load_event", "load")}} イベントが送られる前に表示されます。画像の遅延読み込みに切り替えるとブラウザーは、{{Glossary("visual viewport", "視覚的ビューポート")}}の描画に必要になるまで、画像の読み込みを保留します。</p>

<p>画像に遅延読み込みのマークを付けるには、 {{htmlattrxref("loading", "img")}} 属性に <code>lazy</code> という値を指定してください。この設定により、画像は必要なときにのみ読み込まれます。</p>

<pre class="brush: html">&lt;img href="./images/footerlogo.jpg" loading="lazy"&gt;</pre>

<p>ただし、遅延読み込みされた画像は、 <code>load</code> イベントが発生した時点では利用できない場合があります。画像がロードされているかどうかは、論理プロパティの {{domxref("HTMLImageElement.complete", "complete")}} の値が <code>true</code> であるかどうかを確認することで判断できます。</p>

<h3 id="Choose_your_user-agent_requirements_wisely">ユーザーエージェント要件の賢い選択</h3>

<p>ページデザインを最大限に改善するには、プロジェクトのユーザーエージェントの要件を合理的なものにしましょう。すべてのブラウザー、特に古いバージョンのブラウザーでコンテンツがピクセル単位で正確に見えるように要求しないでください。</p>

<p>理想的には、適切な標準仕様に対応している最新のブラウザーを最低要件にするよう考慮するべきです。これには、最近のバージョンの Firefox、Internet Explorer、Google Chrome、Opera、Safari が含まれます。</p>

<p>ただし、この記事に記載している秘訣の多くはあらゆるユーザーエージェントに適用できる汎用的なテクニックであり、かつブラウザーの対応要件にかかわらずどのようなウェブページにでも適用できます。</p>

<h3 id="Use_async_and_defer_if_possible">可能なら async や defer を使用する</h3>

<p><a href="/ja/docs/Web/HTML/Element/script#attributes">async</a> と <a href="/ja/docs/Web/HTML/Element/script#attributes">defer</a> 属性の両方と互換性のある JavaScript を使用し、特に、複数の script 要素がある場合、可能ならば <a href="/ja/docs/Web/HTML/Element/script#attributes">async</a> をいつでも使用してください。<br>
 <br>
 これにより、ページで JavaScript が読み込み中である間はレンダリングを中断できます。さもなければ、ブラウザーはこれらの属性を持たない script 要素の後にあるコンテンツをレンダリングしないでしょう。</p>

<p>注意: これらの属性が初回のページ読み込みに大きな効果があるとしても、属性は使用するべきですがすべてのブラウザーで動作するとは考えないようにしてください。よい JavaScript コードを作るためのガイドラインすべてに従っていれば、コードを変更する必要はありません。</p>

<h2 id="Example_page_structure">ページ構造の例</h2>

<p>· <code>{{htmlelement('html')}}</code></p>

<dl>
 <dt>· <code>{{htmlelement('head')}}</code></dt>
 <dd>
 <dl>
  <dt>· <code>{{htmlelement('link')}}</code> ...</dt>
  <dd>ページの外観に必要な CSS ファイルです。管理しやすくするため、関連性のない CSS は別のファイルに分けるとともに、パフォーマンスのためにファイル数は最小限にしてください。</dd>
  <dt>· <code>{{htmlelement('script')}}</code> ...</dt>
  <dd>ページの読み込み中に<strong>必要な</strong>機能の JavaScript ファイルですが、ページの読み込み後にしか実行しない対話操作に関するものは含めないようにしてください。
  管理のために関連性のない JavaScript は別のファイルに分けるとともに、パフォーマンスのためにファイル数は最小限にしてください。</dd>
 </dl>
 </dd>
 <dt>· <code>{{htmlelement('body')}}</code></dt>
 <dd>· ユーザーが閲覧可能なページコンテンツを小さな塊 ( <code>{{htmlelement('header')}}</code>/ <code>{{htmlelement('main')}}/</code> <code>{{htmlelement('table')}}</code>) にまとめると、ページ全体のダウンロードを待たずに表示できるようにすることができる。
 <dl>
  <dt>· <code>{{htmlelement('script')}}</code> ...</dt>
  <dd>対話操作を実行するのに用いるスクリプトです。対話操作のスクリプトはたいてい、ページが完全に読み込まれて必要なオブジェクトがすべて初期化された後にのみ実行されます。よって、ページのコンテンツより先に読み込む必要はありません。先に読み込むと、ページが最初に表示されるのが遅くなります。<br>
  管理のために関連性のない JavaScript は別のファイルに分けるとともに、パフォーマンスのためにファイル数は最小限にしてください。<br>
  ロールオーバー効果で用いる画像がある場合は、ページのコンテンツをダウンロードした後に画像の先読みをしておきましょう。</dd>
 </dl>
 </dd>
</dl>

<h2 id="Related_Links" name="Related_Links">関連リンク</h2>

<ul>
 <li>書籍: <a href="http://www.websiteoptimization.com/">"Speed Up Your Site" by Andy King</a> (英語)</li>
 <li>Yahoo! によるすばらしい完成された <a href="https://developer.yahoo.com/performance/rules.html">ウェブサイト高速化のためのベストプラクティス</a> (英語)</li>
 <li>パフォーマンス解析・最適化向けツール: <a href="https://developers.google.com/speed/pagespeed/">Google PageSpeed Tools</a></li>
 <li><a href="/ja/docs/Tools/Paint_Flashing_Tool">Paint Flashing Tool</a></li>
</ul>
