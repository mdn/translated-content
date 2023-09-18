---
title: 链接类型：preload
slug: Web/HTML/Attributes/rel/preload
---

{{HTMLSidebar}}

{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Element/link#rel) 属性的 `preload` 值允许你在 HTML 的 {{htmlelement("head")}} 中声明获取请求，指定页面很快就需要的资源，这些资源是你希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。这可以确保它们更早可用，并且不太可能阻塞页面的渲染，从而提高性能。尽管名称中包含“load”一词，但它并不加载和执行脚本，而只是安排脚本以更高的优先级进行下载和缓存。

## The basics

你最常使用 `<link>` 标签来加载一个 CSS 文件，以为你的页面添加样式：

```html
<link rel="stylesheet" href="styles/main.css" />
```

然而，在这里，我们将使用值为 `preload` 的 `rel` 属性，这会将 `<link>` 标签转变成任何我们想要的资源的预加载器。您还需要指定：

- [`href`](/zh-CN/docs/Web/HTML/Element/link#href) 属性中的资源路径。
- [`as`](/zh-CN/docs/Web/HTML/Element/link#as) 属性中的资源类型。

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
- JavaScript 可以请求的资源，如 JSON、导入的脚本或 Web Workers。
- 较大的图像和视频文件。

`preload` 还有其他优点。使用 `as` 来指定要预加载的内容类型允许浏览器：

- 更准确地优先加载资源。
- 将资源存储在缓存中以备将来使用，在适当的情况下复用资源。
- 对资源应用正确的[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)。
- 为其设置正确的 {{HTTPHeader("Accept")}} 请求头。

### 什么类型的内容可以被预加载?

可以预加载多种类型的内容。`as` 属性可能的值包括：

- `audio`: 音频文件，通常在 {{htmlelement("audio")}} 中使用。
- `document`: 用于嵌入在 {{htmlelement("frame")}} 或 {{htmlelement("iframe")}} 中的 HTML 文档。
- `embed`: 用于嵌入在 {{htmlelement("embed")}} 元素中的资源。
- `fetch`: 通过 fetch 或 XHR 请求访问的资源，例如 ArrayBuffer、WebAssembly 二进制文件或 JSON 文件。
- `font`: 字体文件。
- `image`: 图像文件。
- `object`: 要嵌入在 {{htmlelement("object")}} 元素中的资源。
- `script`: JavaScript 文件。
- `style`: CSS 样式表。
- `track`: WebVTT 文件。
- `worker`: JavaScript web worker 或 shared worker。
- `video`: 视频文件，通常在 {{htmlelement("video")}} 中使用。

> **注意：** 预加载 `font` 和 `fetch` 资源需要设置 `crossorigin` 属性；请参阅下文的[CORS启用的获取](#CORS启用的获取)。

> **注意：** 关于这些值以及它们所期望被使用的 web 功能的更多细节可以在预加载规范中找到 — 请参见[链接元素扩展](https://w3c.github.io/preload/#link-element-extensions)。此外，请注意，`as` 属性可以接受的值的完整列表受 Fetch 规范的约束 — 请参见[请求目标](https://fetch.spec.whatwg.org/#concept-request-destination)。


更多细节见[通过 rel="preload"进行内容预加载](/zh-CN/docs/Web/HTML/Preloading_content)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
