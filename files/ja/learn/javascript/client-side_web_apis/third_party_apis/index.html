---
title: サードパーティ API
slug: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
tags:
  - 3rd party
  - API
  - Beginner
  - CodingScripting
  - Google Maps
  - Learn
  - NYTimes
  - Third party
  - youtube
translation_of: Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
---
<div>{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}</div>

<p class="summary">これまで説明してきた API はブラウザーに組み込まれていましたが、すべての API がそうというわけではありません。Google Maps・Twitter・Facebook・PayPal などの大規模なサイトやサービスの多くは開発者がそれらのデータ (ブログに Twitter のストリームを表示するなど) やサービス (ユーザーのログインに Facebook ログインを利用するなど) を利用できるように API を提供しています。この記事ではブラウザー API とサードパーティ API の違いを見て、後者の典型的な使い方について説明します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>JavaScript の基礎 (<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a>, <a href="/ja/docs/Learn/JavaScript/Building_blocks">JavaScript の構成要素</a>, <a href="/ja/docs/Learn/JavaScript/Objects">JavaScript オブジェクト入門</a> をご覧ください),<a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs">クライアントサイド API の基礎</a></td>
  </tr>
  <tr>
   <th scope="row">到達目標:</th>
   <td>サードパーティ API の仕組み、それらを利用してウェブサイトを強化する方法を学習する</td>
  </tr>
 </tbody>
</table>

<h2 id="サードパーティAPIとは">サードパーティAPIとは?</h2>

<p>サードパーティ API は、サードパーティ (通常は Facebook、Twitter、Google などの企業) が提供する API で、JavaScript を介して機能にアクセスしてサイトで使用することができます。最もわかりやすい例の 1 つとして、マッピング API を使用してページにカスタムマップを表示することがあります。</p>

<p><a href="https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/">Simple Mapquest API の例</a>を参考に、サードパーティ API とブラウザー API の違いを説明します。</p>

<div class="note">
<p><strong>注意</strong>: 一度に<a href="/ja/docs/Learn#Getting_our_code_examples">すべてのコード例を取得</a>したい場合があります。その場合は、各セクションで必要なサンプルファイルをレポジトリーで検索するだけで済みます。</p>
</div>

<h3 id="それらはサードパーティのサーバーにあります">それらはサードパーティのサーバーにあります</h3>

<p>ブラウザー API はブラウザーに組み込まれており、すぐに JavaScript からアクセスできます。たとえば、<a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#How_do_APIs_work">紹介記事で見た</a>Web Audio API は、ネイティブの {{domxref("AudioContext")}} オブジェクトを使ってアクセスします。例えば:</p>

<pre class="brush: js notranslate">const audioCtx = new AudioContext();
  ...
const audioElement = document.querySelector('audio');
  ...
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.</pre>

<p>一方、サードパーティの API はサードパーティのサーバーにあります。JavaScript からこれらにアクセスするには、まず API 機能に接続してページで利用できるようにする必要があります。 これは通常、Mapquest の例で見られるように、{{htmlelement("script")}} 要素を介してサーバー上で利用可能な JavaScript ライブラリーへの最初のリンクを含めます。</p>

<pre class="brush: js notranslate">&lt;script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"&gt;&lt;/script&gt;
&lt;link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/&gt;</pre>

<p>そのライブラリーで利用可能なオブジェクトを使い始めることができます。例えば：</p>

<pre class="brush: js notranslate">let map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});</pre>

<p>ここでは、マップ情報を格納するための変数を作成し、次に <code>mapquest.map()</code> メソッドを使用して新しいマップを作成します。このメソッドは、必要な {{htmlelement("div")}} 要素の ID を受け取ります。('map') で地図を表示し、表示したい特定の地図の詳細を含む options オブジェクトを表示します。この場合は、地図の中心座標、表示する <code>map</code> 型の地図レイヤー (<code>mapquest.tileLayer()</code> メソッドを使用して作成)、およびデフォルトのズームレベルを指定します。</p>

<p>これが、Mapquest API が単純な地図を描くために必要なすべての情報です。接続しているサーバーは、表示されている地域の正しい地図タイルを表示するなど、複雑なものをすべて処理します。</p>

