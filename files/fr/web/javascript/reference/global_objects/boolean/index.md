---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - Constructeur
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
original_slug: Web/JavaScript/Reference/Objets_globaux/Boolean
---
{{JSRef}}

L'objet **`Boolean`** est un objet permettant de représenter une valeur booléenne.

## Syntaxe

    new Boolean([valeur])

## Paramètres

- `valeur`{{optional_inline}}
  - : Paramètre optionnel, la valeur initiale de l'objet `Boolean`.

## Description

La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne. Si la valeur est omise ou est `0`, `-0`, {{jsxref("null")}}, `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} ou une chaine de caractères vide (""), l'objet a un valeur initiale à `false` (faux). Si l'objet DOM {{domxref("document.all")}} est passé en argument, la valeur initiale sera également `false`. Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide (`[]`), ou une chaine de caractères `"false"`, créént un objet avec une valeur initiale à `true` (vrai).

Ne pas confondre les valeurs primitives booléennes `true` et `false` avec les valeurs _true_ et _false_ d'un objet Booléen.

Tout objet dont la valeur n'est ni  `undefined` ni `null`, incluant un objet Booléen dont la valeur est fausse, évalue à `true` lorsqu'il est à une instruction conditionnelle. Par exemple, la condition (voir {{jsxref("Instructions/if...else", "if")}}), dans le code suivant, est validée si l'expression est évaluée à `true` :

```js
var x = new Boolean("false");
if (x) {
  // . . . le code est exécuté
}

var y = new Boolean(false);
if (y) {
  // ce code est également exécuté
}
```

Ce comportement ne s'applique pas aux valeurs primitives booléennes. Par exemple, la condition, dans le code suivant, est évaluée à `false` :

```js
var x = false;
if (x) {
  // . . . le code n'est pas exécuté
}
```

Ne pas utiliser un objet `Boolean` pour convertir une valeur non-booléenne en une valeur booléenne. Utilisez plutot une fonction booléenne pour effectuer cette tâche :

```js
var x = Boolean(expression);     // conseillé
var y = new Boolean(expression); // à ne pas utiliser
```

Si vous spécifiez un objet quelconque, incluant un objet booléen qui a une valeur fausse, le nouvel objet `Boolean` a une valeur vraie.

```js
var myFalse = new Boolean(false);   // valeur initiale à false
var g = Boolean(myFalse);       // valeur initiale à true
var myString = new String("Hello"); // un object String
var s = Boolean(myString);      // valeur initiale à true
```

Ne pas utiliser un objet Booléen à la place d'une valeur primitive booléenne.

> **Note :** Lorsque la propriété historique, non-standard, [`document.all`](/fr/docs/Web/API/Document#Properties) est utilisée comme argument, le constructeur `Boolean` renvoie un objet booléen faux. Cette propriété étant non-standard, son utilisation est déconseillée.

## Propriétés

- `Boolean.length`
  - : Renvoie 1. Le nombre d'arguments pris en charge par le constructeur.
- {{jsxref("Boolean.prototype")}}
  - : Représente le prototype du constructeur `Boolean`.

## Méthodes

L'objet global `Boolean` ne contient pas ses propres méthodes, cependant, il hérite de certaines méthodes à travers la chaine de prototypes.

## Instances de `Boolean`

Toutes les `Boolean` héritent de {{jsxref("Boolean.prototype")}}. Comme avec tous les constructeurs, l'objet prototype dicte les propriétés et les méthodes héritées par les instances.

### Propriétés

{{page('fr/docs/JavaScript/Reference/Objets_globaux/Boolean/prototype','Propri.C3.A9t.C3.A9s')}}

### Méthodes

{{page('fr/docs/JavaScript/Reference/Objets_globaux/Boolean/prototype','M.C3.A9thodes')}}

## Exemples

### Création d'objets `Boolean` avec une valeur initiale à faux

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### Création d'objets `Boolean` avec une valeur initiale à vrai

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
var bSuLin = new Boolean("Su Lin");
```

## Spécifications

| Spécification                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.6', 'Boolean')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-boolean-objects', 'Boolean')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-boolean-objects', 'Boolean')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Boolean")}}

## Voir aussi

- {{jsxref("Boolean.prototype")}}
- [Les valeurs primitives en JavaScript](/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives)
- {{Glossary("Boolean","booléen")}}
- [Le type de données booléen (Wikipédia)](https://fr.wikipedia.org/wiki/Bool%C3%A9en)
