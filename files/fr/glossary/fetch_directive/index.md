---
title: Directive de récupération
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les **directives de récupération {{Glossary("CSP")}}** sont utilisées dans un en-tête de {{HTTPHeader("Content-Security-Policy", "politique de sécurité de contenu")}} et contrôlent les emplacements à partir desquels certaines ressources peuvent être chargées. Par exemple, {{CSP("script-src")}} permet aux développeur·euse·s d'autoriser l'exécution de sources de script sur une page, tandis que {{CSP("font-src")}} contrôle les sources des polices de caractères web.

Toutes les directives de récupération reviennent à {{CSP("default-src")}}. Cela signifie que si une instruction fetch est absente dans l'en-tête CSP, l'agent utilisateur·ice recherchera la directive default-src.

Voir la [liste complète des directives de récupération](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives).

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("CSP")}}
  - {{Glossary("Document directive", "Directive de document")}}
  - {{Glossary("Navigation directive", "Directive de navigation")}}
  - {{Glossary("Reporting directive", "Directive de rapport")}}
- Références&nbsp;:
  - [Spécification Fetch directives <sup>(angl.)</sup>](https://w3c.github.io/webappsec-csp/#directives-fetch)
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
