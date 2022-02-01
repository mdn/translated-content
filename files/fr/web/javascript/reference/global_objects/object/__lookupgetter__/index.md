---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/lookupGetter
---
{{JSRef}} {{deprecated_header}}

La méthode **`__lookupGetter__`** renvoie la fonction liée comme accesseur d'une propriété donnée.

## Syntaxe

    obj.__lookupGetter__(sprop)

### Paramètres

- `sprop`
  - : Une chaîne de caractères qui contient le nom de la propriété dont on souhaite obtenir l'accesseur (_getter_).

### Valeur de retour

La fonction qui est l'accesseur lié à la propriété indiquée.

## Description

Si un accesseur a été défini pour une propriété, il n'est pas possible d'obtenir la fonction utilisée en accédant à la propriété car on obtiendrait la valeur de retour de l'accesseur au lieu de l'accesseur lui-même. `__lookupGetter__` permet de récupérer la valeur de la fonction pour l'accesseur.

Cette méthode ne doit plus être utilisée et il est possible de la remplacer de façon standard en utilisant : {{jsxref("Object.getOwnPropertyDescriptor()")}} et {{jsxref("Object.getPrototypeOf()")}}.

## Exemples

```js
var obj = {
  get toto() {
    return Math.random() > 0.5 ? 'toto' : 'truc';
  }
};


// Méthode non-standard et dépréciée
obj.__lookupGetter__('toto');
// (function() { return Math.random() > 0.5 ? 'toto' : 'truc'; })


// Méthode standard
Object.getOwnPropertyDescriptor(obj, "toto").get;
// (function() { return Math.random() > 0.5 ? 'toto' : 'truc'; })
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
        {{SpecName('ESDraft', '#sec-object.prototype.__lookupGetter__', 'Object.prototype.__lookupGetter__()')}}
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

{{Compat("javascript.builtins.Object.lookupGetter")}}

## Voir aussi

- {{jsxref("Object.prototype.lookupSetter","Object.prototype.__lookupSetter__()")}}
- L'opérateur {{jsxref("Fonctions/get", "get")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}} et {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.prototype.defineGetter","Object.prototype.__defineGetter__()")}}
- {{jsxref("Object.prototype.defineSetter","Object.prototype.__defineSetter__()")}}
- [Guide JavaScript : Définir des _getters_ et _setters_](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters)
