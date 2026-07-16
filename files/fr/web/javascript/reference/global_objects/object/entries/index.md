---
title: "Object : méthode statique entries()"
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.entries()`** retourne un tableau contenant les paires clé-valeur des propriétés propres énumérables d'un objet, dont les clés sont des chaînes de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.entries()")}}

```js interactive-example
const object = {
  a: "some string",
  b: 42,
};

for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}

// Résultat attendu&nbsp;:
// "a: some string"
// "b: 42"
```

## Syntaxe

```js-nolint
Object.entries(obj)
```

### Paramètres

- `obj`
  - : Un objet.

### Valeur de retour

Un tableau contenant les paires clé-valeur des propriétés propres énumérables de l'objet donné, dont les clés sont des chaînes de caractères. Chaque paire clé-valeur est un tableau de deux éléments&nbsp;: le premier élément est la clé (toujours une chaîne de caractères), le second est la valeur de la propriété.

## Description

`Object.entries()` retourne un tableau dont les éléments sont des tableaux correspondant aux paires clé-valeur des propriétés propres énumérables à clés de chaînes de caractères trouvées directement sur l'objet. Cela équivaut à itérer avec une boucle {{JSxRef("Statements/for...in", "for...in")}}, sauf qu'une boucle `for...in` énumère aussi les propriétés de la chaîne de prototypes. L'ordre du tableau retourné par `Object.entries()` est le même que celui fourni par une boucle {{JSxRef("Statements/for...in", "for...in")}}.

Si vous n'avez besoin que des clés, utilisez {{JSxRef("Object.keys()")}}. Si vous n'avez besoin que des valeurs, utilisez {{JSxRef("Object.values()")}}.

## Exemples

### Utilisation de `Object.entries()`

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo est une propriété non énumérable
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### Utiliser `Object.entries()` sur des valeurs primitives

Les arguments qui ne sont pas des objets sont [convertis en objets](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#coercition_dobjet). [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) et [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) ne peuvent pas être convertis en objets et lèvent immédiatement une {{JSxRef("TypeError")}}. Seules les chaînes de caractères peuvent avoir des propriétés propres énumérables, tandis que toutes les autres primitives retournent un tableau vide.

```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Convertir un objet en `Map`

Le constructeur {{JSxRef("Map/Map", "Map()")}} accepte un itérable de paires d'entrées. Avec `Object.entries`, vous pouvez facilement convertir un {{JSxRef("Object")}} en {{JSxRef("Map")}}&nbsp;:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Itérer sur un objet

En utilisant la [décomposition de tableau](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#décomposition_dun_tableau), vous pouvez itérer facilement sur les objets.

```js
// Avec une boucle for...of
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Avec les méthodes de tableau
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Énumérabilité et appartenance des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.keys()")}}
- La méthode statique {{JSxRef("Object.values()")}}
- La méthode {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
- La méthode statique {{JSxRef("Object.create()")}}
- La méthode statique {{JSxRef("Object.fromEntries()")}}
- La méthode statique {{JSxRef("Object.getOwnPropertyNames()")}}
- La méthode {{JSxRef("Map.prototype.entries()")}}
- [Prothèse d'émulation de `Object.entries` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [Prothèse d'émulation es-shims de `Object.entries` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.entries)
