---
title: 'null'
slug: Web/JavaScript/Reference/Global_Objects/null
tags:
  - JavaScript
  - Littéral
  - Primitive
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/null
original_slug: Web/JavaScript/Reference/Objets_globaux/null
---
{{jsSidebar("Objects")}}

La valeur **`null`** est un littéral JavaScript représentant la nullité au sens où aucune valeur pour l'objet n'est présente. C'est une des valeurs primitives de JavaScript.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Syntaxe

    null

## Description

La valeur `null` est un littéral (et non pas une propriété de l'objet global telle que {{jsxref("undefined")}}). Dans certaines API, `null` est souvent utilisé en valeur de retour lorsqu'un objet est attendu mais qu'aucun objet ne convient. Lors de tests d'égalité avec `null` ou `undefined`, il faut faire attention aux [différences entre les opérateurs d'égalité faible (==) et stricte (===)](/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité_comment_les_utiliser) (on aura une conversion de type avec le premier).

```js
// toto n'existe pas, n'a pas été défini et n'a jamais été initialisé
toto;
"ReferenceError: toto is not defined"

// toto existe mais n'a ni type ni valeur
var toto = null;
console.log(toto); // null
```

### Différence entre `null` et `undefined`

```js
typeof null;           // "object" (pas null pour des raisons historiques)
typeof undefined;      // "undefined"
null === undefined;    // false
null  == undefined;    // true
null === null;         // true
null  == null;         // true
!null;                 // true
isNaN(1 + null);       // false
isNaN(1 + undefined);  // true
```

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-4.3.11', 'null value')}}         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-null-value', 'null value')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-null-value', 'null value')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.null")}}

## Voir aussi

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
