---
title: TreeWalker.whatToShow
slug: Web/API/TreeWalker/whatToShow
tags:
  - API
  - DOM
  - Propriété
  - Reference
translation_of: Web/API/TreeWalker/whatToShow
---
{{APIRef("DOM")}}

La propriété en lecture seule **`TreeWalker.whatToShow`** renvoie un `unsigned long` (_non signé long_) qui est un masque constitué de constantes décrivant les types de {{domxref("Node")}} à présenter. Les noeuds ne correspondant pas sont ignorés, mais leurs enfants peuvent être inclus s'ils sont pertinents. Les valeurs possibles sont :

| Constante                                                       | Valeur numérique                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NodeFilter.SHOW_ALL`                                           | `-1` (c'est la valeur numérique maximale du `unsigned long` (_non signé long_)) | Affiche tous les noeuds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                                             | Affiche l'attribut {{domxref("Attr")}} des noeuds. Cela n'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un noeud {{domxref("Attr")}} comme racine ; dans ce cas, cela signifie que le nœud d'attribut apparaîtra dans la première position de l'itération ou de la traversée. Comme les attributs ne sont jamais des enfants d'autres nœuds, ils n'apparaissent pas lors de la traversée de l'arbre du document.                               |
| `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                                             | Affiche les noeuds {{domxref("CDATASection")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `NodeFilter.SHOW_COMMENT`                                       | `128`                                                                           | Affiche les noeuds {{domxref("Comment")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `NodeFilter.SHOW_DOCUMENT`                                      | `256`                                                                           | Affiche les noeuds {{domxref("Document")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                             | `1024`                                                                          | Affiche les noeuds {{domxref("DocumentFragment")}}.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `NodeFilter.SHOW_DOCUMENT_TYPE`                                 | `512`                                                                           | Affiche les noeuds {{domxref("DocumentType")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `NodeFilter.SHOW_ELEMENT`                                       | `1`                                                                             | Affiche les noeuds {{domxref("Element")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                                            | Affiche les noeuds {{domxref("Entity")}}. Cela n'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un noeud {{ domxref("Entity") }} comme racine ; dans ce cas, il signifie que le noeud d'entité {{domxref("Entity") }} apparaîtra à la première position de la traversée. Étant donné que les entités ne font pas partie de l'arborescence du document, elles n'apparaissent pas lors de la traversée de l'arborescence du document. |
| `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                                            | Affiche les noeuds {{domxref("EntityReference")}}.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                                          | Affiche les noeuds {{domxref("Notation")}}. Cela n'a de sens que lors de la création d'un {{domxref("TreeWalker")}} avec un noeud {{domxref("Notation")}} comme racine ; dans ce cas, il signifie que le noeud {{domxref("Notation")}} apparaîtra à la première position de la traversée. Étant donné que les entités ne font pas partie de l'arborescence du document, elles n'apparaissent pas lors de la traversée de l'arborescence du document.  |
| `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                        | `64`                                                                            | Affiche les noeuds {{domxref("ProcessingInstruction")}}.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `NodeFilter.SHOW_TEXT`                                          | `4`                                                                             | Affiche les noeuds {{domxref("Text")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Syntaxe

    nodeTypes = treeWalker.whatToShow;

## Exemples

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
if( (treeWalker.whatToShow == NodeFilter.SHOW_ALL) ||
    (treeWalker.whatToShow % (NodeFilter.SHOW_COMMENT*2)) >= NodeFilter.SHOW_COMMENT) {
    // treeWalker affichera des commentaires
}
```

## Spécifications

| Spécification                                                                                                                                        | État                                         | Commentaires                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-whattoshow', 'TreeWalker.whatToShow')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-whatToShow', 'TreeWalker.whatToShow')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.whatToShow")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}}.
