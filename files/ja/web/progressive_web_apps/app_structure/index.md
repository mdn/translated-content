---
title: プログレッシブウェブアプリの構造
slug: Web/Progressive_web_apps/App_structure
tags:
  - App shell
  - PWAs
  - Progressive web apps
  - Service Workers
  - Streams
  - Structure
  - js13kGames
  - progressive
translation_of: Web/Progressive_web_apps/App_structure
---
<div>{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}</div>

<p class="summary"><span class="seoSummary">PWA の背後にある理論が分かったところで、推奨されるアプリの構造を見てみましょう。まず、 <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> アプリの分析、それがなぜそのように構築されているのか、それがもたらす利点について説明します。</span></p>

<h2 id="Architecture_of_an_app" name="Architecture_of_an_app">アプリのアーキテクチャ</h2>

<p>ウェブサイトをレンダリングするには、サーバー上とクライアント上の2つのアプローチがあります。どちらにも長所と短所があり、2つのアプローチをある程度組み合わせることができます。</p>

<ul>
 <li>サーバー側レンダリング (Server-side rendering、SSR) は、ウェブサイトがサーバー上でレンダリングされるという意味で、初回の読み込みは速くなりますが、ページ間で移動すると新しい HTML コンテンツをダウンロードする必要があります。これはブラウザーが変わってもうまく動作しますが、ページ間で移動する時間が不利であり、したがって一般的にパフォーマンスが悪くなります。 — ページを読み込むごとに、サーバーへの新しい往復が必要になるからです。</li>
 <li>クライアント側レンダリング (Client-side rendering、CSR) を使用すると、ウェブサイトがさまざまなページに移動したときにブラウザー内でほぼ瞬時に更新できますが、初期ダウンロード数が増え、最初はクライアントで余分なレンダリングが必要になります。 ウェブサイトは最初の訪問では遅くなりますが、その後の訪問ではずっと速くなります。</li>
</ul>

<p>SSR と CSR を組み合わせることで最良の結果が得られます — ウェブサイトをサーバー上にレンダリングし、そのコンテンツをキャッシュしてから、必要に応じてクライアント側でレンダリングを更新することができます。 SSR のおかげで最初のページの読み込みは速く、クライアントは変更された部分だけでページを再レンダリングできるため、ページ間のナビゲーションはスムーズです。</p>

<p>PWA は好きなアプローチで構築できますが、他のものよりもうまく機能するものもあります。 最も人気のあるアプローチは、 SSR と CSR をまさに上記の方法で組み合わせた「アプリシェル」の概念です。 さらに、今後の記事で詳細に説明し、サンプルアプリで使用する「オフライン優先」の方法論に従います。 <a href="/ja/docs/Web/API/Streams_API">Streams API</a> に関する新しいアプローチもありますが、これについては後で簡単に説明します。</p>

<h2 id="App_shell" name="App_shell">アプリシェル</h2>

<p>アプリシェル (App shell) の概念は、最小限のユーザーインターフェイスをできるだけ早く読み込んでからキャッシュすること関係しています。 それで、アプリのすべてのコンテンツを読み込むことで、その後のアクセスでオフラインで利用できるようにします。 こうすることで、次回デバイスからアプリにアクセスしたときに、 UI がすぐにキャッシュから読み込まれ、 (まだキャッシュにない場合) 新しいコンテンツがサーバーから要求されます。</p>

<p>この構造は高速であり、ローディングスピナーや空白のページではなく、ユーザーが即座に「何か」を見たときにも高速に感じられます。 ネットワーク接続が利用できない場合は、ウェブサイトにオフラインでアクセスすることもできます。</p>

<p>サーバーから要求される内容とキャッシュから取得される内容を<a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー</a>で制御できます。 詳細は次の記事で説明します — ここでは構造自体に焦点を当てます。</p>

<h3 id="Why_should_I_use_it" name="Why_should_I_use_it">なぜそれを使うべきか？</h3>

<p>このアーキテクチャにより、ウェブサイトはすべての PWA 機能を最大限に活用できます — つまり、アプリシェルをキャッシュし、パフォーマンスを大幅に向上させるように動的コンテンツを管理します。 基本的なシェルに加えて、<a href="/ja/docs/Web/Progressive_web_apps/Add_to_home_screen">ホーム画面への追加</a>や<a href="/ja/docs/Web/API/Push_API">プッシュ通知</a>などの他の機能を追加でき、ユーザーのブラウザーでサポートされていない場合でも、アプリは正常に動作することがわかっているので安全です — これがプログレッシブエンハンスメントの美しさです。</p>

<p>ウェブサイトは、ウェブのすべての利点を維持しながら、即時の対話と堅実なパフォーマンスを備えたネイティブアプリのように感じられます。</p>

