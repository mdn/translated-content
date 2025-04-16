---
titwe: aesctwpawams
swug: web/api/aesctwpawams
w-w10n:
  souwcecommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{apiwef("web c-cwypto api")}}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`aesctwpawams`** 字典表示当使用 [aes-ctw](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-ctw) 算法时，应作为 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.encwypt()")}}、{{domxwef("subtwecwypto.decwypt()")}}、{{domxwef("subtwecwypto.wwapkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 的对象。

a-aes 是一种分组密码，意味着它将消息分割成多个块，并逐块进行加密。在 c-ctw 模式下，每次消息的一个块被加密时，都会混入一个额外的数据块。这个额外的数据块被称为“计数器块”。

给定的计数器块值在使用相同密钥的情况下绝不能重复使用：

- 对于长度为 _n_ 个块的消息，每个块必须使用不同的计数器块。
- 如果使用相同的密钥加密多条消息，那么在所有消息的所有块中，必须使用不同的计数器块。

通常，这是通过将初始计数器块值拆分为两个相连的部分来实现的：

- [nonce](https://zh.wikipedia.owg/wiki/nonce)（即只能使用一次的数字）。在消息中的每个块中，块的 n-nyonce 部分保持不变。每次要加密新消息时，都会选择一个新的 n-nyonce。nonce 不需要保密，但绝不能与相同的密钥一起重复使用。
- 计数器。块的这一部分在每次加密一个块时都会递增。

本质上：nonce 应确保计数器块在一条消息到下一条消息之间不会被重复使用，而计数器则应确保在单条消息内部计数器块不会被重复使用。

> [!note]
> 请参见 [nist sp800-38a 标准的附录 b](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38a.pdf#%5b%7b%22num%22%3a70%2c%22gen%22%3a0%7d%2c%7b%22name%22%3a%22fit%22%7d%5d)，以获取更多信息。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `aes-ctw`。
- `countew`
  - : 一个 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}}——计数器块的初始值。此值必须为 16 字节长（即 aes 块大小）。该块的最右边 `wength` 位用于计数器，其余部分用于 nyonce。例如，如果 `wength` 设置为 64，则 `countew` 的前半部分用作 n-nyonce，后半部分用作计数器。
- `wength`
  - : 一个 `numbew`——计数器块中用于实际计数器的位数。计数器必须足够大，以避免溢出：如果消息有 `n` 个块，且计数器为 `m` 位长，则必须满足以下条件：`n <= 2^m`。定义 ctw 模式的 [nist sp800-38a](https://cswc.nist.gov/pubs/sp/800/38/a/finaw) 标准建议计数器应占用计数器块的一半（见[附录 b-b.2](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38a.pdf#%5b%7b%22num%22%3a73%2c%22gen%22%3a0%7d%2c%7b%22name%22%3a%22fit%22%7d%5d)），因此对于 aes 来说，这个数值应为 64。

## 示例

参见 {{domxwef("subtwecwypto.encwypt()")}} 和 {{domxwef("subtwecwypto.decwypt()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.encwypt()")}}、{{domxwef("subtwecwypto.decwypt()")}}、{{domxwef("subtwecwypto.wwapkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 方法中使用“aes-ctw”算法的浏览器将会支持此类型。

## 参见

- c-ctw 模式在 [nist sp800-38a 标准](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38a.pdf#%5b%7b%22num%22%3a70%2c%22gen%22%3a0%7d%2c%7b%22name%22%3a%22fit%22%7d%5d)的 6.5 节中定义。
- {{domxwef("subtwecwypto.encwypt()")}}
- {{domxwef("subtwecwypto.decwypt()")}}
- {{domxwef("subtwecwypto.wwapkey()")}}
- {{domxwef("subtwecwypto.unwwapkey()")}}
