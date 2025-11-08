---
title: "Array : méthode concat()"
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`concat()`** est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Résultat attendu : Array ["a", "b", "c", "d", "e", "f"]
```

## Syntaxe

```js-nolint
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```

### Paramètres

- `value1`, …, `valueN` {{Optional_Inline}}
  - : Tableaux et/ou valeurs à concaténer dans le nouveau tableau. Si tous les paramètres `valueN` sont omis, `concat` retourne une {{Glossary("Shallow_copy", "copie superficielle")}} du tableau existant sur lequel elle est appelée. Voir la description ci-dessous pour plus de détails.

### Valeur de retour

Une nouvelle instance de {{JSxRef("Array")}}.

## Description

La méthode `concat` crée un nouveau tableau. Ce tableau sera d'abord rempli par les éléments de l'objet sur lequel elle est appelée. Ensuite, pour chaque argument, sa valeur sera concaténée dans le tableau&nbsp;: pour les objets normaux ou les valeurs primitives, l'argument lui-même deviendra un élément du tableau final&nbsp;; pour les tableaux ou objets assimilés à des tableaux ayant la propriété [`Symbol.isConcatSpreadable`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) définie à une valeur vraie, chaque élément de l'argument sera ajouté indépendamment au tableau final. La méthode `concat` ne parcourt pas récursivement les tableaux imbriqués passés en argument.

La méthode `concat()` est une [méthode de copie](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation). Elle ne modifie ni `this` ni aucun des tableaux fournis en argument, mais retourne une {{Glossary("Shallow_copy", "copie superficielle")}} qui contient les mêmes éléments que ceux des tableaux originaux.

La méthode `concat()` préserve les trous si l'un des tableaux sources est [creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `concat()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). La valeur de `this` est traitée de la même manière que les autres arguments (à ceci près qu'elle sera d'abord convertie en objet), ce qui signifie que les objets simples seront directement placés en tête du tableau résultant, tandis que les objets de type tableau avec un `[Symbol.isConcatSpreadable]` vrai seront dépliés dans le tableau résultant.

## Exemples

### Concaténer deux tableaux

Le code qui suit concatène deux tableaux&nbsp;:

```js
const lettres = ["a", "b", "c"];
const chiffres = [1, 2, 3];

const alphanum = lettres.concat(chiffres);
console.log(alphanum);
// donne : ["a", "b", "c", 1, 2, 3]
```

### Concaténer trois tableaux

Le code qui suit concatène trois tableaux&nbsp;:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const nums = num1.concat(num2, num3);

console.log(nums);
// donne : [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Concaténer des valeurs avec un tableau

Le code qui suit ajoute trois valeurs à un tableau&nbsp;:

```js
const alpha = ["a", "b", "c"];

const alphanumerique = alpha.concat(1, [2, 3]);

console.log(alphanumerique);
// donne : ['a', 'b', 'c', 1, 2, 3]
```

### Concaténer des tableaux imbriqués

Dans le code qui suit, on concatène deux tableaux qui ont plusieurs dimensions et on illustre la conservation des références&nbsp;:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const nums = num1.concat(num2);

console.log(nums);
// donne : [[1], 2, [3]]

// Ici, on modifie le premier élément de num1
num1[0].push(4);

console.log(nums);
// donne : [[1, 4], 2, [3]]
```

### Concaténer des objets de type tableau avec `Symbol.isConcatSpreadable`

`concat` ne traite pas tous les objets de type tableau comme des tableaux par défaut — uniquement si `Symbol.isConcatSpreadable` est défini à une valeur vraie (par exemple, `true`).

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Utiliser `concat()` sur des tableaux creux

Si l'un des tableaux sources est creux, le tableau résultant le sera aussi&nbsp;:

```js
console.log([1, , 3].concat([4, 5])); // [1, vide, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, vide, 5]
```

### Appeler `concat()` sur des objets qui ne sont pas des tableaux

Si la valeur de `this` n'est pas un tableau, elle est convertie en objet puis traitée de la même manière que les arguments de `concat()`. Dans ce cas, la valeur de retour est toujours un nouveau tableau simple.

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const objetSimilaireTableau = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // ignoré par concat() car length vaut 2
};
console.log(Array.prototype.concat.call(objetSimilaireTableau, 3, 4)); // [1, 2, 3, 4]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.push()")}}
- La méthode {{JSxRef("Array.prototype.unshift()")}}
- La méthode {{JSxRef("Array.prototype.splice()")}}
- La méthode {{JSxRef("String.prototype.concat()")}}
- La propriété {{JSxRef("Symbol.isConcatSpreadable")}}
- [Prothèse d'émulation pour `Array.prototype.concat` dans `core-js` avec corrections et prise en charge des comportements modernes comme `Symbol.isConcatSpreadable` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims pour `Array.prototype.concat` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.concat)