<h3 id="Being_linkable_progressive_and_responsive_by_design" name="Being_linkable_progressive_and_responsive_by_design">設計によりリンク可能、プログレッシブ、レスポンシブであること</h3>

<p>PWA の利点を覚えておき、アプリケーションを設計するときには、それらを念頭に置いておくことが重要です。 アプリシェルのアプローチにより、ウェブサイトは次のようになります。</p>

<ul>
 <li>リンク可能: ネイティブアプリのように動作しますが、それでもウェブサイトです — ページ内のリンクをクリックして、共有したい場合は他の人に URL を送信できます。</li>
 <li>プログレッシブ: 「古き良き基本的なウェブサイト」から始めて、ブラウザーで利用できるかどうかを検出し、サポートが利用できない場合に発生するエラーを適切に処理しながら、新機能を徐々に追加します。 例えば、サービスワーカーの助けを借りたオフラインモードは、ウェブサイトのエクスペリエンスを向上させるための特別な特徴ですが、それがなくても完全に使用可能です。</li>
 <li>レスポンシブ: レスポンシブウェブデザイン (Responsive web design) はプログレッシブウェブアプリにも適用され、どちらも主にモバイルデバイス用です。 ブラウザーを搭載したデバイスは数多くあります — <a href="/ja/docs/Mobile/Viewport_meta_tag">ビューポートメタタグ</a>、<a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries">CSS メディアクエリ</a>、<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックス</a>、<a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッド</a>などの技術を使用して、さまざまな画面サイズ、ビューポート、ピクセル密度で機能するようにウェブサイトを準備することが重要です。</li>
</ul>

<h2 id="Different_concept_streams" name="Different_concept_streams">異なるコンセプト: ストリーム</h2>

<p><a href="/ja/docs/Web/API/Streams_API">Streams API</a> を使用すると、サーバー側またはクライアント側のレンダリングに対するまったく異なるアプローチを実現できます。 サービスワーカーからの少しの助けで、ストリームはコンテンツを解析する方法を大いに改善することができます。</p>

<p>アプリシェルのモデルでは、ウェブサイトがレンダリングを開始する前にすべてのリソースが利用可能である必要があります。 HTML とは異なり、ブラウザーが実際にデータを既にストリーミング (読み込みながら再生) しているので、いつウェブサイトに要素が読み込まれてレンダリングされるかを見ることができます。 ただし、 JavaScript を「動作可能」にするには、 JavaScript を完全にダウンロードする必要があります。</p>

<p>Streams API を使用すると、開発者はサーバーからのデータストリーミングに直接アクセスできます — データに操作を実行する場合 (例えば、動画にフィルタを追加する場合など) は、すべてがダウンロードされて BLOB (またはその他) に変換されるのを待つ必要はもうありません — すぐに始めることができます。 それは、きめ細かい制御を提供します — ストリームを開始したり、別のストリームとチェーンしたり、キャンセルしたり、エラーをチェックしたりすることができます。</p>

<p>理論的には、ストリーミングはより優れたモデルですが、より複雑でもあり、この記事の執筆時点 (2018年3月) では Streams API はまだ開発中であり、主要ブラウザーのいずれでもまだ完全には利用できません。 それが利用可能になると、それはコンテンツを提供する最も速い方法になるでしょう — パフォーマンスの面で利点は巨大になるでしょう。</p>

<p>実用的な例や詳細については、<a href="/ja/docs/Web/API/Streams_API">Streams API の資料</a>を参照してください。</p>

<h2 id="Structure_of_our_example_application" name="Structure_of_our_example_application">サンプルアプリの構造</h2>

<p><a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> ウェブサイトの構造は非常に単純です。単一の HTML ファイル (<a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html">index.html</a>) と基本的な CSS のスタイル付け (<a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css">style.css</a>)、いくつかの画像、スクリプト、およびフォントで構成されています。 フォルダー構造は次のようになります。</p>

<p><img alt="js13kPWA のフォルダー構成" src="https://mdn.mozillademos.org/files/15925/js13kpwa-directory.png" style="border-style: solid; border-width: 1px; display: block; height: 356px; margin: 0px auto; width: 320px;"></p>

<h3 id="The_HTML" name="The_HTML">HTML</h3>

