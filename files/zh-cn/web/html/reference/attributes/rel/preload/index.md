---
title: '`rel="preload"` HTML 属性值'
short-title: preload
slug: Web/HTML/Reference/Attributes/rel/preload
l10n:
  sourceCommit: fc7c0c6df803d5ce26e7b2a72725a7d021ed0694
---

{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/link#rel) 属性的 **`preload`** 值可让你在 HTML 的 {{HTMLElement("head")}} 中声明获取请求，指定页面很快会需要的资源，以便在浏览器主渲染机制启动之前就开始尽早加载。这能确保资源更早可用，且更不容易阻塞页面渲染，从而提升性能。尽管名称中含有“load”（加载）一词，但它并不会加载并执行脚本，而只会以更高优先级安排其下载和缓存。

## 基础

最常见的是使用 `<link>` 加载 CSS 文件来为页面设置样式：

```html
<link rel="stylesheet" href="styles/main.css" />
```

在此，我们将使用 `rel` 值为 `preload`，这会将 `<link>` 变成我们所需任何资源的预加载器。你还需要指定：

- [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/link#href) 属性中的资源路径。
- [`as`](/zh-CN/docs/Web/HTML/Reference/Elements/link#as) 属性中的资源类型。

示例可能如下所示（参见我们的 [JS 和 CSS 示例源代码](https://github.com/mdn/html-examples/tree/main/link-rel-preload/js-and-css)，以及[在线演示](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)）：

```html
<head>
  <meta charset="utf-8" />
  <title>JS 和 CSS 预加载示例</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>弹跳小球</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

在此我们预加载 CSS 和 JavaScript 文件，以便在后续页面渲染需要时立即可用。这个示例较为简单，因为浏览器很可能在与预加载相同的 HTML 块中发现 `<link rel="stylesheet">` 和 `<script>` 元素，但当资源发现得越晚、体积越大时，收益就越明显。例如：

- CSS 中引用的资源，如字体或图像。
- JavaScript 可能请求的资源，如导入的脚本。

`preload` 还有其他优势。使用 `as` 指定要预加载的内容类型，可让浏览器：

- 将资源存入缓存以供后续请求复用（如适用）。
- 对资源应用正确的[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)。
- 为其设置正确的 {{HTTPHeader("Accept")}} 请求标头。

### 可以预加载哪些类型的内容？

许多类型的内容都可以预加载。可能的 `as` 属性值包括：

- `fetch`：通过 fetch 或 XHR 请求访问的资源，例如 ArrayBuffer、WebAssembly 二进制文件或 JSON 文件。
- `font`：字体文件。
- `image`：图像文件。
- `script`：JavaScript 文件。
- `style`：CSS 样式表。
- `track`：WebVTT 文件。

> [!NOTE]
> `font` 和 `fetch` 预加载需要设置 `crossorigin` 属性；请参阅下文[启用 CORS 的获取请求](#启用_cors_的获取请求)。

> [!NOTE]
> 这些值及其预期消费该资源的 Web 功能的更多详情，请参阅 HTML 规范——参见 [Link type "preload"](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)。另请注意，`as` 属性可接受的完整值列表由 HTML 规范规定——参见 [Link type "preload" destinations](https://html.spec.whatwg.org/multipage/links.html#preload-destination)。

## 包含 MIME 类型

`<link>` 元素可接受 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/link#type) 属性，其中包含元素所指向资源的 MIME 类型。这在预加载资源时尤其有用——浏览器会使用 `type` 属性值来判断是否支持该资源，仅在支持时才下载，否则忽略。

```html
<head>
  <meta charset="utf-8" />
  <title>图像预加载示例</title>

  <link rel="preload" href="flower.avif" as="image" type="image/avif" />
</head>
<body>
  <picture>
    <source src="flower.avif" type="image/avif" />
    <source src="flower.webp" type="image/webp" />
    <img src="flower.jpg" />
  </picture>
</body>
```

上面的示例代码会让 `image/avif` 图像仅在支持的浏览器中被预加载——对于浏览器支持 `image/avif` 的用户，实际使用的也是 `image/avif` 图像（因为它是第一个指定的 {{HTMLElement("source")}}）。这样，对于浏览器支持 `image/avif` 的用户，图像下载有望更小。

请注意，对于浏览器同时支持 `image/avif` 和 `image/webp` 的用户，如果还在代码中指定了 `<link rel="preload" href="flower.webp" as="image" type="image/webp">` 元素，那么 `image/avif` 和 `image/webp` 图像*都会*被预加载——尽管实际只会使用其中一种。

因此，不建议为同一资源的多种类型指定预加载。最佳实践是仅对大多数用户实际可能使用的类型指定预加载。这就是上面示例代码没有为 `image/webp` 图像指定预加载的原因。

但缺少预加载并不会阻止需要 `image/webp` 的用户实际使用该图像：对于浏览器不支持 `image/avif` 但支持 `image/webp` 的用户，上面的示例代码仍会导致使用 `image/webp` 图像——但不会因此让大多数其他用户不必要地预加载它。

## 启用 CORS 的获取请求

预加载通过[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)获取的资源时（例如 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch)、[`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 或[字体](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-face)），需要特别注意在 [`<link>`](/zh-CN/docs/Web/HTML/Reference/Elements/link) 元素上设置 [`crossorigin`](/zh-CN/docs/Web/HTML/Reference/Elements/link#crossorigin) 属性。即使获取并非跨源，该属性也需要设置为与资源的 CORS 和凭据模式匹配。

如上所述，一个相关的典型场景是字体文件。由于多种原因，这些文件必须使用匿名模式 CORS 来获取（参见 [Font fetching requirements](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)）。

我们以这种情况为例。完整[示例源代码可在 GitHub 上查看](https://github.com/mdn/html-examples/tree/main/link-rel-preload/fonts)（[也可在线查看](https://mdn.github.io/html-examples/link-rel-preload/fonts/)）：

```html
<head>
  <meta charset="utf-8" />
  <title>Web 字体示例</title>

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

我们不仅在 `type` 属性中提供了 MIME 类型提示，还提供了 `crossorigin` 属性，以确保预加载的 CORS 模式与后续的字体资源请求一致。

## 包含媒体

`<link>` 元素的一个实用特性是支持 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/link#media) 属性。该属性可接受[媒体类型](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#媒体类型)或完整的[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)，从而可实现响应式预加载！

来看一个示例（可在 GitHub 上查看——[源代码](https://github.com/mdn/html-examples/tree/main/link-rel-preload/media)，[在线示例](https://mdn.github.io/html-examples/link-rel-preload/media/)）：

```html
<head>
  <meta charset="utf-8" />
  <title>响应式预加载示例</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(width <= 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(width > 600px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>我的网站</h1>
  </header>

  <script>
    const mediaQueryList = window.matchMedia("(width <= 600px)");
    const header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = 'url("bg-image-narrow.png")';
    } else {
      header.style.backgroundImage = 'url("bg-image-wide.png")';
    }
  </script>
</body>
```

我们在 `<link>` 元素上包含 `media` 属性，这样当用户视口较窄时预加载窄图像，视口较宽时预加载宽图像。我们使用 {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}} 来实现这一点（更多信息参见[使用编程方法测试媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Testing)）。

同样的技巧也适用于其他资源类型。例如，与字体一起使用时，预加载更有可能让字体在渲染时可用，降低无样式文本闪烁（FOUT）的几率。

这不限于图像，甚至不限于同类型文件——可以更大胆！如果用户在窄屏设备上，带宽和 CPU 可能更受限，你可以预加载并显示简化的 SVG 示意图；如果用户资源更充足，可以预加载一大段复杂的 JavaScript，然后用它渲染交互式 3D 模型。

## 脚本与预加载

> [!NOTE]
> 如果使用的是 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)，请改用 [`<link rel="modulepreload">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/modulepreload)。

这些预加载的另一个好处是，你可以用脚本触发它们。例如，这里我们创建一个 {{domxref("HTMLLinkElement")}} 实例，然后将其附加到 DOM：

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

这意味着浏览器会预加载 `myscript.js` 文件，但尚未实际使用。要使用它，可以这样做：

```js
const preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

当你想预加载脚本，但要等到确切需要时再延迟执行，这很有用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [推测性加载](/zh-CN/docs/Web/Performance/Guides/Speculative_loading)，以比较 `<link rel="preload">` 和其他类似的性能改进特性。
- Yoav Weiss 的[预加载：它有什么用？](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)
