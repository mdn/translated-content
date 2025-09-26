---
title: 通过 Service workers 让 PWA 离线工作
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
---

{{PWASidebar}} {{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

我们已经看到了 js13kPWA 的结构，并且看到了 shell 启动和运行的基本方式，那么现在让我们把目光转向如何使用 Service Worker 实现离线功能。在本文，我们将看到它在 [js13kPWA example](https://mdn.github.io/pwa-examples/js13kpwa/) 中是如何使用的（[另请参阅源代码](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)）。我们将研究如何添加脱机功能。

## Service Worker 解释

Service Worker 是浏览器和网络之间的虚拟代理。它们终于解决了前端开发人员多年来一直在努力解决的一些问题，其中最值得关注的是，解决了如何正确缓存网站资源并使其在离线时可用的问题。

Service Worker 运行在一个与页面 JavaScript 主线程独立的线程上，并且无权访问 DOM 结构。这引入了一种与传统 Web 编程不同的方式：它的 API 是非阻塞的，并且可以在不同的上下文之间发送和接收信息。你可分配给 Service Worker 一些任务，并通过基于 [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的方法在任务完成时收到结果。

它不仅仅提供离线功能，还可以做包括处理通知、在单独的线程上执行繁重的计算等事务。Service workers 非常强大，因为他们可以控制网络请求、修改网络请求、返回缓存的自定义响应，或者合成响应。

### 安全

因为它们非常强大，所以 Service Worker 只能在安全的上下文中执行（即 HTTPS）。如果你想在将代码推送到生产环境之前先进行实验，则可以始终在本地主机上进行测试或设置 GitHub Pages，这两者都支持 HTTPS。

## 离线优先

“离线优先”或“缓存优先”模式是向用户提供内容的最流行策略。如果资源已缓存且可脱机使用，就在尝试从服务器下载资源之前先将其返回；如果它已经不在缓存中，就下载并缓存以备将来使用。

## PWA 中的 P（渐进，Progressive）

Service Worker 当正确地作为渐进功能实装时，可以为支持其 API 的现代浏览器用户提供离线支持使其受益，但也不会使用旧版浏览器的用户造成负面影响。

## js13kPWA 应用程序中的 Service worker

理论看够了，让我们看一些源代码！

### 注册 Service Worker

首先让我们看看在 app.js 文件中注册新 Service Worker 的代码：

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

如果浏览器支持 Service Workers API，则使用 [`ServiceWorkerContainer.register()`](/zh-CN/docs/Web/API/ServiceWorkerContainer/register) 方法在该站点注册。其内容在 sw\.js 文件中，可以在注册成功后执行。它是 app.js 文件中唯一与 Service Worker 有关的代码; 其他关于 Service Worker 的内容都写在 sw\.js 文件中。

### Service Worker 的生命周期

注册完成后，sw\.js 文件会自动下载、安装，然后激活。

#### 安装

Service Workers API 允许我们为我们感兴趣的关键事件添加事件监听器 - 第一个是 `install` 事件：

```js
self.addEventListener("install", function (e) {
  console.log("[Service Worker] Install");
});
```

在 `install` 的监听函数中，我们可以初始化缓存并添加离线应用时所需的文件，js13kPWA 应用确实也是这么做的。

首先，创建一个存储缓存名字的变量，App Shell 所需的文件也被记录在一个数组上：

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
```

接下来，从 data/games.js 的内容中解析出来的图片链接被赋值到另一个数组上，之后，两个数组会用 {{jsxref("Array.prototype.concat()")}} 方法合并起来。

```js
var gamesImages = [];
for (var i = 0; i < games.length; i++) {
  gamesImages.push("data/img/" + games[i].slug + ".jpg");
}
var contentToCache = appShellFiles.concat(gamesImages);
```

接着我们可以监听 install 事件：

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

有两件事需要在这里解释一下：{{domxref("ExtendableEvent.waitUntil")}} 做了什么？{{domxref("Caches","caches")}} 对象又是什么东西？

Service Worker 会等到 `waitUntil` 里面的代码执行完毕之后才开始安装。它返回的是一个 Promise——因为安装过程可能需要一些时间，而我们必须等待它完成。

`caches` 是一个特殊的 {{domxref("CacheStorage")}} 对象，它能在 Service Worker 指定的范围内提供数据存储的能力（Service Worker 在注册时，第二个参数是选填的，可以被用来指定你想让 Service Worker 控制的内容的子目录，译者注）。因为 Web Storage 的执行是同步的（此处理解为 Web Storage 并不返回一个 Promise，译者注），在 Service Worker 中使用 [Web Storage](/zh-CN/docs/Web/API/Web_Storage_API) 将不会有效果，所以我们使用 Cache API 作为替代。

这里，我们使用给定的名字开启了一个缓存，并且将我们的应用所需要缓存的文件全部添加进去，当我们再次加载这些资源时，由请求 URL 确定的对应缓存就是可用的。

#### 激活

还有一个 `activate` 事件，它的用法跟 `install` 事件相同。这个事件通常用来删除那些我们已经不需要的文件或者做一些清理工作。因为在我们的 App 里面没有使用到，这里我们暂时跳过它。

### 响应请求

`fetch` 事件对我们很有用，它在每次应用发起 HTTP 请求的时候被触发。这个事件对我们来说非常有用，它允许我们拦截请求并对请求作出自定义的响应，下面是一个简单的例子：

```js
self.addEventListener("fetch", function (e) {
  console.log("[Service Worker] Fetched resource " + e.request.url);
});
```

请求的响应可以是任何我们想要的东西：请求过的文件缓存下来的副本，或者一段做了具体操作的 JavaScript 代码——这里有无限的可能。

在我们的示例代码中，当缓存存在时，我们使用缓存来提供服务，而不重新请求数据。不管当前应用是在线还是离线，我们都这么做。当请求的文件不在缓存中时，我们会在响应之前将数据添加到缓存中。

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

上述代码中，对于请求我们首先会在缓存中查找资源是否被缓存：如果存在，将会返回缓存的资源；如果不存在，会转而从网络中请求数据，然后将它缓存起来，这样下次有相同的请求发生时，我们就可以直接使用缓存。

{{domxref("FetchEvent.respondWith")}} 方法将会接管响应控制，它会作为服务器和应用之间的代理服务。它允许我们对每一个请求作出我们想要的任何响应：Service Worker 会处理这一切，从缓存中获取这些数据，并在需要的情况下对它们进行修改。

就是这样，我们的应用会在 install 触发时缓存资源，并且在 fetch 事件触发时返回缓存中的资源，这就是它甚至在离线状态下也能使用的原因。当我们添加新的内容时，它也会随时将其缓存下来。

## 更新

还有一点需要考虑：当我们的应用有了一个新版本，并且它包含了一些可用的新资源时，我们应该如何去更新它的 Service Worker？我们存放在缓存名称中的版本号是这个问题的关键：

```js
var cacheName = "js13kPWA-v1";
```

当我们把版本号更新到 v2，Service Worker 会将我们所有的文件（包括那些新的文件）添加到一个新的缓存中。

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// ...

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("js13kPWA-v2").then(function (cache) {
      return cache.addAll(contentToCache);
    }),
  );
});
```

这个时候一个新的 Service Worker 会在后台被安装，而旧的 Service Worker 仍然会正常运行，直到没有任何页面使用到它为止，这时候新的 Service Worker 将会被激活，然后接管所有的页面。

## 缓存的清理

还记得我们前面跳过的那个 `activate` 事件吗？它可以用来清理那些我们不再需要的缓存：

```js
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheName.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
```

这样能确保只有那些我们需要的文件会保留在缓存中，我们不需要留下任何的垃圾，毕竟[浏览器的缓存空间是有限的](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)，手动清理掉这些不需要的缓存是不错的主意。

## 其他用途

从缓存中加载资源并不是 Service Worker 的唯一能力，如果你有比较耗时的计算，你可以把它们从主线程中抽离出来，在 Service Worker 中进行计算，最后在它们计算完毕的时候从 Service Worker 中取得计算结果。性能方面，你可以在 Service Worker 中对即将使用到的资源进行预加载，这样当你使用到这些资源的时候，应用的加载速度会更快。

## 总结

在这篇文章中我们简单的了解了如何使用 Service Worker 让你的 PWA 实现离线功能。如果你想要学习更多关于 [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 的概念，以及使用 Service Worker 方面的相关细节，你可以进一步查阅我们的文档。

Service Worker 在处理[消息推送](/zh-CN/docs/Web/API/Push_API)的时候也会经常被用到，这一部分我们将会在后面的章节进行讨论。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
