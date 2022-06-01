---
title: HTTP キャッシュ
slug: Web/HTTP/Caching
tags:
  - Caching
  - Guide
  - HTTP
translation_of: Web/HTTP/Caching
---
<div>{{HTTPSidebar}}</div>

<p class="summary">過去に取得したリソースを再使用すると、ウェブサイトやアプリケーションのパフォーマンスが大きく向上するでしょう。ウェブキャッシュは遅延やネットワークのトラフィックを削減して、リソースを表示するために必要な時間も短縮します。HTTP キャッシュを使用すると、ウェブサイトの応答性が高まります。</p>

<h2 id="Different_kinds_of_caches" name="Different_kinds_of_caches">さまざまな種類のキャッシュ</h2>

<p>キャッシュは、提供されたリソースの複製を保存して、要求されたときに背後でその複製を提供する技術です。ウェブキャッシュのストア内に要求されたリソースがあるとき、キャッシュはリクエストに介入して、提供元のサーバーから再びダウンロードする代わりにキャッシュ内の複製を返します。これにより、サーバーがすべてのクライアントに応対する必要がなくなり負荷が軽減する、キャッシュがクライアントに近いところにあるのでパフォーマンスが向上する、すなわちリソースを返すためにかかる時間を短くするといったことを実現できます。ウェブサイトについて、高いパフォーマンスを達成するための主要な構成要素です。一方、すべてのリソースを同じまま永久に保存しないよう、キャッシュを適切に設定しなければなりません。キャッシュはあまり長く保存せず、リソースが変更されるまでの間にすることが重要です。</p>

<p>キャッシュにはさまざまな種類があり、これらはプライベートキャッシュと共有キャッシュの 2 つのカテゴリーに大きく分類できます。<em>共有キャッシュ</em>は、複数のユーザーが再使用するためにレスポンスを保存するキャッシュです。<em>プライベートキャッシュ</em>は、ひとりのユーザーのためのキャッシュです。このページでは主にブラウザーのキャッシュとプロキシのキャッシュを扱いますが、ウェブサイトやウェブアプリケーションの信頼性、パフォーマンス、規模を向上するためにウェブサーバーで展開されるゲートウェイのキャッシュ、CDN、リバースプロキシのキャッシュ、ロードバランサーも存在します。</p>

<p><img alt="What a cache provide, advantages/disadvantages of shared/private caches." src="/en-US/docs/Web/HTTP/Caching/http_cache_type.png" style="height: 573px; width: 910px;"></p>

<h3 id="Private_browser_caches" name="Private_browser_caches">プライベートなブラウザーのキャッシュ</h3>

<p>プライベートキャッシュは、ひとりのユーザーのためのキャッシュです。ブラウザーの設定で "キャッシュ" を見たことがあるでしょう。ブラウザーのキャッシュは、ユーザーが <a href="/ja/docs/Web/HTTP" title="HTTP">HTTP</a> でダウンロードしたすべての文書を保持します。このキャッシュは訪問済みの文書で、サーバーと追加のやり取りを行う必要なしに戻る/進む操作、ページの保存、ソースの表示などを可能にします。また同様に、キャッシュ済みコンテンツのオフライン表示が改善します。</p>

<h3 id="Shared_proxy_caches" name="Shared_proxy_caches">共有されるプロキシキャッシュ</h3>

<p>共有キャッシュは、複数のユーザーによって再使用されるレスポンスを保存するキャッシュです。例えば ISP や企業は、人気があるリソースを何度も再使用してネットワークのトラフィックや遅延を低減するために、ローカルネットワークの基盤の一部としてウェブプロキシを設置しているでしょう。</p>

<h2 id="Targets_of_caching_operations" name="Targets_of_caching_operations">キャッシュ処理の対象</h2>

<p>HTTP キャッシュは必須ではありませんが、キャッシュしたリソースの再使用は通常望ましいことです。ただし一般的な HTTP キャッシュはたいてい、{{HTTPMethod("GET")}} のレスポンスのみキャッシュするよう制限されており、他のメソッドではキャッシュしません。主要なキャッシュのキーはリクエストメソッドと対象 URI で構成されます (GET リクエストだけをキャッシュの対象にするため、URI しか使用されないことがよくあります)。キャッシュ項目の一般的な形式は以下のとおりです。</p>

<ul>
 <li>取得要求に成功した結果: {{HTTPMethod("GET")}} リクエストに対する {{HTTPStatus(200)}} (OK) レスポンスには、HTML 文書、画像、ファイルなどのリソースが含まれています。</li>
 <li>恒久的なリダイレクト: {{HTTPStatus(301)}} (Moved Permanently) レスポンス。</li>
 <li>エラーレスポンス: {{HTTPStatus(404)}} (Not Found) のページ。</li>
 <li>不完全な結果: {{HTTPStatus(206)}} (Partial Content) レスポンス。</li>
 <li>キャッシュのキーとして使用することが適切であると定義されていれば、{{HTTPMethod("GET")}} 以外のレスポンス。</li>
