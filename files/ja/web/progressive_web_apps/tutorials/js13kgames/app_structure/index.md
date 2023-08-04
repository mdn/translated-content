---
title: プログレッシブウェブアプリの構造
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
---

{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}

PWA の背後にある理論が分かったところで、推奨されるアプリの構造を見てみましょう。まず、 [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) アプリの分析、それがなぜそのように構築されているのか、それがもたらす利点について説明します。

## アプリのアーキテクチャ

ウェブサイトをレンダリングするには、サーバー上とクライアント上の 2 つのアプローチがあります。どちらにも長所と短所があり、2 つのアプローチをある程度組み合わせることができます。

- サーバー側レンダリング (Server-side rendering、SSR) は、ウェブサイトがサーバー上でレンダリングされるという意味で、初回の読み込みは速くなりますが、ページ間で移動すると新しい HTML コンテンツをダウンロードする必要があります。これはブラウザーが変わってもうまく動作しますが、ページ間で移動する時間が不利であり、したがって一般的にパフォーマンスが悪くなります。 — ページを読み込むごとに、サーバーへの新しい往復が必要になるからです。
- クライアント側レンダリング (Client-side rendering、CSR) を使用すると、ウェブサイトがさまざまなページに移動したときにブラウザー内でほぼ瞬時に更新できますが、初期ダウンロード数が増え、最初はクライアントで余分なレンダリングが必要になります。 ウェブサイトは最初の訪問では遅くなりますが、その後の訪問ではずっと速くなります。

SSR と CSR を組み合わせることで最良の結果が得られます — ウェブサイトをサーバー上にレンダリングし、そのコンテンツをキャッシュしてから、必要に応じてクライアント側でレンダリングを更新することができます。 SSR のおかげで最初のページの読み込みは速く、クライアントは変更された部分だけでページを再レンダリングできるため、ページ間のナビゲーションはスムーズです。

PWA は好きなアプローチで構築できますが、他のものよりもうまく機能するものもあります。 最も人気のあるアプローチは、 SSR と CSR をまさに上記の方法で組み合わせた「アプリシェル」の概念です。 さらに、今後の記事で詳細に説明し、サンプルアプリで使用する「オフライン優先」の方法論に従います。 [Streams API](/ja/docs/Web/API/Streams_API) に関する新しいアプローチもありますが、これについては後で簡単に説明します。

## アプリシェル

アプリシェル (App shell) の概念は、最小限のユーザーインターフェイスをできるだけ早く読み込んでからキャッシュすること関係しています。 それで、アプリのすべてのコンテンツを読み込むことで、その後のアクセスでオフラインで利用できるようにします。 こうすることで、次回デバイスからアプリにアクセスしたときに、 UI がすぐにキャッシュから読み込まれ、 (まだキャッシュにない場合) 新しいコンテンツがサーバーから要求されます。

この構造は高速であり、ローディングスピナーや空白のページではなく、ユーザーが即座に「何か」を見たときにも高速に感じられます。 ネットワーク接続が利用できない場合は、ウェブサイトにオフラインでアクセスすることもできます。

サーバーから要求される内容とキャッシュから取得される内容を[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)で制御できます。 詳細は次の記事で説明します — ここでは構造自体に焦点を当てます。

### なぜそれを使うべきか？

このアーキテクチャにより、ウェブサイトはすべての PWA 機能を最大限に活用できます — つまり、アプリシェルをキャッシュし、パフォーマンスを大幅に向上させるように動的コンテンツを管理します。 基本的なシェルに加えて、[ホーム画面への追加](/ja/docs/Web/Progressive_web_apps/Add_to_home_screen)や[プッシュ通知](/ja/docs/Web/API/Push_API)などの他の機能を追加でき、ユーザーのブラウザーでサポートされていない場合でも、アプリは正常に動作することがわかっているので安全です — これがプログレッシブエンハンスメントの美しさです。

ウェブサイトは、ウェブのすべての利点を維持しながら、即時の対話と堅実なパフォーマンスを備えたネイティブアプリのように感じられます。

### 設計によりリンク可能、プログレッシブ、レスポンシブであること

PWA の利点を覚えておき、アプリケーションを設計するときには、それらを念頭に置いておくことが重要です。 アプリシェルのアプローチにより、ウェブサイトは次のようになります。

