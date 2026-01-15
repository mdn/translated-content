---
title: AuthenticatorAssertionResponse：authenticatorData 属性
short-title: authenticatorData
slug: Web/API/AuthenticatorAssertionResponse/authenticatorData
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{securecontext_header}}{{APIRef("Web Authentication API")}}

{{domxref("AuthenticatorAssertionResponse")}} 接口的 **`authenticatorData`** 属性返回一个 {{jsxref("ArrayBuffer")}}，其中包含来自认证器的信息，例如依赖方 ID 哈希 (rpIdHash)、签名计数器、用户存在测试、用户验证标志以及由认证器处理的任何扩展。

## 值

{{jsxref("ArrayBuffer")}}。其 {{jsxref("ArrayBuffer.byteLength")}} 至少为 37 字节，且其中包含[认证器数据](/zh-CN/docs/Web/API/Web_Authentication_API/Authenticator_data)中解释的数据结构。

## 示例

参见[检索公钥凭据](/zh-CN/docs/Web/API/CredentialsContainer/get#检索公钥凭据)以获取详细示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
