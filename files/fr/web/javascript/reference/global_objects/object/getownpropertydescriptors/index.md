---
title: "Object : méthode statique getOwnPropertyDescriptors()"
short-title: getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.getOwnPropertyDescriptors()`** retourne l'ensemble des descripteurs des propriétés propres d'un objet donné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.getOwnPropertyDescriptors()")}}

```js interactive-example
const object = {
  foo: 42,
};

const descriptors = Object.getOwnPropertyDescriptors(object);

console.log(descriptors.foo.writable);
// Résultat attendu : true

console.log(descriptors.foo.value);
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
Object.getOwnPropertyDescriptors(obj)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite connaître les descripteurs des propriétés.

### Valeur de retour

Un objet qui contient tous les descripteurs des propriétés propres d'un objet. S'il n'y aucune propriété, c'est un objet vide.

## Description

Cette méthode permet d'examiner la description précise d'une propriété. Une _propriété_ en JavaScript se compose soit d'un nom de type chaîne de caractères, soit d'un {{JSxRef("Symbol")}} et d'un descripteur de propriété. Des informations supplémentaires sur les types de descripteurs de propriété et leurs attributs peuvent être trouvées dans {{JSxRef("Object.defineProperty()")}}.

Un _descripteur de propriété_ est un enregistrement avec certains des attributs suivants&nbsp;:

- `value`
  - : La valeur associée à la propriété (uniquement pour les descripteurs de données).
- `writable`
  - : `true` si et seulement si la valeur associée à la propriété peut être modifiée (uniquement pour les descripteurs de données).
- `get`
  - : Une fonction qui sert d'accesseur pour la propriété, ou {{JSxRef("undefined")}} s'il n'y a pas d'accesseur (uniquement pour les descripteurs d'accesseur).
- `set`
  - : Une fonction qui sert de mutateur pour la propriété, ou {{JSxRef("undefined")}} s'il n'y a pas de mutateur (uniquement pour les descripteurs d'accesseur).
- `configurable`
  - : `true` si et seulement si le type de ce descripteur de propriété peut être modifié et si la propriété peut être supprimée de l'objet correspondant.
- `enumerable`
  - : `true` si et seulement si cette propriété apparaît lors de l'énumération des propriétés de l'objet correspondant.

## Exemples

### Créer une copie superficielle

Étant donné que la méthode {{JSxRef("Object.assign()")}} ne copie que les propriétés propres et énumérables d'un objet source vers un objet cible, vous pouvez utiliser cette méthode et {{JSxRef("Object.create()")}} pour réaliser une {{Glossary("Shallow_copy", "copie superficielle")}} entre deux objets inconnus&nbsp;:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Créer une sous-classe

Une façon typique de créer une sous-classe consiste à définir la sous-classe, à définir son prototype comme étant une instance de la classe parente, puis à définir les propriétés sur cette instance. Cela peut devenir compliqué, en particulier pour les accesseurs et les mutateurs. À la place, vous pouvez utiliser ce code pour définir le prototype&nbsp;:

```js
function superClasse() {}
superClasse.prototype = {
  // Définit le constructeur de la superclasse, ses méthodes et ses propriétés ici
};
function sousClasse() {}
sousClasse.prototype = Object.create(superClasse.prototype, {
  // Définit le constructeur de la sous-classe, ses méthodes et ses propriétés ici
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.getOwnPropertyDescriptors` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.getOwnPropertyDescriptors` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.getownpropertydescriptors)
- La méthode statique {{JSxRef("Object.getOwnPropertyDescriptor()")}}
- La méthode statique {{JSxRef("Object.defineProperty()")}}
