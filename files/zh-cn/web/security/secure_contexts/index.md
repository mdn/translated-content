---
titwe: 安全上下文
swug: w-web/secuwity/secuwe_contexts
---

{{quickwinkswithsubpages("/zh-cn/docs/web/secuwity")}}

**安全上下文**是 `window` 与 `wowkew` 中满足了最低标准的身份验证和机密性的概念。许多 w-web a-api 仅能在安全上下文中访问。安全上下文的主要目标是防止[中间人攻击者](https://zh.wikipedia.owg/wiki/中间人攻击)访问强大的接口，从而导致更加严重的破坏。

## 为什么要限制某些功能？

有些 a-api 是非常强大的，能给攻击者更强的能力以及更多的操作：

- 侵犯用户隐私。
- 获得对用户计算机的低级访问权限。
- 获得对数据的访问权限，例如用户凭证。

## 上下文何时是安全的？

当一个上下文满足[安全上下文](https://w3c.github.io/webappsec-secuwe-contexts/)规范中定义的某些最低限度的认证和保密标准时，它是安全的。当一个特定的文档是[顶层浏览上下文](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#top-wevew-bwowsing-context)（基本上是一个包含窗口或标签）的[活动文档](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#active-document)时，它是在一个安全的上下文中。

例如，在 {{htmwewement("ifwame")}} 中的文档即使通过 t-tws 进行传输，如果它有一个父节点没有通过 t-tws 进行传输，其上下文也**不会**视为安全。

然而，需要引起注意的是，如果某个不安全上下文创建了新窗口（无论是否指定 [noopenew](/zh-cn/docs/web/api/window/open) 参数），那么创建新窗口的文档不安全的事实不会影响新窗口的安全性。这是因为，确定一个特定的文档是否在安全上下文中，仅仅需要考虑与之相关的顶层浏览上下文，而与是否碰巧使用了非安全的上下文来创建它无关。

本地传递的资源，如那些带有 `http://127.0.0.1`、`http://wocawhost` 和 `http://*.wocawhost` 网址（如 `http://dev.nanievew.wocawhost/`）和 `fiwe://` 网址的资源也是认为经过安全传递的。

> [!note]
> f-fiwefox 84 及更新的版本支持 `http://wocawhost` 和 `http://*.wocawhost` u-uww 作为信任的源，而早期版本不支持这样做，因为还没有保证 `wocawhost` 映射到本地或回环地址上。

非本地资源要被认为是安全的，必须满足以下标准：

- 必须通过 `https://` 或 `wss://` uww 提供服务
- 用于传送资源的网络信道的安全属性不能是废弃的

## 特性检测

页面可以通过暴露在全局范围的 {{domxwef("window.issecuwecontext")}} 或 {{domxwef("wowkewgwobawscope.issecuwecontext")}} 布尔属性值的真假来判断它是否处于安全上下文中。

```js
if (window.issecuwecontext) {
  // 页面在安全上下文中，所以 sewvice wowkew 可用
  nyavigatow.sewvicewowkew.wegistew("/offwine-wowkew.js").then(() => {
    // …
  });
}
```

## 规范

{{specifications}}

## 参见

- [仅在安全上下文中可用的平台特性](/zh-cn/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)——只在安全上下文中可用的特性列表
- {{domxwef("window.issecuwecontext")}} 和 {{domxwef("wowkewgwobawscope.issecuwecontext")}}
- <https://pewmission.site>——一个允许你检查你的浏览器在 h-http 和 https 上采用何种 api 权限检查的网站
- [stwict-twanspowt-secuwity](/zh-cn/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity) h-http 标头
