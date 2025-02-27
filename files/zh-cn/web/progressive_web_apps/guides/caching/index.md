---
title: 缓存
slug: Web/Progressive_web_apps/Guides/Caching
---

{{PWASidebar}}

当用户打开并与网站交互时，网站所需的所有资源，包括 HTML、JavaScript、CSS、图片、字体以及应用程序明确请求的任何数据，都是通过发出 HTTP(S) 请求来获取的。PWA 的一个基本特性就是能够明确地将一些应用程序的资源缓存在设备上，这意味着它们可以在不需要向网络发送请求的情况下被检索。

本地缓存资源有两个主要好处：**离线操作**和**响应速度**。

- **离线操作**：缓存使 PWA 能够在设备没有网络连接时进行工作。
- **响应速度**：即使设备在线，如果其用户界面是从缓存中获取的，PWA 通常会更加响应迅速。

当然，主要的缺点是**新鲜度（freshness）**：对于需要保持最新的资源，缓存是不太适合的。此外，对于一些类型的请求，如 [POST](/zh-CN/docs/Web/HTTP/Methods/POST) 请求，缓存从来都不适合。

这意味着你是否以及何时应该缓存一个资源非常依赖于该资源本身，一个 PWA 通常会对不同的资源采取不同的策略。在本指南中，我们将研究一些 PWA 常用的缓存策略，看看哪些策略适用于哪些资源。

## 缓存技术概述

