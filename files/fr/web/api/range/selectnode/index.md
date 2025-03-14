---
title: Range.selectNode()
slug: Web/API/Range/selectNode
---

{{ApiRef("DOM")}}

La méthode `Range.selectNode()` définit le {{domxref ("Range")}} destiné à contenir le {{domxref("Node")}} et son contenu. Le {{domxref ("Node")}} parent du début et de la fin du {{domxref("Range")}} sera le même que le parent du _noeudDeReference_.

## Syntaxe

```js
range.selectNode(noeudDeReference);
```

### Paramètres

- _noeudDeReference_
  - : Le {{domxref("Node")}} à choisir à l'intérieur d'un `{domxref("Range")}}`.

## Exemple

```js
var range = document.createRange();
var noeudDeReference = document.getElementsByTagName("div").item(0);

range.selectNode(noeudDeReference);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence du DOM](/fr/docs/Web/API/Document_Object_Model)
