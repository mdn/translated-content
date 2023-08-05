---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
---

{{JSRef}}

Le type **`Object`** est l'un [des types de données JavaScript](/fr/docs/Web/JavaScript/Data_structures). Il est utilisé pour stocker des ensembles de clés/valeurs et des entités plus complexes. Les objets peuvent être créés avec le constructeur [`Object()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/Object) ou avec [la syntaxe d'initialisation d'objet littérale](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Description

La quasi-totalité des objets en JavaScript sont des instances d'`Object`. En général, un objet hérite de propriétés (dont des méthodes) de `Object.prototype`, bien que ces propriétés puissent être surchargées. Il sera toutefois possible de créer un `Object` qui n'obéit pas à ces règles (par exemple en utilisant [`Object.create(null)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create) ou de modifier un objet après sa construction afin que ces hypothèses ne soient plus vérifiées (par exemple avec [`Object.setPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)).

Les modifications apportées à l'objet prototype de `Object` seront captées par **tous** les objets à travers le chaînage des prototypes, à moins que ces propriétés soient surchargées plus bas sur la chaîne des prototypes. C'est donc un moyen puissant mais également dangereux permettant de modifier le comportement des objets.

Le constructeur `Object` crée une enveloppe objet de la valeur passée en argument.

- Si la valeur est [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), il créera et renverra un objet vide.
- Si la valeur est déjà un objet, il renverra la valeur.
- Sinon, il renverra un objet dont le type objet correspond au type primitif de la valeur fournie.

Lorsqu'il n'est pas appelé dans un contexte constructeur (c'est-à-dire sans le mot-clé `new`), `Object` se comporte de façon identique à `new Object()`.

Voir aussi [initialisateur d'objet / syntaxe de littéral](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer).

### Supprimer une propriété d'un objet

Il n'existe pas de méthode pour `Object` qui permette de supprimer une propriété propre (à l'instar de [`Map.prototype.delete()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)). Pour ce faire, il faut utiliser [l'opérateur `delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete).

## Constructeur

- [`Object()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)
  - : Crée un nouvel objet `Object` à partir de la valeur fournie.

## Méthodes du constructeur `Object`

- [`Object.assign()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  - : Copie les valeurs de toutes les propriétés propres énumérables depuis un ou plusieurs objets source dans un objet cible.
- [`Object.create()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  - : Crée un nouvel objet avec le prototype d'objet et les propriétés indiqués.
- [`Object.defineProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
  - : Ajoute à un objet la propriété nommée décrite par le descripteur donné.
- [`Object.defineProperties()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
  - : Ajoute à un objet les propriétés nommées décrites par les descripteurs donnés.
- [`Object.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
  - : Retourne un tableau contenant les paires `[clé, valeur]` des propriétés énumérables propres (c'est-à-dire directement rattachées à l'objet) de l'objet donné et dont les clés sont des chaînes de caractères.
- [`Object.freeze()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
  - : Gèle un objet&nbsp;: un autre code ne peut ni détruire ni changer aucune propriété.
- [`Object.fromEntries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
  - : Renvoie un nouvel objet à partir d'un itérable contenant des paires de clés-valeurs (l'opération duale de [`Object.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)).
- [`Object.getOwnPropertyDescriptor()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
  - : Retourne un descripteur de propriété pour une propriété nommée d'un objet.
- [`Object.getOwnPropertyDescriptors()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
  - : Retourne un objet contenant tous les descripteurs des propriétés propres d'un objet.
- [`Object.getOwnPropertyNames()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
  - : Retourne un tableau contenant les noms de toutes les propriétés énumérables et non énumérables **propres** de l'objet donné.
- [`Object.getOwnPropertySymbols()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
  - : Retourne un tableau de toutes les propriétés symboles trouvées directement dans un objet donné.
- [`Object.getPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - : Retourne le prototype de l'objet indiqué.
- [`Object.is()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
  - : Détermine si deux valeurs sont la même valeur. Considère comme égales toutes les valeurs NaN (ce qui diffère à la fois de la _comparaison d'égalité abstraite_ et de la _comparaison d'égalité stricte_).
- [`Object.isExtensible()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)
  - : Détermine si l'extension d'un objet est permise.
- [`Object.isFrozen()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)
  - : Détermine si un objet a été gelé.
- [`Object.isSealed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)
  - : Détermine si un objet est scellé.
- [`Object.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
  - : Retourne un tableau contenant les noms de toutes les propriétés énumérables **propres** de l'objet donné.
- [`Object.preventExtensions()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)
  - : Empêche toute extension de l'objet.
- [`Object.seal()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)
  - : Empêche un autre code de détruire les propriétés d'un objet.
- [`Object.setPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
  - : Définit le prototype d'un objet (c'est-à-dire, la propriété interne `[[Prototype]]`).
- [`Object.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
  - : Retourne le tableau des valeurs énumérables propres de l'objet donné dont les clés sont des chaînes de caractères.

## Propriétés des instances

- [`Object.prototype.constructor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
  - : Définit la fonction qui crée le prototype d'un objet.
- [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
  - : Pointe vers l'objet ayant été utilisé comme prototype à l'instanciation de l'objet.

## Méthodes des instances

- [`Object.prototype.__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
  - : Associe une fonction à une propriété, lorsqu'on accède à cette dernière, la fonction est exécutée et la valeur de retour est renvoyée.
- [`Object.prototype.__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
  - : Associe une fonction à une propriété, lorsqu'on modifie cette dernière, la fonction est exécutée pour modifier la propriété.
- [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
  - : Renvoie la fonction qui a été associée à la propriété indiquée avec la méthode [`__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__).
- [`Object.prototype.__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
  - : Renvoie la fonction qui a été associée à la propriété indiquée avec la méthode [`__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__).
- [`Object.prototype.hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
  - : Renvoie un booléen indiquant si un objet contient la propriété indiquée comme une propriété propre (directement rattachée à l'objet, pas héritée avec sa chaîne de prototypes).
- [`Object.prototype.isPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)
  - : Renvoie un booléen indiquant si l'objet courant (pour lequel est appelé cette méthode) fait partie de la chaîne de prototypes de l'objet passé en argument.
- [`Object.prototype.propertyIsEnumerable()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
  - : Renvoie un booléen indiquant si [l'attribut interne ECMAScript `[[Enumerable]]`](/fr/docs/Web/JavaScript/Data_structures#propriétés) est fixé.
- [`Object.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)
  - : Appelle la méthode [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
  - : Renvoie une chaîne de caractères qui représente l'objet.
- [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
  - : Renvoie la valeur primitive de l'objet indiqué.

## Exemples

### Utilisation d'`Object` avec les types `undefined` et `null`

Les exemples suivants stockent un `Object` vide dans `o`&nbsp;:

```js
let o = new Object();
```

```js
let o = new Object(undefined);
```

```js
let o = new Object(null);
```

### Utilisation d'`Object` pour créer des objets `Boolean`

Les exemples suivants stockent des objets [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) dans `o`&nbsp;:

```js
// Équivalent à : o = new Boolean(true);
let o = new Object(true);
```

```js
// Équivalent à : o = new Boolean(false);
let o = new Object(Boolean());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)
