---
title: <script>：脚本元素
slug: Web/HTML/Element/script
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<script>`** 元素用于嵌入可执行代码或数据，这通常用作嵌入或者引用 JavaScript 代码。`<script>` 元素也能在其他语言中使用，比如 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 的 GLSL 着色器语言和 [JSON](/zh-CN/docs/Glossary/JSON)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#元数据内容">元数据内容</a>、<a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>动态脚本，如 <code>text/javascript</code>。</td>
    </tr>
    <tr>
     <th scope="row">标签省略</th>
     <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>任何可以接受<a href="/zh-CN/docs/Web/HTML/Content_categories#元数据内容">元数据内容</a>，或者<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容">短语内容</a>的元素。</td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">没有对应的角色</a></td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>不允许任何 <code>role</code></td>
     </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
 </tbody>
</table>

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `async`

  - : 对于普通脚本，如果存在 `async` 属性，那么普通脚本会被并行请求，并尽快解析和执行。

    对于[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)，如果存在 `async` 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。

    该属性能够消除**解析阻塞的 Javascript**。解析阻塞的 Javascript 会导致浏览器必须加载并且执行脚本，之后才能继续解析。`defer` 在这一点上也有类似的作用。

    这是个布尔属性：布尔属性的存在意味着 true 值，布尔属性的缺失意味着 false 值。

    关于浏览器支持，请参见[浏览器兼容性](#浏览器兼容性)章节。另可参见 [asm.js 的异步脚本](/zh-CN/docs/Games/Techniques/Async_scripts)文章。

- `crossorigin`
  - : 正常的 `script` 元素将最小的信息传递给 {{domxref('Window.error_event', 'window.onerror')}}，用于那些没有通过标准 {{Glossary("CORS")}} 检查的脚本。要允许对静态媒体使用独立域名的网站进行错误记录，请使用此属性。参见 [CORS 设置属性](/zh-CN/docs/Web/HTML/Attributes/crossorigin)，以获得对其有效参数的更多描述性解释。
- `defer`

  - : 这个布尔属性的设置是为了向浏览器表明，该脚本是要在文档被解析后，但在触发 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件之前执行的。

    包含 `defer` 属性的脚本将阻塞 `DOMContentLoaded` 事件触发，直到脚本完成加载并执行。

    > **警告：** 本属性不应在缺少 `src` 属性的情况下使用（也就是内联脚本的情况下），这种情况下将不会生效。
    >
    > `defer` 属性对[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)也不会生效——它们默认是 defer 的。

    包含 `defer` 属性的脚本会按照它们出现在文档中的顺序执行。

    这个属性能够消除**阻塞解析的 JavaScript**，在这种情况下，浏览器必须在继续解析之前加载和执行脚本。`async` 在这种情况下也有类似的效果。

- `fetchpriority` {{Experimental_Inline}}

  - : 提供一个指示，说明在获取外部脚本时要使用的相对优先级。允许的值：

    - `high`
      - : 获取该脚本的优先级比其他外部脚本的等级要高。
    - `low`
      - : 获取该脚本的优先级比其他外部脚本的等级要低。
    - `auto`
      - : 默认值：自动确定获取该脚本的相对优先级。

- `integrity`
  - : 包含用户代理可用于验证所获取到资源的完整性的内联元数据。参见[子资源完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)。
- `nomodule`
  - : 这个布尔属性被设置来标明这个脚本不应该在支持 [ES 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的浏览器中执行。实际上，这可用于在不支持模块化 JavaScript 的旧浏览器中提供回退脚本。
- `nonce`
  - : 在 [script-src Content-Security-Policy](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) 中允许脚本的一个一次性加密随机数（nonce）。服务器每次传输策略时都必须生成一个唯一的 nonce 值。提供一个无法猜测的 nonce 是至关重要的，因为绕过一个资源的策略是微不足道的。
- `referrerpolicy`

  - : 表示在获取脚本或脚本获取资源时，要发送哪个 [referrer](/zh-CN/docs/Web/API/Document/referrer)：

    - `no-referrer`：不会发送 {{HTTPHeader("Referer")}} 标头。
    - `no-referrer-when-downgrade`（默认）：如果没有 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）协议，{{HTTPHeader("Referer")}} 标头将不会被发送到{{Glossary("origin","源")}}上。
    - `origin`：发送的 referrer 将被限制在 referrer 页面的源：其[协议](/zh-CN/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)、{{Glossary("host","主机")}}和{{Glossary("port","端口")}}。
    - `origin-when-cross-origin`：将会限制发送至其他源的 referrer 的协议、主机和端口号。在同源的导航上仍然包括路径。
    - `same-origin`：在{{Glossary("Same-origin policy", "同源")}}内将发送 referrer，但是跨源请求不包含 referrer 信息。
    - `strict-origin`：只在协议安全等级相同时（如 HTTPS→HTTPS）发送文档的源作为 referrer，目标安全性降低（如 HTTPS→HTTP）时不发送。
    - `strict-origin-when-cross-origin`：在执行同源请求时，发送完整的 URL，但只在协议安全级别保持不变（如 HTTPS→HTTPS）时发送源，而在目标安全性降低（如 HTTPS→HTTP）时不发送标头。
    - `unsafe-url`：referrer 将包含源*和*路径（但不包含[片段](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)、[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)和[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**这个值是不安全的**，因为它将 TLS 保护的资源的源和路径泄露给不安全的源。
      > **备注：** 空字符串（`""`）既是默认值，也是在不支持 `referrerpolicy` 的情况下的一个回退值。如果没有在 `<script>` 元素上明确指定 `referrerpolicy`，它将采用更高级别的 referrer 策略，即对整个文档或域设置的策略。如果没有更高级别的策略，空字符串将被视为等同于 `no-referrer-when-downgrade`。

- `src`
  - : 这个属性定义引用外部脚本的 URI，这可以用来代替直接在文档中嵌入脚本。
- [**`type`**](/zh-CN/docs/Web/HTML/Element/script/type)

  - : 该属性表示所代表的脚本类型。该属性的值可能为以下类型：
    - **属性未设置（默认），一个空字符串，或一个 JavaScript MIME 类型**
      - : 代表脚本为包含 JavaScript 代码的“传统的脚本”。如果脚本指的是 JavaScript 代码，我们鼓励作者省略这个属性，而不是指定一个 MIME 类型。所有的 JavaScript MIME 类型都列在 [IANA 的媒体类型规范](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript)中。
    - `module`
      - : 此值导致代码被视为 JavaScript 模块。其中的代码内容会延后处理。`charset` 和 `defer` 属性不会生效。对于使用 `module` 的更多信息，请参见 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南。与传统代码不同的是，模块代码需要使用 CORS 协议来跨源获取。
    - [`importmap`](/zh-CN/docs/Web/HTML/Element/script/type/importmap)
      - : 此值代表元素体内包含导入映射（importmap）表。导入映射表是一个 JSON 对象，开发者可以用它来控制浏览器在导入 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)时如何解析模块标识符。
    - **任何其他值**
      - : 所嵌入的内容被视为一个数据块，不会被浏览器处理。开发人员必须使用有效的 MIME 类型，但不是 JavaScript MIME 类型来表示数据块。所有其他属性，包括 `src` 均会被忽略。

- `blocking` {{Experimental_Inline}}
  - : 这个属性明确指出，在获取脚本的过程中，某些操作应该被阻断。要阻断的操作必须是一个以空格分隔的列表，下面列出了阻断属性。
    - `render`：屏幕上渲染内容的操作应该被阻断。

### 废弃的属性

- `charset` {{Deprecated_inline}}
  - : 如果存在，它的值必须是 ASCII 大小写不敏感的“`utf-8`”的匹配。没有必要指定 `charset` 属性，因为文档必须使用 UTF-8，而且 `script` 元素从文档继承其字符编码。
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : 和 `type` 属性类似，这个属性定义脚本使用的语言。但是与 `type` 不同的是，这个属性的可能值从未被标准化过。请用 `type` 属性代替这个属性。

## 备注

没有 [`async`](#async)、[`defer`](#defer) 或 `type="module"` 属性的脚本，以及没有 `type="module"` 属性的内联脚本，会在浏览器继续解析页面之前立即获取并执行。

脚本应该以 `text/javascript` 的 MIME 类型提供，但浏览器比较宽容，只有在脚本以图像类型（`image/*`）、视频类型（`video/*`）、音频类型（`audio/*`）或 `text/csv` 提供时才会阻止它们。如果脚本受阻，将向该元素发送 {{domxref("HTMLElement/error_event", "error")}} 事件；否则，将发送 {{domxref("HTMLElement/load_event", "load")}} 事件。

## 示例

### 基本用法

下面这些示例说明了如何使用 `<script>` 元素来导入（外部）脚本。

```html
<script src="javascript.js"></script>
```

以下示例展示了如何向 `<script>` 元素内放入（内联）脚本。

```html
<script>
  alert("Hello World!");
</script>
```

### 模块回落

支持 `module` 作为 [`type`](#type) 属性的浏览器忽略任何具有 `nomodule` 属性的脚本。这种机制可以允许你在使用模块脚本时为不支持的浏览器提供 `nomodule` 标记的回落脚本。

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### 使用导入映射导入模块

在脚本中导入模块时，如果你不使用 [`type=importmap`](#importmap) 特性，那么每个模块都必须使用模块指定符来导入，该指定符可以是绝对的也可以是相对的 URL。在下面的例子中，第一个模块标识符（“./shapes/square.js”）是相对于文档的根 URL 解析的，而第二个是绝对 URL。

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

导入映射允许你提供一个映射，当匹配的时候，可以替换模块标识符文本。下面的导入映射定义了“square”和“circle”键，可以作为上述模块指定的别名。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

这允许我们使用模块标识符中的名称导入模块（而不是绝对或相对的 URL）。

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

关于使用导入映射的更多例子，请参见 JavaScript 模块指南中的[使用导入映射导入模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)章节。

### 在 HTML 中嵌入数据

你也可以使用 `<script>` 元素来在 HTML 中嵌入服务端渲染的数据，在 `type` 属性中指定一个合法的非 JavaScript MIME 类型即可。

```html
<!-- 由服务端生成 -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- 静态代码 -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

### 在脚本被获取和执行之前阻止渲染

你可以在 `blocking` 属性中包含 `render` 标记；页面的渲染将被阻止，直到脚本被获取和执行。在下面的例子中，我们封锁了一个异步脚本的渲染、这样，脚本不会阻塞解析，但保证在渲染开始前被执行。

```html
<script blocking="render" async src="async-script.js"></script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.currentScript")}}
- [Flavio Copes 关于“高效加载 JavaScript”的文章，解释了 `async` 和 `defer` 之间的区别](https://flaviocopes.com/javascript-async-defer/)
- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南
