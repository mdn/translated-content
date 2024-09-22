---
title: 预渲染
slug: Glossary/Prerender
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{GlossarySidebar}}

预渲染是指推测性地[预取](/zh-CN/docs/Glossary/Prefetch)并*渲染*用户可能在不久的将来导航到的页面（浏览器在后台渲染页面，相当于在一个不可见的独立标签页中）。预渲染包括下载文档的子资源并运行相关的 JavaScript。

如果用户随后选择导航到该页面，内容显示几乎可以瞬间完成。

预渲染可以用于，例如，获取“下一页”按钮链接的页面资源，或用户悬停的链接弹出窗口，或在地址栏输入的 URL 可能的页面目标。以下[推测规则](/zh-CN/docs/Web/API/Speculation_Rules_API)可以包含在文档的头部，用于提示浏览器应预渲染 `next.html` 和 `next2.html`，因为这两个页面都可能是下一个导航的合理目标：

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

预渲染比预取能带来更快的显示时间，因此用户体验更好，但代价是消耗更多资源。

## 参见

- [推测加载](/zh-CN/docs/Web/Performance/Speculative_loading)
- [预取](/zh-CN/docs/Glossary/Prefetch)
- developer.chrome.google.cn 上的[在 Chrome 中预渲染页面，以实现快速的页面导航](https://developer.chrome.google.cn/docs/web-platform/prerender-pages#prerendering-from-the-address-bar)（2023）
- [推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API)
