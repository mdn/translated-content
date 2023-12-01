---
title: Selection.collapse()
slug: Web/API/Selection/collapse
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

La méthode **`Selection.collapse()`** positionne la sélection en cours en un seul point. Le document n'est pas modifié. Si le focus est sur le contenu et est modifiable, le curseur d'édition s'y positionnera et sera visible.

## Syntaxe

```js
sel.collapse(parentNode, offset);
```

### Paramètres

- _`parentNode`_
  - : Le curseur d'édition sera placé à l'intérieur de ce noeud.

<!---->

- _`offset`_
  - : Indique la position du curseur d'édition dans `parentNode`.

## Exemples

```js
/* Positionner le curseur au début de l'élément body d'un document HTML. */
var body = document.getElementsByTagName("body")[0];
window.getSelection().collapse(body, 0);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Selection")}}, l'interface à laquelle collapse appartient.
