---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
tags:
  - JavaScript
  - Méthode
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/padStart
original_slug: Web/JavaScript/Reference/Objets_globaux/String/padStart
---
{{JSRef}}

La méthode **`padStart()`** permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. Pour atteindre cette longueur, la chaîne complémentaire peut être répétée. La chaîne courante est complétée depuis le début.

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## Syntaxe

```js
str.padStart(longueurCible [, chaîneComplémentaire])
```

### Paramètres

- `longueurCible`
  - : La longueur de la chaîne qu'on souhaite obtenir. Si la longueur indiquée est inférieure à celle de la chaîne courante, cette dernière est renvoyée telle quelle.
- `chaîneComplémentaire` {{optional_inline}}
  - : La chaîne de caractères avec laquelle on veut compléter la chaîne courante. Si cette chaîne est trop longue, on prendra uniquement le début (la partie la plus à gauche quand la langue s'écrit de gauche à droite). La valeur par défaut de ce paramètre est l'espace " " (U+0020). Si cette chaîne est trop courte, elle sera répétée.

### Valeur de retour

Une chaîne de caractères ({{jsxref("String")}}) dont la longueur est celle indiquée, complétée avec la chaîne fournie au début de la chaîne courante.

## Exemples

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "toto"); // "totototabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.padstart', 'String.prototype.padStart')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES8', '#sec-string.prototype.padstart', 'String.prototype.padStart')}}         | {{Spec2('ES8')}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.padStart")}}

## Voir aussi

- {{jsxref("String.prototype.padEnd()")}}
