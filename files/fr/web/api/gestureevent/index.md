---
title: GestureEvent
slug: Web/API/GestureEvent
tags:
  - API
  - DOM
  - Evènement
  - Interface
translation_of: Web/API/GestureEvent
---
{{APIRef("DOM Events")}}

{{Non-standard_header()}}

L'interface propriétaire **`GestureEvent`** propre à WebKitdonne des informations sur les gestes multi-touches. Les événements utilisant cette interface incluent {{event("gesturestart")}}, {{event("gesturechange")}} et {{event("gestureend")}}.

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

- {{event("gesturestart")}}
- {{event("gesturechange")}}
- {{event("gestureend")}}

## Spécifications

_Ne fait partie d'aucune spécification._ Apple a une [description dans la bibliothèque Safari Developer (en anglais)](https://developer.apple.com/documentation/webkitjs/gestureevent).

## Compatibilité des navigateurs

{{Compat("api.GestureEvent")}}

## Voir aussi

- {{domxref("MSGestureEvent")}}
- {{event("MSGestureStart")}}
- {{event("MSGestureEnd")}}
- {{event("MSGestureTap")}}
- {{event("MSGestureHold")}}
- {{event("MSGestureChange")}}
- {{event("MSInertiaStart")}}
