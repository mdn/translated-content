---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/isConcatSpreadable
---
{{JSRef}}

Le symbole connu **`Symbol.isConcatSpreadable`** est utilisé pour configurer la façon dont un tableau est aplati lors d'une concaténation via la méthode  {{jsxref("Array.prototype.concat()")}}.

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## Description

Le symbole `@@isConcatSpreadable` (`Symbol.isConcatSpreadable`) peut être défini comme une propriété propre ou héritée. C'est une valeur booléenne qui contrôle le comportement des tableaux et des objets semblables à des tableaux :

- Pour les tableaux, `concat` aplatira les tableaux par défaut. `Symbol.isConcatSpreadable` peut être utilisé pour obtenir le comportement opposé.
- Pour les objets semblables à des tableaux, par défaut, il n'y aucune mise à plat. `Symbol.isConcatSpreadable` permet de forcer cette mise à plat.

{{js_property_attributes(0,0,0)}}

## Exemples

### Tableaux (`Array`)

Par défaut, {{jsxref("Array.prototype.concat()")}} aplatit les tableaux pour le résultat de la concaténation :

```js
var alpha = ['a', 'b', 'c'],
    numérique = [1, 2, 3];

var alphaNumérique = alpha.concat(numérique);

console.log(alphaNumérique);
// Résultat : ['a', 'b', 'c', 1, 2, 3]
```

En définissant `Symbol.isConcatSpreadable` avec `false`, on peut désactiver le comportement par défaut :

```js
var alpha = ['a', 'b', 'c'],
    numérique = [1, 2, 3];

numérique[Symbol.isConcatSpreadable] = false;
var alphaNumérique = alpha.concat(numérique);

console.log(alphaNumérique);
// Résultat: ['a', 'b', 'c', [1, 2, 3] ]
```

### Objets semblables à des tableaux

Pour les objets semblables à un tableau, par défaut, il n'y a pas de fusion. Il faut donc que `Symbol.isConcatSpreadable` vaille `true` pour aplatir le tableau :

```js
var x = [1, 2, 3];

var fauxTableau = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "coucou",
  1: "monde"
}

x.concat(fauxTableau); // [1, 2, 3, "coucou", "monde"]
```

> **Note :** La propriété `length` indique ici le nombre de propriétés à ajouter au tableau.

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.isconcatspreadable', 'Symbol.isconcatspreadable')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.isconcatspreadable', 'Symbol.isconcatspreadable')}} | {{Spec2('ESDraft')}} | Aucune modification. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.isConcatSpreadable")}}

## Voir aussi

- {{jsxref("Array.prototype.concat()")}}
