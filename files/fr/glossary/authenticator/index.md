---
title: Authentificateur
slug: Glossary/Authenticator
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **authentificateur** (<i lang="en">authenticator</i> en anglais) est une entité capable d'effectuer les opérations cryptographiques nécessaires à l'enregistrement et à l'authentification des utilisateur·ice·s, et de stocker de manière sécurisée les clés cryptographiques utilisées lors de ces opérations.

Un authentificateur peut être réalisé sous forme matérielle ou logicielle. Il peut être intégré à l'appareil, comme le système [Touch ID](https://fr.wikipedia.org/wiki/Touch_ID) des appareils Apple ou le système [Windows Hello <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Windows_10#System_security), ou bien être un module amovible comme une [YubiKey](https://fr.wikipedia.org/wiki/YubiKey).

L'[API d'authentification web](/fr/docs/Web/API/Web_Authentication_API) met les authentificateurs à disposition des sites web dans le cadre de l'[API de gestion des identifiants](/fr/docs/Web/API/Credential_Management_API). Cela permet aux sites web d'utiliser des authentificateurs pour générer des {{Glossary("credential", "identifiants")}} basés sur la {{Glossary("public-key cryptography", "cryptographie à clé publique")}}, qui peuvent ensuite être utilisés pour connecter des utilisateur·ice·s à des sites web.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Authentication", "Authentification")}}
  - {{Glossary("Credential", "Identifiant")}}
