---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
---

{{JSRef}}

La fonction **`Math.tanh()`** renvoie la tangente hyperbolique d'un nombre définie par&nbsp;:

<math><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo><mi>x</mi></mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>-</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}} {e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-tanh.html")}}

## Syntaxe

```js
Math.tanh(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La tangente hyperbolique du nombre fourni en argument.

## Description

`tanh()` est une méthode statique de l'objet `Math`, elle doit toujours être utilisée avec la syntaxe `Math.tanh()`, elle ne doit pas être utilisée comme une méthode d'un objet `Math` qui aurait été instancié (`Math` n'est pas une constructeur).

## Exemples

### Utiliser `Math.tanh()`

```js
Math.tanh(0); // 0
Math.tanh(Infinity); // 1
Math.tanh(1); // 0.7615941559557649
```

## Prothèse d'émulation (_polyfill_)

Cette méthode peut être émulée grâce à la fonction {{jsxref("Objets_globaux/Math/exp", "Math.exp()")}} :

```js
Math.tanh =
  Math.tanh ||
  function (x) {
    var a = Math.exp(+x),
      b = Math.exp(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
  };
```

et si on souhaite n'utiliser qu'un seul appel à {{jsxref("Objets_globaux/Math/exp", "Math.exp()")}}&nbsp;:

```js
Math.tanhx =
  Math.tanhx ||
  function (x) {
    if (x === Infinity) {
      return 1;
    } else if (x === -Infinity) {
      return -1;
    } else {
      var y = Math.exp(2 * x);
      return (y - 1) / (y + 1);
    }
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
