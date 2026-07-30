---
title: "Element : évènement DOMMouseScroll"
short-title: DOMMouseScroll
slug: Web/API/Element/DOMMouseScroll_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}{{Deprecated_Header}}{{Non-standard_Header}}

L'évènement DOM `DOMMouseScroll` est déclenché de manière asynchrone lorsque la molette de souris ou un dispositif similaire est utilisé et que la quantité de défilement accumulée dépasse 1 ligne ou 1 page depuis le dernier évènement. Il est représenté par l'interface {{DOMxRef("MouseScrollEvent")}}. Cet évènement n'a été implémenté que par Firefox. Vous devez plutôt utiliser l'évènement standard {{DOMxRef("Element.wheel_event", "wheel")}}.

Si vous voulez empêcher l'action par défaut des évènements de la molette de souris, il ne suffit pas de gérer uniquement cet évènement sur Gecko, car si la quantité de défilement par un évènement natif de la molette de souris est inférieure à 1 ligne (ou inférieure à 1 page lorsque le paramètre système est par défilement par page), d'autres évènements de la molette de souris peuvent être déclenchés sans cet évènement.

Sur Gecko 17 (Firefox 17) ou ultérieur, vous devez appeler `preventDefault()` des évènements `wheel` qui doivent être déclenchés pour chaque évènement natif.

Utilisez l'évènement standardisé {{DOMxRef("Element/wheel_event","wheel")}} si disponible.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("DOMMouseScroll", (event) => { })

onDOMMouseScroll = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("WheelEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("MouseScrollEvent")}}
- L'évènement de défilement en pixels hérité de Gecko&nbsp;: `MozMousePixelScroll`
- L'évènement de la molette de souris hérité des navigateurs autres que Gecko&nbsp;: `mousewheel`
- L'évènement standardisé de la molette de souris&nbsp;: `wheel`
