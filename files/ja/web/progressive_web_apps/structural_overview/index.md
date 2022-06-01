---
title: プログレッシブウェブアプリの構造的な概要
slug: Web/Progressive_web_apps/Structural_overview
tags:
  - Applications
  - Apps
  - Guide
  - Layout
  - Overview
  - PWAs
  - Progressive web apps
  - Structure
  - Web
  - Webapps
  - contents
translation_of: Web/Progressive_web_apps/Structural_overview
---
プログレッシブウェブアプリ (PWA) はあらゆるウェブコンテンツに対応していますが、ウェブ上で使用することも、ローカルアプリケーションとしてインストールして実行することも可能なウェブアプリとして認識されるためには、特定の構造を持ち、特定のコンポーネントを含む必要があります。この構造概要では、標準的なウェブアプリケーションを構成する機能と、PWA を構築する際に従うことができるいくつかのデザインパターンを見ていきます。

## アプリの構造

ウェブサイトのレンダリングには、大きく分けて、サーバー上で行う方法と、クライアント上で行う方法があります。どちらも一長一短がありますが、この 2 つのアプローチをある程度混合することも可能です。

- **サーバーサイドレンダリング** (**SSR**) とは、ウェブサイトがサーバー上でレンダリングされることで、初回の読み込みは速くなりますが、ページ間の移動には新しい HTML コンテンツのダウンロードが必要になります。これはブラウザーを問わず動作しますが、ページ間の移動に時間がかかるため、一般的に認識されるパフォーマンスに影響を与えます。ページを読み込むのにサーバーへの新しいラウンドトリップが必要となるからです。
- **クライアントサイドレンダリング** (**CSR**) は、異なるページに移動した際に、ほぼ瞬時にブラウザー内でウェブサイトを更新することができますが、最初のダウンロードとクライアントでの余分なレンダリングが必要になります。最初の訪問時にはウェブサイトの表示速度が遅くなりますが、移動時には速くなります。

クライアントサイドレンダリングとサーバーサイドレンダリングの両方を使用すると、最良の結果が得られます。サーバー上でウェブサイトをレンダリングし、そのコンテンツをキャッシュし、必要に応じてクライアントサイドでレンダリングを更新します。SSR のおかげで最初のページロードが早く、クライアントが変更部分のみを再レンダリングできるので、ページ間の移動がスムーズになります。

PWA はどのようなアプローチでも構築できますが、一部のアプローチは他のアプローチよりもうまく機能します。最も一般的なアプローチは、**アプリシェル** (app shell) の概念です。これは、SSR と CSR を前述の方法で正確に組み合わせたもので、さらに「オフラインファースト」の方法論に従っています。これについては、今後の記事で詳しく説明し、サンプルアプリケーションで使用します。また、Streams API を使った新しいアプローチもありますが、これについても簡単に説明します。

## アプリシェルの概念

アプリシェルの概念は、最小限のユーザーインターフェースとコンテンツをできるだけ早く読み込み、それをキャッシュしてオフラインでも次回のアクセス時に利用できるようにしてから、アプリの残りのコンテンツを読み込むというものです。そうすることで、端末からアプリにアクセスしたときに、UI がすぐにキャッシュから読み込まれ、新しいコンテンツは (キャッシュにない場合は) サーバーにリクエストされます。

この構造は高速であり、ユーザーはローディングスピナーや空白のページではなく、即座に「何か」を目にするため、高速であると感じます。また、ネットワーク接続が利用できない場合でも、オフラインでウェブサイトにアクセスすることができます。

[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)を使うと、サーバーからのリクエストとキャッシュからの取得を制御することができますが、これについては次回詳しく説明します。

### アプリシェルパターンの利点

このアーキテクチャにより、ウェブサイトは PWA のすべての機能の恩恵を受けることができます。アプリシェルをキャッシュし、動的コンテンツを管理することで、パフォーマンスが大幅に向上します。基本的なシェルに加えて、[ホーム画面への追加](/ja/docs/Web/Progressive_web_apps/Add_to_home_screen)や[プッシュ通知](/ja/docs/Web/API/Push_API)などの機能を追加することができます。これらの機能がユーザーのブラウザーで対応していなくても、アプリは問題なく動作します。これがプログレッシブエンハンスメントの優れた点です。

ウェブサイトは、ウェブの利点を維持しながら、即時の操作性と確かなパフォーマンスを備えたネイティブアプリのように感じられるようになります。

### リンク可能で、プログレッシブ性、レスポンシブ性を兼ね備えたデザイン

PWA の利点を覚えておき、アプリケーションを設計する際に念頭に置いておくことが重要です。アプリシェルのアプローチにより、ウェブサイトは以下のようになります。

