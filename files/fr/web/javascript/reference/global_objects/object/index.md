---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Constructeur
  - JavaScript
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object
original_slug: Web/JavaScript/Reference/Objets_globaux/Object
---
{{JSRef}}

Le constructeur **`Object`** crée un wrapper d'objet.

## Syntaxe

    // Initialisateur d'objet ou littéral { [ paireNomValeur1[, paireNomValeur2[,
     ...paireNomValeurN] ] ] }

    // Appelé comme un constructeur
    new Object([valeur])

### Paramètres

- `paireNomValeur1, paireNomValeur2, ... paireNomValeurN`
  - : Paires de noms (chaînes) et de valeurs (toutes valeurs) où le nom est séparé de la valeur par deux points (:).
- `valeur`
  - : Toute valeur.

## Description

Le constructeur `Object` crée un wrapper d'objet pour la valeur donnée. Si la valeur est {{jsxref("null")}} ou {{jsxref("undefined")}}, il créera et retournera un objet vide, sinon, il retournera un objet du Type qui correspond à la valeur donnée. Si la valeur est déjà un objet, le constructeur retournera cette valeur.

Lorsqu'il n'est pas appelé dans un contexte constructeur, `Object` se comporte de façon identique à `new Object()`.

Voir aussi [initialisateur d'objet / syntaxe de littéral](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Initialisateur_objet).

## Propriétés du constructeur `Object`

- `Object.length`
  - : A une valeur de 1.
- {{jsxref("Object.prototype")}}
  - : Permet l'ajout de propriétés à tous les objets de type Object.

## Méthodes du constructeur `Object`

- {{jsxref("Object.assign()")}}
  - : Copie les valeurs de toutes propriétés propres énumérables depuis un ou plusieurs objets source dans un objet cible.
- {{jsxref("Object.create()")}}
  - : Crée un nouvel objet avec le prototype d'objet et les propriétés indiqués.
- {{jsxref("Object.defineProperty()")}}
  - : Ajoute à un objet la propriété nommée décrite par le descripteur donné.
- {{jsxref("Object.defineProperties()")}}
  - : Ajoute à un objet les propriétés nommées décrites par les descripteurs donnés.
- {{jsxref("Object.entries()")}}
  - : Retourne un tableau contenant les paires `[clé, valeur]` des propriétés énumérables propres (c'est-à-dire directement rattachées à l'objet) de l'objet donné et dont les clés sont des chaînes de caractères.
- {{jsxref("Object.freeze()")}}
  - : Gèle un objet : un autre code ne peut ni détruire ni changer aucune propriété.
- {{jsxref("Object.fromEntries()")}}
  - : Renvoie un nouvel objet à partir d'un itérable contenant des paires de clés-valeurs (l'opération duale de {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Retourne un descripteur de propriété pour une propriété nommée d'un objet.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Retourne un objet contenant tous les descripteurs des propriétés propres d'un objet.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Retourne un tableau contenant les noms de toutes les propriétés énumérables et non énumérables **propres** de l'objet donné.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Retourne un tableau de toutes les propriétés symboles trouvées directement dans un objet donné.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Retourne le prototype de l'objet indiqué.
- {{jsxref("Object.is()")}}
  - : Détermine si deux valeurs sont la même valeur. Considère comme égales toutes les valeurs NaN (ce qui diffère à la fois de la Comparaison d'Égalité Abstraite et de la Comparaison d'Égalité Stricte).
- {{jsxref("Object.isExtensible()")}}
  - : Détermine si l'extension d'un objet est permise.
- {{jsxref("Object.isFrozen()")}}
  - : Détermine si un objet a été gelé.
- {{jsxref("Object.isSealed()")}}
  - : Détermine si un objet est scellé.
- {{jsxref("Object.keys()")}}
  - : Retourne un tableau contenant les noms de toutes les propriétés énumérables **propres** de l'objet donné.
- {{jsxref("Object.preventExtensions()")}}
  - : Empêche toute extension de l'objet.
- {{jsxref("Object.seal()")}}
  - : Empêche un autre code de détruire les propriétés d'un objet.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Définit le prototype d'un objet (c-à-d, la propriété interne `[[Prototype]]`).
- {{jsxref("Object.values()")}}
  - : Retourne le tableau des valeurs énumérables propres de l'objet donné dont les clés sont des chaînes de caractères.

## Instances d'`Object` et objet de prototype `Object`

Tous les objets en JavaScript descendent d'`Object` ; tous les objets héritent des méthodes et des propriétés de {{jsxref("Object.prototype")}}, même si elles peuvent être surchargées. Par exemple, d'autres prototypes de constructeurs surchargent la propriété du `constructor` et fournissent leurs propres méthodes `toString()`. Les changements apportés à l'objet de prototype `Object` sont propagées à tous les objets, à moins que les propriétés et méthodes auxquelles s'appliquent ces changements ne soient surchargées plus loin dans la chaîne de prototypes.

### Propriétés

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Properties') }}

### Méthodes

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Methods') }}

## Suppression d'une propriété dans un objet

Il n'y a aucune méthode dans un Object lui-même pour supprimer ses propres propriétés (par exemple, comme [Map.prototype.delete()](/fr-Fr/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)). Pour ce faire, il faut utiliser l'[opérateur delete](/fr-Fr/docs/Web/JavaScript/Reference/Operators/delete).

## Exemples

### Utilisation d'`Object` avec les types `undefined` et `null`

Les exemples suivants stockent un `Object` vide dans `o` :

```js
var o = new Object();
```

```js
var o = new Object(undefined);
```

```js
var o = new Object(null);
```

### Utilisation d'`Object` pour créer des objets `Boolean`

Les exemples suivants stockent des objets {{jsxref("Boolean")}} dans `o` :

```js
// Équivalent à : o = new Boolean(true);
var o = new Object(true);
```

```js
// Équivalent à : o = new Boolean(false);
var o = new Object(Boolean());
```

## Spécifications

| Spécification                                                                | Statut                       | Commentaire                                                                            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée par JavaScript 1.0.                                   |
| {{SpecName('ES5.1', '#sec-15.2', 'Object')}}                 | {{Spec2('ES5.1')}}     |                                                                                        |
| {{SpecName('ES6', '#sec-object-objects', 'Object')}}         | {{Spec2('ES6')}}         | Ajout de Object.assign, Object.getOwnPropertySymbols, Object.setPrototypeOf, Object.is |
| {{SpecName('ESDraft', '#sec-object-objects', 'Object')}} | {{Spec2('ESDraft')}} | Ajout de Object.entries, de Object.values et de Object.getOwnPropertyDescriptors.      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object")}}

## Voir aussi

- [Initialisateur d'objet](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Initialisateur_objet)
