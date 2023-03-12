---
title: <a>
slug: Web/HTML/Element/a
---

{{HTMLSidebar}}

**HTML `<a>` 元素**（或称锚元素）可以通过[它的 `href` 属性](#href)创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。`<a>` 中的内容**应该**应该指明链接的意图。如果存在 [`href` 属性](#href)，当 `<a>` 元素聚焦时按下回车键就会激活它。

{{EmbedInteractiveExample("pages/tabbed/a.html")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></dfn></th>
   <td>流内容、文字内容、交互内容、可触摸内容。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许的内容</dfn></th>
   <td>可见的内容（Transparent），包含流内容（不包括交互式内容）或文字内容（phrasing content）。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>标签省略</dfn></th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许的父元素</dfn></th>
   <td>接受短语内容的任何元素或接受流内容的任何元素，但始终不接受 &lt;a&gt; 元素（根据对称的逻辑原理，如果 &lt;a&gt; 标记作为父元素，不能具有交互内容，则相同的 &lt;a&gt; 内容不能具有 &lt;a&gt; 标记作为其父元素）。</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></td>
  </tr>
  <tr>
   <th scope="row"><dfn>DOM 接口</dfn></th>
   <td>{{domxref("HTMLAnchorElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素的属性包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{htmlattrdef("download")}}
  - : 此属性指示浏览器下载 URL 而不是导航到它，因此将提示用户将其保存为本地文件。如果属性有一个值，那么此值将在下载保存过程中作为预填充的文件名（如果用户需要，仍然可以更改文件名）。此属性对允许的值没有限制，但是 `/` 和 `\` 会被转换为下划线。大多数文件系统限制了文件名中的标点符号，故此，浏览器将相应地调整建议的文件名。

    - 此属性仅适用于[同源 URL](/zh-CN/docs/Web/Security/Same-origin_policy)。
    - 尽管 HTTP URL 需要位于同一源中，但是可以使用 [`blob:` URL](/zh-CN/docs/Web/API/URL.createObjectURL) 和 [`data:` URL](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) ，以方便用户下载使用 JavaScript 生成的内容（例如使用在线绘图 Web 应用程序创建的照片）。
    - 如果 HTTP 头中的 [Content-Disposition](/zh-CN/docs/Web/HTTP/Headers/Content-Disposition) 属性赋予了一个不同于此属性的文件名，HTTP 头属性优先于此属性。
    - 如果 HTTP 头属性 `Content-Disposition` 被设置为 inline（即 `Content-Disposition='inline'`），那么 Firefox 优先考虑 HTTP 头 `Content-Disposition`download 属性。
- {{htmlattrdef("href")}}
  - : 包含超链接指向的 URL 或 URL 片段。URL 片段是哈希标记（#）前面的名称，哈希标记指定当前文档中的内部目标位置（HTML 元素的 ID）。URL 不限于基于 Web（HTTP）的文档，也可以使用浏览器支持的任何协议。例如，在大多数浏览器中正常工作的[`file:`](https://en.wikipedia.org/wiki/File_URI_scheme)、ftp:和 mailto：。

    > **备注：** 可以使用 `href="#top"` 或者 `href="#"` 链接返回到页面顶部。[这种行为是 HTML5 的特性](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#scroll-to-fragid)。
- {{htmlattrdef("hreflang")}}
  - : 该属性用于指定链接文档的人类语言。其仅提供建议，并没有内置的功能。hreflang 允许的值取决于 HTML5 [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt)。
- {{htmlattrdef("ping")}}
  - : 包含一个以空格分隔的 url 列表，当跟随超链接时，将由浏览器 (在后台) 发送带有正文 PING 的 POST 请求。通常用于跟踪。
- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}
  - : 表明在获取 URL 时发送哪个提交者（referrer）:

    - `"no-referrer"` 表示 `Referer:` 头将不会被发送。
    - `"no-referrer-when-downgrade"` 表示当从使用 HTTPS 的页面导航到不使用 TLS(HTTPS) 的来源 时不会发送 `Referer:` 头。如果没有指定策略，这将是用户代理的默认行为。
    - `"origin"` 表示 referrer 将会是页面的来源，大致为这样的组合：主机和端口（不包含具体的路径和参数的信息）。
    - "origin-when-cross-origin" 表示导航到其他源将会限制为这种组合：主机 + 端口，而导航到相同的源将会只包含 referrer 的路径。
    - `'strict-origin-when-cross-origin'`
    - `"unsafe-url"` 表示 referrer 将会包含源和路径（domain + path）（但是不包含密码或用户名的片段）。这种情况是不安全的，因为它可能会将安全的 URLs 数据泄露给不安全的源。

- {{htmlattrdef("rel")}}
  - : 该属性指定了目标对象到链接对象的关系。该值是空格分隔的[列表类型值](/zh-CN/docs/Web/HTML/Link_types)。
- {{htmlattrdef("target")}}
  - : 该属性指定在何处显示链接的资源。取值为标签（tab），窗口（window），或框架（iframe）等浏览上下文的名称或其他关键词。以下关键字具有特殊的意义：

    - `_self`: 当前页面加载，即当前的响应到同一 HTML 4 frame（或 HTML5 浏览上下文）。此值是默认的，如果没有指定属性的话。
    - `_blank`: 新窗口打开，即到一个新的未命名的 HTML4 窗口或 HTML5 浏览器上下文
    - `_parent`: 加载响应到当前框架的 HTML4 父框架或当前的 HTML5 浏览上下文的父浏览上下文。如果没有 parent 框架或者浏览上下文，此选项的行为方式与 `_self` 相同。
    - `_top`: IHTML4 中：加载的响应成完整的，原来的窗口，取消所有其他 frame。HTML5 中：加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有 parent）。如果没有 parent 框架或者浏览上下文，此选项的行为方式相同\_self

      > **备注：** 在 `<a>` 元素上使用 `target="_blank"` 隐式提供了与使用 [`rel="noopener"`](/zh-CN/docs/Web/HTML/Link_types/noopener) 相同的 `rel` 行为，即不会设置 `window.opener`。
- {{htmlattrdef("type")}}
  - : 该属性指定在一个 {{Glossary("MIME type")}} 链接目标的形式的媒体类型。其仅提供建议，并没有内置的功能。

### 过时的

- {{htmlattrdef("charset")}} {{Deprecated_Inline}}
  - : 此属性定义链接资源的字符编码。该值是一个空格 - 和/或逗号分隔的[RFC 2045](http://tools.ietf.org/html/rfc2045)中定义的字符集列表。默认值是 ISO-8859-1。

    > **备注：** 在 HTML5 中该属性已作废，不应使用。为了实现其效果，使用 HTTP content - type header 的链接资源。
- {{htmlattrdef("coords")}} {{Deprecated_Inline}}
  - : 对于使用对象的形状，此属性使用逗号分隔的数字列表来定义对象在页面上的坐标。
- {{htmlattrdef("name")}} {{Deprecated_Inline}}
  - : 该属性在页面中定义锚点的目标位置时是必须的。 **name** 的值类似于 ID 核心属性值，该属性值在文档中是唯一的且由数字字母标示符所组成的。在 HTML 4.01 规范中，**id** 和 **name** 都可以使用 \<a> 元素，只要他们有相同的值。

    > **备注：** 该属性在 HTML5 中是过时的，使用 [全局属性 **id**](/zh-CN/docs/HTML/Global_attributes#attr-id) 来代替。
- {{htmlattrdef("rev")}} {{Deprecated_Inline}}
  - : 该属性用于指定当前文档与被链接文档的关系。用于 \<a> 标签的可选属性 rel 和 rev 分别表示源文档与目标文档之间正式的关系和方向。rel 属性指定从源文档到目标文档的关系，而 rev 属性则指定从目标文档到源文档的关系。这两种属性可以在 \<a> 标签中同时使用。对于网页编者来说，这个属性很有用，可以通过它来查看外链的来源。
- {{htmlattrdef("shape")}} {{Deprecated_Inline}}
  - : 此属性用于定义一个可选的超链接相关的一个数字来创建图像映射区域，该属性的值是圆，默认情况下，多边形，矩形。所述的**coords** 属性的格式取决于形状的值。对于圆，该值的 x，y，r 其中 x 和 y 为圆心像素坐标，r 是像素值半径。对于矩形，该**coords** 属性应该是 x，y，w，h。x，y 值定义的矩形的左上角的位置，而 w 和 h 分别定义宽度和高度。多边形形状的值需要 x1，y1，x2，y2，......值来定义 coords。每对 x，y 定义多边形的一个点，连续点由直线接合和，最后一个点连接到第一个点。默认为形状的值需要将整个封闭区域，典型的图像，可以使用。

    > **备注：** 建议使用 [使用 map 属性](/zh-CN/docs/Web/HTML/Element/img#attr-usemap)在 {{HTMLElement("img")}} 元素和相关的{{HTMLElement("map")}}元素中来定义热点而不是用形状属性。

## 示例

### 链接到外部地址

```html
<!-- anchor linking to external file -->
<a href="http://www.mozilla.com/">
External Link
</a>
```

#### 结果

[外部链接](http://www.mozilla.com/)

### 链接到本页的某个部分

```html
<!-- links to element on this page with id="attr-href" -->
<a href="#属性">
Description of Same-Page Links
</a>
```

#### 结果

[相同页面链接的描述](#属性)

### 创建一个可点击的图片

这个小例子使用图像链接到 MDN 主页。主页将在新的浏览环境，这是一个新的页面或新标签中打开研究。

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.png"
       alt="MDN logo" />
</a>
```

#### 结果

{{EmbedLiveSample("创建一个可点击的图片", "320", "64")}}

### 创建一个 email 链接

这是常见的创建按钮或链接，将用户的电子邮件程序打开，让他们发送新邮件。这是通过使用一个 mailto 链接完成的。这里有一个简单的例子：

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

生成这样的链接：[Send email to nowhere](mailto:nowhere@mozilla.org).

有关 mailto URL 方案的更多细节，比如如何包含主题，正文，或其他预定内容，参考 [Email links](/zh-CN/docs/Web/Guide/HTML/Email_links) or {{RFC(6068)}}.

### 创建电话链接

提供电话链接有助于用户查看连接到手机的网络文档和笔记本电脑。

```html
<a href="tel:+491570156">+49 157 0156</a>
```

更详细的语法请参考 {{RFC(3966)}}。

### 使用 download 属性将 `<canvas>` 保存为 PNG 格式

如果你想允许用户下载一个 HTML 画布，你可以创建一个下载属性和画布数据作为文件 URL 链接图像：

```js
var link = document.createElement('a');
link.innerHTML = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);

document.body.appendChild(link);
```

可以查看这个例子 <https://jsfiddle.net/codepo8/V6ufG/2/>

## 备注

html 3.2 只定义 name, href, rel, rev，和 title 属性。

### 无障碍建议

锚点标签常常通过将 **href** 属性设置为 `"#"` 或 `"javascript:void(0)" 来创造一个能阻止页面刷新的伪按钮的方式`被滥用。这些属性值会在拖动 / 复制链接时导致意外行为，在新窗口 / 新标签打开链接，加入书签以及 JavaScript 仍在下载时会出现错误或被禁用。这也会向辅助技术（如屏幕阅读器）传达不正确的语义。在这些情况下，推荐使用 {{HTMLElement("button")}} 来代替。通常情况下，您应该只将锚点用于正常的 URL 导航。

### Clicking 及 focus

点击一个 {{HTMLElement("a")}} 标签是否会出现 focus 取决于浏览器和操作系统。

| 桌面浏览器                                                                                     | Windows 8.1 | OS X 10.9                  |
| ---------------------------------------------------------------------------------------------- | ----------- | -------------------------- |
| Firefox 30.0                                                                                   | 是          | 是                         |
| Chrome ≥39 ([Chromium bug 388666](https://code.google.com/p/chromium/issues/detail?id=388666)) | 是          | 是                         |
| Safari 7.0.5                                                                                   | 不可用      | 仅当包含 `tabindex 属性时` |
| Internet Explorer 11                                                                           | 是          | 不可用                     |
| Presto (Opera 12)                                                                              | 是          | 是                         |

| 移动浏览器    | iOS 7.1.2                  | Android 4.4.4              |
| ------------- | -------------------------- | -------------------------- |
| Safari Mobile | 仅当包含 `tabindex 属性时` | 不可用                     |
| Chrome 35     | 未知                       | 仅当包含 `tabindex 属性时` |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 其他传递[文本级语义](/zh-CN/docs/HTML/Text_level_semantics_conveying_elements)的元素：{{HTMLElement("abbr")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
