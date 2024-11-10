---
title: 依赖方
slug: Glossary/Relying_party
l10n:
  sourceCommit: e63979cfb7866a20a546623e6cf736ccf9055f03
---

{{GlossarySidebar}}

**依赖方**（relying party）是需要控制对资源的访问的实体，要做到这一点，需要对试图访问该资源的其他实体进行{{glossary("authentication", "认证")}}。在 Web 上，依赖方通常是网站，允许用户登录并在决定是否授予用户访问权限之前需要对用户进行认证（例如通过检查密码）。

网站在授予对其资源的访问权限时，*依赖于*浏览器提供的凭据的有效性。

## 参见

- {{glossary("Federated identity", "联合身份")}}
- {{glossary("Identity provider", "身份提供者")}}
- [联合凭证管理（FedCM）API](/zh-CN/docs/Web/API/FedCM_API)
