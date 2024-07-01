---
title: 使用 Service Worker
slug: Web/API/Service_Worker_API/Using_Service_Workers
---

{{DefaultAPISidebar("Service Workers API")}}

本文是关于使用 service worker 的教程，包括讲解 service worker 的基本架构、怎么注册 service worker、新的 service worker 的安装以及激活的过程、怎么更新 service worker 还有它的缓存控制和自定义响应，这一切都在一个简单的离线的应用程序中。

## Service worker 的背景

有一个困扰 web 用户多年的难题——丢失网络连接。即使是世界上最好的 web app，如果下载不了它，也是非常糟糕的体验。如今虽然已经有各种尝试来创造技术去尝试着解决这个问题，并且其中一些问题已经被解决。但是，最重要的问题是，仍然没有一个好的统筹机制对资源缓存和自定义的网络请求进行控制。

Service worker 修复了这个问题。使用 service worker，你可以将 app 设置为首先使用缓存资源，从而即使在离线状态，也可以提供默认的体验，然后从网络获取更多数据（通常称为“离线优先”）。这已经在原生 app 中可用，这是经常选择原生 app，而不是选择 web app 的主要原因之一。

service worker 的功能类似于代理服务器，允许你去修改请求和响应，将其替换成来自其自身缓存的项目。

## 使用 service worker 的准备工作

service worker 在现代浏览器中默认开启。要使用 service worker 运行代码，你需要通过 HTTPS 提供你的代码——出于安全原因，Service worker 仅限在 HTTPS 上运行。支持 HTTPS 的服务器是必要的。为了托管实验代码，你可以使用 Github、Netlify、Vercel 等服务。为了促进本地开发，浏览器也认为 `localhost` 是一个安全的来源。

## 基本步骤

通常遵循以下基本步骤来使用 service worker：

1. 获取 service worker 代码，然后使用 [`serviceWorkerContainer.register()`](/zh-CN/docs/Web/API/ServiceWorkerContainer/register) 来注册。如果成功，service worker 将在 [`ServiceWorkerGlobalScope`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope) 中执行；这本质上是一种特殊的上下文，在主脚本执行线程之外运行，没有访问 DOM 的权限。Service Worker 现在已为处理事件做好准备。
2. 安装完成。`install` 事件始终是发送给 service worker 的第一个事件（这可用于启动填充 IndexedDB 和缓存站点资源的过程）。在此步骤期间，应用程序正在为离线可用做准备。
3. 当 `install` 程序处理完成时，service worker 被视为已安装。此时，service worker 的先前版本可能处于激活的状态并控制着打开的页面。由于我们不希望同一 service worker 的两个不同版本同时运行，因此新版本尚未激活。
4. 一旦 service worker 的旧版本控制的页面都已关闭，就可以安全地停用旧版本，并且新安装的 service worker 将收到 `activate` 事件。`activate` 的主要用途是去清理 service worker 之前版本使用的资源。新的 service worker 可以调用 [`skipWaiting()`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) 要求立即激活，而无需要求打开的页面关闭。然后，新的 service worker 将立即收到 `activate` 事件，并将接管任何打开的页面。
5. 激活后，service worker 将立即控制页面，但是只会控制那些在 `register()` 成功后打开的页面。换句话说，文档必须重新加载才能真正的受到控制，因为文档在有或者没有 service worker 的情况下开始存在，并在其生命周期内维护它。为了覆盖次默认行为并在页面打开的情况下，service worker 可以调用 [`clients.claim()`](/zh-CN/docs/Web/API/Clients/claim) 方法。
6. 每当获取新版本的 service worker 时，都会再次发生此循环，并在新版本的激活期间清理上一个版本的残留。

![](sw-lifecycle.svg)

以下是可用的 service worker 事件的摘要：

