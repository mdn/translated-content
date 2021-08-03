---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/has
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap/has
---
{{JSRef}}

La méthode **`has()`** renvoie un booléen qui indique s'il existe (ou non) un élément avec une clé donnée au sein de l'objet `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}

## Syntaxe

    wm.has(clé);

### Paramètre

- `clé`
  - : Ce paramètre est obligatoire. Il correspond à la clé de l'élément dont on souhaite savoir s'il est présent dans l'objet `WeakMap`.

### Valeur de retour

La méthode renvoie `true` s'il existe un élément du `WeakMap` avec la clé donné, `false` sinon.

## Exemples

```js
var wm = new WeakMap();
wm.set(window, "toto");

wm.has(window); // renvoie true
wm.has("machin");  // renvoie false
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.has', 'WeakMap.prototype.has')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.has', 'WeakMap.prototype.has')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakMap.has")}}

## Voir aussi

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
