---
title: Service worker の使用
slug: Web/API/Service_Worker_API/Using_Service_Workers
tags:
  - Guide
  - Service
  - ServiceWorker
  - Workers
  - basics
translation_of: Web/API/Service_Worker_API/Using_Service_Workers
---
<p>{{ServiceWorkerSidebar}}</p>

<div class="summary">
<p>この記事は Service worker を使い始めるための情報を提供するページです。基本的な構造、Service worker の登録、新しい Service worker のインストールと有効化のプロセス、Service worker の更新、キャッシュや応答の操作を含めた、オフラインで動作するシンプルなアプリケーションの機能についてです。</p>
</div>

<h2 id="The_premise_of_service_workers" name="The_premise_of_service_workers">Service workerの前提条件</h2>

<p>ウェブユーザーが長年苦しめられてきた主要な問題の一つは、接続を失うことです。世界中の最高のウェブアプリは、ダウンロードできないときの使い勝手が最悪でした。この問題を解決するために様々な技術の開発が試みられ、私たちの<a href="/ja/Apps/Build/Offline">オフライン</a>ページが示すように、いくつかの問題は解決済みです。しかし、資産のキャッシュとネットワーク要求を全てコントロールする良いメカニズムはまだ存在しません。</p>

<p>以前の取組み - <a href="/ja/docs/Web/HTML/Using_the_application_cache">AppCache</a> - は、キャッシュする資産をとても簡単に指定することが可能になるため、良いアイデアに見えました。しかしながら、 AppCache には利用において数多くの取り決めがあり、アプリケーションが完全に取り決めに従わない場合は壊れてしまいました。さらに詳しいことは Jake Archibald の <a href="http://alistapart.com/article/application-cache-is-a-douchebag">Application Cache is a Douchebag</a> にをお読みください。</p>

<div class="note">
<p><strong>メモ</strong>: Firefox 44 で <a href="/ja/docs/Web/HTML/Using_the_application_cache">AppCache</a> がページのオフラインサポートを提供するために使用しようとすると、コンソールに警告メッセージが表示され、代わりに<a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers"> Service worker</a> を使うように開発者にアドバイスするようになりました ({{bug("1204581")}})。</p>
</div>

<p>Service worker は最終的にこれらの問題を解決するでしょう。Service workerの構文は AppCache の構文と比べて複雑です。しかし、代わりに JavaScript を使用して AppCache で動作させていたような振る舞いをより細かく制御し、この問題やその他の多くのことを扱うことができるようになります。Service workerを使用することで、アプリケーションがはじめにキャッシュされた資産を使用するよう簡単に設定することができます。そのため、一度ネットワークからデータを取得しておけば、オフラインでも既定の機能を提供できます (<a href="http://offlinefirst.org/">オフラインファースト</a>として一般的に知られています)。このようなオフラインの機能はネイティブアプリでは既に使用可能であり、ネイティブアプリがウェブアプリを差し置いて選ばれる理由の一つです。</p>

<h2 id="Setting_up_to_play_with_service_workers" name="Setting_up_to_play_with_service_workers">Service worker を始めるための設定</h2>

<p>多くの Service worker の機能は、それらに対応しているブラウザーの最新版ではじめから利用できるようになっています。もしデモコードがあなたの環境で動作しない場合は、以下のいずれかの設定を行い、有効化してください。</p>

<ul>
 <li><strong>Firefox Nightly</strong>: about:config の画面で dom.serviceWorkers.enabled を true に設定し、ブラウザーを再起動してください。</li>
 <li><strong>Chrome Canary</strong>: chrome://flags の画面で experimental-web-platform-features を有効にし、ブラウザーを再起動してください（現在いくつかの機能はChromeでははじめから有効になっています）。</li>
 <li><strong>Opera</strong>: opera://flags の画面で Support for ServiceWorker を有効にし、ブラウザーを再起動してください。</li>
 <li><strong>Microsoft Edge</strong>: <code>about:flags</code> の画面で <code>Enable service workers</code> にチェックを入れ、ブラウザーを再起動してください。</li>
