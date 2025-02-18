---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractère représentant l'objet Number.

{{InteractiveExample("JavaScript Demo: Number.toString()")}}

```js interactive-example
function hexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColour(233));
// Expected output: "e9"

console.log(hexColour("11"));
// Expected output: "b"
```

## Syntaxe

```js
numObj.toString([base]);
```

### Paramètre

- `base`
  - : Paramètre optionnel. Un entier compris entre 2 et 36 qui indique la base du système numérique à utiliser pour représenter la valeur.

### Valeur de retour

Une chaîne de caractères représentant l'objet {{jsxref("Number")}}.

### Exception

- {{jsxref("RangeError")}}
  - : Si `toString()` reçoit une base qui n'est pas comprise entre 2 et 36, une exception `RangeError` est levée.

## Description

L'objet {{jsxref("Number")}} surcharge la méthode `toString()` de {{jsxref("Object")}} et n'hérite donc pas de {{jsxref("Object.prototype.toString()")}}. Pour les objets `Number`, la méthode `toString()` renvoie une représentation du nombre, dans une base donnée, en une chaîne de caractères.

La méthode `toString()` analyse son premier argument et tente de renvoyer une chaîne de caractères représentant le nombre en une base donnée. Pour les bases supérieures à 10, les lettres de l'alphabet sont utilisées pour représenter les numéraux supérieurs à 9. Par exemple, pour les nombres hexadécimaux (en base 16), les lettres `a` à `f` sont utilisées.

Si la base n'est pas spécifiée, on utilisera la base 10 par défaut.

Si l'objet `Number` est négatif, le signe sera conservé. Ceci, même si la base utilisée est la base 2 : la chaîne de caractères rendue sera la représentation binaire du nombre positif précédée par un signe -. La représentation **n'est pas** le complément à deux du nombre.

Si l'objet `Number` n'est pas un nombre entier, le point (.) sera utilisé pour séparer la partie entière et décimale.

## Exemples

### Utiliser `toString`

```js
var compte = 10;

console.log(compte.toString()); // affiche "10"
console.log((17).toString()); // affiche "17"
console.log((17.2).toString()); // affiche "17.2"

var x = 6;

console.log(x.toString(2)); // affiche "110"
console.log((254).toString(16)); // affiche "fe"

console.log((-10).toString(2)); // affiche "-1010"
console.log((-0xff).toString(2)); // affiche "-11111111"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
