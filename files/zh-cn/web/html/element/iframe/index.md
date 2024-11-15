---
title: <iframe>：內嵌框架元素
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{HTMLSidebar}}

**HTML 内联框架元素 (`<iframe>`)** 表示嵌套的{{Glossary("browsing context")}}。它能够将另一个 HTML 页面嵌入到当前页面中。

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

每个嵌入的浏览上下文（embedded browsing context）都有自己的[会话历史记录 (session history)](/zh-CN/docs/Web/API/History)和[DOM 树](/zh-CN/docs/Web/API/Document)。包含嵌入内容的浏览上下文称为*父级浏览上下文*。顶级浏览上下文（没有父级）通常是由 {{domxref("Window")}} 对象表示的浏览器窗口。

> [!WARNING]
> 页面上的每个`<iframe>`都需要增加内存和其他计算资源，这是因为每个浏览上下文都拥有完整的文档环境。虽然理论上来说你能够在代码中写出来无限多的`<iframe>`，但是你最好还是先看看这么做会不会导致某些性能问题。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `allow`

  - : 用于为 `<iframe>` 指定其[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)。该策略根据请求的来源规定 `<iframe>` 可以使用哪些功能（例如，访问麦克风、摄像头、电池、web-share 等）

    示例请参见 `Permissions-Policy` 中的 [iframes](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy#iframes)

    > [!NOTE]
    > 通过 `allow` 属性指定的特征策略会在 {{httpheader("Permissions-Policy")}} 标头指定的策略基础上进一步的限制。它不会替换原有策略。

- `allowfullscreen`

  - : 设置为`true`时，可以通过调用 `<iframe>` 的 {{domxref("Element.requestFullscreen", "requestFullscreen()")}} 方法激活全屏模式。

    > [!NOTE]
    > 这是一个历史遗留属性，已经被重新定义为 `allow="fullscreen"`。

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}

  - : 设置为`true`时，跨域的 `<iframe>` 就可以调用 [Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API)。

    > [!NOTE]
    > 这是一个历史遗留属性，已经被重新定义为 `allow="payment"`。

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}

  - : 一个布尔属性，如果存在，则指定当前用户选定的主题应该与 `<iframe>` 源的请求一起发送。更多信息请参见[使用 Topics API](/zh-CN/docs/Web/API/Topics_API/Using)

