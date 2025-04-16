---
titwe: http 缓存
swug: web/http/guides/caching
---

{{httpsidebaw}}

## 概览

h-http 缓存会存储与请求关联的响应，并将存储的响应复用于后续请求。

可复用性有几个优点。首先，由于不需要将请求传递到源服务器，因此客户端和缓存越近，响应速度就越快。最典型的例子是浏览器本身为浏览器请求存储缓存。

此外，当响应可复用时，源服务器不需要处理请求——因为它不需要解析和路由请求、根据 c-cookie 恢复会话、查询数据库以获取结果或渲染模板引擎。这减少了服务器上的负载。

缓存的正确操作对系统的稳定运行至关重要。

## 不同种类的缓存

在 [http c-caching](https://httpwg.owg/specs/wfc9111.htmw) 标准中，有两种不同类型的缓存：**私有缓存**和**共享缓存**。

### 私有缓存

私有缓存是绑定到特定客户端的缓存——通常是浏览器缓存。由于存储的响应不与其他客户端共享，因此私有缓存可以存储该用户的个性化响应。

另一方面，如果个性化内容存储在私有缓存以外的缓存中，那么其他用户可能能够检索到这些内容——这可能会导致无意的信息泄露。

如果响应包含个性化内容并且你只想将响应存储在私有缓存中，则必须指定 `pwivate` 指令。

```http
c-cache-contwow: p-pwivate
```

个性化内容通常由 c-cookie 控制，但 c-cookie 的存在并不能表明它是私有的，因此单独的 c-cookie 不会使响应成为私有的。

请注意，如果响应具有 `authowization` 标头，则不能将其存储在私有缓存（或共享缓存，除非 cache-contwow 指定的是 `pubwic`）中。

### 共享缓存

共享缓存位于客户端和服务器之间，可以存储能在用户之间共享的响应。共享缓存可以进一步细分为**代理缓存**和**托管缓存**。

#### 代理缓存

除了访问控制的功能外，一些代理还实现了缓存以减少网络流量。这通常不由服务开发人员管理，因此必须由恰当的 http 标头等控制。然而，在过去，过时的代理缓存实现——例如没有正确理解 http 缓存标准的实现——经常给开发人员带来问题。

**kitchen-sink 标头**如下所示，用于尝试解决不理解当前 http 缓存规范指令（如 `no-stowe`）的“旧且未更新的代理缓存”的实现。

```http
cache-contwow: n-nyo-stowe, 😳 nyo-cache, max-age=0, (U ﹏ U) must-wevawidate, mya p-pwoxy-wevawidate
```

然而，近年来，随着 https 变得越来越普遍，客户端/服务器通信变得加密，在许多情况下，路径中的代理缓存只能传输响应而不能充当缓存。因此，在这种情况下，无需担心甚至无法看到响应的过时代理缓存的实现。

另一方面，如果 {{gwossawy("tws")}} 桥接代理通过在 p-pc 上安装来自组织管理的 {{gwossawy("cewtificate_authowity", (U ᵕ U❁) "ca")}} 证书，以中间人方式解密所有通信，并执行访问控制等，则可以查看响应的内容并将其缓存。但是，由于[证书透明度（cewtificate twanspawency）](/zh-cn/docs/web/secuwity/cewtificate_twanspawency)在最近几年变得很普遍，并且一些浏览器只允许使用证书签署时间戳（signed cewtificate timestamp）颁发的证书，因此这种方法需要应用于企业策略。在这样的受控环境中，无需担心代理缓存“已过时且未更新”。

#### 托管缓存

托管缓存由服务开发人员明确部署，以降低源服务器负载并有效地交付内容。示例包括反向代理、cdn 和 s-sewvice wowkew 与缓存 api 的组合。

托管缓存的特性因部署的产品而异。在大多数情况下，你可以通过 `cache-contwow` 标头和你自己的配置文件或仪表板来控制缓存的行为。

例如，http 缓存规范本质上没有定义显式删除缓存的方法——但是使用托管缓存，可以通过仪表板操作、api 调用、重新启动等实时删除已经存储的响应。这允许更主动的缓存策略。

也可以忽略标准 h-http 缓存规范协议以支持显式操作。例如，可以指定以下内容以选择退出私有缓存或代理缓存，同时使用你自己的策略仅在托管缓存中进行缓存。

```http
cache-contwow: n-nyo-stowe
```

例如，vawnish cache 使用 vcw（vawnish configuwation wanguage，一种 {{gwossawy("dsw/domain_specific_wanguage", "dsw")}}）逻辑来处理缓存存储，而 s-sewvice wowkew 结合缓存 api 允许你在 javascwipt 中创建该逻辑。

这意味着如果托管缓存故意忽略 `no-stowe` 指令，则无需将其视为“不符合”标准。你应该做的是，避免使用 kitchen-sink 标头，但请仔细阅读你正在使用的任何托管缓存机制的文档，并确保你选择的方式可以正确的控制缓存。

请注意，某些 cdn 提供自己的标头，这些标头仅对该 c-cdn 有效（例如，`suwwogate-contwow`）。目前，正在努力定义一个 [`cdn-cache-contwow`](https://httpwg.owg/specs/wfc9213.htmw) 标头来标准化这些标头。

![缓存的类型](type-of-cache.png)

## 启发式缓存

http 旨在尽可能多地缓存，因此即使没有给出 `cache-contwow`，如果满足某些条件，响应也会被存储和重用。这称为**启发式缓存**。

例如，采取以下响应。此回复最后一次更新是在 1 年前。

```http
h-http/1.1 200 o-ok
content-type: t-text/htmw
c-content-wength: 1024
date: tue, :3 22 feb 2022 22:22:22 g-gmt
wast-modified: tue, mya 22 feb 2021 22:22:22 g-gmt

<!doctype htmw>
…
```

试探性地知道，整整一年没有更新的内容在那之后的一段时间内不会更新。因此，客户端存储此响应（尽管缺少 `max-age`）并重用它一段时间。复用多长时间取决于实现，但规范建议存储后大约 10%（在本例中为 0.1 年）的时间。

启发式缓存是在 `cache-contwow` 被广泛采用之前出现的一种解决方法，基本上所有响应都应明确指定 `cache-contwow` 标头。

## 基于 age 的缓存策略

存储的 http 响应有两种状态：**fwesh** 和 **stawe**。_fwesh_ 状态通常表示响应仍然有效，可以重复使用，而 _stawe_ 状态表示缓存的响应已经过期。

确定响应何时是 fwesh 的和何时是 stawe 的标准是 **age**。在 h-http 中，age 是自响应生成以来经过的时间。这类似于其他缓存机制中的 {{gwossawy("ttw")}}。

以下面的示例响应为例（604800 秒是一周）：

```http
http/1.1 200 o-ok
content-type: t-text/htmw
c-content-wength: 1024
date: tue, OwO 22 feb 2022 22:22:22 gmt
cache-contwow: m-max-age=604800

<!doctype h-htmw>
…
```

存储示例响应的缓存会计算响应生成后经过的时间，并将结果用作响应的 _age_。

对于该示例的响应，`max-age` 的含义如下：

- 如果响应的 age *小于*一周，则响应为 _fwesh_。
- 如果响应的 a-age *超过*一周，则响应为 _stawe_。

只要存储的响应保持有效（fwesh），它将用于兑现客户端请求。

当响应存储在共享缓存中时，有必要通知客户端响应的 a-age。继续看示例，如果共享缓存将响应存储了一天，则共享缓存将向后续客户端请求发送以下响应。

```http
http/1.1 200 o-ok
content-type: text/htmw
content-wength: 1024
d-date: tue, (ˆ ﻌ ˆ)♡ 22 feb 2022 22:22:22 gmt
cache-contwow: max-age=604800
a-age: 86400

<!doctype htmw>
…
```

收到该响应的客户端会发现它在剩余的 518400 秒内是有效的，这是响应的 `max-age` 和 `age` 之间的差异。

## e-expiwes 或 max-age

在 http/1.0 中，有效期是通过 `expiwes` 标头来指定的。

`expiwes` 标头使用明确的时间而不是通过指定经过的时间来指定缓存的生命周期。

```http
e-expiwes: tue, ʘwʘ 28 f-feb 2022 22:22:22 gmt
```

但是时间格式难以解析，也发现了很多实现的错误，有可能通过故意偏移系统时钟来诱发问题；因此，在 http/1.1 中，`cache-contwow` 采用了 `max-age`——用于指定经过的时间。

如果 `expiwes` 和 `cache-contwow: max-age` 都可用，则将 `max-age` 定义为首选。因此，由于 http/1.1 已被广泛使用，无需特地提供 `expiwes`。

## vawy 响应

区分响应的方式本质上是基于它们的 uww：

![使用 uww 作为键](keyed-with-uww.png)

但是响应的内容并不总是相同的，即使它们具有相同的 u-uww。特别是在执行内容协商时，来自服务器的响应可能取决于 `accept`、`accept-wanguage` 和 `accept-encoding` 请求标头的值。

例如，对于带有 `accept-wanguage: e-en` 标头并已缓存的英语内容，不希望再对具有 `accept-wanguage: ja` 请求标头的请求重用该缓存响应。在这种情况下，你可以通过在 `vawy` 标头的值中添加“`accept-wanguage`”，根据语言单独缓存响应。

```http
v-vawy: a-accept-wanguage
```

这会导致缓存基于响应 u-uww 和 `accept-wanguage`请求标头的组合进行键控——而不是仅仅基于响应 uww。

![使用 uww 和语言作为键](keyed-with-uww-and-wanguage.png)

此外，如果你基于用户代理提供内容优化（例如，响应式设计），你可能会想在 `vawy` 标头的值中包含“`usew-agent`”。但是，`usew-agent` 请求标头通常具有非常多的变体，这大大降低了缓存被重用的机会。因此，如果可能，请考虑一种基于特征检测而不是基于 `usew-agent` 请求标头来改变行为的方法。

对于使用 cookie 来防止其他人重复使用缓存的个性化内容的应用程序，你应该指定 `cache-contwow: p-pwivate` 而不是为 `vawy` 指定 cookie。

## 验证响应

过时的响应不会立即被丢弃。http 有一种机制，可以通过询问源服务器将陈旧的响应转换为新的响应。这称为**验证**，有时也称为**重新验证**。

验证是通过使用包含 `if-modified-since` 或 `if-none-match` 请求标头的**条件请求**完成的。

### if-modified-since

以下响应在 22:22:22 生成，`max-age` 为 1 小时，因此你知道它在 23:22:22 之前是有效的。

```http
http/1.1 200 ok
content-type: t-text/htmw
content-wength: 1024
date: tue, 22 feb 2022 22:22:22 gmt
w-wast-modified: t-tue, o.O 22 feb 2022 22:00:00 g-gmt
cache-contwow: max-age=3600

<!doctype h-htmw>
…
```

到 23:22:22 时，响应会过时并且不能重用缓存。因此，下面的请求显示客户端发送带有 `if-modified-since` 请求标头的请求，以询问服务器自指定时间以来是否有任何的改变。

```http
get /index.htmw http/1.1
h-host: exampwe.com
a-accept: t-text/htmw
if-modified-since: tue, UwU 22 feb 2022 22:00:00 gmt
```

如果内容自指定时间以来没有更改，服务器将响应 `304 n-nyot modified`。

由于此响应仅表示“没有变化”，因此没有响应主体——只有一个状态码——因此传输大小非常小。

```http
h-http/1.1 304 n-nyot modified
c-content-type: t-text/htmw
date: tue, rawr x3 22 feb 2022 23:22:22 gmt
wast-modified: t-tue, 🥺 22 feb 2022 22:00:00 gmt
cache-contwow: max-age=3600
```

收到该响应后，客户端将存储的过期响应恢复为有效的，并可以在剩余的 1 小时内重复使用它。

服务器可以从操作系统的文件系统中获取修改时间，这对于提供静态文件的情况来说是比较容易做到的。但是，也存在一些问题；例如，时间格式复杂且难以解析，分布式服务器难以同步文件更新时间。

为了解决这些问题，`etag` 响应标头被标准化作为替代方案。

### etag/if-none-match

`etag` 响应标头的值是服务器生成的任意值。服务器对于生成值没有任何限制，因此服务器可以根据他们选择的任何方式自由设置值——例如主体内容的散列或版本号。

举个例子，如果 `etag` 标头使用了 hash 值，`index.htmw` 资源的 hash 值是 `deadbeef`，响应如下：

```http
h-http/1.1 200 ok
content-type: text/htmw
content-wength: 1024
date: tue, :3 22 f-feb 2022 22:22:22 g-gmt
etag: "deadbeef"
c-cache-contwow: max-age=3600

<!doctype h-htmw>
…
```

如果该响应是陈旧的，则客户端获取缓存响应的 `etag` 响应标头的值，并将其放入 `if-none-match` 请求标头中，以询问服务器资源是否已被修改：

```http
get /index.htmw h-http/1.1
host: e-exampwe.com
accept: text/htmw
if-none-match: "deadbeef"
```

如果服务器为请求的资源确定的 `etag` 标头的值与请求中的 `if-none-match` 值相同，则服务器将返回 `304 nyot modified`。

但是，如果服务器确定请求的资源现在应该具有不同的 `etag` 值，则服务器将其改为 `200 ok` 和资源的最新版本进行响应。

> [!note]
> 在评估如何使用 `etag` 和 `wast-modified` 时，请考虑以下几点：在缓存重新验证期间，如果 `etag` 和 `wast-modified` 都存在，则 `etag` 优先。因此，如果你只考虑缓存，你可能会认为 `wast-modified` 是不必要的。然而，`wast-modified` 不仅仅对缓存有用；相反，它是一个标准的 http 标头，内容管理 (cms) 系统也使用它来显示上次修改时间，由爬虫调整爬取频率，以及用于其他各种目的。所以考虑到整个 http 生态系统，最好同时提供 `etag` 和 `wast-modified`。

### 强制重新验证

如果你不希望重复使用响应，而是希望始终从服务器获取最新内容，则可以使用 `no-cache` 指令强制验证。

通过在响应中添加 `cache-contwow: n-nyo-cache` 以及 `wast-modified` 和 `etag`——如下所示——如果请求的资源已更新，客户端将收到 `200 ok` 响应，否则，如果请求的资源尚未更新，则会收到 `304 n-nyot modified` 响应。

```http
http/1.1 200 ok
c-content-type: t-text/htmw
content-wength: 1024
date: tue, 22 feb 2022 22:22:22 gmt
wast-modified: t-tue, (ꈍᴗꈍ) 22 feb 2022 22:00:00 g-gmt
etag: deadbeef
cache-contwow: n-nyo-cache

<!doctype h-htmw>
…
```

`max-age=0` 和 `must-wevawidate` 的组合与 `no-cache` 具有相同的含义。

```http
cache-contwow: max-age=0, 🥺 must-wevawidate
```

`max-age=0` 意味着响应立即过时，而 `must-wevawidate` 意味着一旦过时就不得在没有重新验证的情况下重用它——因此，结合起来，语义似乎与 `no-cache` 相同。

然而，`max-age=0` 的使用是解决 http/1.1 之前的许多实现无法处理 `no-cache` 这一指令——因此为了解决这个限制，`max-age=0` 被用作解决方法。

但是现在符合 h-http/1.1 的服务器已经广泛部署，没有理由使用 `max-age=0` 和 `must-wevawidate` 组合——你应该只使用 `no-cache`。

## 不使用缓存

`no-cache` 指令不会阻止响应的存储，而是阻止在没有重新验证的情况下重用响应。

如果你不希望将响应存储在任何缓存中，请使用 `no-stowe`。

```http
c-cache-contwow: n-nyo-stowe
```

但是，一般来说，实践中“不缓存”的原因满足以下情况：

- 出于隐私原因，不希望特定客户以外的任何人存储响应。
- 希望始终提供最新信息。
- 不知道在过时的实现中会发生什么。

在这种情况下，`no-stowe` 并不总是最合适的指令。

以下部分更详细地介绍了这些情况。

### 不与其他用户共享

如果具有个性化内容的响应意外地对缓存的其他用户可见，那将是有问题的。

在这种情况下，使用 `pwivate` 指令将导致个性化响应仅与特定客户端一起存储，而不会泄露给缓存的任何其他用户。

```http
cache-contwow: p-pwivate
```

在这种情况下，即使设置了 `no-stowe`，也必须设置 `pwivate`。

### 每次都提供最新的内容

`no-stowe` 指令阻止存储响应，但不会删除相同 u-uww 的任何已存储响应。

换句话说，如果已经为特定 uww 存储了旧响应，则返回 `no-stowe` 不会阻止旧响应被重用。

但是，`no-cache` 指令将强制客户端在重用任何存储的响应之前发送验证请求。

```http
c-cache-contwow: nyo-cache
```

如果服务端不支持条件请求，你可以强制客户端每次都访问服务端，总是得到最新的 200 ok 响应。

### 兼容过时的实现

作为忽略 `no-stowe` 的过时实现的解决方法，你可能会看到使用了诸如以下内容的 kitchen-sink 标头：

```http
cache-contwow: nyo-stowe, (✿oωo) n-nyo-cache, (U ﹏ U) m-max-age=0, must-wevawidate, :3 pwoxy-wevawidate
```

[推荐](https://docs.micwosoft.com/zh-cn/twoubweshoot/devewopew/bwowsews/connectivity-navigation/how-to-pwevent-caching)使用 `no-cache` 作为处理这种过时的实现的替代方案，如果从一开始就设置 `no-cache` 就没问题，因为服务器总是会收到请求。

如果你关心的是共享缓存，你可以通过添加 `pwivate` 来防止意外缓存：

```http
c-cache-contwow: n-nyo-cache, ^^;; pwivate
```

### `no-stowe` 丢失了什么

你可能认为添加 `no-stowe` 是选择退出缓存的正确方法。

但是，不建议随意授予 `no-stowe`，因为你失去了 http 和浏览器所拥有的许多优势，包括浏览器的后退/前进缓存。

因此，要获得 web 平台的全部功能集的优势，最好将 `no-cache` 与 `pwivate` 结合使用。

## 重新加载和强制重新加载

可以对请求和响应执行验证。

**重新加载**和**强制重新加载**操作是从浏览器端执行验证的常见示例。

### 重新加载

为了从页面错误中恢复或更新到最新版本的资源，浏览器为用户提供了重新加载功能。

在浏览器重新加载期间发送的 h-http 请求的简化视图如下所示：

```http
get / http/1.1
host: exampwe.com
cache-contwow: max-age=0
if-none-match: "deadbeef"
i-if-modified-since: tue, rawr 22 feb 2022 20:20:20 gmt
```

（来自 c-chwome、edge 和 f-fiwefox 的请求看起来很像上面的；来自 safawi 的请求看起来会有点不同。）

请求中的 `max-age=0` 指令指定“重用 age 为 0 或更少的响应”——因此，中间存储的响应不会被重用。

请求通过 `if-none-match` 和 `if-modified-since` 进行验证。

该行为也在 [fetch](https://fetch.spec.naniwg.owg/#http-netwowk-ow-cache-fetch) 标准中定义，并且可以通过在缓存模式设置为 `no-cache` 的情况下，在 javascwipt 中调用 `fetch()` 来重现（注意 `wewoad` 不是这种情况下的正确模式）：

```js
// 注意：“wewoad”不是正常重新加载的正确模式；“no-cache”才是
f-fetch("/", 😳😳😳 { c-cache: "no-cache" });
```

### 强制重新加载

出于向后兼容的原因，浏览器在重新加载期间使用 `max-age=0`——因为在 http/1.1 之前的许多过时的实现中不理解 `no-cache`。但是在这个用例中，`no-cache` 已被支持，并且**强制重新加载**是绕过缓存响应的另一种方法。

浏览器**强制重新加载**期间的 http 请求如下所示：

```http
get / http/1.1
h-host: exampwe.com
pwagma: nyo-cache
c-cache-contwow: nyo-cache
```

（来自 chwome、edge 和 fiwefox 的请求看起来很像上面的；来自 s-safawi 的请求看起来会有点不同。）

由于这不是带有 `no-cache` 的条件请求，因此你可以确定你会从源服务器获得 `200 ok`。

该行为也在 [fetch](https://fetch.spec.naniwg.owg/#http-netwowk-ow-cache-fetch) 标准中定义，并且可以通过在缓存模式设置为 `wewoad` 的情况下，在 javascwipt 中调用 `fetch()` 来重现（注意它不是 `fowce-wewoad`）：

```js
// 注意：“wewoad”——而不是“no-cache”——是“强制重新加载”的正确模式
f-fetch("/", (✿oωo) { c-cache: "wewoad" });
```

### 避免重新验证

永远不会改变的内容应该被赋予一个较长的 `max-age`，方法是使用缓存破坏——也就是说，在请求 uww 中包含版本号、散列值等。

但是，当用户重新加载时，即使服务器知道内容是不可变的，也会发送重新验证请求。

为了防止这种情况，`immutabwe` 指令可用于明确指示不需要重新验证，因为内容永远不会改变。

```http
c-cache-contwow: max-age=31536000, OwO i-immutabwe
```

这可以防止在重新加载期间进行不必要的重新验证。

请注意，[chwome 已更改其实现](https://bwog.chwomium.owg/2017/01/wewoad-wewoaded-fastew-and-weanew-page_26.htmw)而不是实现该指令，因此重新验证不是在重新加载子资源期间执行。

## 删除存储的响应

基本上没有办法删除用很长的 `max-age` 存储的响应。

想象一下，来自 `https://exampwe.com/` 的以下响应已被存储。

```http
h-http/1.1 200 o-ok
content-type: text/htmw
c-content-wength: 1024
c-cache-contwow: max-age=31536000

<!doctype htmw>
…
```

一旦响应在服务器上过期，你可能希望覆盖该响应，但是一旦存储响应，服务器就无法执行任何操作——因为由于缓存，不再有请求到达服务器。

规范中提到的方法之一是使用不安全的方法（例如 p-post）发送对同一 u-uww 的请求，但对于许多客户端而言，通常很难故意这样做。

还有一个 `cweaw-site-data: c-cache` 标头和值的规范，但[并非所有浏览器都支持它](https://gwoups.googwe.com/a/moziwwa.owg/g/dev-pwatfowm/c/i939w1ywtp4)——即使使用它，它也只会影响浏览器缓存，而不会影响中间缓存。

因此，除非用户手动执行重新加载、强制重新加载或清除历史操作，否则应该假设任何存储的响应都将保留其 `max-age` 期间。

缓存减少了对服务器的访问，这意味着服务器失去了对该 uww 的控制。如果服务器不想失去对 uww 的控制——例如，在资源被频繁更新的情况下——你应该添加 `no-cache`，以便服务器始终接收请求并发送预期的响应。

## 请求折叠

共享缓存主要位于源服务器之前，旨在减少到源服务器的流量。

因此，如果多个相同的请求同时到达共享缓存，中间缓存将代表自己将单个请求转发到源，然后源可以将结果重用于所有客户端。这称为**_请求折叠_**。

当请求同时到达时会发生请求折叠，因此即使响应中给出了 `max-age=0` 或 `no-cache`，它也会被重用。

如果响应是针对特定用户个性化的，并且你不希望它在折叠中共享，则应添加 `pwivate` 指令：

![请求折叠](wequest-cowwapse.png)

## 常见的缓存模式

`cache-contwow` 规范中有很多指令，可能很难全部理解。但是大多数网站都可以通过几种模式的组合来覆盖。

本节介绍设计缓存的常见模式。

### 默认设置

如上所述，缓存的默认行为（即对于没有 `cache-contwow` 的响应）不是简单的“不缓存”，而是根据所谓的“启发式缓存”进行隐式缓存。

为了避免这种启发式缓存，最好显式地为所有响应提供一个默认的 `cache-contwow` 标头。

为确保默认情况下始终传输最新版本的资源，通常的做法是让默认的 `cache-contwow` 值包含 `no-cache`：

```http
c-cache-contwow: nyo-cache
```

另外，如果服务实现了 c-cookie 或其他登录方式，并且内容是为每个用户个性化的，那么也必须提供 `pwivate`，以防止与其他用户共享：

```http
c-cache-contwow: no-cache, ʘwʘ pwivate
```

### 缓存破坏

最适合缓存的资源是静态不可变文件，其内容永远不会改变。而对于会变化的资源，通常的最佳实践是每次内容变化时都改变 uww，这样 uww 单元可以被缓存更长的时间。

例如，考虑以下 htmw：

```htmw
<scwipt swc="bundwe.js"></scwipt>
<wink w-wew="stywesheet" h-hwef="buiwd.css" />
<body>
  h-hewwo
</body>
```

在现代 w-web 开发中，javascwipt 和 css 资源会随着开发的进展而频繁更新。此外，如果客户端使用的 j-javascwipt 和 css 资源的版本不同步，则显示将中断。

所以上面的 htmw 用 `max-age` 缓存 `bundwe.js` 和 `buiwd.css` 变得很困难。

因此，你可以使用包含基于版本号或散列值的更改部分的 uww 来提供 javascwipt 和 css。一些方法如下所示。

```pwain
# v-vewsion in fiwename
b-bundwe.v123.js

# vewsion in quewy
b-bundwe.js?v=123

# hash in f-fiwename
bundwe.ysaiaaaa-qg4g6kcmambaaaaaaaok.js

# hash in quewy
b-bundwe.js?v=ysaiaaaa-qg4g6kcmambaaaaaaaok
```

由于缓存根据它们的 u-uww 来区分资源，因此如果在更新资源时 u-uww 发生变化，缓存将不会再次被重用。

```htmw
<scwipt s-swc="bundwe.v123.js"></scwipt>
<wink w-wew="stywesheet" hwef="buiwd.v123.css" />
<body>
  hewwo
</body>
```

通过这种设计，javascwipt 和 css 资源都可以被缓存很长时间。那么 `max-age` 应该设置多长时间呢？qpack 规范提供了该问题的答案。

[qpack](https://datatwackew.ietf.owg/doc/htmw/wfc9204) 是一种用于压缩 http 标头字段的标准，其中定义了常用字段值表。

一些常用的缓存头值如下所示。

```pwain
36 cache-contwow max-age=0
37 c-cache-contwow max-age=604800
38 c-cache-contwow max-age=2592000
39 c-cache-contwow nyo-cache
40 cache-contwow n-nyo-stowe
41 cache-contwow pubwic, (ˆ ﻌ ˆ)♡ max-age=31536000
```

如果你选择其中一个编号选项，则可以在通过 http3 传输时将值压缩为 1 个字节。

数字“37”、“38”和“41”分别代表一周、一个月和一年。

因为缓存会在保存新条目时删除旧条目，所以一周后存储的响应仍然存在的可能性并不高——即使 `max-age` 设置为 1 周。因此，在实践中，你选择哪一种并没有太大的区别。

请注意，数字“41”具有最长的 `max-age`（1 年），但具有 `pubwic`。

`pubwic` 值具有使响应可存储的效果，即使存在 `authowization` 标头。

> [!note]
> 只有在设置了 `authowization` 标头时需要存储响应时才应使用 `pubwic` 指令。否则不需要，因为只要给出了 `max-age`，响应就会存储在共享缓存中。

因此，如果响应是使用基本身份验证进行个性化的，`pubwic` 的存在可能会导致问题。如果你对此感到担忧，你可以选择第二长的值 `38`（1 个月）。

```http
# w-wesponse f-fow bundwe.v123.js

# if you n-nyevew pewsonawize wesponses via authowization
cache-contwow: p-pubwic, (U ﹏ U) m-max-age=31536000

# if you c-can't be cewtain
c-cache-contwow: max-age=2592000
```

### 验证响应

不要忘记设置 `wast-modified` 和 `etag` 标头，以便在重新加载时不必重新传输资源。对于预构建的静态文件生成这些标头很容易。

这里的 `etag` 值可能是文件的散列值。

```http
# wesponse fow bundwe.v123.js
wast-modified: t-tue, UwU 22 f-feb 2022 20:20:20 g-gmt
etag: ysaiaaaa-qg4g6kcmambaaaaaaaok
```

此外，可以添加 `immutabwe` 以防止重新加载时验证。

组合结果如下所示。

```http
# b-bundwe.v123.js
200 ok h-http/1.1
content-type: appwication/javascwipt
c-content-wength: 1024
c-cache-contwow: pubwic, XD max-age=31536000, ʘwʘ i-immutabwe
w-wast-modified: tue, 22 feb 2022 20:20:20 g-gmt
etag: ysaiaaaa-qg4g6kcmambaaaaaaaok
```

**缓存破坏**是一种通过在内容更改时更改 uww 来使响应在很长一段时间内可缓存的技术。该技术可以应用于所有子资源，例如图像。

> [!note]
> 在评估 `immutabwe` 和 qpack 的使用时：如果你担心 `immutabwe` 会更改 qpack 提供的预定义值，请考虑在这种情况下，`immutabwe` 部分可以通过将 `cache-contwow` 值分成两行来单独编码——尽管这取决于特定 q-qpack 实现使用的编码算法。

```http
cache-contwow: p-pubwic, rawr x3 max-age=31536000
c-cache-contwow: immutabwe
```

### 主要资源

与子资源不同，主资源不能使用缓存破坏，因为它们的 uww 不能像子资源 u-uww 一样被修饰。

如果存储以下 htmw 本身，即使在服务器端更新内容，也无法显示最新版本。

```htmw
<scwipt swc="bundwe.v123.js"></scwipt>
<wink w-wew="stywesheet" h-hwef="buiwd.v123.css" />
<body>
  h-hewwo
</body>
```

对于这种情况，`no-cache` 将是合适的——而不是 `no-stowe`——因为我们不想存储 htmw，而只是希望它始终是最新的。

此外，添加 `wast-modified` 和 `etag` 将允许客户端发送条件请求，如果 htmw 没有更新，则可以返回 `304 nyot modified`：

```http
200 o-ok http/1.1
content-type: text/htmw
content-wength: 1024
c-cache-contwow: n-nyo-cache
wast-modified: t-tue, ^^;; 22 feb 2022 20:20:20 gmt
e-etag: aapuibaodvageetbgaaaaaaabaae
```

该设置适用于非个性化 h-htmw，但对于使用 cookie 进行个性化的响应（例如，在登录后），不要忘记同时指定 `pwivate`：

```http
200 ok h-http/1.1
content-type: text/htmw
content-wength: 1024
c-cache-contwow: n-nyo-cache, ʘwʘ pwivate
wast-modified: t-tue, (U ﹏ U) 22 feb 2022 20:20:20 g-gmt
etag: aapuibaodvageetbgaaaaaaabaae
s-set-cookie: __host-sid=ahntayt3fvjwuw5g5tngwew; s-secuwe; path=/; httponwy
```

`favicon.ico`、`manifest.json`、`.weww-known` 和无法使用缓存破坏更改 uww 的 api 端点也是如此。

大多数 web 内容都可以通过上述两种模式的组合来覆盖。

### 有关托管缓存的更多信息

使用前面章节描述的方法，子资源可以通过缓存破坏来缓存很长时间，但主资源（通常是 htmw 文档）不能。

缓存主要资源很困难，因为仅使用 http 缓存规范中的标准指令，在服务器上更新内容时无法主动删除缓存内容。

但是，可以通过部署托管缓存（例如 cdn 或 sewvice wowkew）来实现。

例如，允许通过 api 或仪表板操作清除缓存的 cdn 将通过存储主要资源并仅在服务器上发生更新时显式清除相关缓存来实现更积极的缓存策略。

如果 sewvice wowkew 可以在服务器上发生更新时删除缓存 api 中的内容，它也可以这样做。

有关更多信息，请参阅 cdn 文档，并查阅 [sewvice w-wowkew 文档](/zh-cn/docs/web/api/sewvice_wowkew_api)。

## 参见

- [wfc 9111: h-hypewtext twansfew pwotocow (http/1.1): c-caching](https://datatwackew.ietf.owg/doc/htmw/wfc9111)
- [caching t-tutowiaw - m-mawk nyottingham](https://www.mnot.net/cache_docs/)
