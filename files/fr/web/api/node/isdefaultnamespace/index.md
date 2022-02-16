---
title: Node.isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
tags:
  - API
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/Node/isDefaultNamespace
---
{{APIRef("DOM")}}

La méthode **`Node.isDefaultNamespace()`** accepte un URI d'espace de nom comme argument et renvoie un {{jsxref("Boolean")}} (booléen) avec une valeur `true` (_vrai_) si l'espace de nom est celui par défaut du noeud donné ou `false` (_faux_) sinon.

## Syntaxe

    result = node.isDefaultNamespace(namespaceURI)

- `result` détient la valeur de retour `true` (_vrai_) ou `false` (_faux_).
- `namespaceURI` est une `string` (_chaîne de caractères_) représentant l'espace de nom par rapport auquel l'élément sera vérifié.

## Exemple

```js
var XULNS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var el = document.getElementsByTagNameNS(XULNS, 'textbox')[0];

alert(el.isDefaultNamespace(XULNS)); // true
```

## Spécification

- [DOM Level 3 Core: isDefaultNamespace](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace)
- [Code snippets: isDefaultNamespace](/en-US/docs/Code_snippets/IsDefaultNamespace)