</ul>

<p>また、コードは HTTPS を通して提供する必要があります。 — Service worker はセキュリティ上の理由から HTTPS を通して実行されるよう制限されています。そのため、 GitHub は HTTPS に対応しているので、実験を行うのによい場所です。ローカルでの開発を行うために、 <code>localhost</code> もブラウザーから安全なオリジンとみなされます。</p>

<h2 id="Basic_architecture" name="Basic_architecture">基本構造</h2>

<p>Service worker では、基本的なセットアップの際に下記のステップが一般的に見られます。</p>

<ol>
 <li>Service worker の URL が呼び出され、 {{ domxref("serviceWorker.register()")}} を通して登録されます。</li>
 <li>成功した場合、Service worker は {{domxref("ServiceWorkerGlobalScope") }} で実行されます。これは根本的に特殊な worker コンテクストで、メインスレッドから独立しており、 DOM へのアクセスもありません。</li>
 <li>Service worker はイベントの処理ができる状態になりました。</li>
 <li>Service worker にコントロールされたページが今後アクセスされた時、worker のインストールが試みられます。インストールのイベントは常に最初に Service worker へ送られます（このイベントは IndexedDB の設定やサイト資産のキャッシュに使用することができます）。これはネイティブアプリや Firefox OS アプリのインストールと全く同じ種類 - 全てをオフラインで使用できるようにするための - の処理です。</li>
 <li><code>oninstall</code> ハンドラーが完了すると、Service worker はインストールされたと考えられます。</li>
 <li>次のステップは有効化です。Service worker がインストールされると、次に有効化イベントを受け取ります。 <code>onactivate</code> の基本的な使用法は、以前のバージョンの Service worker スクリプトで使用したリソースのクリーンアップです。</li>
 <li>現在サービスワーカーはページを制御しているでしょう。しかし <code>register()</code> が成功した後に開かれたページのみです。例えば、文書は Service worker があろうとなかろうと実行され、実行されている間はその状態を保ちます。つまり、文書が実際に制御されるには、リロードされる必要があるでしょう。</li>
</ol>

<p><img alt="" src="https://mdn.mozillademos.org/files/12636/sw-lifecycle.png" style="display: block; height: 867px; margin: 0px auto; width: 579px;"></p>

<p>以下の図は、利用可能な Service worker のイベントの概要を示しています。</p>

<p><img alt="インストール、起動、メッセージ、フェッチ、同期、プッシュ" src="https://mdn.mozillademos.org/files/12632/sw-events.png" style="display: block; margin: 0px auto;"></p>

<h3 id="Promises" name="Promises">Promise</h3>

<p><a href="/ja-JP/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> は複数の非同期の動作を実行する優れたメカニズムです。Service worker の働き方の中心となっています。<br>
  </p>

<p>Promise は多く機能を持ちますが、ここでは何かが Promise を返したとき、末尾に <code>.then()</code> を繋げることによって、成功時や失敗時に呼ばれるコールバック関数を指定できること、そして失敗時に呼ばれるコールバック関数は最後に <code>.catch()</code> を挿入することで指定できること、この 2 つを知っておけば十分です。</p>

<p>昔ながらの同期的なコールバック構造と、それに相当する非同期的な promise を比較してみましょう。</p>

<h4 id="sync">sync</h4>

<pre class="brush: js">try {
  var value = myFunction();
  console.log(value);
} catch(err) {
  console.log(err);
}</pre>

<h4 id="async">async</h4>

<pre class="brush: js">myFunction().then(function(value) {
  console.log(value);
}).catch(function(err) {
  console.log(err);
});</pre>

