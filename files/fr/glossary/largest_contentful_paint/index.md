---
title: Largest Contentful Paint (LCP)
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La mesure de performance **Largest Contentful Paint** (<abbr>LCP</abbr>) indique le temps de rendu de la plus grande image ou du plus grand bloc de texte visible dans la zone d'affichage (<i lang="en">viewport</i> en anglais), mesuré à partir du début du chargement de la page.

Les éléments suivants sont pris en compte pour déterminer le LCP&nbsp;:

- Les éléments HTML {{HTMLElement("img")}}.
- Les éléments SVG {{SVGElement("image")}} à l'intérieur d'un SVG.
- Les images d'affiche (poster) des éléments HTML {{HTMLElement("video")}}.
- Les éléments ayant une propriété CSS {{CSSxRef("background-image")}}.
- Les groupes de nœuds de texte, comme {{HTMLElement("p")}}.

## Voir aussi

- L'interface [`LargestContentfulPaint`](/fr/docs/Web/API/LargestContentfulPaint)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("First Contentful Paint", "Premier rendu de contenu")}}
  - {{Glossary("First Paint", "Premier rendu")}}
