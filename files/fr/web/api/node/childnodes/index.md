---
title: element.childNodes
slug: Web/API/Node/childNodes
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Node.childNodes`** renvoie une {{domxref("NodeList")}} (_liste de noeuds_) de {{domxref("Node","noeuds")}} enfants de l'élément donné avec le premier noeud enfant affecté à l'index 0.

## Syntaxe

```js
var collNoeuds = elementDeReference.childNodes;
```

## Exemples

### Utilisation simple

```js
// parg est une référence d'objet pour un élément <p>

// D'abord vérifier que l'élément a des noeuds enfants
if (parg.hasChildNodes()) {
  var children = parg.childNodes;

  for (var i = 0; i < children.length; i++) {
    // faire quelque chose avec chaque enfant[i]
    // NOTE: La liste est en ligne, l'ajout ou la suppression des enfants changera la liste
  }
}
```

### Supprimer tous les enfants d'un nom

```js
// Voici une manière de supprimer tous les enfants d'un nœud
// (boite est une référence à un élément ayant des enfants)
while (boite.firstChild) {
  // La liste n'est pas une copie, elle sera donc réindexée à chaque appel
  boite.removeChild(boite.firstChild);
}
```

## Notes

Les éléments de la collection de noeuds sont des objets et non des chaînes de caractères. Pour en obtenir les données, vous devez utiliser leurs propriétés (par exemple `elementNodeReference.childNodes[1].nodeName` pour obtenir son nom, etc.)

L'objet [`document`](/fr/DOM/document) lui-même a deux enfants&nbsp;: la déclaration [Doctype](/fr/DOM/document.doctype) et l'élément racine, généralement appelés `documentElement` . (Dans les documents (X)HTML il s'agit d'éléments [`HTML`](/fr/HTML/Element/html)).

`childNodes` inclut tous les noeuds enfants, y compris les noeuds qui ne sont pas des éléments comme les noeuds texte et commentaire. Pour obtenir une collection des seuls éléments, utilisez {{domxref("ParentNode.children")}} à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("ParentNode.children")}}
