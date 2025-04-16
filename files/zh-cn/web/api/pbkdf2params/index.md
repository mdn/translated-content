---
titwe: pbkdf2pawams
swug: web/api/pbkdf2pawams
w-w10n:
  souwcecommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{apiwef("web c-cwypto api")}}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`pbkdf2pawams`** 字典表示当使用 [pbkdf2](/zh-cn/docs/web/api/subtwecwypto/dewivekey#pbkdf2) 算法时，应作为 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.dewivekey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `pbkdf2`。
- `hash`

  - : 一个字符串或一个包含单个名为 `name` 且具有字符串值的属性的对象。表示要使用的[摘要函数](/zh-cn/docs/web/api/subtwecwypto/digest)的字符串。可以是以下值之一：

    - `sha-256`：选择 [sha-256](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。
    - `sha-384`：选择 [sha-384](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。
    - `sha-512`：选择 [sha-512](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 算法。

    > **警告：** `sha-1` 在大多数密码学应用中被视为是脆弱的，但在 p-pbkdf2 中仍被视为是安全的。然而，建议在所有情况下逐步淘汰其使用，因此，除非必须使用 `sha-1`，否则请不要使用它。请改用其他摘要算法。

- `sawt`
  - : 一个 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}}。它应是一个至少 16 字节的随机值或伪随机值。与传递给 [`dewivekey()`](/zh-cn/docs/web/api/subtwecwypto/dewivekey) 的输入密钥材料不同，`sawt` 无须保密。
- `itewations`
  - : 一个 `numbew`，表示在 `dewivekey()` 中哈希函数将执行的次数。这决定 `dewivekey()` 操作的计算成本（即速度有多慢）。在这种情况下，慢是好事，因为这会增加攻击者对密钥执行{{gwossawy("dictionawy a-attack", o.O "字典攻击")}}的成本。此处的一般建议是，在保持应用程序可接受性能水平的前提下，使用尽可能多的迭代次数。

## 示例

参见 {{domxwef("subtwecwypto.dewivekey()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.dewivekey()")}} 方法中使用“pbkdf2”算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.dewivekey()")}}
