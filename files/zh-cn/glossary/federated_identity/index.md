---
title: 联合身份
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**联合身份**系统是一个{{glossary("identity provider", "身份提供商")}}（IdP）在用户和{{glossary("relying party", "依赖方")}}之间充当中介的系统，让用户可以使用一组{{glossary("credential", "凭据")}}与多个不同的依赖方进行身份验证。

传统上，在 Web 中用户将使用用户名和密码登录网站，网站将根据存储在后端的（经过适当{{glossary("hash", "哈希")}}和{{glossary("salt", "加盐")}}处理的）副本来验证密码。

在这种模型中，如果用户在不同的网站上有多个帐户，他们必须记住许多密码。这会促进不良的密码实践，比如为多个帐户使用相同的密码。

在联合身份系统中，身份提供商：

- 管理用户的凭据并可以对用户进行身份验证
- 受到多个网站的信任，可以对用户的身份进行断言。

用户可以使用身份提供商进行身份验证，如果验证成功，身份提供商将向用户的浏览器返回一个令牌。用户的浏览器将令牌发送给网站，网站可以验证它是否由 IdP 发行。如果验证成功，网站就可以同意用户的登录操作。

联合身份通常由公司以服务的形式提供：例如，拥有 Google、Microsoft 或 Facebook 帐户的用户可以使用这些帐户登录许多网站。网站通常必须实现一个特定于身份提供商的令牌验证过程。然而，开放标准，如 [OpenID](https://zh.wikipedia.org/wiki/OpenID)、[OAuth](https://zh.wikipedia.org/wiki/开放授权) 和 [SAML](https://zh.wikipedia.org/wiki/安全断言标记语言) 在联合身份系统的实现中被广泛使用。

尽管联合身份使用户登录多个不同帐户变得更加容易，同时也可以极大地提高安全性，但它可能对用户的隐私产生严重影响。如果设计不当，联合身份系统可能允许身份提供商跟踪用户在网上的活动：用户会登录多个不同的站点。Web 上早期的联合身份系统是建立在诸如第三方 cookie 之类的技术上的，这些技术本质上侵犯了隐私。随着这些技术被浏览器弃用，需要新的方法。[联合凭证管理（FedCM）API](/zh-CN/docs/Web/API/FedCM_API) 提供了一个标准化的保护隐私的机制，用于实现 Web 上的联合身份。

## 参见

- 相关术语：
  - {{glossary("Relying party", "依赖方")}}
  - {{glossary("Identity provider", "身份提供商")}}
- [联合凭证管理（FedCM）API](/zh-CN/docs/Web/API/FedCM_API)
