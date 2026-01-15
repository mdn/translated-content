---
title: 非对称密钥密码
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: aabd56c814d580e577199239fb27e54cc168cf55
---

非对称密钥密码，或*公钥密码*，是一种密钥成对出现的密码系统。由其中一个密钥执行的变换只能通过另一个密钥来解密。一个密钥（_私钥_）是保密的，而另一个密钥是公开的。

在数字签名中，使用私钥进行签名，公钥进行验证。这意味着任何人都可以验证签名，但只有拥有相应私钥的人才能生成签名。

在加密中，使用公钥加密，使用私钥解密。这使得公钥加密系统相较于对称加密系统具有优势，因为加密密钥可以公开。任何人都可以向私钥的拥有者加密消息，但只有私钥的拥有者才能解密。然而，公钥加密系统通常比对称算法慢得多，而且它们能够加密的消息大小与密钥大小成正比，因此对于长消息来说扩展性不佳。

因此，常见的做法是使用对称算法加密消息，然后使用公钥系统加密对称密钥。这种安排可以结合两种系统的优点。

常用的公钥密码系统有 RSA（用于签名和加密）、DSA（用于签名）和 Diffie-Hellman（用于密钥协商）。流行的椭圆曲线算法包括[椭圆曲线 Diffie-Hellman 密钥交换](https://zh.wikipedia.org/wiki/橢圓曲線迪菲-赫爾曼金鑰交換)（**ECDH**）和[椭圆曲线数字签名算法](https://zh.wikipedia.org/wiki/椭圆曲线数字签名算法)（**ECDSA**）。

## 参见

- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto 支持的算法](/zh-CN/docs/Web/API/SubtleCrypto#支持的算法)
- 术语
  - {{Glossary("Symmetric-key cryptography", "对称密钥密码")}}

- 维基百科上的[公开密钥密码学](https://zh.wikipedia.org/wiki/公开密钥加密)