</ul>

<p>リクエストがコンテンツネゴシエーションの対象である場合はキャッシュ項目が、第二のキーで区別される複数の保存済みレスポンスで構成されていることもあります。詳しくは、<a href="#Varying_responses">後述</a>する {{HTTPHeader("Vary")}} ヘッダーの情報をご覧ください。</p>

<h2 id="Controlling_caching" name="Controlling_caching">キャッシュを制御する</h2>

<h3 id="The_Cache-control_header" name="The_Cache-control_header"><code>Cache-Control</code> ヘッダー</h3>

<p>HTTP/1.1 の {{HTTPHeader("Cache-Control")}} 一般ヘッダーは、リクエストおよびレスポンスでキャッシュ機能に関するディレクティブを指定するために使用します。このヘッダーが提供するさまざまなディレクティブを使用して、キャッシュのポリシーを定義してください。</p>

<h4 id="No_cache_storage_at_all" name="No_cache_storage_at_all">キャッシュしない</h4>

<p>クライアントのリクエストおよびサーバーのレスポンスについて、キャッシュに何も保存してはいけません。リクエストはサーバーに送信されて、リクエストごとに毎回完全なレスポンスをダウンロードします。</p>

<pre class="notranslate">Cache-Control: no-store
</pre>

<h4 id="No_caching" name="No_caching">キャッシュするが再検証する</h4>

<p>キャッシュした複製を渡す前に検証のため、キャッシュは生成元のサーバーにリクエストを送信します。</p>

<pre class="notranslate">Cache-Control: no-cache</pre>

<h4 id="Private_and_public_caches" name="Private_and_public_caches">private キャッシュと public キャッシュ</h4>

<p>"public" ディレクティブは、どのキャッシュでもレスポンスを保存してよいことを示します。これは、通常はキャッシュできない HTTP 認証やレスポンスステータスコードを伴うページをキャッシュしなければならない時に有用です。</p>

<p>一方、"private" はレスポンスがひとりのユーザーのためのものであり、共有キャッシュに保存してはならないことを示します。ブラウザーのプライベートキャッシュは、この場合でもレスポンスを保存できます。</p>

<pre class="notranslate">Cache-Control: private
Cache-Control: public
</pre>

<h4 id="Expiration" name="Expiration">有効期限</h4>

<p>このヘッダーでもっとも重要なディレクティブが、リソースが陳腐化していないと考えられる最長期間を表す "<code>max-age=&lt;seconds&gt;</code>" です。{{HTTPHeader("Expires")}} とは対照的に、このディレクティブはリクエストの時刻と関係があります。変更しない予定のアプリケーションのファイルには、たいてい積極的なキャッシュを行います。これは例えば画像、CSS ファイル、JavaScript ファイルといった静的なファイルが含まれます。</p>

<p>詳しくは、後述する <a href="#Freshness">鮮度</a> のセクションもご覧ください。</p>

<pre class="notranslate">Cache-Control: max-age=31536000</pre>

<h4 id="Validation" name="Validation">検証</h4>

<p>"<code>must-revalidate</code>" ディレクティブを使用すると、キャッシュはリソースを使用する前に陳腐化の状態を検証しなければならず、また期限切れのリソースを使用するべきではありません。詳しくは、<a href="#Cache_validation">キャッシュの検証</a> のセクションをご覧ください。</p>

<pre class="notranslate">Cache-Control: must-revalidate</pre>

<h3 id="The_Pragma_header" name="The_Pragma_header"><code>Pragma</code> ヘッダー</h3>

<p>{{HTTPHeader("Pragma")}} は HTTP/1.0 のヘッダーであり、HTTP レスポンスに特定されないため HTTP/1.1 の <code>Cache-Control</code> 一般ヘッダーを確実に置き換えるものではありません。しかし、リクエストで <code>Cache-Control</code> ヘッダーフィールドが省略された場合は <code>Cache-Control: no-cache</code> と同様に作用します。HTTP/1.0 クライアントとの後方互換用に限り、<code>Pragma</code> を使用してください。</p>

<h2 id="Freshness" name="Freshness">鮮度</h2>

