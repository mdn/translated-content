---
title: 推测规则 API
slug: Web/API/Speculation_Rules_API
l10n:
  sourceCommit: bca6332a9b752ba195f544e115ada4bff76bc822
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

**推测规则 API**（Speculation Rules API）是为了提升未来网页导航的速度而设计的。它主要针对网页的 URL，而不是特定的资源文件，所以更适合多页面应用（MPA），而不是单页面应用（SPA）。

推测规则 API 是广泛支持的 [`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch) 的替代品，并且打算取代仅 Chrome 支持、已经弃用的 [`<link rel="prerender">`](/zh-CN/docs/Web/HTML/Attributes/rel/prerender) 特性。它相比这些技术提供了很多改进，并且有更灵活、可配置的方式来指定哪些文档应该被预取（prefetch）或预渲染（prerender）。

> [!NOTE]
> 推测规则 API 并不处理子资源的预取；为此还是需要使用 `<link rel="prefetch">`。

## 概念和用法

推测规则可以写在内联的 [`<script type="speculationrules">`](/zh-CN/docs/Web/HTML/Element/script/type/speculationrules) 标签中，或者通过 {{httpheader("Speculation-Rules")}} 响应标头引用的外部文本文件来定义。这些规则以 JSON 格式指定。

脚本示例：

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "href_matches": "/*\\?*(^|&)add-to-cart=*" } },
            { "not": { "selector_matches": ".no-prerender" } },
            { "not": { "selector_matches": "[rel~=nofollow]" } }
          ]
        }
      }
    ],
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

如果网站包含了使用 `<script>` 标签的推测规则，那么其必须被 {{httpheader("Content-Security-Policy")}} 的 `script-src` 指令明确允许。可通过添加 `'inline-speculation-rules'` 来源、哈希来源（hash-source）或 nonce 来源（nonce-source）来实现。

一个 HTTP 标头的例子：

```http
Speculation-Rules: "/rules/prefetch.json"
```

包含推测规则 JSON 的文本资源可以使用任意有效的命名和扩展名，但必须以 `application/speculationrules+json` MIME 类型来提供。

> [!NOTE]
> 你可以在同一个文档里同时用内联脚本和 HTTP 标头来指定规则——所有规则都会被解析并加入到文档的推测规则列表里。

每种推测加载类型（比如 `"prerender"` 或 `"prefetch"`）都有一个专门的数组来存放规则。每条规则都是一个对象，指定了比如要加载的资源列表、每个规则的选项（例如显式的 {{httpheader("Referrer-Policy")}} 设置）。注意，预渲染的 URL 也会被预取。

参见 [`<script type="speculationrules">`](/zh-CN/docs/Web/HTML/Element/script/type/speculationrules) 以获取可用语法的完整说明。

### 使用预取

在 `<script type="speculationrules">` 元素或 `Speculation-Rules` 标头中包含 `prefetch` 规则，支持它的浏览器就会下载被引用页面的响应体，但不会下载被页面所引用的子资源。当导航到预取的页面时，它的加载速度会比没有预取时快很多。

预取的结果会保存在一个每个文档的内存缓存里。当你离开当前页面时，任何缓存的预取都会被丢弃，除非你导航到了预取的文档。

这意味着如果你预取了用户没有访问的内容，那通常就是浪费资源，尽管结果可能会填充 HTTP 缓存（如果标头允许）。不过，预取的前期成本比预渲染的要小得多，所以建议你广泛采用预取，比如预取你网站上所有重要的页面，只要这些页面是安全的（参见[不安全的推测性加载条件](#不安全的推测性加载条件)以了解更多细节）。

同站和跨站的预取都可以工作，但跨站的预取有限制（参见[“同网站”和“跨网站”](https://web.developers.google.cn/articles/same-site-same-origin#same-site-cross-site)以了解两者的区别）。出于隐私考虑，目前跨站预取只有在用户对目标站点没有设置 cookie 时才会工作——我们不希望站点能通过预取页面（用户可能永远不会真正访问的）以利用之前设置的 cookie 来跟踪用户活动。

> [!NOTE]
> 将来会通过 {{httpheader("Supports-Loading-Mode")}} 标头提供跨站预取的启用选项，但在撰写本文时还没有实现（只有同源、同站的[预渲染](#使用预渲染)启用选项可用）。

对于支持的浏览器，推测规则预取应该优先于旧的预取机制，即 [`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch) 和设置了 `priority: "low"` 选项的 {{domxref("Window/fetch", "fetch()")}}。因为我们知道，推测规则预取是为了导航，而不是一般的资源预取：

