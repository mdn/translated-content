---
title: <img>：图像嵌入元素
slug: Web/HTML/Element/img
---

{{HTMLRef}}

**HTML `<img>` 元素**将一份图像嵌入文档。

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

上面的例子展示了 `<img>` 元素的用法：

- `src` 属性是**必须的**，它包含了你想嵌入的图片的文件路径。
- `alt` 属性包含一条对图像的文本描述，这不是强制性的，但对无障碍而言，它**难以置信地有用**——屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义。如果由于某种原因无法加载图像，普通浏览器也会在页面上显示`alt` 属性中的备用文本：例如，网络错误、内容被屏蔽或链接过期时。

还有很多其他属性，可以实现各种不同的目的：

- [Referrer](/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)/{{glossary("CORS")}} 控制，保证安全与隐私：详见 {{htmlattrxref("crossorigin", "img")}} 属性和 {{htmlattrxref("referrerpolicy", "img")}} 属性。
- 使用 {{htmlattrxref("width", "img")}}、{{htmlattrxref("height", "img")}} 和 {{htmlattrxref("intrinsicsize", "img")}} 设置 {{glossary("intrinsic size", "原始分辨率")}}：这将设置图像应占用的空间，以确保图像被加载之前页面的布局是稳定的。
- 使用 {{htmlattrxref("sizes", "img")}} 和 {{htmlattrxref("srcset", "img")}} 设置响应式图像（亦可参考 {{htmlelement("picture")}} 元素和我们的[响应式图像](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)教程）。

## 支持的图像格式

HTML 标准并没有给出需要支持的图像格式的列表，因此每个{{glossary("user agent", "用户代理")}}支持一组不同的格式。MDN 另有一份完整的[网页浏览器图像格式指南](/zh-CN/docs/Web/Media/Formats/Image_types)可供参考。

{{page("/zh-CN/docs/Web/Media/Formats/Image_types", "table-of-image-file-types")}}

## 图像加载错误

如果在加载或渲染图像时发生错误，且设置了至少一个 {{htmlattrxref("onerror")}} 事件处理器来处理 {{event("error")}} 事件，那么设置的事件处理器就会被调用。这样的错误可能发生在各种不同的情况下，包括：

- `src` 属性的属性值为空（`""`）或者 `null`。
- `src` 属性的 {{glossary("URL")}} 和用户正在浏览的页面的 URL 完全相同。
- 图像出于某些原因损坏了，从而无法加载。
- 图像的元数据被破坏了，无法检索它的分辨率/宽高，而且在 `<img>` 元素的属性中没有指定宽度和/或高度。
- {{glossary("user agent", "用户代理")}}尚未支持该图片所用的格式。

## 属性

