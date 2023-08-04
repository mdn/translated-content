---
title: Link prefetching FAQ
slug: Glossary/Prefetch
---

{{GlossarySidebar}}

### 什么是链接预取？

链接预取是一种浏览器机制，其利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档。网页向浏览器提供一组预取提示，并在浏览器完成当前页面的加载后开始静默地拉取指定的文档并将其存储在缓存中。当用户访问其中一个预取文档时，便可以快速的从浏览器缓存中得到。

### 预取是否使用 HTTPS？

从 Gecko 1.9.1 (Firefox 3.5) 开始，支持获取 https 内容。

### 什么是预取提示？

浏览器会查找关系类型 (rel) 为 next 或 prefetch 的 HTML{{ HTMLElement("link") }} 或 [HTTP `Link:` header](/zh-CN/docs/Web/HTTP/Headers)。下面是一个使用 link 标签的例子：

```html
<link rel="prefetch" href="/images/big.jpeg" />
```

同样效果的使用 HTTP `Link:` header 的例子：

```plain
Link: </images/big.jpeg>; rel=prefetch
```

`Link:` header 也可以通过使用 HTML meta 标签定义在 HTML 文档中：

```plain
<meta http-equiv="Link" content="</images/big.jpeg>; rel=prefetch">
```

`Link:` header 的格式在 [RFC 5988](http://tools.ietf.org/html/rfc5988) section 5 中有所描述。

浏览器检查所有这些预取提示，并将每一个独立的请求排到队列之中，然后浏览器空闲时将对这些请求进行预取。每个页面都可以有多个预取提示，因为预取多个文档是合理的。例如，未来要访问的页面可能包含多张大图。

下面是更多例子：

```plain
<link rel="prefetch alternate stylesheet" title="Designed for Mozilla" href="mozspecific.css">
<link rel="next" href="2.html">
```

### a 标签 (\<a>) 会被预取吗？

不会，只有带有关系类型为 next 或 prefetch 的 \<link> 标签会被预拉取。但是，如果该特性收到足够的关注，我们在未来可能会支持带有关系类型为 next 或 prefetch 的 \<a> 标签的预取。这样做可能会帮助内容提供者避免预取内容过期的问题。

### 链接预取是符合规范的吗？

是的，本文档中描述的链接预取和现有 web 规范不冲突。实际上，在 HTML 4.01 规范允许定义新的 link type（参见 [章节 6.12：Like types](http://www.w3.org/TR/html4/types.html#type-links)）。但是 Mozilla 采用的具体处理机制还没有确定规范。一份互联网草案正在准备中。

本特性的规范属于 HTML 5 的一部分，参见最新的工作草案，[章节 §5.11.3.13. Link type "prefetch"](http://www.whatwg.org/specs/web-apps/current-work/#link-type-prefetch)。

### 浏览器的空闲时间是如何确定的？

在目前 (Moilla 1.2)，空闲时间的确定是通过 `nsIWebProgressListener` API 实现的。我们在顶层 `nsIWebProgress 对象` ("@[mozilla.org/docloaderservice;1](http://mozilla.org/docloaderservice;1)") 上附加了一个监听器。通过监听器，我们能够收到文档开始和停止的通知，从而将最后一个文档停止到下一个文档开始之间的间隔作为空闲时间的近似值。最后一个文档停止的通知大致会在顶层文档的 onLoad 方法即将被触发时发出。此时即是开始预取的时间点。如果一个子文档包含了预取提示，这些预取操作将会等到最顶层文档和其子文档完成加载后才会开始进行。

### 资源正在被预载时点击了某个链接会发生什么？

当用户点击一个连接，或开始任何形式的页面加载时，预取操作将被停止且任何预取提示将被丢弃。如果一个预取文档只下载了一部分，那么这部分文档将被保存在缓存中，供服务端发送一个 "Accept-Ranges: bytes" 的返回头。这个返回头通常是由网络服务器在返回静态内容时生成的。当用户真正访问这个已经（部分）预载过的文档时，该文档的剩余部分将被通过一个 HTTP byte-range 的请求获取。

### 如果后台正在进行下载任务会发生什么？预取会争夺带宽吗？

视情况而定。如果你正在使用 Mozilla 下载某些东西，预取将被推迟到下载结束。例如，如果你尝试加载书签组（将会开启多个浏览器标签），任何由书签组某页面发出的预取请求将被延迟到所有标签加载完毕时进行。如果你正在使用其他依赖网络的应用程序，那么 Mozilla 中的预取可能会与它们竞争带宽。这个问题我们希望将来能够借助操作系统服务去检测网络空闲时间来解决。

### 对预取内容是否有限制？

是的，只有 http\:// (从 Gecko 1.9.1 开始支持 https\:// ) 的 URL 可以被预取。其他协议（如 FTP）没有对客户端缓存提供足够的支持。

### Mozilla 能够预取不同宿主的文档吗？

可以。预取不受同源限制。限制预取来自同一个服务器并不会对增强浏览器的安全性有所帮助。

### 预提取的请求是否包含 Referer: header？

是的，预取的请求包含一个 HTTP `Referer:` header，指示从中提取预取提示的文档。

这可能会影响许多站点上常用的引荐来源跟踪。因此，链接预取可能不适用于所有内容。但是，可以通过指定 `Cache-control: must-revalidate` HTTP response header，指示 Mozilla 在用户遵循 href 到预提取文档时验证预提取文档。此标头可启用缓存，但在从浏览器的缓存中提供文档之前，需要 `If-Modified-Since` 或 `If-None-Match` 验证请求。

### 作为服务器管理员，我可以区分预取请求和普通请求吗？

是的，我们将以下标头与每个预取请求一起发送：

```plain
X-moz: prefetch
```

Of course, this request header is not at all standardized, and it may change in future Mozilla releases. Chrome uses "X-Purpose: prefetch" or "Purpose: prefetch" [header](https://bugs.webkit.org/show_bug.cgi?id=46529).当然，此请求标头根本不是标准化的，并且在将来的 Mozilla 版本中可能会更改。Chrome 使用“X-Purpose: prefetch”或“Purpose: prefetch 的[header](https://bugs.webkit.org/show_bug.cgi?id=46529)。

### 是否有禁用链接预取的首选项？

是的，您可以设置一个隐藏的首选项来禁用链接预取。将此行添加到位于配置文件目录中的 prefs.js 文件中（或通过[about:config](/about:config)进行适当的更改）：

```plain
user_pref("network.prefetch-next", false);
```

但是，从理论上讲，如果需要禁用链接预取，实现就一定会存在问题。如果它不能正确运行，我们宁愿改进实现，也不希望用户找到并调整一些隐藏的偏好。

### 那些按网络流量付费的人呢？

Basically, there are two ways of looking at this issue: websites can already cause things to be silently downloaded using JS/DOM hacks. prefetching is a browser feature; users should be able to disable it easily.

It is important that websites adopt `<link>` tag based prefetching instead of trying to roll-in silent downloading using various JS/DOM hacks. The `<link>` tag gives the browser the ability to know what sites are up to, and we can use this information to better prioritize document prefetching. The user preference to disable `<link>` tag prefetching may simply encourage websites to stick with JS/DOM hacks, and that would not be good for users. This is one reason why prefetching is enabled by default.

基本上，有两种方法可以解决此问题：网站可以使用 JS / DOM 之类的 hacks 方式静默下载内容。预取是浏览器功能；用户应该能够轻松禁用它。

网站采用基于`<link>`标记的预取非常重要，而不是尝试使用各种 JS / DOM 之类的 hacks 方式进行静默下载。 `<link>`标记使浏览器能够知道正在访问哪些站点，我们可以使用此信息更好地确定文档预取的优先级。用户偏好禁用`<link>`标记预取可能只是鼓励网站坚持使用 JS / DOM 之类的 hacks 方式，这对用户不利。这是默认情况下启用预取的原因之一。

### 哪些浏览器支持链接预取？

基于 Mozilla 1.2（或更高版本）的浏览器以及基于 Mozilla 1.0.2（或更高版本）的浏览器均支持预取。这包括 Firefox 和 Netscape 7.01+。截至 2003 年 3 月，Camino 构建基于 Mozilla 1.0.1，因此不支持预取。测试您的浏览器是否支持链接预取。

### 隐私问题

除了上面已经提到的引用和 URL 跟随含义外，预取通常会导致访问预取站点的 cookie。（例如，如果您使用 google amazon，则 google 结果页面将预取 www\.amazon.com，从而导致 amazon cookie 来回发送。您可以在 Firefox 中阻止第三方 cookie，请参参阅 [Disabling third party cookies](http://support.mozilla.com/en-US/kb/Disabling%20third%20party%20cookies)。）

## 参见

[Prefetching Hints](http://www.edochan.com/programming/pf.htm)
