---
title: PointerEvent
slug: Web/API/PointerEvent
translation_of: Web/API/PointerEvent
---
{{ APIRef("Pointer Events") }}

L'interface **`PointerEvent`** représente les données de l'état d'un événément du DOM produit par un pointeur, tels que la géométrie du point de contact, le type d'appareil qui a généré l'événément, l'intensité de pression qui a été appliquée au contact de la surface, etc.

Un *pointeur* est une représentation agnostique de tout appareil de saisie (tels qu'une souris, un stylet, ou un point de contact sur une surface tactile). Le pointeur peut cibler des coordonnées spécifiques (ou une collection de coordonnées) sur la surface de contact telle qu'un écran.

Le *test de ciblage* d'un pointeur est le processus qu'un navigateur utilise pour déterminer l'élément pour un événément de pointeur. Typiquement, cela est déterminé en considérant la position du pointeur ainsi que l'agencement visuel des éléments dans un document sur l'écran.

## Constructeurs

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : Crée un PointerEvent synthétique et anonyme.

## Propriétés

_Cette interface hérite des proprétés de {{domxref("MouseEvent")}} et {{domxref("Event")}}._

- {{ domxref('PointerEvent.pointerId')}} {{readonlyInline}}
  - : Un identifiant unique pour le pointeur ayant provoqué l'événément.
- {{ domxref('PointerEvent.width')}} {{readonlyInline}}
  - : La largeur (magnitude sur l'axe X), en pixels CSS, de la géométrie de contact du pointeur.
- {{ domxref('PointerEvent.height')}} {{readonlyInline}}
  - : La hauteur (magniture sur l'axe Y), en pixels CSS, de la géométrie de contact du pointeur.
- {{ domxref('PointerEvent.pressure')}} {{readonlyInline}}
  - : La pressure normalisée de l'influx du pointeur dans un intervalle compris entre 0 et 1, où 0 et 1 représentent respectivement la pression minimale et maximale que l'appareil est capable de détecter.
- {{ domxref('PointerEvent.tangentialPressure')}} {{readonlyInline}}
  - : La pression tangentielle normalisée d'un influx de pointeur (également nommée compression ou contrainte cylindrique), où 0 et 1 représentent respectivement la pression minimale et maximale que l'appareil est capable de détecter.
- {{ domxref('PointerEvent.tiltX')}} {{readonlyInline}}
  - : Le plan de l'angle (en dégrés, dans un intervalle compris entre -90 et 90) entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (ex. : un crayon stylet) et l'axe Y.
- {{ domxref('PointerEvent.tiltY')}} {{readonlyInline}}
  - : Le plan de l'angle (en dégrés, dans un intervalle compris entre -90 et 90) entre le plan X-Z et le plan contenant à la fois l'axe du transducteur (ex. : un crayon stylet) et l'axe X.
- {{ domxref('PointerEvent.twist')}} {{readonlyInline}}
  - : La rotation en degrés et dans le sens des aiguilles d'une montre, d'un transducteur (ex. : crayon stylet) autour de axe principal, avec une valeur comprise dans un intervalle entre 0 et 359.
- {{ domxref('PointerEvent.pointerType')}} {{readonlyInline}}
  - : Indique le type d'appareil qui a provoqué l'événément (souris, stylet, touché, etc.)
- {{ domxref('PointerEvent.isPrimary')}} {{readonlyInline}}
  - : Indique si le pointeur est le principal appareil de ce type.

## Methods

- {{ domxref('PointerEvent.getCoalescedEvents()')}} {{deprecated_inline}}
  - : Retourne une séquence de toutes les instances de `PointerEvent` qui ont été dirigées vers l'événément {{event("pointermove")}} envoyé.

## Types d'événéments de pointeur

L'interface `PointerEvent` a plusieurs types d'événéments. Pour déterminer quel événément s'est produit, regardez la propriété {{ domxref("Event.type", "type") }} de l'événément.

> **Note :** Il est important de remarquer que dans beaucoup de cas, à la fois les événéments du pointeur et de la souris sont envoyés (afin de laisser la logique interagir avec l'utilisateur même lorsqu'elle n'est pas spécifique à un type de pointeur) . Si vous utilisez les événéments de pointeur, vous devez exécuter {{ domxref("event.preventDefault()") }} afin d'empêcher l'événément de la souris d'être également envoyée.

- {{event('pointerover')}}
  - : Cet événément est déclenché lorsqu'un appareil de pointage est déplacé vers la zone du test de ciblage d'un élément.
- {{event('pointerenter')}}
  - : Cet événément est déclenché lorsqu'un appareil de pointage est déplacé vers la zone du test de ciblage d'un élément ou l'un de ses descendants, ce qui inclut un événément de pointage vers le bas d'un appareil qui ne propose pas de fonctionnalité de survol (voir pointage vers le bas). Ce type d'événément est similaire à un pointage par dessus, mais se différencie en ne faisant pas circuler l'événément.
- {{event('pointerdown')}}
  - : L'événément est déclenché lorsqu'un pointeur devient _actif_. Pour une souris, il est déclenché lorsque l'appareil passe d'aucun bouton pressé à au moins un bouton pressé. Pour un touché, il est déclenché lorsqu'un contact physique est effectué avec le numériseur. Pour un stylet, il est déclenché au contact de ce dernier avec le numériseur.
- {{event('pointermove')}}
  - : Cet événément est déclenché lorsqu'un pointeur change de coordonnées.
- {{event('pointerup')}}
  - : Cet événement est déclenché lorsqu'un pointeur n'est plus _actif_.
- {{event('pointercancel')}}
  - : Un navigateur déclenche cet événément s'il conclut que le pointeur ne sera plus capable de générer des événéments (par exemple, l'appareil concerné a été désactivé).
- {{event('pointerout')}}
  - : Cet événément est déclenché pour plusieurs raisons qui incluent : l'appareil de pointage est déplacé en dehors de la zone du test de ciblage d'un élément; déclencher l'événément de pointage vers le haut pour un appareil qui ne supporte pas le survol (voir pointage vers le haut); après avoir déclenché un événément de pointage annulé (voir pointage annulé); lorsqu'un stylet quitte la zone de portée pour être détectée au survol par le numériseur.
- {{event('pointerleave')}}
  - : Cet événément est déclenché lorsqu'un appareil de pointage est déplacé en dehors de la zone de ciblage d'un élément. Pour les appareils avec un stylet, cet événément est déclenché lorsque le stylet quitte la zone de portée pour être détectée au survol par le numériseur.
- {{event('gotpointercapture')}}
  - : Cet événément est déclenché lorsqu'un élément est capturé par un pointeur.
- {{event('lostpointercapture')}}
  - : Cet événément est déclenché après qu'un pointeur ait relâché sa capture.

## GlobalEventHandlers

- {{ domxref('GlobalEventHandlers.onpointerover') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerover')}}.
- {{ domxref('GlobalEventHandlers.onpointerenter') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerenter')}}.
- {{ domxref('GlobalEventHandlers.onpointerdown') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerdown')}}.
- {{ domxref('GlobalEventHandlers.onpointermove') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointermove')}}.
- {{ domxref('GlobalEventHandlers.onpointerup') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerup')}}.
- {{ domxref('GlobalEventHandlers.onpointercancel') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointercancel')}}.
- {{ domxref('GlobalEventHandlers.onpointerout') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerout')}}.
- {{ domxref('GlobalEventHandlers.onpointerleave') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerleave')}}.

## Exemple

Un exemple de chaque propriété, type d'événément, et un gestionnaire d'événéments global sont inclus dans leur page respective de référence.

## Spécifications

| Specification                                                                                        | Status                                   | Comment              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Pointer Events 2','#pointerevent-interface', 'PointerEvent')}} | {{Spec2('Pointer Events 2')}} | Version non-stable.  |
| {{SpecName('Pointer Events', '#pointerevent-interface', 'PointerEvent')}}     | {{Spec2('Pointer Events')}}     | Définition initiale. |

## Compatibilité navigateurs

{{Compat("api.PointerEvent")}}

## See also

- {{ domxref("Touch_events","Touch Events") }}
- {{ domxref("GestureEvent") }}
- {{ domxref("MSGestureEvent") }}
- {{cssxref("touch-action")}}
