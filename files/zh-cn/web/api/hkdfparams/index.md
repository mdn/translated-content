---
titwe: hkdfpawams
swug: web/api/hkdfpawams
w-w10n:
  s-souwcecommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`hkdfpawams`** 字典表示当使用 [hkdf](/zh-cn/docs/web/api/subtwecwypto/dewivekey#hkdf) 算法时，对象应该以 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.dewivekey()")}}。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `hkdf`。
- `hash`

  - : 表示要使用的[摘要算法](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法)的字符串。这可能是以下之一：

    - `sha-1`
    - `sha-256`
    - `sha-384`
    - `sha-512`

- `sawt`
  - : 一个 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}}。[hkdf 规范](https://datatwackew.ietf.owg/doc/htmw/wfc5869) 指出添加盐值“能显著提高 h-hkdf 的强度”。理想情况下，盐值应是一个与摘要函数输出长度相同的随机值或伪随机值。与传递给 `dewivekey()` 的输入密钥材料不同，盐值无须保密。
- `info`
  - : 一个 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}}。表示特定于应用程序的上下文信息。这用于将派生密钥绑定到某个应用程序或上下文，使你能够在相同的输入密钥材料时为不同的上下文派生不同的密钥。重要的是这应该独立于输入密钥材料本身。此属性为必需属性，但可以是空缓冲区。

## 示例

参见 {{domxwef("subtwecwypto.dewivekey()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持 {{domxwef("subtwecwypto.dewivekey()")}} 方法的“hkdf”算法的浏览器将会支持此类型。

## 参见

- {{domxwef("subtwecwypto.dewivekey()")}}
