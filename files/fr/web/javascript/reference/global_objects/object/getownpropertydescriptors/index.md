---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

La méthode **`Object.getOwnPropertyDescriptors()`** renvoie l'ensemble des descripteurs des propriétés propres d'un objet donné.

{{InteractiveExample}}

```js interactive-example
const object1 = {
  property1: 42,
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
// Expected output: true

console.log(descriptors1.property1.value);
// Expected output: 42

```

## Syntaxe

```js
Object.getOwnPropertyDescriptors(obj);
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite connaître les descripteurs des propriétés.

### Valeur de retour

Un objet qui contient tous les descripteurs des propriétés propres de l'objet passé en paramètre. S'il n'y aucune propriété, cela sera un objet vide.

## Description

Cette méthode permet d'examiner de façon précise les différentes propriétés directement rattachées à un objet. Une propriété JavaScript se définit par un nom (une chaîne de caractères) ou un symbole ({{jsxref("Symbol")}}) et un descripteur. Vous pouvez trouver de plus amples informations sur les types de descripteurs et sur leurs attributs sur la page de {{jsxref("Object.defineProperty()")}}.

Un descripteur de propriété est un enregistrement qui possède les attributs suivants :

- `value`
  - : La valeur associée à la propriété (uniquement pour les descripteurs de données).
- **`writable`**
  - : `true` si et seulement si la valeur associée à la propriété peut être changée (uniquement pour les descripteurs de données).
- `get`
  - : Une fonction qui est utilisée comme accesseur pour la propriété ou {{jsxref("undefined")}} s'il n'existe pas de tel accesseur (uniquement pour les descripteurs d'accesseur/mutateur).
- `set`
  - : Une fonction qui est utilisée comme mutateur pour la propriété ou {{jsxref("undefined")}} s'il n'existe pas de tel mutateur (uniquement pour les descripteurs d'accesseur/mutateur).
- `configurable`
  - : `true` si et seulement si le type de descripteur peut être changé et si la propriété peut être supprimée de l'objet correspondant.
- `enumerable`
  - : `true` si et seulement si cette propriété est listée lorsqu'on énumère les propriétés de l'objet correspondant.

## Exemples

### Créer un clone

La méthode {{jsxref("Object.assign()")}} ne copiera que les propriétés propres et énumérables d'un objet source vers un objet cible. On peut donc utiliser cette méthode avec {{jsxref("Object.create()")}} afin de réaliser une copie « plate » entre deux objets inconnus :

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Créer une sous-classe

Pour créer une sous-classe, généralement, on définit la sous-classe et on définit son prototype comme étant une instance de la classe parente. Enfin on définit les propriétés de cette nouvelle sous-classe.

```js
function superclass() {}
superclass.prototype = {
  // on définit les méthodes et propriétés
  // de la classe parente
};

function subclass() {}
subclass.prototype = Object.create(
  superclass.prototype,
  Object.getOwnPropertyDescriptors({
    // on définit les méthodes et propriétés
    // de la sous-classe
  }),
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Prothèse d'émulation (_polyfill_)](https://github.com/tc39/proposal-object-getownpropertydescriptors)
