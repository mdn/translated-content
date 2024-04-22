---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
---

{{JSRef}}

La fonction **`Math.sign()`** renvoie le signe d'un nombre et permet de savoir si un nombre est positif, négatif ou nul.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## Syntaxe

```js
Math.sign(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre qui représente le signe de l'argument. Si l'argument est un nombre positif, négatif, un zéro positif ou un zéro négatif, la fonction renverra respectivement `1`, `-1`, `0`, `-0`. Sinon, ce sera {{jsxref("NaN")}} qui sera renvoyé.

## Description

`sign()` étant une méthode statique de `Math`, il faut utiliser `Math.sign()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

Cette fonction peut renvoyer 5 valeurs : `1, -1, 0, -0, NaN,` qui indiquent respectivement que `x` est un nombre positif, un nombre négatif, zéro, la limite négative de zéro, et n'est pas un nombre pour {{jsxref("NaN")}}.

L'argument passé à cette fonction sera implicitement converti au type `number`.

## Exemples

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
