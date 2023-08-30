---
title: Directive de récupération
slug: Glossary/Fetch_directive
---

Les **directives de récupération {{Glossary("CSP")}}** sont utilisées dans un en-tête de {{HTTPHeader("Content-Security-Policy","politique de sécurité de contenu")}} et contrôlent les emplacements à partir desquels certaines ressources peuvent être chargées. Par exemple, {{CSP("script-src")}} permet aux développeurs d'autoriser l'exécution de sources de script sur une page, tandis que {{CSP("font-src")}} contrôle les sources des polices de caractères web.

Toutes les directives de récupération reviennent à {{CSP("default-src")}}. Cela signifie que si une instruction fetch est absente dans l'en-tête CSP, l'agent utilisateur recherchera la directive default-src.

Ces directives CSP sont :

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("default-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("script-src")}}
- {{CSP("style-src")}}
- {{CSP("worker-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy","Politique de sécurité de contenu")}}
- Autres types de directives:

  - {{Glossary("Document directive","Directives de document")}}
  - {{Glossary("Navigation directive","Directives de navigation")}}
  - {{Glossary("Reporting directive","Directives de rapport")}}
