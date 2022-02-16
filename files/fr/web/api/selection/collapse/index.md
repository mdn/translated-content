---
title: Selection.collapse()
slug: Web/API/Selection/collapse
tags:
  - API
  - Edition HTML
  - Experimental
  - Method
  - Reference
  - Selection
translation_of: Web/API/Selection/collapse
---
{{ApiRef("DOM")}}{{SeeCompatTable}}

La méthode **`Selection.collapse()`** positionne la sélection en cours en un seul point. Le document n'est pas modifié. Si le focus est sur le contenu et est modifiable, le curseur d'édition s'y positionnera et sera visible.

## Syntaxe

    sel.collapse(parentNode, offset);

### Paramètres

- _`parentNode`_
  - : Le curseur d'édition sera placé à l'intérieur de ce noeud.

<!---->

- _`offset`_
  - : Indique la position du curseur d'édition dans `parentNode`.

## Exemples

```js
/* Positionner le curseur au début de l'élément body d'un document HTML. */
var body = document.getElementsByTagName("body")[0];
window.getSelection().collapse(body,0);
```

## Spécifications

| Spécification                                                                                                                                                | Statut                               | Commentaires        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Selection API', '#widl-Selection-collapse-void-Node-node-unsigned-long-offset', 'Selection.collapse()')}} | {{Spec2('Selection API')}} |                     |
| {{SpecName('HTML Editing', '#dom-selection-collapse', 'Selection.collapse()')}}                                                     | {{Spec2('HTML Editing')}}     | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Selection.collapse")}}

## Voir aussi

- {{domxref("Selection")}}, l'interface à laquelle collapse appartient.