<p>HTML の観点から見ると、アプリシェルは content セクション以外のすべてのものです。</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;title&gt;js13kGames A-Frame entries&lt;/title&gt;
	&lt;meta name="description" content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps."&gt;
	&lt;meta name="author" content="end3r"&gt;
	&lt;meta name="theme-color" content="#B12A34"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
	&lt;meta property="og:image" content="icons/icon-512.png"&gt;
	&lt;link rel="shortcut icon" href="favicon.ico"&gt;
	&lt;link rel="stylesheet" href="style.css"&gt;
	&lt;link rel="manifest" href="js13kpwa.webmanifest"&gt;
	&lt;script src="data/games.js" defer&gt;&lt;/script&gt;
	&lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
	&lt;p&gt;&lt;a class="logo" href="http://js13kgames.com"&gt;&lt;img src="img/js13kgames.png" alt="js13kGames"&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/header&gt;
&lt;main&gt;
	&lt;h1&gt;js13kGames A-Frame entries&lt;/h1&gt;
	&lt;p class="description"&gt;List of games submitted to the &lt;a href="http://js13kgames.com/aframe"&gt;A-Frame category&lt;/a&gt; in the &lt;a href="http://2017.js13kgames.com"&gt;js13kGames 2017&lt;/a&gt; competition. You can &lt;a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa"&gt;fork js13kPWA on GitHub&lt;/a&gt; to check its source code.&lt;/p&gt;
	&lt;button id="notifications"&gt;Request dummy notifications&lt;/button&gt;
	&lt;section id="content"&gt;
		// コンテンツはここに動的に挿入されます
	&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;
	&lt;p&gt;© js13kGames 2012-2018, created and maintained by &lt;a href="http://end3r.com"&gt;Andrzej Mazur&lt;/a&gt; from &lt;a href="http://enclavegames.com"&gt;Enclave Games&lt;/a&gt;.&lt;/p&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>{{htmlelement("head")}} セクションには、タイトル、説明、 CSS へのリンク、ウェブマニフェスト、ゲームコンテンツの JS ファイル、および <code>app.js</code> (ここで、JavaScript アプリが初期化されます) などの基本的な情報が含まれています。 {{htmlelement("body")}} は、{{htmlelement("header")}} (リンクした画像を含む)、{{htmlelement("main")}} ページ (タイトル、説明、コンテンツの場所)、および {{htmlelement("footer")}} (著作権およびリンク) に分割されています。</p>

<p>アプリの唯一の仕事は、 js13kGames 2017 コンペティションからすべての A-Frame エントリをリストすることです。 ご覧のとおり、これはごく普通の1ページのウェブサイトです — 重要なのは、実際の PWA 機能の実装に集中できるように、簡単なものを用意することです。</p>

<h3 id="The_CSS" name="The_CSS">CSS</h3>

<p>CSS も可能な限りわかりやすくなっています。 つまり、 {{cssxref("@font-face")}} を使用してカスタムフォントを読み込んで使用し、さらに HTML 要素の単純なスタイルを適用します。 全体的なアプローチは、デザインをモバイルデバイス (レスポンシブウェブデザインのアプローチ) とデスクトップデバイスの両方で見栄えよくすることです。</p>

<h3 id="The_main_app_JavaScript" name="The_main_app_JavaScript">メインアプリの JavaScript</h3>

<p><code>app.js</code> ファイルは、次の記事で詳しく調べることをいくつか行います。 まず最初に、次のテンプレートに基づいてコンテンツを生成します。</p>

<pre class="brush: js notranslate">var template = "&lt;article&gt;\n\
    &lt;img src='data/img/SLUG.jpg' alt='NAME'&gt;\n\
    &lt;h3&gt;#POS. NAME&lt;/h3&gt;\n\
    &lt;ul&gt;\n\
    &lt;li&gt;&lt;span&gt;Author:&lt;/span&gt; &lt;strong&gt;AUTHOR&lt;/strong&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;Twitter:&lt;/span&gt; &lt;a href='https://twitter.com/TWITTER'&gt;@TWITTER&lt;/a&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;Website:&lt;/span&gt; &lt;a href='http://WEBSITE/'&gt;WEBSITE&lt;/a&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;GitHub:&lt;/span&gt; &lt;a href='https://GITHUB'&gt;GITHUB&lt;/a&gt;&lt;/li&gt;\n\
    &lt;li&gt;&lt;span&gt;More:&lt;/span&gt; &lt;a href='http://js13kgames.com/entries/SLUG'&gt;js13kgames.com/entries/SLUG&lt;/a&gt;&lt;/li&gt;\n\
    &lt;/ul&gt;\n\
&lt;/article&gt;";
var content = '';
for(var i=0; i&lt;games.length; i++) {
    var entry = template.replace(/POS/g,(i+1))
        .replace(/SLUG/g,games[i].slug)
        .replace(/NAME/g,games[i].name)
        .replace(/AUTHOR/g,games[i].author)
        .replace(/TWITTER/g,games[i].twitter)
        .replace(/WEBSITE/g,games[i].website)
        .replace(/GITHUB/g,games[i].github);
    entry = entry.replace('&lt;a href=\'http:///\'&gt;&lt;/a&gt;','-');
    content += entry;
};
document.getElementById('content').innerHTML = content;</pre>

