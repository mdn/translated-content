---
title: "Number : méthode statique isNaN()"
short-title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Number.isNaN()`** détermine si la valeur passée est la valeur numérique {{JSxRef("NaN")}}, et retourne `false` si l'entrée n'est pas de type `Number`. C'est une version plus robuste de la fonction native {{JSxRef("isNaN()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Résultat attendu : "NaN"

console.log(typeOfNaN(NaN));
// Résultat attendu : "Number NaN"
```

## Syntaxe

```js-nolint
Number.isNaN(value)
```

### Paramètres

- `value`
  - : La valeur qu'on souhaite comparer à {{JSxRef("NaN")}}.

### Valeur de retour

La valeur booléenne `true` si la valeur donnée est un nombre avec la valeur {{JSxRef("NaN")}}. Sinon, `false`.

## Description

La fonction `Number.isNaN()` fournit un moyen pratique de vérifier l'égalité avec `NaN`. Notez que vous ne pouvez pas tester l'égalité avec `NaN` en utilisant soit les opérateurs [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality) ou [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality), car contrairement à toutes les autres comparaisons de valeurs en JavaScript, celles-ci évaluent à `false` chaque fois qu'un opérande est {{JSxRef("NaN")}}, même si l'autre opérande est également {{JSxRef("NaN")}}.

Étant donné que `x !== x` n'est vrai que pour `NaN` parmi toutes les valeurs possibles en JavaScript, `Number.isNaN(x)` peut également être remplacé par un test `x !== x`, bien que ce dernier soit moins lisible.

Contrairement à la fonction globale {{JSxRef("isNaN()")}}, la méthode `Number.isNaN()` ne convertit pas de force le paramètre en nombre. Cela permet de passer en toute sécurité des valeurs qui sont normalement converties en {{JSxRef("NaN")}} mais qui ne sont pas réellement la même valeur que {{JSxRef("NaN")}}. Cela signifie également que seules les valeurs de type Number qui sont également {{JSxRef("NaN")}} retournent `true`.

## Exemples

### Utiliser `isNaN()`

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Différence entre `Number.isNaN()` et la fonction native `isNaN()`

`Number.isNaN()` n'essaie pas de convertir le paramètre en nombre, donc les valeurs non numériques retournent toujours `false`. Les exemples suivants retournent tous `false`&nbsp;:

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

La fonction native {{JSxRef("isNaN()")}} convertit son paramètre en un nombre&nbsp;:

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, c'est converti en 1
isNaN(null); // false, c'est converti en 0
isNaN("37"); // false, c'est converti en 37
isNaN("37.37"); // false, c'est converti en 37.37
isNaN(""); // false, c'est converti en 0
isNaN(" "); // false, c'est converti en 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.isNaN` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.isNaN` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.isnan)
- L'objet {{JSxRef("Number")}}
- La fonction native {{JSxRef("isNaN()")}}
