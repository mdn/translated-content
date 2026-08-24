---
title: "Math : méthode statique fround()"
short-title: fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.fround()`** retourne la représentation en virgule flottante à [précision simple sur 32 bits <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) la plus proche d'un nombre.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.fround()")}}

```js interactive-example
console.log(Math.fround(5.5));
// Résultat attendu : 5.5

console.log(Math.fround(5.05));
// Résultat attendu : 5.050000190734863

console.log(Math.fround(5));
// Résultat attendu : 5

console.log(Math.fround(-5.05));
// Résultat attendu : -5.050000190734863
```

## Syntaxe

```js-nolint
Math.fround(doubleFloat)
```

### Paramètres

- `doubleFloat`
  - : Un nombre.

### Valeur de retour

La représentation en virgule flottante à [précision simple sur 32 bits <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) la plus proche de `doubleFloat`.

## Description

JavaScript utilise des nombres flottants à précision double sur 64 bits en interne, ce qui offre une très grande précision. Cependant, il se peut que vous travailliez avec des nombres flottants sur 32 bits, par exemple si vous lisez des valeurs à partir d'un {{JSxRef("Float32Array")}}. Cela peut créer de la confusion&nbsp;: vérifier l'égalité entre un flottant sur 64 bits et un flottant sur 32 bits peut échouer même si les nombres semblent identiques.

Pour résoudre ce problème, `Math.fround()` peut être utilisé pour convertir le flottant sur 64 bits en flottant sur 32 bits. En interne, JavaScript continue de traiter le nombre comme un flottant sur 64 bits, il effectue simplement un «&nbsp;arrondi au pair&nbsp;» sur le 23e bit de la mantisse, et met tous les bits suivants de la mantisse à `0`. Si le nombre est en dehors de l'intervalle représentable sur 32 bits, {{JSxRef("Infinity")}} ou `-Infinity` est retourné.

Puisque `fround()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.fround()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.fround()`

Le nombre 1,5 peut être représenté avec précision en système binaire, et sa représentation est identique en 32 bits et en 64 bits&nbsp;:

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

Cependant, le nombre 1,337 ne pouvant pas être représenté avec précision dans le système binaire, il diffère selon qu'il s'agit d'un format 32 bits ou 64 bits&nbsp;:

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> est trop grand pour un nombre à virgule flottante 32 bits, donc la valeur `Infinity` est retournée&nbsp;:

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.fround` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [La prothèse d'émulation es-shims pour `Math.fround` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.fround)
- La méthode statique {{JSxRef("Math.round()")}}
