---
title: WeakMap.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
tags:
  - JavaScript
  - Méthode
  - Obsolete
  - Prototype
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/clear
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap/clear
---
{{JSRef}} {{obsolete_header}}

La méthode **`clear()`** permettait de retirer tous les éléments d'un objet `WeakMap` mais celle-ci ne fait plus partie d'ECMAScript.

## Syntaxe

    wm.clear();

## Exemples

```js
var wm = new WeakMap();
var obj = {};

wm.set(obj, "toto");
wm.set(window, "truc");

wm.has(obj); // true
wm.has(window); // true

wm.clear();

wm.has(obj);  // false
wm.has(window);  // false
```

## Spécifications

Cette méthode ne fait partie d'aucune spécification ou brouillon. Cette méthode a fait partie du brouillon ECMAScript 6 jusqu'à la révision 28 (version du 14 octobre 2014) mais a été retiré par la suite. Cette méthode ne fait pas partie du standard final.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakMap.clear")}}

## Voir aussi

- {{jsxref("WeakMap")}}
