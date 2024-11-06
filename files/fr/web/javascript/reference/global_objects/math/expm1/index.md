---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
---

{{JSRef}}

La fonction **`Math.expm1()`** renvoie `e^x` - 1, avec `x` l'argument donné et {{jsxref("Objets_globaux/Math/E","e")}} la base du logarithme nepérien.

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## Syntaxe

```js
Math.expm1(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre qui représente `e^x- 1` où `x` est la valeur passée en argument et `e^x` l'exponentielle du nombre.

## Description

`expm1()` étant une méthode statique de `Math`, il faut utiliser `Math.expm1()` et non pas la méthode d'un autre objet qui aurait été créé sur mesure (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.expm1()`

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
```

## Prothèse d'émulation (_polyfill_)

Cette fonction peut être émulée en utilisant la fonction {{jsxref("Objets_globaux/Math/exp", "Math.exp()")}} :

```js
Math.expm1 =
  Math.expm1 ||
  function (x) {
    return Math.exp(x) - 1;
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
