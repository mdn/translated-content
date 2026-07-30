---
title: "Element : méthode getAttributeNodeNS()"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`getAttributeNodeNS()`** de l'interface {{DOMxRef("Element")}} retourne le nœud {{DOMxRef("Attr")}} de l'élément avec l'espace de noms défini.

Cette méthode est utile si vous avez besoin des [propriétés d'instance](/fr/docs/Web/API/Attr#propriétés) de l'attribut avec espace de noms.
Si vous avez seulement besoin de la valeur de l'attribut avec espace de noms, vous pouvez utiliser la méthode {{DOMxRef("Element.getAttributeNS()", "getAttributeNS()")}} à la place.

Si vous avez besoin du nœud {{DOMxRef("Attr")}} d'un élément dans des documents HTML et que l'attribut n'a pas d'espace de noms, utilisez plutôt la méthode {{DOMxRef("Element.getAttributeNode()", "getAttributeNode()")}}.

## Syntaxe

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères définissant l'espace de noms de l'attribut.
- `nodeName`
  - : Une chaîne de caractères définissant le nom de l'attribut.

### Valeur de retour

Le nœud pour l'attribut défini.

## Notes

`getAttributeNodeNS()` est plus spécifique que {{DOMxRef("Element.getAttributeNode()")}}, car il permet de définir les attributs faisant partie d'un espace de noms donné. Le mutateur correspondant à cet accesseur est {{DOMxRef("Element.setAttributeNodeNS()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Document.createAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNodeNS()")}}
