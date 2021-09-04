---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/repeat
original_slug: Web/JavaScript/Reference/Objets_globaux/String/repeat
---
{{JSRef}}

La méthode **`repeat()`** construit et renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée de la chaine de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.

{{EmbedInteractiveExample("pages/js/string-repeat.html")}}

## Syntaxe

    str.repeat(compte)

### Paramètres

- `compte`
  - : Un nombre entier entre 0 and +∞ : \[ 0, +∞\[, indiquant le nombre de fois que la chaine de caractères doit être repétée dans la nouvelle chaine de caractères.

### Valeur de retour

Une nouvelle chaîne de caractères composée du nombre indiqué de copies de la chaîne appelante.

### Exceptions

- {{jsxref("Erreurs/Negative_repetition_count", "RangeError")}} : le nombre de répétition doit être positif.
- {{jsxref("Erreurs/Resulting_string_too_large", "RangeError")}} : le nombre de répétition ne doit pas être infini et la taille de la chaîne résultante ne doit pas dépasser la taille maximale pour une chaîne de caractères.

<!---->

- {{jsxref("RangeError")}}
  - : La compteur doit être positif et inférieur à l'infini.

## Exemples

```js
"abc".repeat(-1)     // RangeError
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" (le compteur est converti en un nombre entier)
"abc".repeat(1/0)    // RangeError

({toString : () => "abc", repeat : String.prototype.repeat}).repeat(2)
// "abcabc" (repeat() est une méthode générique)
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaire          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-string.prototype.repeat', 'String.prototype.repeat')}} | {{Spec2('ES2015')}}     | Première définition. |
| {{SpecName('ESDraft', '#sec-string.prototype.repeat', 'String.prototype.repeat')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.repeat")}}
