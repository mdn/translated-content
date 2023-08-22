---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
---

{{JSRef}}

La fonction **`Math.cosh()`** renvoie le cosinus hyperbolique d'un nombre, défini par :

<math><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cosh.html")}}

(Voir la page sur {{jsxref("Objets_globaux/Math/E","e","",1)}})

## Syntaxe

```js
Math.cosh(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le cosinus hyperbolique du nombre passé en argument.

## Description

`cosh()` étant une méthode statique de `Math`, il faut utiliser `Math.cosh()` et non pas la méthode d'un objet `Math` créé sur mesure (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.cosh()`

```js
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## Prothèse d'émulation (_polyfill_)

Cette fonction peut être émulée grâce à la fonction {{jsxref("Objets_globaux/Math/exp", "Math.exp()")}} :

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  };
```

On peut également utiliser un unique appel à {{jsxref("Objets_globaux/Math/exp", "exp()")}} :

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    var y = Math.exp(x);
    return (y + 1 / y) / 2;
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
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
