---
title: "Element : méthode removeAttributeNode()"
short-title: removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

La méthode **`removeAttributeNode()`** de l'interface {{DOMxRef("Element")}} supprime le nœud {{DOMxRef("Attr")}} indiqué de l'élément.

Si vous n'avez pas besoin d'inspecter le nœud d'attribut avant de le supprimer, vous pouvez utiliser la méthode {{DOMxRef("Element.removeAttribute()")}} à la place.

## Syntaxe

```js-nolint
removeAttributeNode(attributeNode)
```

### Paramètres

- `attributeNode`
  - : Le nœud d'attribut à supprimer de l'élément.

### Valeur de retour

Le nœud d'attribut qui a été supprimé.

### Exceptions

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Levée lorsque la liste d'attributs de l'élément ne contient pas le nœud d'attribut recherché.

## Exemples

```js
// Si on a <div id="top" disabled/>
const d = document.getElementById("top");
const d_disabled = d.getAttributeNode("disabled");
d.removeAttributeNode(d_disabled);
// disabled est désormais retiré : <div id="top" />
```

## Notes

Si l'attribut enlevé a une valeur par défaut, celle-ci remplace immédiatement l'ancienne. Lorsque c'est possible, l'attribut de remplacement conserve la même URI d'espace de noms et le même nom local, ainsi que le préfixe original.

Il n'existe pas de méthode `removeAttributeNodeNS()`, car `removeAttributeNode()` permet de supprimer des attributs, qu'ils appartiennent ou non à des espaces de noms.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La {{DOMxRef("Document.createAttribute()")}}
- La {{DOMxRef("Element.getAttributeNode()")}}
- La {{DOMxRef("Element.setAttributeNode()")}}
