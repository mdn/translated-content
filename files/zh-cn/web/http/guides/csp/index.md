---
title: 内容安全策略（CSP）
slug: Web/HTTP/Guides/CSP
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

**内容安全策略**（Content Security Policy，CSP）是一项有助于防范或降低特定类型安全威胁风险的特性。它由网站向浏览器发出的一系列指令组成，这些指令要求浏览器对构成该站点的代码被允许执行的操作施加限制。

CSP 的主要用途是控制文档允许加载哪些资源，尤其是 JavaScript 资源。这主要用于防御{{glossary("cross-site scripting", "跨站脚本攻击")}}（XSS），在此类攻击中，攻击者能够将恶意代码注入受害者的站点。

CSP 还可以用于其他目的，包括防御[点击劫持](/zh-CN/docs/Web/Security/Attacks/Clickjacking)，以及帮助确保站点页面通过 HTTPS 加载。

本指南将首先从较高层面说明 CSP 如何送达浏览器，以及它大致是什么样的。

然后我们会说明如何用它来：

1. [控制加载哪些资源](#控制资源加载)，以防御 XSS。
2. [限制嵌入](#点击劫持防护)，以防御点击劫持。
3. [升级不安全请求](#升级不安全请求)，以帮助确保所有资源都通过 HTTPS 提供。
4. [强制使用可信类型](#强制使用可信类型)，以帮助防御客户端 XSS。

请注意，这些用例之间没有依赖关系：如果你只想添加点击劫持防护而不做 XSS 缓解，只需添加该用例对应的指令即可。

最后我们会说明[部署 CSP 的策略](#测试你的策略)，以及有助于简化这一过程的工具。

## CSP 概述

CSP 应当通过 {{httpheader("Content-Security-Policy")}} 响应标头送达浏览器。它应当设置在对所有请求的所有响应上，而不仅仅是主文档。

你也可以使用文档 {{htmlelement("meta")}} 元素的 [`http-equiv`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/http-equiv) 属性来指定 CSP，对某些用例来说这很有用，例如只有静态资源的客户端渲染{{glossary("SPA", "单页应用")}}，因为这样可以避免依赖任何服务端基础设施。不过，这种方式并不支持所有 CSP 特性。

策略由一系列用分号分隔的*指令*指定。每条指令控制安全策略的一个不同方面。每条指令都有一个名称，后跟一个空格，再跟一个值。不同指令可以有不同的语法。

例如，考虑下面这条 CSP：

```http
Content-Security-Policy: default-src 'self'; img-src 'self' example.com
```

它设置了两条指令：

- `default-src` 指令被设为 `'self'`
- `img-src` 指令被设为 `'self' example.com`。

![拆分成各条指令的 CSP。](csp-overview.svg)

第一条指令 `default-src` 告诉浏览器只加载与文档同源的资源，除非其他更具体的指令为其他资源类型设置了不同的策略。第二条指令 `img-src` 告诉浏览器加载同源的图片，或从 `example.com` 提供的图片。

下一节我们将看看可用于控制资源加载的工具，这是 CSP 的主要功能。

## 控制资源加载

CSP 可用于控制文档允许加载的资源。这主要用于防御跨站脚本（XSS）攻击。

本节将首先说明控制资源加载如何有助于防御 XSS，然后介绍 CSP 提供的用于控制加载哪些资源的工具。最后我们会说明一种特别推荐的策略，称为“严格 CSP”。

### XSS 与资源加载

跨站脚本（XSS）攻击是指攻击者能够在目标网站的上下文中执行其代码。这段代码随后可以做该网站自身代码能做的任何事情，例如：

- 访问或修改站点已加载页面的内容
- 访问或修改本地存储中的内容
- 使用用户的凭据发起 HTTP 请求，从而冒充用户或访问敏感数据

当网站接受可能由攻击者精心构造的输入（例如 URL 参数，或博客文章的评论），然后在未*净化*的情况下将其包含到页面中时，XSS 攻击就成为可能：也就是说，没有确保它不能作为 JavaScript 执行。

网站应当通过在将这些输入包含到页面中之前对其进行净化，来防御 XSS。

> [!NOTE]
> CSP 实际上可以通过两种不同的方式帮助防御 XSS：
>
> - 它可以帮助确保输入在客户端使用之前经过净化：我们稍后会在[强制使用可信类型](#强制使用可信类型)中讨论这一点。
> - 通过控制资源加载，CSP 可以为 XSS 提供纵深防御，即使净化失败也能保护网站。这就是本节将讨论的 XSS 防御。

如果净化失败，注入的恶意代码在文档中可能呈现为多种形式，包括：

- 指向恶意源的 {{htmlelement("script")}} 标签：

  ```html
  <script src="https://evil.example.com/hacker.js"></script>
  ```

- 包含内联 JavaScript 的 `<script>` 标签：

  ```html
  <script>
    console.log("你已被入侵！");
  </script>
  ```

- 内联事件处理器：

  ```html
  <img onmouseover="console.log(`你已被入侵！`)" src="thumbnail.jpg" alt="" />
  ```

- `javascript:` URL：

  ```html
  <iframe src="javascript:console.log(`你已被入侵！`)"></iframe>
  ```

- 传给 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 等不安全 API 的字符串参数：

  ```js
  eval("console.log(`你已被入侵！`)");
  ```

通过控制资源加载，CSP 可以为以上所有情况提供防护。有了 CSP，你可以：

- 定义 JavaScript 文件和其他资源的允许来源，从而有效阻止从 `https://evil.example.com` 加载
- 禁用内联脚本标签
- 只允许设置了正确 {{Glossary("Nonce", "一次性随机数")}} 或散列的脚本标签
- 禁用内联事件处理器
- 禁用 `javascript:` URL
- 禁用 `eval()` 等危险 API

下一节我们将介绍 CSP 提供的用于完成这些事情的工具。

> [!NOTE]
> 设置 CSP 并不能替代对输入进行净化。网站应当净化输入*并且*设置 CSP，从而为 XSS 提供纵深防御。

### Fetch 指令

Fetch 指令用于指定文档允许加载的某一类资源——例如 JavaScript、CSS 样式表、图片、字体等。

不同类型的资源有不同的 Fetch 指令。例如：

- [`script-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) 设置 JavaScript 的允许来源。
- [`style-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src) 设置 CSS 样式表的允许来源。
- [`img-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) 设置图片的允许来源。

一条特殊的 Fetch 指令是 `default-src`，它为所有未显式列出指令的资源设置后备策略。

完整的 Fetch 指令列表见[参考文档](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_指令)。

每条 Fetch 指令指定为单独的关键字 `'none'`，或一个或多个用空格分隔的*源表达式*。列出多个源表达式时：只要其中任一方式允许该资源，该资源就被允许。

例如，下面的 CSP 设置了两条 Fetch 指令：

- `default-src` 被赋予单个源表达式 `'self'`
- `img-src` 被赋予两个源表达式：`'self'` 和 `example.com`

![展示源表达式的 CSP 示意图](csp-source-expressions.svg)

其效果是：

- 图片必须与文档同源，或从 `example.com` 加载
- 所有其他资源必须与文档同源。

接下来几节将介绍一些使用源表达式来控制资源加载的方式。请注意，虽然我们分开描述它们，但这些表达式通常可以组合使用：例如，单条 Fetch 指令既可以包含 nonce，也可以包含主机名。

#### 阻止资源

要完全阻止某一资源类型，使用 `'none'` 关键字。例如，下面的指令会阻止所有 {{htmlelement("object")}} 和 {{htmlelement("embed")}} 资源：

```http
Content-Security-Policy: object-src 'none'
```

请注意，在某一条指令中，`'none'` 不能与任何其他方式组合：实际上，如果 `'none'` 旁边还给出了其他源表达式，这些表达式会被忽略。

#### 一次性随机数

`nonce`（一次性随机数）是限制加载 {{htmlelement("script")}} 和 {{htmlelement("style")}} 资源的推荐做法。

使用 nonce 时，服务器为每个 HTTP 响应生成一个随机值，并将其包含在 `script-src` 和/或 `style-src` 指令中：

```http
Content-Security-Policy:
  script-src 'nonce-416d1177-4d12-4e3b-b7c9-f6c409789fb8'
```

然后，服务器将此值作为它打算包含在文档中的所有 `<script>` 和/或 `<style>` 标签的 `nonce` 属性值。

浏览器比较这两个值，仅在它们匹配时才加载该资源。其思路是：即使攻击者能向页面插入一些 JavaScript，他们也不会知道服务器将使用哪个 nonce，因此浏览器会拒绝运行该脚本。

要使这种方法奏效，攻击者必须无法猜出该 nonce。

**实际上，这意味着每个 HTTP 响应的 nonce 都必须不同，而且必须不可预测。**

这进而意味着服务器不能提供静态 HTML，因为它必须每次插入新的 nonce。通常服务器会使用模板引擎来插入 nonce。

下面是一段 [Express](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) 代码片段作为演示：

```js
function content(nonce) {
  return `
    <script nonce="${nonce}" src="/main.js"></script>
    <script nonce="${nonce}">console.log("你好！");</script>
    <h1>你好，世界</h1> 
    `;
}

app.get("/", (req, res) => {
  const nonce = crypto.randomUUID();
  res.setHeader("Content-Security-Policy", `script-src 'nonce-${nonce}'`);
  res.send(content(nonce));
});
```

在每个请求上，服务器都会生成一个新的 nonce，将其插入 CSP 以及返回文档中的 {{htmlelement("script")}} 标签。请注意，服务器：

- 为每个请求生成新的 nonce
- 可以在外部脚本和内联脚本上使用 nonce
- 对文档中的所有 `<script>` 标签使用同一个 nonce

重要的是，服务器应使用某种模板机制来插入 nonce，而不是把 nonce 插入到所有 `<script>` 标签中：否则，服务器可能会无意中把 nonce 插入到攻击者注入的脚本里。

请注意，nonce 只能用于具有 `nonce` 属性的元素：也就是只有 `<script>` 和 `<style>` 元素。

#### 散列

Fetch 指令也可以使用脚本的散列来保证其完整性。使用这种方法时，服务器会：

1. 使用{{glossary("hash function", "散列函数")}}（SHA-256、SHA-384 或 SHA-512 之一）计算脚本内容的散列
2. 对结果进行 {{glossary("Base64", "Base64 编码")}}
3. 追加标识所用散列算法的前缀（`sha256-`、`sha384-` 或 `sha512-` 之一）。

然后将结果添加到指令中：

```http
Content-Security-Policy: script-src 'sha256-cd9827ad...'
```

当浏览器接收到文档时，它会对脚本进行散列计算，将结果与标头中的值比较，仅在它们匹配时才加载该脚本。

外部脚本还必须包含 [`integrity`](/zh-CN/docs/Web/HTML/Reference/Elements/script#integrity) 属性，这种方法才能生效。

下面是一段 Express 代码片段作为演示：

```js
const hash1 = "sha256-ex2O7MWOzfczthhKm6azheryNVoERSFrPrdvxRtP8DI=";
const hash2 = "sha256-H/eahVJiG1zBXPQyXX0V6oaxkfiBdmanvfG9eZWSuEc=";

const csp = `script-src '${hash1}' '${hash2}'`;
const content = `
  <script src="./main.js" integrity="${hash2}"></script>
  <script>console.log("你好！");</script>
    <h1>你好，世界</h1> 
    `;

app.get("/", (req, res) => {
  res.setHeader("Content-Security-Policy", csp);
  res.send(content);
});
```

请注意：

- 文档中的每个脚本都有各自的散列。
- 对于外部脚本“main.js”，我们还包含了 `integrity` 属性，并赋予相同的值。
- 与使用 nonce 的示例不同，CSP 和内容都可以是静态的，因为散列保持不变。这使基于散列的策略更适合静态页面或依赖客户端渲染的网站。

#### 基于方案的策略

Fetch 指令可以列出一种方案，例如 `https:`，以允许使用该方案提供的资源。这例如可以让策略要求所有资源加载都使用 HTTPS：

```http
Content-Security-Policy: default-src https:
```

#### 基于位置的策略

Fetch 指令可以根据资源所在的位置来控制资源加载。

关键字 `'self'` 允许与文档本身同源的资源：

```http
Content-Security-Policy: img-src 'self'
```

你也可以指定一个或多个主机名，还可以包含通配符，此时只有从这些主机提供的资源会被允许。这例如可以用来允许从受信任的 CDN 提供内容。

```http
Content-Security-Policy: img-src *.example.org
```

你可以指定多个位置。下面的指令只允许与当前文档同源的图片，或从“example.org”的子域提供的图片，或从“example.com”提供的图片：

```http
Content-Security-Policy: img-src 'self' *.example.org  example.com
```

#### 内联 JavaScript

如果 CSP 包含 `default-src` 或 `script-src` 指令，则除非采取额外措施来启用，否则内联 JavaScript 将不被允许执行。这包括：

- 页面中 `<script>` 元素内包含的 JavaScript：

  ```html
  <script>
    console.log("来自内联脚本的问候");
  </script>
  ```

- 内联事件处理器属性中的 JavaScript：

  ```html
  <img src="x" onerror="console.log('来自内联事件处理器的问候')" />
  ```

- `javascript:` URL 中的 JavaScript：

  ```html
  <a href="javascript:console.log('来自 javascript: URL 的问候')">点我</a>
  ```

`unsafe-inline` 关键字可用于覆盖这一限制。例如，下面的指令要求所有资源都同源，但允许内联 JavaScript：

```http example-bad
Content-Security-Policy: default-src 'self' 'unsafe-inline'
```

> [!WARNING]
> 开发者应避免使用 `'unsafe-inline'`，因为它会破坏设置 CSP 的大部分意义。内联 JavaScript 是最常见的 XSS 攻击向量之一，而 CSP 最基本的目标之一就是防止其不受控制地使用。

如果内联 `<script>` 元素受到上文所述的 nonce 或散列保护，则它们是被允许的。

如果指令中包含 nonce 或散列表达式，则浏览器会忽略 `unsafe-inline` 关键字。

#### `eval()` 和类似的 API

与内联 JavaScript 类似，如果 CSP 包含 `default-src` 或 `script-src` 指令，则 `eval()` 和类似的 API 将不被允许执行。这包括（以及其他 API）：

- [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 本身：

  ```js
  eval('console.log("来自 eval() 的问候")');
  ```

- {{jsxref("Function/Function()", "Function()")}} 构造函数：

  ```js
  const sum = new Function("a", "b", "return a + b");
  ```

- {{domxref("Window.setTimeout()", "setTimeout()")}} 和 {{domxref("Window.setInterval()", "setInterval()")}} 的字符串参数：

  ```js
  setTimeout("console.log('来自 setTimeout 的问候')", 1);
  ```

`unsafe-eval` 关键字可用于覆盖这一行为，并且与 `unsafe-inline` 一样，出于同样的原因：**开发者应避免使用 `unsafe-eval`**。

有时很难移除对 `eval()` 及其他方法的使用：在这些情况下，[可信类型 API](/zh-CN/docs/Web/API/Trusted_Types_API) 可以使其更安全，方法是确保输入符合已定义的策略。此时应使用 `trusted-types-eval` 关键字来覆盖该行为。与 `unsafe-inline` 不同，它仅在浏览器支持并启用了可信类型时才会覆盖该行为；这确保了在不支持可信类型的浏览器上，这些方法仍会被阻止。

与 `unsafe-inline` 不同，`unsafe-eval` 关键字在包含 nonce 或散列表达式的指令中仍然有效。

### 严格 CSP

为控制脚本加载以缓解 XSS，推荐的做法是使用基于 [一次性随机数](#一次性随机数) 或[散列](#散列)的 Fetch 指令。这称为*严格 CSP*。这类 CSP 相比基于位置的 CSP（通常称为*允许列表 CSP*）有两个主要优势：

- 允许列表 CSP 很难做对，策略常常会无意中将不安全的域名列入允许列表，因而无法有效防御 XSS（参见 [CSP 已死，CSP 万岁！论允许列表的不安全性与内容安全策略的未来](https://dl.acm.org/doi/pdf/10.1145/2976749.2978363)）。
- 允许列表 CSP 可能非常庞大且难以维护，尤其是在使用不受你控制的脚本时。根据[我如何学会停止焦虑并爱上内容安全策略](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/)，仅仅为了集成 Google Analytics，开发者就被要求将 187 个 Google 域名加入允许列表。

基于 nonce 的严格 CSP 如下所示：

```http
Content-Security-Policy:
  script-src 'nonce-{RANDOM}';
  object-src 'none';
  base-uri 'none';
```

在这条 CSP 中，我们：

- 使用 nonce 来控制允许加载哪些 JavaScript 资源
- 阻止所有 object 嵌入
- 阻止所有使用 `<base>` 元素设置基础 URI 的行为。

基于散列的严格 CSP 与此相同，只是用散列代替 nonce：

```http
Content-Security-Policy:
  script-src 'sha256-{HASHED_SCRIPT}';
  object-src 'none';
  base-uri 'none';
```

如果你能动态生成响应（包括内容本身），基于 nonce 的指令更容易维护。否则，你需要使用基于散列的指令。基于散列的指令的问题在于，只要脚本内容有任何改动，你就必须重新计算并重新应用散列。

#### `strict-dynamic` 关键字

如上所述，当你使用不受自己控制的脚本时，严格 CSP 很难实现。如果第三方脚本加载了任何额外脚本，或使用了任何内联脚本，就会失败，因为第三方脚本不会把 nonce 或散列传递下去。

`strict-dynamic` 关键字就是为了帮助解决这个问题。它可以包含在 Fetch 指令中，其效果是：如果某个脚本带有 nonce 或散列，则该脚本将被允许加载本身没有 nonce 或散列的后续脚本。也就是说，nonce 或散列赋予某个脚本的信任会传递给该原始脚本所加载的脚本（以及*它们*所加载的脚本，依此类推）。

例如，考虑如下文档：

```html
<html lang="zh-CN">
  <head>
    <script
      src="./main.js"
      integrity="sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk="></script>
  </head>
  <body>
    <h1>示例页面！</h1>
  </body>
</html>
```

它包含脚本“main.js”，该脚本会创建并添加另一个脚本“main2.js”：

```js
console.log("你好");

const scriptElement = document.createElement("script");
scriptElement.src = `main2.js`;

document.head.appendChild(scriptElement);
```

我们用如下 CSP 提供该文档：

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
```

“main.js”脚本将被允许加载，因为它的散列与 CSP 中的值匹配。但它尝试加载“main2.js”会失败。

如果我们将 `'strict-dynamic'` 添加到 CSP 中，则“main.js”将被允许加载“main2.js”：

```http
Content-Security-Policy:
  script-src 'sha256-gEh1+8U9S1vkEuQSmmUMTZjyNSu5tIoECP4UXIEjMTk='
  'strict-dynamic'
```

`'strict-dynamic'` 关键字使创建和维护基于 nonce 或散列的 CSP 容易得多，尤其是在网站使用第三方脚本时。不过，它也会使你的 CSP 安全性降低，因为如果你包含的脚本基于潜在的 XSS 来源创建 `<script>` 元素，CSP 将无法保护它们。

#### 重构内联 JavaScript 和 `eval()`

上文已经看到，在 CSP 中，内联 JavaScript 默认是不被允许的。有了 nonce 或散列，开发者可以使用内联 `<script>` 标签，但你仍需要重构代码以移除其他不被允许的模式，包括内联事件处理器、`javascript:` URL，以及对 `eval()` 的使用。例如，内联事件处理器通常应替换为对 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 的调用：

```html example-bad
<p onclick="console.log('来自内联事件处理器的问候')">点我</p>
```

```html
<!-- 随如下 CSP 一起提供：
 `script-src 'sha256-AjYfua7yQhrSlg807yyeaggxQ7rP9Lu0Odz7MZv8cL0='`
 -->
<p id="hello">点我</p>
<script>
  const hello = document.querySelector("#hello");
  hello.addEventListener("click", () => {
    console.log("来自内联脚本的问候");
  });
</script>
```

## 点击劫持防护

[`frame-ancestors`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) 指令可用于控制哪些文档（如果有的话）被允许在嵌套浏览上下文（例如 {{htmlelement("iframe")}}）中嵌入本文档。这是对点击劫持攻击的有效防护，因为这类攻击依赖于将目标站点嵌入攻击者控制的站点中。

`frame-ancestors` 的语法是 Fetch 指令语法的子集：你可以提供单独的关键字值 `'none'`，或一个或多个源表达式。不过，你可以使用的源表达式只有方案、主机名或 `'self'` 关键字值。

除非你需要让自己的站点可被嵌入，否则应将 `frame-ancestors` 设为 `'none'`：

```http
Content-Security-Policy: frame-ancestors 'none'
```

该指令是 {{httpheader("X-Frame-Options")}} 标头更灵活的替代品。

## 升级不安全请求

强烈鼓励 Web 开发者通过 HTTPS 提供所有内容。在将站点升级到 HTTPS 的过程中，站点有时会通过 HTTPS 提供主文档，但通过 HTTP 提供其资源，例如使用如下标记：

```html
<script src="http://example.org/my-cat.js"></script>
```

这称为*混合内容*，不安全资源的存在会大大削弱 HTTPS 所提供的保护。根据浏览器实现的[混合内容算法](/zh-CN/docs/Web/Security/Defenses/Mixed_content)，如果文档通过 HTTPS 提供，不安全资源会被分为“可升级内容”和“可拦截内容”。可升级内容会被升级到 HTTPS，可拦截内容会被拦截，这可能会破坏页面。

混合内容的最终解决方案是开发者通过 HTTPS 加载所有资源。然而，即使站点实际上能够通过 HTTPS 提供所有内容，开发者要重写站点用于加载资源的所有 URL 仍然可能非常困难（在涉及归档内容时，甚至实际上几乎不可能）。

[`upgrade-insecure-requests`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) 指令旨在解决这个问题。该指令没有任何值：要设置它，只需包含指令名称：

```http
Content-Security-Policy: upgrade-insecure-requests
```

如果在文档上设置了该指令，浏览器会在以下情况下自动将 HTTP URL 升级为 HTTPS：

- 加载资源的请求（例如图片、脚本或字体）
- 与文档同源的导航请求（例如链接目标）
- 嵌套浏览上下文中的导航请求，例如 iframe
- 表单提交

不过，目标为不同源的顶级导航请求不会被升级。

例如，假设 `https://example.org` 上的文档随包含 `upgrade-insecure-requests` 指令的 CSP 一起提供，且文档包含如下标记：

```html
<script src="http://example.org/my-cat.js"></script>
<script src="http://not-example.org/another-cat.js"></script>
```

浏览器会自动将这两个请求都升级为 HTTPS。

假设文档还包含这些内容：

```html
<a href="http://example.org/more-cats">再看一些猫咪！</a>
<a href="http://not-example.org/even-more-cats">另一个站点上还有更多猫咪！</a>
```

浏览器会将第一个链接升级为 HTTPS，但不会升级第二个，因为它导航到了不同的源。

该指令不能替代 {{httpheader("Strict-Transport-Security")}} 标头（也称为 HSTS），因为它不会升级指向站点的外部链接。站点应当同时包含该指令和 `Strict-Transport-Security` 标头。

## 强制使用可信类型

[`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) 和 [`trusted-types`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) 指令使你能够防御客户端[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击，方法是确保任何输入在被传给可能会将其作为代码执行的 Web 平台 API 之前，都经过转换以使其安全。[`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) 和 [`trusted-types`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) 指令可用于强制执行[可信类型 API](/zh-CN/docs/Web/API/Trusted_Types_API)。这使你能够通过要求任何输入都必须经过转换函数来防御客户端[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击，从而在将其发送给可能会将其作为代码执行的 Web 平台 API 之前，有机会使其变得安全。

### 注入汇点与净化

Web 平台中的一些 API 被称为*注入汇点*。这些 API 可以接收某些输入（通常是字符串形式），并将其解释为代码。本指南中我们已经见过 `eval()`，但还有许多其他注入汇点，例如 {{domxref("Element.innerHTML")}} 或 {{domxref("Document.write()")}}。

如果攻击者能向你的网站提供某些精心构造的输入，而你的网站将其传给这些注入汇点之一，则攻击者就可以执行恶意代码。

有些注入汇点（如 `eval()`）很难安全使用，我们已经看到 CSP 通常会[完全阻止它们](#eval_和类似的_api)。其他注入汇点则可以更安全，前提是对传入它们的输入进行处理以移除不安全的元素。这种做法称为[净化](/zh-CN/docs/Web/Security/Attacks/XSS#sanitization)。

### 可信类型 API

借助[可信类型 API](/zh-CN/docs/Web/API/Trusted_Types_API)，你可以将*可信类型*传入注入汇点，而不是字符串。可信类型是将潜在危险的输入通过转换函数处理后得到的对象。这种转换通常会净化输入，移除任何可能使其可执行的元素（例如 {{htmlelement("script")}} 标签）。

默认情况下，你的代码可以选择将可信类型或未净化的字符串传给注入汇点。不过，如果你在 CSP 中包含 [`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) 指令，并将其值设为 `'script'`，则浏览器将只允许你的站点将可信类型传给注入汇点。例如，下面的代码会抛出异常：

```js example-bad
const possiblyXSS = "<p>我可能是 XSS</p>";
const target = document.querySelector("#target");

target.innerHTML = possiblyXSS;
// 若设置了 require-trusted-types-for，将抛出异常
```

可信类型对象使用用户定义的*策略*对象创建。你的代码可以创建任何种类的策略对象，包括那些转换函数实际上并不净化输入、因而无法保护你的策略。为尽量降低这一风险，你可以包含 [`trusted-types`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) 指令。它列出可接受的策略名称，浏览器将只允许使用这些已命名的策略。

## 测试你的策略

为便于部署，CSP 可以在仅报告模式下部署。策略不会被强制执行，但任何违规都会被发送到策略中指定的报告端点。此外，可以使用仅报告标头来测试策略的未来修订，而无需实际部署它。

你可以使用 {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP 标头来指定策略，像这样：

```http
Content-Security-Policy-Report-Only: policy
```

如果同一响应中同时存在 {{HTTPHeader("Content-Security-Policy-Report-Only")}} 标头和 {{HTTPHeader("Content-Security-Policy")}} 标头，两条策略都会生效。`Content-Security-Policy` 标头中指定的策略会被强制执行，而 `Content-Security-Policy-Report-Only` 策略会生成报告但不会被强制执行。

请注意，与普通的内容安全策略不同，仅报告策略不能通过 `<meta>` 元素送达。

### 违规报告

报告 CSP 违规的推荐方法是使用[报告 API](/zh-CN/docs/Web/API/Reporting_API)，在 {{HTTPHeader("Reporting-Endpoints")}} 中声明端点，并使用 `Content-Security-Policy` 标头的 {{CSP("report-to")}} 指令将其中之一指定为 CSP 报告目标。

> [!WARNING]
> 你也可以使用 CSP 的 {{CSP("report-uri")}} 指令来指定 CSP 违规报告的目标 URL。
> 这会通过 {{HTTPHeader("Content-Type")}} 为 `application/csp-report` 的 `POST` 操作发送略有不同的 JSON 报告格式。
> 这种方法已弃用，但在所有浏览器都支持 {{CSP("report-to")}} 之前，你应当同时声明两者。
> 有关该方法的更多信息，请参见 {{CSP("report-uri")}} 主题。

服务器可以使用 {{HTTPHeader("Reporting-Endpoints")}} HTTP 响应标头告知客户端将报告发送到何处。该标头将一个或多个端点 URL 定义为逗号分隔的列表。例如，要定义一个名为 `csp-endpoint`、在 `https://example.com/csp-reports` 接受报告的报告端点，服务器的响应标头可以如下所示：

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

如果你希望有多个端点处理不同类型的报告，可以像这样指定它们：

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     hpkp-endpoint="https://example.com/hpkp-reports"
```

然后你可以使用 `Content-Security-Policy` 标头的 {{CSP("report-to")}} 指令，指定应使用某个已定义的端点进行报告。例如，要将 `default-src` 的 CSP 违规报告发送到 `https://example.com/csp-reports`，你可以发送如下所示的响应标头：

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

当发生 CSP 违规时，浏览器会将报告作为 JSON 对象，通过 HTTP {{httpmethod("POST")}} 操作发送到指定端点，其 {{HTTPHeader("Content-Type")}} 为 `application/reports+json`。该报告是 {{domxref("CSPViolationReport")}} 对象的序列化形式，其中包含值为 `"csp-violation"` 的 `type` 属性。

一个典型的对象可能如下所示：

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

你需要设置一台服务器，以接收具有给定 JSON 格式和内容类型的报告。处理这些请求的服务器随后可以按照最适合你需求的方式存储或处理传入的报告。

## 参见

- [CSP 错误和警告](/zh-CN/docs/Web/HTTP/Guides/CSP/Errors)
- web.dev 上的[使用严格内容安全策略缓解跨站脚本攻击](https://web.developers.google.cn/articles/strict-csp)（2024）
- [内容安全策略：加固与缓解之间的成功乱局](https://infocondb.org/con/locomocosec/locomocosec-2019/content-security-policy-a-successful-mess-between-hardening-and-mitigation)
- owasp.org 上的[内容安全策略速查表](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
- [CSP 评估器](https://csp-evaluator.withgoogle.com/)
