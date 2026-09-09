---
title: "Element : méthode getAttributeNodeNS()"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

La méthode **`getAttributeNodeNS()`** de l'interface {{DOMxRef("Element")}} retourne l'attribut avec espace de noms défini de l'élément défini, sous la forme d'un nœud {{DOMxRef("Attr")}}. Elle retourne `null` si l'élément n'a pas d'attribut avec le nom donné dans l'espace de noms.

Cette méthode est utile si vous avez besoin des [propriétés d'instance](/fr/docs/Web/API/Attr#propriétés) de l'attribut avec espace de noms.
Si vous avez seulement besoin de la valeur de l'attribut avec espace de noms, vous pouvez utiliser la méthode {{DOMxRef("Element.getAttributeNS()", "getAttributeNS()")}} à la place.

Si vous travaillez avec des documents HTML et que vous n'avez pas besoin de définir que l'attribut demandé fait partie d'un espace de noms spécifique, utilisez plutôt la méthode {{DOMxRef("Element.getAttributeNode()", "getAttributeNode()")}}.

## Syntaxe

```js-nolint
getAttributeNodeNS(namespace, localName)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères définissant l'espace de noms de l'attribut, ou `null` pour aucun espace de noms explicite.
- `localName`
  - : Une chaîne de caractères définissant le nom de l'attribut.

### Valeur de retour

Un nœud `Attr` pour l'attribut demandé, ou `null` si l'élément n'a pas d'attribut avec le nom donné dans l'espace de noms.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createAttribute()")}}
- La méthode {{DOMxRef("Document.createAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNodeNS()")}}
