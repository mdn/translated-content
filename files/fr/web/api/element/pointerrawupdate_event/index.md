---
title: "Element : évènement pointerrawupdate"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: a0d27fbd56b5327923e072af498c3e8e3252afce
---

{{APIRef("Pointer Events")}}{{SecureContext_Header}}

L'évènement **`pointerrawupdate`** est déclenché lorsqu'un pointeur modifie des propriétés qui ne déclenchent pas les évènements {{DOMxRef("Element/pointerdown_event", "pointerdown")}} ou {{DOMxRef("Element/pointerup_event", "pointerup")}}.
Voir {{DOMxRef("Element/pointermove_event", "pointermove")}} pour une liste de ces propriétés.

L'évènement `pointerrawupdate` peut avoir des évènements fusionnés s'il existe déjà un autre évènement `pointerrawupdate` avec le même ID de pointeur qui n'a pas été distribué dans la boucle d'évènements.
Si les évènements sont fusionnés, la cible (`target`) de l'évènement distribué est la même que celle du dernier évènement fusionné.
Pour des informations sur les évènements fusionnés, voir la documentation de {{DOMxRef("PointerEvent.getCoalescedEvents()")}}.

La différence entre `pointerrawupdate` et {{DOMxRef("Element/pointermove_event", "pointermove")}} réside dans leur fréquence de déclenchement.
Un navigateur peut retarder les évènements `pointermove` pour améliorer les performances, tandis que les évènements `pointerrawupdate` sont distribués aussi rapidement et aussi fréquemment que le navigateur peut les produire.
Les deux types d'évènements peuvent être fusionnés, mais `pointerrawupdate` l'est moins, donc ses écouteurs s'exécutent plus souvent.
Un seul évènement transporte les mêmes valeurs de propriétés dans les deux cas, donc `pointerrawupdate` n'est pas plus précis dans l'espace ou le temps que l'évènement `pointermove` couvrant le même mouvement.

`pointerrawupdate` est donc destiné aux applications qui nécessitent une gestion des entrées à plus faible latence que ce que `pointermove` offre, comme le dessin ou le glissement qui, autrement, sont visiblement en retard par rapport au pointeur.
Comme les évènements arrivent plus souvent, une application qui suit leur rythme peut également sembler plus fluide.
Cependant, comme l'écoute des évènements `pointerrawupdate` peut affecter les performances, vous ne devez ajouter ces écouteurs que si votre JavaScript a besoin d'évènements à haute fréquence et peut les traiter aussi rapidement qu'ils sont distribués.
Pour la plupart des cas d'utilisation, les autres types d'évènements de pointeur doivent suffire.
Une application qui ne peut pas suivre le rythme semble moins réactive plutôt que plus, donc une optimisation importante à l'intérieur du gestionnaire d'évènements est nécessaire.
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
canvas.addEventListener("pointerrawupdate", (event) => {
  const events = event.getCoalescedEvents();
  if (events.length > 1) {
    console.log("Évènements fusionnés :", events.length);
    for (const coalescedEvent of events) {
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
