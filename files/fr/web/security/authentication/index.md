---
title: Authentification
slug: Web/Security/Authentication
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

L'authentification est le processus qui consiste à vérifier qu'une entité — tel qu'un·e utilisateur·ice utilisant un site web — est bien celle qu'elle prétend être. Vous devez très probablement vous préoccuper de l'authentification si vous voulez que des utilisateur·ice·s se connectent à votre site web.

Si des utilisateur·ice·s peuvent se connecter à votre site web, il existe généralement des actions qu'ils·elles peuvent effectuer une fois connectées, ou des données auxquelles ils·elles peuvent accéder, que vous ne voulez pas rendre accessibles à tout le monde. Par exemple, les personnes connectées peuvent avoir la possibilité de&nbsp;:

- Utiliser un service pour lequel elles ont payé
- Dépenser de l'argent
- Accéder à des informations privées, personnelles ou d'entreprise
- Interagir socialement avec d'autres personnes sous l'identité associée à leur compte

Toutes ces possibilités, et d'autres encore, font de l'accès aux comptes utilisateur·ice·s une cible importante pour les attaquant·e·s. Si un·e attaquant·e parvient à se connecter à votre site en se faisant passer pour un·e utilisateur·ice légitime, il·elle peut accéder, par exemple, aux données privées de cette personne, à ses identifiants bancaires ou à des secrets d'entreprise confidentiels, et les exploiter. Il·elle peut aussi usurper son identité sur votre site, ce qui risque de nuire à la réputation, voire de causer des dommages financiers.

Dans cette série de guides, nous examinons les principales techniques disponibles pour authentifier les utilisateur·ice·s sur le web ainsi que les bonnes pratiques associées.

## Méthodes d'authentification

Dans cette série de guides, nous décrirons les systèmes d'authentification suivants. Chaque système peut être déployé seul ou combiné à d'autres, soit pour laisser aux personnes le choix du système qu'elles veulent utiliser, soit pour mettre en place un système d'{{glossary("multi-factor authentication", "authentification multifacteur")}}.

- [Mots de passe](/fr/docs/Web/Security/Authentication/Passwords)
  - : Un mot de passe est un secret relativement durable que l'utilisateur·ice présente au site web lorsqu'il·elle doit se connecter. Le site web compare le mot de passe à une version transformée de celui-ci, stockée de manière sécurisée, et connecte l'utilisateur·ice s'ils correspondent. Les mots de passe présentent de nombreuses faiblesses de sécurité bien connues ; dans cet article, nous expliquerons les bonnes pratiques pour les réduire au minimum.
- [Mots de passe à usage unique (OTP)](/fr/docs/Web/Security/Authentication/OTP)
  - : Un mot de passe à usage unique est un code généré, propre à une seule tentative de connexion. Soit le site web envoie le code à l'utilisateur·ice par un canal distinct, comme un e-mail, soit l'appareil de l'utilisateur·ice génère le code de façon autonome. L'utilisateur·ice saisit ensuite le code sur le site pour se connecter.
- [Identité fédérée](/fr/docs/Web/Security/Authentication/Federated_identity)
  - : Dans la plupart des systèmes d'authentification, il y a deux parties : l'utilisateur·ice et le site web auquel il·elle essaie de se connecter. Dans un système fédéré, il existe une troisième partie, appelée _fournisseur d'identité_. Lorsque l'utilisateur·ice veut se connecter au site web, celui-ci demande au fournisseur d'identité d'identifier l'utilisateur·ice et, si l'identification réussit, le·la connecte.
- [Clés d'accès](/fr/docs/Web/Security/Authentication/Passkeys)
  - : Les clés d'accès permettent aux sites web d'authentifier les personnes sans qu'elles aient à saisir de mot de passe ni d'autre code secret sur le site lui-même.

    Dans un système qui utilise des clés d'accès, l'appareil de l'utilisateur·ice stocke une {{glossary("Public-key cryptography", "paire de clés cryptographiques")}} qui représente l'inscription de l'utilisateur·ice sur un site donné. Lorsque l'utilisateur·ice essaie de se connecter au site, celui-ci envoie un défi à l'appareil. L'appareil {{glossary("digital signature", "signe numériquement")}} le défi avec la clé privée et envoie le résultat au site web, qui peut vérifier la signature et connecter l'utilisateur·ice.

    Les clés d'accès sont mises en œuvre à l'aide de l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API).

## Gestion de session

Une fois qu'un site web a authentifié un·e utilisateur·ice, il souhaite généralement que l'utilisateur·ice reste connecté·e sans avoir à s'authentifier à nouveau, soit pendant une durée limitée, soit même indéfiniment, jusqu'à ce qu'il·elle se déconnecte. Pour cela, les sites web définissent généralement un cookie qui contient un identifiant de session secret, ou utilisent un objet {{glossary("digital signature", "signé cryptographiquement")}}, comme un JSON Web Token (JWT).

Dans notre guide sur la [gestion de session](/fr/docs/Web/Security/Authentication/Session_management), nous présentons les bonnes pratiques en matière de gestion de session.
