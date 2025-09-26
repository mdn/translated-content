---
title: 经期跟踪器：Service worker
short-title: Service worker
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

目前为止，我们已经为经期跟踪器编写了 HTML、CSS 和 JavaScript，添加了清单文件用于定义颜色、图标、URL 以及其他的应用特性。我们已经有了一个能运行的 Web 应用！但它还不是一个 PWA。在这一章节，我们将要编写将我们的功能完整、能够作为独立应用分发并且能无缝地在离线状态下运行的 Web 应用转化为 PWA 所需的 JavaScript 脚本。

如果你还没有完成到这一步，请复制这些 [HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/index.html)、[CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/style.css)、[JavaScript](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/app.js)，还有[清单](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/cycletracker.json) JSON 文件的内容，并分别按照以下文件名保存：`index.html`、`styles.css`、`app.js` 以及 `cycletracker.json`。

在本章节，我们要创建 `sw.js`——service worker 脚本，用于将我们的 Web 应用转化成 PWA。我们已经有了一个 JavaScript 文件——在 HTML 文件的最后一行里名为 `app.js` 的那一个。这个 JavaScript 脚本提供了全部标准 Web 应用特性的功能。我们并不会像使用 `app.js` 那样通过 {{HTMLElement("script")}} 元素的 `src` 属性来调用 `sw.js`，而是通过注册 service worker 来建立它与 Web 应用的联系。

在本课程的最后，你将会拥有一个功能完整的 PWA——一个能够被完整安装的、即使用户处于离线状态也能运行的逐步增强的 Web 应用。

## Service worker 的职责

Service worker 能够让应用离线运行，并且时刻确保应用是最新的。为了能出色地做到这点，service worker 应当包含以下信息：

- 版本号（或者其他标识）。
- 缓存资源的列表。
- 缓存版本的名称。

Service worker 还需要负责：

- 在应用被安装时安装缓存资源。
- 根据需要更新自身和其他的应用文件。
- 移除不会再被用到的缓存文件。

我们通过响应以下三种 service worker 事件来实现这些任务：

- [`fetch`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) 事件、
- [`install`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/install_event) 事件，以及
- [`activate`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/activate_event) 事件。

### 版本号

PWA 一但在用户的机器上被安装，唯一通知浏览器有要检索的更新文件的方法就是对 service worker 作出修改。如果 PWA 的其他资源发生了改动——比如 HTML 更新了、CSS 里的 bug 被修复了、`app.js` 添加了新函数、一张图片被压缩了以减少文件体积，等等——你安装的 PWA 的 service worker 是不会知道它需要下载更新资源的。只有 service worker 被改动了，PWA 才会知道它也许该更新缓存了，然后去发起更新的任务。

虽然修改任意字符在技术上都足以达成，但 PWA 的最佳做法是创建一个按顺序更新的版本号常量用以指示文件的更新。即使 service worker 本身没有其他任何的改动，也应当以更新版本号（或者日期）这种较为正式的方式对 service worker 做出修改，这也是给开发人员提供一种辨别应用版本的方法。

#### 任务

新建一个包含版本号的 JavaScript 文件：

```js
const VERSION = "v1";
```

将文件保存为 `sw.js`。

### 离线资源列表

为了能有优良的离线体验，缓存文件列表应当包含 PWA 离线时需要使用的所有资源。即使清单文件里可能会罗列出一大堆各种大小的图标，应用缓存也只需要包含应用在离线模式下需要使用的资源。

```js
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/icon-512x512.png",
];
```

你不需要把在各个不同操作系统和设备上使用的各个图标都包含进列表里。而是应该把应用使用的所有图片包含进来，包括在应用启动缓慢时用户可能会看见的应用启动页面或者提示用户“你需要连接到互联网以获得完整体验”的页面所使用的素材。

不要把 service worker 文件包含到缓存资源列表里。

#### 任务

向 `sw.js` 添加用于经期跟踪器 PWA 的缓存资源列表。

#### 示例方案

我们包括了在本教程的其他章节中所创建的经期跟踪器在离线状态下运作所需的静态资源。我们的 `sw.js` 文件目前是这样的：

```js
const VERSION = "v1";

const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/cycletrack.json",
  "/icons/wheel.svg",
];
```

我们包括了 `wheel.svg` 图标，以备你要增强 PWA 的 UI 时使用，比如在没有经期数据时显示 logo，虽然我们的应用目前并没有使用它。

### 应用缓存名称

我们有了版本号，也有了需要缓存的文件。在缓存文件之前，我们需要创建一个在存储应用的静态资源时需要使用的缓存名称。这个缓存名称应当被版本化，以确保在应用更新时可以创建新的缓存同时删除旧的缓存。

#### 任务

使用 `VERSION` 版本号来创建一个版本化的 `CACHE_NAME` 缓存名，作为常量添加到 `sw.js`。

