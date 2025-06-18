---
title: Credential Management API
slug: Web/API/Credential_Management_API
---

{{APIRef("Credential Management API")}}{{ SeeCompatTable() }}

Credential Management API 允许网站存储和检索用户，联合账户和公钥证书。这些功能允许用户在不输入密码的情况下登录，查看他们曾经登录到一个站点的联合帐户，并且在会话过期且没有显式的登录流程的情况下恢复会话。

## Credential management 概念和用法

此 API 允许网站与用户代理的密码系统进行交互，以便网站能够以统一的方式处理站点凭证，而用户代理则可以为他们的凭证管理提供更好的帮助。例如，用户代理在处理联合身份提供商或使用不仅仅是用户名和密码的深奥登录机制时特别困难。为了解决这些问题，Credential Management API 为网站提供了存储和检索不同类型凭据的方法。这为用户提供了一些功能，比如查看他们曾经登录到某个站点的联合帐户，或者在会话过期且没有显式的登录流程的情况下恢复会话。

> [!NOTE]
> 此 API 仅限于顶级上下文。在\<iframe>元素中调用 get() 和 store() 将无效。

### 子域共享凭据（Subdomain-shared credentials）

规范的更高版本允许从不同的子域检索凭证。例如，存储在 login.example.com 中的密码可用于登录 www\.example.com。要利用这一点，必须通过调用{{domxref("CredentialsContainer.store()")}}显式存储密码。这有时被称为公共后缀列表（PSL）匹配;但是规范仅建议使用 PSL 来确定凭证的有效范围。它 (子域共享凭据) 不需要它。因此浏览器的实现可能会有所不同。

## 接口

- {{domxref("Credential")}}
  - : 提供有关实体的信息，作为信任决策的先决条件。
- {{domxref("CredentialsContainer")}}
  - : 公开请求凭据的方法，并在发生令人关注的事件（如成功登录或注销）时通知用户代理。可以从`Navigator.credentials`访问此接口。
- {{domxref("FederatedCredential")}}
  - : 提供关于联合身份提供商的凭据的信息，联合身份提供商是网站信任的实体，可以正确地对用户进行身份验证，并为此提供 API。[OpenID Connect](https://openid.net/developers/specs/) 就是这种框架的一个例子。
- {{domxref("PasswordCredential")}}
  - : 提供有关用户名/密码对的信息。
- {{domxref("PublicKeyCredential")}}
  - : 提供使用不可窃取和数据破坏的非对称密钥对 (而不是密码登录) 的凭据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
