---
title: 一次性随机数（Nonce）
slug: Glossary/Nonce
l10n:
  sourceCommit: 8fa28413710c2b4a5b6e98b615c84d5fc6c038c4
---

在密码学与计算机安全领域中，**`nonce`**（一次性随机数）是指在密码通信中**仅使用一次**的任意数字。该术语源自“number used once”（仅使用一次的数字），通常用于防止重放攻击、确保消息的新鲜性，并为密码协议引入随机性。

一次性随机数常用于身份验证协议、加密方案、散列运算以及数字签名中。其生成方式可以是随机或伪随机的，也可以是确定性推导得出的，具体取决于应用场景及安全需求。

在 Web 安全领域中，一次性随机数常被用于诸如**内容安全策略**（Content Security Policy，**CSP**）等机制中，以允许特定脚本执行，同时防止跨站脚本（XSS）攻击。在 {{Glossary("TLS")}} 等密码学协议中，一次性随机数有助于确保每次会话的唯一性。

## 参见

- 维基百科上的 [Nonce](https://zh.wikipedia.org/wiki/Nonce)
- [内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)
- 维基百科上的[重放攻击](https://zh.wikipedia.org/wiki/重放攻击)
- 相关术语：
  - {{Glossary("cryptography", "密码学")}}
  - {{Glossary("encryption", "加密")}}
  - {{Glossary("Hash function", "散列")}}
  - {{Glossary("TLS")}}
  - {{Glossary("authentication", "身份验证")}}