- [`install`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [`activate`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
- [`message`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/message_event)
- 功能性事件
  - [`fetch`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - [`sync`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - [`push`](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/push_event)

## 演示

为了展示注册和安装 service worker 的基础知识，我们已经创建了一个名为[简单 service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) 的演示，这是一个乐高的星球大战图像库。它使用 promise 驱动的函数从 JSON 对象读取图像数据，并使用 [`fetch()`](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 加载图像，然后将图像显示在页面的下一行。我们暂时让它保持不变。它同时也注册、安装和激活 service worker。

![The words Star Wars followed by an image of a Lego version of the Darth Vader character](demo-screenshot.png)

你也可以[在 GitHub 上查看源代码](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)以及[简单 service worker 的在线演示](https://bncb2v.csb.app/)。

### 注册你的 worker

在我们 app 的 JavaScript 文件（`app.js`）的第一个代码块中如下所示。这是我们使用 service worker 的入口点。

```js
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("正在安装 Service worker");
      } else if (registration.waiting) {
        console.log("已安装 Service worker installed");
      } else if (registration.active) {
        console.log("激活 Service worker");
      }
    } catch (error) {
      console.error(`注册失败：${error}`);
    }
  }
};

// …

registerServiceWorker();
```

1. `if` 代码块进行特性检测测试，以确保在尝试注册 service worker 之前，该特性是被支持的。
2. 接着，我们使用 [`ServiceWorkerContainer.register()`](/zh-CN/docs/Web/API/ServiceWorkerContainer/register) 函数来注册站点的 service worker。service worker 代码只是一个驻留在我们的 app 内的一个 JavaScript 文件（注意，这个文件的 URL 是相对于源（origin）的，而不是相对于引用它的那个 JS 文件）。
3. `scope` 参数是可选的，并且可以用来指定你想要 service worker 控制的子作用域。在这个例子中，我们指定了 `'/'`，其表示 app 的源（origin）下的所有内容。如果你留空的话，它的默认值也是这个，但是我们在这里指定它是为了更明确的阐述我们的目的。

这就注册了一个 service worker，它工作在 worker 上下文，所以没有访问 DOM 的权限。

单个 service worker 可以控制很多页面。每个你的作用域（scope）里的页面加载完的时候，安装在页面的 service worker 就可以控制它。牢记你需要小心 service worker 脚本里的全局变量：每个页面不会有自己独有的 worker。

> **备注：** 关于 service worker 一个很棒的事情就是，如果你像我们上面做的那样使用特性检测，发现浏览器并不支持 service worker，但是它还是可以正常地以预期的方式在线使用你的 app。

#### 为什么我的 service worker 注册失败了？

可能是如下的原因：

- 你没有在 HTTPS 下运行你的程序。
- service worker 文件的路径没有写对——需要相对于源（origin），而不是 app 的根目录。在我们的示例中，worker 是在 `https://mdn.github.io/sw-test/sw.js`，app 的根目录是 `https://mdn.github.io/sw-test/`。但是路径需要写成 `/sw.js`。
- 也不允许你的 app 指向不同源（origin）的 service worker。
- service worker 只能在 service worker 作用域内捕获客户端发出的请求。
- service worker 最大的作用域是 worker 所在的位置（换句话说，如果脚本 `sw.js` 位于 `/js/sw.js` 中，默认情况下它只能控制 `/js/` 下的 URL）。可以使用 [`Service-Worker-Allowed`](/zh-CN/docs/Web/HTTP/Header/Service-Worker-Allowed) 标头指定 worker 的最大作用域列表。
- 在 Firefox 中，若用户处于[无痕浏览模式](https://support.mozilla.org/zh-CN/kb/private-browsing-use-firefox-without-history)、禁用了历史记录或者启用了在 Firefox 关闭时清除历史记录，Service Worker API 将被隐藏而无法使用。
- 在 Chrome 中，当启用“阻止所有 Cookie（不建议）”选项时，注册将会失败。

### 安装和激活：填充你的缓存

在你的 service worker 注册之后，浏览器会尝试为你的页面或站点安装并激活它。

`install` 事件会在注册成功完成之后触发。`install` 事件通常会这样用，将离线运行 app 产生的资源放置在浏览器离线缓存的空间。为了实现这个，我们使用了 Service Worker 的存储 API——{{domxref("cache")}}——一个 service worker 上的全局对象，它使我们可以存储网络响应发来的资源，并且根据它们的请求来生成 key。这个 API 和浏览器的标准的缓存工作原理很相似，但它特定于你的域的。直到你清理它们之前，这些内容都会持久存在。

以下是我们的 service worker 如何处理 `install` 事件：

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ]),
  );
});
```

1. 这里我们新增了一个 `install` 事件监听器去监听 service worker（这里指的是 `self`），接着在事件上调用 [`ExtendableEvent.waitUntil()`](/zh-CN/docs/Web/API/ExtendableEvent/waitUntil) 方法——这会确保 Service Worker 不会在 `waitUntil()` 里面的代码执行完毕之前安装完成。
2. 在 `addResourcesToCache()` 内，我们使用了 [`caches.open()`](/zh-CN/docs/Web/API/CacheStorage/open) 方法来创建了叫做 `v1` 的新缓存，这将会是我们的站点资源缓存的第 1 个版本。然后我们会在创建的缓存示例中调用 `addAll()` 函数，它的参数采用一个 URL 数组，指向你想要缓存的所有资源。其中，URL 是相对于 worker 的 {{domxref("WorkerGlobalScope.location", "location", "", 1)}}。
3. 如果 promise 被拒绝，安装就会失败，这个 worker 不会做任何事情。这也是可以的，因为你可以修复你的代码，在下次注册的时候再次进行尝试。
4. 当安装成功完成之后，service worker 就会激活。在你的 service worker 第一次完成安装/激活时，这并没有什么用。但是当 service worker 更新（稍后查看[更新你的 service worker](#更新你的_service_worker) 部分）的时候，就不太一样了。

> **备注：** [Web Storage API（`localStorage`）](/zh-CN/docs/Web/API/Web_Storage_API)跟 service worker 的 cache 工作原理十分类似，但是它是同步的，所以不允许在 service worker 中使用。

> **备注：** 如果你需要的话，可以在 service worker 中使用 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 来做数据存储。

### 自定义请求的响应

现在你已经将你的站点资源缓存了，你需要告诉 service worker 让它用这些缓存内容来做点什么。有了 `fetch` 事件，这是很容易做到的。

1. 每次获取 service worker 控制的资源时，都会触发 `fetch` 事件，这些资源包括了指定的作用域内的文档，和这些文档内引用的其他任何资源（比如 `index.html` 发起了一个跨源的请求来嵌入一个图片，这个也会通过 service worker）。

2. 你可以给 service worker 添加一个 `fetch` 的事件监听器，接着调用 event 上的 `respondWith()` 方法来劫持我们的 HTTP 响应，然后你用可以用自己的方法来更新它们。

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(/* 在这里放置自定义的内容 */);
   });
   ```

3. 在任何情况下，我们会首先响应缓存的 URL 和网络请求的 URL 相匹配的资源：

   ```js
   self.addEventListener("fetch", (event) => {
     event.respondWith(caches.match(event.request));
   });
   ```

   `caches.match(event.request)` 允许我们对网络请求里的每个资源与缓存里可获取的等效资源进行匹配，查看缓存中是否有相应的资源。该匹配通过 URL 和各种标头进行，就像正常的 HTTP 请求一样。

![Fetch 事件图示](sw-fetch.svg)

## 恢复失败的请求

在 service worker 的缓存中存在相匹配的资源时，`caches.match(event.request)` 是非常棒的。但是如果没有匹配资源呢？如果我们不提供任何错误处理，promise 就会兑现 `undefined`，因而我们不会得到任何内容。

在测试缓存的响应后，我们可以退回到常规网络请求：

```js
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

如果资源不存在缓存中，它们则会从网络中进行请求。

使用更复杂的策略，我们不仅可以从网络中请求资源，还可以将其保存到缓存中，以便稍后对该资源的请求也可以离线检索。这意味着，如果将额外的图像添加到星球大战图库中，我们的 app 可以自动抓取并缓存它们。以下片段实现了这样的策略：

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

如果请求 URL 在缓存中不可用，我们将使用 `await fetch（request)` 从网络请求中请求资源。之后，我们将响应的克隆放入缓存。`putInCache()` 函数使用 `caches.open('v1')` 和 `cache.put()` 将资源增加到缓存中。它的原始响应会返回给浏览器以提供给调用它的页面。

克隆响应是必要的，因为请求和响应流仅可以读取一次。为了返回响应到浏览器，并将其放入缓存中，我们得克隆它。因此原始的资源会返回给浏览器，克隆的资源会发送到缓存。它们都只能被读取一次。

看起来有点奇怪的是，`putInCache()` 返回的 promise 并没有使用 await。但原因是，我们并不想要等到缓存被添加至缓存后再返回响应。

我们现在唯一的问题是当请求没有匹配到缓存中的任何资源，或网络不可用的时，我们的请求依然会失败。让我们提供一个默认的回退方案以便不管发生了什么，用户至少能得到些东西：

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // 首先，尝试从缓存中获取资源
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // 然后尝试从网络中获取资源
  try {
    const responseFromNetwork = await fetch(request);
    // 响应可能会被使用
    // 我们需要将它的拷贝放入缓存
    // 然后再返回该响应
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // 当回落的响应也不可用时，
    // 我们便无能为力了，但我们始终需要
    // 返回 Response 对象
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/gallery/myLittleVader.jpg",
    }),
  );
});
```

我们选择了回落的图片，因为唯一的更新是对新图片的，它可能会失败，因为其他的所有内容都依赖于我们之前看到的 `install` 事件监听器中的安装过程。

## Service Worker 导航预加载

如果启用了[导航预加载](/zh-CN/docs/Web/API/NavigationPreloadManager)功能，其将在发出 fetch 请求后，立即开始下载资源，并同时激活 service worker。这确保了在导航到一个页面时，立即开始下载，而不是等到 service worker 被激活。这种延迟发生的次数相对较少，但是一旦发生就不可避免，而且可能很重要。

首先，必须在 service worker 激活期间使用 [`registration.navigationPreload.enable()`](/zh-CN/docs/Web/API/NavigationPreloadManager/enable) 来启用该功能：

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
});
```

然后使用 [`event.preloadResponse`](/zh-CN/docs/Web/API/FetchEvent/preloadResponse) 等待预加载的资源在 `fetch` 事件处理程序中完成下载。

继续前几节的示例，我们插入代码，以便在缓存检查后等待预加载的资源，如果失败，则再从网络中获取。

新流程是：

1. 检查缓存
2. 等待 `event.preloadResponse`，它作为 `preloadResponsePromise` 传递给 `cacheFirst()` 函数。如果返回结果，则缓存它。
3. 如果两者均没有结果，那么我们就从网络中获取。

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // 首先，尝试从缓存中获取资源
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // 接下来，尝试使用缓存或预加载的响应
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // 然后尝试从网络中获取资源
  try {
    const responseFromNetwork = await fetch(request);
    // 响应可能会被使用
    // 我们需要将它的拷贝放入缓存
    // 然后再返回该响应
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // 当回落的响应也不可用时，
    // 我们便无能为力了，但我们始终需要
    // 返回 Response 对象
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// 启用导航预加载
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: "/gallery/myLittleVader.jpg",
    }),
  );
});
```

