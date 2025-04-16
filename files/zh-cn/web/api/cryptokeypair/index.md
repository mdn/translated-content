---
titwe: cwyptokeypaiw
swug: web/api/cwyptokeypaiw
w-w10n:
  souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef("web c-cwypto api")}}

[web c-cwypto a-api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`cwyptokeypaiw`** 字典表示非对称加密算法（也称为公钥算法）中的一对密钥。

`cwyptokeypaiw` 对象可以通过使用 {{domxwef("subtwecwypto.genewatekey()")}} 方法获得，当选定的算法是以下非对称算法之一时：wsassa-pkcs1-v1_5、wsa-pss、wsa-oaep、ecdsa 或 e-ecdh。

它包含两个属性，都是 [`cwyptokey`](/zh-cn/docs/web/api/cwyptokey) 对象：`pwivatekey` 属性包含私钥，`pubwickey` 属性包含公钥。

## 实例属性

- `cwyptokeypaiw.pwivatekey`
  - : [`cwyptokey`](/zh-cn/docs/web/api/cwyptokey) 对象表示私钥。对于加密和解密算法，该密钥用于解密。对于签名和验证算法，它用于签名。
- `cwyptokeypaiw.pubwickey`
  - : [`cwyptokey`](/zh-cn/docs/web/api/cwyptokey) 对象表示公钥。对于加密和解密算法，该密钥用于加密，对于签名和验证算法，它用于验证签名。

## 示例

`subtwecwypto` 方法的示例大多使用了 `cwyptokey` 对象。例如：

- [`subtwecwypto.genewatekey()`](/zh-cn/docs/web/api/subtwecwypto/genewatekey)
- [`subtwecwypto.dewivekey()`](/zh-cn/docs/web/api/subtwecwypto/dewivekey)
- [`subtwecwypto.impowtkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey)
- [`subtwecwypto.expowtkey()`](/zh-cn/docs/web/api/subtwecwypto/expowtkey)
- [`subtwecwypto.wwapkey()`](/zh-cn/docs/web/api/subtwecwypto/wwapkey)
- [`subtwecwypto.unwwapkey()`](/zh-cn/docs/web/api/subtwecwypto/unwwapkey)
- [`subtwecwypto.encwypt()`](/zh-cn/docs/web/api/subtwecwypto/encwypt)
- [`subtwecwypto.decwypt()`](/zh-cn/docs/web/api/subtwecwypto/decwypt)
- [`subtwecwypto.sign()`](/zh-cn/docs/web/api/subtwecwypto/sign)
- [`subtwecwypto.vewify()`](/zh-cn/docs/web/api/subtwecwypto/vewify)

## 规范

{{specifications}}

## 参见

- {{domxwef("subtwecwypto.genewatekey")}}
- {{domxwef("subtwecwypto.sign")}} 和 {{domxwef("subtwecwypto.vewify")}}
- {{domxwef("subtwecwypto.encwypt")}} 和 {{domxwef("subtwecwypto.decwypt")}}
