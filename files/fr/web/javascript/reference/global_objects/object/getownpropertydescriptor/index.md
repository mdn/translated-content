---
title: "Object : méthode statique getOwnPropertyDescriptor()"
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.getOwnPropertyDescriptor()`** retourne un objet décrivant la configuration d'une propriété spécifique sur un objet donné (c'est-à-dire une propriété directement présente sur un objet et non dans la chaîne de prototypes de l'objet). L'objet retourné est mutable, mais le modifier n'a aucun effet sur la configuration de la propriété originale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.getOwnPropertyDescriptor()")}}

```js interactive-example
const object = {
  foo: 42,
};

const descriptor = Object.getOwnPropertyDescriptor(object, "foo");

console.log(descriptor.configurable);
// Résultat attendu : true

console.log(descriptor.value);
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
Object.getOwnPropertyDescriptor(obj, prop)
```

### Paramètres

- `obj`
  - : L'objet sur lequel on cherche la propriété.
- `prop`
  - : Le nom ou le symbole ({{JSxRef("Symbol")}}) de la propriété dont on souhaite avoir la description.

### Valeur de retour

Un descripteur de propriété de la propriété souhaitée si elle existe pour l'objet en question, sinon {{JSxRef("undefined")}}.

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

```js
let o, d;

o = {
  get toto() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "toto");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   get: [Function: get toto],
//   set: undefined
// }

o = { truc: 42 };
d = Object.getOwnPropertyDescriptor(o, "truc");
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for("machin")]: 73 };
d = Object.getOwnPropertyDescriptor(o, Symbol.for("machin"));
console.log(d);
// {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {};
Object.defineProperty(o, "bidule", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "bidule");
console.log(d);
// {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

### Convertir les valeurs qui ne sont pas des objets

Dans ES5, si le premier argument de cette méthode n'est pas un objet (une valeur primitive), alors il provoque une {{JSxRef("TypeError")}}. Dans ES2015, un premier argument qui n'est pas un objet est d'abord converti en objet.

```js
Object.getOwnPropertyDescriptor("toto", 0);
// TypeError: "toto" n'est pas un objet  // code ES5

Object.getOwnPropertyDescriptor("toto", 0);
// Object retourné par le code ES2015 : {
//   configurable: false,
//   enumerable: true,
//   value: "f",
//   writable: false
// }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.defineProperty()")}}
- La méthode statique {{JSxRef("Reflect.getOwnPropertyDescriptor()")}}
