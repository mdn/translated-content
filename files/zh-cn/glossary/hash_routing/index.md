---
title: 散列路由
slug: Glossary/Hash_routing
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**散列路由**（Hash routing）是常用于单页应用（SPA）中，用于实现在不重新加载整个页面的情况下管理导航和状态变化的客户端技术。

## 历史背景

早期的单页应用无法在不重新加载页面的情况下更改 URL 的[路径](/zh-CN/docs/Web/URI/Reference/Path)部分。为了解决这个问题，开发者采用了**基于散列的 SPA 路由**，即将路由信息存储在 URL 中“[片段](/zh-CN/docs/Web/URI/Reference/Fragment)”部分（即 `#` 符号后面的内容）。常见的模式包括 `#/profile` 和 `#!/profile`。应用程序会不断检查 [`window.location.hash`](/zh-CN/docs/Web/API/Location/hash)（或在后期支持后监听 [`hashchange`](/zh-CN/docs/Web/API/Window/hashchange_event) 事件），以检测用户导航过程中片段的变化；每当片段变化时，SPA 就会更新视图。

## 局限性

虽然这种方式无需服务器配置，但也存在局限性：对{{glossary("bfcache", "后退/前进缓存")}}的支持有限，带有散列的 URL 页面无法被正确索引（搜索引擎会忽略片段），并且生成的 URL 显得杂乱。

基于散列的路由现在被认为是一种过时的技术。它仅在极老的浏览器或无法配置服务器端路由的静态主机上作为后备方案使用。

## 现代替代方案

到 2012 年，所有主流浏览器（Chrome 5、Safari 5、Firefox 4）都已支持 [History API](/zh-CN/docs/Web/API/History_API)。SPA 现在可以调用 [`pushState()`](/zh-CN/docs/Web/API/History/pushState)、[`replaceState()`](/zh-CN/docs/Web/API/History/replaceState) 以及监听 [`popstate`](/zh-CN/docs/Web/API/PopStateEvent) 事件，来操作浏览器的历史记录栈，直接切换到如 `/profile` 这样的路径，并在不完全重新加载页面的情况下更新视图。这也让 URL 更加简洁，无需散列片段。
