---
title: 认证器
slug: Glossary/Authenticator
l10n:
  sourceCommit: a8ff915bf53e883e9db24056784951d9ab1ae013
---

{{GlossarySidebar}}

**认证器**是可以执行注册和认证用户所需的密码学操作，并安全地存储这些操作中使用的密码学密钥的实体。

认证器可能以硬件或软件的形式实现。它可能被整合到设备上，比如 Apple 设备上的[触控 ID](https://zh.wikipedia.org/wiki/触控_ID) 系统，或 [Windows Hello](https://zh.wikipedia.org/wiki/Windows_10#主要新特性) 系统或者可能是一个可插拔的模块（如 [Yubikey](https://zh.wikipedia.org/wiki/YubiKey)）。

[Web 认证 API](/zh-CN/docs/Web/API/Web_Authentication_API) 让认证器作为[凭证管理 API](/zh-CN/docs/Web/API/Credential_Management_API) 的一部分对网站可用。这使得网站可以使用认证器基于{{glossary("public-key cryptography", "非对称密钥密码")}}生成{{glossary("credential", "凭证")}}，用于将用户登录到网站中。

## 参见

- 相关术语：
  - {{glossary("Authentication", "认证")}}
  - {{glossary("Credential", "凭证")}}
