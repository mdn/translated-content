---
title: "HTMLElement: événement beforetoggle"
slug: Web/API/HTMLElement/beforetoggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.beforetoggle_event
---

{{APIRef}}

L'événement **`beforetoggle`** de l'interface {{domxref("HTMLElement")}} se déclenche sur un élément {{domxref("Popover_API", "popover", "", "nocode")}} (c'est-à-dire un élément qui a un attribut {{htmlattrdef("popover")}} valide) juste avant qu'il ne soit affiché ou masqué.

- Si le popover passe de masqué à affiché, la propriété `event.oldState` sera définie sur `closed` et la propriété `event.newState` sera définie sur `open`.
- Si le popover passe d'affiché à masqué, alors `event.oldState` sera `open` et `event.newState` sera `closed`.

## Syntaxe

Utilisez le nom de l'événement dans des méthodes comme {{domxref("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'événement.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Type d'événement

Un {{domxref("ToggleEvent")}}. Hérite de {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Exemples

### Exemple de base

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

### Une note sur l'agrégation des événements de basculement

Il convient de souligner que les événements `beforetoggle` sont agrégés, ce qui signifie que si plusieurs événements `beforetoggle` sont déclenchés avant que la boucle d'événements ait eu la possibilité de s'exécuter, un seul événement sera déclenché.

Par exemple :

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popup.hidePopover();
// `beforetoggle` ne se déclenche qu'une seule fois
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Popover](/fr/docs/Web/API/Popover_API)
- Événement associé: [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event)
