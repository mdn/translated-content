---
title: <script>
slug: Web/HTML/Element/script
---

HTML `<script>` 元素用于嵌入或引用可执行脚本。这通常用作嵌入或者指向 JavaScript 代码。`<script>` 元素也能在其他语言中使用，比如 WebGL 的 GLSL 着色器语言。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Metadata_content">元数据内容</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">流式元素</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">短语元素</a>.</td>
  </tr>
  <tr>
   <th scope="row">可用内容</th>
   <td>动态脚本，如 <code>text/javascript</code>.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">可用父元素</th>
   <td>一些元素可以接受元数据内容，或者是一些元素可以接受短语元素。</td>
  </tr>
  <tr>
   <th scope="row">隐含的 ARIA 角色</th>
   <td>没有对应的角色</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>不允许任何角色</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLScriptElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- {{htmlattrdef("async")}}
  - : 对于普通脚本，如果存在 `async` 属性，那么普通脚本会被并行请求，并尽快解析和执行。
    对于[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)，如果存在 `async` 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。
    该属性能够消除解析阻塞的 Javascript。解析阻塞的 Javascript 会导致浏览器必须加载并且执行脚本，之后才能继续解析。`defer` 在这一点上也有类似的作用。
    这是个布尔属性：布尔属性的存在意味着 true 值，布尔属性的缺失意味着 false 值。
    关于浏览器支持请参见[浏览器兼容性](#浏览器兼容性)。另可参见文章[asm.js 的异步脚本](/zh-CN/docs/Games/Techniques/Async_scripts)。
- {{htmlattrdef("crossorigin")}}
  - : 那些没有通过标准[CORS](/zh-CN/docs/HTTP_access_control)检查的正常`script` 元素传递最少的信息到 {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}}。可以使用本属性来使那些将静态资源放在另外一个域名的站点打印错误信息。参考 [CORS 设置属性](/zh-CN/docs/Web/HTML/CORS_settings_attributes)了解对有效参数的更具描述性的解释。

    ```html
    <script src="" crossorigin="anonymous"></script>
    ```

- {{htmlattrdef("defer")}}
  - : 这个布尔属性被设定用来通知浏览器该脚本将在文档完成解析后，触发 {{event("DOMContentLoaded")}} 事件前执行。
    有 `defer` 属性的脚本会阻止 `DOMContentLoaded` 事件，直到脚本被加载并且解析完成。
    > **警告：** 如果缺少 `src` 属性（即内嵌脚本），该属性不应被使用，因为这种情况下它不起作用。`defer` 属性对模块脚本没有作用 —— 他们默认 defer。
- {{htmlattrdef("integrity")}}
  - : 包含用户代理可用于验证已提取资源是否已无意外操作的内联元数据。参见 [Subresource Integrity](/zh-CN/docs/Web/Security/Subresource_Integrity)。
- {{htmlattrdef("nomodule")}}
  - : 这个布尔属性被设置来标明这个脚本在支持 [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) 的浏览器中不执行。 — 实际上，这可用于在不支持模块化 JavaScript 的旧浏览器中提供回退脚本。
- {{htmlattrdef("nonce")}}
  - : A cryptographic nonce (number used once) to whitelist inline scripts in a [script-src Content-Security-Policy](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
- {{htmlattrdef("referrerpolicy")}}
  - : Indicates which [referrer](/zh-CN/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:

    - `no-referrer`: The {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade` (default): The {{HTTPHeader("Referer")}} header will not be sent to {{Glossary("origin")}}s without {{Glossary("TLS")}} ({{Glossary("HTTPS")}}).
    - `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](/zh-CN/docs/Archive/Mozilla/URIScheme), {{Glossary("host")}}, and {{Glossary("port")}}.
    - `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
    - `same-origin`: A referrer will be sent for {{Glossary("Same-origin policy", "same origin")}}, but cross-origin requests will contain no referrer information.
    - `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS→HTTPS), but don't send it to a less secure destination (e.g. HTTPS→HTTP).
    - `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS→HTTPS), and send no header to a less secure destination (e.g. HTTPS→HTTP).
    - `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](/zh-CN/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to `no-referrer-when-downgrade`.
- {{htmlattrdef("src")}}
  - : 这个属性定义引用外部脚本的 URI，这可以用来代替直接在文档中嵌入脚本。指定了 src 属性的 script 元素标签内不应该再有嵌入的脚本。
- {{htmlattrdef("type")}}
  - : 该属性定义 script 元素包含或`src`引用的脚本语言。属性的值为 MIME 类型; 支持的 MIME 类型包括`text/javascript`, `text/ecmascript`, `application/javascript`, 和`application/ecmascript`。如果没有定义这个属性，脚本会被视作 JavaScript。
    如果 MIME 类型不是 JavaScript 类型（上述支持的类型），则该元素所包含的内容会被当作数据块而不会被浏览器执行。
    如果 type 属性为`module`，代码会被当作 JavaScript 模块 {{experimental_inline}}。请参见[ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
    在 Firefox 中可以通过定义 type=application/javascript;version=1.8 来使用如 let 声明这类的 JS 高版本中的先进特性。但请注意这是个非标准功能，其他浏览器，特别是基于 Chrome 的浏览器可能会不支持。
    关于如何引入特殊编程语言，请参见[这篇文章](/zh-CN/Add-ons/Code_snippets/Rosetta)。
- {{htmlattrdef("text")}}
  - : 和 textContent 属性类似，本属性用于设置元素的文本内容。但和 textContent 不一样的是，本属性在节点插入到 DOM 之后，此属性被解析为可执行代码。

### Deprecated attributes

- {{htmlattrdef("charset")}} {{Deprecated_inline}}
  - : 如果存在，值必须和“`utf-8`”不区分大小写的匹配。当然声明 `charset` 是没有必要的，因为页面文档必须使用 UTF-8，而 `script` 元素会从页面文档中继承这个属性。
- {{htmlattrdef("language")}} {{Deprecated_inline}}
  - : 和 type 属性类似，这个属性定义脚本使用的语言。但是与 type 不同的是，这个属性的可能值从未被标准化过。请用`type`属性代替这个属性。

## 示例

### 基本用法

下面这些示例说明了如何在 HTML4 和 HTML5 中通过使用`<script>`元素来导入脚本。

```html
<!-- HTML4 and (x)HTML -->
<script type="text/javascript" src="javascript.js">

<!-- HTML5 -->
<script src="javascript.js"></script>
```

### Module fallback

Browsers that support the `module` value for the `type` attribute ignore any script with a `nomodule` attribute. That enables you to use module scripts while also providing `nomodule`-marked fallback scripts for non-supporting browsers.

```plain
<script type="module" src="main.mjs"></script>
<script nomodule src="fallback.js"></script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.currentScript")}}
- [Ryan Grove's \<script> and \<link> node event compatibility chart](http://pieisgood.org/test/script-link-events/)

{{HTMLRef}}
