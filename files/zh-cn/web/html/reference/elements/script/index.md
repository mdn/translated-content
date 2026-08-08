---
title: "`<script>` HTML 脚本元素"
short-title: <script>
slug: Web/HTML/Reference/Elements/script
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

[HTML](/zh-CN/docs/Web/HTML) **`<script>`** 元素用于嵌入可执行代码或数据；通常用来嵌入或引用 JavaScript 代码。`<script>` 元素也可用于其他语言，例如 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 的 GLSL 着色器编程语言和 [JSON](/zh-CN/docs/Glossary/JSON)。

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `async`
  - : 对于经典脚本，若存在 `async` 属性，则会在解析过程中并行获取该经典脚本，并在可用后尽快对其求值。

    对于[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)，若存在 `async` 属性，则会在解析过程中并行获取脚本及其所有依赖项，并在它们可用后尽快对其求值。

    > [!WARNING]
    > 对于经典脚本，缺少 `src` 属性（即内联脚本）时不得使用此属性；在这种情况下它不起作用。

    此属性可消除**解析阻塞的 JavaScript**：浏览器本来必须先加载并对脚本求值，才能继续解析。`defer` 在此情形下有类似作用。

    若同时指定此属性和 `defer` 属性，该元素的行为等同于只指定 `async` 属性。

    这是一个布尔属性：元素上存在布尔属性表示真值，不存在表示假值。

    有关浏览器支持的说明，请参见[浏览器兼容性](#浏览器兼容性)。另请参阅 [asm.js 的异步脚本](/zh-CN/docs/Games/Techniques/Async_scripts)。

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : 指定希望浏览器在脚本资源请求中一并发送 {{httpheader("Attribution-Reporting-Eligible")}} 标头。服务器端可据此在响应中发送 {{httpheader("Attribution-Reporting-Register-Source")}} 或 {{httpheader("Attribution-Reporting-Register-Trigger")}} 标头，以分别注册基于 JavaScript 的[归因来源](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources)或[归因触发器](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers)。应返回哪种响应标头取决于触发注册的 `Attribution-Reporting-Eligible` 标头的值。

    > [!NOTE]
    > 也可以通过发送包含 `attributionReporting` 选项的 {{domxref("Window/fetch", "fetch()")}} 请求（直接在 `fetch()` 调用中设置，或在传给 `fetch()` 调用的 {{domxref("Request")}} 对象中设置），或者发送一个在请求对象上调用 {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} 的 {{domxref("XMLHttpRequest")}}，注册基于 JavaScript 的归因来源或触发器。

    此属性有两种可设置的形式：

    - 布尔值，即仅使用 `attributionsrc` 名称。这表示希望将 {{httpheader("Attribution-Reporting-Eligible")}} 标头发送至 `src` 属性所指向的同一服务器。当在同一服务器上处理归因来源或触发器注册时，这种形式适用。注册归因触发器时，此属性为可选；若省略，则使用空字符串值。
    - 包含一个或多个 URL 的值，例如：

      ```html
      <script
        src="myscript.js"
        attributionsrc="https://a.example/register-source https://b.example/register-source"></script>
      ```

      当所请求资源不在你控制的服务器上，或只想在另一台服务器上处理归因来源注册时，此形式很有用。可将一个或多个 URL 指定为 `attributionsrc` 的值。发生资源请求时，除资源源站外，{{httpheader("Attribution-Reporting-Eligible")}} 标头也会发送至 `attributionSrc` 中指定的 URL。这些 URL 随后可视情况以 {{httpheader("Attribution-Reporting-Register-Source")}} 或 {{httpheader("Attribution-Reporting-Register-Trigger")}} 标头响应，以完成注册。

      > [!NOTE]
      > 指定多个 URL 意味着可在同一功能上注册多个归因来源。例如，你可能有多个要衡量成效的不同活动，它们需要基于不同数据生成不同报告。

    更多信息请参见 [Attribution Reporting API](/zh-CN/docs/Web/API/Attribution_Reporting_API)。

- `blocking`
  - : 此属性明确指出，在脚本执行前应阻塞某些操作。要阻塞的操作必须是以空格分隔的阻塞令牌列表。目前仅有一个令牌：

    - `render`：阻塞屏幕上内容的渲染。

    > [!NOTE]
    > 只有文档 `<head>` 中的 `script` 元素才可能阻塞渲染。脚本默认不阻塞渲染；若 `script` 元素不含 `type="module"`、`async` 或 `defer`，它阻塞的是*解析*而非*渲染*。若通过脚本动态添加这类 `script` 元素，必须设置 `blocking = "render"`，它才会阻塞渲染。

- [`crossorigin`](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : 对于未通过标准 {{Glossary("CORS")}} 检查的脚本，普通 `script` 元素仅向 {{domxref('Window.error_event', 'window.onerror')}} 传递最少的信息。若站点的静态媒体使用单独的域名，请使用此属性以允许记录错误。有关其有效参数的更详细说明，请参见 [CORS 设置属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)。
- `defer`
  - : 设置此布尔属性可向浏览器表明，脚本应在文档解析后、触发 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件前执行。

    带有 `defer` 属性的脚本会阻止触发 `DOMContentLoaded` 事件，直至脚本加载完毕并完成求值。

    > [!WARNING]
    > 缺少 `src` 属性（即内联脚本）时不得使用此属性；在这种情况下它不起作用。
    >
    > `defer` 属性对[模块脚本](/zh-CN/docs/Web/JavaScript/Guide/Modules)无效——模块脚本默认延迟执行。

    带有 `defer` 属性的脚本会按其在文档中出现的顺序执行。

    此属性可消除**解析阻塞的 JavaScript**：浏览器本来必须先加载并对脚本求值，才能继续解析。`async` 在此情形下有类似作用。

    若同时指定此属性和 `async` 属性，该元素的行为等同于只指定 `async` 属性。

- [`fetchpriority`](/zh-CN/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : 提供获取外部脚本时所用相对优先级的提示。允许的值为：

    - `high`
      - : 相较于其他外部脚本，以高优先级获取该外部脚本。
    - `low`
      - : 相较于其他外部脚本，以低优先级获取该外部脚本。
    - `auto`
      - : 不设置获取优先级偏好。这是默认值。未设置或设置无效值时使用。

- [`integrity`](/zh-CN/docs/Web/HTML/Reference/Attributes/integrity)
  - : 此属性包含脚本的一个或多个{{glossary("hash function", "散列值")}}。它用于确保脚本内容符合开发者预期，且未在[供应链攻击](/zh-CN/docs/Web/Security/Attacks/Supply_chain_attacks)中被恶意脚本替换。缺少 `src` 属性时不得指定此属性。另请参阅[子资源完整性](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity)。
- `nomodule`
  - : 设置此布尔属性可表明脚本不应在支持 [ES 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的浏览器中执行。实际上，可借此为不支持模块化 JavaScript 的旧浏览器提供回退脚本。
- `nonce`
  - : 用于允许 [script-src Content-Security-Policy](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) 中脚本的加密{{Glossary("Nonce", "一次性随机数")}}（仅使用一次的数值）。服务器每次传输策略时都必须生成唯一的 nonce 值。提供无法猜测的 nonce 至关重要，否则绕过资源策略轻而易举。
- `referrerpolicy`
  - : 指定获取脚本或脚本所获取资源时要发送的 [referrer](/zh-CN/docs/Web/API/Document/referrer)：

    - `no-referrer`：不发送 {{HTTPHeader("Referer")}} 标头。
    - `no-referrer-when-downgrade`：不将 {{HTTPHeader("Referer")}} 标头发送至没有 {{Glossary("TLS")}}（{{Glossary("HTTPS")}}）的{{Glossary("origin", "源")}}。
    - `origin`：发送的 referrer 限于引用页面的源：其[协议](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "主机")}}和{{Glossary("port", "端口")}}。
    - `origin-when-cross-origin`：发送至其他源的 referrer 限于协议、主机和端口。同源导航仍会包含路径。
    - `same-origin`：向{{Glossary("Same-origin policy", "同源")}}请求发送 referrer，但跨源请求不包含 referrer 信息。
    - `strict-origin`：仅当协议安全级别相同（HTTPS→HTTPS）时，将文档源作为 referrer 发送；不发送至安全性较低的目标（HTTPS→HTTP）。
    - `strict-origin-when-cross-origin`（默认值）：同源请求发送完整 URL；协议安全级别相同（HTTPS→HTTPS）时仅发送源；不向安全性较低的目标（HTTPS→HTTP）发送标头。
    - `unsafe-url`：referrer 包含源*和*路径（但不包含[片段](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)、[密码](/zh-CN/docs/Web/API/HTMLAnchorElement/password)或[用户名](/zh-CN/docs/Web/API/HTMLAnchorElement/username)）。**此值不安全**，因为它会将受 TLS 保护资源的源和路径泄露给不安全的源。

    > [!NOTE]
    > 空字符串值（`""`）既是默认值，也是在不支持 `referrerpolicy` 时的回退值。若未在 `<script>` 元素上明确指定 `referrerpolicy`，它会采用更高层级的 referrer 策略，即为整个文档或域设置的策略。若没有更高层级的策略，空字符串等同于 `strict-origin-when-cross-origin`。

- `src`
  - : 此属性指定外部脚本的 URI；可作为直接在文档中嵌入脚本的替代方式。
- [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type)
  - : 此属性表示脚本的类型。其值为下列之一：

    - **属性未设置（默认值）、空字符串或 JavaScript MIME 类型**
      - : 表示脚本是包含 JavaScript 代码的“经典脚本”。若脚本引用 JavaScript 代码，建议作者省略该属性，而非指定 MIME 类型。JavaScript MIME 类型列于 [IANA 媒体类型规范](/zh-CN/docs/Web/HTTP/Guides/MIME_types#textjavascript)。
    - [`importmap`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap)
      - : 表示元素主体包含导入映射。导入映射是 JSON 对象，开发者可用它控制浏览器导入 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)时如何解析模块说明符。
    - `module`
      - : 使代码作为 JavaScript 模块处理。脚本内容的处理会延后。`charset` 和 `defer` 属性无效。关于使用 `module` 的信息，请参阅 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南。与经典脚本不同，模块脚本跨源获取时必须使用 CORS 协议。
    - [`speculationrules`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
      - : 表示元素主体包含推测规则。推测规则采用 JSON 对象形式，用于确定浏览器应预获取或预渲染哪些资源。这是 {{domxref("Speculation Rules API", "", "", "nocode")}} 的一部分。
    - **任何其他值**
      - : 嵌入内容将作为数据块处理，浏览器不会处理它。开发者必须使用有效的非 JavaScript MIME 类型表示数据块。包括 `src` 属性在内的所有其他属性都会被忽略。

### 废弃的属性

- `charset` {{Deprecated_inline}}
  - : 若存在，其值必须与 `utf-8` 进行{{Glossary("ASCII")}}大小写不敏感匹配。无需指定 `charset` 属性，因为文档必须使用 UTF-8，`script` 元素会从文档继承字符编码。
- `language` {{Deprecated_inline}} {{Non-standard_Inline}}
  - : 与 `type` 属性类似，此属性标识所用的脚本语言。但与 `type` 属性不同，它的可能值从未标准化。应改用 `type` 属性。

## 备注

没有 [`async`](#async)、[`defer`](#defer) 或 `type="module"` 属性的脚本，以及没有 `type="module"` 属性的内联脚本，会在浏览器继续解析页面前立即获取并执行。

脚本应以 `text/javascript` MIME 类型提供，但浏览器较宽容：只有脚本以图像类型（`image/*`）、视频类型（`video/*`）、音频类型（`audio/*`）或 `text/csv` 提供时才会阻止它。若脚本被阻止，将向元素发送 {{domxref("HTMLElement/error_event", "error")}} 事件；否则，发送 {{domxref("HTMLElement/load_event", "load")}} 事件。

## 示例

### 基本用法

此示例展示如何使用 `<script>` 元素导入（外部）脚本：

```html
<script src="javascript.js"></script>
```

以下示例展示如何在 `<script>` 元素内放置（内联）脚本：

```html
<script>
  alert("你好，世界！");
</script>
```

### async 和 defer

使用 `async` 属性加载的脚本，在获取脚本时不会阻塞页面下载。然而下载完成后，脚本将执行，从而阻塞页面渲染。这意味着在脚本执行完毕前，网页其余内容无法被处理并显示给用户。无法保证脚本按任何特定顺序运行。当页面中的脚本彼此独立且不依赖页面中其他脚本时，最好使用 `async`。

使用 `defer` 属性加载的脚本将按其在页面中出现的顺序加载。它们会等到页面内容全部加载后才运行；若脚本依赖 DOM 已就绪（例如修改页面中的一个或多个元素），这很有用。

下图直观展示不同脚本加载方式及其对页面的影响：

![三种脚本加载方式的工作原理：默认方式会在获取和执行 JavaScript 时阻塞解析。使用 async 时，解析仅在执行期间暂停。使用 defer 时，解析不会暂停，但会在其他所有内容解析后才执行。](async-defer.jpg)

_此图来自 [HTML 规范](https://html.spec.whatwg.org/images/asyncdefer.svg)，在 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可条款下复制、裁剪为缩小版本。_

例如，若有以下脚本元素：

```html
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>
```

不能依赖脚本的加载顺序。`jquery.js` 可能在 `script2.js` 和 `script3.js` 之前或之后加载；若出现这种情况，那些脚本中依赖 `jquery` 的函数将产生错误，因为脚本运行时 `jquery` 尚未定义。

当有一批后台脚本需要加载，并且只想让它们尽快到位时，应使用 `async`。例如，可能有一些游戏数据文件需在游戏真正开始时使用，但目前只想显示游戏介绍、标题和大厅，而不希望它们被脚本加载阻塞。

使用 `defer` 属性加载的脚本（见下文）将按其在页面中出现的顺序运行，并在脚本和内容下载完毕后执行：

```html
<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>
```

在第二个示例中，可以确定 `jquery.js` 会在 `script2.js` 和 `script3.js` 前加载，且 `script2.js` 会在 `script3.js` 前加载。它们会等到页面内容全部加载后才运行；若脚本依赖 DOM 已就绪（例如修改页面中的一个或多个元素），这很有用。

总结：

- `async` 和 `defer` 都会指示浏览器在下载页面其余部分（DOM 等）时，在单独线程中下载脚本，因此获取期间不会阻塞页面加载。
- 带有 `async` 属性的脚本会在下载完成后立即执行。这会阻塞页面，且不保证任何特定执行顺序。
- 带有 `defer` 属性的脚本按其在页面中的顺序加载，且仅在一切加载完毕后执行。
- 如果脚本应立即运行且没有依赖项，请使用 `async`。
- 如果脚本需等待解析并依赖其他脚本和/或 DOM 已就绪，请使用 `defer` 加载，并按希望浏览器执行它们的顺序放置对应的 `<script>` 元素。

### 模块回退

支持 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type) 属性 `module` 值的浏览器会忽略带有 `nomodule` 属性的脚本。因此，可以在使用模块脚本的同时，为不支持它的浏览器提供标有 `nomodule` 的回退脚本。

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

### 使用导入映射导入模块

在脚本中导入模块时，若不使用 [`type=importmap`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/importmap) 功能，则每个模块必须使用绝对或相对 URL 的模块说明符导入。下例中，第一个模块说明符是绝对 URL，第二个（`"./shapes/square.js"`）相对于文档的基 URL 解析。

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

导入映射允许提供一个映射；若匹配，则可替换模块说明符中的文本。下方导入映射定义 `circle` 和 `square` 键，可作为上方模块说明符的别名。

```html
<script type="importmap">
  {
    "imports": {
      "circle": "https://example.com/shapes/circle.js",
      "square": "./shapes/square.js"
    }
  }
</script>
```

这样便可使用模块说明符中的名称（而不是绝对或相对 URL）导入模块：

```js
import { name as circleName } from "circle";
import { name as squareName, draw } from "square";
```

有关导入映射的更多示例，请参阅 JavaScript 模块指南中的[使用导入映射导入模块](/zh-CN/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)章节。

### 在 HTML 中嵌入数据

还可通过在 `type` 属性中指定有效的非 JavaScript MIME 类型，使用 `<script>` 元素将服务端渲染的数据嵌入 HTML。

```html
<!-- 由服务器生成 -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "Maria Cruz",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- 静态 -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("用户信息：%o", userInfo);
</script>
```

### 在脚本获取并执行前阻止渲染

可在 `blocking` 属性中包含 `render` 令牌；页面渲染会被阻止，直至脚本被获取并执行。下例阻塞异步脚本的渲染，因此该脚本不会阻塞解析，但保证会在开始渲染前完成求值。

```html
<script blocking="render" async src="async-script.js"></script>
```

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/zh-CN/docs/Web/HTML/Guides/Content_categories">内容分类</a></th>
      <td><a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#元数据内容">元数据内容</a>、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>动态脚本，例如 <code>text/javascript</code>。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许；开始和结束标签均为必需。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#元数据内容">元数据内容</a>或<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>的任何元素。</td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">没有对应的角色</a></td>
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.currentScript")}}
- [Flavio Copes 关于高效加载 JavaScript 并解释 `async` 与 `defer` 区别的文章](https://thevalleyofcode.com/javascript-async-defer/)
- [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)指南