PWA 可以构建缓存策略的主要技术包括 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)、[Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 和 [Cache API](/zh-CN/docs/Web/API/Cache)。

### Fetch API

Fetch API 定义了用于获取网络资源的全局函数 {{domxref("fetch()")}}，以及代表网络请求和响应的 {{domxref("Request")}} 和 {{domxref("Response")}} 接口。`fetch()` 函数接受一个 `Request` 或一个 URL 作为参数，并返回一个兑现为 `Response` 的 {{jsxref("Promise")}}。

`fetch()` 函数对 service worker 以及主应用线程都可用。

### Service Worker API

service worker 是 PWA 的一部分：它是在其自己的线程中运行的单独脚本，与应用的主线程分离。

一旦 service worker 激活，当应用请求一个由 service worker 控制的网络资源时，浏览器会在 service worker 的全局作用域内触发一个称为 {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} 的事件。这个事件不仅会在主线程显式调用 `fetch()` 时触发，而且在浏览器因页面导航而隐式请求加载页面和子资源（如 JavaScript、CSS 和图片）时也会触发。

通过监听 `fetch` 事件，service worker 可以拦截请求并返回一个定制的 `Response`。特别是，它可以返回一个本地缓存的响应，而不是总是访问网络，或者在设备离线时返回一个本地缓存的响应。

### Cache API

{{domxref("Cache")}} 接口为 `Request`/`Response` 对提供了持久性存储。它提供了添加和删除 `Request`/`Response` 对的方法，以及查找匹配给定 `Request` 的缓存 `Response` 的方法。缓存在主应用线程和 service worker 中都可用：所以一个线程可以添加一个响应，另一个线程可以检索它。

通常情况下，service Worker 会在其 `install` 或 `fetch` 事件处理程序中将资源添加到缓存中。

## 何时缓存资源

PWA 可以在任何时候缓存资源，但在实践中，大多数 PWA 选择在以下几个时间点缓存它们：

- **在 service worker 的 `install` 事件处理程序中（预缓存）**：当 service worker 被安装时，浏览器会在 service worker 的全局作用域中触发一个名为 {{domxref("ServiceWorkerGlobalScope.install_event", "install")}} 的事件。此时，service worker 可以*预缓存*资源，从网络获取它们并将它们存储在缓存中。

  > [!NOTE]
  > service worker 的安装时间与 PWA 的安装时间不同。一个 service worker 的 `install` 事件会在 service worker 被下载和执行后立即触发，这通常会发生在用户首次访问你的网站时。
  >
  > 即使用户从未将你的网站安装为 PWA，其 service worker 也会被安装和激活。

- **在 service worker 的 `fetch` 事件处理程序中**：当 service worker 的 `fetch` 事件被触发时，service worker 可以将请求转发到网络，并缓存结果响应，无论缓存中是否已经包含了响应，亦或是用较新的响应来更新缓存中的响应。

- **响应用户请求时**：PWA 可能会明确邀请用户下载稍后使用的资源。例如，音乐播放器可能会邀请用户下载曲目以稍后离线播放。在这种情况下，主应用线程可以获取资源并将响应添加到缓存中。特别是如果请求的资源很大，PWA 可能会使用 [Background Fetch API](/zh-CN/docs/Web/API/Background_Fetch_API)，在这种情况下，响应将由 service worker 处理，它将添加响应到缓存中。

- **定期**：使用[定期后台同步 API](/zh-CN/docs/Web/API/Web_Periodic_Background_Synchronization_API)，service worker 可以定期获取资源并缓存响应，以确保即使在设备离线时，PWA 也可以提供合理新鲜的响应。

## 缓存策略

缓存策略是何时缓存资源、何时提供缓存资源以及何时从网络获取资源的算法。在本节中，我们将总结一些常用的策略。

这不是一个详尽的列表：它只是旨在说明 PWA 可以采用的策略类型。

缓存策略在离线操作、响应速度和新鲜度之间寻求平衡。不同的资源在此方面有不同的要求：例如，应用的基本 UI 可能相对稳定，而显示产品列表时获取最新数据则可能至关重要。这意味着 PWA 通常会对不同的资源采用不同的策略，单个 PWA 可能会使用此处描述的所有策略。

### 缓存优先

在这个策略中，我们会预缓存一些资源，然后仅对这些资源实现“缓存优先”策略。也就是：

- 对于预缓存的资源，我们将：
  - 在缓存中查找该资源，如果找到则返回该资源。
  - 否则，进行一次网络请求。如果网络请求成功，则缓存该资源以备下次使用。
- 对于所有其他资源，我们将始终进行网络请求。

预缓存适用于 PWA 确定需要的、在此版本的应用中不会改变的资源，以及需要尽快获取的资源。例如，这包括应用程序的基本用户界面。如果这些界面预缓存了，那么应用的 UI 就可以在启动时不需要任何网络请求地渲染。

首先，service worker 在其 `install` 事件处理程序中预缓存静态资源：

```js
const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
```

在 `install` 事件处理程序中，我们将缓存操作的结果传递给事件的 {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} 方法。这意味着如果由于任何原因缓存失败，service worker 的安装就会失败：反过来，如果安装成功，service worker 就可以确定资源已添加到缓存中。

`fetch` 事件处理程序如下：

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

我们通过调用事件的 {{domxref("FetchEvent.respondWith()", "respondWith()")}} 方法来返回资源。如果我们没有为某个请求调用 `respondWith()`，那么该请求将像 service worker 没有拦截它一样发送到网络。因此，如果一个请求没有预缓存，它就直接从网络获取。

当我们将 `networkResponse` 添加到缓存时，我们必须克隆响应并将副本添加到缓存中，同时返回原始响应。这是因为 `Response` 对象是可以流传输的，所以只能读取一次。

你可能会疑惑为什么对预缓存的资源会回退到网络请求。如果它们已预缓存，难道我们就不能确定它们一定在缓存中吗？原因是缓存可能会被浏览器或用户清除。虽然这不太可能发生，但如果不能回退到网络请求，会导致 PWA 不可用。参见[删除缓存数据](#删除缓存数据)。

### 带缓存刷新的数据缓存优先

“缓存优先”的缺点是一旦响应进入缓存，它就永远不会刷新，直到安装新的 service worker 版本。

“带缓存刷新的数据缓存优先”策略，也称为“用旧并换新（stale while revalidate）”，与“缓存优先”类似，不同之处在于即使缓存命中后，我们也总是将请求发送到网络，并使用响应来刷新缓存。这意味着我们可以得到“缓存优先”的响应速度，但可以获取相当新鲜的响应（只要请求频繁足够）。

当响应速度很重要，新鲜程度也比较重要但不是至关重要时，这是一个不错的选择。

在这个版本中，我们对所有资源（JSON 除外）实现“带缓存刷新的缓存优先”。

```js
function isCacheable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
```

注意，我们异步更新缓存（在 `then()` 处理程序中），所以应用不必等待网络响应被接收就可以使用缓存的响应。

### 网络优先

我们要了解的最后一个策略是“网络优先”，它与缓存优先的逻辑相反：我们先尝试从网络获取资源。如果网络请求成功，我们返回响应并更新缓存。如果失败，我们尝试获取缓存。

这对于获取最新响应非常重要，但缓存的资源比没有好的请求很有用。一个消息应用的最近消息列表可能属于此类别。

在下面的示例中，我们对获取位于应用“inbox”路径下的所有资源的请求使用“网络优先”策略。

```js
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/^\/inbox/)) {
    event.respondWith(networkFirst(event.request));
  }
});
```

仍然存在一些请求，没有响应比可能过时的响应更好，且仅“网络优先”策略才合适。例如，如果一个应用正在显示可用产品列表，列表过时对用户来说将是令人沮丧的。

## 删除缓存数据

缓存具有有限的存储空间，如果超出限制，浏览器可能会驱逐应用缓存的数据。具体的限制和行为因浏览器而异：参见[存储配额和驱逐标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)了解详细信息。实际上，驱逐缓存数据的情况非常罕见。用户也可以随时清除应用程序的缓存。

PWA 应该在 service worker 的 {{domxref("ServiceWorkerGlobalScope.activate_event", "activate")}} 事件中清除旧版本的任何缓存：当此事件触发时，service worker 可以确定没有之前版本的 service worker 正在运行，因此不再需要旧的缓存数据。

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [存储配额和驱逐标准](/zh-CN/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- developer.chrome.google.cn 上的 [service worker 缓存策略](https://developer.chrome.google.cn/docs/workbox/caching-strategies-overview)（2021）
- web.developers.google.cn 上的[离线应用程序开发指南](https://web.developers.google.cn/articles/offline-cookbook)（2020）