<div class="note">
<p><strong>メモ</strong>: API の中には、機能へのアクセスをわずかに異なる方法で処理するものがあり、開発者はデータを取得するために特定の URL パターンに対して HTTP リクエストを行う必要があります。これらは <a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs#A_RESTful_API_—_NYTimes">RESTful API と呼ばれ、後で例が出てきます</a>。</p>
</div>

<h3 id="通常は_API_キーが必要です">通常は API キーが必要です</h3>

<p><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#They_have_additional_security_mechanisms_where_appropriate">最初の記事で説明した</a>ように、ブラウザー API のセキュリティは許可プロンプトによって処理される傾向があります。これらの目的は、<span class="tlid-translation translation" lang="ja"><span title="">ユーザーが訪問したウェブサイトで何が起こっているのかをユーザー自身が認識できるようにし</span><span title="">、悪意のある方法で API を使用している人の被害にあう可能性を低くすることです。</span></span></p>

<p>サードパーティの API には、少し異なる権限システムがあります。開発者が API 機能にアクセスできるようにするために開発者キーを使用する傾向があります。</p>

<p>Mapquest API の例には、次のような行があります。</p>

<pre class="notranslate">L.mapquest.key = 'YOUR-API-KEY-HERE';</pre>

<p>この行では、アプリケーションで使用する API キーまたは開発者キーを指定します。アプリケーションの開発者は、キーを取得して API の機能へのアクセス許可を得るためにコードに含める必要があります。この例では、プレースホルダーを用意しました。</p>

<div class="blockIndicator note">
<p><strong>メモ</strong>: 独自の例を作成するときは、プレースホルダーの代わりに独自の API キーを使用します。</p>
</div>

<p>他の API では、少し異なる方法でキーを含める必要があるかもしれませんが、ほとんどのパターンは比較的似ています。</p>

<p>キーを要求することで、API プロバイダーは API のユーザーに自分のアクションに対する責任を持たせることができます。開発者がキーを登録すると、それらは API プロバイダに認識され、彼らが API に悪意のあることをし始めたらアクション (たとえば、人々の位置を追跡したり、APIを機能させないために大量のリクエストで API をスパムしようとするなど) を取ることができます。最も簡単なアクションは、単にそれらの API 特権を取り消すことです。</p>

<h2 id="Mapquest_の例を拡張する">Mapquest の例を拡張する</h2>

<p>API の他の機能の使用方法を示すために、Mapquest の例にさらに機能を追加しましょう。</p>

<ol>
 <li>
  <p>この章を始めるにあたり、新しいディレクトリーに<a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/starter-file.html">mapquest starter file</a>をコピーしましょう。もしもすでに<a href="/ja/docs/Learn#Getting_our_code_examples">examples repository</a> をクローンしているようなら、必要な <em>javascript/apis/third-party-apis/mapquest</em> を見つけてコピーしてください。</p>
 </li>
 <li>
  <p>次に <a href="https://developer.mapquest.com/">Mapquest developer site</a>に行ってください。アカウントを作り、デベロッパーキーを使用してあなたのサンプルに利用してください。(アカウント作成時、デベロッパーキーは "consumer key" と呼ばれています。そして、"callback URL" を尋ねられると思いますが、その入力欄は空欄でかまいません)</p>
 </li>
 <li>starting fileを開き、APIキーのプレスホルダーにあなたのキーを入力してください。</li>
</ol>

<h3 id="地図の種類を変更する">地図の種類を変更する</h3>

<p>Mapquest API で表示できるマップには、さまざまな種類があります。 これを行うには、次の行を見つけます。</p>

<pre class="brush: js notranslate">layers: L.mapquest.tileLayer('map')</pre>

<p>hybrid-style map にするために <code>'map'</code> を <code>'hybrid'</code> に変えてみてください。他にも様々な値があります。<a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-tile-layer/"><code>tileLayer</code> reference page</a> には使える様々なオプションや情報が載っています。</p>

<h3 id="さまざまなコントロールを追加する">さまざまなコントロールを追加する</h3>

<p>この地図には様々な機能を実装できますが、デフォルトでは、ズームコントロールのみが表示されます。<code>map.addControl()</code> メソッドを使うことで機能を拡張することが出来ます。以下のコードを<code>window.onload</code>ハンドラーに追加してみてください。</p>

