---
title: 密码算法
slug: Glossary/Cipher
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

在{{glossary("cryptography", "密码学")}}领域，**密码算法**是一种可以{{glossary("encryption", "加密")}}{{glossary("Plaintext","明文")}}使其不可读，且能够{{glossary("decryption", "解密")}}回明文的算法。

在信息时代很久以前，密码算法就已经很常见了（例如[替换密码算法](https://zh.wikipedia.org/wiki/替换式密码)和[移位密码算法](https://zh.wikipedia.org/wiki/古典密码#移位式密码)），但是它们之中除了[一次性密码本算法](https://zh.wikipedia.org/wiki/一次性密码本)以外，其他的均不满足密码学上的安全性。

在现代，密码算法发生了巨大变化。[AES](https://zh.wikipedia.org/wiki/高级加密标准)、[RSA](https://zh.wikipedia.org/wiki/RSA加密演算法) 和 [Blowfish](https://zh.wikipedia.org/wiki/Blowfish) 都是作为当代加密标准和系统不可或缺组成部分的密码算法。

现代密码算法通常为抵抗{{glossary("cryptanalysis", "密码分析")}}的攻击设计。无法保证所有攻击方法都已被发现，因此根据已知的攻击类别，每种算法[适用于不同的用途](/zh-CN/docs/Web/API/SubtleCrypto#支持的算法)。

密码算法通常以两种方式工作，或者在连续的数据块、缓冲区中作为[分块密码](https://zh.wikipedia.org/wiki/分组密码)使用，或者在数据流（通常是音频或视频流）中作为[流密码](https://zh.wikipedia.org/wiki/流密码)使用。

密码算法以处理{{glossary("key", "密钥")}}的方式不同可以分为两类：

- {{Glossary("Symmetric-key cryptography", "对称密钥")}}算法使用同样的密钥进行消息的加密和解密。如果消息有保密性需求，那么密钥也应该进行安全的传送。
- {{Glossary("Public-key cryptography", "非对称密钥")}}算法使用不同的密钥进行消息的加密和解密。

## 参见

- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto 支持的算法](/zh-CN/docs/Web/API/SubtleCrypto#支持的算法)
- 相关术语条目：
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
- 维基百科上的[密码](https://zh.wikipedia.org/wiki/密碼)词条
