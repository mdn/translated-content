---
title: 'TypeError: can''t delete non-configurable array element'
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
tags:
  - Erreur
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Non_configurable_array_element
original_slug: Web/JavaScript/Reference/Erreurs/Non_configurable_array_element
---
{{jsSidebar("Errors")}}

## Message

    TypeError: can't delete non-configurable array element (Firefox)
    TypeError: Cannot delete property '2' of [object Array] (Chrome)

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

On a voulu [raccourcir la longueur d'un tableau](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/length#Tronquer_un_tableau) mais l'un des éléments de ce tableau est [non-configurable](/fr/docs/Web/JavaScript/Structures_de_données#Propriétés). Lorsqu'on tronque un tableau, les éléments situés au-delà de la nouvelle longueur seront supprimés. Dans ce cas, c'est cette suppression qui n'a pas pu être effectuée.

L'attribut `configurable` permet de contrôler si la propriété peut être supprimée d'un objet et si ses attributs (en dehors de `writable`) peuvent être modifiés.

La plupart du temps, les propriétés d'un objet créé avec [un littéral de tableau](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Syntaxe) sont configurables. Toutefois, si on utilise {{jsxref("Object.defineProperty()")}} par exemple, la propriété n'est pas configurable par défaut.

## Exemples

### Propriétés non-configurables créées avec  `Object.defineProperty`

Par défaut, la méthode {{jsxref("Object.defineProperty()")}} crée des propriétés non-configurables si on n'indique pas expressément le contraire :

```js example-bad
var arr = [];
Object.defineProperty(arr, 0, {value: 0});
Object.defineProperty(arr, 1, {value: "1"});

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Si on veut tronquer le tableau, il faut que les éléments excédants soient configurables :

```js example-good
var arr = [];
Object.defineProperty(arr, 0, {value: 0, configurable: true});
Object.defineProperty(arr, 1, {value: "1", configurable: true});

arr.length = 1;
```

### Tableaux scellés (`seal`)

La méthode {{jsxref("Object.seal()")}} permet de marquer l'ensemble des propriétés (ici les éléments du tableau) comme non-configurables :

```js example-bad
var arr = [1,2,3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Pour corriger l'erreur, il faut retirer l'appel à {{jsxref("Object.seal()")}} ou réaliser une copie du tableau. Dans ce dernier cas, on notera que tronquer la copie du tableau ne modifie pas la longueur du tableau original.

```js example-good
var arr = [1,2,3];
Object.seal(arr);

// On copie le tableau initial pour tronquer cette copie
var copie = Array.from(arr);
copie.length = 1;
// arr.length == 3
```

## Voir aussi

- [La propriété interne `[[Configurable]]`](/fr/docs/Web/JavaScript/Structures_de_données#Propriétés)
- {{jsxref("Array.length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
