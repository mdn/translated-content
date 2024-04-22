---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
---

{{JSRef}}{{deprecated_header}}

La méthode **`__lookupSetter__`** renvoie la fonction définie comme mutateur pour une propriété donnée.

## Syntaxe

```js
obj.__lookupSetter__(sprop);
```

### Paramètres

- `sprop`
  - : Une chaîne qui contient le nom de la propriété dont on souhaite obtenir le mutateur correspondant.

### Valeur de retour

La fonction associée comme mutateur à la propriété indiquée.

## Description

Si un mutateur a été défini pour une propriété, on ne peut pas l'obtenir en faisant référence à la propriété directement. `__lookupSetter__` peut être utilisée pour obtenir une référence vers la fonction utilisée comme mutateur.

Cette méthode ne doit plus être utilisée et peut être remplacée avec la méthodes standard {{jsxref("Object.getOwnPropertyDescriptor()")}}.

## Exemples

```js
var obj = {
  set toto(valeur) {
    this.truc = value;
  },
};

// Méthode non-standard et dépréciée
obj.__lookupSetter__("toto");
// (function(valeur) { this.truc = valeur; })

// Méthode standard
Object.getOwnPropertyDescriptor(obj, "toto").set;
// (function(valeur) { this.truc = valeur; })
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- L'opérateur {{jsxref("Fonctions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}} et {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Guide JavaScript : Utiliser des _getters_ et _setters_](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters)
