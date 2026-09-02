---
title: "ToggleEvent : le constructeur ToggleEvent()"
slug: Web/API/ToggleEvent/ToggleEvent
l10n:
  sourceCommit: 81407b5d512b0429332fda450aa39340493f390d
---

{{APIRef("Popover API")}}

Le constructeur **`ToggleEvent()`** crée un nouvel objet {{domxref("ToggleEvent")}}.

## Syntaxe

```js-nolint
new ToggleEvent(type, init)
```

### Paramètres

- `type`
  - : Une chaîne de caractères représentant le type d'évènement. Dans le cas de `ToggleEvent`, il s'agit toujours de `beforetoggle` ou `"toggle"`.
- `init` {{optional_inline}}
  - : Un objet contenant les propriétés suivantes&nbsp;:
    - `newState` {{optional_inline}}
      - : Une chaîne de caractères représentant l'état vers lequel l'élément est en train de transitionner. Peut être n'importe quelle valeur, mais les évènements déclenchés par le navigateur définissent cette valeur sur `"open"` ou `"closed"`. Par défaut, `""`.
    - `oldState` {{optional_inline}}
      - : Une chaîne de caractères représentant l'état depuis lequel l'élément est en train de transitionner. Peut être n'importe quelle valeur, mais les évènements déclenchés par le navigateur définissent cette valeur sur `"open"` ou `"closed"`. Par défaut, `""`.
    - `source` {{optional_inline}}
      - : Un {{domxref("Element")}} représentant l'élément de contrôle HTML de la fenêtre contextuelle qui a initié le basculement. Par défaut, `null`.

## Exemples

Ce constructeur ne doit généralement pas être utilisé manuellement dans un script. Un nouvel objet `ToggleEvent` est construit automatiquement lorsqu'un gestionnaire est invoqué à la suite du déclenchement d'un évènement pertinent.

Par exemple&nbsp;:

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("La fenêtre contextuelle est en train d'être affichée");
    if (event.source) {
      console.log("Initiée par :", event.source);
    }
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
