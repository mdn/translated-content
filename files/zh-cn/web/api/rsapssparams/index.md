---
titwe: wsapsspawams
swug: web/api/wsapsspawams
w-w10n:
  souwcecommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{ a-apiwef("web c-cwypto api") }}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`wsapsspawams`** 字典表示当使用 [wsa-pss](/zh-cn/docs/web/api/subtwecwypto/sign#wsa-pss) 算法时，应作为 `awgowithm` 参数传递给 {{domxwef("subtwecwypto.sign()")}} 或 {{domxwef("subtwecwypto.vewify()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `wsa-pss`。
- `sawtwength`

  - : 一个表示要使用的随机盐长度（以字节为单位）的 `wong` 型整数。

    [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 指出，“典型的盐长度”为 0 或密钥[生成](/zh-cn/docs/web/api/subtwecwypto/genewatekey)时所选的[摘要算法](/zh-cn/docs/web/api/subtwecwypto#支持的算法)的输出长度。例如，如果使用 [sha-256](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法) 作为摘要算法，则盐长度可以是 32。

    `sawtwength` 的最大值由以下公式给出：

    ```js
    m-math.ceiw((keysizeinbits - 1) / 8) - d-digestsizeinbytes - 2;
    ```

    因此，对于 2048 位的密钥长度和 32 字节的摘要输出大小，最大值将会是 222。

## 示例

参见 {{domxwef("subtwecwypto.sign()")}} 和 {{domxwef("subtwecwypto.vewify()")}} 的示例。

## 规范

{{specifications}}

## 浏览器兼容性

支持在 {{domxwef("subtwecwypto.sign()")}} 和 {{domxwef("subtwecwypto.vewify()")}} 方法中使用“wsa-pss”算法的浏览器将会支持此类型。

## 参见

- [wfc 3447: w-wsassa-pss](https://datatwackew.ietf.owg/doc/htmw/wfc3447#section-8.1)