<p>初めの例では、私たちはほかのコードが実行できるようになる前に、 <code>myFunction()</code> が実行され、 <code>value</code> が返るのを待たなくてはなりません。２つ目の例では、 <code>myFunction()</code> は <code>value</code> に <code>promise</code> を返し、残りのコードも実行に移すことができます。 <code>promise</code> が解決されるとき、 <code>then</code> の中のコードが非同期的に実行されます。<br>
 <br>
 それでは実例を - 動的に画像を読み込みたい、しかし表示しようとする以前の段階で読み込みが終了していることを確実にしたいときはどうするのでしょう。これは私たちがしたい標準的なことですが、少しの痛みとなることもあります。読み込まれた後に表示するためだけなら私たちは <code>.onload</code> を使用することができます。しかし私たちがリッスンするより前に起こり始めたイベントはどうなるのでしょう。私たちは <code>.complete</code> を使うこともできたでしょう。しかしそれはまだfoolproofではありません。複数の画像のときはどうするのでしょう。そしてそれは同期的に行われるため、メインスレッドをブロックしてしまいます。<br>
 <br>
 代わりに、私たちはこのようなケースを操作するための独自の promise を作成することができます (<a href="https://github.com/mdn/promises-test">Promise テスト</a>の例のソースコードを見てください)。</p>

<p>{{note("実際の Service worker の導入では非推奨の XMLHttpRequest API よりもキャッシュと onfetch が使われるでしょう。 Promise の理解に集中できるようにそれらの機能はここでは使用されていません。")}}</p>

<pre class="brush: js">function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    request.send();
  });
}</pre>

<p>私たちは <code>resolve</code> と <code>reject</code> を引数に持つコールバック関数を引数にとる <code>Promise()</code> コンストラクタを使用して新しい <code>promise</code> を返します。この関数のどこかで、何が起きた時に成功とするか、また何が起きた時に失敗とするか - このケースでは 200 OK のステータスが返るかどうか - を定義し、成功時には <code>resolve</code> を、失敗時には <code>reject</code> を呼ぶ必要があります。関数内の残りの要素は、標準的な XHR のものですので、今は気にする必要はありません。</p>

<p>imgLoad() を呼ぶときは、私たちが期待している通り、読み込みたい画像への URL を一緒に呼ばなくてはなりません。しかし残りのコードは、少し異なります。</p>

<pre class="brush: js">var body = document.querySelector('body');
var myImage = new Image();

imgLoad('myLittleVader.jpg').then(function(response) {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});</pre>

<p>関数呼び出しの末尾に、二つの関数を持つ <code>then()</code> メソッドをつなげています。一つ目の関数は <code>promise</code> が成功として <code>resolve</code> されたときに実行されます。二つ目の関数は <code>promise</code> が失敗したときに呼び出されます。成功のケースでは、 <code>myImage</code> の中で画像を表示して、 body に付け加えています (この引数は <code>promise</code> の中の <code>resolve</code> メソッドに含まれる <code>request.response</code> です)。失敗のケースではコンソールにエラーを返しています。</p>

<p>これらはすべて非同期的に起こります。</p>

<div class="note">
<p><strong>メモ</strong>: 次のように promise の呼び出しを互いにつなげていくこともできます。<br>
 <code>myPromise().then(success, failure).then(success).catch(failure);</code></p>
</div>

<div class="note">
<p><strong>メモ</strong>: Jake Archibald の素晴らしい <a href="http://www.html5rocks.com/en/tutorials/es6/promises/">JavaScript Promises: there and back again</a> を読むことで promise についてのより多くの発見をすることができます。</p>
</div>

<h2 id="Service_workers_demo" name="Service_workers_demo">Service worker のデモ</h2>

<p>サービスワーカーの登録とインストールについてのとても基本的なデモンストレーションをするために、私たちは <a href="https://github.com/mdn/sw-test">sw-test</a> という、スターウォーズのレゴの画像を表示するシンプルなデモを作成しました。このデモでは、 JSON オブジェクトから画像データを取得し、 Ajax を使用してページの下の行にある画像が表示される前に画像を読み込むために、 Promise を活用した関数を使用しています。私たちは今のところ物事を固定的でシンプルに保っています。デモはまたサービスワーカーを登録し、インストールし、有効化します。そしてブラウザーがサポートしているときは必要なすべてのファイルをキャッシュし、オフラインで動作するでしょう。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/8243/demo-screenshot.png" style="display: block; height: 410px; margin: 0px auto; width: 480px;"><br>
 <br>
 <br>
 <a href="https://github.com/mdn/sw-test/">GitHub でソースコード</a>を見ることができます。また<a href="https://mdn.github.io/sw-test/">サンプルの動き</a>も見ることができます。私たちがここで強調したいことの一つは Promise です (<a href="https://github.com/mdn/sw-test/blob/gh-pages/app.js#L17-L42">app.js の17-42行目</a>を見てください)。上のほうで見た <a href="https://github.com/mdn/promises-test">Promise のテストデモ</a>のコードを修正したものです。下記の部分が異なっています。</p>

