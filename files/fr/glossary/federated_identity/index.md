---
title: Identité fédérée
slug: Glossary/Federated_identity
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un système d'**identité fédérée** est un système dans lequel un·e {{Glossary("identity provider", "fournisseur d'identité (IdP)")}} agit comme intermédiaire entre les utilisateur·ice·s et les {{Glossary("relying party", "parties de confiance")}}, permettant à un·e utilisateur·ice d'utiliser un seul ensemble de {{Glossary("credential", "identifiants")}} pour s'authentifier auprès de plusieurs parties de confiance différentes.

Traditionnellement, sur le web, un·e utilisateur·ice se connecte à un site web avec un nom d'utilisateur·ice et un mot de passe, et le mot de passe est vérifié par le site web à l'aide d'une copie (correctement {{Glossary("hash function", "hachée")}} et {{Glossary("salt", "salée")}}) stockée sur le serveur du site web.

Dans ce modèle, si les utilisateur·ice·s ont plusieurs comptes sur différents sites web, ils·elles doivent retenir de nombreux mots de passe, ce qui encourage de mauvaises pratiques comme l'utilisation du même mot de passe pour plusieurs comptes.

Dans un système d'identité fédérée, un fournisseur d'identité&nbsp;:

- gère les identifiants d'un·e utilisateur·ice et peut authentifier les utilisateur·ice·s
- est approuvé par plusieurs sites web pour faire des déclarations sur l'identité d'un·e utilisateur·ice.

Un·e utilisateur·ice peut alors s'authentifier auprès du fournisseur d'identité, qui renverra un jeton au navigateur de l'utilisateur·ice si l'authentification réussit. Le navigateur de l'utilisateur·ice enverra le jeton au site web, qui pourra vérifier qu'il a été émis par l'IdP. Si la vérification réussit, le site web pourra connecter l'utilisateur·ice.

L'identité fédérée est souvent proposée comme service par des entreprises&nbsp;: par exemple, les utilisateur·ice·s qui possèdent un compte Google, Microsoft ou Facebook peuvent les utiliser pour se connecter à de nombreux sites web. Les sites web doivent généralement mettre en œuvre un processus de vérification des jetons spécifique à chaque fournisseur d'identité. Cependant, des standards ouverts comme [OpenID](https://fr.wikipedia.org/wiki/OpenID), [OAuth](https://fr.wikipedia.org/wiki/OAuth) et [SAML](https://fr.wikipedia.org/wiki/Security_Assertion_Markup_Language) sont largement utilisés dans la mise en œuvre des systèmes d'identité fédérée.

Bien que l'identité fédérée facilite grandement la connexion à de multiples comptes pour les utilisateur·ice·s et puisse considérablement améliorer la sécurité, elle peut avoir de sérieuses implications pour la vie privée. Si elle n'est pas soigneusement conçue, un système d'identité fédérée peut permettre aux fournisseurs d'identité de suivre les utilisateur·ice·s sur le web lorsqu'ils·elles se connectent à différents sites. Les premiers systèmes d'identité fédérée sur le web étaient basés sur des technologies comme les cookies tiers, qui sont intrinsèquement intrusives pour la vie privée. Comme ces technologies sont en cours d'abandon par les navigateurs, de nouvelles approches sont nécessaires. L'[API Federated Credential Management (FedCM)](/fr/docs/Web/API/FedCM_API) fournit un mécanisme standardisé et respectueux de la vie privée pour l'identité fédérée sur le web.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Relying party", "Partie de confiance")}}
  - {{Glossary("Identity provider", "Fournisseur d'identité")}}
- [L'API Federated Credential Management (FedCM)](/fr/docs/Web/API/FedCM_API)