- リンク可能: ネイティブアプリのように動作しますが、それでもウェブサイトです — ページ内のリンクをクリックして、共有したい場合は他の人に URL を送信できます。
- プログレッシブ: 「古き良き基本的なウェブサイト」から始めて、ブラウザーで利用できるかどうかを検出し、サポートが利用できない場合に発生するエラーを適切に処理しながら、新機能を徐々に追加します。 例えば、サービスワーカーの助けを借りたオフラインモードは、ウェブサイトのエクスペリエンスを向上させるための特別な特徴ですが、それがなくても完全に使用可能です。
- レスポンシブ: レスポンシブウェブデザイン (Responsive web design) はプログレッシブウェブアプリにも適用され、どちらも主にモバイルデバイス用です。 ブラウザーを搭載したデバイスは数多くあります — [ビューポートメタタグ](/ja/docs/Mobile/Viewport_meta_tag)、[CSS メディアクエリ](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)、[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)、[CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)などの技術を使用して、さまざまな画面サイズ、ビューポート、ピクセル密度で機能するようにウェブサイトを準備することが重要です。

## 異なるコンセプト: ストリーム

[Streams API](/ja/docs/Web/API/Streams_API) を使用すると、サーバー側またはクライアント側のレンダリングに対するまったく異なるアプローチを実現できます。 サービスワーカーからの少しの助けで、ストリームはコンテンツを解析する方法を大いに改善することができます。

アプリシェルのモデルでは、ウェブサイトがレンダリングを開始する前にすべてのリソースが利用可能である必要があります。 HTML とは異なり、ブラウザーが実際にデータを既にストリーミング (読み込みながら再生) しているので、いつウェブサイトに要素が読み込まれてレンダリングされるかを見ることができます。 ただし、 JavaScript を「動作可能」にするには、 JavaScript を完全にダウンロードする必要があります。

Streams API を使用すると、開発者はサーバーからのデータストリーミングに直接アクセスできます — データに操作を実行する場合 (例えば、動画にフィルタを追加する場合など) は、すべてがダウンロードされて BLOB (またはその他) に変換されるのを待つ必要はもうありません — すぐに始めることができます。 それは、きめ細かい制御を提供します — ストリームを開始したり、別のストリームとチェーンしたり、キャンセルしたり、エラーをチェックしたりすることができます。

理論的には、ストリーミングはより優れたモデルですが、より複雑でもあり、この記事の執筆時点 (2018 年 3 月) では Streams API はまだ開発中であり、主要ブラウザーのいずれでもまだ完全には利用できません。 それが利用可能になると、それはコンテンツを提供する最も速い方法になるでしょう — パフォーマンスの面で利点は巨大になるでしょう。

実用的な例や詳細については、[Streams API の資料](/ja/docs/Web/API/Streams_API)を参照してください。

## サンプルアプリの構造

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) ウェブサイトの構造は非常に単純です。単一の HTML ファイル ([index.html](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html)) と基本的な CSS のスタイル付け ([style.css](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css))、いくつかの画像、スクリプト、およびフォントで構成されています。 フォルダー構造は次のようになります。

![js13kPWA のフォルダー構成](js13kpwa-directory.png)

### HTML

HTML の観点から見ると、アプリシェルは content セクション以外のすべてのものです。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>js13kGames A-Frame entries</title>
    <meta
      name="description"
      content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps." />
    <meta name="author" content="end3r" />
    <meta name="theme-color" content="#B12A34" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:image" content="icons/icon-512.png" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="js13kpwa.webmanifest" />
    <script src="data/games.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <p>
        <a class="logo" href="http://js13kgames.com"
          ><img src="img/js13kgames.png" alt="js13kGames"
        /></a>
      </p>
    </header>
    <main>
      <h1>js13kGames A-Frame entries</h1>
      <p class="description">
        List of games submitted to the
        <a href="http://js13kgames.com/aframe">A-Frame category</a> in the
        <a href="http://2017.js13kgames.com">js13kGames 2017</a> competition.
        You can
        <a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa"
          >fork js13kPWA on GitHub</a
        >
        to check its source code.
      </p>
      <button id="notifications">Request dummy notifications</button>
      <section id="content">// コンテンツはここに動的に挿入されます</section>
    </main>
    <footer>
      <p>
        © js13kGames 2012-2018, created and maintained by
        <a href="http://end3r.com">Andrzej Mazur</a> from
        <a href="http://enclavegames.com">Enclave Games</a>.
      </p>
    </footer>
  </body>
