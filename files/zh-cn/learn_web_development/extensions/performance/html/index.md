---
title: HTML 性能优化
slug: Learn_web_development/Extensions/Performance/HTML
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML 默认情况下快速且易于访问。作为开发者，我们的工作是在创建或编辑 HTML 代码时确保保持这两个特性。例如当嵌入的 {{htmlelement("video")}} 文件大小过大，或者 JavaScript 解析阻塞了关键页面元素的渲染时，情况可能会比较复杂。本文将引导你了解关键的 HTML 性能特性，以大幅提高网页质量。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机知识，
        <a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，以及基本的<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端 Web 技术知识</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习了解 HTML 对网站性能的影响，以及如何优化 HTML 以提高性能。
      </td>
    </tr>
  </tbody>
</table>

## 优化还是不优化

在开始优化 HTML 之前，你应该首先回答的问题是“我需要优化什么？”。下面讨论的一些技巧和技术是适用于几乎任何 Web 项目的良好实践，而其他一些技巧只在特定情况下才需要使用。试图在任何地方应用这些技术可能是不必要的，而且可能是浪费时间的。你应该确定在每个项目中实际需要哪些性能优化。

为此，你需要[测量性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance)。正如此链接所示，有几种不同的方式可以测量性能，其中一些涉及复杂的[性能 API](/zh-CN/docs/Web/API/Performance_API)。然而，最好的入门方法是学习如何使用内置浏览器的[网络](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance#网络监控工具)和[性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance#性能监控工具)工具，以检查加载时间较长且需要优化的页面部分。

## HTML 性能关键问题

就性能而言，HTML 非常简单，它主要是文本，文本大小较小，因此下载和渲染速度通常很快。影响网页性能的关键问题包括：

- 图像和视频文件的大小：需要考虑如何处理替换元素（例如 {{htmlelement("img")}} 和 {{htmlelement("video")}}）。图像和视频文件较大，可能会显著增加页面的大小。因此，需要尽量减少下载到用户设备的字节数（例如，为移动设备提供较小的图像）。还需要考虑仅在需要时加载页面上的图像和视频，以改善感知性能。
- 嵌入内容的交付：通常是嵌入在 {{htmlelement("iframe")}} 元素中的内容。将内容加载到 `<iframe>` 中可能会显著影响性能，因此应该仔细考虑。
- 资源加载顺序：为了最大化感知性能和实际性能，HTML 应该首先按照在页面上出现的顺序加载。然后，你可以利用各种特性来影响资源加载顺序以获得更好的性能。例如，你可以提前预加载关键的 CSS 和字体，但将非关键的 JavaScript 推迟到稍后加载。

> [!NOTE]
> 简化 HTML 结构和对源代码进行[缩小化](https://zh.wikipedia.org/wiki/極簡化)可以加快渲染和下载速度是有道理的。然而，与图像和视频相比，HTML 文件大小微不足道，而且现代浏览器的渲染速度非常快。如果你的 HTML 源代码非常庞大且复杂，导致渲染和下载性能受到影响，那么你可能存在更大的问题，并且应该考虑简化和拆分内容。

## 响应式处理替代元素

[响应式设计](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)彻底改变了在不同设备上处理网页内容布局的方式。它的一个关键优势是可以动态切换根据不同的屏幕尺寸优化后的布局，例如宽屏布局与窄屏（移动设备）布局之间的切换。它还可以根据其他设备属性，如分辨率或亮色或暗色配色方案的偏好，来处理内容的动态切换。

所谓的“移动优先”技术可以确保默认布局适用于小屏幕设备，因此移动设备只需下载适合其屏幕的图像，无需下载更大的桌面图像，以此提高性能。然而，由于这是通过 CSS 中的[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)来控制的，因此它只能对在 CSS 中加载的图像的性能产生积极影响。

在下面的小节中，我们将总结如何实现响应式的替代元素。你可以在[视频和音频内容](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)和[响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images)指南中找到更多关于这些实现的详细信息。

### 通过 srcset 提供不同的图像分辨率

要根据设备的分辨率和视口大小提供相同图像的不同分辨率版本，你可以利用 [`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 和 [`sizes`](/zh-CN/docs/Web/HTML/Reference/Elements/img#sizes) 这两个属性。

以下示例为不同屏幕宽度提供了不同尺寸的图像：

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="家庭照" />
```

`srcset` 提供源图像的固有尺寸以及它们的文件名，而 `sizes` 在每种情况下提供媒体查询和需要填充的图像槽宽度。然后，浏览器根据每个槽位决定加载哪些图像。例如，如果屏幕宽度小于等于 `600px`，那么 `max-width: 600px` 为真，因此需要填充的槽位是 `480px`。在这种情况下，浏览器很可能选择加载 480w.jpg 文件（480px 宽的图像）。这有助于性能提升，因为浏览器不会加载比所需更大的图像。

以下示例为不同屏幕分辨率提供了不同分辨率的图像：

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="家庭照" />
```

`1.5x`、`2x` 等是相对分辨率指示器。如果图像的样式设置为 320px 宽（例如在 CSS 中使用 `width: 320px`），则如果设备分辨率较低（每个 CSS 像素对应一个设备像素），浏览器将加载 `320w.jpg`，如果设备分辨率较高（每个 CSS 像素对应两个或更多设备像素），则加载 `640w.jpg`。

在这两种情况下，`src` 属性在浏览器不支持 `src`/`srcset` 的情况下提供了默认图像。

### 为图像和视频提供不同来源

{{htmlelement("picture")}} 元素基于传统的 {{htmlelement("img")}} 元素，允许你为不同的情况提供多个不同的源。例如，如果布局是宽的，你可能希望有一个宽的图像，如果是窄的，你将希望有一个在该上下文中仍然有效的较窄的图像。

当然，在移动设备上，这也有助于通过提供较小的信息下载来提高性能。

下面是一个示例：

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="茂密森林景观" />
</picture>
```

{{htmlelement("source")}} 元素在 `media` 属性中包含媒体查询。如果媒体查询返回 true，则加载其 `<source>` 元素的 `srcset` 属性中引用的图像。在上面的示例中，如果视口宽度为 `799px` 或更小，则加载 `narrow-banner-480w.jpg` 图像。还要注意 `<picture>` 元素包含了一个 `<img>` 元素，在不支持 `<picture>` 的浏览器中提供了默认图像加载。

请注意，在此示例中使用了 `srcset` 属性。如前一节所示，你可以为每个图像源提供不同的分辨率。

`<video>` 元素在提供不同来源方面的工作方式类似：

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
  <source
    src="video/larger.webm"
    type="video/webm"
    media="(min-width: 800px)" />

  <!-- 在不支持 video 元素的浏览器中的备用 -->
  <a href="video/larger.mp4">下载视频</a>
</video>
```

然而，提供图像和视频的源之间存在一些关键差异：

- 在上面的示例中，我们使用的是 `src` 而不是 `srcset`；你无法通过 `srcset` 指定视频的不同分辨率。
- 相反，要在不同的 `<source>` 元素中指定了不同的分辨率。
- 请注意，我们还在不同的 `<source>` 元素中指定了不同的视频格式，每个格式都在 `type` 属性中通过其 MIME 类型进行标识。浏览器将加载它们支持（媒体查询测试返回 true）的首个格式。

### 图像的懒加载

提高性能的一个非常有用的技术是**懒加载**。这指的是在 HTML 渲染时不立即加载所有图像，而是仅在它们实际对用户可见（或即将可见）时加载它们。这意味着立即可见/可用的内容更快地准备就绪，而随后的内容只有在滚动到时才会渲染其图像，并且浏览器不会浪费带宽加载用户永远看不到的图像。

懒加载通常使用 JavaScript 处理，但现在浏览器有一个可用的 `loading` 属性，可以指示浏览器自动进行图像的懒加载：

```html
<img src="800w.jpg" alt="家庭合照" loading="lazy" />
```

详细信息请参见 web.dev 上的[浏览器级 web 图像懒加载](https://web.developers.google.cn/articles/browser-level-image-lazy-loading)。

你还可以使用 `preload` 属性来对视频内容进行延迟加载。例如：

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

将 `preload` 的值设置为 `none` 告诉浏览器在用户决定播放视频之前不要预加载任何视频数据，这对性能显然是有益的。相反，它只会显示由 `poster` 属性指示的图像。不同的浏览器具有不同的默认视频加载行为，因此最好明确指定。

详细信息请参见 web.dev 上的[视频懒加载](https://web.developers.google.cn/articles/lazy-loading-video)。

## 处理嵌入内容

在网页中嵌入来自其他来源的内容非常常见。这通常在网站上显示广告以产生收入时使用，广告通常由第三方公司生成并嵌入到你的页面中。其他用途可能包括：

- 显示用户可能在多个页面上需要的共享内容，例如购物车或个人资料信息。
- 显示与组织的主要网站相关的第三方内容，例如社交媒体帖子动态。

嵌入内容最常用的方式是使用 `<iframe>` 元素，尽管还存在其他不太常用的嵌入元素，如 `<object>` 和 `<embed>`。在本节中，我们将重点关注 `<iframe>`。

使用 `<iframe>` 方面的最重要也是最关键的建议是：“除非非常必要，否则不要使用嵌入式 `<iframe>`”。如果你要创建一个包含多个不同信息窗格的页面，你可能会觉得把它们分成单独的页面并加载到不同的 `<iframe>` 中是有组织性的。但是，这样做会带来一些性能和其他方面的问题：

- 将内容加载到 `<iframe>` 中比将内容作为同一直接页面的一部分加载要消耗资源得多——不仅需要额外的 HTTP 请求来加载内容，而且浏览器还需要为每个 `<iframe>` 创建一个单独的页面实例。每个 `<iframe>` 实际上是嵌入在顶级网页中的一个独立网页实例。
- 接上一点，你还需要为每个不同的 `<iframe>` 分别处理任何 CSS 样式或 JavaScript 操作（除非嵌入的页面来自同一源），这变得更加复杂。你无法使用应用于顶级页面的 CSS 和 JavaScript 来定位嵌入的内容，反之亦然。这是一项合理的安全措施，是 Web 的基本原则。想象一下，如果第三方嵌入的内容可以任意在其嵌入的任何页面上运行脚本，那么你可能会遇到的问题！
- 每个 `<iframe>` 还需要单独加载所有共享的数据和媒体文件——你无法在不同的页面嵌入之间共享缓存的资源（再次强调，除非嵌入的页面来自同一源）。这可能导致页面使用的带宽比你预期的要多得多。

建议将内容放在单个页面中。如果你想在页面更改时动态获取新内容，仍然比将其放入 `<iframe>` 中更好，这样可以提高性能。例如，你可以使用 {{domxref("fetch()")}} 方法获取新数据，然后使用一些 DOM 脚本将其插入到页面中。更多信息，请参见[从服务器获取数据](/zh-CN/docs/Learn_web_development/Core/Scripting/Network_requests)和[操作文档](/zh-CN/docs/Learn_web_development/Core/Scripting/DOM_scripting)。

> [!NOTE]
> 如果你掌控内容并且内容相对简单，你可以考虑使用在 `src` 属性中以 base-64 编码的内容填充 `<iframe>`，甚至可以将原始 HTML 插入到 `srcdoc` 属性中（有关更多信息，请参见 [Iframe 性能第二部分：好消息](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429)）。

如果必须使用 `<iframe>`，请保持谨慎。

#### 懒加载 iframe

与 `<img>` 元素一样，你还可以使用 `loading` 属性指示浏览器对最初屏幕外的 `<iframe>` 内容进行懒加载，从而提高性能：

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

详情请参阅[是时候延迟加载屏外 iframe 了！](https://web.developers.google.cn/articles/iframe-lazy-loading)。

## 处理资源加载顺序

资源加载的顺序对于最大化感知和实际性能非常重要。当加载网页时：

1. 通常首先解析 HTML，按照页面上的顺序进行解析。
2. 解析任何找到的 CSS，以理解应该应用于页面的样式。在此期间，开始获取链接的资源，如图像和 Web 字体。
3. 解析任何找到的 JavaScript，对页面进行评估和执行。默认情况下，这会阻止解析遇到的 {{htmlelement("script")}} 元素之后的 HTML。
4. 稍后，浏览器根据应用于它的 CSS 来确定每个 HTML 元素应该如何进行样式化。
5. 将经过样式化的结果绘制到屏幕上。

> [!NOTE]
> 这只是一个非常简单的叙述，但可以让你了解发生的事情。

多种 HTML 特性允许你修改资源加载方式以提高性能。现在我们将探讨其中一些功能。

### 处理 JavaScript 加载

解析和执行 JavaScript 会阻塞后续 DOM 内容的解析。这就增加了页面渲染和用户要使用该内容所需等待的时间。一个小的脚本不会有太大影响，但考虑到现代 Web 应用程序通常非常依赖 JavaScript，这一点很重要。

默认的 JavaScript 解析行为的另一个副作用是，如果正在渲染的脚本依赖于页面后面出现的 DOM 内容，将会出现错误。

例如，想象一个页面上简单的段落：

```html
<p>我的段落</p>
```

现在想象一个包含以下代码的 JavaScript 文件：

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("你点击了段落");
});
```

我们可以通过在 `<script>` 元素中引用它来将此脚本应用于页面：

```html
<script src="index.js"></script>
```

如果我们将这个 `<script>` 元素放在 `<p>` 元素之前（例如，在 {{htmlelement("head")}} 元素中），页面会抛出错误（例如，Chrome 报告到控制台上的错误为“Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')”）。这是因为脚本依赖于 `<p>` 元素才能正常工作，但在解析脚本时，`<p>` 元素在页面上并不存在。它尚未被渲染。

要解决上述问题，可以将 `<script>` 元素放在 `<p>` 元素之后（例如放在文档主体的末尾），或者在适当的事件处理程序中运行代码（例如，在 [`DOMContentLoaded`](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 上运行，其在 DOM 完全解析后触发）。

然而，这并不能解决等待脚本加载的问题。可以通过在 `<script>` 元素中添加 `async` 属性来实现更好的性能：

```html
<script async src="index.js"></script>
```

这会使脚本获取与 DOM 解析并行进行，因此它会在相同的时间准备好，不会阻塞渲染，从而提高性能。

> [!NOTE]
> 还有另一个属性 `defer`，它会使脚本在文档解析完成之后、`DOMContentLoaded` 事件触发之前执行。这与 `async` 有类似的效果。

处理 JavaScript 加载的另一个技巧是将脚本拆分为代码模块，并在需要时加载每个部分，而不是将所有代码放入一个巨大的脚本并在开头加载。这可以通过使用 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)来实现。阅读链接的文章以获取详细指南。

### 使用 rel="preload" 预加载内容

从 HTML、CSS 和 JavaScript 中链接到的其他资源（如图像、视频或字体文件）的获取也可能导致性能问题，阻塞代码的执行并减慢体验速度。一种缓解此类问题的方法是使用 `rel="preload"` 将 {{htmlelement("link")}} 元素转换为预加载器。例如：

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

遇到 `rel="preload"` 链接时，浏览器将尽快获取所引用的资源，并使其在浏览器缓存中可用，以便在后续代码中引用时更快地准备好。预加载用户在页面浏览早期会遇到的高优先级资源非常有用，这样可以让用户获得尽可能流畅的体验。

有关使用 `rel="preload"` 的详细信息，请参阅以下文章：

- [`rel="preload"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)
- [预加载关键资源以提高加载速度](https://web.developers.google.cn/articles/preload-critical-assets) web.developers.google.cn（2020）

> [!NOTE]
> 你还可以使用 `rel="preload"` 预加载 CSS 和 JavaScript 文件。

> [!NOTE]
> 还有其他 [`rel`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel) 值，也旨在加速页面加载的各个方面：`dns-prefetch`、`preconnect`、`modulepreload`、`prefetch` 和 `prerender`。请访问链接页面，了解它们的作用。

## 参见

- [从服务器获取数据](/zh-CN/docs/Learn_web_development/Core/Scripting/Network_requests)
- [操作文档](/zh-CN/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
