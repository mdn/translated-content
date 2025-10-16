---
title: プログレッシブウェブアプリの構造
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
l10n:
  sourceCommit: a34d62daf2294f7f4d1f339cee60ba58c109ae01
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

この記事では、 [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) アプリを分析し、それがなぜそのように構築されているのか、それがもたらす利点について説明します。

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) ウェブサイトの構造はとてもシンプルです。単一の HTML ファイル ([index.html](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/index.html)) と基本的な CSS のスタイル付け ([style.css](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/style.css))、いくつかの画像、スクリプト、およびフォントで構成されています。 フォルダー構造は次のようになります。

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
    <meta
      property="og:image"
      content="https://js13kgames.com/img/js13kgames-banner.png" />
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="js13kpwa.webmanifest" />
    <script src="data/games.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <p>
        <a class="logo" href="https://js13kgames.com">
          <img src="img/js13kgames.png" alt="js13kGames" />
        </a>
      </p>
    </header>
    <main>
      <h1>js13kGames A-Frame entries</h1>
      <p class="description">
        List of games submitted to the
        <a href="https://js13kgames.com/aframe">A-Frame category</a> in the
        <a href="https://2017.js13kgames.com">js13kGames 2017</a> competition.
        You can
        <a href="https://github.com/mdn/pwa-examples/blob/main/js13kpwa"
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
        <a href="https://end3r.com">Andrzej Mazur</a> from
        <a href="https://enclavegames.com">Enclave Games</a>.
      </p>
    </footer>
  </body>
</html>
```

{{htmlelement("head")}} セクションには、タイトル、説明、 CSS へのリンク、ウェブマニフェスト、ゲームコンテンツの JS ファイル、および `app.js` (ここで、JavaScript アプリが初期化されます) などの基本的な情報が含まれています。 {{htmlelement("body")}} は、{{htmlelement("header")}} (リンクした画像を含む)、{{htmlelement("main")}} ページ (タイトル、説明、コンテンツの場所)、および {{htmlelement("footer")}} (著作権およびリンク) に分割されています。

アプリの唯一の仕事は、 js13kGames 2017 コンペティションからすべての A-Frame エントリーをリストすることです。 ご覧のとおり、これはごく普通の 1 ページのウェブサイトです — 重要なのは、実際の PWA 機能の実装に集中できるように、簡単なものを用意することです。

### CSS

CSS も可能な限りわかりやすくなっています。 つまり、 {{cssxref("@font-face")}} を使用してカスタムフォントを読み込んで使用し、さらに HTML 要素の単純なスタイルを適用します。 全体的なアプローチは、デザインをモバイルデバイス (レスポンシブウェブデザインのアプローチ) とデスクトップデバイスの両方で見栄えよくすることです。

### メインアプリの JavaScript

`app.js` ファイルは、次の記事で詳しく調べることをいくつか行います。 まず最初に、次のテンプレートに基づいてコンテンツを生成します。

```js
const template = `<article>
  <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  <h3>#POS. NAME</h3>
  <ul>
  <li><span>Author:</span> <strong>AUTHOR</strong></li>
  <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>
  <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>
  <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>
  </ul>
</article>`;
let content = "";
for (let i = 0; i < games.length; i++) {
  let entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
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
const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

最後のブロックは、ゲームリストからランダムに選択されたアイテムを表示する通知を作成します。

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

すばやく見る最後のファイルはサービスワーカーです: `sw.js` — それは最初に `games.js` ファイルからデータをインポートします。

```js
self.importScripts("data/games.js");
```

次に、アプリシェルとコンテンツの両方から、キャッシュされるすべてのファイルのリストを作成します。

```js
const cacheName = "js13kPWA-v1";
const appShellFiles = [
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
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

次のブロックはサービスワーカーをインストールし、上記のリストに含まれるすべてのファイルを実際にキャッシュします。

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })(),
  );
});
```

最後に、サービスワーカーは、キャッシュからコンテンツが利用できる場合はそれをキャッシュから取得し、オフライン機能を提供します。

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});
```

### JavaScript データ

ゲームデータは、 JavaScript オブジェクト ([games.js](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/data/games.js)) の形式で `data` フォルダーにあります。

```js
const games = [
  {
    slug: "lost-in-cyberspace",
    name: "Lost in Cyberspace",
    author: "Zosia and Bartek",
    website: "",
    github: "github.com/bartaz/lost-in-cyberspace",
  },
  {
    slug: "vernissage",
    name: "Vernissage",
    author: "Platane",
    website: "github.com/Platane",
    github: "github.com/Platane/js13k-2017",
  },
  // ...
  {
    slug: "emma-3d",
    name: "Emma-3D",
    author: "Prateek Roushan",
    website: "",
    github: "github.com/coderprateek/Emma-3D",
  },
];
```

すべてのエントリーは data/img フォルダーに独自の画像を持っています。 これは JavaScript でコンテンツセクションに読み込まれたコンテンツです。

## 次へ

次の記事では、サービスワーカーの助けを借りて、オフラインで使用するためにアプリシェルとコンテンツがどのようにキャッシュされるかについて詳しく説明します。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
