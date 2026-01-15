---
title: 密钥散列消息认证码（HMAC）
slug: Glossary/HMAC
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

**密钥散列消息认证码**（HMAC）是一个被用于{{Glossary("cryptography", "密码学")}}的认证消息机制。

该协议可以使用于任何的{{Glossary("hash function", "密码散列函数")}}。它的强度依赖底层的散列函数以及被选中的密钥。出于这样使用上的组合，HMAC 认证{{Glossary("Algorithm", "算法")}}通常是以组合名字出现，如 HMAC-SHA2。

HMAC 通常用于确保完整性和身份验证。

## 参见

- 维基百科上的 [HMAC](https://zh.wikipedia.org/wiki/密钥散列消息认证码)
- IETF 的 [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt)
