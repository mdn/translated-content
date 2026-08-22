---
title: Fetch 元数据
slug: Web/HTTP/Guides/Fetch_metadata
l10n:
  sourceCommit: f648561b1db8502f28a9d3664175c2000cbe9ea7
---

**Fetch 元数据**是一组 HTTP 请求标头的术语，这些标头向服务器提供发起请求相关的上下文信息。

Fetch 元数据可以让服务器知道（除此之外还有更多用途）：

- 该请求是代表文档之间的导航，还是对子资源的请求，又或是由 JavaScript 显式发起的（例如使用 {{domxref("window.fetch()", "fetch()")}} 方法）。

- 资源请求方与被请求资源之间的关系：是同{{glossary("origin", "来源")}}的、同{{glossary("site", "站点")}}的，还是来自完全不同的站点。

通过使用这些标头中的信息来允许或拒绝特定请求，服务器可以实现对[_跨源攻击_](#跨源攻击)如[跨站请求伪造（CSRF）](/zh-CN/docs/Web/Security/Attacks/CSRF)和各种[跨站信息泄漏](/zh-CN/docs/Web/Security/Attacks/XS-Leaks)的防御。

## Fetch 元数据标头

[Fetch 元数据规范](https://w3c.github.io/webappsec-fetch-metadata/) 定义了四种 fetch 元数据标头：

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

与所有 `Sec-` 前缀的标头一样，这些都是{{glossary("forbidden request header", "禁止修改的请求标头")}}，这意味着它们不能在前端代码中设置或修改。

### Sec-Fetch-Dest

这个标头指明请求的 _目标_。该属性在 Fetch API 上定义，并以 {{domxref("Request.destination")}} 属性的形式对外暴露。

我们大致可以将其理解为返回资源的用途。

对大多数{{glossary("replaced elements", "可替换元素")}}来说，这个标头的值指定了该资源将用于哪个元素，比如 `iframe`、`object`、`audio` 或 `video`。`image` 值表示资源将作为图片供各类可替换元素引用，例如 HTML 的 {{htmlelement("img")}} 元素、CSS 的 {{cssxref("background-image")}} 属性、SVG 的 {{svgelement("image")}} 标签，或 Web 平台中任何其他使用子资源图像的位置。

其他一些有趣的目标值包括：

- `document`
  - : 该请求旨在加载一个顶层导航过来的新文档（例如，用户点击页面中的链接或提交表单）。

- `script`
  - : 资源将作为脚本，被 HTML 的 {{htmlelement("script")}} 元素或 web worker 调用的 {{domxref("WorkerGlobalScope.importScripts()", "importScripts()")}} 加载。

    更具体的值用于指明资源作为脚本被使用的其他位置，例如工作单元（`audioworklet` 和 `paintworklet`）以及工作线程（`sharedworker`、`serviceworker` 和 `worker`）。

- `empty`
  - : 请求未明确指定目标：除其他可能原因外，当请求是由 {{domxref("Window.fetch()", "fetch()")}} 方法触发时，标头就会应用这个值。

所有可能值的完整列表，请参阅此标头的{{HTTPHeader("Sec-Fetch-Site", "参考页面", "", "nocode")}}。

### Sec-Fetch-Mode

这个标头指明请求的 _模式_。与 _目标_ 类似，此属性也在 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 上有定义，并以 {{domxref("Request.mode")}} 属性的形式对外暴露。

它最常用的值有：

- `navigate`
  - : 请求代表了文档间的导航（比如，用户点击一个链接）。

- `no-cors`
  - : 请求使用 `no-cors` 模式发起。

    这意味着即使服务端未发送合适的 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 标头，跨域请求也是被允许的，但有一个限制：客户端运行的 JavaScript 无法访问该响应（该响应是 _不透明的_）。

    这是页面加载子资源（例如图片、字体、脚本、样式表）的默认模式，这也解释了为什么默认情况下，尽管你没有配置 CORS，其他站点也能使用你的站点的子资源。

- `cors`
  - : 如果请求是跨源的，服务端在响应时必须提供合适的 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 标头，否则请求将会失败。如果服务端提供了合适的 CORS 头部，那么响应体和某些标头才将提供给调用方。

    这个值最常出现在使用 JavaScript 的 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 发起跨源请求的场景，这种时候请求方往往需要能够读取返回的资源（例如，通过 fetch 调用从服务器获取一些 JSON 数据）。

- `same-origin`
  - : 只有当请求方与被请求资源属于相同来源时，请求才会被允许。

### Sec-Fetch-Site

这个标头指明被请求资源与资源请求方之间的关系。

它表明了请求方来自：

- 与被请求资源相同的{{glossary("origin", "来源")}}。
- 不同来源，但属于相同{{glossary("site", "站点")}}。
- 不同的站点。

例如，如果用户在 `https://books.example.org/authors` 页面里点击一个链接，浏览器就会发起一个请求来获取链接声明的目标文档。下面的表格展示了不同的链接目标下，`Sec-Fetch-Site` 标头的对应取值：

| 链接目标                           | `Sec-Fetch-Site` 取值 |
| ---------------------------------- | --------------------- |
| `https://books.example.org/titles` | `same-origin`         |
| `https://login.example.org/`       | `same-site`           |
| `https://books.example.com/titles` | `cross-site`          |

类似的映射规则同样适用于其他 HTTP 请求，例如：

- 由 {{htmlelement("form")}} 元素的 [`action`](/zh-CN/docs/Web/HTML/Reference/Elements/form#action) 属性触发的表单提交。
- 对图像、字体或脚本等子资源的请求。
- 使用 {{domxref("window.fetch()", "fetch()")}} 方法发起的请求。

对于没有站点作为请求方的请求，`Sec-Fetch-Site` 标头也可能取值为 `none`，例如用户在浏览器地址栏中输入 URL 或者点击书签时发起的请求。规范将此类请求称为[用户直接发起的请求](https://w3c.github.io/webappsec-fetch-metadata/#directly-user-initiated)。

### Sec-Fetch-User

只有当请求是由用户行为（例如点击一个链接）触发时，才会携带这个标头，且携带时取值总是 `?1`。

## 跨源攻击

Fetch 元数据对于防御 _跨源攻击_ 尤为有效。这类攻击通常针对在合法站点拥有账号且处于登录状态的用户。攻击者搭建会向合法站点发起跨源请求的恶意网站，并诱导用户触发该请求。

> [!NOTE]
> 本文使用术语 _跨源攻击_，尽管很多攻击习惯上被称为 _跨站攻击_。
>
> {{glossary("origin", "来源")}}的约束比{{glossary("site", "站点")}}更加严格。尤其是，一个站点（site）包含域名下的全部子域名，而一个来源（origin）则不包含：因此 `https://example.org` 和 `https://login.example.org` 属于同一站点，但属于不同来源。
>
> 这意味着，所有跨站攻击都属于跨源攻击，但 _不是_ 所有跨源攻击都是跨站攻击。例如，如果攻击者控制了某个站点的子域名，就可以利用 _跨源、同站点_ 的请求对主站实施攻击。因此本文使用约束性更强的术语“跨源”。

例如，攻击者的页面中可能放置了一个会向合法站点提交数据的 {{htmlelement ("form")}} 元素。有些跨源攻击甚至不需要任何用户交互：恶意页面会在加载时直接调用 {{domxref("Window.fetch()", "fetch()")}} 方法向合法站点发送请求，用户只需要打开恶意页面，攻击请求就会自动发出。

而因为请求来自用户浏览器，合法站点设置在用户浏览器中的全部 Cookie 都会被携带过去，其中就包含用于身份识别的 Cookie。因此该请求也将拥有该用户对应的权限。

我们可以区分两类跨源攻击：

- [跨站请求伪造（CSRF）](/zh-CN/docs/Web/Security/Attacks/CSRF)：这类攻击的跨源请求会使用攻击者提供的参数，在合法服务器上执行有实际影响的操作。例如请求让服务器将用户账户中的资金转账至攻击者账户。

- [跨站信息泄露](/zh-CN/docs/Web/Security/Attacks/XS‑Leaks)：这类攻击中，攻击者会借助请求获取到用户与目标站点之间的相关信息，这种信息窃取通常是借助[错误事件](/zh-CN/docs/Web/Security/Attacks/XS-Leaks#leaking_page_existence_using_error_events)这类侧信道完成的。

大多数网站会希望拒绝一部分跨源请求，同时放行另一部分。举个例子：如果你拒绝全部跨源请求，就没有人能够从其他站点跳转到你的网站！

借助 Fetch 元数据，服务器就可以基于跨源请求的上下文信息构建策略，来决定是允许还是拒绝该请求。

## 资源隔离策略

有一类常见的策略叫做 _资源隔离策略_。服务器收到一个请求时，会检查请求的 Fetch 元数据标头，只放行以下几类请求：

- 同源请求（若信任子域名，也可以放行同站点请求）。
- 来自其他源的顶层导航请求，这类请求让用户可以通过外部站点的链接访问你的网站。
- 针对特定端点的请求（这类端点专门为跨源请求设计），包括任何使用 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 的请求。

举个例子，下面是一段 [Express](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) 示例代码，仅允许同源请求、用户直接发起的请求以及导航请求：

```js
function isAllowed(req) {
  // 允许同源请求
  // 允许用户直接发起的请求（来自书签、地址栏等）
  const secFetchSite = req.headers["sec‑fetch‑site"];
  if (secFetchSite === "same‑origin" || secFetchSite === "none") {
    return true;
  }

  // 允许跨站点导航，例如点击链接跳转
  const secFetchMode = req.headers["sec‑fetch‑mode"];
  if (secFetchMode === "navigate" && req.method === "GET") {
    return true;
  }

  // 拒绝其余所有请求
  return false;
}

app.get("/admin", (req, res) => {
  res.setHeader("Vary", "sec‑fetch‑site, sec‑fetch‑mode");
  if (isAllowed(req)) {
    // 如果是管理员，则返回管理页面
    getAdminPage(req, res);
  } else {
    res.status(403).send("Forbidden");
  }
});
```

注意代码中同时设置了 {{httpheader("Vary")}} 响应标头。这可以确保缓存系统只会将缓存的响应提供给具有相同 Fetch 元数据标头取值的请求（在上述例子中，涉及的 Fetch 元数据标头便是 `sec‑fetch‑site` 和 `sec‑fetch‑mode`）。

更多资源隔离策略的示例代码，请参阅 [资源隔离策略](https://xsleaks.dev/docs/defenses/isolation-policies/resource-isolation/)。

## 参见

- [CSRF](/zh-CN/docs/Web/Security/Attacks/CSRF)
- [跨站信息泄露](/zh-CN/docs/Web/Security/Attacks/XS-Leaks)
- [使用 Fetch 元数据保护你的资源免受网络攻击](https://web.dev/articles/fetch-metadata)（web.dev）
- [Fetch 元数据](https://xsleaks.dev/docs/defenses/opt-in/fetch-metadata/)（XS-Leaks Wiki）