<ol>
 <li>オリジナルでは、ほしい画像を読み込むための URL を渡しているだけですが、今回のバージョンでは、一つの画像の全ての情報を含む JSON を渡しています（JSON がどのような形かは <a href="https://github.com/mdn/sw-test/blob/gh-pages/image-list.js">image-list.js</a> を見てください）。これはそれぞれの Promise が resolve するすべてのデータが、非同期で動作するためには、 Promise とともに渡されなければならないためです。もし URL のみを渡し、 <code>for()</code> ループの中で後から JSON に含まれるほかの要素にアクセスしようとすると、 Promise が <code>for()</code> ループの進行と同時に resolve を返さないため、うまく動作しないでしょう (これは同期的な処理になります)。</li>
 <li>配列とともに Promise は resolve されます。 resolve 後の関数で読み込まれた画像の Blob、画像名、クレジットや alt テキストを利用可能にするためです (<a href="https://github.com/mdn/sw-test/blob/gh-pages/app.js#L26-L29">app.js の26-29行目</a>を見てください)。 Promise は一つの引数のみで resolve するので、もし複数の値とともに resolve したい場合は、配列かオブジェクトを使用する必要があります。</li>
 <li>resolve された Promise の値にアクセスするためには、 then が期待する関数を使用します (<a href="https://github.com/mdn/sw-test/blob/gh-pages/app.js#L55-L59">app.js の55-59</a>行目を見てください）。初めは少し奇妙に見えるでしょうが、これが Promise の動き方です。</li>
</ol>

<h2 id="Enter_service_workers" name="Enter_service_workers">Service worker に入る</h2>

<p>サービスワーカーを取得してみましょう!</p>

<h3 id="Registering_your_worker" name="Registering_your_worker">worker を登録する</h3>

<p>私たちのアプリの JavaScript ファイル— app.js —の最初のブロックは次の通りです。これは service worker を使用するエントリーポイントです。</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/sw-test/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}</pre>

<ol>
 <li>外側のブロックは、登録を試みる前にサービスワーカーがサポートされているか確認する機能検出試験を行います。</li>
 <li>次に、アプリ内にある単なる JavaScript ファイルであるサービスワーカーを、 {{domxref("ServiceWorkerContainer.register()") }} 関数を使って、このサイトに登録します (なお、これはオリジンからのファイルの URL であって、 JS ファイルの参照ではありません)。</li>
 <li><code>scope</code> 引数はオプションで、サービスワーカーが制御するコンテンツのサブセットを指定するために使用できます。このケースでは、<code>'/sw-test/'</code> を指定しており、アプリのオリジン配下のすべてのコンテンツを意味しています。もしこれを指定しなくてもこの値が既定値になりますが、指定方法を示すために使用しています。</li>
 <li>promise の構造に成功時の処理をチェーンするために、 <code>.then()</code> promise 関数を使用しています。 promise が成功裡に解決されたとき、内部のコードが実行されます。</li>
 <li>最後に promise が拒否されたときに実行される <code>.catch()</code> 関数をチェーンします。</li>
</ol>

<p>これは、 worker コンテクストで実行される Service worker を登録しているため、 DOM アクセスは含まれていません。続いて、通常ページの外側の Service worker でロードを制御するためにコードを実行します。</p>

