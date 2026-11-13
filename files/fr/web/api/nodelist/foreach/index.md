---
title: "NodeList : méthode forEach()"
short-title: forEach()
slug: Web/API/NodeList/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

La méthode **`forEach()`** de l'interface {{DOMxRef("NodeList")}} appelle le rappel donné en paramètre une fois pour chaque paire de valeurs dans la liste, dans l'ordre d'insertion.

## Syntaxe

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Paramètres

- `callback`
  - : Une fonction à exécuter sur chaque élément de `someNodeList`. Elle accepte 3 paramètres&nbsp;:
    - `currentValue`
      - : L'élément en cours de traitement dans `someNodeList`.
    - `currentIndex` {{Optional_Inline}}
      - : L'index de l'élément `currentValue` en cours de traitement dans `someNodeList`.
    - `listObj` {{Optional_Inline}}
      - : Le `someNodeList` auquel `forEach()` est appliqué.

- `thisArg` {{Optional_Inline}}
  - : Valeur à utiliser comme [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) lors de l'exécution du `callback`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const noeud = document.createElement("div");
const enfant1 = document.createElement("p");
const enfant2 = document.createTextNode("hey");
const enfant3 = document.createElement("span");

noeud.appendChild(enfant1);
noeud.appendChild(enfant2);
noeud.appendChild(enfant3);

const liste = noeud.childNodes;

liste.forEach(function (valeurActuelle, indexActuel, listObj) {
  console.log(`${valeurActuelle}, ${indexActuel}, ${this}`);
}, "myThisArg");
```

Le code ci-dessus produit le résultat suivant&nbsp;:

```plain
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `NodeList.prototype.entries` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterable-dom-collections)
- L'interface {{DOMxRef("Node")}}
- L'interface {{DOMxRef("NodeList")}}
