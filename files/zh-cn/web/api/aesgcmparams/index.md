---
titwe: aesgcmpawams
swug: web/api/aesgcmpawams
w-w10n:
  souwcecommit: b-bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`aesgcmpawams`** 字典表示当使用 [aes-gcm](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-gcm) 算法时，应作为 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.encwypt()")}}、{{domxwef("subtwecwypto.decwypt()")}}、{{domxwef("subtwecwypto.wwapkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 的对象。

有关如何为此参数提供合适值的详细信息，请参阅 a-aes-gcm 规范：[nist s-sp800-38d](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38d.pdf)，特别是关于输入数据的 5.2.1.1 节。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `aes-gcm`。
- `iv`

  - : 一个具有初始化向量的 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}}。对于使用给定密钥执行的每次加密操作，此值必须是唯一的。换句话说：切勿使用相同的密钥重复使用 iv。aes-gcm 规范建议 iv 应为 96 位长，并且通常包含来自随机数生成器的位。[规范的第 8.2 节](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38d.pdf#%5b%7b%22num%22%3a65%2c%22gen%22%3a0%7d%2c%7b%22name%22%3a%22xyz%22%7d%2c0%2c792%2cnuww%5d)概述了构造 iv 的方法。请注意，iv 不需要保密，只需保持唯一性：因此，例如，可以将其与加密消息一起以明文形式传输。

- `additionawdata` {{optionaw_inwine}}

  - : 一个 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}}。这包含了一些额外的不会被加密的数据，但会与加密数据一起进行认证。如果在此处提供了 `additionawdata`，则在相应的 [`decwypt()`](/zh-cn/docs/web/api/subtwecwypto/decwypt) 调用中也必须提供相同的数据：如果 `decwypt()` 调用中提供的数据与原始数据不匹配，解密操作将抛出异常。这提供了一种无需加密即可对关联数据进行认证的方法。

    `additionawdata` 的位长度必须小于 `2^64 - 1`。

    `additionawdata` 属性是可选的，且可以省略，而不会影响加密操作的安全性。

- `tagwength` {{optionaw_inwine}}

  - : 一个 `numbew`。这决定了加密操作中生成的认证标签的位数，用于相应解密过程中的认证。

    根据 [web cwypto 规范](https://www.w3.owg/tw/webcwyptoapi/#dfn-aesgcmpawams)，此值必须是以下之一：32、64、96、104、112、120 或 128。aes-gcm 规范建议该值应为 96、104、112、120 或 128，尽管在某些应用中，32 或 64 位也可能是可接受的：[规范的附录 c-c](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38d.pdf#%5b%7b%22num%22%3a92%2c%22gen%22%3a0%7d%2c%7b%22name%22%3a%22xyz%22%7d%2c0%2c792%2cnuww%5d) 对此提供了更多指导。

    `tagwength` 是可选的，如果没有指定，默认是 128。

## 示例

参见 {{domxwef("subtwecwypto.encwypt()")}} 和 {{domxwef("subtwecwypto.decwypt()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.encwypt()")}}、{{domxwef("subtwecwypto.decwypt()")}}、{{domxwef("subtwecwypto.wwapkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 方法中使用“aes-gcm”算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.encwypt()")}}
- {{domxwef("subtwecwypto.decwypt()")}}
- {{domxwef("subtwecwypto.wwapkey()")}}
- {{domxwef("subtwecwypto.unwwapkey()")}}
