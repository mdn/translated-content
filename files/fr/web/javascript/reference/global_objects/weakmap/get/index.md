---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/get
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap/get
---

{{JSRef}}

La méthode **`get()`** permet de renvoyer un élément donné d'un objet `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## Syntaxe

```js
wm.get(clé);
```

### Paramètre

- `clé`
  - : Ce paramètre est obligatoire. Il correspond à la clé de l'élément qu'on souhaite récupérer depuis l'objet `WeakMap`.

### Valeur de retour

L'élément associé à la clé donnée ou `undefined` si la clé ne peut pas être trouvée dans l'objet `WeakMap`.

## Exemples

```js
var wm = new WeakMap();
wm.set(window, "toto");

wm.get(window); // Renvoie "toto"
wm.get("machin");  // Renvoie undefined.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