<p>リソースがキャッシュに保存されると、理論上は永久にキャッシュからリソースを提供することができます。キャッシュは有限の記憶領域ですので、アイテムは定期的に記憶領域から削除されます。この処理は<em>キャッシュ・エビクション</em>と呼ばれます。一方、サーバー上で変更されるリソースもあり、それはキャッシュを更新するべきです。HTTP はクライアントサーバープロトコルであり、リソースを変更したときにサーバーがキャッシュやクライアントに連絡することはできません。サーバーは、リソースの有効期限を伝えなければなりません。この有効期限に達するまではリソースが<em>新鮮 (fresh)</em> であり、また有効期限を過ぎるとリソースは<em>陳腐化 (stale)</em> します。エビクションアルゴリズムはたいてい、陳腐化したリソースよりも新鮮なリソースを優遇します。陳腐化したリソースは削除されたり無視されたりしないことに注意してください。陳腐化したリソースへのリクエストをキャッシュが受け取ると、実際はもう新鮮ではないかを確認するために {{HTTPHeader("If-None-Match")}} を付加してリクエストを転送します。新鮮な状態であれば、サーバーは要求されたリソースを送信せずに {{HTTPStatus("304")}} (Not Modified) ヘッダーを返して、帯域を節約します。</p>

<p>共有キャッシュのプロキシがある場合の処理例を以下に示します。</p>

<p><img alt="Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale." src="https://mdn.mozillademos.org/files/13771/HTTPStaleness.png" style="height: 910px; width: 822px;"></p>

<p>鮮度の寿命は、いくつかのヘッダーを基に計算されます。"<code>Cache-Control: max-age=N</code>" ヘッダーが指定された場合は、鮮度の寿命が N に等しくなります。このヘッダーが与えられない場合がよくありますが、そのときは {{HTTPHeader("Expires")}} ヘッダーが与えられたかを確認します。<code>Expires</code> ヘッダーがある場合は、その値から {{HTTPHeader("Date")}} ヘッダーの値を減算した結果を鮮度の寿命にします。最後に、どちらのヘッダーも与えられていない場合は {{HTTPHeader("Last-Modified")}} ヘッダーを参照します。このヘッダーがある場合は、<code>Date</code> ヘッダーの値から <code>Last-modified</code> ヘッダーの値を減算して 10 で割った結果をキャッシュの寿命にします。<br>
 有効期限は以下のように計算します。</p>

<pre class="notranslate">expirationTime = responseTime + freshnessLifetime - currentAge
</pre>

<p>ここで <code>responseTime</code> は、ブラウザーがレスポンスを受け取った時刻です。</p>

<h3 id="Revved_resources" name="Revved_resources">Revving を適用したリソース</h3>

<p>キャッシュされたリソースをより多く使用すると、ウェブサイトの応答性やパフォーマンスが向上するでしょう。この最適化のために、有効期限をできるだけ遠い未来にすることが推奨されています。この方法は定期的あるいはよく更新されるリソースでも使用できますが、まれにしか更新されないリソースでは問題があります。それらはキャッシュされたリソースの恩恵を最大限に受けますが、更新することがとても難しくなります。この現象は、それぞれのウェブページに含まれたりリンクされたりする技術上のリソースで顕著です。JavaScript や CSS のファイルはあまり変更されませんが、変更点はすばやく反映されることが望まれます。</p>

<p>ウェブ開発者は、Steve Souders 氏が <em>revving</em><sup><a href="https://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/">[1]</a></sup> と呼ぶ技術を発明しました。あまり更新しないファイルは、特定の方法で命名します。その方法とは、通常はファイル名である URL にリビジョン (またはバージョン) 番号を追加することです。この方法ではそれぞれの新しいリビジョンのリソースが<em>変更されない</em>リソースであるとみなされて、通常は 1 年あるいはそれ以上先の遠い未来を有効期限にすることができます。新しいバージョンを使用するためにすべてのリンクを変更しなければならないことが、この方法の欠点です。ウェブ開発者が使用するツールチェーンによって通常は注意される、追加の複雑性です。あまり変化しないリソースが変化するとき、よく変化するリソースにさらなる変化をもたらします。よく変化するリソースを読み込むときに、ほかのリソースの新しいバージョンも読み込まれます。</p>

<p>この手法には、さらなる利点があります。同時に 2 つのキャッシュ済みリソースを更新すると、ひとつのリソースが期限切れのバージョン、もうひとつのリソースが新しいバージョンという組み合わせで使用されることがなくなります。これは相互依存、すなわち、それぞれが同じ HTML 要素を参照しているためにお互いに依存しあっている CSS スタイルシートと JS スクリプトを使用するウェブサイトで特に重要です。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13779/HTTPRevved.png"></p>

<p>revving を適用したリソースに追加するリビジョン情報は 1.1.3 のような伝統的なリビジョン文字列である必要はなく、単純に増加していく一組の番号でもかまいません。ハッシュ値や日付など、衝突を避けた情報にすることもできます。</p>

