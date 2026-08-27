---
title: "Object : méthode __defineSetter__()"
short-title: __defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Cette fonctionnalité est obsolète et il est préférable d'utiliser les [accesseurs](/fr/docs/Web/JavaScript/Reference/Functions/get) en utilisant la [syntaxe d'initialisation d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer) ou l'API {{JSxRef("Object.defineProperty()")}}. Le comportement de cette méthode n'est défini que pour la compatibilité web et n'est pas obligatoire à implémenter sur toutes les plateformes. Elle peut ne pas fonctionner partout.

La méthode **`__defineSetter__()`** des instances de {{JSxRef("Object")}} lie une propriété d'objet à une fonction qui est appelée lorsqu'une tentative est faite pour définir cette propriété.

## Syntaxe

```js-nolint
__defineSetter__(prop, func)
```

### Paramètres

- `prop`
  - : Une chaîne de caractères contenant le nom de la propriété à laquelle le mutateur `func` est lié.
- `func`
  - : Une fonction à appeler lorsqu'une tentative est faite pour définir la propriété définie. Cette fonction reçoit le paramètre suivant&nbsp;:
    - `val`
      - : La valeur qu'on tente d'affecter à `prop`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `func` n'est pas une fonction.

## Description

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `__defineSetter__()`. Cette méthode permet de définir un [mutateur](/fr/docs/Web/JavaScript/Reference/Functions/set) sur un objet préexistant. Cela équivaut à [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), ce qui signifie que la propriété est énumérable et configurable, et que tout accesseur existant, le cas échéant, est conservé.

`__defineSetter__()` est défini dans la spécification comme «&nbsp;normative optional&nbsp;», ce qui signifie qu'aucune implémentation n'est requise pour la mettre en œuvre. Cependant, tous les principaux navigateurs l'implémentent, et en raison de son utilisation continue, il est peu probable qu'elle soit supprimée. Si un navigateur implémente `__defineSetter__()`, il doit également implémenter les méthodes [`__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), et [`__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__).

## Exemples

### Utiliser `__defineSetter__()`

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Définir un mutateur de propriété de manière standard

Vous pouvez utiliser la syntaxe `set` pour définir un mutateur lorsque l'objet est initialisé pour la première fois.

```js
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

Vous pouvez également utiliser {{JSxRef("Object.defineProperty()")}} pour définir un mutateur sur un objet après sa création. Comparé à `__defineSetter__()`, cette méthode permet de contrôler l'énumérabilité et la capacité de configuration du mutateur, ainsi que de définir des propriétés [de symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol). La méthode `Object.defineProperty()` fonctionne également avec des [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null), qui n'héritent pas de `Object.prototype` et n'ont donc pas la méthode `__defineSetter__()`.

```js
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Object.prototype.__defineSetter__` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- La méthode [`Object.prototype.__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- L'opérateur {{JSxRef("Functions/set", "set")}}
- La méthode {{JSxRef("Object.defineProperty()")}}
- La méthode [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- La méthode [`Object.prototype.__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Guide JavaScript&nbsp;: Définir des accesseurs et mutateurs](/fr/docs/Web/JavaScript/Guide/Working_with_objects#définir_des_accesseurs_et_des_mutateurs_getters_et_setters)
- [Bogue Firefox 647423 <sup>(angl.)</sup>](https://bugzil.la/647423)
