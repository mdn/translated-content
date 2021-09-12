---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/lookupSetter
---
{{JSRef}}{{deprecated_header}}

La méthode **`__lookupSetter__`** renvoie la fonction définie comme mutateur pour une propriété donnée.

## Syntaxe

    obj.__lookupSetter__(sprop)

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
  }
};


// Méthode non-standard et dépréciée
obj.__lookupSetter__('toto')
// (function(valeur) { this.truc = valeur; })


// Méthode standard
Object.getOwnPropertyDescriptor(obj, "toto").set;
// (function(valeur) { this.truc = valeur; })
```

## Spécifications

<table class="spectable standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
    <tr>
      <td>
        {{SpecName('ESDraft', '#sec-object.prototype.__lookupSetter__', 'Object.prototype.__lookupSetter__()')}}
      </td>
      <td>{{Spec2('ESDraft')}}</td>
      <td>
        Incluse dans l'annexe normative pour les fonctionnalités historiques
        liées aux navigateurs web (la spécification codifie ce qui est déjà
        présent dans les différentes implémentations).
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.lookupSetter")}}

## Voir aussi

- {{jsxref("Object.prototype.lookupGetter","Object.prototype.__lookupGetter__()")}}
- L'opérateur {{jsxref("Fonctions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}} et {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.prototype.defineGetter","Object.prototype.__defineGetter__()")}}
- {{jsxref("Object.prototype.defineSetter","Object.prototype.__defineSetter__()")}}
- [Guide JavaScript : Utiliser des _getters_ et _setters_](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters)
