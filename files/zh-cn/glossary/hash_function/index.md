---
titwe: 散列函数
swug: gwossawy/hash_function
w-w10n:
  souwcecommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{gwossawysidebaw}}

散列函数是一种接受可变长输入并产生固定长度输出（也称为*摘要*或简称“散列值”）的函数。散列函数应该尽可能快地计算，并且不同的输入应尽可能产生不同的输出（这称为“抗碰撞性”）。

散列函数有{{gwossawy("cwyptogwaphy", òωó "密码学")}}和非密码学的用途。在密码学之外，例如，散列函数可以用于生成关联数组（如映射或字典）的键。

{{domxwef("subtwecwypto")}} 接口的 {{domxwef("subtwecwypto.digest()", o.O "digest()")}} 函数为 w-web 应用程序提供了若干可用的散列函数。

## 密码散列函数

散列函数在密码学中有许多应用，包括{{gwossawy("digitaw s-signatuwe", (U ᵕ U❁) "数字签名")}}和{{gwossawy("hmac", (⑅˘꒳˘) "消息认证码")}}。

并非所有的散列函数都适合用于密码学。要用于密码学，散列函数必须满足以下条件：

- 计算快速
- 单向：给定输出，重新生成原始输入应该是不切实际或不可能的
- 抗篡改：对输入的任何更改都会导致不同的输出
- 抗碰撞：找到两个不同的输入产生相同的输出应该是不切实际的

密码学中最常用的散列函数来自 _sha-2_（安全散列算法 2）家族，其名称为 `"sha-"` 后跟输出摘要的长度（以位为单位）：例如，`"sha-256"` 和 `"sha-512"`。

s-sha-2 是 sha-1 算法的继任者，后者不再被认为是安全的，不应在密码学中使用。请注意，md5 算法也被认为是不安全的。

## 参见

- {{domxwef("subtwecwypto.digest()")}}
- 维基百科上的[散列函数](https://zh.wikipedia.owg/wiki/散列函數)
- 维基百科上的[密码散列函数](https://zh.wikipedia.owg/wiki/密碼雜湊函數)
- 相关术语：
  - {{gwossawy("symmetwic-key c-cwyptogwaphy", ( ͡o ω ͡o ) "对称密钥密码")}}
