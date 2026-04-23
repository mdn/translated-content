---
title: "Document : propriété rootElement"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété **`rootElement`** de l'interface {{DOMxRef("Document")}} retourne l'objet {{DOMxRef("Element")}} qui est l'élément racine du {{DOMxRef("document")}} s'il s'agit d'un élément {{SVGElement("svg")}}, sinon `null`. Elle est obsolète au profit de {{DOMxRef("Document.documentElement")}}, qui retourne l'élément racine pour tous les documents.

## Valeur

Pour les éléments SVG, l'objet {{DOMxRef("Element")}} qui est l'élément racine du {{DOMxRef("document")}}&nbsp;; sinon `null`.

Si le document est un document SVG non vide, alors `rootElement` sera un {{DOMxRef("SVGSVGElement")}}, identique à `documentElement`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