<p>1つの Service worker で、複数のページを制御できます。スコープ内のページがロードされるたび、Service worker はそのページにインストールされて動作します。そのため、Service worker スクリプト内でのグローバル変数の扱いには注意が必要だということを心にとどめておいてください。各ページは独自の worker を持ちません。</p>

<div class="note">
<p><strong>メモ</strong>: サービスワーカー関数は、プロキシサーバーのように要求と応答を書き換えたり、キャッシュからの項目で置き換えたり、さまざまなことができます。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: Service worker の良いところは、以上で見てきたような機能の検出をすることで、Service worker に対応していないブラウザーでもオンラインで期待通りの流儀でアプリを使用することができることです。さらに、同一のページで AppCache と Service worker を使用すると、Service workerに対応していないが AppCache に対応しているブラウザーは AppCache を使用し、両方に対応しているブラウザーは AppCache を無視して Service worker を優先させることができます。</p>
</div>

<h4 id="Why_is_my_service_worker_failing_to_register" name="Why_is_my_service_worker_failing_to_register">Service worker の登録に失敗する理由</h4>

<p>次の可能性が考えられます。</p>

<ol>
 <li>HTTPS を使用してアプリケーションを実行していない。</li>
 <li>Service worker ファイルへのパスが正しく書かれていない。 — アプリのルートディレクトリではなく、アプリのオリジンからの相対パスで書く必要があります。上記の例では、worker が <code>https://mdn.github.io/sw-test/sw.js</code> にあり、アプリのルートは <code>https://mdn.github.io/sw-test/</code> です。しかし、パスは <code>/sw-test/sw.js</code> と書く必要があり、 <code>/sw.js</code> ではありません。</li>
 <li>指定されている Service worker がアプリとは異なるオリジンにある。これは許可されていません。</li>
</ol>

<p><img alt="" src="https://mdn.mozillademos.org/files/12630/important-notes.png" style="display: block; height: 277px; margin: 0px auto; width: 574px;"></p>

<p>他のメモです。</p>

<ul>
 <li>Service worker は Service worker のスコープ内にあるクライアントからの要求のみを取得します。</li>
 <li>Service worker の最大スコープは、worker のある場所です。</li>
 <li>Service worker が <code>Service-Worker-Allowed</code> ヘッダーから提供されたクライアント上で起動する場合、その worker の最大スコープのリストを指定することができます。</li>
 <li>Firefox では、ユーザーが<a href="https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history">プライベートブラウジングモード</a>にいるときは、Service worker API は隠され使用することができません。</li>
</ul>

<h3 id="Install_and_activate_populating_your_cache" name="Install_and_activate_populating_your_cache">インストールと起動: キャッシュの作成</h3>

<p>Service worker を登録した後、ブラウザーはページ/サイト上で Service worker をインストールおよび起動しようとします。</p>

<p>インストールが成功裡に完了したとき、 install イベントが発火されます。通常、 install イベントはオフラインで実行する必要のある資産を､ブラウザーのオフラインキャッシュ領域に配置するために使われます。これをするために、サービスワーカーの真新しい storage API— {{domxref("cache")}} — を使用します。 cache はサービスワーカー上でグローバルに、応答で提供された資産を保存したり、要求にキーしたりできます。この API はブラウザーの標準キャッシュと同じようにふるまいますが、ドメインに特化しています。キャッシュが不要であることを再度伝えるまで存在します。つまり、すべてを制御できます。</p>

<div class="note">
<p><strong>メモ</strong>: Cache API はすべてのブラウザーが対応しているわけではありません (詳細は{{anch("Browser support")}}のセクションを見てください)。今すぐこれを使いたいなら、 <a href="https://github.com/Polymer/topeka/blob/master/sw.js">Google's Topeka demo</a> で利用されているポリフィルの使用か、 <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> に資産を格納することを検討してください。</p>
</div>

<p>コードサンプルを見ることからこのセクションを始めましょう。 — これは<a href="https://github.com/mdn/sw-test/blob/gh-pages/sw.js#L1-L18">私たちのService worker で最初に見つかるブロックです</a>。</p>

<pre class="brush: js">self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});</pre>

