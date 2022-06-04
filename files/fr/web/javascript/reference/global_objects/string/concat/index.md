---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/concat
original_slug: Web/JavaScript/Reference/Objets_globaux/String/concat
---
{{JSRef}}

La méthode **`concat()`** combine le texte de plusieurs chaînes avec la chaîne appelante et renvoie la nouvelle chaîne ainsi formée.

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## Syntaxe

```js
str.concat(string2[, string3, ..., stringN])
```

### Paramètres

- `string2...stringN`
  - : Chaînes de caractères à concaténer ensemble.

### Valeur de retour

Une nouvelle chaîne de caractères qui contient la concaténation des chaînes de caractères fournies.

## Description

La fonction `concat()` renvoie une nouvelle chaîne correspondant à la concaténation des différents arguments avec la chaîne courante. La chaîne courante est celle sur laquelle a été appelée la méthode `concat()`. Si les valeurs passées en arguments ne sont pas des chaînes de caractères, elles sont automatiquement converties en chaînes (grâce à leur méthode `toString()` avant la concaténation).

## Exemples

L'exemple suivant combine plusieurs chaînes afin d'en former une nouvelle.

```js
var coucou = "Bonjour ";
console.log(coucou.concat("Tristan,", " bonne journée."));

/* Bonjour Tristan, bonne journée. */

var salutation = ['Bonjour', ' ', 'Alfred', ' ', '!'];
"".concat(...salutation); // "Bonjour Alfred !"

"".concat({});   // [object Object]
"".concat([]);   // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## Performance

Il est fortement recommandé d'utiliser les {{jsxref("Opérateurs/Opérateurs_d_affectation", "opérateurs d'affectation", "", 1)}} (+, +=) plutôt que la méthode `concat()` pour des raisons de performance.

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.6', 'String.prototype.concat')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.concat', 'String.prototype.concat')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.concat', 'String.prototype.concat')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.concat")}}

## Voir aussi

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Opérateurs/Opérateurs_d_affectation", "Les opérateurs d'affectation", "", 1)}}
