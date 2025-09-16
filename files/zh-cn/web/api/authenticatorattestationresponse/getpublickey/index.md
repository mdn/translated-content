---
title: AuthenticatorAttestationResponse：getPublicKey() 方法
short-title: getPublicKey()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKey
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

{{domxref("AuthenticatorAttestationResponse")}} 接口的 **`getPublicKey()`** 方法返回一个其中包含新凭据的 DER `SubjectPublicKeyInfo`（参见[主体公钥信息](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)）的 {{jsxref("ArrayBuffer")}}。当不可用时将返回 `null`。

这是一个用于方便地访问公钥的便捷函数。此密钥需要存储起来，以便验证将来的身份验证操作（例如使用 {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}）。

## 语法

```js-nolint
getPublicKey()
```

### 参数

无。

## 返回值

包含新凭据的 DER `SubjectPublicKeyInfo`（参见[主体公钥信息](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)）的 {{jsxref("ArrayBuffer")}}，当不可用时返回 `null`。

## 示例

参见[创建公钥凭据](/zh-CN/docs/Web/API/CredentialsContainer/get#创建公钥凭据)以获取详细示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
