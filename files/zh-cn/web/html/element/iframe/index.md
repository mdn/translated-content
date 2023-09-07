---
title: <iframe>
slug: Web/HTML/Element/iframe
---

{{HTMLSidebar}}

**HTML 内联框架元素 (`<iframe>`)** 表示嵌套的{{Glossary("browsing context")}}。它能够将另一个 HTML 页面嵌入到当前页面中。

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

每个嵌入的浏览上下文（embedded browsing context）都有自己的[会话历史记录 (session history)](/zh-CN/docs/Web/API/History)和[DOM 树](/zh-CN/docs/Web/API/Document)。包含嵌入内容的浏览上下文称为*父级浏览上下文*。顶级浏览上下文（没有父级）通常是由 {{domxref("Window")}} 对象表示的浏览器窗口。

> **警告：** 页面上的每个`<iframe>`都需要增加内存和其他计算资源，这是因为每个浏览上下文都拥有完整的文档环境。虽然理论上来说你能够在代码中写出来无限多的`<iframe>`，但是你最好还是先看看这么做会不会导致某些性能问题。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `allow`
  - : 用于为`<iframe>`指定其[特征策略](/zh-CN/docs/Web/HTTP/策略特征).
- `allowfullscreen`

  - : 设置为`true`时，可以通过调用 `<iframe>` 的 {{domxref("Element.requestFullscreen", "requestFullscreen()")}} 方法激活全屏模式。

    > **备注：** 这是一个历史遗留属性，已经被重新定义为 `allow="fullscreen"`。

- `allowpaymentrequest`

  - : 设置为`true`时，跨域的 `<iframe>` 就可以调用 [Payment Request API](/zh-CN/docs/Web/API/Payment_Request_API)。

    > **备注：** 这是一个历史遗留属性，已经被重新定义为 `allow="payment"`.

- `csp` {{experimental_inline}}
  - : 对嵌入的资源配置[内容安全策略](/zh-CN/docs/Web/HTTP/CSP)。查看 {{domxref("HTMLIFrameElement.csp")}} 获取详情。
- `height`
  - : 以 CSS 像素格式，或像素格式，或百分比格式指定 frame 的高度。默认值为`150`。
- `importance` {{experimental_inline}}
  - : 表示 `<iframe>` 的 `src` 属性指定的资源的加载优先级。允许的值有：
    - `auto` (default)
      - : 不指定优先级。浏览器根据自身情况决定资源的加载顺序
    - `high`
      - : 资源的加载优先级较高
    - `low`
      - : 资源的加载优先级较低
- `name`
  - : 用于定位嵌入的浏览上下文的名称。该名称可以用作 {{HTMLElement("a")}} 标签与 {{HTMLElement("form")}} 标签的 `target` 属性值，也可以用作 {{HTMLElement("input")}} 标签和 {{HTMLElement("button")}} 标签的 `formtarget` 属性值，还可以用作 {{domxref("Window.open()","window.open()")}} 方法的 `windowName` 参数值。
- `referrerpolicy`

  - : 表示在获取 iframe 资源时如何发送 [referrer](/zh-CN/docs/Web/API/Document/referrer) 首部：

    - `no-referrer`: 不发送 {{HTTPHeader("Referer")}} 首部。
    - `no-referrer-when-downgrade` (default): 向不受 {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) 保护的 {{Glossary("origin")}} 发送请求时，不发送 {{HTTPHeader("Referer")}} 首部。
    - `origin`: referrer 首部中仅包含来源页面的源。换言之，仅包含来源页面的 [scheme](/zh-CN/docs/Archive/Mozilla/URIScheme), {{Glossary("host")}}, 以及 {{Glossary("port")}}。
    - `origin-when-cross-origin`: 发起跨域请求时，仅在 referrer 中包含来源页面的源。发起同源请求时，仍然会在 referrer 中包含来源页面在服务器上的路径信息。
    - `same-origin`: 对于 {{Glossary("Same-origin policy", "same origin")}}（同源）请求，发送 referrer 首部，否则不发送。
    - `strict-origin`: 仅当被请求页面和来源页面具有相同的协议安全等级时才发送 referrer 首部（比如从采用 HTTPS 协议的页面请求另一个采用 HTTPS 协议的页面）。如果被请求页面的协议安全等级较低，则不会发送 referrer 首部（比如从采用 HTTPS 协议的页面请求采用 HTTP 协议的页面）。
    - `strict-origin-when-cross-origin`: 当发起同源请求时，在 referrer 首部中包含完整的 URL。当被请求页面与来源页面不同源但是有相同协议安全等级时（比如 HTTPS→HTTPS），在 referrer 首部中仅包含来源页面的源。当被请求页面的协议安全等级较低时（比如 HTTPS→HTTP），不发送 referrer 首部。
    - `unsafe-url`: 始终在 referrer 首部中包含源以及路径（但不包括 [fragment](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/hash)，[密码](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/password)，或[用户名](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/username)）。**这个值是不安全的**, 因为这样做会暴露受 TLS 保护的资源的源和路径信息。

