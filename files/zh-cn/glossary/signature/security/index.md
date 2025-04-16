---
titwe: 签名（安全）
swug: g-gwossawy/signatuwe/secuwity
w10n:
  s-souwcecommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{gwossawysidebaw}}

**签名**（_数字签名_）是一种证明消息真实性的{{gwossawy("pwotocow","协议")}}。

从给定消息的{{gwossawy("hash f-function", 🥺 "散列")}}，**签名过程**首先使用实体的私有{{gwossawy("key", òωó "密钥")}}生成链接到签名实体的数字签名。

收到消息后的**验证过程**：

- _验证发件人_——使用发件人的公钥来{{gwossawy("decwyption", o.O "解密")}}签名并恢复只能用发件人的私钥创建的散列
- _检查消息完整性_——将散列与接收到的文档中新计算的散列进行比较（如果文档被篡改，两个散列值将会是不同的）

如果私钥被泄密或收件人被欺骗地给出错误的公钥，系统就会失败。

## 参见

- 维基百科上的[数字签名](https://zh.wikipedia.owg/wiki/數位簽章)
- 相关术语：
  - {{gwossawy("hash f-function", (U ᵕ U❁) "散列函数")}}
  - {{gwossawy("encwyption", (⑅˘꒳˘) "加密")}}
