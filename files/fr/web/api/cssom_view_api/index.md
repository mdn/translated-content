---
title: CSSOM view API
slug: Web/API/CSSOM_view_API
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{DefaultAPISidebar("CSSOM view API")}}

L'**API CSSOM view** vous permet de manipuler la vue visuelle d'un document, y compris d'obtenir la position des boîtes de mise en page des éléments, d'obtenir la largeur ou la hauteur de la zone d'affichage par le biais de scripts, et également de faire défiler un élément.

## Guides

- [Systèmes de coordonnées](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems)
  - : Les systèmes de coordonnées utilisés pour spécifier une position dans un contexte d'affichage tel qu'une fenêtre sur un moniteur, une zone d'affichage sur un appareil mobile ou une position sur une feuille de papier lors de l'impression.
- [Concepts relatifs au viewport](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : Le concept de la zone d'affichage — ce que c'est, son impact en termes de CSS, SVG et appareils mobiles — et la différence entre la zone d'affichage visuelle et la zone d'affichage de mise en page.

## Interfaces

- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
- {{domxref("Screen")}}
- {{domxref("CaretPosition")}}
- {{domxref("VisualViewport")}}

## Extensions vers d'autres interfaces

Ce module ajoute des propriétés, des méthodes et des événements aux interfaces définies dans d'autres spécifications.

### Extensions à Window

- {{domxref("Window.devicePixelRatio", "devicePixelRatio")}}
- {{domxref("Window.innerHeight", "innerHeight")}}
- {{domxref("Window.innerWidth", "innerWidth")}}
- {{domxref("Window.matchMedia", "matchMedia()")}}
- {{domxref("Window.moveBy", "moveBy()")}}
- {{domxref("Window.moveTo", "moveTo()")}}
- {{domxref("Window.outerHeight", "outerHeight")}}
- {{domxref("Window.outerWidth", "outerWidth")}}
- `pageXOffset` (voir {{domxref("Window.scrollX", "scrollX")}})
- `pageYOffset` (voir {{domxref("Window.scrollY", "scrollY")}})
- {{domxref("Window.resizeBy", "resizeBy()")}}
- {{domxref("Window.resizeTo", "resizeTo()")}}
- {{domxref("Window.screen", "screen")}}
- {{domxref("Window.screenLeft", "screenLeft")}}
- {{domxref("Window.screenTop", "screenTop")}}
- {{domxref("Window.screenX", "screenX")}}
- {{domxref("Window.screenY", "screenY")}}
- {{domxref("Window.visualViewport", "visualViewport")}}
- {{domxref("Window.scroll", "scroll()")}}
- {{domxref("Window.scrollBy", "scrollBy()")}}
- {{domxref("Window.scrollTo", "scrollTo()")}}
- {{domxref("Window.scrollX", "scrollX")}}
- {{domxref("Window.scrollY", "scrollY")}}
- L'événement {{domxref("Window/resize_event", "resize")}}

### Extensions à Document

- {{domxref("Document.elementFromPoint", "elementFromPoint()")}}
- {{domxref("Document.caretPositionFromPoint", "caretPositionFromPoint()")}}
- {{domxref("Document.scrollingElement", "scrollingElement")}}
- L'événement {{domxref("Document/scroll_event", "scroll")}}
- L'événement {{domxref("Document/scrollend_event", "scrollend")}}

### Extensions à Element

- {{domxref("Element.checkVisibility", "checkVisibility()")}}
- {{domxref("Element.clientHeight", "clientHeight")}}
- {{domxref("Element.clientLeft", "clientLeft")}}
- {{domxref("Element.clientTop", "clientTop")}}
- {{domxref("Element.clientWidth", "clientWidth")}}
- {{domxref("Element.currentCSSZoom", "currentCSSZoom")}}
- {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}}
- {{domxref("Element.getClientRects", "getClientRects()")}}
- {{domxref("Element.scroll", "scroll()")}}
- {{domxref("Element.scrollBy", "scrollBy()")}}
- {{domxref("Element.scrollHeight", "scrollHeight")}}
- {{domxref("Element.scrollIntoView", "scrollIntoView()")}}
- {{domxref("Element.scrollLeft", "scrollLeft")}}
- {{domxref("Element.scrollTo", "scrollTo()")}}
- {{domxref("Element.scrollTop", "scrollTop")}}
- {{domxref("Element.scrollWidth", "scrollWidth")}}
- L'événement {{domxref("Element/scroll_event", "scroll")}}
- L'événement {{domxref("Element/scrollend_event", "scrollend")}}

### Extensions à HTMLElement

- {{domxref("HTMLElement.offsetHeight", "offsetHeight")}}
- {{domxref("HTMLElement.offsetLeft", "offsetLeft")}}
- {{domxref("HTMLElement.offsetParent", "offsetParent")}}
- {{domxref("HTMLElement.offsetTop", "offsetTop")}}
- {{domxref("HTMLElement.offsetWidth", "offsetWidth")}}

### Extensions à HTMLImageElement

- {{domxref("HTMLImageElement.x", "x")}}
- {{domxref("HTMLImageElement.y", "y")}}

### Extensions à Range

- {{domxref("Range.getBoundingClientRect", "getBoundingClientRect()")}}
- {{domxref("Range.getClientRects", "getClientRects()")}}

### Extensions à MouseEvent

- {{domxref("MouseEvent.clientX", "clientX")}}
- {{domxref("MouseEvent.clientY", "clientY")}}
- {{domxref("MouseEvent.offsetX", "offsetX")}}
- {{domxref("MouseEvent.offsetY", "offsetY")}}
- {{domxref("MouseEvent.pageX", "pageX")}}
- {{domxref("MouseEvent.pageY", "pageY")}}
- {{domxref("MouseEvent.screenY", "screenY")}}
- {{domxref("MouseEvent.x", "x")}}
- {{domxref("MouseEvent.y", "y")}}

Ce module définit des méthodes utilitaires géométriques qui s'appliquent aux interfaces {{domxref("Text")}}, {{domxref("Element")}}, {{domxref("CSSPseudoElement")}} et {{domxref("Document")}}. Ces fonctionnalités `GeometryUtils` ne sont pas encore implémentées dans aucun navigateur.

## Spécifications

{{Specifications}}

## Voir aussi

- L'API [CSS Object Model (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)
- Le module de [vue CSSOM](/fr/docs/Web/CSS/Guides/CSSOM_view)
- Le module de [débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module de [comportement de défilement excessif CSS](/fr/docs/Web/CSS/CSS_overscroll_behavior)
- Le module de [défilement par accrochage CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- L'entrée du glossaire {{glossary("Viewport", "Vue")}}
- L'entrée du glossaire {{glossary("Layout viewport", "Vue de mise en page")}}
- L'entrée du glossaire {{glossary("Visual viewport", "Vue visuelle")}}
- La propriété CSS {{cssxref("zoom")}}
- L'entrée du glossaire {{glossary("CSSOM")}}
- L'entrée du glossaire {{glossary("CSS pixel")}}
- L'entrée du glossaire {{glossary("Scroll container", "Boîte de défilement")}}
- L'élément HTML {{htmlelement("meta")}}
