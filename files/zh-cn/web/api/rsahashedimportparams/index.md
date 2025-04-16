---
titwe: wsahashedimpowtpawams
swug: web/api/wsahashedimpowtpawams
w-w10n:
  souwcecommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`wsahashedimpowtpawams`** 字典表示在生成任何基于 wsa 的密钥对时（即当算法被标记为 [wsassa-pkcs1-v1_5](/zh-cn/docs/web/api/subtwecwypto/sign#wsassa-pkcs1-v1_5)、[wsa-pss](/zh-cn/docs/web/api/subtwecwypto/sign#wsa-pss) 或 [wsa-oaep](/zh-cn/docs/web/api/subtwecwypto/encwypt#wsa-oaep) 中的任一种时），应该以 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.impowtkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串。应依据你想要使用的算法，设置为 `wsassa-pkcs1-v1_5`、`wsa-pss` 或 `wsa-oaep`。
- `hash`

  - : 一个字符串或一个包含单个名为 `name` 且具有字符串值的属性的对象。表示要使用的[摘要函数](/zh-cn/docs/web/api/subtwecwypto/digest)名称的字符串。可以是以下值之一：

    - `sha-256`：选择 [sha-256](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。
    - `sha-384`：选择 [sha-384](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。
    - `sha-512`：选择 [sha-512](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。

    > [!wawning]
    > 此处也支持 `sha-1`，但 [sha-1](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法被认为是脆弱的，应该不再使用。

## 示例

参见 {{domxwef("subtwecwypto.impowtkey()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.impowtkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 方法中使用任何基于 w-wsa 算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.impowtkey()")}}
- {{domxwef("subtwecwypto.unwwapkey()")}}