- `credentialless` {{Experimental_Inline}}

  - : 设置为 `true` 可以将 `<iframe>` 设为无凭据模式，这意味着将内容加载到新的临时上下文中。它无法访问与其源相关的网络，cookie 和存储数据。它使用一个新的 top-level document 生命周期的本地上下文，作为补偿，可以解除 {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 嵌入规则的限制，所以设置了 COEP 的 document 可以嵌入未设置的第三方 document。更多信息请参见 [IFrame credentialless](/zh-CN/docs/Web/Security/IFrame_credentialless)。

- `csp` {{experimental_inline}}
  - : 对嵌入的资源配置[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)。查看 {{domxref("HTMLIFrameElement.csp")}} 获取详情。
- `height`
  - : 以 CSS 像素格式，或像素格式，或百分比格式指定 frame 的高度。默认值为 `150`。
- `loading`

  - : 表示浏览器应当何时加载 iframe：

    - `eager`
      - : 在页面加载时立即加载 iframe（默认值）
    - `lazy`

      - : 推迟 iframe 的加载，直到达到浏览器定义的{{glossary("visual viewport", "可视视口")}}的距离，
        目的是在浏览器确定需要它前，避免占用获取 frame 所需的网络和存储带宽，
        这改进了在大多数使用场景中的性能表现，尤其是减少了页面的首次加载时间

        > [!NOTE]
        > 只有当 JavaScript 启用时才会推迟加载。
        > 这是一个反跟踪措施。

- `name`
  - : 用于定位嵌入的浏览上下文的名称。该名称可以用作 {{HTMLElement("a")}} 标签与 {{HTMLElement("form")}} 标签的 `target` 属性值，也可以用作 {{HTMLElement("input")}} 标签和 {{HTMLElement("button")}} 标签的 `formtarget` 属性值，还可以用作 {{domxref("Window.open()","window.open()")}} 方法的 `windowName` 参数值。
- `referrerpolicy`

  - : 表示在获取 iframe 资源时如何发送 [referrer](/zh-CN/docs/Web/API/Document/referrer) 标头：

    - `no-referrer`: 不发送 {{HTTPHeader("Referer")}} 标头。
    - `no-referrer-when-downgrade` (default): 向不受 {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) 保护的 {{Glossary("origin")}} 发送请求时，不发送 {{HTTPHeader("Referer")}} 标头。
    - `origin`: referrer 标头中仅包含来源页面的源。换言之，仅包含来源页面的 [scheme](/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)，{{Glossary("host", "主机")}}以及 {{Glossary("port", "端口")}}。
    - `origin-when-cross-origin`: 发起跨域请求时，仅在 referrer 中包含来源页面的源。发起同源请求时，仍然会在 referrer 中包含来源页面在服务器上的路径信息。
    - `same-origin`: 对于 {{Glossary("Same-origin policy", "same origin")}}（同源）请求，发送 referrer 标头，否则不发送。
    - `strict-origin`: 仅当被请求页面和来源页面具有相同的协议安全等级时才发送 referrer 标头（比如从采用 HTTPS 协议的页面请求另一个采用 HTTPS 协议的页面）。如果被请求页面的协议安全等级较低，则不会发送 referrer 标头（比如从采用 HTTPS 协议的页面请求采用 HTTP 协议的页面）。
    - `strict-origin-when-cross-origin`: 当发起同源请求时，在 referrer 标头中包含完整的 URL。当被请求页面与来源页面不同源但是有相同协议安全等级时（比如 HTTPS→HTTPS），在 referrer 标头中仅包含来源页面的源。当被请求页面的协议安全等级较低时（比如 HTTPS→HTTP），不发送 referrer 标头。
    - `unsafe-url`: 始终在 referrer 标头中包含源以及路径（但不包括 [fragment](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)，[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)，或[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**这个值是不安全的**，因为这样做会暴露受 TLS 保护的资源的源和路径信息。

- `sandbox`

  - : 控制应用于嵌入在 `<iframe>` 中的内容的限制。该属性的值可以为空以应用所有限制，也可以为空格分隔的标记以解除特定的限制：

    - `allow-downloads`
      - : 允许通过带有 [download](/zh-CN/docs/Web/HTML/Element/a#download) 属性的 {{HTMLElement("a")}} 或 {{HTMLElement("area")}} 元素或者通过导航来下载文件，无论是用户通过点击链接触发，还是在用户没有交互的情况下通过 JS 代码触发。
    - `allow-forms`: 允许嵌入的浏览上下文提交表单。如果没有使用该关键字，表单会正常显示，但是无法校验输入内容，提交表单到服务器或是关闭对话框。
    - `allow-modals`: 允许页面通过 {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}} 和 {{domxref("Window.prompt()")}}打开模态窗口，无论有无该关键字，打开{{HTMLElement("dialog")}} 是被允许的，它同样允许页面接收 {{domxref("BeforeUnloadEvent")}} 事件。
    - `allow-orientation-lock`: 请查看[lock the screen orientation](/zh-CN/docs/Web/API/Screen/lockOrientation).
    - `allow-pointer-lock`: 允许嵌入的浏览上下文使用 [Pointer Lock API](/zh-CN/docs/Web/API/Pointer_Lock_API).
    - `allow-popups`: 允许弹窗 (例如 window\.open, target="\_blank", `showModalDialog`)。如果没有使用该关键字，相应的功能将自动被禁用。
    - `allow-popups-to-escape-sandbox`: 允许沙箱化的文档打开新窗口，并且新窗口不会继承沙箱标记。例如，安全地沙箱化一个广告页面，而不会在广告链接到的新页面中启用相同的限制条件。
    - `allow-presentation`: 允许嵌入的浏览上下文开始一个 [presentation session](/zh-CN/docs/Web/API/PresentationRequest)。
    - `allow-same-origin`: 如果没有使用该关键字，嵌入的浏览上下文将被视为来自一个独立的源，这将使 {{Glossary("same-origin policy")}} 同源检查失败。(可以防御对 [data storage/cookies](/zh-CN/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) 潜在访问，以及一些 JavaScript API).
    - `allow-scripts`: 允许嵌入的浏览上下文运行脚本（但不能创建弹窗）。如果没有使用该关键字，就无法运行脚本。
    - `allow-storage-access-by-user-activation` {{experimental_inline}}: 允许嵌入的浏览上下文通过 [Storage Access API](/zh-CN/docs/Web/API/Storage_Access_API) 使用父级浏览上下文的存储功能。
    - `allow-top-navigation`: 允许嵌入的浏览上下文导航（加载）内容到顶级的浏览上下文。
    - `allow-top-navigation-by-user-activation`: 允许嵌入的浏览上下文在经过用户允许后导航（加载）内容到顶级的浏览上下文。
    - `allow-top-navigation-to-custom-protocols`
      - : 允许导航到浏览器内置的或[registered by a website](/zh-CN/docs/Web/API/Navigator/registerProtocolHandler)的 非`http` 协议页面，此功能也可以同 `allow-popups` 或 `allow-top-navigation` 关键词激活。

    > [!NOTE]
    > 当被嵌入的文档与主页面同源时，强烈建议不要同时使用 `allow-scripts` 和 `allow-same-origin`。如果同时使用，嵌入的文档就可以通过代码删除 `sandbox` 属性，如此，就安全性而言还不如不用`sandbox`。
    >
    > - 如果攻击者可以在沙箱化的 `iframe` 之外展示内容，例如用户在新标签页中打开内联框架，那么沙箱化也就没有意义了。建议把这种内容放置到独立的专用域中，以减小可能的损失。
    > - 沙箱属性 (sandbox) 在 Internet Explorer 9 及更早的版本上不被支持。

    > [!NOTE]
    > 在 带有 `sandbox` 属性的`<iframe>` 嵌入的页面中，当用户被重定向，打开一个弹出式窗口或者打开一个新标签页时，新的浏览上下文同样受到 `sandbox` 的限制。这可能会产生问题 — 例如，如果一个页面被嵌入到没有设置 `sandbox="allow-forms"` 或 `sandbox="allow-popups-to-escape-sandbox"` 属性的`<iframe>`时，当这个页面在独立的标签页中打开一个新站点，这个页面的表单提交将会失败。

- `src`

  - : 被嵌套的页面的 URL 地址。使用 `about:blank` 值可以嵌入一个遵从[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)的空白页。在 Firefox（version 65 及更高版本）、基于 Chromium 的浏览器、Safari/iOS 中使用代码移除 `iframe` 的 `src` 属性（例如通过 {{domxref("Element.removeAttribute()")}} ）会导致 `about:blank` 被载入 frame。

    > [!NOTE]
    > 在解析任何相对 URL 时，例如锚点链接，`about:blank` 页面会使用嵌入的文档的 URL 作为它的基准 URL

- `srcdoc`

  - : 该属性是一段 HTML 代码，这些代码会被渲染到 iframe 中。如果浏览器不支持 `srcdoc` 属性，则会渲染 `src` 属性表示的内容。
  - > [!NOTE]
    > 在解析任何相对 URL 时，例如锚点链接，`about:srcdoc` 页面会使用嵌入的文档的 URL 作为它的基准 URL

- `width`
  - : 以 CSS 像素格式，或以像素格式，或以百分比格式指定的 frame 的宽度。默认值是`300`。

### 不赞成使用的属性

下面这些属性已不赞成使用，并且可能不再被所有的浏览器支持。你应避免在新项目里面使用它们，也应尽量从旧项目中移除它们。

- `align` {{Deprecated_Inline}}
  - : 此元素相对于周围元素的对齐方式。
- `frameborder` {{Deprecated_Inline}}
  - : 值为`1`（默认值）时，显示此框架的边框。值为`0`时移除边框。此属性已不赞成使用，请使用 CSS 属性 {{cssxref("border")}} 代替。
- `longdesc` {{Deprecated_Inline}}
  - : 表示框架内容的长描述的 URL。由于广泛的误用，该属性对于无图形界面的浏览器不起作用。
- `marginheight` {{Deprecated_Inline}}
  - : 这个属性定义了框架的内容距其上边框与下边框的距离，单位是像素。
- `marginwidth` {{Deprecated_Inline}}
  - : 这个属性定义了框架的内容距其左边框和右边框的距离，单位是像素。
- `scrolling` {{Deprecated_Inline}}

  - : 这个属性控制是否要在框架内显示滚动条，允许的值包括：

    - `auto`: 仅当框架的内容超出框架的范围时显示滚动条。
    - `yes`: 始终显示滚动条。
    - `no`: 从不显示滚动条。

## 脚本

内联的框架，就像 {{HTMLElement("frame")}} 元素一样，会被包含在 {{domxref("window.frames")}} 伪数组（类数组的对象）中。

有了 DOM {{domxref("HTMLIFrameElement")}} 对象，脚本可以通过 {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} 访问内联框架的 {{domxref("window")}} 对象。 {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} 属性则引用了 `<iframe>` 内部的 `document` 元素，(等同于使用 contentWindow\.document），但 IE8-不支持。

在框架内部，脚本可以通过 {{domxref("window.parent")}} 引用父窗口对象。

脚本访问框架内容必须遵守[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)，并且无法访问非同源的 `window` 对象的几乎所有属性。同源策略同样适用于子窗体访问父窗体的 `window` 对象。跨域通信可以通过 [window.postMessage](/zh-CN/docs/Web/API/Window/postMessage) 来实现。

## 定位和缩放

作为一个[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)，可以使用 {{cssxref("object-position")}} 和 {{cssxref("object-fit")}} 来定位、对齐、缩放 `<iframe>` 元素内的文档。

> [!NOTE] > {{cssxref("object-fit")}} 属性对 `<iframe>` 元素没有影响。

## `error` 和 `load` 事件行为

`<iframe>` 上触发的 `error` 和 `load` 事件常用于检测本地网络中 HTTP 服务器的 URL. 因此，作为保护措施，浏览器不会触发 `<iframe>` 上的 [error](/zh-CN/docs/Web/API/HTMLElement/error_event) 事件，而 [load](/zh-CN/docs/Web/API/HTMLElement/load_event) 事件总是被触发，即使 `<iframe>` 的内容加载失败。

## 无障碍环境

使用 `iframe` 的 [title](/zh-CN/docs/Web/HTML/Global_attributes/title) 属性来标识框架的主要内容，这样可以极大方便使用辅助技术（例如屏幕阅读器）浏览网页的人。框架的标题应该清楚地描述框架的内容，例如：

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

如果没有标题，他们就只能浏览每一个 `<iframe>` 来获取需要的内容。这非常耗时间，也很容易让人迷惑，尤其是当页面中包含很多 `<iframe>`或者互动内容如音视频等的时候。

## 示例

### 一个简单的 \<iframe>

这个示例将页面 <https://example.org> 嵌入了一个 iframe 中。这是一个常见的 iframes 使用案例：嵌入来自另一个网站的内容。例如，下面的这个示例本身和页面顶部的[尝试一下](#尝试一下), 都是 MDN 通过使用 `<iframe>` 嵌入了其他地方的内容。

#### HTML

```html
<iframe
  src="https://example.org"
  title="iframe Example 1"
  width="400"
  height="300">
</iframe>
```

#### 结果

{{ EmbedLiveSample('A_simple_iframe', 640,400)}}

### 在 \<iframe> 嵌入源代码

这个示例直接在 iframe 中渲染源代码。它可以结合 `sandbox` 属性在显示用户生成的内容时防止脚本注入。

请注意在使用 `srcdoc` 时，在嵌入内容中的任何相对 URL 都将会相对于嵌入该内容的页面的 URL 进行解析，如果你想要使用锚链接指向嵌入内容，你需要明确使用 `about:srcdoc` 作为基准 URL。

#### HTML

```html-nolint
<article>
  <footer>Nine minutes ago, <i>jc</i> wrote:</footer>
  <iframe
    sandbox
    srcdoc="<p>There are two ways to use the <code>iframe</code> element:</p>
<ol>
<li><a href=&quot;about:srcdoc#embed_another&quot;>To embed content from another page</a></li>
<li><a href=&quot;about:srcdoc#embed_user&quot;>To embed user-generated content</a></li>
</ol>
<h2 id=&quot;embed_another&quot;>Embedding content from another page</h2>
<p>Use the <code>src</code> attribute to specify the URL of the page to embed:</p>
<pre><code>&amp;lt;iframe src=&quot;https://example.org&quot;&amp;gt;&amp;lt;/iframe&amp;gt;</code></pre>
<h2 id=&quot;embed_user&quot;>Embedding user-generated content</h2>
<p>Use the <code>srcdoc</code> attribute to specify the content to embed. This post is already an example!</p>
"
    width="500"
    height="250"
></iframe>
</article>
```

在使用 `srcdoc` 时，如何进行转义：

- 首先，编写 HTML 内容，想正常 HTML 一样转义需要转义的字符 (例如 `<`, `>`, `&`等).
- 在 `srcdoc` 属性中 `&lt;` 和 `<` 代表相同的字符。因此，在 HTML 中要将它们修改为实际需要的转义序列，将所有的 `&` 替换为 `&amp;`。例如 `&lt;` 修改为 `&amp;lt;`, `&amp;` 修改为 `&amp;amp;`。
- 替换所有的双引号 (`"`) 为 `&quot;`以防止 `srcdoc` 属性被提前终止。(如果你使用 `'`, 那么你应该将 `'` 替换为 `&apos;`). 这个步骤在上一个步骤后执行，所以 `&quot;` 不会变成 `&amp;quot;`.

#### 结果

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#flow_content"
          >流式内容</a
        >,
        <a href="/zh-CN/docs/Web/HTML/Content_categories#phrasing_content"
          >短语内容</a
        >、嵌入内容、交互内容、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>接受嵌入内容的任何元素</td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>、<a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLIFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSP: frame-ancestors](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