- リンク可能であること。ページ内のリンクをクリックしたり、共有したい場合は URL を誰かに送ったりすることができ、ネイティブアプリのように動作しても、ウェブサイトであることに変わりはありません。
- プログレッシブであること。「古き良き基本的なウェブサイト」から始めて、徐々に新しい機能を追加していきます。その際、ブラウザーで利用可能かどうかを検出し、対応していない場合に発生するエラーを優雅に処理することを忘れないでください。例えば、サービスワーカーの助けを借りたオフラインモードは、ウェブサイトの使い勝手をより良いものにするための付加的な特徴に過ぎませんが、それがなくても全く問題なく使用できます。
- レスポンシブであること。レスポンシブウェブデザインは、プログレッシブウェブアプリにも適用されます。どちらも主にモバイル端末向けのデザインだからです。ブラウザーが搭載されている端末の種類は非常に多く、[meta viewport タグ](/ja/docs/Mozilla/Mobile/Viewport_meta_tag)、[CSS メディアクエリー](/ja/docs/Web/CSS/Media_queries)、[フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)、[CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)などの技術を使用して、様々な画面やビューポートの大きさ、ピクセル密度でも動作するようにウェブサイトを準備することが重要です。

## もう一つのアプローチ: ストリーム

[Streams API](/ja/docs/Web/API/Streams_API) を使用すると、サーバーサイドまたはクライアントサイドのレンダリングに対して、まったく異なるアプローチをとることができます。サービスワーカーの助けを借りれば、ストリームはコンテンツを解析する方法を大幅に改善することができます。

アプリシェルモデルでは、ウェブサイトがレンダリングを開始する前に、すべてのリソースが利用可能であることが必要です。HTML の場合は違います。実際にはブラウザーがすでにデータをストリーミングしており、要素が読み込まれてウェブサイトにレンダリングされたことを確認することができます。しかし、JavaScript を実際に動作させるためには、JavaScript をすべてダウンロードする必要があります。

Streams API を使用すると、開発者はサーバーからストリーミングされるデータに直接アクセスすることができます。データに対して何らかの操作を行いたい場合 (例えば、動画にフィルターを追加するなど)、すべてのデータがダウンロードされ、blob (またはその他のもの) に変換されるのを待つ必要はもうありません。その代わりに、すぐに始めることができます。ストリームの開始、他のストリームとの連結、キャンセル、エラーのチェックなど、きめ細かな制御が可能になります。

理論的には、ストリーミングはアプリのシェルモデルよりも優れたモデルですが、より複雑であり、 Streams API は主要なブラウザーはまだ完全に対応していません。しかし、Streams API が利用可能になれば、アプリのコンテンツを提供する最速の方法になります。パフォーマンス面でのメリットは、まさに目を見張るものがあります。

動作する例や詳しい情報は、[Streams API のドキュメント](/ja/docs/Web/API/Streams_API)を参照してください。

## サンプルアプリケーションの構造

js13kPWA のウェブサイトの構造はとてもシンプルです。1 つの HTML ファイル (index.html) で構成されており、基本的な CSS スタイルは style.css で提供されています。また、画像やスクリプト、フォントなどもいくつか含まれています。ファイルとフォルダーの階層は次のようになっています。

- `app.js`
- `data/`

  - `games.js`
  - `img/`

- `favicon.ico`
- `fonts/`
- `icons/`
- `img/`

  - `bg.png`
  - `js13kgames.png`

- `index.html`
- `js13kpwa.webmanifest`
- `style.css`
- `sw.js`

### HTML

ファイル `index.html` の中の HTML がアプリの構造を作ります。アプリのシェルモデルに直接関連する部分は、このページ内の {{HTMLElement("section")}} のうち ID が `content` であるものの外側にあります。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>js13kGames A-Frame entries</title>
	<meta name="description" content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps.">
	<meta name="author" content="end3r">
	<meta name="theme-color" content="#B12A34">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="og:image" content="icons/icon-512.png">
	<link rel="icon" href="favicon.ico">
	<link rel="stylesheet" href="style.css">
	<link rel="manifest" href="js13kpwa.webmanifest">
	<script src="data/games.js" defer></script>
	<script src="app.js" defer></script>
</head>
<body>
<header>
	<p><a class="logo" href="http://js13kgames.com"><img src="img/js13kgames.png" alt="js13kGames"></a></p>
</header>
<main>
	<h1>js13kGames A-Frame entries</h1>
	<p class="description">List of games submitted to the <a href="http://js13kgames.com/aframe">
       A-Frame category</a> in the <a href="http://2017.js13kgames.com">js13kGames 2017</a>
       competition. You can <a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa">
       fork js13kPWA on GitHub</a> to check its source code.</p>
	<button id="notifications">Request dummy notifications</button>
	<section id="content">
		// Content inserted in here
	</section>
</main>
<footer>
	<p>© js13kGames 2012-2018, created and maintained by <a href="http://end3r.com">
       Andrzej Mazur</a> from <a href="http://enclavegames.com">Enclave Games</a>.</p>
