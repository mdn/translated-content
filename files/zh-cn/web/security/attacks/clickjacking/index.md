---
title: 点击劫持
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

在**点击劫持**攻击中，攻击者诱骗用户以非预期的方式与目标网站进行交互。

为了做到这一点，攻击者会创建一个将用户的目标网站嵌入到 {{htmlelement("iframe")}} 元素中的诱饵网站。攻击者的站点会隐藏 `<iframe>`，并对齐一些诱饵元素，使它们与目标网站中触发敏感操作的元素出现在同一个位置。当用户尝试与这些诱饵元素进行交互时，他们会无意中与目标网站交互，并可能被引诱对目标网站执行他们不想要执行的操作。

## 点击劫持示例

假设用户银行的网站是 `https://my-bank.example.com`。用户通常会保持登陆状态。为简单起见，我们假设该网站的一个网页带有可以将用户的所有资金转给攻击者的按钮——虽然这显然是不现实的，但该网站可能会有一些执行敏感操作的交互元素。

![银行网站的截图，显示了一个“Transfer all my money?”按钮。](my-bank.png)

攻击者创建了一个网页，其中包含：

- 一个 {{htmlelement("button")}} 元素，其内容鼓励用户点击它
- 一个 {{htmlelement("iframe")}} 元素，嵌入了银行的页面。

```html
<button id="fake-button">Click here for a free kitten!</button>
<iframe width="800" height="200" src="https://my-bank.example.com"></iframe>
```

在页面的 CSS 中，攻击者：

- 隐藏了 `<iframe>`，例如，通过将其 {{cssxref("opacity")}} 设置为零
- 将按钮放置在与“Transfer all your money?”按钮相同的位置

```css
iframe {
  opacity: 0;
}

#fake-button {
  position: absolute;
  top: 185px;
  left: 90px;
}
```

结果看起来像这样（我们将 `<iframe>` 的透明度设置为 0.1，因此你可以看到覆盖层）：

![点击劫持网站的截图，显示了嵌入的银行网站。](attacker.png)

如果用户尝试点击“Click here for a free kitten!”，他们实际上会点击银行网站上不可见的“Transfer all your money?”按钮。如果用户已经登陆，此操作向银行服务器发出的请求会包含用户的真实凭据，并且请求将会成功。

## 点击劫持防御

点击劫持依赖于将目标网站嵌入到攻击者的诱饵网站的 `<iframe>` 中。主要的防护措施是禁止或（至少）控制此功能。

有两种相关的工具：

- [内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)中的 [`frame-ancestors` 指令](/zh-CN/docs/Web/HTTP/Guides/CSP#clickjacking_protection)
- {{httpheader("X-Frame-Options")}} 响应标头。

`frame-ancestors` 指令是 `X-Frame-Options` 的代替。通过设置 `X-Frame-Options` 和 `frame-ancestors`，你可以阻止在不支持 `frame-ancestors` 的浏览器中的嵌入。由于[浏览器对 `frame-ancestors` 的支持非常好](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#浏览器兼容性)，因此这不是主要的问题。

如果同时设置了 `frame-ancestors` 和 `X-Frame-Options`，则支持 `frame-ancestors` 的浏览器会忽略 `X-Frame-Options`。

作为一部分额外的缓解措施，站点应该将会话 cookie 的 [`SameSite`](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) cookie 属性设置为 `Lax` 或 `Strict`。来自与顶级文档不在{{glossary("Site", "同一站点")}}的嵌入上下文（例如 `<iframe>` 元素）的请求将不包含这些 cookie，因此服务器不会将该请求视为来自已登陆的用户。

## 参见

- [owasp.org](https://owasp.org/) 上的[点击劫持防御备忘录](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)
