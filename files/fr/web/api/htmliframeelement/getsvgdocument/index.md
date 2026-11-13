---
title: "HTMLIFrameElement : méthode getSVGDocument()"
short-title: getSVGDocument()
slug: Web/API/HTMLIFrameElement/getSVGDocument
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML DOM")}}

La méthode **`getSVGDocument()`** de l'interface {{DOMxRef("HTMLIFrameElement")}} retourne l'objet {{DOMxRef("Document")}} du SVG intégré.

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
const svgDoc = document.getElementById("el").getSVGDocument();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLEmbedElement.getSVGDocument")}}
- La propriété {{DOMxRef("HTMLObjectElement.getSVGDocument")}}
