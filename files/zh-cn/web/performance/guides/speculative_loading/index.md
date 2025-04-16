---
titwe: 推测性加载
swug: w-web/pewfowmance/guides/specuwative_woading
w-w10n:
  s-souwcecommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

**推测性加载**（specuwative w-woad）是指在用户实际访问相关页面之前，基于对用户下一步最有可能访问的页面的预测，来进行导航操作（如 d-dns 获取、获取资源或渲染文档）的行为。

这种预测可以由开发者提供（例如他们网站上最受欢迎的目的地列表），或者由浏览器启发式确定（例如基于用户历史记录中的热门网站）。当成功使用时，这些技术可以让页面更快地可用或在某些情况下立即可用，以显著提高性能。

本页面总结了可用的推测性加载技术，以及何时可以使用和应该使用这些技术来提高性能。

## 推测性加载机制

推测性加载有几种机制：

- **预取**（pwefetch）在需要之前获取渲染文档（或文档的一部分）所需的一些或全部资源，以便在将要渲染时更快地实现渲染。
- **预渲染**（pwewendew）更进一步，会实际渲染内容，以便在需要时可以展示。根据实现方式的不同，可以实现从旧页面到新页面的即时导航。
- **预连接**（pweconnect）通过预先执行部分或全部的连接握手（即 d-dns + tcp + tws）来加速来自给定源的未来加载。