<ol>
 <li>ここでは Service worker（thisによって）にイベントリスナーを追加して、イベントに{{domxref("ExtendableEvent.waitUntil()") }} メソッドをチェーンしています―これは<code>waitUntil()</code>の内部のコードが成功裡に実行されるまで、サービスワーカーがインストールされないことを保証します。</li>
 <li><code>waitUntil()</code>内で、サイトリソースキャッシュのバージョン1であるv1と呼ばれる新しいキャッシュを生成するために、{{domxref("Caches.open()") }}メソッドを使用します。これは生成されたキャッシュのためにpromiseを返します。ひとたび解決されたら、パラメータとしてキャッシュしたいすべてのリソースのオリジン相対URLの配列を受け取る、生成されたキャッシュのaddAll()を呼び出す関数をコールします。</li>
 <li>promiseが拒否された場合やインストールが失敗した場合、workerは何もしません。コードを修正して再度登録にトライすればOKです。</li>
 <li>インストールが成功した後、Service worker を起動します。最初に Service worker がインストール、もしくは起動されたときには独特な使い方はありません。しかし Service worker を更新したときにより意義があります（後に続く{{anch("Updating your service worker") }} を見てください）。</li>
</ol>

<div class="note">
<p><strong>メモ</strong>: <a href="/ja/docs/Web/Guide/API/DOM/Storage">localStorage</a>は Service worker キャッシュと同じように動作しますが、同期処理のため、Service worker 内では許可されていません。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: 必要ならば、<a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a>を Service worker 内でデータ保存のために使用できます。</p>
</div>

<h3 id="Custom_responses_to_requests" name="Custom_responses_to_requests">要求に対するカスタム応答</h3>

<p>サイトの資産はキャッシュされたので、Service worker にキャッシュされたコンテンツを使って何かするように指示する必要があります。これは<code>fetch</code>イベントを使って簡単に実現できます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12634/sw-fetch.png" style="display: block; margin: 0 auto;"></p>

<p><code>fetch</code> イベントが発火するたび、指定されたスコープ内の文書とこれらの文書が参照するすべてのリソースを含む、サービスワーカーによって制御されたリソースの取得します（例えば、<code>index.html</code> が画像を埋め込むためにオリジン間要求を行うと、それはサービスワーカーを通過します）。</p>

<p>イベントリスナーをサービスワーカーにアタッチしてから、HTTP応答をハイジャックしてマジックを使って更新するために、イベント上で<code>respondWith()</code> メソッドを呼び出せます。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  event.respondWith(
    // magic goes here
  );
});</pre>

<p>ネットワーク要求した URL と一致するリソースを単純に応答することから始められます。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
  );
});</pre>

<p>使用可能なキャッシュと一致する場合、 <code>caches.match(event.request)</code> がキャッシュで利用可能な同等のリソースをネットワークから要求された各リソースに一致するようにできます。マッチングは通常の HTTP 要求と同様に、 URL を経由して行われ、ヘッダを変更します。</p>

<p>オプションについては {{domxref("Request")}} オブジェクトと {{domxref("Response")}}オブジェクトの詳細を参照してください。詳しくは <a href="/ja/docs/Web/API/Fetch_API">Fetch API documentation</a> に解説されています。</p>

<ol>
 <li>
  <p><code>{{domxref("Response.Response","Response()")}}</code> コンストラクタを使用し、任意の応答を作成できます。この例では、単純なテキストデータが返却されます。</p>

  <pre class="brush: js">new Response('Hello from your friendly neighbourhood service worker!');</pre>
 </li>
 <li>
  <p>このより複雑な例では、一般的なHTTP応答を再現するためにヘッダ情報を応答に付与できることを示しています。この例では、応答の種類のみをブラウザーに通知しています。</p>

  <pre class="brush: js">new Response('&lt;p&gt;Hello from your friendly neighbourhood service worker!&lt;/p&gt;', {
  headers: { 'Content-Type': 'text/html' }
});</pre>
 </li>
 <li>
  <p>もしキャッシュにリソースがなかった場合は、リソースを取得する一般的な要求である {{domxref("GlobalFetch.fetch","fetch")}} で、使用可能なネットワークから新たにリソースを取得できます。</p>

  <pre class="brush: js">fetch(event.request);</pre>
 </li>
 <li>
  <p>もしキャッシュにリソースがなかったり、ネットワークが使用不可能だった場合に、 {{domxref("CacheStorage.match","match()")}} を使用し、要求に対して代替用のページを用意できます。</p>

  <pre class="brush: js">caches.match('/fallback.html');</pre>
 </li>
 <li>
  <p>{{domxref("FetchEvent")}} により、返却される {{domxref("Request")}} オブジェクトのプロパティから様々な要求の情報を取得できます。</p>

  <pre class="brush: js">event.request.url
