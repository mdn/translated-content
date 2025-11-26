---
title: Content-Security-Policy (CSP)
slug: Web/HTTP/Reference/Headers/Content-Security-Policy
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

HTTP 响应标头 **`Content-Security-Policy`** 允许站点管理者控制用户代理能够为指定的页面加载哪些资源。除了少数例外情况，设置的政策主要涉及指定源服务器和脚本端点。这将帮助防止{{Glossary("cross-site scripting", "跨站脚本攻击")}}。

参见[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)，以查看 CSP 发送到浏览器的细节，它长什么样，及其用例和部署策略。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Security-Policy: <policy-directive>; <policy-directive>
```

其中 `<policy-directive>` 应为不含标点的 `<directive> <value>` 形式。

## 指令

### Fetch 指令

Fetch 指令控制指定资源类型可以从哪里加载。

- {{CSP("child-src")}}
  - : 为 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 和其他嵌套浏览上下文（例如用 {{HTMLElement("frame")}} 和 {{HTMLElement("iframe")}} 加载到页面的内容）指定合法源。

    `frame-src` 和 `worker-src` 的[后备值](#后备值)。

- {{CSP("connect-src")}}
  - : 限制能通过脚本接口加载的 URL。
- {{CSP("default-src")}}
  - : 为其他 {{Glossary("Fetch directive", "Fetch 指令")}}提供后备值。

    其他所有 Fetch 指令的[后备值](#后备值)。

- {{CSP("fenced-frame-src")}} {{experimental_inline}}
  - : 指定可以加载到 {{HTMLElement("fencedframe")}} 元素的内嵌浏览器内容的合法源。
- {{CSP("font-src")}}
  - : 指定通过 {{cssxref("@font-face")}} 加载字体的合法源。
- {{CSP("frame-src")}}
  - : 为加载到 {{HTMLElement("frame")}} 和 {{HTMLElement("iframe")}} 等元素中的嵌套浏览上下文指定合法源。
- {{CSP("img-src")}}
  - : 指定图片和图标的合法源。
- {{CSP("manifest-src")}}
  - : 指定应用程序清单文件的合法源。
- {{CSP("media-src")}}
  - : 指定通过 {{HTMLElement("audio")}}、{{HTMLElement("video")}} 和 {{HTMLElement("track")}} 标签加载的媒体文件的合法源。
- {{CSP("object-src")}}
  - : 指定 {{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 标签的合法源。
- {{CSP("prefetch-src")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 指定预加载或预渲染的合法源。
- {{CSP("script-src")}}
  - : 指定 JavaScript 或 WebAssembly 的合法源。

    `script-src-elem` 和 `script-src-attr` 的[后备值](#后备值)。

- {{CSP("script-src-elem")}}
  - : 指定 JavaScript {{HTMLElement("script")}} 元素的合法源。
- {{CSP("script-src-attr")}}
  - : 指定 JavaScript 内联事件处理器的合法源。
- {{CSP("style-src")}}
  - : 指定层叠样式表文件的合法源。

    `style-src-elem` 和 `style-src-attr` 的[后备值](#后备值)。

- {{CSP("style-src-elem")}}
  - : 为带有 `rel="stylesheet"` 的样式表 {{HTMLElement("style")}} 元素和 {{HTMLElement("link")}} 元素指定合法源。
- {{CSP("style-src-attr")}}
  - : 指定单个 DOM 元素的行内样式的合法源。
- {{CSP("worker-src")}}
  - : 指定 {{domxref("Worker")}}、{{domxref("SharedWorker")}} 或 {{domxref("ServiceWorker")}} 脚本的合法源。

所有 Fetch 指令可以指定一个 `'none'` 值，表示该资源完全被禁止，或者指定一个或多个*源表达式*，表示该类资源的合法源。见 [Fetch 指令语法](#fetch_指令语法)。

#### 后备值

有些 Fetch 指令是作为其他具体指令的后备值。这意味着如果没有指定具体的指令，就对该资源类型使用后备值提供的策略。

- `default-src` 是其他所有 Fetch 指令的后备值。
- `script-src` 是 `script-src-attr` 和 `script-src-elem` 的后备值。
- `style-src` 是 `style-src-attr` 和 `style-src-elem` 的后备值。
- `child-src` 是 `frame-src` 和 `worker-src` 的后备值。

例如：

- 如果没有提供 `img-src`，但包含了 `default-src`，那么 `default-src` 定义的策略将应用于图像。
- 如果没有提供 `script-src-elem`，但包含了 `script-src`，那么 `script-src` 定义的策略将应用于 `<script>` 元素。
- 如果 `script-src-elem` 和 `script-src` 都没有提供，但包含了 `default-src`，那么 `default-src` 定义的策略将应用于 `<script>` 元素。

### 文档指令

文档指令管理适用策略的文档或 [worker](/zh-CN/docs/Web/API/Web_Workers_API) 环境的属性。

- {{CSP("base-uri")}}
  - : 限制在 DOM 中 {{HTMLElement("base")}} 元素可以使用的 URL。
- {{CSP("sandbox")}}
  - : 类似 {{HTMLElement("iframe")}} [`sandbox`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#sandbox) 属性，为请求的资源启用沙盒。

### 导航指令

导航指令管理用户可以导航或者提交表单的位置。

- {{CSP("form-action")}}
  - : 限制可用作给定上下文表单提交目标的 URL。
- {{CSP("frame-ancestors")}}
  - : 指定可能嵌入页面的有效父项 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 或 {{HTMLElement("embed")}}。

### 报告指令

报告指令控制 CSP 违规报告的目标 URL。作用于 `Content-Security-Policy` 和 {{HTTPHeader("Content-Security-Policy-Report-Only")}}。

- {{CSP("report-to")}}
  - : 提供代表一个或多个报告端点的 token，用于发送 CSP 违规信息。
    token 代表的断点通过其他 HTTP 标头提供，比如 {{HTTPHeader("Reporting-Endpoints")}} 和 {{HTTPHeader("Report-To")}} {{deprecated_inline}}。

    > [!WARNING]
    > 此指令意图替换 [`report-uri`](#report-uri)；在支持 `report-to` 的浏览器，`report-uri` 会被忽略。
    > 但是，在 `report-to` 被广泛支持前，你应该两者均指定（其中 `endpoint_name` 是单独提供的端点的名字）：
    >
    > ```http
    > Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
    > ```

### 其他指令

- {{CSP("require-trusted-types-for")}} {{experimental_inline}}
  - : 在 DOM XSS 注入落点强制执行 [Trusted Type](/zh-CN/docs/Web/API/Trusted_Types_API)。
- {{CSP("trusted-types")}} {{experimental_inline}}
  - : 用于指定 [Trusted Type](/zh-CN/docs/Web/API/Trusted_Types_API) 策略的允许值。Trusted Type 允许程序禁用 DOM XSS 注入落点，只接受不可欺骗的、固定的值，以代替字符串。
- {{CSP("upgrade-insecure-requests")}}
  - : 让浏览器把一个网站所有的不安全 URL（通过 HTTP 访问）当做已经被安全的 URL 链接（通过 HTTPS 访问）替代。这个指令是为了那些有大量不安全的遗留 URL 需要被重写时候准备的。

### 弃用指令

- {{CSP("block-all-mixed-content")}} {{deprecated_inline}}
  - : 当页面使用 HTTPS 时，阻止使用 HTTP 的资源加载。
- {{CSP("report-uri")}} {{deprecated_inline}}
  - : 给浏览器提供发送 CSP 违规报告的 URL。已经被 [`report-to`](#report-to) 指令取代。

### Fetch 指令语法

所有的 Fetch 指令可以指定为以下形式之一：

- 单独 `'none'` 值，表示应完全阻止加载特定资源类型。
- 一个或多个*源表达式*值，表示该资源类型的合法来源。

每个来源表达式可以采用以下列出的形式之一。需要注意的是，并非所有形式都适用于所有 Fetch 指令：请参阅每个 Fetch 指令的文档，了解适用的形式。

`<host-source>` 和 `<scheme-source>` 格式必须不加引号，而其他所有格式必须用单引号括起来。

### 'nonce-\<nonce_value>'

该值由字符串 `nonce-` 和一个 {{glossary("Base64", "Base64 编码")}}的字符串组成。此字符串是服务器为每个 HTTP 响应生成的随机值。例如：

```plain
'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