#### 示例方案

我们将缓存命名为 `period-tracker-` 后跟 `VERSION` 版本号。鉴于我们的常量声明都是单行的，为了方便阅读，我们将其放在了资源数组常量的前面。

```js
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ ... ];
```

我们成功声明了我们的常量：一个唯一的标识符、数组形式的离线资源列表以及随版本号更新的应用缓存名称。现在，让我们把注意力转向安装、更新以及删除无用的缓存资源。

### 在 PWA 安装过程中保存缓存

当用户安装 PWA 或者只是单纯的访问带有 service worker 的网站时，会在 service worker 的作用域触发一个 `install` 事件。我们想要监听这个事件，在安装期间用 PWA 的静态资源填充缓存。每当 service worker 的版本更新，浏览器都会安装新的 service worker 并触发安装事件。

`install` 事件会在应用第一次被安装或者浏览器检测到有新版本的 service worker 时触发。当旧的 service worker 将要被新的替换时，旧的 service worker 仍然会作为 PWA 的 service worker，直到新的 service worker 被激活。

{{domxref("WorkerGlobalScope.caches")}} 属性只在安全上下文中可用，它会返回一个与当前上下文关联的 {{domxref("CacheStorage")}} 对象。{{domxref("CacheStorage.open()")}} 方法会返回一个 {{jsxref("Promise")}} 对象，可以兑现一个名称与作为参数传递的名称相符的 {{domxref("Cache")}} 对象。

{{domxref("Cache.addAll()")}} 方法接收一个 URL 数组作为参数，然后会检索这些 URL，将它们的响应添加到指定的缓存中。{{domxref("ExtendableEvent.waitUntil()")}} 方法可以告诉浏览器在 Promise 被敲定前，工作仍在进行中，浏览器如果想让工作能够完成就不应该终止 service worker。浏览器负责执行并在必要时终止 service worker，`waitUntil` 方法可用于请求浏览器在任务执行时不要终止 service worker。

```js
self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
      const cache = await caches.open("cacheName_identifier");
      cache.addAll([
        "/",
        "/index.html"
        "/styles.css"
        "/app.js"
      ]);
    })()
  );
});
```

#### 任务

添加一个安装事件监听器，用于检索并存储 `APP_STATIC_RESOURCES` 列表中的文件到名为 `CACHE_NAME` 的缓存中。

#### 示例方案

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })(),
  );
});
```

### 更新 PWA 并删除旧缓存

正如上文提到的，当现有的 service worker 将要被新的替换时，现有的 service worker 仍然会作为 PWA 的 service worker，直到新的 service worker 被激活。我们使用 `activate` 事件来删除旧的缓存以避免空间被耗尽。我们对被命名的 {{domxref("Cache")}} 对象进行迭代，删除除了目前在使用外的全部缓存，然后将 service worker 设为 PWA 的 [`controller`](/zh-CN/docs/Web/API/ServiceWorkerContainer/controller)。

我们监听当前 service worker 全局作用域的 [`activate`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/activate_event) 事件。

我们获取现有的命名缓存，使用 {{domxref("CacheStorage.keys()")}} 方法（重新通过 {{domxref("WorkerGlobalScope.caches")}} 属性访问 `CacheStorage`），它会返回一个 {{jsxref("Promise")}} 对象，可兑现一个包含对应到按创建顺序排列的命名 {{domxref("Cache")}} 对象的字符串的数组。

我们使用 [`Promise.all()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 方法来迭代命名缓存 Promise 列表。`all()` 方法接收一个可迭代的 Promise 列表，并返回单个 `Promise`。对于列表中的每个命名缓存，检查其是否是当前活动的缓存。如果不是，用 `Cache` 的 [`delete()`](/zh-CN/docs/Web/API/Cache/delete) 方法删除它。