<pre class="brush: js notranslate">map.addControl(L.mapquest.control());</pre>

<p><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-control/"><code>mapquest.control()</code></a> メソッドは、単純なフル機能のコントロールセットを作成するだけで、デフォルトでは右上隅に配置されます。<code>position</code> プロパティを含むコントロールのパラメータとしてオプションオブジェクトを指定することで、位置を調整することができます。例えば、次のようにしてみてください。</p>

<pre class="brush: js notranslate">  map.addControl(L.mapquest.control({ position: 'bottomright' }));</pre>

<p>他にも、<code><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-search-control/">mapquest.searchControl()</a></code> や <code><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-satellite-control/">mapquest.satelliteControl()</a></code> など、利用可能なコントロールの種類があり、中には非常に複雑で強力なものもあります。実際に遊んでみて、何ができるか見てみましょう。</p>

<h3 id="カスタムマーカーを追加する">カスタムマーカーを追加する</h3>

<p>マップ上の特定のポイントにマーカー (アイコン) を追加するのは簡単です。<code><a href="https://leafletjs.com/reference-1.3.0.html#marker">L.marker()</a></code> メソッドを使用するだけです (関連する Leaflet.js のドキュメントに記載されているようです)。次のコードを <code>window.onload</code> に追加します。</p>

<pre class="brush: js notranslate">L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'A'
  })
})
.bindPopup('This is Manchester!')
.addTo(map);</pre>

<p>ご覧のように、最もシンプルな方法では、2 つのパラメータを取ります。マーカーを表示する座標を含む配列と、その時点で表示するアイコンを定義する <code>icon</code> プロパティを含むオプションオブジェクトです。</p>

<p>アイコンは、<code><a href="https://developer.mapquest.com/documentation/mapquest-js/v1.3/l-mapquest-icons/">mapquest.icons.marker()</a></code> メソッドを使用して定義され、ご覧のようにマーカーの色やサイズなどの情報が含まれています。</p>

<p>最初のメソッド呼び出しの最後に <code>.bindPopup('This is Manchester!')</code> を連鎖させ、マーカーがクリックされたときに表示されるコンテンツを定義します。</p>

<p>最後に、<code>.addTo(map)</code> を連鎖させて、実際にマーカーをマップに追加します。</p>

<p>ドキュメントに記載されているその他のオプションを試してみて、何ができるか見てみましょう。Mapquest には、道案内や検索など、かなり高度な機能があります。</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: サンプルがうまく動作しない場合は、完成版のコードをチェックしてみてください。<a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/mapquest/expanded-example.html">expanded-example.html</a> を参照してください (<a href="https://mdn.github.io/learning-area/javascript/apis/third-party-apis/mapquest/expanded-example.html">ここでライブで実行しているのも見てください</a>)。</p>
</div>

<h2 id="Google_マップはどうですか？">Google マップはどうですか？</h2>

<p>Google Maps は間違いなく最も人気のある地図 API です。使用方法を示すために<a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/google-maps/finished-maps-example.html">例を作成しました</a>が、最終的にはいくつかの理由から Mapquest を使用しました：</p>

<ul>
 <li>使い始めるのがはるかに簡単だからです。一般的な Google API の場合、Google アカウントを作成して <a href="https://console.cloud.google.com">Google Cloud Platform Console</a> にログインして API キーなどを作成する必要があり、そのプロセスはかなり複雑です。特に <a href="https://cloud.google.com/maps-platform/">Google Maps API</a> の場合は、課金目的でクレジットカードを提供する必要があり (基本的な利用は無料ですが)、基本的なチュートリアルとしては受け入れられないと思いました。</li>
 <li>他にも選択肢があることを示したかったのです。</li>
</ul>

<h2 id="RESTful_API_—_NYTimes">RESTful API — NYTimes</h2>

<p>では、もう一つのAPIの例を見てみましょう — <a href="https://developer.nytimes.com/">New York Times API</a> です。この API を使用すると、New York Times のニュースストーリー情報を取得して、サイトに表示することができます。このタイプの API は <strong>RESTful API</strong> として知られています。Mapquest で行ったように JavaScript ライブラリーの機能を使用してデータを取得するのではなく、特定の URL にHTTP リクエストを行い、検索語やその他のプロパティのようなデータを URL 内にエンコードしてデータを取得します (多くの場合、URL パラメーターとして)。これは、API でよく見られるパターンです。</p>

