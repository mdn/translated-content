---
title: Range
slug: Web/API/Range
l10n:
  sourceCommit: 8ed804166714873a3c7ae11d9d95cfc8f9c379ab
---

{{APIRef("DOM")}}

L'interface **`Range`** représente un fragment d'un document qui peut contenir des nœuds et des parties de nœuds texte.

Un segment peut être créé en utilisant la méthode {{DOMxRef("Document.createRange()")}}. Les objets `Range` peuvent également être récupérés en utilisant la méthode {{DOMxRef("Selection/getRangeAt", "getRangeAt()")}} de l'objet {{DOMxRef("Selection")}} ou la méthode {{DOMxRef("Document/caretRangeFromPoint", "caretRangeFromPoint()")}} de l'objet {{DOMxRef("Document")}}.

Il existe également le constructeur {{DOMxRef("Range.Range()", "Range()")}}.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("Range.Range()", "Range()")}}
  - : Retourne un objet `Range` avec le {{DOMxRef("Document")}} global comme début et fin.

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("AbstractRange")}}._

- {{DOMxRef("Range.commonAncestorContainer")}} {{ReadOnlyInline}}
  - : Retourne le nœud le plus profond qui contient les nœuds `startContainer` et `endContainer`.

## Méthodes d'instance

_Il n'y a pas de méthodes héritées._

- {{DOMxRef("Range.collapse()")}}
  - : Réduit la `Range` à l'un de ses points de terminaison.
- {{DOMxRef("Range.compareBoundaryPoints()")}}
  - : Compare les points de terminaison de la `Range` avec une autre `Range`.
- {{DOMxRef("Range.compareNode()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Retourne une constante représentant si le nœud ({{DOMxRef("Node")}}) est avant, après, à l'intérieur ou entourant la plage.
- {{DOMxRef("Range.comparePoint()")}}
  - : Retourne -1, 0 ou 1 indiquant si le point se trouve avant, à l'intérieur ou après la `Range`.
- {{DOMxRef("Range.cloneContents()")}}
  - : Retourne un objet {{DOMxRef("DocumentFragment")}} en copiant les nœuds d'une `Range`.
- {{DOMxRef("Range.cloneRange()")}}
  - : Retourne un objet `Range` avec des points de terminaison identiques à ceux de la `Range` clonée.
- {{DOMxRef("Range.createContextualFragment()")}}
  - : Retourne un objet {{DOMxRef("DocumentFragment")}} créé à partir d'une chaîne de caractères de code donnée.
- {{DOMxRef("Range.deleteContents()")}}
  - : Supprime le contenu d'une `Range` du {{DOMxRef("Document")}}.
- {{DOMxRef("Range.detach()")}} {{Deprecated_Inline}}
  - : Ne fait rien. Conservé pour la compatibilité.
- {{DOMxRef("Range.extractContents()")}}
  - : Déplace le contenu d'une `Range` de l'arbre du document vers un {{DOMxRef("DocumentFragment")}}.
- {{DOMxRef("Range.getBoundingClientRect()")}}
  - : Retourne un objet {{DOMxRef("DOMRect")}} qui englobe l'intégralité du contenu de la `Range`&nbsp;; cela correspond à l'union de tous les rectangles retournés par {{DOMxRef("Range.getClientRects()")}}.
- {{DOMxRef("Range.getClientRects()")}}
  - : Retourne une liste d'objets {{DOMxRef("DOMRect")}} qui agrègent les résultats de {{DOMxRef("Element.getClientRects()")}} pour tous les éléments dans la `Range`.
- {{DOMxRef("Range.isPointInRange()")}}
  - : Retourne un booléen (`boolean`) indiquant si le point donné se trouve dans la `Range`.
- {{DOMxRef("Range.insertNode()")}}
  - : Insère un nœud ({{DOMxRef("Node")}}) au début d'une `Range`.
- {{DOMxRef("Range.intersectsNode()")}}
  - : Retourne un booléen (`boolean`) indiquant si le nœud donné intersecte la `Range`.
- {{DOMxRef("Range.selectNode()")}}
  - : Définit la `Range` pour contenir le nœud ({{DOMxRef("Node")}}) et son contenu.
- {{DOMxRef("Range.selectNodeContents()")}}
  - : Définit la `Range` pour contenir le contenu d'un nœud ({{DOMxRef("Node")}}).
- {{DOMxRef("Range.setEnd()")}}
  - : Définit la position de fin d'une `Range`.
- {{DOMxRef("Range.setStart()")}}
  - : Définit la position de début d'une `Range`.
- {{DOMxRef("Range.setEndAfter()")}}
  - : Définit la position de fin d'une `Range` par rapport à un autre nœud ({{DOMxRef("Node")}}).
- {{DOMxRef("Range.setEndBefore()")}}
  - : Définit la position de fin d'une `Range` par rapport à un autre nœud ({{DOMxRef("Node")}}).
- {{DOMxRef("Range.setStartAfter()")}}
  - : Définit la position de début d'une `Range` par rapport à un autre nœud ({{DOMxRef("Node")}}).
- {{DOMxRef("Range.setStartBefore()")}}
  - : Définit la position de début d'une `Range` par rapport à un autre nœud ({{DOMxRef("Node")}}).
- {{DOMxRef("Range.surroundContents()")}}
  - : Déplace le contenu d'une `Range` dans un nouveau nœud ({{DOMxRef("Node")}}).
- {{DOMxRef("Range.toString()")}}
  - : Retourne le texte de la `Range`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'index des interfaces DOM](/fr/docs/Web/API/Document_Object_Model)
