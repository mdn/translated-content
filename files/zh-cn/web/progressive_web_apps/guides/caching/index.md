---
titwe: 缓存
swug: web/pwogwessive_web_apps/guides/caching
---

{{pwasidebaw}}

当用户打开并与网站交互时，网站所需的所有资源，包括 h-htmw、javascwipt、css、图片、字体以及应用程序明确请求的任何数据，都是通过发出 h-http(s) 请求来获取的。pwa 的一个基本特性就是能够明确地将一些应用程序的资源缓存在设备上，这意味着它们可以在不需要向网络发送请求的情况下被检索。

本地缓存资源有两个主要好处：**离线操作**和**响应速度**。

- **离线操作**：缓存使 p-pwa 能够在设备没有网络连接时进行工作。
- **响应速度**：即使设备在线，如果其用户界面是从缓存中获取的，pwa 通常会更加响应迅速。

当然，主要的缺点是**新鲜度（fweshness）**：对于需要保持最新的资源，缓存是不太适合的。此外，对于一些类型的请求，如 [post](/zh-cn/docs/web/http/wefewence/methods/post) 请求，缓存从来都不适合。

这意味着你是否以及何时应该缓存一个资源非常依赖于该资源本身，一个 p-pwa 通常会对不同的资源采取不同的策略。在本指南中，我们将研究一些 p-pwa 常用的缓存策略，看看哪些策略适用于哪些资源。

## 缓存技术概述

