---
title: 对称密钥密码
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

对称密钥密码指使用相同密钥进行密码和解密的密码算法。该密钥通常称为“对称密钥”或“秘密密钥”。

这通常与{{Glossary("public-key cryptography", "非对称密钥密码")}}形成对比——在非对称密钥密码中，密钥成对生成，一个密钥进行的转换只能通过另一个密钥来逆转。

对称密钥算法在正确使用时应该是安全的，并且效率很高，因此可以在不影响性能的情况下密码大量数据。

目前使用的大多数对称密钥算法是分组{{Glossary("Cipher", "密码")}}：这意味着它们一次密码一个块的数据。每个块的大小是固定的，由算法确定：例如 AES 使用 16 字节的块。分组密码总是与一个指定了如何安全地密码超过块大小的消息的[模式](/zh-CN/docs/Glossary/Block_cipher_mode_of_operation)一起使用。例如，AES 是一种密码，而 CTR、CBC 和 GCM 都是模式。使用不适当的模式或错误地使用模式，可能会完全破坏底层密码提供的安全性。

## 参见

- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto 支持的算法](/zh-CN/docs/Web/API/SubtleCrypto#supported_algorithms)
- 相关术语：
  - {{Glossary("Block cipher mode of operation", "分组密码工作模式")}}
  - {{Glossary("Cryptography", "密码学")}}
  - {{Glossary("hash function", "散列函数")}}
