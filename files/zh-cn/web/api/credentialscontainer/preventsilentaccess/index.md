---
title: CredentialsContainer：preventSilentAccess() 方法
short-title: preventSilentAccess()
slug: Web/API/CredentialsContainer/preventSilentAccess
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

{{domxref("CredentialsContainer")}} 接口的 **`preventSilentAccess()`** 方法可设置用于指定是否允许在将来访问当前源时自动登录的标志，并返回一个将兑现为 `undefined` 的 {{jsxref("Promise")}}。例如，你可以在用户从网站注销后调用此方法，以确保他们在下次访问站点时不会自动登录。中介方式因源而异，是浏览器存储凭据的附加检查点，用于告知用户账户的登录状态。该方法通常在用户从网站注销后调用，以确保该用户的登录信息不会在下次访问站点时自动传递。

当使用 {{domxref("PublicKeyCredential")}} 时，此方法通常没有效果；此类认证器通常需要用户交互。但是，某些认证器可能会被排除，否则可能会静默运行。

早期版本的规范将此方法称为 `requireUserMediation()`。[浏览器兼容性](/zh-CN/docs/Web/API/CredentialsContainer#浏览器兼容性)一节包含具体的支持信息。

## 语法

```js-nolint
preventSilentAccess()
```

### 参数

无。

## 返回值

{{jsxref("Promise")}}，会兑现为 `undefined`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
