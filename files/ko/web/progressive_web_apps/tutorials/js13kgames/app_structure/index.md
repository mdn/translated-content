---
title: 프로그레시브 웹 앱 구조
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
---

{{PreviousMenuNext("Web/Apps/Progressive/Introduction", "Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive")}}

이제 우리는 PWA의 원리에 대해 알고 있습니다. 실제 앱의 권장 구조에 대해 살펴봅시다. 우리는 [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 어플리케이션을 왜 그렇게 구축하였는지, 그리고 무슨 이점이 있는지 분석하는 것으로 시작할 것입니다.

## 앱의 구조

웹 사이트를 렌더링하는 것에는 서버 사이드와 클라이언트 사이드라는 두 가지 다른 접근법이 있습니다. 이 둘 모두 장점과 단점을 갖고 있으며, 여러분은 이 두 접근법을 적절히 혼합할 수 있습니다.

- 서버 사이드 렌더링(SSR)은 웹사이트가 서버에서 렌더링되는 것을 의미합니다. 따라서 더 빠른 첫 로딩을 제공할 수 있지만, 페이지간의 이동에서 모든것들을 매번 다운로드해야합니다. 브라우저를 넘어 훌륭하게 동작하고 개발 프로세스를 돕는 많은 도구들이 있지만, 각 페이지를 로딩할 때마다 서버를 거쳐야 한다는 점에서 로딩 속도 및 성능으로 인식되는 일반적인 측면에서 어려움이 있습니다.
- 클라이언트 사이드 렌더링(CSR)은 웹 사이트가 다른 페이지로 이동할 때 브라우저에서 거의 즉시 업데이트될 수 있도록 해주지만, 시작할 때 더 많은 초기 다운로드와 추가 렌더링이 필요합니다. 웹사이트는 첫 방문시 더 느리지만 다음 방문에서 훨씬 빠릅니다.

SSR과 CSR을 혼합하여 서버에서 웹 사이트를 렌더링하고, 컨텐츠를 캐싱한 후, 필요할 때 클라이언트 사이드에서 렌더링을 업데이트하여 최고의 결과를 이끌어 낼 수 있습니다. 첫 페이지 로딩은 SSR때문에 빠르고, 페이지간의 이동은 클라이언트에서 변경된 부분만 다시 렌더링하므로 부드럽습니다.

여러분이 선호하는 접근법을 사용해 PWA를 구축할 수 있지만, 다른 것들보다 더 잘 동작하는 몇 가지 방법이 있습니다. 가장 유명한 접근법은 바로 위에서 설명한 SSR과 CSR을 혼합한 "app shell" 개념이며, 그 다음으로 "오프라인 우선" 방법론입니다. 이는 우리의 예제 앱을 사용해 다음 문서에서 자세한 내용에 대해 설명할 것입니다. 간략히 설명드릴 [Streams API](/ko/docs/Web/API/Streams_API)를 포함하는 새로운 접근법도 있습니다.

## App shell

App shell 개념은 가능한 최소한의 사용자 인터페이스를 로딩하는것에 중점을 두고 있으며, 이를 캐싱하여 다음 방문에서 앱의 모든 컨텐츠가 로딩되기 전에 오프라인에서도 사용이 가능합니다. 이렇게 하면 다음에 누군가 기기로부터 앱에 방문할 때, UI는 캐시로부터 즉시 로딩되고 새로운 컨텐츠는 서버로부터 요청합니다(캐시에서 이미 사용할 수 없는 경우).

이 구조는 빠르고, 사용자가 로딩 스피너나 빈 페이지 대신 "무언가"를 즉시 보게됨으로써 속도가 빠름을 느낄 수 있습니다. 또한 네트워크 연결이 불가할 때 웹사이트를 오프라인에서도 접근할 수 있도록 허용합니다.

우리는 서버로부터 요청된 것과 [service worker](/ko/docs/Web/API/Service_Worker_API)를 사용해 캐시된 것으로부터 받은 것들을 제어할 수 있습니다. 다음 문서에서 자세한 내용에 대해 설명할 것입니다. 지금은 구조 자체에 대해 집중합시다.

### 이걸 사용해야 하는 이유가 무엇인가요?

이 구조는 웹 사이트에 모든 PWA 기능들로부터 최고의 이점을 제공합니다. App shell을 캐싱하고 동적인 컨텐츠를 관리하여 훌륭하게 성능을 향상시킵니다. 기본 shell과 더불어, 앱이 사용자들의 브라우저에서 지원되지 않을 때도 여전히 사용하다는 전제하에 [홈 화면에 추가](/ko/docs/Web/Apps/Progressive/Add_to_home_screen) 또는 [푸시 알림](/ko/docs/Web/API/Push_API)과 같은 다른 기능들도 추가할 수 있습니다. 이 점이 점진적인 향상의 아름다움입니다.

웹 사이트는 웹의 이점들을 모두 유지하면서 즉각적인 반응과 견고한 성능을 가진 네이티브 앱처럼 느껴집니다.

### 연결 가능하며, 점진적이고 디자인에 반응하는 것

어플리케이션을 디자인할 때 PWA의 이점을 기억하고 이를 유지하는 것이 중요합니다. App shell 접근법은 웹 사이트가 다음과 같이 될 수 있도록 허용합니다.

- 연결 가능: 네이티브 앱처럼 동작한다고해도 이는 여전히 웹 사이트입니다. 여러분은 페이지의 링크를 클릭할 수 있고, 누군가에게 URL을 공유할 수 있습니다.
- 점진적: "좋은 오래된 기본적인 웹사이트"로 시작해서 새로운 기능을 점진적으로 추가하되, 브라우저에서 지원하지 않는 기능을 감지하고 이에 대한 적절한 에러 처리를 할 것을 기억하시기 바랍니다. 예를 들어, service worker의 도움을 통한 오프라인 모드는 더 나은 웹 사이트 경험을 제공하는 부가적인 특성일 뿐, 없어도 충분히 사용이 가능합니다.
- 반응형: 반응형 웹 디자인 또한 프로그레시브 웹 앱에 적용됩니다. 둘 다 주로 모바일 기기에 해당됩니다. 기기와 브라우저는 아주 다양합니다. 따라서 [뷰포트 meta 태그](/ko/docs/Mozilla/Mobile/Viewport_meta_tag), [CSS 미디어 쿼리](/ko/docs/Web/CSS/Media_Queries/Using_media_queries), [Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout), [CSS Grid](/ko/docs/Web/CSS/CSS_Grid_Layout) 와 같은 기술들을 사용해 여러분의 웹사이트를 다양한 화면 크기, 뷰포트 또는 픽셀 밀도에서 동작하도록 준비하는 것이 중요합니다.

## 다른 개념: streams

[Streams API](/ko/docs/Web/API/Streams_API)를 사용해 완전히 다른 방식으로 서버 또는 클라이언트 사이드 렌더링 수행할 수 있습니다. Service worker로부터의 약간 도움으로 우리는 컨텐츠를 분석하는 방법을 크게 향상시킬 수 있습니다.

App shell 모델은 사용할 모든 리소스를 웹 사이트가 렌더링을 시작하기 전에 필요로합니다. 이는 브라우저가 실제로 데이터를 스트리밍하고 엘리먼트가 웹 사이트에 로드되고 렌더링되었을 때 여러분이 볼 수 있으므로 HTML과 다릅니다. 하지만, JavaScript를 "동작 가능하게" 하려면, 이를 전체적으로 다운로드해야 합니다.

Streams API는 개발자가 서버로부터의 데이터 스트리밍에 직접 접근할 수 있도록 해줍니다. 여러분이 데이터에 대한 작업을 수행하길 원할 경우(비디오에 필터를 추가하는 것과 같은), 모든 데이터의 다운로드 및 blob로의 변환(어떤 타입으로든)을 기다릴 필요없이 바로 시작할 수 있습니다. Streams API는 시작, 다른 stream으로 연결, 취소, 에러 확인 등의 세분화된 컨트롤을 제공합니다.

이론적으로 스트리밍은 더 나은 모델이지만, 더 복잡하며 글을 작성하는 시점(2018년 3월)에서 Streams API는 여전히 작업중이며 모든 주요 브라우저에서 아직 완전하게 사용이 가능하지 않습니다. 사용이 가능해지면 이는 컨텐츠를 제공하는 가장 빠른 방법이 될 것입니다. 성능 측면에서 아주 큰 이점을 갖게 될 것입니다.

작동하는 예제와 자세한 내용은 [Streams API 문서](/ko/docs/Web/API/Streams_API)를 확인하시기 바랍니다.

## 예제 어플리케이션의 구조

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 웹 사이트 구조는 아주 간단합니다. 하나의 HTML 파일([index.html](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html))과 기본적인 CSS 스타일링([style.css](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css)), 몇 가지 이미지, 스크립트, 폰트로 구성되어 있습니다. 폴더 구조는 다음과 같습니다.

![Folder structure of js13kPWA.](js13kpwa-directory.png)

### HTML

HTML의 관점에서보면 app shell은 컨텐츠 섹션 외부의 모든 영역입니다.

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
      <section id="content">// Content inserted in here</section>
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

{{htmlelement("head")}} 섹션은 title, description, CSS 링크, 웹 manifest, games 컨텐츠 JS 파일, app.js 파일을 포함합니다. JavaScript 어플리케이션이 초기화되는 곳이기도 합니다. {{htmlelement("body")}}는 {{htmlelement("header")}}(연결된 이미지를 포함), {{htmlelement("main")}}페이지(title, description, 컨텐츠를 위한 공간), {{htmlelement("footer")}}(저작권 및 링크)로 나누어져 있습니다.

app의 유일한 작업은 js13kGames 2017 대회의 A-Frame 항목을 모두 나열하는 것입니다. 보시다시피 매우 평범하고, 한 페이지 웹 사이트 입니다. 중요한 것은 실제 PWA 기능들의 구현에 집중할 수 있는 무언가 간단한 것을 갖는 것입니다.

### CSS

CSS도 평범합니다. {{cssxref("@font-face")}}를 사용해 커스텀 폰트를 로딩 및 사용하고, 몇 가지 HTML 엘리먼트에 간단한 스타일을 적용합니다. 전반적인 접근은 모바일(반응형 웹 디자인 접근법)과 데스크탑 기기 모두에서 괜찮게 보이도록 하는 것입니다.

### 메인 앱 JavaScript

app.js 파일은 다음 문서에서 자세히 살펴볼 몇 가지 것들을 합니다. 먼저, 다음 템플릿을 기반으로 컨텐츠를 생성합니다.

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

다음으로, service worker를 등록합니다.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

다음 코드 블럭은 버튼을 클릭했을 때 알림에 대한 권한을 요청합니다.

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

마지막 블럭은 게임 리스트로부터 랜덤하게 선택된 항목을 나타내는 알림을 생성합니다.

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

### Service worker

빠르게 살펴볼 마지막 파일(sw\.js)은 service worker입니다. 이는 먼저 games.js 파일로부터 데이터를 불러옵니다.

```js
self.importScripts("data/games.js");
```

다음으로, app shell과 컨텐츠 모두로부터 캐싱할 모든 파일의 리스트를 생성합니다.

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

다음 블럭은 service worker를 설치하여 위의 목록에 포함된 모든 파일을 실제로 캐싱합니다.

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

마지막으로, service worker는 가능한 경우 캐시로부터 컨텐츠를 패치하여 오프라인 기능을 제공합니다.

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

### JavaScript 데이터

게임 데이터는 JavaScript 객체([games.js](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js))의 data 폴더에 있습니다.

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

모든 항목은 data/img 폴더안의 각각의 이미지를 갖고 있습니다. 이는 JavaScript를 사용해 컨텐츠 섹션으로 로딩될 컨텐츠입니다.

## 다음으로

다음 문서에서는 service worker의 도움을 통한 오프라인 사용을 위해 app shell과 컨텐츠가 어떻게 캐싱되는지에 대해 더 자세히 살펴볼 것입니다.

{{PreviousMenuNext("Web/Apps/Progressive/Introduction", "Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive")}}
