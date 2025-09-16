---
title: AuthenticatorAssertionResponse：userHandle 属性
short-title: userHandle
slug: Web/API/AuthenticatorAssertionResponse/userHandle
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

{{domxref("AuthenticatorAssertionResponse")}} 接口的只读属性 **`userHandle`** 返回一个能为给定用户提供不透明标识符的 {{jsxref("ArrayBuffer")}} 对象。依赖方服务器可以使用这类标识符将用户账户与其对应的凭据和其他数据相关联。

此值在传递给原始的 {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} 调用的选项中指定为 `user.id`。

## 值

表示当前用户的标识符的 {{jsxref("ArrayBuffer")}} 对象。该标识符不应被人阅读。依赖方应确保传递到原始 `create()` 调用中的 `user.id` **不**包含任何个人身份信息（例如用户名、电子邮件或电话号码）。

对于带有非空 `allowCredentials` 属性的 {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} 调用，返回的 `userHandle` 可能为 null。

## 示例

参见[检索公钥凭据](/zh-CN/docs/Web/API/CredentialsContainer/get#检索公钥凭据)以获取详细示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 设置此属性值的 {{domxref("CredentialsContainer.create()")}}