<h2 id="サードパーティAPIを利用するためのアプローチ">サードパーティAPIを利用するためのアプローチ</h2>

<p>以下では、NYTimes API の使用方法を示すエクササイズを紹介しますが、新しい API を使用するためのアプローチとして、より一般的なステップのセットを提供します。</p>

<h3 id="ドキュメントを探す">ドキュメントを探す</h3>

<p>サードパーティの API を利用したい場合、その API がどのような機能を持っているのか、どのように利用するのかなどを知るために、ドキュメントがどこにあるのかを知ることは欠かせません。New York Times API のドキュメントは <a href="https://developer.nytimes.com/">https://developer.nytimes.com/</a> にあります。</p>

<h3 id="開発者キーを取得">開発者キーを取得</h3>

<p>ほとんどの API では、セキュリティと説明責任のために、何らかの開発者キー使用する必要があります。NYTimes API キーの登録には、<a href="https://developer.nytimes.com/get-started">https://developer.nytimes.com/get-started</a> の指示に従ってください。</p>

<ol>
 <li>
  <p>記事検索 API のキーを要求してみよう — 新規アプリを作成し、これを利用したい API として選択します (名前と説明を記入し、「記事検索 API 」の下のスイッチをオンに切り替えて「作成」をクリックします)。</p>
 </li>
 <li>
  <p>結果のページから API キーを取得します。</p>
 </li>
 <li>
  <p>さて、例題を始めるために、<a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes_start.html">nytimes_start.html</a> と <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/nytimes.css">nytimes.css</a> のコピーをコンピュータ上の新しいディレクトリに作成してください。すでに <a href="/ja/docs/Learn#Getting_our_code_examples">examples リポジトリをクローン</a>している場合は、<em>javascript/apis/third-party-apis/nytimes</em> ディレクトリにあるこれらのファイルのコピーをすでに持っているでしょう。最初に <code>&lt;script&gt;</code> 要素には、例のセットアップに必要な変数がいくつか含まれています。</p>
 </li>
</ol>

<p>このアプリは、検索用語とオプションの開始日と終了日を入力することを可能にし、Article Search API をクエリして検索結果を表示するために使用します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14821/nytimes-search.png" style="border-style: solid; border-width: 1px; display: block; height: 374px; margin: 0px auto; width: 700px;"></p>

<h3 id="API_をアプリに接続する">API をアプリに接続する</h3>

<p>まず、API とアプリ間の接続を行う必要があります。この API の場合、サービスから正しい URL でデータを要求するたびに、API キーを<a href="/ja/docs/Web/HTTP/Methods/GET">取得</a>パラメーターとして含める必要があります。</p>

<ol>
 <li>
  <p>次の行を探します。</p>

  <pre class="brush: js notranslate">let key = ' ... ';</pre>

  <p>既存の API キーを、前のセクションで取得した実際の API キーに置き換えます。</p>

  <p>JavaScriptに次の行を追加してください。<code>// Event listeners to control the functionality</code> コメントの下に、次の行を追加します。これは、フォームが送信されたとき (ボタンが押されたとき) に submitSearch() という関数を実行します。</p>

  <pre class="brush: js notranslate">searchForm.addEventListener('submit', submitSearch);</pre>
 </li>
 <li>
  <p>前の行の下に submitSearch() と fetchResults() 関数の定義を追加します。</p>

  <pre class="brush: js notranslate">function submitSearch(e) {
  pageNumber = 0;
  fetchResults(e);
}

function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault();

  // Assemble the full URL
  url = baseURL + '?api-key=' + key + '&amp;page=' + pageNumber + '&amp;q=' + searchTerm.value <span class="blob-code-inner"><span class="pl-s1"><span class="pl-k x">+</span><span class="x"> </span><span class="pl-s"><span class="pl-pds x">'</span><span class="x">&amp;fq=document_type:("article")</span><span class="pl-pds x x-last">'</span></span></span></span>;

  if(startDate.value !== '') {
    url += '&amp;begin_date=' + startDate.value;
  };

  if(endDate.value !== '') {
    url += '&amp;end_date=' + endDate.value;
  };

}</pre>
 </li>
