---
title: Primitive
slug: Glossary/Primitive
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En {{Glossary("JavaScript")}}, une **valeur primitive** (ou type de donnée primitive) est une donnée qui n'est pas un {{Glossary("object", "objet")}} et qui ne possède ni {{Glossary("method", "méthode")}} ni une {{Glossary("property/javascript", "propriété")}}. Il existe 7 types de données primitives&nbsp;:

- {{Glossary("string", "chaîne de caractères")}}
- {{Glossary("number", "nombre")}}
- {{Glossary("bigint", "bigint")}}
- {{Glossary("boolean", "booléen")}}
- {{Glossary("undefined", "valeur non définie")}}
- [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null", "valeur nulle")}}

La plupart du temps, une valeur primitive est représentée directement au niveau le plus bas de l'implémentation du langage.

Toutes les valeurs primitives sont _immuables_&nbsp;; elles ne peuvent pas être modifiées. Il est important de ne pas confondre une valeur primitive elle-même avec une variable à laquelle une valeur primitive est assignée. La variable peut être réassignée à une nouvelle valeur, mais la valeur existante ne peut pas être modifiée comme le sont les objets, les tableaux ou les fonctions. Le langage ne propose pas d'utilitaires pour modifier les valeurs primitives.

Les valeurs primitives n'ont pas de méthodes mais se comportent comme si elles en avaient. Lorsqu'on accède à des propriétés sur des valeurs primitives, JavaScript _encapsule automatiquement_ la valeur dans un objet enveloppe et accède à la propriété sur cet objet à la place. Par exemple, `"toto".includes("f")` crée implicitement un objet enveloppe [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) et appelle `String.prototype.includes()` sur cet objet. Ce comportement d'encapsulation automatique n'est pas observable dans le code JavaScript mais constitue un bon modèle mental pour comprendre divers comportements — par exemple, pourquoi la «&nbsp;mutation&nbsp;» des primitives ne fonctionne pas (car `str.toto = 1` n'assigne pas la propriété `toto` à `str` lui-même, mais à un objet enveloppe éphémère).

## Voir aussi

- [Types de données JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures)
- [Type de donnée primitive <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Primitive_data_type)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "Chaîne de caractères")}}
  - {{Glossary("number", "Nombre")}}
  - {{Glossary("bigint", "Bigint")}}
  - {{Glossary("boolean", "Booléen")}}
  - {{Glossary("null", "Valeur nulle")}}
  - {{Glossary("undefined", "Valeur non définie")}}
  - [Symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
