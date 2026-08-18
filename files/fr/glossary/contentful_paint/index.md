---
title: Rendu de contenu
slug: Glossary/Contentful_paint
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Plusieurs indicateurs de performance tels que {{Glossary("First_contentful_paint", "Premier rendu de contenu (FCP)")}} et {{Glossary("Largest_contentful_paint", "Plus grand rendu de contenu (LCP)")}} utilisent le concept de «&nbsp;rendu de contenu&nbsp;».

Les rendus de contenu sont des opérations de rendu qui affichent un contenu significatif et sont donc importants pour les mesures de performance. Ils se distinguent des rendus moins importants qui ne contiennent aucun contenu utile pour l'utilisateur·ice, comme les rendus de couleur de fond. Par exemple, une page qui se charge, définit la couleur de fond, mais n'affiche ensuite aucun contenu réel pendant une longue période n'est pas aussi utile qu'une page qui affiche du texte, des images ou d'autres contenus.

Ce qui compte exactement comme «&nbsp;contenu&nbsp;» est en partie basé sur des heuristiques et peut ne pas correspondre parfaitement à la perception de l'utilisateur·ice ou à l'intention du·de la développeur·euse. Cela signifie que les rendus affichés à l'écran de différentes manières peuvent être considérés comme «&nbsp;contenu&nbsp;» ou non, même s'ils apparaissent identiques pour l'utilisateur·ice. Par exemple, utiliser un {{HTMLElement("div")}} avec une couleur de fond n'est pas considéré comme du contenu, tandis qu'utiliser un {{HTMLElement("img")}} ou un {{SVGElement("svg")}} pour cette couleur peut être considéré comme du contenu.

Les types de rendus considérés comme du contenu diffèrent également légèrement selon les indicateurs&nbsp;:

- Le FCP est destiné à mesurer le moment où la page commence à se charger. Il [inclut donc la plupart des éléments qui se peignent <sup>(angl.)</sup>](https://w3c.github.io/paint-timing/#contentful) y compris {{HTMLElement("canvas")}} et les éléments `<svg>`. Les écrans squelettes utilisant uniquement des éléments `<div>` ne sont pas considérés comme du contenu.
- Le LCP est destiné à mesurer le moment où la page est principalement chargée et prête pour l'utilisateur·ice, il essaie donc de s'assurer qu'il y a un contenu significatif avant de se déclencher. Il a des critères plus stricts que le FCP, ne comptant comme contenu que les éléments [éligibles au minutage <sup>(angl.)</sup>](https://w3c.github.io/paint-timing/#timing-eligible). Il n'inclut donc pas les éléments `<canvas>` ou `<svg>`, car il est plus difficile de mesurer quand (ou même si) ils représentent le plus grand contenu affiché sur la page. De plus, le LCP exclut également les images à faible entropie.
- D'autres indicateurs comme le [rendu de contenu d'interaction](/fr/docs/Web/API/InteractionContentfulPaint), la [navigation douce](/fr/docs/Web/API/PerformanceSoftNavigation), le [minutage des éléments](/fr/docs/Web/API/PerformanceElementTiming), et le prochain [minutage des conteneurs <sup>(angl.)</sup>](https://github.com/WICG/container-timing) sont plus proches du modèle LCP avec quelques petites différences, comme le fait que les images à faible entropie ne sont pas exclues.

## Voir aussi

- Termes de glossaire associés&nbsp;:
  - {{Glossary("First Contentful Paint", "Premier rendu de contenu")}}
  - {{Glossary("Largest Contentful Paint", "Plus grand rendu de contenu")}}
- Les API Performance
  - {{DOMxRef("InteractionContentfulPaint")}}
  - {{DOMxRef("LargestContentfulPaint")}}
  - {{DOMxRef("PerformanceElementTiming")}}
  - {{DOMxRef("PerformancePaintTiming")}}
  - {{DOMxRef("PerformanceSoftNavigation")}}
