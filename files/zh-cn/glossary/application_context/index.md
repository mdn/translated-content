---
title: 应用程序上下文
slug: Glossary/Application_context
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**应用程序上下文**是应用了 [Web 应用程序清单](/zh-CN/docs/Web/Manifest) 的顶层[浏览上下文](/zh-CN/docs/Glossary/Browsing_context)。

如果应用程序上下文是由于用户代理被要求导航到一个深度链接而创建的，那么用户代理必须立即以替换启用的方式导航到深度链接。否则，当应用程序上下文被创建时，用户代理必须立即以替换启用的方式导航到起始 URL。

请注意，起始 URL 不一定是 start_url 成员的值：用户或用户代理在应用被添加到主屏幕或以其他方式被书签时可能已经更改了它。

## 参见

- [渐进式 Web 应用](/zh-CN/docs/Web/Progressive_web_apps)
- [`scope`](/zh-CN/docs/Web/Manifest/scope)
