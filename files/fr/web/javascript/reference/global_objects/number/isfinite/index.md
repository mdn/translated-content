---
title: "Number : méthode statique isFinite()"
short-title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Number.isFinite()`** permet de déterminer si la valeur fournie est un nombre fini — c'est-à-dire qu'elle vérifie qu'une valeur donnée est un nombre, et que ce nombre n'est ni `Infinity` positif, ni `Infinity` négatif, ni `NaN`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.isFinite()")}}

```js interactive-example
console.log(Number.isFinite(1 / 0));
// Sortie attendue : false

console.log(Number.isFinite(10 / 5));
// Sortie attendue : true

console.log(Number.isFinite(0 / 0));
// Sortie attendue : false
```

## Syntaxe

```js-nolint
Number.isFinite(value)
```

### Paramètres

- `value`
  - : La valeur dont on souhaite savoir si elle est finie.

### Valeur de retour

La valeur booléenne `true` si la valeur donnée est un nombre fini. Sinon `false`.

## Exemples

### Utiliser `isFinite()`

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Différence entre `Number.isFinite()` et le `isFinite()` natif

En comparaison avec la fonction native {{JSxRef("isFinite()")}} de l'objet global, cette méthode ne convertit pas d'abord le paramètre en nombre. Cela signifie que seules les valeurs de type nombre _et_ finies retournent `true`, et que les non-nombres retournent toujours `false`.

```js
isFinite("0"); // true ; converti en nombre 0
Number.isFinite("0"); // false
isFinite(null); // true ; converti en nombre 0
Number.isFinite(null); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.isFinite` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.isFinite` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.isfinite)
- L'objet {{JSxRef("Number")}}
- La fonction native {{JSxRef("isFinite()")}}