- 它可以用于跨站点导航，而 `<link rel="prefetch">` 不能。
- 它不会被 {{httpheader("Cache-Control")}} 标头阻止，而 `<link rel="prefetch">` 通常会被阻止。

此外，推测规则预取：

- 在需要时自动降低优先级（`fetch()` 不会）。
- 尊重用户的配置。例如，当用户的设备处于省电模式或流量节省模式时，不会进行预取。
- 将预取的资源存储在每个文档的内存缓存中，而不是 HTTP 缓存中，这可能会使预取速度稍微快一些。

### 使用预渲染

在 `<script type="speculationrules">` 元素或 `Speculation-Rules` 标头中包含 `prerender` 规则，支持它的浏览器就会获取、渲染并将内容加载到一个不可见的标签页中，并存储在每个文档的内存缓存中。这包括加载所有子资源、运行所有 JavaScript，甚至还有由 JavaScript 所启动的子资源加载和执行数据获取。任何缓存的预渲染及其子资源在你离开当前页面时都会被丢弃，除非你此后导航到那个预渲染的文档。

之后导航到预渲染的页面时，加载几乎是即时的。浏览器激活那个不可见的标签页，而不是执行通常的导航过程，用预渲染的页面替换旧的前台页面。如果页面在完全预渲染之前被激活，它将以当前状态激活，然后继续加载，这意味着你仍然会看到显著的性能提升。

