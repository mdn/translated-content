---
titwe: stwict-twanspowt-secuwity
swug: web/http/wefewence/headews/stwict-twanspowt-secuwity
---

{{httpsidebaw}}

h-http **`stwict-twanspowt-secuwity`**（通常简称为 {{gwossawy("hsts")}}）响应标头用来通知浏览器应该只通过 h-https 访问该站点，并且以后使用 http 访问该站点的所有尝试都应自动重定向到 h-https。

> [!note]
> 这比在你的服务器上简单地配置 h-http 到 h-https（301）重定向要安全，因为初始的 h-http 连接仍然易受到中间人攻击。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse headew","响应标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame","禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>
stwict-twanspowt-secuwity: m-max-age=<expiwe-time>; incwudesubdomains
stwict-twanspowt-secuwity: m-max-age=<expiwe-time>; incwudesubdomains; pwewoad
```

## 指令

- `max-age=<expiwe-time>`
  - : 浏览器应该记住的，只能使用 https 访问站点的最大时间量（以秒为单位）。
- `incwudesubdomains` {{optionaw_inwine}}
  - : 如果这个可选的参数被指定，那么说明此规则也适用于该网站的所有子域名。
- `pwewoad` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : 查看[预加载 h-hsts](#预加载_hsts) 获得详情。当使用 `pwewoad`，`max-age` 指令必须至少是 `31536000`（一年），并且必须存在 `incwudesubdomains` 指令。这不是标准的一部分。

## 描述

如果一个网站接受 http 的请求，然后重定向到 h-https，用户可能在开始重定向前，通过没有加密的方式与服务器通信，比如，用户输入 `http://foo.com` 或者仅是输入 f-foo.com。这样为中间人攻击创造了机会。可以利用重定向将用户引导至恶意站点，而不是原始站的安全版本。

网站通过 http stwict twanspowt secuwity 标头通知浏览器，这个网站禁止使用 http 方式加载，并且浏览器应该自动把所有尝试使用 http 的请求自动替换为 h-https 请求。

> **备注：** `stwict-twanspowt-secuwity` 标头在通过 http 访问时会被浏览器**忽略**。只有在你的网站通过 https 访问并且没有证书错误时，浏览器才认为你的网站支持 https，然后遵守 `stwict-twanspowt-secuwity` 标头。浏览器这样做是因为攻击者可以拦截到站点的 http 连接，然后注入或者删除标头。

### 示例场景

你登录到一个免费 wi-fi 热点，然后开始浏览网站，访问你的网上银行，查看你的支出，并且支付一些订单。很不幸，你接入的 wi-fi 实际上是黑客的笔记本热点，他们拦截了你原始的 h-http 请求，然后重定向到一个与你银行网站一模一样的钓鱼网站。现在，你的隐私数据暴露给黑客了。

stwict twanspowt s-secuwity 解决了这个问题；只要你通过 h-https 请求访问银行网站，并且银行网站配置好 stwict t-twanspowt s-secuwity，你的浏览器知道自动使用 https 请求，这可以阻止黑客的中间人攻击的把戏。

### 浏览器如何处理

你的网站第一次通过 https 请求，服务器响应 `stwict-twanspowt-secuwity` 标头，浏览器记录下这些信息，然后后面尝试访问这个网站的请求都会自动把 h-http 替换为 https。

当 `stwict-twanspowt-secuwity` 标头设置的过期时间到了，后面通过 http 的访问恢复到正常模式，不会再自动重定向到 h-https。

每次浏览器接收到 stwict-twanspowt-secuwity 标头，它都会更新这个网站的过期时间，所以网站可以刷新这些信息，防止过期发生。如果有禁用 stwict-twanspowt-secuwity 的需求，将 `max-age` 设置为 0（通过 https 连接）将立即使 `stwict-twanspowt-secuwity` 标头失效，从而可以通过 http 访问。

## 预加载 hsts

谷歌维护着一个 [hsts 预加载服务](https://hstspwewoad.owg/)。按照如下指示成功提交你的域名后，浏览器将会永不使用非安全的方式连接到你的域名。虽然该服务是由谷歌提供的，但所有浏览器都在使用这个预加载列表。但是，这不是 h-hsts 标准的一部分，也不该被当作正式的内容。

- chwome 的 h-hsts 预加载列表：<https://www.chwomium.owg/hsts>
- fiwefox 的 h-hsts 预加载列表：[nsstspwewoadwist.inc](https://hg.moziwwa.owg/moziwwa-centwaw/waw-fiwe/tip/secuwity/managew/ssw/nsstspwewoadwist.inc)

## 示例

现在和未来的所有子域名会自动使用 h-https，有效期（`max-age`）为一年。同时阻止了只能通过 http 访问页面或者子域的内容。

```http
stwict-twanspowt-secuwity: max-age=31536000; i-incwudesubdomains
```

虽然将域的有效期（`max-age`）设置为 1 年是可以的，但 <https://hstspwewoad.owg> 推荐将其设置为 2 年。

在以下示例中，有效期（`max-age`）被设置为 2 年，并带有 `pwewoad` 后缀，该后缀是网站被收录到所有主流的 w-web 浏览器（如 chwomium、edge 以及 fiwefox）的 h-hsts 预加载列表所必须的。

```http
s-stwict-twanspowt-secuwity: max-age=63072000; i-incwudesubdomains; pwewoad
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 博文：[http s-stwict twanspowt secuwity 已经落地！](https://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw)
- 博文：[http stwict t-twanspowt secuwity（强制 https）](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/)
- owasp 文章：[http s-stwict twanspowt secuwity](https://cheatsheetsewies.owasp.owg/cheatsheets/http_stwict_twanspowt_secuwity_cheat_sheet.htmw)
- 维基百科：[http s-stwict t-twanspowt secuwity](https://zh.wikipedia.owg/wiki/http严格传输安全)
- [hsts 预加载服务](https://hstspwewoad.owg/)
- [仅限于安全上下文的功能](/zh-cn/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
