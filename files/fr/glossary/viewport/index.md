---
title: Zone d'affichage (Viewport)
slug: Glossary/Viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

En infographie, une **zone d'affichage** représente une zone polygonale (généralement rectangulaire) qui est actuellement visualisée.

Dans le contexte des navigateurs Web, il s'agit de la partie du document affichée dans la fenêtre du navigateur (ou à l'écran, si le document est consulté sur un navigateur mobile ou en mode plein écran sur un navigateur de bureau). Le contenu situé en dehors de la zone d'affichage n'est pas visible à l'écran tant qu'il n'est pas amené dans la zone visible par défilement.

La portion de la zone d'affichage actuellement visible est appelée **{{Glossary("visual viewport", "zone d'affichage visuelle")}}**. Elle peut être plus petite que la zone d'affichage de mise en page, par exemple lorsque l'utilisateur·ice effectue un zoom par pincement. La {{Glossary("layout viewport", "zone d'affichage de mise en page")}} reste identique, mais la zone d'affichage visuelle devient alors plus petite.

La zone d'affichage visuelle d'un élément {{HTMLElement("iframe")}}, {{SVGElement("svg")}} ou {{HTMLElement("object")}} correspond à la largeur et à la hauteur internes de l'élément concerné, et non pas au document parent. Pour le contenu rendu à l'intérieur de l'élément, la zone d'affichage visuelle et la zone d'affichage de mise en page sont identiques.

## Voir aussi

- {{Glossary("Visual viewport", "Zone d'affichage visuelle")}}
- {{Glossary("Layout viewport", "Zone d'affichage de mise en page")}}
- [Concepts de la zone d'affichage](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [Le module de vue CSSOM](/fr/docs/Web/CSS/Guides/CSSOM_view)
- [L'API de vue CSSOM](/fr/docs/Web/API/CSSOM_view_API)
- [Viewport <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Viewport) sur Wikipédia
- [Histoire de deux zones d'affichage <sup>(angl.)</sup>](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
