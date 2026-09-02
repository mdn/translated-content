---
title: "Number : méthode toExponential()"
short-title: toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toExponential()`** de {{JSxRef("Number")}} retourne une chaîne de caractères représentant ce nombre en notation exponentielle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.prototype.toExponential()")}}

```js interactive-example
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Résultat attendu : "1.23e+5"

console.log(expo("123456"));
// Résultat attendu : "1.23456e+5"

console.log(expo("oink"));
// Résultat attendu : "NaN"
```

## Syntaxe

```js-nolint
toExponential()
toExponential(fractionDigits)
```

### Paramètre

- `fractionDigits` {{Optional_Inline}}
  - : Optionnel. Un entier définissant le nombre de chiffres après la virgule.
    Par défaut, autant de chiffres que nécessaire pour représenter le nombre.

### Valeur de retour

Une chaîne de caractères représentant l'objet {{JSxRef("Number")}} donné en notation exponentielle avec un chiffre avant la virgule et arrondi à `fractionDigits` chiffres après la virgule.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `fractionDigits` n'est pas compris entre `0` et `100` (inclus).
- {{JSxRef("TypeError")}}
  - : Levée si cette méthode est invoquée pour un objet qui n'est pas un {{JSxRef("Number")}}.

## Description

Si l'argument `fractionDigits` est omis, le nombre de chiffres après la virgule par défaut est le nombre de chiffres nécessaires pour représenter la valeur de manière unique.

Si vous utilisez la méthode `toExponential()` pour un littéral numérique et que le littéral numérique n'a pas d'exposant et pas de point décimal, laissez des espaces avant le point qui précède l'appel de méthode pour éviter que le point ne soit interprété comme un point décimal.

Si un nombre a plus de chiffres que ceux demandés par le paramètre `fractionDigits`, le nombre est arrondi au nombre le plus proche représenté par `fractionDigits` chiffres. Voir la discussion sur l'arrondi dans la description de la méthode {{JSxRef("Number/toFixed", "toFixed()")}}, qui s'applique également à `toExponential()`.

## Exemples

### Utiliser `toExponential()`

```js
const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.prototype.toExponential` avec de nombreux correctifs de bogues dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.prototype.toExponential` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.prototype.toexponential)
- La méthode {{JSxRef("Number.prototype.toFixed()")}}
- La méthode {{JSxRef("Number.prototype.toPrecision()")}}
- La méthode {{JSxRef("Number.prototype.toString()")}}
