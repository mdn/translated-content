---
title: 第三方 cookie
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

这篇文章解释了什么是第三方 cookie，描述了与之相关的问题，并解释了如何解决这些问题。

## 什么是第三方 cookie？

[cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies) 与特定的域名和方案（通常是 `https`）相关联，也可能与子域名相关联，如果设置了 {{HTTPHeader("Set-Cookie")}} `Domain` 属性。

- 如果 cookie 的域名和方案与用户当前查看的页面（地址栏中显示的 URL）相匹配，则该 cookie 被认为是来自同一站点的，称为*第一方 cookie*。
- 如果域名和方案不同，则该 cookie 不被认为是来自同一站点的，称为*第三方 cookie*。

> [!NOTE]
> 第三方 cookie 有时也被称为*跨站 cookie*。这可能是一个更准确的名称，因为*第三方 cookie* 意味着由第三方公司或组织拥有。但是，无论是否拥有所有涉及的站点，其行为和潜在问题都是一样的。例如，一个站点可能会从不同的域名访问资源（如图像）。

当用户首次访问一个页面、点击内部链接跳转到同一站点的另一个页面，或请求位于同一站点的资源（如嵌入的图像、Web 字体或 JavaScript 文件）时，可能会设置第一方 cookie。

第三方 cookie 在以下常见情况下发送：

- 当用户点击一个站点上的链接跳转到另一个站点时。
- 当一个页面嵌入来自其他站点的组件，如图像或嵌入在 {{htmlelement("iframe")}} 中的其他文档（通常称为*第三方内容*）。除了对组件的原始请求外，这些组件可能会生成更多设置第三方 cookie 的请求。

## 第三方 cookie 的用途

当点击链接到其他网站时设置的第三方 cookie 用于多种目的。例如，你可能有一个指向合作伙伴网站的联盟链接，并在用户跟随该链接时设置一个 cookie，以便在购买某个产品时显示奖励横幅或向推荐者支付佣金。

设置 cookie 的第三方内容也有许多不同的用途。例如，你可能在多个不同但相关的网站上嵌入了一个登录微件，其在所有网站之间共享一个 cookie，以确认用户已登录，因此他们不必在每个网站上再次登录。

第三方 cookie 的其他用例包括：

- 在多个网站之间共享用户偏好或主题信息。
- 在多个网站上收集分析数据。
- 计算广告展示次数，并记录用户兴趣，以使广告技术平台能够提供更相关的广告。

让我们进一步说明上述提到的登录微件示例，假设有一个虚构公司，它为其在线商店（`shop.site`）、社区讨论论坛（`forum.site`）和客户服务与退货（`service.site`）设置了不同的域名。

这三个网站都有一个嵌入的登录微件，托管在 `auth.site`，以在网站之间保持登录状态。用户可以在任何一个网站上登录，创建一个在浏览器中为 `auth.site` 设置的 cookie，包含会话 ID。当用户访问其他网站时，嵌入的 `auth.site` 实例将能够访问在用户首次登录时设置的会话 ID cookie。它可以将其发送到服务器，检查其是否仍然有效，并立即在该网站上登录。

