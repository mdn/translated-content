---
title: 推测性加载
slug: Web/Performance/Speculative_loading
page-type: guide
---

{{QuickLinksWithSubPages("Web/Performance")}}

**推测性加载**是指在用户实际访问相关页面之前，基于推测用户最有可能访问的页面，进行导航操作（如 DNS 获取、获取资源或渲染文档）的行为。

这些推测可以由开发者提供（例如他们网站上最受欢迎的目的地列表），或者由浏览器启发式确定（例如基于用户历史记录中的热门网站）。当成功使用时，这些技术可以让页面更快地可用或在某些情况下立即可用，以显著提高性能。

本页面总结了可用的推测性加载技术，以及何时可以使用和应该使用这些技术来提高性能。

## 推测性加载机制

推测性加载有几种机制：

- **预加载（Prefetching）** 在需要之前获取渲染文档（或文档的一部分）所需的一些或全部资源，以便在将要渲染时更快地实现渲染。
- **预渲染（Prerendering）** 更进一步，会实际渲染内容，以便在需要时可以展示。根据实现方式的不同，可以实现从旧页面到新页面的即时导航。
- **预连接（Preconnecting）** 通过预先执行部分或全部的连接握手（即 DNS + TCP + TLS）来加速来自给定源的未来加载。

> [!NOTE]
> 上述描述是高层次和泛化的。浏览器究竟将执行何种操作来实现预加载和预渲染，取决于所使用的功能。更准确的功能描述在下面的[推测性加载功能](#speculative_loading_features)部分给出。

## 推测性加载是如何实现的？

推测性加载主要通过两种方式实现。

首先，一些浏览器会根据各种启发式方法自动预渲染页面，以提供自动的性能改进。具体如何实现取决于浏览器的实现。例如，Chrome 会在地址栏中输入匹配字符串时自动预渲染页面——如果它有很高的信心你会访问该页面（有关详细信息，请参阅[查看 Chrome 的地址栏推测](https://developer.chrome.google.cn/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions)）。此外，当搜索词输入到地址栏时，它可能会自动预渲染搜索结果页面，当搜索引擎指示这样做时。它使用与 [Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 相同的机制来实现这一点。

其次，有几个不同的平台功能可供开发者使用，以提供他们希望浏览器执行的推测性加载的指令。这些功能将在下一节中进行描述。

## 推测性加载功能

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/zh-CN/docs/Web/HTML/Attributes/rel/preconnect) 给浏览器一个提示，表明用户可能需要来自指定源的资源，因此浏览器可以通过预先启动对该源的连接来提高性能。支持的浏览器将预先执行部分或全部连接握手（即 DNS + TCP + TLS）。

例如：

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">`在浏览器中得到广泛支持，并将为任何未来的跨源 HTTP 请求、导航或子资源提供好处。对于同源请求没有好处，因为连接已经打开。

如果页面需要连接到许多第三方域，全部预连接可能会适得其反。`<link rel="preconnect">` 提示最好仅用于最关键的连接。对于其他的连接，只需使用 `<link rel="dns-prefetch">` 来节省第一步的时间——DNS 查找。

你还可以将预连接实现为 HTTP [Link](/zh-CN/docs/Web/HTTP/Headers/Link) 标头，例如：

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/dns-prefetch) 给浏览器一个提示，表明用户可能需要来自指定源的资源，因此浏览器可以通过预先为该源执行 DNS 解析来提高性能。它与 `<link rel="preconnect">` 相同，只是它只处理 DNS 部分。

同样，浏览器广泛支持此功能，另外这对于同源请求并没有收益，因为连接已经打开过了。

例如：

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> 有关详细信息，请参阅[使用 dns-prefetch](/zh-CN/docs/Web/Performance/dns-prefetch)。

### `<link rel="preload">`

[`<link rel="preload">`](/zh-CN/docs/Web/HTML/Attributes/rel/preload) 给浏览器一个提示，表明哪些资源在 _当前页面_ 上是高优先级的，因此浏览器可以在看到 {{htmlelement("link")}} 元素时尽早开始下载它们。

例如：

