---
title: "Object : méthode statique fromEntries()"
short-title: fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode statique **`Object.fromEntries()`** permet de transformer une liste de paires de clés/valeurs en un objet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.fromEntries()")}}

```js interactive-example
const entries = new Map([
  ["toto", "truc"],
  ["tata", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Résultat attendu : Object { toto: "truc", tata: 42 }
```

## Syntaxe

```js-nolint
Object.fromEntries(iterable)
```

### Paramètres

- `iterable`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), tel qu'un {{JSxRef("Array")}} ou une {{JSxRef("Map")}}, contenant une liste d'objets. Chaque objet doit avoir deux propriétés&nbsp;:
    - `0`
      - : Une chaîne de caractères ou un [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) représentant la clé de la propriété.
    - `1`
      - : La valeur de la propriété.

    En général, cet objet est implémenté sous la forme d'un tableau à deux éléments, le premier élément étant la clé de la propriété et le second élément étant la valeur de la propriété.

### Valeur de retour

Un nouvel objet dont les propriétés sont fournies par les éléments de l'itérable.

## Description

La méthode `Object.fromEntries()` prend une liste de paires clé-valeur et retourne un nouvel objet dont les propriétés sont définies par ces entrées. L'argument `iterable` doit être un objet implémentant la méthode `[Symbol.iterator]()`. Cette méthode retourne un objet itérateur qui produit des objets de type tableau à deux éléments. Le premier élément est une valeur qui est utilisée comme clé de propriété, et le second élément est la valeur à associer à cette clé de propriété.

`Object.fromEntries()` effectue l'opération inverse de {{JSxRef("Object.entries()")}}, à la différence que `Object.entries()` ne retourne que des propriétés dont la clé est une chaîne de caractères, tandis que `Object.fromEntries()` peut également créer des propriétés dont la clé est un symbole.

> [!NOTE]
> Contrairement à {{JSxRef("Array.from()")}}, `Object.fromEntries()` n'utilise pas la valeur de `this`, par conséquent, l'appeler sur un autre constructeur ne crée pas d'objets de ce type.

## Exemples

### Convertir une `Map` en un `Object`

Grâce à `Object.fromEntries`, on peut convertir des objets {{JSxRef("Map")}} en {{JSxRef("Object")}}&nbsp;:

```js
const tab_assoc = new Map([
  ["toto", "truc"],
  ["machin", 42],
]);
const obj = Object.fromEntries(tab_assoc);
console.log(obj); // { toto: "truc", machin: 42 }
```

### Convertir un `Array` en un `Object`

Grâce à `Object.fromEntries`, on peut convertir des objets {{JSxRef("Array")}} en {{JSxRef("Object")}}&nbsp;:

```js
const tab = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(tab);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Transformer des objets

Avec `Object.fromEntries` et la méthode réciproque {{JSxRef("Object.entries()")}}, et [les méthodes de manipulation de tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_dinstance), on peut transformer des objets&nbsp;:

```js
const objet1 = { a: 1, b: 2, c: 3 };

const objet2 = Object.fromEntries(
  Object.entries(objet1).map(([cle, val]) => [cle, val * 2]),
);

console.log(objet2);
// { a: 2, b: 4, c: 6 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.fromEntries` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.fromEntries` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.fromentries)
- La méthode statique {{JSxRef("Object.entries()")}}
- La méthode statique {{JSxRef("Object.keys()")}}
- La méthode statique {{JSxRef("Object.values()")}}
- La méthode {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
- La méthode statique {{JSxRef("Object.create()")}}
- La méthode {{JSxRef("Map.prototype.entries()")}}
- La méthode {{JSxRef("Map.prototype.keys()")}}
- La méthode {{JSxRef("Map.prototype.values()")}}
