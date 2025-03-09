---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
---

{{JSRef}}

La fonction **`Math.log1p()`** renvoie le logarithme népérien (en base {{jsxref("Math/E","e")}}) d'un nombre +1, donné par la formule :

<math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.log1p()")}}

```js interactive-example
console.log(Math.log1p(1));
// Expected output: 0.6931471805599453

console.log(Math.log1p(0));
// Expected output: 0

console.log(Math.log1p(-1));
// Expected output: -Infinity

console.log(Math.log1p(-2));
// Expected output: NaN
```

## Syntaxe

```js
Math.log1p(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La valeur du logarithme naturel de 1 plus l'argument (`log(1 + x`)). Si l'argument est inférieur à `-1`, {{jsxref("NaN")}} est renvoyée.

## Description

Si `x` est strictement inférieur à -1, la valeur renvoyée est {{jsxref("NaN")}}.

`log1p` étant une méthode statique de `Math`, il faut utiliser `Math.log1p()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.log1p()`

```js
Math.log1p(1); // 0.6931471805599453
Math.log1p(0); // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## Prothèse d'émulation (_polyfill_)

Si cette fonction n'est pas disponible, elle peut être définie grâce au code suivant :

```js
Math.log1p =
  Math.log1p ||
  function (x) {
    return Math.log(1 + x);
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
