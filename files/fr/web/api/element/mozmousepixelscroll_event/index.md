---
title: "Element : évènement MozMousePixelScroll"
short-title: MozMousePixelScroll
slug: Web/API/Element/MozMousePixelScroll_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{Non-standard_Header}}

L'évènement pour Firefox uniquement, _non standard_, et _obsolète_ **`MozMousePixelScroll`** est déclenché de manière asynchrone sur un objet {{DOMxRef("Element")}} lorsqu'une molette de souris ou un dispositif similaire est utilisé. Il est représenté par l'interface {{DOMxRef("MouseScrollEvent")}}.

> [!NOTE]
> N'utilisez pas cet évènement non standard et obsolète. Utilisez toujours l'évènement standard {{DOMxRef("Element.wheel_event", "wheel")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("MozMousePixelScroll", (event) => { })

onMozMousePixelScroll = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("WheelEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Obtenir la distance défilée

La propriété {{DOMxRef("UIEvent/detail", "detail")}} de l'évènement indique la distance de défilement en termes de lignes, les valeurs négatives indiquant que le mouvement de défilement se fait vers le bas ou vers la droite, et les valeurs positives indiquant un défilement vers le haut ou vers la gauche.

Si les évènements de molette de souris natifs de la plateforme indiquent la distance de défilement en termes de lignes ou de pages, la valeur de `detail` est calculée en utilisant cette valeur et la hauteur de ligne ou la largeur/hauteur de page de l'élément défilable ancêtre le plus proche contenant l'élément cible.

> [!NOTE]
> Sur macOS, la distance de défilement (et donc la valeur de `detail`) est calculée en fonction de la distance de défilement accélérée.

La valeur de `detail` n'est jamais 0 si les évènements sont légitimes.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("MouseScrollEvent")}}
- L'évènement de défilement par ligne ou par page hérité de Gecko&nbsp;: `DOMMouseScroll`
- L'évènement de molette de souris hérité des navigateurs hors Gecko&nbsp;: `mousewheel`
- L'évènement de molette de souris standardisé&nbsp;: `wheel`
