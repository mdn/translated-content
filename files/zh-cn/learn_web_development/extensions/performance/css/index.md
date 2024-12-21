---
title: CSS 性能优化
slug: Learn_web_development/Extensions/Performance/CSS
original_slug: Learn/Performance/CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

当开发网站时，你需要考虑浏览器如何处理你网站上的 CSS。为了减轻 CSS 可能引起的性能问题，你应该对其进行优化。例如，你应该优化 CSS 以减少[阻塞渲染](/zh-CN/docs/Glossary/Render_blocking)并最小化所需的回流次数。本文将为你介绍关键的 CSS 性能优化技术。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本的计算机操作能力，<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >已安装基本软件</a
        >，以及对<a
          href="/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website"
          >客户端 Web 技术的基本了解</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解 CSS 对网站性能的影响，以及如何优化 CSS 以改善性能。
      </td>
    </tr>
  </tbody>
</table>

## 优化与否

在开始优化 CSS 之前，你应该回答一个问题：“我需要优化什么？”下面讨论的一些技巧和技术是适用于几乎任何 Web 项目的良好实践，然而另一些只在特定情况下需要。试图在所有地方应用这些技术可能是不必要的，而且可能会浪费你的时间。你应该确定每个项目实际上需要哪些性能优化。

为了做到这一点，你需要[测量网站性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance)。正如上面的链接所示，有几种不同的测量性能的方法，其中一些涉及复杂的[性能 API](/zh-CN/docs/Web/API/Performance_API)。然而，入门的最佳方法是学习如何使用内置的浏览器[网络](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance#网络工具)和[性能](/zh-CN/docs/Learn_web_development/Extensions/Performance/Measuring_performance#通用性能报告工具)工具，以查看页面加载中哪些部分花费了很长时间，并且需要进行优化。

## 优化渲染

浏览器有一个固定的渲染流程——只有在布局（layout）完成后才能绘制（paint）页面，而布局的前提是要生成渲染树（render tree），而渲染树的生成则需要 DOM 和 CSSOM 树的配合。

如果先让用户看到一个没有样式的页面，等 CSS 样式解析完后再重绘（repaint），这样的体验会很差。所以，浏览器会等到确定需要 CSS 时才开始渲染。只有在下载完 CSS 并生成 CSS 对象模型 [CSS 对象模型（CSSOM）](/zh-CN/docs/Glossary/CSSOM)之后，浏览器才会绘制页面。

为了优化 CSSOM 的构建并提高页面性能，你可以根据当前 CSS 的状态执行以下一项或多项操作：

- **删除不必要的样式**：这听起来很明显，但你可能不相信，很多开发者都会忘记清除在开发过程中添加的不会被用到的 CSS 规则。所有脚本都会被解析，无论它在布局于绘制时是否被使用，因此删除无用样式可以加速网页渲染。正如[如何从网站中删除未使用的 CSS？](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/)（csstricks.com，2019）总结的那样，对于大型代码库来说，这是一个难题，没有灵丹妙药可以可靠地查找和删除未使用的 CSS。你需要尽量保持 CSS 的模块化，并在添加和删除时谨慎小心。

- **将 CSS 拆分为独立模块**：CSS 模块化可以延迟加载在页面加载阶段非必要的 CSS，缩短初始 CSS 的阻塞和加载时间。最简单的方法是将 CSS 拆分为独立的文件，并仅加载所需内容：

  ```html
  <!-- 加载和解析 styles.css 会阻塞渲染 -->
  <link rel="stylesheet" href="styles.css" />

  <!-- 加载和解析 print.css 不会阻塞渲染 -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- 在大屏幕上，加载和解析 mobile.css 不会阻塞渲染 -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (max-width: 480px)" />
  ```

  上面的示例提供了三组样式——始终会加载的默认样式、只有在打印文档时才会加载的样式，以及仅在窄屏设备上加载的样式。默认情况下，浏览器会假设每个指定的样式表都会阻塞渲染。你可以通过添加包含[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)的 `media` 属性来告诉浏览器何时应用样式表。当浏览器看到只需要在特定情况下应用的样式表时，它仍然会下载样式表，但不会阻塞渲染。通过将 CSS 拆分为多个文件，主要的渲染阻塞文件（在本例中为 `styles.css`）会小得多，从而减少渲染阻塞的时间。

- **最小化和压缩你的 CSS**：最小化包括在代码进入生产环境后，在文件中删除仅为了人类可读性而存在的所有空格。通过对 CSS 进行最小化，你可以大大减少加载时间。通常，最小化是作为构建过程的一部分进行的（例如，大多数 JavaScript 框架在构建项目准备部署时会对代码进行最小化）。除了最小化之外，还要确保你的站点所在的服务器在提供文件之前对文件使用诸如 gzip 的压缩。

- **简化选择器**：人们经常编写比应用所需样式更复杂的选择器。这不仅会增加文件大小，还会增加解析这些选择器的时间。例如：

  ```css
  /* 非常具体的选择器 */
  body div#main-content article.post h2.headline {
    font-size: 24px;
  }

  /* 你可能只需要这个 */
  .headline {
    font-size: 24px;
  }
  ```

  将选择器简化和降低优先级对于维护也是有好处的。简单选择器的作用很容易理解，如果选择器不具有那么高的[优先级](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#优先级_2)，以后需要时就很容易覆盖样式。

- **不要将样式应用于不需要的元素**：常见的错误是使用[通用选择器](/zh-CN/docs/Web/CSS/Universal_selectors)将样式应用于所有元素，或者至少应用于比实际需要的元素更多的元素。这种类型的样式会对性能产生负面影响，特别是在较大的站点上。

  ```css
  /* 选择 <body> 元素内的所有元素 */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  请记住，许多属性（例如 {{cssxref("font-size")}}）会从其父元素继承其值，因此你不需要在所有地方应用它们。而且功能强大的工具（如[弹性盒子](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox)）需要谨慎使用。在所有地方都使用它们可能会导致各种意外行为。

- **使用 CSS 精灵图减少图像相关的 HTTP 请求**：[CSS 精灵图](https://css-tricks.com/css-sprites/) 是一种技术，它将你希望在站点上使用的多个小图像（例如图标）放入单个图像文件中，然后使用不同的 {{cssxref("background-position")}} 值在不同的位置显示图像的一部分。这可以大大减少获取图像所需的 HTTP 请求数量。

- **预加载重要资源**：你可以使用 [`rel="preload"`](/zh-CN/docs/Web/HTML/Attributes/rel/preload) 将 {{htmlelement("link")}} 元素转换为预加载器，用于关键资源，包括 CSS 文件、字体和图片：

  ```html
  <link rel="preload" href="style.css" as="style" />

  <link
    rel="preload"
    href="ComicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />
  ```

  使用 `preload`，浏览器会尽快获取引用的资源，并将其存储在浏览器缓存中，以便在后续代码中引用时可以更快地使用它们。为了让用户体验尽可能流畅，我们应提前加载页面加载初期用户会遇到的高优先级资源。请注意，你还可以使用 `media` 属性创建响应式的预加载器。

  另请参阅[预加载重要资源以提升加载速度](https://web.developers.google.cn/articles/preload-critical-assets)这篇 web.developers.google.cn 上的文章（2020）。

## 处理动画

动画可以改善感知性能，使界面更加流畅，让用户在等待页面加载时感觉到进展（例如加载旋转图标）。然而，更大更多的动画自然需要更多的处理能力来处理，这可能会降低性能。

最简单的建议是减少所有不必要的动画。你还可以为用户提供一个控件/站点选项，让他们可以关闭动画，例如当他们使用低功率设备或电池电量有限的移动设备时。你还可以使用 JavaScript 来控制页面是否应用动画。还有一个名为 [`prefers-reduced-motion`](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion) 的媒体查询，可以根据用户对动画的操作系统级偏好选择性地提供动画样式。

对于必要的 DOM 动画，建议尽可能使用 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)，而不是 JavaScript 动画（[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 提供了一种直接使用 JavaScript 连接到 CSS 动画的方法）。

### 选择要进行动画处理的属性

接下来，动画性能在很大程度上取决于你要进行动画处理的属性。某些属性在进行动画处理时会触发[回流](/zh-CN/docs/Glossary/Reflow)（进一步也会触发[重绘](/zh-CN/docs/Glossary/Repaint)），应该避免使用这些属性。这些属性包括：

- 修改元素的尺寸，例如 [`width`](/zh-CN/docs/Web/CSS/width)、[`height`](/zh-CN/docs/Web/CSS/height)、[`border`](/zh-CN/docs/Web/CSS/border) 和 [`padding`](/zh-CN/docs/Web/CSS/padding)。
- 重新定位元素，例如 [`margin`](/zh-CN/docs/Web/CSS/margin)、[`top`](/zh-CN/docs/Web/CSS/top)、[`bottom`](/zh-CN/docs/Web/CSS/bottom)、[`left`](/zh-CN/docs/Web/CSS/left) 和 [`right`](/zh-CN/docs/Web/CSS/right)。
- 更改元素的布局，例如 [`align-content`](/zh-CN/docs/Web/CSS/align-content)、[`align-items`](/zh-CN/docs/Web/CSS/align-items) 和 [`flex`](/zh-CN/docs/Web/CSS/flex)。
- 添加改变元素几何形状的视觉效果，例如 [`box-shadow`](/zh-CN/docs/Web/CSS/box-shadow)。

现代浏览器很智能，只会重新绘制文档中已更改的区域，而不是整个页面。因此，越大的动画成本越高。

如果可以的话，最好对不会引起回流/重绘的属性进行动画处理。这包括：

- [变换](/zh-CN/docs/Web/CSS/CSS_transforms)
- [`opacity`](/zh-CN/docs/Web/CSS/opacity)
- [`filter`](/zh-CN/docs/Web/CSS/filter)

### 在 GPU 上进行动画处理

为了进一步提高性能，你应该考虑将动画处理工作转移到主线程之外，并放到设备的 GPU 上进行（也称为合成（compositing））。这可以通过选择特定类型的动画来实现，浏览器会自动将这些动画发送到 GPU 来处理。包括：

- 3D 变换动画，例如 [`transform: translateZ()`](/zh-CN/docs/Web/CSS/transform) 和 [`rotate3d()`](/zh-CN/docs/Web/CSS/transform-function/rotate3d)。
- 具有某些其他属性动画的元素，例如 [`position: fixed`](/zh-CN/docs/Web/CSS/position)。
- 应用了 [`will-change`](/zh-CN/docs/Web/CSS/will-change) 的元素（请参阅下面的小节）。
- 特定的在其自己层中渲染的元素，包括 [`<video>`](/zh-CN/docs/Web/HTML/Element/video)、[`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas) 和 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe)。

