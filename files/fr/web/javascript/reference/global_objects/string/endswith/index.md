---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef}}

La méthode **`endsWith()`** renvoie un booléen indiquant si la chaine de caractères se termine par la chaine de caractères fournie en argument.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Syntaxe

```js
str.endsWith(chaîneRecherchée[, position]);
```

### Paramètres

- `chaîneRecherchée`
  - : Les caractères à rechercher à la fin de la chaine de caractères.
- `position` {{optional_inline}}
  - : Paramètre optionnel. Permet de rechercher dans la chaine de caractères comme si elle faisait cette longueur ; par défaut il s'agit de la longueur de la chaine de caractères `chaîneRecherchée`. Si la valeur fournie est supérieure à la longueur de la chaine de caractères, elle ne sera pas prise en compte.

### Valeur de retour

`true` si la chaîne de caractères se termine par la sous-chaîne indiquée, `false` sinon.

## Description

Cette méthode permet de savoir si une chaine de caractères se termine avec une certaine chaine de caractères (comme les autres méthodes fonctionnant avec des chaînes de caractères, cette méthode est sensible à la casse).

## Exemples

```js
var str = "Être, ou ne pas être : telle est la question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("pas être")); // false
console.log(str.endsWith("pas être", 20)); // true
```

## Prothèse d'émulation (_polyfill_)

Cette méthode a été ajoutée dans la spécification ECMAScript 6 et peut ne pas être disponible dans toutes les implémentations de JavaScript. Cependant, il est possible d'émuler le comportement de `String.prototype.endsWith` avec le fragment de code suivant :

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (
      typeof position !== "number" ||
      !isFinite(position) ||
      Math.floor(position) !== position ||
      position > subjectString.length
    ) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
