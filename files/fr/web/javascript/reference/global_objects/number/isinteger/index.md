---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef}}

La méthode **`Number.isInteger()`** permet de déterminer si l'argument est un nombre entier.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Syntaxe

```js
Number.isInteger(valeurÀTester);
```

### Paramètres

- `valeurÀTester`
  - : La valeur dont on souhaite savoir si elle est entière ou non.

### Valeur de retour

Un booléen qui indique si la valeur fournie en argument est un entier.

## Description

Si la valeur à tester est un entier, cette méthode renvoie `true`, `false` sinon. Si la valeur est {{jsxref("NaN")}} ou l'infini ({{jsxref("Infinity")}}), la méthode renverra `false`. La méthode renverra également `true` pour les nombres flottants qui peuvent être représentés comme des entiers.

## Exemples

```js
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(0); // true
Number.isInteger(1.0); // true
// Number.isInteger(9…9999); // true, même si le nombre dépasse 32 bits

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(-Infinity); // false
Number.isInteger(true); // false
Number.isInteger(NaN); // false
Number.isInteger("10"); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
```

## Prothèse d'émulation (_polyfill_)

```js
Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{jsxref("Number")}} auquel appartient cette méthode.
