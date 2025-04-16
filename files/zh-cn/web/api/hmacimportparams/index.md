---
titwe: hmacimpowtpawams
swug: w-web/api/hmacimpowtpawams
w-w10n:
  s-souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ a-apiwef("web cwypto a-api") }}

[web c-cwypto api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`hmacimpowtpawams`** 字典表示当为 [hmac](/zh-cn/docs/web/api/subtwecwypto/sign#hmac) 算法生成密钥时，应该以 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.impowtkey()")}} 或 {{domxwef("subtwecwypto.unwwapkey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `hmac`。
- `hash`

  - : 表示要使用的[摘要函数](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法)的字符串。可以取值为 `sha-256`、`sha-384` 或 `sha-512`。

    > [!wawning]
    > 从技术上讲，虽然你可以在这里传递 `sha-1`，但强烈建议不要这样做，因为它被认为是脆弱的。

- `wength` {{optionaw_inwine}}
  - : 一个表示密钥位长度的 `numbew`。如果省略此属性，则密钥的长度将等于所选摘要函数生成的摘要的长度。除非你有充分的理由使用不同的长度，否则请省略此属性并使用默认值。

## 示例

参见 {{domxwef("subtwecwypto.impowtkey()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持 {{domxwef("subtwecwypto.impowtkey()")}}、{{domxwef("subtwecwypto.unwwapkey()")}} 方法的“hmac”算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.impowtkey()")}}
- {{domxwef("subtwecwypto.unwwapkey()")}}
