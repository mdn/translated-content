---
title: "HTMLElement: événement toggle"
slug: Web/API/HTMLElement/toggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.toggle_event
---

{{APIRef}}

L'événement **`toggle`** de l'interface {{domxref("HTMLElement")}} se déclenche sur un élément {{domxref("Popover_API", "popover", "", "nocode")}} (c'est-à-dire un élément qui a un attribut {{htmlattrdef("popover")}} valide) juste après qu'il ait été affiché ou masqué.

- Si le popover passe de masqué à affiché, la propriété `event.oldState` sera définie sur `closed` et la propriété `event.newState` sera définie sur `open`.
- Si le popover passe d'affiché à masqué, alors `event.oldState` sera `open` et `event.newState` sera `closed`.

> **Note :** L'événement `toggle` se comporte différemment lorsqu'il est déclenché sur les éléments {{htmlelement("details")}}. Dans ce cas, il ne concerne pas les popovers, et se déclenche plutôt lorsque l'état `open`/`closed` d'un élément `<details>` est modifié. Consultez la page {{domxref("HTMLDetailsElement.toggle_event", "toggle event")}} de l'interface {{domxref("HTMLDetailsElement")}} pour plus de détails.

## Syntaxe

Utilisez le nom de l'événement dans des méthodes comme {{domxref("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'événement.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Type d'événement

Un {{domxref("ToggleEvent")}}. Hérite de {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Exemples

### Exemple de base

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Le popover a été affiché");
  } else {
    console.log("Le popover a été masqué");
  }
});
```

### Une note sur l'agrégation des événements de basculement

Il convient de souligner que les événements `toggle` sont agrégés, ce qui signifie que si plusieurs événements `toggle` sont déclenchés avant que la boucle d'événements ait eu la possibilité de s'exécuter, un seul événement sera déclenché.

Par exemple :

```js
popover.addEventListener("toggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `toggle` ne se déclenche qu'une seule fois
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
- Événement associé : [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event).
