---
title: 签名（安全）
slug: Glossary/Signature/Security
---

**签名**或*数字签名*是 {{glossary("protocol","协议")}}，表明消息是真实的。

从给定消息的{{glossary("hash")}}，**签名过程**首先使用实体的私有{{glossary("key")}}生成链接到签名实体的数字签名。

收到消息后的**验证过程**

- _验证发件人_ _-_ 使用发件人的公钥来{{glossary("decryption","解码")}}签名并恢复只能用发件人的私钥创建的哈希
- _检查消息完整性 -_ 将哈希与接收到的文档中新计算的哈希进行比较（如果文档被篡改，两个哈希将不同）

如果私钥被泄密或收件人被欺骗地给出错误的公钥，系统就会失败。

## 了解更多

### 基础知识

- [Digital signature](https://zh.wikipedia.org/wiki/Digital_signature) on Wikipedia
- See {{glossary("digest")}}, {{glossary("encryption")}}

### 技术参考

- [信息安全基础 ​​​​​​​](/zh-CN/docs/Web/Security/Information_Security_Basics)