<p>次に、サービスワーカーを登録します。</p>

<pre class="brush: js notranslate">if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwa-examples/js13kpwa/sw.js');
};</pre>

<p>次のコードブロックは、ボタンがクリックされたときに通知の許可を要求します。</p>

<pre class="brush: js notranslate">var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
});</pre>

<p>最後のブロックは、ゲームリストからランダムに選択されたアイテムを表示する通知を作成します。</p>

<pre class="brush: js notranslate">function randomNotification() {
    var randomItem = Math.floor(Math.random()*games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = 'Created by '+games[randomItem].author+'.';
    var notifImg = 'data/img/'+games[randomItem].slug+'.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}</pre>

<h3 id="The_service_worker" name="The_service_worker">サービスワーカー</h3>

<p>すばやく見る最後のファイルはサービスワーカーです: <code>sw.js</code> — それは最初に <code>games.js</code> ファイルからデータをインポートします。</p>

<pre class="brush: js notranslate">self.importScripts('data/games.js');</pre>

<p>次に、アプリシェルとコンテンツの両方から、キャッシュされるすべてのファイルのリストを作成します。</p>

<pre class="brush: js notranslate">var cacheName = 'js13kPWA-v1';
var appShellFiles = [
  '/pwa-examples/js13kpwa/',
  '/pwa-examples/js13kpwa/index.html',
  '/pwa-examples/js13kpwa/app.js',
  '/pwa-examples/js13kpwa/style.css',
  '/pwa-examples/js13kpwa/fonts/graduate.eot',
  '/pwa-examples/js13kpwa/fonts/graduate.ttf',
  '/pwa-examples/js13kpwa/fonts/graduate.woff',
  '/pwa-examples/js13kpwa/favicon.ico',
  '/pwa-examples/js13kpwa/img/js13kgames.png',
  '/pwa-examples/js13kpwa/img/bg.png',
  '/pwa-examples/js13kpwa/icons/icon-32.png',
  '/pwa-examples/js13kpwa/icons/icon-64.png',
  '/pwa-examples/js13kpwa/icons/icon-96.png',
  '/pwa-examples/js13kpwa/icons/icon-128.png',
  '/pwa-examples/js13kpwa/icons/icon-168.png',
  '/pwa-examples/js13kpwa/icons/icon-192.png',
  '/pwa-examples/js13kpwa/icons/icon-256.png',
  '/pwa-examples/js13kpwa/icons/icon-512.png'
];
var gamesImages = [];
for(var i=0; i&lt;games.length; i++) {
  gamesImages.push('data/img/'+games[i].slug+'.jpg');
}
var contentToCache = appShellFiles.concat(gamesImages);</pre>

<p>次のブロックはサービスワーカーをインストールし、上記のリストに含まれるすべてのファイルを実際にキャッシュします。</p>

<pre class="brush: js notranslate">self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});</pre>

<p>最後に、サービスワーカーは、キャッシュからコンテンツが利用できる場合はそれをキャッシュから取得し、オフライン機能を提供します。</p>

<pre class="brush: js notranslate">self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});</pre>

<h3 id="The_JavaScript_data" name="The_JavaScript_data">JavaScript データ</h3>

<p>ゲームデータは、 JavaScript オブジェクト (<code><a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js">games.js</a></code>) の形式で <code>data</code> フォルダーにあります。</p>

<pre class="brush: js notranslate">var games = [
    {
        slug: 'lost-in-cyberspace',
        name: 'Lost in Cyberspace',
        author: 'Zosia and Bartek',
        twitter: 'bartaz',
        website: '',
        github: 'github.com/bartaz/lost-in-cyberspace'
    },
    {
        slug: 'vernissage',
        name: 'Vernissage',
        author: 'Platane',
        twitter: 'platane_',
        website: 'github.com/Platane',
        github: 'github.com/Platane/js13k-2017'
    },
// ...
    {
        slug: 'emma-3d',
        name: 'Emma-3D',
        author: 'Prateek Roushan',
        twitter: '',
        website: '',
        github: 'github.com/coderprateek/Emma-3D'
    }
];</pre>

<p>すべてのエントリは <code>data/img</code> フォルダーに独自の画像を持っています。 これは JavaScript でコンテンツセクションに読み込まれたコンテンツです。</p>

<h2 id="Next_up" name="Next_up">次へ</h2>

<p>次の記事では、サービスワーカーの助けを借りて、オフラインで使用するためにアプリシェルとコンテンツがどのようにキャッシュされるかについて詳しく説明します。</p>

<p>{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</p>
