---
title: "HTMLElement : évènement toggle"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

L'évènement **`toggle`** de l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) se déclenche sur un élément [<i lang="en">popover</i>](/fr/docs/Web/API/Popover_API) (c'est-à-dire un élément qui a un attribut [`popover`](/fr/docs/Web/HTML/Global_attributes/popover) valide) juste après qu'il a été affiché ou masqué.

- Si le <i lang="en">popover</i> passe de masqué à affiché, la propriété `event.oldState` sera définie sur `closed` et la propriété `event.newState` sera définie sur `open`.
- Si le <i lang="en">popover</i> passe d'affiché à masqué, alors `event.oldState` sera `open` et `event.newState` sera `closed`.

> [!NOTE]
> L'évènement `toggle` se comporte différemment lorsqu'il est déclenché sur les éléments [`<details>`](/fr/docs/Web/HTML/Element/details). Dans ce cas, il ne concerne pas les <i lang="en">popovers</i>, et se déclenche plutôt lorsque l'état `open`/`closed` d'un élément `<details>` est modifié. Consultez [la page sur l'évènement `toggle` de `HTMLDetailsElement`](/fr/docs/Web/API/HTMLElement/toggle_event) pour plus de détails.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ou définissez une propriété de gestionnaire d'évènement.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Type d'évènement

[`ToggleEvent`](/fr/docs/Web/API/ToggleEvent). Hérite de [`Event`](/fr/docs/Web/API/Event).

{{InheritanceDiagram("ToggleEvent")}}

## Exemples

```js
const popover = document.getElementById("mypopover");

//…

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Le popover a été affiché");
  } else {
    console.log("Le popover a été masqué");
  }
});
```

## Agrégation des évènements de basculement

Il convient de souligner que les évènements `toggle` sont agrégés, ce qui signifie que si plusieurs évènements `toggle` sont déclenchés avant que la boucle d'évènements ait eu la possibilité de s'exécuter, un seul évènement sera déclenché.

Par exemple&nbsp;:

```js
popover.addEventListener("toggle", () => {
  //…
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
- L'évènement associé&nbsp;: [`beforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event)
