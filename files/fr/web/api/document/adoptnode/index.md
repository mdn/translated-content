---
title: Document.adoptNode()
slug: Web/API/Document/adoptNode
---

{{ ApiRef("DOM") }}

Adopte un noeud. Le noeud (et son sous-arbre) est supprimé du document dans lequel il se trouve (le cas échéant) et son [`ownerDocument`](/fr/docs/Web/API/Node/ownerDocument) (_document propriétaire_) est remplacé par le document en cours. Le noeud peut ensuite être inséré dans le document en cours.

**Pris en charge depuis Gecko 1.9 (Firefox 3)**

## Syntaxe

```js
node = document.adoptNode(externalNode);
```

- `node`
  - : est le noeud adopté qui a maintenant ce document en tant que son [`ownerDocument`](/fr/docs/DOM/Node.ownerDocument) (_document propriétaire_). Le [`parentNode`](/fr/docs/DOM/Node.parentNode) du noeud est `null`, car il n'a pas encore été inséré dans l'arborescence du document. Notez que `node` et `externalNode` sont le même objet après cet appel.
- `externalNode`
  - : est le noeud à adopter existant dans un autre document.

## Exemple

```js
var iframe = document.getElementById("my-iframe");
var iframeImages = iframe.contentDocument.getElementsByTagName("img");

var newParent = document.getElementByTagName("images");

for (var i = 0; i < iframeImages.length; i++) {
  newParent.appendChild(document.adoptNode(iframeImages[i]));
}
```

## Notes

En général l'appel de `adoptNode` peut échouer en raison du nœud source provenant d'une implémentation différente, mais cela ne devrait pas poser de problème avec les implémentations du navigateur.

Les nœuds provenant de documents externes doivent être clonés à l'aide de [`document.importNode()`](/fr/docs/Web/API/Document/importNode) (ou adoptés avec
[`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes
de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument), consultez la [FAQ DOM du W3C](http://www.w3.org/DOM/faq.html#ownerdoc) (en anglais).

Gecko n'obligeait pas à utiliser [`document.importNode()`](/fr/docs/Web/API/Document/importNode) et [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode) avant sa version 1.9. Depuis les versions 1.9
alphas, si un nœud n'est pas adopté ou importé avant d'être utilisé dans un autre document, l'exception
`WRONG_DOCUMENT_ERR` est déclenchée (`NS_ERROR_DOM_WRONG_DOCUMENT_ERR`). implémentation dans le [bug 47903](https://bugzilla.mozilla.org/show_bug.cgi?id=47903).

## Spécification

- [DOM Level 3 Core: Document.adoptNode](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Document3-adoptNode)

## Voir aussi

- [document.importNode](/fr/docs/DOM/document.importNode)