最后一行 `await clients.claim()` 使用 [`Clients`](/zh-CN/docs/Web/API/Clients) 接口的 [`claim()`](/zh-CN/docs/Web/API/Clients/claim) 方法来启用我们的 service worker 以将其设为我们客户端的控制器，“客户端”指正在运行的一个 PWA 实例。`claim()` 方法用于使 service worker 接管控制其作用域内的所有客户端。这样，作用域内已加载的客户端就不需要重新加载。

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
      await clients.claim();
    })(),
  );
});
```

#### 任务

将上述 `activate` 事件监听器添加至你的 `sw.js` 文件。

### fetch 事件

我们可以利用 [`fetch`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) 事件的优势，在用户处于在线状态时阻止已安装的 PWA 发起请求。监听 fetch 事件使得拦截所有请求并使用缓存的响应内容进行响应而不流经网络变得可能。大多数的应用不需要这样的行为。事实上，许多商业模式出于跟踪和营销目的都希望用户定期发送服务器请求。所以，尽管拦截请求对于某些应用来说是一种反面模式，但为了提高我们的经期跟踪器应用的隐私性，我们不希望应用发出不必要的网络请求。

鉴于我们的 PWA 只由单一的页面构成，对于页面导航请求，我们返回至 `index.html` 主页面，因为没有其他页面，我们也不想请求总是发送到服务器。如果 Fetch API 的 [`Request`](/zh-CN/docs/Web/API/Request) 的只读属性 [`mode`](/zh-CN/docs/Web/API/Request/mode) 值为 `navigate`，意味着它在查找一个 Web 页面，我们使用 FetchEvent 的 [`respondWith()`](/zh-CN/docs/Web/API/FetchEvent/respondWith) 方法来阻止浏览器默认的 fetch 处理，使用 [`caches.match()`](/zh-CN/docs/Web/API/CacheStorage/match) 方法来提供我们自己的响应 Promise。

对于其他所有的请求模式，我们则按照在 [install 事件响应](#在_pwa_安装过程中保存缓存)里的那样打开缓存，向同样的 `match()` 方法传递事件请求。它会检查请求是否是已存储的 {{domxref("Response")}} 的键。如果是，我们返回缓存的响应，如果不是，我们返回一个 [404 状态码](/zh-CN/docs/Web/HTTP/Reference/Status/404)作为响应。

使用 [`Response()`](/zh-CN/docs/Web/API/Response/Response) 构造器，传递为 `null` 的主体以及一个 `404` 的状态码作为选项，并不意味着我们的 PWA 出错了。相反，我们需要的所有东西应该都已经在缓存里了，如果没有，我们也不用去服务器解决这个小问题。

```js
self.addEventListener("fetch", (event) => {
  // 当在查找 HTML 页面时
  if (event.request.mode === "navigate") {
    // 返回到 index.html 页面
    event.respondWith(caches.match("/"));
    return;
  }

  // 对于其他所有请求模式
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // 如果有缓存的响应可用就将其返回
        return cachedResponse;
      } else {
        // 响应 HTTP 404 状态码
        return new Response(null, { status: 404 });
      }
    })(),
  );
});
```

## 完善 service worker 文件

你的 `sw.js` 文件现在应该和下面的 JavaScript 脚本相似。要注意，当 `APP_STATIC_RESOURCES` 数组中的资源列表发生了任何改动，我们唯一需要在这个 service worker 中更新的常量或功能就是 `VERSION` 的值。

```js
// 缓存的版本
const VERSION = "v1";

// 缓存的名称
const CACHE_NAME = `period-tracker-${VERSION}`;

// 使应用运作所需的静态资源
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/app.js",
  "/styles.css",
  "/icons/wheel.svg",
];

// 在安装时缓存缓存静态资源
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })(),
  );
});

// 在被激活时删除旧的缓存
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
      await clients.claim();
    })(),
  );
});

// 在 fetch 时，拦截服务器请求并用缓存的响应内容进行响应而不流经网络
self.addEventListener("fetch", (event) => {
  // 作为一个单页应用，总是将应用定向到缓存的主页面
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/"));
    return;
  }

  // 对于其他所有请求，先找缓存，再去网络
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // 如果有缓存的响应可用就将其返回
        return cachedResponse;
      } else {
        // 如果资源不在缓存中，返回 404
        return new Response(null, { status: 404 });
      }
    })(),
  );
});
```

当更新 service worker 本身时，不需要更新 VERSION 常量，因为 service worker 脚本内容的任何更改都会触发浏览器去安装新的 service worker。但不论如何，更新版本号是方便开发人员（也包括你自己）的好习惯。可以在浏览器中通过[在应用程序工具中检查缓存的名称](#使用开发者工具)（或在源代码工具）来查看当前正在运行的是哪一个版本的 service worker。

**备注**：在对应用的任何资源（包括 CSS、HTML、JS 代码和图像素材）做出更改后更新版本号是非常重要的。版本号或者对 service worker 文件所做的任何更改是唯一为你的用户强制更新应用的方式。

## 注册 service worker

现在我们的 service worker 脚本已经完成了，我们需要注册 service worker。

我们先从使用检查全局 [`navigator`](/zh-CN/docs/Web/API/Navigator) 对象上是否存在 [`serviceWorker`](/zh-CN/docs/Web/API/ServiceWorker) 属性的[特性检测](/zh-CN/docs/Learn_web_development/Extensions/Testing/Feature_detection#特性检测的概念)手段来检查浏览器是否支持 [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 开始：

```html
<script>
  // “serviceWorker”是否存在
  if ("serviceWorker" in navigator) {
    // 如果存在，我们就注册 service worker
  }
