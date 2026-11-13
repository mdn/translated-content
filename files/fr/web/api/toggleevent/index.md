---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 2597731017bf54bd583bd533fce1a5fab064b597
---

{{APIRef("Popover API")}}

L'interface **`ToggleEvent`** représente un évènement qui se déclenche lorsqu'un élément de type fenêtre contextuelle est basculé entre l'affichage et la dissimulation.

Ceci est l'objet d'évènement pour les évènements {{DOMxRef("HTMLElement.beforetoggle_event", "beforetoggle")}} et {{DOMxRef("HTMLElement.toggle_event", "toggle")}}, qui se déclenchent sur les éléments comme suit&nbsp;:

- L'évènement `beforetoggle` se déclenche avant que [la fenêtre contextuelle](/fr/docs/Web/API/Popover_API) ou l'élément {{HTMLElement("dialog")}} ne soit affiché ou masqué.
- L'évènement `toggle` se déclenche après que la fenêtre contextuelle, l'élément `<dialog>` ou l'élément {{HTMLElement("details")}} ait été affiché ou masqué.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : Crée un objet `ToggleEvent`.

## Propriétés de l'instance

_Cette interface hérite des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères (soit `"open"` soit `"closed"`), représentant l'état vers lequel l'élément est en train de transitionner.
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères (soit `"open"` soit `"closed"`), représentant l'état depuis lequel l'élément est en train de transitionner.
- {{DOMxRef("ToggleEvent.source")}} {{ReadOnlyInline}}
  - : Une instance d'objet {{DOMxRef("Element")}} représentant le contrôle HTML qui a initié le basculement.

## Exemples

### Exemple simple

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("La fenêtre contextuelle est en train d'être affichée");
  } else {
    console.log("La fenêtre contextuelle est en train d'être masquée");
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
