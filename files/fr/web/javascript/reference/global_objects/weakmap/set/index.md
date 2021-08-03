---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/set
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap/set
---
s{{JSRef}}

La méthode **`set()`** permet d'ajouter un nouvel élément avec une `clé` et une `valeur` à un objet `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## Syntaxe

    wm.set(clé, valeur);

### Paramètres

- `clé`
  - : Ce paramètre est obligatoire et doit être un objet. Il correspond à la clé de l'élément qu'on souhaite ajouter à l'objet `WeakMap`.
- `valeur`
  - : Ce paramètre est obligatoire et peut avoir n'importe quel type. Il correspond à la valeur de l'élément qu'on souhaite ajouter à l'objet `WeakMap`.

### Valeur de retour

Cette méthode renvoie l'objet `WeakMap` potentiellement mis à jour.

## Exemples

```js
var wm = new WeakMap();
var obj = {};

// Ajouter un nouvel élément à la WeakMap
wm.set(obj, "toto").set(window, "truc"); // on peut chaîner les instructions

// Mettre à jour un élément de la WeakMap
wm.set(obj, "machin");
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.set', 'WeakMap.prototype.set')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.set', 'WeakMap.prototype.set')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakMap.set")}}

## Notes relatives à Firefox

- Avant Firefox 33 {{geckoRelease("33")}}, `WeakMap.prototype.set` renvoyait `undefined` et ne pouvait donc pas être utilisé à la chaîne (voir l'exemple ci-avant). Ceci a été corrigé avec le {{bug(1031632)}}. Ce comportement a été le même pour Chrome/v8 et fut également corrigé ([issue](https://code.google.com/p/v8/issues/detail?id=3410)).

## Voir aussi

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
