---
title: "Document : propriété rootElement"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

La propriété **`rootElement`** de l'interface {{DOMxRef("Document")}} retourne l'objet {{DOMxRef("Element")}} qui est l'élément racine du {{DOMxRef("document")}} s'il s'agit d'un élément {{SVGElement("svg")}}, sinon `null`. Elle est obsolète au profit de {{DOMxRef("Document.documentElement")}}, qui retourne l'élément racine pour tous les documents.

## Valeur

Pour les éléments SVG, l'objet {{DOMxRef("Element")}} qui est l'élément racine du {{DOMxRef("document")}}&nbsp;; sinon `null`.

Si le document est un document SVG non vide, alors `rootElement` est un {{DOMxRef("SVGSVGElement")}}, identique à `documentElement`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
