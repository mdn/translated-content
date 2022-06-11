---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
original_slug: Web/JavaScript/Reference/Objets_globaux/Boolean
browser-compat: javascript.builtins.Boolean
---
{{JSRef}}

L'objet **`Boolean`** est une enveloppe objet pour représenter une valeur booléenne.

## Description

La valeur passée en premier paramètre est, si nécessaire, convertie en valeur booléenne. Si la valeur est omise ou est `0`, `-0`, [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), `false`, [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN), [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) ou une chaîne de caractères vide (`""`), l'objet a une valeur initiale de `false` (faux). Toutes les autres valeurs, y compris n'importe quel objet, un tableau vide (`[]`), ou une chaîne de caractères `"false"`, créent un objet avec une valeur initiale de `true` (vrai).

Il ne faut pas confondre les valeurs primitives booléennes `true` et `false` avec les valeurs `true` et `false` d'un objet `Boolean`.

Tout objet dont la valeur n'est ni [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) ni [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), incluant un objet `Boolean` dont la valeur est fausse, est évalué à `true` lorsqu'il est utilisé dans une instruction conditionnelle. Par exemple, la condition de l'instruction [`if`](/fr/docs/Web/JavaScript/Reference/Statements/if...else) dans le code suivant est validée, car l'expression `x` est évaluée à `true`&nbsp;:

```js
var x = new Boolean(false);
if (x) {
  // ce code est exécuté
}
```

Ce comportement ne s'applique pas aux valeurs primitives booléennes. Par exemple, dans le code suivant, la condition est évaluée à `false`&nbsp;:

```js
var x = false;
if (x) {
  // ce code n'est pas exécuté
}
```

Il ne faut pas utiliser un objet `Boolean` pour convertir une valeur non-booléenne en une valeur booléenne. On utilisera plutôt `Boolean` comme une fonction (sans l'opérateur `new`) ou alors la [double négation](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT)&nbsp;:

```js
var x = Boolean(expression);     // conseillé
var x = !!(expression);          // une autre méthode
var x = new Boolean(expression); // à ne pas utiliser
```

Si vous spécifiez un objet quelconque, incluant un objet booléen qui vaut `false`, le nouvel objet `Boolean` vaudra `true`.

```js
var monFalse = new Boolean(false);   // valeur initiale à false
var g = Boolean(monFalse);           // valeur initiale à true
var maChaine = new String("Hello");  // un objet String
var s = Boolean(maChaine);           // valeur initiale à true
```

Il ne faut pas utiliser un objet `Boolean` à la place d'une valeur primitive booléenne.

> **Note :** Lorsque la propriété historique, non-standard, [`document.all`](/fr/docs/Web/API/Document#propriétés) est utilisée comme argument, le constructeur `Boolean` renvoie un objet booléen faux. Cette propriété étant non-standard, son utilisation est déconseillée.

Lorsqu'on utilise l'opérateur `==` afin de comparer faiblement un objet avec une valeur primitive booléenne, il est préférable de comprendre clairement ce qui est comparé. Par exemple&nbsp;:

```js
if ([]) {
  console.log("[] est équivalent à vrai");
  // affiche "[] est équivalent à vrai" dans la console
}

if ([] == false) {
  console.log("[] == false");
  // affiche "[] == false"
} 
```

En effet, on a bien `[] == false` bien que `[]` est équivalent à vrai. La comparaison `[] == false` compare la *valeur* de `[]` avec `false`. Or, pour obtenir la *valeur* de `[]`, le moteur JavaScript appelle `[].toString()` dont le résultat vaut `""`, et c'est *cette chaîne de caractères* qui est comparée avec `false`. Autrement dit, `[] == false` est équivalent à `"" == false`. Avec `""` qui est équivalent à faux, on a donc le résultat observé.

## Constructeur

- [`Boolean()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)
  - : Crée un nouvel objet `Boolean`.

## Méthodes des instances

- [`Boolean.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString)
  - : Renvoie une chaîne de caractères qui est `"true"` ou `"false"` selon la valeur de l'objet. Il s'agit d'une surcharge de la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- [`Boolean.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf)
  - : Renvoie la valeur primitive de l'objet `Boolean`. Il s'agit d'une surcharge de la méthode [`Object.prototype.valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).

## Exemples

### Créer des objets `Boolean` dont la valeur initiale est `false`

```js
var bSansParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bChaineVide = new Boolean('');
var bfalse = new Boolean(false);
```

### Créer des objets `Boolean` dont la valeur initiale est `true`

```js
var bTrue = new Boolean(true);
var bChaineTrue = new Boolean('true');
var bChaineFalse = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Booléen](/fr/docs/Glossary/Boolean)
- [Valeurs primitives booléennes](/fr/docs/Web/JavaScript/Data_structures#les_valeurs_primitives)
- [Le type de données booléen sur Wikipédia](https://fr.wikipedia.org/wiki/Booléen)
