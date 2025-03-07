---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---

{{JSRef}}

La propriéte **`Number.POSITIVE_INFINITY`** représente l'infini (positif).

{{InteractiveExample("JavaScript Demo: Number.POSITIVE_INFINITY")}}

```js interactive-example
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return "Process number as Infinity";
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// Expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// Expected output: "Process number as Infinity"
```

{{js_property_attributes(0,0,0)}}

## Description

La valeur de `Number.POSITIVE_INFINITY` est identique à la valeur de la propriété de l'objet global {{jsxref("Infinity")}}.

Cette valeur possède un comportement légèrement différent de l'infini au sens mathématique :

- Tout valeur positive, y compris `POSITIVE_INFINITY,` multipliée par `POSITIVE_INFINITY` sera égale à `POSITIVE_INFINITY`.
- Toute valeur négative, y compris {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multipliée par `POSITIVE_INFINITY` sera égale à `NEGATIVE_INFINITY`.
- Zéro multiplié par `POSITIVE_INFINITY` sera égal à {{jsxref("NaN")}}.
- NaN multiplié par `POSITIVE_INFINITY` sera égal à NaN.
- `POSITIVE_INFINITY`, divisé par n'importe quelle valeur négative, à l'exception de `NEGATIVE_INFINITY`, sera égal à `NEGATIVE_INFINITY`.
- `POSITIVE_INFINITY`, divisé par n'importe quelle valeur positive, à l'exception de `POSITIVE_INFINITY`, sera égal à `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, divisé par `NEGATIVE_INFINITY` ou `POSITIVE_INFINITY`, sera égal NaN.
- Tout nombre positif divisé par `POSITIVE_INFINITY` sera égal au zéro positif.
- Tout nombre négatif divisé par `POSITIVE_INFINITY` sera égal au zéro négatif.

Il est possible d'utiliser la propriété `Number.POSITIVE_INFINITY` pour faire un test d'erreur sur une valeur qu'on attendait finie. Cependant, la méthode {{jsxref("isFinite")}} sera plus appropriée dans ce cas.

`Number.POSITIVE_INFINITY` est une propriété statique de {{jsxref("Number")}} et il n'est donc pas nécessaire de créer un objet {{jsxref("Number")}} afin d'utiliser cette propriété.

## Exemple

### Utiliser `POSITIVE_INFINITY`

Dans l'exemple qui suit, on affecte une valeur plus grande que la valeur maximale à la variable `grosNombre`. Lors de l'exécution de l'instruction `if`, `grosNombre` aura la valeur `Infinity`, pour continuer, on met à jour `grosNombre` avec une valeur plus acceptable.

```js
var grosNombre = Number.MAX_VALUE * 2;
if (grosNombre == Number.POSITIVE_INFINITY) {
  grosNombre = renvoyerUnNombreFini();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite")}}
