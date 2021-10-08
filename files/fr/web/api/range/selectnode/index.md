---
title: Range.selectNode()
slug: Web/API/Range/selectNode
tags:
  - API
  - DOM
  - Méthode
  - Range
translation_of: Web/API/Range/selectNode
---
{{ApiRef("DOM")}}

La méthode `Range.selectNode()` définit le {{domxref ("Range")}} destiné à contenir le {{domxref("Node")}} et son contenu. Le {{domxref ("Node")}} parent du début et de la fin du {{domxref("Range")}} sera le même que le parent du _noeudDeReference_.

## Syntaxe

    range.selectNode(noeudDeReference);

### Paramètres

- _noeudDeReference_
  - : Le {{domxref("Node")}} à choisir à l'intérieur d'un `{domxref("Range")}}`.

## Exemple

```js
var range = document.createRange();
var noeudDeReference = document.getElementsByTagName("div").item(0);

range.selectNode(noeudDeReference);
```

## Spécifications

| Spécification                                                                                                                                | Statut                                       | Commentaire             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------- |
| {{SpecName('DOM WHATWG', '#dom-range-selectnode', 'Range.selectNode()')}}                                             | {{Spec2('DOM WHATWG')}}             | Aucun changement.       |
| {{SpecName('DOM2 Traversal_Range', 'ranges.html#Level2-Range-method-selectNode', 'Range.selectNode()')}} | {{Spec2('DOM2 Traversal_Range')}} | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Range.selectNode")}}

## Voir aussi

- [Référence du DOM](/fr/docs/Web/API/Document_Object_Model)