</footer>
</body>
</html>
```

{{HTMLElement("head")}} セクションには、アプリのタイトル、説明、CSS ファイルへの必要な参照、ウェブマニフェスト、メインアプリケーションの JavaScript ファイル (アプリを初期化する `app.js`)、追加の JavaScript コードファイルなど、アプリに関する基本的な情報が含まれています。{{HTMLElement("body")}} は、画像を表示する {{HTMLElement("header")}} と、 {{HTMLElement("main")}} 要素の中にあるアプリの本文に分かれています。アプリは、タイトル、説明文、そしてアプリのコンテンツを表示する場所 (ID が `content` である {{HTMLElement("section")}} 要素) を表示します。コンテンツの下には、著作権表示と各種リンクを提供する{{HTMLElement("footer")}}があります。

このアプリの唯一の仕事は、js13kGames 2017 のコンペティションに参加した [A-Frame](https://aframe.io/) 作品をすべてリストアップすることです。ご覧の通り、これはごく普通の 1 ページのウェブサイトです。このアプリの唯一の目的は、実際の PWA 機能の実装を検討するために使用できるシンプルなものを用意することです。

### CSS

このシンプルな例では、CSS も可能な限りシンプルにしています。{{cssxref("@font-face")}} を使用してカスタムフォントを読み込んで使用し、HTML 要素に簡単なスタイルを施しています。全体的なアプローチとしては、モバイル (レスポンシブウェブデザインのアプローチ) とデスクトップの両方で見栄えのするデザインを目指しています。

### app.js: メインアプリの JavaScript

`app.js` というファイルは、アプリが最初にロードされたときに実行されます。このファイルの役割は、主にアプリの初期化ですが、それ以外のこともできます。アプリがどのように機能するかは、このガイドの後の記事で詳しく説明します。

このアプリが最初に行うことは、次のテンプレートを使ってアプリの表示内容を生成することです。

```js
const template = `<article>
  <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  <h3>#POS. NAME</h3>
  <ul>
  <li><span>Author:</span> <strong>AUTHOR</strong></li>
  <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>
  <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>
  <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>
  <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>
  </ul>
</article>`;
let content = '';
for (let i = 0; i < games.length; i++) {
  let entry = template.replace(/POS/g, (i + 1))
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
    .replace(/TWITTER/g, games[i].twitter)
    .replace(/WEBSITE/g, games[i].website)
    .replace(/GITHUB/g, games[i].github);
  entry = entry.replace('<a href=\'http:///\'></a>', '-');
  content += entry;
}
document.getElementById('content').innerHTML = content;
```

それから[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)を登録します。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

その後、ID が `notifications` のボタンがクリックされたときのハンドラーを追加します。このハンドラーは、ユーザーに通知を送信する許可を求め、ランダムな通知を生成して送信します。

```js
const button = document.getElementById('notifications');
button.addEventListener('click', () => {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') {
            randomNotification();
        }
    });
});
```

その後、`randomNotification()` 関数が続き、ファイル内の最後のコードが完成します。

```js
function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

### サービスワーカー

最後に簡単にご紹介するのは、`sw.js` というファイルにあるサービスワーカーのファイルです。このスクリプトはまず、`data` ディレクトリーにある `games.js` というファイルからデータをインポートします。

```js
self.importScripts("data/games.js");
```

そして、サービスワーカーがキャッシュする必要のあるすべてのファイルのリストを作成します。このリストには、アプリのシェルファイルとコンテンツファイルの両方が含まれます。

```js
const cacheName = 'js13kPWA-v1';
const appShellFiles = [
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
    '/pwa-examples/js13kpwa/icons/icon-512.png',
];
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
    gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

ファイルリストの準備ができたら、いよいよサービスワーカー自体をインストールします。サービスワーカーは、リストアップされたすべてのファイルのキャッシングを実際に処理します。

```js
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});
```

このようにして、サービスワーカーの [fetch イベント](/ja/docs/Web/API/FetchEvent)のハンドラーを実装します。その仕事は、指定されたファイルのコンテンツを、キャッシュから、またはネットワーク経由でロードして (ロードする際にキャッシュして) 返すことです。

```js
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
```

### 補助的な JavaScript ファイル: games.js

このアプリの例では、ゲームのデータは `games.js` という JavaScript のソースファイルで提供されています。他のアプリでは、このデータに JSON や他のフォーマットを使用するかもしれません。

```js
var games = [
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
];
```

配列 `games` の各要素には特定のゲームが記述されており、`data/img/` ディレクトリーに対応する画像ファイルがあります。これが、JavaScript のコードを使って、ページの `content` セクションに読み込むコンテンツです。

## 関連情報

- [Fetch API](/ja/docs/Web/API/Fetch_API)
