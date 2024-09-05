---
title: 身份提供商（IdP）
slug: Glossary/Identity_provider
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**身份提供商**（IdP）是{{glossary("federated identity", "联合身份")}}系统中的一个实体，负责管理用户的{{glossary("credential", "凭证")}}并对用户进行{{glossary("authentication", "认证")}}。

在联合身份系统中，需要控制对资源的访问权限（例如，一个网站决定是否登录用户）的{{glossary("relying party", "依赖方")}}将用户的认证行为外包给第三方：它们信任这些第三方做出认证决策。这些第三方就是身份提供商。

Web 中的身份提供商有 Google、Microsoft 和 Facebook 等。这些身份提供商就让其他网站允许用户使用他们的 Google、Microsoft 或 Facebook 帐户登录。

## 参见

- 相关术语：
  - {{glossary("Federated identity", "联合身份")}}
  - {{glossary("Relying party", "依赖方")}}
- [联合凭证管理（FedCM）API](/zh-CN/docs/Web/API/FedCM_API)
