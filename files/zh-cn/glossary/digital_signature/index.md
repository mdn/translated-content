---
title: 数字签名
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**数字签名**是用于{{glossary("authentication", "认证")}}文档或消息的对象。

数字签名通常基于{{glossary("public-key cryptography", "非对称密钥密码")}}。其中，创建一个具有这样的属性的密钥对：如果某个输入使用一个密钥加密，那么只能使用另一个密钥解密，反之亦然。

密钥对的创建者将其中一个密钥公开，另一个密钥保密。要签署文档，密钥对的所有者创建文档的{{glossary("hash", "散列值")}}，并使用私钥对其进行加密。

文档和签名被发送给验证者，验证者对文档进行散列运算，检索公钥，并解密签名：如果签名与散列值匹配，则签名可以通过验证，验证者可以确信它是由具有私钥访问权限的实体创建的。

数字签名系统的安全性取决于：

- 私钥的所有者保持其安全：如果其他实体可以访问私钥，则它们可以冒充所有者。
- 验证者使用的公钥是所有者私钥的真实对应物：如果攻击者能够欺骗验证者相信错误的公钥，则它们可以冒充所有者。

验证者通常使用{{glossary("digital certificate", "数字证书")}}来检查公钥是否真实。

## 参见

- 相关术语：
  - {{glossary("Digital certificate", "数字证书")}}
  - {{glossary("Hash", "散列")}}
  - {{glossary("Public-key cryptography", "非对称密钥密码")}}
