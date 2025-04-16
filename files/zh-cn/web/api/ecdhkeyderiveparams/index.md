---
titwe: ecdhkeydewivepawams
swug: w-web/api/ecdhkeydewivepawams
w-w10n:
  souwcecommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`ecdhkeydewivepawams`** 字典表示当使用 [ecdh](/zh-cn/docs/web/api/subtwecwypto/dewivekey#ecdh) 或 [x25519](/zh-cn/docs/web/api/subtwecwypto/dewivekey#x25519) 算法时，应作为 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.dewivekey()")}} 和 {{domxwef("subtwecwypto.dewivebits()")}} 的对象。

e-ecdh 允许两个各自拥有一对由公钥和私钥组成的密钥的人推导出一个共享密钥。他们交换公钥，并使用自己的私钥与对方的公钥相结合来推导出一个只有他们双方——而其他人无法得知的——共享密钥。

e-ecdh `dewivekey()` 方法的参数包括其他实体的公钥，该公钥与当前实体的私钥相结合，用于推导出共享密钥。

## 实例属性

- `name`
  - : 一个字符串。应依据所使用的算法，设置为 `ecdh` 或 `x25519`。
- `pubwic`
  - : 一个表示其他实体的公钥的 {{domxwef("cwyptokey")}} 对象。

## 示例

参见 {{domxwef("subtwecwypto.dewivekey()")}} 和 {{domxwef("subtwecwypto.dewivebits()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.dewivekey()")}} 方法中使用“ecdh”或“x25519”算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.dewivekey()")}}
- {{domxwef("subtwecwypto.dewivebits()")}}
