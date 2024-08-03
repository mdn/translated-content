---
title: 首次使用时信任
slug: Glossary/TOFU
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**TOFU**（首次使用时信任）是一种客户端需要与未知服务器建立信任关系的安全模型。为了做到这一点，客户端将查找本地存储的标识符（例如公钥）。如果找到标识符，客户端可以建立连接。如果没有找到标识符，客户端可以提示用户确定是否应该信任标识符。

TOFU 被用于 SSH 协议和 {{HTTPHeader("Strict-Transport-Security")}}（{{Glossary("HSTS")}}）——浏览器将遵守重定向规则。

## 参见

- 维基百科上的 [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