```html
<link rel="preload" href="main.js" as="script" />
<!-- CORS-enabled preload -->
<link
  rel="preload"
  href="https://www.example.com/fonts/cicle_fina-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

结果保存在每个文档的内存缓存中。如果你预加载当前页面不使用的资源，通常会造成一种资源浪费，尽管结果可能会填充 HTTP 缓存（如果标头允许）。

你还可以将预加载实现为 HTTP [Link](/zh-CN/docs/Web/HTTP/Headers/Link) 标头，例如：

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

现代浏览器普遍支持 `<link rel="preload">`/`<link rel="modulepreload">`。

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/zh-CN/docs/Web/HTML/Attributes/rel/modulepreload) 给浏览器一个提示，表明哪些 JavaScript 模块在 _当前页面_ 上是高优先级的，因此浏览器可以在看到它们时尽早开始下载。

例如：

```js
<link rel="modulepreload" href="main.js" />
```

它是 `<link rel="preload">`的专用版本，用于 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)，并且基本以相同的方式工作。然而还是有些区别：

- 浏览器知道资源是一个 JavaScript 模块，因为不需要 `as` 属性，它可以使用正确的凭据模式来避免双重获取。
- 浏览器不仅下载并将其存储在缓存中，还将其解析并编译到内存模块映射中。
- 浏览器还可以自动为模块依赖项做同样的事情。

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch) 给浏览器一个提示，表明用户可能需要目标资源进行未来的导航，因此浏览器可以通过预先获取和缓存资源来提高用户体验。`<link rel="prefetch">` 用于同站导航资源或同站页面使用的子资源。

例如：

```js
<link rel="prefetch" href="main.js" />
```

预加载可用于获取可能的下一次导航的 HTML 和子资源。一个常见的用例是简单的网站着陆页，该页获取整个站点其余部分使用的更“重量级”的资源。

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

结果保存在磁盘中的 HTTP 缓存中。因此，即便它们不被当前页面使用，也对于预加载子资源很有用。你还可以使用它来预加载用户可能在站点上访问的下一个文档。然而，你也因此要小心地处理标头——例如某些 [Cache-Control](/zh-CN/docs/Web/HTTP/Headers/Cache-Control) 标头可能会阻止预加载（例如 `no-cache` 或 `no-store`）。

现在许多浏览器实现了一些形式的[缓存分区](https://developer.chrome.google.cn/blog/http-cache-partitioning?hl=zh-cn)，这使得 `<link rel="prefetch">` 对于那些打算由不同顶级站点使用的资源无用。这包括会跨站点导航的主文档。例如下面的预加载：

```html
<link rel="prefetch" href="https://news.example/article" />
```

将无法从 `https://aggregator.example/` 访问。

> **注意：** `<link rel="prefetch">` 在功能上等同于一个带有 `priority: "low"` 选项的 {{domxref("Window/fetch", "fetch()")}} 调用，但前者通常具有更低的优先级，并且请求上会设置一个 [`Sec-Purpose: prefetch`](/zh-CN/docs/Web/HTTP/Headers/Sec-Purpose) 。

> [!NOTE] > `prefetch` 操作的获取请求将产生一个包含 HTTP 标头 [`Sec-Purpose: prefetch`](/zh-CN/docs/Web/HTTP/Headers/Sec-Purpose) 的 HTTP 请求。服务器可能会使用此标头更改资源的缓存超时时间或执行其他特殊处理。
> 请求还将包括 {{HTTPHeader("Sec-Fetch-Dest")}} 标头，其值为 `empty`。
> 请求中的 {{HTTPHeader("Accept")}} 标头将与正常导航请求中使用的值匹配。这允许浏览器在导航后找到匹配的缓存资源。
> 如果返回响应，它将与请求一起缓存在 HTTP 缓存中。

### `<link rel="prerender">`

> [!NOTE]

