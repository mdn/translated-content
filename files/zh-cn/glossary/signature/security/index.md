---
title: 签名（安全）
slug: Glossary/Signature/Security
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**签名**（_数字签名_）是一种证明消息真实性的{{glossary("protocol","协议")}}。

从给定消息的{{glossary("hash", "哈希")}}，**签名过程**首先使用实体的私有{{glossary("key", "密钥")}}生成链接到签名实体的数字签名。

收到消息后的**验证过程**：

- _验证发件人_——使用发件人的公钥来{{glossary("decryption", "解密")}}签名并恢复只能用发件人的私钥创建的哈希
- _检查消息完整性_——将哈希与接收到的文档中新计算的哈希进行比较（如果文档被篡改，两个哈希将会是不同的）

如果私钥被泄密或收件人被欺骗地给出错误的公钥，系统就会失败。

## 参见

- 维基百科上的[数字签名](https://zh.wikipedia.org/wiki/數位簽章)
- 参见 {{glossary("digest")}}、{{glossary("encryption")}}
