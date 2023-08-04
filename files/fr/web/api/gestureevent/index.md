---
title: GestureEvent
slug: Web/API/GestureEvent
---

{{APIRef("DOM Events")}}

{{Non-standard_header()}}

L'interface propriétaire **`GestureEvent`** propre à WebKitdonne des informations sur les gestes multi-touches. Les événements utilisant cette interface incluent [`gesturestart`](/fr/docs/Web/API/Element/gesturestart_event), [`gesturechange`](/fr/docs/Web/API/Element/gesturechange_event) et [`gestureend`](/fr/docs/Web/API/Element/gestureend_event).

`GestureEvent` dérive de {{domxref("UIEvent")}} qui elle-même dérive de {{domxref("Event")}}.

## Constructeur

- {{domxref("GestureEvent.GestureEvent", "GestureEvent()")}}
  - : Crée un nouvel objet `GestureEvent`.

## Propriétés

_Cette interface hérite aussi des propriétés de ses parents {{domxref("UIEvent")}} et {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{readonlyinline}}
  - : Changement de rotation (en degrés) depuis le début de l'événement. Les valeurs positives indiquent une rotation dans le sens des aiguilles d'une montre ; les valeurs négatives indiquent une rotation dans le sens inverse des aiguilles d'une montre. Valeur initiale : `0.0`
- {{domxref("GestureEvent.scale")}} {{readonlyinline}}
  - : Distance entre deux chiffres depuis le début de l'événement. Exprimé en tant que multiple à virgule flottante de la distance initiale entre les chiffres au début du geste. Les valeurs inférieures à 1,0 indiquent une poussée vers l'intérieur (zoom arrière). Les valeurs supérieures à 1.0 indiquent un relachement vers l'extérieur (zoom avant). Valeur initiale: `1.0`

## Méthodes

_Cette interface hérite aussi des méthodes de ses parents {{domxref("UIEvent")}} et {{domxref("Event")}}._

- {{domxref("GestureEvent.initGestureEvent()")}}
  - : Initialise la valeur d'un `GestureEvent`. Si l'évènement a déjà été distribué, cette méthode ne fait rien.

## Types d'événement gestuel

- [`gesturestart`](/fr/docs/Web/API/Element/gesturestart_event)
- [`gesturechange`](/fr/docs/Web/API/Element/gesturechange_event)
- [`gestureend`](/fr/docs/Web/API/Element/gestureend_event)

## Spécifications

_Ne fait partie d'aucune spécification._ Apple a une [description dans la bibliothèque Safari Developer (en anglais)](https://developer.apple.com/documentation/webkitjs/gestureevent).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("MSGestureEvent")}}
- [`MSGestureStart`](/fr/docs/Web/API/Element/MSGestureStart_event)
- [`MSGestureEnd`](/fr/docs/Web/API/Element/MSGestureEnd_event)
- [`MSGestureTap`](/fr/docs/Web/API/Element/MSGestureTap_event)
- [`MSGestureHold`](/fr/docs/Web/API/Element/MSGestureHold_event)
- [`MSGestureChange`](/fr/docs/Web/API/Element/MSGestureChange_event)
- [`MSInertiaStart`](/fr/docs/Web/API/Element/MSInertiaStart_event)
