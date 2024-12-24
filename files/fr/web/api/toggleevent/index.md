---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{APIRef("UI Events")}}

L'interface **`ToggleEvent`** représente un évènement qui notifie lorsqu'un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) change d'état entre visible et masqué.

Cette interface est implémentée par les évènements [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event) et [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event) émis par `HTMLElement` lorsqu'un <i lang="en">popover</i> change d'état, visible ou masqué (avant et après, respectivement).

{{InheritanceDiagram}}

> **Note :** `ToggleEvent` n'a aucun rapport avec l'évènement [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event) de l'élément [`<details>`](/fr/docs/Web/HTML/Element/details), qui se déclenche sur un élément `<details>` lorsque son état `open`/`closed` change. Dans ce cas, `toggle` implémente l'interface générique [`Event`](/fr/docs/Web/API/Event).

## Constructeur

- [`ToggleEvent()`](/fr/docs/Web/API/ToggleEvent/ToggleEvent)
  - : Crée un objet `ToggleEvent`.

## Propriétés de l'instance

_Cette interface hérite des propriétés de son parent, [`Event`](/fr/docs/Web/API/Event)._

- [`ToggleEvent.newState`](/fr/docs/Web/API/ToggleEvent/newState) {{ReadOnlyInline}}
  - : Une chaîne de caractères (soit `"open"` soit `"closed"`), représentant l'état vers lequel l'élément est en train de transitionner.
- [`ToggleEvent.oldState`](/fr/docs/Web/API/ToggleEvent/oldState) {{ReadOnlyInline}}
  - : Une chaîne de caractères (soit `"open"` soit `"closed"`), représentant l'état depuis lequel l'élément est en train de transitionner.

## Exemples

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Le popover est en train d'être affiché");
  } else {
    console.log("Le popover est en train d'être masqué");
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [L'évènement `beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event)
- [L'évènement `toggle`](/fr/docs/Web/API/HTMLElement/toggle_event)
