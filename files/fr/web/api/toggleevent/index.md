---
title: ToggleEvent
slug: Web/API/ToggleEvent
page-type: web-api-interface
browser-compat: api.ToggleEvent
---

{{APIRef("UI Events")}}

L'interface **`ToggleEvent`** représente un évènement notifiant l'utilisateur lorsqu'un élément [popover](/fr/docs/Web/API/Popover_API) change d'état entre visible et masqué.

C'est l'objet d'évènement pour les évènements {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} et {{domxref("HTMLElement.toggle_event", "toggle")}} emis par `HTMLElement`, qui se déclenchent sur les popovers lorsqu'ils changent d'état, visible ou masqué (avant et après, respectivement).

{{InheritanceDiagram}}

> **Note :** `ToggleEvent` n'a aucun rapport avec l'évènement {{domxref("HTMLDetailsElement.toggle_event", "toggle")}} de l'élément {{htmlelement("details")}}, qui se déclenche sur un élément `details` lorsque son état `open`/`closed` change. Son objet d'évènement est un {{domxref("Event")}} générique.

## Constructeur

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : Crée un objet `ToggleEvent`.

## Propriétés de l'instance

_Cette interface hérite des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères (soit `"open"` soit `"closed"`), représentant l'état vers lequel l'élément est en train de transitionner.
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères (soit `"open"` soit `"closed"`), représentant l'état depuis lequel l'élément est en train de transitionner.

## Exemples

### Exemple basique

```js
const popover = document.getElementById("mypopover");

// ...

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
