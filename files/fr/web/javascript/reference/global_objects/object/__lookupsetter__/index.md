---
title: "Object : méthode __lookupSetter__()"
short-title: __lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Cette fonctionnalité est obsolète en faveur de l'API {{JSxRef("Object.getOwnPropertyDescriptor()")}}. Le comportement de cette méthode n'est défini que pour la compatibilité web, et il n'est pas obligatoire de l'implémenter sur toutes les plateformes. Elle peut ne pas fonctionner partout.

La méthode **`__lookupSetter__()`** des instances de {{jsxref("Object")}} retourne la fonction liée en tant que mutateur pour une propriété définie.

## Syntaxe

```js-nolint
__lookupSetter__(prop)
```

### Paramètres

- `prop`
  - : Une chaîne de caractères contenant le nom de la propriété dont on souhaite obtenir le mutateur correspondant.

### Valeur de retour

La fonction liée en tant que mutateur à la propriété définie. Retourne `undefined` si aucune propriété de ce type n'est trouvée, ou si la propriété est une [propriété de données](/fr/docs/Web/JavaScript/Guide/Data_structures#propriétés_de_données).

## Description

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `__lookupSetter__()`. Si un [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/get) a été défini pour une propriété d'un objet, il n'est pas possible de référencer la fonction du mutateur avec cette propriété, car cette propriété appelle uniquement la fonction lorsqu'elle est définie. `__lookupSetter__()` peut être utilisé pour obtenir une référence à la fonction du mutateur.

`__lookupSetter__()` parcourt la [chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) pour trouver la propriété définie. Si un objet le long de la chaîne de prototypes possède sa [propre propriété](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) définie, l'attribut `set` du [descripteur de propriété](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) pour cette propriété est retourné. Si cette propriété est une propriété de données, `undefined` est retourné. Si la propriété n'est pas trouvée le long de toute la chaîne de prototypes, `undefined` est également retourné.

`__lookupSetter__()` est défini dans la spécification comme «&nbsp;normative optional&nbsp;», ce qui signifie qu'aucune implémentation n'est requise pour la mettre en œuvre. Cependant, tous les principaux navigateurs l'implémentent, et en raison de son utilisation continue, il est peu probable qu'elle soit supprimée. Si un navigateur implémente `__lookupSetter__()`, il doit également implémenter les méthodes [`__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), et [`__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__).

## Exemples

### Utiliser `__lookupSetter__()`

```js
const obj = {
  set toto(valeur) {
    this.truc = valeur;
  },
};

obj.__lookupSetter__("toto");
// [Function: set toto]
```

### Rechercher le mutateur d'une propriété de manière standard

Vous devez utiliser l'API {{jsxref("Object.getOwnPropertyDescriptor()")}} pour rechercher le mutateur d'une propriété. Contrairement à `__lookupSetter__()`, cette méthode permet de rechercher des propriétés de type [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol). La méthode `Object.getOwnPropertyDescriptor()` fonctionne également avec les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null), qui n'héritent pas de `Object.prototype` et ne disposent donc pas de la méthode `__lookupSetter__()`. Si le comportement de `__lookupSetter__()` consistant à parcourir la chaîne de prototypes est important, vous pouvez l'implémenter vous-même avec {{jsxref("Object.getPrototypeOf()")}}.

```js
const obj = {
  set toto(valeur) {
    this.truc = valeur;
  },
};

Object.getOwnPropertyDescriptor(obj, "toto").set;
// [Function: set toto]
```

```js
const obj2 = {
  __proto__: {
    set toto(valeur) {
      this.truc = valeur;
    },
  },
};

function trouverMutateur(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.set;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(trouverMutateur(obj2, "toto")); // [Function: set toto]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.prototype.__lookupSetter__` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- La méthode [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- L'opérateur {{JSxRef("Functions/set", "set")}}
- La méthode {{JSxRef("Object.getOwnPropertyDescriptor()")}}
- La méthode [`Object.prototype.__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- La méthode [`Object.prototype.__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Guide JavaScript&nbsp;: Définir des accesseurs et mutateurs](/fr/docs/Web/JavaScript/Guide/Working_with_objects#définir_des_accesseurs_et_des_mutateurs_getters_et_setters)
