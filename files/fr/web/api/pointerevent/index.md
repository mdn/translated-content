---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("Pointer Events")}}

L'interface **`PointerEvent`** représente l'état d'un évènement du DOM produit par un pointeur, tels que la géométrie du point de contact, le type d'appareil qui a généré l'évènement, l'intensité de pression qui a été appliquée au contact de la surface, etc.

Un _pointeur_ est une représentation agnostique du matériel des dispositifs d'entrée (tels qu'une souris, un stylet ou un point de contact sur une surface tactile). Le pointeur peut cibler des coordonnées spécifiques (ou un ensemble de coordonnées) sur la surface de contact telle qu'un écran.

Le _test de ciblage_ d'un pointeur est le processus qu'un navigateur utilise pour déterminer l'élément cible pour un évènement de pointeur. Typiquement, cela est déterminé en considérant la position du pointeur ainsi que l'agencement visuel des éléments dans un document sur un support écran.

{{InheritanceDiagram}}

## Constructeurs

- {{DOMxRef("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : Crée un `PointerEvent` synthétique et non fiable.

## Propriétés d'instance

_Cette interface hérite des propriétés de {{DOMxRef("MouseEvent")}} et de {{DOMxRef("Event")}}._

- {{DOMxRef("PointerEvent.altitudeAngle")}} {{ReadOnlyInline}}
  - : Représente l'angle entre l'axe d'un transducteur (un pointeur ou un stylet) et le plan X-Y d'un écran de dispositif.
- {{DOMxRef("PointerEvent.azimuthAngle")}} {{ReadOnlyInline}}
  - : Représente l'angle entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (un pointeur ou un stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.persistentDeviceId")}} {{ReadOnlyInline}}
  - : Un identifiant unique pour le dispositif de pointage générant le `PointerEvent`.
- {{DOMxRef("PointerEvent.pointerId")}} {{ReadOnlyInline}}
  - : Un identifiant unique pour le pointeur à l'origine de l'évènement.
- {{DOMxRef("PointerEvent.width")}} {{ReadOnlyInline}}
  - : La largeur (magnitude sur l'axe X), en pixels CSS, de la géométrie de contact du pointeur.
- {{DOMxRef("PointerEvent.height")}} {{ReadOnlyInline}}
  - : La hauteur (magnitude sur l'axe Y), en pixels CSS, de la géométrie de contact du pointeur.
- {{DOMxRef("PointerEvent.pressure")}} {{ReadOnlyInline}}
  - : La pression normalisée de l'entrée du pointeur dans la plage `0` à `1`, où `0` et `1` représentent respectivement la pression minimale et maximale que le matériel est capable de détecter.
- {{DOMxRef("PointerEvent.tangentialPressure")}} {{ReadOnlyInline}}
  - : La pression tangentielle normalisée de l'entrée du pointeur (également connue sous le nom de pression de la bague ou [contrainte du cylindre <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Cylinder_stress)) dans la plage `-1` à `1`, où `0` est la position neutre du contrôle.
- {{DOMxRef("PointerEvent.tiltX")}} {{ReadOnlyInline}}
  - : L'angle plan (en degrés, dans la plage de `-90` à `90`) entre le plan Y-Z et le plan contenant à la fois l'axe du pointeur (par exemple, le stylet) et l'axe Y.
- {{DOMxRef("PointerEvent.tiltY")}} {{ReadOnlyInline}}
  - : L'angle plan (en degrés, dans la plage de `-90` à `90`) entre le plan X-Z et le plan contenant à la fois l'axe du pointeur (par exemple, le stylet) et l'axe X.
- {{DOMxRef("PointerEvent.twist")}} {{ReadOnlyInline}}
  - : La rotation dans le sens des aiguilles d'une montre du pointeur (par exemple, le stylet) autour de son axe principal en degrés, avec une valeur dans la plage `0` à `359`.
- {{DOMxRef("PointerEvent.pointerType")}} {{ReadOnlyInline}}
  - : Indique le type de dispositif ayant provoqué l'évènement (souris, stylet, tactile, etc.).
- {{DOMxRef("PointerEvent.isPrimary")}} {{ReadOnlyInline}}
  - : Indique si le pointeur représente le pointeur principal de ce type de pointeur.

## Méthodes d'instance

- {{DOMxRef("PointerEvent.getCoalescedEvents()")}} {{SecureContext_Inline}}
  - : Retourne une séquence de toutes les instances de `PointerEvent` qui ont été fusionnées dans l'évènement {{DOMxRef("Element/pointermove_event", "pointermove")}} envoyé.
- {{DOMxRef("PointerEvent.getPredictedEvents()")}}
  - : Retourne une séquence d'instances de `PointerEvent` que le navigateur prévoit suivre les évènements fusionnés de l'évènement {{DOMxRef("Element/pointermove_event", "pointermove")}} envoyé.

## Types d'évènements de pointeur

L'interface `PointerEvent` a plusieurs types d'évènements. Pour déterminer quel évènement a été déclenché, consultez la propriété {{DOMxRef("Event.type", "type")}} de l'évènement.

> [!NOTE]
> Il est important de noter que dans de nombreux cas, les évènements de pointeur et de souris sont tous deux envoyés (afin de permettre au code non spécifique aux pointeurs d'interagir avec l'utilisateur·ice). Si vous utilisez des évènements de pointeur, vous devez appeler {{DOMxRef("Event.preventDefault()", "preventDefault()")}} pour empêcher l'envoi de l'évènement de souris.

- {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - : Cet évènement est déclenché lorsqu'un dispositif de pointage est déplacé dans les limites de test de l'élément.
- {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - : Cet évènement est déclenché lorsqu'un dispositif de pointage est déplacé dans les limites de test d'un élément ou de l'un de ses descendants, y compris à la suite d'un évènement `pointerdown` provenant d'un dispositif qui ne prend pas en charge le survol (voir `pointerdown`). Ce type d'évènement est similaire à `pointerover`, mais diffère en ce qu'il ne se propage pas.
- {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - : L'évènement est déclenché lorsqu'un pointeur devient _actif_. Pour la souris, il est déclenché lorsque le dispositif passe de l'état où aucun bouton n'est enfoncé à l'état où au moins un bouton est enfoncé. Pour le tactile, il est déclenché lorsqu'un contact physique est établi avec le numériseur. Pour le stylet, il est déclenché lorsque le stylet entre en contact physique avec le numériseur.

    > [!NOTE]
    > Pour les navigateurs tactiles qui permettent la [manipulation directe](https://w3c.github.io/pointerevents/#dfn-direct-manipulation), un évènement `pointerdown` déclenche la [capture implicite du pointeur](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture), ce qui fait que la cible capture tous les évènements de pointeur suivants comme s'ils se produisent sur la cible qui capture. En conséquence, `pointerover`, `pointerenter`, `pointerleave` et `pointerout` **ne sont pas déclenchés** tant que cette capture est active. La capture peut être libérée manuellement en appelant {{DOMxRef("Element.releasePointerCapture")}} sur l'élément cible, ou elle est libérée implicitement après un évènement `pointerup` ou `pointercancel`.

- {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - : Cet évènement est déclenché lorsqu'un pointeur change de coordonnées.
- {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}} {{Experimental_Inline}}
  - : Cet évènement est déclenché lorsque l'une des propriétés d'un pointeur change.
- {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - : Cet évènement est déclenché lorsqu'un pointeur n'est plus _actif_.
- {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - : Un navigateur déclenche cet évènement s'il conclut que le pointeur ne peut plus générer d'évènements (par exemple si le dispositif associé est désactivé).
- {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - : Cet évènement est déclenché pour plusieurs raisons, notamment&nbsp;: le dispositif de pointage est déplacé en dehors des limites de test de l'élément&nbsp;; le déclenchement de l'évènement `pointerup` pour un dispositif qui ne prend pas en charge le survol (voir `pointerup`)&nbsp;; après le déclenchement de l'évènement `pointercancel` (voir `pointercancel`)&nbsp;; lorsqu'un stylet quitte la plage de survol détectable par le numériseur.
- {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - : Cet évènement est déclenché lorsqu'un dispositif de pointage est déplacé en dehors des limites de test de l'élément. Pour les dispositifs stylet, cet évènement est déclenché lorsque le stylet quitte la plage de survol détectable par le numériseur.
- {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}
  - : Cet évènement est déclenché lorsqu'un élément reçoit la capture du pointeur.
- {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}
  - : Cet évènement est déclenché après que la capture du pointeur a été libérée pour un pointeur.

## Exemple

Un exemple de chaque propriété, type d'évènement, et un gestionnaire d'évènements global sont inclus dans leur page respective de référence.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les évènements tactiles](/fr/docs/Web/API/Touch_events)
- L'interface {{DOMxRef("GestureEvent")}}
- La propriété CSS {{CSSxRef("touch-action")}}
