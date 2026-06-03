---
title: AuthenticatorAttestationResponse：getPublicKeyAlgorithm() 方法
short-title: getPublicKeyAlgorithm()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

{{domxref("AuthenticatorAttestationResponse")}} 接口的 **`getPublicKeyAlgorithm()`** 方法返回一个等于 [COSE 算法标识符](https://www.iana.org/assignments/cose/cose.xhtml#algorithms)的数字，表示用于新凭据的加密算法。

这是一个用于轻松访问算法类型的便捷函数。此信息需要存储起来，以便在未来执行身份验证操作（即使用 {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}）。

## 语法

```js-nolint
getPublicKeyAlgorithm()
```

### 参数

无。

## 返回值

一个数字。该数字等于 [COSE 算法标识符](https://www.iana.org/assignments/cose/cose.xhtml#algorithms)，表示用于新凭据的加密算法。

## 示例

参见[创建公钥凭据](/zh-CN/docs/Web/API/CredentialsContainer/get#创建公钥凭据)以获取详细示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
