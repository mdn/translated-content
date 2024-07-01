---
title: "Element : méthode removeAttributeNode()"
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`removeAttributeNode()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), supprime le nœud [`Attr`](/fr/docs/Web/API/Attr) indiqué de l'élément.

Si vous n'avez pas besoin d'inspecter le nœud d'attribut avant de la supprimer, vous pouvez utiliser la méthode [`Element.removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute) à la place.

## Syntaxe

```js-nolint
removeAttributeNode(attributeNode)
```

### Paramètres

- `attributeNode`
  - : Le nœud `Attr` à supprimer de l'élément

### Valeur de retour

Le nœud `Attr` qui a été supprimé.

### Exceptions

- `NotFoundError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Levée lorsque la liste d'attribut de l'élément ne contient pas le nœud d'attribut recherché.

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

- [`Document.removeAttribute()`](/fr/docs/Web/API/Document/removeAttribute)
- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode)
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)
