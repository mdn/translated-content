---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullscreen
---

{{APIRef("Fullscreen API")}}

La méthode **`Element.requestFullscreen()`** envoie une requête asynchrone pour que l'élément soit affiché en plein écran.

Il n'y a aucune garantie que l'élément passera effectivement en mode plein écran. Si la permission d'entrer en plein écran est acquise, le document recevra un événement [`fullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event) pour l'informer qu'il est désormais en mode plein écran. Si la permission est refusée, le document recevra un événement [`fullscreenerror`](/fr/docs/Web/API/Element/fullscreenerror_event) à la place.

Cette méthode doit être invoquée par l'interaction d'un utilisateur ou un changement d'orientation du périphérique, sinon elle échouera.

> **Note :** Seuls les éléments présents dans l'espace de noms (namespace) HTML (c'est à dire, les éléments qui font partie du standard HTML), ainsi que les éléments {{HTMLElement("svg")}} et {{HTMLElement("math")}}, qui se trouvent dans le plus haut niveau du document ou dans une {{HTMLElement('iframe')}} avec l'attribut [`allowfullscreen`](/fr/docs/Web/HTML/Element/iframe#allowfullscreen) peuvent être affichés en plein écran. Cela signifie que les éléments se trouvant dans une {{HTMLElement('frame')}} ou un {{HTMLElement('object')}} ne le peuvent pas.

## Syntaxe

```js
Element.requestFullscreen();
```

## Exemple

Avant d'appeler `requestFullScreen()`, mettez en place des gestionnaires (handlers) pour les évenements [`fullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event) et [`fullscreenerror`](/fr/docs/Web/API/Element/fullscreenerror_event), pour savoir lorsque vous avez réussi à passer en mode plein écran (ou lorsque la permission de le faire a été refusée).

tbd

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Full-screen API](/fr/docs/Web/API/Fullscreen_API)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- [`allowfullscreen`](/fr/docs/HTML/Element/iframe#allowfullscreen)
