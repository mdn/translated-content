---
title: Vue CSSOM
slug: Web/CSS/Guides/CSSOM_view
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module de **vue CSSOM** permet de manipuler la vue visuelle d'un document, y compris obtenir la position des boîtes de mise en page des éléments, obtenir la largeur ou la hauteur de la fenêtre d'affichage avec un script, et également faire défiler un élément.

## Référence

### Évènements

- Évènements {{DOMxRef("Window")}}&nbsp;:
  - {{DOMxRef("Window/resize_event", "resize")}}
- Évènements {{DOMxRef("VisualViewport")}}&nbsp;:
  - {{DOMxRef("VisualViewport/resize_event", "resize")}}
  - {{DOMxRef("VisualViewport/scroll_event", "scroll")}}
  - {{DOMxRef("VisualViewport/scrollend_event", "scrollend")}}
- Évènements {{DOMxRef("Document")}}&nbsp;:
  - {{DOMxRef("Document/scroll_event", "scroll")}}
  - {{DOMxRef("Document/scrollend_event", "scrollend")}}
- Évènements {{DOMxRef("Element")}}&nbsp;:
  - {{DOMxRef("Element/scroll_event", "scroll")}}
  - {{DOMxRef("Element/scrollend_event", "scrollend")}}
- Évènements {{DOMxRef("MediaQueryList")}}&nbsp;:
  - {{DOMxRef("MediaQueryList/change_event", "change")}}

### Termes du glossaire

- {{Glossary("Viewport", "Zone d'affichage")}}
- {{Glossary("Layout viewport", "Zone de mise en page")}}
- {{Glossary("Visual viewport", "Zone d'affichage visuelle")}}

### API

Pour l'API JavaScript définie par ce module, voir la documentation de [l'API de vue CSSOM](/fr/docs/Web/API/CSSOM_view_API).

## Guides

- [Systèmes de coordonnées](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Les systèmes de coordonnées utilisés pour définir une position dans un contexte d'affichage tel qu'une fenêtre sur un moniteur, une zone d'affichage sur un appareil mobile ou une position sur une feuille de papier lors de l'impression.
- [Concepts de la zone d'affichage](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : Le concept de la zone d'affichage — ce que c'est, son impact en termes de CSS, SVG et appareils mobiles — et la différence entre la zone d'affichage visuelle et la zone de mise en page.

## Concepts associés

- {{CSSxRef("zoom")}}
- {{HTMLElement("meta")}}

### Termes du glossaire

- {{Glossary("CSSOM", "Modèle d'objet CSS (CSSOM)")}}
- {{Glossary("CSS pixel", "Pixel CSS")}}
- {{Glossary("Scroll container", "Conteneur de défilement")}}

## Spécifications

{{Specifications}}

## Voir aussi

- L'API du [Modèle d'objet CSS (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)
- [L'API Vue CSSOM](/fr/docs/Web/API/CSSOM_view_API)
- Le module [de zone d'affichage CSS](/fr/docs/Web/CSS/Guides/Viewport)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [de comportement de dépassement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
- Le module [de capture de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
