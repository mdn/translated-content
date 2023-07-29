---
title: <link>：外部资源链接元素
slug: Web/HTML/Element/link
---

{{HTMLSidebar}}

**HTML 外部资源链接元素** (**`<link>`**) 规定了当前文档与外部资源的关系。该元素最常用于链接[样式表](/zh-CN/docs/Glossary/CSS)，此外也可以被用来创建站点图标 (比如 PC 端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。

{{EmbedInteractiveExample("pages/tabbed/link.html")}}

要链接一个外部的样式表，你需要像这样在你的{{HTMLElement("head")}}中包含一个{{HTMLElement("link")}}元素：

```html
<link href="main.css" rel="stylesheet" />
```

在这个简单的例子中，使用了 `href` 属性设置外部资源的路径，并设置 `rel` 属性的值为“`stylesheet`”(样式表)。`rel` 表示“关系 (relationship) ”，它可能是`<link>`元素其中一个关键的特性——属性值表示`<link>`项的链接方式与包含它的文档之间的关系。你将在我们的[链接类型](/zh-CN/docs/Web/HTML/Link_types)中看到很多不同类型的关系。

这里有一些你经常遇到的其他类型。例如，这里是一个网站图标的链接：

```html
<link rel="icon" href="favicon.ico" />
```

还有一些其他的与图标相关的`rel`值，主要用于表示不同移动平台上特殊的图标类型，例如：

```html
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

`sizes`属性表示图标大小，`type`属性包含了链接资源的 MIME 类型。这些属性为浏览器选择最合适的图标提供了有用的提示。

你也可以提供一个媒体类型，或者在`media`属性内部进行查询；这种资源将只在满足媒体条件的情况下才被加载进来。例如：

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

`<link>`也加入了一些新的有意思的性能和安全特性。举例如下：

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

将`rel`设定为`preload`，表示浏览器应该预加载该资源 (更多细节见[使用 rel="preload"预加载内容](/zh-CN/docs/Web/HTML/Preloading_content)) 。`as`属性表示获取特定的内容类。`crossorigin`属性表示该资源是否应该使用一个{{Glossary("CORS")}}请求来获取。

其他用法的注解：

- `<link>`元素可以出现在{{HTMLElement("head")}}元素或者{{HTMLElement("body")}}元素中，具体取决于它是否有一个**body-ok**的[链接类型](https://html.spec.whatwg.org/multipage/links.html#body-ok)。例如，`stylesheet`链接类型是 body-ok 的，因此`<link rel="stylesheet">`允许出现在 body 中。然而，这不是一种好的可遵循的实践方式；更合理的方式是，将你的`<link>`元素从你的 body 内容中分离出来，将其放在`<head>`中。
- 当使用`<link>`为网站创建一个 favicon 时，你的网站使用内容安全策略 (Content Security Policy，CSP) 来增强它的安全性，这种策略适用于 favicon。如果你遇到 favicon 未加载的问题，验证{{HTTPHeader("Content-Security-Policy")}}头的[`img-src` directive](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)没有在阻止对它的访问。
- HTML 和 XHTML 规范为`<link>`元素定义了一些事件处理器 (_event handler_) ，但是对于它们的使用方法不明确。
- 在 XHTML 1.0 下，例如`<link>`的空元素需要一个尾斜杠：`<link />`。
- WebTV 支持`rel`使用`next`值，用于在一个 document series 中预加载下一页。

## 属性

这个元素可以使用 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

- `as`

  - : 该属性仅在`<link>`元素设置了 `rel="preload"` 或者 `rel="prefetch"` 时才能使用。它规定了`<link>元素`加载的内容的类型，对于内容的优先级、请求匹配、正确的[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)的选择以及正确的 {{httpheader("Accept")}}请求头的设置，这个属性是必需的。

    | 值       | 应用于                                                                                                           |
    | -------- | ---------------------------------------------------------------------------------------------------------------- |
    | audio    | `<audio>` 元素                                                                                                   |
    | document | `<iframe>` 和 `<frame>` 元素                                                                                     |
    | embed    | `<embed>` 元素                                                                                                   |
    | fetch    | fetch, XHRThis value also requires `<link>` to contain the crossorigin attribute.                                |
    | font     | CSS @font-face                                                                                                   |
    | image    | `<img>` and `<picture>` elements with srcset or imageset attributes, SVG `<image>` elements, CSS `*-image` rules |
    | object   | `<object>` elements                                                                                              |
    | script   | `<script>` elements, Worker `importScripts`                                                                      |
    | style    | `<link rel=stylesheet>` elements, CSS `@import`                                                                  |
    | track    | `<track>` elements                                                                                               |
    | video    | `<video>` elements                                                                                               |
    | worker   | Worker, SharedWorker                                                                                             |

- `crossorigin`
  - : 此枚举属性指定在加载相关资源时是否必须使用 CORS. [启用 CORS 的图片](/zh-CN/docs/Web/HTML/CORS_Enabled_Image) 可以在 {{HTMLElement("canvas")}} 元素中重复使用，并避免其被*污染*. 可取的值如下：
    - `"anonymous"`
      - : 会发起一个跨域请求 (即包含 `Origin:` HTTP 头). 但不会发送任何认证信息 (即不发送 cookie, X.509 证书和 HTTP 基本认证信息). 如果服务器没有给出源站凭证 (不设置 `Access-Control-Allow-Origin:` HTTP 头), 资源就会被*污染并限制使用*.
    - `"use-credentials"`
      - : 会发起一个带有认证信息 (发送 cookie, X.509 证书和 HTTP 基本认证信息) 的跨域请求 (即包含 `Origin:` HTTP 头). 如果服务器没有给出源站凭证 (不设置 `Access-Control-Allow-Origin:` HTTP 头), 资源就会被*污染并限制使用*.当不设置此属性时，资源将会不使用 CORS 加载 (即不发送 `Origin:` HTTP 头), 这将阻止其在 {{HTMLElement('canvas')}} 元素中进行使用。若设置了非法的值，则视为使用 **anonymous**. 前往 [CORS settings attributes](/zh-CN/docs/Web/HTML/CORS_settings_attributes) 获取更多信息。
- `disabled`
  - : 仅对于`rel="stylesheet"` ，`disabled` 的 Boolean 属性指示是否应加载所描述的样式表并将其应用于文档。如果在加载 HTML 时在 HTML 中指定了 Disabled，则在页面加载期间不会加载样式表。相反，如果禁用属性更改为 false 或删除时，样式表将按需加载。但是，一旦加载样式表，对 Disabled 属性的值所做的更改将不再与{{domxref("StyleSheet.disabled")}} 属性的值有任何关系。相反，更改此属性的值只是启用和禁用应用于文档的样式表表单。这与 StyleSheet 的 disable 属性不同；将其更改为 true 会将样式表从文档的{{domxref("document.styleSheets")}} 列表中删除，并且在切换回 false 时不会自动重新加载样式表。
- `href`
  - : 此属性指定被链接资源的{{glossary("URL")}}。URL 可以是绝对的，也可以是相对的。
- `hreflang`
  - : 此属性指明了被链接资源的语言。其意义仅供参考。可取的值参见 [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt)。仅当设置了 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) 属性时才应设置该属性。
- `importance` {{Experimental_Inline}}

  - : 指示资源的相对重要性。优先级提示使用以下值委托：**`auto`**: 表示**没有偏好**。浏览器可以使用其自己的启发式方法来确定资源的优先级。**`high`**: 向浏览器指示资源具有高优先级。**`low`**: 向浏览器指示资源的优先级较低。

    > **备注：** 只有存在 rel=“preload”或 rel=“prefetch”时，importance 属性才能用于\<link>元素。

- `integrity` {{experimental_inline}}
  - : 包含行内元数据，它是一个你用浏览器获取的资源文件的哈希值，以 base64 编码的方式加的密，这样用户能用它来验证一个获取到的资源，在传送时未被非法篡改，详情查看[Subresource Integrity](/zh-CN/docs/Web/Security/Subresource_Integrity)。
- `media`
  - : 这个属性规定了外部资源适用的媒体类型。它的值必须是"[媒体查询](/zh-CN/docs/Web/Guide/CSS/Media_queries)"。这个属性使得用户代理能选择最适合设备运行的媒体类型。
    - 在 HTML 4 中，该属性只能是一组以空白符作为分隔的媒体描述文字，比如"[媒体类型](/zh-CN/docs/Web/CSS/@media)"规定了该元素可取的属性，如 print、screen、aural、braille。HTML5 将该属性值扩展为任意类型的"[媒体查询](/zh-CN/docs/CSS/Media_queries)"，"媒体查询"将 HTML4 的属性值都包括在内。
    - 不支持"[CSS3 媒体查询](/zh-CN/docs/CSS/Media_queries)"的浏览器并不会强行识别这些链接，因此别忘了设置备用 link，即那些可用于 HTML4 的 link。
- `referrerpolicy` {{experimental_inline}}
  - : 一个字符串，指示在获取资源时使用哪个引荐来源网址：
    - `'no-referrer'` 表示{{HTTPHeader("Referer")}} 标头将不会发送。
    - `'no-referrer-when-downgrade'` 的原始位置时不会发送任何{{HTTPHeader("Referer")}}标头。如果未指定其他政策，这是用户代理的默认行为。
    - `'origin'` 意味着引荐来源网址将是页面的来源，大致是方案，主机和端口。
    - `'origin-when-cross-origin'` 这意味着导航到其他来源将仅限于方案，主机和端口，而在同一来源上导航将包括引荐来源网址的路径。
    - `'unsafe-url'` 意味着引荐来源网址将包含来源和路径（但不包括片段，密码或用户名）。这种情况是不安全的，因为它可能会将来源和路径从受 TLS 保护的资源泄漏到不安全的来源。
- `rel`
  - : 此属性命名链接文档与当前文档的关系。该属性必须是[链接类型值](/zh-CN/docs/Web/HTML/Link_types)的用空格分隔的列表。
- `sizes`

  - : 这个属性定义了包含相应资源的可视化媒体中的 icons 的大小。它只有在[`rel`](/zh-CN/docs/Web/HTML/Element/link#rel)包含 icon 的[link 类型值](/zh-CN/docs/Web/HTML/Link_types)。它可能有如下的规则。

    - `any` 表示图标可以按矢量格式缩放到任意大小，例如 `image/svg+xml`。
    - 一个由空白符分隔的尺寸列表。每一个都以`<width in pixels>x<height in pixels>` 或 `<width in pixels>X<height in pixels>给出。`尺寸列表中的每一个尺寸都必须包含在资源里。

    > **备注：** 大多数的 icon 格式只能存储一个 icon。因此绝大多数使用 [`sizes`](/zh-CN/docs/Web/HTML/Global_attributes#sizes)时只包含一个值。微软的 ICO 格式和苹果的 ICNS 格式都是这样，ICO 使用得更加广泛，推荐你使用它。
    >
    > - 苹果的 IOS 系统并不支持这个属性，于是苹果的 IPhone 以及 IPad 使用特殊的、非标准的 [link 类型值](/zh-CN/docs/Web/HTML/Link_types)去定义作为 Web Clip 或开始占位符：`apple-touch-icon` 和 `apple-touch-startup-icon`。

- `title`
  - : 属性在`<link>`元素上有特殊的语义。当用于`<link rel="stylesheet">`时，它定义了一个[首选样式表或备用样式表](/zh-CN/docs/Web/CSS/Alternative_style_sheets)。不正确地使用它可能会导致[样式表被忽略](/zh-CN/docs/Correctly_Using_Titles_With_External_Stylesheets)。
- `type`
  - : 这个属性被用于定义链接的内容的类型。这个属性的值应该是像 text/html，text/css 等 MIME 类型。这个属性常用的用法是定义链接的样式表，最常用的值是表明了 CSS 的 text/css。

### 非标准属性

- `methods` {{Non-standard_Inline}}
  - : 此属性的值提供有关可能在对象上执行的功能的信息。这些值通常在使用时由 HTTP 协议给出，但是（出于与“**title**”属性类似的原因）将其预先包含在链接中可能是有用的。例如，浏览器可能根据指定的方法选择不同的链接呈现方式。可搜索的内容可能会得到其他图标，或者外部链接可能会显示离开当前站点的指示。即使定义的浏览器 Internet Explorer 4 也无法很好地理解或支持此属性。
- `prefetch` {{Non-standard_Inline}} {{secureContext_inline}}
  - : 此属性标识下一个导航可能需要的资源，用户代理应检索该资源。这允许用户代理在将来请求资源时更快地做出响应。
- `target` {{Non-standard_Inline}}
  - : 定义具有已定义链接关系或将显示任何链接资源的呈现的框架或窗口名称。

### 已淘汰的属性

- `charset`{{Deprecated_Inline}}

  - : 此属性定义链接资源的字符编码。该值为{{rfc(2045)}}中定义的字符集的空格和/或逗号分隔列表。缺省值为 iso-8859-1。

    > **备注：** 该属性已淘汰且禁止使用**。要**实现相同效果，可在外链资源中使用 `Content-Type` HTTP header。

- `rev`{{Deprecated_Inline}}

  - : 此属性的值显示了 [`href`](/zh-CN/docs/Web/HTML/Element/link#href) 属性所定义的当前文档与链接文档的关系。因此，该属性定义了与 rel 属性的值相比的反向关系。该属性的[Link type value](/zh-CN/docs/Web/HTML/Link_types)类似于[`rel`](/zh-CN/docs/Web/HTML/Element/link#rel)的可能值。

    > **备注：** WHATWG HTML 生活标准（MDN 将其视为规范的规范）认为该属性已过时。但是，值得注意的是，rev 在 W3C 规范中并未过时。就是说，鉴于不确定性，依靠 rev 是不明智的。相反，您应该使用具有相反链接类型值的[`rel`](/zh-CN/docs/Web/HTML/Element/link#rel)属性。例如，要建立反向链接，请指定作者。而且，即使许多站点都以这种方式滥用此属性，该属性也不代表“修订”，并且不得与版本号一起使用。

## 示例

### 引入一个 css 文件

用下面的语法来引入一个 css 文件：

```html
<link href="style.css" rel="stylesheet" />
```

### 提供可替换的样式表

你也可以指定"[可替换的外部样式表](/zh-CN/docs/Web/CSS/Alternative_style_sheets)"。

用户可以在浏览器菜单 "查看>页面样式" 来选择网页的样式。通过这一办法，可以用多种样式浏览网页。

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### 提供用于不同用法上下文的图标

您可以在同一页面上包含指向多个不同图标的链接，浏览器将使用`rel`和`sizes` 值作为提示来选择最适合其特定上下文的图标。

```html
<!-- third-generation iPad with high-resolution Retina display: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="144x144"
  href="favicon144.png" />
<!-- iPhone with high-resolution Retina display: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="favicon114.png" />
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png" />
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="favicon57.png" />
<!-- basic favicon -->
<link rel="icon" href="favicon32.png" />
```

### 通过媒体查询有条件地加载资源

您可以在`media`属性中提供媒体类型或查询; 然后，只有在媒体条件为 true 时，才会加载此资源。例如：

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link
  href="desktop.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (min-resolution: 300dpi)" />
```

### 样式表加载事件

你能够通过监听发生在样式表上的事件知道什么时候样式表加载完毕。同样的，你能够通过监听`error`事件检测到是否在加载样式表的过程中出现错误。

```html
<script>
  function sheetLoaded() {
    // Do something interesting; the sheet has been loaded
  }

  function sheetError() {
    alert("An error occurred loading the stylesheet!");
  }
</script>

<link
  rel="stylesheet"
  href="mystylesheet.css"
  onload="sheetLoaded()"
  onerror="sheetError()" />
```

> **备注：** 当样式表以及它引用的部分全部加载完毕，load 事件就会在样式表应用到内容之前立即触发。

### 预加载例子

你可以在[Preloading content with rel="preload"](/zh-CN/docs/Web/HTML/Preloading_content)找到`<link rel="preload">`的详细例子。

## 概要

<table class="properties">
 <tbody>
  <tr>
   <th><a href="/zh-CN/docs/Web/HTML/Content_categories">内容类型</a></th>
   <td>元数据。如果使用了 <a href="/zh-CN/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> 属性，则为 <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">flow content</a> 和 <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th>允许的元素内容</th>
   <td>无，这是一个{{Glossary("空元素")}}。</td>
  </tr>
  <tr>
   <th>标签省略</th>
   <td>鉴于这是一个空元素，开始标签必须存在，结束标签必须不存在。</td>
  </tr>
  <tr>
   <th>允许的父元素</th>
   <td>任何可以接受元数据的元素.。如果使用了 <a href="/zh-CN/docs/Web/HTML/Global_attributes/itemprop">itemprop</a>属性，，则其父元素可以是任何可接受 <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a> 的元素。</td>
  </tr>
  <tr>
   <th>允许的 ARIA roles</th>
   <td>无</td>
  </tr>
  <tr>
   <th>DOM 接口</th>
   <td>{{domxref("HTMLLinkElement")}}</td>
  </tr>
 </tbody>
</table>

## 注意

- `<link>` 标签只能出现在 head 元素中，然而可以出现多个\<link>标签。
- HTML 3.2 只为 link 元素定义了**href**, **methods**, **rel**，**rev**，**title**，和**urn**属性。
- HTML 2 为 link 标签定义了 **href**, **methods**，**rel**，**rev**，**title，**和 **urn** 属性，**methods** 和 **urn**随后从规范中移除。
- HTML 和 XHTML 规范为 link 定义了事件处理，但是并不清楚它们将会怎样被使用。
- 在 XHTML 1.0 中，空元素 link 要求有尾随斜线，像这样\<link />。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{HTTPHeader("Link")}} HTTP header
- [Ryan Grove's \<script> and \<link> node event compatibility chart](https://pie.gd/test/script-link-events/)