</ol>

<p><code>submitSearch()</code> は最初にページ番号を 0 に戻してから <code>fetchResults()</code> を呼び出します。これは最初にイベントオブジェクトの <code>preventDefault()</code> を呼び出し、フォームが実際に送信されるのを止めるためです (これでは例が壊れてしまいます)。次に、文字列を操作してリクエスト先の完全な URL を組み立てます。このデモで必須と思われる部分を組み立てることから始めます。</p>

<ul>
 <li>ベース URL (<code>baseURL</code> 変数から取得)。</li>
 <li>API キー。これは <code>api-key</code> URL パラメーターで指定する必要があります (値は key 変数から取得されます)。</li>
 <li>ページ番号。これは <code>page</code> URL パラメーターで指定する必要があります (値は <code>pageNumber</code> 変数から取得されます)。</li>
 <li><code>q</code> URL パラメーターで指定しなければならない検索語 (値は <code>searchTerm</code> テキスト {{htmlelement("input")}} の値から取得されます)。</li>
 <li><code>fq</code> URL パラメーターで渡された式で指定された、結果を返すドキュメントの種類。この例では、記事を返したいとします。</li>
</ul>

<p>次に、いくつかの <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/if...else">if()</a></code> ステートメントを使用して、<code>startDate</code> と <code>endDate</code> <code>&lt;input&gt;</code> に値が入力されているかどうかをチェックします。記入されている場合は、それぞれ <code>begin_date</code> と <code>end_date</code> の URL パラメーターで指定された値を URL に追加します。</p>

<p>そのため、完全な URL は次のような形になってしまいます。</p>

<pre class="notranslate">https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YOUR-API-KEY-HERE&amp;page=0&amp;q=cats
&amp;<span class="blob-code-inner"><span class="pl-s1"><span class="pl-s"><span class="x">fq=document_type:("article")</span></span></span></span>&amp;begin_date=20170301&amp;end_date=20170312</pre>

<div class="note">
<p><strong>Note</strong>: どのようなURLパラメーターを含めることができるかについての詳細は、<a href="https://developer.nytimes.com/">NYTimes developer docs</a> を参照してください。</p>
</div>

<div class="note">
<p><strong>Note</strong>: この例では初歩的なフォームデータの検証を行っています — 検索語フィールドは、フォームを送信する前に入力しなければなりません (<code>required</code> 属性を使用して達成されます)。日付フィールドには <code>pattern</code> 属性が指定されており、値が 8 個の数字 (<code>pattern="[0-9]{8}"</code>) で構成されていないと送信されません。これらがどのように機能するかについての詳細は <a href="/ja/docs/Learn/HTML/Forms/Form_validation">Form data validation</a> を参照してください。</p>
</div>

<h3 id="API_からデータを要求する">API からデータを要求する</h3>

<p>これで URL を作成したので、それにリクエストしてみましょう。これは <a href="/ja/docs/Web/API/Fetch_API/Using_Fetch">Fetch API</a> を使って行います。</p>

<p>以下のコードブロックを <code>fetchResults()</code> 関数の中に追加します：</p>

<pre class="brush: js notranslate">// Use fetch() to make the request to the API
fetch(url).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});</pre>

<p>ここでは、<code>url</code> 変数を <code><a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch()</a></code> に渡してリクエストを実行し、<code><a href="/ja/docs/Web/API/Response/json">json()</a></code> 関数を使用してレスポンスボディを JSON に変換し、結果の JSON を <code>displayResults()</code> 関数に渡して、データを UI に表示できるようにします。</p>

<h3 id="データを表示する">データを表示する</h3>

<p>それでは、データを表示する方法を見てみましょう。 <code>fetchResults()</code> 関数の下に以下の関数を追加します。</p>

