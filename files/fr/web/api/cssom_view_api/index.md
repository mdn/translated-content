---
title: API CSSOM view
slug: Web/API/CSSOM_view_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSSOM view API")}}

**L'API de vue CSSOM** vous permet de manipuler la vue visuelle d'un document, y compris d'obtenir la position des boîtes de mise en page des éléments, d'obtenir la largeur ou la hauteur de la zone d'affichage par le biais de scripts, et également de faire défiler un élément.

## Guides

- [Systèmes de coordonnées](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Les systèmes de coordonnées utilisés pour définir une position dans un contexte d'affichage tel qu'une fenêtre sur un moniteur, une zone d'affichage sur un appareil mobile ou une position sur une feuille de papier lors de l'impression.
- [Concepts relatifs au viewport](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : Le concept de la zone d'affichage — ce que c'est, son impact en termes de CSS, SVG et appareils mobiles — et la différence entre la zone d'affichage visuelle et la zone d'affichage de mise en page.

## Interfaces

- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("CaretPosition")}}
- {{DOMxRef("VisualViewport")}}

## Extensions vers d'autres interfaces

Ce module ajoute des propriétés, des méthodes et des événements aux interfaces définies dans d'autres spécifications.

### Extensions à Window

- {{DOMxRef("Window.devicePixelRatio", "devicePixelRatio")}}
- {{DOMxRef("Window.innerHeight", "innerHeight")}}
- {{DOMxRef("Window.innerWidth", "innerWidth")}}
- {{DOMxRef("Window.matchMedia", "matchMedia()")}}
- {{DOMxRef("Window.moveBy", "moveBy()")}}
- {{DOMxRef("Window.moveTo", "moveTo()")}}
- {{DOMxRef("Window.outerHeight", "outerHeight")}}
- {{DOMxRef("Window.outerWidth", "outerWidth")}}
- `pageXOffset` (voir {{DOMxRef("Window.scrollX", "scrollX")}})
- `pageYOffset` (voir {{DOMxRef("Window.scrollY", "scrollY")}})
- {{DOMxRef("Window.resizeBy", "resizeBy()")}}
- {{DOMxRef("Window.resizeTo", "resizeTo()")}}
- {{DOMxRef("Window.screen", "screen")}}
- {{DOMxRef("Window.screenLeft", "screenLeft")}}
- {{DOMxRef("Window.screenTop", "screenTop")}}
- {{DOMxRef("Window.screenX", "screenX")}}
- {{DOMxRef("Window.screenY", "screenY")}}
- {{DOMxRef("Window.visualViewport", "visualViewport")}}
- {{DOMxRef("Window.scroll", "scroll()")}}
- {{DOMxRef("Window.scrollBy", "scrollBy()")}}
- {{DOMxRef("Window.scrollTo", "scrollTo()")}}
- {{DOMxRef("Window.scrollX", "scrollX")}}
- {{DOMxRef("Window.scrollY", "scrollY")}}
- L'évènement {{DOMxRef("Window/resize_event", "resize")}}

### Extensions à Document

- {{DOMxRef("Document.elementFromPoint", "elementFromPoint()")}}
- {{DOMxRef("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
- {{DOMxRef("Document.scrollingElement", "scrollingElement")}}
- L'évènement {{DOMxRef("Document/scroll_event", "scroll")}}
- L'évènement {{DOMxRef("Document/scrollend_event", "scrollend")}}

### Extensions à Element

- {{DOMxRef("Element.checkVisibility", "checkVisibility()")}}
- {{DOMxRef("Element.clientHeight", "clientHeight")}}
- {{DOMxRef("Element.clientLeft", "clientLeft")}}
- {{DOMxRef("Element.clientTop", "clientTop")}}
- {{DOMxRef("Element.clientWidth", "clientWidth")}}
- {{DOMxRef("Element.currentCSSZoom", "currentCSSZoom")}}
- {{DOMxRef("Element.getBoundingClientRect", "getBoundingClientRect()")}}
- {{DOMxRef("Element.getClientRects", "getClientRects()")}}
- {{DOMxRef("Element.scroll", "scroll()")}}
- {{DOMxRef("Element.scrollBy", "scrollBy()")}}
- {{DOMxRef("Element.scrollHeight", "scrollHeight")}}
- {{DOMxRef("Element.scrollIntoView", "scrollIntoView()")}}
- {{DOMxRef("Element.scrollLeft", "scrollLeft")}}
- {{DOMxRef("Element.scrollTo", "scrollTo()")}}
- {{DOMxRef("Element.scrollTop", "scrollTop")}}
- {{DOMxRef("Element.scrollWidth", "scrollWidth")}}
- L'évènement {{DOMxRef("Element/scroll_event", "scroll")}}
- L'évènement {{DOMxRef("Element/scrollend_event", "scrollend")}}

### Extensions à HTMLElement

- {{DOMxRef("HTMLElement.offsetHeight", "offsetHeight")}}
- {{DOMxRef("HTMLElement.offsetLeft", "offsetLeft")}}
- {{DOMxRef("HTMLElement.offsetParent", "offsetParent")}}
- {{DOMxRef("HTMLElement.offsetTop", "offsetTop")}}
- {{DOMxRef("HTMLElement.offsetWidth", "offsetWidth")}}

### Extensions à HTMLImageElement

- {{DOMxRef("HTMLImageElement.x", "x")}}
- {{DOMxRef("HTMLImageElement.y", "y")}}

### Extensions à Range

- {{DOMxRef("Range.getBoundingClientRect", "getBoundingClientRect()")}}
- {{DOMxRef("Range.getClientRects", "getClientRects()")}}

### Extensions à MouseEvent

- {{DOMxRef("MouseEvent.clientX", "clientX")}}
- {{DOMxRef("MouseEvent.clientY", "clientY")}}
- {{DOMxRef("MouseEvent.offsetX", "offsetX")}}
- {{DOMxRef("MouseEvent.offsetY", "offsetY")}}
- {{DOMxRef("MouseEvent.pageX", "pageX")}}
- {{DOMxRef("MouseEvent.pageY", "pageY")}}
- {{DOMxRef("MouseEvent.screenY", "screenY")}}
- {{DOMxRef("MouseEvent.x", "x")}}
- {{DOMxRef("MouseEvent.y", "y")}}

Ce module définit des méthodes utilitaires géométriques qui s'appliquent aux interfaces {{DOMxRef("Text")}}, {{DOMxRef("Element")}}, {{DOMxRef("CSSPseudoElement")}} et {{DOMxRef("Document")}}. Ces fonctionnalités `GeometryUtils` ne sont pas encore implémentées dans aucun navigateur.

## Spécifications

{{Specifications}}

## Voir aussi

- L'API [CSS Object Model (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)
- Le module de [vue CSSOM](/fr/docs/Web/CSS/Guides/CSSOM_view)
- Le module de [débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module de [comportement de défilement excessif CSS](/fr/docs/Web/CSS/CSS_overscroll_behavior)
- Le module de [défilement par accrochage CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- L'entrée du glossaire {{Glossary("Viewport", "Vue")}}
- L'entrée du glossaire {{Glossary("Layout viewport", "Vue de mise en page")}}
- L'entrée du glossaire {{Glossary("Visual viewport", "Vue visuelle")}}
- La propriété CSS {{CSSxRef("zoom")}}
- L'entrée du glossaire {{Glossary("CSSOM")}}
- L'entrée du glossaire {{Glossary("CSS pixel")}}
- L'entrée du glossaire {{Glossary("Scroll container", "Boîte de défilement")}}
- L'élément HTML {{HTMLElement("meta")}}
