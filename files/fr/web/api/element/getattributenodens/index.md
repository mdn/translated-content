---
title: "Element : méthode getAttributeNodeNS()"
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`getAttributeNodeNS()`**, associée à l'interface [`Element`](/fr/docs/Web/API/Element), renvoie le nœud [`Attr`](/fr/docs/Web/API/Attr) de l'élément courant avec l'espace de noms et le nom donnés.

Cette méthode est utile pour obtenir les [propriétés d'instance](/fr/docs/Web/API/Attr#propriétés) de l'attribut. Si on souhaite seulement obtenir la valeur de l'attribut de l'espace de noms, on pourra plutôt utiliser la méthode [`getAttributeNS()`](/fr/docs/Web/API/Element/getAttributeNS).

Si on souhaite obtenir le nœud [`Attr`](/fr/docs/Web/API/Attr) d'un élément HTML et que cet attribut n'est pas dans un espace de noms, on utilisera plutôt la méthode
[`getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode).

## Syntaxe

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### Paramètres

- `namespace`
  - : Une chaîne spécifiant l'espace de noms de l'attribut.
- `nodeName`
  - : Une chaîne spécifiant le nom de l'attribut.

### Valeur de retour

Le nœud [`Attr`](/fr/docs/Web/API/Attr) pour l'attribut spécifié.

## Notes

`getAttributeNodeNS()` est plus spécifique que [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode), car il permet de spécifier les attributs faisant partie d'un espace de noms donné. Le mutateur correspondant à cet accesseur est [`Element.setAttributeNodeNS()`](/fr/docs/Web/API/Element/setAttributeNodeNS).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode)
- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/fr/docs/Web/API/Document/createAttributeNS)
- [`Element.setAttributeNodeNS()`](/fr/docs/Web/API/Element/setAttributeNodeNS)
