---
title: PWA 结构
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
---

{{PWASidebar}} {{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Introduction", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

现在，我们已经知道了 PWA 背后的原理，让我们来看一个推荐的 PWA 结构，这个案例来自一个真实的应用。我们从分析 [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 这个应用开始：为什么它要这样构建？这样做又有什么好处？

## 应用架构

渲染网站主要有两种方法 - 在服务器上或在客户端上。它们都有其优点和缺点，你可以适当地混合使用这两种方法

- 服务器端渲染（SSR）的意思是在服务器上渲染网页，因此首次加载会更快，但是在不同页面之间导航都需要下载新的 HTML 内容。它的跨浏览器兼容性良好，但代价是页间加载时间延长，也就是总体感知上的性能降低：每加载一个页面，都需要一个服务器请求往返的时间。
- 客户端渲染（CSR）允许在导航到不同页面时几乎立即在浏览器中更新网站，但在开始时需要更多的初始下载和客户端上的额外渲染。首次访问时网站速度较慢，但后续访问速度要快得多。

将 SSR 与 CSR 混用可以获得最佳效果：您可以在服务器上渲染网站，缓存其内容，然后在客户端需要时更新渲染。因为使用了 SSR，第一页加载很快；因为客户端可以仅使用已更改的部分重新渲染页面，所以页面之间的导航也是平滑的。

您可以按自己喜欢的方式构建 PWA，但有些方式更合适。最流行的是“App Shell”概念，它完全按照上述方式混用 SSR 和 CSR；此外还遵循“离线优先”方法，这个我们将在后续文章中详细解释，也会在示例应用程序中使用。我们还会简要提及另一种涉及[Streams API](/zh-CN/docs/Web/API/Streams_API)的新方法

## App Shell 概念

App Shell 概念试图尽快加载最小用户界面，然后缓存它，以便在后续访问时可以离线使用，然后再加载应用程序的所有内容。这样，下次有人从设备访问应用程序时，UI 立即从缓存加载；如果缓存数据不可用的话，就从服务器请求新内容。

这种结构的页面很快，给用户的感觉也很快：用户会立即看到内容而不是加载动画或空白页。如果网络连接不可用，它还允许离线访问网站。

我们可以通过 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 控制从服务器请求的内容以及从缓存中检索的内容，这将在下一篇文章中详细解释。现在让我们关注这个结构本身。

### 我为什么要用它？

这种架构允许网站从 PWA 功能中获益最多：它可以缓存 App Shell 并以提升大量性能的方式管理动态内容。除了基本外壳之外，您还可以添加其他功能，例如[添加到主屏幕](/zh-CN/docs/Web/Apps/Progressive/Guides/Making_PWAs_installable)或[推送通知](/zh-CN/docs/Web/API/Push_API)。即使用户的浏览器不支持这些功能，你也可以放心应用可以正常运行，这就是渐进增强的美妙之处。

在不妥协 web 优势的前提下，网站感觉就像一个原生应用，交互及时、性能可靠。

### 可链接、渐进式和响应式

记住 PWA 的优点并在设计应用程序时牢记这一点非常重要。app shell 方案允许网站：

- 可链接（Linkable）：即使行为类似于原生应用，它仍然是一个网站：您可以点击页面内的链接，也可以通过发送 URL 的方式分享网站给别人。
- 渐进式（Progressive）：从“美好的旧式基础网站”开始，逐步添加新功能，在过程中检测其在浏览器上的可用性，并且优雅地处理不支持案例下发生的报错。举个例子，service workers 辅助下的离线模式只是提升网站体验的额外特性，但没有它网站也仍然完全可用。
- 响应式（Responsive）：响应式网页设计也适用于渐进式网络应用程序，因为它们都主要用于移动设备。拥有浏览器的设备太多太杂，所以确保网站在不同屏幕宽度、视口和像素密度上都可以访问就变得尤为重要。[viewport meta tag](/zh-CN/docs/Web/HTML/Viewport_meta_tag)、[CSS 媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)、[Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout) 和 [CSS Grid](/zh-CN/docs/Web/CSS/CSS_grid_layout) 等技术都可以助你实现这个目标。

## 另一种概念：流

使用 [Streams API](/zh-CN/docs/Web/API/Streams_API) 可以实现完全不同的服务器端或客户端渲染方法。在 service worker 的帮助下，它可以极大改进内容解析的方式。

App shell 概念要求在网站开始呈现之前所有资源就已可用。在 HTML 的下载过程中，用户可以从网站的加载和渲染过程看出资源的下载进度，但 JavaScript 必须完全下载完成才能运行。

Streams API 则允许开发人员直接访问来自服务器的数据流。如果您想对数据执行操作（例如给视频添加过滤器），不再需要等待所有数据流下载并转换为 blob（或者别的），而是可以立即开始。它提供精细的粒度控制，将数据流启动、与另一个流链接、取消、查错等等。

从理论上讲，数据流是更好的模型，但也更复杂。在撰写本文时（2018 年 3 月），Streams API 的制订仍在进行，并且在任何主流浏览器都不完全可用。当它可用时，它将是提供内容的最快方式，在性能上会有巨大的好处。

有关可用实例和更多信息，请参阅 [Streams API 文档](/zh-CN/docs/Web/API/Streams_API)。

## 示例应用的结构

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 这个网站的结构比较简单：它包含一个 HTML 页面（index.html）、一个 CSS 样式表（style.css）、一些图片、JS 脚本和字体。它的文件结构如下所示：

![Folder structure of js13kPWA.](js13kpwa-directory.png)

### HTML 页面

从 HTML 的角度，App Shell 就是 content 节之外的一切：

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

{{htmlelement("head")}} 一节包含一些基本信息，例如标题、描述、CSS 链接、描述文件、游戏内容的 JS 文件，以及 app.js，也就是我们这个 JavaScript 应用程序的入口点。{{htmlelement("body")}} 标签分为 {{htmlelement("header")}}（包含一张带链接的图片）、{{htmlelement("main")}} 页面主体（有标题、描述和放置内容的区域），以及 {{htmlelement("footer")}}（包含版权信息和链接）。

这个应用的唯一功能就是列出 js13kGames 2017 年比赛中的 A-Frame（一个用来构建虚拟现实（VR）应用的网页开发框架，译者注）项目列表。如你所见，这是一个很普通的单页应用，目的是用一个简单的东西来展示 PWA 的真实功能。

### CSS 部分

CSS 部分也是尽可能的简单：运用 {{cssxref("@font-face")}} 来加载和使用自定义字体，以及给 HTML 元素提供简单的样式，总体的目标是通过使用响应式布局，让页面在移动端和桌面设备上都漂亮。

### 主角 app.js

我们会在下一篇文章中详细分析 app.js 所做的这些工作。首先它用下面的模板生成了 content 中的内容：

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

接着，它注册了一个 service worker：

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

下面这部分代码实现了一个功能：点击按钮时请求用户授权，用来向用户推送通知。

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

最后这部分是创建通知的代码，它会随机展示游戏列表中的一个项目：

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

### service worker

最后我们来快速浏览一下 Service Worker 相关的文件 sw\.js。它首先引入 games.js 这个文件：

```js
self.importScripts("data/games.js");
```

接着，程序会对 App Shell 和主体内容里面的数据创建一个缓存列表：

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

下面的代码用来配置 Service Worker，缓存上述列表的工作就发生在这里：

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

最后，如果条件允许，Service Worker 将从缓存中请求内容所需的数据，从而提供离线应用功能：

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

### JavaScript 数据

项目中所用的游戏数据放置在 data 文件夹下面，以 JavaScript 对象的形式提供（[games.js](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js)）：

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

每一个入口在 data/img 文件夹下面都有属于它自己的图片。这些就是我们的内容数据，我们通过 JS 将这些数据加载到主体内容中。

## 下一步

下一篇文章中，我们会探讨更多的细节：Service Worker 如何帮助我们缓存 App Shell 和内容，从而让我们实现离线功能。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Introduction", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
