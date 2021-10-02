---
title: USVString
slug: Web/API/USVString
tags:
  - API
  - DOM
  - Reference
  - String
  - WedIDL
translation_of: Web/API/USVString
---
{{APIRef("DOM")}}

`USVString` correspond à l'ensemble de toutes les séquences possibles de valeurs scalaires unicode. `USVString` correspond à une {{JSxRef("String", "chaîne de caractères")}} lorsqu'elle est renvoyée en JavaScript ; elle n'est généralement utilisée que pour les API qui effectuent un traitement de texte et ont besoin d'une chaîne de valeurs scalaires unicode pour fonctionner. `USVString` est équivalent à {{DOMxRef("DOMString")}} sauf qu'il n'autorise pas les points de code de substitution non appariés. Les points de code de substitution non appariés présents dans `USVString` sont convertis par le navigateur en "caractère de remplacement" Unicode `U+FFFD`, (�).

## Spécifications

| Spécification                                                            | Statut                   | Commentaire          |
| ------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName("WebIDL", "#idl-USVString", "USVString")}} | {{Spec2("WebIDL")}} | Définition initiale. |

## Voir aussi

- {{JSxRef("String")}}
- {{DOMxRef("DOMString")}}
- {{DOMxRef("CSSOMString")}}
- [Chaîne de caractères binaires](/fr/docs/Web/API/DOMString/Binary)
