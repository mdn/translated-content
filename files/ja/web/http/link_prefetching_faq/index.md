---
title: リンク先読みの FAQ
slug: Web/HTTP/Link_prefetching_FAQ
tags:
  - Gecko
  - HTML
  - HTTP
  - Link
  - Necko
  - Performance
  - Web Development
  - 先読み
  - 移行
translation_of: Web/HTTP/Link_prefetching_FAQ
---
<h3 id="What_is_link_prefetching.3F" name="What_is_link_prefetching.3F">リンクの先読みとは?</h3>

<p>リンクの先読みとはブラウザーの機能の一つで、ブラウザーのアイドル時間を使って、ユーザーが近い将来に訪問するであろう文書をダウンロードして、予め読み込んでおくことを指します。まず、Web ページの方から先読みのヒントをブラウザーに渡します。そのページの読み込みが完了すると、ブラウザーは黙って指定された文書を先読みし、キャッシュに蓄積しておきます。ユーザーが先読みされている文書を訪問すると、ブラウザーのキャッシュからすぐに提供できます。</p>

<h3 id="Does_prefetching_work_with_HTTPS" name="Does_prefetching_work_with_HTTPS">HTTPS でも先読みしますか?</h3>

<p>Gecko 1.9.1 (Firefox 3.5) 以降から HTTPS コンテンツも先読みできます。</p>

<h3 id="What_are_the_prefetching_hints.3F" name="What_are_the_prefetching_hints.3F">先読みのヒントとは?</h3>

<p>HTML の <code>link</code> タグまたは <a href="/ja/docs/Web/HTTP/Headers">HTTP の <code>Link:</code> ヘッダー</a>において、<code>next</code>, <code>prefetch</code> のいずれかの関係を持つものです。 <code>link</code> タグを使う例を以下に示します。</p>

<pre class="eval">&lt;link rel="prefetch" href="/images/big.jpeg"&gt;
</pre>

<p>同じヒントを <a href="/ja/docs/Web/HTTP/Headers">HTTP の <code>Link:</code> ヘッダー</a>を使って表すと次のようになります。</p>

<pre class="eval">Link: &lt;/images/big.jpeg&gt;; rel=prefetch
</pre>

<p><code>Link:</code> ヘッダーは HTML 文書中からも HTML の <code>&lt;meta&gt;</code> タグを使って指定できます。</p>

<pre class="eval">&lt;meta http-equiv="Link" content="&lt;/images/big.jpeg&gt;; rel=prefetch"&gt;
</pre>

<p><code>Link:</code> ヘッダーの書式は、 <a class="external" href="http://tools.ietf.org/html/rfc2068">RFC 2068</a> の 19.6.2.4 節で説明されています。</p>

<p>ブラウザーはこれらのヒント全てを元に、ブラウザーが使われていない時に先読みするための各リクエストを待ち行列に入れます。1ページに複数のヒントがあれば、複数の文書に対して先読みを行います。例えば、次の文書としていくつかの大きな画像を指定することもあります。</p>

<p>他にも以下のような指定ができます。</p>

<pre class="eval">&lt;link rel="prefetch alternate stylesheet" title="Designed for Mozilla" href="mozspecific.css"&gt;
&lt;link rel="next" href="2.html"&gt;
</pre>

<h3 id="Are_anchor_.28.3Ca.3E.29_tags_prefetched.3F" name="Are_anchor_.28.3Ca.3E.29_tags_prefetched.3F">アンカータグ（&lt;a&gt;）の内容も先読みされますか?</h3>

<p>いいえ。 <code>next</code> か <code>prefetch</code> のリンク形式を持つ <code>&lt;link&gt;</code> タグだけが先読みの対象です。しかし、要望が多いようなら、将来的には <code>next</code> や <code>prefetch</code> の関係を含む <code>&lt;a&gt;</code> タグのリンクの先読みにも対応するようになるかもしれません。そうすれば、コンテンツ提供者が先読みリンクを更新し忘れるという問題を回避しやすくなるでしょう。</p>

<h3 id="Is_link_prefetching_standards_compliant.3F" name="Is_link_prefetching_standards_compliant.3F">リンクの先読み機能は標準に準拠していますか?</h3>

<p>はい。ここで述べているリンクの先読み機能は、既存のウェブ標準に違反していません。実際、HTML 4.01 仕様書では新たなリンク形式の定義が明確に許されています(<a class="external" href="http://www.w3.org/TR/html4/types.html#type-links">Section 6.12: Link types を参照</a>)。しかし、Mozilla で採用した手法自体はまだ標準化されていません。 Internet Draft を現在準備中です。</p>

<p>この手法の標準化は HTML5 の範囲の一部です。現在のワーキングドラフトの <a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/#link-type-prefetch" rel="external nofollow">section §5.11.3.13. Link type "prefetch"</a> を参照してください。</p>

