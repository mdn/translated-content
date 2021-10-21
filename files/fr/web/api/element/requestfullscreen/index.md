---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
tags:
  - Méthode
  - Plein écran
translation_of: Web/API/Element/requestFullScreen
---
{{APIRef("Fullscreen API")}}

La méthode **`Element.requestFullscreen()`** envoie une requête asynchrone pour que l'élément soit affiché en plein écran.

Il n'y a aucune garantie que l'élément passera effectivement en mode plein écran. Si la permission d'entrer en plein écran est acquise, le document recevra un événement {{event("fullscreenchange")}} pour l'informer qu'il est désormais en mode plein écran. Si la permission est refusée, le document recevra un événement {{event('fullscreenerror')}} à la place.

Cette méthode doit être invoquée par l'interaction d'un utilisateur ou un changement d'orientation du périphérique, sinon elle échouera.

> **Note :** Seuls les éléments présents dans l'espace de noms (namespace) HTML (c'est à dire, les éléments qui font partie du standard HTML), ainsi que les éléments {{HTMLElement("svg")}} et {{HTMLElement("math")}}, qui se trouvent dans le plus haut niveau du document ou dans une {{HTMLElement('iframe')}} avec l'attribut {{htmlattrxref("allowfullscreen", "iframe")}} peuvent être affichés en plein écran. Cela signifie que les éléments se trouvant dans une {{HTMLElement('frame')}} ou un {{HTMLElement('object')}} ne le peuvent pas.

## Syntaxe

    Element.requestFullscreen();

## Exemple

Avant d'appeler `requestFullScreen()`, mettez en place des gestionnaires (handlers) pour les évenements  {{event("fullscreenchange")}} et {{event("fullscreenerror")}}, pour savoir lorsque vous avez réussi à passer en mode plein écran (ou lorsque la permission de le faire a été refusée).

tbd

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire        |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("Fullscreen", "#dom-element-requestfullscreen", "Element.requestFullScreen()")}} | {{Spec2("Fullscreen")}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.Element.requestFullscreen")}}

## Voir aussi

- [Full-screen API](/en-US/docs/Web/API/Fullscreen_API)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- {{ HTMLAttrXRef("allowfullscreen", "iframe") }}
