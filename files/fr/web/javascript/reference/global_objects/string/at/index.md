---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
---

{{JSRef}}

La méthode **`at()`** prend un entier en argument et renvoie une nouvelle chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) contenant le codet UTF-16 présent dans la chaîne courante à l'emplacement indiqué en argument. Cette méthode permet d'utiliser des arguments positifs ou négatifs. Lorsque le paramètre passé est un entier négatif, la recherche s'effectue depuis la fin de la chaîne de caractères.

{{InteractiveExample("JavaScript Demo: String.at()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"
```

## Syntaxe

```js
at(indice);
```

### Paramètres

- `indice`
  - : L'indice (c'est-à-dire la position) du caractère de la chaîne de caractères qu'on souhaite récupérer. Les indices relatifs sont pris en charge et on peut ainsi utiliser un indice négatif. Dans ce cas, c'est le caractère situé à la position comptée depuis la fin de la chaîne qui est renvoyé.

### Valeur de retour

Une chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) contenant un unique codet UTF-16 situé à la position indiquée. Renvoie [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) si l'indice indiqué ne peut être trouvé dans la chaîne de caractères.

## Exemples

### Renvoyer le dernier caractère d'une chaîne de caractères

Dans l'exemple qui suit, on fournit une fonction qui renvoie le dernier caractère trouvé dans une chaîne de caractères.

```js
// Une fonction qui renvoie le dernier caractère d'une chaîne
function dernierCar(str) {
  return str.at(-1);
}

let refFacture = "maFacture01";

console.log(dernierCar(refFacture));
// Affiche '1' dans la console

refFacture = "maFacture02";

console.log(dernierCar(refFacture));
// Affiche '2' dans la console
```

### Comparaison de méthodes

On compare ici différentes méthodes pour sélectionner l'avant-dernier caractère d'une chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)). Bien que toutes les alternatives proposées ici soient valables, on pourra remarquer la concision et la lisibilité de la méthode `at()`.

```js
const maChaine = "Vers l'infini et au-delà !";

// En utilisant la propriété length et la méthode charAt()
const avecLength = maChaine.charAt(maChaine.length - 2);
console.log(avecLength); // Affiche 'à' dans la console

// En utilisant la méthode slice()
const avecSlice = maChaine.slice(-2, -1);
console.log(avecSlice); // Affiche 'à' dans la console

// En utilisant la méthode at()
const avecAt = maChaine.at(-2);
console.log(avecAt); // Affiche 'à' dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`String.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [`String.prototype.lastIndexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
- [`String.prototype.charCodeAt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [`String.prototype.codePointAt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [`String.prototype.split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- Prothèses d'émulation (<i lang="en">polyfills</i>)&nbsp;:
  - [Celle de la proposition TC39](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
  - [Celle de `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
