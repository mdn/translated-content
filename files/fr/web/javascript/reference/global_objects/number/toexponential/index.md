---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

{{JSRef}}

La méthode **`toExponential()`** renvoie une chaîne de caractères, représentant l'objet Number en notation exponentielle.

{{InteractiveExample("JavaScript Demo: Number.toExponential()")}}

```js interactive-example
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo("123456"));
// Expected output: "1.23456e+5"

console.log(expo("oink"));
// Expected output: "NaN"
```

## Syntaxe

```js
numObj.toExponential([nbChiffresDécimaux]);
```

### Paramètre

- `nbChiffresDécimaux`
  - : Paramètre optionnel. Un entier donnant le nombre de chiffres qu'on souhaite avoir dans la partie fractionnaire. Le comportement par défaut considèrera autant de chiffres que nécessaire pour représenter le nombre.

### Valeur de retour

Une chaîne représentant l'objet {{jsxref("Number")}} appelant en notation exponentielle avec un chiffre avant la virgule et arrondi à `nbChiffresDécimaux` après la virgule.

### Exceptions

- {{jsxref("RangeError")}}
  - : Cette exception est causée si `nbChiffresDécimaux` est trop petit ou trop grand. Les valeurs comprises, au sens large, entre 0 et 20 ne causeront pas d'exception {{jsxref("RangeError")}}. Les implémentations peuvent également autorisér des valeurs en dehors de ces bornes.
- {{jsxref("TypeError")}}
  - : Si cette méthode est invoquée pour un objet qui n'est pas un objet `Number`.

## Description

La valeur renvoyée est une chaîne de caractères correspondant à la représentation du nombre en notation exponentielle. La partie entière est constituée d'un seul chiffre et la partie fractionnaire est composée de `nbChiffresDécimaux` chiffres. Si l'argument `nbChiffresDécimaux` est absent, il y aura autant de chiffres dans la partie fractionnaire que nécessaire pour représenter le nombre de façon unique.

Si la méthode `toExponential()` est utilisée avec un littéral numérique et que celui-ci ne possède aucun exposant ou séparateur décimal ("."), il faut laisser un ou plusieurs espaces entre le littéral et le point indiquant l'appel de la méthode. Cela permet d'éviter que le point, permettant d'accéder à la méthode, soit confondu avec un séparateur décimal.

Si un nombre possède plus de chiffres décimaux que `nbChiffresDécimaux`, le nombre est arrondi au nombre le plus proche, représenté avec `nbChiffresDécimaux` pour la partie fractionnaire. Voir la discussion sur les arrondis dans la page de la méthode {{jsxref("Number.toFixed", "toFixed()")}} pour plus de détails, la même méthode est utilisée pour `toExponential()`.

## Exemples

### Utiliser `toExponential`

```js
var numObj = 77.1234;

console.log(numObj.toExponential()); // affiche 7.71234e+1
console.log(numObj.toExponential(4)); // affiche 7.7123e+1
console.log(numObj.toExponential(2)); // affiche 7.71e+1
console.log((77.1234).toExponential()); // affiche 7.71234e+1
console.log((77).toExponential()); // affiche 7.7e+1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
