---
title: range
slug: Web/API/Range
translation_of: Web/API/Range
---
{{ ApiRef() }}

### Introduction

L'objet `Range` (littéralement : "étendue" ou "portée", ici : "segment") représente un fragment de document qui peut contenir des nœuds et des parties de nœuds texte dans un document donné.

Un segment peut être crée en utilisant la méthode [createRange](/fr/docs/Web/API/document/createRange) de l'objet [document](/fr/docs/Web/API/document). Les objets range peuvent également être récupérés en utilisant la méthode [getRangeAt](/fr/docs/Web/API/Selection/getRangeAt) de l'objet [selection](/fr/docs/Web/API/Selection).

### Propriétés

- [collapsed](/fr/docs/Web/API/range/collapsed)
  - : Renvoie un booléen indiquant si le point de départ et le point final du segment sont confondus.
- [commonAncestorContainer](/fr/docs/Web/API/range/commonAncestorContainer)
  - : Renvoie le nœud le plus profond qui contient à la fois les nœuds `startContainer` et `endContainer`.
- [endContainer](/fr/docs/Web/API/range/endContainer)
  - : Renvoie le nœud dans lequel le segment se termine.
- [endOffset](/fr/docs/Web/API/range/endOffset)
  - : Renvoie un nombre représentant l'endroit où le segment se termine dans `endContainer`.
- [startContainer](/fr/docs/Web/API/range/startContainer)
  - : Renvoie le nœud dans lequel le segment débute.
- [startOffset](/fr/docs/Web/API/range/startOffset)
  - : Renvoie un nombre représentant l'endroit où le segment débute dans `startContainer`.

### Méthodes

#### Méthodes de positionnement

Ces méthodes permettent de définir le début et la fin d'un segment.

- [setStart](/fr/docs/Web/API/range/setStart)
  - : Définit le point de départ d'un segment.
- [setEnd](/fr/docs/Web/API/range/setEnd)
  - : Définit le point final d'un segment.
- [setStartBefore](/fr/docs/Web/API/range/setStartBefore)
  - : Définit le point de départ d'un segment relativement à un autre nœud.
- [setStartAfter](/fr/docs/Web/API/range/setStartAfter)
  - : Définit le point de départ d'un segment relativement à un autre nœud.
- [setEndBefore](/fr/docs/Web/API/range/setEndBefore)
  - : Définit le point final d'un segment relativement à un autre nœud.
- [setEndAfter](/fr/docs/Web/API/range/setEndAfter)
  - : Définit le point final d'un segment relativement à un autre nœud.
- [selectNode](/fr/docs/Web/API/range/selectNode)
  - : Le contenu du segment devient le nœud et son contenu.
- [selectNodeContents](/fr/docs/Web/API/range/selectNodeContents)
  - : le contenu du segment devient le contenu du nœud.
- [collapse](/fr/docs/Web/API/range/collapse)
  - : Replie le segment sur l'un de ses points frontières.

#### Méthodes de modification

Ces méthodes recupèrent les nœuds d'un segment et modifient le contenu d'un segment.

- [cloneContents](/fr/docs/Web/API/range/cloneContents)
  - : Renvoie un fragment de document où sont copiés les nœuds d'un segment.
- [deleteContents](/fr/docs/Web/API/range/deleteContents)
  - : Supprime du document le contenu d'un segment.
- [extractContents](/fr/docs/Web/API/range/extractContents)
  - : Déplace le contenu d'un segment, de l'arbre du document vers un fragment de document.
- [insertNode](/fr/docs/Web/API/range/insertNode)
  - : Insère un nœud au début d'un segment.
- [surroundContents](/fr/docs/Web/API/range/surroundContents)
  - : Déplace le contenu d'un segment dans un nouveau nœud.

#### Autres méthodes

- [compareBoundaryPoints](/fr/docs/Web/API/range/compareBoundaryPoints)
  - : Compare les points frontières de deux segments.
- [cloneRange](/fr/docs/Web/API/range/cloneRange)
  - : Renvoie un objet `Range` avec des points frontières identiques à ceux du segment cloné.
- [detach](/fr/docs/Web/API/range/detach)
  - : Supprime le segment afin d'améliorer la performance.
- [toString](/fr/docs/Web/API/range/toString)
  - : Renvoie le texte du segment.

#### Les méthodes Gecko

Cette section décrit les méthodes de range qui sont particulières à Mozilla et ne font pas partie des spécifications DOM W3C.

- [compareNode](/fr/docs/Web/API/range/compareNode) {{deprecated_inline}}
  - : Renvoie une constante qui indique si le nœud est avant, après, dans ou englobe le segment.
- [comparePoint](/fr/docs/Web/API/range/comparePoint)
  - : Renvoie -1, 0, ou 1, indiquant si le point se trouve avant, après, ou dans le segment.
- [createContextualFragment](/fr/docs/Web/API/range/createContextualFragment)
  - : Renvoie un fragment de document créé à partir d'un morceau de code donné.
- [intersectsNode](/fr/docs/Web/API/range/intersectsNode) {{deprecated_inline}}
  - : Renvoie un booléen indiquant si un nœud donné a une intersection avec le segment.
- [isPointInRange](/fr/docs/Web/API/range/isPointInRange)
  - : Renvoie un booléen indiquant si le point donné est dans le segment.