</html>
```

{{htmlelement("head")}} セクションには、タイトル、説明、 CSS へのリンク、ウェブマニフェスト、ゲームコンテンツの JS ファイル、および `app.js` (ここで、JavaScript アプリが初期化されます) などの基本的な情報が含まれています。 {{htmlelement("body")}} は、{{htmlelement("header")}} (リンクした画像を含む)、{{htmlelement("main")}} ページ (タイトル、説明、コンテンツの場所)、および {{htmlelement("footer")}} (著作権およびリンク) に分割されています。

アプリの唯一の仕事は、 js13kGames 2017 コンペティションからすべての A-Frame エントリをリストすることです。 ご覧のとおり、これはごく普通の 1 ページのウェブサイトです — 重要なのは、実際の PWA 機能の実装に集中できるように、簡単なものを用意することです。

### CSS

CSS も可能な限りわかりやすくなっています。 つまり、 {{cssxref("@font-face")}} を使用してカスタムフォントを読み込んで使用し、さらに HTML 要素の単純なスタイルを適用します。 全体的なアプローチは、デザインをモバイルデバイス (レスポンシブウェブデザインのアプローチ) とデスクトップデバイスの両方で見栄えよくすることです。

### メインアプリの JavaScript

`app.js` ファイルは、次の記事で詳しく調べることをいくつか行います。 まず最初に、次のテンプレートに基づいてコンテンツを生成します。

```js
var template =
  "<article>\n\
    <img src='data/img/SLUG.jpg' alt='NAME'>\n\
    <h3>#POS. NAME</h3>\n\
    <ul>\n\
    <li><span>Author:</span> <strong>AUTHOR</strong></li>\n\
    <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>\n\
    <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>\n\
    <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>\n\
    <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>\n\
    </ul>\n\
</article>";
var content = "";
for (var i = 0; i < games.length; i++) {
  var entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
    .replace(/TWITTER/g, games[i].twitter)
    .replace(/WEBSITE/g, games[i].website)
    .replace(/GITHUB/g, games[i].github);
  entry = entry.replace("<a href='http:///'></a>", "-");
  content += entry;
}
document.getElementById("content").innerHTML = content;
```

次に、サービスワーカーを登録します。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

次のコードブロックは、ボタンがクリックされたときに通知の許可を要求します。

```js
var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

最後のブロックは、ゲームリストからランダムに選択されたアイテムを表示する通知を作成します。

```js
function randomNotification() {
  var randomItem = Math.floor(Math.random() * games.length);
  var notifTitle = games[randomItem].name;
  var notifBody = "Created by " + games[randomItem].author + ".";
  var notifImg = "data/img/" + games[randomItem].slug + ".jpg";
  var options = {
    body: notifBody,
    icon: notifImg,
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

### サービスワーカー

すばやく見る最後のファイルはサービスワーカーです: `sw.js` — それは最初に `games.js` ファイルからデータをインポートします。

```js
self.importScripts("data/games.js");
```

次に、アプリシェルとコンテンツの両方から、キャッシュされるすべてのファイルのリストを作成します。

```js
var cacheName = "js13kPWA-v1";
var appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
var gamesImages = [];
for (var i = 0; i < games.length; i++) {
  gamesImages.push("data/img/" + games[i].slug + ".jpg");
}
var contentToCache = appShellFiles.concat(gamesImages);
```

次のブロックはサービスワーカーをインストールし、上記のリストに含まれるすべてのファイルを実際にキャッシュします。

```js
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(contentToCache);
    }),
  );
});
```

最後に、サービスワーカーは、キャッシュからコンテンツが利用できる場合はそれをキャッシュから取得し、オフライン機能を提供します。

```js
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      console.log("[Service Worker] Fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url,
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});
```

### JavaScript データ

ゲームデータは、 JavaScript オブジェクト ([`games.js`](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js)) の形式で `data` フォルダーにあります。

```js
var games = [
  {
    slug: "lost-in-cyberspace",
    name: "Lost in Cyberspace",
    author: "Zosia and Bartek",
    twitter: "bartaz",
    website: "",
    github: "github.com/bartaz/lost-in-cyberspace",
  },
  {
    slug: "vernissage",
    name: "Vernissage",
    author: "Platane",
    twitter: "platane_",
    website: "github.com/Platane",
    github: "github.com/Platane/js13k-2017",
  },
  // ...
  {
    slug: "emma-3d",
    name: "Emma-3D",
    author: "Prateek Roushan",
    twitter: "",
    website: "",
    github: "github.com/coderprateek/Emma-3D",
  },
];
```

すべてのエントリは `data/img` フォルダーに独自の画像を持っています。 これは JavaScript でコンテンツセクションに読み込まれたコンテンツです。

## 次へ

次の記事では、サービスワーカーの助けを借りて、オフラインで使用するためにアプリシェルとコンテンツがどのようにキャッシュされるかについて詳しく説明します。

{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
