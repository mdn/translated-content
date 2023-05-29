---
title: Document directive
slug: Glossary/Document_directive
---

**{{Glossary("CSP")}} 文档指令（document directives）** 出现于 {{HTTPHeader("Content-Security-Policy")}} 首部，支配着应用安全策略的文档的属性或者 [worker](/zh-CN/docs/Web/API/Web_Workers_API) 运行环境的特征。

文档指令不将 {{CSP("default-src")}} 指令作为回退机制。

以下 CSP 指令属于文档指令：

- {{CSP("base-uri")}}
- {{CSP("plugin-types")}}
- {{CSP("sandbox")}}
- {{CSP("disown-opener")}}

## 更多内容

- {{HTTPHeader("Content-Security-Policy")}}
- 其他类型的指令：

  - {{Glossary("Fetch directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
