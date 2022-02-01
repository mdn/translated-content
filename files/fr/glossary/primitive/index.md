---
title: Primitive
slug: Glossary/Primitive
tags:
  - Glossaire
  - JavaScript
  - Programmation
translation_of: Glossary/Primitive
original_slug: Glossaire/Primitive
---
Une **primitive** (valeur primitive ou structure de donnée primitive) est une donnée qui n'est pas un {{Glossary("object","objet")}} et n'a pas de {{glossary("method","méthode")}}. En {{Glossary("JavaScript")}}, il y a 6 types de données primitives: {{Glossary("String")}}, {{Glossary("Number")}}, {{Glossary("Boolean")}}, {{Glossary("Null")}}, {{Glossary("undefined")}}, {{Glossary("Symbol")}} (nouveauté d'{{Glossary("ECMAScript")}} 2015).

La plupart du temps, une valeur primitive est représentée directement au plus bas niveau dans l'implémentation du langage.

Toutes les primitives sont **non-mutables** (ne peuvent pas être modifiées).

## Primitives JavaScript encapsulées dans des objets

Excepté dans les cas de `null` ou `undefined`, pour chaque valeur primitive il existe un objet équivalent qui la contient:

- {{jsxref("String")}} pour la primitive `string` ;
- {{jsxref("Number")}} pour la primitive `number` ;
- {{jsxref("Boolean")}} pour la primitive `boolean` ;
- {{jsxref("Symbol")}} pour la primitive `symbol`

La méthode [`valueOf()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/valueOf) de ces objets retourne la valeur primitive encapsulée correspondante.

## Pour approfondir

### Culture générale

- [Introduction aux types de données en JavaScript](/fr/docs/Web/JavaScript/Structures_de_donn%C3%A9es)
- {{Interwiki("wikipedia", "Type (informatique)")}} on Wikipedia
