---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
---

{{JSRef}}

La fonction **`Math.floor(x)`** renvoie le plus grand entier qui est inférieur ou égal à un nombre `x`.

{{EmbedInteractiveExample("pages/js/math-floor.html")}}

## Syntaxe

```js
Math.floor(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre qui représente le plus grand entier inférieur ou égal à la valeur passée en argument.

## Description

`floor()` est une méthode statique de l'objet `Math`, elle doit toujours être utilisée avec la syntaxe `Math.floor()`, elle ne doit pas être utilisée avec un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

> **Note :** `Math.floor(null)` renvoie `0` et pas {{jsxref("NaN")}}.

## Exemples

### Utiliser `Math.floor`

```js
Math.floor(45.95); //  45
Math.floor(45.05); //  45
Math.floor(4); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
Math.floor(null); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
