---
title: <img>：图像嵌入元素
slug: Web/HTML/Element/img
---

{{HTMLSidebar}}

**`<img>`** [HTML](/zh-CN/docs/Web/HTML) 元素将一张图像嵌入文档。

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

上面的例子展示了 `<img>` 元素的用法：

- `src` 属性是**必须的**，它包含了你想嵌入的图片的路径。
- `alt` 属性包含一条对图像的文本描述，这不是强制性的，但对无障碍而言，它**难以置信地有用**——屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义。如果由于某种原因无法加载图像，普通浏览器也会在页面上显示 `alt` 属性中的备用文本：例如，网络错误、内容被屏蔽或链接过期。

还有很多其他属性，可以实现各种不同的目的：

- [Referrer](/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)/{{glossary("CORS")}} 控制，保证安全与隐私：详见 [`crossorigin`](/zh-CN/docs/Web/HTML/Element/img#crossorigin) 和 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Element/img#referrerpolicy) 属性。
- 使用 [`width`](/zh-CN/docs/Web/HTML/Element/img#width) 和 [`height`](/zh-CN/docs/Web/HTML/Element/img#height) 设置图像的固有尺寸（intrinsic size）：这将设置图像应占用的空间，以确保图像被加载之前页面的布局是稳定的。
- 使用 [`sizes`](/zh-CN/docs/Web/HTML/Element/img#sizes) 和 [`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) 设置响应式图像（参见 {{htmlelement("picture")}} 元素和我们的[响应式图像](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)教程）。

## 支持的图像格式

HTML 标准并没有给出需要支持的图像格式的列表，因此每个{{glossary("user agent", "用户代理")}}支持一组不同的格式。

> **备注：** [网页浏览器图像格式指南](/zh-CN/docs/Web/Media/Formats/Image_types)提供了有关图像格式及 Web 浏览器支持的综合信息。本节只是一个总结！

Web 最常用的图像格式是：

- [APNG（动态可移植网络图形）](/zh-CN/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)——无损动画序列的不错选择（GIF 性能较差）。
- [AVIF（AV1 图像文件格式）](/zh-CN/docs/Web/Media/Formats/Image_types#avif_image)——静态图像或动画的不错选择，其性能较好。
- [GIF（图像互换格式）](/zh-CN/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format)——*简单*图像和动画的不错选择。
- [JPEG（联合图像专家组）](/zh-CN/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image)——有损压缩静态图像的不错选择（目前最流行的格式）。
- [PNG（便携式网络图形）](/zh-CN/docs/Web/Media/Formats/Image_types#png_portable_network_graphics)——对于无损压缩静态图像而言是不错的选择（质量略好于 JPEG）。
- [SVG（可缩放矢量图形）](/zh-CN/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)——矢量图像格式。用于必须以不同尺寸准确描绘的图像。
- [WebP（网络图片格式）](/zh-CN/docs/Web/Media/Formats/Image_types#webp_image)——图像和动画的绝佳选择。

推荐使用诸如 [WebP](/zh-CN/docs/Web/Media/Formats/Image_types#webp_image) 和 [AVIF](/zh-CN/docs/Web/Media/Formats/Image_types#avif_image) 等图像格式，因为它们在静态图像和动画的性能均比 PNG、JPEG、JIF 好得多。WebP 得到了广泛的支持，而 AVIF 则缺乏 Safari 的支持。

对于必须以不同尺寸准确绘制的图像，则仍然推荐使用 SVG 格式。

## 图像加载错误

如果在加载或渲染图像时发生错误，且设置了至少一个 [`onerror`](/zh-CN/docs/Web/HTML/Global_attributes#onerror) 事件处理器来处理 {{domxref("Element/error_event", "error")}} 事件，那么设置的事件处理器就会被调用。这样的错误可能发生在各种不同的情况下，包括：

- `src` 属性的属性值为空（`""`）或者 `null`。
- `src` 属性的 {{glossary("URL")}} 和用户正在浏览的页面的 URL 完全相同。
- 图像出于某些原因损坏了，从而无法加载。
- 图像的元数据被破坏了，无法检索它的分辨率/宽高，而且在 `<img>` 元素的属性中没有指定宽度/高度。
- {{glossary("user agent", "用户代理")}}尚未支持该图片所用的格式。

## 属性

此元素支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `alt`

  - : 定义了图像的备用文本描述。

    > **备注：** 浏览器并非总是会显示图像。比如：
    >
    > - 非可视化浏览器（Non-visual browsers）（比如有视力障碍的人使用的音频浏览器）
    > - 用户选择不显示图像（比如为了节省带宽，或出于隐私考虑）
    > - 图像文件无效，或是使用了[不支持的格式](#支持的图像格式)
    >
    > 在这些情况下，浏览器很可能会将图像替换为图像所属 `<img>` 元素的 `alt` 属性所提供的文本。基于上面罗列的原因，建议尽可能地通过 `alt` 属性提供一些有用的信息。

    如果把这个属性设置为空字符串（`alt=""`），则表明该图像*不是*内容的关键部分（这是一种装饰或者一个追踪像素点），非可视化浏览器在{{glossary("Rendering engine", "渲染")}}的时候可能会忽略它。而且，如果图片加载失败，可视化浏览器会隐藏表示图片损坏的图标。

    将图像复制并粘贴为文本，或是将图像的链接保存为浏览器书签时，也会用到此属性。

- `crossorigin`

  - : 这个枚举属性表明是否必须使用 {{glossary("CORS")}} 完成相关图像的抓取。[启用 CORS 的图像](/zh-CN/docs/Web/HTML/CORS_enabled_image)可以在 {{HTMLElement("canvas")}} 元素中重复使用，而不会被标记为“[污染](/zh-CN/docs/Web/HTML/CORS_enabled_image#安全性和“被污染”的_canvas)（tainted）”。

    如果*未指定* `crossorigin` 属性，则会发送不启用 CORS 的请求（不会携带 {{httpheader("Origin")}} 请求标头），且浏览器会将图像标记为“被污染”并拒绝对图像数据的访问，阻止其在 {{HTMLElement("canvas")}} 元素中的使用。

    如果*指定*了 `crossorigin` 属性，则会发送启用 CORS 的请求（会携带 {{httpheader("Origin")}} 请求标头）；但是如果服务器不选择允许源站点对图像数据进行跨源访问（不发送任何 {{httpheader("Access-Control-Allow-Origin")}} 响应标头，或发送的 {{httpheader("Access-Control-Allow-Origin")}} 标头中不包含源站点），浏览器则会阻止图像的加载，并在开发者工具的控制台中记录 CORS 错误。

    允许的值有：

    - `anonymous`
      - : 发送忽略凭据的跨源请求（即，不携带 {{glossary("cookie")}}、[X.509 证书](https://datatracker.ietf.org/doc/html/rfc5280) 或 {{httpheader("Authorization")}} 请求标头）。
    - `use-credentials`
      - : 发送携带凭据的跨源请求（比如 cookie、X.509 证书和 `Authorization` 请求标头）。如果服务器不选择与源站共享凭据（通过返回 `Access-Control-Allow-Credentials: true` 响应标头） ，则浏览器会将图像标记为被污染且限制对其图像数据的访问。

    如果属性是无效值，浏览器默认将其当做 `anonymous` 关键字。更多信息，请查看 [CORS 属性设置](/zh-CN/docs/Web/HTML/Attributes/crossorigin)。

- `decoding`

  - : 为浏览器提供图像解码方式上的提示。允许的值：

    - `sync`
      - : 同步解码图像，实现与其他内容互斥的原子渲染。
    - `async`
      - : 异步解码图像，以减少其他内容的渲染延迟。
    - `auto`
      - : 默认值：不指定解码方式，由浏览器决定哪一种对用户来说是最合适的。

- `fetchpriority` {{experimental_inline}}

  - : 提供获取图像时要使用的相对的优先级提示。允许的值：

    - `high`
      - : 表示其获取优先级相对其他图像要高。
    - `low`
      - : 表示其获取优先级相对其他图像要低。
    - `auto`
      - : 默认值：表示自动确定其相对其他图像的获取优先级。

- `height`

  - : 图像的固有高度，以像素为单位。必须是没有单位的整数值。

    > **备注：** 同时包括 `height` 和 [`width`](#attr-width) 使浏览器在加载图像之前计算图像的长宽比。此长宽比用于保留显示图像所需的空间，减少甚至防止在下载图像并将其绘制到屏幕上时布局的偏移。减少布局偏移是良好用户体验和 Web 性能的主要组成部分。

- `ismap`

  - : 这个布尔属性表示图像是否是[服务器端图像映射](https://en.wikipedia.org/wiki/Image_map#Server-side)的一部分。如果是，那么点击图片的精准坐标将会被发送到服务器。

    > **备注：** 只有在 `<img>` 元素是一个拥有有效 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) 属性的 {{htmlelement("a")}} 元素的后代元素的情况下，这个属性才会被允许使用。

- `loading`

  - : 指示浏览器应当如何加载该图像。允许的值：

    - `eager`
      - : 立即加载图像，不管它是否在可视视口（visible viewport）之外（默认值）。
    - `lazy`
      - : 延迟加载图像，直到它和视口接近到一个计算得到的距离（由浏览器定义）。目的是在需要图像之前，避免加载图像所需要的网络和存储带宽。这通常会提高大多数典型用场景中内容的性能。

    > **备注：** 仅在启用 JavaScript 时才会延迟加载。这是一种反跟踪的措施，因为，如果用户代理在禁用脚本的情况下支持延迟加载，网站仍然跨源通过在图像中策略性地放置图像来跟踪用户在整个会话期间的大致滚动位置，这样服务器可以跟踪请求了多少图像以及请求在何时发起。

- `referrerpolicy`

  - : 一个字符串，指示在获取资源时使用的来源地址（referrer）：

    - `no-referrer`：不会发送 {{httpheader("Referer")}} 标头。
    - `no-referrer-when-downgrade`：若未使用 {{Glossary("TLS")}}（{{glossary("HTTPS")}}）导航到源站，则不发送 `Referer` 标头。
    - `origin`：发送到源站的来源地址将被限制为：[协议](/zh-CN/docs/Learn/Common_questions/What_is_a_URL)、{{Glossary("host", "主机")}}和{{Glossary("port", "端口")}}。
    - `origin-when-cross-origin`：发送到其他来源的来源地址会被限制为协议、主机和端口。同源导航仍将包含路径。
    - `same-origin`：仅{{Glossary("Same-origin policy", "同源")}}请求发送来源地址，而跨源请求则不包含来源地址信息。
    - `strict-origin`：仅在协议安全级别保持不变（HTTPS→HTTPS）的情况下将文档的来源作为来源地址发送。而在目标的安全性降低（HTTPS→HTTP）时则不发送来源地址。
    - `strict-origin-when-cross-origin`（默认值）：执行同源请求时发送完整的 URL，且仅在协议安全级别保持不变（HTTPS→HTTPS）时发送来源（origin），在目标安全性降低（HTTPS→HTTP）时则不发送来源。
    - `unsafe-url`：来源地址包括来源（origin）*和*路径（path）（但不包括[片段](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)、[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)或[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**这个值是不安全的**，因为它将来源和路径从受 TLS 保护的资源泄露到不安全的来源。

- `sizes`

  - : 表示资源大小的、以逗号隔开的一个或多个字符串。每一个资源大小包括：

    1. 一个[媒体条件](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#语法)。最后一项一定是被忽略的。
    2. 一个资源大小的值。

    媒体条件描述*视口*的属性，而不是*图像*的属性。例如，如果*视口*不高于 500px，则建议使用 1000px 宽的资源：`(max-height: 500px) 1000px`。

    资源尺寸的值被用来指定图像的预期尺寸。当 `srcset` 中的资源使用了宽度描述符 `w` 时，{{glossary("User agent", "用户代理")}}会使用当前图像大小来选择 `srcset` 中合适的一个图像 URL。被选中的尺寸影响图像的{{glossary("intrinsic size", "显示大小")}}（如果没有影响大小的 {{glossary("CSS")}} 样式被应用的话）。如果没有设置 `srcset` 属性，或者没有属性值，那么 `sizes` 属性也将不起作用。

- `src`
  - : 图像的 {{glossary("URL")}}，这个属性对 `<img>` 元素来说是必需的。在支持 `srcset` 的{{glossary("Browser", "浏览器")}}中，`src` 被当做拥有一个像素密度的描述符 `1x` 的候选图像处理，除非一个图像拥有这个像素密度描述符已经被在 `srcset` 或者 `srcset` 包含 `w` 描述符中定义了。
- `srcset`

  - : 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。每一个字符串由以下组成：

    1. 指向图像的 {{glossary("URL")}}。
    2. 可选地，再加一个空格之后，附加以下的其一：

       - 一个宽度描述符（一个正整数，后面紧跟 `w` 符号）。该整数宽度除以 `sizes` 属性给出的资源（source）大小来计算得到有效的像素密度，即换算成和 x 描述符等价的值。
       - 一个像素密度描述符（一个正浮点数，后面紧跟 `x` 符号）。

    如果没有指定源描述符，那它会被指定为默认的 `1x`。

    在相同的 `srcset` 属性中混合使用宽度描述符和像素密度描述符时，会导致该值无效。重复的描述符（比如，两个源在相同的 `srcset` 两个源都是 `2x`）也是无效的。

    用户代理自行决定选择任何可用的来源。这位它们提供了一个很大的选择余地，可以根据用户偏好或{{glossary("bandwidth", "带宽")}}条件等因素来进行选择。有关示例，可以参阅[响应式图像](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)教程。

- `width`
  - : 图像的宽度，以像素为单位。必须是没有单位的整数。
- `usemap`

  - : 与元素相关联的[图像映射（image map）](/zh-CN/docs/HTML/Element/map)的部分 URL（以 `#` 开始的部分）。

    > **备注：** 如果 `<img>` 元素是 {{htmlelement("a")}} 或 {{HTMLElement("button")}} 元素的后代元素则不能使用这个属性。

### 已废弃的属性

- `align` {{Deprecated_Inline}}

  - : 图像相对于它周围上下文的对齐。使用 {{cssxref('float')}} 和/或 {{cssxref('vertical-align')}} 这两个 {{glossary("CSS")}} 属性作为代替。允许的值：

    - `top`
      - : 等价于 `vertical-align: top` 或 `vertical-align: text-top`
    - `middle`
      - : 等价于 `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : 默认值，等价于 `vertical-align: unset` 或 `vertical-align: initial`
    - `left`
      - : 等价于 `float: left`
    - `right`
      - : 等价于 `float: right`

- `border` {{Deprecated_Inline}}
  - : 图像周围的边框宽度。使用 {{glossary("CSS")}} 属性 {{cssxref('border')}} 代替此废弃属性。
- `hspace` {{Deprecated_Inline}}
  - : 插入到图像的左侧和右侧的空白像素的值。使用 CSS 属性 {{cssxref('margin')}} 代替此废弃属性。
- `longdesc` {{Deprecated_Inline}}

  - : 一个指向更详细的图像描述的链接。可能的值是一个 {{glossary("URL")}} 或一个页面上其他元素的 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id)。

    > **备注：** 此属性在当前最新的 {{glossary("W3C")}} 版本——[HTML 5.2](https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc) 中被提到，但在 {{glossary("WHATWG")}} 组织的 [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) 中依然处于被移除的状态。它的未来尚无定数；开发者应使用 {{glossary("WAI")}}-{{glossary("ARIA")}} 这一代替方法，例如：[`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) 或 [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details)。

- `name` {{Deprecated_Inline}}
  - : 元素的名字。使用 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 属性代替此废弃属性。
- `vspace` {{Deprecated_Inline}}
  - : 插入到图像的上方和下方的空白像素的数组。使用 CSS 属性 {{cssxref('margin')}} 代替此废弃属性。

## 使用 CSS 添加样式

`<img>` 是一个[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)。它的 {{cssxref("display")}} 属性的默认值是 `inline`，但是它的默认分辨率是由被嵌入的图片的原始宽高来确定的，使得它就像 `inline-block` 一样。你可以为 `<img>` 设置 {{cssxref("border")}}/{{cssxref("border-radius")}}、{{cssxref("padding")}}/{{cssxref("margin")}}、{{cssxref("width")}}、{{cssxref("height")}} 等 CSS 属性。

`<img>` 没有基线（baseline），这意味着，当在一个内联格式化上下文（inline formatting context）中使用 {{cssxref("vertical-align")}}`: baseline` 时，图像的底部将会与容器的文字基线对齐。

你可以使用 {{cssxref("object-position")}} 属性将图形定位在元素的框内，并使用 {{cssxref("object-fit")}} 属性调整框内图像的大小（例如，如果图像需要裁剪，则其是否需要调整以符合框的大小，或填满整个框）。

根据图像的类型，其可能会有一个原始的宽和高（原始分辨率）。对于一些类型的图像，原始分辨率并不是必要的。比如说，{{glossary("SVG")}} 图像，如果它们的根 {{SVGElement("svg")}} 元素没有 `width` 或 `height` 属性，SVG 图像就可以没有原始分辨率。

## 示例

### 备用文字

下面的示例将图像嵌入到页面中，且包含用于改善无障碍的备用文本。

```html
<img src="favicon144.png" alt="MDN logo" />
```

{{ EmbedLiveSample('备用文字', '100%', '160') }}

### 图像链接

此示例建立在前一个示例的基础上，展示了如何将图像转换为链接。为做到这一点，将 `<img>` 标签嵌套在 {{HTMLElement("a")}} 之内。这时，备用文本应当描述链接所指向的资源，就像是文本链接一样。

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('图像链接', '100%', '160') }}

### 使用 srcset 属性

在这个例子中，我们包含了一个 `srcset` 属性，它引用了 MDN 标志高清版本；在高分辨率设备上，它将被优先加载，取代 `src` 属性中的图像。在支持 `srcset` 的{{glossary("User agent", "用户代理")}}中，`src` 属性中的图片被作为 `1x` 候选项。

```html
<img src="favicon72.png" alt="MDN logo" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("使用 srcset 属性", "100%", "160")}}

### 使用 srcset 和 sizes 属性

在支持 `srcset` 的用户代理中，当使用 `w` 描述符时，`src` 属性会被忽略。当匹配了媒体条件 `(max-width: 600px)` 时，将加载 200 像素宽的图像（最匹配的图像），否则将加载另一幅图像。

```html
<img
  src="clock-demo-200px.png"
  alt="Clock"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("使用 srcset 和 sizes 属性", "100%", 350)}}

> **备注：** 若要看到大小调整的效果，请{{LiveSampleLink('使用 srcset 和 sizes 属性', '打开单独的页面查看示例')}}，以便拖动窗口，调整内容区域的大小。

## 安全与隐私方面的考量

虽然 `<img>` 元素的用途是很单纯（innocent）的，但是它们可对用户安全和隐私造成不良的后果。参见 [Referer 标头：隐私与安全性考量](/zh-CN/docs/Web/Security/Referer_header:_privacy_and_security_concerns)以获取更多信息和缓解措施。

## 无障碍考量

### 使用有实际意义的备用描述

`alt` 属性的值应该清晰、简洁地描述图像的内容。它不应该描述“图像的存在”，或仅仅包含图像的文件名。如果因为图像没有等价的文本描述，`alt` 属性只得不写或留白，那么可以考虑使用其他方法来呈现图像试图传递的内容。

#### 不要

```html example-bad
<img alt="图片" src="penguin.jpg" />
```

#### 而是

```html example-good
<img alt="一只站在沙滩上的跳岩企鹅。" src="penguin.jpg" />
```

当图像上没有 `alt` 属性时，一些屏幕阅读器可能会读出图像的文件名。如果文件名不能代表图像的内容，甚至是一团乱码，这可只能造成令人迷惑的体验。

- [alt 决策树 • 图像 • WAI Web 无障碍教程](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [备用文本：终极指南——Axess Lab](https://axesslab.com/alt-texts/)
- [如何设计出色的替代文本：教程 | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN 理解 WCAG——指南 1.1 解析](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [了解成功的标准 1.1.1 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### 将 SVG 识别为图像

由于 [VoiceOver bug](https://bugs.webkit.org/show_bug.cgi?id=216364)，VoiceOver 无法正确地将 SVG 图像渲染为图像。在所有使用 SVG 资源文件的 `<img>` 元素中包含 [`role="img"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/img_role) 以保证无障碍技术正确地将 SVG 声明为图像内容。

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```

### title 属性

[`title`](/zh-CN/docs/Web/HTML/Global_attributes#title) 属性不是 `alt` 属性可接受的替代品。并且，避免将 `alt` 属性的值直接复制到同一幅图片的`title` 属性上。这样可能会让一些屏幕阅读器把同一段描述读两遍，造成一定程度上的困扰。

`title` 属性也不该被用作一幅图片在 `alt` 之外的补充说明信息。如果一幅图片需要小标题，使用 [`figure`](/zh-CN/docs/Web/HTML/Element/figure) 或 [`figcaption`](/zh-CN/docs/Web/HTML/Element/figcaption) 元素。

`title` 元素的值一般作为提示条（tooltip）呈现给用户，在光标于图片上停下后显示出来。尽管这*确实*能给用户提供更多的信息，您不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，选择上面提供的一种方法将其内联显示，而不是使用 `title`。

- [使用 HTML title 属性 | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## 技术总结

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容类别</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语内容"
          >短语内容</a
        >、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#嵌入内容"
          >嵌入内容</a
        >、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#可感知内容"
          >可感知内容</a
        >。如果元素有 <code>usemap</code> 属性，则其也是交互式内容的一种。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；其为 {{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>接受嵌入内容的任何元素。</td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <ul>
          <li>
            具有非空 <code>alt</code> 属性或没有
            <code>alt</code> 属性：<code
              ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            具有空 <code>alt</code> 属性：<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <ul>
          <li>
            具有非空 <code>alt</code> 属性：
            <ul>
              <li>
                <code
                  ><a
                    href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/Tab_Role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            具有空 <code>alt</code> 属性、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            没有 <code>alt</code> 属性，或没有允许的角色（<code>role</code>）
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 中的图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [图像文件类型与格式指南](/zh-CN/docs/Web/Media/Formats/Image_types)
- [响应式图像](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- {{HTMLElement("picture")}}、{{HTMLElement("object")}} 和 {{HTMLElement("embed")}} 元素
- 其他与图像相关的 CSS 属性：{{cssxref("object-fit")}}、{{cssxref("object-position")}}、{{cssxref("image-orientation")}}、{{cssxref("image-rendering")}} 和 {{cssxref("image-resolution")}}。
