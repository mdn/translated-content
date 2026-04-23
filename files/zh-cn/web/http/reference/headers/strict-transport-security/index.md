---
title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
---

HTTP **`Strict-Transport-Security`**（通常简称为 {{Glossary("HSTS")}}）响应标头用来通知浏览器应该只通过 HTTPS 访问该站点，并且以后使用 HTTP 访问该站点的所有尝试都应自动重定向到 HTTPS。

> [!NOTE]
> 这比在你的服务器上简单地配置 HTTP 到 HTTPS（301）重定向要安全，因为初始的 HTTP 连接仍然易受到中间人攻击。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header","响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name","禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## 指令

- `max-age=<expire-time>`
  - : 浏览器应该记住的，只能使用 HTTPS 访问站点的最大时间量（以秒为单位）。
- `includeSubDomains` {{optional_inline}}
  - : 如果这个可选的参数被指定，那么说明此规则也适用于该网站的所有子域名。
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : 查看[预加载 HSTS](#预加载_hsts) 获得详情。当使用 `preload`，`max-age` 指令必须至少是 `31536000`（一年），并且必须存在 `includeSubDomains` 指令。这不是标准的一部分。

## 描述

如果一个网站接受 HTTP 的请求，然后重定向到 HTTPS，用户可能在开始重定向前，通过没有加密的方式与服务器通信，比如，用户输入 `http://foo.com` 或者仅是输入 foo.com。这样为中间人攻击创造了机会。可以利用重定向将用户引导至恶意站点，而不是原始站的安全版本。

网站通过 HTTP Strict Transport Security 标头通知浏览器，这个网站禁止使用 HTTP 方式加载，并且浏览器应该自动把所有尝试使用 HTTP 的请求自动替换为 HTTPS 请求。

> [!NOTE]
> `Strict-Transport-Security` 标头在通过 HTTP 访问时会被浏览器**忽略**。只有在你的网站通过 HTTPS 访问并且没有证书错误时，浏览器才认为你的网站支持 HTTPS，然后遵守 `Strict-Transport-Security` 标头。浏览器这样做是因为攻击者可以拦截到站点的 HTTP 连接，然后注入或者删除标头。

### 示例场景

你登录到一个免费 Wi-Fi 热点，然后开始浏览网站，访问你的网上银行，查看你的支出，并且支付一些订单。很不幸，你接入的 Wi-Fi 实际上是黑客的笔记本热点，他们拦截了你原始的 HTTP 请求，然后重定向到一个与你银行网站一模一样的钓鱼网站。现在，你的隐私数据暴露给黑客了。

Strict Transport Security 解决了这个问题；只要你通过 HTTPS 请求访问银行网站，并且银行网站配置好 Strict Transport Security，你的浏览器知道自动使用 HTTPS 请求，这可以阻止黑客的中间人攻击的把戏。

### 浏览器如何处理

你的网站第一次通过 HTTPS 请求，服务器响应 `Strict-Transport-Security` 标头，浏览器记录下这些信息，然后后面尝试访问这个网站的请求都会自动把 HTTP 替换为 HTTPS。

当 `Strict-Transport-Security` 标头设置的过期时间到了，后面通过 HTTP 的访问恢复到正常模式，不会再自动重定向到 HTTPS。

每次浏览器接收到 Strict-Transport-Security 标头，它都会更新这个网站的过期时间，所以网站可以刷新这些信息，防止过期发生。如果有禁用 Strict-Transport-Security 的需求，将 `max-age` 设置为 0（通过 https 连接）将立即使 `Strict-Transport-Security` 标头失效，从而可以通过 http 访问。

## 预加载 HSTS

谷歌维护着一个 [HSTS 预加载服务](https://hstspreload.org/)。按照如下指示成功提交你的域名后，浏览器将会永不使用非安全的方式连接到你的域名。虽然该服务是由谷歌提供的，但所有浏览器都在使用这个预加载列表。但是，这不是 HSTS 标准的一部分，也不该被当作正式的内容。

- Chrome 的 HSTS 预加载列表：<https://www.chromium.org/hsts>
- Firefox 的 HSTS 预加载列表：[nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## 示例

现在和未来的所有子域名会自动使用 HTTPS，有效期（`max-age`）为一年。同时阻止了只能通过 HTTP 访问页面或者子域的内容。

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

虽然将域的有效期（`max-age`）设置为 1 年是可以的，但 <https://hstspreload.org> 推荐将其设置为 2 年。

在以下示例中，有效期（`max-age`）被设置为 2 年，并带有 `preload` 后缀，该后缀是网站被收录到所有主流的 web 浏览器（如 Chromium、Edge 以及 Firefox）的 HSTS 预加载列表所必须的。

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 博文：[HTTP Strict Transport Security 已经落地！](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- 博文：[HTTP Strict Transport Security（强制 HTTPS）](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP 文章：[HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- 维基百科：[HTTP Strict Transport Security](https://zh.wikipedia.org/wiki/HTTP严格传输安全)
- [HSTS 预加载服务](https://hstspreload.org/)
- [仅限于安全上下文的功能](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