<h3 id="How_is_browser_idle_time_determined.3F" name="How_is_browser_idle_time_determined.3F">ブラウザーのアイドル時間はどのように判定されますか?</h3>

<p>現在の実装（Mozilla 1.2）では、アイドル時間は <code>nsIWebProgressListener</code> API を用いて判定されます。トップレベルの <code>nsIWebProgress</code> オブジェクトにリスナーを追加しました（"@<a class="linkification-ext external" href="http://mozilla.org/docloaderservice;1">mozilla.org/docloaderservice;1</a>"）。このリスナーから、文書の開始と停止の通知を受け取って、前の文書の停止と次の文書の開始の間の時間をアイドル時間として概算します。前の文書の停止通知は、大まかに言って、トップレベル文書の onLoad ハンドラが起動した時に行われます。この時が先読みリクエストを行う時になります。サブフレームが先読みのヒントを含む場合にも、先読みは最上位のフレームとその「子」フレームの読み込みが終了するまで始まりません。</p>

<h3 id="What_happens_if_I_click_on_a_link_while_something_is_being_prefetched.3F" name="What_happens_if_I_click_on_a_link_while_something_is_being_prefetched.3F">先読みの取得中に別のリンクをクリックするとどうなりますか?</h3>

<p>ユーザーがリンクをクリックしたり、何らかの種類のページ読み込みを発生させたりすると、先読みは停止し、先読みのヒントは捨てられます。先読みしている文書が部分的にダウンロードされている場合は、途中までの文書をサーバから送られた "Accept-Ranges: bytes" レスポンスヘッダー付きでキャッシュに蓄積されます。このヘッダーは、大抵、ウェブサーバが静的なコンテンツを提供する際に生成するものです。ユーザーが先読みした文書を実際に訪問する際には、その文書の残りの部分を HTTP の byte-range リクエストを使って取得します。</p>

<h3 id="What_if_I.27m_downloading_something_in_the_background.3F_Will_link_prefetching_compete_for_bandwidth.3F" name="What_if_I.27m_downloading_something_in_the_background.3F_Will_link_prefetching_compete_for_bandwidth.3F">バックグラウンドで何かをダウンロードしている場合はどうですか? リンクの先読み機能は回線容量を奪い合いますか?</h3>

<p>「イエス」であり、「ノー」でもあります。まず、Mozilla を使って何かをダウンロードしている場合は、全てのダウンロードが終わるまでリンクの先読み機能を遅らせます。例えば、ブックマーク・グループを読み込んでいる（複数のタブを開く）場合には、そのブックマークされたページで発生した先読みリクエストは、全てのタブがロードし終わるまで、開始されません。一方、別のアプリケーションがネットワークを使っている場合は、Mozilla のリンクの先読みはその他のアプリケーションと回線容量を奪い合います。将来的には、ネットワークのアイドル時間を監視するオペレーティングシステムのサービスを利用して、この問題を解決したいと思っています</p>

<h3 id="Are_there_any_restrictions_on_what_is_prefetched.3F" name="Are_there_any_restrictions_on_what_is_prefetched.3F">先読みできるものに何か制限はありますか?</h3>

<p>はい。<a class="external" href="http://" rel="freelink">http://</a> (と {{ Gecko("1.9.1") }} からは <a class="link-https" href="https://" rel="freelink">https://</a> )URL だけが先読み可能です。（FTP などの）その他のプロトコルはクライアントサイドのキャッシュへの対応が十分でありません。</p>

<h3 id="Will_Mozilla_prefetch_documents_from_a_different_host.3F" name="Will_Mozilla_prefetch_documents_from_a_different_host.3F">Mozilla は別のホストからも文書を先読みしますか?</h3>

<p>はい。先読みには、 同一オリジン (same-origin) についての制限はありません。リンクの先読みを同一サーバの URL に限定したとしても、ブラウザーのセキュリティ向上にはならないでしょうから。</p>

<h3 id="Do_prefetched_requests_contain_a_Referer_header.3F" name="Do_prefetched_requests_contain_a_Referer:_header.3F">先読みのリクエストには Referer: ヘッダーが付きますか?</h3>

<p>はい。先読みリクエストには、どの文書から先読みヒントを取ったかを示す、HTTP の <code>Referer:</code> ヘッダーが付きます。</p>

<p>このことは、多くのサイトで広く行われている参照元の追跡に影響するかもしれません。このため、リンクの先読みは全てのコンテンツに対して向くものではないかもしれません。そこで、<code>Cache-control: must-revalidate</code> HTTP レスポンスヘッダーを指定することにより、ユーザーが先読みされた文書へのリンクを辿った際に、Mozilla にその先読みされた文書を検証させることができるようにしています。このヘッダーが使われると、キャッシュは有効なままですが、ブラウザーのキャッシュから文書を取り出す前には、<code>If-Modified-Since</code> もしくは <code>If-None-Match</code> の検証用リクエストが必要になります。</p>