预渲染会使用内存和网络带宽。如果你预渲染了用户没有访问的内容，这些资源就浪费了（尽管结果可能会填充 HTTP 缓存（如果标头允许），允许以后使用）。预渲染的前期成本比预取要大得多，其他条件也可能使内容不适合预渲染（具体细节请参见[不安全的推测性加载条件](#不安全的推测性加载条件)）。因此，建议你更谨慎地采用预渲染，仔细考虑那些有很高概率被访问的页面，并且你认为值得用额外的成本换取用户体验的提升。

> [!NOTE]
> 为了让你对潜在的资源浪费有个概念，预渲染使用的资源大约和渲染一个 {{htmlelement("iframe")}} 一样多。

> [!NOTE]
> 许多 API 会被自动推迟到预渲染或激活之后。具体细节请参见[在预渲染期间推迟或限制的平台特性](#在预渲染期间推迟或限制的平台特性)。

预渲染默认限制在同源的文档中。跨源、同站的渲染是可能的——它需要导航目标使用具有 `credentialed-prerender` 值的 {{httpheader("Supports-Loading-Mode")}} 标头来启用。跨站预渲染目前还不可能。

对于支持它的浏览器，推测规则预渲染应该优先于旧的预渲染机制，即 [`<link rel="prerender">`](/zh-CN/docs/Web/HTML/Attributes/rel/prerender)：

- `<link rel="prerender">` 是 Chrome 特有的，从未标准化，Chrome 工程团队正在逐步淘汰它。
- 它会加载那些通过 JavaScript 加载的子资源，而 `<link rel="prerender">` 不会。
- 它不会被 {{httpheader("Cache-Control")}} 设置阻止，而 `<link rel="prerender">` 经常会被阻止。
- 推测规则预渲染应该被视为一个提示和渐进增强。与 `<link rel="prerender">` 不同，它只是一个推测性提示，浏览器可能会根据用户设置、当前内存使用情况或其他启发式方法选择不根据提示采取行动。

### 推测规则 API 特性检测

你可以用以下代码来检查推测规则 API 是否受到支持：

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("你的浏览器支持推测规则 API。");
}
```

例如，你可能想在支持的浏览器中插入预取的推测规则，但在其他浏览器中使用旧技术，比如 `<link rel="prefetch">`：

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prefetch: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  document.body.append(specScript);
} else {
  const linkElem = document.createElement("link");
  linkElem.rel = "prefetch";
  linkElem.href = "/next.html";
  document.head.append(linkElem);
}
```

## 检测预取和预渲染页面

本节探讨不同的方法来检测请求的页面是否已被预取或预渲染。

### 服务器端检测

预取和预渲染页面请求会携带 {{httpheader("Sec-Purpose")}} 请求标头：

对于预取：

```http
Sec-Purpose: prefetch
```

对于预渲染：

```http
Sec-Purpose: prefetch;prerender
```

服务器可以根据此标头进行响应，例如记录推测性加载请求、返回不同内容，甚至阻止推测性加载的发生。如果返回非成功的响应码（重定向后任何 HTTP 状态码不在 200-299 范围内的），则页面不会被预取/预渲染。此外，204 和 205 状态码也会阻止预渲染（但不会阻止预取）。

使用非成功代码（例如 503）是服务器端阻止推测性加载的最简单方法，尽管通常更好的方法是允许预取/预渲染，并使用 JavaScript 延迟那些仅应发生在实际查看页面时的行为。

### JavaScript 预取检测

当页面被预取时，其 {{domxref("PerformanceResourceTiming.deliveryType")}} 条目将返回 `"navigational-prefetch"` 值。你可以使用以下代码在收到类型为 `"navigational-prefetch"` 的性能条目时，运行一个函数：

```js
if (
  performance.getEntriesByType("navigation")[0].deliveryType ===
  "navigational-prefetch"
) {
  respondToPrefetch(); // 作者定义的函数
}
```

在测量性能时，或希望延迟那些可能会在预取期间发生并导致问题的行为时，此技术非常有用。（可参考[不安全的预取](#不安全的预取)）。

### JavaScript 预渲染检测

要在页面预渲染时进行活动，你可以检查 {{domxref("Document.prerendering")}} 属性。例如，你可以运行一些分析：

```js
if (document.prerendering) {
  analytics.sendInfo("预渲染时已经运行到了这一步！");
}
```

当预渲染的文档被激活时，{{domxref("PerformanceNavigationTiming.activationStart")}} 被设定为一个表示从预渲染开始到文档被激活之间的时间的 {{domxref("DOMHighResTimeStamp")}}。以下函数可以检查预渲染时和预渲染后的页面：

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

当用户查看页面激活预渲染页面时，{{domxref("Document.prerenderingchange_event", "prerenderingchange")}} 事件将被触发。这可以用于启用那些以前会在页面加载时默认启动，但你希望延迟到用户查看页面时才启动的活动。以下代码设置了一个事件监听器，在预渲染完成后在预渲染页面上运行一个函数，或者在非预渲染页面上立即运行它：

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

## 不安全的推测性加载条件

本节介绍了需要警惕的条件，在这些条件下预取和/或预渲染是**不安全**的。这意味着预取/预渲染表现出这些情况的页面可能需要在你的代码中采取补救措施，或者需要完全避免。

### 不安全的预取

如前所述，我们建议广泛地使用预取，因为风险与回报的比率相对较低——资源浪费的可能性很小，而性能改进可能非常显著。然而，你需要确保预取的页面不会导致应用程序的流程出现问题。

当进行预取时，浏览器通过单个 GET 请求下载被引用页面的响应体，用户可能会在将来某个时间导航到该页面。当请求的 URL 执行服务器段发起的副作用，而你不希望它在导航到该 URL 之前发生时，尤其容易出现问题。

例如：

- 注销的 URL。
- 语言切换的 URL。
- “加入购物车”的 URL。
- 服务器会触发短信发送的登录流程（例如一次性密码（OTP））的 URL。
- 增加用户使用配额数（例如消耗他们的每月免费文章配额或启动他们的每月分钟数计时器）的 URL。
- 启动服务器端广告转化跟踪的 URL。

在服务器上观测 {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} 请求标头，并运行特定代码来推迟问题功能，可以缓解此类问题。稍后，当页面实际被导航到时，如果需要，你可以再通过 JavaScript 启动被推迟的功能。

> [!NOTE]
> 你可以在[检测预取和预渲染页面](#检测预取和预渲染页面)部分找到更多关于检测代码的详细信息。

预取一个服务器渲染的内容会因用户在当前页面上可采取的行动而改变的文档也是潜在的风险。这可能包括，例如，限时抢购页面或电影院座位图。仔细测试这些情况，并通过在页面加载后更新内容来缓解这些问题。有关这些情况的更多详细信息，请参见[服务器渲染的可变状态](#服务器渲染的可变状态)。

> [!NOTE]
> 浏览器会将预取的页面缓存一小段时间（例如 Chrome 会缓存 5 分钟），然后再丢弃它们，因此无论如何，你的用户可能会看到最多过时 5 分钟的内容。

因为 JavaScript 直到激活时才会运行，所以如果所有获取页面的副作用都来自 JavaScript 的执行，则预取是安全的，

最后一个小贴士，请审核你在 {{glossary("robots.txt")}} 文件中列为不允许的 URL——通常这些 URL 指向到那些必须经过了身份验证的用户才能访问的页面，因此不应包含在搜索引擎结果中。这些 URL 大多数都没问题，但这也是一个能够找到不适合预取（即它们表现出上述条件）的 URL 的好地方。

### 不安全的预渲染

预渲染比预取风险更高，因此应该谨慎使用，仅在值得的情况下采用。预渲染时需要注意的不安全条件更多，因此虽然回报更高，风险也同样高。

当预渲染发生时，浏览器会通过 GET 请求 URL 并渲染和加载内容到一个不可见的标签页中。这包括运行内容中的 JavaScript 并加载所有子资源，子资源也包括通过 JavaScript 获取的资源。如果观察到以下任何条件，则内容可能不适合预渲染：

- URL [不能安全地预取](#不安全的预取)。如果你还没有阅读前一部分，请先阅读并理解这些条件同样适用于不安全的预渲染。
- 页面的 JavaScript 在加载时修改客户端存储（例如 [Web 存储](/zh-CN/docs/Web/API/Web_Storage_API)或 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)），这可能会在用户当前查看的其他非预渲染页面中造成混淆的效果。
- 页面运行的 JavaScript 或加载的图像会导致副作用（例如发送分析数据、记录广告展示或以用户已与其交互的方式修改应用程序状态）。这同样可能影响应用程序的流程，或导致错误的性能或使用报告。有关这些用例的更多详细信息，请参阅[服务器渲染的可变状态](#服务器渲染的可变状态)。

为了缓解这些问题，你可以使用以下技术：

- 在服务器上监视请求到达时的 {{httpheader("Sec-Purpose", "Sec-Purpose: prefetch")}} 标头，并运行特定代码以推迟问题功能。
- 使用 {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} 事件来检测预渲染页面何时被实际激活，并因此运行代码。这在两种情况下都很有用：
  - 推迟可能在页面查看之前运行时引起问题的代码。例如，你可能希望等到激活后再更新客户端存储或使用 JavaScript 修改服务器端状态。这可以避免 UI 和应用程序状态彼此不同步的情况，例如购物车显示没有商品，即使用户已添加了一些。
  - 如果上一点做不到，你仍然可以在页面激活后重新运行代码，以使应用程序再次更新。例如，一个高度动态的限时抢购页面可能依赖于来自第三方库的内容更新。如果你不能延迟更新，你总可以在用户查看页面后获得最新的更新。预渲染页面可以使用[广播频道 API](/zh-CN/docs/Web/API/Broadcast_Channel_API) 或另一种机制如 {{domxref("Window/fetch", "fetch()")}} 或 {{domxref("WebSocket")}} 进行实时更新。这保证了用户在预渲染激活后会看到最新的内容。
- 仔细管理你的第三方分析脚本——如果可能，使用可感知预渲染的脚本（例如使用 {{domxref("Document.prerendering")}} 属性来推迟在预渲染页面上的运行）如 Google Analytics 或 NewRelic。
  - 请注意，在预渲染期间，跨源 {{htmlelement("iframe")}} 的内容加载被延迟，直到激活发生。这样做是为了避免因加载未感知预渲染的跨源页面而造成的破坏，并避免围绕向这些框架暴露哪些凭据和存储的复杂性。这意味着在某些情况下用户最初可能会看到空白的框架，但这同样意味着大多数第三方微件（如广告技术）在预渲染期间使用是安全的。
  - 对于那些不感知预渲染的第三方脚本，如前所述，可使用 {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} 事件来避免在激活之前加载它们。

### 服务器渲染的可变状态

需要关注的服务器渲染状态主要有两种类型：**过时状态**和**用户特定状态** 。这可能导致不安全的预取和预渲染。

- 过时状态：考虑一个服务器渲染的博客评论列表的例子，该列表可能在博客文章被预渲染和被查看之间过时。如果当前页面是一个用户正在删除垃圾评论的管理面板，这特别容易出现问题。如果用户之后导航到博客文章，他们可能会对他们刚刚删除的垃圾评论为什么还能看到感到困惑。
- 用户特定状态：考虑通过 cookie 跟踪登录状态的例子。可能会出现以下问题：
  - 用户在标签页 1 中访问 `https://site.example/a`，在标签页 2 中访问 `https://site.example/b`，同时注销。
  - `https://site.example/b` 预渲染 `https://site.example/c`。它将以注销状态预渲染。
  - 用户在标签页 1 中登录到 `https://site.example`。
  - 用户切换到标签页 2 并点击链接到 `https://site.example/c`，这激活了预渲染的页面。
  - 标签页 2 显示 `https://site.example/c` 的注销视图，这使用户感到困惑，因为他们认为自己已登录。

用户特定状态问题也可能发生在其他的用户设置中，例如语言设置、暗色模式偏好或向购物车添加商品。当只涉及单个标签时，这也可能发生：

- 假设用户访问 `https://site.example/product`。
- `https://site.example.com/product` 预渲染 `https://site.example.com/cart`。它预渲染时购物车中有 0 件商品。
- 用户点击“添加到购物车”按钮，这启动了一个请求将商品添加到用户的购物车（无需页面重新加载）。
- 用户点击链接到 `https://site.example.com/cart`，这激活了预渲染的页面。
- 用户看到一个空购物车，即使他们刚刚向其中添加了东西。

对于这些情况，以及实际上任何内容可能与服务器不同步的时候，最佳的缓解措施是页面按需刷新自己。例如，服务器可以使用[广播频道 API](/zh-CN/docs/Web/API/Broadcast_Channel_API)，或另一种机制如 {{domxref("Window/fetch", "fetch()")}} 或 {{domxref("WebSocket")}}。然后页面可以适当地更新自己，包括尚未激活的推测性加载页面。

## 预渲染文档的会话历史行为

从最终用户的角度来看，激活一个正在预渲染或者已经完成预渲染的文档的行为，就像任何常规的导航一样。激活的文档会显示在标签页中并添加到会话历史中，任何现有的前进历史记录都会被删除。在激活*之前*在预渲染浏览上下文中进行的任何导航都不会影响会话历史。

从开发者的角度来看，预渲染文档可以被视为具有一个**微会话历史**（trivial session history），其只有一个条目——当前条目。预渲染上下文中的所有导航实际上都被替换了。

虽然在预渲染文档中可以调用操作会话历史的 API 特性（例如 {{domxref("History")}} 和 {{domxref("Navigation")}}），但它们仅在上下文的微会话历史上操作。因此，预渲染文档不会参与其引用页面的联合会话历史记录。例如，它们不能通过 {{domxref("History.back()")}} 导航回引用页面。

这种设计确保了用户在使用后退按钮时获得预期的体验——即他们被带回最后看到的内容。一旦预渲染文档被激活，只有单个会话历史条目被添加到联合会话历史中，忽略在预渲染浏览上下文中发生的任何先前导航。在联合会话历史中后退一步——例如，通过按后退按钮——会将用户带回引用页面。

## 在预渲染期间推迟或限制的平台特性

由于预渲染页面以隐藏的状态打开，因此一些可能导致侵入性行为的 API 特性在此状态下不会被激活，而是**推迟**到页面激活时。其他在预渲染时存在问题的 web 平台特性则完全受到限制。本节给出了哪些特性被推迟或限制的详细信息。

> [!NOTE]
> 在少数无法推迟和限制的情景下，预渲染将被取消。

### 异步 API 推迟

推迟意味着 API 功能立即返回一个待处理的 promise，然后在页面激活之前不做任何事情。激活后，该功能正常运行，promise 被正常兑现或拒绝。

在预渲染文档中，以下异步功能的结果被推迟至页面被激活：

- [音频输出设备 API](/zh-CN/docs/Web/API/Audio_Output_Devices_API)：{{domxref("MediaDevices.selectAudioOutput()")}}
- [Background Fetch API](/zh-CN/docs/Web/API/Background_Fetch_API)：{{domxref("BackgroundFetchManager.fetch()")}}
- [广播频道 API](/zh-CN/docs/Web/API/Broadcast_Channel_API)：{{domxref("BroadcastChannel.postMessage()")}}
- [凭据管理 API](/zh-CN/docs/Web/API/Credential_Management_API)：{{domxref("CredentialsContainer.create()")}}、{{domxref("CredentialsContainer.get()")}}、{{domxref("CredentialsContainer.store()")}}
- [加密媒体扩展 API](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API)：{{domxref("Navigator.requestMediaKeySystemAccess()")}}
- [游戏手柄 API](/zh-CN/docs/Web/API/Gamepad_API)：{{domxref("Navigator.getGamepads()")}}、{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} 事件、{{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} 事件
- [地理位置 API](/zh-CN/docs/Web/API/Geolocation_API)：{{domxref("Geolocation.getCurrentPosition()")}}、{{domxref("Geolocation.watchPosition()")}}、{{domxref("Geolocation.clearWatch()")}}
- {{domxref("HTMLMediaElement")}} API：当包含文档正在进行预渲染时，播放位置不会前进。
- [空闲检测 API](/zh-CN/docs/Web/API/Idle_Detection_API)：{{domxref("IdleDetector.start()")}}
- [媒体捕捉与媒体流 API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)：{{domxref("MediaDevices.getUserMedia()")}}（以及遗留版本 {{domxref("Navigator.getUserMedia()")}}）、{{domxref("MediaDevices.enumerateDevices()")}}
- [通知 API](/zh-CN/docs/Web/API/Notifications_API)：{{domxref("Notification.Notification", "Notification()")}} 构造函数、{{domxref("Notification/requestPermission_static", "Notification.requestPermission()")}}
- [推送 API](/zh-CN/docs/Web/API/Push_API)：{{domxref("PushManager.subscribe()")}}
- [屏幕方向 API](/zh-CN/docs/Web/API/Screen_Orientation_API)：{{domxref("ScreenOrientation.lock()")}}、{{domxref("ScreenOrientation.unlock()")}}
- [传感器 API](/zh-CN/docs/Web/API/Sensor_APIs)：{{domxref("Sensor.start()")}}
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)：{{domxref("ServiceWorker.postMessage()")}}、{{domxref("ServiceWorkerContainer.register()")}}、{{domxref("ServiceWorkerRegistration.update()")}}、{{domxref("ServiceWorkerRegistration.unregister()")}}
- [存储 API](/zh-CN/docs/Web/API/Storage_API)：{{domxref("StorageManager.persist()")}}
- [Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API)：在包含文档正在进行预渲染时，{{domxref("AudioContext")}} 不被允许开始。
- [Web 蓝牙 API](/zh-CN/docs/Web/API/Web_Bluetooth_API)：{{domxref("Bluetooth.getDevices()")}}、{{domxref("Bluetooth.requestDevice()")}}
- [WebHID API](/zh-CN/docs/Web/API/WebHID_API)：{{domxref("HID.getDevices()")}}、{{domxref("HID.requestDevice()")}}
- [Web 锁 API](/zh-CN/docs/Web/API/Web_Locks_API)：{{domxref("LockManager.query()")}}、{{domxref("LockManager.request()")}}
- [Web MIDI API](/zh-CN/docs/Web/API/Web_MIDI_API)：{{domxref("Navigator.requestMIDIAccess()")}}
- [Web NFC API](/zh-CN/docs/Web/API/Web_NFC_API)：{{domxref("NDefReader.write()")}}、{{domxref("NDefReader.scan()")}}
- [Web Serial API](/zh-CN/docs/Web/API/Web_Serial_API)：{{domxref("Serial.getPorts()")}}、{{domxref("Serial.requestPort()")}}
- [Web 语音 API](/zh-CN/docs/Web/API/Web_Speech_API)：{{domxref("SpeechRecognition.abort()")}}、{{domxref("SpeechRecognition.start()")}}、{{domxref("SpeechRecognition.stop()")}}、{{domxref("SpeechSynthesis.cancel()")}}、{{domxref("SpeechSynthesis.pause()")}}、{{domxref("SpeechSynthesis.resume()")}}、{{domxref("SpeechSynthesis.speak()")}}
- [WebUSB API](/zh-CN/docs/Web/API/WebUSB_API)：{{domxref("USB.getDevices()")}}、{{domxref("USB.requestDevice()")}}
- [WebXR 设备 API](/zh-CN/docs/Web/API/WebXR_Device_API)：{{domxref("XRSystem.requestSession()")}}

### 隐式限制的 API

以下特性在未激活的文档中将自动失败或无操作。

需要{{glossary("transient activation", "瞬态激活")}}或{{glossary("sticky activation", "粘性激活")}}的 API：

- 由 {{domxref("Window.beforeunload_event", "beforeunload")}} 事件生成的确认对话框
- [剪切板 API](/zh-CN/docs/Web/API/Clipboard_API) 中任何事件的触发
- [文件系统 API](/zh-CN/docs/Web/API/File_System_API)：{{domxref("Window.showDirectoryPicker()")}}、{{domxref("Window.showOpenFilePicker()")}}、{{domxref("Window.showSaveFilePicker()")}}
- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)：{{domxref("Element.requestFullscreen()")}}
- [空闲检测 API](/zh-CN/docs/Web/API/Idle_Detection_API)：{{domxref("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- [键盘 API](/zh-CN/docs/Web/API/Keyboard_API)：{{domxref("Keyboard.lock()")}}（需要全屏）
- [支付请求 API](/zh-CN/docs/Web/API/Payment_Request_API)：{{domxref("PaymentRequest.show()")}}
- [呈现 API](/zh-CN/docs/Web/API/Presentation_API)：{{domxref("PresentationRequest.start()")}}
- [指针锁定 API](/zh-CN/docs/Web/API/Pointer_Lock_API)：{{domxref("Element.requestPointerLock()")}}
- [屏幕捕获 API](/zh-CN/docs/Web/API/Screen_Capture_API)：{{domxref("MediaDevices.getDisplayMedia()")}}
- [Web 共享 API](/zh-CN/docs/Web/API/Web_Share_API)：{{domxref("Navigator.share()")}}
- {{domxref("Window.open()")}}

需要包含文档处于焦点状态的 API：

- [剪切板 API](/zh-CN/docs/Web/API/Clipboard_API)：{{domxref("Clipboard.read()")}}、{{domxref("Clipboard.readText()")}}、{{domxref("Clipboard.write()")}}、{{domxref("Clipboard.writeText()")}}

需要包含文档的 {{domxref("Document.visibilityState")}} 为 `"visible"` 的 API：

- [画中画 API](/zh-CN/docs/Web/API/Picture-in-Picture_API)：{{domxref("HTMLVideoElement.requestPictureInPicture()")}}（要求包含文档的可见状态为 `"visible"` _或_ {{glossary("transient activation")}}）
- [屏幕唤醒锁 API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API)：{{domxref("WakeLock.request()")}}

### 其他受限特性

- 下载链接，即带有 `download` 属性的 {{htmlelement("a")}} 和 {{htmlelement("area")}} 元素，其下载将被推迟，直到预渲染完成。
- 不允许跨站点导航：任何导航到不同站点的预渲染文档将在发送对这类其他站点的请求之前立即被丢弃。
- 受限的 URL：预渲染文档不能托管非 HTTP（S）顶级 URL。包含以下 URL 类型将导致预渲染立即被丢弃：

  - [`javascript:` URL](/zh-CN/docs/Web/URI/Schemes/javascript)
  - [`data:` URL](/zh-CN/docs/Web/URI/Schemes/data)
  - `blob:` URL
  - `about:` URL，包括 `about:blank` 和 `about:srcdoc`

- 会话存储：{{domxref("Window.sessionStorage")}} 可以使用，但行为非常特定，以避免影响到那些对会话存储有预期的网站，这些网站的设计是基于一个前提：同一时间只有一个页面能够访问标签页的会话存储。因此，预渲染页面在开始时会获得一个克隆，这个克隆是基于页面创建时标签页会话存储的状态。在激活时，预渲染页面的存储克隆被丢弃，取而代之的是标签页的主存储状态。使用会话存储的页面可以使用 {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} 事件来检测何时发生此存储交换。
- {{domxref("Window.print()")}}：对该方法的任何调用都将被忽略。
- “简单对话框方法”限制如下：

  - {{domxref("Window.alert()")}} 立即返回而不显示对话框。
  - {{domxref("Window.confirm()")}} 立即返回 `false` 而不显示对话框。
  - {{domxref("Window.prompt()")}} 立即返回一个空字符串（`""`）而不显示对话框。

- 专用/共享 worker 脚本会被加载，但其执行被推迟至预渲染文档被激活。
- 跨源 {{htmlelement("iframe")}} 加载在预渲染期间被延迟至页面激活后。

## 接口

推测规则 API 没有定义自己的任何接口。

### 对其他接口的扩展

- {{domxref("Document.prerendering")}} {{experimental_inline}}
  - : 一个布尔属性，如果文档当前正处于预渲染过程中，则返回 `true`。
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} 事件 {{experimental_inline}}
  - : 当预渲染的文档被激活时（即用户查看页面时）触发。
- {{domxref("PerformanceNavigationTiming.activationStart")}} {{experimental_inline}}
  - : 一个数字，表示文档开始预渲染到被激活之间的时间。
- {{domxref("PerformanceResourceTiming.deliveryType")}} `"navigational-prefetch"` 值 {{experimental_inline}}
  - : 表示性能条目的类型是预取。

## HTTP 标头

- {{httpheader("Content-Security-Policy")}} `'inline-speculation-rules'` 值 {{experimental_inline}}
  - : 用于选择允许在正在获取的文档上使用 `<script type="speculationrules">` 来定义推测规则。
- {{httpheader("Speculation-Rules")}} {{experimental_inline}}
  - : 提供一个指向包含推测规则 JSON 定义的文本资源的 URL 列表。当响应是 HTML 文档时，这些规则将被添加到文档的推测规则集中。
- {{httpheader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : 由导航目标设置，以选择使用各种更高风险的加载模式。例如，跨源、同站预渲染需要 `Supports-Loading-Mode` 的值为 `credentialed-prerender`。

## HTML 特性

- [`<script type="speculationrules">`](/zh-CN/docs/Web/HTML/Element/script/type/speculationrules) {{experimental_inline}}
  - : 用于在当前文档中定义一组预取和/或预渲染推测规则，这些规则被添加到文档的推测规则集中。

## 示例

你可以在[这里找到一个完整的预渲染演示](https://prerender-demos.glitch.me/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developer.chrome.google.cn 上的[在 Chrome 中预渲染页面以实现即时网页导航](https://developer.chrome.google.cn/docs/web-platform/prerender-pages)（2023）
- [推测性加载](/zh-CN/docs/Web/Performance/Speculative_loading)用于比较推测规则和其他类似的性能改进特性。
