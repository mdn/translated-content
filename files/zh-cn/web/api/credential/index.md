---
title: Credential
slug: Web/API/Credential
l10n:
  sourceCommit: 952db471d65c30302c44388edf3c0aa094874319
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

[Credential Management API](/zh-CN/docs/Web/API/Credential_Management_API) 的 **`Credential`** 接口提供有关实体（通常是用户）的信息，通常作为信任决策的先决条件。

`Credential` 对象可以是以下这些类型：

- {{domxref("FederatedCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("PasswordCredential")}}
- {{domxref("PublicKeyCredential")}}
- {{domxref("OTPCredential")}}

## 实例属性

- {{domxref("Credential.id")}} {{ReadOnlyInline}}
  - : 返回包含凭据标识符的字符串。这可以是 GUID、用户名或电子邮件地址。
- {{domxref("Credential.type")}} {{ReadOnlyInline}}
  - : 返回包含凭据类型的字符。有效值为 `password`、`federated`、`public-key`、`identity` 和 `otp`。（分别对应 {{domxref("PasswordCredential")}}、{{domxref("FederatedCredential")}}、{{domxref("PublicKeyCredential")}}、{{domxref("IdentityCredential")}} 和 {{domxref("OTPCredential")}}）

## 实例方法

无。

## 示例

```js
const pwdCredential = new PasswordCredential({
  id: "example-username", // 用户名 / ID
  name: "Carina Anand", // 显示名称
  password: "correct horse battery staple", // 密码
});

console.assert(pwdCredential.type === "password");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
