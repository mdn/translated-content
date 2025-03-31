---
title: 散列函数
slug: Glossary/Hash_function
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

散列函数接受一个可变长的输入，并产生一个定长的输出（也被称*摘要*或散列值）。散列函数应该能快速计算，并且不同的输入应该尽可能产生不同的输出（这称为*抗碰撞性*）。

散列函数有{{glossary("cryptography", "密码学")}}和非密码学的用途。在密码学之外，例如，散列函数可以用于生成关联数组（如映射或字典）的键。

{{domxref("SubtleCrypto")}} 接口的 {{domxref("SubtleCrypto.digest()", "digest()")}} 函数为 Web 应用程序提供了若干可用的散列函数。

## 密码散列函数

散列函数在密码学中有许多应用，包括{{Glossary("digital signature", "数字签名")}}和{{Glossary("HMAC", "消息认证码")}}。

并非所有的散列函数都适合用于密码学。要用于密码学，散列函数必须满足以下条件：

- 计算快速
- 单向：给定一个输出，重新生成原始输入应该是不切实际或不可能的
- 抗篡改：对输入的任何更改都会导致不同的输出
- 抗碰撞：找到两个不同的输入产生相同的输出应该是不切实际的

最常用于密码学的散列函数是 _SHA-2_（安全散列算法 2）系列，其名称为 `"SHA-"` 后跟输出摘要的位数，如，`"SHA-256"` 和 `"SHA-512"`。

SHA-2 是 SHA-1 算法的继任者，后者不再被认为是安全的，不应在密码学中使用。请注意，MD5 算法也被认为是不安全的。

## 参见

- {{domxref("SubtleCrypto.digest()")}}
- 维基百科上的[散列函数](https://zh.wikipedia.org/wiki/散列函数)
- 维基百科上的[密码散列函数](https://zh.wikipedia.org/wiki/密碼雜湊函數)
- 相关术语：
  - {{Glossary("Symmetric-key cryptography", "对称密钥密码)}}
