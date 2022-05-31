---
title: uneval()
slug: Web/JavaScript/Reference/Global_Objects/uneval
tags:
  - Fonction
  - JavaScript
  - Non-standard
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/uneval
original_slug: Web/JavaScript/Reference/Objets_globaux/uneval
---
{{jsSidebar("Objects")}}{{Non-standard_header}}

La fonction **`uneval()`** renvoie une chaîne de caractères représentant le code source d'un objet.

## Syntaxe

```js
uneval(objet)
```

### Paramètres

- `objet`
  - : Une instruction ou une expression JavaScript.

### Valeur de retour

Une chaîne de caractères qui représente le code source de l'objet indiqué.

> **Note :** Le résultat obtenu ne sera pas une représentation JSON valide de l'objet.

## Description

`uneval()` est une fonction disponible au plus haut niveau et n'est rattachée à aucun objet.

## Exemples

```js
var a = 1;
uneval(a); // renvoie une chaîne qui contient 1

var b = "1";
uneval(b) // renvoie une chaîne qui contient "1"

uneval(function toto(){}); // renvoie "(function toto(){})"


var a = uneval(function toto(){return 'salut'});
var toto = eval(a);
toto(); // renvoie "salut"
```

## Spécifications

Cette méthode ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.uneval")}}

## Voir aussi

- {{jsxref("Objets_globaux/eval", "eval()")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("Object.toSource()")}}