<pre class="brush: js notranslate">function displayResults(json) {
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }

  const articles = json.response.docs;

  if(articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }

  if(articles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No results returned.'
    section.appendChild(para);
  } else {
    for(var i = 0; i &lt; articles.length; i++) {
      const article = document.createElement('article');
      const heading = document.createElement('h2');
      const link = document.createElement('a');
      const img = document.createElement('img');
      const para1 = document.createElement('p');
      const para2 = document.createElement('p');
      const clearfix = document.createElement('div');

      let current = articles[i];
      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.<span class="blob-code-inner"><span class="pl-s1"><span class="pl-smi x x-first x-last">snippet</span></span></span>;
      para2.textContent = 'Keywords: ';
      for(let j = 0; j &lt; current.keywords.length; j++) {
        const span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para2.appendChild(span);
      }

      if(current.multimedia.length &gt; 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class','clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}</pre>

<p>ここにはたくさんのコードがあります：</p>

<ul>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/while">while</a></code> ループは、DOM 要素のすべてのコンテンツを削除するために使われる一般的なパターンで、この場合は {{htmlelement("section")}} 要素です。私たちは <code>&lt;section&gt;</code> に最初の子があるかどうかをチェックし続け、ある場合は最初の子を削除します。ループは <code>&lt;section&gt;</code> に子がいなくなった時点で終了します。</li>
 <li>次に、<code>articles</code> 変数を <code>json.response.docs</code> と等しくなるように設定します — これは検索によって返された記事を表すすべてのオブジェクトを保持する配列です。これは、以下のコードを少しシンプルにするために行われています。</li>
 <li>最初の <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/if...else">if()</a></code> ブロックは、10 個の記事が返されるかどうかをチェックします ( API は一度に10個までの記事を返します。) もし返された場合、前の10個 / 次の10個のページネーションボタンを含む {{htmlelement("nav")}} を表示します。10記事未満の記事が返された場合、それらはすべて 1 ページに収まるので、ページ分割ボタンを表示する必要はありません。次のセクションでは、ページ分割機能の配線を行います。</li>
 <li>次の <code>if()</code> ブロックは記事が返ってこないかどうかをチェックします。もしそうならば、何も表示しようとしません — "No results returned." というテキストを含む {{htmlelement("p")}} を作成して、それを <code>&lt;section&gt;</code> に挿入します。</li>
 <li>いくつかの記事が返された場合、私たちはまず、それぞれのニュース記事を表示するために使用したいすべての要素を作成し、それぞれに適切なコンテンツを挿入し、適切な場所で DOM に挿入します。記事オブジェクトのどのプロパティに表示すべき正しいデータが含まれているかを調べるために、Article Search API リファレンスを参照しました (<a href="https://developer.nytimes.com/apis">NYTimes APIs</a>)。これらの操作のほとんどはかなり明白ですが、いくつかは呼び出す価値があります：
  <ul>
   <li>私たちは <a href="/ja/docs/Web/JavaScript/Reference/Statements/for">for loop</a> を使用しました (<code>for(var j = 0; j &lt; current.keywords.length; j++) { ... }</code>) を使って、それぞれの記事に関連するすべてのキーワードをループさせ、それぞれのキーワードを {{htmlelement("span")}} に挿入し、<code>&lt;p&gt;</code> の中に入れています。これは、それぞれの記事のスタイルを簡単にするために行われました。</li>
   <li><code>if()</code> ブロック ( <code>if(current.multimedia.length &gt; 0) { ... }</code>) を使って、各記事に関連する画像があるかどうかをチェックしています (記事によってはないものもあります)。</li>
   <li><code>&lt;div&gt;</code> 要素に "clearfix" というクラスを与えたので、簡単にクリアリングを適用することができます。</li>
  </ul>
 </li>
</ul>

<h3 id="ページネーションボタンの配線">ページネーションボタンの配線</h3>

<p>ページ分割ボタンを動作させるために、<code>pageNumber</code> 変数の値をインクリメント (またはデクリメント) し、ページ URL パラメーターに含まれる新しい値でフェッチリクエストを再実行します。これは、NYTimes API が一度に 10 件の結果しか返さないからです — 10 件以上の結果が利用可能な場合、<code>page</code> URL パラメーターが 0 に設定されている場合は最初の 10 (0-9) を (または全く含まれない — 0 がデフォルト値です。) 1 に設定されている場合は次の 10 (10-19) を返します。</p>

<p>これにより、単純なページネーション関数を簡単に書くことができるようになりました。</p>

<ol>
 <li>
  <p>既存の <code><a href="/ja/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> コールの下に、関連するボタンがクリックされたときに <code>nextPage()</code> および <code>previousPage()</code> 関数が呼び出されるように、これら 2 つの新しいものを追加します：</p>

  <pre class="brush: js notranslate">nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);</pre>
 </li>
 <li>
  <p>前回の追加の下に、2 つの関数を定義してみましょう — 今すぐこのコードを追加します：</p>

  <pre class="brush: js notranslate">function nextPage(e) {
  pageNumber++;
  fetchResults(e);
};

function previousPage(e) {
  if(pageNumber &gt; 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
};</pre>

  <p>最初の関数は単純で、変数 <code>pageNumber</code> をインクリメントしてから、次のページの結果を表示するために <code>fetchResults()</code> 関数を再度実行します。</p>

  <p>2 番目の関数は逆の方法でほぼ正確に同じように動作しますが、<code>pageNumber</code> がすでに 0 ではないことを確認するという余分なステップを踏まなければなりません — もしフェッチリクエストがマイナスの <code>page</code> パラメーターで実行された場合、エラーを引き起こす可能性があります。もし <code>pageNumber</code> がすでに 0 であれば、処理能力を無駄にしないように、単に関数から <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/return">return</a></code> します (すでに最初のページにいるのであれば、同じ結果を再び読み込む必要はありません)。</p>
 </li>
</ol>

<div class="blockIndicator note">
<p><strong>Note</strong>: 完成した <a href="https://github.com/mdn/learning-area/blob/master/javascript/apis/third-party-apis/nytimes/index.html">nytimes API のサンプルコードは GitHub で見ることができます</a> (<a href="https://mdn.github.io/learning-area/javascript/apis/third-party-apis/nytimes/">ここでもライブで動作しています</a>) 。</p>
</div>

<h2 id="YouTube_の例">YouTube の例</h2>

<p>また、<a href="https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube">YouTube video search example</a> をご覧ください。これは 2 つの関連する API を使用しています。</p>

<ul>
 <li>YouTube の動画を検索して結果を返す <a href="https://developers.google.com/youtube/v3/docs/">YouTube Data API</a>。</li>
 <li>返された動画の例を IFrame ビデオプレーヤー内に表示して視聴できるようにするための <a href="https://developers.google.com/youtube/iframe_api_reference">YouTube IFrame Player API</a> です。</li>
</ul>

<p>この例は、2つの関連するサードパーティ API を一緒に使用してアプリを構築していることを示しているので興味深いです。1 つ目は RESTful API で、2 つ目は Mapquest のように動作します (API 固有のメソッドなどがあります)。ただし、どちらの API もページに適用するために JavaScript ライブラリを必要とする点は注目に値します。RESTful API には、HTTP リクエストを行い、結果を返すための関数が用意されています。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14823/youtube-example.png" style="border-style: solid; border-width: 1px; display: block; height: 389px; margin: 0px auto; width: 700px;"></p>

<p>この例については、記事の中ではあまり多くを語るつもりはありません。<a href="https://github.com/mdn/learning-area/tree/master/javascript/apis/third-party-apis/youtube">ソースコード</a>には、それがどのように動作するかを説明するために、その中に詳細なコメントが挿入されています。</p>

<p>稼動させるために必要です：</p>

<ul>
 <li><a href="https://cloud.google.com/">Google Cloud</a> から API キーを取得します。</li>
 <li>ソースコードから <code>ENTER-API-KEY-HERE</code> という文字列を見つけ、それを API キーに置き換えます。</li>
 <li>ウェブサーバー経由でサンプルを実行します。ブラウザーで直接実行した場合 (つまり <code>file://</code> URL を経由した場合) は動作しません。</li>
</ul>

<h2 id="まとめ">まとめ</h2>

<p>この記事では、サードパーティ API を使用してウェブサイトに機能を追加するための便利な方法を紹介しました。</p>

<p>{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs/Drawing_graphics", "Learn/JavaScript/Client-side_web_APIs")}}</p>

<h2 id="このモジュール">このモジュール</h2>

<div>
<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">Web API の紹介</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents">ドキュメントの操作</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">サーバーからのデータ取得</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs">サードパーティ API</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics">グラフィックの描画</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs">動画と音声の API</a></li>
 <li><a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage">クライアント側ストレージ</a></li>
</ul>
</div>
