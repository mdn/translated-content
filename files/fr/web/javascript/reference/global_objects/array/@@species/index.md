---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
---

{{JSRef}}

La propriété d'accesseur **`Array[@@species]`** renvoie le constructeur `Array`.

## Syntaxe

```js
Array[Symbol.species];
```

### Valeur de retour

Le constructeur {{jsxref("Array")}}.

## Description

L'accesseur `species` renvoie le constructeur par défaut pour les objets `Array`. Les constructeurs des sous-classes peuvent le surcharger afin de modifier l'affectation du constructeur.

## Exemples

La propriété renvoie le constructeur par défaut, dans le cas des objets `Array`, c'est le constructeur `Array` :

```js
Array[Symbol.species]; // function Array()
```

Pour un objet dérivé, la valeur de `species` pour une classe `MonArray` sera le constructeur de cette classe. Vous pouvez surcharger ce comportement afin de renvoyer le constructeur `Array` :

```js
class MonArray extends Array {
  // On surcharge le symbole species
  // pour renvoyer le constructeur Array parent
  static get [Symbol.species]() {
    return Array;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
