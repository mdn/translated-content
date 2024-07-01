---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
---

{{JSRef}}

La méthode **`toLocaleString()`** renvoie une chaîne de caractères qui représente les éléments du tableau typé. Les éléments sont convertis en chaînes de caractères et séparés par une chaîne de caractères qui est fonction de la locale (la virgule `,` par exemple). Cette méthode utilise le même algorithme que [`Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString) et vu que les éléments d'un tableau typé sont des nombres, elle utilise le même algorithme que [`Number.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) pour chaque élément. Dans la suite de cet article, `TypedArray` fait référence à [l'un des types de tableau typé listés ici](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

## Syntaxe

```js
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
```

### Paramètres

Les arguments `locales` et `options` permettent d'adapter le comportement de la fonction en laissant les applications indiquer la locale dont les conventions de formatage doivent être utilisées. Pour les implémentations qui ne prennent pas en charge les arguments `locales` et `options`, le format et la locale utilisés dépendent entièrement de l'implémentation.

Voir la page du constructeur [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) pour plus de détails sur ces paramètres et comment les utiliser.

### Valeur de retour

Une chaîne de caractères qui représente les éléments du tableau typé.

## Exemples

### Utiliser `toLocaleString()`

```js
let uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// si on exécute sur un environnement utilisant la locale de-DE
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
- [`Number.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
