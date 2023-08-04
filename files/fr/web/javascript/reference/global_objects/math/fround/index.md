---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
---

{{JSRef}}

La fonction **`Math.fround()`** renvoie le nombre flottant à [précision simple](https://en.wikipedia.org/wiki/Single_precision) sur 32 bits qui est le plus proche du nombre fourni.

{{EmbedInteractiveExample("pages/js/math-fround.html")}}

## Syntaxe

```js
Math.fround(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le nombre flottant à précision simple sur 32 bits qui est le plus proche de la valeur fournie en argument.

## Description

Un moteur JavaScript utilise des nombres flottant à précision simple sur 64 bits. Cela permet d'obtenir une précision fine. Toutefois, lorsqu'on manipule des valeurs représentées sur 32 bits (par exemple des valeurs extraites d'un {{jsxref("Float32Array")}}) et qu'on souhaite comparer celles-ci avec des valeurs sur 32 bits, on peut obtenir des inégalités alors que les valeurs semblent identiques.

Pour résoudre ce problème, on peut utiliser `Math.fround()` afin de transformer un nombre représenté sur 64 bits en un nombre représenté sur 32 bits. Pour le moteur JavaScript, la valeur sera toujours représentée sur 64 bits mais elle aura été « arrondie » à partir du 23e bit de la mantisse. Si le nombre passé en argument se situe en dehors de l'intervalle représentable sur 32 bits, la méthode renverra {{jsxref("Infinity")}} ou `-Infinity`.

`fround` étant une méthode statique de `Math`, il faut utiliser `Math.fround()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.fround()`

```js
Math.fround(0); // 0
Math.fround(1); // 1

// 1.337 ne peut pas être représenté correctement
// sur 32 bits
Math.fround(1.337); // 1.3370000123977661

Math.fround(1.5); // 1.5
Math.fround(NaN); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.round()")}}
