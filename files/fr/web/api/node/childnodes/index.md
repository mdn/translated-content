---
title: "Node : propriété childNodes"
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La propriété en lecture seule **`childNodes`** de l'interface {{DOMxRef("Node")}} retourne un objet {{DOMxRef("NodeList")}} dynamique des {{DOMxRef("Node", "nœuds enfants")}} de l'élément donné, où le premier nœud enfant se voit attribuer l'index `0`. Les nœuds enfants incluent les éléments, le texte et les commentaires.

> [!NOTE]
> Le fait que l'objet {{DOMxRef("NodeList")}} soit dynamique signifie que son contenu est modifié chaque fois que de nouveaux enfants sont ajoutés ou supprimés.
>
> Les navigateurs insèrent des nœuds texte dans un document pour représenter les espaces blancs dans le balisage source.
> Par conséquent, un nœud obtenu, par exemple en utilisant `Node.childNodes[0]`, peut faire référence à un nœud texte représentant un espace blanc plutôt qu'à l'élément réel que l'auteur·ice souhaitait obtenir.
>
> Voir [Travailler avec les espaces blancs dans le DOM](/fr/docs/Web/CSS/Guides/Text/Whitespace#travailler_avec_les_espaces_blancs_dans_le_dom) pour plus d'informations.

Les éléments de la collection de nœuds sont des objets et non des chaînes de caractères. Pour en obtenir les données, vous devez utiliser leurs propriétés. Par exemple, pour obtenir le nom du premier nœud enfant, vous pouvez utiliser `elementNodeReference.childNodes[0].nodeName`.

L'objet {{DOMxRef("document")}} lui-même a deux enfants&nbsp;: la déclaration Doctype et l'élément racine, généralement appelés `documentElement`. Dans les documents HTML, ce dernier est l'élément {{HTMLElement("html")}}.

Il est important de garder à l'esprit que `childNodes` inclut _tous_ les nœuds enfants, y compris les nœuds qui ne sont pas des éléments comme les nœuds texte et commentaire. Pour obtenir une collection contenant uniquement des éléments, utilisez {{DOMxRef("Element.children")}} à la place.

## Valeur

Un objet {{DOMxRef("NodeList")}} dynamique contenant les enfants du nœud.

> [!NOTE]
> Plusieurs appels à `childNodes` retournent la _même_ {{DOMxRef("NodeList")}}.

## Exemples

### Utilisation simple

```js
// Notez que para est une référence d'objet à un élément <p>

// D'abord vérifier que l'élément a des nœuds enfants
if (para.hasChildNodes()) {
  let enfants = para.childNodes;

  for (const noeud of enfants) {
    // Faire quelque chose avec chaque enfant comme enfants[i]
    // NOTE: la liste est dynamique ! L'ajout ou la suppression d'enfants change la `length` de la liste
  }
}
```

### Supprimer tous les enfants d'un nom

```js
// Voici une manière de supprimer tous les enfants d'un nœud
// boite est une référence à un élément
while (boite.firstChild) {
  // La liste est dynamique, elle est donc ré-indexée à chaque appel
  boite.removeChild(boite.firstChild);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.firstChild")}}
- La propriété {{DOMxRef("Node.lastChild")}}
- La propriété {{DOMxRef("Node.nextSibling")}}
- La propriété {{DOMxRef("Node.previousSibling")}}
- La propriété {{DOMxRef("Element.children")}}
