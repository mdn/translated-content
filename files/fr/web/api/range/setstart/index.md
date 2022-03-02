---
title: Range.setStart()
slug: Web/API/Range/setStart
tags:
  - API
  - DOM
  - Method
  - Range
translation_of: Web/API/Range/setStart
---
{{ApiRef("DOM")}}

La méthode **`Range.setStart()`** définit la position de départ d'un objet [`Range`](/fr/docs/Web/API/Range).

Si le `startNode` est un {{ domxref("Node") }}  de type `Text`, `Comment`, ou `CDATASection`, alors startOffset est le nombre de caractères depuis le départ du `startNode`. Pour les autres types de `Nœud`, `startOffset` est le nombre de noeuds enfants entre le debut du `startNode`.

Si vous définissez le point de départ en dessous (plus bas dans le document), le point final entraînera une plage réduite avec les points de départ et de fin réglés tous les deux sur la position de départ spécifiée.

## Syntaxe

    range.setStart(startNode, startOffset);

### Paramètres

- _startNode_
  - : {{ domxref("Node") }} ou {{ domxref("Range") }} devrait démarrer.
- _startOffset_
  - : Un entier supérieur ou égal à zéro représentant le décalage pour le début du {{domxref ("Range")}} à partir du début de startNode.

## Example

```js
var range = document.createRange();
var startNode = document.getElementsByTagName("p").item(2);
var startOffset = 0;
range.setStart(startNode,startOffset);
```

## Spécifications

| Specification                                                                                                                        | Statut                                       | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-range-setstart', 'Range.setStart()')}}                                         | {{Spec2('DOM WHATWG')}}             |                      |
| {{SpecName('DOM2 Traversal_Range', 'ranges.html#Level2-Range-method-setStart', 'Range.setStart()')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale. |

## Compatibilité navigateurs

{{Compat("api.Range.setStart")}}

## Voir aussi

- [L'index des interfaces DOM](/fr/docs/DOM/DOM_Reference)
