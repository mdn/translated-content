---
title: 密码散列函数
slug: Glossary/Cryptographic_hash_function
---

{{GlossarySidebar}}

加密散列函数有时也称为*摘要函数*，其是一种{{glossary("cryptography", "密码学")}}原语，将任意大小的信息转为固定大小的消息，称为{{glossary("digest", "摘要")}}。加密散列函数通常用于授权、{{Glossary("digital signature", "数字签名")}}以及{{Glossary("HMAC", "密钥散列消息认证码")}}。

散列函数必须有以下特征才能用于密码学：

- 快速计算（因为它们需要频繁地生成）
- 不可逆（每个摘要可能来自拥有庞大数据的消息，并且仅有暴力破解才能生成产生给定摘要的消息）
- 防篡改（对消息的任何改变都会产生不同的摘要）
- 抗碰撞（应该不可能找到两个不同的消息产生相同的摘要）

像 MD5 和 SHA-1 这样的加密散列函数被认为是不安全的，因为已经发现了可以显著降低它们抗碰撞性的攻击。

## 参见

- 维基百科上的[加密散列函数](https://zh.wikipedia.org/wiki/密碼雜湊函數)
- [MDN Web 文档术语](/zh-CN/docs/Glossary)

  - {{Glossary("Symmetric-key cryptography", "对称密钥加密")}}
