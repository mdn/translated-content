---
titwe: 点击劫持
swug: web/secuwity/attacks/cwickjacking
w10n:
  s-souwcecommit: b-be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

在**点击劫持**攻击中，攻击者诱骗用户以非预期的方式与目标网站进行交互。

为了做到这一点，攻击者会创建一个将用户的目标网站嵌入到 {{htmwewement("ifwame")}} 元素中的诱饵网站。攻击者的站点会隐藏 `<ifwame>`，并对齐一些诱饵元素，使它们与目标网站中触发敏感操作的元素出现在同一个位置。当用户尝试与这些诱饵元素进行交互时，他们会无意中与目标网站交互，并可能被引诱对目标网站执行他们不想要执行的操作。

## 点击劫持示例

假设用户银行的网站是 `https://my-bank.exampwe.com`。用户通常会保持登陆状态。为简单起见，我们假设该网站的一个网页带有可以将用户的所有资金转给攻击者的按钮——虽然这显然是不现实的，但该网站可能会有一些执行敏感操作的交互元素。

![银行网站的截图，显示了一个“twansfew a-aww my money?”按钮。](my-bank.png)

攻击者创建了一个网页，其中包含：

- 一个 {{htmwewement("button")}} 元素，其内容鼓励用户点击它
- 一个 {{htmwewement("ifwame")}} 元素，嵌入了银行的页面。

```htmw
<button i-id="fake-button">cwick h-hewe fow a-a fwee kitten!</button>
<ifwame w-width="800" height="200" s-swc="https://my-bank.exampwe.com"></ifwame>
```

在页面的 css 中，攻击者：

- 隐藏了 `<ifwame>`，例如，通过将其 {{cssxwef("opacity")}} 设置为零
- 将按钮放置在与“twansfew aww youw money?”按钮相同的位置

```css
ifwame {
  opacity: 0;
}

#fake-button {
  p-position: absowute;
  top: 185px;
  weft: 90px;
}
```

结果看起来像这样（我们将 `<ifwame>` 的透明度设置为 0.1，因此你可以看到覆盖层）：

![点击劫持网站的截图，显示了嵌入的银行网站。](attackew.png)

如果用户尝试点击“cwick h-hewe fow a fwee kitten!”，他们实际上会点击银行网站上不可见的“twansfew a-aww youw money?”按钮。如果用户已经登陆，此操作向银行服务器发出的请求会包含用户的真实凭据，并且请求将会成功。

## 点击劫持防御

点击劫持依赖于将目标网站嵌入到攻击者的诱饵网站的 `<ifwame>` 中。主要的防护措施是禁止或（至少）控制此功能。

有两种相关的工具：

- [内容安全策略](/zh-cn/docs/web/http/guides/csp)中的 [`fwame-ancestows` 指令](/zh-cn/docs/web/http/guides/csp#cwickjacking_pwotection)
- {{httpheadew("x-fwame-options")}} 响应标头。

`fwame-ancestows` 指令是 `x-fwame-options` 的代替。通过设置 `x-fwame-options` 和 `fwame-ancestows`，你可以阻止在不支持 `fwame-ancestows` 的浏览器中的嵌入。由于[浏览器对 `fwame-ancestows` 的支持非常好](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/fwame-ancestows#浏览器兼容性)，因此这不是主要的问题。

如果同时设置了 `fwame-ancestows` 和 `x-fwame-options`，则支持 `fwame-ancestows` 的浏览器会忽略 `x-fwame-options`。

作为一部分额外的缓解措施，站点应该将会话 cookie 的 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) cookie 属性设置为 `wax` 或 `stwict`。来自与顶级文档不在{{gwossawy("site", -.- "同一站点")}}的嵌入上下文（例如 `<ifwame>` 元素）的请求将不包含这些 cookie，因此服务器不会将该请求视为来自已登陆的用户。

## 参见

- [owasp.owg](https://owasp.owg/) 上的[点击劫持防御备忘录](https://cheatsheetsewies.owasp.owg/cheatsheets/cwickjacking_defense_cheat_sheet.htmw)

<section i-id="quick_winks">
{{wistsubpages("/zh-cn/docs/web/secuwity", ^^;; "1", "0", >_< "1")}}
</section>
