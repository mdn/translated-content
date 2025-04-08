---
title: 散列函数
slug: Glossary/Hash_function
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

散列函数是一种接受可变长输入并产生固定长度输出（也称为*摘要*或简称“哈希”）的函数。散列函数应该尽可能快地计算，并且不同的输入应尽可能产生不同的输出（这称为“抗碰撞性”）。

散列函数可用于{{glossary("cryptography", "密码学")}}和非密码学用途。例如，在密码学之外，散列函数可用于生成关联数组（如映射或字典）的键。

{{domxref("SubtleCrypto")}} 接口的 {{domxref("SubtleCrypto.digest()", "digest()")}} 函数使得各种散列函数可用于 Web 应用。

## 密码散列函数

在密码学中，散列函数有很多应用，包括{{Glossary("digital signature", "数字签名")}}和{{Glossary("HMAC", "消息认证码")}}。

并非所有散列函数都适用于密码学。要应用于密码学，散列函数必须：

- 计算速度快
- 单向：给定输出，重新生成原始输入应该是不切实际或不可能的
- 防篡改：对输入的任意更改都会导致不同的输出
- 防碰撞：找到产生相同输出的两个不同输入应该是不切实际的

密码学中最常用的散列函数来自 _SHA-2_（安全散列算法 2）家族，其名称为 `"SHA-"` 后跟输出摘要的长度（以位为单位）：例如，`"SHA-256"` 和 `"SHA-512"`。

SHA-2 是 SHA-1 算法的后继者，SHA-1 算法不再被视为安全，不应在密码学中使用。请注意，MD5 算法也被视为不安全。

## 参见

- {{domxref("SubtleCrypto.digest()")}}
- 维基百科上的[散列函数](https://zh.wikipedia.org/wiki/散列函數)
- 维基百科上的[密码散列函数](https://zh.wikipedia.org/wiki/密碼雜湊函數)
- 相关术语：
  - {{Glossary("Symmetric-key cryptography", "对称密钥密码")}}
