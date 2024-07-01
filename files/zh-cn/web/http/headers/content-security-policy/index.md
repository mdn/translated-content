---
title: Content-Security-Policy
slug: Web/HTTP/Headers/Content-Security-Policy
---

{{HTTPSidebar}}HTTP 响应头 **`Content-Security-Policy`** 允许站点管理者控制用户代理能够为指定的页面加载哪些资源。除了少数例外情况，设置的政策主要涉及指定服务器的源和脚本结束点。这将帮助防止跨站脚本攻击（`Cross-Site Script`）（{{Glossary("XSS")}}）。

如需更多信息，请查阅[Content Security Policy (CSP)](/zh-CN/docs/Web/HTTP/CSP)。

| 头部类型                              | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Content-Security-Policy: <policy-directive>; <policy-directive>
```

## 指令

### 获取指令：{{Glossary("Fetch directive", "Fetch directives")}}

通过获取指令来控制某些可能被加载的确切的资源类型的位置。

- {{CSP("child-src")}}

  - : **child-src**：为 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 和其他内嵌浏览器内容（例如用 {{HTMLElement("frame")}} 和 {{HTMLElement("iframe")}} 加载到页面的内容）定义合法的源地址。

    > **警告：** 如果开发者希望管控内嵌浏览器内容和 web worker 应分别使用 {{CSP("frame-src")}} 和 {{CSP("worker-src")}} 指令，来相对的取代 **`child-src`**。

- {{CSP("connect-src")}}
  - : **connect-src**：限制能通过脚本接口加载的 URL。
- {{CSP("default-src")}}
  - : **default-src**：为其他取指令提供备用服务 {{Glossary("Fetch directive", "fetch directives")}}。
- {{CSP("font-src")}}
  - : **font-src**：设置允许通过 {{cssxref("@font-face")}} 加载的字体源地址。
- {{CSP("frame-src")}}
  - : **frame-src**：设置允许通过类似 {{HTMLElement("frame")}} 和 {{HTMLElement("iframe")}} 标签加载的内嵌内容的源地址。
- {{CSP("img-src")}}
  - : **img-src**：限制图片和图标的源地址。
- {{CSP("manifest-src")}}
  - : **manifest-src**：限制应用声明文件的源地址。
- {{CSP("media-src")}}
  - : **media-src**：限制通过 {{HTMLElement("audio")}}、{{HTMLElement("video")}} 或 {{HTMLElement("track")}} 标签加载的媒体文件的源地址。
- {{CSP("object-src")}}
  - : **object-src**：限制 {{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 标签的源地址。

> **备注：** 被 `object-src` 控制的元素可能碰巧被当作遗留 HTML 元素，导致不支持新标准中的功能（例如 `<iframe>` 中的安全属性 `sandbox` 和 `allow`）。因此**建议**限制该指令的使用（比如，如果可行，将 `object-src` 显式设置为 `'none'`）。

- {{CSP("prefetch-src")}}
  - : 指定预加载或预渲染的允许源地址。
- {{CSP("script-src")}}
  - : 限制 JavaScript 的源地址。
- {{CSP("style-src")}}
  - : 限制层叠样式表文件源。
- {{CSP("webrtc-src")}} {{experimental_inline}}
  - : 指定[WebRTC](/docs/Web/API/WebRTC_API)连接的合法源地址。
- {{CSP("worker-src")}}
  - : 限制 {{domxref("Worker")}}、{{domxref("SharedWorker")}} 或 {{domxref("ServiceWorker")}} 脚本源。

### 文档指令 | Document directives

文档指令管理文档属性或者 worker 环境应用的策略。

- {{CSP("base-uri")}}
  - : 限制在 DOM 中 {{HTMLElement("base")}} 元素可以使用的 URL。
- {{CSP("plugin-types")}}
  - : 通过限制可以加载的资源类型来限制哪些插件可以被嵌入到文档中。
- {{CSP("sandbox")}}
  - : 类似 {{HTMLElement("iframe")}} [`sandbox`](/zh-CN/docs/Web/HTML/Element/iframe#sandbox) 属性，为请求的资源启用沙盒。
- {{CSP("disown-opener")}} {{Deprecated_Inline}}
  - : 确保资源在导航的时候能够脱离父页面。（windown.opener 对象）Ensures a resource will disown its opener when navigated to.

### 导航指令

导航指令管理用户能打开的链接或者表单可提交的链接

- {{CSP("form-action")}}
  - : 限制能被用来作为给定上下文的表单提交的目标 URL（说白了，就是限制 form 的 action 属性的链接地址）
- {{CSP("frame-ancestors")}}
  - : 指定可能嵌入页面的有效父项 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 或 {{HTMLElement("embed")}}。
- {{CSP("navigation-to")}} {{experimental_inline}}
  - : 限制文档可以通过以下任何方式访问 URL，包括 {{HTMLElement("form")}}（如果未指定 {{CSP("form-action")}}）、{{HTMLElement("a")}}、{{DOMxRef("window.location")}}、{{DOMxRef("window.open")}} 等。

### 报告指令

报告指令控制 CSP 违规的报告过程。更多请看 {{HTTPHeader("Content-Security-Policy-Report-Only")}} 报头。

- {{CSP("report-uri")}} {{deprecated_inline}}
  - : 当出现可能违反 CSP 的操作时，让客户端提交报告。这些违规报告会以 JSON 文件的格式通过 POST 请求发送到指定的 URI
- {{CSP("report-to")}} {{experimental_inline}}
  - : Fires a `SecurityPolicyViolationEvent`.

### 其他指令 | Other directives

- {{CSP("block-all-mixed-content")}}
  - : 当使用 HTTPS 加载页面时阻止使用 HTTP 加载任何资源。
- {{CSP("referrer")}} {{Deprecated_Inline}}
  - : 用来指定会离开当前页面的跳转链接的 referer header 信息。应该使用 {{HTTPHeader("Referrer-Policy")}} 替代。
- {{CSP("require-sri-for")}}
  - : 需要使用 {{Glossary("SRI")}} 作用于页面上的脚本或样式。
- {{CSP("upgrade-insecure-requests")}}
  - : 让浏览器把一个网站所有的不安全 URL（通过 HTTP 访问）当做已经被安全的 URL 链接（通过 HTTPS 访问）替代。这个指令是为了哪些有量大不安全的传统 URL 需要被重写时候准备的。

## CSP 和 Workers

[Workers](/zh-CN/docs/Web/API/Worker) 一般来说不被创建他的文档（或者父级 Worker）的 CSP 策略管理。如果要为 Worker 指定 CSP 策略，可以为 Worker 脚本的请求的响应的头部设置 CSP 策略。

例外的情况是，如果 Worker 脚本的来源是一个全局唯一 ID（比如，它的 URL 是一个结构化的数据或者 BLOB）。在这种情况下，这个 Worker 会继承它所属的文档或者创建它的 Worker 的 CSP 策略。

## 多内容安全策略

CSP 允许在一个资源中指定多个策略，包括通过 `Content-Security-Policy` 头，以及 {{HTTPHeader("Content-Security-Policy-Report-Only")}} 头，和 {{HTMLElement("meta")}} 组件。

你可以像以下实例一样多次调用 `Content-Security-Policy` 头。特别注意这里的 {{CSP("connect-src")}} 指令。尽管第二个策略允许连接，第一个策略仍然包括了 `connect-src 'none'`。添加了附加的策略后，只会让资源保护的能力更强，也就是说不会有接口可以被允许访问，等同于最严格的策略，`connect-src 'none'` 强制开启。

```plain
Content-Security-Policy: default-src 'self' http://example.com;
                         connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                         script-src http://example.com/
```

## 示例

示例：禁用不安全的内联/动态执行，只允许通过 https 加载这些资源（如图片、字体、脚本等）：

```plain
// header
Content-Security-Policy: default-src https:

// meta tag
<meta http-equiv="Content-Security-Policy" content="default-src https:">
```

示例：已经存在的一个网站，用了太多内联代码修复问题，而且想确保资源只从 https 加载，并且禁止插件：

```plain
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

实例：还没有开始实施上面的策略；相反，只是开始上报可能会发生违反安全策略的行为：

```plain
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

查看 [Mozilla Web Security Guidelines](https://wiki.mozilla.org/Security/Guidelines/Web_Security#Examples_5) 上的更多例子。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [Content Security in WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Display security and privacy policies In Firefox Developer Tools](/zh-CN/docs/Tools/GCLI/Display_security_and_privacy_policies)
