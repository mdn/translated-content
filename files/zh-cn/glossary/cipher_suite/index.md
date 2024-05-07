---
title: 密码套件
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**密码套件**是密钥交换算法、认证算法、大容量数据加密{{Glossary("cipher","加密算法")}}和消息认证码算法的组合。

在如 {{Glossary("TLS")}} 的密码系统中，客户端与服务端在安全通信之前，需要协商出密码套件，一个典型的密码套件类似于 ECDHE_RSA_WITH_AES_128_GCM_SHA256 或 ECDHE-RSA-AES128-GCM-SHA256，代表着：

- 密钥交换算法使用 ECDHE（椭圆曲线 Diffie-Hellman 密钥交换算法）
- 认证算法使用 RSA
- 加密算法使用 AES-128，使用 Galois/Counter Mode (GCM) 作为分组加密的模式
- 基于散列的消息认证码算法使用 SHA-256

## 参见

- [Mozilla 推荐的 TLS 密码套件](https://wiki.mozilla.org/Security/Server_Side_TLS)
