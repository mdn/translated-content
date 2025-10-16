---
title: AesCtrParams
slug: Web/API/AesCtrParams
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Web Crypto API")}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`AesCtrParams`** 字典表示当使用 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

AES 是一种分组密码，意味着它将消息分割成多个块，并逐块进行加密。在 CTR 模式下，每次消息的一个块被加密时，都会混入一个额外的数据块。这个额外的数据块被称为“计数器块”。

给定的计数器块值在使用相同密钥的情况下绝不能重复使用：

- 对于长度为 _n_ 个块的消息，每个块必须使用不同的计数器块。
- 如果使用相同的密钥加密多条消息，那么在所有消息的所有块中，必须使用不同的计数器块。

通常，这是通过将初始计数器块值拆分为两个相连的部分来实现的：

- [nonce](https://zh.wikipedia.org/wiki/Nonce)（即只能使用一次的数字）。在消息中的每个块中，块的 nonce 部分保持不变。每次要加密新消息时，都会选择一个新的 nonce。nonce 不需要保密，但绝不能与相同的密钥一起重复使用。
- 计数器。块的这一部分在每次加密一个块时都会递增。

本质上：nonce 应确保计数器块在一条消息到下一条消息之间不会被重复使用，而计数器则应确保在单条消息内部计数器块不会被重复使用。

> [!NOTE]
> 请参见 [NIST SP800-38A 标准的附录 B](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)，以获取更多信息。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `AES-CTR`。
- `counter`
  - : 一个 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}——计数器块的初始值。此值必须为 16 字节长（即 AES 块大小）。该块的最右边 `length` 位用于计数器，其余部分用于 nonce。例如，如果 `length` 设置为 64，则 `counter` 的前半部分用作 nonce，后半部分用作计数器。
- `length`
  - : 一个 `Number`——计数器块中用于实际计数器的位数。计数器必须足够大，以避免溢出：如果消息有 `n` 个块，且计数器为 `m` 位长，则必须满足以下条件：`n <= 2^m`。定义 CTR 模式的 [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) 标准建议计数器应占用计数器块的一半（见[附录 B.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A73%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)），因此对于 AES 来说，这个数值应为 64。

## 示例

参见 {{domxref("SubtleCrypto.encrypt()")}} 和 {{domxref("SubtleCrypto.decrypt()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 方法中使用“AES-CTR”算法的浏览器将会支持此类型。

## 参见

- CTR 模式在 [NIST SP800-38A 标准](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)的 6.5 节中定义。
- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
