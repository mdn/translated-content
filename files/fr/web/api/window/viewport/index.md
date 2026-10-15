---
title: "Window : propriété viewport"
short-title: viewport
slug: Web/API/Window/viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

La propriété en lecture seule **`viewport`** de l'interface {{DOMxRef("Window")}} retourne une instance d'objet {{DOMxRef("Viewport")}}, qui fournit des informations sur l'état actuel de la zone d'affichage du dispositif.

Consultez l'API {{DOMxRef("Viewport")}} pour connaître toutes les propriétés disponibles.

## Valeur

Une instance d'objet {{DOMxRef("Viewport")}}.

## Exemples

### Utilisation simple de `viewport`

```js
const zoneAffichageActuelle = window.viewport;
const segments = window.viewport.segments;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Viewport.segments")}}
- L'interface {{DOMxRef("Viewport")}}
- L'interface {{DOMxRef("VisualViewport")}}
- [L'API Viewport Segments](/fr/docs/Web/API/Viewport_segments_API)
- [L'API CSSOM view](/fr/docs/Web/API/CSSOM_view_API)
- [Les concepts de zone d'affichage](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- Le module [de zone d'affichage CSS](/fr/docs/Web/CSS/Guides/Viewport)
- Le module [de vue CSSOM](/fr/docs/Web/CSS/Guides/CSSOM_view)
