---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakSet
translation_of: Web/JavaScript/Reference/Global_Objects/WeakSet
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakSet
---
{{JSRef}}

L'objet **`WeakSet`** permet de créer un ensemble dont les objets sont contenus avec des références _faibles_.

## Syntaxe

    new WeakSet([itérable]);

### Paramètre

- `itérable`
  - : Si un [objet itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB) est présent comme argument, ses éléments seront ajoutés au nouvel objet `WeakSet`. {{jsxref("null")}} est traité comme {{jsxref("undefined")}}.

## Exemples

```js
var ws = new WeakSet();
var toto = {};
var truc = {};

ws.add(toto);
ws.add(truc);

ws.has(toto);  // true
ws.has(truc);  // true

ws.delete(toto); // retire toto de l'ensemble
ws.has(toto);    // false, toto a été enlevé
```

On notera que `toto !== truc`. Bien que ce soient des objets similaires, ce ne sont pas les mêmes objets. Aussi, les deux sont ajoutés à l'ensemble.

## Description

Les `WeakSet` sont des ensembles d'objets. Un objet présent dans un objet `WeakSet` ne peut apparaître qu'une seule fois, il est unique pour un `WeakSet` donné.

Les principales différences avec l'objet {{jsxref("Set")}} sont les suivantes :

- Contrairement aux `Sets`, les `WeakSets` sont des **ensembles uniquement constitués d'objets** et ne peuvent pas contenir des valeurs de n'importe quel type.
- L'objet `WeakSet` est _faible :_ Les références vers les objets de l'ensemble sont des références faibles. Si aucune autre référence vers l'objet n'est présente en dehors du `WeakSet`, l'objet pourra alors être nettoyé par le ramasse-miette. Cela signifie également qu'on ne peut pas lister les objets contenus à un instant donné dans l'ensemble. Les objets `WeakSets` ne sont pas énumérables.

## Propriétés

- `WeakSet.length`
  - : La valeur de la propriété `length` est 0.
- {{jsxref("WeakSet.prototype")}}
  - : Cette propriété représente le prototype pour le constructeur `WeakSet`. Il permet d'ajouter des propriétés pour tous les objets `WeakSet`.

## Instances de `WeakSet`

Toutes les instances de `WeakSet` héritent de {{jsxref("WeakSet.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakSet/prototype','Propri.C3.A9t.C3.A9s')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakSet/prototype','M.C3.A9thodes')}}

## Exemples

### Détecter les références circulaires

Les fonctions récursives doivent faire attention aux structures de données circulaire qu'elles consommeraient. Les objets `WeakSets` peuvent être utilisé pour ça :

```js
// Appeler un callback sur ce qui est stocké dans un objet
function execRecursively(fn, subject, _refs = null){
  if(!_refs)
    _refs = new WeakSet();

  // On évite une récursion infinie
  if(_refs.has(subject))
    return;

  fn(subject);
  if("object" === typeof subject){
    _refs.add(subject);
    for(let key in subject)
      execRecursively(fn, subject[key], _refs);
  }
}

const toto = {
  toto: "Toto",
  truc: {
    truc: "Truc"
  }
};

toto.truc.machin = toto; // Référence circulaire !
execRecursively(obj => console.log(obj), toto);
```

Ici, on a un objet `WeakSet` qui est créé lors de la première exécution et qui est passé ensuite à chaque appel qui suit (via l'argument interne `_refs`). Le nombre d'objets ou l'ordre de parcours n'a pas d'importance et un objet `WeakSet` est donc plus adapté (y compris en termes de performances) qu'un {{jsxref("Set")}}, notamment si un grand nombre d'objets sont concernés.

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-weakset-objects', 'WeakSet')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-weakset-objects', 'WeakSet')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakSet")}}

## Voir aussi

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
