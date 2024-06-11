---
title: 预获取
slug: Glossary/Prefetch
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{GlossarySidebar}}

预获取是指在后台推测性地获取用户未来*可能*访问的文档或子资源。如果用户选择导航到预获取的页面，这可以显著减少加载时间。例如，预获取可以用于获取“下一页”按钮链接的页面或其子资源，或用户悬停的链接弹出窗口，或者是搜索结果。

### 资源预获取

资源应该根据它们在未来导航中被需要的可能性进行预获取。浏览器可以自动推断某些资源，例如地址栏中的当前URL。

这可以使用 [`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch)（[推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API) 仅处理导航的文档预获取）来完成：

```html
<link rel="prefetch" href="next.html" />
```

### 文档预获取

开发人员可以通过几种不同的方式向浏览器提供应预获取导航的提示：

[`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API) 预获取:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html"]
      }
    ]
  }
</script>
```

推测规则 API 更好地处理导航的文档预获取，比 `<link rel="prefetch">` 更好；前者专门为此目的而设计，而后者有许多限制；有关详细信息，请参阅 [`<link rel="prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/prefetch)。

### DNS 预获取

[DNS 预获取](/zh-CN/docs/Web/HTML/Attributes/rel/dns-prefetch)提前解析域名，通过减少请求时与域名查找相关的时间，加快加载时间。

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## 参见

- [推测加载](/zh-CN/docs/Web/Performance/Speculative_loading)
- {{Glossary("prerender", "预渲染")}}
- [推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API)
