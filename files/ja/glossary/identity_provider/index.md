---
title: Identity provider (IdP)
slug: Glossary/Identity_provider
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**アイデンティティプロバイダー** (IdP) は、{{glossary("federated identity", "連合アイデンティティ")}}システムにおいて、ユーザーの{{glossary("credential", "資格情報")}}を管理し、ユーザーを{{glossary("authentication", "認証")}}できる主体です。

In federated identity systems, {{glossary("relying party", "relying parties")}}, that need to control access to a resource (for example, a website deciding whether to sign a user in) outsource the act of authenticating users to a third party, which they trust to make authentication decisions. These third parties are called identity providers.

Examples of identity providers on the web include Google, Microsoft, and Facebook. This enables websites to allow users to sign in using the user's Google, Microsoft, or Facebook account.

## See also

- Related glossary terms:
  - {{glossary("Federated identity")}}
  - {{glossary("Relying party")}}
- [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API)
