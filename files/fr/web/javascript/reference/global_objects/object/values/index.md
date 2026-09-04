---
title: "Object : méthode statique values()"
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.values()`** retourne un tableau contenant les valeurs des propriétés énumérables d'un objet donné ayant des clés de type chaîne de caractères.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.values()")}}

```js interactive-example
const object = {
  a: "du texte",
  b: 42,
  c: false,
};

console.log(Object.values(object));
// Résultat attendu : Array ["du texte", 42, false]
```

## Syntaxe

```js-nolint
Object.values(obj)
```

### Paramètres

- `obj`
  - : Un objet.

### Valeur de retour

Un tableau dont les éléments sont les valeurs des propriétés énumérables de l'objet passé en argument.

## Description

`Object.values()` retourne un tableau dont les éléments sont les valeurs des propriétés énumérables ayant des clés de type chaîne de caractères directement rattachées à l'objet `object`. C'est la même chose que d'itérer avec une boucle {{JSxRef("Statements/for...in", "for...in")}}, sauf qu'une boucle `for...in` énumère également les propriétés de la chaîne de prototypes. L'ordre du tableau retourné par `Object.values()` est le même que celui fourni par une boucle {{JSxRef("Statements/for...in", "for...in")}}.

Si vous avez besoin des clés des propriétés, utilisez plutôt {{JSxRef("Object.keys()")}}. Si vous avez besoin à la fois des clés et des valeurs des propriétés, utilisez plutôt {{JSxRef("Object.entries()")}}.

## Exemples

### Utiliser `Object.values()`

```js
const obj = { toto: "truc", baz: 42 };
console.log(Object.values(obj)); // ['truc', 42]

// Objet semblable à un tableau
const objCommeTableau1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(objCommeTableau1)); // ['a', 'b', 'c']

// Objet semblable à un tableau avec un ordre de clés aléatoire
// Lors de l'utilisation de clés numériques, les valeurs sont retournées
// dans l'ordre numérique des clés
const objCommeTableau2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(objCommeTableau2)); // ['b', 'c', 'a']

// getToto n'est pas une propriété énumérable
const monObjet = Object.create(
  {},
  {
    getToto: {
      value() {
        return this.toto;
      },
    },
  },
);
monObjet.toto = "truc";
console.log(Object.values(monObjet)); // ['truc']
```

### Utiliser `Object.values()` sur des primitifs

Les arguments qui ne sont pas des objets sont [convertis en objets](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#conversion_en_objet). {{JSxRef("undefined")}} et {{JSxRef("null")}} ne peuvent pas être convertis en objets et lèvent immédiatement une {{JSxRef("TypeError")}}. Seules les chaînes de caractères peuvent avoir des propriétés énumérables propres, tandis que tous les autres primitifs retournent un tableau vide.

```js
// Les chaînes de caractères ont des indices comme propriétés énumérables propres
console.log(Object.values("toto")); // ['t', 'o', 't', 'o']

// Les autres primitives à l'exception de undefined et null n'ont pas de propriétés propres
console.log(Object.values(100)); // []
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Object.values` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [Prothèse d'émulation es-shims de `Object.values` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.values)
- [Énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.keys()")}}
- La méthode statique {{JSxRef("Object.entries()")}}
- La méthode {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
- La méthode statique {{JSxRef("Object.create()")}}
- La méthode statique {{JSxRef("Object.getOwnPropertyNames()")}}
- La méthode {{JSxRef("Map.prototype.values()")}}