<h2 id="Cache_validation" name="Cache_validation">キャッシュの検証</h2>

<p>キャッシュされた文書の有効期限に達すると、検証または再取得を行います。キャッシュの検証は、サーバーが <em>strong validator</em> または <em>weak validator</em> を提供していれば実行できます。</p>

<p>ユーザーが再読み込みボタンを押すと、再検証が発生します。キャッシュされたレスポンスに "<code>Cache-Control: must-revalidate</code>" ヘッダーが含まれている場合は、通常のブラウジングでも再確認が発生します。もうひとつの要因が、<code>詳細 -&gt; キャッシュ</code> 設定パネルにある、キャッシュ確認の設定です。ここに、文書を読み込むたびに確認を強いる設定項目があります。</p>

<h3 id="ETags" name="ETags">ETag</h3>

<p>{{HTTPHeader("ETag")}} レスポンスヘッダーは strong validator として使用できる、<em>ユーザーエージェントにとって不透明</em>な値です。ブラウザーなどの HTTP ユーザーエージェントは、この文字列が何を表すかがわからず、またこの値が何になるかを予測することもできません。<code>ETag</code> ヘッダーがリソースのレスポンスの一部に含まれていたら、クライアントは以降のリクエストでキャッシュ済みリソースの確認を行うために {{HTTPHeader("If-None-Match")}} をヘッダーに含めることができます。</p>

<p>{{HTTPHeader("Last-Modified")}} レスポンスヘッダーは、weak validator として使用できます。これは分解能が 1 秒単位でしかないため、weak であると考えられます。<code>Last-Modified</code> ヘッダーがレスポンスに含まれていたら、クライアントはキャッシュ済み文書の確認を行うために {{HTTPHeader("If-Modified-Since")}} リクエストヘッダーを送信できます。</p>

<p>確認要求が行われたとき、サーバーは確認要求を無視して通常の {{HTTPStatus(200)}} <code>OK</code> レスポンスを返すか、ブラウザーにキャッシュ済みの複製を使用するよう指示するために {{HTTPStatus(304)}} <code>Not Modified</code> (ボディは空にする) を返すことができます。後者のレスポンスでは、キャッシュ済み文書の有効期限を更新するヘッダーを含めることもできます。</p>

<h2 id="Varying_responses" name="Varying_responses">変化するレスポンス</h2>

<p>{{HTTPHeader("Vary")}} HTTP レスポンスヘッダーは、提供元のサーバーからレスポンスを得るように要求せずにキャッシュ済みのレスポンスを使用できるかを判断するために、以降のリクエストヘッダーをどのように照合するかを定義します。</p>

<p><code>Vary</code> ヘッダーフィールドを持つキャッシュ済みレスポンスに合致可能なリクエストをキャッシュが受け取ったとき、<code>Vary</code> ヘッダーで指定されたすべてのヘッダーフィールドが元の (キャッシュ済み) リクエストと新たなリクエストの両方で一致しなければ、キャッシュ済みレスポンスを使用してはいけません。</p>

<p><img alt="The Vary header leads cache to use more HTTP headers as key for the cache." src="https://mdn.mozillademos.org/files/13769/HTTPVary.png" style="height: 817px; width: 752px;"></p>

<p>これは、例えば動的にコンテンツを提供する場合に有用です。<code>Vary: User-Agent</code> ヘッダーを使用すると、キャッシュサーバーはページをキャッシュから提供するかを判断するために、ユーザーエージェントを考慮します。モバイルユーザー向けに別のコンテンツを提供している場合、モバイルユーザー向けに誤ってデスクトップ版のサイトが提供されてしまうことを防ぐ助けになります。加えて、Google などの検索エンジンがモバイル版のページを発見する助けになり、<a href="https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0">クローキング</a> を意図していないと知らせることもできるでしょう。</p>

<pre class="notranslate">Vary: User-Agent</pre>

<p>{{HTTPHeader("User-Agent")}} はモバイルクライアントとデスクトップクライアントで異なる ("vary") ため、誤ってモバイル版のコンテンツをデスクトップユーザー向けに使用する、あるいはその逆を行うことがなくなるでしょう。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://tools.ietf.org/html/rfc7234">RFC 7234: Hypertext Transfer Protocol (HTTP/1.1): Caching</a></li>
 <li><a href="https://www.mnot.net/cache_docs">Caching Tutorial – Mark Nottingham</a></li>
 <li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching">HTTP caching – Ilya Grigorik</a></li>
 <li><a href="https://redbot.org/">RedBot</a>: キャッシュ関係のヘッダーを確認するツール</li>
</ul>
