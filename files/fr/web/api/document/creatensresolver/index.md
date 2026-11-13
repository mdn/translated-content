---
title: "Document : méthode createNSResolver()"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

La méthode **`createNSResolver()`** de l'interface {{DOMxRef("Document")}} était utilisée pour créer un objet `XPathNSResolver` personnalisé. Elle retourne maintenant l'entrée telle quelle et est conservée uniquement pour des raisons de compatibilité.

## Syntaxe

```js-nolint
createNSResolver(nodeResolver)
```

### Paramètres

- `nodeResolver`
  - : Un nœud ({{DOMxRef("Node")}}).

### Valeur de retour

`nodeResolver` lui-même.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.evaluate()")}}
- [Introduction à l'utilisation de XPath avec JavaScript](/fr/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
