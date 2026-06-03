---
title: "Document : méthode adoptNode()"
short-title: adoptNode()
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}

La méthode **`adoptNode()`** de l'interface {{DOMxRef("Document")}} transfère un {{Glossary("node/dom", "nœud")}} d'un autre {{DOMxRef("Document", "document", "", "1")}} vers le document de la méthode.
Le nœud adopté et son sous-arbre sont supprimés de leur document d'origine (le cas échéant), et leur {{DOMxRef("Node.ownerDocument", "ownerDocument")}} est changé pour le document actuel.
Le nœud peut ensuite être inséré dans le document actuel.

## Syntaxe

```js-nolint
adoptNode(externalNode)
```

### Paramètres

- `externalNode`
  - : Le nœud à adopter provenant d'un autre document.

### Valeur de retour

Le `importedNode` copié dans le contexte du document importateur.

Après l'appel de cette méthode, `importedNode` et `externalNode` sont le même objet.

> [!NOTE]
> Le {{DOMxRef("Node.parentNode")}} de `importedNode` est `null`, car il n'a pas encore été inséré dans l'arborescence du document&nbsp;!

## Exemples

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## Notes

Avant de pouvoir être insérés dans le document courant, les nœuds provenant de documents externes doivent soit être&nbsp;:

- clonés à l'aide de {{DOMxRef("document.importNode()")}}&nbsp;; ou
- adoptés à l'aide de `document.adoptNode()`.

Pour en savoir plus sur les problèmes liés à {{DOMxRef("Node.ownerDocument")}}, consultez la [FAQ DOM du W3C <sup>(angl.)</sup>](https://www.w3.org/DOM/faq.html#ownerdoc).

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.importNode()")}}
