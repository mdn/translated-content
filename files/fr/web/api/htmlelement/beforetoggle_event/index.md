---
title: "HTMLElement : évènement beforetoggle"
slug: Web/API/HTMLElement/beforetoggle_event
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

L'évènement **`beforetoggle`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) se déclenche sur un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) valide) juste avant qu'il ne soit affiché ou masqué.

- Si le <i lang="en">popover</i> passe de masqué à affiché, la propriété `event.oldState` sera définie sur `closed` et la propriété `event.newState` sera définie sur `open`.
- Si le <i lang="en">popover</i> passe d'affiché à masqué, alors `event.oldState` sera définie sur `open` et `event.newState` sera définie sur `closed`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ou définissez une propriété de gestionnaire d'évènement.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Type d'évènement

[`ToggleEvent`](/fr/docs/Web/API/ToggleEvent). Hérite de [`Event`](/fr/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Exemples

```js
const popover = document.getElementById("mypopover");

//…

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Le popover est en train d'être affiché");
  } else {
    console.log("Le popover est en train d'être masqué");
  }
});
```

## Une note sur l'agrégation des évènements de basculement

Il convient de souligner que les évènements `beforetoggle` sont agrégés, ce qui signifie que si plusieurs évènements `beforetoggle` sont déclenchés avant que la boucle d'évènements ait eu la possibilité de s'exécuter, un seul évènement sera déclenché.

Par exemple&nbsp;:

```js
popover.addEventListener("beforetoggle", () => {
  //…
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
- L'évènement associé&nbsp;: [`toggle`](/fr/docs/Web/API/HTMLElement/toggle_event)