![上述第三方登录系统描述的可视化表示](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## 第三方 cookie 的问题

上述用例听起来似乎无害。然而，第三方 cookie 也可以在未获得用户同意的情况下用于不正当目的，这些目的在技术上与有效用例无法区分。

访问第三方链接或与嵌入在 `<iframe>` 中的第三方内容互动（例如，填写表单或点击按钮）可能会导致设置 cookie，从而将用户的信息交给他们未预期的对象。这些信息可能被用于：

- 在用户搜索特定产品信息时，通过定向广告在网络上追踪用户。
- 针对用户发送垃圾邮件或电话。
- 操纵他们的行为，以选择某些选项，从而增加联盟收入或操纵统计数据。

单独来看，这些情况已经足够糟糕，但问题更严重。第三方服务器可以结合在不同网站上设置的多个第三方 cookie 中的信息，创建用户的浏览历史、兴趣、习惯和个人信息的详细档案。这可以用来创建令人不安的、侵入性的用户体验，欺诈用户，甚至实施身份盗窃。

在这种情况下，第三方 cookie 被称为*跟踪 cookie*。

> [!NOTE]
> 通过不正当手段获得的用户信息通常也会被出售给其他第三方，从而进一步加剧问题。

如[通用数据保护条例](https://gdpr.eu/)（GDPR）和[加利福尼亚消费者隐私法案](https://www.oag.ca.gov/privacy/ccpa)（CCPA）等立法通过要求公司对其设置的 cookie 和收集的信息保持透明，帮助缓解了这一问题。示例包括要求客户选择是否参与此类数据收集，允许他们查看公司持有的关于他们的数据，并在希望时删除这些数据。然而，客户仍然不总是清楚他们的数据是如何被使用的。

## 浏览器如何处理第三方 cookie

浏览器厂商知道用户不喜欢上述行为，因此都开始默认阻止第三方 cookie，同时在其源代码中包含例外和启发式方法，以解决与流行网站长期存在的第三方 cookie 问题。

- Mozilla 的[反追踪政策](https://wiki.mozilla.org/Security/Anti_tracking_policy)导致 Firefox 默认阻止已知追踪器的第三方 cookie（参见 [Firefox 追踪保护](/zh-CN/docs/Web/Privacy/Guides/Firefox_tracking_protection) 和[增强追踪保护](https://support.mozilla.org/zh-CN/kb/Firefox%20桌面版的增强跟踪保护)。增强追踪保护可以设置为标准、严格或自定义。[标准模式](https://support.mozilla.org/zh-CN/kb/Firefox%20桌面版的增强跟踪保护#w_biao-zhun-zeng-qiang-xing-yin-si-bao-hu)启用[完全 cookie 保护](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/)，为每个站点提供单独的 cookie 容器，从而防止跨站点追踪。在[严格模式](https://support.mozilla.org/zh-CN/kb/Firefox%20桌面版的增强跟踪保护#w_yan-ge-zeng-qiang-xing-yin-si-bao-hu)中，Firefox 阻止所有第三方 cookie。
- Apple 也有类似的[追踪防护政策](https://webkit.org/tracking-prevention-policy/)；遵循此政策导致一套类似的第三方 cookie 保护措施默认启用；有关详细信息，请参见[智能追踪防护](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp)（ITP）。
- 在撰写本文时，Google Chrome 默认仅在隐身模式下阻止第三方 cookie，尽管用户可以通过 `chrome://settings` 设置始终阻止第三方 cookie。Google 已开始对一小部分 Chrome 用户禁用第三方 cookie，以测试这将产生的影响，同时开发技术以在不需要第三方 cookie 的情况下启用关键用例。有关详细信息，请参见[替换第三方 cookie](#替换第三方_cookie)。
- Edge 阻止来自未访问网站的追踪器，并默认阻止已知的有害追踪器。在撰写本文时，Microsoft 也开始探索在 Edge 中默认阻止第三方 cookie 的可能性。有关更多信息，请参见[追踪防护](https://learn.microsoft.com/zh-CN/microsoft-edge/web-platform/tracking-prevention)。
- [Brave 浏览器](https://brave.com/)默认阻止追踪 cookie。

在 Firefox 中，可以通过浏览器设置逐个允许使用第三方 cookie。然而，在 Safari 中，控制更为有限——你可以关闭跨站点追踪防护，但每个框架允许访问第三方 cookie 只能通过代码级别进行，即通过[存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API)。

> [!NOTE]
> 第三方 cookie（或仅追踪 cookie）也可能被浏览器扩展阻止。

cookie 阻止可能导致某些第三方组件（例如社交媒体微件）无法按预期功能运行。随着浏览器对第三方 cookie 施加进一步限制，开发人员应开始寻找减少对它们依赖的方法：请参见[替换第三方 cookie](#替换第三方_cookie)。

## 使用第三方 cookie

### 使用 `SameSite` 启用第三方 cookie

[`SameSite`](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 属性允许服务器指定何时发送第三方 cookie。如果在 `Set-Cookie` 头中未指定 `SameSite`，则使用默认值 `Lax`。这指示浏览器仅在用户从不同网站导航到 cookie 的源网站时发送第三方 cookie。这在用户从其他网站导航到你的网站时立即发送 cookie 以个性化体验时非常有用。

然而，如果你希望在 `<iframe>` 中嵌入多个站点的跨站内容并依赖第三方 cookie 的功能，例如在我们之前讨论的登录示例中，则这并不适用。在这种情况下，你需要显式设置 `SameSite=None` 以允许浏览器传递这些 cookie：

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

请注意，如果设置了 `SameSite=None`，则必须同时设置 `Secure` 属性——`SameSite=None` 需要一个*安全上下文*。在上面的示例中，我们还设置了 `HttpOnly` 属性，以禁用 JavaScript 访问该 cookie（例如通过 {{domxref("Document.cookie")}}）。持久化敏感信息的 cookie 应始终设置 `HttpOnly` 属性——使其可供 JavaScript 访问将非常不安全。这一预防措施有助于减轻跨站脚本攻击（[XSS](/zh-CN/docs/Web/Security/Attacks#跨站脚本（xss）)）的风险。

> [!NOTE]
> 用于敏感信息的 cookie 还应具有较短的[生命周期](/zh-CN/docs/Web/HTTP/Guides/Cookies#移除：定义_cookie_的生命周期)。

### 从第三方 cookie 过渡

有多种策略可以帮助网站在阻止第三方 cookie 的浏览器中最小化故障：

1. 审核你的第三方 cookie 使用情况。cookie 必须设置 `SameSite=None` 属性才能在跨站上下文中使用。因此，你可以通过在代码中搜索 `SameSite=None` 或在浏览器 DevTools 中检查存储的 `SameSite=None` cookie 来识别第三方 cookie，例如在 [Firefox 存储检查器](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/)中。Chrome 的[议题面板](https://developer.chrome.google.cn/docs/devtools/issues/)也[报告了第三方 cookie 阻止的议题](https://developers.google.cn/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools)，并列出了受影响的 cookie。
2. 在阻止第三方 cookie 的情况下测试你的功能，以查看哪些功能失效。你可能会发现某些 cookie 不再需要。
3. 起初，你可以使代码更具弹性，以便在没有第三方 cookie 数据时提供较少个性化的体验，而不是完全中断。遵循[优雅降级](/zh-CN/docs/Glossary/Graceful_degradation)的原则。
4. 通过用户调查或测验收集数据，或查看你已有的数据以推断趋势（例如，产品订单历史）。
5. 使用替代的客户端存储机制，例如 [Web Sto 存储](/zh-CN/docs/Web/API/Web_Storage_API)来持久化数据，或考虑服务器端解决方案。
6. 如果你的第三方 cookie 仅在少数相关的已知网站之间使用，你可以使用[存储访问 API](/zh-CN/docs/Web/API/Storage_Access_API) 和/或[相关网站集](/zh-CN/docs/Web/API/Storage_Access_API/Related_website_sets)仅允许这些特定网站的跨站 cookie 访问。存储访问会提示用户为每个框架提供权限，以便网站使用第三方 cookie。
   - 如果你已经为 Firefox 或 Safari 实现了使用存储访问 API 的解决方案，那么现在是检查你的实现与 Chrome 行为的好时机，Chrome 在版本 119 中更新以提供完全支持。
   - 相关网站集可以被视为存储访问 API 的渐进增强：该 API 可以以相同的方式使用，但集合中的网站将不会提示用户提供访问第三方 cookie 的权限。
7. 如果你的第三方 cookie 与生成它们的顶级网站是一对一关系，你可以使用[具有独立分区状态的 cookie](/zh-CN/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)（CHIPS，即分区 cookie），将你的 cookie 选择加入分区存储，每个顶级网站都有一个单独的 cookie 桶。这只需要向你现有的跨站 cookie 添加 `partitioned` 属性。这样，它们可以不受限制地使用，但不能与其他网站共享。请注意，CHIPS 目前仅限于 Chromium。

## 替换第三方 cookie

有多种功能可供希望停止使用第三方 cookie 的开发者，以尊重用户隐私并最小化跟踪，同时继续实现相关用例。其中一些功能处于早期实验阶段，但在你开始为未来做准备时，值得考虑。

你可以开始探索 Google 的[隐私沙盒](/zh-CN/docs/Web/Privacy/Guides/Privacy_sandbox)项目中可用的不同功能，以查看它们是否适合你的用例（这些功能目前处于实验阶段，仅限 Chromium）：

- [联合凭证管理](/zh-CN/docs/Web/API/FedCM_API)（FedCM）API：启用联合身份服务，允许用户登录多个网站和服务。
- [私有状态令牌](https://privacysandbox.google.com/protections/private-state-tokenss)：通过跨站点交换有限的、非识别性的信息来实现反欺诈和反垃圾邮件。
- [主题 API](/zh-CN/docs/Web/API/Topics_API)：启用基于兴趣的广告和内容个性化。
- [受保护的受众 API](https://privacysandbox.google.com/private-advertising/protected-audience)：使用来自一个应用或网站的数据来帮助选择用户在访问另一个应用或网站时的广告。
- [归因报告 API](https://privacysandbox.google.com/private-advertising/attribution-reporting)：启用广告展示和转化的测量。

## 参见

- [HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies)
- [Web 隐私](/zh-CN/docs/Web/Privacy)