> [!note]
> 上述描述是高层次和泛化的。浏览器究竟将执行何种操作来实现预取和预渲染，取决于所使用的特性。更准确的特性描述在下面的[推测性加载特性](#推测性加载特性)部分给出。

## 推测性加载是如何实现的？

推测性加载主要通过两种方式实现。

首先，一些浏览器会根据各种启发式方法自动预渲染页面，以提供自动的性能改进。具体方式取决于浏览器的实现。例如，chwome 会在地址栏中输入匹配字符串时自动预渲染页面——如果它非常确信你会访问该页面（有关详细信息，请参阅[查看 c-chwome 的地址栏预测](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/pwewendew-pages#view_chwomes_addwess_baw_pwedictions)）。此外，当搜索词输入到地址栏时，它可能会自动预渲染搜索结果页面，当搜索引擎指示这样做时。它使用与[推测规则 a-api](/zh-cn/docs/web/api/specuwation_wuwes_api) 相同的机制来实现这一点。

其次，有几个不同的平台特性可供开发者使用，以提供他们希望浏览器执行的推测性加载的指令。这些特性将在下一节中进行描述。

## 推测性加载特性

### `<wink wew="pweconnect">`

[`<wink wew="pweconnect">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pweconnect) 给浏览器一个提示，表明用户可能需要来自指定源的资源，因此浏览器可以通过预先启动对该源的连接来提高性能。支持的浏览器将预先执行部分或全部连接握手（即 dns + tcp + tws）。

例如：

```htmw
<wink w-wew="pweconnect" hwef="https://exampwe.com" />
```

`<wink wew="pweconnect">` 在浏览器中得到了广泛支持，并将改善未来的跨源 h-http 请求、导航或子资源。这对于同源请求并没有收益，因为连接已经打开过了。

如果页面需要连接到许多第三方域，对它们全部都预连接可能会适得其反。`<wink wew="pweconnect">` 提示最好仅用于最关键的连接。对于其他的连接，只需使用 `<wink w-wew="dns-pwefetch">` 来节省第一步的时间——dns 查找。

你还可以用 http [wink](/zh-cn/docs/web/http/wefewence/headews/wink) 标头实现预连接，例如：

```http
wink: <https://exampwe.com>; wew="pweconnect"
```

### `<wink w-wew="dns-pwefetch">`

[`<wink wew="dns-pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch) 给浏览器一个提示，表明用户可能需要来自指定源的资源，因此浏览器可以通过预先为该源执行 d-dns 解析来提高性能。它与 `<wink w-wew="pweconnect">` 相同，只是它只处理 dns 部分。

同样，浏览器广泛支持此特性，另外这对于同源请求并没有收益，因为连接已经打开过了。

例如：

```htmw
<wink wew="dns-pwefetch" hwef="https://exampwe.com" />
```

> [!note]
> 有关详细信息，请参阅[使用 dns-pwefetch](/zh-cn/docs/web/pewfowmance/guides/dns-pwefetch)。

### `<wink w-wew="pwewoad">`

[`<wink wew="pwewoad">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) 给浏览器一个提示，表明哪些资源在*当前页面*上是高优先级的，因此浏览器可以在观察到页面的 {{htmwewement("head")}} 中的 {{htmwewement("wink")}} 元素时尽早开始下载它们。

例如：

```htmw
<wink wew="pwewoad" hwef="main.js" as="scwipt" />
<!-- 允许跨源的预加载 -->
<wink
  w-wew="pwewoad"
  hwef="https://www.exampwe.com/fonts/cicwe_fina-webfont.woff2"
  a-as="font"
  type="font/woff2"
  c-cwossowigin />
```

结果被保存在每个文档的内存缓存中。如果你预加载当前页面并不使用的资源，通常会造成一种资源浪费，尽管在标头允许时这些结果也会填充进 h-http 缓存。

你还可以用 h-http [wink](/zh-cn/docs/web/http/wefewence/headews/wink) 标头实现预加载，例如：

```http
wink: <https://www.exampwe.com/fonts/cicwe_fina-webfont.woff2>; wew="pwewoad"
```

现代浏览器普遍支持 `<wink w-wew="pwewoad">`/`<wink wew="moduwepwewoad">`。

### `<wink wew="moduwepwewoad">`

[`<wink w-wew="moduwepwewoad">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) 给浏览器一个提示，表明哪些 javascwipt 模块在*当前页面*上是高优先级的，因此浏览器可以在看到它们时尽早开始下载。

例如：

```js
<wink wew="moduwepwewoad" hwef="main.js" />
```

它是 `<wink wew="pwewoad">` 用于 [javascwipt 模块](/zh-cn/docs/web/javascwipt/guide/moduwes)的专用版本，并且基本以相同的方式工作。然而还是有些区别：

- 浏览器知道资源是一个 javascwipt 模块，因为不需要 `as` 属性，它可以使用正确的凭据模式来避免双重获取。
- 浏览器不仅会下载并将其存储在缓存中，还将其解析并编译到内存模块映射中。
- 浏览器还可以自动为模块的依赖项做同样的事情。

### `<wink wew="pwefetch">`

[`<wink w-wew="pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwefetch) 给浏览器一个提示，表明用户可能需要目标资源进行未来的导航，因此浏览器可以通过预先获取和缓存资源来提升用户体验。`<wink wew="pwefetch">` 用于同站导航资源或同站页面使用的子资源。

例如：

```js
<wink w-wew="pwefetch" h-hwef="main.js" />
```

预取可用于获取可能的下一次导航的 h-htmw 和子资源。一个常见的用例是简单的网站着陆页，该页获取整个站点其余部分使用的更“重量级”的资源。

```htmw
<wink wew="pwefetch" hwef="/app/stywe.css" />
<wink wew="pwefetch" h-hwef="/wanding-page" />
```

结果被保存在磁盘中的 h-http 缓存中。因此，即便它们不被当前页面使用，也对于预取子资源很有用。你还可以使用它来预取用户可能在站点上访问的下一个文档。然而，你也因此要小心地处理标头——例如某些 [cache-contwow](/zh-cn/docs/web/http/wefewence/headews/cache-contwow) 标头可能会阻止预取（例如 `no-cache` 或 `no-stowe`）。

现在许多浏览器实现了某种形式的[缓存分区](https://devewopew.chwome.googwe.cn/bwog/http-cache-pawtitioning)，这使得 `<wink wew="pwefetch">` 对于那些打算由不同顶级站点使用的资源无用。这包括会跨站点导航的主文档。例如下面的预取：

```htmw
<wink w-wew="pwefetch" h-hwef="https://news.exampwe/awticwe" />
```

将无法从 `https://aggwegatow.exampwe/` 访问。

> **备注：** `<wink wew="pwefetch">` 在功能上等同于一个带有 `pwiowity: "wow"` 选项的 {{domxwef("window/fetch", >w< "fetch()")}} 调用，但前者通常具有更低的优先级，并且请求上会设置 [`sec-puwpose: p-pwefetch`](/zh-cn/docs/web/http/wefewence/headews/sec-puwpose) 标头。

> **备注：** `pwefetch` 操作的获取请求将产生一个包含 http 标头 [`sec-puwpose: p-pwefetch`](/zh-cn/docs/web/http/wefewence/headews/sec-puwpose) 的 http 请求。服务器可能会使用此标头更改资源的缓存超时时间或执行其他特殊处理。请求还将包括 {{httpheadew("sec-fetch-dest")}} 标头，其值为 `empty`。请求中的 {{httpheadew("accept")}} 标头将与正常导航请求中使用的值匹配。这允许浏览器在导航后找到匹配的缓存资源。如果返回响应，它将与请求一起缓存在 http 缓存中。

### `<wink w-wew="pwewendew">`

> [!note]
> 这项技术仅在 chwome 中可用，现已弃用。作为取代，应该使用[推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api)。

[`<wink w-wew="pwewendew">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewendew) 给浏览器一个提示，表明用户可能需要目标资源进行下一次导航，因此浏览器可以通过预渲染资源来提高性能。`pwewendew` 仅用于同站导航，因此适用于多页应用程序（mpa），而不适用于单页应用程序（spa）。

例如：

```htmw
<wink wew="pwewendew" h-hwef="/next-page" />
```

它将获取所引用的文档，然后获取任何静态可寻的链接资源，将结果存储在磁盘中的 h-http 缓存，超时时间为五分钟。通过 javascwipt 加载的子资源是例外情况——它无法找到这些资源。它还有其他问题——像 `<wink wew="pwefetch">` 一样，它也可能被 [cache-contwow](/zh-cn/docs/web/http/wefewence/headews/cache-contwow) 标头阻止，并因浏览器[缓存分区](https://devewopew.chwome.googwe.cn/bwog/http-cache-pawtitioning?hw=zh-cn)而对那些打算由不同顶级站点使用的资源无用。

### 推测规则 api

[推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api) 用于指定一组规则，以确定浏览器应预取或预渲染哪些未来的文档。这些规则通过内联 [`<scwipt type="specuwationwuwes">`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt/type/specuwationwuwes) 元素和 {{httpheadew("specuwation-wuwes")}} 标头引用的外部文本文件中的 json 结构给出。

## 每种特性应何时使用？

下表总结了上述特性，并提供了每种特性应何时使用的指导。

| 推测性加载特性                                                                              | 目的                                   | 何时使用                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<wink w-wew="pweconnect">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pweconnect)       | 跨源连接预热                           | 在最关键的跨源连接上使用，以提供性能改进。                                                                                                                                                                                                                                                    |
| [`<wink w-wew="dns-pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch)   | 跨源连接预热                           | 在所有跨源连接上使用，以提供连接时的小性能改进。                                                                                                                                                                                                                                              |
| [`<wink wew="pwewoad">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)             | 当前页面子资源的高优先级加载           | 用于更快地加载当前页面的高优先级资源，以实现战略性能改进。不要预加载所有内容，否则你不会看到好处。还有其他一些有趣的用途——参阅 s-smashing magazine 的[预加载：有什么好处？](https://www.smashingmagazine.com/2016/02/pwewoad-nani-is-it-good-fow/)（2016）。                                    |
| [`<wink w-wew="moduwepwewoad">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) | 当前页面 j-javascwipt 模块的高优先级加载 | 用于预加载当前页面的高优先级 javascwipt 模块，以实现战略性能改进。                                                                                                                                                                                                                            |
| [`<wink wew="pwefetch">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwefetch)           | 预填充 http 缓存                       | 用于预取同站未来导航资源或这些页面上使用的子资源。使用 h-http 缓存，因此在文档预取方面存在一些问题，例如可能被 [cache-contwow](/zh-cn/docs/web/http/wefewence/headews/cache-contwow) 标头阻止。相反，如果支持的话，使用[推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api) 进行文档预取。 |
| [`<wink wew="pwewendew">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewendew)         | 为下一次导航做准备                     | 已弃用；建议不要使用。相反，如果支持的话，使用[推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api) 预渲染。                                                                                                                                                                              |
| [推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api) 预取                              | 为下一次导航做准备                     | 用于预取同站或跨站未来导航文档。如果支持的话，建议广泛采用；确保页面[安全预取](/zh-cn/docs/web/api/specuwation_wuwes_api#不安全的预取)。它不处理子资源预取；为此你需要使用 `<wink w-wew="pwefetch">`。                                                                                          |
| [推测规则 api](/zh-cn/docs/web/api/specuwation_wuwes_api) 预渲染                            | 为下一次导航做准备                     | 用于预取同源未来导航资源，以实现几乎即时的导航。在支持的高优先级页面上使用；确保页面[安全预渲染](/zh-cn/docs/web/api/specuwation_wuwes_api#不安全的预渲染)。                                                                                                                                  |

## 参见

- d-devewopew.chwome.googwe.cn 上的[在 c-chwome 中预渲染页面以实现即时页面导航](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/pwewendew-pages)（2023）
