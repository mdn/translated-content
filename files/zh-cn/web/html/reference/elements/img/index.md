---
title: <img>：图像嵌入元素
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**`<img>`** [HTML](/zh-CN/docs/Web/HTML) 元素将一张图像嵌入文档。

{{InteractiveExample("HTML 演示：&lt;img&gt;", "tabbed-standard")}}

```html interactive-example
<img
  class="fit-picture"
  src="/shared-assets/images/examples/grapefruit-slice.jpg"
  alt="葡萄柚切片置于其他切片堆上" />
```

```css interactive-example
.fit-picture {
  width: 250px;
}
```

上面的例子展示了 `<img>` 元素的用法：

- `src` 属性用于指定要嵌入的图像路径。若存在 [srcset](/zh-CN/docs/Web/API/HTMLImageElement/srcset) 属性，则该属性非必需。但必须至少提供 `src` 或 `srcset` 其中一个属性。
- `alt` 属性用于存储图片的替代文本，该属性是强制要求的，且对无障碍访问具有**极其重要的作用**——屏幕阅读器会向用户朗读该属性值，使其理解图片所传达的信息。当图片因网络错误、内容屏蔽或链接失效等原因无法加载时，替代文本也会在页面上显示。

还有很多其他属性，可以实现各种不同的目的：

