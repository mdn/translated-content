---
title: AuthenticatorAssertionResponse：signature 属性
short-title: signature
slug: Web/API/AuthenticatorAssertionResponse/signature
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

{{domxref("AuthenticatorAssertionResponse")}} 接口的只读属性 **`signature`** 返回一个 {{jsxref("ArrayBuffer")}} 对象，表示认证器对 {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} 和客户端数据（{{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}}）的 SHA-256 散列值的签名。

此签名将作为响应的一部分发送到服务器进行验证。它能证明认证器确实拥有用于生成凭据的私钥。

## 值

{{jsxref("ArrayBuffer")}} 对象，表示认证器（使用其私钥）对 {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} 数据和由客户端提供的 SHA-256 散列值（挑战、来源等，可通过 {{domxref("AuthenticatorResponse.clientDataJSON","AuthenticatorAssertionResponse.clientDataJSON")}} 获取）的签名。

## 示例

参见[检索公钥凭据](/zh-CN/docs/Web/API/CredentialsContainer/get#检索公钥凭据)以获取详细示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
