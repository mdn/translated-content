---
title: Plus grand rendu de contenu (LCP)
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

La mesure de performance **Plus grand rendu de contenu** (<abbr lang="en">LCP</abbr> pour <i lang="en">Largest Contentful Paint</i> en anglais) indique le temps de rendu de la plus grande image ou du plus grand bloc de texte visible dans la zone d'affichage (<i lang="en">viewport</i> en anglais), mesuré à partir du début du chargement de la page.

Les éléments suivants sont considérés comme {{Glossary("Contentful paint", "contenu complet")}} pour déterminer le LCP&nbsp;:

- Les éléments HTML {{HTMLElement("img")}}.
- Les éléments SVG {{SVGElement("image")}} à l'intérieur d'un SVG.
- Les images d'affiche (poster) des éléments HTML {{HTMLElement("video")}}.
- Les éléments ayant une propriété CSS {{CSSxRef("background-image")}}.
- Les groupes de nœuds de texte, comme {{HTMLElement("p")}}.

## Voir aussi

- L'interface API {{DOMxRef("LargestContentfulPaint")}}
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Contentful Paint", "Rendu de contenu")}}
  - {{Glossary("First Contentful Paint", "Premier rendu de contenu")}}
  - {{Glossary("First Paint", "Premier rendu")}}
