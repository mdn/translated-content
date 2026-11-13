---
title: CredentialsContainer
slug: Web/API/CredentialsContainer
l10n:
  sourceCommit: c91c87d7da181194f3786abfcb2f27d2b885fb91
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

[凭证管理 API](/zh-CN/docs/Web/API/Credential_Management_API) 的 **`CredentialsContainer`** 接口提供了一系列方法，用于请求凭证并在登录成功或注销等事件发生时通知用户代理。该接口可通过 {{domxref('Navigator.credentials')}} 访问。

## 实例属性

无。

## 实例方法

- {{domxref("CredentialsContainer.create()")}}
  - : 返回一个 {{jsxref("Promise")}}，根据提供的参数兑现为一个新的 {{domxref("Credential")}} 实例；如果无法创建 `Credential` 对象，则兑现为 `null`。在特殊情况下，该 {{jsxref("Promise")}} 可能会被拒绝。
- {{domxref("CredentialsContainer.get()")}}
  - : 返回一个 {{jsxref("Promise")}}，根据提供的参数解析为匹配的 {{domxref("Credential")}} 实例。
- {{domxref("CredentialsContainer.preventSilentAccess()")}}
  - : 设置一个用于指定是否允许当前源在后续访问时自动登录的标志位，随后返回一个空的 {{jsxref("Promise")}}。例如，当用户从网站注销后调用此方法，可确保其在下次访问时不会自动登录。该方法的早期规范版本曾命名为 `requireUserMediation()`。具体支持情况请参阅[浏览器兼容性](#浏览器兼容性)。
- {{domxref("CredentialsContainer.store()")}}
  - : 将用户的一组凭证存储到指定的 {{domxref("Credential")}} 实例中，并通过 {{jsxref("Promise")}} 返回该实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
