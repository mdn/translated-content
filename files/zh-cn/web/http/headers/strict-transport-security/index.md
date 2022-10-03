---
title: HTTP Strict Transport Security
slug: Web/HTTP/Headers/Strict-Transport-Security
original_slug: Web/HTTP/HTTP_Strict_Transport_Security
---

{{HTTPSidebar}}

**`HTTP-Strict-Transport-Security`**（通常简称为 {{Glossary("HSTS")}}）响应标头用来通知浏览器应该只通过 HTTPS 访问该站点，并且以后使用 HTTP 访问该站点的所有尝试都应自动转换为 HTTPS。

| Header type                                      | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## 语法

```plain
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## 指令

- `max-age=<expire-time>`
  - : 设置在浏览器收到这个请求后的\<expire-time>秒的时间内凡是访问这个域名下的请求都使用 HTTPS 请求。
- `includeSubDomains` {{optional_inline}}
  - : 如果这个可选的参数被指定，那么说明此规则也适用于该网站的所有子域名。
- `preload` {{optional_inline}}
  - : 查看 [预加载 HSTS](#预加载_hsts) 获得详情。不是标准的一部分。

## 描述

一个网站接受一个 HTTP 的请求，然后跳转到 HTTPS，用户可能在开始跳转前，通过没有加密的方式和服务器对话，比如，用户输入 `http://foo.com` 或者直接 foo.com。

这样存在中间人攻击潜在威胁，跳转过程可能被恶意网站利用来直接接触用户信息，而不是原来的加密信息。

网站通过 HTTP Strict Transport Security 通知浏览器，这个网站禁止使用 HTTP 方式加载，浏览器应该自动把所有尝试使用 HTTP 的请求自动替换为 HTTPS 请求。

> **备注：** `Strict-Transport-Security` 在通过 HTTP 访问时会被浏览器**忽略;** 因为攻击者可以通过中间人攻击的方式在连接中修改、注入或删除它。只有在你的网站通过 HTTPS 访问并且没有证书错误时，浏览器才认为你的网站支持 HTTPS 然后使用 `Strict-Transport-Security` 的值 .

### 浏览器如何处理

你的网站第一次通过 HTTPS 请求，服务器响应`Strict-Transport-Security` 头，浏览器记录下这些信息，然后后面尝试访问这个网站的请求都会自动把 HTTP 替换为 HTTPS。

当 HSTS 头设置的过期时间到了，后面通过 HTTP 的访问恢复到正常模式，不会再自动跳转到 HTTPS。

每次浏览器接收到 Strict-Transport-Security 头，它都会更新这个网站的过期时间，所以网站可以刷新这些信息，防止过期发生。

Chrome、Firefox 等浏览器里，当您尝试访问该域名下的内容时，会产生一个 307 Internal Redirect（内部跳转），自动跳转到 HTTPS 请求。

### 示例场景

你连接到一个免费 WiFi 接入点，然后开始浏览网站，访问你的网上银行，查看你的支出，并且支付一些订单。很不幸，你接入的 WiFi 实际上是黑客的笔记本热点，他们拦截了你最初的 HTTP 请求，然后跳转到一个你银行网站一模一样的钓鱼网站。现在，你的隐私数据暴露给黑客了。

Strict Transport Security 解决了这个问题；只要你通过 HTTPS 请求访问银行网站，并且银行网站配置好 Strict Transport Security，你的浏览器知道自动使用 HTTPS 请求，这可以阻止黑客的中间人攻击的把戏。

## 预加载 HSTS

谷歌维护着一个 [HSTS 预加载服务](https://hstspreload.appspot.com/)。按照如下指示成功提交你的域名后，浏览器将会永不使用非安全的方式连接到你的域名。虽然该服务是由谷歌提供的，但所有浏览器都有使用这份列表的意向（或者已经在用了）。但是，这不是 HSTS 标准的一部分，也不该被当作正式的内容。

- Chrome & Chromium 的 HSTS 预加载列表： <https://www.chromium.org/hsts>
- Firefox 的 HSTS 预加载列表：[nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## 示例

现在和未来的所有子域名会自动使用 HTTPS 连接长达一年。同时阻止了只能通过 HTTP 访问的内容。

```plain
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- Blog post: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog post: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Article: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia: [HTTP Strict Transport Security](http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- Google: [Chrome is backing away from public key pinning, and here's why](http://www.zdnet.com/article/google-chrome-is-backing-away-from-public-key-pinning-and-heres-why/)
- Blog post: [A new security header: Expect-CT](https://scotthelme.co.uk/a-new-security-header-expect-ct/)
