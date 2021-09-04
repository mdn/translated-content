---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
  - isPrototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/isPrototypeOf
---
{{JSRef}}

La méthode **`isPrototypeOf()`** permet de tester si un objet existe dans la chaîne de prototypes d'un autre objet.

{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}

> **Note :** `isPrototypeOf()` est différent de l'opérateur {{jsxref("Opérateurs/instanceof", "instanceof")}}. Dans l'expression "`object instanceof AFunction`", on compare la chaîne de prototypes d'`object` avec `AFunction.prototype` et non avec `AFunction`.

## Syntaxe

    prototypeObj.isPrototypeOf(objet)

### Paramètres

- `objet`
  - : L'objet dont la chaîne de prototypes sera parcourue.

### Valeur de retour

Un {{jsxref("Boolean")}} indiquant si l'objet appelant se trouve dans sa chaîne de prototypes de l'objet indiqué.

### Erreurs déclenchées

- {{jsxref("TypeError")}}
  - : Une exception {{jsxref("TypeError")}} est déclenchée si `prototypeObj` est `undefined` ou `null`.

## Description

La méthode isPrototypeOf () vous permet de vérifier si un objet existe ou non dans la chaîne de prototypes d'un autre objet.

## Exemples

Cet exemple montre que `Bidule.prototype`, `Truc.prototype`, `Machin.prototype` et `Object.prototype` font bien partie de la chaîne de prototype pour l'objet `bidule` :

```js
function Machin() {}
function Truc() {}
function Bidule() {}

Truc.prototype = Object.create(Machin.prototype);
Bidule.prototype = Object.create(Truc.prototype);

var bidule = new Bidule();

console.log(Bidule.prototype.isPrototypeOf(bidule)); // true
console.log(Truc.prototype.isPrototypeOf(bidule)); // true
console.log(Machin.prototype.isPrototypeOf(bidule)); // true
console.log(Object.prototype.isPrototypeOf(bidule)); // true
```

La méthode `isPrototypeOf()`, avec l'opérateur {{jsxref("Operators/instanceof", "instanceof")}} en particulier, s'avère particulièrement utile si vous avez du code qui ne peut fonctionner que lorsqu'il traite des objets descendant d'une chaîne de prototypes donnée, par ex., pour garantir que certaines méthodes ou propriétés seront présentes dans cet objet.

Par exemple, vérifier que `bidule` descend bien de `Machin.prototype` :

```js
if (Toto.prototype.isPrototypeOf(bidule)) {
  // effectuer quelque chose de sûr
}
```

## Spécifications

| Spécification                                                                                                                        | Statut                       | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}                                     | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.isPrototypeOf")}}

## Voir aussi

- {{jsxref("Opérateurs/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.prototype.proto","Object.prototype.__proto__")}}
