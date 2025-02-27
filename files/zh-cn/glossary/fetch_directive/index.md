---
title: Fetch 指令
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**{{Glossary("CSP", "内容安全策略")}} fetch 指令**用于 {{HTTPHeader("Content-Security-Policy")}} 标头中，可以用来控制某些具体类型的资源可以从哪些来源被加载。比如说，{{CSP("script-src")}} 使得开发者可以允许可信任来源的脚本在页面上执行，{{CSP("font-src")}} 可以控制字体的来源。

所有的指令的值都会回落到 {{CSP("default-src")}}。也就是说，如果某个 fetch 指令在 CSP 标头中未定义，那么用户代理就会寻找 `default-src` 指令的值来替代。

查看 [Fetch 指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_指令)以获取完整列表。

## 参见

- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("CSP", "内容安全策略")}}
  - {{Glossary("Reporting directive", "报告指令")}}
  - {{Glossary("Document directive", "文档指令")}}
  - {{Glossary("Navigation directive", "导航指令")}}

- 参考

  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
