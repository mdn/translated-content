---
title: "Array : accesseur statique [Symbol.species]"
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété accesseur statique **`Array[Symbol.species]`** retourne le constructeur utilisé pour créer les valeurs de retour des méthodes des tableaux.

> [!WARNING]
> La présence de `[Symbol.species]` permet l'exécution de code arbitraire et peut créer des failles de sécurité. Elle complique également certaines optimisations. Les responsables des moteurs JavaScript [étudient la suppression de cette fonctionnalité <sup>(angl.)</sup>](https://github.com/tc39/proposal-rm-builtin-subclassing). Évitez d'y recourir si possible. Les méthodes modernes des tableaux, comme {{JSxRef("Array/toReversed", "toReversed()")}}, n'utilisent pas `[Symbol.species]` et retournent toujours une nouvelle instance de la classe de base `Array`.

## Syntaxe

```js-nolint
Array[Symbol.species]
```

### Valeur de retour

La valeur du constructeur (`this`) sur lequel `get [Symbol.species]` a été appelé. Cette valeur est utilisée pour construire les valeurs de retour des méthodes de tableau qui créent de nouveaux tableaux.

## Description

La propriété accesseur `[Symbol.species]` retourne le constructeur par défaut pour les objets `Array`. Les constructeurs des sous-classes peuvent la surcharger pour modifier l'affectation du constructeur. L'implémentation par défaut est essentiellement&nbsp;:

```js
// Implémentation sous-jacente hypothétique à titre d'illustration
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

En raison de cette implémentation polymorphe, `[Symbol.species]` des sous-classes dérivées retournera également par défaut le constructeur lui-même.

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

Lorsque vous appelez des méthodes de tableau qui ne modifient pas le tableau existant mais retournent une nouvelle instance de tableau (par exemple, [`filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) et [`map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), le `constructor[Symbol.species]` du tableau sera utilisé. Le constructeur retourné servira à construire la valeur de retour de la méthode de tableau. Cela rend techniquement possible de faire retourner par les méthodes de tableau des objets qui ne sont pas des tableaux.

```js
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
arr.map((i) => i); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
arr.concat([1, 2]); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }
```

## Exemples

### `Species` dans les objets ordinaires

La propriété `[Symbol.species]` retourne la fonction constructeur par défaut, qui est le constructeur `Array` pour `Array`.

```js
Array[Symbol.species]; // [Function: Array]
```

### `Species` dans les objets dérivés

Dans une instance d'une sous-classe personnalisée de `Array`, comme `MyArray`, le species de `MyArray` est le constructeur `MyArray`. Cependant, vous pouvez vouloir le redéfinir afin de retourner des objets `Array` parents dans les méthodes de votre classe dérivée&nbsp;:

```js
class MyArray extends Array {
  // Redéfinit le species de MyArrayArray vers le constructeur parent Array
  static get [Symbol.species]() {
    return Array;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La propriété {{JSxRef("Symbol.species")}}
- [Prothèse d'émulation de `Array[Symbol.species]` et prise en charge de `[Symbol.species]` dans toutes les méthodes concernées de `Array` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