在 GPU 上进行动画处理可以提高性能，尤其是在移动设备上。然而，将动画处理移到 GPU 并不总是那么简单。请阅读 [CSS GPU 动画：正确使用](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)（smashingmagazine.com，2016）以获取非常有用和详细的分析。

## 使用 `will-change` 优化元素变化

浏览器可能会在元素实际发生变化之前进行优化设置。这类优化可以通过提前完成可能需要的大量工作，提高页面的响应速度。CSS 的 [`will-change`](/zh-CN/docs/Web/CSS/will-change) 属性向浏览器提示元素预期的变化方式。

> **备注：**`will-change` 应该作为处理现有的性能问题的最后一招。不应该用它来预测性能问题。

```css
.element {
  will-change: opacity, transform;
}
```

## 优化渲染阻塞

CSS 可以使用媒体查询将样式限定在特定条件下。媒体查询对于响应式网页设计非常重要，并且可以帮助我们优化关键渲染流程。浏览器会阻塞渲染直到解析完所有的样式，但不会阻塞不会使用的样式，例如打印样式表。通过根据媒体查询将 CSS 拆分为多个文件，可以防止在下载未使用的 CSS 时阻塞渲染。要创建一个非阻塞的 CSS 链接，将不立即使用的样式（例如打印样式）移动到单独的文件中，在 HTML 标记中添加一个 [`<link>`](/zh-CN/docs/Web/HTML/Element/link)，并添加一个媒体查询，在本例中是打印样式表。

