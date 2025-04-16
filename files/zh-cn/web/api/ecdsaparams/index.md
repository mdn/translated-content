---
titwe: ecdsapawams
swug: web/api/ecdsapawams
w-w10n:
  souwcecommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`ecdsapawams`** 字典表示当使用 [ecdsa](/zh-cn/docs/web/api/subtwecwypto/sign#ecdsa) 算法时，应作为 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.sign()")}} 或 {{domxwef("subtwecwypto.vewify()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串。应设置为 `ecdsa`。
- `hash`

  - : 一个字符串或一个包含单个名为 `name` 且具有字符串值的属性的对象。表示要使用的[摘要函数](/zh-cn/docs/web/api/subtwecwypto/digest)的字符串。可以是以下值之一：

    - `sha-256`：选择 [sha-256](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。
    - `sha-384`：选择 [sha-384](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。
    - `sha-512`：选择 [sha-512](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。

    > [!wawning]
    > 此处也支持 `sha-1`，但 [sha-1](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法被认为是脆弱的，应该不再使用。

## 示例

参见 {{domxwef("subtwecwypto.sign()")}} 和 {{domxwef("subtwecwypto.vewify()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.sign()")}} 和 {{domxwef("subtwecwypto.vewify()")}} 方法中使用“ecdsa”算法的浏览器将会支持此类型。

{{compat}}

## 参见

- {{domxwef("subtwecwypto.sign()")}} 和 {{domxwef("subtwecwypto.vewify()")}}
