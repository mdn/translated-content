---
title: Force Touch events
slug: Web/API/Force_Touch_events
tags:
  - API
  - DOM
  - Evènement
  - Mobile
translation_of: Web/API/Force_Touch_events
---
{{DefaultAPISidebar("Force Touch events")}}

{{Non-standard_header()}}

**Force Touch events** est une fonctionnalité propriétaire propre à Apple et qui rend possibles (si supporté par le matériel d'entrée) de nouvelles interactions basées sur le fait que l'utilisateur clique ou appuie sur l'écran tactile ou sur le trackpad.

## Évènements

- {{event("webkitmouseforcewillbegin")}} {{non-standard_inline}}
  - : Cet évènement est lancé avant l'évènement {{event("mousedown")}}. Son utilisation principale est de permettre {{domxref("Event.preventDefault()")}}.
- {{event("webkitmouseforcedown")}} {{non-standard_inline}}
  - : Cet évènement est lancé après l'évènement {{event("mousedown")}} dès qu'une pression suffisante a été appliquée pour qu'il puisse être qualifié de "clic de force".
- {{event("webkitmouseforceup")}} {{non-standard_inline}}
  - : Cet évènement est lancé après l'évènement {{event("webkitmouseforcedown")}} dès que la pression a été suffisamment réduite pour terminer le "clic de force".
- {{event("webkitmouseforcechanged")}} {{non-standard_inline}}
  - : Cet évènement est lancé chaque fois que la quantité de pression change. Il se déclenche d'abord après l'événement {{event ("mousedown")}} et s'arrête avant l'événement {{event ("mouseup")}}.

## Propriété des évènements

La propriété suivante est connue pour être disponible sur les objets évènement {{event("webkitmouseforcewillbegin")}}, {{event("mousedown")}}, {{event("webkitmouseforcechanged")}}, {{event("webkitmouseforcedown")}}, {{event("webkitmouseforceup")}}, {{event("mousemove")}} et {{event("mouseup")}}:

- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : La quantité de pression actuellement appliquée sur le trackpad / écran tactile.

## Constantes

Ces constantes sont utiles pour déterminer l'intensité relative de la pression indiquée par {{domxref ("MouseEvent.webkitForce")}} :

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Force minimum nécessaire pour un click normal.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Force minimum nécessaire pour un click de force.

## Spécifications

_Ne fait partie d'aucune spécification._ Apple a [une description dans la bibilitothèque Mac Developer](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).
