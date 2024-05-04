---
title: 代码分割
slug: Glossary/Code_splitting
l10n:
  sourceCommit: 1dc2c2e53d2f0ba0678c9967e88abeb82b2dbc84
---

{{GlossarySidebar}}

**代码分割**是将 Web 应用程序依赖的代码（包括其自身代码和任何第三方依赖项）拆分为可以独立加载的单独捆绑包的做法。

这样做，让应用程序可以在任何给定时间点仅加载实际需要的代码，并根据需要加载其他捆绑包，可以用于改善应用程序的性能，特别是可以提升初始加载时的性能。

代码分割是像 [Webpack](https://webpack.js.org/) 和 [Browserify](https://browserify.org/) 这样的打包工具的功能。这些打包工具可以创建多个可以在运行时动态加载捆绑包。

## 参见

- [延迟加载](/zh-CN/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/zh-CN/docs/Glossary/HTTP_2)
- [Tree shaking](/zh-CN/docs/Glossary/Tree_shaking)
