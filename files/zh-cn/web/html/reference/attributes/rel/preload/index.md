---
title: 链接类型：preload
slug: Web/HTML/Reference/Attributes/rel/preload
---

{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/link#rel) 属性的 `preload` 值允许你在 HTML 的 {{htmlelement("head")}} 中声明获取请求，指定页面很快就需要的资源，这些资源是你希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。这可以确保它们更早可用，并且不太可能阻塞页面的渲染，从而提高性能。尽管名称中包含“load”一词，但它并不加载和执行脚本，而只是安排脚本以更高的优先级进行下载和缓存。

## 基础知识

你最常使用 `<link>` 标签来加载一个 CSS 文件，以为你的页面添加样式：

```html
<link rel="stylesheet" href="styles/main.css" />
```

然而，在这里，我们将使用值为 `preload` 的 `rel` 属性，这会将 `<link>` 标签转变成任何我们想要的资源的预加载器。你还需要指定：

- [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/link#href) 属性中的资源路径。
- [`as`](/zh-CN/docs/Web/HTML/Reference/Elements/link#as) 属性中的资源类型。

一个简单的示例可能如下所示（查看我们的 [JS 和 CSS 示例源码](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css)，以及[在线演示](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)）

```html
<head>
  <meta charset="utf-8" />
  <title>JS and CSS preload example</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>bouncing balls</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

在这里，我们预加载我们的 CSS 和 JavaScript 文件，以便它们在稍后渲染页面时立即可用。这个示例可能过于简单，因为浏览器很可能在与预加载的 HTML 块中相同的位置发现了 `<link rel="stylesheet">` 和 `<script>` 元素，但在稍后发现资源并且资源越大时，好处就会更加明显。例如：

- 从 CSS 内部指向的资源，如字体或图像。
- JavaScript 可以请求的资源，如 JSON、导入的脚本或 Web Worker。
- 较大的图像和视频文件。

`preload` 还有其他优点。使用 `as` 来指定要预加载的内容类型允许浏览器：

- 更准确地优先加载资源。
- 将资源存储在缓存中以备将来使用，在适当的情况下复用资源。
- 对资源应用正确的[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)。
- 为其设置正确的 {{HTTPHeader("Accept")}} 请求标头。

### 什么类型的内容可以被预加载？

可以预加载多种类型的内容。`as` 属性可能的值包括：

- `audio`：音频文件，通常在 {{htmlelement("audio")}} 中使用。
- `document`：用于嵌入在 {{htmlelement("frame")}} 或 {{htmlelement("iframe")}} 中的 HTML 文档。
- `embed`：用于嵌入在 {{htmlelement("embed")}} 元素中的资源。
- `fetch`：通过 fetch 或 XHR 请求访问的资源，例如 ArrayBuffer、WebAssembly 二进制文件或 JSON 文件。
- `font`：字体文件。
- `image`：图像文件。
- `object`：要嵌入在 {{htmlelement("object")}} 元素中的资源。
- `script`：JavaScript 文件。
- `style`：CSS 样式表。
- `track`：WebVTT 文件。
- `worker`：JavaScript web worker 或 shared worker。
- `video`：视频文件，通常在 {{htmlelement("video")}} 中使用。

> [!NOTE]
> 预加载 `font` 和 `fetch` 资源需要设置 `crossorigin` 属性；请参阅下文的[启用 CORS 的获取请求](#启用_cors_的获取请求)。

> [!NOTE]
> 关于这些值以及它们所期望被使用的 web 功能的更多细节可以在预加载规范中找到——请参见[链接元素扩展](https://w3c.github.io/preload/#link-element-extensions)。此外，请注意，`as` 属性可以接受的值的完整列表受 Fetch 规范的约束——请参见[请求目标](https://fetch.spec.whatwg.org/#concept-request-destination)。

## 包括 MIME 类型

`<link>` 元素可以接受一个 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/link#type) 属性，其中包含元素指向的资源的 MIME 类型。这在预加载资源时特别有用——浏览器将使用 `type` 属性的值来确定是否支持该资源，如果不支持，则会忽略它，仅在支持时才会下载它。

你可以在我们的视频示例中看到这个示例（查看[完整的源代码](https://github.com/mdn/html-examples/tree/master/link-rel-preload/video)，以及[在线版本](https://mdn.github.io/html-examples/link-rel-preload/video/)），以下是其中一部分代码片段。这展示了一般情况下预加载背后的核心行为。

```html
<head>
  <meta charset="utf-8" />
  <title>Video preload example</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
</head>
<body>
  <video controls>
    <source src="sintel-short.mp4" type="video/mp4" />
    <source src="sintel-short.webm" type="video/webm" />
    <p>
      Your browser doesn't support HTML video. Here is a
      <a href="sintel-short.mp4">link to the video</a> instead.
    </p>
  </video>
</body>
```

上面的示例代码只会在支持的浏览器中预加载 `video/mp4` 格式的视频，对于那些浏览器中支持 `video/mp4` 格式的用户，实际上会使用 `video/mp4` 格式的视频（因为它是首个指定的 {{htmlelement("source")}}）。这可以让拥有支持 `video/mp4` 格式的浏览器的用户获得更流畅和更响应的视频播放体验。

请注意，对于那些浏览器既支持 `video/mp4` 格式又支持 `video/webm` 格式的用户，如果在上述代码中还指定了一个 `<link rel="preload" href="sintel-short.webm" as="video" type="video/webm">` 元素，那么两种格式的视频（`video/mp4` 和 `video/webm`）*都*会被预加载，尽管实际上只有其中一种会被使用。

因此，不建议为同一资源的多种类型指定预加载。相反，最佳实践是仅为大多数用户可能实际使用的类型指定预加载。这就是为什么上面示例中的代码没有为 `video/webm` 视频指定预加载的原因。

然而，缺少预加载并不会阻止那些需要的用户实际使用 `video/webm` 视频：对于那些浏览器不支持 `video/mp4` 但支持 `video/webm` 的用户，上述示例中的代码仍然会使 `video/webm` 视频被使用——但它这样做的同时也不会导致对大多数其他用户不必要地进行预加载。

## 启用 CORS 的获取请求

在预加载启用 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 的资源（例如 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch)、[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 或[字体](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-face)）时，需要特别注意在你的 [`<link>`](/zh-CN/docs/Web/HTML/Reference/Elements/link) 元素上设置 [`crossorigin`](/zh-CN/docs/Web/HTML/Reference/Elements/link#crossorigin) 属性。该属性需要设置为与资源的 CORS 和凭据模式相匹配，即使获取请求不跨域也需要设置。

如上所述，其中一个适用的有趣情况是字体文件。由于各种原因，这些文件必须使用匿名模式的 CORS 进行获取（参见[字体获取要求](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)）。

让我们以这个案例作为示例。你可以在 GitHub 上查看完整的[示例源代码](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts)（也可以[在线查看](https://mdn.github.io/html-examples/link-rel-preload/fonts/)）：

```html
<head>
  <meta charset="utf-8" />
  <title>Web font example</title>

  <link
    rel="preload"
    href="fonts/cicle_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />
  <link
    rel="preload"
    href="fonts/zantroke-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link href="style.css" rel="stylesheet" />
</head>
<body>
  …
</body>
```

我们不仅在 `type` 属性中提供了 MIME 类型提示，还提供了 `crossorigin` 属性，以确保预加载的 CORS 模式与最终的字体资源请求相匹配。

## 包括 media

`<link>` 元素的一个很好的特性是它们能够接受 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/link#media) 属性。这些属性可以接受[媒体类型](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#media_types)或完整的[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)，让你可以进行响应式的预加载！

让我们来看一个例子（在 GitHub 上查看，包括[源代码](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media)和[在线示例](https://mdn.github.io/html-examples/link-rel-preload/media/)）：

```html
<head>
  <meta charset="utf-8" />
  <title>Responsive preload example</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(max-width: 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>My site</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(max-width: 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = "url(bg-image-narrow.png)";
    } else {
      header.style.backgroundImage = "url(bg-image-wide.png)";
    }
  </script>
</body>
```

我们在 `<link>` 元素上包含 `media` 属性，以便在用户的视口较窄时预加载窄图像，在视口较宽时加载宽图像。我们使用 {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} 来实现这一点（查看[测试媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Testing)以获取更多信息）。

这使得字体在页面渲染时更有可能可用，减少了 FOUT（未经样式处理的文本闪烁）。

这并不局限于图像，甚至不局限于同类型的文件——大胆想象！如果用户使用的是带宽和 CPU 可能更受限的窄屏幕，你可以预加载和显示一个简单的 SVG 图表，或者如果用户的资源更丰富，可以预加载一个复杂的 JavaScript 代码块，然后用它来渲染一个交互式的 3D 模型。

## 脚本和预加载

> [!NOTE]
> 如果你正在使用 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)，请使用 [`<link rel="modulepreload">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/modulepreload)。

关于这些预加载的另一个好处是，你可以使用脚本来执行它们。例如，这里我们创建一个 {{domxref("HTMLLinkElement")}} 实例，然后将其附加到 DOM 中：

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

这意味着浏览器将预加载 `myscript.js` 文件，但实际上还没有使用它。要使用它，你可以这样做：

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

当你想要预加载一个脚本，但需要将执行推迟到确切需要它的时候，这很有用。

## 其他资源预加载机制

还存在其他预加载特性，但都不如 `<link rel="preload">` 适合该目的：

- `<link rel="prefetch">` 在浏览器中支持已久，但它是用于预取将在下一次导航/页面加载时使用的资源（例如，当你跳转到下一页时）。这是可以的，但对于当前页面没有用！此外，浏览器会给预取（`prefetch`）的资源比预加载（`preload`）的资源更低的优先级——当前页面比下一页更重要。有关更多详细信息，请参阅{{Glossary("prefetch", "预取")}}。
- `<link rel="prerender">` 在后台渲染指定的网页，如果用户导航到该页面，可以加速其加载。由于有可能浪费用户的带宽，Chrome 将 `prerender` 视为 [NoState 预取](https://developer.chrome.google.cn/blog/nostate-prefetch)。
- `<link rel="subresource">` {{non-standard_inline}} 一段时间以前在 Chrome 中得到了支持，其目的是解决与 `preload` 相同的问题，但它存在一个问题：没有办法确定项目的优先级（`as` 当时还不存在），所以它们都是以相当低的优先级获取的。
- 有许多基于脚本的资源加载器，但它们无法控制浏览器的获取优先级队列，并面临着同样的性能问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [预加载的好处是什么？](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)作者 Yoav Weiss
