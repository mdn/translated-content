---
title: bfcache
slug: Glossary/bfcache
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{GlossarySidebar}}

**后退/前进缓存**（bfcache）是现代浏览器中提供的一项性能增强特性，允许用户在之前访问过的页面之间进行即时的后退和前进导航。它通过在用户导航离开页面时存储页面的完整快照来实现这一点；如果用户决定返回页面，浏览器可以快速恢复快照，而不需要重复加载页面所需的网络请求。

快照在内存中包含整个页面，包括 JavaScript 堆；当用户导航离开时，正在进行的代码将被暂停，当他们返回页面时将恢复执行。另一方面，常规的 HTTP 缓存条目仅包含先前请求的响应。因此，bfcache 提供的结果比 HTTP 缓存更快。

此技术的缺点是，bfcache 条目需要更多资源，并且在表示正在进行的代码方面会创建复杂性。某些代码特性（例如 [`unload`](/zh-CN/docs/Web/API/Window/unload_event) 处理程序）不兼容，因此它们在页面上的存在会阻止页面使用 bfcache。

bfcache 对于性能非常有利，因此有必要确保你的页面不会阻止它被使用。你可以使用 [notRestoredReasons API](/zh-CN/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) 来监视页面是否被阻止使用 bfcache，以及被阻止的原因。

## 参见

- web.developers.google.cn 上的[后退/前进缓存](https://web.developers.google.cn/articles/bfcache)（2023）
