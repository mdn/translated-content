---
title: Identificateur
slug: Glossary/Identifier
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **identificateur** est une suite de caractères dans le code qui identifie une {{Glossary("variable")}}, une {{Glossary("function", "fonction")}} ou une {{Glossary("property", "propriété")}}. Dans la plupart des langages, les identificateurs sont sensibles à la casse et ne sont pas entourés de guillemets.

En {{Glossary("JavaScript")}}, les identificateurs peuvent contenir des lettres {{Glossary("Unicode")}}, `$`, `_` et des chiffres (0-9), mais ne peuvent pas commencer par un chiffre. Un identificateur diffère d'une chaîne de caractères&nbsp;: une {{Glossary("string", "chaîne de caractères")}} est une donnée, tandis qu'un identificateur fait partie du code. En JavaScript, il n'existe pas de moyen de convertir un identificateur en chaîne, mais il est parfois possible d'analyser une chaîne pour en faire un identificateur.

En {{Glossary("CSS")}}, il existe deux types de données identificateur&nbsp;: {{CSSxRef("custom-ident")}} et {{CSSxRef("dashed-ident")}}. Le type {{CSSxRef("ident")}} en CSS peut contenir presque n'importe quel caractère, mais les caractères ASCII non lettres/chiffres comme `"`, `\\` et `*` doivent être échappés, il ne doit pas commencer par un chiffre, et les émojis sont valides comme identificateurs sans nécessiter d'échappement.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Scope", "Portée")}}
  - {{Glossary("string", "Chaîne de caractères")}}
  - {{Glossary("Unicode")}}
- [Identificateur](https://fr.wikipedia.org/wiki/Identificateur) sur Wikipédia
