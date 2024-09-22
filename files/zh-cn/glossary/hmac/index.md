---
title: 密钥散列消息认证码（HMAC）
slug: Glossary/HMAC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**密钥散列消息认证码**（HMAC）是一个被用于{{Glossary("cryptography", "密码学")}}的认证消息协议。

该协议可以使用于任何的{{Glossary("Cryptographic hash function", "密码学函数")}}。它的强度依赖底层的函数（例如 SHA1 或 MD5）以及被选中的密钥。出于这样使用上的组合，HMAC 认证{{Glossary("Algorithm", "算法")}}通常是以组合名字出现，如 HMAC-SHA1。

HMAC 通常用于确保完整性和身份验证。

## 参见

- 维基百科上的 [HMAC](https://zh.wikipedia.org/wiki/密钥散列消息认证码)
- IETF 的 [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt)
