---
title: Force Touch events
slug: Web/API/Force_Touch_events
---

{{DefaultAPISidebar("Force Touch events")}}

{{Non-standard_header()}}

**Force Touch events** est une fonctionnalité propriétaire propre à Apple et qui rend possibles (si supporté par le matériel d'entrée) de nouvelles interactions basées sur le fait que l'utilisateur clique ou appuie sur l'écran tactile ou sur le trackpad.

## Évènements

- [`webkitmouseforcewillbegin`](/fr/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{non-standard_inline}}
  - : Cet évènement est lancé avant l'évènement [`mousedown`](/fr/docs/Web/API/Element/mousedown_event). Son utilisation principale est de permettre {{domxref("Event.preventDefault()")}}.
- [`webkitmouseforcedown`](/fr/docs/Web/API/Element/webkitmouseforcedown_event) {{non-standard_inline}}
  - : Cet évènement est lancé après l'évènement [`mousedown`](/fr/docs/Web/API/Element/mousedown_event) dès qu'une pression suffisante a été appliquée pour qu'il puisse être qualifié de "clic de force".
- [`webkitmouseforceup`](/fr/docs/Web/API/Element/webkitmouseforceup_event) {{non-standard_inline}}
  - : Cet évènement est lancé après l'évènement [`webkitmouseforcedown`](/fr/docs/Web/API/Element/webkitmouseforcedown_event) dès que la pression a été suffisamment réduite pour terminer le "clic de force".
- [`webkitmouseforcechanged`](/fr/docs/Web/API/Element/webkitmouseforcechanged_event) {{non-standard_inline}}
  - : Cet évènement est lancé chaque fois que la quantité de pression change. Il se déclenche d'abord après l'événement [`mousedown`](/fr/docs/Web/API/Element/mousedown_event) et s'arrête avant l'événement [`mouseup`](/fr/docs/Web/API/Element/mouseup_event).

## Propriété des évènements

La propriété suivante est connue pour être disponible sur les objets évènement [`webkitmouseforcewillbegin`](/fr/docs/Web/API/Element/webkitmouseforcewillbegin_event), [`mousedown`](/fr/docs/Web/API/Element/mousedown_event), [`webkitmouseforcechanged`](/fr/docs/Web/API/Element/webkitmouseforcechanged_event), [`webkitmouseforcedown`](/fr/docs/Web/API/Element/webkitmouseforcedown_event), [`webkitmouseforceup`](/fr/docs/Web/API/Element/webkitmouseforceup_event), [`mousemove`](/fr/docs/Web/API/Element/mousemove_event) et [`mouseup`](/fr/docs/Web/API/Element/mouseup_event):

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
