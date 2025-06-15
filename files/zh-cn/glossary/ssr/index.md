---
title: 服务器端渲染（SSR）
slug: Glossary/SSR
l10n:
  sourceCommit: d864c4fa589174ddd906bb679576d2265a20fad1
---

{{GlossarySidebar}}

**服务器端渲染**（SSR）指的是在服务器上生成 HTML 内容并将其发送到客户端的做法。SSR 与{{glossary("CSR", "客户端渲染")}}相对，后者由客户端使用 JavaScript 生成 HTML 内容。这两种技术并不互斥，可以在同一个应用中结合使用。

{{glossary("SSG", "静态网站")}}可以被视为 SSR 的一种（并且可以使用 SSR 的基础设施生成），但两者有细微差别。静态网站的内容是在构建时生成的，而不是在请求时生成。静态网站通常无需部署在服务器上，可以通过 {{glossary("CDN")}} 进行分发。

SSR/CSR 的区别在于动态内容的网站更为重要，例如需要实时更新或用户特定内容的站点。在这些情况下，服务器会为每个请求动态生成 HTML 内容，因为预先生成所有可能页面是不现实的。HTML 文件包含几乎完整的页面内容，JavaScript 资源仅用于实现交互。

SSR 的优点包括：

- 无障碍：即使没有 JavaScript，页面也（在一定程度上）可用，例如网络较慢、用户禁用 JavaScript 或浏览器过旧时。但任何交互或客户端逻辑将无法工作。
- 爬虫友好：搜索引擎、社交媒体爬虫和其他机器人无需执行 JavaScript 就能读取内容。注意，主流搜索引擎已能执行 JavaScript，因此纯 CSR 站点也能被索引，但社交媒体爬虫通常不能执行。
- 性能：服务器可以提前知道所需内容，一次性获取所有必要数据；而 CSR 通常只有在渲染初始页面时才知道后续依赖，导致产生请求瀑布问题。

SSR 和 CSR 各有性能权衡，可以结合使用以兼顾两者优势。例如，服务器可生成带有占位符的页面骨架，客户端再获取额外数据并按需更新页面。

## 参见

- [客户端框架简介 > 服务器端渲染](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- 维基百科上的[服务器端脚本](https://zh.wikipedia.org/wiki/服务器端脚本)
- 相关术语：
  - {{glossary("CSR", "客户端渲染")}}
  - {{glossary("SSG", "静态网站生成器")}}
  - {{glossary("SPA", "单页应用")}}