注意，在此示例中，无论资源是“正常”下载还是预加载，我们都会下载和缓存相同的数据。相反，你可以选择在预加载时下载和缓存其他资源。请参阅 [`NavigationPreloadManager` > 自定义响应](/zh-CN/docs/Web/API/NavigationPreloadManager#custom_responses) 以了解详情。

## 更新你的 service worker

如果你的 service worker 已经被安装，但是刷新页面时有一个新版本的可用，新版的 service worker 会在后台安装，但是仍然不会被激活。当不再有任何已加载的页面在使用旧版的 service worker 的时候，新版本才会激活。一旦再也没有这样的已加载的页面，新的 service worker 就会被激活。

> **备注：** 可以通过使用 [`Clients.claim()`](/zh-CN/docs/Web/API/Clients/claim) 绕过这一点。

你想把你的新版的 service worker 里的 `install` 事件监听器改成下面这样（注意新的版本号）：

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v2");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",

      // …

      // 包含新版本需要的其他资源…
    ]),
  );
});
```

当安装发生的时候，前一个版本依然在响应请求。新的版本正在后台安装。我们调用了一个新的缓存 `v2`，所以前一个 `v1` 版本的缓存不会被扰乱。

当没有页面在使用之前的版本的时候，这个新的 service worker 就会激活并开始响应请求。

### 删除旧缓存

正如我们在最后一节看到的那样，当你更新 service worker 到一个新的版本，你将在它的 `install` 事件处理程序中创建一个新的缓存。在仍有由上一个 worker 的版本控制的打开的页面，你就需要同时保留这两个版本的缓存，因为之前的版本需要它缓存的版本。你可以使用 `activate` 事件从之前的缓存中移除数据。

传给 `waitUntil()` 的 promise 会阻塞其他的事件，直到它完成，因此你可以放心，当你在新的 service worker 中得到你的第一个 `fetch` 事件时，你的清理操作已经完成。

```js
const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = ["v2"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOldCaches());
});
```

## 开发者工具

- [Chrome](https://www.chromium.org/blink/serviceworker/service-worker-faq/)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/application/service_workers/index.html)
  - [Firefox 工具栏自定义选项](https://support.mozilla.org/zh-CN/kb/customize-firefox-controls-buttons-and-toolbars)中的“Forget about this site”按钮可用于清除 service worker 及其缓存。
- [Edge](https://learn.microsoft.com/zh-CN/microsoft-edge/devtools-guide-chromium/service-workers/)

## 参见

- [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
