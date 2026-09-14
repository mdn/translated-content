---
title: "Number : méthode toPrecision()"
short-title: toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toPrecision()`** de {{JSxRef("Number")}} retourne une chaîne de caractères représentant ce nombre avec le nombre de chiffres significatifs défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.prototype.toPrecision()")}}

```js interactive-example
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// Résultat attendu : "123.5"

console.log(precise(0.004));
// Résultat attendu : "0.004000"

console.log(precise(1.23e5));
// Résultat attendu : "1.230e+5"
```

## Syntaxe

```js-nolint
toPrecision()
toPrecision(precision)
```

### Paramètre

- `precision` {{Optional_Inline}}
  - : Un entier définissant le nombre de chiffres significatifs.

### Valeur de retour

Une chaîne de caractères représentant le nombre donné, en utilisant le nombre de chiffres significatifs défini. La notation scientifique est utilisée si l'exposant est supérieur ou égal à `precision` ou inférieur à -6. A le même comportement que {{JSxRef("Number.prototype.toString()")}} si l'argument `precision` est omis.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `precision` n'est pas comprise entre `1` et `100` (inclus).
- {{JSxRef("TypeError")}}
  - : Levée si cette méthode est invoquée sur un objet qui n'est pas un {{JSxRef("Number")}}.

## Exemples

### Utiliser `toPrecision()`

```js
// Ce nombre a un exposant de 0, il n'utilise donc jamais la notation exponentielle
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

// Ce nombre a un exposant de -4, il n'utilise donc jamais la notation exponentielle
num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// Ce nombre a un exposant de 3, il utilise donc la notation exponentielle si `precision` est inférieure à 4
num = 1234.5;
console.log(num.toPrecision(1)); // '1e+3'
console.log(num.toPrecision(2)); // '1.2e+3'
console.log(num.toPrecision(6)); // '1234.50'

// Ce nombre a un exposant de -7, il utilise donc toujours la notation exponentielle
num = 0.00000012345;
console.log(num.toPrecision(1)); // '1e-7'
console.log(num.toPrecision(10)); // '1.234500000e-7'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Number.prototype.toFixed()")}}
- La méthode {{JSxRef("Number.prototype.toExponential()")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}
