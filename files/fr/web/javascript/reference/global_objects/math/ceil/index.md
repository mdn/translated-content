---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
---

{{JSRef}}

La fonction **`Math.ceil()`** retourne le plus petit entier supérieur ou égal au nombre donné.

{{InteractiveExample("JavaScript Demo: Math.ceil()")}}

```js interactive-example
console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7
```

## Syntaxe

```js
Math.ceil(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le plus petit entier qui est supérieur ou égal au nombre donné.

## Description

`ceil()` est une méthode statique de `Math`. Elle doit être utilisée avec la syntaxe `Math.ceil()`, plutôt que comme une méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

> **Note :** `Math.ceil(null)` renverra `0` et pas {{jsxref("NaN")}}.

## Exemples

### Utiliser `Math.ceil()`

Voici un exemple d'utilisation de `Math.ceil()`.

```js
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-0.95); // -0
Math.ceil(-4); // -4
Math.ceil(-7.004); // -7
Math.ceil(null); // 0
```

### Arrondi décimal

```js
// Fermeture
(function () {
  /**
   * Fonction pour arrondir un nombre.
   *
   * @param    {String}  type  Le type d'arrondi.
   * @param    {Number}  value Le nombre à arrondir.
   * @param    {Integer} exp   L'exposant (le logarithme en base 10 de la base pour l'arrondi).
   * @returns  {Number}        La valeur arrondie.
   */
  function decimalAdjust(type, value, exp) {
    // Si l'exposant vaut undefined ou zero...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si value n'est pas un nombre
    // ou si l'exposant n'est pas entier
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Décalage
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Re "calage"
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Arrondi décimal
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Arrondi décimal inférieur
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Arrondi décimal supérieur
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Arrondi décimal
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
// Arrondi décimal inférieur
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Arrondi décimal supérieur
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}{