然后，服务器可以将相同的值作为任何 {{htmlelement("script")}} 或 {{htmlelement("style")}} 资源的 `nonce` 属性的值，这些资源是希望从文档加载的。

浏览器将 CSP 指令中的值与元素属性中的值进行比较，仅当两者匹配时才加载资源。

如果指令中同时包含 nonce 和 `unsafe-inline`，浏览器会忽略 `unsafe-inline`。

有关更多用法信息，请参阅 CSP 指南中的 [Nonce](/zh-CN/docs/Web/HTTP/Guides/CSP#nonces)。

> [!NOTE]
> Nonce 来源表达式仅适用于 {{htmlelement("script")}} 和 {{htmlelement("style")}} 元素。

### '\<hash_algorithm>-<hash_value>'

该值由标识散列算法的字符串、`-` 和一个表示散列值的 {{glossary("Base64", "base64 编码")}}字符串组成。

- 散列算法标识符必须是 `sha256`、`sha384` 或 `sha512` 之一。
- 散列值是使用以下散列函数之一计算的 `<script>` 或 `<style>` 资源的{{glossary("hash function", "散列")}}值的 base64 编码：SHA-256、SHA-384 或 SHA-512。

例如：

```http
'sha256-cd9827ad...'
```

当浏览器接收文档时，它会对所有 `<script>` 和 `<style>` 元素的内容进行散列计算，将结果与 CSP 指令中的任何散列值进行比较，仅在匹配时加载资源。

如果元素加载外部资源（例如，通过 [`src`](/zh-CN/docs/Web/HTML/Reference/Elements/script#src) 属性），则元素还必须设置 [`integrity`](/zh-CN/docs/Web/HTML/Reference/Elements/script#integrity) 属性。

如果指令中同时包含散列和 `unsafe-inline`，浏览器会忽略 `unsafe-inline`。

有关更多用法信息，请参阅 CSP 指南中的[散列值](/zh-CN/docs/Web/HTTP/Guides/CSP#hash)。

> [!NOTE]
> 散列来源表达式仅适用于 {{htmlelement("script")}} 和 {{htmlelement("style")}} 元素。

### \<host-source>

{{glossary("host", "主机")}}的 [URL](/zh-CN/docs/Web/URI) 或 IP 地址，是资源的有效来源。

协议、端口号和路径是可选的。

如果省略协议，则使用文档源的协议。

匹配协议时允许安全升级。例如：

- `http://example.com` 也允许来自 `https://example.com` 的资源。
- `ws://example.org` 也允许来自 `wss://example.org` 的资源。

可以使用通配符（`'*'`）表示子域名、主机地址和端口号，表示所有合法值都有效。例如：

- `http://*.example.com` 允许来自 `example.com` 的任何子域的资源（通过 HTTP 或 HTTPS）。

以`/`结尾的路径匹配它们作为前缀的任何路径。例如：

- `example.com/api/` 将允许来自 `example.com/api/users/new` 的资源。

未以`/`结尾的路径精确匹配。例如：

- `https://example.com/file.js` 仅允许来自 `https://example.com/file.js` 的资源，而不允许来自 `https://example.com/file.js/file2.js` 的资源。

### \<scheme-source>

表示一种[方案](/zh-CN/docs/Web/URI/Reference/Schemes)，例如 `https:`。必须包含冒号。

允许安全升级，因此：

- `http:` 也允许通过 HTTPS 加载的资源。
- `ws:` 也允许通过 WSS 加载的资源。

### 'self'

仅允许从与文档相同的{{glossary("origin", "源")}}加载给定类型的资源。

允许安全升级。例如：

- 如果文档来自 `http://example.com`，则 CSP `'self'` 也允许来自 `https://example.com` 的资源。
- 如果文档来自 `ws://example.org`，则 CSP `'self'` 也允许来自 `wss://example.org` 的资源。

### 'unsafe-eval'

默认情况下，如果 CSP 包含 `default-src` 或 `script-src` 指令，则禁止使用动态计算其参数为 JavaScript 的 JavaScript 函数。这包括 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)、{{domxref("Window.setTimeout()", "setTimeout()")}} 的 [`code`](/zh-CN/docs/Web/API/Window/setTimeout#code) 参数，或 {{jsxref("Function/Function()", "Function()")}} 构造函数。

`unsafe-eval` 关键字可用于撤销此保护，允许动态计算字符串为 JavaScript。

> [!WARNING]
> 开发人员应避免使用`'unsafe-eval'`，因为它破坏了 CSP 的大部分保护目的。

有关更多用法信息，请参阅 CSP 指南中的 [`eval()` 和类似的 API](/zh-CN/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis)。

### 'wasm-unsafe-eval'

默认情况下，如果 CSP 包含 `default-src` 或 `script-src` 指令，则页面不允许使用诸如 [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) 之类的函数编译 WebAssembly。

`wasm-unsafe-eval` 关键字可用于撤销此保护。这是比 `'unsafe-eval'` 更安全的替代方案，因为它不会启用 JavaScript 的一般计算。

### 'unsafe-inline'

默认情况下，如果 CSP 包含 `default-src` 或 `script-src` 指令，则禁止执行内联 JavaScript。这包括：

- 内联 `<script>` 标签
- 内联事件处理器属性
- `javascript:` URL

类似地，如果 CSP 包含 `default-src` 或 `style-src` 指令，则内联 CSS 也不会被加载，包括：

- 内联 `<style>` 标签
- {{domxref("HTMLElement.style", "style")}} 属性。

`unsafe-inline` 关键字可用于撤销此保护，允许加载所有这些形式的资源。

> [!WARNING]
> 开发人员应避免使用 `'unsafe-inline'`，因为它破坏了 CSP 的大部分保护目的。

有关更多用法信息，请参阅 CSP 指南中的[内联 JavaScript](/zh-CN/docs/Web/HTTP/Guides/CSP#inline_javascript)。

### 'unsafe-hashes'

默认情况下，如果 CSP 包含 `default-src` 或 `script-src` 指令，则内联事件处理程序属性（如 `onclick`）和内联 `style` 属性不允许执行。

`'unsafe-hashes'` 表达式允许浏览器对内联事件处理程序和 `style` 属性使用[散列表达式](#hash_algorithm-hash_value)。例如，一个 CSP 指令可能包含以下内容：

```http
script-src 'unsafe-hashes' 'sha256-cd9827ad...'
```

如果散列值与内联事件处理程序属性值或 `style` 属性值的散列值匹配，则允许代码执行。

> [!WARNING]
> `'unsafe-hashes'` 值是不安全的。
>
> 特别是，攻击者可以将内联事件处理程序属性的内容注入到内联 `<script>` 元素中，以此实现攻击。例如，假设内联事件处理程序是：
>
> ```html
> <button onclick="transferAllMyMoney()">转账所有资金</button>
> ```
>
> 如果攻击者能够注入一个包含此代码的内联 `<script>` 元素，CSP 会允许它自动执行。
>
> 即使这样，`'unsafe-hashes'` 比 `'unsafe-inline'` 要安全得多。

### 'inline-speculation-rules'

默认情况下，如果 CSP 包含 `default-src` 或 `script-src` 指令，则不允许执行内联 JavaScript。`'inline-speculation-rules'` 允许浏览器加载 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type) 属性为 [`speculationrules`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type/speculationrules) 的内联 `<script>` 元素。

有关更多信息，请参阅[推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API)。

### 'strict-dynamic'

`'strict-dynamic'` 关键字使得通过 [nonce](#nonce-nonce_value) 或 [hash](#hash_algorithm-hash_value) 信任的脚本扩展到此脚本动态加载的脚本，例如通过使用 {{domxref("Document.createElement()")}} 创建新的 `<script>` 标签，然后通过 {{domxref("Node.appendChild()")}} 将其插入文档中。

如果此关键字出现在指令中，则以下来源表达式值都将被忽略：

- [\<host-source>](#host-source)
- [\<scheme-source>](#scheme-source)
- [`'self'`](#self)
- [`'unsafe-inline'`](#unsafe-inline)

有关更多用法信息，请参阅 CSP 指南中的 [`strict-dynamic` 关键字](/zh-CN/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword)。

### 'report-sample'

如果此表达式包含在控制脚本或样式的指令中，并且该指令导致浏览器阻止任何内联脚本、内联样式或事件处理程序属性的执行，则浏览器生成的[违规报告](/zh-CN/docs/Web/HTTP/Guides/CSP#violation_reporting)将包含一个 {{domxref("CSPViolationReportBody.sample", "sample")}} 属性，其中包含被阻止资源的前 40 个字符。

## Worker 中的 CSP

[Worker](/zh-CN/docs/Web/API/Worker) 一般来说*不*被创建他的文档（或者父级 Worker）的 CSP 管理。如果要为 Worker 指定 CSP，可以为 Worker 脚本的请求设置 CSP 响应标头 `Content-Security-Policy`。

例外的情况是，如果 Worker 脚本的来源是一个全局唯一 ID（比如，它的 URL 是一个结构化的数据或者 blob）。在这种情况下，这个 Worker 会继承它所属的文档或者创建它的 Worker 的 CSP。

## 多重内容安全策略

CSP 允许在一个资源中指定多个策略，包括通过 `Content-Security-Policy` 标头，以及 {{HTTPHeader("Content-Security-Policy-Report-Only")}} 标头，和 {{HTMLElement("meta")}} 元素。

你可以像以下实例一样多次调用 `Content-Security-Policy` 标头。特别注意这里的 {{CSP("connect-src")}} 指令。尽管第二个策略允许连接，第一个策略仍然包括了 `connect-src 'none'`。添加了附加的策略后，只会让资源保护的能力*更强*，也就是说不会允许任何连接，等同于最严格的策略 `connect-src 'none'` 强制执行。

```http
Content-Security-Policy: default-src 'self' http://example.com;
                         connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                         script-src http://example.com/
```

## 示例

### 禁用不安全的内联代码，只允许 HTTPS 资源

这个 HTTP 标头设置默认策略为只允许用 HTTPS 加载资源。由于没有设置 `unsafe-inline` 和 `unsafe-eval`，内联代码被禁用。

```http
Content-Security-Policy: default-src https:
```

同样的限制可以通过 HTML {{htmlelement("meta")}} 元素施加。

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

### 允许内联代码和 HTTPS 资源，但禁用插件

此策略可用于已存在的网站中有过多内联代码的情况，旨在确保资源仅通过 HTTPS 加载，并禁用插件：

```http
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

### 测试时报告但不施加限制

此示例设置了与前一个例子相同的限制，但使用了 {{httpheader("Content-Security-Policy-Report-Only")}} 标头和 {{CSP("report-to")}} 指令。这种方法在测试期间使用，用于报告违规行为但不阻止代码执行。

报告端点（URL）使用 {{HTTPHeader("Reporting-Endpoints")}} HTTP 响应标头定义。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

然后在 CSP 中使用 {{CSP("report-to")}} 指令选择特定的端点作为报告目标。

```http
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-url/; report-to csp-endpoint
```

请注意，{{CSP("report-uri")}} {{deprecated_inline}} 指令在上面的示例中也被指定，因为 `report-to` 在浏览器中的支持尚未广泛。

更多示例请参阅[内容安全策略（CSP）实现](/zh-CN/docs/Web/Security/Practical_implementation_guides/CSP)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)
- [浏览器插件中的 CSP](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [采用严格的策略](https://csp.withgoogle.com/docs/strict-csp.html)
- [CSP 评估器](https://github.com/google/csp-evaluator)——评估你的内容安全策略
