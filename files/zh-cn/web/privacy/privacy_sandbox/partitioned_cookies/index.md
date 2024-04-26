---
title: 具有独立分区状态的 Cookie（CHIPS）
slug: Web/Privacy/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: 81dbd6314e340cfff2a489b370a3ec6d53c74287
---

{{SeeCompatTable}}

**具有独立分区状态的 Cookie（Cookies Having Independent Partitioned State，CHIPS）**，也称之为**分区 Cookie（Partitioned cookies）**，允许开发人员选择将 cookie 放入分区存储中，每个顶级站点都有一个单独的 cookie 存储空间。

第三方分区 cookie 被绑定至最初设置的站点，无法从其他地方访问。目的是允许第三方服务设置 cookie，但只能在最初设置的顶级站点的上下文中阅读。这允许阻止跨站点跟踪，同时仍然启用第三方 cookie 的非跟踪使用，例如跨不同站点的嵌入式地图或聊天小部件的持久状态，以及保留子资源 CDN 负载平衡和 Headless CMS 提供程序的配置信息。

## 简述跨站点跟踪

历史上，当站点通过 {{htmlelement("iframe")}} 嵌入内容，被嵌入的内容可以在用户设备上设置 cookie 以响应跨站请求。如果用户访问其它包含相同嵌入内容的站点，嵌入内容可以访问由嵌入内容的第一个实例设置的相同的 cookie。这使得内容的所有者能够跟踪这些网站上的用户活动，以及嵌入相同内容的任何其他网站。

例如：

1. 一个用户访问 `https://site-a.example`，该站点嵌入了 `https://3rd-party.example` 的内容。`https://3rd-party.example` 在用户设备上设置了 cookie。
2. 该用户访问 `https://site-b.example`，该站点同样嵌入了 `https://3rd-party.example` 的内容。`https://3rd-party.example` 的新实例仍可以访问用户在上一页时设置的 cookie。

这是因为目前存储 cookie 的 key 是基于设置 cookie 的网站的主机或域名（又称为 **host key**）。

用户隐私是首要关注的问题，因此浏览器开始限制如何使用这种行为来跟踪用户，同时仍允许使用第三方 cookie，就像前面所说的一样。CHIPS 允许浏览器保护用户隐私的同时支持这些用例以及更多。

## CHIPS 如何工作？

支持 CHIPS 的浏览器为 HTTP 头部 {{httpheader("Set-Cookie")}} 提供了新的属性 `Partitioned`，该属性允许站点拥有者选择是否使用 CHIPS：

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> **注意：** 分区 cookie 必须与 `Secure` 一同设置。此外，建议在设置分区 cookie 时使用 `__Host` 前缀，以使它们绑定到主机名而不是可注册域名。

当 `Partitioned` 被设置，cookie 使用两个 key 进行存储，即主机 key 和一个新的**分区 key**。分区 key 基于格式和向设置 cookie 的 URL 端点发出请求时浏览器访问的顶级 URL 的 {{Glossary("eTLD", "有效顶级域名 +1")}}。

回顾我们在上一节中描述的示例：

1. 一个用户访问 `https://site-a.example`，该站点嵌入了 `https://3rd-party.example` 的内容，`https://3rd-party.example` 在用户设备上使用 `Partitioned` 设置了 cookie。意味着网站所有者选择使用 CHIPS。
2. 存储 cookie 的 key 现在为 `{("https://site-a.example"), ("3rd-party.example")}`。
3. 当用户访问 `https://site-b.example`，该站点也嵌入了 `https://3rd-party.example`，因为分区 key 不一致，所以新建立的实例不再允许访问前一页面设置的 cookie。

> **注意：** CHIPS 类似于 Firefox 实现的[状态分区机制](/zh-CN/docs/Web/Privacy/State_Partitioning)。不同之处在于，状态分区将 cookie 存储和检索分区到每个顶级站点的单独的 cookie 存储空间中。每个顶级站点，不使用该机制时允许接受第三方 cookie。随着浏览器开始逐步淘汰第三方 cookie 的使用，这仍然是有效的，当开发人员开始处理此更改时，需要允许第三方 cookie 的非跟踪使用。

## 有效的第三方嵌入场景

目前阻止所有第三方 cookie 会出现问题，例如之前提到的在使用第三方聊天服务的零售网站中。当第三方跟踪 cookie 被禁用时，CHIPS 仍支持该用例。

1. 一个用户访问 `https://shoppy.example`，该站点嵌入了 `https://3rd-party.example/chat` 的第三方聊天服务为需要服务的用户提供支持。`https://3rd-party.example/chat` 使用 `Partitioned` 在用户设备上设置 cookie，为了跨不同站点子域保留聊天状态。
2. 存储 cookie 的 key 将为 `{("https://shoppy.example")，("3rd-party.example/chat")}`。
3. 用户访问同样嵌入了 `https://3rd-party.example/chat` 的各种子域来寻求解决他们的问题，包括 `https://support.shoppy.example` 和 `https://checkout.shoppy.example`。新的嵌入式实例能够访问 cookie，因为分区键仍然匹配。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [具有独立分区状态的 Cookie（CHIPS）-- developer.chrome.com](https://developer.chrome.com/docs/privacy-sandbox/chips/)
- [CHIPS 解释](https://github.com/privacycg/CHIPS)

<section id="Quick_links">
{{ListSubpages("/zh-CN/docs/Web/Privacy", "2", "0", "0")}}
</section>
