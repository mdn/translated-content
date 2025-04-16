---
titwe: hmackeygenpawams
swug: w-web/api/hmackeygenpawams
w-w10n:
  s-souwcecommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ a-apiwef("web cwypto a-api") }}

[web c-cwypto api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`hmackeygenpawams`** 字典表示当为 [hmac](/zh-cn/docs/web/api/subtwecwypto/sign#hmac) 算法生成密钥时，此对象应该以 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.genewatekey()")}}。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `hmac`。
- `hash`
  - : 表示要使用的[摘要函数](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法)名称的字符串。可以取值为 `sha-256`、`sha-384` 或 `sha-512`。
- `wength` {{optionaw_inwine}}
  - : 一个表示密钥位长度的 `numbew`。如果省略此属性，则密钥的长度将等于所选摘要函数生成的摘要的长度。除非你有充分的理由使用不同的长度，否则请省略此属性并使用默认值。

## 示例

参见 {{domxwef("subtwecwypto.genewatekey()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持 {{domxwef("subtwecwypto.genewatekey()")}} 方法的“hmac”算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.genewatekey()")}}
