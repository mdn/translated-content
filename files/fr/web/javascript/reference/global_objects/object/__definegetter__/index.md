---
title: "Object : méthode __defineGetter__()"
short-title: __defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Cette fonctionnalité est obsolète et il est préférable d'utiliser les [accesseurs](/fr/docs/Web/JavaScript/Reference/Functions/get) en utilisant la [syntaxe d'initialisation d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer) ou l'API {{JSxRef("Object.defineProperty()")}}. Le comportement de cette méthode n'est défini que pour la compatibilité web et n'est pas obligatoire à implémenter sur toutes les plateformes. Elle peut ne pas fonctionner partout.

La méthode **`__defineGetter__()`** des instances de {{JSxRef("Object")}} lie une propriété d'objet à une fonction qui est appelée lorsque cette propriété est consultée.

## Syntaxe

```js-nolint
__defineGetter__(prop, func)
```

### Paramètres

- `prop`
  - : Une chaîne de caractères contenant le nom de la propriété à laquelle l'accesseur `func` est lié.
- `func`
  - : Une fonction à lier à une consultation de la propriété définie.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `func` n'est pas une fonction.

## Description

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `__defineGetter__()`. Cette méthode permet de définir un [accesseur](/fr/docs/Web/JavaScript/Reference/Functions/get) sur un objet préexistant. Cela équivaut à [`Object.defineProperty(obj, prop, { get: func, configurable: true, enumerable: true })`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), ce qui signifie que la propriété est énumérable et configurable, et que tout mutateur existant, le cas échéant, est conservé.

`__defineGetter__()` est défini dans la spécification comme «&nbsp;normative optional&nbsp;», ce qui signifie qu'aucune implémentation n'est requise pour la mettre en œuvre. Cependant, tous les principaux navigateurs l'implémentent, et en raison de son utilisation continue, il est peu probable qu'elle soit supprimée. Si un navigateur implémente `__defineGetter__()`, il doit également implémenter les méthodes [`__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), et [`__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__).

## Exemples

### Utiliser `__defineGetter__()`

```js
const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5
```

### Définir un accesseur de propriété de manière standard

Vous pouvez utiliser la syntaxe `get` pour définir un accesseur lorsque l'objet est initialisé pour la première fois.

```js
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5
```

Vous pouvez également utiliser {{JSxRef("Object.defineProperty()")}} pour définir un accesseur sur un objet après sa création. Comparé à `__defineGetter__()`, cette méthode permet de contrôler l'énumérabilité et la capacité de configuration de l'accesseur, ainsi que de définir des propriétés [de symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol). La méthode `Object.defineProperty()` fonctionne également avec des [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null), qui n'héritent pas de `Object.prototype` et n'ont donc pas la méthode `__defineGetter__()`.

```js
const o = {};
Object.defineProperty(o, "gimmeFive", {
  get() {
    return 5;
  },
  configurable: true,
  enumerable: true,
});
console.log(o.gimmeFive); // 5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.prototype.__defineGetter__` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- La méthode [`Object.prototype.__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- L'opérateur {{JSxRef("Functions/get", "get")}}
- La méthode {{JSxRef("Object.defineProperty()")}}
- La méthode [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- La méthode [`Object.prototype.__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Guide JavaScript&nbsp;: Définir des accesseurs et mutateurs](/fr/docs/Web/JavaScript/Guide/Working_with_objects#définir_des_accesseurs_et_des_mutateurs_getters_et_setters)
- [Bogue Firefox 647423 <sup>(angl.)</sup>](https://bugzil.la/647423)
