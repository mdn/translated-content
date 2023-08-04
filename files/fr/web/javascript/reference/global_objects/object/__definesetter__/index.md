---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
---

{{JSRef}}

> **Attention :** Cette fonctionnalité est dépréciée et il est préférable d'utiliser l'API {{jsxref("Object.defineProperty()")}} et [la syntaxe d'initialisation d'objets](/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet). Toutefois, `__defineGetter__` est largement utilisée sur le Web et est implémentée. Il est donc peu probable que les navigateurs retirent cette méthode.

La méthode **`__defineSetter__`** permet de lier une propriété d'un objet à une fonction qui sera exécutée pour toute tentative de définition/changement de cette propriété.

## Syntaxe

```js
obj.__defineSetter__(prop, fun);
```

### Paramètres

- `prop`
  - : Une chaîne de caractères qui contient le nom de la propriété qu'on souhaite lier à la fonction.
- `fun`

  - : Une fonction à appeler pour chaque modification de la propriété. Cette fonction prend la forme suivante :

    ```js
    function(val) { . . . }
    ```

    - `val`
      - : Un alias pour la variable contenant la nouvelle valeur qu'on souhaite affecter à `prop`.

### Valeur de retour

{{jsxref("undefined")}}.

## Description

La méthode `__defineSetter__` permet de définir un {{jsxref("Opérateurs/L_opérateur_set", "mutateur", "", 1)}} sur un objet pré-existant.

## Exemples

```js
// Méthode non-standard et dépréciée

var o = {};
o.__defineSetter__("valeur", function (val) {
  this.uneAutreValeur = val;
});
o.valeur = 5;
console.log(o.valeur); // undefined
console.log(o.uneAutreValeur); // 5

// Façons standard

// En utilisant l'opérateur set
var o = {
  set valeur(val) {
    this.uneAutreValeur = val;
  },
};
o.valeur = 5;
console.log(o.valeur); // undefined
console.log(o.uneAutreValeur); // 5

// En utilisant Object.defineProperty
var o = {};
Object.defineProperty(o, "valeur", {
  set: function (val) {
    this.uneAutreValeur = val;
  },
});
o.valeur = 5;
console.log(o.valeur); // undefined
console.log(o.uneAutreValeur); // 5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Object.prototype.__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- L'opérateur {{jsxref("Opérateurs/L_opérateur_set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Guide JavaScript : Définir des getters et setters](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters)
- [\[Billet de blog\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) (en anglais)
- [bug Firefox 647423](https://bugzil.la/647423)
