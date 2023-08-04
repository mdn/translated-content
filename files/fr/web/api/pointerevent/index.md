---
title: PointerEvent
slug: Web/API/PointerEvent
---

{{ APIRef("Pointer Events") }}

L'interface **`PointerEvent`** représente les données de l'état d'un évènement du DOM produit par un pointeur, tels que la géométrie du point de contact, le type d'appareil qui a généré l'évènement, l'intensité de pression qui a été appliquée au contact de la surface, etc.

Un _pointeur_ est une représentation agnostique de tout appareil de saisie (tels qu'une souris, un stylet, ou un point de contact sur une surface tactile). Le pointeur peut cibler des coordonnées spécifiques (ou une collection de coordonnées) sur la surface de contact telle qu'un écran.

Le _test de ciblage_ d'un pointeur est le processus qu'un navigateur utilise pour déterminer l'élément pour un évènement de pointeur. Typiquement, cela est déterminé en considérant la position du pointeur ainsi que l'agencement visuel des éléments dans un document sur l'écran.

## Constructeurs

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : Crée un PointerEvent synthétique et anonyme.

## Propriétés

_Cette interface hérite des proprétés de {{domxref("MouseEvent")}} et {{domxref("Event")}}._

- {{ domxref('PointerEvent.pointerId')}} {{readonlyInline}}
  - : Un identifiant unique pour le pointeur ayant provoqué l'évènement.
- {{ domxref('PointerEvent.width')}} {{readonlyInline}}
  - : La largeur (magnitude sur l'axe X), en pixels CSS, de la géométrie de contact du pointeur.
- {{ domxref('PointerEvent.height')}} {{readonlyInline}}
  - : La hauteur (magniture sur l'axe Y), en pixels CSS, de la géométrie de contact du pointeur.
- {{ domxref('PointerEvent.pressure')}} {{readonlyInline}}
  - : La pressure normalisée de l'influx du pointeur dans un intervalle compris entre 0 et 1, où 0 et 1 représentent respectivement la pression minimale et maximale que l'appareil est capable de détecter.
- {{ domxref('PointerEvent.tangentialPressure')}} {{readonlyInline}}
  - : La pression tangentielle normalisée d'un influx de pointeur (également nommée compression ou contrainte cylindrique), où 0 et 1 représentent respectivement la pression minimale et maximale que l'appareil est capable de détecter.
- {{ domxref('PointerEvent.tiltX')}} {{readonlyInline}}
  - : Le plan de l'angle (en dégrés, dans un intervalle compris entre -90 et 90) entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (ex. : un crayon stylet) et l'axe Y.
- {{ domxref('PointerEvent.tiltY')}} {{readonlyInline}}
  - : Le plan de l'angle (en dégrés, dans un intervalle compris entre -90 et 90) entre le plan X-Z et le plan contenant à la fois l'axe du transducteur (ex. : un crayon stylet) et l'axe X.
- {{ domxref('PointerEvent.twist')}} {{readonlyInline}}
  - : La rotation en degrés et dans le sens des aiguilles d'une montre, d'un transducteur (ex. : crayon stylet) autour de axe principal, avec une valeur comprise dans un intervalle entre 0 et 359.
- {{ domxref('PointerEvent.pointerType')}} {{readonlyInline}}
  - : Indique le type d'appareil qui a provoqué l'évènement (souris, stylet, touché, etc.)
- {{ domxref('PointerEvent.isPrimary')}} {{readonlyInline}}
  - : Indique si le pointeur est le principal appareil de ce type.

## Methods

- {{ domxref('PointerEvent.getCoalescedEvents()')}} {{deprecated_inline}}
  - : Retourne une séquence de toutes les instances de `PointerEvent` qui ont été dirigées vers l'évènement [`pointermove`](/fr/docs/Web/API/Element/pointermove_event) envoyé.

## Types d'évènements de pointeur

L'interface `PointerEvent` a plusieurs types d'évènements. Pour déterminer quel évènement s'est produit, regardez la propriété {{ domxref("Event.type", "type") }} de l'évènement.

> **Note :** Il est important de remarquer que dans beaucoup de cas, à la fois les évènements du pointeur et de la souris sont envoyés (afin de laisser la logique interagir avec l'utilisateur même lorsqu'elle n'est pas spécifique à un type de pointeur) . Si vous utilisez les évènements de pointeur, vous devez exécuter {{ domxref("event.preventDefault()") }} afin d'empêcher l'évènement de la souris d'être également envoyée.

- [`pointerover`](/fr/docs/Web/API/Element/pointerover_event)
  - : Cet évènement est déclenché lorsqu'un appareil de pointage est déplacé vers la zone du test de ciblage d'un élément.
- [`pointerenter`](/fr/docs/Web/API/Element/pointerenter_event)
  - : Cet évènement est déclenché lorsqu'un appareil de pointage est déplacé vers la zone du test de ciblage d'un élément ou l'un de ses descendants, ce qui inclut un évènement de pointage vers le bas d'un appareil qui ne propose pas de fonctionnalité de survol (voir pointage vers le bas). Ce type d'évènement est similaire à un pointage par dessus, mais se différencie en ne faisant pas circuler l'évènement.
- [`pointerdown`](/fr/docs/Web/API/Element/pointerdown_event)
  - : L'évènement est déclenché lorsqu'un pointeur devient _actif_. Pour une souris, il est déclenché lorsque l'appareil passe d'aucun bouton pressé à au moins un bouton pressé. Pour un touché, il est déclenché lorsqu'un contact physique est effectué avec le numériseur. Pour un stylet, il est déclenché au contact de ce dernier avec le numériseur.
- [`pointermove`](/fr/docs/Web/API/Element/pointermove_event)
  - : Cet évènement est déclenché lorsqu'un pointeur change de coordonnées.
- [`pointerup`](/fr/docs/Web/API/Element/pointerup_event)
  - : Cet événement est déclenché lorsqu'un pointeur n'est plus _actif_.
- [`pointercancel`](/fr/docs/Web/API/Element/pointercancel_event)
  - : Un navigateur déclenche cet évènement s'il conclut que le pointeur ne sera plus capable de générer des évènements (par exemple, l'appareil concerné a été désactivé).
- [`pointerout`](/fr/docs/Web/API/Element/pointerout_event)
  - : Cet évènement est déclenché pour plusieurs raisons qui incluent : l'appareil de pointage est déplacé en dehors de la zone du test de ciblage d'un élément; déclencher l'évènement de pointage vers le haut pour un appareil qui ne supporte pas le survol (voir pointage vers le haut); après avoir déclenché un évènement de pointage annulé (voir pointage annulé); lorsqu'un stylet quitte la zone de portée pour être détectée au survol par le numériseur.
- [`pointerleave`](/fr/docs/Web/API/Element/pointerleave_event)
  - : Cet évènement est déclenché lorsqu'un appareil de pointage est déplacé en dehors de la zone de ciblage d'un élément. Pour les appareils avec un stylet, cet évènement est déclenché lorsque le stylet quitte la zone de portée pour être détectée au survol par le numériseur.
- [`gotpointercapture`](/fr/docs/Web/API/Element/gotpointercapture_event)
  - : Cet évènement est déclenché lorsqu'un élément est capturé par un pointeur.
- [`lostpointercapture`](/fr/docs/Web/API/Element/lostpointercapture_event)
  - : Cet évènement est déclenché après qu'un pointeur ait relâché sa capture.

## GlobalEventHandlers

- {{ domxref('GlobalEventHandlers.onpointerover') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointerover`](/fr/docs/Web/API/Element/pointerover_event).
- {{ domxref('GlobalEventHandlers.onpointerenter') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointerenter`](/fr/docs/Web/API/Element/pointerenter_event).
- {{ domxref('GlobalEventHandlers.onpointerdown') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointerdown`](/fr/docs/Web/API/Element/pointerdown_event).
- {{ domxref('GlobalEventHandlers.onpointermove') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointermove`](/fr/docs/Web/API/Element/pointermove_event).
- {{ domxref('GlobalEventHandlers.onpointerup') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointerup`](/fr/docs/Web/API/Element/pointerup_event).
- {{ domxref('GlobalEventHandlers.onpointercancel') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointercancel`](/fr/docs/Web/API/Element/pointercancel_event).
- {{ domxref('GlobalEventHandlers.onpointerout') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointerout`](/fr/docs/Web/API/Element/pointerout_event).
- {{ domxref('GlobalEventHandlers.onpointerleave') }}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement [`pointerleave`](/fr/docs/Web/API/Element/pointerleave_event).

## Exemple

Un exemple de chaque propriété, type d'évènement, et un gestionnaire d'évènements global sont inclus dans leur page respective de référence.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ domxref("Touch_events","Touch Events") }}
- {{ domxref("GestureEvent") }}
- {{ domxref("MSGestureEvent") }}
- {{cssxref("touch-action")}}