这项技术仅在 Chrome 中可用，现已弃用。作为取代，应该使用 [Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 。

[`<link rel="prerender">`](/zh-CN/docs/Web/HTML/Attributes/rel/prerender) 给浏览器一个提示，表明用户可能需要目标资源进行下一次导航，因此浏览器可以通过预渲染资源来提高性能。`prerender` 仅用于同站导航，因此适用于多页应用程序（MPA），而不适用于单页应用程序（SPA）。

例如：

```html
<link rel="prerender" href="/next-page" />
```

它将获取所引用的文档，然后获取任何静态可寻的链接资源，将结果存储在磁盘中的 HTTP 缓存，超时时间为五分钟。通过 JavaScript 加载的子资源是例外情况——它无法找到这些资源。它还有其他问题——像 `<link rel="prefetch">` 一样，它也可能被 [Cache-Control](/zh-CN/docs/Web/HTTP/Headers/Cache-Control) 标头阻止，并因浏览器[缓存分区](https://developer.chrome.google.cn/blog/http-cache-partitioning)而对那些打算由不同顶级站点使用的资源无用。

### Speculation Rules API

[Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 用于指定一组规则，以确定浏览器应预加载或预渲染哪些未来文档。这些规则作为内联 `<script type="speculationrules">` 元素和通过 {{httpheader("Speculation-Rules")}} 响应头引用的外部文本文件中的 JSON 结构提供。

## 何时使用每个功能？

下表总结了上述功能，并提供了何时使用每个功能的指导。

| 推测性加载功能                                                                    | 目的                                   | 何时使用                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/zh-CN/docs/Web/HTML/Attributes/rel/preconnect)       | 跨源连接预热                           | 在最关键的跨源连接上使用，以提供性能改进。                                                                                                                                                                                                                                                          |
| [`<link rel="dns-prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/dns-prefetch)   | 跨源连接预热                           | 在所有跨源连接上使用，以提供连接时的小性能改进。                                                                                                                                                                                                                                                    |
| [`<link rel="preload">`](/zh-CN/docs/Web/HTML/Attributes/rel/preload)             | 当前页面子资源的高优先级加载           | 用于更快地加载当前页面的高优先级资源，以实现战略性能改进。不要预加载所有内容，否则你不会看到好处。还有其他一些有趣的用途——参阅 Smashing Magazine（2016）的[预加载：有什么好处？](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)。                                           |
| [`<link rel="modulepreload">`](/zh-CN/docs/Web/HTML/Attributes/rel/modulepreload) | 当前页面 JavaScript 模块的高优先级加载 | 用于预加载当前页面的高优先级 JavaScript 模块，以实现战略性能改进。                                                                                                                                                                                                                                  |
| [`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch)           | 预填充 HTTP 缓存                       | 用于预加载同站未来导航资源或这些页面上使用的子资源。使用 HTTP 缓存，因此在文档预加载方面存在一些问题，例如可能被 [Cache-Control](/zh-CN/docs/Web/HTTP/Headers/Cache-Control) 标头阻止。相反，如果支持的话，使用 [Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 进行文档预加载。 |
| [`<link rel="prerender">`](/zh-CN/docs/Web/HTML/Attributes/rel/prerender)         | 为下一次导航做准备                     | 已弃用；建议不要使用这个。相反，如果支持的话，使用 [Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 预渲染。                                                                                                                                                                      |
| [Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 预请求         | 为下一次导航做准备                     | 用于预加载同站或跨站未来导航文档。如果支持的话，建议广泛采用；确保页面[安全预加载](/zh-CN/docs/Web/API/Speculation_Rules_API#unsafe_prefetching)。它不处理子资源预加载；为此你需要使用 `<link rel="prefetch">`。                                                                                    |
| [Speculation Rules API](/zh-CN/docs/Web/API/Speculation_Rules_API) 预渲染         | 为下一次导航做准备                     | 用于预加载同源未来导航资源，以实现几乎即时的导航。在支持的高优先级页面上使用；确保页面[安全预渲染](/zh-CN/docs/Web/API/Speculation_Rules_API#unsafe_prerendering)。                                                                                                                                 |

## 参见

- [在 Chrome 中预渲染页面以实现即时页面导航](https://developer.chrome.google.cn/docs/web-platform/prerender-pages) 在 developer.chrome.com（2023）
