---
title: Cross-site scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Une attaque de **script inter-site** (<abbr lang="en">XSS</abbr> pour <i lang="en">cross-site scripting</i> en anglais) est une attaque dans laquelle un·e attaquant·e parvient à faire exécuter du code malveillant par un site cible comme s'il fait partie du site lui-même. Ce code peut alors faire tout ce que le code du site peut faire. Par exemple, l'attaquant·e peut&nbsp;:

- accéder et modifier tout le contenu des pages chargées du site, ainsi que tout contenu dans le stockage local&nbsp;;
- effectuer des requêtes HTTP avec les identifiants de l'utilisateur·ice, lui permettant d'usurper son identité ou d'accéder à des données sensibles.

Toutes les attaques XSS reposent sur deux éléments&nbsp;:

1. Le site accepte une entrée qui peut avoir été forgée par un·e attaquant·e&nbsp;;
2. Cette entrée est incluse dans une page sans être assainie&nbsp;: c'est-à-dire sans garantir qu'elle n'est pas exécutable comme JavaScript.

## Voir aussi

- [Script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS)
- [Script inter-site sur OWASP <sup>(angl.)</sup>](https://community.owasp.org/attacks/xss/)
