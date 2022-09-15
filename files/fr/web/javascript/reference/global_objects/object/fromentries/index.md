---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
tags:
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/fromEntries
---
{{JSRef}}

La méthode **`Object.fromEntries()`** permet de transformer une liste de paires de clés/valeurs en un objet.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Syntaxe

```js
Object.fromEntries(iterable);
```

### Paramètres

- `iterable`
  - : Un itérable tel qu'un tableau ({{jsxref("Array")}}) ou une {{jsxref("Map")}} ou tout autre objet qui implémente [le protocole itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»).

### Valeur de retour

Un nouvel objet dont les propriétés sont fournies par les éléments de l'itérable.

## Description

La méthode `Object.fromEntries()` prend comme argument une liste de paires de clés-valeurs et renvoie un nouvel objet dont les propriétés sont fournies par ces clés-valeurs. L'argument `iterable` doit implémenter une méthode `@@iterator` qui renvoie un itérateur produisant un objet semblable à un tableau avec deux éléments ; le premier élément est une valeur qui sera utilisée comme clé de la propriété et le second élément sera utilisé comme valeur associée à cette clé.

`Object.fromEntries()` est la fonction inverse de {{jsxref("Object.entries()")}}.

## Exemples

### Convertir une `Map` en un `Object`

Grâce à `Object.fromEntries`, on peut convertir des objets {{jsxref("Map")}} en {{jsxref("Object")}} :

```js
const map = new Map([ ['toto', 'truc'], ['machin', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { toto: "truc", machin: 42 }
```

### Convertir un `Array` en un `Object`

Grâce à `Object.fromEntries`, on peut convertir des objets {{jsxref("Array")}} en {{jsxref("Object")}} :

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Transformer des objets

Avec `Object.fromEntries` et la méthode réciproque {{jsxref("Object.entries()")}}, et [les méthodes de manipulation de tableaux](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Méthodes), on peut transformer des objets :

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires                     |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-object.fromentries', 'Object.fromEntries')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2019. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.fromEntries")}}

## Voir aussi

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
