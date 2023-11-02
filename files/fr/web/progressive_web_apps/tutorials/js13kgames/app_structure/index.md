---
title: Structure d'une application web progressive
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Dans cet article, nous analyserons l'application [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/), verrons pourquoi elle est construite de cette façon et les avantages que cela apporte.

La structure du site web [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) est plutôt simple&nbsp;: elle consiste en un simple fichier HTML ([`index.html`](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html)) avec un style CSS basique ([`style.css`](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css)) et quelques images, scripts et polices de caractères. La structure du répertoire ressemble à ceci&nbsp;:

![Structure des dossiers de js13kPWA.](js13kpwa-directory.png)

### Le HTML

Du point de vue HTML, le squelette de l'application est formé par tout ce qui se trouve en dehors de l'élément [`<section>`](/fr/docs/Web/HTML/Element/section)&nbsp;:

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
        <a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa"
          >fork js13kPWA on GitHub</a
        >
        to check its source code.
      </p>
      <button id="notifications">Request dummy notifications</button>
      <section id="content">// Content inserted in here</section>
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

La section [`<head>`](/fr/docs/Web/HTML/Element/head) contient certaines informations de base telles que le titre, la description et des liens vers les CSS, le manifeste web, le fichier JS contenant les jeux et `app.js`, là où notre application JavaScript est initialisée. Le [corps (`<body>`)](/fr/docs/Web/HTML/Element/body) est divisé en trois avec [`<header>`](/fr/docs/Web/HTML/Element/header) (contenant les images liées), [`<main>`](/fr/docs/Web/HTML/Element/main) la page (avec le titre, la description et un emplacement pour le contenu) et [`<footer>`](/fr/docs/Web/HTML/Element/footer) (le copyright et les liens).

Le seul travail de l'application est de lister toutes les entrées _A-Frame_ de la compétition js13kGames 2017. Comme vous pouvez le voir, c'est un site web sur une page, tout ce qu'il y a de plus ordinaire. Le but est d'avoir une base simple, afin que nous puissions nous concentrer sur l'implémentation des fonctionnalités relatives aux PWA.

### Le CSS

Le CSS est également aussi simple que possible&nbsp;: il utilise la règle [`@font-face`](/fr/docs/Web/CSS/@font-face) pour charger et utiliser une police de caractères personnalisée et il applique quelques mises en forme simples des éléments HTML. L'approche globale est d'avoir une conception qui soit belle à la fois sur mobile (avec une approche de conception adaptative) et sur ordinateur.

### Le fichier JavaScript principal

Le fichier `app.js` effectue plusieurs choses que nous regarderons de plus près dans les prochains articles. Avant tout, il génère le contenu à l'aide de ce modèle&nbsp;:

```js
const template = `<article>
  <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  <h3>#POS. NAME</h3>
  <ul>
    <li><span>Author:</span> <strong>AUTHOR</strong></li>
    <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>
    <li><span>Website:</span> <a href='https://WEBSITE/'>WEBSITE</a></li>
    <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>
    <li><span>More:</span> <a href='https://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>
  </ul>
</article>`;
let content = "";
for (let i = 0; i < games.length; i++) {
  let entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
    .replace(/TWITTER/g, games[i].twitter)
    .replace(/WEBSITE/g, games[i].website)
    .replace(/GITHUB/g, games[i].github);
  entry = entry.replace("<a href='https:///'></a>", "-");
  content += entry;
}
document.getElementById("content").innerHTML = content;
```

Ensuite, il enregistre un <i lang="en">service worker</i>&nbsp;:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

Le bloc de code suivant demande la permission d'émettre des notifications quand on clique sur un bouton&nbsp;:

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

Le dernier bloc crée des notifications qui affichent un élément choisi au hasard dans la liste des jeux&nbsp;:

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

### Le service worker

Le dernier fichier que nous allons rapidement regarder est le <i lang="en">service worker</i>&nbsp;: `sw.js`. Celui-ci importe d'abord les données du fichier `games.js`&nbsp;:

```js
self.importScripts("data/games.js");
```

Ensuite, il crée une liste de tous les fichiers à mettre en cache, qu'il s'agisse du squelette de l'application ou de son contenu&nbsp;:

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

Le bloc suivant installe le <i lang="en">service worker</i>, qui met ensuite en cache tous les fichiers contenus dans la liste ci-dessus&nbsp;:

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

Enfin, le <i lang="en">service worker</i> récupère le contenu du cache, s'il y est disponible, offrant ainsi un fonctionnement hors ligne&nbsp;:

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

### Les données JavaScript

Les données des jeux sont présentes dans le dossier nommé `data` sous la forme d'un objet JavaScript (dans le fichier [`games.js`](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js))&nbsp;:

```js
const games = [
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

Chaque entrée possède sa propre image dans le dossier `data/img`. Voici donc notre contenu qui sera chargé dans la section de contenu de la page via JavaScript.

## Pour la suite

Dans le prochain article, nous regarderons plus en détail comment le squelette de l'application et le contenu sont mis en cache avec un <i lang="en">service worker</i> pour que le site fonctionne en mode déconnecté.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
