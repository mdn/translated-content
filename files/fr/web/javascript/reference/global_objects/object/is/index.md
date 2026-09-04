---
title: "Object : méthode statique is()"
short-title: is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Object.is()`** détermine si deux valeurs sont [les mêmes](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#égalité_de_valeur_similaire_avec_object.is).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.is()")}}

```js interactive-example
console.log(Object.is("1", 1));
// Résultat attendu : false

console.log(Object.is(NaN, NaN));
// Résultat attendu : true

console.log(Object.is(-0, 0));
// Résultat attendu : false

const obj = {};
console.log(Object.is(obj, {}));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
Object.is(value1, value2)
```

### Paramètres

- `valeur1`
  - : La première valeur à comparer.
- `valeur2`
  - : La seconde valeur à comparer.

### Valeur de retour

Un booléen indiquant si les arguments ont la même valeur.

## Description

`Object.is()` détermine si deux valeurs sont [les mêmes](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#égalité_de_valeur_similaire_avec_object.is). Deux valeurs sont considérées comme les mêmes si l'une des conditions suivantes est remplie&nbsp;:

- elles sont toutes les deux {{JSxRef("undefined")}}
- elles sont toutes les deux {{JSxRef("null")}}
- elles sont toutes les deux `true` ou toutes les deux `false`
- elles sont des chaînes de caractères de la même longueur et avec les mêmes caractères (dans le même ordre)
- elles sont toutes les deux le même objet (ce qui signifie que les deux valeurs font référence au même objet en mémoire)
- elles sont toutes les deux des [grands entiers](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) avec la même valeur numérique
- elles sont toutes les deux des [symboles](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) qui font référence à la même valeur symbolique
- elles sont des nombres et
  - sont toutes les deux égales à `+0`
  - sont toutes les deux égales à `-0`
  - sont toutes les deux égales à {{JSxRef("NaN")}}
  - sont non-nulles, ne sont pas `NaN` et ont toutes les deux la même valeur

`Object.is()` n'est pas équivalent à l'opérateur [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality). L'opérateur `==` applique diverses conversions aux deux côtés (si elles ne sont pas du même type) avant de tester l'égalité (ce qui entraîne un comportement tel que `"" == false` donnant `true`), mais `Object.is()` ne convertit aucune des deux valeurs.

`Object.is()` n'est également _pas_ équivalent à l'opérateur [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality). La seule différence entre `Object.is()` et `===` réside dans leur traitement des zéros signés et des valeurs `NaN`. L'opérateur `===` (et l'opérateur `==`) considère que les valeurs numériques `-0` et `+0` sont égales, mais considère que {{JSxRef("NaN")}} n'est pas égal à lui-même.

## Exemples

### Utiliser `Object.is()`

```js
// Cas 1 : Évaluer si le résultat est le même en utilisant ===
Object.is(25, 25); // true
Object.is("toto", "toto"); // true
Object.is("toto", "truc"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const toto = { a: 1 };
const truc = { a: 1 };
const memeToto = toto;
Object.is(toto, toto); // true
Object.is(toto, truc); // false
Object.is(toto, memeToto); // true

// Cas 2 : Zéro signé
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Cas 3 : NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.is` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.is` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.is)
- [Comparaisons d'égalité et de similitude](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