```html
<!-- 加载和解析 styles.css 会阻塞渲染 -->
<link rel="stylesheet" href="styles.css" />

<!-- 加载和解析 print.css 不会阻塞渲染 -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- 在大屏幕上，加载和解析 mobile.css 不会阻塞渲染 -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

默认情况下，浏览器假设每个指定的样式表都会阻塞渲染。通过添加具有[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)的 `media` 属性告诉浏览器样式表应该何时应用。当浏览器看到一个样式表时，它会知道它只需要将其应用于特定的情况，它仍然会下载样式表，但不会阻塞渲染。通过将 CSS 拆分为多个文件，主要的阻塞渲染文件（在本例中是 `styles.css`）会变得更小，从而减少了渲染阻塞的时间。

## 改善字体性能

本节包含一些有用的技巧，可以用于改善 Web 字体的性能。

总体而言，请仔细考虑在你的网站上使用的字体。某些字体文件可能非常大（几兆字节）。虽然使用大量字体以获得视觉上的吸引力可能很诱人，但这可能会显著降低页面加载速度，并使你的网站看起来凌乱不堪。你可能只需要使用两到三种字体，如果选择使用 [Web 安全字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals#网页安全字体)，则可以使用更少的字体。

### 字体加载

请记住，字体仅在使用 [`font-family`](/zh-CN/docs/Web/CSS/font-family) 属性应用于元素时才会加载，而不是在首次使用 [`@font-face`](/zh-CN/docs/Web/CSS/@font-face) at 规则引用时加载：

```css
/* 字体在此处没有加载 */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* 字体实际上在此处加载 */
  font-family: "Open Sans";
}
```

因此，使用 `rel="preload"` 来提前加载重要的字体，这样它们在实际需要时可以更快地可用：

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

如果你的 `font-family` 声明位于一个大型的外部样式表中，并且在解析过程中不会被立即访问到，那么这种做法更有益处。不过要适当权衡：字体文件相当大，如果预加载太多字体，可能会延迟其他资源的加载。

你还可以考虑以下几点：

- 使用 [`rel="preconnect"`](/zh-CN/docs/Web/HTML/Attributes/rel/preconnect) 与字体提供方建立早期连接。有关详细信息，请参阅[预连接到关键的第三方源](https://web.developers.google.cn/articles/font-best-practices#preconnect_to_critical_third-party_origins)。
- 使用 [CSS 字体加载 API](/zh-CN/docs/Web/API/CSS_Font_Loading_API) 通过 JavaScript 自定义字体加载行为。

### 只加载所需的字形

在选择用于正文的字体时，很难确定将在其中使用的字形，特别是如果你处理的是用户生成的内容和/或涉及多种语言的内容。

然而，如果你知道你将使用特定的字形集（例如，仅用于标题或特定标点符号字符的字形），你可以限制浏览器需要下载的字形数量。这可以通过创建仅包含所需子集的字体文件来实现，这个过程叫做[子集化](https://fonts.google.com/knowledge/glossary/subsetting)。然后可以使用 `@font-face` 的 [`unicode-range`](/zh-CN/docs/Web/CSS/@font-face/unicode-range) 描述符来指定何时使用你的子集字体。如果页面中没有使用该范围内的任何字符，则不会下载该字体。

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### 使用 `font-display` 描述符定义字体的显示行为

应用于 `@font-face` at 规则的 [`font-display`](/zh-CN/docs/Web/CSS/@font-face/font-display) 描述符定义了浏览器加载和显示字体文件的方式，使得文字在字体正在加载或加载失败时都能以备用字体显示。这通过使文本可见而不是显示空白屏幕来提高性能，但代价是出现未样式化文本的闪烁。

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

### 使用 CSS 局限优化样式重新计算

通过使用 [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)模块中定义的属性，你可以指示浏览器将页面的不同部分隔离开来，并独立地优化它们的渲染。这允许在渲染各个部分时提高性能。例如，你可以指定浏览器在特定容器于视口中可见之前不要渲染它们。

`contain` 属性允许作者精确指定要应用于页面上各个容器的局限类型。这使得浏览器可以针对 DOM 的一部分重新计算布局、样式、绘制、大小或它们的任意组合。

```css
article {
  contain: content;
}
```

`content-visibility` 属性是一个有用的快捷方式，允许作者在一组容器上应用一组强大的局限，并指定浏览器在需要之前不要布局和渲染这些容器。

另一个属性 `contain-intrinsic-size` 也可用，它允许你为容器提供一个占位大小，同时它们受到局限的影响。这意味着即使容器的内容尚未渲染，它们也会占据空间，允许包含执行其性能优化而不会出现滚动条的变动和卡顿。这提高了内容正在加载时用户体验的质量。

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## 参见

- [CSS 动画性能](/zh-CN/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [字体最佳实践](https://web.developers.google.cn/articles/font-best-practices)（来自 web.developers.google.cn，2022）
- [content-visibility：提升渲染性能的新 CSS 属性](https://web.developers.google.cn/articles/content-visibility)（来自 web.developers.google.cn，2022）

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
