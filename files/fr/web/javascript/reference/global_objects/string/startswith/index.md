---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
tags:
  - ECMAScript6
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/startsWith
original_slug: Web/JavaScript/Reference/Objets_globaux/String/startsWith
---
{{JSRef}}

La méthode **`startsWith()`** renvoie un booléen indiquant si la chaine de caractères commence par la deuxième chaine de caractères fournie en argument.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Syntaxe

```js
str.startsWith(chaîneRecherchée [, position]);
```

### Paramètres

- `chaîneRecherchée`
  - : Les caractères à rechercher au début de la chaine de caractères.
- `position` {{optional_inline}}
  - : La position à laquelle commencer la recherche de `chaîneRecherchée` ; par défaut 0.

### Valeur de retour

`true` si la chaîne de caractères commence avec la sous-chaîne en argument, `false` sinon

## Description

Cette méthode permet de savoir si une chaine de caractères commence avec une autre chaine de caractères (comme pour les autres méthodes fonctionnant avec les chaînes de caractères, cette méthode est sensible à la casse).

## Exemples

```js
var str = "Être, ou ne pas être : telle est la question.";

console.log(str.startsWith("Être"));         // true
console.log(str.startsWith("pas être"));     // false
console.log(str.startsWith("pas être", 12)); // true
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.startsWith")}}

## Voir aussi

- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- [Prothèse (_polyfill_) de Mathias Bynens](https://github.com/mathiasbynens/String.prototype.startsWith)
