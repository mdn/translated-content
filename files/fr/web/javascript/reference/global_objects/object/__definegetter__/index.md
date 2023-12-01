---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
---

{{JSRef}}

> **Attention :** Cette fonctionnalité est dépréciée et il est préférable d'utiliser l'API {{jsxref("Object.defineProperty()")}} et [la syntaxe d'initialisation d'objets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet). Toutefois, `__defineGetter__` est largement utilisée sur le Web et est implémentée. Il est donc peu probable que les navigateurs retirent cette méthode.

La méthode **`__defineGetter__`** permet de lier une propriété d'un objet à une fonction à exécuter lorsqu'on accède à la propriété.

## Syntaxe

```js
obj.__defineGetter__(prop, func);
```

### Paramètres

- `prop`
  - : Une chaîne de caractères contenant le nom de la propriété à lier à la fonction donnée.
- `func`
  - : Une fonction à utiliser à chaque fois qu'on accède à la propriété.

### Valeur de retour

{{jsxref("undefined")}}.

## Description

La méthode `__defineGetter__` permet de définir un {{jsxref("Opérateurs/L_opérateur_get", "accesseur", "", 1)}} sur un objet pré-existant.

## Exemples

```js
// Méthode non-standard et dépréciée

var o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5

// Façon standard

// En utilisant l'opérateur get
var o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5

// En utilisant Object.defineProperty
var o = {};
Object.defineProperty(o, "gimmeFive", {
  get: function () {
    return 5;
  },
});
console.log(o.gimmeFive); // 5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Object.prototype.__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- L'opérateur {{jsxref("Opérateurs/L_opérateur_get", "get")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Guide JavaScript : définir des getters et setters](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters)
- [\[Billet de blog\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) (en anglais)
- [bug Firefox 647423](https://bugzil.la/647423)
