---
title: "Math : méthode statique f16round()"
short-title: f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.f16round()`** retourne la représentation en virgule flottante [16 bits demi-précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) la plus proche d'un nombre.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.f16round()")}}

```js interactive-example
console.log(Math.f16round(5.5));
// Sortie attendue : 5.5

console.log(Math.f16round(5.05));
// Sortie attendue : 5.05078125

console.log(Math.f16round(5));
// Sortie attendue : 5

console.log(Math.f16round(-5.05));
// Sortie attendue : -5.05078125
```

## Syntaxe

```js-nolint
Math.f16round(doubleFloat)
```

### Paramètres

- `doubleFloat`
  - : Un nombre.

### Valeur de retour

La représentation en virgule flottante [16 bits demi-précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) la plus proche de `doubleFloat`.

## Description

`Math.f16round` est l'équivalent 16 bits de {{JSxRef("Math.fround()")}}. Il est destiné à lisser certaines imperfections lors de l'interaction avec des nombres float16, par exemple lors de la lecture à partir d'un {{JSxRef("Float16Array")}}. En interne, JavaScript continue de traiter le nombre comme un float 64 bits, il effectue simplement un «&nbsp;arrondi au pair&nbsp;» sur le 10e bit de la mantisse, et met tous les bits de mantisse suivants à `0`. Si le nombre est en dehors de la plage d'un float 16 bits, {{JSxRef("Infinity")}} ou `-Infinity` est retourné.

Comme `f16round()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.f16round()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.f16round()`

Le nombre 1,5 peut être représenté avec précision dans le système binaire, et est identique en 16 bits et 64 bits&nbsp;:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Cependant, le nombre 1,337 ne peut pas être représenté avec précision dans le système binaire, il diffère donc en 16 bits et 64 bits&nbsp;:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 est trop grand pour un float 16 bits, donc `Infinity` est retourné&nbsp;:

```js
Math.f16round(100000); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.f16round` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#float16-methods)
- [La prothèse d'émulation es-shims de `Math.f16round` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.f16round)
- La méthode statique {{JSxRef("Math.fround()")}}
- La méthode statique {{JSxRef("Math.round()")}}