event.request.method
event.request.headers
event.request.body</pre>
 </li>
</ol>

<h2 id="Recovering_failed_requests" name="Recovering_failed_requests">失敗した要求の復旧</h2>

<p><code>caches.match(event.request)</code> はデータがキャッシュされている場合には、うまく動きます。ところで、データがキャッシュされていない場合はどうでしょうか。この場合、失敗時のハンドリングを何も提供しなければ promise は reject して、 マッチしないときにはネットワークエラーが発生します。</p>

<p>幸運なことに、Service worker の promise ベースの構造は、成功に向けたさらなるオプションを設定するためにささやかなことができます。具体的には、以下のようにできます。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});</pre>

<p>リソースがキャッシュになかった場合は、ネットワークから要求されます。</p>

<p>私たちが本当に賢いなら、リソースをネットワークから要求するだけではないはずです。後の要求がオフラインでもリソースを扱えるように、キャッシュにもセーブするでしょう。これは、余分な画像がStar Warsギャラリーに追加されたなら、アプリが自動的に画像をとらえてキャッシュすることを意味します。 以下の例はトリックを行っています。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});</pre>

<p>ここでは、<code>promiseを返すfetch(event.request)</code>と共に、既定のネットワーク要求を返しています。このpromiseが拒否されたとき、<code>caches.open('v1')</code>を使ってキャッシュをとらえる関数を実行して応答します。これもまた、promiseを返します。promiseが拒否されたとき、<code>cache.put()</code> がキャッシュにリソースを追加するために使われます。リソースは<code>event.request</code>から捕捉されてから、応答は<code>response.clone()</code> でクローンされ、キャッシュに加えられます。クローンはキャッシュに挿入され、オリジナルの要求は呼び出したページに与えるためにブラウザーに返されます。</p>

<p>要求及び応答ストリームは一度しか読み出せないので、応答の複製を作る必要があります。ブラウザーへ応答を返し、かつキャッシュに入れるために、クローンを作成する必要があるのです。ですから、オリジナルはブラウザーに返され、クローンはキャッシュに送られます。それぞれ一度ずつ読み出されます。</p>

<p>これで私たちの抱えるトラブルは、要求がいずれのキャッシュともマッチせず、ネットワークが使用できない場合、いまだ要求が失敗することだけになりました。何が起こってもユーザーが少なくとも何かは取得できるように、既定の代替処理を提供しましょう。</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        let responseClone = response.clone();
        caches.open('v1').then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    }).catch(function() {
      return caches.match('/sw-test/gallery/myLittleVader.jpg');
    })
  );
});</pre>

<p>失敗の可能性があるのは新しい画像の更新だけのための代替画像を選択しました。以前確認した、 <code>install</code> イベントリスナーでのインストールに依存している他の画像でも同じことができます。</p>

<h2 id="Updating_your_service_worker" name="Updating_your_service_worker">Service worker の更新</h2>

<p>Service worker が以前にインストールされているが、ページの更新や読み込みの時に新しいバージョンの worker が利用できる場合、新しいバージョンはバックグラウンドでインストールされますが、まだ起動しません。まだ古い service worker を使用している読み込まれたページがなくなったら、新しい service worker が起動します。</p>

