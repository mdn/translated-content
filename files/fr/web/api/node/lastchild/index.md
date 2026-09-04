---
title: "Node : propriété lastChild"
short-title: lastChild
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

La propriété en lecture seule **`lastChild`** de l'interface {{DOMxRef("Node")}} retourne le dernier enfant du nœud, ou `null` s'il n'y a pas de nœuds enfants.

> [!NOTE]
> Cette propriété retourne n'importe quel type de nœud qui est le dernier enfant de ce nœud.
> Il peut s'agir d'un nœud {{DOMxRef("Text")}} ou {{DOMxRef("Comment")}}.
> Si vous souhaitez obtenir le dernier {{DOMxRef("Element")}} qui est un enfant d'un autre élément, utilisez plutôt {{DOMxRef("Element.lastElementChild")}}.

## Valeur

Un objet {{DOMxRef("Node")}} qui est le dernier enfant du nœud, ou `null` s'il n'y a pas de nœuds enfants.

## Exemples

```js
const tr = document.getElementById("row1");
const cornerTd = tr.lastChild;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.firstChild")}}
- La propriété {{DOMxRef("Element.lastElementChild")}}