- `sandbox`

  - : 该属性对呈现在 iframe 框架中的内容启用一些额外的限制条件。属性值可以为空字符串（这种情况下会启用所有限制），也可以是用空格分隔的一系列指定的字符串。有效的值有：

    - `allow-downloads-without-user-activation` {{experimental_inline}}: 允许在没有征求用户同意的情况下下载文件。
    - `allow-forms`: 允许嵌入的浏览上下文提交表单。如果没有使用该关键字，则无法提交表单。
    - `allow-modals`: 允许嵌入的浏览上下文打开模态窗口。
    - `allow-orientation-lock`: 允许嵌入的浏览上下文锁定屏幕方向（译者注：比如智能手机、平板电脑的水平朝向或垂直朝向）。
    - `allow-pointer-lock`: 允许嵌入的浏览上下文使用 [Pointer Lock API](/zh-CN/docs/API/Pointer_Lock_API).
    - `allow-popups`: 允许弹窗 (例如 window\.open, target="\_blank", `showModalDialog`)。如果没有使用该关键字，相应的功能将自动被禁用。
    - `allow-popups-to-escape-sandbox`: 允许沙箱化的文档打开新窗口，并且新窗口不会继承沙箱标记。例如，安全地沙箱化一个广告页面，而不会在广告链接到的新页面中启用相同的限制条件。
    - `allow-presentation`: 允许嵌入的浏览上下文开始一个 [presentation session](/zh-CN/docs/Web/API/PresentationRequest)。
    - `allow-same-origin`: 如果没有使用该关键字，嵌入的浏览上下文将被视为来自一个独立的源，这将使 {{Glossary("same-origin policy")}} 同源检查失败。
    - `allow-scripts`: 允许嵌入的浏览上下文运行脚本（但不能创建弹窗）。如果没有使用该关键字，就无法运行脚本。
    - `allow-storage-access-by-user-activation` {{experimental_inline}}: 允许嵌入的浏览上下文通过 [Storage Access API](/zh-CN/docs/Web/API/Storage_Access_API) 使用父级浏览上下文的存储功能。
    - `allow-top-navigation`: 允许嵌入的浏览上下文导航（加载）内容到顶级的浏览上下文。
    - `allow-top-navigation-by-user-activation`: 允许嵌入的浏览上下文在经过用户允许后导航（加载）内容到顶级的浏览上下文。

    > **备注：** 当被嵌入的文档与主页面同源时，强烈建议不要同时使用 `allow-scripts` 和 `allow-same-origin`。如果同时使用，嵌入的文档就可以通过代码删除 `sandbox` 属性，如此，就安全性而言还不如不用`sandbox`。
    >
    > - 如果攻击者可以在沙箱化的 `iframe` 之外展示内容，例如用户在新标签页中打开内联框架，那么沙箱化也就没有意义了。建议把这种内容放置到独立的专用域中，以减小可能的损失。
    > - 沙箱属性 (sandbox) 在 Internet Explorer 9 及更早的版本上不被支持。

- `src`
  - : 被嵌套的页面的 URL 地址。使用 `about:blank` 值可以嵌入一个遵从[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)的空白页。在 Firefox（version 65 及更高版本）、基于 Chromium 的浏览器、Safari/iOS 中使用代码移除 `iframe` 的 `src` 属性（例如通过 {{domxref("Element.removeAttribute()")}} ）会导致 `about:blank` 被载入 frame。
- `srcdoc`
  - : 该属性是一段 HTML 代码，这些代码会被渲染到 iframe 中。如果浏览器不支持 `srcdoc` 属性，则会渲染 `src` 属性表示的内容。
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

### 非标准属性 {{non-standard_inline}}

- `mozbrowser` {{non-standard_inline}}
  - : 这个属性可以让 `<iframe>` 变得像顶级浏览器窗口，详情请参看 [Browser API](/zh-CN/docs/Web/API/Using_the_Browser_API)。这个属性**只能**在 [WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) 中使用。

> **备注：** 查看 [Firefox bug 1318532](https://bugzil.la/1318532) 了解如何在 Firefox 的 WebExtensions 中使用此属性。

## 脚本

内联的框架，就像 {{HTMLElement("frame")}} 元素一样，会被包含在 {{domxref("window.frames")}} 伪数组（类数组的对象）中。

有了 DOM {{domxref("HTMLIFrameElement")}} 对象，脚本可以通过 {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} 访问内联框架的 {{domxref("window")}} 对象。 {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} 属性则引用了 `<iframe>` 内部的 `document` 元素，(等同于使用 contentWindow\.document），但 IE8-不支持。

在框架内部，脚本可以通过 {{domxref("window.parent")}} 引用父窗口对象。

脚本访问框架内容必须遵守[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)，并且无法访问非同源的 `window` 对象的几乎所有属性。同源策略同样适用于子窗体访问父窗体的 `window` 对象。跨域通信可以通过 [window.postMessage](/zh-CN/docs/Web/API/Window/postMessage) 来实现。

## 定位和缩放

作为一个[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)，可以使用 {{cssxref("object-position")}} 和 {{cssxref("object-fit")}} 来定位、对齐、缩放 `<iframe>` 元素内的文档。

## 示例

### 一个简单的 \<iframe>

此示例将位于 <https://example.org> 的页面嵌入到 iframe 中。

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

{{ EmbedLiveSample('一个简单的 iframe') }}

## 无障碍环境

使用 `iframe` 的 [title](/zh-CN/docs/Web/HTML/Global_attributes/title) 属性来标识框架的主要内容，这样可以极大方便使用辅助技术（例如屏幕阅读器）浏览网页的人。框架的标题应该清楚地描述框架的内容，例如：

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

如果没有标题，他们就只能浏览每一个框架来获取需要的内容。这非常耗时间，也很容易让人迷惑，尤其是当页面中包含很多框架或者互动内容如音视频等的时候。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
