---
title: "Element : évènement mousedown"
short-title: mousedown
slug: Web/API/Element/mousedown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement **`mousedown`** est déclenché sur un objet {{DOMxRef("Element")}} lorsqu'un bouton d'un dispositif de pointage est enfoncé alors que le pointeur se trouve à l'intérieur de l'élément.

Cela diffère de l'évènement {{DOMxRef("Element/click_event", "click")}} en ce que `click` est déclenché après qu'une action de clic complète se soit produite&nbsp;; c'est-à-dire que le bouton de la souris est enfoncé puis relâché alors que le pointeur reste à l'intérieur du même élément. `mousedown` est déclenché au moment où le bouton est initialement enfoncé.

Cela diffère également des évènements {{DOMxRef("Element/pointerdown_event", "pointerdown")}}. Lors de l'utilisation d'une souris physique, les évènements `mousedown` se déclenchent chaque fois qu'un bouton de la souris est enfoncé. Les évènements `pointerdown` ne se déclenchent que lors du premier appui sur un bouton&nbsp;; les appuis suivants ne déclenchent pas d'évènements `pointerdown`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mousedown", (event) => { })

onmousedown = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

Voir [la page sur l'évènement `mousemove`](/fr/docs/Web/API/Element/mousemove_event#exemples) pour un exemple de code.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mouseover_event", "mouseover")}}
- L'évènement {{DOMxRef("Element/mouseout_event", "mouseout")}}
- L'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- L'évènement {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
