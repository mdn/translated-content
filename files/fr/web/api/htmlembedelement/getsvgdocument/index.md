---
title: "HTMLEmbedElement : méthode getSVGDocument()"
short-title: getSVGDocument()
slug: Web/API/HTMLEmbedElement/getSVGDocument
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML DOM")}}

La méthode **`getSVGDocument()`** de l'interface {{DOMxRef("HTMLEmbedElement")}} retourne l'objet {{DOMxRef("Document")}} du SVG intégré.

## Syntaxe

```js-nolint
getSVGDocument()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("Document")}}.

## Exemples

```js
const svg = document.getElementById("el").getSVGDocument();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLIFrameElement.getSVGDocument")}}
- La propriété {{DOMxRef("HTMLObjectElement.getSVGDocument")}}
