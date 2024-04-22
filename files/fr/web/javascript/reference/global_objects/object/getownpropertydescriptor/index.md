---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
---

{{JSRef}}

La méthode **`Object.getOwnPropertyDescriptor()`** renvoie un descripteur de la propriété propre d'un objet (c'est-à-dire une propriété directement présente et pas héritée via la chaîne de prototypes).

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptor.html")}}

## Syntaxe

```js
Object.getOwnPropertyDescriptor(obj, prop);
```

### Paramètres

- `obj`
  - : L'objet sur lequel on cherche la propriété.
- `prop`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété dont on souhaite avoir la description.

### Valeur de retour

Un descripteur de propriété de la propriété souhaitée si elle existe pour l'objet en question, sinon {{jsxref("undefined")}}.

## Description

Cette méthode permet d'avoir des informations précises sur une propriété. Une propriété JavaScript est un nom (qui est une chaîne de caractères) ou un symbole ({{jsxref("Symbol")}}) associé à un descripteur. Voir la page {{jsxref("Object.defineProperty")}} pour plus d'informations sur les descripteurs de propriétés.

Un descripteur de propriété est un enregistrement qui dispose des attributs suivants :

- **`value`**
  - : La valeur associée à la propriété (pour les descripteurs de données uniquement).
- **`writable`**
  - : `true` si et seulement si la valeur associée à la propriété peut être changée (pour les descripteurs de données uniquement).
- **`get`**
  - : Une fonction qui joue le rôle d'accesseur (_getter_) pour la propriété ou {{jsxref("undefined")}} s'il n'y a pas d'accesseur (pour les descripteurs d'accesseurs uniquement).
- **`set`**
  - : Une fonction qui joue le rôle de mutateur (_setter_) pour la propriété ou `undefined` s'il n'y a pas de tel mutateur (pour les descripteurs d'accesseurs uniquement).
- **`configurable`**
  - : `true` si et seulement si le type du descripteur peut être changé et si la propriété peut être supprimée de l'objet.
- **`enumerable`**
  - : `true` si et seulement si la propriété doit apparaître lors d'une énumération des propriétés de l'objet.

## Exemples

```js
var o, d;

o = {
  get toto() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "toto");
// d : {
//       configurable: true,
//       enumerable: true,
//       get: /*l'accesseur*/,
//       set: undefined
//    }

o = { truc: 42 };
d = Object.getOwnPropertyDescriptor(o, "truc");
// d : {
//        configurable: true,
//        enumerable: true,
//        value: 42,
//        writable: true
//      }

o = {};
Object.defineProperty(o, "machin", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "machin");
// d : {
//        value: 8675309,
//        writable: false,
//        enumerable: false,
//        configurable: false
//      }
```

## Notes

Pour ES5, si le premier argument de la méthode n'est pas un objet (mais une valeur d'un autre type), une exception {{jsxref("TypeError")}} sera levée. Pour ES2015, un argument non-objet sera d'abord converti en objet avant d'appliquer la méthode.

```js
Object.getOwnPropertyDescriptor("toto", 0);
// TypeError: "toto" n'est pas un objet  // code ES5

// code ES2015
Object.getOwnPropertyDescriptor("toto", 0);
// {
//    configurable:false,
//    enumerable:true,
//    value:"f",
//    writable:false
// }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
