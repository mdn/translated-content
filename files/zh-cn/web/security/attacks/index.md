---
title: 攻击类型
slug: Web/Security/Attacks
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

本文介绍了各种类型的安全攻击以及防御这些攻击的技术。

## 点击劫持

[点击劫持](/zh-CN/docs/Web/Security/Attacks/Clickjacking)是欺骗用户点击一个并不是用户认知上的链接、按钮等的行为。这可用于窃取登录凭据或在用户不知情的情况下获取安装恶意软件的权限。点击劫持有时被称为“用户界面纠正”，尽管这是对“纠正”一词的误用。

## 跨站脚本（XSS）

跨站脚本（XSS）是一种安全漏洞，允许攻击者向网站注入恶意客户端代码。该代码由受害者执行从而让攻击者绕过访问控制并冒充用户。根据开放 Web 应用程序安全项目（Open Web Application Security Project），XSS 是 2017 年[第七大常见 Web 应用程序漏洞](https://owasp.org/www-project-top-ten/2017/Top_10)。

如果 Web 应用程序没有充足的校验或加密，这些攻击就会成功。用户的浏览器无法检测到恶意脚本是否不可信，因此会授予其访问任何 cookie、会话令牌或其他敏感站点特定信息的权限，或者让恶意脚本重写 {{glossary("HTML")}} 内容。

跨站脚本攻击通常在以下情况中发生：1) 数据通过不受信任的来源（通常是 Web 请求）进入 Web 应用程序，或者 2) 动态内容未经恶意内容验证就发送给 Web 用户。

恶意内容通常包括 {{glossary("JavaScript")}}，但有时也包括 HTML、Flash 或浏览器可以执行的任何其他代码。基于 XSS 的攻击种类几乎是无限的，但它们通常包括向攻击者传输 Cookie 等隐私数据或其他会话信息、将受害者重定向到攻击者控制的网页，或者以易受攻击的站点为幌子在用户的计算机上执行其他恶意操作。

XSS 攻击可以分为三类：存储（也称为持久）、反射（也称为非持久）或基于 DOM。

- 存储型 XSS 攻击
  - : 注入的脚本永久存储在目标服务器上。当浏览器发送数据请求时，受害者会从服务器接收到该恶意脚本。
- 反射型 XSS 攻击
  - : 当用户被诱骗点击恶意链接、提交特制表单或浏览恶意网站时，注入的代码就会传输到易受攻击的网站。Web 服务器将注入的脚本传回用户的浏览器，例如在错误消息、搜索结果或包含作为请求的一部分发送到服务器的数据的任何其他响应中。浏览器执行恶意代码是因为它假设来自用户已经与之交互的服务器的响应是“可信”的。
- 基于 DOM 的 XSS 攻击
  - : 其是指通过修改原始客户端脚本所使用的 DOM 环境（在受害者浏览器中）而执行的。也就是说，页面本身没有改变，但是页面中包含的客户端代码由于对 DOM 环境的恶意修改而以期望之外的方式运行。

## 跨站请求伪造（CSRF）

CSRF（有时也称为 XSRF）是一类相关的攻击。攻击者使用户的浏览器在用户不知情的情况下向网站的后端发送请求。攻击者可以使用 XSS 载荷发起 CSRF 攻击。

维基百科提到了一个很好的 CSRF 示例。在这种情况下，某人访问了一个实际上并不是图像的图像（例如在未经过滤的聊天或论坛中），而是向银行服务器发出取款请求：

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

现在如果你登录银行账户并且你的 cookie 仍然有效（并且没有其他验证），那么在加载包含此图像的 HTML 后你将立即转账。对于需要 POST 请求的端点，可以在加载页面时以编程方式触发 \<form> 提交（可能在不可见的 \<iframe> 中）：

```html
<form action="https://bank.example.com/withdraw" method="POST">
  <input type="hidden" name="account" value="bob" />
  <input type="hidden" name="amount" value="1000000" />
  <input type="hidden" name="for" value="mallory" />
</form>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").submit();
  });
</script>
```

下面有一些技术可以用来防止这种情况发生：

- GET 端点应该是幂等的——执行更改但不检索数据的操作应该要发送 POST（或其他 HTTP 方法）请求。POST 端点不应接受带有查询字符串参数的 GET 请求。
- 服务器应向浏览器提供会话唯一的 CSRF 令牌。然后，只要浏览器提交表单（在 `<form>` 元素的隐藏输入字段中），就可以包含此令牌。对于所有可能执行操作的非 GET 请求，服务器会将接收到的令牌与其存储的会话值进行比较。如果令牌不匹配，请求将被中止。
- 这种保护方法依赖于攻击者无法预测用户分配的 CSRF 令牌。应在登录时重新生成令牌。
- 用于敏感操作的 Cookie（例如会话 Cookie）应具有较短的生命周期，并且 [`SameSite` 属性](/zh-CN/docs/Web/HTTP/Guides/Cookies#samesite_属性)设置为 `Strict` 或 `Lax`。在支持的浏览器中，这将确保会话 cookie 不会随跨站请求一起发送，因此对应用程序服务器来说这个请求是未经验证的。
- 应一起部署 CSRF 令牌和 `SameSite` cookie。这可确保所有浏览器都受到保护，并在 `SameSite` cookie 无法提供帮助的情况下提供保护（例如来自单独子域的攻击）。

要了解更多防御技巧，请参阅 OWASP CSRF 防御备忘单。

## 中间人（MitM）

第三方拦截了 Web 服务器和客户端（浏览器）之间的流量，并冒充 Web 服务器以捕获数据（例如登录凭据或信用卡信息）。流量被传递，可能会进行修改。公共 Wi-Fi 网络是执行此类攻击的典型手段。

## 会话劫持

会话劫持是指获取并滥用用户的已验证会话。这可能是通过窃取现有会话的 cookie，或者通过欺骗用户（或其浏览器）设置可预测的会话 ID 的 cookie 来实现的。

通过部署严格的内容安全策略（Content-Security-Policy），可以限制数据泄露途径。

### 会话固定

第三方能够确定用户的会话标识符（例如，通过读取或设置它），因此可以作为用户与服务器进行交互。窃取 cookie 是实现这一目的的一种方法。

请注意，子域名（例如 application.example.com）可以通过设置 `Domain` 属性来设置一个 cookie，以便在发送请求到 example.com 或其他子域名时将其发送出去：

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

如果子域上存在易受攻击的应用程序，那么此机制就会被会话固定攻击滥用。当用户访问父域（或另一个子域）上的页面时，应用程序可能会信任用户 cookie 中发送的现有值。这可能允许攻击者绕过 CSRF 保护或在用户登录后劫持会话。或者，如果父域不使用带有 `includeSubdomains` 设置的 [HTTP Strict-Transport-Security](/zh-CN/docs/Glossary/HSTS)，则受到主动 MitM 攻击的用户（可能连接到公共 Wi-Fi 网络）可能会收到来自不存在的子域的带有 Set-Cookie 标头的响应。最终结果大致相同，浏览器存储了非法 cookie 并将其发送到 example.com 下的所有其他页面。

通过在用户进行身份验证时重新生成会话 cookie 值（即使 cookie 已存在）以及用 CSRF 令牌与用户绑定是防御会话固定的主要方法。

### 会话侧劫持

### 浏览器恶意劫持软件
