---
title: 密码算法
slug: Glossary/Cipher
l10n:
  sourceCommit: 5b1eab9d32f4b769d1d78b87a1fec8aed084cf86
---

在{{glossary("cryptography", "密码学")}}领域，**密码算法**是一种可以{{glossary("encryption", "加密")}}{{glossary("Plaintext","明文")}}使其不可读，且能够{{glossary("decryption", "解密")}}回明文的算法。

在信息时代很久以前，密码算法就已经很常见了（例如[替换密码算法](https://zh.wikipedia.org/wiki/替换式密码)和[移位密码算法](https://zh.wikipedia.org/zh-cn/古典密码#移位式密码)），但是它们之中除了[一次性密码本算法](https://zh.wikipedia.org/zh-cn/一次性密码本)以外，其他的均不满足密码学上的安全性。

现代密码算法通常为抵抗{{glossary("cryptanalysis", "密码分析学家")}}的{{glossary("attack", "攻击")}}设计。我们不能保证所有攻击的方法都能被发现，但是每个算法也经历了很多已知攻击手段的检验。

密码算法通常以两种方式工作，或者在连续的数据块、缓冲区中作为[分块密码](https://zh.wikipedia.org/zh-cn/分组密码)使用，或者在数据流（通常是音频或视频流）中作为[流密码](https://zh.wikipedia.org/zh-cn/流密码)使用。

密码算法以处理{{glossary("key", "密钥")}}的方式不同可以分为两类：

- [对称密钥密码算法](https://zh.wikipedia.org/zh-cn/对称密钥加密)使用同样的密钥进行消息的加密和解密。如果消息有保密性需求，那么密钥也应该进行安全的传送。
- [非对称密钥密码算法](https://zh.wikipedia.org/zh-cn/公开密钥加密)使用不同的密钥进行消息的加密和解密。

## 参见

- 维基百科上的[密码](https://zh.wikipedia.org/zh-cn/密码)词条
- [加密与解密](/zh-CN/docs/Archive/Security/Encryption_and_Decryption)
- [MDN 术语表](/zh-CN/docs/Glossary)
  - {{Glossary("Block cipher mode of operation", "分组密码工作模式")}}
  - {{Glossary("Ciphertext","密文")}}
  - {{Glossary("Cipher suite", "密码套件")}}
  - {{Glossary("Cryptanalysis", "密码分析")}}
  - {{Glossary("Cryptography", "密码学")}}
  - {{Glossary("Decryption", "解密")}}
  - {{Glossary("Encryption", "加密")}}
  - {{Glossary("Key","密钥")}}
  - {{Glossary("Plaintext","明文")}}
  - {{Glossary("Public-key cryptography", "非对称密钥算法")}}
  - {{Glossary("Symmetric-key cryptography", "对称密钥算法")}}