<h3 id="As_a_server_admin.2C_can_I_distinguish_prefetch_requests_from_normal_requests.3F" name="As_a_server_admin.2C_can_I_distinguish_prefetch_requests_from_normal_requests.3F">サーバ管理者ですが、先読みのリクエストを通常のリクエストと区別する方法はありますか?</h3>

<p>はい。先読みのリクエストには、次のようなヘッダーが付きます。</p>

<pre>X-moz: prefetch</pre>

<p>もちろん、このリクエストヘッダーは全く標準化されていないものですので、将来の Mozilla リリースでは変更される可能性もあります。</p>

<h3 id="Is_there_a_preference_to_disable_link_prefetching.3F" name="Is_there_a_preference_to_disable_link_prefetching.3F">リンクの先読み機能を無効化する設定はありますか?</h3>

<p>はい。リンクの先読み機能を無効化できる隠し設定があります。 あなたのプロファイルディレクトリにある prefs.js ファイルに次の行を追加してください（もしくは、about:config 経由で変更してください）。</p>

<pre class="eval">user_pref("network.prefetch-next", false);
</pre>

<p>しかし、リンクの先読み機能を無効にしたいという場合には、この先読みの実装に何か不具合があるのではないかと思います。我々としては、不具合がある場合には、ユーザーに設定ユーザーインターフェイスの中から目立たない設定項目を探させて変更させるよりも、実装を改善したいと思っています。</p>

<h3 id="What_about_folks_who_pay-per-byte_for_network_bandwidth.3F" name="What_about_folks_who_pay-per-byte_for_network_bandwidth.3F">ネットワーク回線を従量制課金で使っている人たちについてはどうですか?</h3>

<p>基本的には、この問題は二つの観点から見ることができます。ウェブサイトでは既に JavaScript や DOM 等の小技を使って、暗黙のダウンロードが行われていること。先読みはブラウザーの機能の一つであり、ユーザーが簡単に無効化できるようにしておくべきだということです。</p>

<p>ウェブサイトで JavaScript や DOM の色々な小技を使用して暗黙にダウンロードをどんどん進めようとする代わりに、 <code>&lt;link&gt;</code> タグを使った先読みを採用してもらうことが重要です。 <code>&lt;link&gt;</code> タグにより、ブラウザーはどのサイトが最新であるかを知ることができ、文書の先読みの優先順序をより良く付けることができます。ユーザー設定で <code>&lt;link&gt;</code> タグによる先読みを無効化できるようにすると、単に JavaScript や DOM による小技を推奨させることにつながり、ユーザーにとって良い結果にはなりm差円。先読み機能が既定で有効なのは、このためです。</p>

<h3 id="Which_browsers_support_link_prefetching.3F" name="Which_browsers_support_link_prefetching.3F">どのブラウザーがリンクの先読み機能に対応していますか?</h3>

<p>Mozilla 1.2 以降ベースおよび Mozilla 1.0.2 以降ベースのブラウザーが先読み機能に対応しています。これには Netscape 7.01 以降と Phoenix ビルドも含まれます。 2003年3月現在の Chimera ビルドは Mozilla 1.0.1 ベースですので、先読み機能に対応していません。あなたのブラウザーがリンクの先読みに対応しているかどうか<a class="external" href="http://gemal.dk/browserspy/prefetch.php">テスト</a>できます。</p>

<h3 id="Privacy_implications" name="Privacy_implications">プライバシーとの関わり</h3>

<p>参照元と URL の追跡との関係はすでに上記で説明されているとおりであり、先読みは一般的に先読みサイトの Cookie へのアクセスを引き起こします。（例えば、 amazon を Google で検索するとき、 Google の結果ページは www.amazon.com google.co.jp で検索した場合は www.amazon.co.jp を先読みし、ブラウザーに Cookie が送られてきます。 Firefox で サードパーティの Cookie をブロックするには、<a class="external" href="http://support.mozilla.com/kb/Disabling+third+party+cookies" rel="external">Disabling third party cookies</a> を参照してください。）</p>

<h3 id="What_about....3F" name="What_about....3F">他には...?</h3>

<p>リンクの先読み機能について質問やコメントなどありましたら、私の方までお気軽にどうぞ。 :-)</p>

<h4 id="See_also..." name="See_also...">関連情報...</h4>

<p><a class="external" href="http://www.edochan.com/programming/pf.htm">Prefetching Hints</a></p>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">原文情報</h2>

<ul>
 <li>著者: Darin Fisher (darin at meer dot net)</li>
 <li>最終更新日: Updated: March 3, 2003</li>
</ul>
</div>
