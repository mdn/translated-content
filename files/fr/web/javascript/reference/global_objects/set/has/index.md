---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/has
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/has
---
{{JSRef}}

La méthode **`has()`** renvoie un booléen qui indique s'il existe un élément de l'ensemble `Set` avec une certaine valeur.

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## Syntaxe

```js
monSet.has(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. C'est la valeur dont on souhaite savoir si elle est présente ou non dans l'objet `Set`.

### Valeur de retour

Un booléen : `true` s'il existe un élément avec la valeur donnée au sein du `Set`, `false` sinon.

> **Note :** L'existence d'un élément avec la valeur testée est vérifiée avec [l'algorithme d'égalité des valeurs nulles (`sameValueZero`)](/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité#Égalité_de_valeurs_nulles).

## Exemples

```js
var monSet = new Set();
monSet.add("toto");

monSet.has("toto");  // renvoie true
monSet.has("truc");  // renvoie false

var set1 = new Set();
var obj1 = {'cle1': 1};
set1.add(obj1);

set1.has(obj1);        // renvoie true
set1.has({'cle1': 1}); // renvoie false car ce sont deux objets distincts
set1.add({'cle1': 1}); // set1 contient désormais 2 éléments
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.has', 'Set.prototype.has')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set.prototype.has', 'Set.prototype.has')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.has")}}

## Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