- [Referrer](/zh-CN/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{glossary("CORS")}} 控制，保证安全与隐私：详见 [`crossorigin`](#crossorigin) 和 [`referrerpolicy`](#referrerpolicy) 属性。
- 同时使用 [`width`](#width) 和 [`height`](#height) 设置图像的固有尺寸，使其在加载前就占据空间，从而减轻内容布局偏移的影响。
- 使用 [`sizes`](#sizes) 和 [`srcset`](#srcset) 设置响应式图像（参见 {{htmlelement("picture")}} 元素和我们的[响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images)教程）。

## 支持的图像格式

HTML 标准并没有给出需要支持的图像格式的列表，因此每个{{glossary("user agent", "用户代理")}}支持一组不同的格式。

> [!NOTE]
> [图像文件类型与格式指南](/zh-CN/docs/Web/Media/Guides/Formats/Image_types)提供了有关图像格式及 web 浏览器支持的综合信息。本节只是一个总结！

Web 最常用的图像格式是：

- [APNG（动态可移植网络图形）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#apng（动态可移植网络图形）)——无损动画序列的不错选择（GIF 性能较差）。
- [AVIF（AV1 图像文件格式）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#avif_图像)——静态图像或动态图像的不错选择，其性能较好。
- [GIF（图像互换格式）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#gif（图像互换格式）)——*简单*图像和动画的不错选择。
- [JPEG（联合图像专家小组图像）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#jpeg（联合图像专家小组图像）)——有损压缩静态图像的不错选择（目前最流行的格式）。
- [PNG（便携式网络图形）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#png（便携式网络图形）)——对于无损压缩静态图像而言是不错的选择（质量略好于 JPEG）。
- [SVG（可缩放矢量图形）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#svg（可缩放矢量图形）)——矢量图像格式。用于必须以不同尺寸准确描绘的图像。
- [WebP（网络图片格式）](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#webp_图像)——静态图像和动态图像的绝佳选择。

推荐使用诸如 [WebP](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#webp_图像) 和 [AVIF](/zh-CN/docs/Web/Media/Guides/Formats/Image_types#avif_图像) 等图像格式，因为它们在静态图像和动态图像的性能均比 PNG、JPEG、GIF 好得多。

对于必须以不同尺寸准确绘制的图像，则仍然推荐使用 SVG 格式。

## 图像加载错误

如果在加载或渲染图像时发生错误，且设置了至少一个 `onerror` 事件处理器来处理 {{domxref("Element/error_event", "error")}} 事件，那么设置的事件处理器就会被调用。这样的错误可能发生在各种不同的情况下，包括：

- `src` 属性的属性值为空（`""`）或者 `null`。
- `src` 属性的 {{glossary("URL")}} 和用户正在浏览的页面的 URL 完全相同。
- 图像出于某些原因损坏了，从而无法加载。
- 图像的元数据被破坏了，无法检索它的分辨率/宽高，而且在 `<img>` 元素的属性中没有指定宽度/高度。
- {{glossary("user agent", "用户代理")}}尚未支持该图片所用的格式。

## 属性

此元素支持[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `alt`
  - : 定义了图像的备用文本描述。

    > [!NOTE]
    > 浏览器并非总是会显示图像。比如：
    >
    > - 非可视化浏览器（Non-visual browsers）（比如有视力障碍的人使用的音频浏览器）
    > - 用户选择不显示图像（比如为了节省带宽，或出于隐私考虑）
    > - 图像文件无效，或是使用了[不支持的格式](#支持的图像格式)
    >
    > 在这些情况下，浏览器很可能会将图像替换为图像所属 `<img>` 元素的 `alt` 属性所提供的文本。基于上面罗列的原因，建议尽可能地通过 `alt` 属性提供一些有用的信息。

    如果把这个属性设置为空字符串（`alt=""`），则表明该图像*不是*内容的关键部分（这是一种装饰或者一个追踪像素点），非可视化浏览器在{{glossary("Rendering engine", "渲染")}}的时候可能会忽略它。而且，如果图片加载失败，可视化浏览器会隐藏表示图片损坏的图标。

    将图像复制并粘贴为文本，或是将图像的链接保存为浏览器书签时，也会用到此属性。

- `attributionsrc` {{experimental_inline}}
  - : 指定浏览器在发送图片请求时需附加 {{httpheader("Attribution-Reporting-Eligible")}} 标头。

    在服务器端，此功能用于触发响应中发送 {{httpheader("Attribution-Reporting-Register-Source")}} 或 {{httpheader("Attribution-Reporting-Register-Trigger")}} 标头，以注册基于图像的[归因来源](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_sources#基于_html_的归因触发器)或[归因触发器](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_triggers#基于_javascript_的归因触发器)。应返回哪个响应头取决于触发注册的 `Attribution-Reporting-Eligible` 标头的值。

    当浏览器接收到包含图像文件的响应后，相应的源事件或触发事件即被触发。

    > [!NOTE]
    > 有关详细信息，请参见[归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API)。

    此属性有两种版本可供设置：
    - 布尔值，即仅指定 `attributionsrc` 名称。这表示希望将 {{httpheader("Attribution-Reporting-Eligible")}} 标头发送至与 `src` 属性指向的相同服务器。当在同一服务器上处理归因来源或触发器注册时，此设置即可满足需求。注册归因触发器时该属性为可选项，若未指定则默认使用布尔值。
    - 包含一个或多个 URL 的值，例如：

    ```html
    <img
      src="image-file.png"
      alt="我的图像文件描述"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    当请求的资源不在你控制的服务器上，或者希望在其他服务器上处理归因来源的注册时，此特性非常有用。此时，可在 `attributionsrc` 字段中指定一个或多个 URL 地址。当资源请求发生时，系统将向 `attributionSrc` 中指定的 URL（除资源源地址外）发送 {{httpheader("Attribution-Reporting-Eligible")}} 请求标头。这些 URL 可通过返回 {{httpheader("Attribution-Reporting-Register-Source")}} 或 {{httpheader("Attribution-Reporting-Register-Trigger")}} 响应标头完成注册流程。

    > [!NOTE]
    > 指定多个 URL 意味着可以在同一功能上注册多个归因来源。例如，可能需要评估不同营销活动的成效，这涉及基于不同数据生成不同的报告。

- [`crossorigin`](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : 这个枚举属性表明是否必须使用 {{glossary("CORS")}} 请求完成相关图像的抓取。[启用 CORS 的图像](/zh-CN/docs/Web/HTML/How_to/CORS_enabled_image)可以在 {{HTMLElement("canvas")}} 元素中重复使用，而不会被标记为“[污染](/zh-CN/docs/Web/HTML/How_to/CORS_enabled_image#安全性和“被污染”的_canvas)”。

    如果*未指定* `crossorigin` 属性，则会发送不启用 CORS 的请求（不会携带 {{httpheader("Origin")}} 请求标头），且浏览器会将图像标记为“被污染”并拒绝对图像数据的访问，阻止其在 {{HTMLElement("canvas")}} 元素中的使用。

    如果*指定*了 `crossorigin` 属性，则会发送启用 CORS 的请求（会携带 {{httpheader("Origin")}} 请求标头）；但是如果服务器不选择允许源站点对图像数据进行跨源访问（不发送任何 {{httpheader("Access-Control-Allow-Origin")}} 响应标头，或发送的 {{httpheader("Access-Control-Allow-Origin")}} 标头中不包含源站点），浏览器则会阻止图像的加载，并在开发者工具的控制台中记录 CORS 错误。

    允许的值为：
    - `anonymous`
      - : 发送忽略凭据的跨源请求（即，不携带 {{glossary("cookie")}}、[X.509 证书](https://datatracker.ietf.org/doc/html/rfc5280)或 {{httpheader("Authorization")}} 请求标头）。
    - `use-credentials`
      - : 发送携带凭据的跨源请求（比如 cookie、X.509 证书和 `Authorization` 请求标头）。如果服务器不选择与源站共享凭据（通过返回 `Access-Control-Allow-Credentials: true` 响应标头），则浏览器会将图像标记为被污染且限制对其图像数据的访问。

    如果属性是无效值，浏览器默认将其当做 `anonymous` 关键字。更多信息，请查看 [CORS 属性设置](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)。

- `decoding`
  - : 此属性向浏览器提供提示，指示其应在单次渲染步骤中同时执行图像解码与渲染其他 DOM 内容（`sync`），使呈现效果更“正确”；还是先渲染并呈现其他 DOM 内容，随后再解码图像并延迟呈现（`async`）。实际应用中，`async` 意味着后续绘制操作不会等待图像解码完成。

    在对静态 `<img>` 元素使用 `decoding` 时，通常难以察觉明显效果。这些元素在加载图像文件（无论是从网络还是缓存获取）期间，最初往往会渲染为空白图像，随后仍会独立处理，因此内容更新的“同步性”并不显著。然而，解码期间渲染过程的阻塞现象虽通常微乎其微，但确实存在可测量的延迟——即便肉眼难以察觉。详见[图像解码属性实际作用解析](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/)（tunetheweb.com, 2023）。

    使用不同的 `decoding` 类型，在通过 JavaScript 动态向 DOM 插入 `<img>` 元素时可能导致更明显的差异——更多细节请参阅 {{domxref("HTMLImageElement.decoding")}}。

    允许的值为：
    - `sync`
      - : 在渲染其他 DOM 内容的同时同步解码图像，并将所有内容一并呈现。
    - `async`
      - : 在渲染并呈现其他 DOM 内容之后，异步解码图像。
    - `auto`
      - : 不指定解码模式；由浏览器根据用户需求自动选择最佳方案。此为默认值。

- [`elementtiming`](/zh-CN/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : 标记图像以便通过 {{domxref("PerformanceElementTiming")}} API 进行观察。所给值将成为被观察图像元素的标识符。参见 [`elementtiming`](/zh-CN/docs/Web/HTML/Reference/Attributes/elementtiming) 属性页面。

- `fetchpriority`
  - : 提供获取图像时要使用的相对的优先级提示。允许的值：
    - `high`
      - : 表示其获取优先级相对其他图像要高。
    - `low`
      - : 表示其获取优先级相对其他图像要低。
    - `auto`
      - : 获取优先级无偏好设置。此为默认设置。当未设置值或设置了无效值时将使用此设置。

    参见 {{domxref("HTMLImageElement.fetchPriority")}} 以了解更多信息。

- `height`
  - : 图像的固有高度，以像素为单位。必须是没有单位的整数值。

    > [!NOTE]
    > 包含 `height` 和 [`width`](#width) 属性可使浏览器在图像加载前计算其{{glossary("aspect ratio", "纵横比")}}。该宽高比用于预留图像显示所需空间，从而减少甚至避免图像下载渲染至屏幕时的布局偏移。降低布局偏移是提升用户体验和 web 性能的关键要素。

- `ismap`
  - : 这个布尔属性表示图像是否是[服务器端图像映射](https://en.wikipedia.org/wiki/Image_map#Server-side)的一部分。如果是，那么点击图片的精准坐标将会被发送到服务器。

    > [!NOTE]
    > 只有在 `<img>` 元素是一个拥有有效 [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/a#href) 属性的 {{htmlelement("a")}} 元素的后代元素的情况下，这个属性才会被允许使用。这为没有指针设备的用户提供了一个备用目标。

- `loading`
  - : 指示浏览器应当如何加载该图像。允许的值：
    - `eager`
      - : 立即加载图像，不管它是否在可视视口之外（此为默认值）。
    - `lazy`
      - : 延迟加载图像，直到它和视口接近到一个计算得到的距离（由浏览器定义）。目的是在需要图像之前，避免加载图像所需要的网络和存储带宽。这通常会提高大多数典型用场景中内容的性能。

    > [!NOTE]
    > 仅在启用 JavaScript 时才会延迟加载。这是一种反跟踪的措施，因为，如果用户代理在禁用脚本的情况下支持延迟加载，网站可以在会话中策略性地放置图像，通过服务器跟踪请求了多少图像以及请求在何时发起，来跟踪用户在整个会话期间的大致滚动位置。

    > [!NOTE]
    > 当图像的 `loading` 属性设置为 `lazy` 时，若其未与元素的可见区域发生交集，则永远不会被加载——即使加载后会改变该状态，因为未加载的图像其 `width` 和 `height` 属性值均为 `0`。为延迟加载的图片设置 `width` 和 `height` 可解决此问题，这也是规范推荐的最佳实践，[参见规范说明](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)。此操作同时有助于防止布局偏移。

- `referrerpolicy`
  - : 一个字符串，指示在获取资源时使用的来源地址（referrer）：
    - `no-referrer`：不会发送 {{httpheader("Referer")}} 标头。
    - `no-referrer-when-downgrade`：若未使用 {{Glossary("TLS")}}（{{glossary("HTTPS")}}）导航到{{Glossary("origin", "源站")}}，则不发送 `Referer` 标头。
    - `origin`：发送到源站的源地址将被限制为：[协议](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "主机")}}和{{Glossary("port", "端口")}}。
    - `origin-when-cross-origin`：发送到其他源的源地址会被限制为协议、主机和端口。同源导航仍将包含路径。
    - `same-origin`：仅{{Glossary("Same-origin policy", "同源")}}请求发送源地址，而跨源请求则不包含源地址信息。
    - `strict-origin`：仅在协议安全级别保持不变（HTTPS→HTTPS）的情况下将文档的来源作为源地址发送。而在目标的安全性降低（HTTPS→HTTP）时则不发送源地址。
    - `strict-origin-when-cross-origin`（默认值）：执行同源请求时发送完整的 URL，且仅在协议安全级别保持不变（HTTPS→HTTPS）时发送源，在目标安全性降低（HTTPS→HTTP）时则不发送标头。
    - `unsafe-url`：来源地址包括来源（origin）*和*路径（path）（但不包括[片段](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)、[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)和[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**这个值是不安全的**，因为它将源和路径从受 TLS 保护的资源泄露到不安全的源。

- `sizes`
  - : 一个或多个用逗号分隔的值，可以是资源尺寸或 `auto` 关键字。

    每一个**资源尺寸**包括：
    1. 一个[媒体条件](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using#语法)。列表中的最后一项省略该条件。
    2. 一个资源尺寸的值。

    媒体条件描述的是*视口*的属性，而非*图像*本身。例如，`(height <= 500px) 1000px` 表示当*视口*高度小于等于 500 像素时，应使用宽度为 1000 像素的图像源。由于源尺寸描述符指定了布局过程中图像应采用的宽度，媒体条件通常（但非必然）基于[宽度](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/width)属性。

    资源尺寸的值被用来指定图像的预期尺寸。当 `srcset` 中的资源使用了宽度描述符 `w` 时，{{glossary("User agent", "用户代理")}}会使用当前图像大小来选择 `srcset` 中合适的一个图像 URL。被选中的尺寸影响图像的{{glossary("intrinsic size", "固有尺寸")}}（如果没有影响大小的 {{glossary("CSS")}} 样式被应用）。如果没有设置 `srcset` 属性，或者没有属性值，那么 `sizes` 属性也将不起作用。

    资源尺寸值可以是任何非负的[长度](/zh-CN/docs/Web/CSS/Reference/Values/length)。它不得使用除[数学函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions#数学函数)之外的 CSS 函数。单位的解释方式与[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)相同，即所有相对长度单位均相对于文档根元素而非 `<img>` 元素。例如，`em` 值相对于根字体大小而非图像的字体大小。[百分比](/zh-CN/docs/Web/CSS/Reference/Values/percentage)值不被允许。

    `auto` 关键字可替代整个尺寸列表或列表中的首个条目。该关键字仅在与 `loading="lazy"` 组合使用时有效，并将解析为图像的[具体尺寸](/zh-CN/docs/Web/CSS/Reference/Values/image)。由于图像的固有尺寸尚未确定，应同时指定 `width` 和 `height` 属性（或 CSS 等效属性），以防止浏览器默认采用 300px 宽度。

    为提升与不支持 `auto` 的浏览器的向后兼容性，可在 `sizes` 属性中 `auto` 之后添加后备尺寸：

    ```html
    <img
      loading="lazy"
      width="200"
      height="200"
      sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
      srcset="
        swing-200.jpg   200w,
        swing-400.jpg   400w,
        swing-800.jpg   800w,
        swing-1600.jpg 1600w
      "
      src="swing-400.jpg"
      alt="壶铃摆动" />
    ```

- `src`
  - : 图像的 {{glossary("URL")}}，这个属性对 `<img>` 元素来说是必需的。在支持 `srcset` 的{{glossary("Browser", "浏览器")}}中，`src` 被当做拥有一个像素密度的描述符 `1x` 的候选图像处理，除非 `srcset` 中已定义具有此像素密度描述符的图像，或 `srcset` 包含 `w` 描述符。
- `srcset`
  - : 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。每一个字符串由以下组成：
    1. 指向图像的 {{glossary("URL")}}。
    2. 可选地，再加一个空格之后，附加以下的其一：
       - 一个宽度描述符（一个正整数，后面紧跟 `w` 符号）。该整数宽度除以 `sizes` 属性给出的源尺寸来计算得到有效的像素密度，即换算成和 x 描述符等价的值。
       - 一个像素密度描述符（一个正浮点数，后面紧跟 `x` 符号）。

    如果没有指定描述符，那源会被指定为默认的 `1x` 描述符。

    在相同的 `srcset` 属性中混合使用宽度描述符和像素密度描述符时，会导致该值无效。重复的描述符（比如，两个源在相同的 `srcset` 两个源都是 `2x`）也是无效的。

    如果 `srcset` 属性使用宽度描述符，则必须同时包含 `sizes` 属性，否则 `srcset` 本身将被忽略。

    用户代理可自行选择任何可用资源。这为其提供了相当大的灵活性，使其能够根据用户偏好或{{glossary("bandwidth", "带宽")}}等条件调整选择。具体示例请参阅我们的[响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images)教程。

- `width`
  - : 图像的固有宽度，以像素为单位。必须是没有单位的整数。
- `usemap`
  - : 与元素相关联的[图像映射](/zh-CN/docs/Web/HTML/Reference/Elements/map)的部分 {{glossary("URL")}}（以 `#` 开始的部分）。

    > [!NOTE]
    > 如果 `<img>` 元素是 {{htmlelement("a")}} 或 {{HTMLElement("button")}} 元素的后代元素，则不能使用这个属性。

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
  - : 一个指向更详细的图像描述的链接。可能的值是一个 {{glossary("URL")}} 或一个页面上其他元素的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#id)。

    > [!NOTE]
    > 此属性在当前最新的 {{glossary("W3C")}} 版本——[HTML 5.2](https://www.w3.org/TR/html52/obsolete.html#element-attrdef-img-longdesc) 中被提到，但在 {{glossary("WHATWG")}} 组织的 [HTML 动态标准](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)中依然处于被移除的状态。它的未来尚无定数；开发者应使用 {{glossary("WAI")}}-{{glossary("ARIA")}} 这一代替方法，例如：[`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) 或 [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details)。

- `name` {{Deprecated_Inline}}
  - : 元素的名字。使用 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#id) 属性代替此废弃属性。
- `vspace` {{Deprecated_Inline}}
  - : 插入到图像的上方和下方的空白像素的数组。使用 CSS 属性 {{cssxref('margin')}} 代替此废弃属性。

## 使用 CSS 添加样式

`<img>` 是一个{{glossary("Replaced elements", "可替换元素")}}。它的 {{cssxref("display")}} 属性的默认值是 `inline`，但是它的默认分辨率是由被嵌入的图片的原始宽高来确定的，使得它就像 `inline-block` 一样。你可以为 `<img>` 设置 {{cssxref("border")}}/{{cssxref("border-radius")}}、{{cssxref("padding")}}/{{cssxref("margin")}}、{{cssxref("width")}}、{{cssxref("height")}} 等 CSS 属性。

`<img>` 没有基线，这意味着，当在一个行内格式化上下文中使用 {{cssxref("vertical-align", "vertical-align: baseline")}} 时，图像的底部将会与容器的文字基线对齐。

你可以使用 {{cssxref("object-position")}} 属性将图形定位在元素的盒子内，并使用 {{cssxref("object-fit")}} 属性调整盒内图像的大小（例如，如果图像需要裁剪，则其是否需要调整以符合盒子的大小，或填满整个盒子）。

根据图像的类型，其可能会有一个原始的宽和高（原始分辨率）。对于一些类型的图像，原始分辨率并不是必要的。比如说，{{glossary("SVG")}} 图像，如果它们的根 {{SVGElement("svg")}} 元素没有 `width` 或 `height` 属性，SVG 图像就可以没有原始分辨率。

## 无障碍

### 编写有意义的替代描述

`alt` 属性的值应为图像内容提供清晰简洁的文本替代方案。它不应描述图像本身的存在或图像的文件名。若因图像无文字等效内容而刻意省略 `alt` 属性，请考虑采用其他方式呈现图像试图传达的信息。

#### 不要这样做

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### 要这样做

```html example-good
<img alt="沙滩上的一只企鹅" src="penguin.jpg" />
```

一项重要的无障碍测试是将 `alt` 属性内容与前置文本内容结合阅读，以确认其是否传达与图片相同的信息。例如，若图片前置的句子为“旅行途中，我看到一只可爱的小动物：”，那么*错误示例*会被屏幕阅读器读作“旅行途中，我看到一只可爱的小动物：图片”，这显然毫无意义。而正确示例会被屏幕阅读器读作“旅行途中，我看到一只可爱的小动物：沙滩上的一只企鹅”，语义清晰。

对于用于触发操作的图像（例如嵌套在 {{htmlelement("a")}} 或 {{htmlelement("button")}} 元素内的图像），建议在 `alt` 属性值中描述触发操作。例如，可将 `alt="向右的箭头"` 改写为 `alt="下一页"`。还可考虑在 `title` 属性中添加可选的补充说明；当用户请求时，屏幕阅读器可能读取该内容。

当图像未设置 `alt` 属性时，部分屏幕阅读器会朗读图像文件名。若文件名无法准确反映图像内容，将导致用户产生困惑。

- [替代文本决策树 • 图片 • WAI 网络无障碍教程](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [替代文本终极指南——Axess Lab](https://axesslab.com/alt-texts/)
- [如何设计优质替代文本：入门指南 | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN 解读 WCAG 指南 1.1 说明](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [理解成功标准 1.1.1 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### 将 SVG 识别为图像

由于 [VoiceOver 缺陷](https://webkit.org/b/216364)，VoiceOver 无法正确将 SVG 图像识别为图像。请为所有使用 SVG 源文件的 `<img`> 元素添加 [`role="img"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)，确保辅助技术能正确识别 SVG 为图像内容。

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### title 属性

`title` 属性不能替代 `alt` 属性。此外，请避免在同一张图片上声明的 `title` 属性中重复 `alt` 属性的值。此举可能导致某些屏幕阅读器重复朗读相同文本，造成混淆体验。

`title` 属性也不应用作图像 `alt` 描述的补充说明。若图像需要说明文字，请使用 [`figure`](/zh-CN/docs/Web/HTML/Reference/Elements/figure) 和 [`figcaption`](/zh-CN/docs/Web/HTML/Reference/Elements/figcaption) 元素。

`title` 属性的值通常以工具提示形式呈现：当光标停留在图像上时会短暂显示。虽然这*可能*为用户提供额外信息，但切勿假设用户必定能看到它——用户可能仅使用键盘或触摸屏操作。若存在对用户特别重要或有价值的信息，请采用上述方法行内呈现，而非使用 `title`。

- [HTML title 属性使用指南——更新版 | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## 示例

### 替代文字

下面的示例将图像嵌入到页面中，且包含用于改善无障碍性的替代文本。

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('替代文字', '100%', '160') }}

### 图像链接

此示例建立在前一个示例的基础上，展示了如何将图像转换为链接。为做到这一点，将 `<img>` 标签嵌套在 {{HTMLElement("a")}} 之内。这时，备用文本应当描述链接所指向的资源，就像是文本链接一样。

```html
<a href="https://developer.mozilla.org/zh-CN">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="访问 MDN 网站" />
</a>
```

{{ EmbedLiveSample('图像链接', '100%', '160') }}

### 使用 srcset 属性

在这个例子中，我们包含了一个 `srcset` 属性，它引用了 MDN 徽标的高清版本；在高分辨率设备上，它将被优先加载，取代 `src` 属性中的图像。在支持 `srcset` 的{{glossary("User agent", "用户代理")}}中，`src` 属性中的图片被作为 `1x` 候选项。

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("使用 srcset 属性", "100%", "160")}}

### 使用 srcset 和 sizes 属性

在支持 `srcset` 的用户代理中，当使用 `w` 描述符时，`src` 属性会被忽略。当匹配了媒体条件 `(max-width: 600px)` 时，将加载 200 像素宽的图像（最匹配的图像），否则将加载另一幅图像。

```html
<img
  src="clock-demo-200px.png"
  alt="现在是 12:45。"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("使用 srcset 和 sizes 属性", "100%", 350)}}

> [!NOTE]
> 若要看到大小调整的效果，请{{LiveSampleLink('使用 srcset 和 sizes 属性', '打开单独的页面查看示例')}}，以便拖动窗口，调整内容区域的大小。

## 安全与隐私方面的考虑

虽然 `<img>` 元素的用途是很单纯的，但是它们可对用户安全和隐私造成不良的后果。参见 [Referer 标头：隐私与安全性考量](/zh-CN/docs/Web/Security/Referer_header:_privacy_and_security_concerns)以获取更多信息和缓解措施。

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
      <td>无；其为{{Glossary("void element", "空元素")}}。</td>
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
              ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            具有空 <code>alt</code> 属性：<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
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
                    href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
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
              <li><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            具有空 <code>alt</code> 属性、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            或 <a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
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

- {{HTMLElement("picture")}}、{{HTMLElement("object")}} 和 {{HTMLElement("embed")}} 元素
- 其他与图像相关的 CSS 属性：{{cssxref("object-fit")}}、{{cssxref("object-position")}}、{{cssxref("image-orientation")}}、{{cssxref("image-rendering")}} 和 {{cssxref("image-resolution")}}
- 此元素所用的 {{domxref("HTMLImageElement")}} 接口
- [HTML 中的图片](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [图像文件类型与格式指南](/zh-CN/docs/Web/Media/Guides/Formats/Image_types)
- [响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images)
