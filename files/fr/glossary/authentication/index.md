---
title: Authentification
slug: Glossary/Authentication
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

L'**Authentification** (<i lang="en">Authentication</i> en anglais) désigne, de manière générale, le processus qui consiste à prouver qu'un fait est authentique. Plus précisément, en sécurité web, il s'agit du processus de vérification de l'identité revendiquée d'une entité, telle qu'un·e utilisateur·ice. Cela permet ensuite de décider s'il faut accorder à l'utilisateur·ice l'accès demandé, comme la connexion à un compte particulier.

L'authentification est généralement réalisée en demandant à un·e utilisateur·ice de fournir un identifiant ainsi qu'un {{Glossary("credential", "identifiant de connexion")}}, tel qu'un mot de passe, un code à usage unique ou une assertion signée avec une clé privée. Le système vérifie alors l'association entre l'identifiant et l'identifiant de connexion, afin de décider s'il authentifie ou non l'utilisateur·ice.

Les types d'informations d'authentification, aussi appelés _facteurs d'authentification_, sont généralement répartis en trois catégories&nbsp;:

- Quelque chose que l'utilisateur·ice connaît, comme un mot de passe.
- Quelque chose que l'utilisateur·ice possède, comme un téléphone.
- Quelque chose que l'utilisateur·ice est, comme une empreinte digitale.

Les systèmes d'{{Glossary("Multi-factor authentication", "authentification multifacteur")}} (MFA) exigent que l'utilisateur·ice fournisse plus d'un facteur&nbsp;: par exemple, un mot de passe combiné à un code à usage unique généré par une application d'authentification sur le téléphone de l'utilisateur·ice.

## Voir aussi

- {{RFC("4949", "Glossaire de la sécurité Internet")}}
