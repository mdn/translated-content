---
title: "Document : méthode createNSResolver()"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("DOM")}}{{Deprecated_Header}}

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