此元素支持[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{htmlattrdef("alt")}}
  - : 定义了图像的备用文本描述。

    > **备注：** 浏览器并非总是会显示图像。比如：
    >
    > - 非可视化浏览器（Non-visual browsers）（比如有视力障碍的人使用的音频浏览器）
    > - 用户选择不显示图像（比如为了节省带宽，或出于隐私等考虑不加载包括图片在内的第三方资源文件）
    > - 图像文件无效，或是使用了[不支持的格式](#Supported_image_formats)在这些情况下，浏览器很可能会将图像替换为图像所属 `<img>` 元素的 `alt` 属性所提供的文本。基于上面罗列的原因，以及更多尚未列出的原因，建议尽可能地通过 `alt` 属性提供一些有用的信息。如果省略 `alt` 属性，则表明该图像是内容的关键部分，但没有等效的文本可用。
    >
    > 如果把这个属性设置为空字符串（`alt=""`），则表明该图像*不是*内容的关键部分（这是一种装饰或者一个追踪像素点），非可视化浏览器在{{glossary("Rendering engine", "渲染")}}的时候可能会忽略它。而且，如果图片加载失败，可视化浏览器会隐藏表示图片损坏的图标。将图像复制并粘贴为文本，或是将图像的链接保存为浏览器书签时，也会用到此属性。
- {{htmlattrdef("crossorigin")}}
  - : 这个枚举属性表明是否必须使用 CORS 完成相关图像的抓取。[启用 CORS 的图像](/zh-CN/docs/CORS_Enabled_Image) 可以在 {{HTMLElement("canvas")}} 元素中重复使用，而不会被[污染](/zh-CN/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)（tainted）。允许的值有：
    - `anonymous`
      - : 执行一个跨域请求（比如，有 {{httpheader("Origin")}} {{glossary("HTTP")}} header）。但是没有发送证书（比如，没有 cookie，没有 [X.509 证书](https://tools.ietf.org/html/rfc5280)，没有 [HTTP 基本授权认证](/zh-CN/docs/Web/HTTP/Authentication#Basic_authentication_scheme)）。如果服务器没有把证书给到源站（没有设置 {{httpheader("Access-Control-Allow-Origin")}} HTTP 头），图像会被污染，而且它的使用会被限制。
    - `use-credentials`
      - : 一个有证书的跨域请求（比如，有 `Origin` HTTP header）被发送（比如，cookie，一份证书，或者 HTTP 基本验证信息）。如果服务器没有给源站发送证书（通过 `Access-Control-Allow-Credentials` HTTP header），图像将会被污染，且它的使用会受限制。当用户并未显式使用本属性时，默认不使用 CORS 发起请求（例如，不会向服务器发送`原有的`HTTP 头部信息），可防止其在 {{HTMLElement('canvas')}} 中的使用。如果无效，默认当做 `anonymous` 关键字生效。更多信息，请查看 [CORS 属性设置](/zh-CN/docs/Web/HTML/Attributes/crossorigin) 。
- {{htmlattrdef("decoding")}}
  - : 为浏览器提供图像解码方式上的提示。允许的值：
    - `sync`
      - : 同步解码图像，实现与其他内容的显示相互斥的原子显示。此图像的解码将是一个原子操作，在完成解码显示之前，不被其他内容的显示而打断，因此其他内容的显示会被延迟。
    - `async`
      - : 异步解码图像，以减少其他内容的显示延迟。
    - `auto`
      - : 默认值：不指定解码方式，由浏览器决定哪一种对用户来说是最合适的。
- {{htmlattrdef("height")}}
  - : 图像的高度，单位是 CSS 像素。可以只指定 `width` 和 `height` 中的一个值，浏览器会根据原始图像进行缩放。
- {{htmlattrdef("importance")}} {{experimental_inline}}
  - : 指示下载资源时相对重要性，或者说优先级。允许的值：
    - `auto`
      - : **不指定优先级。**浏览器可以使用自己的算法来为图像选择优先级。
    - `high`
      - : 此图像在下载时优先级**较高**。
    - `low`
      - : 此图像在下载时优先级**较低**。
- {{htmlattrdef("intrinsicsize")}} {{deprecated_inline}}
  - : This attribute tells the browser to ignore the actual {{glossary("intrinsic size")}} of the image and pretend it’s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)
- {{htmlattrdef("ismap")}}
  - : 这个布尔属性表示图像是否是[服务器端 map](https://en.wikipedia.org/wiki/Image_map#Server-side) 的一部分。如果是，那么点击图片的精准坐标将会被发送到服务器。

    > **备注：** 只有在 `<img>` 元素是一个拥有有效 {{htmlattrxref("href","a")}} 属性的 {{htmlelement("a")}} 元素的后代元素的情况下，这个属性才会被允许使用。
- {{htmlattrdef("loading")}} {{experimental_inline}}
  - : 指示浏览器应当如何加载该图像。允许的值：
    - `eager`
      - : 立即加载图像，不管它是否在可视视口（visible viewport）之外（默认值）。
    - `lazy`
      - : 延迟加载图像，直到它和视口接近到一个计算得到的距离，由浏览器定义。
- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}
  - : A string indicating which referrer to use when fetching the resource:

    - `no-referrer`: The {{httpheader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade`: No `Referer` header is sent when navigating to an origin without {{glossary("HTTPS")}}. This is the default if no policy is otherwise specified.
    - `origin`: The `Referer` header will include the page's origin ({{glossary("scheme")}}, {{glossary("host")}}, and {{glossary("port")}}).
    - `origin-when-cross-origin`: Navigating to other origins will limit the included referral data to the scheme, host, and port, while navigating from the same origin will include the full path and query string.
    - `unsafe-url`: The `Referer` header will always include the origin, path and query string, but not the fragment, password, or username. **This is unsafe** because it can leak information from TLS-protected resources to insecure origins.
- {{htmlattrdef("sizes")}}
  - : 表示资源大小的、以逗号隔开的一个或多个字符串。每一个资源大小包括：1. 一个[媒体条件](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax)。最后一项一定是被忽略的。2. 一个资源尺寸的值。Media Conditions describe properties of the _viewport_, not of the _image_. For example, `(max-height: 500px) 1000px` proposes to use a source of 1000px width, if the _viewport_ is not higher than 500px.资源尺寸的值被用来指定图像的预期尺寸。当 `srcset` 中的资源使用了宽度描述符 `w` 时，{{glossary("User agent", "用户代理")}}会使用当前图像大小来选择 `srcset` 中合适的一个图像 URL。被选中的尺寸影响图像的{{glossary("intrinsic size", "显示大小")}}（如果没有影响大小的 {{glossary("CSS")}} 样式被应用的话）。如果没有设置 `srcset` 属性，或者没有属性值，那么 `sizes` 属性也将不起作用。
- {{htmlattrdef("src")}}
  - : 图像的 {{glossary("URL")}}，这个属性对 `<img>` 元素来说是必需的。在支持 `srcset` 的浏览器中，`src` 被当做拥有一个像素密度的描述符 `1x` 的候选图像处理，除非一个图像拥有这个像素密度描述符已经被在 `srcset` 或者 `srcset` 包含 `w` 描述符中定义了。
- {{htmlattrdef("srcset")}}

  - : 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。每一个字符串由以下组成：1. 指向图像的 {{glossary("URL")}}。2. 可选地，再加一个空格之后，附加以下的其一：

    - 一个宽度描述符，这是一个正整数，后面紧跟 '`w`' 符号。该整数宽度除以 sizes 属性给出的资源（source）大小来计算得到有效的像素密度，即换算成和 x 描述符等价的值。
    - 一个像素密度描述符，这是一个正浮点数，后面紧跟 '`x`' 符号。如果没有指定源描述符，那它会被指定为默认的 `1x`。在相同的 `srcset` 属性中混合使用宽度描述符和像素密度描述符时，会导致该值无效。重复的描述符（比如，两个源在相同的 `srcset` 两个源都是 `2x`）也是无效的。The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or {{glossary("bandwidth")}} conditions. See our [Responsive images](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example.

- {{htmlattrdef("width")}}
  - : 图像的宽度，在单位是 CSS 像素。
- {{htmlattrdef("usemap")}}
  - : 与元素相关联的 [image map](/zh-CN/docs/HTML/Element/map) 的部分 URL（以 '#' 开始的部分）。

    > **备注：** 如果 `<img>` 元素是 {{htmlelement("a")}} 或 {{HTMLElement("button")}} 元素的后代元素则不能使用这个属性。

### 已废弃的属性

- {{htmlattrdef("align")}} {{Deprecated_Inline}} 使用 {{cssxref('vertical-align')}} CSS 属性
  - : 图像相对于它周围上下文的对齐。使用 {{cssxref('float')}} 和/或 {{cssxref('vertical-align')}} 这两个 {{glossary("CSS")}} 属性作为代替，而不是这个废弃的属性。允许的值：
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
- {{htmlattrdef("border")}} {{Deprecated_Inline}}
  - : 图像周围的边框宽度。使用 {{glossary("CSS")}} 属性 {{cssxref('border')}} 代替此废弃属性。
- {{htmlattrdef("hspace")}} {{Deprecated_Inline}}
  - : 插入到图像的左侧和右侧的空白像素的值。使用 CSS 属性 {{cssxref('margin')}} 代替此废弃属性。
- {{htmlattrdef("longdesc")}} {{Deprecated_Inline}}
  - : 一个指向更详细的图像描述的链接。可能的值是一个 {{glossary("URL")}} 或一个页面上其他元素的 {{htmlattrxref("id")}}。

    > **备注：** 此属性的当前最新的 {{glossary("W3C")}} 版本，[HTML 5.2](https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc) 中被提到，但在 {{glossary("WHATWG")}} 组织的 [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) 中依然处于被移除的状态。它的未来尚无定数；authors should use a {{glossary("WAI")}}-{{glossary("ARIA")}} alternative such as [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) or [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).
- {{htmlattrdef("name")}} {{Deprecated_Inline}}
  - : 元素的名字。使用 {{htmlattrxref("id")}} 属性代替此废弃属性。
- {{htmlattrdef("vspace")}} {{Deprecated_Inline}}
  - : 插入到图像的上方和下方的空白像素的数组。使用 CSS 属性 {{cssxref('margin')}} 代替此废弃属性。

## 使用 CSS 为 `<img>` 附加样式

`<img>` 是一个[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)。它的 {{cssxref("display")}} 属性的默认值是 `inline`，但是它的默认分辨率是由被嵌入的图片的原始宽高来确定的，使得它就像 `inline-block` 一样。你可以为 `<img>` 设置 {{cssxref("border")}}/{{cssxref("border-radius")}}、{{cssxref("padding")}}/{{cssxref("margin")}}、{{cssxref("width")}}、{{cssxref("height")}} 等等的 CSS 属性。

`<img>` 没有基线（baseline），这意味着，当在一个行内格式的上下文（an inline formatting context）中使用 {{cssxref("vertical-align")}}`: baseline` 时，图像的底部将会与容器的文字基线对齐。

You can use the {{cssxref("object-position")}} property to position the image within the element's box, and the {{cssxref("object-fit")}} property to adjust the sizing of the image within the box (for example, whether the image should fit the box or fill it even if clipping is required).

根据图像文件的类型，图像可能会有一个原始分辨率（intrinsic dimension）或者叫原始宽高。对于一些类型的图像，原始分辨率并不是必要的。比如说，{{glossary("SVG")}} 图像，如果它们的根 {{SVGElement("svg")}} 元素没有 `width` 或 `height` 属性，SVG 图像就可以没有原始分辨率。

> **备注：** 原始分辨率/原始宽高是图像的固有属性，基本上就是图像本身的分辨率/宽高。只与图像本身有关，与 `<img>` 元素的属性、显示分辨率等等无关。点阵图像通常有且只有一个随图片宽高变化的原始分辨率，而矢量图像可以没有。不过，编辑矢量图像时，通常可以手动/编辑器自动为其设置原始分辨率。

## 示例

### 备用文字

下面的示例将图像嵌入到页面中，且包含用于改善无障碍的备用文本。

```html
<img src="favicon144.png"
     alt="MDN logo">
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### 图像链接

此示例建立在前一个示例的基础上，展示了如何将图像转换为链接。为做到这一点，将 `<img>` 标签嵌套在 {{HTMLElement("a")}} 之内。这时，备用文本应当描述链接所指向的资源，就像是文本链接一样。

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png"
       alt="Visit the MDN site">
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### 使用 `srcset` 属性

在这个例子中，我们包含了一个 `srcset` 属性，它引用了 MDN 标志高清版本；在高分辨率设备上，它将被优先加载，取代 `src` 属性中的图像。在支持 `srcset` 的{{glossary("User agent", "用户代理")}}中，`src` 属性中的图片被作为 `1x` 候选项。

```html
 <img src="favicon72.png"
      alt="MDN logo"
      srcset="favicon144.png 2x">
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### 使用 `srcset` 和 `sizes` 属性

在支持 `srcset` 的用户代理中，当使用 `w` 描述符时，src 属性会被忽略。当匹配了媒体条件 `(max-width: 600px)` 时，图像将宽 200px，否则宽 50vw（视图宽度的 50%）。

```html
 <img src="clock-demo-200px.png"
      alt="Clock"
      srcset="clock-demo-200px.png 200w,
          clock-demo-400px.png 400w"
      sizes="(max-width: 600px) 200px, 50vw">
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> **备注：** 若要看到大小调整的效果，请{{LiveSampleLink('Using_the_srcset_and_sizes_attributes', '打开单独的页面查看示例')}}，以便拖动窗口，调整内容区域的大小。

## 安全与隐私方面的考量

虽然 `<img>` 元素的用途是很单纯（原文：innocent）的，但是它们可对用户安全和隐私造成不良的后果。See [Referer header: privacy and security concerns](/zh-CN/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for more information and mitigations.

## 无障碍考量

### 使用有实际意义的备用描述

`alt` 属性的值应该清晰、简洁地描述图像的内容。它不应该描述“图像的存在”，或仅仅包含图像的文件名。如果因为图像没有等价的文本描述， `alt` 属性只得不写或留白，那么可以考虑使用其他方法来呈现图像试图传递的内容。

#### 不要

```html example-bad
<img alt="图片" src="penguin.jpg">
```

#### 而是

```html example-good
<img alt="一只站在沙滩上的跳岩企鹅。" src="penguin.jpg">
```

当图像上没有 `alt` 属性时，一些屏幕阅读器可能会读出图像的文件名。如果文件名不能代表图像的内容，甚至是一团乱码，这可只能造成令人迷惑的体验。

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### `title` 属性

{{htmlattrxref("title")}} 属性不是 `alt` 属性可接受的替代品。并且，避免将 `alt` 属性的值直接复制到同一幅图片的`title` 属性上。这样可能会让一些屏幕阅读器把同一段描述读两遍，造成一定程度上的困扰。

`title` 属性也不该被用作一幅图片在 `alt` 之外的补充说明信息。如果一幅图片需要小标题，使用 [`figure`](/zh-CN/docs/Web/HTML/Element/figure) 或 [`figcaption`](/zh-CN/docs/Web/HTML/Element/figcaption) 元素。

`title` 元素的值一般作为提示条 (tooltip) 呈现给用户，在光标于图片上停下后显示出来。尽管这*确实*能给用户提供更多的信息，您不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，选择上面提供的一种方法将其内联显示，而不是使用 `title` 。

- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)

## 技术信息

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">内容类别</a></th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">流式内容</a>、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">短语内容</a>、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Embedded_content">嵌入内容</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Palpable_content">palpable content</a>. If the element has a <code>usemap</code> attribute, it also is a part of the interactive content category.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>无，它是一个 {{Glossary("empty element", "空元素")}}。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>必须有开始标签，不可有结束标签。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>接受嵌入内容的任意元素。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
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

## 另见

- [HTML 中的图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [图像文件类型与格式指南](/zh-CN/docs/Web/Media/Formats/Image_types)
- [响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- {{HTMLElement("picture")}}、{{HTMLElement("object")}} 和 {{HTMLElement("embed")}} 元素
- 其他与图像相关的 CSS 属性：{{cssxref("object-fit")}}、{{cssxref("object-position")}}、{{cssxref("image-orientation")}}、{{cssxref("image-rendering")}}，和 {{cssxref("image-resolution")}}。
