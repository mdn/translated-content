---
title: "Number : méthode statique parseInt()"
short-title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Number.parseInt()`** analyse un argument de type chaîne de caractères et retourne un entier dans la base définie.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.parseInt()", "taller")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Sortie attendue : 1500

console.log(roughScale("321", 2));
// Sortie attendue : 0
```

## Syntaxe

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Paramètres

- `string`
  - : La valeur à analyser, [convertie en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#convertion_en_chaîne_de_caractères). Les {{Glossary("whitespace", "espaces blancs")}} initiaux dans cet argument sont ignorés.
- `radix` {{Optional_Inline}}
  - : Un entier compris entre `2` et `36` qui représente la _base_ (la base dans les systèmes de numération mathématiques) de la chaîne de caractères (`string`).

    Si la base (`radix`) est indéfinie ou `0`, il est supposé être `10`, sauf lorsque le nombre commence par les paires d'unités de code `0x` ou `0X`, auquel cas une base de `16` est supposée.

### Valeur de retour

Un entier analysé depuis la chaîne de caractères (`string`) fournie.

Si la base (`radix`) est inférieure à `2` ou supérieure à `36`, ou si le premier caractère non blanc ne peut pas être converti en nombre, {{JSxRef("NaN")}} est retourné.

## Exemples

### `Number.parseInt()` et `parseInt()`

Cette méthode possède les mêmes fonctionnalités que la fonction native {{JSxRef("parseInt()")}}&nbsp;:

```js
Number.parseInt === parseInt; // true
```

Son objectif est la modularisation des objets natifs. Voir {{JSxRef("parseInt()")}} pour plus de détails et d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.parseInt` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.parseInt` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.parseInt)
- L'objet {{JSxRef("Number")}}
- La fonction native {{JSxRef("parseInt()")}}