</script>
```

如果这个属性受支持，我们就可以使用 service worker API 的 [`ServiceWorkerContainer`](/zh-CN/docs/Web/API/ServiceWorkerContainer) 接口的 [`register()`](/zh-CN/docs/Web/API/ServiceWorkerContainer/register) 方法。

```html
<script>
  if ("serviceWorker" in navigator) {
    // 注册应用的 service worker
    // 传递定义 worker 的文件的文件名
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

虽然上述内容已经满足了经期跟踪器应用的需要，但是 `register()` 方法返回的是一个兑现 {{domxref("ServiceWorkerRegistration")}} 对象的 {{jsxref("Promise")}}。为了使应用更加健壮，最好对注册进行错误检查：

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    (registration) => {
      console.log("Service worker registration successful:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

### 任务

打开 `index.html`，在 `app.js` 脚本之后、被 `</body>` 标签闭合之前添加以下 {{HTMLElement("script")}} 元素。

```html
<!-- 注册应用的 service worker -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

你可以体验功能完整的 [CycleTracker 月经周期跟踪 Web 应用](https://mdn.github.io/pwa-examples/cycletracker/service_workers)，并可以在 GitHub 上查看该 [Web 应用的源代码](https://github.com/mdn/pwa-examples/tree/master/cycletracker/service_workers)。是的，它能运行，并且现在正式成为了一个 PWA！

## 调试 service worker

出于我们安装 service worker 的方式的因素，一旦其被注册，所有的请求都将会从缓存中拉取，而不是加载新内容。在开发的时候，你会频繁地编辑你的代码，你可能会希望定期甚至是在每一次保存后在浏览器中测试你的编辑。

### 通过更新版本号并进行强重置

要获得新的缓存，你可以更改[版本号](#版本号)然后进行一次浏览器强刷新。进行强刷新的方式取决于你的浏览器和操作系统：

- Windows：Ctrl+F5，Shift+F5 或 Ctrl+Shift+R。
- MacOS：Shift+Command+R。
- MacOS 上的 Safari：按 Option+Command+E 清空缓存，然后按 Option+Command+R。
- 移动设备：前往浏览器（Android）或操作系统（Samsung、iOS）设置，在高级设置下找到浏览器（iOS）或站点数据（Android、Samsung）网站设置，然后删除经期跟踪器的数据，再重新加载页面。

### 使用开发者工具

你可能会不想每次保存都要更新版本号。在你准备好将你的 PWA 的新版本投入生产并为所有人提供你的 PWA 的新版本前，你可以用注销 service worker 的方法来代替在每次保存时更改版本号。

你可以通过在[浏览器开发者工具](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)中点击 `unregister` 按钮来注销一个 service worker。强刷新页面将会重新注册 service worker 并建立新的缓存。

![带有停止和注销 service worker 按钮的 Firefox 开发者工具应用程序面板](firefox_sw.jpg)

在某些开发者工具里，你可以手动注销一个 service worker，或者你可以选择 service worker 的“重新加载时更新”选项来设置当开发者工具打开时，每次重新加载都重置并重新激活 service worker。还有一个选项可以绕过 service worker 从网络加载资源。这个面板包含了本教程中我们未涵盖的特性，但会对你在创建包含[同步](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#周期性后台同步)和[推送消息](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation#推送消息)等特性的更高级的 PWA 时有所帮助，这些内容都涵盖在了[离线和后台操作](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)中。

![Edge 开发者工具显示针对 service worker 的应用程序面板集](edge_sw.jpg)

开发者工具的应用程序面板中的 service worker 窗口，提供了访问包含浏览器所有已注册的 service worker 的列表的弹出窗口的链接，不只是在当前标签页中打开的应用的 service worker。列表中的每个 service worker 都有单独的停止、启动或注销按钮。

![localhost:8080 存在两个 service worker，它们能在列表中被注销](edge_sw_list.jpg)

换句话说，当你在处理你的 PWA 时，你不需要更新每个应用视图的版本号。但是，当你做完了所有的改动后，记得在分发你的 PWA 的新版本前更新 VERSION 的值。如果你忘了，那些已经安装了你的应用又或者只是访问了你的线上 PWA 但是没有安装的人，是永远看不到你的改动的！

## 我们完成了！

PWA 的核心是一种可以被安装并可以被逐步增强至可以离线运行的 Web 应用。我们创建了一个功能完整的 Web 应用，然后添加了两项特性——一个清单文件和一个 service worker——将其转化为 PWA 所需要的东西。如果你想和其他人分享你的应用，请将其通过安全连接提供。或者，如果你只想自己使用经期跟踪器，[创建一个本地部署环境](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)，[安装 PWA](/zh-CN/docs/Web/Progressive_web_apps/Guides/Installing)，然后尽情享受吧！一经安装，你就不需要再运行 localhost 了。

恭喜！

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
