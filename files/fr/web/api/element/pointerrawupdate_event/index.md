---
title: "Element : évènement pointerrawupdate"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}{{SecureContext_Header}}

L'évènement **`pointerrawupdate`** est déclenché lorsqu'un pointeur modifie des propriétés qui ne déclenchent pas les évènements {{DOMxRef("Element/pointerdown_event", "pointerdown")}} ou {{DOMxRef("Element/pointerup_event", "pointerup")}}.
Voir {{DOMxRef("Element/pointermove_event", "pointermove")}} pour une liste de ces propriétés.

L'évènement `pointerrawupdate` peut avoir des évènements fusionnés s'il existe déjà un autre évènement `pointerrawupdate` avec le même ID de pointeur qui n'a pas été distribué dans la boucle d'évènements.
Pour des informations sur les évènements fusionnés, voir la documentation de {{DOMxRef("PointerEvent.getCoalescedEvents()")}}.

`pointerrawupdate` est destiné aux applications qui nécessitent une gestion des entrées à haute précision et qui ne peuvent pas obtenir une interaction fluide en utilisant uniquement les évènements fusionnés [`pointermove`](/fr/docs/Web/API/Element/pointermove_event).
Cependant, comme l'écoute des évènements `pointerrawupdate` peut affecter les performances, vous ne devez ajouter ces écouteurs que si votre JavaScript a besoin d'évènements à haute fréquence et peut les traiter aussi rapidement qu'ils sont distribués.
Pour la plupart des cas d'utilisation, les autres types d'évènements de pointeur doivent suffire.

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling) et est [composé](/fr/docs/Web/API/Event/composed), mais n'est pas [annulable](/fr/docs/Web/API/Event/cancelable) et n'a pas d'action par défaut.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PointerEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Exemples

```js
addEventListener("pointerrawupdate", (event) => {
  if (event.getCoalescedEvents && event.getCoalescedEvents().length > 1) {
    console.log("Évènements fusionnés :", event.getCoalescedEvents().length);
    for (let coalescedEvent of event.getCoalescedEvents()) {
      // Faire quelque chose avec les évènements fusionnés.
    }
  } else {
    // Faire quelque chose avec l'évènement.
    console.log("Évènement brut", event);
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements associés&nbsp;:
  - {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}
  - {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}
  - {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
