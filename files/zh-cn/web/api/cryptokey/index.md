---
title: CryptoKey
slug: Web/API/CryptoKey
---

{{APIRef("Web Crypto API")}}

**`CryptoKey`** 接口表示从特定的密钥算法导出的{{glossary("密钥")}}。

一个 `CryptoKey` 对象可以使用 {{domxref("SubtleCrypto.generateKey()")}}, {{domxref("SubtleCrypto.deriveKey()")}} or {{domxref("SubtleCrypto.importKey()")}} 获得。

## 属性

_这个接口不继承任何属性。_

- {{domxref("CryptoKey.type")}}
  - : 返回一个表示密钥类型的枚举值，一个密钥（对称算法），一个公钥或一个私钥（非对称算法）。
- {{domxref("CryptoKey.extractable")}}
  - : 返回一个{{jsxref("布尔值")}}，表示原始信息是否能导出到应用程序。
- {{domxref("CryptoKey.algorithm")}}
  - : 返回一个不透明对象，表示必须与密钥一同使用的特定密码。
- {{domxref("CryptoKey.usages")}}
  - : 返回一个可枚举的数组，来指出什么密钥可以使用。

## 方法

_这个接口既不继承也不实现任何方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其它相关

- {{domxref("Crypto")}} and {{domxref("Crypto.subtle")}}.