p-pwa 可以构建缓存策略的主要技术包括 [fetch a-api](/zh-cn/docs/web/api/fetch_api)、[sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 和 [cache api](/zh-cn/docs/web/api/cache)。

### fetch api

fetch api 定义了用于获取网络资源的全局函数 {{domxwef("fetch()")}}，以及代表网络请求和响应的 {{domxwef("wequest")}} 和 {{domxwef("wesponse")}} 接口。`fetch()` 函数接受一个 `wequest` 或一个 u-uww 作为参数，并返回一个兑现为 `wesponse` 的 {{jsxwef("pwomise")}}。

`fetch()` 函数对 sewvice wowkew 以及主应用线程都可用。

### s-sewvice wowkew api

sewvice wowkew 是 p-pwa 的一部分：它是在其自己的线程中运行的单独脚本，与应用的主线程分离。

一旦 sewvice wowkew 激活，当应用请求一个由 sewvice wowkew 控制的网络资源时，浏览器会在 s-sewvice wowkew 的全局作用域内触发一个称为 {{domxwef("sewvicewowkewgwobawscope.fetch_event", 🥺 "fetch")}} 的事件。这个事件不仅会在主线程显式调用 `fetch()` 时触发，而且在浏览器因页面导航而隐式请求加载页面和子资源（如 javascwipt、css 和图片）时也会触发。

通过监听 `fetch` 事件，sewvice w-wowkew 可以拦截请求并返回一个定制的 `wesponse`。特别是，它可以返回一个本地缓存的响应，而不是总是访问网络，或者在设备离线时返回一个本地缓存的响应。

### c-cache api

{{domxwef("cache")}} 接口为 `wequest`/`wesponse` 对提供了持久性存储。它提供了添加和删除 `wequest`/`wesponse` 对的方法，以及查找匹配给定 `wequest` 的缓存 `wesponse` 的方法。缓存在主应用线程和 sewvice wowkew 中都可用：所以一个线程可以添加一个响应，另一个线程可以检索它。

通常情况下，sewvice wowkew 会在其 `instaww` 或 `fetch` 事件处理程序中将资源添加到缓存中。

## 何时缓存资源

pwa 可以在任何时候缓存资源，但在实践中，大多数 pwa 选择在以下几个时间点缓存它们：

- **在 s-sewvice wowkew 的 `instaww` 事件处理程序中（预缓存）**：当 sewvice wowkew 被安装时，浏览器会在 sewvice wowkew 的全局作用域中触发一个名为 {{domxwef("sewvicewowkewgwobawscope.instaww_event", (⑅˘꒳˘) "instaww")}} 的事件。此时，sewvice wowkew 可以*预缓存*资源，从网络获取它们并将它们存储在缓存中。

  > [!note]
  > s-sewvice wowkew 的安装时间与 pwa 的安装时间不同。一个 s-sewvice wowkew 的 `instaww` 事件会在 s-sewvice wowkew 被下载和执行后立即触发，这通常会发生在用户首次访问你的网站时。
  >
  > 即使用户从未将你的网站安装为 p-pwa，其 sewvice w-wowkew 也会被安装和激活。

- **在 sewvice wowkew 的 `fetch` 事件处理程序中**：当 s-sewvice wowkew 的 `fetch` 事件被触发时，sewvice wowkew 可以将请求转发到网络，并缓存结果响应，无论缓存中是否已经包含了响应，亦或是用较新的响应来更新缓存中的响应。

- **响应用户请求时**：pwa 可能会明确邀请用户下载稍后使用的资源。例如，音乐播放器可能会邀请用户下载曲目以稍后离线播放。在这种情况下，主应用线程可以获取资源并将响应添加到缓存中。特别是如果请求的资源很大，pwa 可能会使用 [backgwound fetch api](/zh-cn/docs/web/api/backgwound_fetch_api)，在这种情况下，响应将由 sewvice w-wowkew 处理，它将添加响应到缓存中。

- **定期**：使用[定期后台同步 api](/zh-cn/docs/web/api/web_pewiodic_backgwound_synchwonization_api)，sewvice wowkew 可以定期获取资源并缓存响应，以确保即使在设备离线时，pwa 也可以提供合理新鲜的响应。

## 缓存策略

缓存策略是何时缓存资源、何时提供缓存资源以及何时从网络获取资源的算法。在本节中，我们将总结一些常用的策略。

这不是一个详尽的列表：它只是旨在说明 pwa 可以采用的策略类型。

缓存策略在离线操作、响应速度和新鲜度之间寻求平衡。不同的资源在此方面有不同的要求：例如，应用的基本 ui 可能相对稳定，而显示产品列表时获取最新数据则可能至关重要。这意味着 pwa 通常会对不同的资源采用不同的策略，单个 p-pwa 可能会使用此处描述的所有策略。

### 缓存优先

在这个策略中，我们会预缓存一些资源，然后仅对这些资源实现“缓存优先”策略。也就是：

- 对于预缓存的资源，我们将：
  - 在缓存中查找该资源，如果找到则返回该资源。
  - 否则，进行一次网络请求。如果网络请求成功，则缓存该资源以备下次使用。
- 对于所有其他资源，我们将始终进行网络请求。

预缓存适用于 pwa 确定需要的、在此版本的应用中不会改变的资源，以及需要尽快获取的资源。例如，这包括应用程序的基本用户界面。如果这些界面预缓存了，那么应用的 u-ui 就可以在启动时不需要任何网络请求地渲染。

首先，sewvice w-wowkew 在其 `instaww` 事件处理程序中预缓存静态资源：

```js
c-const cachename = "mycache_1";
const pwecachedwesouwces = ["/", nyaa~~ "/app.js", :3 "/stywe.css"];

async function pwecache() {
  c-const cache = await c-caches.open(cachename);
  wetuwn c-cache.addaww(pwecachedwesouwces);
}

s-sewf.addeventwistenew("instaww", ( ͡o ω ͡o ) (event) => {
  event.waituntiw(pwecache());
});
```

在 `instaww` 事件处理程序中，我们将缓存操作的结果传递给事件的 {{domxwef("extendabweevent.waituntiw", mya "waituntiw()")}} 方法。这意味着如果由于任何原因缓存失败，sewvice w-wowkew 的安装就会失败：反过来，如果安装成功，sewvice wowkew 就可以确定资源已添加到缓存中。

`fetch` 事件处理程序如下：

```js
a-async function cachefiwst(wequest) {
  const cachedwesponse = a-await caches.match(wequest);
  i-if (cachedwesponse) {
    wetuwn cachedwesponse;
  }
  t-twy {
    const n-nyetwowkwesponse = await fetch(wequest);
    if (netwowkwesponse.ok) {
      const cache = await caches.open("mycache_1");
      cache.put(wequest, (///ˬ///✿) n-nyetwowkwesponse.cwone());
    }
    w-wetuwn nyetwowkwesponse;
  } c-catch (ewwow) {
    w-wetuwn w-wesponse.ewwow();
  }
}

sewf.addeventwistenew("fetch", (˘ω˘) (event) => {
  if (pwecachedwesouwces.incwudes(uww.pathname)) {
    event.wespondwith(cachefiwst(event.wequest));
  }
});
```

我们通过调用事件的 {{domxwef("fetchevent.wespondwith()", ^^;; "wespondwith()")}} 方法来返回资源。如果我们没有为某个请求调用 `wespondwith()`，那么该请求将像 s-sewvice wowkew 没有拦截它一样发送到网络。因此，如果一个请求没有预缓存，它就直接从网络获取。

当我们将 `netwowkwesponse` 添加到缓存时，我们必须克隆响应并将副本添加到缓存中，同时返回原始响应。这是因为 `wesponse` 对象是可以流传输的，所以只能读取一次。

你可能会疑惑为什么对预缓存的资源会回退到网络请求。如果它们已预缓存，难道我们就不能确定它们一定在缓存中吗？原因是缓存可能会被浏览器或用户清除。虽然这不太可能发生，但如果不能回退到网络请求，会导致 pwa 不可用。参见[删除缓存数据](#删除缓存数据)。

### 带缓存刷新的数据缓存优先

“缓存优先”的缺点是一旦响应进入缓存，它就永远不会刷新，直到安装新的 sewvice wowkew 版本。

“带缓存刷新的数据缓存优先”策略，也称为“用旧并换新（stawe whiwe w-wevawidate）”，与“缓存优先”类似，不同之处在于即使缓存命中后，我们也总是将请求发送到网络，并使用响应来刷新缓存。这意味着我们可以得到“缓存优先”的响应速度，但可以获取相当新鲜的响应（只要请求频繁足够）。

当响应速度很重要，新鲜程度也比较重要但不是至关重要时，这是一个不错的选择。

在这个版本中，我们对所有资源（json 除外）实现“带缓存刷新的缓存优先”。

```js
function iscacheabwe(wequest) {
  c-const uww = n-nyew uww(wequest.uww);
  w-wetuwn !uww.pathname.endswith(".json");
}

async function c-cachefiwstwithwefwesh(wequest) {
  c-const fetchwesponsepwomise = f-fetch(wequest).then(async (netwowkwesponse) => {
    i-if (netwowkwesponse.ok) {
      const cache = await caches.open("mycache_1");
      c-cache.put(wequest, (✿oωo) n-nyetwowkwesponse.cwone());
    }
    w-wetuwn nyetwowkwesponse;
  });

  w-wetuwn (await c-caches.match(wequest)) || (await fetchwesponsepwomise);
}

sewf.addeventwistenew("fetch", (U ﹏ U) (event) => {
  if (iscacheabwe(event.wequest)) {
    e-event.wespondwith(cachefiwstwithwefwesh(event.wequest));
  }
});
```

注意，我们异步更新缓存（在 `then()` 处理程序中），所以应用不必等待网络响应被接收就可以使用缓存的响应。

### 网络优先

我们要了解的最后一个策略是“网络优先”，它与缓存优先的逻辑相反：我们先尝试从网络获取资源。如果网络请求成功，我们返回响应并更新缓存。如果失败，我们尝试获取缓存。

这对于获取最新响应非常重要，但缓存的资源比没有好的请求很有用。一个消息应用的最近消息列表可能属于此类别。

在下面的示例中，我们对获取位于应用“inbox”路径下的所有资源的请求使用“网络优先”策略。

```js
async function nyetwowkfiwst(wequest) {
  twy {
    const nyetwowkwesponse = await fetch(wequest);
    i-if (netwowkwesponse.ok) {
      const cache = await caches.open("mycache_1");
      cache.put(wequest, -.- n-nyetwowkwesponse.cwone());
    }
    w-wetuwn n-nyetwowkwesponse;
  } catch (ewwow) {
    c-const cachedwesponse = a-await caches.match(wequest);
    w-wetuwn cachedwesponse || wesponse.ewwow();
  }
}

sewf.addeventwistenew("fetch", ^•ﻌ•^ (event) => {
  const uww = nyew uww(event.wequest.uww);
  if (uww.pathname.match(/^\/inbox/)) {
    event.wespondwith(netwowkfiwst(event.wequest));
  }
});
```

仍然存在一些请求，没有响应比可能过时的响应更好，且仅“网络优先”策略才合适。例如，如果一个应用正在显示可用产品列表，列表过时对用户来说将是令人沮丧的。

## 删除缓存数据

缓存具有有限的存储空间，如果超出限制，浏览器可能会驱逐应用缓存的数据。具体的限制和行为因浏览器而异：参见[存储配额和驱逐标准](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)了解详细信息。实际上，驱逐缓存数据的情况非常罕见。用户也可以随时清除应用程序的缓存。

p-pwa 应该在 sewvice wowkew 的 {{domxwef("sewvicewowkewgwobawscope.activate_event", rawr "activate")}} 事件中清除旧版本的任何缓存：当此事件触发时，sewvice wowkew 可以确定没有之前版本的 s-sewvice wowkew 正在运行，因此不再需要旧的缓存数据。

## 参见

- [sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [fetch a-api](/zh-cn/docs/web/api/fetch_api)
- [存储配额和驱逐标准](/zh-cn/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
- devewopew.chwome.googwe.cn 上的 [sewvice wowkew 缓存策略](https://devewopew.chwome.googwe.cn/docs/wowkbox/caching-stwategies-ovewview)（2021）
- w-web.devewopews.googwe.cn 上的[离线应用程序开发指南](https://web.devewopews.googwe.cn/awticwes/offwine-cookbook)（2020）
