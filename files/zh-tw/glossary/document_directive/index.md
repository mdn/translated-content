---
title: Document directive
slug: Glossary/Document_directive
---

**{{Glossary("CSP")}} 文件指令** 被用在 {{HTTPHeader("Content-Security-Policy")}} 頭部和管理應用策略的文件或[工作者](/zh-TW/docs/Web/API/Web_Workers_API)環境的屬性。

文件指令不會回退到 {{CSP("default-src")}} 指令。

這些 CSP 指令是文件指令:

- {{CSP("base-uri")}}
- {{CSP("plugin-types")}}
- {{CSP("sandbox")}}
- {{CSP("disown-opener")}}

## 了解更多

### 技術資訊

- {{HTTPHeader("Content-Security-Policy")}}
- 其他類型的指令:
  - {{Glossary("Fetch directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
