---
title: TreeWalker.expandEntityReferences
slug: Web/API/TreeWalker/expandEntityReferences
tags:
  - API
  - Arborescence
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/TreeWalker/expandEntityReferences
---
{{ APIRef("DOM") }}{{obsolete_header}}

La propriété en lecture seule **`TreeWalker.expandEntityReferences`** renvoie un {{domxref("Boolean")}} (_booléen_) indiquant si les enfants des nœuds de référence d'entité sont visibles ou non pour le {{domxref("TreeWalker")}}.

Si la valeur est `false` (_faux_), les enfants des nœuds de référence d'entité (ainsi que tous leurs descendants) sont rejetés. Cela a préséance sur la valeur de la méthode  {{domxref("TreeWalker.whatToShow")}} et du filtre associé.

## Syntaxe

    expand = treeWalker.expandEntityReferences;

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
expand = treeWalker.expandEntityReferences;
```

## Spécifications

| Spécification                                                                                                                                                                        | Statut                                       | Commentaire                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------- |
| {{SpecName('DOM WHATWG', '#treewalker', 'Treewalker')}}                                                                                                             | {{Spec2('DOM WHATWG')}}             | Suppression de la spécification. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-expandEntityReferences', 'TreeWalker.expandEntityReferences')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.             |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.expandEntityReferences")}}

## Voir aussi

- L'interface à laquelle la propriété appartient : {{domxref("TreeWalker")}}.