<p>新しいサービスワーカーで、 <code>install</code> イベントリスナーをこのようなもの (新しいバージョン番号を通知するもの) に更新したくなるでしょう。</p>

<pre class="brush: js">self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',

        …

        // 新しいバージョンのための新しい他のリソースを入れてください...
      ]);
    })
  );
});</pre>

<p>これが発生している間、以前のバージョンはまだ fetch に対して応答します。新しいバージョンは、バックグラウンドでインストールされています。以前の <code>v1</code> キャッシュを妨げないように、新しいキャッシュを <code>v2</code> と呼んでいます。</p>

<p>どのページも現在のバージョンを使用していないとき、新しい worker が有効化し、 fetch に応答するようになります。</p>

<h3 id="Deleting_old_caches" name="Deleting_old_caches">古いキャッシュの削除</h3>

<p><code>activate</code> イベントを取得することもできます。これは一般的に、実行中の以前のバージョンを破壊するために使われます。たとえば、古いキャッシュを取り除きます。これはディスクスペースがいっぱいになることを防ぐために、もはや不要なデータを削除するのにも役立ちます — それぞれのブラウザーは Service worker が使うために与えられたキャッシュストレージの容量に対して厳しい制限があります。ブラウザーはディスクスペースを管理するために最善を尽くしていますが、オリジンのためのキャッシュストレージを削除するかもしれません。 一般的にブラウザーはオリジンのためのデータをすべて削除するか、オリジンのためのデータを持っていません。</p>

<p><code>waitUntil()</code> に渡された Promise は、完了するまで他のイベントをブロックするので、新しいキャッシュ上で初めての <code>fetch</code> イベントを取得するときには、クリーンアップ操作が完了していると確信できます。</p>

<pre class="brush: js">self.addEventListener('activate', function(event) {
  var cache<span class="diff_chg">K</span>e<span class="diff_add">ep</span>list = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cache<span class="diff_chg">K</span>e<span class="diff_add">ep</span>list.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});</pre>

<h2 id="Developer_tools" name="Developer_tools">開発ツール</h2>

<p>Chrome には、現在サービスワーカーのアクティビティやデバイス上のストレージを示す <code>chrome://inspect/#service-workers</code> があり、また、より詳細な情報の表示や、ワーカープロセスを開始/停止/デバッグできる <code>chrome://serviceworker-internals</code> があります。将来的には、不良または存在しない接続をエミュレートするスロットリング/オフラインモードを実装する予定です。これは本当に素晴らしい機能です。</p>

<p>Firefox もサービスワーカーに関する便利なツールを実装し始めています。</p>

<ul>
 <li><code><a href="/ja/docs/Tools/about:debugging">about:debugging</a></code> を開くと、サービスワーカーで何が登録されているかを見たり、更新/削除したりすることができます。</li>
 <li>テストを行う場合、 <a href="/ja/docs/Tools/Settings">Firefox 開発者ツール設定</a>で、"HTTP によるサービスワーカーを有効 (ツールボックスを開いたとき)" をチェックすることで、 HTTPS 制約を回避できます。</li>
 <li>Firefox のカスタマイズオプションで利用できる "Forget" ボタンで、サービスワーカー及びそのキャッシュを消去することができます ({{bug(1252998)}})。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: ローカルでの開発のために、 <code>http://localhost</code> (例えば using <code>me@localhost:/my/app$ <strong>python -m SimpleHTTPServer</strong></code>) からアプリのサービスを行うことができます。 <a href="https://www.w3.org/TR/service-workers/#security-considerations">Security considerations</a> を参照してください。</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://blog.88mph.io/2017/07/28/understanding-service-workers/">Understanding Service Workers</a></li>
 <li><a href="https://serviceworke.rs/">The Service Worker Cookbook</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker ready?</a></li>
 <li>Download the <a href="https://mdn.mozillademos.org/files/12638/sw101.png">Service Workers 101 cheatsheet</a>.</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></li>
 <li><a href="/ja/docs/Web/Guide/Performance/Using_web_workers">ウェブワーカーの使用</a></li>
</ul>
