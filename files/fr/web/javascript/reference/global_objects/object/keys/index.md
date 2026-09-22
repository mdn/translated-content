---
title: "Object : méthode statique keys()"
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.keys()`** retourne un tableau contenant les noms des propriétés propres à un objet (qui ne sont pas héritées par la chaîne de prototypes) et qui sont énumérables.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.keys()")}}

```js interactive-example
const object = {
  a: "du texte",
  b: 42,
  c: false,
};

console.log(Object.keys(object));
// Résultat attendu : Array ["a", "b", "c"]
```

## Syntaxe

```js-nolint
Object.keys(obj)
```

### Paramètres

- `obj`
  - : Un objet.

### Valeur de retour

Un tableau de chaînes de caractères représentant les clés de propriétés propres et énumérables de l'objet donné.

## Description

`Object.keys()` retourne un tableau dont les éléments sont des chaînes de caractères correspondant aux noms des propriétés propres et énumérables de l'objet `object`. C'est la même chose que d'itérer avec une boucle {{JSxRef("Statements/for...in", "for...in")}}, sauf qu'une boucle `for...in` énumère également les propriétés de la chaîne de prototypes. L'ordre du tableau retourné par `Object.keys()` est le même que celui fourni par une boucle {{JSxRef("Statements/for...in", "for...in")}}.

Si vous avez besoin des valeurs des propriétés, utilisez plutôt {{JSxRef("Object.values()")}}. Si vous avez besoin à la fois des clés et des valeurs des propriétés, utilisez plutôt {{JSxRef("Object.entries()")}}.

## Exemples

### Utiliser `Object.keys()`

```js
// Tableau simple
const tableau = ["a", "b", "c"];
console.log(Object.keys(tableau)); // ['0', '1', '2']

// Objet semblable à un tableau
const objet = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(objet)); // ['0', '1', '2']

// Objet semblable à un tableau avec un ordre de clé aléatoire
const unObjet = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(unObjet)); // ['2', '7', '100']

// getToto est une propriété qui n'est pas énumérable
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
monObjet.toto = 1;
console.log(Object.keys(monObjet)); // ['toto']
```

Si vous voulez _toutes_ les propriétés propres avec des clés de type chaîne de caractères, y compris celles qui ne sont pas énumérables, consultez {{JSxRef("Object.getOwnPropertyNames()")}}.

### Utiliser `Object.keys()` sur les primitives

Les arguments qui ne sont pas des objets sont [convertis en objets](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#conversion_en_objet). [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) et [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) ne peuvent pas être convertis en objets et déclenchent immédiatement une exception {{JSxRef("TypeError")}}. Seules les chaînes de caractères peuvent avoir des propriétés propres énumérables, tandis que tous les autres types primitifs retournent un tableau vide.

```js
// Les chaînes de caractères ont des indices comme propriétés propres énumérables
console.log(Object.keys("foo")); // ['0', '1', '2']

// Les autres types primitifs, à l'exception de undefined et null, n'ont pas de propriétés propres
console.log(Object.keys(100)); // []
```

> [!NOTE]
> Dans ES5, passer un argument qui n'est pas un objet à `Object.keys()` déclenchait une {{JSxRef("TypeError")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.keys` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.keys` <sup>(angl.)</sup>](https://www.npmjs.com/package/object-key)
- [Énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.entries()")}}
- La méthode statique {{JSxRef("Object.values()")}}
- La méthode statique {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
- La méthode statique {{JSxRef("Object.create()")}}
- La méthode statique {{JSxRef("Object.getOwnPropertyNames()")}}
- La méthode statique {{JSxRef("Map.prototype.keys()")}}
