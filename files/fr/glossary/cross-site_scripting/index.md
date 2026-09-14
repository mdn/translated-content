---
title: Cross-site scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une attaque de **cross-site scripting** (XSS) est une attaque dans laquelle un·e attaquant·e parvient à faire exécuter du code malveillant par un site cible comme s'il faisait partie du site lui-même. Ce code peut alors faire tout ce que le code du site peut faire. Par exemple, l'attaquant·e pourrait&nbsp;:

- accéder et modifier tout le contenu des pages chargées du site, ainsi que tout contenu dans le stockage local&nbsp;;
- effectuer des requêtes HTTP avec les identifiants de l'utilisateur·ice, lui permettant d'usurper son identité ou d'accéder à des données sensibles.

Toutes les attaques XSS reposent sur deux éléments&nbsp;:

1. Le site accepte une entrée qui pourrait avoir été forgée par un·e attaquant·e&nbsp;;
2. Cette entrée est incluse dans une page sans être assainie&nbsp;: c'est-à-dire sans garantir qu'elle ne sera pas exécutable comme JavaScript.

## Voir aussi

- [Cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS)
- [Cross-site scripting sur OWASP <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/xss/)
