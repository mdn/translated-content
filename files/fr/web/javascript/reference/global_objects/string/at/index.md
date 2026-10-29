---
title: "String : méthode at()"
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`at()`** de valeurs {{JSxRef("String")}} prend un entier en argument et retourne une nouvelle {{JSxRef("String")}} contenant le codet UTF-16 présent dans la chaîne de caractères courante à l'emplacement indiqué. Cette méthode permet d'utiliser des arguments positifs ou négatifs. Lorsque le paramètre passé est un entier négatif, la recherche s'effectue depuis la fin de la chaîne de caractères.

{{InteractiveExample("Démonstration Javascript&nbsp;: String.prototype.at()")}}

```js interactive-example
const sentence = "Le rapide renard brun saute par-dessus le chien paresseux.";

let index = 5;

console.log(
  `Un indice de ${index} retourne le caractère ${sentence.at(index)}`,
);
// Résultat attendu : "Un indice de 5 retourne le caractère p"

index = -4;

console.log(
  `Un indice de ${index} retourne le caractère ${sentence.at(index)}`,
);
// Résultat attendu : "Un indice de -4 retourne le caractère e"
```

## Syntaxe

```js-nolint
at(index)
```

### Paramètres

- `indice`
  - : L'indice (c'est-à-dire la position) du caractère de la chaîne de caractères qu'on souhaite récupérer. Les indices relatifs sont pris en charge et on peut ainsi utiliser un indice négatif. Dans ce cas, c'est le caractère situé à la position comptée depuis la fin de la chaîne de caractères qui est retourné.

### Valeur de retour

Une chaîne de caractères ({{JSxRef("String")}}) consistant en l'unique unité de code UTF-16 située à la position définie. Retourne {{JSxRef("undefined")}} si l'indice donné ne peut être trouvé.

## Exemples

### Retourner le dernier caractère d'une chaîne de caractères

Dans l'exemple qui suit, on fournit une fonction qui retourne le dernier caractère trouvé dans une chaîne de caractères.

```js
// Une fonction qui retourne le dernier caractère d'une chaîne de caractères
function dernierCar(str) {
  return str.at(-1);
}

let refFacture = "ma-facture01";

console.log(dernierCar(refFacture)); // '1'

refFacture = "ma-facture02";

console.log(dernierCar(refFacture)); // '2'
```

### Comparaison de méthodes

Ici nous comparons différentes manières de sélectionner l'avant-dernier caractère d'une chaîne de caractères ({{JSxRef("String")}}). Bien que toutes les méthodes ci-dessous soient valides, cela met en évidence la concision et la lisibilité de la méthode `at()`.

```js
const maChaine = "Vers l'infini et au-delà !";

// En utilisant la propriété length et la méthode charAt()
const avecLength = maChaine.charAt(maChaine.length - 2);
console.log(avecLength); // 'à'

// En utilisant la méthode slice()
const avecSlice = maChaine.slice(-2, -1);
console.log(avecSlice); // 'à'

// En utilisant la méthode at()
const avecAt = maChaine.at(-2);
console.log(avecAt); // 'à'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.at` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.at` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.at)
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("String.prototype.charCodeAt()")}}
- La méthode {{JSxRef("String.prototype.codePointAt()")}}
- La méthode {{JSxRef("String.prototype.split()")}}
