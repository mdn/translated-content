---
title: "Element : évènement mouseup"
short-title: mouseup
slug: Web/API/Element/mouseup_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`mouseup`** est déclenché à partir d'un objet {{DOMxRef("Element")}} lorsqu'un bouton d'un dispositif de pointage (comme une souris ou un pavé tactile) est relâché lorsque le pointeur est sur cet élément.

Les évènements `mouseup` sont le comportement inverse des évènements {{DOMxRef("Element.mousedown_event", "mousedown")}}.

Ce comportement est différent de celui des évènements {{DOMxRef("Element/pointerup_event", "pointerup")}}. Lors de l'utilisation d'une souris physique, les évènements `mouseup` se déclenchent chaque fois qu'un bouton de la souris est relâché. Les évènements `pointerup` ne se déclenchent que lors du relâchement du dernier bouton&nbsp;; les relâchements des boutons précédents, alors que d'autres boutons sont maintenus enfoncés, ne déclenchent pas d'évènement `pointerup`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mouseup", (event) => { })

onmouseup = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

Voir la page sur [l'évènement `mousemove`](/fr/docs/Web/API/Element/mousemove_event#exemples) pour un exemple de code.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mouseover_event", "mouseover")}}
- L'évènement {{DOMxRef("Element/mouseout_event", "mouseout")}}
- L'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- L'évènement {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointerup_event", "pointerup")}}
